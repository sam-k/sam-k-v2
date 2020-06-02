import React from "react"

class WorkIcon extends React.Component {
    render() {
        const images = require.context("../../images")

        return (
            <div className='work-icon-img'>
                <a href={this.props.link}>
                    <img src={images(this.props.img)} alt={this.props.name} />
                </a>
            </div >
        )
    }
}

export default WorkIcon
