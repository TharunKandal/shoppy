import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = [];
  cartItems = new BehaviorSubject<any>([]);
  constructor() {}

  // get CartItems() {
  //   return this.cartItems.asObservable();
  // }

  // set CartItems(product: any) {
  //   this.cart.push(...product);
  //   this.cartItems.next(this.cart);
  // }

  addItem(product: any) {
    this.cart.push(product);
    this.cartItems.next(this.cart);
  }

  removeItem(product: any) {
    this.cart.map((item: any, index: any) => {
      item.id === product.id ? this.cart.splice(index, 1) : '';
    });
  }

  clearCart() {
    this.cart = [];
  }

  getTotal() {
    let total = 0;
    this.cart.map((item: any) => {
      total += item.price;
    });
    return total;
    console.log(total);
  }
}
