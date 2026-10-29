export class Transaction {
    category: string;
    cost: number;
    date: string;
    note: string;

    constructor(category: string, cost: number, date: string, note: string) {
        this.category = category;
        this.cost = cost;
        this.date = date;
        this.note = note;
    }

    // Methods here: method(): ReturnType {}
}
