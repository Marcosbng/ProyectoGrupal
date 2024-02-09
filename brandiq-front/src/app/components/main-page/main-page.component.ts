// main-page.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  currentIndex: number = 0;
  images: string[] = [
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/welhome-logo-color-1.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/aeg-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/bosch-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/delonghi-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/dyson-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/gaggia-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/gorenje-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/irobot-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/jura-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/K„rcher-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/liebherr-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/philips-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/saeco-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/whirlpool-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2022/01/samsung-logo-color-new.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/tehnomix-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/power_beauty-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2022/01/intel-logo-color-new.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/polycomp-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/miele-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/leverage-shares-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/opel-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/obermayer-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/maserati-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/hp-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/kfc-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/amd-logo-color.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/pcshop-logo-color-2.svg?x96364',
    'https://brandiq-com.b-cdn.net/wp-content/uploads/2020/12/cisco-logo-color.svg?x96364',
  ];

  currentImage: string = this.images[0];

  constructor() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 1000);
  }
}
