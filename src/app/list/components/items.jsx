import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { fetchListFromServer } from '../actions/fetch-list'
import { ItemCard } from './item-card'
import { Loader } from '../../components/loader'

@connect((store) => {
    return {
        list: store.list,
        search: store.list.query
    };
})
export class Items extends React.Component {
    /**
     * Fetch data from server for universal rendering
    */
    static fetchData(store, props, host) {
        return store.dispatch(fetchListFromServer(props.location.query.search, host))
    }

    render() {
        const {list} = this.props
        let maxItems = 4;
        const mappedItems = list.data && list.data.items ?
            list.data.items.slice(0, maxItems)
                .map((item, index, items) => {
                    let lastItem = index === items.length - 1;
                    return (
                        <article key={item.id}>
                            <ItemCard item={item} lastItem={lastItem} />
                        </article>
                    )
                }) : (<Loader key="loader" />);
        return (
            <ReactCSSTransitionGroup
                transitionName="loader"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div className="row justify-content-center">
                    <div className="col-10 list-container">{mappedItems}</div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}