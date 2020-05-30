import React from "react"

class Ref extends React.Component {
    render() {
        return (
            <sup class='ref' onClick={
                () => document.getElementById("ref" + this.props.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {this.props.num}
            </sup>
        )
    }
}

export default Ref
