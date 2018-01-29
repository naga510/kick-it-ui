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
var router_1 = require('@angular/router');
require('../rxjs-operators');
//import Competition Service and Comeptition model
var competitions_service_1 = require('./competitions.service');
var CompetitionDetailComponent = (function () {
    function CompetitionDetailComponent(route, competitionService) {
        this.route = route;
        this.competitionService = competitionService;
    }
    CompetitionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        this.competitionService.getDetailedCompetition(this.id).subscribe(function (competition) { return _this.competition = competition; });
    };
    CompetitionDetailComponent = __decorate([
        core_1.Component({
            template: "\n        <div *ngIf=\"competition\">\n        <h3 highlight>{{competition.caption}}</h3>\n        <br>\n        <fixture-list competitionId=\"{{id}}\" matchDay=\"{{competition.currentMatchday}}\"></fixture-list>\n        </div>\n        <a routerLink=\"../list\">Competitions</a>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, competitions_service_1.CompetitionsService])
    ], CompetitionDetailComponent);
    return CompetitionDetailComponent;
}());
exports.CompetitionDetailComponent = CompetitionDetailComponent;
//# sourceMappingURL=competition-detail.component.js.map