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
      </div>

    </nav>
  `,
  styles: [`

  .navbar{
    position:fixed;
    z-index:1;
    width:100%;
    height:50px;
  }
  .container-fluid{
    height:100%;
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
