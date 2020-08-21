import React from "react";

import Button from "../Button";

class ProjectCard extends React.Component {
  render() {
    const images = require.context("../../images");

    if (this.props.tools) {
      var toolItems = Object.entries(this.props.tools).map(([tool, link]) =>
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
      );
    }

    return (
      <div className='project-card' id={this.props.id}>
        {this.props.id !== 'placeholder' && <>
          <a className='title' href={this.props.mainLink}>
            <h3 dangerouslySetInnerHTML={{ __html: this.props.title }} />
          </a>
          <h4 dangerouslySetInnerHTML={{ __html: this.props.subtitle }} />
          {this.props.text}
          <div className='project-tools'>
            {toolItems}
          </div>
          <a className='img' href={this.props.mainLink}>
            <img src={images(this.props.img)} alt={this.props.title} />
          </a>
        </>}
      </div>
    );
  }
}

export default ProjectCard;
