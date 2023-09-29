import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AununciosComponent } from './components/aununcios/aununcios.component';






@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    AununciosComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,

  ],
  exports:[
    NavigationComponent, 
    FooterComponent,
    AununciosComponent,

  ],
})
export class SharedModule { }
