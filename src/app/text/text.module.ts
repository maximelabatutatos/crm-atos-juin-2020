import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TextComponent } from './components/text/text.component';



@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TextComponent]
})
export class TextModule { }
