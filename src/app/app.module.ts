import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { UrlTransform } from './pipes/transform-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    UrlTransform,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  exports: [UrlTransform],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
