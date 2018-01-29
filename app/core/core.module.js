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
var title_component_1 = require('./title.component');
var callback_pipe_1 = require('./callback.pipe');
var user_service_1 = require('./user.service');
var user_service_2 = require('./user.service');
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: user_service_2.UserServiceConfig, useValue: config }
            ]
        };
    };
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [title_component_1.TitleComponent, callback_pipe_1.CallbackPipe],
            exports: [title_component_1.TitleComponent, callback_pipe_1.CallbackPipe],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map