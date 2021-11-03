import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });

      // const response = await fetch(url)
      //   .then((response) => response.json())
      //   .then((data) => dispatch({
      //     type: UserActionTypes.FETCH_USERS_SUCCESS,
      //     payload: data,
      //   }));

      const response = await axios.get<object[]>(url);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
