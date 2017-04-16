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

    marcadorCliqueado(marcador:marker, index:number) {
        console.log("Marcador Cliqueado: " + marcador.nombre+ " en el index: " +index);
    }

    mapCliqueado($event:any) {
      console.log ("Mapa Cliqueado");

      var nuevoMarcador = {
        nombre:'Sin titulo',
        latitud: $event.coords.lat,
        longitud: $event.coords.lng,
        arrastrable: false

    }
      this.markers.push(nuevoMarcador);
    }

    posicionFinalMarcador(marcador:any, $event:any) {
      console.log ("Posicion final: ", marcador, $event);

      var actualizarmarcador = {
          nombre:marcador.nombre,
          latitud: parseFloat(marcador.lat),
          longitud: parseFloat(marcador.lng),
          arrastrable: false
      }

      var nuevaLati = $event.coords.lat;
      var nuevaLongi = $event.coords.lng;

      }



} //koko

//tipo de marcador

  interface marker {
    nombre?: string;
    latitud:number;
    longitud:number;
    arrastrable:boolean;
}


