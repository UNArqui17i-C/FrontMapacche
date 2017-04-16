import { Component, OnInit } from '@angular/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    lat: number = 42.858279;
    lng: number = -70.930498;
    zoom: number = 11;

    markers: marker[] = [

      {name: 'Compay 1',
       lat: 42.825588,
       lng: -71.018029,
       draggable: true},

      {name: 'Compay 2',
       lat: 42.868164,
       lng: -70.889071,
       draggable: true},

      {name: 'Compay 3',
       lat: 42.858279,
       lng: -70.930498,
       draggable: true}
    ];


    constructor() {
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

interface marker{
name?:string;
lat: number;
lng: number;
draggable: boolean;

}
