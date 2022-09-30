export default class Account {
    constructor(owner) {
        this.owner = owner;
        this.incomingTransactions = [];
        this.outgoingTransactions = [];
        this.balance = 0;
    }

    addIncomingTransaction(transaction) {
        this.incomingTransactions.push(transaction);
        this.balance += transaction.amount;
    }

    addOutgoingTransaction(transaction) {
        this.outgoingTransactions.push(transaction);
        this.balance -= transaction.amount;
    }
}