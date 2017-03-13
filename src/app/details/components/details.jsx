import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { fetchDetailsFromServer, fetchDetails } from '../actions/fetch-details'
import { BuyNowBox } from '../buy-now-box/components/buy-now-box'
import { DetailsLayout } from './details-layout'
import { Loader } from '../../components/loader'
import { DetailsContent } from './content'

@connect((store) => {
    return {
        details: store.details.details,
        loading: store.details.loading
    };
})
export class Details extends React.Component {
    /**
     * if there is no id in the store fetch a new item
     */
    componentWillMount() {
        if (_.get(this, 'props.params.itemId') && !_.get(this, 'props.details.item.id')) {
            this.props.dispatch(fetchDetails(this.props.params.itemId))
        }
    }

    /**
     * clean the store when component unmounts
     */
    componentWillUnmount() {
        this.props.dispatch({ type: 'REFRESH_DETAILS_STORE' })
    }

    /**
     * Fetch data from server for universal rendering
     */
    static fetchData(store, props, host) {
        return store.dispatch(fetchDetailsFromServer(props.params.itemId, host))
    }

    render() {
        const {details, loading} = this.props;
        const {item} = details;
        let content;
        if (item) {
            item.condition = item.condition.charAt(0).toUpperCase() + item.condition.substr(1).toLowerCase();
            content = (<DetailsContent item={item} key={item.id} />);
        } else {
            content = (<Loader key="loader" />);
        }

        return (
            <DetailsLayout>
                <ReactCSSTransitionGroup
                    transitionName="loader"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {content}
                </ReactCSSTransitionGroup>
            </DetailsLayout>
        );
    }

}