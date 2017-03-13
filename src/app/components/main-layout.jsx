import React from 'react'
import { Search } from '../components/search'
import { Breadcrumbs } from './breadcrumbs'

export class MainLayout extends React.Component {
    render() {
        return (
            <div role="main">
                <Search location={this.props.location}/>
                <Breadcrumbs />
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        );
    }
}
