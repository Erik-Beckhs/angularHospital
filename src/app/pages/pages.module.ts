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


@NgModule ({
    declarations:[
        DashboardComponent,
        Graph1Component,
        ProgressComponent,
        PagesComponent, 
        IncrementadorComponent,
        DoughnutComponent,
        AccountSettingsComponent
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
        ChartsModule
    ]
})  

export class PagesModule {}