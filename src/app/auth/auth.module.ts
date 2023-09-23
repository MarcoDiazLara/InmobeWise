import { NgModule } from '@angular/core';
import { SharedModule } from '../core/Shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { authComponent } from './auth.component';



// todos los .routing.module tienen que ir al final de todos los imports
@NgModule({
  imports: [SharedModule, 
            AuthRoutingModule 
  ],
  declarations: [
    authComponent,
    LoginComponent,

  ],
  exports: [ ],
  providers:[]
})
export class AuthModule {
  constructor() {}
 }
