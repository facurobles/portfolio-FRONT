import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombre : string = '';
  nombreUsuario : string = '';
  email : string = '';
  password : string = '';



  nuevo: NuevoUsuario[] = [];

  constructor(private authService: AuthService, private router: Router) { }


  login(): void {
    const nuevo = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(nuevo).subscribe
      (data => { alert("Usuario registrado");
      this.router.navigate(['login'])}
        , (error: HttpErrorResponse) => {
          alert(error.error.mensaje)
          this.router.navigate(['login/register'])
        })
  }

}

