import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { LeaguesComponent }     from './leagues.component';
import { ContactService }       from './contact.service';
import { LeaguesRoutingModule } from './leagues-routing.module';
@NgModule({
  imports:      [ SharedModule, LeaguesRoutingModule ],
  declarations: [ LeaguesComponent ],
  providers:    [ ContactService ]
})
export class LeaguesModule { }
