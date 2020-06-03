import React from "react"

import WritingCard from "./WritingCard"
import Button from "../Button"

import data from "../../data/writingsListData.json"

class WritingsFeatured extends React.Component {
    render() {
        const writingsFeaturedItems = data.writings.map(
            item => (item.featured && item.imported &&
                <WritingCard
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    summary={item.summary}
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

                    {this.props.showButton &&
                        <Button
                            className='all-writings-button'
                            text="See All Writings"
                            linkType='router'
                            link="/posts"

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
