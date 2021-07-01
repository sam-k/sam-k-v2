import React from "react";

import headshot from "../../images/profile.jpg";

const CardComponent = (props) =>
  <p className={props.type} style={{ gridRow: props.row }}>
    <a href={props.link}
      style={{ color: props.color }}
      onMouseEnter={() => props.updateColor("rgb(0, 123, 255)")}
      onMouseLeave={() => props.updateColor("hsl(0, 0%, 20%)")}>
      {props.content}
    </a>
  </p>

class IntroCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "hsl(0, 0%, 20%)" //default color
    };

    this.updateColor = this.updateColor.bind(this);
  }

  updateColor(color) {
    this.setState({ color: color });
  }

  render() {
    return (
      <>
        <CardComponent
          type='icon'
          row={this.props.row}
          content={<i className={this.props.icon} />}
          link={this.props.link}
          color={this.state.color}
          updateColor={this.updateColor}
        />
        <CardComponent
          type='text'
          row={this.props.row}
          content={this.props.text}
          link={this.props.link}
          color={this.state.color}
          updateColor={this.updateColor}
        />
      </>
    );
  }
}

class IntroCard extends React.Component {
  render() {
    const icons = ["fa fa-envelope", "fab fa-linkedin-in", "fa fa-code-branch"];
    const texts = ["samkim@alumni.duke.edu", "linkedin.com/in/sdk", "github.com/sam-k"];
    const links = ["mailto:samkim@alumni.duke.edu", "https://www.linkedin.com/in/sdk/", "https://github.com/sam-k/"];

    const items = [];
    for (var i = 0; i < links.length; i++) {
      items.push(
        <IntroCardItem
          key={texts[i]}
          row={i + 1}
          icon={icons[i]}
          text={texts[i]}
          link={links[i]}
        />
      );
    }

    return (
      <div id='intro-card'>
        <div id='intro-card-img'>
          <img src={headshot} alt="headshot" />
        </div>
        <div id='intro-card-text'>
          {items}
          <p className='icon' style={{ gridRow: i + 1 }}>
            <i className="fa fa-location-arrow" />
          </p>
          <p className='text' style={{ gridRow: i + 1 }}>San Francisco, Calif.</p>
        </div>
      </div>
    );
  }
}

export default IntroCard;
