import React from "react"
import Typed from "typed.js"
import IntroCard from "./IntroCard"
import Button from "./Button"

class Typewriter extends React.Component {
    componentDidMount() {
        const { strings } = this.props
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 2000,
            loop: true
        }
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options)
    }

    componentWillUnmount() {
        // Prevent memory leak
        this.typed.destroy()
    }

    render() {
        return (
            <span style={{ whiteSpace: 'pre' }} ref={(el) => { this.el = el }} />
        )
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div id='intro-bg-wrapper'>
                <div id='intro-wrapper'>
                    <div id='intro'>
                        <div id='profile'>
                            <h1>Sam, I am.</h1>
                            <h2>I love to <Typewriter strings={[
                                "<span style='color: #ec8c24'>develop</span>.",
                                "<span style='color: #6ebede'>write</span>.",
                                "<span style='color: #4ec866'>research</span>."
                            ]} /></h2>
                            <p>I’m a <span className='code'>computational</span> <span className='code'>biologist</span>, a <span className='code'>software</span> <span className='code'>engineer</span> and a third-year student at Duke University. I believe that technology is the answer to treating and curing more people, and at a much lower cost.</p>
                            <Button
                                className='resume-button'
                                text="Resume"
                                link="https://drive.google.com/file/d/1M0rskmHcZrd6pbAoDjvfuzy3e2dXhaO9/view"

                                color="#444444"
                                colorHover="#007bff"
                                bgColor="white"
                                bgColorHover="rgba(0, 123, 255, 15%)"
                                borderColor="hsl(0, 0%, 20%)"
                                borderColorHover="hsl(0, 0%, 20%)"
                            />
                        </div>
                        <IntroCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro