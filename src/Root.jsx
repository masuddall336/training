import React from 'react';
import Header from './components/header/Header';
import { Outlet, useNavigation } from 'react-router';
import App from './App';
import Foote from './components/footer/Foote';


const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      {isNavigating && <span className="loading loading-bars loading-md">Loading....</span>}
      <Outlet />
      <Foote></Foote>

    </div>
  );
};

export default Root;