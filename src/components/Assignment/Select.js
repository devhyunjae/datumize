import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ children }) => (
  <div className="pt-select pt-fill">
    { children }
  </div>
)

Select.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Select
