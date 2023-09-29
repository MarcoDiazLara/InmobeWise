import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./index/index.module').then(m =>m.IndexModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)
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
