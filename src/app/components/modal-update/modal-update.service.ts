import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUpdateService {
  public tipo!:any
  public id!:any

  public oculto:any='oculto'
  notificacion = new EventEmitter<any>()

  constructor() { 
    
  }

  mostrarModal(id:string, tipo:string){
    this.id=id
    this.tipo=tipo
    this.oculto=''
  }

  ocultarModal(){
    this.id=null
    this.tipo=null
    this.oculto='oculto'
    //return 'oculto'
  }
}
