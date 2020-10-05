/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/colorBlack.js":
/*!**************************************!*\
  !*** ./src/js/modules/colorBlack.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function colorBlack() {
    const text = document.querySelector('.sidepanel__text'),
          divider = document.querySelector('.sidepanel__divider');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > (document.documentElement.clientHeight)/3) {
            text.classList.add('black');
            divider.classList.add('black');
        } else {
            text.classList.remove('black');
            divider.classList.remove('black');
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (colorBlack);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function forms() {
    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input'),
          textarea = document.querySelector('textarea'),
          modal = document.querySelector('.contacts__triggers'),
          replacement = document.querySelector('.contacts__policy'),
          over = document.querySelector('.overlay');

    const message = {
        loading: 'Загрузка данных...',
        success: 'Спасибо! Я получил ваше сообщение',
        failure: 'Произошла ошибка! Повторите отправку чуть позже.'
    };

    const postData = async (url, data) => {
        replacement.classList.add('hide');
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });
        return await result.text();
    }

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
        });
        textarea.value = '';
    }

    function showThanks() {
        setTimeout(() => {
            over.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 2000);
    }

    function hideThanks() {
        setTimeout(() => {
            over.classList.remove('active');
            document.body.style.overflow = '';
        }, 5000);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        modal.appendChild(statusMessage);

        let closeMessage = () => {setInterval(() => {
            replacement.classList.remove('hide');
            statusMessage.remove();
            }, 2000);
        };

        const formData = new FormData(form);

        postData('mailer/server.php', formData)
            .then(result => {
                console.log(result);
                statusMessage.textContent = message.success;
                showThanks();   
                hideThanks();     
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                closeMessage();
                clearInterval(closeMessage);
            });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/openMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/openMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function openMenu(trigerSelector, contentSelector, closeSelector, overlaySelector, linkSelector) {
    const triger = document.querySelector(trigerSelector),
          menu = document.querySelector(contentSelector),
          closeMenu = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector),
          closeLink = document.querySelectorAll(linkSelector),
          scroll = calcScroll();

    function close() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
    }

    triger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    });

    closeMenu.addEventListener('click', close);

    closeLink.forEach( item => {
        item.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            close();
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            close();
        }
    });

    //убираем прокрутку при открытии меню

    function calcScroll() {
        let div = document.createElement('div');

        div.style.cssText = 'width: 50px; height: 50px; overflow-y: scroll; visibility: hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (openMenu);

/***/ }),

/***/ "./src/js/modules/pageUp.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageUp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function pageUp() {
    const up = document.querySelector('.pageUp');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > window.innerHeight) {
            up.classList.add('active');
        } else {
            up.classList.remove('active');
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scroll() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            const blockID = item.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/skill.js":
/*!*********************************!*\
  !*** ./src/js/modules/skill.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const skill = () => {
    const counters = document.querySelectorAll('.skills__counter__item-interest'),
          lines = document.querySelectorAll('.skills__counter__item-body span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
};

/* harmony default export */ __webpack_exports__["default"] = (skill);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_openMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/openMenu */ "./src/js/modules/openMenu.js");
/* harmony import */ var _modules_colorBlack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/colorBlack */ "./src/js/modules/colorBlack.js");
/* harmony import */ var _modules_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/skill */ "./src/js/modules/skill.js");
/* harmony import */ var _modules_pageUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageUp */ "./src/js/modules/pageUp.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");







window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    Object(_modules_openMenu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu', '.menu__close', '.menu__overlay', 'nav .menu__link');
    Object(_modules_colorBlack__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_skill__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_pageUp__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map