import React from "react"

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.n
        }
    }

    render() {
        return (
            <span class='section-ref' onClick={
                () => document.getElementById("s" + this.state.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Section " + this.state.num}
            </span>
        )
    }
}

export default Section
