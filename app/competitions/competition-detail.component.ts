/**
 * Created by nagar on 3/25/2017.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import '../rxjs-operators';
import { Observable }     from 'rxjs/Observable';

//import Competition Service and Comeptition model
import {CompetitionsService, Competition} from './competitions.service';
@Component({
    template:`
        <div *ngIf="competition">
        <h3 highlight>{{competition.caption}}</h3>
        <br>
        <fixture-list competitionId="{{id}}" matchDay="{{competition.currentMatchday}}"></fixture-list>
        </div>
        <a routerLink="../list">Competitions</a>
    `
})
export class CompetitionDetailComponent implements OnInit{
    competition:Competition;
    id:number;
    constructor(private route: ActivatedRoute,private competitionService: CompetitionsService) {}
    ngOnInit()
    {
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        this.competitionService.getDetailedCompetition(this.id).subscribe(competition=>this.competition = competition);
    }
}
