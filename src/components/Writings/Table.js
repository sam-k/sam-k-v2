import React from "react"

class Table extends React.Component {
    render() {
        return (
            <span class='table-ref' onClick={
                () => document.getElementById("table" + this.props.n).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Table " + this.props.n}
            </span>
        )
    }
}

export default Table
