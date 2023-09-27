import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule desde '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule,
    
    RouterModule.forRoot([])
  ], // Debes especificar las rutas aquí
  declarations: [ 
    
  ],
  exports:[ 
 
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
  ], 
  providers: [],
  bootstrap: [],
  
})
export class AppModule { 
  constructor(){}
}
