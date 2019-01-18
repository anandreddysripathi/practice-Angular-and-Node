import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private signUpService:SignupService) { }

username:String;
password1:String;
password2:String;

users:User[];
user:User;

  ngOnInit() {
  }

  signup(){
  if(this.password1!==this.password2)
     {
       alert('passwords mismath');
     }
     else{
       let newUser={
         username:this.username,
         password:this.password1
       }
       this.signUpService.addUser(newUser).subscribe(user=>{
         this.users.push(user);
       })
       alert('data added successfully');
  }
}

login(){
  this.router.navigate(['/login']);
}



  canDeactivate(){
    console.log('im navigating away');
    //checking 
    if(this.username==null || this.password1==null || this.password2==null){
    return window.confirm('discard SignUp?');
    }
    return true;
  }


}
