import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import registerUserSagas from './registerUser';

function* rootSaga() {
  yield all([fork(authSagas), fork(registerUserSagas)]);
}

export default rootSaga;
