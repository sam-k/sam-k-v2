import React from 'react'
import Typed from 'typed.js'

class Typewriter extends React.Component {
    componentDidMount() {
        const { strings } = this.props
        const options = {
            strings: strings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        }

        this.typed = new Typed(this.el, options)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
            />
        )
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div>
                <h1>Sam, I am.</h1>
                <h2>I love to <Typewriter strings={[
                    "<span style='color: red'>develop</span>.",
                    "<span style='color: red'>write</span>."
                ]} /></h2>
                <p className='profile-desc'>I’m a <span className='code'>computational</span> <span className='code'>biologist</span>, a <span className='code'>software</span> <span className='code'>engineer</span> and a junior at Duke University. I believe that technology is the answer to treating and curing more people, and at a much lower cost.</p>
            </div >
        )
    }
}

export default Intro