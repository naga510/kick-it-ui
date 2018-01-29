import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'leagues', pathMatch: 'full'},
  { path: 'competitions', loadChildren: 'app/competitions/competitions.module#CompetitionsModule' },
  { path: 'fixtures', loadChildren: 'app/fixtures/fixtures.module#FixturesModule' },
  { path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
