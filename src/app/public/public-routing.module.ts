import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';


const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: PageHomeComponent
      },
      {
        path: 'category/:id',
        component: PageHomeComponent
      }
    ]
  },
  {
    path: 'shopping-car',
    component: PageShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
