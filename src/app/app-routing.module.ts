import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user/user.guard';
import { HomeComponent } from './home/home.component';
import { ExplorarComponent } from './explorar/explorar.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'user', component: UserComponent, 
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
      { path: 'explorar', component: ExplorarComponent, canActivate: [UserGuard] }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
