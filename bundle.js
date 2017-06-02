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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setup = __webpack_require__(1);

var curCol = 0;
function play() {
  var col = document.querySelectorAll(".col-" + curCol);

  var _loop = function _loop(j) {
    var cell = col[j];
    cell.classList.toggle("curCol");
    if (cell.classList.contains("active")) {
      var audio = document.getElementById("sound-" + j);
      if (!audio.muted) {
        audio.cloneNode(true).play();
      }
    }
    setTimeout(function () {
      cell.classList.toggle("curCol");
    }, 300);
  };

  for (var j = 0; j < 16; j++) {
    _loop(j);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  (0, _setup.createGrid)();
  (0, _setup.createAudio)();
  var muteButton = document.getElementById("mute");
  var soundEls = document.querySelectorAll("audio");
  var isMuted = false;

  var muteFunction = function muteFunction(bool) {
    for (var i = 0; i < soundEls.length; i++) {
      soundEls[i].muted = bool;
    }
    isMuted = bool;
  };

  muteButton.addEventListener("click", function () {
    return isMuted ? muteFunction(false) : muteFunction(true);
  });

  // reset button
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", function () {
    document.querySelectorAll("li").forEach(function (li) {
      li.classList.remove("active");
    });
  });

  setInterval(function () {
    play();
    curCol = (curCol + 1) % 16;
  }, 300);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGrid = exports.createGrid = function createGrid() {

  var gridContainer = document.getElementById('grid-container');
  var grid = document.createDocumentFragment();
  // needs to iterate through the different types of audio
  for (var i = 0; i < 16; i++) {
    var row = document.createElement("ul");
    row.setAttribute("class", "row row-" + i);
    for (var j = 0; j < 16; j++) {
      var cell = document.createElement("li");
      cell.setAttribute("class", "col-" + j + " cell");
      cell.onclick = toggleActive;
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  gridContainer.appendChild(grid);
};

var createAudio = exports.createAudio = function createAudio() {
  var audioContainer = document.getElementById('audio-container');
  var sounds = document.createDocumentFragment();
  for (var i = 0; i < 16; i++) {
    var audio = document.createElement("audio");
    audio.setAttribute("id", "sound-" + i);

    var source = document.createElement("source");
    source.setAttribute("src", "./assets/sounds/" + i + ".mp3");

    audio.appendChild(source);
    sounds.appendChild(audio);
  }
  audioContainer.appendChild(sounds);
};

var toggleActive = exports.toggleActive = function toggleActive(e) {
  e.currentTarget.classList.toggle("active");
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map