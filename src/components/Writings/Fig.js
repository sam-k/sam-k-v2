import React from "react"

class Fig extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.n,
            letters: (props.l ? props.l : "")
        }
    }

    render() {
        return (
            <span class='fig' onClick={
                () => document.getElementById("fig" + this.state.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Fig. " + this.state.num + this.state.letters}
            </span>
        )
    }
}

export default Fig
