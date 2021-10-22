import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

export const UserList: FC = () => {
  // const state = useSelector(state => state)
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error...</h1>;
  }

  console.log('users: ', users);
  console.log('loading: ', loading);
  console.log('error: ', error);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
