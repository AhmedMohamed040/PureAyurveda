import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/modules/customer';
import { ProductService } from 'src/app/modules/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  csmForm!: FormGroup;
  products = this.productServiece.products;
  total = this.productServiece.total;
  customer = new Customer();
  constructor(private productServiece: ProductService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.csmForm = this.fb.group({
      fullName:['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      mobile: [0, [Validators.required, Validators.maxLength(15), Validators.minLength(6),  Validators.max(11111111111111)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      state: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]

    });

  }

  save(): void {
    if(!this.csmForm.valid) {
      this.productServiece.createMessage('error', 'Invalid info, please try again .');
    }
    if(this.csmForm.valid) {
      this.productServiece.createMessage('succes', 'The order has been saved .');

    console.log(this.csmForm);
    console.log(this.csmForm.controls['fullName'].valid);
    console.log(this.csmForm.get('fullName')?.valid);
    }
  }


}
