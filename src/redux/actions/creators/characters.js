import { FETCH_DATA } from '../../../constants/actions'
import { FETCH_CHARACTERS } from '../types/characters'

export const fetchCharacters = ({ url }) => ({
  type: FETCH_DATA,
  name: FETCH_CHARACTERS,
  url,
})
