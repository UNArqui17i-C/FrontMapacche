import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';


@Injectable()
export class CommentsService {

  constructor( private http: Http ) { }

  search(){
    this.getComments().subscribe(
        respuesta => { console.log(respuesta.json() ) },
        error => console.log(error)
    )
  }

  public getComments() : Observable<Response>{
    //let url = 'http://192.168.99.101:3000/places';
    let url = 'http://www.omdbapi.com/?s=frozen';
    return this.http.get(url)
      .catch( ()=> Observable.throw("algo salio re mal") );
  }


}
