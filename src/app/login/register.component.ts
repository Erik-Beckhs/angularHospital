import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import swal from 'sweetalert';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';

declare function init_plugins():any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

 forma!:FormGroup

  constructor(private usuarioService:UsuarioService) { }

  // sonIguales(campo1:string, campo2:string){

  //   return (group:FormGroup)=>{
  //     let pass1 = group.controls[campo1].value
  //     let pass2 = group.controls[campo2].value
  //     //return null
  //     if(pass1===pass2){
  //       return null
  //     }
  //     return {sonIguales:true}
  //   }
  // }

  sonIguales: ValidatorFn = (forma: AbstractControl): ValidationErrors | null => {
    const valor1 = forma.get('password');
    const valor2= forma.get('password2');
  
    return valor1!.value === valor2!.value ? null : { sonIguales: true };
  };

  // private passwordsShouldMatch(fGroup: FormGroup) {
  //   return fGroup.get('password')!.value === fGroup.get('passwordConfirm')!.value
  //     ? null : {'mismatch': true};
  // }

  ngOnInit(): void {

    init_plugins()

    this.forma = new FormGroup({
      nombre:new FormControl(null, Validators.required),
      correo:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, Validators.required),
      password2:new FormControl(null, Validators.required),
      condiciones:new FormControl(false)
    }, 
      //this.passwordsShouldMatch
      //{validators:this.sonIguales('password', 'password2')}
      {validators:this.sonIguales}
    )

    this.forma.setValue({
      nombre:'Erik',
      correo:'test1@test1.com',
      password:'123456',
      password2:'123456',
      condiciones:true
    })
  }

  registroUsuario(){
    if(this.forma.invalid){
      swal('Importante', 'Las contraseñas deben ser iguales', 'warning')
      return;
    }
    if(!this.forma.value.condiciones){
      //console.log('Las condiciones deben ser aceptadas')
      swal('Importante', 'Debe aceptar las condiciones', 'warning')
      return;
    }
    //console.log('Forma valida', this.forma.valid)
    //console.log(this.forma!.value)

    let usuario = new Usuario(
     this.forma.value.nombre,
     this.forma.value.correo,
     this.forma.value.password
    )
    this.usuarioService.crearUsuario(usuario).subscribe(res=>console.log(res))
  }
  // constructor(
  //   //private formBuilder:FormBuilder
  //   ) {
  //   this.forma = new FormGroup({
  //       oldpassword: new FormControl('', [Validators.required, Validators.minLength(4), this.checkPassword]),
  //       newpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //       confirmpassword: new FormControl('', [Validators.required, Validators.minLength(4)])
  //     },
  //     {Validators: this.passwordsShouldMatch}
  //   );
  // }

  // ngOnInit(){
  //   init_plugins()
  // }
  // private checkPassword(control: FormControl) {
  //   return control.value.toString().length >= 5 && control.value.toString().length <= 10
  //     ? null
  //     : {'outOfRange': true};
  // }

  // private passwordsShouldMatch(fGroup: FormGroup) {
  //   return fGroup.get('password')!.value === fGroup.get('passwordConfirm')!.value
  //     ? null : {'mismatch': true};
  // }

  // registroUsuario(){
  //   console.log(this.forma.value)
  // }
}
