import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Catalog';
  menuKeys = Object.keys;

  menuList = {
    'Batentes': ['Batenete capo', 'Batente porta dianteira'],
    'Borrachas': ['Borrachas porta']
  };
}
