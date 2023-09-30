import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/pages/login/login.component';




const routes: Routes = [

  {
    path:'', //index
    loadChildren: () => import('./index/index.module').then(m =>m.IndexModule)
  },
  {
    path:'auth', //localhost/auth/ 
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path:'inmuebles', //localhost/inmuebles/
    loadChildren: () => import('./inmuebles/inmuebles.module').then(m =>m.InmueblesModule)
  },
  {
    path:'user', //localhost/user/
    loadChildren: () => import('./user/user.module').then(m =>m.UserModule)
  },
  {
    path:'**', 
    component: PageNotFoundComponent
  },


 
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
