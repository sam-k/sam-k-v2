import React from "react"

import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

class Home extends React.Component {
    render() {
        return (
            <>
                <Intro />
                <Projects />
                <Experience />
            </>
        )
    }
}

export default Home