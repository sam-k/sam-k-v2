import React from "react"
import headshot from "../profile.jpeg"

const CardComponent = (props) =>
    <p class={props.type} style={{ gridRow: props.row }}>
        <a href={props.link}
            style={{ color: props.color }}
            onMouseEnter={() => props.updateColor("#007bff")}
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
        for (let i = 0; i < links.length; i++) {
            items.push(
                <IntroCardItem
                    row={i + 2}
                    icon={icons[i]}
                    text={texts[i]}
                    link={links[i]}
                />
            )
        }

        return (
            <div className='intro-card'>
                <div class='intro-card-img'>
                    <img src={headshot} alt="headshot" />
                </div>
                <div className='intro-card-text'>
                    {items}
                    <p class='icon' style={{ gridRow: -1 }}>
                        <i class="fa fa-location-arrow" />
                    </p>
                    <p class='text' style={{ gridRow: -1 }}>Durham, N.C.</p>
                </div>
            </div>
        )
    }
}

export default IntroCard