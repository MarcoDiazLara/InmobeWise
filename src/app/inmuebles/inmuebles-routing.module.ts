import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltainmuebleComponent } from './pages/altainmueble/altainmueble.component';

const routes: Routes = [

  {
    path:'',
    component: AltainmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }
