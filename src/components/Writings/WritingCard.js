import React from "react"
import { Link } from "react-router-dom"

function buildDescription(date, description) {
    const institution = (description.institution ?
        " for " + (description.institutionLink ?
            "<a href='" + description.institutionLink + "'>" + description.institution + "</a>" :
            description.institution
        ) :
        ""
    )
    return description.type + institution + " &nbsp;|&nbsp; " +
        date.month + " " + date.year
}

class WritingCard extends React.Component {
    render() {
        const images = require.context("../../images")

        return (
            <div class='writing-card'>
                <div class='writing-card-text'>
                    <Link class='title-link' to={"/post/" + this.props.id}>
                        <p>{this.props.title}</p>
                    </Link>
                    <p class='summary'>{this.props.summary}</p>
                    {(this.props.description && this.props.date) &&
                        <p
                            class='desc'
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
                        <div class='flex-sep' />
                        <Link class='img' to={"/post/" + this.props.id}>
                            <img src={images(this.props.img)} alt={this.props.title} />
                        </Link>
                    </>
                }
            </div>
        )
    }
}

export default WritingCard
