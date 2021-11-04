(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_restablecer_restablecer_module_ts"],{

/***/ 1315:
/*!*****************************************************************!*\
  !*** ./src/app/pages/restablecer/restablecer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestablecerPageRoutingModule": () => (/* binding */ RestablecerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _restablecer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restablecer.page */ 1573);




const routes = [
    {
        path: '',
        component: _restablecer_page__WEBPACK_IMPORTED_MODULE_0__.RestablecerPage,
    }
];
let RestablecerPageRoutingModule = class RestablecerPageRoutingModule {
};
RestablecerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RestablecerPageRoutingModule);



/***/ }),

/***/ 9737:
/*!*********************************************************!*\
  !*** ./src/app/pages/restablecer/restablecer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestablecerPageModule": () => (/* binding */ RestablecerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _restablecer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restablecer-routing.module */ 1315);
/* harmony import */ var _restablecer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restablecer.page */ 1573);







let RestablecerPageModule = class RestablecerPageModule {
};
RestablecerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _restablecer_routing_module__WEBPACK_IMPORTED_MODULE_0__.RestablecerPageRoutingModule
        ],
        declarations: [_restablecer_page__WEBPACK_IMPORTED_MODULE_1__.RestablecerPage]
    })
], RestablecerPageModule);



/***/ }),

/***/ 1573:
/*!*******************************************************!*\
  !*** ./src/app/pages/restablecer/restablecer.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestablecerPage": () => (/* binding */ RestablecerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_restablecer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./restablecer.page.html */ 9565);
/* harmony import */ var _restablecer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restablecer.page.scss */ 869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let RestablecerPage = class RestablecerPage {
    constructor(router, formBuilder, toastController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.isSubmitted = false;
    }
    ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
        });
    }
    presentToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Se mando un Email a su cuenta.',
                duration: 3000,
                position: "bottom"
            });
            toast.present();
        });
    }
    siguiente() {
        this.router.navigate(['/login']);
        this.presentToast1();
    }
    //Metodos para controlar validaciones del form
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Ingrese todos los valores requeridos!!');
            return false;
        }
        else {
            this.siguiente();
        }
    }
};
RestablecerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RestablecerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-restablecer',
        template: _raw_loader_restablecer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_restablecer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RestablecerPage);



/***/ }),

/***/ 869:
/*!*********************************************************!*\
  !*** ./src/app/pages/restablecer/restablecer.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".i_newpass {\n  width: 75%;\n  background-color: aquamarine;\n  margin-left: 30px;\n}\n\n* {\n  font-family: Georgia, Garamond;\n}\n\nh2 {\n  text-align: center;\n}\n\n.error {\n  color: red;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhYmxlY2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUE7RUFDSSw4QkFBQTtBQUhKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFTQTtFQUNJLFVBQUE7QUFOSjs7QUFVQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQVBKIiwiZmlsZSI6InJlc3RhYmxlY2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaV9uZXdwYXNzIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG5cbn1cblxuXG4qIHtcbiAgICBmb250LWZhbWlseTogIEdlb3JnaWEsR2FyYW1vbmQ7XG59XG5cblxuXG5oMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLmNlbnRyYXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ 9565:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restablecer/restablecer.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <h2>Restablecer contraseña</h2>\n  <br>\n\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Ingresa tu nombre de usuario</ion-label>\n      <ion-input formControlName=\"user\" type=\"text\" ></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.required\">\n    Usuario es requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.minlength\">\n    Debe Contener 3 caracteres minimo.\n    </span>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button  class=\"centrar\" type=\"submit\" color=\"success\" expand=\"block\">Recuperar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_restablecer_restablecer_module_ts.js.map