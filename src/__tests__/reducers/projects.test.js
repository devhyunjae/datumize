import reducer from '../../reducers/projects'
import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../../constants/projects'

describe('projects reducer', () => {
  it('handles FETCH_PROJECTS_SUCCESS', () => {
    // given
    const fetchedProjects = [
      { id: 1, name: 'test01' },
      { id: 2, name: 'test02' },
    ]
    // when
    const result = reducer(undefined, { payload: fetchedProjects, type: FETCH_PROJECTS_SUCCESS })
    // then
    expect(result).toEqual({
      projects: fetchedProjects,
      loading: false,
      error: null,
    })
  })

  it('handles FETCH_USERS_FAILURE', () => {
    // given
    const errorMessage = 'Server is down!'
    // when
    const result = reducer(undefined, { payload: errorMessage, type: FETCH_PROJECTS_FAILURE })
    // then
    expect(result).toEqual({
      projects: [],
      loading: false,
      error: errorMessage,
    })
  })
})
