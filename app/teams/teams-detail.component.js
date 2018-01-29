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
var router_1 = require('@angular/router');
require('../rxjs-operators');
var teams_service_1 = require('./teams.service');
var TeamsDetailComponent = (function () {
    function TeamsDetailComponent(route, teamsService) {
        this.route = route;
        this.teamsService = teamsService;
    }
    TeamsDetailComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        this.team = this.teamsService.getTeam(this.id);
    };
    TeamsDetailComponent.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    TeamsDetailComponent.prototype.ngOnDestroy = function () {
    };
    TeamsDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <h3 highlight>Team Detail</h3>    \n    <h3>{{ (team | async)?.name }}</h3>\n<a class=\"twitter-timeline\"   data-height=\"400\" data-width=\"300\" data-chrome=\"nofooter\" href=\"https://twitter.com/{{ (team | async)?.twitterId }}\">Tweets by Arsenal</a> \n\n<br>\n    <a routerLink=\"../list\">Teams</a>\n  ",
            styles: ['h1 { font-weight: normal; }']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, teams_service_1.TeamsService])
    ], TeamsDetailComponent);
    return TeamsDetailComponent;
}());
exports.TeamsDetailComponent = TeamsDetailComponent;
//# sourceMappingURL=teams-detail.component.js.map