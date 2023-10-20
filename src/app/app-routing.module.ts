import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { HeaderComponent } from './components/header/header.component';
// import { ForgotComponent } from './components/forgot/forgot.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path: 'home', component: HomeComponent},
  {path:'login',component:LoginComponent},
  // {path: 'header',component: HeaderComponent},
  // {path: 'forgot',component: ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
