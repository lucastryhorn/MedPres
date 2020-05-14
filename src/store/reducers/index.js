import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import prescriptions from './prescriptions';
import presentation from './presentation';
import myPharmacy from './myPharmacy';

export default combineReducers({
  auth,
  register,
  prescriptions,
  presentation,
  myPharmacy,
});
