import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { responseToken } from 'src/app/models/responseToken.model';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  baseUrl = environment.baseUrl;

  token?: responseToken;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
    ) { }

  submitLogin(value: any) {

    this.http.post<responseToken>(this.baseUrl + '/login', {
      "username": value.username,
      "password": value.password
    }).subscribe({
      next: (res) => {
      this.token = res;
      this.tokenService.saveTokenInStorage(this.token);
      this.router.navigate(['home']);
      },
      error: () => console.log('invalid')
    });
  }



}
