import React from "react"
import ScrollToTop from "./ScrollToTop"

import TfbsResearch2020 from "./posts/TfbsResearch2020"
import HowTo2020 from "./posts/HowTo2020"
import YokaiWatch2019 from "./posts/YokaiWatch2019"
import NcSenateSpending2018 from "./posts/NcSenateSpending2018"
import DccFountain2017 from "./posts/DccFountain2017"
import NgsResearch2019 from "./posts/NgsResearch2019"

function buildDescription(description) {
    const institution = (description.institution ?
        " for " + (description.institutionLink ?
            "<a href='" + description.institutionLink + "'>" + description.institution + "</a>" :
            description.institution
        ) :
        ""
    )
    return description.type + institution
}

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            title: props.title,
            date: props.date,
            description: props.description,
            summary: props.summary,
            text: props.text
        }
    }

    componentDidMount() {
        document.title = this.state.title + " | Sam Kim";
    }

    render() {
        const Posts = {
            "tfbs-research-2020": <TfbsResearch2020 />,
            "how-to-2020": <HowTo2020 />,
            "yokai-watch-2019": <YokaiWatch2019 />,
            "ngs-research-2019": <NgsResearch2019 />,
            "nc-senate-spending-2018": <NcSenateSpending2018 />,
            "dcc-fountain-2017": <DccFountain2017 />
        }

        return (
            <div id='post'>
                <ScrollToTop />
                <div id='post-wrapper'>
                    <h2>{this.state.title}</h2>

                    <p class='purpose' dangerouslySetInnerHTML={{
                        __html: buildDescription(this.state.description)
                    }} />
                    <p class='date'>
                        {this.state.date.month + " " + this.state.date.year}
                    </p>

                    {Posts[this.state.id]}
                </div>
            </div>
        )
    }
}

export default PostPage
