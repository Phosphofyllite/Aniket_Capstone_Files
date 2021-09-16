import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Orders } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  pro: Array<Order>;

  products: Orders[] = [
    // new Products(1, 'Product 1', 'This is product 1 description. This is a nice product, please buy!', 100),
    // new Products(2, 'Product 2', 'This is product 2 description. This is a nice product, please buy!', 200),
    // new Products(3, 'Product 3', 'This is product 3 description. This is a nice product, please buy!', 300),
    // new Products(4, 'Product 4', 'This is product 4 description. This is a nice product, please buy!', 400),
    // new Products(5, 'Product 5', 'This is product 5 description. This is a nice product, please buy!', 500),
    // new Products(6, 'Product 6', 'This is product 6 description. This is a nice product, please buy!', 600),
    // new Products(7, 'Product 7', 'This is product 7 description. This is a nice product, please buy!', 700),

  ];
  constructor(public http: HttpClient) { }

  getProducts(): Observable<Orders[]> {
    //TODO: populate product from an API
    //Also return observable
    return this.http.get<Orders[]>("http://localhost:9090/order/allOrderDetails");
  }

  
  //post method 1st parameter url and 2nd parameter json data. 
  storeOrderDetailsInfo(orderRef: any) {
    this.http.post("http://localhost:9090/order/storeOrderDetails", orderRef, { responseType: "text" }).
      subscribe(result => console.log(result), error => console.log(error));
  }
  retrieveAllOrderDetails(): Observable<Order[]> {
    
    return this.http.get<Order[]>("http://localhost:9090/order/allOrderDetails")
  }

  retrieveOrderById(id: any): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/retrieveOrderById/" + id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteOrderById(id: any): any {
    return this.http.delete("http://localhost:9090/order/deleteOrderById/" + id, { responseType: 'text' });
  }

  updateOrder(orderRef: any): any {
    return this.http.put("http://localhost:9090/order/updateOrder", orderRef, { responseType: 'text' })
  }

  
  
}
