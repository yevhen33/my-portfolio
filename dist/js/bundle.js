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

/***/ "./src/js/modules/openMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/openMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function openMenu(trigerSelector, contentSelector, closeSelector, overlaySelector) {
    const triger = document.querySelector(trigerSelector),
          menu = document.querySelector(contentSelector),
          closeMenu = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector);

    function close() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }

    triger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', close);

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
}

/* harmony default export */ __webpack_exports__["default"] = (openMenu);

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



window.addEventListener('DOMContentLoaded', () => {

    Object(_modules_openMenu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu', '.menu__close', '.menu__overlay');
    Object(_modules_colorBlack__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map