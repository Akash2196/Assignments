import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product, Orders } from "../model/product.model";
import { StaticDataSource } from "../model/static.data";
import { RouterModule, ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "single",
  templateUrl: "singleCustomer.html"
})
export class singleComponent {

  id: number
  _customer: Product
  constructor(private repository: ProductRepository, private router: Router,
    activeRoute: ActivatedRoute) {



    //get products(): Product[] {
    //  return this.repository.getProducts();

    //}
    this.id = activeRoute.snapshot.params["id"];
    this._customer = this.repository.getCustomer(this.id);


  }

  get customer(): Product {
    return this._customer;
  }




}
