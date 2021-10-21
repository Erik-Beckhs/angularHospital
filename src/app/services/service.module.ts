import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SharedService, 
  SidebarService, 
  SettingsService,
  LoginGuardGuard  
} from './service.index';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';

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
    LoginGuardGuard
  ]
})
export class ServiceModule { }
