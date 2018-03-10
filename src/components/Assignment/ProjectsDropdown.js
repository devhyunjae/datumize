import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/projects'

class ProjectsDropdown extends PureComponent {
  static propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    setSelectedProject: PropTypes.func,
  }

  static defaultProps = {
    setSelectedProject: () => {},
  }

  componentDidMount() {
    const { fetchProjects } = this.props
    fetchProjects()
  }

  componentDidUpdate() {
    const { projects, setSelectedProject } = this.props
    if (projects.length > 0) {
      const selectedProject = projects[0]
      setSelectedProject(selectedProject)
    }
  }

  changeEvent = (event) => {
    const { projects, setSelectedProject } = this.props
    const selectedProject = projects.find(project => project.id === parseInt(event.target.value, 0))
    setSelectedProject(selectedProject)
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
          <select onChange={this.changeEvent}>
            { this.renderOptions() }
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
})

export { ProjectsDropdown }

export default connect(
  mapStateToProps,
  actions,
)(ProjectsDropdown)

