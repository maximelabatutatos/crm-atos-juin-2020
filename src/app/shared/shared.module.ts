import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorDirective } from './directives/color.directive';
import { StateDirective } from './directives/state.directive';
import { CaPipe } from './pipes/ca.pipe';
import { TotalPipe } from './pipes/total.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [ColorDirective, TotalPipe, StateDirective, CaPipe, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, TotalPipe, StateDirective, CaPipe, HighlightDirective]
})
export class SharedModule { }
