import { NgModule } from '@angular/core';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { ForgotpasswordpageComponent } from './forgotpasswordpage/forgotpasswordpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
// import { ModuleWithProviders } from '@angular/core';
// import { Observable } from 'rxjs';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { HippodashboardComponent } from './hippodashboard/hippodashboard.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { ChatwindowcontentComponent } from './chatwindowcontent/chatwindowcontent.component';
const routes: Routes = [
  { path: 'signin', component: SigninpageComponent },
  { path: 'forgotpassword', component: ForgotpasswordpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'dashboard', component: HippodashboardComponent },
  // { path: 'dashboard/chatwindowcontent/:id', component: ChatwindowComponent },

  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class SelectivePreloadingStrategy implements PreloadingStrategy {
//   preload(route: Route, load: Function): Observable<any> {
//     return route.data && route.data.preload ? load() : Observable.of(null);
//   }
// }
export const RoutingComponents = [SigninpageComponent, ForgotpasswordpageComponent, SignuppageComponent, HippodashboardComponent, ChatwindowComponent, ChatwindowcontentComponent];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy });
