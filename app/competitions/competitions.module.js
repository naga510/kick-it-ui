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
/**
 * Created by nagar on 3/25/2017.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var fixtures_module_1 = require('../fixtures/fixtures.module');
var competitions_component_1 = require('./competitions.component');
var competition_detail_component_1 = require('./competition-detail.component');
var competitions_service_1 = require('./competitions.service');
var competitions_routing_module_1 = require('./competitions-routing.module');
var CompetitionsModule = (function () {
    function CompetitionsModule() {
    }
    CompetitionsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, competitions_routing_module_1.CompetitionsRoutingModule, http_1.HttpModule, http_1.JsonpModule, fixtures_module_1.FixturesModule],
            declarations: [competitions_component_1.CompetitionsComponent, competition_detail_component_1.CompetitionDetailComponent],
            providers: [competitions_service_1.CompetitionsService]
        }), 
        __metadata('design:paramtypes', [])
    ], CompetitionsModule);
    return CompetitionsModule;
}());
exports.CompetitionsModule = CompetitionsModule;
//# sourceMappingURL=competitions.module.js.map