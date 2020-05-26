import React from "react"
import WritingCard from "./WritingCard"
import Button from "./Button"

import data from "../data/writingsListData.json"

class WritingsFeatured extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showButton: props.showButton
        }
    }

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

                    {this.state.showButton &&
                        <Button
                            className='all-writings-button'
                            text="See All Writings"
                            link="/posts"
                            linkType='router'

                            color="hsl(0, 0%, 27%)"
                            colorHover="rgb(0, 123, 255)"
                            bgColor="white"
                            bgColorHover="rgb(224, 236, 254)"
                            borderColor="hsl(0, 0%, 75%)"
                            borderColorHover="hsl(0, 0%, 75%)"
                        />
                    }
                </div>
            </div>
        )
    }
}

export default WritingsFeatured
