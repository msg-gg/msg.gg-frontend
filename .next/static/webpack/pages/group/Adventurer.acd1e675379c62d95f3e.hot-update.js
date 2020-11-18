webpackHotUpdate_N_E("pages/group/Adventurer",{

/***/ "./pages/group/Adventurer.js":
/*!***********************************!*\
  !*** ./pages/group/Adventurer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compornents/Header/header */ "./compornents/Header/header.js");
/* harmony import */ var _compornents_Footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compornents/Footer/footer */ "./compornents/Footer/footer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('hero'),
      job = _useState[0],
      setJob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState2[0],
      setNum = _useState2[1];

  var jobArr = ["hero", "darknight", "paladine", "arkmagetc", "arkmagefp", "bishop", "bowmaster", "marks", "pathfinder", "nightlord", "shadower", "dualblade", "viper", "captain", "cannonmaster"];
  var server = [{
    "en": "reboot",
    "ko": "리부트"
  }, {
    "en": "reboot",
    "ko": "리부트2"
  }, {
    "en": "red",
    "ko": "레드"
  }, {
    "en": "elysium",
    "ko": "엘리시움"
  }, {
    "en": "croa",
    "ko": "크로아"
  }, {
    "en": "zenith",
    "ko": "제니스"
  }, {
    "en": "aurora",
    "ko": "오로라"
  }, {
    "en": "bera",
    "ko": "베라"
  }, {
    "en": "union",
    "ko": "유니온"
  }, {
    "en": "nova",
    "ko": "노바"
  }, {
    "en": "scania",
    "ko": "스카니아"
  }, {
    "en": "luna",
    "ko": "루나"
  }, {
    "en": "enosis",
    "ko": "이노시스"
  }, {
    "en": "arcane",
    "ko": "아케인"
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setJob(jobArr[num]);
    var characterImg = document.querySelector(".character__img");
    var characterRect = document.querySelector(".character__rect");
    var characterSelecter = document.querySelector(".character");
    var characterName = document.querySelector(".character__name");
    var characterBg = document.querySelectorAll(".character__bg");
    characterBg.forEach(function (bg) {
      bg.style.opacity = "0";
    });
    characterBg[num].style.opacity = "1";
    characterImg.style.backgroundImage = "url(../../images/job/".concat(job, ".png)");
    characterName.style.backgroundImage = "url(../../images/name/".concat(job, ".png)");
    characterImg.style.transition = "0s";
    characterImg.style.width = "160vw";
    characterImg.style.height = "160vh";
    characterRect.style.transition = "0s";
    characterRect.style.width = "100%";
    characterRect.style.left = "-20%";
    characterSelecter.style.transition = ".5s";
    var oneBlock = -140;
    var translateX = num * oneBlock >= oneBlock * 2 ? 0 : (num - 2) * oneBlock < -1260 ? -1260 : (num - 2) * oneBlock;
    characterSelecter.style.transform = "translate3d(".concat(translateX, "px, 0px, 0px)");
    setTimeout(function () {
      characterImg.style.transition = ".8s";
      characterImg.style.width = "110vh";
      characterImg.style.height = "110vh";
      if (job == 'hero') characterImg.style.width = "150vh";

      if (job == 'pathfinder') {
        characterImg.style.width = "142vh";
        characterImg.style.height = "142vh";
      }

      if (job == 'darknight') {
        characterImg.style.width = "142vh";
        characterImg.style.height = "142vh";
      }

      characterRect.style.transition = "1s";
      characterRect.style.width = "30%";
      characterRect.style.left = "20%";
    }, 100);
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("script", {
    src: "/js/app.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg bg__hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "character__sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "character__group character__group__active pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Adventurer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 56
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 52
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Resistance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 56
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 50
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Grandis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 53
    }
  }, "\uADF8\uB780\uB514\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Zero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 50
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Kinesis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 53
    }
  }, "\uD0A4\uB124\uC2DC\uC2A4")))), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "character__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }), __jsx("table", {
    className: "character__stats__table text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, "\uC21C\uC704"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC\uB0B4 \uC720\uC800\uBE44\uC728"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, "1 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/reboot.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }), " \uB9AC\uBD80\uD2B8"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }, "2 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/reboot.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 41
    }
  }), " \uB9AC\uBD80\uD2B82"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }, "3 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/red.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 41
    }
  }), " \uB808\uB4DC"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  }, "4 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/elysium.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }), " \uC5D8\uB9AC\uC2DC\uC6C0"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 37
    }
  }, "5 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/croa.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 41
    }
  }), " \uD06C\uB85C\uC544"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 37
    }
  }, "6 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/zenith.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 41
    }
  }), " \uC81C\uB2C8\uC2A4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 37
    }
  }, "6 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/aurora.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 41
    }
  }), " \uC624\uB85C\uB77C"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 37
    }
  }, "7 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/bera.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 41
    }
  }), " \uBCA0\uB77C"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, "8 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/union.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }), " \uC720\uB2C8\uC628"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 37
    }
  }, "9 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/nova.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 41
    }
  }), " \uB178\uBC14"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 37
    }
  }, "1 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/scania.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }), " \uC2A4\uCE74\uB2C8\uC544"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 37
    }
  }, "1 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/luna.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 41
    }
  }), " \uB8E8\uB098"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 37
    }
  }, "1 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/enosis.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 41
    }
  }), " \uC774\uB178\uC2DC\uC2A4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, "dasasd")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, "1 "), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "sever__image",
    src: "../../images/world/arcane.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  }), " \uC544\uCF00\uC778"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 37
    }
  }, "dasasd"))))), __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "prev-btn",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0 ? 0 : num - 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 25
    }
  }, __jsx("li", {
    onClick: function onClick() {
      return setNum(0);
    },
    className: "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(1);
    },
    className: "darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(2);
    },
    className: "paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(3);
    },
    className: "arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(4);
    },
    className: "arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(5);
    },
    className: "bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(6);
    },
    className: "bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(7);
    },
    className: "marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(8);
    },
    className: "pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(9);
    },
    className: "nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(10);
    },
    className: "shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(11);
    },
    className: "dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(12);
    },
    className: "viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(13);
    },
    className: "captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(14);
    },
    className: "cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 29
    }
  }))), __jsx("img", {
    id: "next-btn",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }))));
};

_s(Index, "LOjtgfs3cm7QPM/uvPnBzZEYJu4=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiam9iIiwic2V0Sm9iIiwibnVtIiwic2V0TnVtIiwiam9iQXJyIiwic2VydmVyIiwidXNlRWZmZWN0IiwiY2hhcmFjdGVySW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhcmFjdGVyUmVjdCIsImNoYXJhY3RlclNlbGVjdGVyIiwiY2hhcmFjdGVyTmFtZSIsImNoYXJhY3RlckJnIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJiZyIsInN0eWxlIiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJvbmVCbG9jayIsInRyYW5zbGF0ZVgiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxNQUFELENBRGQ7QUFBQSxNQUNUQyxHQURTO0FBQUEsTUFDSkMsTUFESTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxDQUFELENBRmQ7QUFBQSxNQUVURyxHQUZTO0FBQUEsTUFFSkMsTUFGSTs7QUFJaEIsTUFBTUMsTUFBTSxHQUFHLENBQ1gsTUFEVyxFQUVYLFdBRlcsRUFHWCxVQUhXLEVBSVgsV0FKVyxFQUtYLFdBTFcsRUFNWCxRQU5XLEVBT1gsV0FQVyxFQVFYLE9BUlcsRUFTWCxZQVRXLEVBVVgsV0FWVyxFQVdYLFVBWFcsRUFZWCxXQVpXLEVBYVgsT0FiVyxFQWNYLFNBZFcsRUFlWCxjQWZXLENBQWY7QUFrQkEsTUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSSxVQUFPLFFBRFg7QUFFSSxVQUFPO0FBRlgsR0FEVyxFQUtYO0FBQ0ksVUFBTyxRQURYO0FBRUksVUFBTztBQUZYLEdBTFcsRUFTWDtBQUNJLFVBQU8sS0FEWDtBQUVJLFVBQU87QUFGWCxHQVRXLEVBYVg7QUFDSSxVQUFPLFNBRFg7QUFFSSxVQUFPO0FBRlgsR0FiVyxFQWlCWDtBQUNJLFVBQU8sTUFEWDtBQUVJLFVBQU87QUFGWCxHQWpCVyxFQXFCWDtBQUNJLFVBQU8sUUFEWDtBQUVJLFVBQU87QUFGWCxHQXJCVyxFQXlCWDtBQUNJLFVBQU8sUUFEWDtBQUVJLFVBQU87QUFGWCxHQXpCVyxFQTZCWDtBQUNJLFVBQU8sTUFEWDtBQUVJLFVBQU87QUFGWCxHQTdCVyxFQWlDWDtBQUNJLFVBQU8sT0FEWDtBQUVJLFVBQU87QUFGWCxHQWpDVyxFQXFDWDtBQUNJLFVBQU8sTUFEWDtBQUVJLFVBQU87QUFGWCxHQXJDVyxFQXlDWDtBQUNJLFVBQU8sUUFEWDtBQUVJLFVBQU87QUFGWCxHQXpDVyxFQTZDWDtBQUNJLFVBQU8sTUFEWDtBQUVJLFVBQU87QUFGWCxHQTdDVyxFQWlEWDtBQUNJLFVBQU8sUUFEWDtBQUVJLFVBQU87QUFGWCxHQWpEVyxFQXFEWDtBQUNJLFVBQU8sUUFEWDtBQUVJLFVBQVE7QUFGWixHQXJEVyxDQUFmO0FBNERBQyx5REFBUyxDQUFDLFlBQU07QUFDWkwsVUFBTSxDQUFDRyxNQUFNLENBQUNGLEdBQUQsQ0FBUCxDQUFOO0FBQ0EsUUFBSUssWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5CO0FBQ0EsUUFBSUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXBCO0FBQ0EsUUFBSUUsaUJBQWlCLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUF4QjtBQUNBLFFBQUlHLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFwQjtBQUNBLFFBQUlJLFdBQVcsR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxrQkFBbEI7QUFFQUQsZUFBVyxDQUFDRSxPQUFaLENBQW9CLFVBQUFDLEVBQUUsRUFBSTtBQUN0QkEsUUFBRSxDQUFDQyxLQUFILENBQVNDLE9BQVQsR0FBbUIsR0FBbkI7QUFDSCxLQUZEO0FBR0FMLGVBQVcsQ0FBQ1gsR0FBRCxDQUFYLENBQWlCZSxLQUFqQixDQUF1QkMsT0FBdkIsR0FBaUMsR0FBakM7QUFFQVgsZ0JBQVksQ0FBQ1UsS0FBYixDQUFtQkUsZUFBbkIsa0NBQTZEbkIsR0FBN0Q7QUFDQVksaUJBQWEsQ0FBQ0ssS0FBZCxDQUFvQkUsZUFBcEIsbUNBQStEbkIsR0FBL0Q7QUFFQU8sZ0JBQVksQ0FBQ1UsS0FBYixDQUFtQkcsVUFBbkIsR0FBZ0MsSUFBaEM7QUFDQWIsZ0JBQVksQ0FBQ1UsS0FBYixDQUFtQkksS0FBbkIsR0FBMkIsT0FBM0I7QUFDQWQsZ0JBQVksQ0FBQ1UsS0FBYixDQUFtQkssTUFBbkIsR0FBNEIsT0FBNUI7QUFFQVosaUJBQWEsQ0FBQ08sS0FBZCxDQUFvQkcsVUFBcEIsR0FBaUMsSUFBakM7QUFDQVYsaUJBQWEsQ0FBQ08sS0FBZCxDQUFvQkksS0FBcEIsR0FBNEIsTUFBNUI7QUFDQVgsaUJBQWEsQ0FBQ08sS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsTUFBM0I7QUFFQVoscUJBQWlCLENBQUNNLEtBQWxCLENBQXdCRyxVQUF4QixHQUFxQyxLQUFyQztBQUVBLFFBQUlJLFFBQVEsR0FBRyxDQUFDLEdBQWhCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHdkIsR0FBRyxHQUFHc0IsUUFBTixJQUFrQkEsUUFBUSxHQUFHLENBQTdCLEdBQWlDLENBQWpDLEdBQXFDLENBQUN0QixHQUFHLEdBQUcsQ0FBUCxJQUFZc0IsUUFBWixHQUF1QixDQUFDLElBQXhCLEdBQStCLENBQUMsSUFBaEMsR0FBdUMsQ0FBQ3RCLEdBQUcsR0FBRyxDQUFQLElBQVlzQixRQUF6RztBQUVBYixxQkFBaUIsQ0FBQ00sS0FBbEIsQ0FBd0JTLFNBQXhCLHlCQUFtREQsVUFBbkQ7QUFFQUUsY0FBVSxDQUFDLFlBQU07QUFDYnBCLGtCQUFZLENBQUNVLEtBQWIsQ0FBbUJHLFVBQW5CLEdBQWdDLEtBQWhDO0FBQ0FiLGtCQUFZLENBQUNVLEtBQWIsQ0FBbUJJLEtBQW5CLEdBQTJCLE9BQTNCO0FBQ0FkLGtCQUFZLENBQUNVLEtBQWIsQ0FBbUJLLE1BQW5CLEdBQTRCLE9BQTVCO0FBQ0EsVUFBR3RCLEdBQUcsSUFBSSxNQUFWLEVBQWtCTyxZQUFZLENBQUNVLEtBQWIsQ0FBbUJJLEtBQW5CLEdBQTJCLE9BQTNCOztBQUNsQixVQUFHckIsR0FBRyxJQUFJLFlBQVYsRUFBd0I7QUFBRU8sb0JBQVksQ0FBQ1UsS0FBYixDQUFtQkksS0FBbkIsR0FBMkIsT0FBM0I7QUFBb0NkLG9CQUFZLENBQUNVLEtBQWIsQ0FBbUJLLE1BQW5CLEdBQTRCLE9BQTVCO0FBQXNDOztBQUNwRyxVQUFHdEIsR0FBRyxJQUFJLFdBQVYsRUFBdUI7QUFBRU8sb0JBQVksQ0FBQ1UsS0FBYixDQUFtQkksS0FBbkIsR0FBMkIsT0FBM0I7QUFBb0NkLG9CQUFZLENBQUNVLEtBQWIsQ0FBbUJLLE1BQW5CLEdBQTRCLE9BQTVCO0FBQXNDOztBQUVuR1osbUJBQWEsQ0FBQ08sS0FBZCxDQUFvQkcsVUFBcEIsR0FBaUMsSUFBakM7QUFDQVYsbUJBQWEsQ0FBQ08sS0FBZCxDQUFvQkksS0FBcEIsR0FBNEIsS0FBNUI7QUFDQVgsbUJBQWEsQ0FBQ08sS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsS0FBM0I7QUFDSCxLQVhTLEVBV1AsR0FYTyxDQUFWO0FBWUgsR0EzQ1EsQ0FBVDtBQTZDQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxtQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsb0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQ0ksUUFBSSxFQUFDLHFGQURUO0FBRUksT0FBRyxFQUFDLFlBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBUUk7QUFBUSxPQUFHLEVBQUMsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESixFQVdJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQWFJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixFQWdCSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLEVBaUJJO0FBQUksYUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBL0IsQ0FESixDQURKLEVBSUk7QUFBSSxhQUFTLEVBQUMsaURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBM0IsQ0FESixDQUpKLEVBT0k7QUFBSSxhQUFTLEVBQUMsaURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQjtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQS9CLENBREosQ0FQSixFQVVJO0FBQUksYUFBUyxFQUFDLGlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXpCLENBREosQ0FWSixFQWFJO0FBQUksYUFBUyxFQUFDLGlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEI7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUE1QixDQURKLENBYkosRUFnQkk7QUFBSSxhQUFTLEVBQUMsaURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBekIsQ0FESixDQWhCSixFQW1CSTtBQUFJLGFBQVMsRUFBQyxpREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBNUIsQ0FESixDQW5CSixDQWpCSixFQXdDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sYUFBUyxFQUFDLG9DQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBSEosQ0FESixDQURKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsK0JBQWxDO0FBQWtFLE9BQUcsRUFBQyxFQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosd0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FESixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsK0JBQWxDO0FBQWtFLE9BQUcsRUFBQyxFQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUoseUJBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FOSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsNEJBQWxDO0FBQStELE9BQUcsRUFBQyxFQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosa0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FYSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLGdDQUFsQztBQUFtRSxPQUFHLEVBQUMsRUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLDhCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBaEJKLEVBcUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsNkJBQWxDO0FBQWdFLE9BQUcsRUFBQyxFQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosd0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FyQkosRUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBQywrQkFBbEM7QUFBa0UsT0FBRyxFQUFDLEVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSix3QkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQTFCSixFQStCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLCtCQUFsQztBQUFrRSxPQUFHLEVBQUMsRUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLHdCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBL0JKLEVBb0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsNkJBQWxDO0FBQWdFLE9BQUcsRUFBQyxFQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosa0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FwQ0osRUF5Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBQyw4QkFBbEM7QUFBaUUsT0FBRyxFQUFDLEVBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSix3QkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQXpDSixFQThDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLDZCQUFsQztBQUFnRSxPQUFHLEVBQUMsRUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLGtCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBOUNKLEVBbURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsK0JBQWxDO0FBQWtFLE9BQUcsRUFBQyxFQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosOEJBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FuREosRUF3REk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBQyw2QkFBbEM7QUFBZ0UsT0FBRyxFQUFDLEVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixrQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQXhESixFQTZESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLCtCQUFsQztBQUFrRSxPQUFHLEVBQUMsRUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLDhCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLENBN0RKLEVBa0VJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUMsK0JBQWxDO0FBQWtFLE9BQUcsRUFBQyxFQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosd0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FsRUosQ0FSSixDQUZKLENBREosRUFxRkk7QUFBSyxNQUFFLEVBQUV2QixHQUFUO0FBQWMsYUFBUyxFQUFDLGdCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckZKLENBeENKLEVBK0hJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLE9BQUcsRUFBQyw4QkFBdkI7QUFBc0QsV0FBTyxFQUFFO0FBQUEsYUFBSUcsTUFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCQSxHQUFHLEdBQUcsQ0FBekIsQ0FBVjtBQUFBLEtBQS9EO0FBQXNHLE9BQUcsRUFBQyxFQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQWFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURKLENBRkosRUFxQkk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUMsK0JBQXZCO0FBQXVELFdBQU8sRUFBRTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQU4sR0FBVUUsTUFBTSxDQUFDd0IsTUFBUCxHQUFnQixDQUExQixHQUE4QnhCLE1BQU0sQ0FBQ3dCLE1BQVAsR0FBZ0IsQ0FBOUMsR0FBa0QxQixHQUFHLEdBQUcsQ0FBekQsQ0FBVjtBQUFBLEtBQWhFO0FBQXVJLE9BQUcsRUFBQyxFQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBL0hKLENBWkosQ0FESjtBQXNLSCxDQXJTRDs7R0FBTUosSzs7S0FBQUEsSztBQXVTU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5hY2QxZTY3NTM3OWM2MmQ5NWYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvRm9vdGVyL2Zvb3RlclwiXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtqb2IsIHNldEpvYl0gPSB1c2VTdGF0ZSgnaGVybycpO1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGpvYkFyciA9IFtcclxuICAgICAgICBcImhlcm9cIiwgXHJcbiAgICAgICAgXCJkYXJrbmlnaHRcIiwgXHJcbiAgICAgICAgXCJwYWxhZGluZVwiLFxyXG4gICAgICAgIFwiYXJrbWFnZXRjXCIsXHJcbiAgICAgICAgXCJhcmttYWdlZnBcIixcclxuICAgICAgICBcImJpc2hvcFwiLFxyXG4gICAgICAgIFwiYm93bWFzdGVyXCIsXHJcbiAgICAgICAgXCJtYXJrc1wiLFxyXG4gICAgICAgIFwicGF0aGZpbmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRsb3JkXCIsXHJcbiAgICAgICAgXCJzaGFkb3dlclwiLFxyXG4gICAgICAgIFwiZHVhbGJsYWRlXCIsXHJcbiAgICAgICAgXCJ2aXBlclwiLFxyXG4gICAgICAgIFwiY2FwdGFpblwiLFxyXG4gICAgICAgIFwiY2Fubm9ubWFzdGVyXCJcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBzZXJ2ZXIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVuXCIgOiBcInJlYm9vdFwiLFxyXG4gICAgICAgICAgICBcImtvXCIgOiBcIuumrOu2gO2KuFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwicmVib290XCIsXHJcbiAgICAgICAgICAgIFwia29cIiA6IFwi66as67aA7Yq4MlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwicmVkXCIsXHJcbiAgICAgICAgICAgIFwia29cIiA6IFwi66CI65OcXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlblwiIDogXCJlbHlzaXVtXCIsXHJcbiAgICAgICAgICAgIFwia29cIiA6IFwi7JeY66as7Iuc7JuAXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlblwiIDogXCJjcm9hXCIsXHJcbiAgICAgICAgICAgIFwia29cIiA6IFwi7YGs66Gc7JWEXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlblwiIDogXCJ6ZW5pdGhcIixcclxuICAgICAgICAgICAgXCJrb1wiIDogXCLsoJzri4jsiqRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVuXCIgOiBcImF1cm9yYVwiLFxyXG4gICAgICAgICAgICBcImtvXCIgOiBcIuyYpOuhnOudvFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwiYmVyYVwiLFxyXG4gICAgICAgICAgICBcImtvXCIgOiBcIuuyoOudvFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwidW5pb25cIixcclxuICAgICAgICAgICAgXCJrb1wiIDogXCLsnKDri4jsmKhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVuXCIgOiBcIm5vdmFcIixcclxuICAgICAgICAgICAgXCJrb1wiIDogXCLrhbjrsJRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVuXCIgOiBcInNjYW5pYVwiLFxyXG4gICAgICAgICAgICBcImtvXCIgOiBcIuyKpOy5tOuLiOyVhFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwibHVuYVwiLFxyXG4gICAgICAgICAgICBcImtvXCIgOiBcIuujqOuCmFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW5cIiA6IFwiZW5vc2lzXCIsXHJcbiAgICAgICAgICAgIFwia29cIiA6IFwi7J2064W47Iuc7IqkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlblwiIDogXCJhcmNhbmVcIixcclxuICAgICAgICAgICAgXCJrb1wiIDogIFwi7JWE7LyA7J24XCJcclxuICAgICAgICB9ICAgICAgXHJcbiBcclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEpvYihqb2JBcnJbbnVtXSk7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyU2VsZWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3RlclwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19uYW1lXCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaGFyYWN0ZXJfX2JnYCk7IFxyXG5cclxuICAgICAgICBjaGFyYWN0ZXJCZy5mb3JFYWNoKGJnID0+IHtcclxuICAgICAgICAgICAgYmcuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2hhcmFjdGVyQmdbbnVtXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9qb2IvJHtqb2J9LnBuZylgO1xyXG4gICAgICAgIGNoYXJhY3Rlck5hbWUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvbmFtZS8ke2pvYn0ucG5nKWA7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTYwdndcIjtcclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNjB2aFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS5sZWZ0ID0gXCItMjAlXCI7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlclNlbGVjdGVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG5cclxuICAgICAgICBsZXQgb25lQmxvY2sgPSAtMTQwXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiBvbmVCbG9jayA+PSBvbmVCbG9jayAqIDIgPyAwIDogKG51bSAtIDIpICogb25lQmxvY2sgPCAtMTI2MCA/IC0xMjYwIDogKG51bSAtIDIpICogb25lQmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMHB4LCAwcHgpYDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2hlcm8nKSBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE1MHZoXCI7IFxyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ3BhdGhmaW5kZXInKSB7IGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjsgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTQydmhcIjsgfVxyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2RhcmtuaWdodCcpIHsgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNDJ2aFwiOyBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNDJ2aFwiOyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS53aWR0aCA9IFwiMzAlXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUubGVmdCA9IFwiMjAlXCI7XHJcbiAgICAgICAgfSwgMTAwKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2pvYi9qb2IuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19oZXJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3BhbGFkaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2RhcmtuaWdodFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19iaXNob3BcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYXJrbWFnZXRjXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Fya21hZ2VmcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19ib3dtYXN0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fbWFya3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fcGF0aGZpbmRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19uaWdodGxvcmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fc2hhZG93ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fZHVhbGJsYWRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3ZpcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2NhcHRhaW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fY2Fubm9ubWFzdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fcmVjdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX2FjdGl2ZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvQWR2ZW50dXJlclwiPjxhIGhyZWY9XCIjXCI+66qo7ZeY6rCAPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0N5Z251c1wiPjxhIGhyZWY9XCIjXCI+7Iuc6re464SI7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL1Jlc2lzdGFuY2VcIj48YSBocmVmPVwiI1wiPuugiOyngOyKpO2DleyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9IZXJvXCI+PGEgaHJlZj1cIiNcIj7smIHsm4U8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvR3JhbmRpc1wiPjxhIGhyZWY9XCIjXCI+6re4656A65SU7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL1plcm9cIj48YSBocmVmPVwiI1wiPuygnOuhnDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9LaW5lc2lzXCI+PGEgaHJlZj1cIiNcIj7tgqTrhKTsi5zsiqQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX21haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX25hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc3RhdHNfX3RhYmxlIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7siJzsnIQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+7JuU65OcPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuyblOuTnOuCtCDsnKDsoIDruYTsnKg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwic2V2ZXJfX2ltYWdlXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL3JlYm9vdC5naWZcIiBhbHQ9XCJcIi8+IOumrOu2gO2KuDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MiA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvcmVib290LmdpZlwiIGFsdD1cIlwiLz4g66as67aA7Yq4MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvcmVkLmdpZlwiIGFsdD1cIlwiLz4g66CI65OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmRhc2FzZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD40IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInNldmVyX19pbWFnZVwiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9lbHlzaXVtLmdpZlwiIGFsdD1cIlwiLz4g7JeY66as7Iuc7JuAPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmRhc2FzZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD41IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInNldmVyX19pbWFnZVwiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9jcm9hLmdpZlwiIGFsdD1cIlwiLz4g7YGs66Gc7JWEPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmRhc2FzZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD42IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInNldmVyX19pbWFnZVwiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC96ZW5pdGguZ2lmXCIgYWx0PVwiXCIvPiDsoJzri4jsiqQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZGFzYXNkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjYgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwic2V2ZXJfX2ltYWdlXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL2F1cm9yYS5naWZcIiBhbHQ9XCJcIi8+IOyYpOuhnOudvDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvYmVyYS5naWZcIiBhbHQ9XCJcIi8+IOuyoOudvDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+OCA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvdW5pb24uZ2lmXCIgYWx0PVwiXCIvPiDsnKDri4jsmKg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZGFzYXNkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjkgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwic2V2ZXJfX2ltYWdlXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL25vdmEuZ2lmXCIgYWx0PVwiXCIvPiDrhbjrsJQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZGFzYXNkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwic2V2ZXJfX2ltYWdlXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL3NjYW5pYS5naWZcIiBhbHQ9XCJcIi8+IOyKpOy5tOuLiOyVhDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvbHVuYS5naWZcIiBhbHQ9XCJcIi8+IOujqOuCmDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXNhc2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXZlcl9faW1hZ2VcIiBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvZW5vc2lzLmdpZlwiIGFsdD1cIlwiLz4g7J2064W47Iuc7IqkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmRhc2FzZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInNldmVyX19pbWFnZVwiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9hcmNhbmUuZ2lmXCIgYWx0PVwiXCIvPiDslYTsvIDsnbg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZGFzYXNkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtqb2J9IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9faW1nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zZWxlY3QgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvbGVmdC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXJhY3RlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMCl9IGNsYXNzTmFtZT1cImhlcm9cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxKX0gY2xhc3NOYW1lPVwiZGFya25pZ2h0XCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMil9IGNsYXNzTmFtZT1cInBhbGFkaW5lXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMyl9IGNsYXNzTmFtZT1cImFya21hZ2V0Y1wiPjwvbGk+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDQpfSBjbGFzc05hbWU9XCJhcmttYWdlZnBcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg1KX0gY2xhc3NOYW1lPVwiYmlzaG9wXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNil9IGNsYXNzTmFtZT1cImJvd21hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDcpfSBjbGFzc05hbWU9XCJtYXJrc1wiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDgpfSBjbGFzc05hbWU9XCJwYXRoZmluZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOSl9IGNsYXNzTmFtZT1cIm5pZ2h0bG9yZFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEwKX0gY2xhc3NOYW1lPVwic2hhZG93ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMSl9IGNsYXNzTmFtZT1cImR1YWxibGFkZVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEyKX0gY2xhc3NOYW1lPVwidmlwZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMyl9IGNsYXNzTmFtZT1cImNhcHRhaW5cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxNCl9IGNsYXNzTmFtZT1cImNhbm5vbm1hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm5leHQtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSArIDEgPiBqb2JBcnIubGVuZ3RoIC0gMSA/IGpvYkFyci5sZW5ndGggLSAxIDogbnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==