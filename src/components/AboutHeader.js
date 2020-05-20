import React from "react"

class AboutHeader extends React.Component {
    render() {
        return (
            <div id='about-header'>
                <div id='about-header-wrapper'>
                    <h1>Bio</h1>
                    <p id='desc'>I’m currently a senior at Duke University and an incoming software developer intern at <a href="https://www.epic.com/">Epic Systems</a>, technology for health-care providers.</p>
                    <p>I’ve had a broad range of interests, but they’ve all centered around two things—finding answers and helping people. Those interests led me to investigate <a href="https://www.newsobserver.com/news/politics-government/article240202657.html">unlawful spending by a state senator</a>, probe the genome for clues on <a href="https://drive.google.com/file/d/1X1BRZ5uJyIXnf7QLxU4nY6n9UEEKE0CR/view">blocked DNA repair</a>, help the NIH <a href="https://github.com/codingitforward/cdfdemoday2019/blob/master/Characterizing_the_NIH_Research_Workforce.pdf">keep track of its scientists</a>, and pursue a career in medicine.</p>
                    <p>In the end, I decided to combine all my interests into one—translational bioinformatics, in the intersection of computer science and human health. And I aspire to advance health care by applying computational techniques to patient diagnosis and treatment.</p>
                </div>
            </div>
        )
    }
}

export default AboutHeader
