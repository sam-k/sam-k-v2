import React from "react"

class Section extends React.Component {
    render() {
        return (
            <span class='section-ref' onClick={
                () => document.getElementById("s" + this.props.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Section " + this.props.num}
            </span>
        )
    }
}

export default Section
