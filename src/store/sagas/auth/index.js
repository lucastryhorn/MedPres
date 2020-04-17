import { all, fork } from 'redux-saga/effects';

import userLoadRequest from './loadUser';
import loginUserRequest from './loginUser';

function* authSagas() {
  yield all([fork(userLoadRequest), fork(loginUserRequest)]);
}

export default authSagas;
