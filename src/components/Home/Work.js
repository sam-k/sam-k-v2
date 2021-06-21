import React from "react";

import WorkIcon from "./WorkIcon";

import data from "../../data/workData.json";

class Work extends React.Component {
  render() {
    return (
      <div id='work-icons'>
        {data.work.map(item =>
          <WorkIcon
            key={item.name}
            name={item.name}
            img={item.img}
            link={item.link}
          />
        )}
      </div>
    );
  }
}

export default Work;
