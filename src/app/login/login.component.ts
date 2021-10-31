import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';

declare function init_plugins():any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recordar:boolean=false 
  email!:string

  constructor(
    public router:Router,
    private _usuarioService:UsuarioService
    ) { }

  ngOnInit(): void {
    init_plugins()
    this.email=localStorage.getItem('email') || ''
    if(this.email.length > 0){
      this.recordar=true
    }
  }

  ingresar(forma:NgForm){
    let user = new Usuario('null', forma.value.email, forma.value.password) 
    //this.router.navigate(['/dashboard'])
    if(forma.invalid){
      return ;
    }
    this._usuarioService.login(user, forma.value.recuerdame)
    .subscribe(res=>{
      this.router.navigate(['/dashboard'])
   })
  }
}
