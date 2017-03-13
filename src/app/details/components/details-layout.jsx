import React from 'react'
import connect from 'react-redux'

export class DetailsLayout extends React.Component {

    render() {
        return (
            <article className="row justify-content-center details-container">
                <div className="col-10">
                    {this.props.children}
                </div>
            </article>
        )
    }
}
