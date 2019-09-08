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

const COMPONENTS: Array<any> = [
  NavbarComponent,
  CardProductComponent,
  FilterSearchComponent
];

@NgModule({
  declarations: [COMPONENTS, MultiplePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
