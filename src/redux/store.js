import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

export default store;
