import { Component, OnInit } from '@angular/core';

import SwiperCore, { EffectFade, Swiper } from 'swiper';
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
