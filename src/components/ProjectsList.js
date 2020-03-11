import React from "react"

import data from "../data/projectsListData.json"

function buildToolsList(tools, sep = "·") {
    const list = []
    // On initialization, this is not yet loaded
    if (tools.length > 0) {
        for (let item of tools) {
            list.push(
                <li key={item.name}>
                    {item.link ?
                        <a href={item.link}>{item.name}</a> :
                        item.name}
                </li>
            )
            list.push(
                <li className='sep' key={"sep_" + item.name}>{sep}</li>
            )
        }
        list.pop()
    }
    return list
}

function buildLinksList(links) {
    const list = []
    // On initialization, this is not yet loaded
    if (links.length > 0) {
        for (let item of links) {
            list.push(
                <li key={item.name}>{buildLinkContent(item)}</li>
            )
            list.push(
                <li className='sep' key={"sep_" + item.name}></li>
            )
        }
        list.pop()
    }
    return list
}

function buildLinkContent(item) {
    let content
    switch (item.name) {
        case "unlink":
            content =
                <span class='unlink' title={item.desc}>
                    <i className={item.icon} />
                </span>
            break
        case "none":
            content = <span>{item.desc}</span>
            break
        default:
            content =
                <a href={item.link} title={item.name}>
                    <i className={item.icon} />
                </a>
    }
    return content
}

function buildRows(projects) {
    const rows = projects.map(item =>
        <tr key={item.name}>
            <td className='year'>{item.year}</td>
            <td className='project'>
                {(item.website) ?
                    <a href={item.website}>{item.name}</a> :
                    item.name}
            </td>
            <td className='built'>
                {item.built ?
                    <a href={item.built.link}>{item.built.name}</a> :
                    "—"}
            </td>
            <td className='tools'>
                <ul className="projects-list-tools">
                    {item.tools && buildToolsList(item.tools)}
                </ul>
            </td>
            <td className='links'>
                <ul className="projects-list-links">
                    {item.links && buildLinksList(item.links)}
                </ul>
            </td>
        </tr>
    )
    return rows
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
                    <tbody>
                        {buildRows(data.projects)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProjectsList