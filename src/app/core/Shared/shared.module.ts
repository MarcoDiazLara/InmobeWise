import { NgModule } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BarraLateralComponent } from "./components/barra-lateral/barra-lateral.component";
import { WidgetsComponent } from "./components/widgets/widgets.component";



@NgModule({
    imports:[FormsModule,
    ReactiveFormsModule,
    RouterModule
    ],
    declarations:[
        NavbarComponent,
        FooterComponent,
        BarraLateralComponent,
        WidgetsComponent
    ],
    exports:[
        NavbarComponent,
        FooterComponent,
        BarraLateralComponent,
        WidgetsComponent,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers:[],
})

export class SharedModule{
    constructor(){}
}
