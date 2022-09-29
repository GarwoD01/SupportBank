import { readFileSync } from 'fs';
import moment from 'moment';
import {parse} from 'csv-parse/sync';
import Transaction from './transaction.js';

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

const transactions = getTransactions('Transactions2014.csv', 'utf-8');


console.log(transactions[1].context)