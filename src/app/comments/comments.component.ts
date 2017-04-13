import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../comments.service";

var testio;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {

  constructor( private commentsService: CommentsService ) {

  }

  ngOnInit( ) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4"+this.commentsService.search() );
    testio = this.commentsService.search();
  }
  //testio = this.commentsService.search();

}
