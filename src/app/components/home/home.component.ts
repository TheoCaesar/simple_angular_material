import { Component } from '@angular/core';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MakeComponent } from './make/make.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImageSliderComponent,
    MakeComponent,
    ProductOffersComponent,
    FeaturedProductsComponent,
  ],
  template: `
    <p>
      <app-image-slider></app-image-slider>
      <app-make></app-make>
      <app-product-offers></app-product-offers>
      <app-featured-products></app-featured-products>
    </p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
