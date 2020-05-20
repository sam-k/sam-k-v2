import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <div id='footer-wrapper'>
                    <div id='footer-content'>
                        <div id='contact'>
                            <h2>Get in Touch</h2>
                            <p>I’m always open to new challenges and opportunities.</p>
                            <p>Feel free to shoot me an email at <a href="mailto:sam.kim@duke.edu">sam.kim@duke.edu</a>!</p>
                        </div>
                        <div id='copyright'>
                            <ul id='copyright-icons'>
                                <li>
                                    <a href="mailto:sam.kim@duke.edu">
                                        <i className="fa fa-lg fa-envelope" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/sdk/">
                                        <i className="fab fa-lg fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/sam-k">
                                        <i className="fab fa-lg fa-github" />
                                    </a>
                                </li>
                            </ul>
                            <ul id='copyright-lines'>
                                <li>Designed and built with <span
                                    id='heart'
                                    title="but also lots of frustration"
                                >♥</span> by </li>
                                <li>Sam Kim, © 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
