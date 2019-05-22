import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Softwhere } from '../model/softwhere';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SoftwheresService {
  formData: Softwhere
  user = JSON.parse(localStorage.getItem('user'))

  constructor(private firestore: AngularFirestore, private router: Router) {}

  getAll() {
    return this.firestore.collection('softwheres').snapshotChanges();
  }

  getMine(user) {
    return this.firestore.collection(user.uid).snapshotChanges();
  }

  onSubmit(user, sof) {
    this.firestore.collection(user.uid).add(sof);
    this.router.navigateByUrl('user/home');
  }
}
