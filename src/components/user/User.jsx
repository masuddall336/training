
import DisplayUser from './DisplayUser';

const allUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
const User = () => {
  return (
    <div>
      <DisplayUser users={allUsers}></DisplayUser>
    </div>
  );
};

export default User;