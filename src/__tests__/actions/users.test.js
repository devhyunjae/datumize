import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/users'
import * as api from '../../api/users'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('user actions', () => {
  describe('when fetching users', () => {
    it('dispatches FETCH_USERS_REQUEST and FETCH_USERS_SUCCESS', () => {
      // given
      api.fetchUsers = jest.fn(() => (Promise.resolve({ id: 1, name: 'Hello Datumize' })))
      const expected = [{ type: 'FETCH_USERS_REQUEST' }, { type: 'FETCH_USERS_SUCCESS', payload: { id: 1, name: 'Hello Datumize' } }]

      // when
      const store = mockStore({ users: [] })
      return store.dispatch(actions.fetchUsers())
        .then(() => {
          // then
          expect(store.getActions()).toEqual(expected)
        })
    })
  })
})
