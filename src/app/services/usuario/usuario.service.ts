import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token:any
  usuario:any

  constructor(
    public http:HttpClient,
    private router:Router
    ) {
    this.cargarStorage()
    //console.log('saludo desde service usuuario')
   }

  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICES + '/usuario';

    return this.http.post( url, usuario )
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token=localStorage.getItem('token')
      this.usuario=localStorage.getItem('user')
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
        localStorage.setItem('id', res.id)
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.usuario))

        return true
      }
    ))
  }
}
