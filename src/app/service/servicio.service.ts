import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  key='c63c18090720e7325badb95423e63a89';
  url='https://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(  private  http:HttpClient ) {  }

  getClima(ciudad:string): Observable<any> {
  const url=this.url + this.key + '&q=' + ciudad;
  return this.http.get(url)

}

}
