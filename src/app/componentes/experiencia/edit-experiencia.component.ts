import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { sExperienciaService } from 'src/app/service/sExperiencia';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data =>{this.expLab = data}
      , err =>{alert("Error al editar la experiencias");
                this.router.navigate(['']);
              })
     }


  expLab :  Experiencia = null;

  constructor(private sExperiencia: sExperienciaService,private router: Router, private activatedRoute: ActivatedRoute){}

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe
    (data => {this.router.navigate(['experiencia'])}
    ,err =>{alert("Error al editar la experiencia");
  this.router.navigate(['']);
    })
  }

}
