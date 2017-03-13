import React from 'react'

export class Price extends React.Component {
    render() {
        const {item, fontSize} = this.props;
        let currency = item.price.currency === 'ARS' ? '$' : item.price.currency;
        let price = currency + ' ' + item.price.amount.toLocaleString('es-AR');
        let maxCharacters = 11;
        let inlineFontSize = price.length > maxCharacters ? fontSize.min : fontSize.max;
        let decimals = (item.price.decimals < 10) ?
            '0' + item.price.decimals :
            item.price.decimals.toString().substr(0, 2);

        return (
            <span>
                <span className="price-amount" style={{ fontSize: inlineFontSize }}>{price}</span>
                <span>
                    {parseInt(decimals) > 0 && <sup>{decimals}</sup>}
                </span>
            </span>
        )
    }
}