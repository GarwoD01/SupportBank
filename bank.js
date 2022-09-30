import Account from './account.js';

export default class Bank {
    constructor() {
        this.accounts = {};
    }


    getOrCreateAccount(owner) {
        return this.accounts[owner] || (this.accounts[owner] = new Account(owner));
    }

    addTransaction(transaction) {
        let fromAccount = this.getOrCreateAccount(transaction.from_person);
        // *** add code here to add transaction  to account
        fromAccount.addOutgoingTransaction(transaction);
        let toAccount = this.getOrCreateAccount(transaction.to_person);
        // *** add code here to add transaction  to account
        toAccount.addIncomingTransaction(transaction);
    }}