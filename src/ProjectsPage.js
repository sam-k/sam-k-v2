import React from "react"

import Header from "./components/ProjectsHeader"
import Featured from "./components/ProjectsFeatured"
import List from "./components/ProjectsList"

class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Featured />
                <List />
            </>
        )
    }
}

export default ProjectsPage