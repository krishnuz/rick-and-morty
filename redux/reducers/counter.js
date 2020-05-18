import { INCREMENT_COUNT } from '../actions/types/counter'

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    default: {
      return state
    }
  }
}

export default counterReducer
