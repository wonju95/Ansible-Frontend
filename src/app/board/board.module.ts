import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardEditComponent } from './board-edit/board-edit.component';


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
    MatTableModule
  ]
})
export class BoardModule { }
