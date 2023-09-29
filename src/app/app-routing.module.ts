import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./index/index.module').then(m =>m.IndexModule)
  },
  {
    path:'auth', //localhost/auth/
    loadChildren: () => import('./auth/auth.module').then(a =>a.AuthModule)
  },
  {
    path:'inmuebles', //localhost/auth/
    loadChildren: () => import('./inmuebles/inmuebles.module').then(p =>p.InmueblesModule)
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
