import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {trigger, transition, style, animate} from "@angular/animations"
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [MatIconModule, NgClass, NgFor],
  template: `
    <div class="slider-container">
      <button mat-icon-button class="nav-button" 
        (click)="showPrevImage()">
        <mat-icon class="mat-18">chevron_left</mat-icon>
      </button>
      <div class="image-slider">
        <img [@fadeInOut]="currentIndex" 
          [src]="images[currentIndex]" alt="image" >
        <div class="overlay">
          <h2>Car Name</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Nullam nibh ex litora curabitur habitasse. 
            Aliquam lobortis auctor magnis fringilla dis blandit quisque suspendisse.             
          </p>
          <button mat-raised-button color="primary">Shop Now</button>
        </div> 
      </div>

      <button mat-icon-button class="nav-button" 
        (click)="showNextImage()">
        <mat-icon class="mat-18">chevron_right</mat-icon>
      </button>
    </div>

    <div class='indicators'>
      <div class="indicator" 
        [ngClass] = "{active: i === currentIndex}"
        *ngFor="let img of images; let i = index" 
        (click)="currentIndex = i">
      </div>
    </div>
  `,
  styles: `
    .slider-container {
      display: flex;
      align-items: center;
      justify-content : center
    }

    .image-slider {
      display:flex;
      align-items:center;
      justify-content:center;
      width: 100%;
      max-height: 400px;
      overflow: hidden;
    }

    .nav-button {
      background-color: rgba(0,0,0,0.5);
      color: white;
      margin: 0 10px;
    }

    .overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 20px;
      text-align: center;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      width: 80%;
    }

    .indicators {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }

    .indicator.active { background-color: #333 ; }
    img {max-width: 100% ; max-height: 100%}
  `,
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity:0}),
        animate('500ms', style({opacity: 1})),
      ]),
      transition(':leave',[
        animate('500ms', style({opacity:0})),
      ]),
    ])
  ]
})
export class ImageSliderComponent implements OnInit, OnDestroy{
  images: string[] = [
    "./../../../assets/sliders/car1.jpg",
    './../../../assets/sliders/car2.jpg',
    './../../../assets/sliders/car3.jpg'
  ];
  private interval: any;
  currentIndex = 0;

  showNextImage(){
    this.currentIndex = 
      (this.currentIndex + 1) % this.images.length;
  }

  showPrevImage(){
    this.currentIndex = 
    (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  private startAutoSlide() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
