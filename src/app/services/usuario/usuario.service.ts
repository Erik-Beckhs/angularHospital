import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import swal from 'sweetalert';
import { SubirArchivoService } from '../service.index';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token:any
  usuario:any
  _id:any

  constructor(
    public http:HttpClient,
    private router:Router,
    private _subirArchivo:SubirArchivoService
    ) {
    this.cargarStorage()
    //console.log('saludo desde service usuuario')
   }

  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICES + '/usuario';

    return this.http.post( url, usuario )
    .pipe(map((resp:any)=>{
      swal('Usuario creado', usuario.email, 'success')
      return resp.usuario
    }))
  }
  guardarStorage(id:string, token:string, user:Usuario ){
    localStorage.setItem('id', id)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token=localStorage.getItem('token')
      this.usuario=localStorage.getItem('user')
      this.usuario=JSON.parse(this.usuario)
      this._id=localStorage.getItem('id')
    }
    else{
      this.token=''
      this.usuario=''
    }
  }
  logout(){
    this.token=''
    this.usuario=''

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    this.router.navigate(['/login'])
  }

  login(usuario:any, recordar:boolean=false){

    if(recordar){
      localStorage.setItem('email', usuario.email)
    }
    else{
      localStorage.removeItem('email')
    }

    let url = URL_SERVICES + '/login';
    return this.http.post(url, usuario).pipe(map(
      (res:any)=>{
        this.guardarStorage(res.id, res.token, res.usuario)

        return true
      }
    ))
  }

  actualizarUsuario(user:Usuario){
    const url= `${URL_SERVICES}/usuario/${user._id}?token=${this.token}`
    return this.http.put(url, user)
    .pipe(map((resp:any)=>{
      if(resp.usuario._id===this.usuario._id){
        this.guardarStorage(resp.usuario._id, this.token, resp.usuario)
      }
      swal('Usuario actualizado', resp.usuario.nombre, 'success')
      
      //console.log(resp)
    }))
    // console.log(user)
  }

  cambiarImagen(archivo:File, id:string){
    this._subirArchivo.subirArchivo(archivo, 'usuarios', id)
    .then( (resp:any)=>{
      this.usuario.img=resp.usuario.img
      console.log('RESPUESTA')
      console.log(resp.usuario.img)
      swal('Imagen Actualizada', this.usuario.nombre, 'success')
      this.guardarStorage(id, this.token, this.usuario)
    }

    ).catch(
      resp=>console.log(resp)
    )
  }

  cargarUsuarios(desde:number){
    let url = `${URL_SERVICES}/usuario?desde=${desde}`
    return this.http.get(url)
  }

  busquedaUsuario(termino:string){
    let url=`${URL_SERVICES}/busqueda/coleccion/usuarios/${termino}`
    return this.http.get(url).pipe(map(
      (resp:any)=>resp.usuarios
    ))
  }

  borrarUsuario(idUsuario:any){
    let url = `${URL_SERVICES}/usuario/${idUsuario}?token=${this.token}`
    return this.http.delete(url).pipe(map(
      (res:any)=>{
        swal("Eliminacion Exitosa", "Se eliminó al usuario de manera correcta", "success")
        return true
      }
    ))
  }
}
