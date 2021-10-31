import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario!:Usuario
  
  constructor(public _usuario:UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this._usuario.usuario
    //console.log(this.usuario)
    //console.log(this._usuario.usuario.img)
  }
}
