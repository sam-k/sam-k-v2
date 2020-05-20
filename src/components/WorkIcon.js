import React from "react"

class WorkIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            img: props.img,
            link: props.link
        }
    }

    render() {
        const images = require.context("../images")

        return (
            <div class='work-icon-img'>
                <a href={this.state.link}>
                    <img src={images(this.state.img)} alt={this.state.name} />
                </a>
            </div >
        )
    }
}

export default WorkIcon
