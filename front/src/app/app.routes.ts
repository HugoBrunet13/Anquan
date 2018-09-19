import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
/*import { AuthGuardService } from './services/auth-guard.service';*/

export const routes: Routes = [
  {
    path: '',
    children: [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard/2', component: DashboardComponent },
    ]
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuardService],
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent }
  //   ]
  // },
];
