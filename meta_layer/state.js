// state interface
class OrderState {
    constructor() {
        console.log("Creating a new state.");
    }

    // switch from "NewOrder" to "PreparingOrder".
    prepareOrder(_context) {
        throw new Error("This method must be overridden!");
    }

    // switch from "PreparingOrder" to "ReadyForPickup".
    pickupOrder(_context) {
        throw new Error("This method must be overridden!");
    }

    // switch from "ReadyForPickup" to "CompletedOrder".
    completeOrder(_context) {
        throw new Error("This method must be overridden!");
    }
};

class NewOrder extends OrderState {
    constructor() {
        super();
        this._statusName = NewOrder.name;
        console.log(this.toString());
    }

    prepareOrder(context) {
        const state = new PreparingOrder();
        console.log(`Switching to the ${state.toString()} state`);
        context.state = state;
    }

    pickupOrder(_context) {
        throw new Error("Not possible to switch to ReadyForPickup from NewOrder.");
    }

    completeOrder(_context) {
        throw new Error("Not possible to switch to CompleteOrder from ReadyForPickup.");
    }

    toString() {
        return `Current status is set on: ${this._statusName}`;
    }
};

class PreparingOrder extends OrderState {
    constructor() {
        super();
        this._statusName = PreparingOrder.name;
        console.log(this.toString());
    }

    prepareOrder(_context) {
        throw new Error("Not possible to switch to NewOrder from PreparingOrder.");
    }

    pickupOrder(context) {
        const state = new ReadyForPickup();
        context.state = state;
    }

    completeOrder(_context) {
        throw new Error("Not possible to switch to CompleteOrder from PreparingOrder.");
    }

    toString() {
        return `Current status is set on: ${this._statusName}`;
    }
};

class ReadyForPickup extends OrderState {
    constructor() {
        super();
        this._statusName = ReadyForPickup.name;
        console.log(this.toString());
    }

    prepareOrder(_context) {
        throw new Error("Not possible to switch to PreparingOrder from ReadyToPickup.");
    }

    pickupOrder(_context) {
        throw new Error("Not possible to switch to ReadyToPickup from ReadyToPickup.");
    }

    completeOrder(context) {
        const state = new CompletedOrder();
        context.state = state;
    }

    toString() {
        return `Current status is set on: ${this._statusName}`;
    }
};

class CompletedOrder extends OrderState {
    constructor() {
        super();
        this._statusName = CompletedOrder.name;
        console.log(this.toString());
    }

    prepareOrder(_context) {
        throw new Error("Final state.");
    }

    pickupOrder(_context) {
        throw new Error("Final state.");
    }

    completeOrder(_context) {
        throw new Error("Final state.");
    }

    toString() {
        return `Current status is set on: ${this._statusName}`;
    }
};

module.exports = {
    OrderState,
    PreparingOrder,
    ReadyForPickup,
    CompletedOrder,
    NewOrder
};
