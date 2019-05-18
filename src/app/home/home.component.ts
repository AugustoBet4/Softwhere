import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FirebaseAuth } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {
  } 

  user = JSON.parse(localStorage.getItem('user'))
}
