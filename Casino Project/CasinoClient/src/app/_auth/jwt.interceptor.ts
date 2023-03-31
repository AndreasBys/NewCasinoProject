import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { environment } from '../environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const LoggedUser = this.authService.LoggedUserValue;
    const isLoggedIn = LoggedUser && LoggedUser.authtoken;
    const isApiURL = request.url.startsWith(environment.ApiURL);

    if (isLoggedIn && isApiURL) {
      request = request.clone({setHeaders: { Authorization: `Bearer ${LoggedUser.authtoken}`}});
    }

    return next.handle(request);
  }
}
