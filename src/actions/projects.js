import * as api from '../api/projects'
import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../constants/projects'

const fetchProjectsSuccess = payload => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload,
})

const fetchProjectsFailure = error => ({
  type: FETCH_PROJECTS_FAILURE,
  error,
})

const fetchProjects = () => dispatch => api.fetchProjects()
  .then(projects => dispatch(fetchProjectsSuccess(projects)))
  .catch(error => dispatch(fetchProjectsFailure(error)))

export { fetchProjects }
