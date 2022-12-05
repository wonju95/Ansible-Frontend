import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BoardComponent,
    BoardListComponent,
    BoardDetailComponent,
    BoardEditComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule
  ]
})
export class BoardModule { }
