(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_nosotros_nosotros_module_ts"],{

/***/ 7098:
/*!***********************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPageRoutingModule": () => (/* binding */ NosotrosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/prueba.guard */ 7118);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page */ 179);





const routes = [
    {
        path: '',
        component: _nosotros_page__WEBPACK_IMPORTED_MODULE_1__.NosotrosPage,
        canActivate: [src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__.PruebaGuard],
    }
];
let NosotrosPageRoutingModule = class NosotrosPageRoutingModule {
};
NosotrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], NosotrosPageRoutingModule);



/***/ }),

/***/ 2761:
/*!***************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPageModule": () => (/* binding */ NosotrosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros-routing.module */ 7098);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page */ 179);







let NosotrosPageModule = class NosotrosPageModule {
};
NosotrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.NosotrosPageRoutingModule
        ],
        declarations: [_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.NosotrosPage]
    })
], NosotrosPageModule);



/***/ }),

/***/ 179:
/*!*************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPage": () => (/* binding */ NosotrosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nosotros.page.html */ 9488);
/* harmony import */ var _nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page.scss */ 2939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let NosotrosPage = class NosotrosPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    siguiente() {
        this.router.navigate(['/home/soporte']);
    }
};
NosotrosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NosotrosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nosotros',
        template: _raw_loader_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NosotrosPage);



/***/ }),

/***/ 2939:
/*!***************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icono {\n  margin-right: 20px;\n  margin-bottom: 5px;\n}\n\nh4 {\n  color: black;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vc290cm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6Im5vc290cm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaWNvbm97XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4uY2VudHJhcntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59Il19 */");

/***/ }),

/***/ 9488:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>SOBRE NOSOTROS</ion-label>\n      <ion-icon  class=\"icono\" name=\"thumbs-up-outline\"></ion-icon>\n    </ion-item>\n    <br>\n    <ion-card-content>\n      <h4>\n        TeLlevoAPP es una aplicación destinada a los estudiantes de Duoc UC, los cuales atraves del sistema\n        podran acceder a los servicios  de transporte ofrecidos por otros estudiantes.\n      </h4>\n    </ion-card-content>\n  </ion-card>\n    <ion-button  class=\"centrar\" expand=\"block\" (click)=\"siguiente()\">VOLVER</ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nosotros_nosotros_module_ts.js.map