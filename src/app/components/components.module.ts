import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './navbar/navbar.component';
import { CardProductComponent } from './card-product/card-product.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { RouterModule } from '@angular/router';
import { NumberCountComponent } from './number-count/number-count.component';

const COMPONENTS: Array<any> = [
  NavbarComponent,
  CardProductComponent,
  FilterSearchComponent,
  MultiplePipe,
  NumberCountComponent,
  OrderPipe
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
