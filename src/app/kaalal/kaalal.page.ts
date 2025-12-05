import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swiper from 'swiper';                     // ✔ Core Swiper class

@Component({
  standalone: true,
  selector: 'app-kaalal',
  templateUrl: './kaalal.page.html',
  styleUrls: ['./kaalal.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule, 
      // ✔ Angular Swiper module
  ]
})
export class KaalalPage {

  @ViewChild('swiper') swiperRef!: ElementRef;
  swiper?: Swiper;

  constructor() {}

  // Initialize Swiper when ready
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    console.log("Swiper initialized", this.swiper);
  }

  // When slide changes
  swiperSlideChanged(event: any) {
    console.log("Slide changed:", event);
  }

  // Manually slide to index
  viewSelectedImage(index: number) {
    this.swiper?.slideTo(index);
  }
}
