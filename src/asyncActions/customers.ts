import { Dispatch } from 'redux';
import { addManyCustomersAction, CustomerAction } from '../store/reducers/customerReducer';

export const fetchCustomers = () => {
  return async (dispatch: Dispatch<CustomerAction>) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomersAction(json)));
  };
};
