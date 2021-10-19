import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


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
  const removeCustomer = (customer: { name?: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; id?: any; }) => {
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

    <div onClick={() => addCash(Number(prompt()))}>addCash</div>
    <div onClick={() => getCash(Number(prompt()))}>getCash</div>
    <div onClick={() => addCustomer(String(prompt()))}>addCustomer</div>
    {/* <div onClick={() => removeCustomers(String(prompt()))}>delCustomer</div> */}
    {customers.length > 0 ? (
      <div>
        {customers.map(
          (customer: {
            name:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            id: number
          }) => (
            <div onClick={() => removeCustomer(customer)} key={customer.id}>
              {customer.name}
            </div>
          )
        )}
      </div>
    ) : (
      <div>No customers</div>
    )}
  </div>
  );
};
