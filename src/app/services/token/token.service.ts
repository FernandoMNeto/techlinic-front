import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseToken } from 'src/app/models/responseToken.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  saveTokenInStorage(token: responseToken) {
    localStorage.setItem('token', token.requestType + " " + token.token);
  }

  getToken() {
    if(this.isLoggedIn()) {
      return localStorage.getItem('token')
    }else {
      return '';
    }
  }

  logoutToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

/*
  verifyToken() {

    var header = new HttpHeaders().append('Authorization', this.getToken() as string);
    var httpStatus!: number;
    var tokenStatus: boolean = false;

    this.http.get(this.baseUrl + 'isTokenValid', { headers: header, observe: 'response'}).subscribe(
      (response) => {
        httpStatus = response.status;
      }
    )

    if(httpStatus === 200) {
      tokenStatus = true;
    }

    return tokenStatus;
  }
*/

}
