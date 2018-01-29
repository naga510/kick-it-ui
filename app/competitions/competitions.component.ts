/**
 * Created by nagar on 3/25/2017.
 */

import { Component, OnInit } from '@angular/core';
import '../rxjs-operators';
import { Observable }     from 'rxjs/Observable';

//import Competition Service and Comeptition model
import {CompetitionsService, Competition} from './competitions.service';
@Component({
    template:`
        <h3 highlight>Competitions</h3>
        <div *ngFor='let competition of competitions | async'>
            <a routerLink="{{'../' + competition.id}}">{{competition.caption}}</a>
        </div>
    `
})
export class CompetitionsComponent implements OnInit{
    competitions:Observable<Competition[]>;
    constructor(private competitionService: CompetitionsService) {}
    ngOnInit()
    {
        this.competitions=this.competitionService.getCompetitions();

    }
}
