"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require("rxjs/Subject");
var SearchDataService = (function (_super) {
    __extends(SearchDataService, _super);
    function SearchDataService(http, _configuration) {
        var _this = this;
        _super.call(this);
        this.http = http;
        this._configuration = _configuration;
        this.FindAllForTerm = function (term) {
            return _this.http.get(_this.actionUrl + term).map(function (response) { return response.json(); });
        };
        this.actionUrl = _configuration.Server + 'api/personcity/autocomplete/';
    }
    SearchDataService.prototype.search = function (term) {
        var _this = this;
        this.http.get(this.actionUrl + term)
            .map(function (res) {
            var data = res.json();
            var matches = data.map(function (autocomplete) {
                return {
                    title: autocomplete,
                    originalObject: autocomplete
                };
            });
            _this.next(matches);
        })
            .subscribe();
    };
    SearchDataService.prototype.cancel = function () {
    };
    return SearchDataService;
}(Subject_1.Subject));
exports.SearchDataService = SearchDataService;
//# sourceMappingURL=searchComponentDataService.js.map