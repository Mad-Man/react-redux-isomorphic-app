import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchListFromServer } from '../actions/fetch-list'
import { ItemCard } from './item-card'

@connect((store) => {
    return {
        list: store.list,
        search: store.search
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
        const mappedItems = list.data && list.data.items ? list.data.items.map((item) => {
            return (
                <div key={item.id} className="col-md-12 item-card">
                    <ItemCard item={item} />
                </div>
            )
        }) : null
        return (<div className="col-md-10">{mappedItems}</div>);
    }
}