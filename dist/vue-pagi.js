/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    props: {
        current: false,
        text: '',
        type: 'link'
    }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageNth_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageNth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PageNth_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    components: {
        'page-nth': __WEBPACK_IMPORTED_MODULE_0__PageNth_vue___default.a
    },
    props: {
        pagination: {
            type: Object,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
        options: {
            type: Object
        },
        size: {
            type: String
        }
    },
    data: function () {
        return {};
    },
    computed: {
        config: function () {
            return Object.assign({
                offset: 3,
                ariaPrevious: 'Previous',
                ariaNext: 'Next',
                previousText: '«',
                nextText: '»',
                showPrevNext: true,
                showBeginning: true,
                showEnd: true,
                beginNum: 2,
                endNum: 1,
                ellipsis: '...',
                noEllipsisNum: 8
            }, this.options);
        },
        sizeClass: function () {
            if (this.size === 'large') {
                return 'pagination-lg';
            } else if (this.size === 'small') {
                return 'pagination-sm';
            } else {
                return '';
            }
        },
        pages: function () {
            //  beginning   offset  current
            // |`````|     |``````|  |
            // 1, 2, 3 ... 8, 9, 10, 11, 12, 13, 14 ... 98, 99, 100
            if (this.pagination.total_pages <= 0) {
                return [];
            }

            var pages = [];
            var cursor = 1;

            if (this.config.showBeginning) {
                for (var i = 1; i <= Math.min(this.pagination.current_page, this.config.beginNum); i++) {
                    pages.push({
                        text: i,
                        type: 'link'
                    });

                    cursor = i;
                }

                if (this.pagination.current_page <= this.config.noEllipsisNum) {
                    for (var i = cursor + 1; i <= Math.min(this.pagination.total_pages, this.config.noEllipsisNum); i++) {
                        pages.push({
                            text: i,
                            type: 'link'
                        });

                        cursor = i;
                    }
                }

                if (cursor < this.pagination.current_page - this.config.offset - 1) {
                    pages.push({
                        text: this.config.ellipsis,
                        type: 'ellipsis'
                    });
                }
            }

            if (this.pagination.current_page >= this.pagination.total_pages - this.config.noEllipsisNum + 1) {
                for (var i = Math.max(cursor + 1, Math.min(this.pagination.total_pages - this.config.noEllipsisNum + 1, this.pagination.current_page - this.config.offset)); i <= this.pagination.total_pages; i++) {
                    pages.push({
                        text: i,
                        type: 'link'
                    });

                    cursor = i;
                }
            }

            for (var i = Math.max(cursor + 1, this.pagination.current_page - this.config.offset); i <= Math.min(this.pagination.total_pages, this.pagination.current_page + this.config.offset); i++) {
                pages.push({
                    text: i,
                    type: 'link'
                });

                cursor = i;
            }

            if (this.config.showEnd) {
                if (cursor < this.pagination.total_pages - this.config.endNum) {
                    pages.push({
                        text: this.config.ellipsis,
                        type: 'ellipsis'
                    });
                }

                for (var i = Math.max(cursor + 1, this.pagination.total_pages - this.config.endNum + 1); i <= this.pagination.total_pages; i++) {
                    pages.push({
                        text: i,
                        type: 'link'
                    });

                    cursor = i;
                }
            }

            return pages;
        }
    },
    watch: {
        'pagination.per_page': function (newValue, oldValue) {
            if (newValue !== oldValue) {
                this.callback();
            }
        }
    },
    methods: {
        showPrevious: function () {
            return this.config.showPrevNext || this.pagination.current_page > 1;
        },
        showNext: function () {
            return this.config.showPrevNext || this.pagination.current_page < this.pagination.total_pages;
        },
        changePage: function (page) {
            if (this.pagination.current_page === page) {
                return;
            }

            this.pagination.current_page = page;
            this.callback();
        }
    }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('nav', [_h('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (pagination.total_pages > 0),
      expression: "pagination.total_pages > 0"
    }],
    staticClass: "pagination",
    class: sizeClass
  }, [_h('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (showPrevious()),
      expression: "showPrevious()"
    }],
    class: {
      'disabled': pagination.current_page <= 1
    }
  }, [_h('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (pagination.current_page <= 1),
      expression: "pagination.current_page <= 1"
    }]
  }, [_h('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_s(config.previousText)])]), " ", _h('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (pagination.current_page > 1),
      expression: "pagination.current_page > 1 "
    }],
    attrs: {
      "href": "#",
      "aria-label": config.ariaPrevioius
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        changePage(pagination.current_page - 1)
      }
    }
  }, [_h('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_s(config.previousText)])])]), " ", _l((pages), function(page) {
    return _h('page-nth', {
      attrs: {
        "onclick": changePage,
        "current": (page.text === pagination.current_page),
        "type": page.type,
        "text": page.text
      }
    })
  }), " ", _h('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (showNext()),
      expression: "showNext()"
    }],
    class: {
      'disabled': pagination.current_page === pagination.total_pages || pagination.total_pages === 0
    }
  }, [_h('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (pagination.current_page === pagination.total_pages || pagination.total_pages === 0),
      expression: "pagination.current_page === pagination.total_pages || pagination.total_pages === 0"
    }]
  }, [_h('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_s(config.nextText)])]), " ", _h('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (pagination.current_page < pagination.total_pages),
      expression: "pagination.current_page < pagination.total_pages"
    }],
    attrs: {
      "href": "#",
      "aria-label": config.ariaNext
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        changePage(pagination.current_page + 1)
      }
    }
  }, [_h('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_s(config.nextText)])])])])])
}},staticRenderFns: []}

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('li', {
    directives: [{
      name: "class",
      rawName: "v-class:class",
      value: ({
        "active": current
      }),
      expression: "{\"active\":current}",
      arg: "class"
    }]
  }, [_h('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (type === 'link'),
      expression: "type === 'link'"
    }],
    on: {
      "click": function($event) {
        $event.preventDefault();
        changePage(page.text)
      }
    }
  }, [_s(page.text)]), " ", _h('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (type === 'ellipsis'),
      expression: "type === 'ellipsis'"
    }]
  }, [_s(page.text)])])
}},staticRenderFns: []}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paginator_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Paginator_vue__);


/* harmony default export */ exports["default"] = __WEBPACK_IMPORTED_MODULE_0__Paginator_vue___default.a;

/***/ }
/******/ ]);
//# sourceMappingURL=vue-pagi.js.map