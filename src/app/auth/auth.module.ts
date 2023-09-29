import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
<<<<<<< Updated upstream
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule, 
    RouterModule.forChild([]),
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]

})
export class AuthModule { }
 