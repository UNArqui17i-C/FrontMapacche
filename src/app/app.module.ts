import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import {CommentsService} from "./comments.service";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LugaresComponent } from './lugares/lugares.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    HomeComponent,
    RegisterComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7Uu9VIfHV5pk54He4kTxCllm1b2_cYj8'
    }),
    HttpModule,
    AppRoutingModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
