import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class MainModule { }
