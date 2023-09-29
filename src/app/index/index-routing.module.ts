import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {path:'',
  component: HomeComponent
  },
  {path:'buscador',
  component: BuscadorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
