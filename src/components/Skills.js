import React from "react"
import Button from "./Button"

function buildList(skills, color) {
    const skillsList = []
    for (let [skill, link] of Object.entries(skills)) {
        skillsList.push(
            <Button
                className="skill-item"
                text={skill}
                link={link}

                color="hsl(0, 0%, 20%)"
                bgColor="rgba(0, 0, 0, 6%)"
                borderColor="rgba(0, 0, 0, 10%)"

                colorHover={color}
                bgColorHover={color + "1a"}
                borderColorHover={color + "80"}
            />
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

        const fullStackSkills = buildList(fullStack, "#e2831e")
        const dataMLSkills = buildList(dataML, "#4fb2eb")
        const wetLabSkills = buildList(wetLab, "#36c552")

        return (
            <>
                <ul id='skills-fullstack'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Full-Stack Development</span> in</li>
                    {fullStackSkills}
                </ul>
                <ul id='skills-data'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Data & Machine Learning</span> in</li>
                    {dataMLSkills}
                </ul>
                <ul id='skills-wetlab'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Wet Lab</span> in</li>
                    {wetLabSkills}
                </ul>
            </>
        )
    }
}

export default SkillsList