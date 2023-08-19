import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const requestUrl = request.url;
        const loginUrl = environment.baseUrl + 'login';
        const token = localStorage.getItem('token');

        if (token 
            && (requestUrl !== loginUrl)
            && (requestUrl.split("/")[2] !== "viacep.com.br")) {
            const newRequest = request.clone({ setHeaders: {'Authorization': token}});
            return next.handle(newRequest);
        } else {
            return next.handle(request);
        }
    } 
}