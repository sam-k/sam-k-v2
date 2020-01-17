import React from "react"
import ProjectCard from "./ProjectCard"

class Projects extends React.Component {
    render() {
        return (
            <div id='project-wrapper'>
                <ProjectCard
                    title="Handoff, a web app"
                    subtitle="Best nonprofit hack co-winner at HackDuke 2019"
                    text="Serving a local volunteer group’s ridesharing needs for developmentally disabled adults. Includes " />
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}

export default Projects