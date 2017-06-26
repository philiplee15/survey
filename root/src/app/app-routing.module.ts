import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './poll/create/create.component';
import { ShowComponent } from './poll/show/show.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [],
    component: LoginComponent // ==> <<app-login></app-login>
  },
  {
    path: 'dashboard',
    children: [],
    component: PollComponent
  },
  {
    path: 'create',
    children: [],
    component: CreateComponent
  },
  {
    path: 'poll/:id',
    children: [],
    component: ShowComponent
  },
  // {
  //   path: 'results',
  //   children: [],
  //   component: ResultsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
