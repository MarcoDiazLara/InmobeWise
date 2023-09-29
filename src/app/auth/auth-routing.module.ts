import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [

  {path:'',//localhost/auth
  component: LoginComponent
  },
  {
    path:'registro', //localhost/auth/registro
    component: RegistroComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
