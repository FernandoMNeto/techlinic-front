import { Injectable } from '@angular/core';
import { responseToken } from 'src/app/models/responseToken.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveTokenInStorage(token: responseToken) {
    localStorage.setItem('token', token.requestType + " " + token.token);
  }

  logoutToken() {
    localStorage.removeItem('token');
  }

}
