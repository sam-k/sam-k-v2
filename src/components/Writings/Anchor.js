import React from "react"

// Generic anchor component.
class Anchor extends React.Component {
    constructor(props) {
        super(props)
        this.thisFunction = this.thisFunction.bind(this)
    }

    thisFunction() {
        this.props.function()
        document.getElementById("anchor" + this.props.n).scrollIntoView({ behavior: "smooth" })
    }

    render() {
        return (
            <span className='anchor' onClick={
                () => {
                    this.props.function()
                    document.getElementById("anchor" + this.props.n).scrollIntoView({ behavior: "smooth" })
                }
            }>
                {this.props.text}
            </span>
        )
    }
}

export default Anchor
