const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("Transactions2014.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
  });

let transactions = new all_transactions(row);

console.log(transactions.date);

function all_transactions(date, from_person, to_person, context, amount) {
  this.date = date;
  this.from_person = from_person;
  this.to_person = to_person;
  this.context = context;
  this.amount = amount;
}

const readline = require('readline-sync');

console.log('Please enter some input:');
const response = readline.prompt();

if (response == "List All") {
    console.log(response);
}

