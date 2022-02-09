import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  styleObject:object = {'background-color': 'black',
    'font-size': '20px',
    'font-weight': 'bold',
    'color':'whitesmoke',
    'border-style': 'ridge' }

  constructor() { }

  ngOnInit(): void {
  }

  onLogging(){
    console.log('Click in login')
  }

}
