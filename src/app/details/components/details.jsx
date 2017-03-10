import React from 'react'
import { connect } from 'react-redux'
import { fetchDetails, fetchDetailsFromServer } from '../actions/fetch-details'
import { BuyNowBox } from '../buy-now-box/components/buy-now-box'

@connect((store) => {
    return {
        details: store.details.details,
        loading: store.details.loading
    };
})
export class Details extends React.Component {

    /**
     * Fetch data from server for universal rendering
     */
    static fetchData(store, props, host) {
        return store.dispatch(fetchDetailsFromServer(props.params.itemId, host))
    }

    render() {
        const {details, loading} = this.props;
        const {item} = details;
        if (item) {
            const formatter = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: item.price.currency,
                minimumFractionDigits: item.price.decimals,
            });
            item.condition = item.condition.charAt(0).toUpperCase() + item.condition.substr(1).toLowerCase();

            return (<div className="col-10">
                <div className="row">
                    <div className="col-md-9">
                        <img src={item.picture} alt="" />
                    </div>
                    <BuyNowBox item={item} formatter={formatter} />
                    <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                </div>
            </div>
            );
        } else {
            return (
                <div className="col-10">
                    <h1>Loading...</h1>
                </div>
            );
        }
    }
}