import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import Form from '../../../components/Assignment/Form'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(
  {
    users: {
      users: [{
        id: 1, name: 'John Doe',
      }],
    },
    projects: {
      projects: [{
        id: 1, name: 'Surf House in Canary Island',
      }],
    },
    roles: {
      roles: [{
        id: 1, name: 'CEO',
      }],
    },
  },
)

describe('<Form />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
