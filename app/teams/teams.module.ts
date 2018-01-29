import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';


import { TeamsListComponent }    from './teams-list.component';
import { TeamsDetailComponent }  from './teams-detail.component';
import { TeamsService }          from './teams.service';
import { TeamsRoutingModule }    from './teams-routing.module';

@NgModule({
  imports:      [ CommonModule, TeamsRoutingModule,HttpModule,JsonpModule ],
  declarations: [ TeamsDetailComponent, TeamsListComponent ],
  providers:    [ TeamsService ]
})
export class TeamsModule {}


