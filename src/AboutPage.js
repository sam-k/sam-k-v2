import React from "react"

import AboutHeader from "./components/AboutHeader"
import AboutFavs from "./components/AboutFavs"
import WritingsFeatured from "./components/WritingsFeatured"

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <AboutFavs />
                <WritingsFeatured />
            </div>
        )
    }
}

export default AboutPage
