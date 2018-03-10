import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/roles'
import * as api from '../../api/roles'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('role actions', () => {
  describe('when fetching roles', () => {
    it('dispatches FETCH_ROLES_SUCCESS', () => {
      // given
      api.fetchRoles = jest.fn(() => (Promise.resolve({ id: 1, name: 'CEO Role' })))
      const expected = [{ type: 'FETCH_ROLES_SUCCESS', payload: { id: 1, name: 'CEO Role' } }]

      // when
      const store = mockStore({ roles: [] })
      return store.dispatch(actions.fetchRoles())
        .then(() => {
          // then
          expect(store.getActions()).toEqual(expected)
        })
    })
  })
})
