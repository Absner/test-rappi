import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { CardProductComponent } from './card-product/card-product.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';

const COMPONENTS: Array<any> = [
  NavbarComponent,
  CardProductComponent,
  FilterSearchComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
