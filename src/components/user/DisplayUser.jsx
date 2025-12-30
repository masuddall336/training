import React, { use } from 'react';
import ShowUsers from './ShowUsers';

const DisplayUser = ({ users }) => {
  let take_user = use(users)
  console.log(take_user);

  return (
    <div className='grid grid-cols-3 gap-3 mx-5'>
      {
        take_user.map(single_user=> <ShowUsers singelUsers={single_user}></ShowUsers>)
      }

    </div>
  );
};

export default DisplayUser;