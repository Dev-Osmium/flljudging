import { Component } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavComponent {
  constructor(private globals: Globals){
  }
}
