import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';
import { CoreModule} from '../core/core.module';


import { FixturesComponent }    from './fixtures.component';
import { FixturesService }          from './fixtures.service';
import { FixturesRoutingModule }    from './fixtures-routing.module';

@NgModule({
    imports:      [ CoreModule, CommonModule, FixturesRoutingModule,HttpModule,JsonpModule ,MomentModule],
    declarations: [ FixturesComponent ],
    exports: [FixturesComponent],
    providers:    [ FixturesService ]
})
export class FixturesModule {}
