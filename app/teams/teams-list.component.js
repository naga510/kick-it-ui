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
require('../rxjs-operators');
var teams_service_1 = require('./teams.service');
var TeamsListComponent = (function () {
    function TeamsListComponent(teamsService) {
        this.teamsService = teamsService;
    }
    TeamsListComponent.prototype.ngOnInit = function () {
        this.teams = this.teamsService.getTeams();
        console.log(this.teams);
    };
    TeamsListComponent = __decorate([
        core_1.Component({
            template: "\n    <h3 highlight>Teams</h3>\n    <div *ngFor='let team of teams | async'>\n      <a routerLink=\"{{'../' + team.id}}\">{{team.id}} - {{team.name}}</a>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [teams_service_1.TeamsService])
    ], TeamsListComponent);
    return TeamsListComponent;
}());
exports.TeamsListComponent = TeamsListComponent;
//# sourceMappingURL=teams-list.component.js.map