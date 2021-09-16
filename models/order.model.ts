export class Order {
    constructor(public _id: number, public total: number, public userId: number, public products: Array<string>, public status: string, public date: Date) { }
}