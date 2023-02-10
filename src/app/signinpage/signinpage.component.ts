import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { RoutingComponents } from '../app-routing.module';
import { LogindataService } from '../logindata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {

  constructor(public loginService: LogindataService, public route: Router) { }
  signinTry(value: string) {
    let arr = JSON.parse(localStorage.getItem('signupUsers') as string);
    let signinflag: boolean = false;
    for (let ele in arr) {
      console.log('checking', arr[ele], value);
      if (arr[ele] == value) {
        signinflag = true;
        break;
      }

    }
    if (signinflag) {
      console.log('logging in');
      this.route.navigate(['/dashboard']);
    }
    else {
      alert('user already exist');
    }

  }
}
