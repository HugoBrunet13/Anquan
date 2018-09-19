import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { routes } from './app.routes';
import { CollapseContractComponent } from './collapse-contract/collapse-contract.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
 return new AuthHttp(new AuthConfig({
      tokenName: 'token',
 		  tokenGetter: (() => localStorage.getItem('token')),
		  globalHeaders: [{'Content-Type':'application/json'}],
 	}), http, options);
 }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CollapseContractComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
    // FormsModule
  ],
  providers: [
  EmployeeService,
  {
   provide: AuthHttp,
   useFactory: authHttpServiceFactory,
   deps: [ Http, RequestOptions]
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
