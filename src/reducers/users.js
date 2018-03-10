import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_SUCCESS_MESSAGE,
} from '../constants/users'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const updateUserProjects = (state, payload, clonedUsers) => {
  const { user, project, role } = payload

  const foundUser = clonedUsers.find(u => u.id === user.id)

  if (foundUser.projects && foundUser.projects.length > 0) {
    const foundProjects = foundUser.projects.filter(p => p.id !== project.id)
    foundProjects.push(Object.assign(project, { role }))
    foundUser.projects = foundProjects
  } else {
    foundUser.projects = [Object.assign(project, { role })]
  }
}

const updateUserSuccessStates = (state, payload) => {
  const { user, project, role } = payload
  const { users } = state
  const clonedUsers = users.slice()

  // Note: In real world, this logic should be done in the back-end.
  // Because this app is using mock api response, it will be here for temp.
  updateUserProjects(state, payload, clonedUsers)

  const successMessage = `${user.name} has been assigned to ${project.name} project as a ${role.name}`
  return {
    ...state,
    users: clonedUsers,
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
    case RESET_SUCCESS_MESSAGE:
      return {
        ...state,
        success: null,
      }
    default:
      return state
  }
}
