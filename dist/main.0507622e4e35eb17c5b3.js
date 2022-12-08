/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  --numSquares: 10;\r\n  --game-grid-size: 400px;\r\n  --game-square-size: calc(var(--game-grid-size)/(var(--numSquares)));\r\n  --border: 3px;\r\n  --empty-no-hit: darkcyan;\r\n  --empty-hit: white;\r\n  --ship-no-hit: darkgray;\r\n  --ship-hit: red;\r\n}\r\n\r\nbody{\r\n  display: grid;\r\n  justify-content: center;\r\n}\r\n\r\n.gameboard{\r\n  width: var(--game-grid-size);\r\n  height: var(--game-grid-size);\r\n  background-color: black;\r\n  display: grid;\r\n  padding: var(--border);\r\n  gap: var(--border);\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.gameboard .square {\r\n  /* width: var(--game-square-size);\r\n  height: var(--game-square-size); */\r\n  background-color:var(--empty-no-hit);\r\n  /* border: 2px solid black; */\r\n}\r\n\r\n.square.no-hit-empty{\r\n  background-color: var(--empty-no-hit);\r\n}\r\n.square.hit-empty {\r\n  background-color: var(--empty-hit);\r\n}\r\n\r\n.square.no-hit-ship {\r\n  background-color: var(--ship-no-hit);\r\n}\r\n\r\n.square.hit-ship {\r\n  background-color: var(--ship-hit);\r\n}\r\n\r\n.player-view {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  column-gap: 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wIAAwI;EACxI,gBAAgB;EAChB,uBAAuB;EACvB,mEAAmE;EACnE,aAAa;EACb,wBAAwB;EACxB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;EAC7B,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE;oCACkC;EAClC,oCAAoC;EACpC,6BAA6B;AAC/B;;AAEA;EACE,qCAAqC;AACvC;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB","sourcesContent":[":root{\r\n  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  --numSquares: 10;\r\n  --game-grid-size: 400px;\r\n  --game-square-size: calc(var(--game-grid-size)/(var(--numSquares)));\r\n  --border: 3px;\r\n  --empty-no-hit: darkcyan;\r\n  --empty-hit: white;\r\n  --ship-no-hit: darkgray;\r\n  --ship-hit: red;\r\n}\r\n\r\nbody{\r\n  display: grid;\r\n  justify-content: center;\r\n}\r\n\r\n.gameboard{\r\n  width: var(--game-grid-size);\r\n  height: var(--game-grid-size);\r\n  background-color: black;\r\n  display: grid;\r\n  padding: var(--border);\r\n  gap: var(--border);\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.gameboard .square {\r\n  /* width: var(--game-square-size);\r\n  height: var(--game-square-size); */\r\n  background-color:var(--empty-no-hit);\r\n  /* border: 2px solid black; */\r\n}\r\n\r\n.square.no-hit-empty{\r\n  background-color: var(--empty-no-hit);\r\n}\r\n.square.hit-empty {\r\n  background-color: var(--empty-hit);\r\n}\r\n\r\n.square.no-hit-ship {\r\n  background-color: var(--ship-no-hit);\r\n}\r\n\r\n.square.hit-ship {\r\n  background-color: var(--ship-hit);\r\n}\r\n\r\n.player-view {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  column-gap: 40px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pubsub */ "./src/helpers/pubsub.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/components/Player.js");
/* harmony import */ var _Gameboard_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard.display */ "./src/components/Gameboard.display.js");




const Game = (p1, p2) => {
  const players = [p1, p2];
  let attackPlayer;
  let defendPlayer;
  let winner;
  const renderPlayers = () => {
    _Gameboard_display__WEBPACK_IMPORTED_MODULE_2__["default"].renderP1View(p1, p2);
    _Gameboard_display__WEBPACK_IMPORTED_MODULE_2__["default"].renderP2View(p2, p1);
    console.log('render');
  };
  const getAllPlayers = () => players;
  const endGame = () => {
    console.log(`Game Over. ${winner.getName()} Wins`);
    // For now we are not really 'ENDING' the game... we are just not rendering or passing turn
    // Which means it is permanently winner's turn, but I am not showing the results from the hits
    // NEED To actually end the game somehow.... and show a screen that lets me restart the game..

    // something like that
    // have to think about this because right now all the square elements have click listeners
    // But I dont want to immediately render a diff page, bc I want ppl to be able to look
    // at the Game after it ends.. So probably just renderPlayerViws() but have a method that
    // DOESNT add the action listeners... soemthign like that
  };
  const nextTurn = () => {
    defendPlayer = attackPlayer || p2;
    attackPlayer = attackPlayer === p1 ? p2 : p1;
    console.log(`${attackPlayer.getName()}'s turn`);
    renderPlayers();
  };
  const endTurn = () => {
    if (defendPlayer.isAllShipsShunk()) {
      winner = attackPlayer;
      endGame();
    } else {
      nextTurn();
    }
  };
  const onSquareClick = ({ player, index }) => {
    console.log(index);
    if (player === defendPlayer) {
      player.getGameboard().receiveAttack(index);
      endTurn();
    }
  };
  const initialize = () => {
    console.log('game start');
    p1.initializePresetShips();
    p2.initializePresetShips2();
    nextTurn();
  };
  initialize();
  // event bind
  _helpers_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].on('squareClick', onSquareClick);
  return {
    nextTurn,
    getAllPlayers,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/components/Gameboard.display.js":
/*!*********************************************!*\
  !*** ./src/components/Gameboard.display.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/pubsub */ "./src/helpers/pubsub.js");
// each Gameboard needs an 'ally view' where u can see ur own ship setup
// and a 'enemy view', where you only see the result of hits but NOT ships


const GameboardDisplay = () => {
  const p1View = document.querySelector('.player-view.p1');
  const p2View = document.querySelector('.player-view.p2');
  const squareClass = {
    noHitEmpty: 'no-hit-empty',
    noHitShip: 'no-hit-ship',
    hitEmpty: 'hit-empty',
    hitShip: 'hit-ship',
  };
  const getSquareElement = (square, isAlly) => {
    const squareEl = document.createElement('div');
    let squareType = squareClass.noHitEmpty;
    if (!square.isHit()) {
      squareType = !square.isEmpty() && isAlly ? squareClass.noHitShip : squareClass.noHitEmpty;
    } else {
      squareType = square.isEmpty() ? squareClass.hitEmpty : squareClass.hitShip;
    }
    squareEl.classList.add('square', squareType);
    return squareEl;
  };
  const getBoardElement = (player, isAlly) => {
    const gameboard = player.getGameboard();
    const gameboardEl = document.createElement('div');
    const allyOrEnemyClass = isAlly ? 'ally-view' : 'enemy-view';
    gameboardEl.classList.add('gameboard', allyOrEnemyClass);
    gameboard.getBoard().forEach((square, index) => {
      const squareEl = getSquareElement(square, isAlly);
      if (!isAlly) {
        squareEl.addEventListener('click', () => _helpers_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].emit('squareClick', { player, index }));
      }
      gameboardEl.appendChild(squareEl);
    });
    return gameboardEl;
  };

  const getBoardContainerElement = (gameboardElement, boardTitle) => {
    const boardContainer = document.createElement('div');
    const boardTitleEl = document.createElement('div');
    boardTitleEl.textContent = boardTitle;
    boardContainer.appendChild(boardTitleEl);
    boardContainer.appendChild(gameboardElement);
    return boardContainer;
  };

  const renderView = (allyPlayer, enemyPlayer, isPlayer1) => {
    const playerView = isPlayer1 ? p1View : p2View;
    playerView.replaceChildren();
    const allyBoardEl = getBoardElement(allyPlayer, true);
    const enemyBoardEl = getBoardElement(enemyPlayer, false);
    //
    const allyBoardContainer = getBoardContainerElement(allyBoardEl, 'Ally Board');
    const enemyBoardContainer = getBoardContainerElement(enemyBoardEl, 'Enemy Board');
    playerView.appendChild(allyBoardContainer);
    playerView.appendChild(enemyBoardContainer);
  };
  const renderP1View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, true);
  const renderP2View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, false);
  return {
    renderP1View,
    renderP2View,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardDisplay());


/***/ }),

/***/ "./src/components/Gameboard.js":
/*!*************************************!*\
  !*** ./src/components/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/components/Ship.js");
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square */ "./src/components/Square.js");



const Gameboard = () => {
  let board = null;
  let myShips = [];
  const resetBoard = () => {
    board = new Array(100);
    for (let i = 0; i < 100; i += 1) {
      board[i] = (0,_Square__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    return board;
  };
  resetBoard();
  const getBoard = () => board;
  const getSquare = (index) => board[index];
  const setPiece = (index, piece) => (getSquare(index).setShip(piece));
  const getPiece = (index) => (getSquare(index).getShip());
  const isValid = (index) => index >= 0 && index < 100;
  const getAllShips = () => myShips;
  const setShip = (allIndex, ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(allIndex.length)) => {
    if (allIndex.length !== ship.getLength()) {
      return false;
    }
    // check if allIndex are valid && empty
    const isValidEmptyNotHit = allIndex.every((index) => isValid(index)
                                                        && getSquare(index).isEmpty()
                                                        && !getSquare(index).isHit());
    if (!isValidEmptyNotHit) {
      return false;
    }

    // check if allIndex have either the same Math.trunc(input/10) or the same % 10
    const isHoriz = allIndex.every((ind) => Math.trunc(ind / 10) === Math.trunc(allIndex[0] / 10));
    const isVertical = allIndex.every((e) => e % 10 === allIndex[0] % 10);
    if (!(isHoriz || isVertical)) {
      return false;
    }

    // if passed all check, setPiece the ship, and add to myShips
    allIndex.forEach((index) => {
      setPiece(index, ship);
    });
    myShips.push(ship);
    return true;
  };
  const setMultipleShips = (...args) => {
    // ex ([1,2,3], [40,41,42])
    args.forEach((cordinatesArray) => setShip(cordinatesArray));
  };
  const receiveAttack = (index) => getSquare(index).hitSquare();
  const visualizeBoard = () => {
    // test visualizer
    const out = getBoard().map((square) => {
      if (!square.isEmpty()) {
        if (square.isHit()) {
          return 'SH';
        }
        return 'S';
      // eslint-disable-next-line no-else-return
      } else {
        if (square.isHit()) {
          return 'EH';
        }
        return 'E';
      }
    });
    return out;
    // the ifs here look kind of messy... Right now we Need isEmptyHit() to come BEFORE isEmpty()
    // otherwise if its in reverse order, isEmptyHit() will never get evaluated, since isEmpty()
    // would short-circuit it
  };
  return {
    getBoard,
    getPiece,
    getSquare,
    getAllShips,
    setShip,
    setMultipleShips,
    isValid,
    receiveAttack,
    visualizeBoard,
    resetBoard,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

// TODO TODO the setShip portion at the bottom that we were rewruiting seems like
// it forces me to write too much code.... maybe less it better even if it is worse algo

// HOWEVER this also makes me realize that we are doing this WAYYYYY TOO MESSY
// we are working with inputs, coordinates, and index
// and different methods expect a differnt parameter... which is impossible to tell
// i think it is best to just make all methods work with index.
// if we want to, we can also have some helper methods here for outside callers, such as
// inputToIndex() and isInputValid()

// TODO TODO ACTUAL TODO
// change this whole module so that it works ONLY with index instead of also working with input
// and cordinates. Makes it simpler


/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/components/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/components/Ship.js");



const Player = (name) => {
  let myName = name;
  let myBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const setGameboard = (board) => (myBoard = board);
  const getGameboard = () => myBoard;
  const getName = () => myName;
  const setName = (newName) => (myName = newName);
  const isAllShipsShunk = () => {
    const out = getGameboard().getAllShips().every((ship) => ship.isSunk());
    if (out) {
      console.log(`All ships have sunk for player: ${name}`);
    }
    return out;
  };
  const initializePresetShips = () => {
    getGameboard().resetBoard();
    getGameboard().setMultipleShips([0, 1], [6, 16, 26], [45, 46, 47, 48], [81, 82, 83, 84, 85]);
  };

  const initializePresetShips2 = () => {
    getGameboard().resetBoard();
    getGameboard().setMultipleShips([55, 65], [9, 19, 29], [31, 32, 33, 34], [95, 96, 97, 98, 99]);
  };

  return {
    setGameboard,
    getGameboard,
    setName,
    getName,
    initializePresetShips,
    initializePresetShips2,
    isAllShipsShunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*\
  !*** ./src/components/Ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  let hits = 0;
  const getHits = () => hits;
  return {
    getLength: () => length,
    getHits,
    hit() {
      hits += 1;
      return getHits();
    },
    isSunk: () => hits >= length,
    // allowedSetPosition: (index) => {
    //   const [rightSet, leftSet, downSet, upSet] = out;
    //   const [rightInc, leftInc, downInc, upInc];
    //   for (let i = index; i < length; i += 1) {
    //     rightSet.push(i);
    //     downSet.push()
    //   }
    // },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/components/Square.js":
/*!**********************************!*\
  !*** ./src/components/Square.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Square = () => {
  let hit = false;
  let myShip = null;
  const setShip = (ship) => (myShip = ship);
  const getShip = () => myShip;
  const isHit = () => hit;
  const isEmpty = () => getShip() === null;
  const hasShip = () => !isEmpty;
  const hitSquare = () => {
    hit = true;
    console.log('hit');
    if (!isEmpty()) {
      myShip.hit();
      console.log('hit ship');
    }
  };

  return {
    setShip,
    getShip,
    isHit,
    isEmpty,
    hitSquare,
    hasShip,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);


/***/ }),

/***/ "./src/helpers/pubsub.js":
/*!*******************************!*\
  !*** ./src/helpers/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
// events - a super-basic Javascript (publish subscribe) pattern

const events = {
  events: {},
  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Player */ "./src/components/Player.js");
/* harmony import */ var _components_Gameboard_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Gameboard.display */ "./src/components/Gameboard.display.js");
/* harmony import */ var _components_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Ship */ "./src/components/Ship.js");
/* harmony import */ var _helpers_pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/pubsub */ "./src/helpers/pubsub.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Game */ "./src/components/Game.js");







const p1 = (0,_components_Player__WEBPACK_IMPORTED_MODULE_0__["default"])('p1');
const p2 = (0,_components_Player__WEBPACK_IMPORTED_MODULE_0__["default"])('p2');
(0,_components_Game__WEBPACK_IMPORTED_MODULE_5__["default"])(p1, p2);

// TODO i think pass the player insted of the board... then getGameboard() INSIDE the function.
// this way we can extract things like name inside the function
// and more IMPORTANTLY, we can add a "() => player" to the click handler of the squares
// AKA the gameboard renders will be able to tell me which player it comes from

// .... Although now that i think about it, its kinda strange that I cant otherwise tell...
// very sleepy, but i think its because we have a player -> gameboard relationship, and the
// display is completely separate... so theres no connection to the player that owns the gameboard

console.log('index');

// export default index;

})();

/******/ })()
;
//# sourceMappingURL=main.0507622e4e35eb17c5b3.js.map