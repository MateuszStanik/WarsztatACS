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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/layout/header.component */ "./src/app/shared/layout/header.component.ts");
/* harmony import */ var _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/layout/footer.component */ "./src/app/shared/layout/footer.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _clients_clientsDetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./clients/clientsDetails.component */ "./src/app/clients/clientsDetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_15__["CustomersComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_19__["ClientsComponent"],
                _clients_clientsDetails_component__WEBPACK_IMPORTED_MODULE_20__["ClientsDetailsComponent"]
            ],
            imports: [
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"] },
                    { path: 'clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_19__["ClientsComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
                    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_15__["CustomersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
                    { path: 'clientDetails/:id', component: _clients_clientsDetails_component__WEBPACK_IMPORTED_MODULE_20__["ClientsDetailsComponent"] }
                ]),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()
            ],
            providers: [angular2_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelper"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Klienci</h2>\r\n\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Dodaj klienta</button>\r\n<!--<a [routerLink]=\"['/customers', 2]\">Idz do klienta</a>-->\r\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"onCustomAction($event, detailsTemplate)\"></ng2-smart-table>\r\n\r\n<ng-template #template>\r\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"addClient(loginForm)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Nowy klient</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-10 col-form-label\">Klient firmowy</label>\r\n            <div class=\"col-sm-2\">\r\n              <input name=\"model\" value=\"1\" type=\"radio\" [(ngModel)]=\"model\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-10 col-form-label\">Klient indywidualny</label>\r\n            <div class=\"col-sm-2\">\r\n              <input name=\"model\" value=\"2\" type=\"radio\" [(ngModel)]=\"model\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Ulica</label>\r\n            <input name=\"Street\" id=\"Street\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Numer domu</label>\r\n            <input name=\"HouseNumber\" id=\"HouseNumber\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div> <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Telefon kontaktowy</label>\r\n            <input name=\"PhoneNumber\" id=\"PhoneNumber\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Kod pocztowy</label>\r\n            <input name=\"PostalCode\" id=\"PostalCode\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Mail</label>\r\n            <input name=\"Email\" id=\"Email\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Miasto</label>\r\n            <input name=\"City\" id=\"City\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Imie</label>\r\n            <input name=\"Name\" id=\"Name\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Nazwisko</label>\r\n            <input name=\"SureName\" id=\"SureName\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" [hidden]=\"model == 2\">\r\n          <div class=\"form-group\">\r\n            <label>NIP</label>\r\n            <input name=\"Nip\" id=\"Nip\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\" [hidden]=\"model == 2\">\r\n          <div class=\"form-group\">\r\n            <label>Regon</label>\r\n            <input name=\"Regon\" id=\"Regon\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" [hidden]=\"model == 2\">\r\n          <div class=\"form-group\">\r\n            <label>Nazwa firmy</label>\r\n            <input name=\"CompanyName\" id=\"CompanyName\" ngModel class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-primary\" type=\"submit\">Dodaj</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #detailsTemplate>\r\n  <form class=\"form-signin\" #detailsForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Klient</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Ulica</label>\r\n            <input name=\"Street\" id=\"Street\" [(ngModel)]=\"client.Street\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Numer domu</label>\r\n            <input name=\"HouseNumber\" id=\"HouseNumber\" [(ngModel)]=\"client.HouseNumber\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div> <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Telefon kontaktowy</label>\r\n            <input name=\"PhoneNumber\" id=\"PhoneNumber\" [(ngModel)]=\"client.PhoneNumber\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Kod pocztowy</label>\r\n            <input name=\"PostalCode\" id=\"PostalCode\" [(ngModel)]=\"client.PostalCode\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Mail</label>\r\n            <input name=\"Email\" id=\"Email\" [(ngModel)]=\"client.Email\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Miasto</label>\r\n            <input name=\"City\" id=\"City\" [(ngModel)]=\"client.City\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Imie</label>\r\n            <input name=\"Name\" id=\"Name\" [(ngModel)]=\"client.Name\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Nazwisko</label>\r\n            <input name=\"SureName\" id=\"SureName\" [(ngModel)]=\"client.SureName\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>NIP</label>\r\n            <input name=\"Nip\" id=\"Nip\" [(ngModel)]=\"client.Nip\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Regon</label>\r\n            <input name=\"Regon\" id=\"Regon\" [(ngModel)]=\"client.Regon\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label>Nazwa firmy</label>\r\n            <input name=\"CompanyName\" id=\"CompanyName\" [(ngModel)]=\"client.Name\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-primary\" type=\"submit\">Dodaj</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent, Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(router, http, modalService) {
        this.router = router;
        this.http = http;
        this.modalService = modalService;
        this.settings = {
            hideSubHeader: true,
            actions: {
                add: false,
                edit: false,
                custom: [{ name: 'ourCustomAction', title: 'Szczegóły ' }],
            },
            columns: {
                clinetId: {
                    title: 'ID'
                },
                name: {
                    title: 'Full Name'
                },
                surename: {
                    title: 'User Name'
                },
                email: {
                    title: 'Email'
                },
                city: {
                    title: 'Miasto'
                },
                postalCode: {
                    title: 'Kod pocztowy'
                },
                street: {
                    title: 'Ulica'
                },
                houseNumber: {
                    title: 'Numer domu'
                },
                phoneNumber: {
                    title: 'Tel.'
                },
            }
        };
        this.model1 = { options: '2' };
        this.model = '1';
    }
    //client = new Client('', '', '', '', '', '', '', '', '', '');
    ClientsComponent.prototype.onCustomAction = function (event, template) {
        console.log(event.data.clinetId);
        this.router.navigate(['/clientDetails', event.data.clinetId]);
        //this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        //this.getClientById(event.data.clinetId).then((data) => {
        //  console.log(data);
        //  this.client = new Client(data.street, data.houseNumber, data.phoneNumber, data.postalCode, data.email, data.city, data.name, data.surename, data.regon, data.nip);
        //  console.log("utworzono nowy obiekt");
        //});
    };
    ClientsComponent.prototype.getData = function () {
        var _this = this;
        var promis = new Promise(function (resolve, reject) {
            var apiURL = "http://acs.hostingasp.pl/api/client/GetCompanyCustomers";
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                console.log(res);
                resolve(res);
            });
            setTimeout(function () {
                resolve();
            }, 2000);
        });
        return promis;
    };
    ClientsComponent.prototype.getClientById = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("id", id);
        var promis = new Promise(function (resolve, reject) {
            var apiURL = "http://acs.hostingasp.pl/api/client/GetClient";
            _this.http.get(apiURL, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    "Content-Type": "application/json",
                }),
                params: params
            })
                .toPromise()
                .then(function (res) {
                console.log(res);
                resolve(res);
            });
            setTimeout(function () {
                resolve();
            }, 2000);
        });
        return promis;
    };
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this.getData().then(function (data) {
            _this.source.load(data);
        });
    };
    ClientsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        // model = new Client();
    };
    ClientsComponent.prototype.addClient = function (form) {
        var credentials = JSON.stringify(form.value);
        console.log(form.value.PhoneNumber);
        var urlIndividual = "http://acs.hostingasp.pl/api/client/AddIndividualCustomer";
        var urlCompany = "http://acs.hostingasp.pl/api/client/AddCompanyCustomer";
        var url = urlCompany;
        if (this.model == "2") {
            url = urlIndividual;
        }
        console.log(this.model);
        this.http.post(url, credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        }).subscribe(function (response) {
        }, function (err) {
        });
        this.ngOnInit();
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'demo-modal-service-static',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients/clients.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());

var Client = /** @class */ (function () {
    function Client(Street, HouseNumber, PhoneNumber, PostalCode, Email, City, Name, SureName, Regon, Nip) {
        this.Street = Street;
        this.HouseNumber = HouseNumber;
        this.PhoneNumber = PhoneNumber;
        this.PostalCode = PostalCode;
        this.Email = Email;
        this.City = City;
        this.Name = Name;
        this.SureName = SureName;
        this.Regon = Regon;
        this.Nip = Nip;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/clients/clientsDetails.component.html":
/*!*******************************************************!*\
  !*** ./src/app/clients/clientsDetails.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(newCar)\">Dodaj samochód klienta</button>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>Ulica</label>\r\n    <input name=\"Street\" id=\"Street\" [(ngModel)]=\"client.Street\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <label>Numer domu</label>\r\n    <input name=\"HouseNumber\" id=\"HouseNumber\" [(ngModel)]=\"client.HouseNumber\" class=\"form-control\">\r\n  </div>\r\n</div> <div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>Telefon kontaktowy</label>\r\n    <input name=\"PhoneNumber\" id=\"PhoneNumber\" [(ngModel)]=\"client.PhoneNumber\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <label>Kod pocztowy</label>\r\n    <input name=\"PostalCode\" id=\"PostalCode\" [(ngModel)]=\"client.PostalCode\" class=\"form-control\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>Mail</label>\r\n    <input name=\"Email\" id=\"Email\" [(ngModel)]=\"client.Email\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <label>Miasto</label>\r\n    <input name=\"City\" id=\"City\" [(ngModel)]=\"client.City\" class=\"form-control\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>Imie</label>\r\n    <input name=\"Name\" id=\"Name\" [(ngModel)]=\"client.Name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n\r\n    <label>Nazwisko</label>\r\n    <input name=\"SureName\" id=\"SureName\" [(ngModel)]=\"client.SureName\" class=\"form-control\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>NIP</label>\r\n    <input name=\"Nip\" id=\"Nip\" [(ngModel)]=\"client.Nip\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <label>Regon</label>\r\n    <input name=\"Regon\" id=\"Regon\" [(ngModel)]=\"client.Regon\" class=\"form-control\">\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <label>Nazwa firmy</label>\r\n    <input name=\"CompanyName\" id=\"CompanyName\" [(ngModel)]=\"client.Name\" class=\"form-control\">\r\n  </div>\r\n</div>\r\n\r\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n<ng-template #newCar>\r\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"addCar()\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Nowy klient</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <label>Marka</label>\r\n          <input name=\"Marka\" id=\"Marka\" [(ngModel)]=\"car.Brand\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Model</label>\r\n          <input name=\"Model\" id=\"Model\" [(ngModel)]=\"car.Model\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <label>Rodzaj silnika</label>\r\n          <input name=\"RodzajSilnika\" id=\"RodzajSilnika\" [(ngModel)]=\"car.EngineType\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Rocznik</label>\r\n          <input name=\"Rocznik\" id=\"Rocznik\" type='date' [(ngModel)]=\"car.Year\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <label>Pojemnosc</label>\r\n          <input name=\"Pojemnosc\" id=\"Pojemnosc\" [(ngModel)]=\"car.Capacity\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Moc</label>\r\n          <input name=\"Moc\" id=\"Moc\" [(ngModel)]=\"car.Power\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <label>Vin</label>\r\n          <input name=\"Vin\" id=\"Vin\" [(ngModel)]=\"car.CarIdentificator\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" (click)=\"modalRef.hide()\">Dodaj</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Close</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n<a routerLink=\"/\">Powrót</a>\r\n"

/***/ }),

/***/ "./src/app/clients/clientsDetails.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/clients/clientsDetails.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientsDetailsComponent, Client, Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDetailsComponent", function() { return ClientsDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsDetailsComponent = /** @class */ (function () {
    function ClientsDetailsComponent(route, http, modalService) {
        this.route = route;
        this.http = http;
        this.modalService = modalService;
        this.client = new Client('', '', '', '', '', '', '', '', '', '');
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            hideSubHeader: true,
            actions: {
                add: false,
                edit: false,
            },
            columns: {
                carId: {
                    title: 'ID'
                },
                brand: {
                    title: 'Marka'
                },
                model: {
                    title: 'Model'
                },
                capacity: {
                    title: 'Pojemność'
                },
                carIdentificator: {
                    title: 'VIN'
                },
                engineType: {
                    title: 'Rodzaj silnika'
                },
                power: {
                    title: 'Moc'
                },
                year: {
                    title: 'Rocznik'
                }
            }
        };
    }
    ClientsDetailsComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        console.log(event);
        var url = "http://acs.hostingasp.pl/api/car/DeleteCar";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("id", event.data.carId);
        console.log(event.data.carId);
        this.http.delete(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
            params: params
        }).subscribe(function (response) {
        }, function (err) {
        });
        this.getCars(this.id).then(function (data) {
            _this.source.load(data);
        });
        this.ngOnInit();
    };
    ClientsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
        });
        this.getClientById(this.id).then(function (data) {
            console.log(data);
            _this.client = new Client(data.street, data.houseNumber, data.phoneNumber, data.postalCode, data.email, data.city, data.name, data.surename, data.regon, data.nip);
            console.log("utworzono nowy obiekt");
        });
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this.getCars(this.id).then(function (data) {
            _this.source.load(data);
            console.log(data);
        });
    };
    ClientsDetailsComponent.prototype.getCars = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("id", id.toString());
        var promis = new Promise(function (resolve, reject) {
            var apiURL = "http://acs.hostingasp.pl/api/car/GetCarsForClient";
            _this.http.get(apiURL, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Content-Type": "application/json",
                }),
                params: params
            })
                .toPromise()
                .then(function (res) {
                console.log(res);
                resolve(res);
            });
            setTimeout(function () {
                resolve();
            }, 2000);
        });
        return promis;
    };
    ClientsDetailsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        this.car = new Car(0, '', '', new Date(), '', 0, 0, '');
    };
    ClientsDetailsComponent.prototype.addCar = function () {
        var _this = this;
        var url = "http://acs.hostingasp.pl/api/car/AddCarForClient";
        var body = {
            ClientId: this.id,
            Model: this.car.Model,
            Brand: this.car.Brand,
            Capacity: this.car.Capacity,
            Year: this.car.Year,
            Power: this.car.Power,
            EngineType: this.car.EngineType,
            CarIdentificator: this.car.CarIdentificator
        };
        this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        }).subscribe(function (response) {
        }, function (err) {
        });
        this.getCars(this.id).then(function (data) {
            _this.source.load(data);
        });
    };
    ClientsDetailsComponent.prototype.getClientById = function (id) {
        var _this = this;
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("id", id.toString());
        var promis = new Promise(function (resolve, reject) {
            var apiURL = "http://acs.hostingasp.pl/api/client/GetClient";
            _this.http.get(apiURL, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Content-Type": "application/json",
                }),
                params: params
            })
                .toPromise()
                .then(function (res) {
                console.log(res);
                resolve(res);
            });
            setTimeout(function () {
                resolve();
            }, 2000);
        });
        return promis;
    };
    ClientsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./clientsDetails.component.html */ "./src/app/clients/clientsDetails.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ClientsDetailsComponent);
    return ClientsDetailsComponent;
}());

var Client = /** @class */ (function () {
    function Client(Street, HouseNumber, PhoneNumber, PostalCode, Email, City, Name, SureName, Regon, Nip) {
        this.Street = Street;
        this.HouseNumber = HouseNumber;
        this.PhoneNumber = PhoneNumber;
        this.PostalCode = PostalCode;
        this.Email = Email;
        this.City = City;
        this.Name = Name;
        this.SureName = SureName;
        this.Regon = Regon;
        this.Nip = Nip;
    }
    return Client;
}());

var Car = /** @class */ (function () {
    function Car(ClientId, Brand, Model, Year, EngineType, Capacity, Power, CarIdentificator) {
        this.ClientId = ClientId;
        this.Brand = Brand;
        this.Model = Model;
        this.Year = Year;
        this.EngineType = EngineType;
        this.Capacity = Capacity;
        this.Power = Power;
        this.CarIdentificator = CarIdentificator;
    }
    return Car;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customers</h1>\r\n<ul>\r\n  <li *ngFor=\"let cust of customers\">{{ cust }}</li>\r\n</ul>\r\n\r\n<a routerLink=\"/\">Powrót</a>\r\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(http) {
        this.http = http;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem("jwt");
        this.http.get("http://acs.hostingasp.pl/api/customers", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + token,
                "assets-Type": "application/json"
            })
        }).subscribe(function (response) {
            _this.customers = response;
        }, function (err) {
            console.log(err);
        });
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            console.log(this.jwtHelper.decodeToken(token));
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angular2_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.myButt {\r\n  outline: none;\r\n  border: none;\r\n  padding: 0px;\r\n  display: block;\r\n  margin: 0px auto;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  position: relative;\r\n  border: 2px solid #07324f;\r\n  transition: all 0.5s ease;\r\n  -webkit-transition: all 0.5s ease;\r\n  -moz-transition: all 0.5s ease;\r\n  -o-transition: all 0.5s ease;\r\n  -ms-transition: all 0.5s ease;\r\n}\r\n\r\n.three {\r\n  color: #07324f;\r\n  border-color: transparent;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.three:before, .three:after {\r\n    width: 0;\r\n    height: 3px;\r\n    content: \" \";\r\n    background-color: #07324f;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    transition: all 0.3s ease;\r\n    -webkit-transition: all 0.3s ease;\r\n    -moz-transition: all 0.3s ease;\r\n    -o-transition: all 0.3s ease;\r\n    -ms-transition: all 0.3s ease;\r\n  }\r\n\r\n.three:after {\r\n    top: 100%;\r\n  }\r\n\r\n.three:hover {\r\n    letter-spacing: 8px;\r\n    color: #07324f;\r\n  }\r\n\r\n.three:hover:before, .three:after:hover {\r\n      width: 100%;\r\n      left: 0;\r\n    }\r\n\r\n.three:hover:after {\r\n      width: 100%;\r\n      left: 0;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <a class='myButt three btn' routerLink=\"/orders\">\r\n        <img src=\"../../assets/orders.png\" />\r\n        <p>\r\n          Zlecenia\r\n        </p>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <a class='myButt three btn' routerLink=\"/clients\">\r\n        <img src=\"../../assets/car.png\" />\r\n        <p>\r\n          Samochody\r\n        </p>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <a class='myButt three btn' routerLink=\"/clients\">\r\n        <img src=\"../../assets/owner.png\"/>\r\n        <p>\r\n          Klienci\r\n        </p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"form-signin-heading\">Login</h2>\r\n    <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Niewłaściwy login lub hasło.</div>\r\n    <br />\r\n    <label for=\"username\" class=\"sr-only\">Adres email</label>\r\n    <input type=\"email\" id=\"username\" name=\"username\" ngModel class=\"form-control\" placeholder=\"Nazwa użytkownika\" required autofocus>\r\n    <br />\r\n    <label for=\"password\" class=\"sr-only\">Hasło</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Hasło\" required>\r\n    <br />\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Zaloguj</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var credentials = JSON.stringify(form.value);
        console.log(credentials);
        this.http.post("http://acs.hostingasp.pl/api/auth/login", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        }).subscribe(function (response) {
            var token = response.token;
            localStorage.setItem("jwt", token);
            _this.invalidLogin = false;
            _this.router.navigate(["/"]);
        }, function (err) {
            _this.invalidLogin = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(http) {
        this.http = http;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem("jwt");
        this.http.get("http://acs.hostingasp.pl/api/client/get", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + token,
                "assets-Type": "application/json"
            })
        }).subscribe(function (response) {
            _this.customers = response;
        }, function (err) {
            console.log(err);
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"content has-text-centered\">\r\n    <strong>Warsztat</strong> by <a href=\"https://github.com/MateuszStanik/BoatsAdvertsApp\">Mateusz Stanik</a>\r\n    <p>&copy; 2018 - Warsztat</p>\r\n    <p>\r\n      <a class=\"icon\" href=\"https://github.com/MateuszStanik/BoatsAdvertsApp\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer.component.html"),
            styles: [
                ".footer {\n      background-color: #07324f;\n      color: #fff;\n      padding: 1.5rem;\n      -webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-size: cover;\n      margin-top: 50px;\n      /*position:relative;*/\n    }\n    .has-text-centered {\n      text-align: center;\n    }"
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"image-wrapper\"></div>-->\r\n<div class=\"row\">\r\n  <a class=\"navbar-brand\" style=\"text-align: center\" href=\"#\">Auto Centrum Serwis</a>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Warsztat</a>\r\n  <div class=\"navbar-expand mr-auto\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/orders\">Zlecenia</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"/clients\">Klienci</a>     \r\n    </div>\r\n  </div>\r\n  <div class=\"navbar-expand ml-auto navbar-nav\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" *ngIf=\"!isUserAuthenticated()\" routerLink=\"/login\"><i class=\"fa fa-user\"></i> Zaloguj</a>\r\n      <a class=\"nav-item nav-link\" *ngIf=\"isUserAuthenticated()\" routerLink=\"/\" (click)=\"logOut()\"><i class=\"fa fa-user\"></i> Wyloguj</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/layout/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    HeaderComponent.prototype.isUserAuthenticated = function () {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        else {
            return false;
        }
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.removeItem("jwt");
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header.component.html"),
            styles: ["\n    .image-wrapper{\n     background: url('./../assets/header1.jpg') no-repeat center center; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    height: 304px;\n    display:block;\n    /*padding-top:30px;*/\n  }\n  "]
        }),
        __metadata("design:paramtypes", [angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Visual studio - projects\WarsztatACS\AnularCore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map