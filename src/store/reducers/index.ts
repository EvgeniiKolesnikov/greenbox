import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  todo: todoReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
