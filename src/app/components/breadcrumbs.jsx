import React from 'react';
import { connect } from 'react-redux'

@connect((store) => {
    return {
        categories: store.list && store.list.data ? store.list.data.categories : null,
        search: store.search ? store.search.query : null
    }
})
export class Breadcrumbs extends React.Component {
    render() {
        const {categories, search} = this.props;
        const breadcrumbs = categories ?
            categories.map((category, index, catergories) => {
                let lastItem = index === categories.length - 1;
                return (
                    <span className="category-item" style={{ color: lastItem ? '#666' : '#999' }} key={category}>
                        {category} {!lastItem && <span className="chevron-arrow">></span>}
                    </span>
                )
            }) :
            null;
        return (
            <nav className="container" role="navigation">
                <div className="row justify-content-center breadcrumbs">
                    <div className="col-10">
                        {categories && <span> {breadcrumbs}</span>}
                    </div>
                </div>
            </nav>
        );
    }
}