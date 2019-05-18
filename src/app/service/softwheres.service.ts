import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Softwhere } from '../model/softwhere';

@Injectable({
  providedIn: 'root'
})
export class SoftwheresService {
  formData: Softwhere

  constructor(private firestore: AngularFirestore) { }

  getAll() {
    return this.firestore.collection('softwheres').snapshotChanges();
  }
}
