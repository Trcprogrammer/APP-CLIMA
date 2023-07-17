import { Component } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
   ciudad:string;
   contenido:boolean;
   temperatura=0;
   humedad=0;
   clima:any=''
   loading:boolean=false


   constructor( private _servicio:ServicioService){
     this.contenido=false;
    this.ciudad=''
    
    
   }
obtenerClima(){
  this.loading=true;
  console.log(this.ciudad)
  this.contenido=false;

  this._servicio.getClima(this.ciudad).subscribe(dato =>{
    this.contenido=true;
    this.loading=false
    console.log(dato)
    this.temperatura=Math.round(dato.main.temp - 273) ;
    this.humedad=dato.main.humidity;
    this.clima=dato.weather[0].main

    

  },error =>{
    this.loading=false
  }   )
  this.ciudad=''

}
 

}
