import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product,Orders } from "../model/product.model";
import { StaticDataSource } from "../model/static.data";

@Component({
  selector: "ProductComponent",
  templateUrl: "product.html"

})
export class productComponent {

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
    
  }
  
  //get customer(): Customers[] {
  //  return this.repository.getcustomer();
  //}
 

}
