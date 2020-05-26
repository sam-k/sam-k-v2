import React from "react"
import ScrollToTop from "../components/ScrollToTop"

import ProjectsHeader from "../components/Projects/ProjectsHeader"
import ProjectsFeatured from "../components/Projects/ProjectsFeatured"
import ProjectsList from "../components/Projects/ProjectsList"

class ProjectsPage extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | Projects";
    }

    render() {
        return (
            <div id='projects-page'>
                <ScrollToTop />
                <ProjectsHeader />
                <ProjectsFeatured />
                <ProjectsList />
            </div>
        )
    }
}

export default ProjectsPage
