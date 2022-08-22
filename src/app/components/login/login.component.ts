import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/modules/customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customerForm!: FormGroup;
  customer = new Customer();
  constructor() { }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      fullName: new FormControl(),
      mobile: new FormControl(),
      address: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),


    });

  }

}
