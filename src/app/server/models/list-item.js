import _ from 'lodash'

class ListItem {
    constructor(item) {
        this._responseItem = item;

        this.id = String;
        this.title = String;
        this.price = {
            currency: String,
            amount: Number,
            decimals: Number
        };
        this.picture = String;
        this.condition = String;
        this.free_shipping = Boolean;
        this.address = Boolean;
        this._createListItem();
    }

    _createListItem() {
        let price = _.get(this, '_responseItem.price');
        this.id = _.get(this, '_responseItem.id');
        this.title = _.get(this, '_responseItem.title');
        this.price.currency = _.get(this, '_responseItem.currency_id');
        this.price.amount = parseInt(price.toString());
        this.price.decimals = (price % 1).toFixed(2) * 100;
        this.picture = _.get(this, '_responseItem.thumbnail');
        this.condition = _.get(this, '_responseItem.condition');
        this.free_shipping = _.get(this, '_responseItem.shipping.free_shipping');
        this.address = _.get(this, '_responseItem.address');
    }

    getListItem() {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            picture: this.picture,
            condition: this.condition,
            free_shipping: this.free_shipping,
            address: this.address
        }
    }

}
module.exports = ListItem;