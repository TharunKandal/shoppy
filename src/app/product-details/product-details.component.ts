import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productid: any;
  loading: boolean = false;
  product: any;
  count: any = 1;
  similarProducts: any = [];
  similarsLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productid = params['id'];
      this.productid ? this.getProduct(this.productid) : '';
    });
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }

  getProduct(productid: string) {
    this.loading = true;
    this.productService.getProduct(productid).subscribe({
      next: (res) => {
        this.product = res;

        this.getSimilarproducts(this.product.category);
        this.loading = false;
      },
      error: (err: any) => console.log(err),
    });
  }

  getSimilarproducts(category: string) {
    this.similarsLoading = true;
    this.productService.getProductsOfCategory(category).subscribe({
      next: (res) => {
        this.similarProducts = res;
        this.similarsLoading = false;
      },
      error: (err: any) => console.log(err),
    });
  }

  increment() {
    this.count += 1;
    console.log(this.count);
  }
  decrement() {
    this.count > 0 ? (this.count -= 1) : '';
    console.log(this.count);
  }
}
