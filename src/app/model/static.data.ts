import { Injectable } from "@angular/core";
import { Product,Orders } from "./product.model";
import { Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";


@Injectable()
export class StaticDataSource {
  products: Product[] = [

    {
      id: 1, firstname: 'lee', lastname: 'carroll', address: '1234 anywhere st.', city: 'phoenix',
      orders: [
        { product1: 'basket', price: 29.99, quantity: 1, ordertotal: 29.99 },
        { product1: 'yarn', price: 9.99, quantity: 1, ordertotal: 39.96 },
        { product1: 'needes', price: 5.99, quantity: 1, ordertotal: 5.99 }
      ]
    },
    {
      id: 2, firstname: 'jesse', lastname: 'hawkins', address: '89 w. center st.', city: 'atlanta',
      orders: [
        { product1: 'table', price: 329.99, quantity: 1, ordertotal: 329.99 },
        { product1: 'chair', price: 129.99, quantity: 4, ordertotal: 519.96 },
        { product1: 'lamp', price: 89.99, quantity: 5, ordertotal: 449.95 },
      ]
    },
    {
      id: 3, firstname: 'charles', lastname: 'sutton', address: '455 7th ave.', city: 'quebec',
      orders: [
        { product1: 'call of duty', price: 59.99, quantity: 1, ordertotal: 59.99 },
        { product1: 'controller', price: 49.99, quantity: 1, ordertotal: 49.99 },
        { product1: 'gears of war', price: 49.99, quantity: 1, ordertotal: 49.99 },
        { product1: 'lego city', price: 49.99, quantity: 1, ordertotal: 49.99 }
      ]
    },
    {
      id: 4, firstname: 'albert', lastname: 'einstein', address: '8966 n. crescent dr.', city: 'new york city',
      orders: [
        { product1: 'baseball', price: 9.99, quantity: 5, ordertotal: 49.95 },
        { product1: 'bat', price: 19.99, quantity: 1, ordertotal: 19.99 }
      ]
    },
    {
      id: 5, firstname: 'sonya', lastname: 'williams', address: '55 s. hollywood blvd', city: 'los angeles'
    },
    {
      id: 6, firstname: 'victor', lastname: 'bryan', address: '563 n. rainier st.', city: 'seattle',
      orders: [
        { product1: 'speakers', price: 499.99, quantity: 1, ordertotal: 499.99 },
        { product1: 'ipod', price: 399.99, quantity: 1, ordertotal: 399.99 }
      ]
    },
    {
      id: 7, firstname: 'lynette', lastname: 'gonzalez', address: '25624 main st.', city: 'albuquerque',
      orders: [
        { product1: 'statue', price: 429.99, quantity: 1, ordertotal: 429.99 },
        { product1: 'picture', price: 1029.99, quantity: 1, ordertotal: 1029.99 }
      ]
    },
    {
      id: 8, firstname: 'erick', lastname: 'pittman', address: '33 s. lake blvd', city: 'chicago',
      orders: [
        { product1: 'book: angularjs development', price: 39.99, quantity: 1, ordertotal: 39.99 },
        { product1: 'book: basket weaving made simple', price: 19.99, quantity: 1, ordertotal: 19.99 }
      ]
    },
    {
      id: 9, firstname: 'alice', lastname: 'price', address: '3354 town', city: 'cleveland',
      orders: [
        { product1: 'webcam', price: 85.99, quantity: 1, ordertotal: 85.99 },
        { product1: 'hdmi cable', price: 39.99, quantity: 2, ordertotal: 79.98 }
      ]
    },
    {
      id: 10, firstname: 'Swathi', lastname: 'Shankar', address: '6795 n. 53 w. bills dr.', city: 'buffalo',
      orders: [
        { product1: 'fan', price: 49.99, quantity: 4, ordertotal: 199.96 },
        { product1: 'remote control', price: 109.99, quantity: 1, ordertotal: 109.99 }
      ]
    },
    {
      id: 11, firstname: 'Meghana', lastname: 'Srinivsa', address: '459 s. international dr.', city: 'orlando'
    }



  ];s

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }


  //saveOrder(order: Order): Observable<Order> {
  //  console.log(JSON.stringify(order));
  //  return Observable.from([order]);
  //}   
}



