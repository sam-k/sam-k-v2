import React from "react"

// Generic anchor component.
class Anchor extends React.Component {
    render() {
        return (
            <span class='anchor' onClick={
                () => document.getElementById("anchor" + this.props.n).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {this.props.text}
            </span>
        )
    }
}

export default Anchor
