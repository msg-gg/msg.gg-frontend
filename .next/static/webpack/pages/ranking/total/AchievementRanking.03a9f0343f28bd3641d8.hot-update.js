webpackHotUpdate_N_E("pages/ranking/total/AchievementRanking",{

/***/ "./pages/ranking/total/AchievementRanking.js":
/*!***************************************************!*\
  !*** ./pages/ranking/total/AchievementRanking.js ***!
  \***************************************************/
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
/* harmony import */ var _compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../compornents/Header/header */ "./compornents/Header/header.js");
/* harmony import */ var _compornents_totalSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../compornents/totalSidebar */ "./compornents/totalSidebar.js");
/* harmony import */ var _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Json/Achievement.json */ "./Json/Achievement.json");
var _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../Json/Achievement.json */ "./Json/Achievement.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\ranking\\total\\AchievementRanking.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(data);
    document.querySelector("#__next").style.backgroundImage = "url(../../images/ranking/background.png)";
    var rankingInsignia = document.querySelector(".ranking__insignia");
    var worldImg = document.querySelectorAll(".ranking__insignia > div");
    var width = -(worldImg[0].offsetWidth + 10);
    var max = width * 9;
    rankingInsignia.style.transition = ".5s";
    var translateX = num * width >= width * 2 ? 0 : (num - 2) * width < max ? max : (num - 2) * width;
    rankingInsignia.style.transform = "translateX(".concat(translateX, "px)");
    worldImg.forEach(function (img, i) {
      img.style.backgroundImage = "url(../../images/ranking/uninsignia.png)";
      if (i == num) img.style.backgroundImage = "url(../../images/ranking/insignia.png)";
    });
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    data[num].forEach(function (item) {
      var tr = document.createElement("tr");
      tr.innerHTML = "\n                            <td class=\"d-flex align-items-center pl-5 pt-4\">\n                                <p class=\"pr-5\">".concat(item.rank, " </p>\n                                <img style=\"width: 75px; height: 75px; margin-right: .5em;\" src=\"").concat(item.img, "\" alt=\"\"/>\n                                <div class=\"pt-4\">\n                                    <p>").concat(item.name, "</p>\n                                    <p>").concat(item.level, " | ").concat(item.job, "</p>\n                                </div>\n                            </td>\n                            <td><img style=\"width: 30px; height: 30px; margin-right: .5em;\" src=\"").concat(item.ratingImg, "\" alt=\"\"/>").concat(item.rating, "</td>\n                            <td><p>").concat(item.point, "</p></td>");
      tbody.appendChild(tr);
    });
  });
  var world = ["luna", "scania", "elysium", "croa", "aurora", "bera", "red", "union", "zenith", "enosis", "arcane", "nova", "reboot", "reboot2"];
  var lunaRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.lunaRank,
      scaniaRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.scaniaRank,
      elysiumRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.elysiumRank,
      croaRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.croaRank,
      auroraRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.auroraRank,
      beraRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.beraRank,
      redRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.redRank,
      unionRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.unionRank,
      zenithRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.zenithRank,
      enosisRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.enosisRank,
      arcaneRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.arcaneRank,
      novaRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.novaRank,
      rebootRank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.rebootRank,
      reboot2Rank = _Json_Achievement_json__WEBPACK_IMPORTED_MODULE_5__.reboot2Rank;
  console.log(lunaRank);
  var data = [];
  data.push(lunaRank, scaniaRank, elysiumRank, croaRank, auroraRank, beraRank, redRank, unionRank, zenithRank, enosisRank, arcaneRank, novaRank, rebootRank, reboot2Rank);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/ranking.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_compornents_totalSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    kind: "Achievement",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ranking__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "prev-btn",
    className: "pointer",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0 ? 0 : num - 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ranking__insignia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return setNum(0);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/luna.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(1);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/scania.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(2);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/elysium.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(3);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/croa.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(4);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/aurora.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(5);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/bera.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(6);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/red.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(7);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/union.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(8);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/zenith.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(9);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/enosis.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 92
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(10);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/arcane.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 93
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(11);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/nova.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 93
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(12);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/reboot.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 93
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setNum(13);
    },
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/reboot2.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 93
    }
  })))), __jsx("div", {
    className: "ranking__table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, "2020\uB144 11\uC6D4 27\uC77C \uAE08\uC694\uC77C")), __jsx("tr", {
    className: "table-title pt-3 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "\uAE38\uB4DC \uC815\uBCF4"), __jsx("td", {
    className: "ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, "\uAE38\uB4DC\uB808\uBCA8"), __jsx("td", {
    className: "ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, "\uD3EC\uC778\uD2B8"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }))), __jsx("img", {
    id: "next-btn",
    className: "pointer",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > world.length - 1 ? world.length - 1 : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }))));
};

_s(Index, "Zi44ycKtge5fGC+PlhDAtGhhgVE=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy90b3RhbC9BY2hpZXZlbWVudFJhbmtpbmcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInJhbmtpbmdJbnNpZ25pYSIsIndvcmxkSW1nIiwicXVlcnlTZWxlY3RvckFsbCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXgiLCJ0cmFuc2l0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsImZvckVhY2giLCJpbWciLCJpIiwidGJvZHkiLCJpbm5lckhUTUwiLCJpdGVtIiwidHIiLCJjcmVhdGVFbGVtZW50IiwicmFuayIsIm5hbWUiLCJsZXZlbCIsImpvYiIsInJhdGluZ0ltZyIsInJhdGluZyIsInBvaW50IiwiYXBwZW5kQ2hpbGQiLCJ3b3JsZCIsImx1bmFSYW5rIiwiUmFuayIsInNjYW5pYVJhbmsiLCJlbHlzaXVtUmFuayIsImNyb2FSYW5rIiwiYXVyb3JhUmFuayIsImJlcmFSYW5rIiwicmVkUmFuayIsInVuaW9uUmFuayIsInplbml0aFJhbmsiLCJlbm9zaXNSYW5rIiwiYXJjYW5lUmFuayIsIm5vdmFSYW5rIiwicmVib290UmFuayIsInJlYm9vdDJSYW5rIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsQ0FBRCxDQURUO0FBQUEsTUFDZEMsR0FEYztBQUFBLE1BQ1RDLE1BRFM7O0FBR3JCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENKLENBRkosQ0FYSixDQURKO0FBdURILENBM0hEOztHQUFNSCxLOztLQUFBQSxLO0FBNkhTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5raW5nL3RvdGFsL0FjaGlldmVtZW50UmFua2luZy4wM2E5ZjAzNDNmMjhiZDM2NDFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy90b3RhbFNpZGViYXJcIlxyXG5pbXBvcnQgUmFuayBmcm9tIFwiLi4vLi4vLi4vSnNvbi9BY2hpZXZlbWVudC5qc29uXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL2JhY2tncm91bmQucG5nKWA7XHJcbiAgICBcclxuICAgICAgICBsZXQgcmFua2luZ0luc2lnbmlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5raW5nX19pbnNpZ25pYVwiKTtcclxuICAgICAgICBsZXQgd29ybGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhbmtpbmdfX2luc2lnbmlhID4gZGl2XCIpOyBcclxuICAgICAgICBsZXQgd2lkdGggPSAtKHdvcmxkSW1nWzBdLm9mZnNldFdpZHRoICsgMTApOyAgIFxyXG4gICAgICAgIGxldCBtYXggPSB3aWR0aCAqIDlcclxuICAgICAgICBcclxuICAgICAgICByYW5raW5nSW5zaWduaWEuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiB3aWR0aCA+PSB3aWR0aCAqIDIgPyAwIDogKG51bSAtIDIpICogd2lkdGggPCBtYXggPyBtYXggOiAobnVtIC0gMikgKiB3aWR0aDtcclxuXHJcbiAgICAgICAgcmFua2luZ0luc2lnbmlhLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xyXG5cclxuXHJcbiAgICAgICAgd29ybGRJbWcuZm9yRWFjaCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL3VuaW5zaWduaWEucG5nKWA7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gbnVtKSBcclxuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL2luc2lnbmlhLnBuZylgO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB0Ym9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0Ym9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBkYXRhW251bV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBsLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHItNVwiPiR7aXRlbS5yYW5rfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOiA3NXB4OyBoZWlnaHQ6IDc1cHg7IG1hcmdpbi1yaWdodDogLjVlbTtcIiBzcmM9XCIke2l0ZW0uaW1nfVwiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5sZXZlbH0gfCAke2l0ZW0uam9ifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBzdHlsZT1cIndpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbi1yaWdodDogLjVlbTtcIiBzcmM9XCIke2l0ZW0ucmF0aW5nSW1nfVwiIGFsdD1cIlwiLz4ke2l0ZW0ucmF0aW5nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHA+JHtpdGVtLnBvaW50fTwvcD48L3RkPmA7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3b3JsZCA9IFtcclxuICAgICAgICBcImx1bmFcIixcclxuICAgICAgICBcInNjYW5pYVwiLFxyXG4gICAgICAgIFwiZWx5c2l1bVwiLFxyXG4gICAgICAgIFwiY3JvYVwiLFxyXG4gICAgICAgIFwiYXVyb3JhXCIsXHJcbiAgICAgICAgXCJiZXJhXCIsXHJcbiAgICAgICAgXCJyZWRcIixcclxuICAgICAgICBcInVuaW9uXCIsXHJcbiAgICAgICAgXCJ6ZW5pdGhcIixcclxuICAgICAgICBcImVub3Npc1wiLFxyXG4gICAgICAgIFwiYXJjYW5lXCIsXHJcbiAgICAgICAgXCJub3ZhXCIsXHJcbiAgICAgICAgXCJyZWJvb3RcIixcclxuICAgICAgICBcInJlYm9vdDJcIlxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHsgbHVuYVJhbmssIHNjYW5pYVJhbmssIGVseXNpdW1SYW5rLCBjcm9hUmFuaywgYXVyb3JhUmFuaywgYmVyYVJhbmssIHJlZFJhbmssIHVuaW9uUmFuaywgemVuaXRoUmFuaywgZW5vc2lzUmFuaywgYXJjYW5lUmFuaywgbm92YVJhbmssIHJlYm9vdFJhbmssIHJlYm9vdDJSYW5rIH0gPSBSYW5rO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGx1bmFSYW5rKVxyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgIGRhdGEucHVzaChsdW5hUmFuaywgc2NhbmlhUmFuaywgZWx5c2l1bVJhbmssIGNyb2FSYW5rLCBhdXJvcmFSYW5rLCBiZXJhUmFuaywgcmVkUmFuaywgdW5pb25SYW5rLCB6ZW5pdGhSYW5rLCBlbm9zaXNSYW5rLCBhcmNhbmVSYW5rLCBub3ZhUmFuaywgcmVib290UmFuaywgcmVib290MlJhbmspO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9yYW5raW5nLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciBraW5kPVwiQWNoaWV2ZW1lbnRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtpbmdfX21haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBjbGFzc05hbWU9XCJwb2ludGVyXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL2xlZnQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtIC0gMSA8IDAgPyAwIDogbnVtIC0gMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtpbmdfX2luc2lnbmlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgwKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvbHVuYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgxKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvc2NhbmlhLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDIpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9lbHlzaXVtLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDMpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9jcm9hLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDQpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9hdXJvcmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNSl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2JlcmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNil9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3JlZC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg3KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvdW5pb24ucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOCl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3plbml0aC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg5KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvZW5vc2lzLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDEwKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvYXJjYW5lLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDExKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvbm92YS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgxMil9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3JlYm9vdC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgxMyl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3JlYm9vdDIucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtpbmdfX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yMDIw64WEIDEx7JuUIDI37J28IOq4iOyalOydvDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtdGl0bGUgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7quLjrk5wg7KCV67O0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1sLTNcIj7quLjrk5zroIjrsqg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWwtM1wiPu2PrOyduO2KuDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJuZXh0LWJ0blwiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiBzcmM9XCIuLi8uLi9pbWFnZXMvcmlnaHQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtICsgMSA+IHdvcmxkLmxlbmd0aCAtIDEgPyB3b3JsZC5sZW5ndGggLSAxIDogbnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==