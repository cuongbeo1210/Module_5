import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";
import {RegisterComponent} from "./components/pages/register/register.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./helper/auth-guard";
import {AdminComponent} from "./components/pages/admin/admin.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";

// @ts-ignore
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'admin',
    canActivate: [AdminAuthGuard],
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
