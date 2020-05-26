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
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            title: props.title,
            date: props.date,
            description: props.description,
            summary: props.summary,
            img: props.img
        }
    }

    render() {
        const images = require.context("../../images")

        return (
            <div class='writing-card'>
                <div class='writing-card-text'>
                    <Link class='title-link' to={"/post/" + this.state.id}>
                        <p>{this.state.title}</p>
                    </Link>
                    <p class='summary'>{this.state.summary}</p>
                    {(this.state.description && this.state.date) &&
                        <p
                            class='desc'
                            dangerouslySetInnerHTML={{
                                __html: buildDescription(
                                    this.state.date, this.state.description
                                )
                            }}
                        />
                    }
                </div>
                {this.state.img &&
                    <>
                        <div class='flex-sep' />
                        <Link class='img' to={"/post/" + this.state.id}>
                            <img src={images(this.state.img)} alt={this.state.title} />
                        </Link>
                    </>
                }
            </div>
        )
    }
}

export default WritingCard
