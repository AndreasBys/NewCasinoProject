import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-scroll">
      <div class="container-fluid">
        <a class="navbar-brand">ABCCINO</a>
        <div class="nav-links">
          <ul class="navbuttons">
            <li class="nav-item">
              <a class="nav-link" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Contact</a>
            </li>
          </ul>
          <ul class="navlogin">
            <a class="nav-link">Login</a>
          </ul>
        </div>
      </div>
      

    </nav>
  `,
  styles: [`
  li{
    list-style-type: none;
  }
  .navlogin{
    
  }
  .navbuttons{
    margin-right:auto!important;
    display:inline-flex;
  }
  .navbar{
    position:fixed;
    z-index:1;
    width:100%;
    height:50px;
    display:flex;
    left:0;
    right:0;
  }
  .nav-links{
    display:flex;
    flex-basis:auto;
    flex-grow: 1;
    align-items:center;
  }
  .container-fluid{
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:2%;
    padding-right:2%;
  }
  .navbar-brand{
  }
  a{
    text-decoration: none;
    display:block;
    margin-right:1rem;
    padding-top:0.3rem;
    padding-left:0.3rem;
  }

  @media (max-width: 911px){
    .navbar-scroll{
      background-color: #fff;
    }
    .navbar-scroll .navbar-brand,
    .navbar-scroll .nav-link,
    .navbar-scroll .fa-bars{
      color: #4f4f4f !important;
    }
  }

  .navbar-brand{
    letter-spacing: 3px;
    font-size: 2rem;
    font-weight: 500;
  }

  .navbar-scroll .navbar-brand,
  .navbar-scroll .nav-link,
  .navbar-scroll .fa-bars{
    color: #fff;
  }
  
  .navbar-scrolled{
    background-color: #fff;
  }

  @media (max-width: 450px) {
    #intro {
    height: 950px !important;
    }
  }

  @media(min-width: 550px) and (max-width: 750px) {
    #intro{
      height: 1100px !important;
    }
  }

  @media(min-width: 800) and (max-width: 990px) {
    #intro{
      height: 600px !important;
    }
  }

  display-1{
    font-weight: 500 !important;
    letter-spacing: 40px;
  }

  @media(min-width: 1600px){
    .display-1{
      font-size: 10rem;
    }
  }



  `

  ]
})
export class NavbarComponent {

}
