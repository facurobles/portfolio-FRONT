import {Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit{
 

  /*cambiar tamaño */
  tamaño:number = 20;

  agrandar(){
    if(this.tamaño<100){
      this.tamaño += 5;
      this.presentacion["--font-size.px"]=this.tamaño;
    }
    
  }
  reducir(){
    if(this.tamaño>10){
      this.tamaño -= 5;
      this.presentacion["--font-size.px"]=this.tamaño;
    }
    
  }


    /*cambiar de color */
  color = "rgb(4, 255, 17)";

  rojo(){
    this.color="rgb(252, 0, 0)";
    this.presentacion["--color"]=this.color;
  }
  azul(){
    this.color="rgb(0, 4, 255)";
    this.presentacion["--color"]=this.color;
  }
  verde(){
    this.color="rgb(4, 255, 17)";
    this.presentacion["--color"]=this.color;
  }

  /*stylo*/
  presentacion={"--color":this.color, "--font-size.px":this.tamaño}
  

  //back
  persona:Persona = new Persona("", "", "");

  constructor(public personaService: PersonaService, private tokenService: TokenService){  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

  user : string = this.tokenService.getUserName();


}

