import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import prescriptions from './prescriptions';

export default combineReducers({ auth, register, prescriptions });
