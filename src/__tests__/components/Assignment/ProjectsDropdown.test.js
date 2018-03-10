import React from 'react'
import renderer from 'react-test-renderer'
import { ProjectsDropdown } from '../../../components/Assignment/ProjectsDropdown'

describe('<ProjectsDropdown>', () => {
  it('renders correctly', () => {
    const fetchedProjects = [
      { id: 1, name: 'project 1' },
      { id: 2, name: 'project 2' },
    ]
    const component = renderer.create(
      <ProjectsDropdown
        fetchProjects={() => {}}
        projects={fetchedProjects}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
