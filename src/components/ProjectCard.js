import React from "react"
import Button from "./Button"

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            text: props.text,
            tools: props.tools,
            links: props.links,
            img: props.img
        }
    }

    render() {
        if (this.state.tools) {
            var toolItems = Object.entries(this.state.tools).map(([tool, link]) =>
                <li>
                    <Button
                        className='project-tool-item'
                        text={tool}
                        link={link}
                        color="rgba(0, 0, 0, 0.4)"
                        colorHover="#007bff"
                        bgColor="rgba(0, 0, 0, 0.08)"
                        bgColorHover="rgba(0, 123, 255, 15%)"
                    />
                </li>
            )
            // toolItems.unshift(<li className='project-tools-header'>TOOLS:</li>)
        }

        return (
            <div className='project-card'>
                <h3>{this.state.title}</h3>
                <h4>{this.state.subtitle}</h4>
                {this.state.text}
                <div className='project-tools'>
                    {toolItems}
                </div>
                <img src={this.state.img} alt={this.state.title} />
            </div>
        )
    }
}

export default ProjectCard