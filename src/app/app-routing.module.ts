import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavbarComponent } from './share/components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';

const routes: Routes = [

  { path: '', component: AppComponent, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: HomeComponent }
    //{path: 'home', loadChildren: () => import('./home/home.module') .then (m => m.HomeModule) }
  ] },
  // Otras rutas si las tienes
  { path: 'navbar', component: NavbarComponent },
  
 
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
