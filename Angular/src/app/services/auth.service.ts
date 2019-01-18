//created this using ng g s auth
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:3000';

    constructor(private http: Http) {

    }

    authenticateUser(username, password) {
        var headers = new Headers();
        const user = { username: username, password: password };
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/login`, user, { headers: headers }).pipe(map(res => res.json()))
    }

    viewUsers()
    {
        var headers=new Headers;
        return this.http.get(`${this.url}/showAll`,{headers:headers}).pipe(map(res=>res.json()));
    }
}
