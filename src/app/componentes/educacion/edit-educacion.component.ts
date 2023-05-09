import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacion } from 'src/app/service/seducacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{

  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data =>{this.educa = data;}
      , err =>{alert("Error al editar la educacion");
                this.router.navigate(['']);
              })
     }


  educa :  Educacion = null;

  constructor(private sEducacion: SEducacion,private router: Router, private activatedRoute: ActivatedRoute){}

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.educa).subscribe
    (data => {this.router.navigate(['educacion'])}
    ,err =>{alert("Error al editar la educacion");
  this.router.navigate(['']);
    })
  }

}