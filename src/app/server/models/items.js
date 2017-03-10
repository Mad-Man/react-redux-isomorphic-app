 import _ from 'lodash'
 import ListItem from './list-item'
 import Constants from '../server-constants'

 class Items {
     constructor(list) {
         this._responseItems = [];
         this._originalList = list;
         this.author = {
             name: String,
             lastname: String
         };
         this.categories = [];
         this.items = [];
         this._createList();
     }

     _getItems(results) {
         results.forEach((item) => {
             this._responseItems.push(new ListItem(item).getListItem());
         })
     }

     _getCategories() {
         var resultCategories = [];
         let filters = _.get(this, '_originalList.filters');
         if (filter) {
             filters.forEach((categories) => {
                 if (categories.values) {
                     categories.values.forEach((category) => {
                         if (category.path_from_root) {
                             category.path_from_root.forEach((categoryValue) => {
                                 resultCategories.push(categoryValue.name);
                             })
                         }
                     })
                 }
             })
         }
         return resultCategories;
     }
     _createList() {
         this._getItems(_.get(this, '_originalList.results'));
         this.author.name = Constants.AUTHOR.NAME;
         this.author.lastName = Constants.AUTHOR.LASTNAME;
         this.categories = this._getCategories();
         this.items = [...this._responseItems];
     };

     getList() {
         return {
             author: this.author,
             categories: this.categories,
             items: this.items
         }
     }
 }


 module.exports = Items;