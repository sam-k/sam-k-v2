import React from "react"

function buildList(skills) {
    const skillsList = []
    for (let [skill, link] of Object.entries(skills)) {
        skillsList.push(
            <li>
                <a href={link}>{skill}</a>
            </li>
        )
        skillsList.push(<li>,&nbsp;</li>)
    }
    skillsList.pop()
    return skillsList
}

class SkillsList extends React.Component {
    render() {
        const fullStack = {
            "Python": "https://www.python.org/",
            "Java": "https://www.java.com/en/",
            "JavaScript": "https://www.javascript.com/",
            "React": "https://reactjs.org/",
            "HTML/CSS": "https://www.w3.org/Style/CSS/"
        }
        const dataML = {
            "Keras": "https://keras.io/",
            "scikit-learn": "https://scikit-learn.org/stable/",
            "R": "https://www.r-project.org/",
            "SQL": "https://www.oracle.com/database/technologies/appdev/plsql.html",
            "VBA": "https://docs.microsoft.com/en-us/office/vba/api/overview/"
        }
        const wetLab = {
            "Next-gen sequencing": "https://en.wikipedia.org/wiki/Massive_parallel_sequencing",
            "PCR/qPCR": "https://en.wikipedia.org/wiki/Polymerase_chain_reaction",
            "DNA cloning": "https://en.wikipedia.org/wiki/Molecular_cloning",
            "Gel electrophoresis": ""
        }

        const fullStackSkills = buildList(fullStack)
        const dataMLSkills = buildList(dataML)
        const wetLabSkills = buildList(wetLab)

        return (
            <>
                <ul id='skills-fullstack' className='skills-list'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Full-Stack Development</span> in</li>
                    {fullStackSkills}
                </ul>
                <ul id='skills-data' className='skills-list'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Data & Machine Learning</span> in</li>
                    {dataMLSkills}
                </ul>
                <ul id='skills-wetlab' className='skills-list'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Wet Lab</span> in</li>
                    {wetLabSkills}
                </ul>
            </>
        )
    }
}

export default SkillsList