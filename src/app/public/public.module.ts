import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { PublicRoutingModule } from './public-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';




@NgModule({
  declarations: [PageHomeComponent, PageShoppingComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PublicModule { }
