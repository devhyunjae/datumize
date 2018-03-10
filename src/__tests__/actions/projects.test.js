import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/projects'
import * as api from '../../api/projects'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('project actions', () => {
  describe('when fetching projects', () => {
    it('dispatches FETCH_USERS_SUCCESS', () => {
      // given
      api.fetchProjects = jest.fn(() => (Promise.resolve({ id: 1, name: 'Datumize Awesome Project' })))
      const expected = [{ type: 'FETCH_PROJECTS_SUCCESS', payload: { id: 1, name: 'Datumize Awesome Project' } }]

      // when
      const store = mockStore({ projects: [] })
      return store.dispatch(actions.fetchProjects())
        .then(() => {
          // then
          expect(store.getActions()).toEqual(expected)
        })
    })
  })
})
