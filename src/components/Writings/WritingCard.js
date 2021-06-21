import React from "react";
import { Link } from "react-router-dom";

function buildDescription(date, description) {
  const institution = (description.institution ?
    " for " + (description.institutionLink ?
      "<a href='" + description.institutionLink + "'>" + description.institution + "</a>" :
      description.institution
    ) :
    ""
  );
  return description.type + institution + " &nbsp;|&nbsp; " +
    date.month + " " + date.year;
}

class WritingCard extends React.Component {
  render() {
    return (
      <div className='writing-card'>
        <div className='writing-card-text'>
          <Link className='title-link' to={"/post/" + this.props.id}>
            <p>{this.props.title}</p>
          </Link>
          <p className='summary'>{this.props.summary}</p>
          {(this.props.description && this.props.date) &&
            <p
              className='desc'
              dangerouslySetInnerHTML={{
                __html: buildDescription(
                  this.props.date, this.props.description
                )
              }}
            />
          }
        </div>
        {this.props.img &&
          <>
            <div className='flex-sep' />
            <Link className='img' to={"/post/" + this.props.id}>
              <img src={require("../../images" + this.props.img).default} alt={this.props.title} />
            </Link>
          </>
        }
      </div>
    );
  }
}

export default WritingCard;
