import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../model/contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url = "https://formsubmit.co/hfacu.robles@gmail.com"
  constructor(private httpClient: HttpClient, ){}



    public send(contacto : Contacto): Observable<any>{
    return this.httpClient.post<any>(this.url , contacto);
  }

}
