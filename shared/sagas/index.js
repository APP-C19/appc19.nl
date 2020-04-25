import { all } from 'redux-saga/effects';
import routerChangeSaga from './routerChangeSaga';
import windowResizeSaga from './windowResizeSaga';

function* rootSaga() {
  yield all([routerChangeSaga(), windowResizeSaga()]);
}

export default rootSaga;
