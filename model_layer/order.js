const {NewOrder} = require('../meta_layer/state');

class Order {
    constructor(customer, object, price) {
        this._id = 0;
        this._customer = customer;
        this._object = object;
        this._price = price;
        this._state = new NewOrder();
    }

    set state(state) {
        this._state = state;
    }

    get state() {
        return this._state;
    }

    prepareOrder() {
        this._state.prepareOrder(this);
    }

    pickupOrder() {
        this._state.pickupOrder(this);
    }

    completeOrder() {
        this._state.completeOrder(this);
    }

    get customer() {
        return this._customer;
    }

    set customer(newName) {
        this._nome = newName;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (newPrice < 0) {
            throw new Error('Price can\'t be negative');
        }
        this._price = price;
    }

    // deallocate
    destroy() {
        console.log(`Distructor ${this._nome}.`);
        this._customer = null;
        this._object = null;
    }
};

module.exports = Order;
