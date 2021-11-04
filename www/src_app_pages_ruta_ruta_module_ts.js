(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_ruta_ruta_module_ts"],{

/***/ 8376:
/*!***************************************************!*\
  !*** ./src/app/pages/ruta/ruta-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RutaPageRoutingModule": () => (/* binding */ RutaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/prueba.guard */ 7118);
/* harmony import */ var _ruta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruta.page */ 1298);





const routes = [
    {
        path: '',
        canActivate: [src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__.PruebaGuard],
        component: _ruta_page__WEBPACK_IMPORTED_MODULE_1__.RutaPage,
    }
];
let RutaPageRoutingModule = class RutaPageRoutingModule {
};
RutaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], RutaPageRoutingModule);



/***/ }),

/***/ 3333:
/*!*******************************************!*\
  !*** ./src/app/pages/ruta/ruta.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RutaPageModule": () => (/* binding */ RutaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ruta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ruta-routing.module */ 8376);
/* harmony import */ var _ruta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruta.page */ 1298);







let RutaPageModule = class RutaPageModule {
};
RutaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ruta_routing_module__WEBPACK_IMPORTED_MODULE_0__.RutaPageRoutingModule
        ],
        declarations: [_ruta_page__WEBPACK_IMPORTED_MODULE_1__.RutaPage]
    })
], RutaPageModule);



/***/ }),

/***/ 1298:
/*!*****************************************!*\
  !*** ./src/app/pages/ruta/ruta.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RutaPage": () => (/* binding */ RutaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ruta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ruta.page.html */ 5822);
/* harmony import */ var _ruta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruta.page.scss */ 2258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let RutaPage = class RutaPage {
    constructor(activateroute, router) {
        this.activateroute = activateroute;
        this.router = router;
        //aqui llamo a los datos que obtuve de la navegacion anterior
        this.activateroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.ori = this.router.getCurrentNavigation().extras.state.ori;
                this.dest = this.router.getCurrentNavigation().extras.state.dest;
            }
            ;
        });
    }
    ngOnInit() { }
    volver() {
        this.router.navigate(['/home/viaje']);
    }
    opina() {
        this.router.navigate(['/opinions']);
    }
};
RutaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RutaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ruta',
        template: _raw_loader_ruta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ruta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RutaPage);



/***/ }),

/***/ 2258:
/*!*******************************************!*\
  !*** ./src/app/pages/ruta/ruta.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h4 {\n  margin-top: 13px;\n}\n\n* {\n  font-family: Georgia, Garamond;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1dGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFLQTtFQUNJLDhCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFGSiIsImZpbGUiOiJydXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDQge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cblxuXG4qIHtcbiAgICBmb250LWZhbWlseTogIEdlb3JnaWEsR2FyYW1vbmQ7XG59XG5cbi5jZW50cmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ 5822:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ruta/ruta.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <img src=\"assets/img/Mapa2.jpg\">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name=\"pin\"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name=\"flag\" item-start large></ion-icon>\n      &nbsp; &nbsp;\n      <h4>Origen: {{ori}}</h4>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name=\"home\" item-start large ></ion-icon>\n      &nbsp; &nbsp;\n      <h4 >Destino: {{dest}}</h4>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"alarm\" item-start large ></ion-icon>\n      &nbsp; &nbsp;\n      <span item-start>18 min</span>\n      <span item-start>(2.6 mi)</span>\n    </ion-item>\n  </ion-card>\n  \n  <br>\n\n  <ion-button  class=\"centrar\" expand=\"block\" (click)=\"opina()\">OPINA!</ion-button>\n  <ion-button  class=\"centrar\" expand=\"block\" (click)=\"volver()\">VOLVER</ion-button>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ruta_ruta_module_ts.js.map