import React from "react"
import ProjectCard from "./ProjectCard"

class Projects extends React.Component {
    render() {
        return (
            <div id='project-wrapper' >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}

export default Projects