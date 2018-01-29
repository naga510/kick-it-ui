"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var Team = (function () {
    function Team(id, name) {
        this.id = id;
        this.name = name;
    }
    return Team;
}());
exports.Team = Team;
var Team1 = (function () {
    function Team1() {
    }
    return Team1;
}());
exports.Team1 = Team1;
var Links = (function () {
    function Links() {
    }
    return Links;
}());
exports.Links = Links;
var Link = (function () {
    function Link() {
    }
    return Link;
}());
exports.Link = Link;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var TEAMS = [
    new Team(1, 'Dragon Burning Cities'),
    new Team(2, 'Sky Rains Great White Sharks'),
    new Team(3, 'Giant Asteroid Heading For Earth'),
    new Team(4, 'Procrastinators Meeting Delayed Again'),
];
var FETCH_LATENCY = 500;
var TeamsService = (function () {
    //private heroesUrl = 'app/heroes';  // URL to web API
    function TeamsService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:8080/teams'; // URL to web API
    }
    TeamsService.prototype.getTeams = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TeamsService.prototype.getTeam = function (id) {
        return this.http.get('http://localhost:8080/teams/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TeamsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body;
    };
    TeamsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    TeamsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamsService);
    return TeamsService;
}());
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map