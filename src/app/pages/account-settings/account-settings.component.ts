import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document:any,
    public _ajustes:SettingsService
    ) { }

  ngOnInit(): void {
    this.cargaCheck()
  }

changeTheme(tema:string, link:any){
  this.checkTheme(link)
  //console.log(tema)
  this._ajustes.aplicarTema(tema)
}

checkTheme(enlace:any){
  const listado:any = document.getElementsByClassName('selector')
  for (let res of listado){
    res.classList.remove('working')
  }
  enlace.classList.add('working')
}

cargaCheck(){
  const selectores:any = document.getElementsByClassName('selector')
  let tema = this._ajustes.ajustes.tema
  for(let res of selectores){
    res.classList.remove('working')
  }
  for(let res of selectores){
    if(res.getAttribute('data-theme')==tema){
      res.classList.add('working');
      break;
    }
  }
}

}
