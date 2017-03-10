import React from 'react'
export class BuyNowBox extends React.Component {
    render() {
        const {item, formatter} = this.props;
        return (
            <div className="col-md-3 buy-now">
                <p className="item-condition">
                    {item.condition &&
                        <span>{item.condition}</span>
                    }
                    {item.condition && item.sold_quantity >= 0 && <span> - </span>}
                    {item.sold_quantity >= 0 && <span>{item.sold_quantity} vendidos</span>}
                </p>
                <span className="item-title">{item.title}</span>
                <div className="price-container">{formatter && <span className="price-amount">{formatter.format(item.price.amount)}</span>}</div>
                <button type="button" className="btn buy-now-btn">Comprar</button>
            </div>
        );
    }
}