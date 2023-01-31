import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin: FormGroup;

  constructor(){

    let patronRegular: string ="^[a-z]+@[a-z]+\\.[a-z]{2,3}$"; //min 53
    
    let controles: any= {
      correo: new FormControl("example@hotmail.com", [Validators.required, Validators.pattern(patronRegular)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    }
    this.formularioLogin = new FormGroup(controles)
  }
  submit(){
    console.log(this.formularioLogin)
    if(this.formularioLogin.controls['correo'].errors?.['required']){
      console.log("Esta vacio");
    }
    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      console.log("Error en el pattern");
    }
  }
}
