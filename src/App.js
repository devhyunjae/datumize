import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import AssignmentPage from './containers/AssignmentPage'

const App = ({ store }) => (
  <Provider store={store}>
    <AssignmentPage />
  </Provider>
)

App.defaultProps = {
  store: null,
}

App.propTypes = {
  store: PropTypes.object,
}

export default App
