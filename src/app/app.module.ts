import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegistroGComponent } from './auth/registro-g/registro-g.component';
import { AltaInmuebleComponent } from './Inmueble/alta-inmueble/alta-inmueble.component';
import { ResultadoBusquedaComponent } from './Inmueble/resultado-busqueda/resultado-busqueda.component';
import { NavbarComponent } from './core/Shared/components/navbar/navbar.component';
import { BarraLateralComponent } from './core/Shared/components/barra-lateral/barra-lateral.component';
import { FooterComponent } from './core/Shared/components/footer/footer.component';
import { BarraBusquedaFiltroComponent } from './core/Shared/components/barra-busqueda-filtro/barra-busqueda-filtro.component';
import { WidgetsComponent } from './core/Shared/components/widgets/widgets.component';
import { InmuebleRoutingModule } from './Inmueble/inmueble-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroGComponent,
    AltaInmuebleComponent,
    ResultadoBusquedaComponent,
    NavbarComponent,
    BarraLateralComponent,
    FooterComponent,
    BarraBusquedaFiltroComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    InmuebleRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
