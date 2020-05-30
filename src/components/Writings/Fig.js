import React from "react"

class Fig extends React.Component {
    render() {
        return (
            <span class='fig-ref' onClick={
                () => document.getElementById("fig" + this.props.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Fig. " + this.props.num + (this.props.l ? this.props.l : "")}
            </span>
        )
    }
}

export default Fig
