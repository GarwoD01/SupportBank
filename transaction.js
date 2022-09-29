

export default function Transaction(date, from, to, narrative, amount) {
    this.date = date;
    this.from_person = from;
    this.to_person = to;
    this.context = narrative;
    this.amount = amount;
  }