import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Button, Toaster, Position } from '@blueprintjs/core'

import UserDropDown from './UsersDropdown'
import ProjectsDropDown from './ProjectsDropdown'
import RolesDropDown from './RolesDropdown'
import * as actions from '../../actions/users'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

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
      this.toaster.show({ message: successMessage })
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

  toasterHandler = (ref) => {
    this.toaster = ref
  }

  render() {
    return (
      <Card elevation={Card.ELEVATION_TWO}>
        <Container>
          <UserDropDown setSelectedUser={this.setSelectedUser} />
          <ProjectsDropDown setSelectedProject={this.setSelectedProject} />
          <RolesDropDown setSelectedRole={this.setSelectedRole} />
          <Button type="button" onClick={this.onClick} className="pt-fill">
            Save
          </Button>
        </Container>
        <Toaster position={Position.TOP} ref={this.toasterHandler} />
      </Card>
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
