import React from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Main;
