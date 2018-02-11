import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {

}
