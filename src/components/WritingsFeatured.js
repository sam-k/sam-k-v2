import React from "react"
import WritingCard from "./WritingCard"

import data from "../data/writingsListData.json"

class WritingsFeatured extends React.Component {
    render() {
        const writingsFeaturedItems = data.writings.map(
            item => (item.featured &&
                <WritingCard
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    purpose={item.purpose}
                    description={item.description}
                    img={item.img}
                />
            )
        )

        return (
            <div id='writings-featured'>
                <div id='writings-featured-wrapper'>
                    <h2>Featured Writings</h2>
                    <div id='writing-cards'>
                        {writingsFeaturedItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default WritingsFeatured
