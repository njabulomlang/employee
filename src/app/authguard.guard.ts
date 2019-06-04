import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate  { 
  constructor(private user : UserService){}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
              return this.user.getUserLoggedIn();
       
      }
}
