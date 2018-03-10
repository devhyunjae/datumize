import React, { PureComponent } from 'react'
import UserDropDown from './UsersDropdown'
import ProjectsDropDown from './ProjectsDropdown'
import RolesDropDown from './RolesDropdown'

class Form extends PureComponent {
  state = {
    selectedUser: null,
    selectedProject: null,
    selectedRole: null,
  }

  setSelectedUser = (selectedUser) => {
    this.setState({
      selectedUser,
    })
  }

  setSelectedProject = (selectedProject) => {
    this.setState({
      selectedProject,
    })
  }

  setSelectedRole = (selectedRole) => {
    this.setState({
      selectedRole,
    })
  }

  render() {
    return (
      <div>
        <UserDropDown setSelectedUser={this.setSelectedUser} />
        <ProjectsDropDown setSelectedProject={this.setSelectedProject} />
        <RolesDropDown setSelectedRole={this.setSelectedRole} />
        <button type="button" onClick={() => {alert('clicked')}}>Save</button>
      </div>
    )
  }
}

export default Form
