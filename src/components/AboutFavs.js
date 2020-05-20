import React from "react"

import data from "../data/favsData.json"

function buildList(favs) {
    const favsList = favs.map(item => {
        // Author
        if ("author" in item && item.author !== "") {
            if ("link" in item && item.link !== "") {
                return <li>
                    <a href={item.link}>“{item.name}” by {item.author}</a>
                </li>
            }
            return <li>“{item.name}” by {item.author}</li>
        }

        // No author
        if ("link" in item && item.link !== "") {
            return <li><a href={item.link}>{item.name}</a></li>
        }
        return <li>{item.name}</li>
    })
    return favsList
}

class AboutFavs extends React.Component {
    render() {
        return (
            <div id='about-favs'>
                <div id='about-favs-wrapper'>
                    <h2>Some of My Favorites</h2>
                    <p id='desc'>These are a few of my favorite things.</p>
                    <div id='favs-grid'>
                        <div id='news'>
                            <p class='title'>News</p>
                            <ul>
                                {buildList(data.news.items)}
                            </ul>
                        </div>
                        <div id='tvShows'>
                            <p class='title'>TV Shows</p>
                            <ul>
                                {buildList(data.tvShows.items)}
                            </ul>
                        </div>
                        <div id='music'>
                            <p class='title'>Music</p>
                            <ul>
                                {buildList(data.music.items)}
                            </ul>
                        </div>
                        <div id='coffees'>
                            <p class='title'>Coffees</p>
                            <ul>
                                {buildList(data.coffees.items)}
                            </ul>
                        </div>
                    </div>
                    {/* <div id='books'>
                        <p class='title'>Books</p>
                        <ul>
                            {buildList(data.books.items)}
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default AboutFavs
