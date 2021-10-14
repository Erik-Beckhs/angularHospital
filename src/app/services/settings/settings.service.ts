import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  ajustes:Ajustes = {
    temaUrl:'assets/css/colors/default-dark.css',
    tema:'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document:any) {
    this.cargarTema()
   }

  guardaTema(){
    localStorage.setItem('settings', JSON.stringify(this.ajustes))
    console.log('TEMA GUARDADO')
  }

  cargarTema(){
    const x = localStorage.getItem('settings');
    if(x!=null){
      this.ajustes=JSON.parse(x)
      console.log('Cargando del local storage')
    }
    else{
      console.log('Usando el tema por defecto')
    }
    this.aplicarTema(this.ajustes.tema)
  }
  aplicarTema(tema:any){
    const url=`assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url);
  
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardaTema()
  }
}

interface Ajustes {
  temaUrl :string,
  tema : string,
}


