import reducer from '../../reducers/users'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../../constants/users'

describe('users reducer', () => {
  it('handles FETCH_USERS_SUCCESS', () => {
    // given
    const fetchedUsers = [
      { id: 1, name: 'test01' },
      { id: 2, name: 'test02' },
    ]
    // when
    const result = reducer(undefined, { payload: fetchedUsers, type: FETCH_USERS_SUCCESS })
    // then
    expect(result).toEqual({
      users: fetchedUsers,
      loading: false,
      error: null,
    })
  })

  it('handles FETCH_USERS_FAILURE', () => {
    // given
    const errorMessage = 'Server is down!'
    // when
    const result = reducer(undefined, { payload: errorMessage, type: FETCH_USERS_FAILURE })
    // then
    expect(result).toEqual({
      users: [],
      loading: false,
      error: errorMessage,
    })
  })
})
