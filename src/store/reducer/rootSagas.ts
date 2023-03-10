import {all, fork} from 'redux-saga/effects';
import deckSagas from './deck/sagas';

export function* rootSaga() {
  yield all([fork(deckSagas)]);
}
