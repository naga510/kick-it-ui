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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var moment_module_1 = require('angular2-moment/moment.module');
var core_module_1 = require('../core/core.module');
var fixtures_component_1 = require('./fixtures.component');
var fixtures_service_1 = require('./fixtures.service');
var fixtures_routing_module_1 = require('./fixtures-routing.module');
var FixturesModule = (function () {
    function FixturesModule() {
    }
    FixturesModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, common_1.CommonModule, fixtures_routing_module_1.FixturesRoutingModule, http_1.HttpModule, http_1.JsonpModule, moment_module_1.MomentModule],
            declarations: [fixtures_component_1.FixturesComponent],
            exports: [fixtures_component_1.FixturesComponent],
            providers: [fixtures_service_1.FixturesService]
        }), 
        __metadata('design:paramtypes', [])
    ], FixturesModule);
    return FixturesModule;
}());
exports.FixturesModule = FixturesModule;
//# sourceMappingURL=fixtures.module.js.map