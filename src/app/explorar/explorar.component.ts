import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { SoftwheresService } from '../service/softwheres.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Softwhere } from '../model/softwhere';


@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {

  list: Softwhere[];
  
  constructor(private loginService: LoginService, private firestore: AngularFirestore, private softService: SoftwheresService) { }
  
  ngOnInit() {
    this.softService.getAll().subscribe(res => {
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
