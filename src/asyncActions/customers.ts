import { Dispatch } from 'redux';
import { addManyCustomersAction, UserAction } from '../store/customerReducer';

export const fetchCustomers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomersAction(json)));
  };
};
