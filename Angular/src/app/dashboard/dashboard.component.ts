import { AuthService } from './../services/auth.service';

//created using ng generate component dashboard
import {  Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
import {Event} from '@angular/router';
import { User } from './../user';
import { Food } from './../food';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ServiceDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService:ServiceDataService,private router:Router) {
    router.events.subscribe((routerEvent:Event)=>{
      this.checkRouterEvent(routerEvent);
    });
  }
loading:boolean;
  checkRouterEvent(routerEvent:Event): void {
    if(routerEvent instanceof NavigationStart)
    {
      this.loading=true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError)
      {
        this.loading=false;
      }
  }

  totalPrice=0;
  cart=[];
  selectedItems={};
  isItemAdded:boolean;
  addToCart(item){
    this.cart.push(item);
    this.totalPrice+=item.price;
    console.log('total price is '+this.totalPrice);
   this.selectedItems[item.itemName]=true;
  }

  // foodItems = [
  //   { 
  //     itemName: 'Biryani',
  //     price: 10,
  //     rating: '4.5/5'
  //   },

  //   { 
  //     itemName: 'Curd',
  //      price: 2,
  //       rating: '4.1/5'
  //   },

  //   { 
  //     itemName: 'roti',
  //     price: 5,
  //     rating: '5/5'
  //   }
  // ];


foodItems:Food[];
allUsers:User[];

  ngOnInit() {
    localStorage.setItem("proceedToCheckout","false");
    this.sharedService.getFoodItems().subscribe(foodItems=> 
      this.foodItems=foodItems);

  }


  checkout()
  {
    this.sharedService.setAmount(this.totalPrice);
  localStorage.setItem('proceedToCheckout','true');
     this.router.navigate(['/checkout']);
  }

  logout()
  {
    localStorage.removeItem('loggedIn')
    this.router.navigate(['/login']);
  }

}
