import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './modules/product.service';
import { User } from './modules/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent {


  usrFrom!: FormGroup;
  user = new User();

  title = 'PureAyurveda';
  public loading:boolean = false;
  constructor(private router: Router, config: NgbModalConfig, private modalService: NgbModal,  private fb: FormBuilder, private productServiece: ProductService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.router.events.subscribe((event: Event) => {

      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          console.log('loading...');

          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
         setTimeout((): boolean =>{
         return this.loading = false;
         }, 1000);
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.usrFrom = this.fb.group({
      userName:['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(6),  Validators.max(11111111111111)]],
      email: ['', [ Validators.email, Validators.maxLength(30)]],


    });


  }

  open(content:any) {
    this.modalService.open(content);
    console.log(this.productServiece.showProfile);
  }


  save(): void {
    if(!this.usrFrom.valid) {
      this.productServiece.createMessage('error', 'Invalid info, please try again .');
    }
    if(this.usrFrom.valid) {
      this.productServiece.createMessage('succes', 'The user has been saved .');
      this.productServiece.user.email  = this.usrFrom.get('email')?.value;
      this.productServiece.user.userName  = this.usrFrom.get('userName')?.value;
      this.productServiece.user.password  = this.usrFrom.get('password')?.value;
      this.productServiece.showProfile = true;
    console.log(this.productServiece.showProfile);
    }
  }

}
