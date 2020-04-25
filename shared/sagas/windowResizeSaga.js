import { take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { setToggleMenu } from './../actions';
import theme from './../theme';

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

let windowResizeListener;

const createWindowResizeChannel = () =>
  eventChannel(emit => {
    const changeHandler = () => {
      emit(window.innerWidth);
    };

    window.addEventListener('resize', changeHandler);

    const unsubscribe = () => {
      window.removeEventListener('resize', changeHandler);
    };
    return unsubscribe;
  });

export default function* watchResizeWindow() {
  if (isBrowser) {
    if (!windowResizeListener) {
      windowResizeListener = yield call(createWindowResizeChannel);
    }
    while (true) {
      const width = yield take(windowResizeListener);
      if (width > theme.breakpoints.xs.max) {
        yield put(setToggleMenu(false));
      }
    }
  }
}
