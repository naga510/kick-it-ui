import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import '../rxjs-operators';
import { Observable }     from 'rxjs/Observable';
import { Team,
         TeamsService }     from './teams.service';

@Component({
  template: `
    <h3 highlight>Team Detail</h3>    
    <h3>{{ (team | async)?.name }}</h3>
<a class="twitter-timeline"   data-height="400" data-width="300" data-chrome="nofooter" href="https://twitter.com/{{ (team | async)?.twitterId }}">Tweets by Arsenal</a> 

<br>
    <a routerLink="../list">Teams</a>
  `,
   styles: ['h1 { font-weight: normal; }']
})
export class TeamsDetailComponent implements OnInit,AfterViewInit {
  id: number;
  team: Observable<Team>;
  constructor(private route: ActivatedRoute,private teamsService: TeamsService) {  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
    this.team=this.teamsService.getTeam(this.id);
  }
  
  ngAfterViewInit () {
             
              !function(d,s,id){
                  var js: any,
                      fjs=d.getElementsByTagName(s)[0],
                      p='https';
                  if(!d.getElementById(id)){
                      js=d.createElement(s);
                      js.id=id;
                      js.src=p+"://platform.twitter.com/widgets.js";
                      fjs.parentNode.insertBefore(js,fjs);
                  }
              }
              (document,"script","twitter-wjs");
    }
    
    ngOnDestroy() {
    
    }
}
