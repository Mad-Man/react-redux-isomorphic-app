 import _ from 'lodash'
 import Constants from '../server-constants'
 
 class ItemDetails {
     constructor(payload) {
         this._originalItem = payload.item;
         this._originalDescription = payload.description;
         this.author = {
             name: Constants.AUTHOR.NAME,
             lastname: Constants.AUTHOR.LASTNAME
         }
         this.item = {
             id: String,
             title: String,
             price: {
                 currency: String,
                 amount: Number,
                 decimals: Number,
             },
             picture: String,
             condition: String,
             free_shipping: Boolean,
             sold_quantity: Number,
             description: String
         }
         this._createDetailItem();
     }

     _createDetailItem() {
         this.item.id = _.get(this, '_originalItem.id');
         this.item.title = _.get(this, '_originalItem.title');
         this.item.price.currency = _.get(this, '_originalItem.currency_id');
         this.item.price.amount = _.get(this, '_originalItem.price');
         this.item.price.decimals = 0;
         this.item.picture = _.get(this, '_originalItem.pictures[0].url');
         this.item.condition = _.get(this, '_originalItem.condition');
         this.item.sold_quantity = _.get(this, '_originalItem.sold_quantity');
         this.item.description = _.get(this, '_originalDescription.text');
     }

     getDetailItem() {
         return {
             author: this.author,
             item: {
                 id: this.item.id,
                 title: this.item.title,
                 price: this.item.price,
                 picture: this.item.picture,
                 condition: this.item.condition,
                 sold_quantity: this.item.sold_quantity,
                 description: this.item.description
             }
         }
     }
 }

 module.exports = ItemDetails;