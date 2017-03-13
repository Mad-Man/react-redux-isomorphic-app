import React from 'react'
import { Price } from '../../../components/price'

export class BuyNowBox extends React.Component {
    render() {
        const {item} = this.props;
        const fontSize = {
            max: '46px',
            min: '30px'
        }
        return (
            <section>
                <h3 className="item-condition">
                    {item.condition &&
                        <span>{item.condition}</span>
                    }
                    {item.condition && item.sold_quantity >= 0 && <span> - </span>}
                    {item.sold_quantity >= 0 && <span>{item.sold_quantity} vendidos</span>}
                </h3>
                <h1 className="item-title">{item.title}</h1>
                <h2 className="price-container">
                    <Price fontSize={fontSize} item={item} />
                </h2>
                <button type="button" className="btn buy-now-btn">Comprar</button>
            </section>
        );
    }
}