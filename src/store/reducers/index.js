import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import prescriptions from './prescriptions';
import apresentation from './apresentation';

export default combineReducers({
  auth,
  register,
  prescriptions,
  apresentation,
});
