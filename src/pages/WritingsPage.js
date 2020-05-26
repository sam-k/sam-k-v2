import React from "react"
import ScrollToTop from "../components/ScrollToTop"

import WritingsHeader from "../components/Writings/WritingsHeader"
import WritingsFeatured from "../components/Writings/WritingsFeatured"
import WritingsList from "../components/Writings/WritingsList"

class WritingsPage extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | Writings";
    }

    render() {
        return (
            <div id='writings-page'>
                <ScrollToTop />
                <WritingsHeader />
                <WritingsFeatured />
                <WritingsList />
            </div>
        )
    }
}

export default WritingsPage
