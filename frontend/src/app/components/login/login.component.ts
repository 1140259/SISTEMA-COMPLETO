import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  password = '';

  cargando = false;
  mensaje = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ingresar(): void {

    this.mensaje = '';
    this.cargando = true;

    this.http.post<any>(
      'http://localhost:5000/api/login',
      {
        usuario: this.usuario,
        password: this.password
      }
    )
    .subscribe({
      next: (res: any) => {

        localStorage.setItem(
          'token',
          res.token
        );

        localStorage.setItem(
          'usuario',
          res.usuario
        );

        localStorage.setItem(
          'nombre',
          res.nombre
        );

        localStorage.setItem(
          'rol',
          res.rol
        );

        this.router.navigate([
          '/inicio'
        ]);

      },
      error: (err: any) => {

        console.error(err);

        this.cargando = false;

        this.mensaje =
          'Usuario o contraseña incorrectos';

      }
    });

  }

}
