import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor( private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Order[]>){
    this.pCollection = col;
  }

  // changeState item in collection
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  // add item in collection
  public add(item: Order): Observable<Order>{
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  // delete item in collection
  public delete(item: Order){
    return this.http.delete(`${this.urlApi}orders/${item.id}`);
  }

  // get item by id from collection
  public getById(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }

}
