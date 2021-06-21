import React from "react";

class WorkIcon extends React.Component {
  render() {
    return (
      <div className='work-icon-img'>
        <a href={this.props.link}>
          <img src={require("../../images" + this.props.img).default} alt={this.props.name} />
        </a>
      </div>
    );
  }
}

export default WorkIcon;
