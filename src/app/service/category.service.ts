import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private fireStore : Firestore) { }

  saveCategory(data:any){
    const collectionInstance = collection(this.fireStore, 'category');
    addDoc(collectionInstance, data).then(()=>{
      console.log('Data Saved'); 
    })
    .catch((err)=>{
      console.log('err');
      
    })
  }
}
