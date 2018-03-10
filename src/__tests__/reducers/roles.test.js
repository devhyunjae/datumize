import reducer from '../../reducers/roles'
import {
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from '../../constants/roles'

describe('roles reducer', () => {
  it('handles FETCH_ROLES_SUCCESS', () => {
    // given
    const fetchedRoles = [
      { id: 1, name: 'role 1' },
      { id: 2, name: 'role 2' },
    ]
    // when
    const result = reducer(undefined, { payload: fetchedRoles, type: FETCH_ROLES_SUCCESS })
    // then
    expect(result).toEqual({
      roles: fetchedRoles,
      loading: false,
      error: null,
    })
  })

  it('handles FETCH_ROLES_FAILURE', () => {
    // given
    const errorMessage = 'Server is down!'
    // when
    const result = reducer(undefined, { payload: errorMessage, type: FETCH_ROLES_FAILURE })
    // then
    expect(result).toEqual({
      roles: [],
      loading: false,
      error: errorMessage,
    })
  })
})
