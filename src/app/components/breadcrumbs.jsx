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
            categories.map((category) => { return <span className="category-item" key={category}>{category} <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> </span> }) :
            null;

        return (
            <div className="row justify-content-center breadcrumbs">
                {categories &&
                    <div className="col-md-10">
                        {breadcrumbs} {breadcrumbs && <span>{search}</span>}
                    </div>
                }
            </div>
        );
    }
}