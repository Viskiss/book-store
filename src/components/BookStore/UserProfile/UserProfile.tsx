import { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import {
  changeUserThunk,
  uploadAvatarUserThunk,
} from '../../../redux/userStore/userThunks';

import Input from '../../components/Input/Input';
import PasswordProfile from './component/PasswordProfile';
import Button from '../../components/Button/RoundButton.styles';
import ButtonSimple from '../../components/Button/Button.styles';

import defaultPhoto from './images/User photo.svg';
import imgUser from './images/User.svg';
import mail from './images/Mail.svg';
import camera from './images/Camera.svg';

import Styles from './UserProfile.styles';
import MyDropzone from './component/ImageUpload';
import { handleApiValidationError } from '../../../utils/apiValidationError';

const UserProfile: React.FC = () => {
  const [activeInput, setActiveInput] = useState(true);

  const success = useAppSelector((store) => store.userRoot.changeUserSuccess);
  const user = useAppSelector((store) => store.userRoot.user);

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
      setActiveInput(false);
    }
  };

  const dispatch = useAppDispatch();

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
    'success-input': success && !formik.errors.email,
  });

  const stylesInputFullname = classNames({
    'form-input': true,
    'error-input': formik.touched.fullName ? formik.errors.fullName : undefined,
    'success-input': success && !formik.errors.fullName,
  });

  const uploadFiles = (file: File) => {
    dispatch(uploadAvatarUserThunk(file));
  };

  return (
    <Styles>
      <div className="img-profile">
        <img className="user-photo" src={user?.avatar || defaultPhoto} alt="" />
        <div className="load-avatar">
          <MyDropzone ovsdlkgfs={uploadFiles} name="avatar" />
          <Button>
            <img src={camera} alt="" />
          </Button>
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
              disabled={activeInput}
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
              disabled={activeInput}
              img={mail}
              placeholder="Email"
              errors={formik.touched.email ? formik.errors.email : undefined}
              touched={`${formik.touched.email}` || ''}
              {...formik.getFieldProps('email')}
            />
          </div>
          {!activeInput ? (
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
