import React from "react";

// Generic anchor component.
class Anchor extends React.Component {
  render() {
    return (
      <span className='anchor' onClick={
        () => {
          if (this.props.function) {
            this.props.function();
          }
          document.getElementById("anchor" + this.props.n).scrollIntoView({
            behavior: "smooth"
          });
        }
      }>
        {this.props.text}
      </span>
    );
  }
}

export default Anchor;
