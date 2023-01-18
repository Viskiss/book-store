import type { MouseEvent } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import {
  changeUserThunk,
  uploadAvatarUserThunk,
} from '../../../redux/userStore/thunks/updateUser';

import Input from '../../components/Input/Input';
import PasswordProfile from './component/PasswordProfile';
import Button from '../../components/Button/RoundButton.styles';
import ButtonSimple from '../../components/Button/Button.styles';

import defaultPhoto from './images/User photo.svg';
import imgUser from './images/User.svg';
import mail from './images/Mail.svg';
import camera from './images/Camera.svg';

import Styles from './UserProfile.styles';

import { userSliceActions } from '../../../redux/userStore/userSlice';
import handleApiValidationError from '../../../utils/handleApiValidationError';

const UserProfile: React.FC = () => {
  const [changeUser, setChangeUser] = useState(true);
  const navigate = useNavigate();

  const user = useAppSelector((store) => store.userStore.user);
  const dispatch = useAppDispatch();

  let userId = 0;

  if (user) {
    userId = user.id;
  }

  const changeDataHandler = (
    type: string,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    if (type === 'userData') {
      setChangeUser(true);
    }
    if (changeUser === true) {
      setChangeUser(false);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: user?.fullName || '',
      email: user?.email || '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().trim().min(5, 'The fullName is too short(min 5)'),
      email: Yup.string()
        .email('Email must be a valid email')
        .min(10, 'Min 10 length, Ex: 123@mail.ru')
        .required(),
    }),
    onSubmit: async (values) => {
      const { fullName, email } = values;
      await dispatch(changeUserThunk({ fullName, email, id: userId }))
        .unwrap()
        .then(() => {
          toast.success('User changed');
        })
        .catch(
          (error: {
            error: Array<{ key: string; path: string; message: string }>;
            message: string;
          }) => {
            if (error?.error && error.message === 'ValidationError') {
              handleApiValidationError(error.error, formik.setErrors);
            } else {
              toast.error(error.message);
            }
          },
        );
    },
  });

  const stylesInputEmail = classNames({
    'form-input': true,
    'error-input': formik.touched.email ? formik.errors.email : undefined,
  });

  const stylesInputFullname = classNames({
    'form-input': true,
    'error-input': formik.touched.fullName ? formik.errors.fullName : undefined,
  });

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selectedFile[0]);
      fileReader.onload = async () => {
        try {
          await dispatch(
            uploadAvatarUserThunk(fileReader.result as string),
          );
        } catch (err) {
          const error = err as Error;
          return toast.error(error.message);
        }
      };
    }
  };

  const exitUserHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (user) {
      dispatch(userSliceActions.exitUser('exit'));
      navigate('/');
    }
  };

  return (
    <Styles>
      <div className="img-profile">
        <img className="user-photo" src={user?.avatar || defaultPhoto} alt="" />
        <div className="load-avatar">
        <div className="drop-box">
      <input type="file" onChange={(e) => uploadPhoto(e)} />
        </div>
          <Button className="add-avatar">
            <img src={camera} alt="" />
          </Button>
        </div>
        <div className="exit-box"><button onClick={(e) => (exitUserHandler(e))}>Exit</button></div>
      </div>
      <div>
        <form className="form-user-data" onSubmit={formik.handleSubmit}>
          <div className="user-change_preview">
            <h3>Personal information</h3>
            <a onClick={(e) => changeDataHandler('userData', e)} href="">
              Change information
            </a>
          </div>
          <div className="data-box">
            <label>Your name</label>
            <Input
              disabled={changeUser}
              classStyles={stylesInputFullname}
              img={imgUser}
              placeholder="Name"
              errors={
                formik.touched.fullName ? formik.errors.fullName : undefined
              }
              touched={`${formik.touched.fullName}` || ''}
              {...formik.getFieldProps('fullName')}
            />
          </div>
          <div className="data-box">
            <label>Your email</label>
            <Input
              classStyles={stylesInputEmail}
              disabled={changeUser}
              img={mail}
              placeholder="Email"
              errors={formik.touched.email ? formik.errors.email : undefined}
              touched={`${formik.touched.email}` || ''}
              {...formik.getFieldProps('email')}
            />
          </div>
          {!changeUser ? (
            <ButtonSimple className="simple-button" type="submit">
              Confirm
            </ButtonSimple>
          ) : null}
        </form>
        <PasswordProfile />
      </div>
    </Styles>
  );
};

export default UserProfile;
