import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() headers: string[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
