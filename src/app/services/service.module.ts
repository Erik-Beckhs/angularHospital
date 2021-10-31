import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SharedService, 
  SidebarService, 
  SettingsService,
  LoginGuardGuard, 
  SubirArchivoService  
} from './service.index';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalUpdateService } from '../components/modal-update/modal-update.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    SharedService,
    SidebarService,
    SettingsService,
    UsuarioService,
    SubirArchivoService,
    LoginGuardGuard, 
    ModalUpdateService
  ]
})
export class ServiceModule { }
