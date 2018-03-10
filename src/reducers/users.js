import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../constants/users'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const updateUserSuccessStates = (state, payload) => {
  const { user, project, role } = payload
  const successMessage = `${user.name} has been assigned to ${project.name} project as a ${role.name}`
  return {
    ...state,
    success: successMessage,
  }
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
    case UPDATE_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: payload,
      }
    case UPDATE_USER_SUCCESS:
      return updateUserSuccessStates(state, payload)
    default:
      return state
  }
}
