import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


export class Team {
  constructor(public id: number, public name: string) { }
}

export class Team1 {
  _links: Links;
  name:string;
  id:number;
  twitter:string;
  twitterId:number;
  code:string;
  shortName:string;
  squadMarketValue:string;
  crestUrl:string
  
}

export class Links {
   self: Link;
   fixtures:Link;
   players:Link
}

export class Link {
   href:string
}

export class Hero {
  id: number;
  name: string;
}

const TEAMS: Team[] = [
  new Team(1, 'Dragon Burning Cities'),
  new Team(2, 'Sky Rains Great White Sharks'),
  new Team(3, 'Giant Asteroid Heading For Earth'),
  new Team(4, 'Procrastinators Meeting Delayed Again'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class TeamsService {
  private heroesUrl = 'http://localhost:8080/teams';  // URL to web API
   //private heroesUrl = 'app/heroes';  // URL to web API

  
    constructor (private http: Http) {}


  
  
  getTeams(): Observable<Team[]> {
   
      return this.http.get(this.heroesUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
    }
    
    getTeam(id: number):Observable<Team> {        
    	 return this.http.get('http://localhost:8080/teams/'+id)
	                 .map(this.extractData)
                         .catch(this.handleError);
    }

private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
  
  private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

}

