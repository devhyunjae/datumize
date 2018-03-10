import {
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from '../constants/roles'

const initialState = {
  roles: [],
  loading: false,
  error: null,
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_ROLES_SUCCESS:
      return {
        loading: false,
        roles: payload,
        error: null,
      }
    case FETCH_ROLES_FAILURE:
      return {
        loading: false,
        roles: [],
        error: payload,
      }
    default:
      return state
  }
}
