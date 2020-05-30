import React from "react"

class Table extends React.Component {
    render() {
        return (
            <span class='table-ref' onClick={
                () => document.getElementById("table" + this.props.num).scrollIntoView({
                    behavior: "smooth"
                })
            }>
                {"Table " + this.props.num}
            </span>
        )
    }
}

export default Table
