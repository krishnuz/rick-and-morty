import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import apiMiddleware from './middleware/apiMiddleware'

import rootReducer from './reducers'

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const makeStore = () =>
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware))
  )
export const wrapper = createWrapper(makeStore, { debug: true })
