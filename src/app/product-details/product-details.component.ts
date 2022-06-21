import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productid = params['id'];
      this.productid ? this.getProduct(this.productid) : '';
    });
  }

  getProduct(productid: string) {
    this.loading = true;
    this.product = this.productService.getProduct(productid).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
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
