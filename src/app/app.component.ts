import { Component, OnInit } from '@angular/core';
import { RoutingComponents } from './app-routing.module';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LogindataService } from './logindata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hippochatWithLogins';
  constructor(public loginService: LogindataService) { }
}

