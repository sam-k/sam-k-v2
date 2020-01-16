import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            color: props.color,
            colorHover: props.colorHover,
            colorLeave: props.color,
            bgColor: props.bgColor,
            bgColorHover: props.bgColorHover,
            bgColorLeave: props.bgColor,
            borderColor: props.borderColor
        }
    }

    render() {
        return (
            <div
                id='resume-button'
                style={{
                    backgroundColor: this.state.bgColor,
                    borderColor: this.state.borderColor
                }}
                onMouseEnter={() => this.setState({
                    color: this.state.colorHover,
                    bgColor: this.state.bgColorHover
                })}
                onMouseLeave={() => this.setState({
                    color: this.state.colorLeave,
                    bgColor: this.state.bgColorLeave
                })}
            >
                <a href="#"
                    style={{ color: this.state.color }}
                >
                    {this.state.text}
                </a>
            </div>
        )
    }
}

export default Button