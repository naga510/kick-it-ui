/**
 * Created by nagar on 3/25/2017.
 */
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
var Competition = (function () {
    function Competition() {
    }
    return Competition;
}());
exports.Competition = Competition;
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
var FETCH_LATENCY = 500;
var CompetitionsService = (function () {
    function CompetitionsService(http) {
        this.http = http;
        this.competitionsUrl = 'http://localhost:8080/competitions'; // URL to web API
    }
    CompetitionsService.prototype.getCompetitions = function () {
        return this.http.get(this.competitionsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompetitionsService.prototype.getDetailedCompetition = function (id) {
        return this.http.get(this.competitionsUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompetitionsService.prototype.handleError = function (error) {
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
    CompetitionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompetitionsService);
    return CompetitionsService;
}());
exports.CompetitionsService = CompetitionsService;
//# sourceMappingURL=competitions.service.js.map