const defaultState = {
  customers: <any>[],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

export const customerReducer = (
  state = defaultState,
  action: { type: string; payload: { name: string; id: any } }
) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload]}
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer: { id: { name: string; id: any } }) =>
            customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload: any) => ({
  type: ADD_CUSTOMER,
  payload,
});

export const addManyCustomersAction = (payload: any) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});

export const removeCustomerAction = (payload: any) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});