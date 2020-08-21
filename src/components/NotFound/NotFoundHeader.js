import React from "react";
import { Link } from "react-router-dom";

class NotFoundHeader extends React.Component {
  render() {
    return (
      <div id='not-found-header'>
        <div id='not-found-header-wrapper'>
          <h1>Page Not Found</h1>
          <p>We couldn’t find the page you’re looking for.</p>
          <p>Try going back to the previous page, or return to the <Link to=".">home page</Link>.</p>
        </div>
      </div>
    );
  }
}

export default NotFoundHeader;
