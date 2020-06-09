import React from "react"
import { Link } from "react-router-dom"

class AboutHeader extends React.Component {
    render() {
        return (
            <div id='about-header'>
                <div id='about-header-wrapper'>
                    <h1>Bio</h1>
                    <p id='desc'>I’m currently a senior at Duke University and a software developer intern at <a href="https://www.epic.com/"><span className='code'>Epic</span> <span className='code'>Systems</span></a>, technology for health-care providers.</p>
                    <p>I’ve had a broad range of interests, but they’ve all centered around two things—finding answers and helping people. Those interests led me to investigate <Link to="/post/nc-senate-spending-2018">unethical spending by a state Senator</Link>, probe the genome for clues on <Link to="/post/tfbs-research-2020">blocked DNA repair</Link>, help the NIH <a href="https://github.com/codingitforward/cdfdemoday2019/blob/master/Characterizing_the_NIH_Research_Workforce.pdf">keep track of its scientists</a>, and pursue a career in medicine.</p>
                    <p>In the end, I decided to combine all my interests into one—translational bioinformatics, in the intersection of computer science and human health. And I aspire to advance health care by applying computational techniques to patient diagnosis and treatment.</p>
                </div>
            </div>
        )
    }
}

export default AboutHeader
