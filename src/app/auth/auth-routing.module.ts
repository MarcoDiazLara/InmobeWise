import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { authComponent } from './auth.component';


const routes: Routes = [

  { path: '', redirectTo: 'logi', pathMatch: "full"  },
  {path: 'logi', component: authComponent}
  

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AuthRoutingModule { }
