import React from "react"
import { Link } from "react-router-dom"

class WritingCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: props.key,
            title: props.title,
            date: props.date,
            purpose: props.purpose,
            description: props.description,
            img: props.img
        }
    }

    render() {
        const images = require.context("../images")

        return (
            <div class='writing-card'>
                <div class='writing-card-text'>
                    <Link class='title-link' to={"/" + this.state.key}>
                        <p>{this.state.title}</p>
                    </Link>
                    <Link class='desc-link' to={"/" + this.state.key}>
                        <p>{this.state.description}</p>
                    </Link>
                    {(this.state.purpose && this.state.date) &&
                        <p
                            class='purpose'
                            dangerouslySetInnerHTML={{
                                __html: this.state.purpose + " &nbsp;&nbsp;|&nbsp;&nbsp; " + this.state.date
                            }}
                        />
                    }
                </div>
                {this.state.img &&
                    <>
                        <div class='flex-sep' />
                        <Link class='img' to={"/" + this.state.key}>
                            <img src={images(this.state.img)} alt={this.state.title} />
                        </Link>
                    </>
                }
            </div>
        )
    }
}

export default WritingCard
