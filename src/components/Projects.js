import React from "react"
import ProjectCard from "./ProjectCard"
import Button from "./Button"

class Projects extends React.Component {
    render() {
        return (
            <div id='projects'>
                <div id='project-wrapper'>
                    <div id='project-card-wrapper'>
                        <ProjectCard
                            title="Ridesharing web app"
                            subtitle={
                                <span>Best nonprofit hack co-winner at <a href="https://hackduke.org/">HackDuke: Code for Good 2019</a></span>
                            }
                            text={<>
                                <p>Serving a local nonprofit’s ridesharing needs. Includes navigation, interactive map and Uber-like matching platform.</p>
                                <p>This app was requested by and built for <a href="https://realityministriesinc.org/">Reality Ministries</a>, which serves developmentally disabled adults.</p>
                            </>}
                            tools={{
                                "JS": "https://www.javascript.com/",
                                "Mapbox API": "https://www.mapbox.com/",
                                "Proto.io": "https://proto.io/"
                            }}
                            links={{
                                "GitHub": ""
                            }}
                            img=""
                        />

                        <ProjectCard
                            title="Describing the NIH-funded research workforce"
                            subtitle={
                                <span>Fellowship at <a href="https://blog.codingitforward.com/introducing-the-2019-civic-digital-fellows-41469f28561d">National Institutes of Health</a></span>
                            }
                            text={<>
                                <p>Led project to characterize scientists funded by the NIH, using machine-learning techniques. Results may help inform Congress and automate future analyses.</p>
                                <p>I worked through <a href="https://www.codingitforward.com/">Coding It Forward</a> as a 2019 Civic Digital Fellow.</p>
                            </>}
                            tools={{
                                "R": "https://www.r-project.org/",
                                "mlr": "https://mlr.mlr-org.com/",
                                "PL/SQL": "https://www.oracle.com/database/technologies/appdev/plsql.html"
                            }}
                            links={{
                                "GitHub": ""
                            }}
                            img=""
                        />

                        <ProjectCard
                            title="A new hypothesis for cancer formation"
                            subtitle={
                                <span>Research project at <a href="http://gordanlab.cs.duke.edu/">Duke Center for Genomic and Computational Biology</a></span>
                            }
                            text={<>
                                <p>Analyzing genome data to find if transcription factor binding prevents repair enzymes from accessing damaged DNA, causing mutations.</p>
                                <p>I am working under Prof. Raluca Gordan in her lab.</p>
                            </>}
                            tools={{
                                "Python": "https://www.python.org/",
                                "Bash": "https://www.gnu.org/software/bash/",
                                "bedtools": "https://bedtools.readthedocs.io/en/latest/"
                            }}
                            links={{
                                "GitHub": ""
                            }}
                            img=""
                        />

                        <ProjectCard
                            title="This website right here"
                            subtitle="Personal project"
                            text={<>
                                <p>Showcasing my skills and experience, as well as the (many) writings from my undergraduate career.</p>
                                <p>This was an exercise in responsive web design and mobile front-end development. I built all components from scratch, without any CSS frameworks like Bootstrap.</p>
                            </>}
                            tools={{
                                "React": "https://reactjs.org/",
                                "Django": "https://www.djangoproject.com/",
                                "CSS": "https://www.w3.org/Style/CSS/"
                            }}
                            links={{
                                "GitHub": ""
                            }}
                            img=""
                        />

                        {/* <ProjectCard id='placeholder' /> */}
                    </div>

                    <Button
                        className='all-projects-button'
                        text="See All Projects"
                        link="#"

                        color="hsl(0, 0%, 27%)"
                        colorHover="rgb(0, 123, 255)"
                        bgColor="white"
                        bgColorHover="rgb(224, 236, 254)"
                        borderColor="hsl(0, 0%, 20%)"
                        borderColorHover="hsl(0, 0%, 20%)"
                    />
                </div>
            </div>
        )
    }
}

export default Projects