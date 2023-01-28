import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AutheticationService } from '../services/authetication/authetication.service';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AutheticationService,
    private toast: NgToastService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService.verifyToken().subscribe({
        error: () => {
          this.toast.info({detail: "Token inspirado!", summary: "Realize o login novamente"});
          return this.router.navigate(['/login']);
        }
      })

      return true;
  }
}
