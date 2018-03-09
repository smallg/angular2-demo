import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from "../environments/environment";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(environment.apiUrl);
    if (localStorage.getItem('user')) {
      console.log('access');
      return true;
    } else {
      console.error('invalid auth');
      return false;
    }
  }
}
