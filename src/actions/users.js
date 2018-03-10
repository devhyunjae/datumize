import * as api from '../api/users'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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

const updateUserSuccess = payload => ({
  type: UPDATE_USER_SUCCESS,
  payload,
})

const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  error,
})

const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest())

  return api.fetchUsers()
    .then(users => dispatch(fetchUsersSuccess(users)))
    .catch(error => dispatch(fetchUsersFailure(error)))
}

const updateUser = params => dispatch => api.updateUser(params)
  .then(() => dispatch(updateUserSuccess(params)))
  .catch(error => dispatch(updateUserFailure(error)))

export { fetchUsers, updateUser }
