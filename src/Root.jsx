import React from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router';
import App from './App';
import Foote from './components/footer/Foote';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Foote></Foote>

    </div>
  );
};

export default Root;