import React from "react";

import Button from "../Button";

class ProjectCard extends React.Component {
  render() {
    if (this.props.tools) {
      var toolItems = Object.entries(this.props.tools).map(([tool, link]) =>
        <li key={tool}>
          <Button
            className='project-tool-item'
            text={tool}
            link={link}
            linkType="link"
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
        <p className="project-date">
          {this.props.date}
        </p>
        {this.props.id !== 'placeholder' && <>
          {this.props.mainLink ?
            <a className='title' href={this.props.mainLink}>
              <h3 dangerouslySetInnerHTML={{ __html: this.props.title }} />
            </a> :
            <p className='title'>
              <h3 dangerouslySetInnerHTML={{ __html: this.props.title }} />
            </p>}
          <h4 dangerouslySetInnerHTML={{ __html: this.props.subtitle }} />
          {this.props.text}
          <div className='project-tools'>
            {toolItems}
          </div>
          {this.props.mainLink ?
            <a className='img' href={this.props.mainLink}>
              <img src={require("../../images" + this.props.img).default} alt={this.props.title} />
            </a> :
            <div className='img' href={this.props.mainLink}>
              <img src={require("../../images" + this.props.img).default} alt={this.props.title} />
            </div>}
        </>}
      </div>
    );
  }
}

export default ProjectCard;
