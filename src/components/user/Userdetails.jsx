import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Userdetails = () => {
  let takeDatas = useLoaderData();
  console.log(takeDatas.address);
  let { streem, suite, zipcode } = takeDatas.address;
  let back = useNavigate()

  return (
    <div className='text-center'>
      <h2>User Details</h2>
      <div className='bg-amber-300'>
        <p>{suite}</p>
        <p>{streem}</p>
        <p>{zipcode}</p>
      </div>
      <button onClick={() => back(-1)}>Go Back</button>
    </div>
  );
};

export default Userdetails;