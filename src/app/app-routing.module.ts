import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './clients/pages/page-list-clients/page-list-clients.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent},
  {path: 'login', component: PageLoginComponent},
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
