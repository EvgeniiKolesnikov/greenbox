import { FC } from 'react';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: FC = () => {
  // const state = useSelector(state => state)
  const { users, loading, error } = useTypedSelector((state) => state.user);

  console.log('users: ', users);
  console.log('loading: ', loading);
  console.log('error: ', error);

  return <div></div>;
};
