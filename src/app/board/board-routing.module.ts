import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board.component';

const BoardRoutes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {path: 'list', component: BoardListComponent},
      {path: 'detail', component: BoardDetailComponent},
      {path: 'edit', component: BoardEditComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(BoardRoutes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
