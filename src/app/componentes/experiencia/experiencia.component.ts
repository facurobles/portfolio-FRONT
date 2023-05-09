import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { sExperienciaService } from 'src/app/service/sExperiencia';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  /*experiencia*/
  expe : Experiencia[] = [];

  constructor(private sExperiencia: sExperienciaService, private tokenService: TokenService,
              private router: Router){}

  isLoggedAdmin = false; 
    
  ngOnInit(): void {

    this.cargarExperiencia();
      if ((this.tokenService.getUserName()) == "admin"){
        this.isLoggedAdmin = true;
      }else{
        this.isLoggedAdmin = false;
      }    
   }


cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe((data): void => {this.expe = data})
  }
 

  /*----------------------------------------------------------------*/
  /*Nueva experiencia*/
  nombreE : string ='';
  empresaE : string = '';
  periodoE : string = '';
  ubicacionE : string = '';
  descripcionE : string = '';

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.empresaE, this.periodoE, this.ubicacionE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia agregada");
      window.location.reload();
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

  /*boton sumar experiencia*/
  sumar :boolean = false;

  funcsumar(){
    this.sumar = !this.sumar;
  }


  /*borrar experiencia*/
  delete(id? : number){
    if(id != undefined  && (window.confirm('¿Esta seguro que desea eliminar?'))){
      this.sExperiencia.delete(id).subscribe(data => {this.cargarExperiencia()},
      err => {alert("Error al intentar borrar")})
    }
  }

}
