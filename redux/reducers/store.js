import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './'

const makeStore = () => createStore(rootReducer, composeWithDevTools())
export const wrapper = createWrapper(makeStore, { debug: true })
