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
  var hero = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.hero,
      paladine = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.paladine,
      darknight = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.darknight,
      arkmagetc = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.arkmagetc,
      arkmagefp = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.arkmagefp,
      bishop = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.bishop,
      bowmaster = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.bowmaster,
      marks = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.marks,
      pathfinder = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.pathfinder,
      nightlord = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.nightlord,
      shadower = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.shadower,
      dualblade = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.dualblade,
      viper = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.viper,
      captain = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.captain,
      cannonmaster = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.cannonmaster;
  var data = [];
  data.push(hero, paladine, darknight, arkmagetc, arkmagefp, bishop, bowmaster, marks, pathfinder, nightlord, shadower, dualblade, viper, captain, cannonmaster);
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
    data[num].forEach(function (world, i) {
      var tr = document.createElement("tr");
      var max = parseFloat(data[num][0].ratio.split("%"));
      var width = 100 * parseFloat(world.ratio.split("%")) / max; // console.log(max, world.ratio)

      tr.innerHTML = "\n                            <td>".concat(world.ranking, " </td>\n                            <td><img className=\"server__image\" style=\"height: 1.8vh; margin-right: .5em;\" src=\"").concat(world.worldImg, "\" alt=\"\"/> ").concat(world.world, "</td>\n                            <td>\n                                <div class=\"progress\" style=\"min-width: 180px;\" >\n                                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(width, "%;\">").concat(world.ratio, "</div>\n                                </div>\n                            </td>");
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
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg bg__hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }), __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "character__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), __jsx("table", {
    className: "character__stats__table text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, "\uC21C\uC704"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC\uB0B4 \uC720\uC800\uBE44\uC728"))), __jsx("tbody", {
    className: "server__area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }))), __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
      lineNumber: 173,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 176,
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
      lineNumber: 177,
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
      lineNumber: 178,
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
      lineNumber: 179,
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
      lineNumber: 180,
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
      lineNumber: 181,
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
      lineNumber: 182,
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
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 185,
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
      lineNumber: 186,
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
      lineNumber: 187,
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
      lineNumber: 188,
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
      lineNumber: 189,
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
      lineNumber: 190,
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
      lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiSnNvbiIsIkFkdmVudHVyZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm51bWJlciIsInF1ZXJ5IiwibnVtIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJ1c2VTdGF0ZSIsImpvYiIsInNldEpvYiIsInNldE51bSIsImpvYkFyciIsImhlcm8iLCJwYWxhZGluZSIsImRhcmtuaWdodCIsImFya21hZ2V0YyIsImFya21hZ2VmcCIsImJpc2hvcCIsImJvd21hc3RlciIsIm1hcmtzIiwicGF0aGZpbmRlciIsIm5pZ2h0bG9yZCIsInNoYWRvd2VyIiwiZHVhbGJsYWRlIiwidmlwZXIiLCJjYXB0YWluIiwiY2Fubm9ubWFzdGVyIiwiZGF0YSIsInB1c2giLCJzZXJ2ZXIiLCJlbiIsImtvIiwidXNlRWZmZWN0IiwiY2hhcmFjdGVySW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhcmFjdGVyUmVjdCIsImNoYXJhY3RlclNlbGVjdGVyIiwiY2hhcmFjdGVyTmFtZSIsImNoYXJhY3RlckJnIiwicXVlcnlTZWxlY3RvckFsbCIsInNlcnZlckFyZWEiLCJmb3JFYWNoIiwiYmciLCJzdHlsZSIsIm9wYWNpdHkiLCJpbm5lckhUTUwiLCJ3b3JsZCIsImkiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicmF0aW8iLCJzcGxpdCIsIndpZHRoIiwicmFua2luZyIsIndvcmxkSW1nIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2l0aW9uIiwiaGVpZ2h0IiwibGVmdCIsIm9uZUJsb2NrIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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QTtBQUFBO0FBQUEsSUFKSixDQURKLEVBVUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFB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RUFJSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFiO0FBQThCLGFBQVMsRUFBQyxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFiO0FBQStCLGFBQVMsRUFBQyxVQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosRUFZSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFiO0FBQStCLGFBQVMsRUFBQyxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFhSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFiO0FBQStCLGFBQVMsRUFBQyxPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFjSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFiO0FBQStCLGFBQVMsRUFBQyxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosRUFlSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFiO0FBQStCLGFBQVMsRUFBQyxjQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0FESixDQUZKLEVBcUJJO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBbUIsT0FBRyxFQUFDLCtCQUF2QjtBQUF1RCxXQUFPLEVBQUU7QUFBQSxhQUFJQSxNQUFNLENBQUNOLEdBQUcsR0FBRyxDQUFOLEdBQVVPLE1BQU0sQ0FBQ3dELE1BQVAsR0FBZ0IsQ0FBMUIsR0FBOEJ4RCxNQUFNLENBQUN3RCxNQUFQLEdBQWdCLENBQTlDLEdBQWtEL0QsR0FBRyxHQUFHLENBQXpELENBQVY7QUFBQSxLQUFoRTtBQUF1SSxPQUFHLEVBQUMsRUFBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQW5DSixDQVhKLENBREo7QUF5RUgsQ0E1TEQ7O0dBQU1OLFU7VUFDYUcscUQ7OztLQURiSCxVO0FBOExTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cC9BZHZlbnR1cmVyLjVlY2U2OTk5ZGFhMzBlOTU4ZDNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvcm5lbnRzL1NpZGViYXJcIjtcclxuaW1wb3J0IEpzb24gZnJvbSBcIi4uLy4uL0pzb24vYWR2ZW50cnVlci9qb2IuanNvblwiO1xyXG5jb25zb2xlLmxvZyhKc29uKVxyXG5cclxuY29uc3QgQWR2ZW50dXJlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGxldCBudW1iZXIgPSByb3V0ZXIucXVlcnkubnVtO1xyXG4gICAgbnVtYmVyID0gbnVtYmVyID09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChudW1iZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbam9iLCBzZXRKb2JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUobnVtYmVyKTtcclxuXHJcbiAgICBjb25zdCBqb2JBcnIgPSBbXHJcbiAgICAgICAgXCJoZXJvXCIsIFxyXG4gICAgICAgIFwicGFsYWRpbmVcIixcclxuICAgICAgICBcImRhcmtuaWdodFwiLCBcclxuICAgICAgICBcImFya21hZ2V0Y1wiLFxyXG4gICAgICAgIFwiYXJrbWFnZWZwXCIsXHJcbiAgICAgICAgXCJiaXNob3BcIixcclxuICAgICAgICBcImJvd21hc3RlclwiLFxyXG4gICAgICAgIFwibWFya3NcIixcclxuICAgICAgICBcInBhdGhmaW5kZXJcIixcclxuICAgICAgICBcIm5pZ2h0bG9yZFwiLFxyXG4gICAgICAgIFwic2hhZG93ZXJcIixcclxuICAgICAgICBcImR1YWxibGFkZVwiLFxyXG4gICAgICAgIFwidmlwZXJcIixcclxuICAgICAgICBcImNhcHRhaW5cIixcclxuICAgICAgICBcImNhbm5vbm1hc3RlclwiXHJcbiAgICBdXHJcbiAgICBjb25zdCB7IGhlcm8sIHBhbGFkaW5lLCBkYXJrbmlnaHQsIGFya21hZ2V0YywgYXJrbWFnZWZwLCBiaXNob3AsIGJvd21hc3RlciwgbWFya3MsIHBhdGhmaW5kZXIsIG5pZ2h0bG9yZCwgc2hhZG93ZXIsIGR1YWxibGFkZSwgdmlwZXIsIGNhcHRhaW4sIGNhbm5vbm1hc3RlciB9ID0gSnNvblxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgIGRhdGEucHVzaChoZXJvLCBwYWxhZGluZSwgZGFya25pZ2h0LCBhcmttYWdldGMsIGFya21hZ2VmcCwgYmlzaG9wLCBib3dtYXN0ZXIsIG1hcmtzLCBwYXRoZmluZGVyLCBuaWdodGxvcmQsIHNoYWRvd2VyLCBkdWFsYmxhZGUsIHZpcGVyLCBjYXB0YWluLCBjYW5ub25tYXN0ZXIpO1xyXG5cclxuICAgIGNvbnN0IHNlcnZlciA9IFtcclxuICAgICAgICB7IGVuIDogXCJyZWJvb3RcIiwga28gOiBcIuumrOu2gO2KuFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwicmVib290XCIsIGtvIDogXCLrpqzrtoDtirgyXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJyZWRcIiwga28gOiBcIuugiOuTnFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiZWx5c2l1bVwiLCBrbyA6IFwi7JeY66as7Iuc7JuAXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJjcm9hXCIsIGtvIDogXCLtgazroZzslYRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInplbml0aFwiLCBrbyA6IFwi7KCc64uI7IqkXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJhdXJvcmFcIiwga28gOiBcIuyYpOuhnOudvFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiYmVyYVwiLCBrbyA6IFwi67Kg6528XCIgfSxcclxuICAgICAgICB7IGVuIDogXCJ1bmlvblwiLCBrbyA6IFwi7Jyg64uI7JioXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJub3ZhXCIsIGtvIDogXCLrhbjrsJRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInNjYW5pYVwiLCBrbyA6IFwi7Iqk7Lm064uI7JWEXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJsdW5hXCIsIGtvIDogXCLro6jrgphcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImVub3Npc1wiLCBrbyA6IFwi7J2064W47Iuc7IqkXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJhcmNhbmVcIiwga28gOiAgXCLslYTsvIDsnbhcIiB9ICAgICAgXHJcbiAgICBdXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pXHJcbiAgICAgICAgc2V0Sm9iKGpvYkFycltudW1dKTtcclxuXHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyU2VsZWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3RlclwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19uYW1lXCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaGFyYWN0ZXJfX2JnYCk7IFxyXG4gICAgICAgIGxldCBzZXJ2ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2ZXJfX2FyZWFcIik7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckJnLmZvckVhY2goYmcgPT4ge1xyXG4gICAgICAgICAgICBiZy5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjaGFyYWN0ZXJCZ1tudW1dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBcclxuICAgICAgICBzZXJ2ZXJBcmVhLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGFbbnVtXS5mb3JFYWNoKCh3b3JsZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGxldCBtYXggPSBwYXJzZUZsb2F0KGRhdGFbbnVtXVswXS5yYXRpby5zcGxpdChcIiVcIikpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAoMTAwICogcGFyc2VGbG9hdCh3b3JsZC5yYXRpby5zcGxpdChcIiVcIikpKSAvIG1heDsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1heCwgd29ybGQucmF0aW8pXHJcbiAgICAgICAgICAgIHRyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3dvcmxkLnJhbmtpbmd9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXJ2ZXJfX2ltYWdlXCIgc3R5bGU9XCJoZWlnaHQ6IDEuOHZoOyBtYXJnaW4tcmlnaHQ6IC41ZW07XCIgc3JjPVwiJHt3b3JsZC53b3JsZEltZ31cIiBhbHQ9XCJcIi8+ICR7d29ybGQud29ybGR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cIm1pbi13aWR0aDogMTgwcHg7XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogJHt3aWR0aH0lO1wiPiR7d29ybGQucmF0aW99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgIHNlcnZlckFyZWEuYXBwZW5kQ2hpbGQodHIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2pvYi8ke2pvYn0ucG5nKWA7XHJcbiAgICAgICAgY2hhcmFjdGVyTmFtZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9uYW1lLyR7am9ifS5wbmcpYDtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLnRyYW5zaXRpb24gPSBcIjBzXCI7XHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNjB2d1wiO1xyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE2MHZoXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIi0yMCVcIjtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcblxyXG4gICAgICAgIGxldCBvbmVCbG9jayA9IC0xNDA7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiBvbmVCbG9jayA+PSBvbmVCbG9jayAqIDIgPyAwIDogKG51bSAtIDIpICogb25lQmxvY2sgPCAtMTI2MCA/IC0xMjYwIDogKG51bSAtIDIpICogb25lQmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWA7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjhzXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTEwdmhcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTEwdmhcIjtcclxuICAgICAgICAgICAgaWYoam9iID09ICdoZXJvJykgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNTB2aFwiOyBcclxuICAgICAgICAgICAgaWYoam9iID09ICdwYXRoZmluZGVyJykgeyBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE0MnZoXCI7IGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE0MnZoXCI7IH1cclxuICAgICAgICAgICAgaWYoam9iID09ICdkYXJrbmlnaHQnKSB7IGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjsgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTQydmhcIjsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjMwJVwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xyXG4gICAgICAgIH0sIDEwMClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9qb2Ivam9iLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX193cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2hlcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fZGFya25pZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3BhbGFkaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Fya21hZ2V0Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19hcmttYWdlZnBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYmlzaG9wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Jvd21hc3RlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19tYXJrc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19wYXRoZmluZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX25pZ2h0bG9yZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19zaGFkb3dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19kdWFsYmxhZGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fdmlwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fY2FwdGFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19jYW5ub25tYXN0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImdyb3VwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3N0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19uYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3N0YXRzX190YWJsZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+7Iic7JyEPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuyblOuTnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7sm5Trk5zrgrQg7Jyg7KCA67mE7JyoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwic2VydmVyX19hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtqb2J9IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9faW1nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zZWxlY3QgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvbGVmdC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXJhY3RlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMCl9IGNsYXNzTmFtZT1cImhlcm9cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxKX0gY2xhc3NOYW1lPVwicGFsYWRpbmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgyKX0gY2xhc3NOYW1lPVwiZGFya25pZ2h0XCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMyl9IGNsYXNzTmFtZT1cImFya21hZ2V0Y1wiPjwvbGk+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDQpfSBjbGFzc05hbWU9XCJhcmttYWdlZnBcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg1KX0gY2xhc3NOYW1lPVwiYmlzaG9wXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNil9IGNsYXNzTmFtZT1cImJvd21hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDcpfSBjbGFzc05hbWU9XCJtYXJrc1wiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDgpfSBjbGFzc05hbWU9XCJwYXRoZmluZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOSl9IGNsYXNzTmFtZT1cIm5pZ2h0bG9yZFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEwKX0gY2xhc3NOYW1lPVwic2hhZG93ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMSl9IGNsYXNzTmFtZT1cImR1YWxibGFkZVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEyKX0gY2xhc3NOYW1lPVwidmlwZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMyl9IGNsYXNzTmFtZT1cImNhcHRhaW5cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxNCl9IGNsYXNzTmFtZT1cImNhbm5vbm1hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm5leHQtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSArIDEgPiBqb2JBcnIubGVuZ3RoIC0gMSA/IGpvYkFyci5sZW5ndGggLSAxIDogbnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZlbnR1cmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9