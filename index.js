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

function listAllAccounts(bank) {
    console.log('\nAll accounts:');
    Object.values(bank.accounts).forEach( function(oneAccount){
        console.log(`Account Name: ${oneAccount.owner} Balance: ${oneAccount.balance}`);
        // *** amend the output above to include the account balance
    });
}

if (response == "List Account") {
  console.log('Please enter Account Name: ');
  const name_response = readline.prompt();
  for (let i = 0; i < transaction.length; i++){
    if (transaction[i].to_person == (name_response) || transaction[i].from_person == (name_response)){
      console.log(transaction[i]);
    }
}
}

