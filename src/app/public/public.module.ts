import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
