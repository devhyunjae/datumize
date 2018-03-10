import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/roles'

class RolesDropdown extends PureComponent {
  static propTypes = {
    fetchRoles: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { fetchRoles } = this.props
    fetchRoles()
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
          <select>
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

