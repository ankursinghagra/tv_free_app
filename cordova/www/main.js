(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/alert/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/alert/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.alertMsg = function (status, msg) {
        $(".alert-msg")
            .removeClass('alert-success')
            .removeClass('alert-danger')
            .removeClass('alert-info')
            .addClass('alert-' + status)
            .html(msg)
            .fadeIn(300);
        setTimeout(function () {
            $(".alert-msg").fadeOut(300);
        }, 700);
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/base/base.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/base/base.service.ts ***!
  \************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
        this._api = 'https://www.sapricami.com/api/tv/';
    }
    BaseService.prototype.get_country_list = function () {
        return [
            { "code": "in", "name": "India" },
            { "code": "ca", "name": "Canada" },
            { "code": "int", "name": "International" },
            { "code": "uk", "name": "United Kingdom" },
            { "code": "us", "name": "United States" },
            { "code": "jp", "name": "Japan" },
            { "code": "cn", "name": "China" },
            { "code": "ru", "name": "Russia" },
            { "code": "sg", "name": "Singapore" },
            { "code": "sy", "name": "Syria" },
            { "code": "lk", "name": "Sri Lanka" },
            { "code": "ch", "name": "Switzerland" },
            { "code": "pk", "name": "Pakistan" }
        ];
    };
    BaseService.prototype.get_tv_list = function (country_code) {
        return this.http.get(this._api + country_code + '.json');
    };
    BaseService.prototype.set_video_to_play = function (video_array) {
        localStorage.setItem('video', JSON.stringify(video_array));
        return;
    };
    BaseService.prototype.get_video_to_play = function () {
        return JSON.parse(localStorage.getItem('video'));
    };
    BaseService.prototype.set_country = function (country_array) {
        localStorage.setItem('country', JSON.stringify(country_array));
        return;
    };
    BaseService.prototype.get_country = function () {
        return JSON.parse(localStorage.getItem('country'));
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/base/base.service */ "./src/app/_services/base/base.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/alert/alert.service */ "./src/app/_services/alert/alert.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _location, _ngzone, _alertService, _baseService) {
        var _this = this;
        this._router = _router;
        this._location = _location;
        this._ngzone = _ngzone;
        this._alertService = _alertService;
        this._baseService = _baseService;
        this.counter = 0;
        this.onBackKeyDown = function (e) {
            var path = _this._location.path();
            if ((path == '/login') || (path == '/login/signin') || (path == '/home')) {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this._alertService.alertMsg('info', 'Press again to exit');
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    _this.exitAppAndroidOnly();
                }
            }
            //this._ngzone.run( data => {
            _this._location.back();
            //navigator.app.backHistory();
            console.log("BACK BUTTON CALLED");
            //});
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        /*if (this._baseService.LoggedIn()) {
          this._router.navigate(['/flat-panel/']);
        }*/
        document.addEventListener('backbutton', this.onBackKeyDown, false);
    };
    AppComponent.prototype.exitAppAndroidOnly = function () {
        if (navigator.app) {
            navigator.app.exitApp();
        }
        else if (navigator.device) {
            navigator.device.exitApp();
        }
        else {
            window.close();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_base_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/base/base.service */ "./src/app/_services/base/base.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");












var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"]
    },
    {
        path: 'channels/:ID',
        component: _channels_channels_component__WEBPACK_IMPORTED_MODULE_9__["ChannelsComponent"]
    },
    {
        path: 'player',
        component: _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"]
    },
    {
        path: 'error_page',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]
    },
    {
        path: 'info',
        component: _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]
    },
    {
        path: "**", redirectTo: 'error_page'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_8__["CountriesComponent"],
                _channels_channels_component__WEBPACK_IMPORTED_MODULE_9__["ChannelsComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true,
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _services_base_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channels/channels.component.html":
/*!**************************************************!*\
  !*** ./src/app/channels/channels.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-dark\">\n  <div class=\"left-nav-area\">\n  \t<a (click)=\"this._location.back();\"><i class=\"fa fa-angle-left\"></i></a>\n  </div>\n  <div class=\"center-nav-area\">\n  \t<h4>SupTube</h4>\n  </div>\n  <div class=\"right-nav-area\">\n  \t<a routerLink=\"/info/\"><i class=\"fa fa-info-circle\"></i></a>\n\t</div>\n</nav>\n<br>\n<div class=\"container-fluid list_area\">\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<div *ngIf=\"loading\" class=\"text-center\">\n\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngFor=\"let channel of channels\" class=\"channel-link col-6\">\n\t\t\t<div (click)=\"this.view_video(channel)\" class=\"\">{{channel.name}}</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/channels/channels.component.scss":
/*!**************************************************!*\
  !*** ./src/app/channels/channels.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-js.vjs-default-skin {\n  width: 100%;\n  max-height: 360px; }\n\n.channel-link div:active,\n.channel-link div:focus {\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvRDpcXFByb2dyYW1GaWxlc1xcWEFNUFBcXGh0ZG9jc1xccHJvamVjdHNfanNcXDAwNl9mcmVlX3R2XFxhbmd1bGFyL3NyY1xcYXBwXFxjaGFubmVsc1xcY2hhbm5lbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBRWxCOztFQUdDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tanMudmpzLWRlZmF1bHQtc2tpbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtaGVpZ2h0OiAzNjBweDtcclxufVxyXG4uY2hhbm5lbC1saW5rIGRpdjphY3RpdmUsXHJcbi5jaGFubmVsLWxpbmsgZGl2OmZvY3VzLFxyXG57XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/channels/channels.component.ts":
/*!************************************************!*\
  !*** ./src/app/channels/channels.component.ts ***!
  \************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/base/base.service */ "./src/app/_services/base/base.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ChannelsComponent = /** @class */ (function () {
    function ChannelsComponent(_baseService, route, _router, _location) {
        this._baseService = _baseService;
        this.route = route;
        this._router = _router;
        this._location = _location;
        this.channels = [];
        this.url = '';
        this.loading = false;
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            // do something with the query params
        });
        this.route.params.subscribe(function (routeParams) {
            _this.loading = true;
            _this._baseService.get_tv_list(routeParams.ID)
                .subscribe(function (res) {
                _this.loading = false;
                console.log(res);
                _this.channels = res;
            }, function (err) {
                _this.loading = false;
            });
        });
    };
    ChannelsComponent.prototype.view_video = function (arr) {
        this._baseService.set_video_to_play(arr);
        console.log(this._baseService.get_video_to_play());
        this._router.navigate(['/player/']);
    };
    ChannelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-channels',
            template: __webpack_require__(/*! ./channels.component.html */ "./src/app/channels/channels.component.html"),
            styles: [__webpack_require__(/*! ./channels.component.scss */ "./src/app/channels/channels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ChannelsComponent);
    return ChannelsComponent;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-dark\">\n  <div class=\"left-nav-area\">\n  </div>\n  <div class=\"center-nav-area\">\n  \t<h4>SupTube</h4>\n  </div>\n  <div class=\"right-nav-area\">\n  \t<a routerLink=\"/info/\"><i class=\"fa fa-info-circle\"></i></a>\n\t</div>\n</nav>\n<br>\n<div class=\"container-fluid\">\n\t<div *ngIf=\"countries?.length == 0\">\n\t\tLoading .. \n\t</div>\n\t<div class=\"row\" *ngIf=\"countries?.length > 0\">\n\t\t<div *ngFor=\"let country of countries\" class=\"country-link col-6\">\n\t\t\t<a routerLink=\"/channels/{{country.code}}\" (click)=\"this._baseService.set_country(country)\" class=\" btn btn-info btn-block\">{{country.name}}</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/countries/countries.component.scss":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".country-link {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL0Q6XFxQcm9ncmFtRmlsZXNcXFhBTVBQXFxodGRvY3NcXHByb2plY3RzX2pzXFwwMDZfZnJlZV90dlxcYW5ndWxhci9zcmNcXGFwcFxcY291bnRyaWVzXFxjb3VudHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRyeS1saW5re1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/base/base.service */ "./src/app/_services/base/base.service.ts");



var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(_baseService) {
        this._baseService = _baseService;
        this.countries = [];
    }
    CountriesComponent.prototype.ngOnInit = function () {
        this.countries = this._baseService.get_country_list();
        if (window['cordova']) {
            window.plugins.insomnia.allowSleepAgain();
        }
    };
    CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.scss */ "./src/app/countries/countries.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center text-center\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\t\t\t\t\n\t\t\t\t<h4>Page Not Found</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-12\">\t\t\t\t\n\t\t\t\t<a class=\"btn btn-block btn-primary\" routerLink=\"/home/\">Back To Home</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-dark\">\n  <div class=\"left-nav-area\">\n  \t<a (click)=\"this._location.back();\"><i class=\"fa fa-angle-left\"></i></a>\n  </div>\n  <div class=\"center-nav-area\">\n  \t<h4>SupTube</h4>\n  </div>\n  <div class=\"right-nav-area\">\n\t</div>\n</nav>\n<br>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<h3 class=\"text-center\">About</h3>\n\t\t\t<p>Built and distributed with <i class=\"fa fa-heart\"></i> by <a href=\"https://www.sapricami.com/\" target=\"_blank\">Sapricami.com</a></p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.scss":
/*!******************************************!*\
  !*** ./src/app/info/info.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(_location) {
        this._location = _location;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-dark\">\n  <div class=\"left-nav-area\">\n  \t<a (click)=\"this._location.back();\"><i class=\"fa fa-angle-left\"></i></a>\n  </div>\n  <div class=\"center-nav-area\">\n  \t<h4>SupTube</h4>\n  </div>\n  <div class=\"right-nav-area\">\n  \t<a routerLink=\"/info/\"><i class=\"fa fa-info-circle\"></i></a>\n\t</div>\n</nav>\n<div class=\"container-fluid video_area\">\n\t<div class=\"row\">\n\t\t<video id='sxmvideo' class=\"video-js vjs-default-skin\" controls>\n\t\t  \t<source\n\t\t     src=\"{{this.video_array.m3u8}}\"\n\t\t     type=\"application/x-mpegURL\">\n\t\t</video>\n\t</div>\n</div>\n<br><br>\n<div class=\"container-fluid video_info_area\">\n\t<div class=\"row\">\n\t\t<div class=\"col-4\">\n\t\t\t<img src=\"{{this.video_array.logo}}\" class=\"img-fluid\" *ngIf=\"this.video_array.logo?.length > 0\" style=\"max-width: 200px;\">\n\t\t</div>\n\t\t<div class=\"col-8 text-right\">\n\t\t\t<h4 *ngIf=\"this.video_array.name?.length > 0\">{{this.video_array.name}}</h4> \n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-js.vjs-default-skin {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0Q6XFxQcm9ncmFtRmlsZXNcXFhBTVBQXFxodGRvY3NcXHByb2plY3RzX2pzXFwwMDZfZnJlZV90dlxcYW5ndWxhci9zcmNcXGFwcFxccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWpzLnZqcy1kZWZhdWx0LXNraW57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/base/base.service */ "./src/app/_services/base/base.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PlayerComponent = /** @class */ (function () {
    // constructor initializes our declared vars
    function PlayerComponent(elementRef, _baseService, route, _router, _location) {
        this._baseService = _baseService;
        this.route = route;
        this._router = _router;
        this._location = _location;
        this.seekbarTracker = {
            duration: 0,
            time: 0,
            seekPercent: 0,
            hasDVR: false,
        };
        // this.url = false;
        this.player = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.video_array = this._baseService.get_video_to_play();
        this.country = this._baseService.get_country();
    };
    // use ngAfterViewInit to make sure we initialize the videojs element
    // after the component template itself has been rendered
    PlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.video_array = this._baseService.get_video_to_play();
        console.log(this.video_array);
        /*if (!Array.isArray(video_arr)) {
          this._router.navigate(['error_page']);
        }*/
        if (window['cordova']) {
            window.plugins.insomnia.keepAwake();
        }
        var self = this;
        var options = {
            html5: {
                hls: {
                    enableLowInitialPlaylist: true
                }
            },
            flash: {
                hls: {
                    enableLowInitialPlaylist: true
                }
            },
            inactivityTimeout: 0,
            controls: true,
            autoplay: true,
            preload: "auto",
        };
        self.player = videojs(document.getElementById('sxmvideo'), options);
        var qLevels = [];
        self.player.qualityLevels().on('addqualitylevel', function (event) {
            var quality = event.qualityLevel;
            console.log(quality);
            if (quality.height != undefined && $.inArray(quality.height, qLevels) === -1) {
                quality.enabled = true;
                qLevels.push(quality.height);
                if (!$('.quality_ul').length) {
                    var h = '<div class="quality_setting vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">' +
                        '<button class="vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-live="polite" aria-disabled="false" title="Quality" aria-haspopup="true" aria-expanded="false">' +
                        '<span aria-hidden="true" class="vjs-icon-cog"></span>' +
                        '<span class="vjs-control-text">Quality</span></button>' +
                        '<div class="vjs-menu"><ul class="quality_ul vjs-menu-content" role="menu"></ul></div></div>';
                    $(".vjs-fullscreen-control").before(h);
                }
                else {
                    $('.quality_ul').empty();
                }
                qLevels.sort();
                qLevels.reverse();
                var j = 0;
                $.each(qLevels, function (i, val) {
                    $(".quality_ul").append('<li class="vjs-menu-item" tabindex="' + i + '" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false" bitrate="' + val +
                        '"><span class="vjs-menu-item-text">' + val + 'p</span></li>');
                    j = i;
                });
                $(".quality_ul").append('<li class="vjs-menu-item vjs-selected" tabindex="' + (j + 1) + '" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true" bitrate="auto">' +
                    '<span class="vjs-menu-item-text">Auto</span></li>');
            }
        });
        $("body").on("click", ".quality_ul li", function () {
            $(".quality_ul li").removeClass("vjs-selected");
            $(".quality_ul li").prop("aria-checked", "false");
            $(this).addClass("vjs-selected");
            $(this).prop("aria-checked", "true");
            var val = $(this).attr("bitrate");
            console.log(val);
            var qualityLevels = self.player.qualityLevels();
            for (var i = 0; i < qualityLevels.length; i++) {
                qualityLevels[i].enabled = (val == "auto" || (val != "auto" && qualityLevels[i].height == val));
            }
        });
        self.player.muted(false);
        self.player.responsive(true);
        //this.player.play();
        self.player.on('timeupdate', function () {
            var hasDVR = false;
            var duration = Math.floor(_this.getDuration(_this.player) * 1000);
            var time;
            var seekPercent;
            // this.player.controls(true);
            //console.log(this.player.currentTime(), this.getDuration(this.player));
            // if(duration) {
            //   this.seekbarTracker.duration = duration;
            //   // constrain time
            //   time = Math.floor(Math.max(0, Math.min(duration, this.player.currentTime() * 1000)));
            //   this.seekbarTracker.time = time; 
            //   seekPercent = time / duration;
            //   if(seekPercent !== this.seekbarTracker.seekPercent) {
            //     this.onSeekPercentChange(this.player, seekPercent, duration);
            //   }
            //   this.seekbarTracker.seekPercent = seekPercent;
            //   // duration is not Infinity, so if isLive() returns true, then player should have DVR.
            //   hasDVR = this.isLive();
            // }
            // this.seekbarTracker.hasDVR = hasDVR;
        });
    };
    PlayerComponent.prototype.getDuration = function (player) {
        var seekable = player.seekable();
        return seekable && seekable.length ? seekable.end(0) - seekable.start(0) : 0;
    };
    PlayerComponent.prototype.onSeekPercentChange = function (player, seekPercent, duration) {
        var seekable = player.seekable();
        if (seekable && seekable.length) {
            // constrain currentTime
            player.currentTime(Math.max(0, Math.min(seekable.end(0), seekable.start(0) + (seekPercent * duration))));
        }
    };
    PlayerComponent.prototype.isLive = function () {
        if (!isFinite(this.player.duration())) {
            return true;
        }
        var acceptableDelay = 30;
        var seekable = this.player.seekable();
        return seekable && seekable.length && seekable.end(0) - this.player.currentTime() < acceptableDelay;
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        // this.player.dispose();
    };
    PlayerComponent.prototype.seek = function (n) {
        this.player.currentTime(this.seekTime || 1266);
    };
    PlayerComponent.prototype.play = function (n) {
        if (this.player.paused()) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    PlayerComponent.prototype.create = function () {
        this.player.src({
            src: ' https://oocache-live-delivery-ooyala.akamaized.net/out/u/d8npqvovi8we5/110326/N5cmNvZjE6U3nnGeGa0yVC66Gaw-NWxS/en/fda8ba2dd9554ad2b668277730469fea.m3u8'
        });
        this.player.play();
        // this.player.controlBar.currentTimeDisplay();  
    };
    PlayerComponent.prototype.destroy = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
function bootstrap() {
    $('.first-page-loading').hide();
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
}
;
if (window['cordova']) {
    console.log('This is Angular Running on Cordova');
    document.addEventListener('deviceready', function () { return bootstrap(); });
}
else {
    console.log('This is Angular on Web');
    bootstrap();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ProgramFiles\XAMPP\htdocs\projects_js\006_free_tv\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map