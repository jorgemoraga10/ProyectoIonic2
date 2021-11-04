(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["src_app_pages_editable_editable_module_ts"],{

/***/ 9566:
/*!***********************************************************!*\
  !*** ./src/app/pages/editable/editable-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditablePageRoutingModule": () => (/* binding */ EditablePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editable.page */ 2613);




const routes = [
    {
        path: '',
        component: _editable_page__WEBPACK_IMPORTED_MODULE_0__.EditablePage
    }
];
let EditablePageRoutingModule = class EditablePageRoutingModule {
};
EditablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditablePageRoutingModule);



/***/ }),

/***/ 9046:
/*!***************************************************!*\
  !*** ./src/app/pages/editable/editable.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditablePageModule": () => (/* binding */ EditablePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editable-routing.module */ 9566);
/* harmony import */ var _editable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable.page */ 2613);







let EditablePageModule = class EditablePageModule {
};
EditablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editable_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditablePageRoutingModule
        ],
        declarations: [_editable_page__WEBPACK_IMPORTED_MODULE_1__.EditablePage]
    })
], EditablePageModule);



/***/ }),

/***/ 2613:
/*!*************************************************!*\
  !*** ./src/app/pages/editable/editable.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditablePage": () => (/* binding */ EditablePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editable_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editable.page.html */ 9424);
/* harmony import */ var _editable_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable.page.scss */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_opinions_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/opinions-api.service */ 623);







let EditablePage = class EditablePage {
    constructor(api, activateroute, router, formBuilder) {
        this.api = api;
        this.activateroute = activateroute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.post = { userId: null, id: null, title: "", body: "" };
        this.isSubmitted = false;
        //aqui llamo a los datos que obtuve de la navegacion anterior
        this.activateroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.post = this.router.getCurrentNavigation().extras.state.post;
            }
            ;
        });
    }
    ngOnInit() {
        //Validaciones del form
        this.ionicForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
            opinion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
        });
    }
    updatePost(post) {
        console.log(post);
        this.api.updatePost(this.post.id, post).subscribe(() => {
            console.log('Actualizado Correctamente');
        }, (error) => console.log('Error' + error));
        this.router.navigate(['/opinions']);
    }
    limpiar() {
        this.post.title = "";
        this.post.body = "";
    }
    volver() {
        this.router.navigate(['/opinions']);
    }
    //Metodos para controlar validaciones del form
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm(post) {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Ingrese todos los valores requeridos!!');
            return false;
        }
        else {
            this.updatePost(post);
        }
    }
};
EditablePage.ctorParameters = () => [
    { type: src_app_services_opinions_api_service__WEBPACK_IMPORTED_MODULE_2__.OpinionsApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
EditablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editable',
        template: _raw_loader_editable_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editable_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditablePage);



/***/ }),

/***/ 4006:
/*!***************************************************!*\
  !*** ./src/app/pages/editable/editable.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  font-family: Georgia, Garamond;\n}\n\n.body {\n  background-color: gray;\n}\n\n.container {\n  padding-right: 45%;\n}\n\n.tla {\n  width: 200%;\n  white-space: auto;\n}\n\n.auto {\n  width: 500px;\n  padding-right: 100%;\n}\n\n.centrar {\n  width: 80%;\n  margin-left: 10%;\n  height: 34px;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBUUE7RUFDSSxVQUFBO0FBTEoiLCJmaWxlIjoiZWRpdGFibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAgR2VvcmdpYSxHYXJhbW9uZDtcbn1cblxuLmJvZHl7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NSU7XG59XG5cbi50bGF7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgd2hpdGUtc3BhY2U6IGF1dG87XG59ICAgIFxuXG4uYXV0b3tcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTAwJTtcbn0gICAgXG5cblxuLmNlbnRyYXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGhlaWdodDogMzRweDtcbn1cblxuXG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ 9424:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editable/editable.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"container\">\n      <div class=\"tla\">\n        <img src=\"assets/img/tla.PNG\" alt=\"\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <ion-card>\n\n    <ion-card-header>\n      <ion-title>Evalua</ion-title>\n    </ion-card-header>\n\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm(post)\" novalidate>\n\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-label position=\"floating\">Titulo</ion-label>\n        <ion-input formControlName=\"title\" type=\"text\"  [(ngModel)]=\"post.title\"></ion-input>\n      </ion-item>\n\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.required\">\n      Titulo es requerido.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.minlength\">\n      Debe Contener 3 caracteres minimo.\n      </span>\n\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-label position=\"floating\">Opinion</ion-label>\n        <ion-input formControlName=\"opinion\" type=\"text\"  [(ngModel)]=\"post.body\"></ion-input>\n      </ion-item>\n      \n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.opinion.errors?.required\">\n      Opinion es requerida.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.opinion.errors?.minlength\">\n      Debe contener 5 caracteres minimo\n      </span>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col><ion-button shape=\"round\" expand=\"block\" (click)=\"limpiar()\">Limpiar</ion-button></ion-col>\n          <ion-col><ion-button type=\"submit\" shape=\"round\" expand=\"block\">Guardar</ion-button></ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </form>\n\n    <ion-button  class=\"centrar\" expand=\"block\" (click)=\"volver()\">VOLVER</ion-button>\n    <br>\n\n  </ion-card>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editable_editable_module_ts.js.map