import React from "react"
import Button from "./Button"

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
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
                        color="hsl(0, 0%, 55%)"
                        colorHover="rgb(0, 123, 255)"
                        bgColor="hsl(0, 0%, 92%)"
                        bgColorHover="rgb(224, 236, 254)"
                    />
                </li>
            )
            // toolItems.unshift(<li className='project-tools-header'>TOOLS:</li>)
        }

        return (
            <div className='project-card' id={this.state.id}>
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