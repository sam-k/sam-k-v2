import React from "react"
import Skills from "./Skills"
import Work from "./Work"
import Button from "./Button"

class Experience extends React.Component {
    render() {
        return (
            <div id='experiences'>
                <div id='experience-wrapper'>
                    <div id='skills-wrapper'>
                        <h2>Skills</h2>
                        <Skills />
                    </div>
                    <div id='work-wrapper'>
                        <h2>Where I’ve Worked</h2>
                        <Work />
                    </div>
                </div>

                {/*
                <Button
                    className='all-experiences-button'
                    text="More About Me"
                    link="#"

                    color="hsl(0, 0%, 27%)"
                    colorHover="rgb(0, 123, 255)"
                    bgColor="white"
                    bgColorHover="rgb(224, 236, 254)"
                    borderColor="hsl(0, 0%, 20%)"
                    borderColorHover="hsl(0, 0%, 20%)"
                />
                */}
            </div>
        )
    }
}

export default Experience