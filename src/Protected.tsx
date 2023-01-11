import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from './redux/store';

interface IProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IProps> = ({ children }): React.ReactElement => {
  const location = useLocation();
  const isAuth = useAppSelector((state) => state.userRoot.user?.email);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
