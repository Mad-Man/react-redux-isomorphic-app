import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchDetails } from '../../details/actions/fetch-details'

@connect((store) => {
    return store;
})
export class ItemCard extends React.Component {
    render() {
        const {item, dispatch} = this.props;
        return (
            <Link to={`/items/${item.id}`} onClick={(e) => { dispatch(fetchDetails(item.id)) } }>
                <div className="row">
                    <span className="col-md-3">
                        <img src={item.picture} alt="" />
                    </span>
                    <span className="col-md-9">
                        <span>$ {item.price.amount}
                            {item.free_shipping &&
                                <i className="sprite inline sprite-ic_shipping"></i>
                            }
                        </span>
                        <p>{item.title}</p>
                    </span>
                </div>
                <hr />
            </Link>
        )
    }
}