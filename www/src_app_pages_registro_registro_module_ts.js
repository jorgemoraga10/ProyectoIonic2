(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 4720);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 1694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data.service */ 5944);








let RegistroPage = class RegistroPage {
    constructor(router, formBuilder, loadingCtrl, userData, toastController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.toastController = toastController;
        this.isSubmitted = false;
    }
    ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        });
    }
    toastRegistro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Usuario Creado Correctamente',
                duration: 3000,
                position: "bottom"
            });
            toast.present();
        });
    }
    toastExiste() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Usuario Ya existe, Pruebe otro ',
                duration: 3000,
                position: "bottom"
            });
            toast.present();
        });
    }
    siguiente() {
        this.router.navigate(['/login']);
        this.toastRegistro();
    }
    volver() {
        this.router.navigate(['/login'])
            .then(() => {
            window.location.reload();
        });
    }
    //Metodo que guarda los valores ingresados en el local storage
    guardar() {
        if (!this.userData.saveUser(this.user, this.pass, this.email, false)) {
            this.toastExiste();
        }
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
            this.guardar();
        }
    }
    ;
};
RegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 1694:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: Georgia, Garamond;\n}\n\n.body {\n  background-color: gray;\n}\n\n.container {\n  padding-right: 45%;\n}\n\n.tla {\n  width: 200%;\n  white-space: auto;\n}\n\n.error {\n  color: red;\n}\n\nh1 {\n  text-align: center;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0ksVUFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFPQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUpKIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4qIHtcbiAgICBmb250LWZhbWlseTogIEdlb3JnaWEsR2FyYW1vbmQ7XG59XG5cbi5ib2R5eyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1JTtcbn1cblxuXG4udGxhe1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBhdXRvO1xufVxuXG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5jZW50cmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ 4720:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <br>\n  <h1>Registro de Usuario</h1>\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Ingresa tu Usuario</ion-label>\n      <ion-input formControlName=\"user\" type=\"text\"  [(ngModel)]=\"user\"></ion-input>\n    </ion-item>\n\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.required\">\n    Usuario es requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user.errors?.minlength\">\n    Debe Contener 3 caracteres minimo.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Ingresa tu Contraseña</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"  [(ngModel)]=\"pass\"></ion-input>\n    </ion-item>\n    \n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n    Contraseña es requerida.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n    Debe contener 5 caracteres minimo\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Ingresa tu Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"  [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    \n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n    Email es requerido.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n    Ingrese un email Valido\n    </span>\n\n    <br>\n\n    <ion-row>\n      <ion-col>\n        <ion-button  class=\"centrar\" type=\"submit\" color=\"success\" expand=\"block\">Registrarse</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <br>\n\n  <ion-button  class=\"centrar\" expand=\"block\" (click)=\"volver()\">VOLVER</ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map