import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule desde '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { FooterComponent } from './share/components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot([])
  ], // Debes especificar las rutas aquí
  declarations: [
    AppComponent, 
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  constructor(){}
}
