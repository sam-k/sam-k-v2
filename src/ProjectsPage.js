import React from "react"
import ScrollToTop from "./ScrollToTop"

import ProjectsHeader from "./components/ProjectsHeader"
import ProjectsFeatured from "./components/ProjectsFeatured"
import ProjectsList from "./components/ProjectsList"

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
