import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [ColorDirective, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, TotalPipe]
})
export class SharedModule { }