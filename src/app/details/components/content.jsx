import React from 'react'
import connect from 'react-redux'
import { BuyNowBox } from '../buy-now-box/components/buy-now-box'

export class DetailsContent extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className="row">
                <figure className="col-12 col-md-9">
                    <img className="item-detail-picture" src={item.picture} alt="" />
                </figure>
                <aside className="col-12 col-md-3 buy-now">
                    <BuyNowBox item={item} />
                </aside>
                {item.description && <section className="col-12 description-container">
                    <h1>Descripción del Producto</h1>
                    <article className="description-section" dangerouslySetInnerHTML={{ __html: item.description }}></article>
                </section>}
            </div>
        )
    }
}