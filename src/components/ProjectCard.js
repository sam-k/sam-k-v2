import React from 'react'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            text: props.text,
            tools: props.tools,
            links: props.links
        }
    }

    render() {
        return (
            <div className='project-card'>
                <h3>{this.state.title}</h3>
                <h4>{this.state.subtitle}</h4>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default ProjectCard