"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require("rxjs/Subject");
var PersonCityData = (function (_super) {
    __extends(PersonCityData, _super);
    function PersonCityData(http, _configuration) {
        _super.call(this);
        this.http = http;
        this._configuration = _configuration;
        this.actionUrl = _configuration.Server + 'api/personcity/search/';
    }
    PersonCityData.prototype.search = function (term) {
        var _this = this;
        this.http.get(this.actionUrl + term)
            .map(function (res) {
            var data = res.json();
            var matches = data.map(function (personcity) {
                return {
                    title: personcity.name
                };
            });
            _this.next(matches);
        })
            .subscribe();
    };
    PersonCityData.prototype.cancel = function () {
    };
    return PersonCityData;
}(Subject_1.Subject));
exports.PersonCityData = PersonCityData;
//# sourceMappingURL=personCityData.js.map