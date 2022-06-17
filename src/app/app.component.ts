import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products, 'PRODUCTS');
        // this.images = this.images.filter((image: any) => {
        //   return image.images && image.images[0].type !== 'video/mp4';
        // });
      },
      error: (err: any) => console.log(err),
    });
  }
}
