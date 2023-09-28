import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HammerModule } from '@angular/platform-browser';




@NgModule({
  imports: [ 
    HammerModule,
  
  ], // Debes especificar las rutas aquí
  exports:[HomeComponent],
  declarations: [
    HomeComponent,
 
  ],
  providers: [],
  bootstrap: [HomeComponent],
  
})
export class AppModule { 
  constructor(){}
}
