import React from "react"

class Ref extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.n
        }
    }

    render() {
        return (
            <sup class='ref' onClick={
                () => document.getElementById("ref" + this.state.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {this.state.num}
            </sup>
        )
    }
}

export default Ref