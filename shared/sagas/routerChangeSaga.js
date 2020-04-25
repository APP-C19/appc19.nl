import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import Router from 'next/router';
import { setToggleMenu } from './../actions';

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

const createRouterChannel = () =>
  eventChannel(emit => {
    const changeHandler = event => {
      emit(event);
    };

    Router.events.on('routeChangeComplete', changeHandler);

    const unsubscribe = () => {
      Router.events.off('routeChangeComplete', changeHandler);
    };
    return unsubscribe;
  });

export default function* watchRouterChange() {
  if (isBrowser) {
    const routerChannel = yield call(createRouterChannel);
    while (true) {
      yield take(routerChannel);
      yield put(setToggleMenu());
    }
  }
}
