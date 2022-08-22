import { Component, OnInit,  Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/modules/product.service';
import { User } from 'src/app/modules/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
   // add NgbModalConfig and NgbModal to the component providers
})
export class NavbarComponent implements OnInit {
  @Output() open = new EventEmitter<any>();
  @ViewChild('toggle', { static: false }) toggleBtn!: ElementRef;
  @ViewChild('bMenu', { static: false }) menuBtn!: ElementRef;

  products = this.productService.products;
  showProfile = this.productService.showProfile;
  constructor(private productService: ProductService, private router: Router) {
    // customize default values of modals used by this component tree

  }

  goToProfile(): any {
    this.router.navigate(['/profile']);
  }
  openMoadel(): any {
    if(this.showProfile) {
      this.goToProfile();
    }else {
    this.open.emit();
    this.showProfile = true;
    }


  }

  ngOnInit(): void {
  }

  toggleMenu():any {
    this.menuBtn.nativeElement.classList.toggle('pa-open-menu');
    this.toggleBtn.nativeElement.classList.toggle('open-menu');

  }


}
