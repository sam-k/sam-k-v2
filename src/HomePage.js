import React from "react"

import Intro from "./components/Intro"
import Projects from "./components/ProjectsFeatured"
import Experience from "./components/Experience"

class Home extends React.Component {
    render() {
        return (
            <>
                <Intro />
                <Projects inIntro="true" />
                <Experience />
            </>
        )
    }
}

export default Home
