import React from "react"
import ProjectCard from "./ProjectCard"

class Projects extends React.Component {
    render() {
        return (
            <div id='project-wrapper'>
                <ProjectCard
                    title="Ridesharing web app"
                    subtitle={
                        <span>Best nonprofit hack co-winner at <a href="https://hackduke.org/">HackDuke: Code for Good 2019</a></span>
                    }
                    text={
                        <>
                            <p>Serving a local nonprofit group’s ridesharing needs. Includes navigation, interactive map and Uber-like matching platform.</p>
                            <p>This app was requested by and built for <a href='https://realityministriesinc.org/'>Reality Ministries</a>, which serves developmentally disabled adults.</p>
                        </>
                    }
                    tools={{
                        "Mapbox API": "https://www.mapbox.com/",
                        "JS": "https://www.javascript.com/",
                        "Proto.io": "https://proto.io/"
                    }}
                    links={{
                        "GitHub": ""
                    }}
                    img="" />

                <ProjectCard
                    title="Describing the NIH-funded research workforce"
                    subtitle={
                        <span>Internship at <a href="https://blog.codingitforward.com/introducing-the-2019-civic-digital-fellows-41469f28561d">National Institutes of Health</a></span>
                    }
                    text={
                        <>
                            <p>Led project to characterize scientists funded by the NIH, using machine-learning techniques. Results may help inform Congress and automate future analyses.</p>
                            <p>I worked through <a href="https://www.codingitforward.com/">Coding It Forward</a> as a 2019 Civic Digital Fellow.</p>
                        </>
                    }
                    tools={{
                        "R": "https://www.r-project.org/",
                        "PL/SQL": "https://www.oracle.com/database/technologies/appdev/plsql.html"
                    }}
                    links={{
                        "GitHub": ""
                    }}
                    img="" />

                <ProjectCard
                    title="iOS/Android app for combat medics"
                    subtitle={
                        <span>Internship at <a href="https://www.nsin.us/x-force/">Department of Defense</a></span>
                    }
                    text={
                        <>
                            <p>Replacing Special Ops medics’ outdated books and database with customized, up-to-date medical reference materials.</p>
                            <p>I worked through <a href="https://www.nsin.us/">National Security Innovation Network</a> as a 2019 X-Force Fellow.</p>
                        </>
                    }
                    tools={{
                        "C#": "http://csharp.net/",
                        "Xamarin": "https://dotnet.microsoft.com/apps/xamarin"
                    }}
                    links={{
                        "GitHub": ""
                    }}
                    img="" />
            </div>
        )
    }
}

export default Projects