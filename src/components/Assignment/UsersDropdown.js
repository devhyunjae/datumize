import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/users'

class UsersDropdown extends PureComponent {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { fetchUsers } = this.props
    fetchUsers()
  }

  renderOptions() {
    const { users } = this.props

    return users.map(user => (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    ))
  }

  render() {
    return (
      <div>
        <div>1. Choose a user</div>
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
  users: state.users.users,
})

export { UsersDropdown }

export default connect(
  mapStateToProps,
  actions,
)(UsersDropdown)

