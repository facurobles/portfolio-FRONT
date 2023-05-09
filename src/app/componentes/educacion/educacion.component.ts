import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacion } from 'src/app/service/seducacion';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  /*educacion*/
  edu : Educacion[] = [];

  constructor(private sEducacion: SEducacion, private tokenService: TokenService,
              private router: Router){}

  isLoggedAdmin = false; 
    
  ngOnInit(): void {

    this.cargarEducacion();
      if ((this.tokenService.getUserName()) == "admin"){
        this.isLoggedAdmin = true;
      }else{
        this.isLoggedAdmin = false;
      }    
   }


cargarEducacion(): void{
    this.sEducacion.lista().subscribe((data): void => {this.edu = data})
  }
 

  /*----------------------------------------------------------------*/
  /*Nueva educacion*/
  nombreEd : string ='';
  nivelEd : string = '';
  periodoEd : string = '';
  ubicacionEd : string = '';
  tituloEd : string = '';

  onCreate():void{
    const edu = new Educacion(this.nombreEd, this.nivelEd, this.periodoEd, this.ubicacionEd, this.tituloEd);
    this.sEducacion.save(edu).subscribe(data => {
      alert("Educacion agregada");
      window.location.reload();
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

  /*boton sumar Educacion*/
  sumar :boolean = false;

  funcsumar(){
    this.sumar = !this.sumar;
  }


  /*borrar Educacion*/

  delete(id? : number){
    if(id != undefined && (window.confirm('¿Esta seguro que desea eliminar?'))){
      this.sEducacion.delete(id).subscribe(data => {this.cargarEducacion()},
      err => {alert("Error al intentar borrar")})
    }
  }

}
