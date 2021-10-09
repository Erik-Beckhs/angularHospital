import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { PagesRoutes } from "./pages.routes";
import { ProgressComponent } from "./progress/progress.component";

@NgModule ({
    declarations:[
        DashboardComponent,
        Graph1Component,
        ProgressComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        Graph1Component,
        ProgressComponent
    ], 
    imports:[
        SharedModule,
        PagesRoutes
    ]
})  

export class PagesModule {}