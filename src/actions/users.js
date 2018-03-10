import * as api from '../api/users'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants/users'

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
})

const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload,
})

const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  error,
})

const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest())

  return api.fetchUsers()
    .then(users => dispatch(fetchUsersSuccess(users)))
    .catch(error => dispatch(fetchUsersFailure(error)))
}

export { fetchUsers }
