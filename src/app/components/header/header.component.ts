import { Component, OnInit, Input } from '@angular/core';
import { Porfolio } from '../porfolio';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  porfolio: Porfolio = {
    name: "Paula Druetta"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
