import React from "react"
import ScrollToTop from "../components/ScrollToTop"

import WritingsHeader from "../components/WritingsHeader"
import WritingsFeatured from "../components/WritingsFeatured"
import WritingsList from "../components/WritingsList"

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
