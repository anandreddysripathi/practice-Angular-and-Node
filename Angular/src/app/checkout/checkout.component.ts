import { Router } from '@angular/router';
import { ServiceDataService } from './../service-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalAmount
  constructor(private router:Router,private sharedData:ServiceDataService) { 
   
  }

  logout()
  {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);  
  }

  ngOnInit() {
    this.totalAmount=this.sharedData.getBill();
    console.log('total amount is '+this.totalAmount);
  }

}
