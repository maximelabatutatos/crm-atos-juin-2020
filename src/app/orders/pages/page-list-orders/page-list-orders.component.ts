import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public collection: Order[];
  public headers: string[];
  public states = Object.values(StateOrder);
  public form: FormGroup;
  @Input() search: string;
  // private sub: Subscription;

  constructor(private os: OrdersService, private fb: FormBuilder) {
    this.form = this.fb.group({
      search: [this.search]
    });
  }

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.sub = this.os.collection.subscribe((flux) => {
    //  this.collection = flux;
    // });
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Etat'];

    this.form.valueChanges.subscribe((data) => {
      this.search = data.search;
      this.filterCollection(data.search);
    });
  }

  public filterCollection(data: string){
    this.collection$.forEach(orders => {
      for(let order of orders){
        // console.log(order.typePresta + " " + data + " " + order.typePresta.includes(data))
        order['found'] = order.typePresta && order.typePresta.includes(data);
      }
    })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  public changeState(item: Order, e){
    this.os.changeState(item, e.target.value).subscribe((res) =>{
      item.state = res.state;
    });
  }

  public popup(){
    console.log("popup")
  }

  public deleteItem(item: Order){
    this.os.delete(item).subscribe((res) =>{
      console.log("order supprimé");
    });
  }

}
