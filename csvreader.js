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

export default function getTransactions(filePath, encoding) {
    const data = readFileSync(filePath, {encoding});
    return parse(data, {columns: true}).map(parseRecordToTransaction);
}