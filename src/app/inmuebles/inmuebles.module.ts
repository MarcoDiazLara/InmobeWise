import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { AltainmuebleComponent } from './pages/altainmueble/altainmueble.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    
  ],
  imports: [
    AltainmuebleComponent,
    CommonModule,
    MatStepperModule ,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    InmueblesRoutingModule,

  ]
})
export class InmueblesModule { }
