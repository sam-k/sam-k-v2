import React from "react";
import { Link } from "react-router-dom";

class AboutHeader extends React.Component {
  render() {
    return (
      <div id='about-header'>
        <div id='about-header-wrapper'>
          <h1>Bio</h1>
          <p id='desc'>I’m a software engineer at <a href='https://verily.com/' style={{ color: "#ed3532" }}><span className='code'>Verily</span> <span className='code'>Life</span> <span className='code'>Sciences</span></a>, Google’s health-focused sister company, and a recent graduate of <a href="https://duke.edu/" style={{ color: "#00539b" }}><span className="code">Duke</span> <span className="code">University</span></a>, where I studied computer science and biology.</p>
          <p>I’ve had a broad range of interests, but they’ve all centered around two things—finding answers and helping people. Those interests led me to investigate <Link to="/post/nc-senate-spending-2018">unethical spending by a state Senator</Link>, probe the genome for clues on <Link to="/post/tfbs-research-2020">blocked DNA repair</Link>, help the NIH <a href="https://github.com/codingitforward/cdfdemoday2019/blob/master/Characterizing_the_NIH_Research_Workforce.pdf">keep track of its scientists</a>, improve a <a href="https://www.epic.com/software#AI">data visualization tool</a> used by clinicians worldwide, and pursue a career in medicine.</p>
          <p>In the end, I combined all my interests and found my passion lay in the intersection of <span className="code" style={{ color: "#ed3532" }}>computer</span> <span className="code" style={{ color: "#ed3532" }}>science</span> <span className="code" style={{ color: "#ed3532" }}>and</span> <span className="code" style={{ color: "#ed3532" }}>human</span> <span className="code" style={{ color: "#ed3532" }}>health</span>. I aspire to advance health care by applying technology to every step of the medical process—diagnosis, treatment, prevention and access to care.</p>
        </div>
      </div>
    );
  }
}

export default AboutHeader;
