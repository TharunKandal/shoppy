import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = [];
  cartItems = new BehaviorSubject<any>([]);
  constructor() {}

  addItem(product: any) {
    this.cart.push(product);
    this.cartItems.next(this.cart);
  }

  addQuantityAndTotal(cartItems: any) {
    let cartlist = [];
    cartlist = cartItems.map((item: any) => {
      let count = 0;
      cartItems.map((product: any) => {
        if (product.id == item.id) {
          count = count + 1;
        }
      });
      return Object.assign({ ...item, quantity: count });
    });
    cartlist = [
      ...new Map(cartlist.map((item: any) => [item['id'], item])).values(),
    ];
    cartlist = cartlist.map((item: any) => {
      return Object.assign({ ...item, total: item.quantity * item.price });
    });
    this.cartItems.next(cartlist);
  }

  removeItem(product: any) {
    console.log(this.cart);
    this.cart.map((item: any, index: any) => {
      if (item.id === product.id) {
        console.log(index);
        this.cart.splice(index, 1);
      }
    });
    this.cartItems.next(this.cart);
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
  }
}
