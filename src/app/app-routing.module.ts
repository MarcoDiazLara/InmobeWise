import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavbarComponent } from './share/components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisComponent } from './auth/regis/regis.component';

const routes: Routes = [

  { path: '', component: AppComponent},
  {path: 'home', component: HomeComponent },
  //  children:[
  //   {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  //   {path: 'home', component: HomeComponent }
    //{path: 'home', loadChildren: () => import('./home/home.module') .then (m => m.HomeModule) }
  // ] },
  // Otras rutas si las tienes
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent }, 
  {path: 'regis', component: RegisComponent},
 
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
