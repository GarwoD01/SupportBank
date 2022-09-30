export default class Account {
    constructor(owner) {
        this.owner = owner;
        this.incomingTransactions = [];
        this.outgoingTransactions = [];
        this.balance = 0
    }

    addIncomingTransaction(transaction) {
        this.incomingTransactions.push(transaction);
        this.balance += transaction.amount;
    }

    addOutgoingTransaction(transaction) {
        this.outgoingTransactions.push(transaction);
        this.balance -= transaction.amount;
    }

    /* balance() {
      let totalIncoming = 0;
      let totalOutgoing = 0;
      for (let i = 0; i < incomingTransactions.length; i++){
        totalIncoming += incomingTransactions[i];
      }
      for (let i = 0; i < outgoingTransactions.length; i++){
        totalOutgoing += outgoingTransactions[i];
      }
      return totalIncoming - totalOutgoing;
    } */
}