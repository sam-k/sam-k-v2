import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: props.className,
            text: props.text,
            link: props.link,
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
            <div className={this.state.className}>
                <a
                    style={{
                        textDecoration: "none",
                        color: this.state.color,
                        backgroundColor: this.state.bgColor,
                        borderColor: this.state.borderColor,
                        cursor: "pointer"
                    }}
                    href={this.state.link}
                    onMouseEnter={() => this.setState({
                        color: this.state.colorHover,
                        bgColor: this.state.bgColorHover
                    })}
                    onMouseLeave={() => this.setState({
                        color: this.state.colorLeave,
                        bgColor: this.state.bgColorLeave
                    })}
                >
                    {this.state.text}
                </a>
            </div>
        )
    }
}

export default Button