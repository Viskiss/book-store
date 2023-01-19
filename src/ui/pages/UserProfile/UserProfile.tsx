import type { MouseEvent } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Input from 'ui/components/Input/Input';
import Button from 'ui/components/Button/RoundButton.styles';
import ButtonSimple from 'ui/components/Button/Button.styles';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { userSliceActions } from 'redux/userStore/userSlice';
import {
  changeUserThunk,
  uploadAvatarUserThunk,
} from 'redux/userStore/thunks/updateUser';
import { validFields } from 'utils/yupValid';
import handleApiValidationError from 'utils/handleApiValidationError';
import tokenHelper from 'utils/tokenHelper';

import mail from 'ui/assets/images/Mail.svg';
import camera from 'ui/assets/images/Camera.svg';
import imgUser from 'ui/assets/images/User.svg';

import PasswordProfile from './component/PasswordProfile';

import defaultPhoto from './images/UserPhoto.svg';

import StyledUserProfile from './UserProfile.styles';

const UserProfile: React.FC = () => {
  const [changeUser, setChangeUser] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userStore.user);

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
      email: validFields.email,
      fullName: validFields.fullName,
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
          await dispatch(uploadAvatarUserThunk(fileReader.result as string));
        } catch (err) {
          const error = err as Error;
          return toast.error(error.message);
        }
      };
    }
  };

  const exitUserHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    if (user) {
      tokenHelper.token.remove();
      dispatch(userSliceActions.exitUser(1));
      navigate('/');
    }
  };

  return (
    <StyledUserProfile>
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
        <div className="exit-box">
          <button onClick={(e) => exitUserHandler(e)}>Exit</button>
        </div>
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
    </StyledUserProfile>
  );
};

export default UserProfile;
