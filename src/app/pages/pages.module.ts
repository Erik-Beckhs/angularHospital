import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { PagesRoutes } from "./pages.routes";
import { ProgressComponent } from "./progress/progress.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";

//ng2-charts
import { ChartsModule } from 'ng2-charts';
import { DoughnutComponent } from "../components/doughnut/doughnut.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from "../pipes/pipes.module";
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUpdateComponent } from "../components/modal-update/modal-update.component";


@NgModule ({
    declarations:[
        DashboardComponent,
        Graph1Component,
        ProgressComponent,
        PagesComponent, 
        IncrementadorComponent,
        DoughnutComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUpdateComponent
    ],
    exports:[
        DashboardComponent,
        Graph1Component,
        ProgressComponent
    ], 
    imports:[
        SharedModule,
        PagesRoutes,
        FormsModule,
        CommonModule,
        ChartsModule,
        PipesModule
    ]
})  

export class PagesModule {}