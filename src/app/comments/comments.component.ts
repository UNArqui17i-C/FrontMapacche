import { Component, OnInit } from '@angular/core';
import {RequestService} from "../request.service";

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { Comment } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {
  comments: Comment[];
  title = 'List Comments';


  constructor( private commentsService: RequestService) {
      this.commentsService;
  }
  //URL = 'https://jsonplaceholder.typicode.com/posts';


  getComments(): void {
    this.commentsService.getUsers('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        comments => {
          this.comments = comments;
          console.log('this.users=' + JSON.stringify(this.comments));
          console.log('this.users.length=' + this.comments.length);
          console.log('this.users[0].email=' + JSON.stringify(this.comments[0]["userEmail"]) );
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        })
  }

  ngOnInit( ) {
    this.getComments();
  }

}






















/*import { Component, OnInit } from '@angular/core';
 import {RequestService} from "../comments.service";

 import { Injectable } from '@angular/core';
 import { Http, Response } from '@angular/http';
 import 'rxjs/add/operator/toPromise';
 import 'rxjs/add/operator/map';
 import {Observable} from "rxjs/Observable";

 @Component({
 selector: 'app-comments',
 templateUrl: './comments.component.html',
 styleUrls: ['./comments.component.css']
 })


 export class CommentsComponent implements OnInit {


 private _data: Observable<any[]>;
 constructor( private http: Http ) {
 this.getAllUser();
 }


ngOnInit( ) {

}

getAllUser() {
  return this.http.get('http://www.omdbapi.com/?s=frozen')
    .subscribe(
      data => this._data = data.json(),
      err => this.logError(err),
      () => console.log('User api call')
    );
}
private logError(err: any) {
  console.log(err)

}

}
*/
