import { Component } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .image-wrapper{
     background: url('./../assets/header1.jpg') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 304px;
    display:block;
    /*padding-top:30px;*/
  }
  `]
})
export class HeaderComponent {

  constructor(private jwtHelper: JwtHelper, private router: Router) {
  }

  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
  }


}
