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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _compornents_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../compornents/Sidebar */ "./compornents/Sidebar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Adventurer = function Adventurer(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  if (router.query.num == undefined) router.query.num = 0;else router.query.num = par;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      job = _useState[0],
      setJob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.query.num),
      num = _useState2[0],
      setNum = _useState2[1];

  var jobArr = ["hero", "paladine", "darknight", "arkmagetc", "arkmagefp", "bishop", "bowmaster", "marks", "pathfinder", "nightlord", "shadower", "dualblade", "viper", "captain", "cannonmaster"];
  var ratio = [4.50, 4.08, 3.59, 3.47, 3.43, 3.41, 3.41, 3.37, 3.36, 3.35, 3.34, 3.33, 3.09, 2.98];
  var server = [{
    en: "reboot",
    ko: "리부트"
  }, {
    en: "reboot",
    ko: "리부트2"
  }, {
    en: "red",
    ko: "레드"
  }, {
    en: "elysium",
    ko: "엘리시움"
  }, {
    en: "croa",
    ko: "크로아"
  }, {
    en: "zenith",
    ko: "제니스"
  }, {
    en: "aurora",
    ko: "오로라"
  }, {
    en: "bera",
    ko: "베라"
  }, {
    en: "union",
    ko: "유니온"
  }, {
    en: "nova",
    ko: "노바"
  }, {
    en: "scania",
    ko: "스카니아"
  }, {
    en: "luna",
    ko: "루나"
  }, {
    en: "enosis",
    ko: "이노시스"
  }, {
    en: "arcane",
    ko: "아케인"
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(num);
    setJob(jobArr[num]);
    var characterImg = document.querySelector(".character__img");
    var characterRect = document.querySelector(".character__rect");
    var characterSelecter = document.querySelector(".character");
    var characterName = document.querySelector(".character__name");
    var characterBg = document.querySelectorAll(".character__bg");
    var serverArea = document.querySelector(".server__area");
    characterBg.forEach(function (bg) {
      bg.style.opacity = "0";
    });
    characterBg[num].style.opacity = "1";
    serverArea.innerHTML = "";
    var max = ratio[0];
    server.forEach(function (world, i) {
      var tr = document.createElement("tr");
      var width = 100 * ratio[i] / max;
      tr.innerHTML = "\n                            <td>".concat(i + 1, " </td>\n                            <td><img className=\"sever__image\" style=\"margin-right: .5em;\" src=\"../../images/world/").concat(world.en, ".gif\" alt=\"\"/> ").concat(world.ko, "</td>\n                            <td>\n                                <div class=\"progress\" style=\"min-width: 180px;\" >\n                                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(width, "%;\">").concat(ratio[i], "%</div>\n                                </div>\n                            </td>");
      serverArea.appendChild(tr);
    });
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
    characterSelecter.style.transform = "translateX(".concat(translateX, "px)");
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
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg bg__hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "character__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }), __jsx("table", {
    className: "character__stats__table text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, "\uC21C\uC704"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC\uB0B4 \uC720\uC800\uBE44\uC728"))), __jsx("tbody", {
    className: "server__area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }))), __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(1);
    },
    className: "paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(2);
    },
    className: "darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
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
      lineNumber: 178,
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
      lineNumber: 179,
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
      lineNumber: 180,
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
      lineNumber: 181,
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
      lineNumber: 182,
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
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 185,
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
      lineNumber: 186,
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
      lineNumber: 187,
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
      lineNumber: 188,
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
      lineNumber: 191,
      columnNumber: 21
    }
  }))));
};

_s(Adventurer, "xAiti/MxJnFETqW5f6HZCSy1xbs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Adventurer;
/* harmony default export */ __webpack_exports__["default"] = (Adventurer);

var _c;

$RefreshReg$(_c, "Adventurer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJBZHZlbnR1cmVyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsIm51bSIsInVuZGVmaW5lZCIsInBhciIsInVzZVN0YXRlIiwiam9iIiwic2V0Sm9iIiwic2V0TnVtIiwiam9iQXJyIiwicmF0aW8iLCJzZXJ2ZXIiLCJlbiIsImtvIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNoYXJhY3RlckltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYXJhY3RlclJlY3QiLCJjaGFyYWN0ZXJTZWxlY3RlciIsImNoYXJhY3Rlck5hbWUiLCJjaGFyYWN0ZXJCZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXJ2ZXJBcmVhIiwiZm9yRWFjaCIsImJnIiwic3R5bGUiLCJvcGFjaXR5IiwiaW5uZXJIVE1MIiwibWF4Iiwid29ybGQiLCJpIiwidHIiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zaXRpb24iLCJoZWlnaHQiLCJsZWZ0Iiwib25lQmxvY2siLCJ0cmFuc2xhdGVYIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsR0FBYixJQUFvQkMsU0FBdkIsRUFDSUosTUFBTSxDQUFDRSxLQUFQLENBQWFDLEdBQWIsR0FBbUIsQ0FBbkIsQ0FESixLQUdJSCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsR0FBYixHQUFt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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQWFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURKLENBRkosRUFxQkk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUMsK0JBQXZCO0FBQXVELFdBQU8sRUFBRTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ04sR0FBRyxHQUFHLENBQU4sR0FBVU8sTUFBTSxDQUFDcUMsTUFBUCxHQUFnQixDQUExQixHQUE4QnJDLE1BQU0sQ0FBQ3FDLE1BQVAsR0FBZ0IsQ0FBOUMsR0FBa0Q1QyxHQUFHLEdBQUcsQ0FBekQsQ0FBVjtBQUFBLEtBQWhFO0FBQXVJLE9BQUcsRUFBQyxFQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBbkNKLENBWEosQ0FESjtBQXlFSCxDQTVMRDs7R0FBTUwsVTtVQUNhRyxxRDs7O0tBRGJILFU7QUE4TFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwL0FkdmVudHVyZXIuMTRkOGFiM2Q0ZjgxNjAzYTlmZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvU2lkZWJhclwiO1xyXG5cclxuY29uc3QgQWR2ZW50dXJlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBpZihyb3V0ZXIucXVlcnkubnVtID09IHVuZGVmaW5lZCkgXHJcbiAgICAgICAgcm91dGVyLnF1ZXJ5Lm51bSA9IDA7XHJcbiAgICBlbHNlIFxyXG4gICAgICAgIHJvdXRlci5xdWVyeS5udW0gPSBwYXJcclxuXHJcbiAgICBjb25zdCBbam9iLCBzZXRKb2JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5Lm51bSk7XHJcblxyXG4gICAgY29uc3Qgam9iQXJyID0gW1xyXG4gICAgICAgIFwiaGVyb1wiLCBcclxuICAgICAgICBcInBhbGFkaW5lXCIsXHJcbiAgICAgICAgXCJkYXJrbmlnaHRcIiwgXHJcbiAgICAgICAgXCJhcmttYWdldGNcIixcclxuICAgICAgICBcImFya21hZ2VmcFwiLFxyXG4gICAgICAgIFwiYmlzaG9wXCIsXHJcbiAgICAgICAgXCJib3dtYXN0ZXJcIixcclxuICAgICAgICBcIm1hcmtzXCIsXHJcbiAgICAgICAgXCJwYXRoZmluZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodGxvcmRcIixcclxuICAgICAgICBcInNoYWRvd2VyXCIsXHJcbiAgICAgICAgXCJkdWFsYmxhZGVcIixcclxuICAgICAgICBcInZpcGVyXCIsXHJcbiAgICAgICAgXCJjYXB0YWluXCIsXHJcbiAgICAgICAgXCJjYW5ub25tYXN0ZXJcIlxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHJhdGlvID0gW1xyXG4gICAgICAgIDQuNTAsIDQuMDgsIDMuNTksIDMuNDcsIDMuNDMsIDMuNDEsIDMuNDEsIDMuMzcsIDMuMzYsIDMuMzUsIDMuMzQsIDMuMzMsIDMuMDksIDIuOThcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2VydmVyID0gW1xyXG4gICAgICAgIHsgZW4gOiBcInJlYm9vdFwiLCBrbyA6IFwi66as67aA7Yq4XCIgfSxcclxuICAgICAgICB7IGVuIDogXCJyZWJvb3RcIiwga28gOiBcIuumrOu2gO2KuDJcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInJlZFwiLCBrbyA6IFwi66CI65OcXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJlbHlzaXVtXCIsIGtvIDogXCLsl5jrpqzsi5zsm4BcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImNyb2FcIiwga28gOiBcIu2BrOuhnOyVhFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiemVuaXRoXCIsIGtvIDogXCLsoJzri4jsiqRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImF1cm9yYVwiLCBrbyA6IFwi7Jik66Gc6528XCIgfSxcclxuICAgICAgICB7IGVuIDogXCJiZXJhXCIsIGtvIDogXCLrsqDrnbxcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInVuaW9uXCIsIGtvIDogXCLsnKDri4jsmKhcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcIm5vdmFcIiwga28gOiBcIuuFuOuwlFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwic2NhbmlhXCIsIGtvIDogXCLsiqTsubTri4jslYRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImx1bmFcIiwga28gOiBcIuujqOuCmFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiZW5vc2lzXCIsIGtvIDogXCLsnbTrhbjsi5zsiqRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImFyY2FuZVwiLCBrbyA6ICBcIuyVhOy8gOyduFwiIH0gICAgICBcclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG51bSlcclxuICAgICAgICBzZXRKb2Ioam9iQXJyW251bV0pO1xyXG5cclxuICAgICAgICBsZXQgY2hhcmFjdGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX2ltZ1wiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyUmVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19yZWN0XCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJTZWxlY3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyXCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX25hbWVcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNoYXJhY3Rlcl9fYmdgKTsgXHJcbiAgICAgICAgbGV0IHNlcnZlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZlcl9fYXJlYVwiKTtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVyQmcuZm9yRWFjaChiZyA9PiB7XHJcbiAgICAgICAgICAgIGJnLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNoYXJhY3RlckJnW251bV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNlcnZlckFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IG1heCA9IHJhdGlvWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNlcnZlci5mb3JFYWNoKCh3b3JsZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9ICgxMDAgKiByYXRpb1tpXSkgLyBtYXg7IFxyXG4gICAgICAgICAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInNldmVyX19pbWFnZVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAuNWVtO1wiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC8ke3dvcmxkLmVufS5naWZcIiBhbHQ9XCJcIi8+ICR7d29ybGQua299PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cIm1pbi13aWR0aDogMTgwcHg7XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogJHt3aWR0aH0lO1wiPiR7cmF0aW9baV19JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5gO1xyXG4gICAgICAgICAgICBzZXJ2ZXJBcmVhLmFwcGVuZENoaWxkKHRyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9qb2IvJHtqb2J9LnBuZylgO1xyXG4gICAgICAgIGNoYXJhY3Rlck5hbWUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvbmFtZS8ke2pvYn0ucG5nKWA7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTYwdndcIjtcclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNjB2aFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS5sZWZ0ID0gXCItMjAlXCI7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlclNlbGVjdGVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG5cclxuICAgICAgICBsZXQgb25lQmxvY2sgPSAtMTQwO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gbnVtICogb25lQmxvY2sgPj0gb25lQmxvY2sgKiAyID8gMCA6IChudW0gLSAyKSAqIG9uZUJsb2NrIDwgLTEyNjAgPyAtMTI2MCA6IChudW0gLSAyKSAqIG9uZUJsb2NrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYXJhY3RlclNlbGVjdGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjExMHZoXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjExMHZoXCI7XHJcbiAgICAgICAgICAgIGlmKGpvYiA9PSAnaGVybycpIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTUwdmhcIjsgXHJcbiAgICAgICAgICAgIGlmKGpvYiA9PSAncGF0aGZpbmRlcicpIHsgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNDJ2aFwiOyBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNDJ2aFwiOyB9XHJcbiAgICAgICAgICAgIGlmKGpvYiA9PSAnZGFya25pZ2h0JykgeyBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE0MnZoXCI7IGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE0MnZoXCI7IH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLndpZHRoID0gXCIzMCVcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcclxuICAgICAgICB9LCAxMDApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvam9iL2pvYi5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19oZXJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3BhbGFkaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2RhcmtuaWdodFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19iaXNob3BcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYXJrbWFnZXRjXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Fya21hZ2VmcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19ib3dtYXN0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fbWFya3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fcGF0aGZpbmRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19uaWdodGxvcmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fc2hhZG93ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fZHVhbGJsYWRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3ZpcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2NhcHRhaW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fY2Fubm9ubWFzdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fcmVjdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgdGl0bGU9XCJncm91cFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fbmFtZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zdGF0c19fdGFibGUgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuyInOychDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7sm5Trk5w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+7JuU65Oc64K0IOycoOyggOu5hOycqDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInNlcnZlcl9fYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17am9ifSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2ltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc2VsZWN0IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInByZXYtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL2xlZnQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtIC0gMSA8IDAgPyAwIDogbnVtIC0gMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGFyYWN0ZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDApfSBjbGFzc05hbWU9XCJoZXJvXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMSl9IGNsYXNzTmFtZT1cInBhbGFkaW5lXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMil9IGNsYXNzTmFtZT1cImRhcmtuaWdodFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDMpfSBjbGFzc05hbWU9XCJhcmttYWdldGNcIj48L2xpPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg0KX0gY2xhc3NOYW1lPVwiYXJrbWFnZWZwXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNSl9IGNsYXNzTmFtZT1cImJpc2hvcFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDYpfSBjbGFzc05hbWU9XCJib3dtYXN0ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg3KX0gY2xhc3NOYW1lPVwibWFya3NcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg4KX0gY2xhc3NOYW1lPVwicGF0aGZpbmRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDkpfSBjbGFzc05hbWU9XCJuaWdodGxvcmRcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMCl9IGNsYXNzTmFtZT1cInNoYWRvd2VyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTEpfSBjbGFzc05hbWU9XCJkdWFsYmxhZGVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMil9IGNsYXNzTmFtZT1cInZpcGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTMpfSBjbGFzc05hbWU9XCJjYXB0YWluXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTQpfSBjbGFzc05hbWU9XCJjYW5ub25tYXN0ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJuZXh0LWJ0blwiIHNyYz1cIi4uLy4uL2ltYWdlcy9yaWdodC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gKyAxID4gam9iQXJyLmxlbmd0aCAtIDEgPyBqb2JBcnIubGVuZ3RoIC0gMSA6IG51bSArIDEpfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2ZW50dXJlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==