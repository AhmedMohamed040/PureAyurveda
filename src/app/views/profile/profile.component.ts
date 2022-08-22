import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product.service';
import { User } from 'src/app/modules/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = this.productService.user;
  imgSrc!: string | null | ArrayBuffer;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }


  readUrl(event: any ): void {
      if (event.target!.files && event.target!.files[0]) {
          const file = event.target!.files[0];

          const reader = new FileReader();
          reader.onload = e => this.imgSrc = reader.result;

          reader.readAsDataURL(file);
      }
    }

}
