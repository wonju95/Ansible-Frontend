import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>app.component</h1>
    <app-main></app-main>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'Ansible-Frontend';
}
