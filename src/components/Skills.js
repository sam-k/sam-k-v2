import React from "react"
import Button from "./Button"

import data from "../data/skillsData.json"

function buildList(skills, color) {
    const skillsList = skills.map((item, i) =>
        <>
            <Button
                className="skill-item"
                text={item.name}
                link={item.link}
                icon={item.icon}
                iconColor="hsl(0, 0%, 50%)"

                color="hsl(0, 0%, 20%)"
                bgColor="rgba(0, 0, 0, 6%)"
                borderColor="rgba(0, 0, 0, 10%)"

                colorHover={color}
                bgColorHover={color + "1a"}
                borderColorHover={color + "80"}
            />
            {skills[i + 1] && <li>,&nbsp;</li>}
        </>
    )
    return skillsList
}

class SkillsList extends React.Component {
    render() {
        const wetLab = {
            "Next-gen sequencing": ["https://en.wikipedia.org/wiki/Massive_parallel_sequencing", "fa fa-dna"],
            "PCR/real-time PCR": ["https://en.wikipedia.org/wiki/Polymerase_chain_reaction", "fa fa-dna"],
            "DNA cloning": ["https://en.wikipedia.org/wiki/Molecular_cloning", "fa fa-flask"],
            "Gel electrophoresis": ["https://en.wikipedia.org/wiki/Gel_electrophoresis", "fa fa-dna"]
        }

        return (
            <>
                <ul id='skills-fullstack'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Full-Stack Development</span> in</li>
                    {buildList(data.fullStack.skills, data.fullStack.color)}
                </ul>
                <ul id='skills-data'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Data & Machine Learning</span> in</li>
                    {buildList(data.dataML.skills, data.dataML.color)}
                </ul>
                <ul id='skills-wetlab'>
                    <li className='skill-header'><span style={{ fontWeight: 600 }}>Wet Lab</span> in</li>
                    {buildList(data.wetLab.skills, data.wetLab.color)}
                </ul>
            </>
        )
    }
}

export default SkillsList