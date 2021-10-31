import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';

//declare function init_plugins():any

import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  usuario!:Usuario
  imagenSubir:any
  imageTemp!:any

  constructor(private _usuario:UsuarioService) { }

  ngOnInit(): void {
    //init_plugins()
    this.usuario=this._usuario.usuario
  }

  guardar(user:Usuario){
    this.usuario.nombre = user.nombre
    this.usuario.email = user.email

    //console.log(user)

    this._usuario.actualizarUsuario(this.usuario)
    .subscribe(
    )
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

  cambiarImagen(){
    this._usuario.cambiarImagen(this.imagenSubir, this._usuario._id)
  }
}
