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
var AutocompleteSearchComponent = (function () {
    function AutocompleteSearchComponent() {
    }
    AutocompleteSearchComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit AutocompleteSearch");
        console.log(this.data);
        console.log(this.layout);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AutocompleteSearchComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AutocompleteSearchComponent.prototype, "layout", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AutocompleteSearchComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AutocompleteSearchComponent.prototype, "displayRawData", void 0);
    AutocompleteSearchComponent = __decorate([
        core_1.Component({
            selector: 'autocompletesearch',
            template: "\n<div style=\"margin-bottom:100px;\">\n    todo\n</div>\n\n<div *ngIf=\"displayRawData\">\n    raw data:\n    <hr />\n    <span>{{data | json}}</span>\n    <hr />\n    layout:\n    <hr />\n    <span>{{layout | json}}</span>\n    <hr />\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AutocompleteSearchComponent);
    return AutocompleteSearchComponent;
}());
exports.AutocompleteSearchComponent = AutocompleteSearchComponent;
//# sourceMappingURL=search.component.js.map