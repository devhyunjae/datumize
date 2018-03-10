import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../constants/projects'

const initialState = {
  projects: [],
  loading: false,
  error: null,
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        loading: false,
        projects: payload,
        error: null,
      }
    case FETCH_PROJECTS_FAILURE:
      return {
        loading: false,
        projects: [],
        error: payload,
      }
    default:
      return state
  }
}
