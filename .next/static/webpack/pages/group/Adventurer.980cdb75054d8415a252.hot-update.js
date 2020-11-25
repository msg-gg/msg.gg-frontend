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
  var data = [];
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
      cannonmaster = _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_6__.cannonmaster; // data.push({ hero, paladine, darknight, arkmagetc, arkmagefp, bishop, bowmaster, marks, pathfinder, nightlord, shadower, dualblade, viper, captain, cannonmaster);

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
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg bg__hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__bg bg__cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "character__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }), __jsx("table", {
    className: "character__stats__table text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, "\uC21C\uC704"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, "\uC6D4\uB4DC\uB0B4 \uC720\uC800\uBE44\uC728"))), __jsx("tbody", {
    className: "server__area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }))), __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 174,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 177,
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
      lineNumber: 178,
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
      lineNumber: 179,
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
      lineNumber: 180,
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
      lineNumber: 181,
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
      lineNumber: 182,
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
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 185,
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
      lineNumber: 186,
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
      lineNumber: 187,
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
      lineNumber: 188,
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
      lineNumber: 189,
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
      lineNumber: 190,
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
      lineNumber: 191,
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
      lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiSnNvbiIsIkFkdmVudHVyZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm51bWJlciIsInF1ZXJ5IiwibnVtIiwidW5kZWZpbmVkIiwicGFyc2VJbnQiLCJ1c2VTdGF0ZSIsImpvYiIsInNldEpvYiIsInNldE51bSIsImpvYkFyciIsImRhdGEiLCJoZXJvIiwicGFsYWRpbmUiLCJkYXJrbmlnaHQiLCJhcmttYWdldGMiLCJhcmttYWdlZnAiLCJiaXNob3AiLCJib3dtYXN0ZXIiLCJtYXJrcyIsInBhdGhmaW5kZXIiLCJuaWdodGxvcmQiLCJzaGFkb3dlciIsImR1YWxibGFkZSIsInZpcGVyIiwiY2FwdGFpbiIsImNhbm5vbm1hc3RlciIsInJhdGlvIiwic2VydmVyIiwiZW4iLCJrbyIsInVzZUVmZmVjdCIsImNoYXJhY3RlckltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYXJhY3RlclJlY3QiLCJjaGFyYWN0ZXJTZWxlY3RlciIsImNoYXJhY3Rlck5hbWUiLCJjaGFyYWN0ZXJCZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXJ2ZXJBcmVhIiwiZm9yRWFjaCIsImJnIiwic3R5bGUiLCJvcGFjaXR5IiwiaW5uZXJIVE1MIiwibWF4Iiwid29ybGQiLCJpIiwidHIiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zaXRpb24iLCJoZWlnaHQiLCJsZWZ0Iiwib25lQmxvY2siLCJ0cmFuc2xhdGVYIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxz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YUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQWFJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBYjtBQUE4QixhQUFTLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBYjtBQUE4QixhQUFTLEVBQUMsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBYjtBQUE4QixhQUFTLEVBQUMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBYjtBQUE4QixhQUFTLEVBQUMsWUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBYjtBQUE4QixhQUFTLEVBQUMsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBYjtBQUErQixhQUFTLEVBQUMsVUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBYjtBQUErQixhQUFTLEVBQUMsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBYUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBYjtBQUErQixhQUFTLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLEVBY0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBYjtBQUErQixhQUFTLEVBQUMsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLEVBZUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBYjtBQUErQixhQUFTLEVBQUMsY0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBREosQ0FGSixFQXFCSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLE9BQUcsRUFBQywrQkFBdkI7QUFBdUQsV0FBTyxFQUFFO0FBQUEsYUFBSUEsTUFBTSxDQUFDTixHQUFHLEdBQUcsQ0FBTixHQUFVTyxNQUFNLENBQUNtRCxNQUFQLEdBQWdCLENBQTFCLEdBQThCbkQsTUFBTSxDQUFDbUQsTUFBUCxHQUFnQixDQUE5QyxHQUFrRDFELEdBQUcsR0FBRyxDQUF6RCxDQUFWO0FBQUEsS0FBaEU7QUFBdUksT0FBRyxFQUFDLEVBQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosQ0FuQ0osQ0FYSixDQURKO0FBeUVILENBN0xEOztHQUFNTixVO1VBQ2FHLHFEOzs7S0FEYkgsVTtBQStMU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci45ODBjZGI3NTA1NGQ4NDE1YTI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9TaWRlYmFyXCI7XHJcbmltcG9ydCBKc29uIGZyb20gXCIuLi8uLi9Kc29uL2FkdmVudHJ1ZXIvam9iLmpzb25cIjtcclxuY29uc29sZS5sb2coSnNvbilcclxuXHJcbmNvbnN0IEFkdmVudHVyZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBsZXQgbnVtYmVyID0gcm91dGVyLnF1ZXJ5Lm51bTtcclxuICAgIG51bWJlciA9IG51bWJlciA9PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobnVtYmVyKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2pvYiwgc2V0Sm9iXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKG51bWJlcik7XHJcblxyXG4gICAgY29uc3Qgam9iQXJyID0gW1xyXG4gICAgICAgIFwiaGVyb1wiLCBcclxuICAgICAgICBcInBhbGFkaW5lXCIsXHJcbiAgICAgICAgXCJkYXJrbmlnaHRcIiwgXHJcbiAgICAgICAgXCJhcmttYWdldGNcIixcclxuICAgICAgICBcImFya21hZ2VmcFwiLFxyXG4gICAgICAgIFwiYmlzaG9wXCIsXHJcbiAgICAgICAgXCJib3dtYXN0ZXJcIixcclxuICAgICAgICBcIm1hcmtzXCIsXHJcbiAgICAgICAgXCJwYXRoZmluZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodGxvcmRcIixcclxuICAgICAgICBcInNoYWRvd2VyXCIsXHJcbiAgICAgICAgXCJkdWFsYmxhZGVcIixcclxuICAgICAgICBcInZpcGVyXCIsXHJcbiAgICAgICAgXCJjYXB0YWluXCIsXHJcbiAgICAgICAgXCJjYW5ub25tYXN0ZXJcIlxyXG4gICAgXVxyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgeyBoZXJvLCBwYWxhZGluZSwgZGFya25pZ2h0LCBhcmttYWdldGMsIGFya21hZ2VmcCwgYmlzaG9wLCBib3dtYXN0ZXIsIG1hcmtzLCBwYXRoZmluZGVyLCBuaWdodGxvcmQsIHNoYWRvd2VyLCBkdWFsYmxhZGUsIHZpcGVyLCBjYXB0YWluLCBjYW5ub25tYXN0ZXIgfSA9IEpzb25cclxuICAgIC8vIGRhdGEucHVzaCh7IGhlcm8sIHBhbGFkaW5lLCBkYXJrbmlnaHQsIGFya21hZ2V0YywgYXJrbWFnZWZwLCBiaXNob3AsIGJvd21hc3RlciwgbWFya3MsIHBhdGhmaW5kZXIsIG5pZ2h0bG9yZCwgc2hhZG93ZXIsIGR1YWxibGFkZSwgdmlwZXIsIGNhcHRhaW4sIGNhbm5vbm1hc3Rlcik7XHJcbiAgICBjb25zdCByYXRpbyA9IFtcclxuICAgICAgICA0LjUwLCA0LjA4LCAzLjU5LCAzLjQ3LCAzLjQzLCAzLjQxLCAzLjQxLCAzLjM3LCAzLjM2LCAzLjM1LCAzLjM0LCAzLjMzLCAzLjA5LCAyLjk4XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNlcnZlciA9IFtcclxuICAgICAgICB7IGVuIDogXCJyZWJvb3RcIiwga28gOiBcIuumrOu2gO2KuFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwicmVib290XCIsIGtvIDogXCLrpqzrtoDtirgyXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJyZWRcIiwga28gOiBcIuugiOuTnFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiZWx5c2l1bVwiLCBrbyA6IFwi7JeY66as7Iuc7JuAXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJjcm9hXCIsIGtvIDogXCLtgazroZzslYRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInplbml0aFwiLCBrbyA6IFwi7KCc64uI7IqkXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJhdXJvcmFcIiwga28gOiBcIuyYpOuhnOudvFwiIH0sXHJcbiAgICAgICAgeyBlbiA6IFwiYmVyYVwiLCBrbyA6IFwi67Kg6528XCIgfSxcclxuICAgICAgICB7IGVuIDogXCJ1bmlvblwiLCBrbyA6IFwi7Jyg64uI7JioXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJub3ZhXCIsIGtvIDogXCLrhbjrsJRcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcInNjYW5pYVwiLCBrbyA6IFwi7Iqk7Lm064uI7JWEXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJsdW5hXCIsIGtvIDogXCLro6jrgphcIiB9LFxyXG4gICAgICAgIHsgZW4gOiBcImVub3Npc1wiLCBrbyA6IFwi7J2064W47Iuc7IqkXCIgfSxcclxuICAgICAgICB7IGVuIDogXCJhcmNhbmVcIiwga28gOiAgXCLslYTsvIDsnbhcIiB9ICAgICAgXHJcbiAgICBdXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pXHJcbiAgICAgICAgc2V0Sm9iKGpvYkFycltudW1dKTtcclxuXHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyU2VsZWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3RlclwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19uYW1lXCIpO1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jaGFyYWN0ZXJfX2JnYCk7IFxyXG4gICAgICAgIGxldCBzZXJ2ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2ZXJfX2FyZWFcIik7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckJnLmZvckVhY2goYmcgPT4ge1xyXG4gICAgICAgICAgICBiZy5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjaGFyYWN0ZXJCZ1tudW1dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBcclxuICAgICAgICBzZXJ2ZXJBcmVhLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBtYXggPSByYXRpb1swXTtcclxuICAgICAgICBcclxuICAgICAgICBzZXJ2ZXIuZm9yRWFjaCgod29ybGQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAoMTAwICogcmF0aW9baV0pIC8gbWF4OyBcclxuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJzZXJ2ZXJfX2ltYWdlXCIgc3R5bGU9XCJoZWlnaHQ6IDEuOHZoOyBtYXJnaW4tcmlnaHQ6IC41ZW07XCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkLyR7d29ybGQuZW59LmdpZlwiIGFsdD1cIlwiLz4gJHt3b3JsZC5rb308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHN0eWxlPVwibWluLXdpZHRoOiAxODBweDtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOiAke3dpZHRofSU7XCI+JHtyYXRpb1tpXX0lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPmA7XHJcbiAgICAgICAgICAgIHNlcnZlckFyZWEuYXBwZW5kQ2hpbGQodHIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2pvYi8ke2pvYn0ucG5nKWA7XHJcbiAgICAgICAgY2hhcmFjdGVyTmFtZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9uYW1lLyR7am9ifS5wbmcpYDtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLnRyYW5zaXRpb24gPSBcIjBzXCI7XHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNjB2d1wiO1xyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE2MHZoXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIi0yMCVcIjtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcblxyXG4gICAgICAgIGxldCBvbmVCbG9jayA9IC0xNDA7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiBvbmVCbG9jayA+PSBvbmVCbG9jayAqIDIgPyAwIDogKG51bSAtIDIpICogb25lQmxvY2sgPCAtMTI2MCA/IC0xMjYwIDogKG51bSAtIDIpICogb25lQmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWA7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjhzXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTEwdmhcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTEwdmhcIjtcclxuICAgICAgICAgICAgaWYoam9iID09ICdoZXJvJykgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNTB2aFwiOyBcclxuICAgICAgICAgICAgaWYoam9iID09ICdwYXRoZmluZGVyJykgeyBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE0MnZoXCI7IGNoYXJhY3RlckltZy5zdHlsZS5oZWlnaHQgPSBcIjE0MnZoXCI7IH1cclxuICAgICAgICAgICAgaWYoam9iID09ICdkYXJrbmlnaHQnKSB7IGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjsgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTQydmhcIjsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUud2lkdGggPSBcIjMwJVwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xyXG4gICAgICAgIH0sIDEwMClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9qb2Ivam9iLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX193cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2hlcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fZGFya25pZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX3BhbGFkaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Fya21hZ2V0Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19hcmttYWdlZnBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fYmlzaG9wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX2Jvd21hc3RlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19tYXJrc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19wYXRoZmluZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmcgYmdfX25pZ2h0bG9yZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19zaGFkb3dlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19kdWFsYmxhZGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fdmlwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZyBiZ19fY2FwdGFpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnIGJnX19jYW5ub25tYXN0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImdyb3VwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3N0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19uYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3N0YXRzX190YWJsZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+7Iic7JyEPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuyblOuTnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7sm5Trk5zrgrQg7Jyg7KCA67mE7JyoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwic2VydmVyX19hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtqb2J9IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9faW1nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zZWxlY3QgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvbGVmdC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXJhY3RlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMCl9IGNsYXNzTmFtZT1cImhlcm9cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxKX0gY2xhc3NOYW1lPVwicGFsYWRpbmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgyKX0gY2xhc3NOYW1lPVwiZGFya25pZ2h0XCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMyl9IGNsYXNzTmFtZT1cImFya21hZ2V0Y1wiPjwvbGk+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDQpfSBjbGFzc05hbWU9XCJhcmttYWdlZnBcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg1KX0gY2xhc3NOYW1lPVwiYmlzaG9wXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNil9IGNsYXNzTmFtZT1cImJvd21hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDcpfSBjbGFzc05hbWU9XCJtYXJrc1wiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDgpfSBjbGFzc05hbWU9XCJwYXRoZmluZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOSl9IGNsYXNzTmFtZT1cIm5pZ2h0bG9yZFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEwKX0gY2xhc3NOYW1lPVwic2hhZG93ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMSl9IGNsYXNzTmFtZT1cImR1YWxibGFkZVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEyKX0gY2xhc3NOYW1lPVwidmlwZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMyl9IGNsYXNzTmFtZT1cImNhcHRhaW5cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgxNCl9IGNsYXNzTmFtZT1cImNhbm5vbm1hc3RlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm5leHQtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSArIDEgPiBqb2JBcnIubGVuZ3RoIC0gMSA/IGpvYkFyci5sZW5ndGggLSAxIDogbnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZlbnR1cmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9