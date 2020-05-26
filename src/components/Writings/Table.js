import React from "react"

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: props.n
        }
    }

    render() {
        return (
            <span class='table' onClick={
                () => document.getElementById("table" + this.state.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Table " + this.state.num}
            </span>
        )
    }
}

export default Table
