import { Component, OnInit } from '@angular/core';

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faHeart = faHeart;
  faEye = faEye;
  faShare = faShareAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
