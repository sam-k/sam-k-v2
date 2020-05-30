import React from "react"

import ProjectCard from "./ProjectCard"
import Button from "../Button"

import data from "../../data/projectsFeaturedData.json"

function renderText(text) {
    return text.map(line =>
        <p key={line} dangerouslySetInnerHTML={{ __html: line }} />
    )
}

class ProjectsFeatured extends React.Component {
    render() {
        const projectsFeaturedItems = data.projects.map(
            item => <ProjectCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                text={renderText(item.text)}
                tools={item.tools}
                links={item.links}
                img={item.img}
                mainLink={item.mainLink}
            />
        )

        return (
            <div id='projects-featured'>
                <div id='projects-featured-wrapper'>
                    {!this.props.showButton &&
                        <h2>Featured Projects</h2>
                    }
                    <div id='project-card-wrapper'>
                        {projectsFeaturedItems}
                        {(projectsFeaturedItems.length % 2 > 0) &&
                            <ProjectCard id='placeholder' />}
                    </div>

                    {this.props.showButton &&
                        <Button
                            className='all-projects-button'
                            text="See All Projects"
                            link="/projects"
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

export default ProjectsFeatured
