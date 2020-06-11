import { FETCH_DATA } from '../constants/actions'
import { FETCH_CHARACTERS } from '../constants/actionTypes/characters'
import { CHARACTERS_LIST_ENDPOINT } from '../constants/endpoints'

export const fetchCharacters = ({ name, species, gender } = {}) => {
  let apiUrl = CHARACTERS_LIST_ENDPOINT
  // adding query
  if (name || species || gender) {
    apiUrl = `${apiUrl}?`
    if (name) {
      apiUrl = `${apiUrl}name=${name}&`
    }
    if (species) {
      apiUrl = `${apiUrl}species=${species}&`
    }
    if (gender) {
      apiUrl = `${apiUrl}gender=${gender}&`
    }
    apiUrl = apiUrl.slice(0, -1)
  }
  return {
    type: FETCH_DATA,
    name: FETCH_CHARACTERS,
    url: apiUrl,
  }
}
