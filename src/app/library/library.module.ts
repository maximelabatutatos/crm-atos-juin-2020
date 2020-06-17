import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TextModule } from '../text/text.module';
import { SharedModule } from '../shared/shared.module';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent, TableLightComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextModule
  ],
  exports: [NavInlineComponent, BtnComponent, TableLightComponent]
})
export class LibraryModule { }
