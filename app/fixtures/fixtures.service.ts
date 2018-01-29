/*
  Created By Nagaraju to add fixtures service calls
*/
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

export class Fixture
{
  date: string;
  status: string;
  matchDay: number;
  homeTeamName: string;
  awayTeamName: string;
  homeCrest: string;
  awayCrest: string;
  result: Result;

}

export class Result
{
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}

const FETCH_LATENCY = 500;

@Injectable()
export class FixturesService {

    fixtures: Fixture[];

    private competitionsUrl = 'http://localhost:8080/competitions';  // URL to web API
    constructor (private http: Http) {}

    getFixtures(id: number, matchDay: number): Observable<Fixture[]> {
        return this.http.get(this.competitionsUrl+'/'+id+'/fixtures?matchDay='+matchDay)
            .map(response=>response.json())
            .catch(this.handleError);
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
