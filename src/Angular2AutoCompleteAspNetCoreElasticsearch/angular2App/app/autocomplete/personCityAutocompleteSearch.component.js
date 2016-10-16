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
var personCityDataService_1 = require('./personCityDataService');
var personCity_1 = require('./personCity');
var ng2_completer_1 = require('ng2-completer');
var PersonCityAutocompleteSearchComponent = (function () {
    function PersonCityAutocompleteSearchComponent(completerService, http, _configuration) {
        this.completerService = completerService;
        this.http = http;
        this._configuration = _configuration;
        this.bindModelPersonCityChange = new core_1.EventEmitter();
        this.disableAutocomplete = false;
        var actionUrl = _configuration.Server + 'api/personcity/search/';
        this.dataService = new personCityDataService_1.PersonCityDataService(http, _configuration);
    }
    PersonCityAutocompleteSearchComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit AutocompleteSearch");
    };
    PersonCityAutocompleteSearchComponent.prototype.onPersonCitySelected = function (selected) {
        console.log(selected);
        this.bindModelPersonCityChange.emit(selected.originalObject);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PersonCityAutocompleteSearchComponent.prototype, "bindModelPersonCityChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', personCity_1.PersonCity)
    ], PersonCityAutocompleteSearchComponent.prototype, "bindModelPersonCity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PersonCityAutocompleteSearchComponent.prototype, "disableAutocomplete", void 0);
    PersonCityAutocompleteSearchComponent = __decorate([
        core_1.Component({
            selector: 'autocompletesearch',
            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
            styles: [String(require('./personCityAutocompleteSearch.component.scss'))]
        }), 
        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
    ], PersonCityAutocompleteSearchComponent);
    return PersonCityAutocompleteSearchComponent;
}());
exports.PersonCityAutocompleteSearchComponent = PersonCityAutocompleteSearchComponent;
//# sourceMappingURL=personCityAutocompleteSearch.component.js.map