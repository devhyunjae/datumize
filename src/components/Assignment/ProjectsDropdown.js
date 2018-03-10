import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/projects'

class ProjectsDropdown extends PureComponent {
  static propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { fetchProjects } = this.props
    fetchProjects()
  }

  renderOptions() {
    const { projects } = this.props

    return projects.map(project => (
      <option value={project.id} key={project.id}>
        {project.name}
      </option>
    ))
  }

  render() {
    return (
      <div>
        <div>2. Choose a project</div>
        <div>
          <select>
            { this.renderOptions() }
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  ({
    projects: state.projects.projects,
  })
}

export { ProjectsDropdown }

export default connect(
  mapStateToProps,
  actions,
)(ProjectsDropdown)

