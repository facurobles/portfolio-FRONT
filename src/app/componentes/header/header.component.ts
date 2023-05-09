import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

/*para habilitar ingreso y cierre de sesion*/
isLogged = false;

constructor(private tokenService: TokenService){}

ngOnInit():void{
  if(this.tokenService.getToken()){
    this.isLogged = true;   
  }else{
    this.isLogged = false;
  }
}


onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}

/*para mostrar u ocultar el menu */
  valor = false;
  mostrar(){
    this.valor = !this.valor
  }

  
  
}
