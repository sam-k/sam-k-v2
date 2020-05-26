import React from "react"

import Intro from "../components/Intro"
import Projects from "../components/ProjectsFeatured"
import Experience from "../components/Experience"

class Home extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | Website";
    }

    render() {
        return (
            <div id='home-page'>
                <Intro />
                <Projects showButton="true" />
                <Experience />
            </div>
        )
    }
}

export default Home
