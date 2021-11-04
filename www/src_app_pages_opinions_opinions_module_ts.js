(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_opinions_opinions_module_ts"],{

/***/ 1825:
/*!***********************************************************!*\
  !*** ./src/app/pages/opinions/opinions-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpinionsPageRoutingModule": () => (/* binding */ OpinionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/prueba.guard */ 7118);
/* harmony import */ var _opinions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opinions.page */ 2597);





const routes = [
    {
        path: '',
        component: _opinions_page__WEBPACK_IMPORTED_MODULE_1__.OpinionsPage,
        canActivate: [src_app_guards_prueba_guard__WEBPACK_IMPORTED_MODULE_0__.PruebaGuard],
    }
];
let OpinionsPageRoutingModule = class OpinionsPageRoutingModule {
};
OpinionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], OpinionsPageRoutingModule);



/***/ }),

/***/ 8467:
/*!***************************************************!*\
  !*** ./src/app/pages/opinions/opinions.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpinionsPageModule": () => (/* binding */ OpinionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _opinions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opinions-routing.module */ 1825);
/* harmony import */ var _opinions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opinions.page */ 2597);







let OpinionsPageModule = class OpinionsPageModule {
};
OpinionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _opinions_routing_module__WEBPACK_IMPORTED_MODULE_0__.OpinionsPageRoutingModule
        ],
        declarations: [_opinions_page__WEBPACK_IMPORTED_MODULE_1__.OpinionsPage]
    })
], OpinionsPageModule);



/***/ }),

/***/ 2597:
/*!*************************************************!*\
  !*** ./src/app/pages/opinions/opinions.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpinionsPage": () => (/* binding */ OpinionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_opinions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./opinions.page.html */ 8573);
/* harmony import */ var _opinions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opinions.page.scss */ 7234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_opinions_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/opinions-api.service */ 623);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-data.service */ 5944);








let OpinionsPage = class OpinionsPage {
    constructor(api, router, userData, formBuilder) {
        this.api = api;
        this.router = router;
        this.userData = userData;
        this.formBuilder = formBuilder;
        this.post = { userId: null, id: null, title: "", body: "" };
        this.isSubmitted = false;
    }
    ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            opinion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getPosts();
        });
    }
    getPosts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.userData.loadUser(); //cargo los users del storage
            const { userId, nombre } = users.filter(u => u.active === true)[0]; //busco al que este activo
            this.user = nombre;
            this.api.getPostbyUserId(userId).subscribe(data => {
                this.posts = data;
                this.posts.reverse();
            });
        });
    }
    getPost(id) {
        this.api.getPost(id).subscribe(data => this.post = data);
    }
    guardarPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.userData.loadUser(); //cargo los users del storage
            const { userId, nombre } = users.filter(u => u.active === true)[0]; //busco al que este activo
            this.user = nombre;
            this.post.userId = userId;
            this.api.createPost(this.post).subscribe(() => {
                console.log('Creado Correctamente');
                this.getPosts();
                this.limpiar();
            }, (error) => console.log('Error' + error));
        });
    }
    deletePost(id) {
        this.api.deletePost(id).subscribe(() => {
            console.log('Post ' + id + ' Borrado Correctamente');
            this.getPosts();
        }, (error) => console.log('Error' + error));
    }
    updatePost(post) {
        let nav = {
            state: { post: post }
        };
        this.router.navigate(['/editable'], nav);
    }
    limpiar() {
        this.post.title = "";
        this.post.body = "";
    }
    volver() {
        this.router.navigate(['/ruta']);
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
            this.guardarPost();
        }
    }
};
OpinionsPage.ctorParameters = () => [
    { type: src_app_services_opinions_api_service__WEBPACK_IMPORTED_MODULE_2__.OpinionsApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
OpinionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-opinions',
        template: _raw_loader_opinions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_opinions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OpinionsPage);

;


/***/ }),

/***/ 7234:
/*!***************************************************!*\
  !*** ./src/app/pages/opinions/opinions.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: Georgia, Garamond;\n}\n\n.body {\n  background-color: gray;\n}\n\n.container {\n  padding-right: 45%;\n}\n\n.tla {\n  width: 200%;\n  white-space: auto;\n}\n\n.auto {\n  width: 500px;\n  padding-right: 100%;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n  height: 34px;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9waW5pb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDhCQUFBO0FBRko7O0FBS0E7RUFDSSxzQkFBQTtBQUZKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7O0FBV0E7RUFDSSxVQUFBO0FBUkoiLCJmaWxlIjoib3BpbmlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6ICBHZW9yZ2lhLEdhcmFtb25kO1xufVxuXG4uYm9keXsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1JTtcbn1cblxuLnRsYXtcbiAgICB3aWR0aDogMjAwJTtcbiAgICB3aGl0ZS1zcGFjZTogYXV0bztcbn0gICAgXG5cbi5hdXRve1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDAlO1xufSAgICBcblxuXG5cbi5jZW50cmFye1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG59XG5cblxuXG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ 8573:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/opinions/opinions.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card>\n\n    <ion-card-header>\n      <ion-title>Evalua</ion-title>\n    </ion-card-header>\n\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-label position=\"floating\">Titulo</ion-label>\n        <ion-input formControlName=\"title\" type=\"text\"  [(ngModel)]=\"post.title\"></ion-input>\n      </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.required\">\n      Titulo es requerido.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.minlength\">\n      Debe Contener 3 caracteres minimo.\n      </span>\n\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-label position=\"floating\">Opinion</ion-label>\n        <ion-input formControlName=\"opinion\" type=\"text\"  [(ngModel)]=\"post.body\"></ion-input>\n      </ion-item>\n      \n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.opinion.errors?.required\">\n      Opinion es requerida.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.opinion.errors?.minlength\">\n      Debe contener 5 caracteres minimo\n      </span>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col><ion-button shape=\"round\" expand=\"block\" (click)=\"limpiar()\">Limpiar</ion-button></ion-col>\n          <ion-col><ion-button type=\"submit\" shape=\"round\" expand=\"block\">Guardar</ion-button></ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </form>\n\n    <ion-button  class=\"centrar\" expand=\"block\" (click)=\"volver()\">VOLVER</ion-button>\n    <br>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-list-header>     \n      <ion-title>Opiniones</ion-title>\n    </ion-list-header>  \n\n    <ion-list>  \n      <ion-item *ngFor=\"let post of posts\">\n\n        <ion-label ><h4>{{post.title}}</h4><p>{{post.body}}</p></ion-label>\n\n        <ion-button (click)=\"updatePost(post)\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-button (click)=\"deletePost(post.id)\">\n          <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n        </ion-button>\n \n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_opinions_opinions_module_ts.js.map