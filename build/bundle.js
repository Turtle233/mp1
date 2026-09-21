/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

/* Your JS here. */
console.log('MP1 Starting...');

// ============================================= header functions ==============================================
var header = document.querySelector("header");
function setHeader() {
  var scrollY = window.scrollY;
  if (scrollY > 100) {
    header.classList.add("is-scrolled");
  } else if (scrollY < 20) {
    header.classList.remove("is-scrolled");
  }
}
window.addEventListener("scroll", setHeader);

// ============================================= position locating ==============================================
var navLinks = document.querySelectorAll(".navi_links a");
function highlightNavigation() {
  var current = navLinks[0];
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section.getBoundingClientRect().top <= header.offsetHeight + 10) {
      current = link;
    }
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = navLinks[navLinks.length - 1];
  }
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link === current);
  });
}
window.addEventListener("scroll", highlightNavigation);
window.addEventListener("resize", highlightNavigation);
window.addEventListener("load", highlightNavigation);
highlightNavigation();

// ============================================= gallery functions ==============================================
var track = document.querySelector("#gallery_track");
var viewport = document.querySelector("#gallery_viewer");
var prev = document.querySelector("#gallery_prev");
var next = document.querySelector("#gallery_next");
var images = ["assets/gallery/1.webp", "assets/gallery/2.webp", "assets/gallery/3.webp", "assets/gallery/4.webp", "assets/gallery/5.webp", "assets/gallery/6.webp", "assets/gallery/7.webp", "assets/gallery/8.webp", "assets/gallery/9.webp"];
images.forEach(function (src) {
  var slide = document.createElement("div");
  slide.className = "gallery_slides";
  var img = document.createElement("img");
  img.src = src;
  slide.appendChild(img);
  track.appendChild(slide);
});
var index = 3;
function showImage() {
  track.className = "slide-" + index;
}
next.addEventListener("click", function () {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
});
prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
});
showImage();
window.addEventListener("resize", showImage);

// ============================================= zoom preview ==============================================
var preview = document.querySelector("#image-preview");
var previewImage = document.querySelector("#preview-image");
document.querySelectorAll(".gallery_slides img").forEach(function (img) {
  img.onclick = function () {
    previewImage.src = img.src;
    preview.showModal();
  };
});
preview.onclick = function () {
  preview.close();
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \**********************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/sarasa-regular.ttf */ "./assets/fonts/sarasa-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/sarasa-bold.ttf */ "./assets/fonts/sarasa-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/wallpaper.jpg */ "./assets/wallpaper.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Your SCSS here. */
@font-face {
  font-family: "Sarasa UI SC";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Sarasa UI SC";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 316deg;
}
@property --gradient-midpoint {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}
* {
  box-sizing: border-box;
  font-family: "Sarasa UI SC", sans-serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: aquamarine;
  z-index: 10;
}

.navi_bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 32px;
  transition: padding 0.3s ease;
}

.avator {
  flex-shrink: 0;
}
.avator img {
  display: block;
  width: 56px;
  height: 56px;
  -o-object-fit: cover;
     object-fit: cover;
  transition: width 0.3s ease, height 0.3s ease;
}

.title {
  flex: 1;
}
.title h1 {
  font-size: 34px;
  transition: font-size 0.3s ease;
}

.navi_links {
  display: flex;
  font-size: 19px;
  transition: font-size 0.3s ease;
}
.navi_links a {
  flex: 0 0 50px;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 8px 12px;
  transition: color 0.1s, background-color 0.1s;
}
.navi_links a.active, .navi_links a:hover, .navi_links a:focus-visible {
  background-color: mediumaquamarine;
  font-weight: bold;
  color: white;
}

.social_icons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.social_icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: black;
  border-radius: 50%;
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
}
.social_icons a:hover, .social_icons a:focus-visible {
  color: white;
  background-color: mediumaquamarine;
}
.social_icons svg {
  display: block;
  width: 28px;
  height: 28px;
  transition: width 0.3s ease, height 0.3s ease;
}

header.is-scrolled .navi_bar {
  padding: 8px 32px;
}
header.is-scrolled .title h1 {
  font-size: 24px;
}
header.is-scrolled .avator img {
  width: 40px;
  height: 40px;
}
header.is-scrolled .navi_links {
  font-size: 16px;
}
header.is-scrolled .social_icons svg {
  width: 24px;
  height: 24px;
}

#about {
  color: white;
  border: none;
  margin: 0;
  padding: 40px 0;
  width: 100%;
  background: linear-gradient(var(--gradient-angle), #0693e3 0%, var(--gradient-midpoint), #cc8181 100%);
  animation: gradient-sway 7s ease-in-out infinite alternate;
}
#about #motto {
  width: 80%;
  max-width: 1080px;
  margin: 50px auto 0;
}
#about #motto h1 {
  margin-bottom: 0;
}
#about #reused_self_intro {
  width: 80%;
  max-width: 1140px;
  margin: 0 auto;
}
#about #reused_self_intro img {
  display: block;
  width: 100%;
  height: auto;
}

@keyframes gradient-sway {
  from {
    --gradient-angle: 316deg;
    --gradient-midpoint: 50%;
  }
  to {
    --gradient-angle: 516deg;
    --gradient-midpoint: 20%;
  }
}
#motto {
  font-weight: 700;
}

#video {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  min-height: 900px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#video #osu_video {
  display: block;
  padding-top: 25px;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: auto;
  max-height: 700px;
}
#video h1 {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  margin: 0;
  padding-top: 25px;
  color: aquamarine;
}

footer {
  width: 100%;
  text-align: center;
  bottom: 0;
  width: 100%;
  background-color: aquamarine;
  padding: 5px 10%;
}
footer #footer_grid {
  width: 80%;
  margin: 10px auto;
  -moz-column-count: 3;
       column-count: 3;
  -moz-column-gap: 0;
       column-gap: 0;
}
footer #footer_grid > div {
  display: flow-root;
  -moz-column-break-inside: avoid;
       break-inside: avoid;
}
footer #footer_grid > div + div {
  -moz-column-break-before: column;
       break-before: column;
}
footer #footer_text {
  border: 10px;
  border-color: black;
}

body {
  margin: 0;
}

section {
  padding: 35px 0;
}

#gallery {
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
#gallery #gallery_viewer {
  overflow: hidden;
}
#gallery #gallery_track {
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
}
#gallery #gallery_track.slide-0 {
  transform: translateX(10%);
}
#gallery #gallery_track.slide-1 {
  transform: translateX(-70%);
}
#gallery #gallery_track.slide-2 {
  transform: translateX(-150%);
}
#gallery #gallery_track.slide-3 {
  transform: translateX(-230%);
}
#gallery #gallery_track.slide-4 {
  transform: translateX(-310%);
}
#gallery #gallery_track.slide-5 {
  transform: translateX(-390%);
}
#gallery #gallery_track.slide-6 {
  transform: translateX(-470%);
}
#gallery #gallery_track.slide-7 {
  transform: translateX(-550%);
}
#gallery #gallery_track.slide-8 {
  transform: translateX(-630%);
}
#gallery .gallery_slides {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 80%;
  padding: 0 8px;
}
#gallery .gallery_slides img {
  display: block;
  width: 100%;
  height: clamp(220px, 60vh, 800px);
  -o-object-fit: cover;
     object-fit: cover;
}
#gallery button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 46px;
  border: none;
  background-color: aquamarine;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.1s, background-color 0.1s;
}
#gallery button:hover, #gallery button:focus-visible {
  color: white;
  background-color: mediumaquamarine;
}
#gallery #gallery_prev {
  left: 12px;
}
#gallery #gallery_next {
  right: 12px;
}

#image-preview {
  max-width: 95vw;
  max-height: 95vh;
  padding: 12px;
  border: none;
  cursor: zoom-out;
}
#image-preview p {
  text-align: center;
  top: 50%;
  transform: translateY(20%);
}
#image-preview img {
  display: block;
  max-width: 85vw;
  max-height: 80vh;
  margin: auto;
}
#image-preview::backdrop {
  background: rgba(0, 0, 0, 0.8);
  animation: fade-in 0.15s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.gallery_slides img {
  cursor: zoom-in;
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AAAA,oBAAA;AACA;EACI,2BAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAEA;EACI,2BAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;AAGA;EACI,iBAAA;EACA,eAAA;EACA,qBAAA;AADJ;AAIA;EACI,sBAAA;EACA,eAAA;EACA,kBAAA;AAFJ;AAKA;EACI,sBAAA;EACA,uCAAA;AAHJ;;AAMA;EACI,uBAAA;EACA,wBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,MAAA;EACA,WAAA;EACA,4BAAA;EAEA,WAAA;AAJJ;;AAOA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,kBAAA;EAEA,6BAAA;AALJ;;AAQA;EACI,cAAA;AALJ;AAOI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EAEA,6CAAA;AANR;;AAUA;EACI,OAAA;AAPJ;AASI;EACI,eAAA;EACA,+BAAA;AAPR;;AAWA;EACI,aAAA;EACA,eAAA;EACA,+BAAA;AARJ;AAUI;EACI,cAAA;EACA,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,6CAAA;AARR;AAUQ;EAGI,kCAAA;EACA,iBAAA;EACA,YAAA;AAVZ;;AAeA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAZJ;AAcI;EACI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,6CAAA;AAZR;AAcQ;EAEI,YAAA;EACA,kCAAA;AAbZ;AAkBI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EAEA,6CAAA;AAjBR;;AAsBI;EACI,iBAAA;AAnBR;AAsBI;EACI,eAAA;AApBR;AAuBI;EACI,WAAA;EACA,YAAA;AArBR;AAwBI;EACI,eAAA;AAtBR;AAyBI;EACI,WAAA;EACA,YAAA;AAvBR;;AA2BA;EACI,YAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EAEA,sGAAA;EAKA,0DAAA;AA7BJ;AA+BI;EACI,UAAA;EACA,iBAAA;EACA,mBAAA;AA7BR;AA+BQ;EACI,gBAAA;AA7BZ;AAiCI;EACI,UAAA;EACA,iBAAA;EACA,cAAA;AA/BR;AAiCQ;EACI,cAAA;EACA,WAAA;EACA,YAAA;AA/BZ;;AAoCA;EACI;IACI,wBAAA;IACA,wBAAA;EAjCN;EAoCE;IACI,wBAAA;IACA,wBAAA;EAlCN;AACF;AAqCA;EACI,gBAAA;AAnCJ;;AAsCA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,kBAAA;EACA,YAAA;EACA,iBAAA;EAYA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;AA/CJ;AAiCI;EACI,cAAA;EACA,iBAAA;EACA,sBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;AA/BR;AAwCI;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;AAtCR;;AA0CA;EAiBI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,4BAAA;EACA,gBAAA;AAvDJ;AAkCI;EACI,UAAA;EACA,iBAAA;EACA,oBAAA;OAAA,eAAA;EACA,kBAAA;OAAA,aAAA;AAhCR;AAkCQ;EACI,kBAAA;EACA,+BAAA;OAAA,mBAAA;AAhCZ;AAmCQ;EACI,gCAAA;OAAA,oBAAA;AAjCZ;AA4CI;EACI,YAAA;EACA,mBAAA;AA1CR;;AA2DA;EACI,SAAA;AAxDJ;;AA2DA;EACI,eAAA;AAxDJ;;AA2DA;EACI,kBAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAxDJ;AA0DI;EACI,gBAAA;AAxDR;AA2DI;EACI,aAAA;EACA,WAAA;EACA,+BAAA;AAzDR;AA6DQ;EACI,0BAAA;AA3DZ;AA8DQ;EACI,2BAAA;AA5DZ;AA+DQ;EACI,4BAAA;AA7DZ;AAgEQ;EACI,4BAAA;AA9DZ;AAiEQ;EACI,4BAAA;AA/DZ;AAkEQ;EACI,4BAAA;AAhEZ;AAmEQ;EACI,4BAAA;AAjEZ;AAoEQ;EACI,4BAAA;AAlEZ;AAqEQ;EACI,4BAAA;AAnEZ;AAuEI;EACI,YAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;AArER;AAuEQ;EACI,cAAA;EACA,WAAA;EACA,iCAAA;EACA,oBAAA;KAAA,iBAAA;AArEZ;AAyEI;EACI,kBAAA;EAEA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,4BAAA;EACA,eAAA;EACA,eAAA;EAEA,6CAAA;AA1ER;AA4EQ;EAEI,YAAA;EACA,kCAAA;AA3EZ;AA+EI;EACI,UAAA;AA7ER;AAgFI;EACI,WAAA;AA9ER;;AAkFA;EACI,eAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EAQA,gBAAA;AAtFJ;AAgFI;EACI,kBAAA;EACA,QAAA;EACA,0BAAA;AA9ER;AAmFI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;AAjFR;AAoFI;EACI,8BAAA;EACA,wBAAA;AAlFR;AAqFI;EACI;IACI,UAAA;EAnFV;EAsFM;IACI,UAAA;EApFV;AACF;;AAwFA;EACI,eAAA;AArFJ","sourcesContent":["/* Your SCSS here. */\r\n@font-face {\r\n    font-family: 'Sarasa UI SC';\r\n    src: url('../assets/fonts/sarasa-regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Sarasa UI SC';\r\n    src: url('../assets/fonts/sarasa-bold.ttf') format('truetype');\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\n@property --gradient-angle {\r\n    syntax: \"<angle>\";\r\n    inherits: false;\r\n    initial-value: 316deg;\r\n}\r\n\r\n@property --gradient-midpoint {\r\n    syntax: \"<percentage>\";\r\n    inherits: false;\r\n    initial-value: 50%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    font-family: 'Sarasa UI SC', sans-serif;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n    scroll-padding-top: 80px;\r\n}\r\n\r\nheader {\r\n    position: sticky;\r\n    top: 0;\r\n    width: 100%;\r\n    background-color: aquamarine;\r\n\r\n    z-index: 10;\r\n}\r\n\r\n.navi_bar {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 24px;\r\n    padding: 16px 32px;\r\n\r\n    transition: padding 0.3s ease;\r\n}\r\n\r\n.avator {\r\n    flex-shrink: 0;\r\n\r\n    img {\r\n        display: block;\r\n        width: 56px;\r\n        height: 56px;\r\n        object-fit: cover;\r\n\r\n        transition: width 0.3s ease, height 0.3s ease;\r\n    }\r\n}\r\n\r\n.title {\r\n    flex: 1;\r\n\r\n    h1 {\r\n        font-size: 34px;\r\n        transition: font-size 0.3s ease;\r\n    }\r\n}\r\n\r\n.navi_links {\r\n    display: flex;\r\n    font-size: 19px;\r\n    transition: font-size 0.3s ease;\r\n\r\n    a {\r\n        flex: 0 0 50px;\r\n        text-align: center;\r\n        color: black;\r\n        text-decoration: none;\r\n        padding: 8px 12px;\r\n        transition: color 0.1s, background-color 0.1s;\r\n\r\n        &.active,\r\n        &:hover,\r\n        &:focus-visible {\r\n            background-color: mediumaquamarine;\r\n            font-weight: bold;\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n\r\n.social_icons {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    a {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 40px;\r\n        height: 40px;\r\n        color: black;\r\n        border-radius: 50%;\r\n        text-decoration: none;\r\n        transition: color 0.2s, background-color 0.2s;\r\n\r\n        &:hover,\r\n        &:focus-visible {\r\n            color: white;\r\n            background-color: mediumaquamarine;\r\n        }\r\n\r\n    }\r\n\r\n    svg {\r\n        display: block;\r\n        width: 28px;\r\n        height: 28px;\r\n\r\n        transition: width 0.3s ease, height 0.3s ease;\r\n    }\r\n}\r\n\r\nheader.is-scrolled {\r\n    .navi_bar {\r\n        padding: 8px 32px;\r\n    }\r\n\r\n    .title h1 {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .avator img {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .navi_links {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .social_icons svg {\r\n        width: 24px;\r\n        height: 24px;\r\n    }\r\n}\r\n\r\n#about {\r\n    color: white;\r\n    border: none;\r\n    margin: 0;\r\n    padding: 40px 0;\r\n    width: 100%;\r\n\r\n    background: linear-gradient(var(--gradient-angle),\r\n            rgb(6, 147, 227) 0%,\r\n            var(--gradient-midpoint),\r\n            rgb(204, 129, 129) 100%);\r\n\r\n    animation: gradient-sway 7s ease-in-out infinite alternate;\r\n\r\n    #motto {\r\n        width: 80%;\r\n        max-width: 1080px;\r\n        margin: 50px auto 0;\r\n\r\n        h1 {\r\n            margin-bottom: 0;\r\n        }\r\n    }\r\n\r\n    #reused_self_intro {\r\n        width: 80%;\r\n        max-width: 1140px;\r\n        margin: 0 auto;\r\n\r\n        img {\r\n            display: block;\r\n            width: 100%;\r\n            height: auto;\r\n        }\r\n    }\r\n}\r\n\r\n@keyframes gradient-sway {\r\n    from {\r\n        --gradient-angle: 316deg;\r\n        --gradient-midpoint: 50%;\r\n    }\r\n\r\n    to {\r\n        --gradient-angle: 516deg;\r\n        --gradient-midpoint: 20%;\r\n    }\r\n}\r\n\r\n#motto {\r\n    font-weight: 700;\r\n}\r\n\r\n#video {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center;\r\n    height: auto;\r\n    min-height: 900px;\r\n\r\n    #osu_video {\r\n        display: block;\r\n        padding-top: 25px;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        max-width: 1200px;\r\n        height: auto;\r\n        max-height: 700px;\r\n    }\r\n\r\n    background-image: url('../assets/wallpaper.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n\r\n    h1 {\r\n        position: absolute;\r\n        top: 40px;\r\n        left: 0;\r\n        width: 100%;\r\n        margin: 0;\r\n        padding-top: 25px;\r\n        color: aquamarine;\r\n    }\r\n}\r\n\r\nfooter {\r\n    #footer_grid {\n        width: 80%;\n        margin: 10px auto;\n        column-count: 3;\n        column-gap: 0;\n\n        > div {\n            display: flow-root;\n            break-inside: avoid;\n        }\n\n        > div + div {\n            break-before: column;\n        }\n    }\n\r\n    width: 100%;\r\n    text-align: center;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: aquamarine;\r\n    padding: 5px 10%;\r\n\r\n    #footer_text {\r\n        border: 10px;\r\n        border-color: black;\r\n    }\r\n\r\n    // #end_text {\r\n    //     grid-column: 1/-1;\r\n    //     margin-top: 10px;\r\n    //     margin-bottom: 0px;\r\n    //     line-height: 1.8;\r\n    // }\r\n\r\n    // #end_slogan {\r\n    //     grid-column: 1/-1;\r\n    //     margin: auto;\r\n    //     line-height: 1.8;\r\n    // }\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\nsection {\r\n    padding: 35px 0;\r\n}\r\n\r\n#gallery {\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n\r\n    #gallery_viewer {\r\n        overflow: hidden;\r\n    }\r\n\r\n    #gallery_track {\r\n        display: flex;\r\n        width: 100%;\r\n        transition: transform 0.3s ease;\r\n    }\r\n\r\n    #gallery_track {\r\n        &.slide-0 {\r\n            transform: translateX(10%);\r\n        }\r\n\r\n        &.slide-1 {\r\n            transform: translateX(-70%);\r\n        }\r\n\r\n        &.slide-2 {\r\n            transform: translateX(-150%);\r\n        }\r\n\r\n        &.slide-3 {\r\n            transform: translateX(-230%);\r\n        }\r\n\r\n        &.slide-4 {\r\n            transform: translateX(-310%);\r\n        }\r\n\r\n        &.slide-5 {\r\n            transform: translateX(-390%);\r\n        }\r\n\r\n        &.slide-6 {\r\n            transform: translateX(-470%);\r\n        }\r\n\r\n        &.slide-7 {\r\n            transform: translateX(-550%);\r\n        }\r\n\r\n        &.slide-8 {\r\n            transform: translateX(-630%);\r\n        }\r\n    }\r\n\r\n    .gallery_slides {\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n        flex-basis: 80%;\r\n        padding: 0 8px;\r\n\r\n        img {\r\n            display: block;\r\n            width: 100%;\r\n            height: clamp(220px, 60vh, 800px);\r\n            object-fit: cover;\r\n        }\r\n    }\r\n\r\n    button {\r\n        position: absolute;\r\n\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        width: 36px;\r\n        height: 46px;\r\n\r\n        border: none;\r\n        background-color: aquamarine;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n\r\n        transition: color 0.1s, background-color 0.1s;\r\n\r\n        &:hover,\r\n        &:focus-visible {\r\n            color: white;\r\n            background-color: mediumaquamarine;\r\n        }\r\n    }\r\n\r\n    #gallery_prev {\r\n        left: 12px;\r\n    }\r\n\r\n    #gallery_next {\r\n        right: 12px;\r\n    }\r\n}\r\n\r\n#image-preview {\r\n    max-width: 95vw;\r\n    max-height: 95vh;\r\n    padding: 12px;\r\n    border: none;\r\n\r\n    p {\r\n        text-align: center;\r\n        top: 50%;\r\n        transform: translateY(20%);\r\n    }\r\n\r\n    cursor: zoom-out;\r\n\r\n    img {\r\n        display: block;\r\n        max-width: 85vw;\r\n        max-height: 80vh;\r\n        margin: auto;\r\n    }\r\n\r\n    &::backdrop {\r\n        background: rgba(0, 0, 0, 0.8);\r\n        animation: fade-in 0.15s;\r\n    }\r\n\r\n    @keyframes fade-in {\r\n        from {\r\n            opacity: 0;\r\n        }\r\n\r\n        to {\r\n            opacity: 1;\r\n        }\r\n    }\r\n}\r\n\r\n.gallery_slides img {\r\n    cursor: zoom-in;\r\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/avator.jpg */ "./assets/avator.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/reused-self-intro.png */ "./assets/reused-self-intro.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/osu.mp4 */ "./assets/osu.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>[MP1] Ruixuan's Portfolio</title>\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <nav class=\"navi_bar\">\r\n            <a class=\"avator\" href=\"/\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n            </a>\r\n\r\n            <div class=\"title\">\r\n                <h1>Ruixuan's Portfolio</h1>\r\n            </div>\r\n\r\n            <div class=\"navi_links\">\r\n                <a href=\"#about\">About</a>\r\n                <a href=\"#gallery\">Gallery</a>\r\n                <a href=\"#video\">Video</a>\r\n\r\n            </div>\r\n            <div class=\"social_icons\">\r\n                <a href=\"https://space.bilibili.com/14677116\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n                    title=\"BiliBili\">\r\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"\r\n                        stroke-linejoin=\"round\" aria-hidden=\"true\">\r\n                        <rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"3\" />\r\n                        <path d=\"M8 2l4 5 4-5 M8.5 12.5v3 M15.5 12.5v3\" />\r\n                    </svg>\r\n                </a>\r\n\r\n                <a href=\"https://github.com/Turtle233\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"GitHub\"\r\n                    title=\"GitHub\">\r\n                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                        <path d=\"M12 .297C5.37.297 0 5.67 0 12.297c0 5.303\r\n                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577\r\n                0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61\r\n                -.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729\r\n                1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305\r\n                3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334\r\n                -5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523\r\n                .105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405\r\n                c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23\r\n                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84\r\n                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92\r\n                .42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015\r\n                3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592\r\n                24 12.297c0-6.627-5.373-12-12-12\" />\r\n                    </svg>\r\n                </a>\r\n\r\n                <a href=\"https://www.facebook.com/RuixuanZhang233/\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n                    title=\"Facebook\">\r\n                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                        <path d=\"M24 12.073C24 5.405 18.627 0 12 0S0 5.405\r\n                0 12.073c0 6.026 4.388 11.021 10.125 11.927v-8.437\r\n                H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697\r\n                4.533-4.697 1.312 0 2.686.236 2.686.236v2.971\r\n                H15.83c-1.491 0-1.956.931-1.956 1.887v2.263\r\n                h3.328l-.532 3.49h-2.796V24C19.612 23.094\r\n                24 18.099 24 12.073z\" />\r\n                    </svg>\r\n                </a>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n\r\n    <section id=\"about\">\r\n        <div id=\"motto\">\r\n            <h1>慢品人间烟火色，闲观万事岁月长。<br>Savor slowly the world’s fleeting hues,\r\n                Observe calmly as time’s tale ensues.</h1>\r\n        </div>\r\n\r\n        <div id=\"reused_self_intro\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"gallery\">\r\n        <div id=\"gallery_viewer\">\r\n            <div id=\"gallery_track\"></div>\r\n        </div>\r\n\r\n        <button id=\"gallery_prev\" type=\"button\">&#10094</button>\r\n        <button id=\"gallery_next\" type=\"button\">&#10095</button>\r\n    </section>\r\n\r\n    <section id=\"video\">\r\n        <h1>PLAY osu! WITH ME!</h1>\r\n        <video controls id=\"osu_video\">\r\n            <source src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n        </video>\r\n    </section>\r\n\r\n\r\n    <footer>\r\n        <div id=\"footer_grid\">\r\n            <div id=\"footer_text\">\r\n                <h3>Course Info</h3>\r\n                <p>Fall 2026, CS409 Web Programming MP1</p>\r\n                <p>University of Illionis Urbana-Champaign</p>\r\n            </div>\r\n            <div id=\"contact_text\">\r\n                <h3>Contact me</h3>\r\n                <p>Email: rz44@illinois.edu</p>\r\n                <p>Phone: (918)-506-2859</p>\r\n            </div>\r\n            <div id=\"info_text\">\r\n                <h3>To the FUTURE</h3>\r\n                <p id=\"end_slogan\">過去から 未来へ</p>\r\n                <p id=\"end_text\">Designed by Ruixuan Zhang</p>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n\r\n    <dialog id=\"image-preview\">\r\n        <img id=\"preview-image\">\r\n        <p>Shot by Ruixuan Zhang</p>\r\n    </dialog>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./assets/osu.mp4"
/*!************************!*\
  !*** ./assets/osu.mp4 ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c6162c4c7d59c3ed2b19.mp4";

/***/ },

/***/ "./assets/avator.jpg"
/*!***************************!*\
  !*** ./assets/avator.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "199a69a1539c66f702eb.jpg";

/***/ },

/***/ "./assets/fonts/sarasa-bold.ttf"
/*!**************************************!*\
  !*** ./assets/fonts/sarasa-bold.ttf ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9c53b8248aa656439425.ttf";

/***/ },

/***/ "./assets/fonts/sarasa-regular.ttf"
/*!*****************************************!*\
  !*** ./assets/fonts/sarasa-regular.ttf ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8d14b4f4d7e939717b97.ttf";

/***/ },

/***/ "./assets/reused-self-intro.png"
/*!**************************************!*\
  !*** ./assets/reused-self-intro.png ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "38196b7c42667de7b4b8.png";

/***/ },

/***/ "./assets/wallpaper.jpg"
/*!******************************!*\
  !*** ./assets/wallpaper.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ca124f153bb057811718.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map