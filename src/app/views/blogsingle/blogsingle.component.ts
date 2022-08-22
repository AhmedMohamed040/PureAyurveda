import { Component, OnInit } from '@angular/core';

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-blogsingle',
  templateUrl: './blogsingle.component.html',
  styleUrls: ['./blogsingle.component.scss']
})
export class BlogsingleComponent implements OnInit {

  faHeart = faHeart;
  faEye = faEye;
  faShare = faShareAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
