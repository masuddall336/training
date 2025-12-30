import React from 'react';
import { useLoaderData } from 'react-router';

const User2 = () => {
  let useData = useLoaderData();
  console.log(useData);
  
  return (
    <div className='mx-auto text-center'>
      <h2>User-2</h2>
    </div>
  );
};

export default User2;