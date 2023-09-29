import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { AltainmuebleComponent } from './pages/altainmueble/altainmueble.component';


@NgModule({
  declarations: [
    AltainmuebleComponent
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule
  ]
})
export class InmueblesModule { }
