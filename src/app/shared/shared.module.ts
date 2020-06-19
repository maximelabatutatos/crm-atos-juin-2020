import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { CaPipe } from './pipes/ca.pipe';



@NgModule({
  declarations: [ColorDirective, TotalPipe, StateDirective, CaPipe],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, TotalPipe, StateDirective, CaPipe]
})
export class SharedModule { }
