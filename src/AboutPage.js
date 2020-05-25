import React from "react"

import AboutHeader from "./components/AboutHeader"
import AboutFavs from "./components/AboutFavs"
import AboutWritings from "./components/AboutWritings"

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <AboutFavs />
                <AboutWritings />
            </div>
        )
    }
}

export default AboutPage
