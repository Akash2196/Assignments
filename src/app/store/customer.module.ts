import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CustomerComponent } from "./customer.component";
import { StaticDataSource } from "../model/staticdata";
@NgModule({
  imports: [BrowserModule],
  declarations: [CustomerComponent],
  exports: [CustomerComponent],
  providers: [StaticDataSource]
})
export class StoreModule { }
