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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Paginator = undefined;
	
	var _Paginator = __webpack_require__(41);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Paginator = _Paginator2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(2)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(17);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(7)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    current: Boolean,
	    text: [String, Number],
	    type: String,
	    onclick: Function
	  },
	  methods: {
	    changePage: function changePage(page) {
	      this.onclick(page);
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(12);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _PageNth = __webpack_require__(40);
	
	var _PageNth2 = _interopRequireDefault(_PageNth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    'page-nth': _PageNth2.default
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
	  data: function data() {
	    return {};
	  },
	  computed: {
	    config: function config() {
	      return (0, _assign2.default)({
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
	    sizeClass: function sizeClass() {
	      if (this.size === 'large') {
	        return 'pagination-lg';
	      } else if (this.size === 'small') {
	        return 'pagination-sm';
	      } else {
	        return '';
	      }
	    },
	    pages: function pages() {
	      if (this.pagination.total_pages <= 0) {
	        return [];
	      }
	
	      var pages = [];
	      var cursor = 1;
	
	      if (this.config.showBeginning) {
	        for (var _i = 1; _i <= Math.min(this.pagination.current_page, this.config.beginNum); _i++) {
	          pages.push({
	            text: _i,
	            type: 'link'
	          });
	
	          cursor = _i;
	        }
	
	        if (this.pagination.current_page <= this.config.noEllipsisNum) {
	          for (var _i2 = cursor + 1; _i2 <= Math.min(this.pagination.total_pages, this.config.noEllipsisNum); _i2++) {
	            pages.push({
	              text: _i2,
	              type: 'link'
	            });
	
	            cursor = _i2;
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
	        for (var _i3 = Math.max(cursor + 1, Math.min(this.pagination.total_pages - this.config.noEllipsisNum + 1, this.pagination.current_page - this.config.offset)); _i3 <= this.pagination.total_pages; _i3++) {
	          pages.push({
	            text: _i3,
	            type: 'link'
	          });
	
	          cursor = _i3;
	        }
	      }
	
	      for (var _i4 = Math.max(cursor + 1, this.pagination.current_page - this.config.offset); _i4 <= Math.min(this.pagination.total_pages, this.pagination.current_page + this.config.offset); _i4++) {
	        pages.push({
	          text: _i4,
	          type: 'link'
	        });
	
	        cursor = _i4;
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
	    'pagination.per_page': function paginationPer_page(newValue, oldValue) {
	      if (newValue !== oldValue) {
	        this.callback();
	      }
	    }
	  },
	  methods: {
	    showPrevious: function showPrevious() {
	      return this.config.showPrevNext || this.pagination.current_page > 1;
	    },
	    showNext: function showNext() {
	      return this.config.showPrevNext || this.pagination.current_page < this.pagination.total_pages;
	    },
	    changePage: function changePage(page) {
	      if (this.pagination.current_page === page) {
	        return;
	      }
	
	      this.pagination.current_page = page;
	      this.callback();
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(34);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4)
	  , document = __webpack_require__(3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(3)
	  , core      = __webpack_require__(5)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(23)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 22 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(26)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(1) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(29)
	  , gOPS     = __webpack_require__(27)
	  , pIE      = __webpack_require__(30)
	  , toObject = __webpack_require__(36)
	  , IObject  = __webpack_require__(7)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(2)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(22)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(16)(false)
	  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(28)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys')
	  , uid    = __webpack_require__(38);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(8)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(8)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(4);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(21);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(25)});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(10)
	
	/* template */
	var __vue_template__ = __webpack_require__(43)
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(42)
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
/* 42 */
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
/* 43 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    class: {
	      "active": current
	    }
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
	        changePage(text)
	      }
	    }
	  }, [_s(text)]), " ", _h('a', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (type === 'ellipsis'),
	      expression: "type === 'ellipsis'"
	    }]
	  }, [_s(text)])])
	}},staticRenderFns: []}

/***/ }
/******/ ]);
//# sourceMappingURL=vue-pagi.js.map