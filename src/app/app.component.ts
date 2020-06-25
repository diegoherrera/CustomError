import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router00';

  

  constructor() {
  }


  evento1() {
    throw new Error('error generado en evento 1');
  }
}
