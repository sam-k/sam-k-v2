import React from "react"

class Ref extends React.Component {
    render() {
        return (
            <sup class='ref' onClick={
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
