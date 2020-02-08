import React from "react"
import WorkIcon from "./WorkIcon"

import logoDukeMed from "../images/logo-dukemed.png"
import logoEpic from "../images/logo-epic.png"
import logoGCB from "../images/logo-gcb.png"
import logoNIH from "../images/logo-nih.jpg"
import logoNSIN from "../images/logo-nsin.png"

class Work extends React.Component {
    render() {
        return (
            <div id='work-icons'>
                <WorkIcon
                    name="Epic Systems"
                    icon={logoEpic}
                    link="https://www.epic.com/"
                />
                <WorkIcon
                    name="National Institutes of Health"
                    icon={logoNIH}
                    link="https://www.nih.gov/"
                />
                <WorkIcon
                    name="Duke University School of Medicine"
                    icon={logoDukeMed}
                    link="https://medschool.duke.edu/"
                />
                <WorkIcon
                    name="National Security Innovation Network"
                    icon={logoNSIN}
                    link="https://www.nsin.us/"
                />
                <WorkIcon
                    name="Duke Center for Genomic and Computational Biology"
                    icon={logoGCB}
                    link="https://genome.duke.edu/"
                />
            </div>
        )
    }
}

export default Work