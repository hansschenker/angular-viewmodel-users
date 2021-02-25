import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
    <ul>
      <!-- <li><a routerLink="/">Home</a></li> -->
      <li><a routerLink="/users">Users</a></li>
    </ul>

    </div>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular-Viewmodel-Users';
}
