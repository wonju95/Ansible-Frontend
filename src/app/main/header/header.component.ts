import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  sidebarToggleClick(event: MouseEvent){
    event.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
  }

}
