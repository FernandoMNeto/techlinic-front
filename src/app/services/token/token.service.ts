import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseToken } from 'src/app/models/token/responseToken.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor() { }

  saveTokenInStorage(token: responseToken) {
    localStorage.setItem('token', token.requestType + " " + token.token);
  }

  getToken() {
      return localStorage.getItem('token') 
  }

  logoutToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
