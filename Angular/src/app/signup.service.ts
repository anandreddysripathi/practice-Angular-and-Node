import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:Http) { }

  addUser(newUser)
  {
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/addUser',newUser,{headers:headers}).pipe(map(res => res.json()));
  }
}
