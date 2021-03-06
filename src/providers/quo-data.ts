import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the QpiData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuoData {
 
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('quoItems');  
  }
 
  save(data){
	console.log("This is the data", data);  
    let newData = JSON.stringify(data);
    this.storage.set('quoItems', newData);
  }
  remove(key){
	  console.log("remove the data", key);
	  this.storage.remove(key);
  }
	update(data) {
		let newData = JSON.stringify(data);
	console.log("This is the data", data);
	console.log("This is the newData", newData);
	this.storage.forEach( (value, key, index) => {

		if(key === 'quoItems')
		{
			console.log("This is the value", value)
			console.log("from the key", key)
			console.log("Index is", index)
		}
	})
	  
  }

}
