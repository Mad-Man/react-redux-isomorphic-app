import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchDetails } from '../../details/actions/fetch-details'
import { Price } from '../../components/price'

@connect((store) => {
    return store;
})
export class ItemCard extends React.Component {
    render() {
        const {item, lastItem, dispatch} = this.props;
        const fontSize = {
            max: '24px',
            min: '24px'
        }

        return (
            <div className="col-12 item-card">
                <Link to={`/items/${item.id}`} onClick={(e) => { dispatch(fetchDetails(item.id)) } }>
                    <div className="row">
                        <figure>
                            <img src={item.picture} alt={item.title} />
                        </figure>
                        <div className="col-12 col-md-9 item-info">
                            <span className="price-info">
                                <Price fontSize={fontSize} item={item} />
                                {item.free_shipping &&
                                    <i className="sprite inline sprite-ic_shipping"></i>
                                }
                            </span>
                            <span className="item-address pull-right">{item.address.state_name}</span>
                            <h2 className="item-title">{item.title}</h2>
                        </div>
                    </div>
                </Link>
                {!lastItem && <hr />}
            </div>
        )
    }
}