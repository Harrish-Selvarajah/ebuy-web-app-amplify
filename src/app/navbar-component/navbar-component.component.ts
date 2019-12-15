import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    const URL = 'https://harrish-web-app.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=b887ec8d3pgep5jop9f06v8bg&redirect_uri=http://localhost:4200';
    window.location.assign(URL);
  }

}
