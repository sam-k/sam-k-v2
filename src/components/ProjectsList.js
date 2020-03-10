import React from "react"

import data from "../data/projectsListData.json"
const projectsListData = data.projects

function buildTable() {

}

class ProjectsList extends React.Component {
    render() {
        return (
            <div id='projects-list'>
                <h2>All Projects</h2>
                <table id='projects-table'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Project</th>
                            <th>Made at</th>
                            <th>Built with</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default ProjectsList