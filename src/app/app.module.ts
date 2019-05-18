import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { SoftwheresService } from './service/softwheres.service';

var firebaseConfig = {
  apiKey: "AIzaSyBiBonW-GkoeToFGrFihBwBvuOurN0jhmg",
  authDomain: "softwhere-21e41.firebaseapp.com",
  databaseURL: "https://softwhere-21e41.firebaseio.com",
  projectId: "softwhere-21e41",
  storageBucket: "softwhere-21e41.appspot.com",
  messagingSenderId: "1004829279605",
  appId: "1:1004829279605:web:c746cf023c0553eb"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ExplorarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    SoftwheresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
