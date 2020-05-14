import { all, fork } from 'redux-saga/effects';

import listMyPharmacyRequest from './listMyPharmacy';

function* myPharmacySagas() {
  yield all([fork(listMyPharmacyRequest)]);
}

export default myPharmacySagas;
