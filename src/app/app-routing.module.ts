import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  // {path: '', redirectTo: 'main', pathMatch: 'full'},
  // {path: 'main', component: MainComponent},
  // {path: '**', redirectTo: 'main', pathMatch: 'full'}
  /**
   * Angular 8 버전부터는 이전까지 사용하던 loadChildren 문법을 사용하지 않고, import()를 사용
   * https://angular.kr/guide/deprecations#loadchildren-string-syntax
   */
  {path: '', loadChildren: () => import('./main/main.module').then((m) => m.MainModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  // imports: [RouterModule.forRoot(Approutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
