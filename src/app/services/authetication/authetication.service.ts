import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { responseToken } from 'src/app/models/token/responseToken.model';
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
    private tokenService: TokenService,
    private router: Router,
    private toast: NgToastService
  ) { }

  submitLogin(value: any) {

    this.http.post<responseToken>(this.baseUrl + 'login', {
      'username': value.username,
      'password': value.password
    }).subscribe({
      next: (res) => {
        this.token = res;
        this.tokenService.saveTokenInStorage(this.token);
        this.toast.success({detail: "Login realizado com sucesso!"});
        this.router.navigate(['home']);
      },
      error: (res) => {
        this.toast.error({detail: "Credenciais inválidas!", summary: "nome de usuario ou senha inválidos"});
      }
    });
  }

}
