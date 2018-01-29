import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { TeamsListComponent }    from './teams-list.component';
import { TeamsDetailComponent }  from './teams-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',    component: TeamsListComponent },
  { path: ':id', component: TeamsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}

