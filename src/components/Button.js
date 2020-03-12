import React from "react"
import { Link } from "react-router-dom"

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: props.className,
            text: props.text,
            link: props.link,
            linkType: props.linkType,
            icon: props.icon,

            color: props.color,
            colorHover: props.colorHover,
            colorLeave: props.color,

            bgColor: props.bgColor,
            bgColorHover: props.bgColorHover,
            bgColorLeave: props.bgColor,

            borderColor: props.borderColor,
            borderColorHover: props.borderColorHover,
            borderColorLeave: props.borderColor,

            iconColor: props.iconColor,
            iconColorLeave: props.iconColor
        }
    }

    render() {
        const buttonProps = {
            style: {
                textDecoration: "none",
                color: this.state.color,
                backgroundColor: this.state.bgColor,
                borderColor: this.state.borderColor,
                cursor: "pointer"
            },
            onMouseEnter: () => this.setState({
                color: this.state.colorHover,
                bgColor: this.state.bgColorHover,
                borderColor: this.state.borderColorHover,
                iconColor: this.state.colorHover
            }),
            onMouseLeave: () => this.setState({
                color: this.state.colorLeave,
                bgColor: this.state.bgColorLeave,
                borderColor: this.state.borderColorLeave,
                iconColor: this.state.iconColorLeave
            })
        }

        let buttonElement = null
        if (this.state.linkType === 'router') {
            buttonElement =
                <Link to={this.state.link}>
                    <div
                        style={buttonProps.style}
                        onMouseEnter={buttonProps.onMouseEnter}
                        onMouseLeave={buttonProps.onMouseLeave}
                    >
                        {this.state.icon &&
                            <i
                                className={this.state.icon}
                                style={{ color: this.state.iconColor }}
                            />
                        }
                        <span>{this.state.text}</span>
                    </div>
                </Link>
        } else {
            buttonElement =
                <a
                    href={this.state.link}
                    style={buttonProps.style}
                    onMouseEnter={buttonProps.onMouseEnter}
                    onMouseLeave={buttonProps.onMouseLeave}
                >
                    {this.state.icon &&
                        <i
                            className={this.state.icon}
                            style={{ color: this.state.iconColor }}
                        />
                    }
                    <span>{this.state.text}</span>
                </a>
        }

        return (
            <div className={this.state.className}>
                {buttonElement}
            </div >
        )
    }
}

export default Button