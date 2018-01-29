import { Component, OnInit } from '@angular/core';
import '../rxjs-operators';
import { Observable }     from 'rxjs/Observable';


import { Team,
         TeamsService }     from './teams.service';

@Component({
  template: `
    <h3 highlight>Teams</h3>
    <div *ngFor='let team of teams | async'>
      <a routerLink="{{'../' + team.id}}">{{team.id}} - {{team.name}}</a>
    </div>
  `
})
export class TeamsListComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teams = this.teamsService.getTeams();
    console.log(this.teams);
  }
}