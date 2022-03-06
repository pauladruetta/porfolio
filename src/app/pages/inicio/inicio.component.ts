import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  host: {
    class:'d-flex flex-fill'
  },
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

    @Input() routerClass: string
  constructor() {
    this.routerClass = ""
  }

  ngOnInit(): void {
  }

}
