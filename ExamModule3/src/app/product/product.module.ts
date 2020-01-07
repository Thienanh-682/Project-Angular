import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductAddComponent} from '../products/product-add/product-add.component';
import {ProductListComponent} from '../products/product-list/product-list.component';
import {ProductEditComponent} from '../products/product-edit/product-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '' , component: ProductListComponent},
  {path: 'create' , component: ProductAddComponent},
  {path: ':id' , component: ProductEditComponent}
];
@NgModule({
  declarations: [ProductAddComponent, ProductListComponent, ProductEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
