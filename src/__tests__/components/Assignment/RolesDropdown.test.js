import React from 'react'
import renderer from 'react-test-renderer'
import { RolesDropdown } from '../../../components/Assignment/RolesDropdown'

describe('<RolesDropdown>', () => {
  it('renders correctly', () => {
    const fetchedRoles = [
      { id: 1, name: 'role 1' },
      { id: 2, name: 'role 2' },
    ]
    const component = renderer.create(
      <RolesDropdown
        fetchRoles={() => {}}
        roles={fetchedRoles}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
