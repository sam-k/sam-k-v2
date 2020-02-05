import React from "react"

class WorkIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            icon: props.icon,
            link: props.link
        }
    }

    render() {
        return (
            <div class='work-icon-img'>
                <a href={this.state.link}>
                    <img src={this.state.icon} alt={this.state.name} />
                </a>
            </div >
        )
    }
}

export default WorkIcon