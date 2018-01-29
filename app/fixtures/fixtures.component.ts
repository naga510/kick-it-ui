import { Component, Input, OnInit } from '@angular/core';
import '../rxjs-operators';
import { Observable }     from 'rxjs/Observable';
import { ActivatedRoute }    from '@angular/router';

//import Competition Service and Comeptition model
import {FixturesService, Fixture} from './fixtures.service';
@Component({
  moduleId:module.id,
    selector: 'fixture-list',
    templateUrl:'fixtures.component.html',
    styleUrls:['fixtures.component.css']

})
export class FixturesComponent implements OnInit{
    fixtures:Observable<Fixture[]>;
    @Input() competitionId:number;
    @Input() matchDay:number;
    constructor(private fixturesService: FixturesService) {}
    ngOnInit()
    {
        this.fixtures=this.fixturesService.getFixtures(this.competitionId, this.matchDay);

    }

    showfixture(fixture : Fixture) {
      return new Date(fixture.date)> new Date();
    }

}
