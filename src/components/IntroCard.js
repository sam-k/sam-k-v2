import React from "react"

function updateColor(color) {
    this.setState({ color: color })
}

class IntroCardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.type,
            index: props.index,
            content: props.content,
            link: props.link,
            color: "hsl(0, 0%, 20%)"
        }
        updateColor = updateColor.bind(this)
    }

    render() {
        return (
            <p class={this.type} style={{ gridRow: this.index + 1 }}>
                <a href={this.link}
                    key={this.type + this.index}
                    style={{ color: this.color }}
                    onMouseOver={this.updateColor("#007bff")}
                    onMouseOut={this.updateColor("hsl(0, 0%, 20%)")}>
                    {this.content}
                </a>
            </p>
        )
    }
}

class IntroCard extends React.Component {
    changeColor(index, color) {
        if (document.getElementById("icon" + index) &&
            document.getElementById("text" + index)) {
            document.getElementById("icon" + index).style.color = color
            document.getElementById("text" + index).style.color = color
        }
    }

    render() {
        const icons = ["fa fa-envelope", "fab fa-linkedin-in", "fa fa-code-branch", "fa fa-location-arrow"]
        const texts = ["sam.kim@duke.edu", "linkedin.com/in/sdk", "github.com/sam-k", "Durham, N.C."]
        const links = ["mailto:sam.kim@duke.edu", "https://www.linkedin.com/in/sdk/", "https://github.com/sam-k/", "#"]

        const iconItems = []
        for (const [index, icon] of icons.entries()) {
            iconItems.push(
                <p class="icon" style={{ gridRow: index + 1 }}>
                    <a href={links[index]}
                        id={"icon" + index}
                        style={{ color: "hsl(0, 0%, 20%)" }}
                        onMouseOver={this.changeColor(index, "#007bff")}
                        onMouseOut={this.changeColor(index, "hsl(0, 0%, 20%)")}>
                        <i class={icon}></i>
                    </a>
                </p>
            )
        }

        const textItems = []
        for (const [index, text] of texts.entries()) {
            textItems.push(
                <p class="text" style={{ gridRow: index + 1 }}>
                    <a href={links[index]}
                        id={"text" + index}
                        style={{ color: "hsl(0, 0%, 20%)" }}
                        onMouseOver={this.changeColor(index, "#007bff")}
                        onMouseOut={this.changeColor(index, "hsl(0, 0%, 20%)")}>
                        {text}
                    </a>
                </p>
            )
        }

        return (
            <div className='intro-card'>
                <div className='intro-card-text'>
                    {iconItems}
                    {textItems}
                </div>
            </div>
        )
    }
}

export default IntroCard