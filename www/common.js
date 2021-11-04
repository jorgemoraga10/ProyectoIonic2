(self["webpackChunkMyApp"] = self["webpackChunkMyApp"] || []).push([["common"],{

/***/ 9091:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 163);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2538);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 5359);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 3415:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 8004);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2538:
/*!******************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 9396:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 5362:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 4945:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retry": () => (/* binding */ retry)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 7393);

function retry(count = -1) {
    return (source) => source.lift(new RetryOperator(count, source));
}
class RetryOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    }
}
class RetrySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.error(err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ 7118:
/*!****************************************!*\
  !*** ./src/app/guards/prueba.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PruebaGuard": () => (/* binding */ PruebaGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user-data.service */ 5944);





let PruebaGuard = class PruebaGuard {
    constructor(router, userData, activateroute, toastController) {
        this.router = router;
        this.userData = userData;
        this.activateroute = activateroute;
        this.toastController = toastController;
        this.users = [];
        //aqui llamo a los datos que obtuve del formulario del login
        this.activateroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.user = this.router.getCurrentNavigation().extras.state.user;
                this.pass = this.router.getCurrentNavigation().extras.state.pass;
            }
            ;
        });
    }
    toastError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Credenciales Incorrectas',
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.userData.loadUser(); //Obtengo los usuarios del storage    
            const activos = users.filter(u => u.active === true); //Filtro al usuario activo
            if (activos.length != 0) {
                const { nombre, password } = activos[0]; //Capturo el nombre y password del usuario activo
                const valido = this.userData.existe(nombre, password); //Metodo que autentica
                if (!valido) {
                    this.toastError(); //Que me muestre el toast antes de dar reload
                    setTimeout(() => {
                        this.router.navigate(['/login'])
                            .then(() => {
                            window.location.reload();
                        });
                    }, 1500);
                    return false;
                }
            }
            else {
                this.toastError(); //Que me muestre el toast antes de dar reload
                setTimeout(() => {
                    this.router.navigate(['/login'])
                        .then(() => {
                        window.location.reload();
                    });
                }, 1500);
                return false;
            }
            return true;
        });
    }
};
PruebaGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
PruebaGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PruebaGuard);



/***/ }),

/***/ 623:
/*!**************************************************!*\
  !*** ./src/app/services/opinions-api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpinionsApiService": () => (/* binding */ OpinionsApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4945);




let OpinionsApiService = class OpinionsApiService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        // user: {
        //   userId: null,
        //   nombre: null,
        //   email: null
        // }
        // Se establece la base url del API a consumir 
        //apiURL = 'https://jsonplaceholder.typicode.com'; 
        this.apiURL = 'http://192.168.1.86:3000'; //Siempre Verificar la ip para que corra
    }
    //METODOS PARA EL POSTEO DE LA OPINION DEL VIAJE XD
    getPosts() {
        return this.http.get(this.apiURL + '/posts/')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getPostbyUserId(userId) {
        return this.http.get(this.apiURL + '/posts/?userId=' + userId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getPost(id) {
        return this.http.get(this.apiURL + '/posts/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    createPost(post) {
        return this.http.post(this.apiURL + '/posts', post, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    updatePost(id, post) {
        return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    deletePost(id) {
        return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
    }
};
OpinionsApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
OpinionsApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], OpinionsApiService);



/***/ }),

/***/ 2433:
/*!**********************************************!*\
  !*** ./src/app/services/user-api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserApiService": () => (/* binding */ UserApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4945);




let UserApiService = class UserApiService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        // Se establece la base url del API a consumir 
        //apiURL = 'https://jsonplaceholder.typicode.com'; 
        this.apiURL = 'http://192.168.1.86:3000'; //Siempre Verificar la ip para que corra
    }
    getUsuarios() {
        return this.http.get(this.apiURL + '/users')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getUsuario(userId) {
        return this.http.get(this.apiURL + '/users/' + userId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    createUser(user) {
        return this.http.post(this.apiURL + '/users', user, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    updateUser(id, user) {
        return this.http.put(this.apiURL + '/users/' + id, user, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    getActiveUser() {
        return this.http.get(this.apiURL + '/users/?active=true')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
    }
    ;
};
UserApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
UserApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserApiService);



/***/ }),

/***/ 5944:
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _user_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-api.service */ 2433);




let UserDataService = class UserDataService {
    constructor(storage, api) {
        this.storage = storage;
        this.api = api;
        this.data = null;
        this.estado = null;
        this.users = [];
        this.users2 = [];
        this.init();
        this.loadUser();
    }
    //Metodo para inicializar el storage
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            this.data = storage;
        });
    }
    //Metodo para cargar el usuario
    loadUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.storage.get('users');
            if (user) {
                this.users = user;
            }
            return this.users;
        });
    }
    //Metodo que valida que exista el usuario en el storage
    existe(userName, pass) {
        const existe = this.users.find(u => u.nombre === userName && u.password === pass);
        if (existe) {
            return true;
        }
        else {
            return false;
        }
    }
    //Me devuelve el id 
    getIdUser(userName) {
        const usuario = this.users.find(u => u.nombre === userName);
        return usuario.userId;
    }
    //Metodo para guardar el usuario en el storage y en la api
    saveUser(userName, pass, email, active) {
        const existe = this.users.find(u => u.nombre === userName || u.email === email);
        if (!existe) {
            const userId = this.users.length;
            this.users.push({ userId: userId + 1, nombre: userName, password: pass, email: email, active: active });
            this.data.set('users', this.users);
            this.guardarUser(userId + 1, userName, email, active);
            return true;
        }
        else {
            return false;
        }
    }
    //Metodo que hace post del user en la api
    guardarUser(userId, nombre, email, active) {
        this.api.createUser({ id: userId, nombre, email, active }).subscribe(() => {
            console.log('Usuario Creado Correctamente');
        }, (error) => console.log('Error' + error));
    }
    userActivo(userName) {
        const id = this.getIdUser(userName);
        let { nombre, email, password } = this.users.find(u => u.userId === id);
        this.users.splice(id - 1, 1, { userId: id, nombre: userName, password, email, active: true });
        this.data.set('users', this.users);
        const userActive = { id, nombre, email, active: true };
        this.api.updateUser(id, userActive).subscribe(() => {
            console.log('Cambio a usuario Activo');
        });
    }
    userInactivo(userName) {
        const id = this.getIdUser(userName);
        let { nombre, email, password } = this.users.find(u => u.userId === id);
        this.users.splice(id - 1, 1, { userId: id, nombre: userName, password, email, active: false });
        this.data.set('users', this.users);
        const userInactive = { id, nombre, email, active: false };
        this.api.updateUser(id, userInactive).subscribe(() => {
            console.log('Cambio a usuario Inactivo');
        });
    }
};
UserDataService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _user_api_service__WEBPACK_IMPORTED_MODULE_0__.UserApiService }
];
UserDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserDataService);



/***/ })

}]);
//# sourceMappingURL=common.js.map