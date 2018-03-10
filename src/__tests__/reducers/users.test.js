import reducer from '../../reducers/users'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_SUCCESS_MESSAGE,
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

  it('handles UPDATE_USER_SUCCESS when projects not exists', () => {
    // given
    const users = [{ id: 1, name: 'Steve Jobs' }]
    const payload = {
      user: { id: 1, name: 'Steve Jobs' },
      project: { id: 1, name: 'iPhone 20' },
      role: { id: 1, name: 'CEO' },
    }
    const expectSuccessMessage = 'Steve Jobs has been assigned to iPhone 20 project as a CEO'
    // when
    const result = reducer({
      users,
      error: null,
      loading: false,
    }, {
      payload,
      type: UPDATE_USER_SUCCESS,
    })
    // then
    expect(result).toEqual({
      users: [{
        id: 1,
        name: 'Steve Jobs',
        projects: [{
          id: 1,
          name: 'iPhone 20',
          role: {
            id: 1,
            name: 'CEO',
          },
        }],
      }],
      loading: false,
      error: null,
      success: expectSuccessMessage,
    })
  })

  it('handles UPDATE_USER_SUCCESS when projects field exists', () => {
    // given
    const users = [{
      id: 1,
      name: 'Steve Jobs',
      projects: [{
        id: 1,
        name: 'iPhone 20',
        role: { id: 2, name: 'Intern' },
      }, {
        id: 2,
        name: 'Macbook Ultra',
        role: { id: 1, name: 'CEO' },
      }],
    }]
    const payload = {
      user: { id: 1, name: 'Steve Jobs' },
      project: { id: 1, name: 'iPhone 20' },
      role: { id: 3, name: 'Surfer' },
    }
    const expectSuccessMessage = 'Steve Jobs has been assigned to iPhone 20 project as a Surfer'
    // when
    const result = reducer({
      users,
      error: null,
      loading: false,
    }, {
      payload,
      type: UPDATE_USER_SUCCESS,
    })
    // then
    expect(result).toEqual({
      users: [{
        id: 1,
        name: 'Steve Jobs',
        projects: [{
          id: 2,
          name: 'Macbook Ultra',
          role: { id: 1, name: 'CEO' },
        }, {
          id: 1,
          name: 'iPhone 20',
          role: {
            id: 3,
            name: 'Surfer',
          },
        }],
      }],
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

  it('handles RESET_SUCCESS_MESSAGE', () => {
    const givenState = {
      users: [],
      loading: false,
      error: null,
      success: 'Update Success!',
    }

    // when
    const result = reducer(givenState, { payload: undefined, type: RESET_SUCCESS_MESSAGE })
    // then
    expect(result).toEqual({
      users: [],
      loading: false,
      error: null,
      success: null,
    })
  })
})
