import { Routes, RouterModule } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const pages_routes:Routes=[
    {path:'', component:PagesComponent, children:[
        {path:'dashboard', component:DashboardComponent, data:{titulo:'Dashboard'}},
        {path:'progress', component:ProgressComponent, data:{titulo:'Progress'}},
        {path:'graph1', component:Graph1Component, data:{titulo:'Graficas'}},
        {path:'promises', component:PromisesComponent, data:{titulo:'Promesas'}},
        {path:'rxjs', component:RxjsComponent, data:{titulo:'RxJs'}},
        {path:'', redirectTo:'/dashboard', pathMatch:'full'},
        {path:'account-settings', component:AccountSettingsComponent, data:{titulo:'Ajuste de Temas'}}
      ]}
    
]

export const PagesRoutes = RouterModule.forChild(pages_routes);