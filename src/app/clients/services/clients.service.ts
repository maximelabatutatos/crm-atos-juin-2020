import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor( private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Client[]>){
    this.pCollection = col;
  }

  // changeState item in collection

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id from collection


}
