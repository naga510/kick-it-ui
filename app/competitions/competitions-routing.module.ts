/**
 * Created by nagar on 3/25/2017.
 */

import { NgModule }            from '@angular/core';
import { Routes,
    RouterModule }        from '@angular/router';

import { CompetitionsComponent }    from './competitions.component';
import {CompetitionDetailComponent} from './competition-detail.component';



const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list',    component: CompetitionsComponent },
    { path: ':id', component:CompetitionDetailComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionsRoutingModule {}

