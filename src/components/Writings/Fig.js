import React from "react"

// Separate component for each anchor type to ease importing from rich formatted text to JSX.
class Fig extends React.Component {
    render() {
        return (
            <span className='fig-anchor' onClick={
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
