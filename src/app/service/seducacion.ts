import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacion {

  // educaURL = "http://localhost:8080/educa/"
  educaURL = "https://portfolio-back-robles.onrender.com/educa/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educaURL + 'lista');
  }


  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.educaURL + `detail/${id}`);
  }


  public save(educacion : Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educaURL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.educaURL + `update/${id}`, educacion);
  }


  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.educaURL + `delete/${id}`)
  }
}
