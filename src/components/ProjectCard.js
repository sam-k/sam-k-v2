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
        const images = require.context("../images")

        if (this.state.tools) {
            var toolItems = Object.entries(this.state.tools).map(([tool, link]) =>
                <li key={tool}>
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
        }

        return (
            <div className='project-card' id={this.state.id}>
                {this.state.id !== 'placeholder' && <>
                    <h3 dangerouslySetInnerHTML={{ __html: this.state.title }} />
                    <h4 dangerouslySetInnerHTML={{ __html: this.state.subtitle }} />
                    {this.state.text}
                    <div className='project-tools'>
                        {toolItems}
                    </div>
                    <img src={images(this.state.img)} alt={this.state.title} />
                </>}
            </div>
        )
    }
}

export default ProjectCard