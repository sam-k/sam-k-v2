import React from "react"
import { Link } from "react-router-dom"

import data from "../../data/writingsListData.json"

function buildInstitution(description) {
    const institution = (description.institutionShort ?
        (description.institutionLink ?
            <a href={description.institutionLink}>
                {description.institutionShort}
            </a> :
            (description.institutionShort === "Duke" ?
                <span style={{ color: "hsl(0, 0%, 80%)" }}>
                    {description.institutionShort}
                </span> :
                description.institutionShort)
        ) :
        "—"
    )

    return institution
}

function buildRows(projects) {
    const rows = projects.map(item =>
        <tr key={item.id}>
            <td className='year'>{item.date.year}</td>
            <td className='post'>
                {item.imported ?
                    <Link to={"/post/" + item.id}>
                        {item.title + (item.subtitle ? ": " + item.subtitle : "")}
                    </Link> :
                    <span style={{ color: "hsl(0, 0%, 80%)" }}>
                        {item.title + (item.subtitle ? ": " + item.subtitle : "")}
                    </span>
                }
            </td>
            <td className='type'>{item.description.type}</td>
            <td className='institution'>{buildInstitution(item.description)}</td>
        </tr>
    )
    return rows
}

class WritingsList extends React.Component {
    render() {
        return (
            <div id='writings-list'>
                <h2>All Writings</h2>
                <table id='writings-table'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Writing</th>
                            <th>Type</th>
                            <th>Written&nbsp;for</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildRows(data.writings)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WritingsList
