import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const MainRoutes: Routes = [
  {
    path: '', 
    component: MainComponent,
    children: [
      {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule), },
      // {path: 'board', loadChildren: () => import('../board/board.module').then((m) => m.BoardModule), },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
