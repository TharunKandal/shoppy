import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: any;
  categories: any;
  cartItemCount: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.getCategories();
    this.cartService.cartItems.subscribe((cartItems) => {
      this.cartItemCount = cartItems.length;
    });
  }
  getCategories() {
    this.categories = this.productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
        console.log(this.categories, 'Categories');
      },
      error: (err: any) => console.log(err),
    });
  }
}
