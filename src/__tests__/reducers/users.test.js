import reducer from '../../reducers/users'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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

  it('handles UPDATE_USER_SUCCESS', () => {
    // given
    const payload = {
      user: { id: 1, name: 'Steve Jobs' },
      project: { id: 1, name: 'iPhone 20' },
      role: { id: 1, name: 'CEO' },
    }
    const expectSuccessMessage = 'Steve Jobs has been assigned to iPhone 20 project as a CEO'
    // when
    const result = reducer(undefined, { payload, type: UPDATE_USER_SUCCESS })
    // then
    expect(result).toEqual({
      users: [],
      loading: false,
      error: null,
      success: expectSuccessMessage,
    })
  })

  it('handles UPDATE_USER_FAILURE', () => {
    // given
    const errorMessage = 'Server is down again!!'
    // when
    const result = reducer(undefined, { payload: errorMessage, type: UPDATE_USER_FAILURE })
    // then
    expect(result).toEqual({
      users: [],
      loading: false,
      error: errorMessage,
    })
  })
})
