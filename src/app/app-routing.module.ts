import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewproductComponent } from 'src/app/components/newproduct/newproduct.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'new', component: NewproductComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
