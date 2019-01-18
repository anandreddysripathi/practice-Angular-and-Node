import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  totalPrice;
  constructor(private http:Http) { }
 
  getFoodItems(){
    return this.http.get('http://localhost:3000/food').pipe(map(res => res.json()));
  }

  setAmount(price)
  {    
  this.totalPrice=price;
  console.log('total price set successfully that is  '+this.totalPrice);
  }

  getBill()
  {
    console.log('total amount is '+this.totalPrice);
    return this.totalPrice;
  }
}
