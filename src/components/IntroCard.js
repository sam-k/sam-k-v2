import React from "react"

const CardComponent = (props) =>
    <p class={props.type} style={{ gridRow: props.index + 1 }}>
        <a href={props.link}
            id={props.type + props.index}
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
            index: props.index,
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
                    index={this.state.index}
                    content={<i class={this.state.icon}></i>}
                    link={this.state.link}
                    color={this.state.color}
                    updateColor={this.updateColor}
                />
                <CardComponent
                    type='text'
                    index={this.state.index}
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
        const icons = ["fa fa-envelope", "fab fa-linkedin-in", "fa fa-code-branch", "fa fa-location-arrow"]
        const texts = ["sam.kim@duke.edu", "linkedin.com/in/sdk", "github.com/sam-k", "Durham, N.C."]
        const links = ["mailto:sam.kim@duke.edu", "https://www.linkedin.com/in/sdk/", "https://github.com/sam-k/", "#"]

        const items = []
        for (let i = 0; i < links.length; i++) {
            items.push(
                <IntroCardItem
                    index={i}
                    icon={icons[i]}
                    text={texts[i]}
                    link={links[i]}
                />
            )
        }

        return (
            <div className='intro-card'>
                <div className='intro-card-text'>
                    {items}
                </div>
            </div>
        )
    }
}

export default IntroCard