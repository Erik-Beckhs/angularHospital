import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModalUpdateService } from 'src/app/components/modal-update/modal-update.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';

//import swal from 'sweetalert';

declare var swal:any 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any=[]
  desde:number=0
  totalRegistros:number=0
  cargando:boolean=true

  constructor(
    public _usuario:UsuarioService,
    private _modalUpdate:ModalUpdateService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios()

    this._modalUpdate.notificacion.subscribe(
      resp=>this.cargarUsuarios()
    )
  }

  cargarUsuarios(){
    this.cargando=true
    this._usuario.cargarUsuarios(this.desde).subscribe((res:any)=>{
      //console.log(res)
      this.totalRegistros=res.total
      this.usuarios=res.usuarios
      this.cargando=false
    })
  }

  cambiarPagina(value:number){
    let desde = this.desde + value
    if(desde >= this.totalRegistros){
      return ;
    }
    if(desde < 0)
    {
      return ;
    }

    this.desde += value
    this.cargarUsuarios()
  }
  buscarUsuario(termino:string){
    if(termino.length <= 0){
      this.cargarUsuarios()
      return;
    }
    //console.log(termino)
      this._usuario.busquedaUsuario(termino).subscribe((res:any)=>{
      this.usuarios=res
    })
  }

  borrarUsuario(usuario:Usuario){
    // console.log(usuario)
    // console.log(this._usuario.usuario)
    if(usuario._id === this._usuario.usuario._id){
      swal("Error", "No puede eliminar su propio usuario", "error")
      return;
    }

    swal({
      title:'¿Esta seguro?',
      text:'Se eliminará el usuario '+usuario.nombre,
      icon:'info',
      buttons:true,
      dangerMode:true
    }).then((borrado:any)=>{
      if(borrado){
        //console.log(borrado)
        this._usuario.borrarUsuario(usuario._id)
        .pipe(map(
          res=> swal("Importante", "Se elimino al usuario de manera exitosa", "success")
        ))
        .subscribe(res=>{
          console.log(res)
          //this._usuario.cargarUsuarios(5)
          this.desde=0
          this.cargarUsuarios()
        })
      }
    })

    //this._usuario.deleteUser()
  }

  actualizarUsuario(usuario:Usuario){
    //console.log(usuario)
    this._usuario.actualizarUsuario(usuario).subscribe()
  }

  mostrarModal(id:string){
    this._modalUpdate.mostrarModal(id, 'usuarios')
  }
}
