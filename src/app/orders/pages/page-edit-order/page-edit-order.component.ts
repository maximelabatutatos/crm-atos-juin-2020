import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public id: number;
  public order$: Observable<Order>;
  public states = Object.values(StateOrder);

  constructor(private route: ActivatedRoute, private os: OrdersService, private router: Router) {
  }

  ngOnInit(): void {
    this.order$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.os.getById(+params.get('id')))
    );
  }

  public edit(item: Order) {
    this.os.update(item).subscribe((res) => {
      this.router.navigate(['orders'])
    })
  }

}
