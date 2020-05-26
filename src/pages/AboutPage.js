import React from "react"

import AboutHeader from "../components/About/AboutHeader"
import AboutFavs from "../components/About/AboutFavs"
import WritingsFeatured from "../components/Writings/WritingsFeatured"

class AboutPage extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | Bio";
    }

    render() {
        return (
            <div id='about-page'>
                <AboutHeader />
                <AboutFavs />
                <WritingsFeatured showButton={false} />
            </div>
        )
    }
}

export default AboutPage
