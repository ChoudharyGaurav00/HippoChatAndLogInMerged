import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { RoutingComponents } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { LogindataService } from '../logindata.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {

  constructor(public loginService: LogindataService) { }

  userSignUp(data: object) {
    console.warn("logging");
    console.log(data);
    console.log(typeof (data));
    this.loginService.saveSignUpData(data);
  }
}
