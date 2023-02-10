import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { ForgotpasswordpageComponent } from './forgotpasswordpage/forgotpasswordpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { FormsModule } from '@angular/forms';
import { HippodashboardComponent } from './hippodashboard/hippodashboard.component';
import { AllchatsComponent } from './allchats/allchats.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { ChatwindowcontentComponent } from './chatwindowcontent/chatwindowcontent.component';
import { ChatwindowheaderComponent } from './chatwindowheader/chatwindowheader.component';
import { ChatwindowmsgComponent } from './chatwindowmsg/chatwindowmsg.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HippodashboardComponent,
    AllchatsComponent,
    ChatwindowComponent,
    ChatwindowcontentComponent,
    ChatwindowheaderComponent,
    ChatwindowmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
