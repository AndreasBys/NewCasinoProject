import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Login } from '../_models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiURL = environment.ApiURL + 'Login';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Login[]> {
    return this.http.get<Login[]>(this.apiURL);
  }
  
  getByID(loginid: Number): Observable<Login> {
    return this.http.get<Login>(`${this.apiURL}/${loginid}`);
  }

}
