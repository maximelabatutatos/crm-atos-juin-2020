import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextModule } from '../text/text.module';
import { BtnComponent } from './components/btn/btn.component';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [NavInlineComponent, BtnComponent, TableLightComponent, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextModule,
    IconsModule
  ],
  exports: [NavInlineComponent, BtnComponent, TableLightComponent, TableDarkComponent]
})
export class LibraryModule { }
