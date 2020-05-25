import React from "react"
import WritingCard from "./WritingCard"

import data from "../data/writingsFeaturedData.json"

class AboutWritings extends React.Component {
    render() {
        const writingsFeaturedItems = data.writings.map(
            item => <WritingCard
                id={item.id}
                title={item.title}
                date={item.date}
                purpose={item.purpose}
                description={item.description}
                img={item.img}
            />
        )

        return (
            <div id='about-writings'>
                <div id='about-writings-wrapper'>
                    <h2>Featured Writings</h2>
                    {/* <p id='desc'>Let’s skip the icebreakers. These are a few of my favorite things.</p> */}
                    <div id='writing-cards'>
                        {writingsFeaturedItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutWritings
