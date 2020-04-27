import { all, fork } from 'redux-saga/effects';

import apresentationCompleteRequest from './apresentationComplete';

function* apresentationSagas() {
  yield all([fork(apresentationCompleteRequest)]);
}

export default apresentationSagas;
