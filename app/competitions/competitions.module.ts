/**
 * Created by nagar on 3/25/2017.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FixturesModule } from '../fixtures/fixtures.module';


import { CompetitionsComponent }    from './competitions.component';
import {CompetitionDetailComponent} from './competition-detail.component';
import { CompetitionsService }          from './competitions.service';
import { CompetitionsRoutingModule }    from './competitions-routing.module';

@NgModule({
    imports:      [ CommonModule, CompetitionsRoutingModule,HttpModule,JsonpModule, FixturesModule ],
    declarations: [ CompetitionsComponent,CompetitionDetailComponent ],
    providers:    [ CompetitionsService ]
})
export class CompetitionsModule {}
