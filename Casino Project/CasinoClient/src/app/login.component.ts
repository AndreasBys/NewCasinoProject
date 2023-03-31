import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `


  <div class="topwrapper">
      <div class="loginformwrapper">
          <div>
            <label>Email</label><br>
            <input><br>
            <label>Password</label><br>
            <input><br>
            <button (click)="login()">Login</button>
          </div>
      </div>
  </div>

  `,
  styles: [`
  .topwrapper{
    position: fixed;
    width:100%;
    display:flex;
    background: url(https://images.hdqwalls.com/wallpapers/playstation-background-image-yu.jpg);
    background-size:cover;
    height:100%;
    padding-top:50px;
  }

  .loginformwrapper{
    position: fixed;
    width: 80%;
    height: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10px;
    background-color: white;
  }





  `]
})
export class LoginComponent implements OnInit{

  constructor(private AuthServices: AuthService){}

  ngOnInit(): void {
    
  }




  login(email: string, password: string):void{

    this.AuthServices.login(email,password).subscribe();
  }
}
