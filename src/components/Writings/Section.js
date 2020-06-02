import React from "react"

// Separate component for each anchor type to ease importing from rich formatted text to JSX.
class Section extends React.Component {
    render() {
        return (
            <span className='section-anchor' onClick={
                () => document.getElementById("s" + this.props.n).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Section " + this.props.n}
            </span>
        )
    }
}

export default Section
