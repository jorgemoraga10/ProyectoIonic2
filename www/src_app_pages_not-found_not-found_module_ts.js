(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_not-found_not-found_module_ts"],{

/***/ 8578:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 5691);




const routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
    }
];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {
};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFoundPageRoutingModule);



/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 8578);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 5691);







let NotFoundPageModule = class NotFoundPageModule {
};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule
        ],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage]
    })
], NotFoundPageModule);



/***/ }),

/***/ 5691:
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-found.page.html */ 7303);
/* harmony import */ var _not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data.service */ 5944);






let NotFoundPage = class NotFoundPage {
    constructor(router, userData) {
        this.router = router;
        this.userData = userData;
    }
    ngOnInit() { }
    //Redireciona a la pagina principal y la recarga para borrar los datos
    volver() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.userData.loadUser(); //cargo los users del storage
            const activo = users.filter(u => u.active === true); //busco al que este activo
            if (activo.length !== 0) {
                const { nombre } = activo[0];
                this.userData.userInactivo(nombre); //metodo para poner inactiva la cuenta
                this.router.navigate(['/login'])
                    .then(() => {
                    window.location.reload();
                });
            }
            else {
                this.router.navigate(['/login'])
                    .then(() => {
                    window.location.reload();
                });
            }
        });
    }
};
NotFoundPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService }
];
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-not-found',
        template: _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotFoundPage);



/***/ }),

/***/ 8522:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7303:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <h3>Lo sentimos, Esta Página No existe</h3>\n  <br><hr>\n  <ion-item>\n    <img #MyRef src=\"assets/img/error-404.jpg\"/>\n  </ion-item>\n  <br>\n  <ion-button expand=\"block\" (click)=\"volver()\">SALIR!</ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_not-found_module_ts.js.map