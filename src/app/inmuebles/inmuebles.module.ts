import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { AltainmuebleComponent } from './pages/altainmueble/altainmueble.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    
  ],
  imports: [
    AltainmuebleComponent,
    CommonModule,
    InmueblesRoutingModule,MatStepperModule ,MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatSelectModule

  ]
})
export class InmueblesModule { }
