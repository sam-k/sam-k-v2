import React from "react"

class Fig extends React.Component {
    render() {
        return (
            <span class='fig-ref' onClick={
                () => document.getElementById("fig" + this.props.n).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Fig. " + this.props.n + (this.props.l ? this.props.l : "")}
            </span>
        )
    }
}

export default Fig
