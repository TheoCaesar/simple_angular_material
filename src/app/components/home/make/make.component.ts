import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card"

interface Brand {
  name: string;
  logoPath: string;
}

@Component({
  selector: 'app-make',
  standalone: true,
  imports: [MatCardModule, NgFor],
  template: `
    <mat-card>
      <div class="mat-card">
        <mat-card-title> Featured Makes </mat-card-title>
      </div>
      <mat-card-content>
        <div class="make-container">
          <div class="make-item" 
            *ngFor="let make of makes;let ii=index;"> 
            <img [src]="make.logoPath" alt="{{make.name}} logo">
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .mat-card {
      margin: 20px auto;
    }

    .make-container {
      display:flex;
      flex-wrap: wrap;
      justify-content: center
    }

    .make-item {
      margin: 20px;
      opacity : 1;
    }

    .make-item img {
      max-width: 200px;
      max-height: 100px;
    }
  `
})
export class MakeComponent {
  makes: Brand[] = [
    { name: 'Bugatti', logoPath: './../../../assets/brands/Bugatt.jpg'},
    { name: 'BMW', logoPath: './../../../assets/brands/bmw.jpg'},
    { name: 'Ferrari', logoPath: './../../../assets/brands/ferrari.jpeg'},
    { name: 'Lamborghini', logoPath: './../../../assets/brands/Lamborghini.jpg'},
    { name: 'Mercedes Benz', logoPath: './../../../assets/brands/marcedese.jpg'},
    { name: 'Peugeot', logoPath: './../../../assets/brands/peaugeot.jpg'},
    { name: 'Toyota', logoPath: './../../../assets/brands/toyota.jpg'},
  ]
}
