import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { Auth2Guard } from './auth2.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  
  {
    path:'', component: HeaderComponent,
    children: [     
      { path: "dashboard", canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: "checkout", canActivate: [Auth2Guard], loadChildren: './checkout/checkout.module#CheckoutModule' }
    ]
  },

  
  
  {
    path: "login", 
    component: LoginComponent
  },

   {
     path:'signup',
     component:SignupComponent,
     canDeactivate:[CanDeactivateGuardService]  
   },

  
  // {
  //   path: "dashboard", canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'
  // },
  // {
  //   path: "checkout", canActivate: [Auth2Guard], loadChildren: './checkout/checkout.module#CheckoutModule'
  // },
  { path: "search", canActivate: [AuthGuard], loadChildren: './search/search.module#SearchModule' },

  {
    path: '**', redirectTo: 'login'
  }

];

@NgModule({
  providers:[AuthGuard],
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = RouterModule.forRoot(routes);