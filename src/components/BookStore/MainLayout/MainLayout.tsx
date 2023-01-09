import React from 'react';

import Footer from './Footer';
import Header from './Header';

import StylesMain from './MainLayout.styles';

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <Header />
      <StylesMain>
      {props.children}
      </StylesMain>
      <Footer />
    </>
  );
};

export default Main;
