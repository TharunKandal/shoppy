import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  category: any;
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.category
        ? this.getProductsOfCategory(this.category)
        : this.getProducts();
    });
  }

  getProducts() {
    this.loading = true;
    this.products = this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.loading = false;
      },
      error: (err: any) => console.log(err),
    });
  }

  getProductsOfCategory(category: string) {
    this.loading = true;
    this.products = this.productService
      .getProductsOfCategory(category)
      .subscribe({
        next: (res) => {
          this.products = res;
          this.loading = false;
        },
        error: (err: any) => console.log(err),
      });
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
