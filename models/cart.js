module.exports = function Cart(oldCart) {   //create oldcart
    this.items = oldCart.items || {}; //assign values to oldcart...if undefined use empty object
    this.totalQty = oldCart.totalQty || 0;  //...if undefined use zero
    this.totalPrice = oldCart.totalPrice || 0;  //...if undefined use zero
    
    this.add = function(item, id) {     //function to add new items to the cart
        var storedItem = this.items[id];
        if (!storedItem) {    //if I dont have the item (does item exists?)
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};   //create a new one
        }
        storedItem.qty++;   //increase qtty by 1
        storedItem.price = storedItem.item.price * storedItem.qty;  //adjust new price
        this.totalQty++;    //update total qtty
        this.totalPrice += storedItem.item.price;    //update total price
    };
    
    //display the items
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};