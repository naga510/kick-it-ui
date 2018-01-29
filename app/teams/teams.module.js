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
var teams_list_component_1 = require('./teams-list.component');
var teams_detail_component_1 = require('./teams-detail.component');
var teams_service_1 = require('./teams.service');
var teams_routing_module_1 = require('./teams-routing.module');
var TeamsModule = (function () {
    function TeamsModule() {
    }
    TeamsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, teams_routing_module_1.TeamsRoutingModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [teams_detail_component_1.TeamsDetailComponent, teams_list_component_1.TeamsListComponent],
            providers: [teams_service_1.TeamsService]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamsModule);
    return TeamsModule;
}());
exports.TeamsModule = TeamsModule;
//# sourceMappingURL=teams.module.js.map