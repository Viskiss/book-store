import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import imgUser from './images/User.svg';
import mail from './images/Mail.svg';
import camera from './images/Camera.svg';
import defaultPhoto from './images/User photo.svg';
import Styles from './UserProfile.styles';
import Input from '../../auxiliaryComponents/Input';
import PasswordProfile from './component';
import { changeUserSchema } from '../../../validation/schemas';
import { changeUserThunk } from '../../../redux/userStore/userThunks';
import Button from '../../auxiliaryComponents/Button/RoundButton.styles';
import ButtonSimple from '../../auxiliaryComponents/Button/Button.styles';

const UserProfile: React.FC = () => {
  const [activeInput, setActiveInput] = useState(true);
  const [email, setEmail] = useState('****@mail.com');
  const [fullName, setFullName] = useState('Add Name');
  let userId = 0;
  let userEmail = '';
  let userFullName = '';

  const user = useAppSelector((store) => store.userRoot.user);
  if (user) {
    userId = user.id;
    userEmail = user.email;
    userFullName = user.fullName;
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
      fullName: fullName || 'Add Name',
      email: email || 'Ex:****@mail.com',
    },
    validationSchema: changeUserSchema,
    onSubmit: async (values) => {
      const { fullName, email } = values;
      await dispatch(changeUserThunk({ fullName, email, id: userId }));
    },
  });

  useEffect(() => {
    setEmail(userEmail); setFullName(userFullName);
  }, [user, userEmail, userFullName]);

  return (
    <Styles>
      <div className="img-profile_box">
        <div className="img-profile">
          <img className="user-photo" src={defaultPhoto} alt="" />
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
              classStyles="search-input"
              img={imgUser}
              placeholder="Name"
              errors={formik.errors.fullName}
              touched={formik.touched.fullName}
              {...formik.getFieldProps('fullName')}
            />
          </div>
          <div className="data-box">
            <label>Your email</label>
            <Input
            classStyles="search-input"
              disabled={activeInput}
              img={mail}
              type="email"
              placeholder="Email"
              errors={formik.errors.email}
              touched={formik.touched.email}
              {...formik.getFieldProps('email')}
            />
          </div>
        <ButtonSimple className="simple-button" type="submit">
          Confirm
        </ButtonSimple>
        </form>
        <PasswordProfile />
      </div>
    </Styles>
  );
};

export default UserProfile;
