import React from "react"

class Section extends React.Component {
    render() {
        return (
            <span class='section-ref' onClick={
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
