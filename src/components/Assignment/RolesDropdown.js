import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/roles'

class RolesDropdown extends PureComponent {
  static propTypes = {
    fetchRoles: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
    setSelectedRole: PropTypes.func,
  }

  static defaultProps = {
    setSelectedRole: () => {},
  }

  componentDidMount() {
    const { fetchRoles } = this.props
    fetchRoles()
  }

  componentDidUpdate() {
    const { roles, setSelectedRole } = this.props
    if (roles.length > 0) {
      const selectedRole = roles[0]
      setSelectedRole(selectedRole)
    }
  }

  changeEvent = (event) => {
    const { roles, setSelectedRole } = this.props
    const selectedRole = roles.find(role => role.id === parseInt(event.target.value, 0))
    setSelectedRole(selectedRole)
  }

  renderOptions() {
    const { roles } = this.props

    return roles.map(role => (
      <option value={role.id} key={role.id}>
        {role.name}
      </option>
    ))
  }

  render() {
    return (
      <div>
        <div>3. Choose a role</div>
        <div>
          <select onChange={this.changeEvent}>
            { this.renderOptions() }
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  roles: state.roles.roles,
})

export { RolesDropdown }

export default connect(
  mapStateToProps,
  actions,
)(RolesDropdown)

