import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";

const pages_routes:Routes=[
    {path:'', component:PagesComponent, children:[
        {path:'dashboard', component:DashboardComponent},
        {path:'progress', component:ProgressComponent},
        {path:'graph1', component:Graph1Component},
        {path:'', redirectTo:'/dashboard', pathMatch:'full'}
      ]},
]

export const PagesRoutes = RouterModule.forChild(pages_routes);