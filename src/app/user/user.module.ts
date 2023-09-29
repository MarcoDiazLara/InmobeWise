import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PerfilusuarioComponent } from './pages/perfilusuario/perfilusuario.component';


@NgModule({
  declarations: [
    PerfilusuarioComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
