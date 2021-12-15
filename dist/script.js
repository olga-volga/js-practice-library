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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*(() => {
	const $ = function(selector) {
		const elements = document.querySelectorAll(selector),
			  obj = {};

		obj.hide = () => {
			elements.forEach(item => {
				item.style.display = 'none';
			});
			return obj;
		};
		obj.show = () => {
			elements.forEach(item => {
				item.style.display = '';
			});
			return obj;
		};

		return obj;
	};

	window.$ = $;
})();*/
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // если selector не был передан, вернет пустой объект
  }

  if (selector.tagName) {
    // если есть свойство tagName, значит мы передаем не селектор, а html-элемент (узел),
    this[0] = selector; // то этот элемент записываем в объект

    this.length = 1; // длина объекта соответственно = 1, т.к. элемент один

    return this; // возвращаем прототип, прекращаем дальнейшую работу функции
  }

  Object.assign(this, document.querySelectorAll(selector)); // создаем новый объект, копируя свойства исходного объекта

  this.length = document.querySelectorAll(selector).length;
  return this; // вернет прототип
};

$.prototype.init.prototype = $.prototype; // в прототип объекта, который будет возвращен из ф-ции init(), записываем прототип главной ф-ции $(). Таким образом, на объекте, который будет создаваться при помощи ф-ции $(), мы можем использовать любые методы, которые будут внутри прототипа ф-ции init()

window.$ = $; // в глобальный объект window записываем ф-цию $(), чтобы мы могли глобально ее использовать

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_eventActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventActions */ "./src/js/lib/modules/eventActions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");







/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // изменить содержимое html-элемента (если передан параметр content) или получить содержимое html-элемента (если метод вызван без аргумента)

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.htmlContent = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; // получить определенный элемент по индексу элемента среди элементов с общим родителем


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getElem = function (i) {
  const currentObj = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = currentObj;
  this.length = 1;
  return this;
}; // получить индекс элемента среди элементов с общим родителем


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getElemIndex = function () {
  const parent = this[0].parentNode;
  const children = [...parent.children];

  const findElemIndex = item => {
    return item == this[0];
  };

  return children.findIndex(findElemIndex);
}; // найти элемент по селектору среди уже выбранных


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.findElem = function (selector) {
  const objCopy = Object.assign({}, this); // создаем копию объекта this

  let numberOfItems = 0; // общее кол-во элементов

  let counter = 0; // кол-во новых элементов, записанных в this

  for (let i = 0; i < objCopy.length; i++) {
    const arr = objCopy[i].querySelectorAll(selector); // ищем эл-ты по селектору внутри скопированного объекта

    if (arr.length == 0) {
      // если эл-ты не найдены, эту итерацию цикла пропускаем и продолжаем выполнение кода дальше
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      // если эл-ты найдены, то:
      this[counter] = arr[j]; // каждый эл-т, найденный по селектору, записываем в общий объект this

      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length; // кол-во эл-тов в объекте this

  for (; numberOfItems < objLength; numberOfItems++) {
    // перебираем объект this с новыми добавленными эл-тами и
    delete this[numberOfItems]; // удаляем старые немодифицированные эл-ты
  }

  return this; // возвращаем модифицированный объект this
  // Оптимизация

  /*const newObj = this[0].querySelectorAll(selector);
  
  for (let i = 0; i < this.length; i++) {
  	delete this[i];
  }
  Object.assign(this, newObj);
  this.length = newObj.length;
  return this;*/
}; // определаить ближайший блок по заданному селектору


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      return this;
    }

    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length; // кол-во эл-тов в объекте this

  for (; counter < objLength; counter++) {
    // перебираем объект this с новыми добавленными эл-тами и
    delete this[counter]; // удаляем старые немодифицированные эл-ты
  }

  return this;
}; // получить все соседние элементы, не включая сам элемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.findSiblings = function () {
  const objCopy = Object.assign({}, this);
  let numberOfItems = 0;
  let counter = 0;

  for (let i = 0; i < objCopy.length; i++) {
    const arr = objCopy[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (objCopy[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (attrName, attrValue) {
  if (!attrName || !attrValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attrName, attrValue);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attrName);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  if (!attrName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(attrName);
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (attrName, attrValue) {
  if (!attrName || !attrValue) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attrName)) {
      this[i].removeAttribute(attrName);
    } else {
      this[i].setAttribute(attrName, attrValue);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // техническая функция запуска анимации

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, final) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timePassed = time - timeStart;
    let param = Math.min(timePassed / duration, 1);
    callback(param);

    if (timePassed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof final === 'function') {
        final();
      }
    }
  }

  return _animateOverTime;
}; // fadeIn animation


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = param => {
      this[i].style.opacity = param;
    };

    const animation = this.animateOverTime(duration, _fadeIn, final);
    requestAnimationFrame(animation);
  }

  return this;
}; // fadeOut animation


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, final) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = param => {
      this[i].style.opacity = 1 - param;

      if (param === 1) {
        this[i].style.display = 'none';
      }
    };

    const animation = this.animateOverTime(duration, _fadeOut, final);
    requestAnimationFrame(animation);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/eventActions.js":
/*!********************************************!*\
  !*** ./src/js/lib/modules/eventActions.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAction = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAction = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClick = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      this[i].addEventListener('click', callback);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

 //$('div');
//$('.active').hide().show();
//$('div').hide().show();
//Работа с css-классами и обработчиками событий
//$('.active').toggle().toggle();
//$('.active').addClass('super', 'hello');
//$('div').addClass('super', 'hello');
//$('.active').removeClass('super', 'hello');
//$('.active').toggleClass('super');
//$('.active').addAction('click', sayHello);
//$('.active').removeAction('click', sayHello);
//$('.active').addClick(sayHello);

/*$('button').addAction('click', function() {
	$(this).toggleClass('active');
});*/

/*$('button').addClick(function() {
	$(this).toggleClass('active');
});*/
//$('button').setAttr('disabled', 'true');
//$('button').getAttr('disabled');

/*$('button').addClick(function() {
	$(this).setAttr('disabled', 'true');
});*/

/*$('button').addClick(function() {
	$(this).getAttr();
});*/
//$('div').setAttr('id', 'new');
//console.log($('.active').getAttr('id'));
//$('div').removeAttr('id');
//$('.active').setAttr('id', 'new');
//$('.active').toggleAttr('id', 'new');

/*$('button').addClick(function() {
	$('.active').toggleAttr('id', 'new');
});*/
//Создаем методы для работы с элементами
//console.log($('.active').htmlContent());

/*$('button').addClick(function() {
	$(this).htmlContent('Thanks!');
});*/

/*$('button').addClick(function() {
	$('div').getElem(2).toggleClass('active');
});*/

/*$('button').addClick(function() {
	$('div').getElem(2).htmlContent('Thanks!');
});
$('div').addClick(function() {
	console.log($(this).getElemIndex());
});*/
//console.log($('div').getElem(2).findElem('.more'));
//console.log($('div').getElem(2).findElem('.some'));
//console.log($('.some').closest('.findme'));
//console.log($('.some').closest('.findme5').addClass('kjl'));
//console.log($('.findme').findSiblings());
//console.log($('.more').getElem(0).findSiblings());
// Создаем анимации fadeIn/fadeOut
//$('button').fadeOut(1800);
//$('button').fadeIn(1800);

/*function sayHello() {
	console.log('Hello');
}*/
// Работа со стилями + создаем готовые компоненты кнопок для библиотеки

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').addClick(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').getElem(1).fadeOut(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').addClick(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').getElem(2).fadeOut(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').getElem(2).addClick(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeOut(800);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map