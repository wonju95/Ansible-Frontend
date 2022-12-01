import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MainRoutingModule } from '../main-routing.module';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  goToItems() {
    this.router.navigate(['board/list'], { relativeTo: this.route });
  }
}
