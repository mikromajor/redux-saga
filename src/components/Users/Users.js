import { User } from "./User";
const Users = ({ users }) => {
  return (
    <div className='users'>
      {users?.length ? (
        users.map((user, i) => <User key={i} user={user} />)
      ) : (
        <div>no users</div>
      )}
    </div>
  );
};
export default Users;
