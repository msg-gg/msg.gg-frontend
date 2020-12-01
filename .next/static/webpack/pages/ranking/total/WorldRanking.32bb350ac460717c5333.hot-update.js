webpackHotUpdate_N_E("pages/ranking/total/WorldRanking",{

/***/ "./pages/ranking/total/WorldRanking.js":
/*!*********************************************!*\
  !*** ./pages/ranking/total/WorldRanking.js ***!
  \*********************************************/
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
/* harmony import */ var _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Json/Rank.json */ "./Json/Rank.json");
var _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../Json/Rank.json */ "./Json/Rank.json", 1);
/* harmony import */ var _Json_RebootRank_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Json/RebootRank.json */ "./Json/RebootRank.json");
var _Json_RebootRank_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../Json/RebootRank.json */ "./Json/RebootRank.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\ranking\\total\\WorldRanking.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(data[13], num);
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
      tr.innerHTML = "\n                            <td class=\"d-flex align-items-center\">\n                                <p>".concat(item.rank, " </p>\n                                <img style=\"width: 1vw height: 5vh; margin-right: .5em;\" src=\"").concat(item.img, "\" alt=\"\"/>\n                                <div class=\"pt-4\">\n                                    <p>").concat(item.name, "</p>\n                                    <p>").concat(item.level, " | ").concat(item.job, "</p>\n                                </div>\n                            </td>\n                            <td>").concat(item.popularity, " </td>\n                            <td>").concat(item.popularity, " </td>");
      tbody.appendChild(tr);
    });
  });
  var world = ["luna", "scania", "elysium", "croa", "aurora", "bera", "red", "union", "zenith", "enosis", "arcane", "nova", "reboot", "reboot2"];
  var lunaRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.lunaRank,
      scaniaRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.scaniaRank,
      elysiumRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.elysiumRank,
      croaRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.croaRank,
      auroraRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.auroraRank,
      beraRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.beraRank,
      redRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.redRank,
      unionRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.unionRank,
      zenithRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.zenithRank,
      enosisRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.enosisRank,
      arcaneRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.arcaneRank,
      novaRank = _Json_Rank_json__WEBPACK_IMPORTED_MODULE_5__.novaRank;
  var rebootRank = _Json_RebootRank_json__WEBPACK_IMPORTED_MODULE_6__.rebootRank,
      reboot2Rank = _Json_RebootRank_json__WEBPACK_IMPORTED_MODULE_6__.reboot2Rank;
  var data = [];
  data.push(lunaRank, scaniaRank, elysiumRank, croaRank, auroraRank, beraRank, redRank, unionRank, zenithRank, enosisRank, arcaneRank, novaRank);
  data.push(rebootRank, reboot2Rank);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/ranking.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(_compornents_totalSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    kind: "World",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ranking__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ranking__insignia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/luna.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/scania.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/elysium.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/croa.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/aurora.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/bera.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/red.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/union.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/zenith.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/enosis.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/arcane.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/nova.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/reboot.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/reboot2.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 93
    }
  })))), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "2020\uB144 11\uC6D4 27\uC77C \uAE08\uC694\uC77C")), __jsx("tr", {
    className: "table-title ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, "\uCE90\uB9AD\uD130 \uC815\uBCF4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "\uC778\uAE30\uB3C4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, "\uAE38\uB4DC"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  })), __jsx("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy90b3RhbC9Xb3JsZFJhbmtpbmcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInJhbmtpbmdJbnNpZ25pYSIsIndvcmxkSW1nIiwicXVlcnlTZWxlY3RvckFsbCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXgiLCJ0cmFuc2l0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsImZvckVhY2giLCJpbWciLCJpIiwidGJvZHkiLCJpbm5lckhUTUwiLCJpdGVtIiwidHIiLCJjcmVhdGVFbGVtZW50IiwicmFuayIsIm5hbWUiLCJsZXZlbCIsImpvYiIsInBvcHVsYXJpdHkiLCJhcHBlbmRDaGlsZCIsIndvcmxkIiwibHVuYVJhbmsiLCJSYW5rIiwic2NhbmlhUmFuayIsImVseXNpdW1SYW5rIiwiY3JvYVJhbmsiLCJhdXJvcmFSYW5rIiwiYmVyYVJhbmsiLCJyZWRSYW5rIiwidW5pb25SYW5rIiwiemVuaXRoUmFuayIsImVub3Npc1JhbmsiLCJhcmNhbmVSYW5rIiwibm92YVJhbmsiLCJyZWJvb3RSYW5rIiwiUmVib290UmFuayIsInJlYm9vdDJSYW5rIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2RDLEdBRGM7QUFBQSxNQUNUQyxNQURTOztBQUdyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdB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b3RhbC9Xb3JsZFJhbmtpbmcuMzJiYjM1MGFjNDYwNzE3YzUzMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vLi4vY29tcG9ybmVudHMvdG90YWxTaWRlYmFyXCJcclxuaW1wb3J0IFJhbmsgZnJvbSBcIi4uLy4uLy4uL0pzb24vUmFuay5qc29uXCI7XHJcbmltcG9ydCBSZWJvb3RSYW5rIGZyb20gXCIuLi8uLi8uLi9Kc29uL1JlYm9vdFJhbmsuanNvblwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMTNdLCBudW0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNfX25leHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvcmFua2luZy9iYWNrZ3JvdW5kLnBuZylgO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHJhbmtpbmdJbnNpZ25pYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFua2luZ19faW5zaWduaWFcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYW5raW5nX19pbnNpZ25pYSA+IGRpdlwiKTsgXHJcbiAgICAgICAgbGV0IHdpZHRoID0gLSh3b3JsZEltZ1swXS5vZmZzZXRXaWR0aCArIDEwKTsgICBcclxuICAgICAgICBsZXQgbWF4ID0gd2lkdGggKiA5XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmFua2luZ0luc2lnbmlhLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gbnVtICogd2lkdGggPj0gd2lkdGggKiAyID8gMCA6IChudW0gLSAyKSAqIHdpZHRoIDwgbWF4ID8gbWF4IDogKG51bSAtIDIpICogd2lkdGg7XHJcblxyXG4gICAgICAgIHJhbmtpbmdJbnNpZ25pYS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYDtcclxuXHJcblxyXG4gICAgICAgIHdvcmxkSW1nLmZvckVhY2goKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvcmFua2luZy91bmluc2lnbmlhLnBuZylgO1xyXG4gICAgICAgICAgICBpZihpID09IG51bSkgXHJcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvcmFua2luZy9pbnNpZ25pYS5wbmcpYDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgdGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XHJcbiAgICAgICAgdGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgZGF0YVtudW1dLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgICAgIHRyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0ucmFua30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDogMXZ3IGhlaWdodDogNXZoOyBtYXJnaW4tcmlnaHQ6IC41ZW07XCIgc3JjPVwiJHtpdGVtLmltZ31cIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0ubGV2ZWx9IHwgJHtpdGVtLmpvYn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5wb3B1bGFyaXR5fSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5wb3B1bGFyaXR5fSA8L3RkPmA7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3b3JsZCA9IFtcclxuICAgICAgICBcImx1bmFcIixcclxuICAgICAgICBcInNjYW5pYVwiLFxyXG4gICAgICAgIFwiZWx5c2l1bVwiLFxyXG4gICAgICAgIFwiY3JvYVwiLFxyXG4gICAgICAgIFwiYXVyb3JhXCIsXHJcbiAgICAgICAgXCJiZXJhXCIsXHJcbiAgICAgICAgXCJyZWRcIixcclxuICAgICAgICBcInVuaW9uXCIsXHJcbiAgICAgICAgXCJ6ZW5pdGhcIixcclxuICAgICAgICBcImVub3Npc1wiLFxyXG4gICAgICAgIFwiYXJjYW5lXCIsXHJcbiAgICAgICAgXCJub3ZhXCIsXHJcbiAgICAgICAgXCJyZWJvb3RcIixcclxuICAgICAgICBcInJlYm9vdDJcIlxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IHsgbHVuYVJhbmssIHNjYW5pYVJhbmssIGVseXNpdW1SYW5rLCBjcm9hUmFuaywgYXVyb3JhUmFuaywgYmVyYVJhbmssIHJlZFJhbmssIHVuaW9uUmFuaywgemVuaXRoUmFuaywgZW5vc2lzUmFuaywgYXJjYW5lUmFuaywgbm92YVJhbmsgfSA9IFJhbms7XHJcbiAgICBjb25zdCB7IHJlYm9vdFJhbmssIHJlYm9vdDJSYW5rIH0gPSBSZWJvb3RSYW5rO1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgIGRhdGEucHVzaChsdW5hUmFuaywgc2NhbmlhUmFuaywgZWx5c2l1bVJhbmssIGNyb2FSYW5rLCBhdXJvcmFSYW5rLCBiZXJhUmFuaywgcmVkUmFuaywgdW5pb25SYW5rLCB6ZW5pdGhSYW5rLCBlbm9zaXNSYW5rLCBhcmNhbmVSYW5rLCBub3ZhUmFuayk7XHJcbiAgICBkYXRhLnB1c2gocmVib290UmFuaywgcmVib290MlJhbmspXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL3JhbmtpbmcuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIGtpbmQ9XCJXb3JsZFwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua2luZ19fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJwcmV2LWJ0blwiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiBzcmM9XCIuLi8uLi9pbWFnZXMvbGVmdC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gLSAxIDwgMCA/IDAgOiBudW0gLSAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua2luZ19faW5zaWduaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDApfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9sdW5hLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDEpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9zY2FuaWEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMil9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2VseXNpdW0ucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMyl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2Nyb2EucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNCl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2F1cm9yYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg1KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvYmVyYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg2KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvcmVkLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDcpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC91bmlvbi5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg4KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvemVuaXRoLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDkpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9lbm9zaXMucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTApfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9hcmNhbmUucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTEpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9ub3ZhLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDEyKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvcmVib290LnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDEzKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvcmVib290Mi5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4yMDIw64WEIDEx7JuUIDI37J28IOq4iOyalOydvDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLXRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7supDrpq3thLAg7KCV67O0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+7J246riw64+EPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+6ri465OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJuZXh0LWJ0blwiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiBzcmM9XCIuLi8uLi9pbWFnZXMvcmlnaHQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtICsgMSA+IHdvcmxkLmxlbmd0aCAtIDEgPyB3b3JsZC5sZW5ndGggLSAxIDogbnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==