import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../environment';
import { Login } from '../_models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UserSubject: BehaviorSubject<Login>;
  LoggedUser: Observable<Login>

  constructor(private http: HttpClient) {
    this.UserSubject = new BehaviorSubject<Login>(
      JSON.parse(sessionStorage.getItem('LoggedUser') as string)
    );
      this.LoggedUser = this.UserSubject.asObservable();
    

   }


  login(email: string, password: string){
    let authenticate = `${environment.ApiURL}Login/LoginRequest`;
    return this.http.post<any>(authenticate,{"email": email, "password": password}).pipe(map(user =>{ 
        sessionStorage.setItem('LoggedUser', JSON.stringify(user));
        this.UserSubject.next(user);

    
        return user;
    }))
  }
}
