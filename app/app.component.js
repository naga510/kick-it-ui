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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kick-it',
            template: "\n  <div class=\"container\">\n\n      <!-- Static navbar -->\n      <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"competitions\"  routerLinkActive=\"active\">KICK-IT</a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a routerLink=\"competitions\"  routerLinkActive=\"active\">Competitions</a></li>\n              <li><a routerLink=\"leagues\" routerLinkActive=\"active\">Leagues</a></li>\n              <li><a routerLink=\"teams\"  routerLinkActive=\"active\">Teams</a></li>\n              <li><a routerLink=\"heroes\"  routerLinkActive=\"active\">Heroes</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li class=\"dropdown-header\">Nav header</li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"./\">Default <span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"../navbar-static-top/\">Static top</a></li>\n              <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div><!--/.container-fluid -->\n      </nav>\n      <div class=\"jumbotron\">\n        <router-outlet></router-outlet>\n     </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map