webpackJsonp([0],[
/* 0 */
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
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
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 66);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 67);
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 68);
	var homesearch_component_1 = __webpack_require__(/*! ./homesearch/homesearch.component */ 74);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 77);
	var personcityautocomplete_component_1 = __webpack_require__(/*! ./personcityautocomplete/personcityautocomplete.component */ 82);
	var personcitysearch_component_1 = __webpack_require__(/*! ./personcitysearch/personcitysearch.component */ 75);
	var searchDataService_1 = __webpack_require__(/*! ./services/searchDataService */ 69);
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
	                homesearch_component_1.HomeSearchComponent,
	                personcityautocomplete_component_1.PersoncityautocompleteComponent,
	                personcitysearch_component_1.PersoncitysearchComponent
	            ],
	            providers: [
	                searchDataService_1.SearchDataService,
	                app_constants_1.Configuration,
	                personcitysearch_component_1.PersoncitysearchComponent
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
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
	            styles: [String(__webpack_require__(/*! ./app.component.scss */ 60)), String(__webpack_require__(/*! ../style/app.scss */ 64))]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Home</a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/home']\">AutoComplete</a></li>\r\n                <li><a [routerLink]=\"['/homesearch']\">Search</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://twitter.com/damien_bod\"><img src=\"assets/damienbod.jpg\" height=\"40\" style=\"margin-top: -10px;\" /></a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <footer>\r\n        <p>\r\n            <a href=\"https://twitter.com/damien_bod\">DamienBod</a>&nbsp;Blog: <a href=\"https://damienbod.com/\">Software Engineering</a>\r\n            &copy; 2016\r\n        </p>\r\n    </footer>\r\n</div>"

/***/ },
/* 60 */
/*!********************************************!*\
  !*** ./angular2App/app/app.component.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./app.component.scss */ 61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/*!***************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/app.component.scss ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  padding-top: 50px; }\n\n.starter-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.navigationLinkButton:hover {\n  cursor: pointer; }\n\na {\n  color: #03A9F4; }\n", ""]);
	
	// exports


/***/ },
/* 62 */,
/* 63 */,
/* 64 */
/*!************************************!*\
  !*** ./angular2App/style/app.scss ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./app.scss */ 65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/style/app.scss ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, "a {\n  color: #03A9F4; }\n\n.completer-input {\n  width: 500px; }\n", ""]);
	
	// exports


/***/ },
/* 66 */
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
/* 67 */
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 68);
	var homesearch_component_1 = __webpack_require__(/*! ./homesearch/homesearch.component */ 74);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'homesearch', component: homesearch_component_1.HomeSearchComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },
/* 68 */
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
	var searchDataService_1 = __webpack_require__(/*! ../services/searchDataService */ 69);
	var personCity_1 = __webpack_require__(/*! ../model/personCity */ 72);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.IndexExists = false;
	        this.message = "Hello from HomeComponent constructor";
	        this.SelectedPersonCity = new personCity_1.PersonCity();
	    }
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
	            template: __webpack_require__(/*! ./home.component.html */ 73),
	            providers: [searchDataService_1.SearchDataService]
	        }), 
	        __metadata('design:paramtypes', [searchDataService_1.SearchDataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 69 */
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
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	__webpack_require__(/*! rxjs/add/operator/map */ 71);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
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
	        this.FindAllForTerm = function (term) {
	            return _this._http.get(_this.actionUrl + "search/" + term).map(function (response) { return response.json(); });
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
/* 70 */,
/* 71 */,
/* 72 */
/*!*********************************************!*\
  !*** ./angular2App/app/model/personCity.ts ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	var PersonCity = (function () {
	    function PersonCity() {
	    }
	    return PersonCity;
	}());
	exports.PersonCity = PersonCity;


/***/ },
/* 73 */
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>Elasticsearch Index exists: {{IndexExists}}</p> \r\n    <button (click)=\"CreateIndex()\" *ngIf=\"!IndexExists\">Create Index</button>\r\n    <button (click)=\"CreateTestData()\" *ngIf=\"IndexExists\">Create TestData</button>\r\n    \r\n    <hr />\r\n    <br />\r\n\r\n    <personcityautocomplete [(bindModelPersonCity)]=\"SelectedPersonCity\" [disableAutocomplete]=\"!IndexExists\" >\r\n    </personcityautocomplete>\r\n\r\n    <hr />\r\n\r\n    SELECTED : <span>{{SelectedPersonCity.name}} {{SelectedPersonCity.familyName}} </span>\r\n    <br />\r\n    INFO     : <span>{{SelectedPersonCity.info}}</span>\r\n    <hr />\r\n\r\n\r\n</div>"

/***/ },
/* 74 */
/*!************************************************************!*\
  !*** ./angular2App/app/homesearch/homesearch.component.ts ***!
  \************************************************************/
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
	var searchDataService_1 = __webpack_require__(/*! ../services/searchDataService */ 69);
	var personcitysearch_component_1 = __webpack_require__(/*! ../personcitysearch/personcitysearch.component */ 75);
	var HomeSearchComponent = (function () {
	    function HomeSearchComponent(_dataService, _personcitysearchComponent) {
	        this._dataService = _dataService;
	        this._personcitysearchComponent = _personcitysearchComponent;
	        this.IndexExists = false;
	        this.message = "Hello from HomeSearchComponent constructor";
	        this.SelectedTerm = "none";
	    }
	    HomeSearchComponent.prototype.CreateTestData = function () {
	        this._dataService.CreateTestData().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('CreateTestData complete'); });
	    };
	    HomeSearchComponent.prototype.CreateIndex = function () {
	        if (!this.IndexExists) {
	            this._dataService.CreateIndex().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('CreateIndex complete'); });
	            this.IndexExists = true;
	        }
	    };
	    HomeSearchComponent.prototype.onTermSelectedEvent = function (term) {
	        this.SelectedTerm = term;
	        this.findDataForSearchTerm(term);
	    };
	    HomeSearchComponent.prototype.findDataForSearchTerm = function (term) {
	        var _this = this;
	        console.log("findDataForSearchTerm:" + term);
	        this._dataService.FindAllForTerm(term)
	            .subscribe(function (data) {
	            _this.PersonCityItems = data;
	        }, function (error) { return console.log(error); }, function () {
	            console.log('PersonCitySearch:GetAll completed');
	        });
	    };
	    HomeSearchComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .IndexExists()
	            .subscribe(function (data) { return _this.IndexExists = data; }, function (error) { return console.log(error); }, function () { return console.log('Get IndexExists complete'); });
	    };
	    HomeSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'homesearchcomponent',
	            template: __webpack_require__(/*! ./homesearch.component.html */ 81),
	            providers: [searchDataService_1.SearchDataService]
	        }), 
	        __metadata('design:paramtypes', [searchDataService_1.SearchDataService, personcitysearch_component_1.PersoncitysearchComponent])
	    ], HomeSearchComponent);
	    return HomeSearchComponent;
	}());
	exports.HomeSearchComponent = HomeSearchComponent;


/***/ },
/* 75 */
/*!************************************************************************!*\
  !*** ./angular2App/app/personcitysearch/personcitysearch.component.ts ***!
  \************************************************************************/
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
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
	var personcitysearchService_1 = __webpack_require__(/*! ./personcitysearchService */ 76);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 77);
	var PersoncitysearchComponent = (function () {
	    function PersoncitysearchComponent(completerService, http, _configuration) {
	        this.completerService = completerService;
	        this.http = http;
	        this._configuration = _configuration;
	        this.onTermSelectedEvent = new core_1.EventEmitter();
	        this.disableAutocomplete = false;
	        this.dataService = new personcitysearchService_1.PersoncitysearchService(http, _configuration);
	    }
	    PersoncitysearchComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit SearchComponent");
	    };
	    PersoncitysearchComponent.prototype.onTermSelected = function (selected) {
	        console.log("onTermSelected");
	        console.log(selected);
	        this.onTermSelectedEvent.emit(selected.title);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], PersoncitysearchComponent.prototype, "onTermSelectedEvent", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PersoncitysearchComponent.prototype, "bindSelectedTerm", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PersoncitysearchComponent.prototype, "disableAutocomplete", void 0);
	    PersoncitysearchComponent = __decorate([
	        core_1.Component({
	            selector: 'personcitysearch',
	            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onTermSelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
	            styles: [String(__webpack_require__(/*! ./personcitysearch.component.scss */ 79))]
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
	    ], PersoncitysearchComponent);
	    return PersoncitysearchComponent;
	}());
	exports.PersoncitysearchComponent = PersoncitysearchComponent;


/***/ },
/* 76 */
/*!*********************************************************************!*\
  !*** ./angular2App/app/personcitysearch/personcitysearchService.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 4);
	var PersoncitysearchService = (function (_super) {
	    __extends(PersoncitysearchService, _super);
	    function PersoncitysearchService(http, _configuration) {
	        _super.call(this);
	        this.http = http;
	        this._configuration = _configuration;
	        this.actionUrl = _configuration.Server + 'api/personcity/autocomplete/';
	    }
	    PersoncitysearchService.prototype.search = function (term) {
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
	    PersoncitysearchService.prototype.cancel = function () {
	    };
	    return PersoncitysearchService;
	}(Subject_1.Subject));
	exports.PersoncitysearchService = PersoncitysearchService;


/***/ },
/* 77 */,
/* 78 */,
/* 79 */
/*!**************************************************************************!*\
  !*** ./angular2App/app/personcitysearch/personcitysearch.component.scss ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./personcitysearch.component.scss */ 80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personcitysearch.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personcitysearch.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/*!*********************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/personcitysearch/personcitysearch.component.scss ***!
  \*********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, ".completer-input {\n  width: 500px;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.completer-dropdown {\n  width: 480px !important; }\n", ""]);
	
	// exports


/***/ },
/* 81 */
/*!**************************************************************!*\
  !*** ./angular2App/app/homesearch/homesearch.component.html ***!
  \**************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <!--<p>Elasticsearch Index exists: {{IndexExists}}</p>--> \r\n\r\n    <personcitysearch (onTermSelectedEvent)=\"onTermSelectedEvent($event)\" [disableAutocomplete]=\"!IndexExists\">\r\n    </personcitysearch>\r\n    \r\n    <hr />\r\n    <br />\r\n\r\n    <div *ngFor=\"let personCity of PersonCityItems\">  \r\n        <b><span>{{personCity.name}} {{personCity.familyName}} </span></b> <a href=\"{{personCity.twitter}}\"><img src=\"assets/socialTwitter.png\" /></a>  <a href=\"{{personCity.github}}\"><img src=\"assets/github.png\" /></a><br />\r\n        <em style=\"font-size:large\"><a href=\"{{personCity.web}}\">{{personCity.web}}</a></em><br />  \r\n        <em><span>{{personCity.metadata}}</span></em><br />      \r\n        <span>{{personCity.info}}</span><br />\r\n        <br />\r\n        <br />\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ },
/* 82 */
/*!************************************************************************************!*\
  !*** ./angular2App/app/personcityautocomplete/personcityautocomplete.component.ts ***!
  \************************************************************************************/
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
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
	var personcityautocompleteService_1 = __webpack_require__(/*! ./personcityautocompleteService */ 83);
	var personCity_1 = __webpack_require__(/*! ../model/personCity */ 72);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 77);
	var PersoncityautocompleteComponent = (function () {
	    function PersoncityautocompleteComponent(completerService, http, _configuration) {
	        this.completerService = completerService;
	        this.http = http;
	        this._configuration = _configuration;
	        this.bindModelPersonCityChange = new core_1.EventEmitter();
	        this.disableAutocomplete = false;
	        this.dataService = new personcityautocompleteService_1.PersoncityautocompleteDataService(http, _configuration);
	    }
	    PersoncityautocompleteComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit PersoncityautocompleteComponent");
	    };
	    PersoncityautocompleteComponent.prototype.onPersonCitySelected = function (selected) {
	        console.log(selected);
	        this.bindModelPersonCityChange.emit(selected.originalObject);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], PersoncityautocompleteComponent.prototype, "bindModelPersonCityChange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', personCity_1.PersonCity)
	    ], PersoncityautocompleteComponent.prototype, "bindModelPersonCity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PersoncityautocompleteComponent.prototype, "disableAutocomplete", void 0);
	    PersoncityautocompleteComponent = __decorate([
	        core_1.Component({
	            selector: 'personcityautocomplete',
	            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
	            styles: [String(__webpack_require__(/*! ./personcityautocomplete.component.scss */ 84))]
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
	    ], PersoncityautocompleteComponent);
	    return PersoncityautocompleteComponent;
	}());
	exports.PersoncityautocompleteComponent = PersoncityautocompleteComponent;


/***/ },
/* 83 */
/*!*********************************************************************************!*\
  !*** ./angular2App/app/personcityautocomplete/personcityautocompleteService.ts ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 4);
	var PersoncityautocompleteDataService = (function (_super) {
	    __extends(PersoncityautocompleteDataService, _super);
	    function PersoncityautocompleteDataService(http, _configuration) {
	        _super.call(this);
	        this.http = http;
	        this._configuration = _configuration;
	        this.actionUrl = _configuration.Server + 'api/personcity/querystringsearch/';
	    }
	    PersoncityautocompleteDataService.prototype.search = function (term) {
	        var _this = this;
	        this.http.get(this.actionUrl + term)
	            .map(function (res) {
	            var data = res.json();
	            var matches = data.map(function (personcity) {
	                return {
	                    title: personcity.name,
	                    description: personcity.familyName + ", " + personcity.cityCountry,
	                    originalObject: personcity
	                };
	            });
	            _this.next(matches);
	        })
	            .subscribe();
	    };
	    PersoncityautocompleteDataService.prototype.cancel = function () {
	    };
	    return PersoncityautocompleteDataService;
	}(Subject_1.Subject));
	exports.PersoncityautocompleteDataService = PersoncityautocompleteDataService;


/***/ },
/* 84 */
/*!**************************************************************************************!*\
  !*** ./angular2App/app/personcityautocomplete/personcityautocomplete.component.scss ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./personcityautocomplete.component.scss */ 85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personcityautocomplete.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personcityautocomplete.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/*!*********************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/personcityautocomplete/personcityautocomplete.component.scss ***!
  \*********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, ".completer-input {\n  width: 600px;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.completer-dropdown {\n  width: 580px !important; }\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map