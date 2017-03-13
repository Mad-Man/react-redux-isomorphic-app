import React from 'react'
import connect from 'react-redux'

export class Loader extends React.Component {
    render() {
        return (
            <div className="row loader-container">
                <section className="col-md-12">
                    <figure className="loading">
                        <img src="/dist/media/oval.svg" />
                    </figure>
                </section>
            </div>
        )
    }
}