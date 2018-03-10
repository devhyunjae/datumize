import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants/users'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: payload,
        error: null,
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: payload,
      }
    default:
      return state
  }
}
