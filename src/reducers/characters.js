import { HYDRATE } from 'next-redux-wrapper'
import {
  FETCH_CHARACTERS_INIT,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from '../constants/actionTypes/characters'

const initialState = {
  isFetching: false,
  data: null,
  error: null,
}

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      return {
        ...state,
        ...payload.characters,
      }
    }
    case FETCH_CHARACTERS_INIT: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case FETCH_CHARACTERS_SUCCESS: {
      const { data } = payload
      return {
        ...state,
        isFetching: false,
        data,
        error: null,
      }
    }
    case FETCH_CHARACTERS_ERROR: {
      const { error } = payload
      return {
        ...state,
        isFetching: false,
        data: null,
        error,
      }
    }
    default: {
      return state
    }
  }
}

export default charactersReducer
