import React from "react"

import Intro from "../components/Home/Intro"
import Projects from "../components/Projects/ProjectsFeatured"
import Experience from "../components/Home/Experience"

class Home extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | Website";
    }

    render() {
        return (
            <div id='home-page'>
                <Intro />
                <Projects showButton={true} />
                <Experience />
            </div>
        )
    }
}

export default Home
