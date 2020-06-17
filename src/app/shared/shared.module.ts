import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';



@NgModule({
  declarations: [ColorDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective]
})
export class SharedModule { }
