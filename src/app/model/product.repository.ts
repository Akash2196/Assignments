import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.data";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  //private customers: Customers[] = []; 
  constructor(private datasource: StaticDataSource) {
    datasource.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  getProducts(category: string = null): Product[] {
    return this.products;
    
  
  
  }
  getCustomer(id: number): Product {
    return this.products.find(p => p.id == id);
  } 
 
  


 


}
