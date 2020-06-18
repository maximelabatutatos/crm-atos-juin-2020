import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  // private sub: Subscription;

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.sub = this.os.collection.subscribe((flux) => {
    //  this.collection = flux;
    // });
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Etat'];
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
