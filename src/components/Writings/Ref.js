import React from "react"

class Ref extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.n,
            ref: props.ref
        }
    }

    render() {
        return (
            <sup class='ref' onClick={
                () => document.getElementById(this.state.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {this.state.num}
            </sup>
        )
    }
}

export default Ref
