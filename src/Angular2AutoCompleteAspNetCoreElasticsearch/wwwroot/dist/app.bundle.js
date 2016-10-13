webpackJsonp([0],{

/***/ 0:
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 24);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 28);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 62);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 63);
	var http_1 = __webpack_require__(/*! @angular/http */ 66);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 64);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 70);
	var search_component_1 = __webpack_require__(/*! ./autocomplete/search.component */ 72);
	var searchDataService_1 = __webpack_require__(/*! ./services/searchDataService */ 65);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                common_1.CommonModule,
	                ng2_completer_1.Ng2CompleterModule,
	                forms_1.FormsModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                search_component_1.AutocompleteSearchComponent
	            ],
	            providers: [
	                searchDataService_1.SearchDataService,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var AppComponent = (function () {
	    function AppComponent(router) {
	        this.router = router;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 59),
	            styles: [__webpack_require__(/*! ./app.component.scss */ 60), __webpack_require__(/*! ../style/app.scss */ 61)]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 59:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Angular2 Auto Complete, ASP.NET Core Elasticsearch</a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li><a [routerLink]=\"['/home']\">Home</a></li>-->\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://twitter.com/damien_bod\"><img src=\"assets/damienbod.jpg\" height=\"40\" style=\"margin-top: -10px;\" /></a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <footer>\r\n        <p>\r\n            <a href=\"https://twitter.com/damien_bod\">DamienBod</a>&nbsp;Blog: <a href=\"https://damienbod.com/\">Software Engineering</a>\r\n            &copy; 2016\r\n        </p>\r\n    </footer>\r\n</div>"

/***/ },

/***/ 60:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.scss ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ },

/***/ 61:
/*!************************************!*\
  !*** ./angular2App/style/app.scss ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ },

/***/ 62:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 63:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 64);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 64:
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var searchDataService_1 = __webpack_require__(/*! ../services/searchDataService */ 65);
	var personCity_1 = __webpack_require__(/*! ../autocomplete/personCity */ 68);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.IndexExists = false;
	        this.message = "Hello from HomeComponent constructor";
	        this.SelectedPersonCity = new personCity_1.PersonCity();
	    }
	    ;
	    HomeComponent.prototype.CreateTestData = function () {
	        this._dataService.CreateTestData().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent.prototype.CreateIndex = function () {
	        if (!this.IndexExists) {
	            this._dataService.CreateIndex().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	            this.IndexExists = true;
	        }
	    };
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .IndexExists()
	            .subscribe(function (data) { return _this.IndexExists = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 69),
	            providers: [searchDataService_1.SearchDataService]
	        }), 
	        __metadata('design:paramtypes', [searchDataService_1.SearchDataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 65:
/*!*******************************************************!*\
  !*** ./angular2App/app/services/searchDataService.ts ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 66);
	__webpack_require__(/*! rxjs/add/operator/map */ 67);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 62);
	var SearchDataService = (function () {
	    function SearchDataService(_http, _configuration) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this.GetAll = function () {
	            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
	        };
	        this.CreateIndex = function () {
	            var url = _this.actionUrl + "createindex";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.IndexExists = function () {
	            var url = _this.actionUrl + "indexexists";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.CreateTestData = function () {
	            var url = _this.actionUrl + "createtestdata";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.actionUrl = _configuration.Server + 'api/personcity/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    SearchDataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
	    ], SearchDataService);
	    return SearchDataService;
	}());
	exports.SearchDataService = SearchDataService;


/***/ },

/***/ 68:
/*!****************************************************!*\
  !*** ./angular2App/app/autocomplete/personCity.ts ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	var PersonCity = (function () {
	    function PersonCity() {
	    }
	    return PersonCity;
	}());
	exports.PersonCity = PersonCity;


/***/ },

/***/ 69:
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>Elasticsearch Index exists: {{IndexExists}}</p> \r\n    <button (click)=\"CreateIndex()\" *ngIf=\"!IndexExists\">Create Index</button>\r\n    <button (click)=\"CreateTestData()\" *ngIf=\"IndexExists\">Create TestData</button>\r\n    \r\n    <hr />\r\n    <br />\r\n\r\n    <autocompletesearch [(bindModelPersonCity)]=\"SelectedPersonCity\" style=\"width: 600px;\" >\r\n    </autocompletesearch>\r\n\r\n    <hr />\r\n\r\n    SELECTED : <span>{{SelectedPersonCity.name}} {{SelectedPersonCity.familyName}} </span>\r\n    <br />\r\n    INFO     : <span>{{SelectedPersonCity.info}}</span>\r\n    <hr />\r\n\r\n</div>"

/***/ },

/***/ 72:
/*!**********************************************************!*\
  !*** ./angular2App/app/autocomplete/search.component.ts ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 66);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 62);
	var personCityDataService_1 = __webpack_require__(/*! ./personCityDataService */ 73);
	var personCity_1 = __webpack_require__(/*! ./personCity */ 68);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 70);
	var AutocompleteSearchComponent = (function () {
	    function AutocompleteSearchComponent(completerService, http, _configuration) {
	        this.completerService = completerService;
	        this.http = http;
	        this._configuration = _configuration;
	        this.bindModelPersonCityChange = new core_1.EventEmitter();
	        var actionUrl = _configuration.Server + 'api/personcity/search/';
	        this.dataService = new personCityDataService_1.PersonCityDataService(http, _configuration);
	    }
	    AutocompleteSearchComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit AutocompleteSearch");
	    };
	    AutocompleteSearchComponent.prototype.onPersonCitySelected = function (selected) {
	        console.log(selected);
	        this.bindModelPersonCityChange.emit(selected.originalObject);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AutocompleteSearchComponent.prototype, "bindModelPersonCityChange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', personCity_1.PersonCity)
	    ], AutocompleteSearchComponent.prototype, "bindModelPersonCity", void 0);
	    AutocompleteSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'autocompletesearch',
	            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\"></ng2-completer>\n\n"
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
	    ], AutocompleteSearchComponent);
	    return AutocompleteSearchComponent;
	}());
	exports.AutocompleteSearchComponent = AutocompleteSearchComponent;


/***/ },

/***/ 73:
/*!***************************************************************!*\
  !*** ./angular2App/app/autocomplete/personCityDataService.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 4);
	var PersonCityDataService = (function (_super) {
	    __extends(PersonCityDataService, _super);
	    function PersonCityDataService(http, _configuration) {
	        _super.call(this);
	        this.http = http;
	        this._configuration = _configuration;
	        this.actionUrl = _configuration.Server + 'api/personcity/search/';
	    }
	    PersonCityDataService.prototype.search = function (term) {
	        var _this = this;
	        this.http.get(this.actionUrl + term)
	            .map(function (res) {
	            var data = res.json();
	            var matches = data.map(function (personcity) {
	                return {
	                    title: personcity.name,
	                    description: personcity.familyName + ", " + personcity.info,
	                    originalObject: personcity
	                };
	            });
	            _this.next(matches);
	        })
	            .subscribe();
	    };
	    PersonCityDataService.prototype.cancel = function () {
	    };
	    return PersonCityDataService;
	}(Subject_1.Subject));
	exports.PersonCityDataService = PersonCityDataService;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map