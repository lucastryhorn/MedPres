import { all, fork } from 'redux-saga/effects';

import presentationCompleteRequest from './presentationComplete';
import presentationRequest from './presentation';

function* presentationSagas() {
  yield all([fork(presentationCompleteRequest), fork(presentationRequest)]);
}

export default presentationSagas;
