import { all, fork } from 'redux-saga/effects';

import registerUserRequest from './registerUser';

function* registerUserSagas() {
  yield all([fork(registerUserRequest)]);
}

export default registerUserSagas;
