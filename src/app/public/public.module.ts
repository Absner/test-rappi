import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PublicRoutingModule } from './public-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';





@NgModule({
  declarations: [PageHomeComponent, PageShoppingComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class PublicModule { }
