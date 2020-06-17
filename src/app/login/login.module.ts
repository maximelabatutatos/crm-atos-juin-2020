import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TemplatesModule,
    TextModule
  ]
})
export class LoginModule { }
