import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardProductComponent } from './card-product/card-product.component';

const COMPONENTS: Array<any>  = [
  NavbarComponent,
  CardProductComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
