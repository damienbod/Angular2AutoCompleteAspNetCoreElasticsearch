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
var http_1 = require("@angular/http");
var app_constants_1 = require('../app.constants');
var searchComponentDataService_1 = require('./searchComponentDataService');
var ng2_completer_1 = require('ng2-completer');
var SearchComponent = (function () {
    function SearchComponent(completerService, http, _configuration) {
        this.completerService = completerService;
        this.http = http;
        this._configuration = _configuration;
        this.bindModelPersonCityChange = new core_1.EventEmitter();
        this.disableAutocomplete = false;
        this.dataService = new searchComponentDataService_1.SearchDataService(http, _configuration);
    }
    SearchComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit SearchComponent");
    };
    SearchComponent.prototype.onPersonCitySelected = function (selected) {
        var _this = this;
        console.log(selected);
        this.dataService
            .FindAllForTerm(selected.title)
            .subscribe(function (data) { return _this.bindModelPersonCityChange.emit(data); }, function (error) { return console.log(error); }, function () { return console.log('onPersonCitySelected complete'); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "bindModelPersonCityChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SearchComponent.prototype, "disableAutocomplete", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
            styles: [String(require('./search.component.scss'))]
        }), 
        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map