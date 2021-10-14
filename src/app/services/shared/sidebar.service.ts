import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[
    {
      title:'Principal',
      icon:'mdi mdi-gauge',
      submenu : [
        {title: 'Dashboard', route:'/dashboard'},
        {title: 'Graficas', route:'/graph1'},
        {title: 'ProgressBar', route:'/progress'},
      ]
    }
  ] 
  constructor() { }
}
