import React from "react"

import NotFoundHeader from "../components/NotFound/NotFoundHeader"

class NotFoundPage extends React.Component {
    componentDidMount() {
        document.title = "Sam Kim | 404";
    }

    render() {
        return (
            <div id='not-found-page'>
                <NotFoundHeader />
            </div>
        )
    }
}

export default NotFoundPage
