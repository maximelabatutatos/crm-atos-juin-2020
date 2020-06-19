import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-order',
  templateUrl: './page-order.component.html',
  styleUrls: ['./page-order.component.scss']
})
export class PageOrderComponent implements OnInit {

  public id: number;
  public order$: Observable<Order>;
  public states = Object.values(StateOrder);
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private os: OrdersService) {
  }

  ngOnInit(): void {
    this.order$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.os.getById(+params.get('id')))
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
