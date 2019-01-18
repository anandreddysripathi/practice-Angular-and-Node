import { User } from './../user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
allUsers:User[];
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('dashboard');
    this.authService.viewUsers().subscribe(allUsers=>
      this.allUsers=allUsers);
      // console.log(this.allUsers);
  }

  validateUser() {

    //taking values from database using mongoDB
    this.authService.authenticateUser(this.username, this.password).subscribe(res => {
      if (res.loggedIn) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        alert('enter valid credentials');
      }
    }, err => { console.log(err) });

    // //taking static data for validation
    // if (this.username === 'anand' && this.password === 'pass') {
    //   localStorage.setItem('loggedIn', 'true');
    //   this.router.navigate(['/dashboard']);
    // }
    // else { 
    //   alert('enter valid credentials');
    // }

  }

  SignUp()
  {
    this.router.navigate(['/signup']);
  }


  CanDeactivate(){
    console.log('im navigating away');
    return true;
  }
}
