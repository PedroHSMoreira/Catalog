import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { DetailProductsComponent } from './components/detail-products/detail-products.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'product-detail', component: DetailProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
