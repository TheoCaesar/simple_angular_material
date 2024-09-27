import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list'

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-product-offers',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgFor, CurrencyPipe],
  template: `
    <mat-card>
      <mat-card-header class="mat-card-header">
        <mat-card-title>Car Product Offers</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-grid-list cols="4" gutterSize="16px">
          <mat-grid-tile *ngFor="let product of products">
            <mat-card class="product-card">
              <div class="card-content">
                <img mat-card-image [src]="product.image" [alt]="product.name"/>
                <div class="overlay">
                  <h3>{{product.name}}</h3>
                  <p>{{product.description}}</p>
                  <p class="price">{{product.price | currency: 'USD'}}</p>
                  <button mat-raised-button color="primary">Shop Now</button>
                </div>
              </div>
            </mat-card>
          </mat-grid-tile>
        </mat-grid-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .mat-card-header {
      margin: 20px auto;
    }

    .product-card{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      margin: 2px;
    }

    .card-content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align:center;
    }

    img {
      width:100%; height: 100%;
      display: block;
    }

    .overlay {
      background-color: rgba(0,0,0,0.8);
      color: white;
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      opacity: 1;
      transition: opacity 0.3s;
    }

    .price {
      color: #138e3c;
      margin-top: 8px;
      font-weight: bold;
    }
  `
})
export class ProductOffersComponent {
  products : Product[] = [
    
    {
      name: "Honda CRV",
      description: `Lorem ipsum odor amet, consectetuer 
      adipiscing elit.Nullam nibh ex litora curabitur habitasse. 
        Aliquam lobortis auctor magnis fringilla dis blandit quisque suspendisse. `,
      image:     "./../../../assets/offers/offer1.png"  ,
      price: 223657,
    },    
    {
      name: "Mercedes Benz GLE 350",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Nullam nibh ex litora curabitur habitasse. 
        Aliquam lobortis auctor magnis fringilla dis blandit quisque suspendisse. `,
      image:     "./../../../assets/offers/offer2.jpg"  ,
      price: 199350,
    },
    {
      name: "Toyota Hilux",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Nullam nibh ex litora curabitur habitasse. 
        Aliquam lobortis auctor magnis fringilla dis blandit quisque suspendisse. `,
      image:     "./../../../assets/offers/offer3.jpg"  ,
      price: 254999,
    },
    {
      name: "Mercedes Benz GLB 250 4matic",
      description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Nullam nibh ex litora curabitur habitasse. 
        Aliquam lobortis auctor magnis fringilla dis blandit quisque suspendisse. `,
      image:     "./../../../assets/offers/offer4.jpg"  ,
      price: 399999,
    },
  ]
}
