import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{



nombre: string;
email: string;
mensaje: string ;

constructor(private contactoService : ContactoService,private router: Router){}
  



sendEmail(){
  const contac : Contacto = new Contacto(this.nombre, this.email, this.mensaje)
  this.contactoService.send(contac).subscribe
  (data => {this.router.navigate(['contacto'])}
  ,err =>{alert("Email enviado");
  this.router.navigate([''])}
  )
} 

}
