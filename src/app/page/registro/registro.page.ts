import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  forRegistro = {
    username: '',
    email: '',
    password: ' '
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  Registrarse() {
    if (this.forRegistro.password.length < 9) {
      alert('La contraseña debe tener al menos nueve dígitos');
      return;
    }

    // Validación de la extensión del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.forRegistro.email)) {
      alert('La dirección de correo electrónico no es válida');
      return;
    }

    console.log('username: ' + this.forRegistro.username);
    console.log('email: ' + this.forRegistro.email);
    console.log('password: ' + this.forRegistro.password);

    let datosEnviar: NavigationExtras = {
      queryParams: {
        rutUsuario: this.forRegistro.username,
        edad: 24
      }
    };

    this.router.navigate(['/bienvenido'], datosEnviar);
  }
}
