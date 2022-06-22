import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  loading: boolean = false;
  cartItems: any = [];
  subTotal: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((cartItems) => {
      this.cartItems = cartItems.map((item: any) => {
        return Object.assign({ ...item, quantity: 1 });
      });
      this.subTotal = this.getSubTotal();
    });
  }
  getSubTotal() {
    let total = 0;
    this.cartItems.map((item: any) => {
      total = total + item.price;
    });
    return total;
  }
  removeItem(item: any) {
    this.cartService.removeItem(item);
  }
}
