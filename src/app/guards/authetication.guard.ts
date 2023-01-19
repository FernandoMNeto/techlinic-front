import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private toast: NgToastService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.tokenService.isLoggedIn()) {
        return true;
      }
      
      this.toast.info({detail: "Token inválido!", summary: "Realize o login novamente"});
      return this.router.navigate(['login']);
  }
}
