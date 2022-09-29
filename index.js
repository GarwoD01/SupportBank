import readline from 'readline-sync';
import Transaction from "./transaction.js";
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import moment from 'moment';

function parseRecordToTransaction(record) {
    return new Transaction(
        moment(record.Date, 'DD/MM/YYYY'),
        record.From,
        record.To,
        record.Narrative,
        +record.Amount
    );
}

function getTransactions(filePath, encoding) {
    const data = readFileSync(filePath, {encoding});
    return parse(data, {columns: true}).map(parseRecordToTransaction);
}

const transaction = getTransactions("Transactions2014.csv", "UTF-8");

console.log('Do you want to List All or List Account: ');
const response = readline.prompt();

if (response == "List All") {
  console.log(response);
}

if (response == "List Account") {
  console.log('Please enter Account Name: ');
  const name_response = readline.prompt();
  for (let i = 0; i < transaction.length;i++){
    //console.log(transaction[i].to_person);
    if (transaction[i].to_person == (name_response) || transaction[i].from_person == (name_response)){
      console.log(transaction[i]);
    }
}
}
