/**
 * Created by nagar on 3/25/2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

export class Competition {
    _links: Links;
    caption:string;
    league:string;
    year:number;
    currentMatchday:number;
    numberOfMatchDays:number;
    numberOfTeams:number;
    numberOfGames:number;
    id:number;
    twitter:string;


}

export class Links {
    self: Link;
    teams:Link;
    fixtures:Link;
    leagueTable:Link;
}

export class Link {
    href:string
}

const FETCH_LATENCY = 500;

@Injectable()
export class CompetitionsService {

    competitions: Competition[];

    private competitionsUrl = 'http://localhost:8080/competitions';  // URL to web API
    constructor (private http: Http) {}

    getCompetitions(): Observable<Competition[]> {
        return this.http.get(this.competitionsUrl)
            .map(response=>response.json())
            .catch(this.handleError);
    }

    getDetailedCompetition(id: number): Observable<Competition> {
        return this.http.get(this.competitionsUrl+'/'+id)
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