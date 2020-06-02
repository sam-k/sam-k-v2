import React from "react"

// Separate component for each anchor type to ease importing from rich formatted text to JSX.
class Ref extends React.Component {
    render() {
        return (
            <sup className='ref-anchor' onClick={
                () => document.getElementById("ref" + this.props.n).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {this.props.n}
            </sup>
        )
    }
}

export default Ref
