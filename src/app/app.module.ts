import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CustomerComponent } from './store/customer.component';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.data';
import { RouterModule, Route } from "@angular/router";
import { productComponent } from './store/product.component';
import { singleComponent } from './store/single.customer';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    productComponent,
    singleComponent
    

  ],
  providers: [ProductRepository, StaticDataSource],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "Customers", component: CustomerComponent,
        
      },
      {
        path: "Products", component: productComponent,
      },
      {
        path: "customer/:id", component:singleComponent,
      },
      {
        path: "**", redirectTo:"/Customers",
      },


      
  ])
 ]
})
export class AppModule { }
