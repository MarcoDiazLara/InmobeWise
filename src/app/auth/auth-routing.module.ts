import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { authComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: authComponent, children:[
    { path: '', redirectTo: 'login', pathMatch: "full"  },
    {path: 'login', component: LoginComponent}



  ]},
  
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule],
})

export class AuthRoutingModule { 
  constructor(){}
}
