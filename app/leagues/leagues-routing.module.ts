import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LeaguesComponent }   from './leagues.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'leagues', component: LeaguesComponent }
  ])],
  exports: [RouterModule]
})
export class LeaguesRoutingModule {}
