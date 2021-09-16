export class Orders {
    _id: number;
    total: number;
    userId: number
    products: Array<string>;
    status: string;
    date: Date;
    
    
    constructor(id:number, total:number, status:string = "", userId:number = 0, products: Array<string>, date: Date) {
        this._id = id;
        this.total = total;
        this.status = status;
        this.userId = userId;
        this.products = products;
        this.date = date;
    }
}
