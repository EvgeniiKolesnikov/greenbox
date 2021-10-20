import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

export const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const cash = useSelector((state: RootState) => state.cash.cash);
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );
  console.log(cash);

  const addCash = (cash: number) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash: number) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name: string) => {
    const customer = { name, id: Date.now() };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer: { name: string; id: any }) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(title);
    }
  };

  return (
    <div className='App'>
      <div>Greenbox</div>
      <input
        type='text'
        id='title'
        value={title}
        placeholder='add some text'
        onChange={changeHandler}
        onKeyPress={onKeyPress}
      />

      <div className='cash'>cash: {cash}</div>
      <div onClick={() => addCash(Number(prompt()))}>add Cash</div>
      <div onClick={() => getCash(Number(prompt()))}>get Cash</div>
      <div onClick={() => addCustomer(String(prompt()))}>add Customer</div>
      <div onClick={() => dispatch<any>(fetchCustomers())}>
        Get users from json
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)} key={customer.id}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </div>
  );
};
