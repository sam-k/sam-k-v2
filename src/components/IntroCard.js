import React from "react"

const IconComponent = (props) =>
    <p class="icon" style={{ gridRow: props.index + 1 }}>
        <a href={props.link}
            id={"icon" + props.index}
            style={{ color: props.color }}
            onMouseEnter={() => props.updateColor("#007bff")}
            onMouseLeave={() => props.updateColor("hsl(0, 0%, 20%)")}>
            <i class={props.icon}></i>
        </a>
    </p>

const TextComponent = (props) =>
    <p class="text" style={{ gridRow: props.index + 1 }}>
        <a href={props.link}
            id={"text" + props.index}
            style={{ color: props.color }}
            onMouseEnter={() => props.updateColor("#007bff")}
            onMouseLeave={() => props.updateColor("hsl(0, 0%, 20%)")}>
            {props.text}
        </a>
    </p>

class IntroCardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                <IconComponent
                    index={this.state.index}
                    icon={this.state.icon}
                    link={this.state.link}
                    color={this.state.color}
                    updateColor={this.updateColor}
                />
                <TextComponent
                    index={this.state.index}
                    text={this.state.text}
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

// class IntroCard2 extends React.Component {
//     changeColor(index, color) {
//         if (document.getElementById("icon" + index) &&
//             document.getElementById("text" + index)) {
//             document.getElementById("icon" + index).style.color = color
//             document.getElementById("text" + index).style.color = color
//         }
//     }

//     render() {
//         const icons = ["fa fa-envelope", "fab fa-linkedin-in", "fa fa-code-branch", "fa fa-location-arrow"]
//         const texts = ["sam.kim@duke.edu", "linkedin.com/in/sdk", "github.com/sam-k", "Durham, N.C."]
//         const links = ["mailto:sam.kim@duke.edu", "https://www.linkedin.com/in/sdk/", "https://github.com/sam-k/", "#"]

//         const iconItems = []
//         for (const [index, icon] of icons.entries()) {
//             iconItems.push(
//                 <p class="icon" style={{ gridRow: index + 1 }}>
//                     <a href={links[index]}
//                         id={"icon" + index}
//                         style={{ color: "hsl(0, 0%, 20%)" }}
//                         onMouseOver={this.changeColor(index, "#007bff")}
//                         onMouseOut={this.changeColor(index, "hsl(0, 0%, 20%)")}>
//                         <i class={icon}></i>
//                     </a>
//                 </p>
//             )
//         }

//         const textItems = []
//         for (const [index, text] of texts.entries()) {
//             textItems.push(
//                 <p class="text" style={{ gridRow: index + 1 }}>
//                     <a href={links[index]}
//                         id={"text" + index}
//                         style={{ color: "hsl(0, 0%, 20%)" }}
//                         onMouseOver={this.changeColor(index, "#007bff")}
//                         onMouseOut={this.changeColor(index, "hsl(0, 0%, 20%)")}>
//                         {text}
//                     </a>
//                 </p>
//             )
//         }

//         return (
//             <div className='intro-card'>
//                 <div className='intro-card-text'>
//                     {iconItems}
//                     {textItems}
//                 </div>
//             </div>
//         )
//     }
// }

export default IntroCard