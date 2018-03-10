import { combineReducers } from 'redux'
import users from './users'
import projects from './projects'
import roles from './roles'

export default combineReducers({
  projects,
  users,
  roles,
})
