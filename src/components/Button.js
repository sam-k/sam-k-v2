import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
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
    };
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
    };

    let buttonElement = null;
    if (this.props.linkType === 'router') {
      buttonElement =
        <Link
          to={this.props.link}
          style={buttonProps.style}
          onMouseEnter={buttonProps.onMouseEnter}
          onMouseLeave={buttonProps.onMouseLeave}
        >
          {this.props.icon &&
            <i
              className={this.props.icon}
              style={{ color: this.state.iconColor }}
            />
          }
          <span id='buttonText'>{this.props.text}</span>
        </Link>;
    } else if (this.props.linkType === 'link') {
      buttonElement =
        <a
          href={this.props.link}
          style={buttonProps.style}
          onMouseEnter={buttonProps.onMouseEnter}
          onMouseLeave={buttonProps.onMouseLeave}
        >
          {this.props.icon &&
            <i
              className={this.props.icon}
              style={{ color: this.state.iconColor }}
            />
          }
          <span id='buttonText'>{this.props.text}</span>
        </a>;
    } else {
      buttonElement =
        <p
          onClick={this.props.function}
          style={buttonProps.style}
          onMouseEnter={buttonProps.onMouseEnter}
          onMouseLeave={buttonProps.onMouseLeave}
        >
          {this.props.icon &&
            <i
              className={this.props.icon}
              style={{ color: this.state.iconColor }}
            />
          }
          <span id={this.props.buttonTextIdOn} style={{ display: "none" }}>
            {this.props.buttonTextOn}
          </span>
          <span id={this.props.buttonTextIdOff}>
            {this.props.buttonTextOff}
          </span>
        </p>;
    }

    return (
      <div id="abc" className={this.props.className}>
        {buttonElement}
      </div>
    );
  }
}

export default Button;
