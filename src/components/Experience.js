import React from "react"
import Skills from "./Skills"
import Work from "./Work"

class Experience extends React.Component {
    render() {
        return (
            <div id='experience-bg-wrapper'>
                <div id='experience-wrapper'>
                    <div id='skills-wrapper'>
                        <h2>Skills</h2>
                        <Skills />
                    </div>
                    <div id='work-wrapper'>
                        <h2>Work</h2>
                        <Work />
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience