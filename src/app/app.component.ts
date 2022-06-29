import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { UrlTransform } from './pipes/transform-url.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UrlTransform],
})
export class AppComponent implements OnInit {
  products: any;
  categories: any;
  cartItemCount: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private urlTransform: UrlTransform
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
      },
      error: (err: any) => console.log(err),
    });
  }
}
