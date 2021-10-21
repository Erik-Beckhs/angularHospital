import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../service.index';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    private _usuario:UsuarioService,
    private router:Router
    ){

  }
  canActivate() {
    if(this._usuario.token.length>0){
      console.log('Esta logueado')
      return true;
    }
    else{
      this.router.navigate(['/login'])
      console.log('No esta logueado')
      return false;
    }
    
  }
}
