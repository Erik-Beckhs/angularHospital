import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from 'src/app/services/service.index';
import { ModalUpdateService } from './modal-update.service';

import swal from 'sweetalert'


@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styles: [
  ]
})
export class ModalUpdateComponent implements OnInit {
  //oculto:any

  //usuario!:Usuario
  imagenSubir:any
  imageTemp!:any

  constructor(
    private _subirArchivo:SubirArchivoService,
    public _modalUpdate:ModalUpdateService
  ) { 
    //console.log('Inicio el modal')
    //this.oculto=this._modalUpdate.oculto
  }

  ngOnInit(): void {
    
  }

    cargaImagen(archivo:any){
    archivo = archivo.target.files[0]
    if(!archivo){
      this.imagenSubir=null 
      return ;
    }
    if(archivo.type.indexOf('image') < 0){
      swal('Solo imagenes', 'el archivo seleccionado no es una imagen', 'error')
      this.imagenSubir=null
      return ;
    }

    this.imagenSubir=archivo

    let reader = new FileReader()
    let urlImagenTemp = reader.readAsDataURL(archivo)
    reader.onloadend = ()=>{
      //console.log(reader.result)
      this.imageTemp = reader.result
    }
  }

  cerrarModal(){
    //this.oculto='oculto'
    this.imagenSubir=null
    this.imageTemp=null
    this._modalUpdate.ocultarModal()
    //this._modalUpdate.ocultarModal()
  }

  subirImagen(){
    this._subirArchivo.subirArchivo(this.imagenSubir, this._modalUpdate.tipo, this._modalUpdate.id)
    .then(resp=>{
      //console.log(resp)
      this._modalUpdate.notificacion.emit(resp)
      this.cerrarModal()
    })
    .catch(err=>{
      console.log('Ocurrió un error')
    })
  }

}
