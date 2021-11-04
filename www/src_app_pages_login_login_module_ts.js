(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);








let LoginPage = class LoginPage {
    constructor(router, formBuilder, loadingCtrl, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
        });
    }
    //Funcion que direciona al home y almacena  el nombre y password
    siguiente() {
        this.router.navigate(['/home']);
    }
    ;
    //Funcion que direciona al restablecer
    restablecer() {
        this.router.navigate(['/restablecer']);
    }
    //Funcion que direciona al restablecer
    registro() {
        this.router.navigate(['/registro']);
    }
    //Metodos para controlar validaciones del form
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                console.log('Ingrese todos los valores requeridos!!');
                return false;
            }
            else {
                yield this.verificar(this.user, this.pass);
                this.siguiente();
            }
        });
    }
    //Autentico el usuario entregado, y activo su cuenta
    verificar(user, contra) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const existe = this.userService.existe(user, contra);
            if (existe) {
                console.log(' el usuario si existe :)');
                yield this.userService.userActivo(user); //Este metodo activa el usuario 
            }
            else {
                console.log('el usuario no existe :(');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: Georgia, Garamond;\n}\n\n.body {\n  background-color: gray;\n}\n\n.container {\n  padding-right: 45%;\n}\n\n.tla {\n  width: 200%;\n  white-space: auto;\n}\n\n.auto {\n  width: 500px;\n  padding-right: 100%;\n}\n\n.rest:hover {\n  color: red;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQUpKOztBQVNBO0VBQ0ksVUFBQTtBQU5KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4qIHtcbiAgICBmb250LWZhbWlseTogIEdlb3JnaWEsR2FyYW1vbmQ7XG59XG5cbi5ib2R5eyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZy1yaWdodDogNDUlO1xufVxuXG4udGxhe1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBhdXRvO1xufSAgICBcblxuLmF1dG97XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMCU7XG59ICAgIFxuXG5cblxuLnJlc3Q6aG92ZXJ7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufSAgICBcblxuXG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"body\">\n\n  \n  <ion-item>\n    <div clas=\"auto\">\n      <img src=\"assets/img/auto1.PNG\"/>\n    </div>\n  </ion-item>\n\n\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input formControlName=\"user\" type=\"text\"  [(ngModel)]=\"user\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.required\">\n    Usuario es requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.minlength\">\n    Debe Contener 3 caracteres minimo.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"  [(ngModel)]=\"pass\"></ion-input>\n    </ion-item>\n    \n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n    Contraseña es requerida.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n    Debe contener 5 caracteres minimo\n    </span>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\">Ingresar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n\n\n\n  <div class=\"ion-text-center\">\n    <ion-router-link class=\"rest\" (click)=\"registro()\">Registrate!</ion-router-link >\n  </div>\n  \n  <div class=\"ion-text-center\">\n    <ion-router-link class=\"rest\" (click)=\"restablecer()\">Restablecer Contraseña</ion-router-link >\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map