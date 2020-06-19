import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormOrderComponent, PageEditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
