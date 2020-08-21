import React from "react";

// Separate component for each anchor type to ease importing from rich formatted text to JSX.
class Table extends React.Component {
  render() {
    return (
      <span className='table-anchor' onClick={
        () => document.getElementById("table" + this.props.n).scrollIntoView({
          behavior: "smooth"
        })
      }>
        {"Table " + this.props.n}
      </span>
    );
  }
}

export default Table;
