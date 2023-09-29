import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule desde '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';









@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,



    
    AppRoutingModule, 
    RouterModule.forRoot([])
  ], // Debes especificar las rutas aquí
  declarations: [
    AppComponent,



  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
}
