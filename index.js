import readline from 'readline-sync';
import getTransactions from './csvreader.js';
import Account from './account.js';
import Bank from './bank.js';

const bank = new Bank();

const transactions = getTransactions('Transactions2014.csv', 'utf-8');
transactions.forEach(
    function(transaction){
        bank.addTransaction(transaction);
    }
);
console.log('Do you want to List All or List Account: ');
const response = readline.prompt();

if (response == "List All") {
    listAllAccounts(bank);
}

if (response == "List Account") {
  console.log('Please enter Account Name: ');
  const name_response = readline.prompt();
  listOneAccount(name_response,bank);
}

function listAllAccounts(bank) {
    console.log('\nAll accounts:');
    Object.values(bank.accounts).forEach( function(oneAccount){
        console.log(`Account Name: ${oneAccount.owner}/nBalance: ${oneAccount.balance}`);
        // *** amend the output above to include the account balance
    });
}

function listOneAccount(owner, bank) {
    const account = bank.accounts[owner];
    if (account !== undefined) {
        // Get the transactions sorted in date order
        console.log(`\nAccount ${owner}: *** NOT IMPLEMENTED ***`);
        console.log(account.incomingTransactions);
        console.log(account.outgoingTransactions);
    } else {
        console.log(`\nThere is no account known in the name of ${owner}`);
    }
}