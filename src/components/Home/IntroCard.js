import React from "react"

import headshot from "../../images/profile.jpg"

const CardComponent = (props) =>
    <p class={props.type} style={{ gridRow: props.row }}>
        <a href={props.link}
            style={{ color: props.color }}
            onMouseEnter={() => props.updateColor("rgb(0, 123, 255)")}
            onMouseLeave={() => props.updateColor("hsl(0, 0%, 20%)")}>
            {props.content}
        </a>
    </p>

class IntroCardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.type,
            row: props.row,
            icon: props.icon,
            text: props.text,
            link: props.link,
            color: "hsl(0, 0%, 20%)" //default color
        }

        this.updateColor = this.updateColor.bind(this)
    }

    updateColor(color) {
        this.setState({ color: color })
    }

    render() {
        return (
            <>
                <CardComponent
                    type='icon'
                    row={this.state.row}
                    content={<i class={this.state.icon} />}
                    link={this.state.link}
                    color={this.state.color}
                    updateColor={this.updateColor}
                />
                <CardComponent
                    type='text'
                    row={this.state.row}
                    content={this.state.text}
                    link={this.state.link}
                    color={this.state.color}
                    updateColor={this.updateColor}
                />
            </>
        )
    }
}

class IntroCard extends React.Component {
    render() {
        const icons = ["fa fa-envelope", "fab fa-linkedin-in", "fa fa-code-branch"]
        const texts = ["sam.kim@duke.edu", "linkedin.com/in/sdk", "github.com/sam-k"]
        const links = ["mailto:sam.kim@duke.edu", "https://www.linkedin.com/in/sdk/", "https://github.com/sam-k/"]

        const items = []
        for (var i = 0; i < links.length; i++) {
            items.push(
                <IntroCardItem
                    row={i + 1}
                    icon={icons[i]}
                    text={texts[i]}
                    link={links[i]}
                />
            )
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
                    <p className='text' style={{ gridRow: i + 1 }}>Durham, N.C.</p>
                </div>
            </div>
        )
    }
}

export default IntroCard
