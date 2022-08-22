import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


// SwiperCore.use([Swiper, Navigation, Pagination, Autoplay]);

import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent  implements OnInit {


  constructor() {
  }


  ngOnInit(): void {
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

}
