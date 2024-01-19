
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  forLogin = {
    rut: "",
    pasword: ""
  };

  constructor(private router: Router) { }

  iniciarSesion() {
    
    if (this.forLogin.pasword.length !== 9) {
     
      alert('La contraseña debe tener al menos nueve dígitos');
      return;
    }

    console.log('rut: ' + this.forLogin.rut);
    console.log('pasword: ' + this.forLogin.pasword);

   
    let datosEnviar: NavigationExtras = {
      queryParams: {
        rutUsuario: this.forLogin.rut,
        edad: 24
      }
    };

    
    this.router.navigate(['/bienvenido'], datosEnviar);
  }
}
