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
//import Competition Service and Comeptition model
var fixtures_service_1 = require('./fixtures.service');
var FixturesComponent = (function () {
    function FixturesComponent(fixturesService) {
        this.fixturesService = fixturesService;
    }
    FixturesComponent.prototype.ngOnInit = function () {
        this.fixtures = this.fixturesService.getFixtures(this.competitionId, this.matchDay);
    };
    FixturesComponent.prototype.showfixture = function (fixture) {
        return new Date(fixture.date) > new Date();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FixturesComponent.prototype, "competitionId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FixturesComponent.prototype, "matchDay", void 0);
    FixturesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fixture-list',
            templateUrl: 'fixtures.component.html',
            styleUrls: ['fixtures.component.css']
        }), 
        __metadata('design:paramtypes', [fixtures_service_1.FixturesService])
    ], FixturesComponent);
    return FixturesComponent;
}());
exports.FixturesComponent = FixturesComponent;
//# sourceMappingURL=fixtures.component.js.map