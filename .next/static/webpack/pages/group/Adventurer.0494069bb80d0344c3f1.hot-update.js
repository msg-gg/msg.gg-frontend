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
/* harmony import */ var _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Json/adventruer/job.json */ "./Json/adventruer/job.json");
var _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Json/adventruer/job.json */ "./Json/adventruer/job.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







console.log(_Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__);

var Adventurer = function Adventurer(props) {
  _s();

  var _Json;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var number = router.query.num;
  number = number == undefined ? 0 : parseInt(number);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      job = _useState[0],
      setJob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(number),
      num = _useState2[0],
      setNum = _useState2[1];

  var jobArr = ["hero", "paladine", "darknight", "arkmagetc", "arkmagefp", "bishop", "bowmaster", "marks", "pathfinder", "nightlord", "shadower", "dualblade", "viper", "captain", "cannonmaster"];
  var data = [];
  data.push((_Json = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__, hero = _Json.hero, paladine = _Json.paladine, darknight = _Json.darknight, arkmagetc = _Json.arkmagetc, arkmagefp = _Json.arkmagefp, bishop = _Json.bishop, bowmaster = _Json.bowmaster, marks = _Json.marks, pathfinder = _Json.pathfinder, nightlord = _Json.nightlord, shadower = _Json.shadower, dualblade = _Json.dualblade, viper = _Json.viper, captain = _Json.captain, cannonmaster = _Json.cannonmaster, _Json));
  var ratio = [4.5, 4.08, 3.59, 3.47, 3.43, 3.41, 3.41, 3.37, 3.36, 3.35, 3.34, 3.33, 3.09, 2.98];
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
      tr.innerHTML = "\n                            <td>".concat(i + 1, " </td>\n                            <td><img className=\"server__image\" style=\"height: 1.8vh; margin-right: .5em;\" src=\"../../images/world/").concat(world.en, ".gif\" alt=\"\"/> ").concat(world.ko, "</td>\n                            <td>\n                                <div class=\"progress\" style=\"min-width: 180px;\" >\n                                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(width, "%;\">").concat(ratio[i], "%</div>\n                                </div>\n                            </td>");
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
      if (job == "hero") characterImg.style.width = "150vh";

      if (job == "pathfinder") {
        characterImg.style.width = "142vh";
        characterImg.style.height = "142vh";
      }

      if (job == "darknight") {
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
      lineNumber: 173,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg bg__hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }), __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "character__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }), __jsx("table", {
    className: "character__stats__table text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 37
    }
  }, "\uC21C\uC704"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC\uB0B4 \uC720\uC800\uBE44\uC728"))), __jsx("tbody", {
    className: "server__area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }))), __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
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
      lineNumber: 219,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
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
      lineNumber: 227,
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
      lineNumber: 228,
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
      lineNumber: 232,
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
      lineNumber: 236,
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
      lineNumber: 240,
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
      lineNumber: 244,
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
      lineNumber: 248,
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
      lineNumber: 252,
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
      lineNumber: 256,
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
      lineNumber: 260,
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
      lineNumber: 264,
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
      lineNumber: 268,
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
      lineNumber: 272,
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
      lineNumber: 276,
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
      lineNumber: 280,
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
      lineNumber: 286,
      columnNumber: 21
    }
  }))));
};

_s(Adventurer, "sSqSss/lUivlJYCqb27cQQQKzy8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiSnNvbiIsIkFkdmVudHVyZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm51bWJlciIsInF1ZXJ5IiwibnVtIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJ1c2VTdGF0ZSIsImpvYiIsInNldEpvYiIsInNldE51bSIsImpvYkFyciIsImRhdGEiLCJwdXNoIiwiaGVybyIsInBhbGFkaW5lIiwiZGFya25pZ2h0IiwiYXJrbWFnZXRjIiwiYXJrbWFnZWZwIiwiYmlzaG9wIiwiYm93bWFzdGVyIiwibWFya3MiLCJwYXRoZmluZGVyIiwibmlnaHRsb3JkIiwic2hhZG93ZXIiLCJkdWFsYmxhZGUiLCJ2aXBlciIsImNhcHRhaW4iLCJjYW5ub25tYXN0ZXIiLCJyYXRpbyIsInNlcnZlciIsImVuIiwia28iLCJ1c2VFZmZlY3QiLCJjaGFyYWN0ZXJJbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGFyYWN0ZXJSZWN0IiwiY2hhcmFjdGVyU2VsZWN0ZXIiLCJjaGFyYWN0ZXJOYW1lIiwiY2hhcmFjdGVyQmciLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VydmVyQXJlYSIsImZvckVhY2giLCJiZyIsInN0eWxlIiwib3BhY2l0eSIsImlubmVySFRNTCIsIm1heCIsIndvcmxkIiwiaSIsInRyIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsIm9uZUJsb2NrIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIs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QUFNLENBQ0ZOLEdBQUcsR0FBRyxDQUFOLEdBQVVPLE1BQU0sQ0FBQ29ELE1BQVAsR0FBZ0IsQ0FBMUIsR0FDTXBELE1BQU0sQ0FBQ29ELE1BQVAsR0FBZ0IsQ0FEdEIsR0FFTTNELEdBQUcsR0FBRyxDQUhWLENBREQ7QUFBQSxLQUhiO0FBVUksT0FBRyxFQUFDLEVBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBFSixDQWxDSixDQVhKLENBREo7QUFrSUgsQ0FwU0Q7O0dBQU1OLFU7VUFDYUcscUQ7OztLQURiSCxVO0FBc1NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cC9BZHZlbnR1cmVyLjA0OTQwNjliYjgwZDAzNDRjM2YxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvU2lkZWJhclwiO1xyXG5pbXBvcnQgSnNvbiBmcm9tIFwiLi4vLi4vSnNvbi9hZHZlbnRydWVyL2pvYi5qc29uXCI7XHJcbmNvbnNvbGUubG9nKEpzb24pO1xyXG5cclxuY29uc3QgQWR2ZW50dXJlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgbGV0IG51bWJlciA9IHJvdXRlci5xdWVyeS5udW07XHJcbiAgICBudW1iZXIgPSBudW1iZXIgPT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KG51bWJlcik7XHJcblxyXG4gICAgY29uc3QgW2pvYiwgc2V0Sm9iXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKG51bWJlcik7XHJcblxyXG4gICAgY29uc3Qgam9iQXJyID0gW1xyXG4gICAgICAgIFwiaGVyb1wiLFxyXG4gICAgICAgIFwicGFsYWRpbmVcIixcclxuICAgICAgICBcImRhcmtuaWdodFwiLFxyXG4gICAgICAgIFwiYXJrbWFnZXRjXCIsXHJcbiAgICAgICAgXCJhcmttYWdlZnBcIixcclxuICAgICAgICBcImJpc2hvcFwiLFxyXG4gICAgICAgIFwiYm93bWFzdGVyXCIsXHJcbiAgICAgICAgXCJtYXJrc1wiLFxyXG4gICAgICAgIFwicGF0aGZpbmRlclwiLFxyXG4gICAgICAgIFwibmlnaHRsb3JkXCIsXHJcbiAgICAgICAgXCJzaGFkb3dlclwiLFxyXG4gICAgICAgIFwiZHVhbGJsYWRlXCIsXHJcbiAgICAgICAgXCJ2aXBlclwiLFxyXG4gICAgICAgIFwiY2FwdGFpblwiLFxyXG4gICAgICAgIFwiY2Fubm9ubWFzdGVyXCIsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgZGF0YS5wdXNoKFxyXG4gICAgICAgICh7XHJcbiAgICAgICAgICAgIGhlcm8sXHJcbiAgICAgICAgICAgIHBhbGFkaW5lLFxyXG4gICAgICAgICAgICBkYXJrbmlnaHQsXHJcbiAgICAgICAgICAgIGFya21hZ2V0YyxcclxuICAgICAgICAgICAgYXJrbWFnZWZwLFxyXG4gICAgICAgICAgICBiaXNob3AsXHJcbiAgICAgICAgICAgIGJvd21hc3RlcixcclxuICAgICAgICAgICAgbWFya3MsXHJcbiAgICAgICAgICAgIHBhdGhmaW5kZXIsXHJcbiAgICAgICAgICAgIG5pZ2h0bG9yZCxcclxuICAgICAgICAgICAgc2hhZG93ZXIsXHJcbiAgICAgICAgICAgIGR1YWxibGFkZSxcclxuICAgICAgICAgICAgdmlwZXIsXHJcbiAgICAgICAgICAgIGNhcHRhaW4sXHJcbiAgICAgICAgICAgIGNhbm5vbm1hc3RlcixcclxuICAgICAgICB9ID0gSnNvbilcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmF0aW8gPSBbXHJcbiAgICAgICAgNC41LFxyXG4gICAgICAgIDQuMDgsXHJcbiAgICAgICAgMy41OSxcclxuICAgICAgICAzLjQ3LFxyXG4gICAgICAgIDMuNDMsXHJcbiAgICAgICAgMy40MSxcclxuICAgICAgICAzLjQxLFxyXG4gICAgICAgIDMuMzcsXHJcbiAgICAgICAgMy4zNixcclxuICAgICAgICAzLjM1LFxyXG4gICAgICAgIDMuMzQsXHJcbiAgICAgICAgMy4zMyxcclxuICAgICAgICAzLjA5LFxyXG4gICAgICAgIDIuOTgsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNlcnZlciA9IFtcclxuICAgICAgICB7IGVuOiBcInJlYm9vdFwiLCBrbzogXCLrpqzrtoDtirhcIiB9LFxyXG4gICAgICAgIHsgZW46IFwicmVib290XCIsIGtvOiBcIuumrOu2gO2KuDJcIiB9LFxyXG4gICAgICAgIHsgZW46IFwicmVkXCIsIGtvOiBcIuugiOuTnFwiIH0sXHJcbiAgICAgICAgeyBlbjogXCJlbHlzaXVtXCIsIGtvOiBcIuyXmOumrOyLnOybgFwiIH0sXHJcbiAgICAgICAgeyBlbjogXCJjcm9hXCIsIGtvOiBcIu2BrOuhnOyVhFwiIH0sXHJcbiAgICAgICAgeyBlbjogXCJ6ZW5pdGhcIiwga286IFwi7KCc64uI7IqkXCIgfSxcclxuICAgICAgICB7IGVuOiBcImF1cm9yYVwiLCBrbzogXCLsmKTroZzrnbxcIiB9LFxyXG4gICAgICAgIHsgZW46IFwiYmVyYVwiLCBrbzogXCLrsqDrnbxcIiB9LFxyXG4gICAgICAgIHsgZW46IFwidW5pb25cIiwga286IFwi7Jyg64uI7JioXCIgfSxcclxuICAgICAgICB7IGVuOiBcIm5vdmFcIiwga286IFwi64W467CUXCIgfSxcclxuICAgICAgICB7IGVuOiBcInNjYW5pYVwiLCBrbzogXCLsiqTsubTri4jslYRcIiB9LFxyXG4gICAgICAgIHsgZW46IFwibHVuYVwiLCBrbzogXCLro6jrgphcIiB9LFxyXG4gICAgICAgIHsgZW46IFwiZW5vc2lzXCIsIGtvOiBcIuydtOuFuOyLnOyKpFwiIH0sXHJcbiAgICAgICAgeyBlbjogXCJhcmNhbmVcIiwga286IFwi7JWE7LyA7J24XCIgfSxcclxuICAgIF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xyXG4gICAgICAgIHNldEpvYihqb2JBcnJbbnVtXSk7XHJcblxyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX3JlY3RcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclNlbGVjdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3Rlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fbmFtZVwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY2hhcmFjdGVyX19iZ2ApO1xyXG4gICAgICAgIGxldCBzZXJ2ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2ZXJfX2FyZWFcIik7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckJnLmZvckVhY2goKGJnKSA9PiB7XHJcbiAgICAgICAgICAgIGJnLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjaGFyYWN0ZXJCZ1tudW1dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcbiAgICAgICAgc2VydmVyQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgbWF4ID0gcmF0aW9bMF07XHJcblxyXG4gICAgICAgIHNlcnZlci5mb3JFYWNoKCh3b3JsZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9ICgxMDAgKiByYXRpb1tpXSkgLyBtYXg7XHJcbiAgICAgICAgICAgIHRyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwic2VydmVyX19pbWFnZVwiIHN0eWxlPVwiaGVpZ2h0OiAxLjh2aDsgbWFyZ2luLXJpZ2h0OiAuNWVtO1wiIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmxkLmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmdpZlwiIGFsdD1cIlwiLz4gJHt3b3JsZC5rb308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHN0eWxlPVwibWluLXdpZHRoOiAxODBweDtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOiAke3dpZHRofSU7XCI+JHtcclxuICAgICAgICAgICAgICAgIHJhdGlvW2ldXHJcbiAgICAgICAgICAgIH0lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgIHNlcnZlckFyZWEuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvam9iLyR7am9ifS5wbmcpYDtcclxuICAgICAgICBjaGFyYWN0ZXJOYW1lLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL25hbWUvJHtqb2J9LnBuZylgO1xyXG5cclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE2MHZ3XCI7XHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTYwdmhcIjtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIi0yMCVcIjtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcblxyXG4gICAgICAgIGxldCBvbmVCbG9jayA9IC0xNDA7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPVxyXG4gICAgICAgICAgICBudW0gKiBvbmVCbG9jayA+PSBvbmVCbG9jayAqIDJcclxuICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgOiAobnVtIC0gMikgKiBvbmVCbG9jayA8IC0xMjYwXHJcbiAgICAgICAgICAgICAgICA/IC0xMjYwXHJcbiAgICAgICAgICAgICAgICA6IChudW0gLSAyKSAqIG9uZUJsb2NrO1xyXG5cclxuICAgICAgICBjaGFyYWN0ZXJTZWxlY3Rlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBpZiAoam9iID09IFwiaGVyb1wiKSBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE1MHZoXCI7XHJcbiAgICAgICAgICAgIGlmIChqb2IgPT0gXCJwYXRoZmluZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE0MnZoXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGpvYiA9PSBcImRhcmtuaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE0MnZoXCI7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNDJ2aFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjMwJVwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2pvYi9qb2IuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19faGVyb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19kYXJrbmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fcGFsYWRpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYXJrbWFnZXRjXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Fya21hZ2VmcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19iaXNob3BcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYm93bWFzdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX21hcmtzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3BhdGhmaW5kZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fbmlnaHRsb3JkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3NoYWRvd2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2R1YWxibGFkZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX192aXBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19jYXB0YWluXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Nhbm5vbm1hc3RlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3JlY3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRpdGxlPVwiZ3JvdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX21haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX25hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc3RhdHNfX3RhYmxlIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7siJzsnIQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+7JuU65OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuyblOuTnOuCtCDsnKDsoIDruYTsnKg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInNlcnZlcl9fYXJlYVwiPjwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17am9ifSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2ltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc2VsZWN0IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByZXYtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1hZ2VzL2xlZnQtYnV0dG9uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXJhY3RlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMCl9IGNsYXNzTmFtZT1cImhlcm9cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbGFkaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcmtuaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE51bSgzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcmttYWdldGNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJrbWFnZWZwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE51bSg2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3dtYXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF0aGZpbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE51bSg5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuaWdodGxvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDExKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdWFsYmxhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDEzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXB0YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TnVtKDE0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5ub25tYXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5leHQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TnVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSArIDEgPiBqb2JBcnIubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGpvYkFyci5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVtICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZlbnR1cmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9