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
         this._createListItem();
     }

     _createListItem() {
         this.id = this._responseItem.id;
         this.title = this._responseItem.title;
         this.price.currency = this._responseItem.currency_id;
         this.price.amount = this._responseItem.price;
         this.price.decimals = 0;
         this.picture = this._responseItem.thumbnail;
         this.condition = this._responseItem.condition;
         this.free_shipping = this._responseItem.shipping.free_shipping;
     }

     getListItem() {
         return {
             id: this.id,
             title: this.title,
             price: this.price,
             picture: this.picture,
             condition: this.condition,
             free_shipping: this.free_shipping
         }
     }

 }
 module.exports = ListItem;