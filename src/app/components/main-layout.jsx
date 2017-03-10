import React from 'react';
import SearchFilter from '../containers/search-filter';
import { Breadcrumbs } from './breadcrumbs';

export class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#FFE600" }}>
                    <div className="container">
                        <SearchFilter />
                    </div>
                </div>
                <div style={{ backgroundColor: "#EEE" }}>
                    <div className="container">
                        <Breadcrumbs />
                        <div className="row justify-content-center" style={{ background: '#EEE' }}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
