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
        {title: 'Promises', route:'/promises'},
        {title: 'RXJS', route:'/rxjs'}
      ]
    },
    {
      title:'Mantenimiento',
      icon:'mdi mdi-account-settings-variant',
      submenu : [
        {title: 'Usuarios', route:'/usuarios'},
        {title: 'Medicos', route:'/medicos'},
        {title: 'Hospitales', route:'/hospitales'}
      ]
    }
  ] 
  constructor() { }
}
