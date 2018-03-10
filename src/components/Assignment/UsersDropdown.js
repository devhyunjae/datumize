import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../actions/users'
import Container from './Container'
import Select from './Select'

class UsersDropdown extends PureComponent {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    setSelectedUser: PropTypes.func,
  }

  static defaultProps = {
    setSelectedUser: () => {},
  }

  componentDidMount() {
    const { fetchUsers } = this.props
    fetchUsers()
  }

  componentDidUpdate() {
    const { users, setSelectedUser } = this.props
    if (users.length > 0) {
      const selectedUser = users[0]
      setSelectedUser(selectedUser)
    }
  }

  changeEvent = (event) => {
    const { users, setSelectedUser } = this.props
    const selectedUser = users.find(user => user.id === parseInt(event.target.value, 0))
    setSelectedUser(selectedUser)
  }

  renderOptions() {
    const { users } = this.props

    return users.map(user => (
      <option value={user.id} key={user.id} name={user.name}>
        {user.name}
      </option>
    ))
  }

  render() {
    return (
      <Container>
        <h5>1. Choose a user</h5>
        <Select>
          <select onChange={this.changeEvent}>
            { this.renderOptions() }
          </select>
        </Select>
      </Container>
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

