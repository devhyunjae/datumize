import React from 'react'
import renderer from 'react-test-renderer'
import { UsersDropdown } from '../../../components/Assignment/UsersDropdown'

describe('<UsersDropdown>', () => {
  it('renders correctly', () => {
    const fetchedUsers = [
      { id: 1, name: 'test01' },
      { id: 2, name: 'test02' },
    ]
    const component = renderer.create(
      <UsersDropdown
        fetchUsers={() => {}}
        users={fetchedUsers}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
