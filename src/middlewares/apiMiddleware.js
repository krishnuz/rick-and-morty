import { FETCH_DATA } from '../constants/actions'

const apiMiddleware = () => next => async action => {
  if (action.type === FETCH_DATA) {
    const { url, name: actionName } = action
    next({
      type: `${actionName}_INIT`,
    })
    await fetch(url)
      .then(response => response.json())
      .then(response => {
        next({
          type: `${actionName}_SUCCESS`,
          payload: {
            data: response,
          },
        })
      })
      .catch(err => {
        next({
          type: `${actionName}_ERROR`,
          payload: {
            error: err,
          },
        })
      })
  } else {
    next(action)
  }
}

export default apiMiddleware
