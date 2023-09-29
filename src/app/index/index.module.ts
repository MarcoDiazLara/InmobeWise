import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    BuscadorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
