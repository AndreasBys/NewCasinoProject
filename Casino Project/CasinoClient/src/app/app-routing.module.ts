import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadComponent: () => import('./frontpage.component').then(it => it.FrontpageComponent)},
  {path: 'login', loadComponent: () => import('./login.component').then( it => it.LoginComponent)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
