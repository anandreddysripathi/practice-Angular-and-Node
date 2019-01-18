import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate{
 canDeactivate:()=>Observable<boolean> | Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  canDeactivate(component:CanComponentDeactivate){
    return component.canDeactivate?component.canDeactivate():true;
  }
}
