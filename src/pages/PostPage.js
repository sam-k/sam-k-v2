import React from "react"
import ScrollToTop from "../components/ScrollToTop"

import TfbsResearch2020 from "../posts/TfbsResearch2020"
import HowTo2020 from "../posts/HowTo2020"
import ThreeDomains2019 from "../posts/ThreeDomains2019"
import NgsResearch2019 from "../posts/NgsResearch2019"
import ChristmasTrees2018 from "../posts/ChristmasTrees2018"
import HouseCampaign2018 from "../posts/HouseCampaign2018"
import NcSenateSpending2018 from "../posts/NcSenateSpending2018"
import NumeralClassifiers2018 from "../posts/NumeralClassifiers2018"
import LoanwordPhonology2018 from "../posts/LoanwordPhonology2018"
import DccFountain2017 from "../posts/DccFountain2017"

const Posts = {
    "tfbs-research-2020": <TfbsResearch2020 />,
    "how-to-2020": <HowTo2020 />,
    "three-domains-2019": <ThreeDomains2019 />,
    "ngs-research-2019": <NgsResearch2019 />,
    "christmas-trees-2018": <ChristmasTrees2018 />,
    "house-campaign-2018": <HouseCampaign2018 />,
    "nc-senate-spending-2018": <NcSenateSpending2018 />,
    "loanword-phonology-2018": <LoanwordPhonology2018 />,
    "numeral-classifiers-2018": <NumeralClassifiers2018 />,
    "dcc-fountain-2017": <DccFountain2017 />
}

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
    componentDidMount() {
        document.title = this.props.title + " | Sam Kim";
    }

    render() {
        return (
            <div id='post'>
                <ScrollToTop />
                <div id='post-wrapper'>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.subtitle}</h3>

                    <p class='purpose' dangerouslySetInnerHTML={{
                        __html: buildDescription(this.props.description)
                    }} />
                    <p class='date'>
                        {this.props.date.month + " " + this.props.date.year}
                    </p>

                    {Posts[this.props.id]}
                </div>
            </div>
        )
    }
}

export default PostPage
