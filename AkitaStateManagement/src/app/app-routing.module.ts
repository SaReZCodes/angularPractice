import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
  ,
  {
    path: 'user', component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
