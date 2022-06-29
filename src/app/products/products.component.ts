import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  category: any;
  loading: boolean = false;
  categoryId: any;
  categories: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.categoryId = params['id'];
      this.category
        ? this.getProductsOfCategory(this.categoryId)
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

  getProductsOfCategory(id: string) {
    this.loading = true;
    this.products = this.productService
      .getProductsOfCategory(this.categories[id])
      .subscribe({
        next: (res) => {
          this.products = res;
          this.loading = false;
        },
        error: (err: any) => console.log(err),
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

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
