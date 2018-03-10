import * as api from '../api/roles'
import {
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from '../constants/roles'

const fetchRolesSuccess = payload => ({
  type: FETCH_ROLES_SUCCESS,
  payload,
})

const fetchRolesFailure = error => ({
  type: FETCH_ROLES_FAILURE,
  error,
})

const fetchRoles = () => (dispatch) => {
  return api.fetchRoles()
    .then(roles => dispatch(fetchRolesSuccess(roles)))
    .catch(error => dispatch(fetchRolesFailure(error)))
}

export { fetchRoles }
