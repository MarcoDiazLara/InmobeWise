import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule desde '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisComponent } from './auth/regis/regis.component';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule, 
    RouterModule.forRoot([])
  ], // Debes especificar las rutas aquí
  declarations: [
    AppComponent, 
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  constructor(){}
}
