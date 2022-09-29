import fs from "fs";
import { parse } from 'csv-parse';
import Transaction from "./transaction.js";

const data = [];

fs.createReadStream("Transactions2014.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    // 👇 push the object row into the array
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // 👇 log the result array
    console.log("parsed csv data:");
    console.log(data.length);
    let transactions = new Transaction(data[0].Date, data[0].From, data[0].To, data[0].Narrative, data[0].Amount);
    console.log(transactions.date);
  });

import readline from 'readline-sync';

console.log('Please enter some input:');
const response = readline.prompt();

if (response == "List All") {
    console.log(response);
}
