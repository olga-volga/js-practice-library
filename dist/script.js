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

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActiveClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActiveClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClick(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActiveClass);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActiveClass);

      if (this[i].classList.contains(headActiveClass)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + padding + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = '0px';
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClick(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.calcScrollWidth = function () {
  let div = document.createElement('div');
  div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClick(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${this.calcScrollWidth()}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(item => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(item).addClick(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.marginRight = '';

          if (created) {
            document.querySelector(target).remove();
          }
        }, 500);
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).addClick(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.marginRight = '';

          if (created) {
            document.querySelector(target).remove();
          }
        }, 500);
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).setAttr('id', Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target').slice(1)); // btns = {count: num, settings: [[text, classNames = [], close, callback]]}
    // кнопки btns = {кол-вол кнопок: 2, настройки: [[строка с текстом внутри кнопки, классы стилей кнопки, кнопка "закрыть"(true или false), callback ф-ция]]}

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let [buttonText, classNames, close, callback] = btns.settings[j]; // деструктурируем массив settings

      let btn = document.createElement('button'); // создаем кнопку

      btn.classList.add('btn', ...classNames); // добавляем классы стилей

      btn.textContent = buttonText; // устанавливаем текст кнопки из btns.settings[j][0]

      if (close) {
        // если btns.settings[j][2] = true, т.е. нужно, чтобы кнопка закрывала модальное окно, то
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).setAttr('data-close', 'true'); // устанавливаем атрибут data-close
      }

      if (callback && typeof callback === 'function') {
        // если передана callback ф-ция, то
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).addClick(callback); // при клике на кнопку выполняется эта callback ф-ция
      }

      buttons.push(btn); // добавляем соззданную кнопку в массив с кнопками
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).htmlContent(`<div class="modal-dialog">
	    		<div class="modal-content">
	    			<button class="close" data-close><span>&times;</span></button>
	    			<div class="modal-header">
	    				<div class="modal-title">${text.title}</div>
	    			</div>
	    			<div class="modal-body">${text.body}</div>
	    			<div class="modal-footer">
	    				
	    			</div>
	    		</div>
	    	</div>`);
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.append(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClick(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').findSiblings().removeClass('tab-item--active').closest('.tab').findElem('.tab-content').removeClass('tab-content--active').getElem(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getElemIndex()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

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
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");











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
  const childrenOfParent = [...parent.children];

  const findElemIndex = item => {
    return item == this[0];
  };

  return childrenOfParent.findIndex(findElemIndex);
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
}; // toggle fadeIn / fadeOut animation


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, final) {
  /*for (let i = 0; i < this.length; i++) {
  	let animation;
  	if (window.getComputedStyle(this[i]).display === 'none') {
  		this[i].style.display = display || 'block';
  
  		const _fadeIn = (param) => {
  			this[i].style.opacity = param;
  		};
  		animation = this.animateOverTime(duration, _fadeIn, final);
  	} else {
  		const _fadeOut = (param) => {
  			this[i].style.opacity = 1 - param;
  			
  			if (param === 1) {
  				this[i].style.display = 'none';
  			}
  		};
  		animation = this.animateOverTime(duration, _fadeOut, final);
  	}
  	requestAnimationFrame(animation);
  }
  return this;*/
  // Оптимизация
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, final);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, final);
    }
  }
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

/*$('#first').addClick(() => {
	$('div').getElem(1).fadeOut(800);
});
$('[data-count="second"]').addClick(() => {
	$('div').getElem(2).fadeOut(800);
});
$('button').getElem(2).addClick(() => {
	$('.w-500').fadeOut(800);
});*/
// Создаем анимацию fadeToggle

/*$('#first').addClick(() => {
	$('div').getElem(1).fadeToggle(800);
});
$('[data-count="second"]').addClick(() => {
	$('div').getElem(2).fadeToggle(800);
});
$('button').getElem(2).addClick(() => {
	$('.w-500').fadeToggle(800);
});*/
//Создаем Dropdown menu динамически

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').htmlContent(`<div class="dropdown">
	    <button class="btn btn-primary dropdown-toggle dropdown-toggle-dinamic" id="dropdownMenuButtonDinamic">Dropdown dinamic button</button>
	    <div class="dropdown-menu" data-toggle-id="dropdownMenuButtonDinamic">
	    	<a href="#" class="dropdown-item">Action #1</a>
	    	<a href="#" class="dropdown-item">Action #2</a>
	    	<a href="#" class="dropdown-item">Action #3</a>
	    </div>
	</div>`);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle-dinamic').dropdown(); //Динамическое создание модальных окон

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').addClick(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Dinamic Modal title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quam odit, dolor cupiditate velit porro recusandae. Tenetur, eius ullam, amet veritatis neque fuga dolorem sapiente ducimus nisi, inventore ex fugiat?'
  },
  btns: {
    count: 3,
    settings: [['Close', ['btn-danger', 'mr-10'], true], ['Save canges', ['btn-success', 'mr-10'], false, () => {
      alert('Changes are saved');
    }], ['Exit', ['btn-warning'], false, () => {
      alert('Please, save the results!');
    }]]
  }
}));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map