import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule
  ]
})
export class ClientsModule { }
