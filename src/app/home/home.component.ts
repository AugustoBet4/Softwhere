import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FirebaseAuth } from '@angular/fire';
import { SoftwheresService } from '../service/softwheres.service';
import { Softwhere } from '../model/softwhere';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: Softwhere[];
  user = JSON.parse(localStorage.getItem('user'));
  
  constructor(private loginService: LoginService, private softService: SoftwheresService) {}

  ngOnInit() {
    this.softService.getMine(this.user).subscribe(res => {
      console.log(res);
      this.list = res.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Softwhere;
      })
    });
  } 

}
