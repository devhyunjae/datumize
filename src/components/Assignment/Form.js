import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserDropDown from './UsersDropdown'
import ProjectsDropDown from './ProjectsDropdown'
import RolesDropDown from './RolesDropdown'
import * as actions from '../../actions/users'

class Form extends PureComponent {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    successMessage: PropTypes.string,
  }

  static defaultProps = {
    successMessage: null,
  }

  state = {
    selectedUser: null,
    selectedProject: null,
    selectedRole: null,
  }

  componentDidUpdate(prevProps) {
    const { successMessage } = this.props

    if (successMessage && (prevProps.successMessage !== successMessage)) {
      alert(successMessage)
    }
  }

  onClick = () => {
    const { selectedUser, selectedProject, selectedRole } = this.state
    this.props.updateUser({ user: selectedUser, project: selectedProject, role: selectedRole })
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
        <button type="button" onClick={this.onClick}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  successMessage: state.users.success,
})

export default connect(
  mapStateToProps,
  actions,
)(Form)
