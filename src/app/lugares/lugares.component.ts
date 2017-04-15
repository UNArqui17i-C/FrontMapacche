import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})

export class LugaresComponent {

    //Posicion Inicial

    latitud: number = 4.638194;
    longitud: number = -74.084046;
    zoom: number = 12;

    markers: marker []= [
          {
             nombre: 'UNAL',
             latitud:  4.638194,
             longitud:  -74.084046,
             arrastrable: true
          },
          {
             nombre: 'park way',
             latitud:  4.629177,
             longitud:  -74.075212,
             arrastrable: true
          },
          {
             nombre: 'Monserrate',
             latitud:  4.605673,
             longitud:  -74.055525,
             arrastrable: true
          },

];

    constructor () {
    }

}

  interface marker {
    nombre?: string;
    latitud:number;
    longitud:number;
    arrastrable:boolean;
}


