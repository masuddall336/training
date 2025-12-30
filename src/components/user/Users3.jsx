import React, { use } from 'react';

const Users3 = ({users}) => {
  let user = use(users);
  console.log(user);
  
  return (
    <div className='text-center'>
      <h2>users3</h2>
    </div>
  );
};

export default Users3;