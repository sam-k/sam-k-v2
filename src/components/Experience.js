import React from "react"
import Skills from "./Skills"

class Experience extends React.Component {
    render() {

        const work = {
            "Epic Systems":
                "https://www.epic.com/",
            "Duke Center for Genomic and Computational Biology":
                "https://genome.duke.edu/",
            "National Security Innovation Network":
                "https://www.nsin.us/",
            "National Institutes of Health":
                "https://www.nih.gov/",
            "Duke University School of Medicine":
                "https://medschool.duke.edu/"
        }

        return (
            <div id='experience-wrapper'>
                <div id='skills-wrapper'>
                    <h2>Skills</h2>
                    <Skills />
                </div>
                <div id='work-wrapper'>
                    <h2>Work</h2>
                </div>
            </div >
        )
    }
}

export default Experience