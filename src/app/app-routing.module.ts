import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { RegisterComponent } from './register/register.component';
import { LugaresComponent } from './lugares/lugares.component';

const routes: Routes = [

{
path: '',
component: HomeComponent
},

{
path: 'home',
component: HomeComponent
},

{
path: 'comments',
component: CommentsComponent
},

{
path: 'register',
component: RegisterComponent
},

{
path: 'lugares',
component: LugaresComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
