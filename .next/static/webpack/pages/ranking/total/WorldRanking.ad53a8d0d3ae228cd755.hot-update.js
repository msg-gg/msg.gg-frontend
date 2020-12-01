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
      tr.innerHTML = "\n                            <td>".concat(item.rank, " </td>\n                            <td>\n                                <img style=\"width: 1vw height: 5vh; margin-right: .5em;\" src=\"").concat(item.img, "\" alt=\"\"/>\n                                <p>").concat(item.job, "</p>\n                                <p>").concat(item.level, " | ").concat(item.job, "</p>\n                            </td>\n                            <td>").concat(item.level, " </td>\n                            <td>").concat(item.popularity, " </td>");
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
    kind: "World",
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
  })))), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "2020\uB144 11\uC6D4 27\uC77C \uAE08\uC694\uC77C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, "\uC21C\uC704"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, "\uCE90\uB9AD\uD130 \uC815\uBCF4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, "\uC778\uAE30\uB3C4"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "\uAE38\uB4DC"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy90b3RhbC9Xb3JsZFJhbmtpbmcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInJhbmtpbmdJbnNpZ25pYSIsIndvcmxkSW1nIiwicXVlcnlTZWxlY3RvckFsbCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXgiLCJ0cmFuc2l0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsImZvckVhY2giLCJpbWciLCJpIiwidGJvZHkiLCJpbm5lckhUTUwiLCJpdGVtIiwidHIiLCJjcmVhdGVFbGVtZW50IiwicmFuayIsImpvYiIsImxldmVsIiwicG9wdWxhcml0eSIsImFwcGVuZENoaWxkIiwid29ybGQiLCJsdW5hUmFuayIsIlJhbmsiLCJzY2FuaWFSYW5rIiwiZWx5c2l1bVJhbmsiLCJjcm9hUmFuayIsImF1cm9yYVJhbmsiLCJiZXJhUmFuayIsInJlZFJhbmsiLCJ1bmlvblJhbmsiLCJ6ZW5pdGhSYW5rIiwiZW5vc2lzUmFuayIsImFyY2FuZVJhbmsiLCJub3ZhUmFuayIsInJlYm9vdFJhbmsiLCJSZWJvb3RSYW5rIiwicmVib290MlJhbmsiLCJwdXNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsQ0FBRCxDQURUO0FBQUEsTUFDZEMsR0FEYztBQUFBLE1BQ1RDLE1BRFM7O0FBR3JCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQyxFQUFELENBQWhCLEVBQXNCTCxHQUF0QjtBQUNBTSxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NDLEtBQWxDLENBQXdDQyxlQUF4QztBQUVBLFFBQUlDLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF0QjtBQUNBLFFBQUlJLFFBQVEsR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBZjtBQUNBLFFBQUlDLEtBQUssR0FBRyxFQUFFRixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlHLFdBQVosR0FBMEIsRUFBNUIsQ0FBWjtBQUNBLFFBQUlDLEdBQUcsR0FBR0YsS0FBSyxHQUFHLENBQWxCO0FBRUFILG1CQUFlLENBQUNGLEtBQWhCLENBQXNCUSxVQUF0QixHQUFtQyxLQUFuQztBQUNBLFFBQUlDLFVBQVUsR0FBR2pCLEdBQUcsR0FBR2EsS0FBTixJQUFlQSxLQUFLLEdBQUcsQ0FBdkIsR0FBMkIsQ0FBM0IsR0FBK0IsQ0FBQ2IsR0FBRyxHQUFHLENBQVAsSUFBWWEsS0FBWixHQUFvQkUsR0FBcEIsR0FBMEJBLEdBQTFCLEdBQWdDLENBQUNmLEdBQUcsR0FBRyxDQUFQLElBQVlhLEtBQTVGO0FBRUFILG1CQUFlLENBQUNGLEtBQWhCLENBQXNCVSxTQUF0Qix3QkFBZ0RELFVBQWhEO0FBR0FOLFlBQVEsQ0FBQ1EsT0FBVCxDQUFpQixVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUN6QkQsU0FBRyxDQUFDWixLQUFKLENBQVVDLGVBQVY7QUFDQSxVQUFHWSxDQUFDLElBQUlyQixHQUFSLEVBQ0lvQixHQUFHLENBQUNaLEtBQUosQ0FBVUMsZUFBVjtBQUNQLEtBSkQ7QUFNQSxRQUFJYSxLQUFLLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBZSxTQUFLLENBQUNDLFNBQU4sR0FBa0IsRUFBbEI7QUFFQWxCLFFBQUksQ0FBQ0wsR0FBRCxDQUFKLENBQVVtQixPQUFWLENBQWtCLFVBQUFLLElBQUksRUFBSTtBQUN0QixVQUFJQyxFQUFFLEdBQUduQixRQUFRLENBQUNvQixhQUFULENBQXVCLElBQXZCLENBQVQ7QUFFQUQsUUFBRSxDQUFDRixTQUFILCtDQUNzQkMsSUFBSSxDQUFDRyxJQUQzQix3SkFHb0ZILElBQUksQ0FBQ0osR0FIekYsK0RBSXlCSSxJQUFJLENBQUNJLEdBSjlCLHNEQUt5QkosSUFBSSxDQUFDSyxLQUw5QixnQkFLeUNMLElBQUksQ0FBQ0ksR0FMOUMsc0ZBT3NCSixJQUFJLENBQUNLLEtBUDNCLHFEQVFzQkwsSUFBSSxDQUFDTSxVQVIzQjtBQVVBUixXQUFLLENBQUNTLFdBQU4sQ0FBa0JOLEVBQWxCO0FBQ0gsS0FkRDtBQWVILEdBdkNRLENBQVQ7QUF5Q0EsTUFBTU8sS0FBSyxHQUFHLENBQ1YsTUFEVSxFQUVWLFFBRlUsRUFHVixTQUhVLEVBSVYsTUFKVSxFQUtWLFFBTFUsRUFNVixNQU5VLEVBT1YsS0FQVSxFQVFWLE9BUlUsRUFTVixRQVRVLEVBVVYsUUFWVSxFQVdWLFFBWFUsRUFZVixNQVpVLEVBYVYsUUFiVSxFQWNWLFNBZFUsQ0FBZDtBQTVDcUIsTUE2RGJDLFFBN0RhLEdBNkQySEMsNENBN0QzSCxDQTZEYkQsUUE3RGE7QUFBQSxNQTZESEUsVUE3REcsR0E2RDJIRCw0Q0E3RDNILENBNkRIQyxVQTdERztBQUFBLE1BNkRTQyxXQTdEVCxHQTZEMkhGLDRDQTdEM0gsQ0E2RFNFLFdBN0RUO0FBQUEsTUE2RHNCQyxRQTdEdEIsR0E2RDJISCw0Q0E3RDNILENBNkRzQkcsUUE3RHRCO0FBQUEsTUE2RGdDQyxVQTdEaEMsR0E2RDJISiw0Q0E3RDNILENBNkRnQ0ksVUE3RGhDO0FBQUEsTUE2RDRDQyxRQTdENUMsR0E2RDJITCw0Q0E3RDNILENBNkQ0Q0ssUUE3RDVDO0FBQUEsTUE2RHNEQyxPQTdEdEQsR0E2RDJITiw0Q0E3RDNILENBNkRzRE0sT0E3RHREO0FBQUEsTUE2RCtEQyxTQTdEL0QsR0E2RDJIUCw0Q0E3RDNILENBNkQrRE8sU0E3RC9EO0FBQUEsTUE2RDBFQyxVQTdEMUUsR0E2RDJIUiw0Q0E3RDNILENBNkQwRVEsVUE3RDFFO0FBQUEsTUE2RHNGQyxVQTdEdEYsR0E2RDJIVCw0Q0E3RDNILENBNkRzRlMsVUE3RHRGO0FBQUEsTUE2RGtHQyxVQTdEbEcsR0E2RDJIViw0Q0E3RDNILENBNkRrR1UsVUE3RGxHO0FBQUEsTUE2RDhHQyxRQTdEOUcsR0E2RDJIWCw0Q0E3RDNILENBNkQ4R1csUUE3RDlHO0FBQUEsTUE4RGJDLFVBOURhLEdBOERlQyxrREE5RGYsQ0E4RGJELFVBOURhO0FBQUEsTUE4RERFLFdBOURDLEdBOERlRCxrREE5RGYsQ0E4RERDLFdBOURDO0FBK0RyQixNQUFNM0MsSUFBSSxHQUFHLEVBQWI7QUFFQUEsTUFBSSxDQUFDNEMsSUFBTCxDQUFVaEIsUUFBVixFQUFvQkUsVUFBcEIsRUFBZ0NDLFdBQWhDLEVBQTZDQyxRQUE3QyxFQUF1REMsVUFBdkQsRUFBbUVDLFFBQW5FLEVBQTZFQyxPQUE3RSxFQUFzRkMsU0FBdEYsRUFBaUdDLFVBQWpHLEVBQTZHQyxVQUE3RyxFQUF5SEMsVUFBekgsRUFBcUlDLFFBQXJJO0FBQ0F4QyxNQUFJLENBQUM0QyxJQUFMLENBQVVILFVBQVYsRUFBc0JFLFdBQXRCO0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG9CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUNJLFFBQUksRUFBQyxxRkFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBVUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQVMsUUFBSSxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsU0FBN0I7QUFBdUMsT0FBRyxFQUFDLDhCQUEzQztBQUEwRSxXQUFPLEVBQUU7QUFBQSxhQUFJL0MsTUFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQVYsR0FBYyxDQUFkLEdBQWtCQSxHQUFHLEdBQUcsQ0FBekIsQ0FBVjtBQUFBLEtBQW5GO0FBQTBILE9BQUcsRUFBQyxFQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUMsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWQ7QUFBK0IsYUFBUyxFQUFDLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEO0FBQUssT0FBRyxFQUFDLHFDQUFUO0FBQStDLE9BQUcsRUFBQyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9ELENBREosRUFFSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFkO0FBQStCLGFBQVMsRUFBQyxxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRDtBQUFLLE9BQUcsRUFBQyx1Q0FBVDtBQUFpRCxPQUFHLEVBQUMsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvRCxDQUZKLEVBR0k7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBZDtBQUErQixhQUFTLEVBQUMscUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0Q7QUFBSyxPQUFHLEVBQUMsd0NBQVQ7QUFBa0QsT0FBRyxFQUFDLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBL0QsQ0FISixFQUlJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWQ7QUFBK0IsYUFBUyxFQUFDLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEO0FBQUssT0FBRyxFQUFDLHFDQUFUO0FBQStDLE9BQUcsRUFBQyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9ELENBSkosRUFLSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFkO0FBQStCLGFBQVMsRUFBQyxxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRDtBQUFLLE9BQUcsRUFBQyx1Q0FBVDtBQUFpRCxPQUFHLEVBQUMsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvRCxDQUxKLEVBTUk7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBZDtBQUErQixhQUFTLEVBQUMscUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0Q7QUFBSyxPQUFHLEVBQUMscUNBQVQ7QUFBK0MsT0FBRyxFQUFDLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBL0QsQ0FOSixFQU9JO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWQ7QUFBK0IsYUFBUyxFQUFDLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEO0FBQUssT0FBRyxFQUFDLG9DQUFUO0FBQThDLE9BQUcsRUFBQyxFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9ELENBUEosRUFRSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxDQUFELENBQVo7QUFBQSxLQUFkO0FBQStCLGFBQVMsRUFBQyxxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRDtBQUFLLE9BQUcsRUFBQyxzQ0FBVDtBQUFnRCxPQUFHLEVBQUMsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvRCxDQVJKLEVBU0k7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQUEsS0FBZDtBQUErQixhQUFTLEVBQUMscUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0Q7QUFBSyxPQUFHLEVBQUMsdUNBQVQ7QUFBaUQsT0FBRyxFQUFDLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBL0QsQ0FUSixFQVVJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWQ7QUFBK0IsYUFBUyxFQUFDLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEO0FBQUssT0FBRyxFQUFDLHVDQUFUO0FBQWlELE9BQUcsRUFBQyxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9ELENBVkosRUFXSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFkO0FBQWdDLGFBQVMsRUFBQyxxQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRTtBQUFLLE9BQUcsRUFBQyx1Q0FBVDtBQUFpRCxPQUFHLEVBQUMsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRSxDQVhKLEVBWUk7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsS0FBZDtBQUFnQyxhQUFTLEVBQUMscUJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0U7QUFBSyxPQUFHLEVBQUMscUNBQVQ7QUFBK0MsT0FBRyxFQUFDLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEUsQ0FaSixFQWFJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWQ7QUFBZ0MsYUFBUyxFQUFDLHFCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdFO0FBQUssT0FBRyxFQUFDLHVDQUFUO0FBQWlELE9BQUcsRUFBQyxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhFLENBYkosRUFjSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxFQUFELENBQVo7QUFBQSxLQUFkO0FBQWdDLGFBQVMsRUFBQyxxQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRTtBQUFLLE9BQUcsRUFBQyx3Q0FBVDtBQUFrRCxPQUFHLEVBQUMsRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRSxDQWRKLENBREosQ0FGSixFQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixDQUpKLENBREosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FwQkosRUFtQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsU0FBN0I7QUFBdUMsT0FBRyxFQUFDLCtCQUEzQztBQUEyRSxXQUFPLEVBQUU7QUFBQSxhQUFJQSxNQUFNLENBQUNELEdBQUcsR0FBRyxDQUFOLEdBQVVnQyxLQUFLLENBQUNrQixNQUFOLEdBQWUsQ0FBekIsR0FBNkJsQixLQUFLLENBQUNrQixNQUFOLEdBQWUsQ0FBNUMsR0FBZ0RsRCxHQUFHLEdBQUcsQ0FBdkQsQ0FBVjtBQUFBLEtBQXBGO0FBQXlKLE9BQUcsRUFBQyxFQUE3SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNKLENBRkosQ0FYSixDQURKO0FBc0RILENBekhEOztHQUFNSCxLOztLQUFBQSxLO0FBMkhTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5raW5nL3RvdGFsL1dvcmxkUmFua2luZy5hZDUzYThkMGQzYWUyMjhjZDc1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy90b3RhbFNpZGViYXJcIlxyXG5pbXBvcnQgUmFuayBmcm9tIFwiLi4vLi4vLi4vSnNvbi9SYW5rLmpzb25cIjtcclxuaW1wb3J0IFJlYm9vdFJhbmsgZnJvbSBcIi4uLy4uLy4uL0pzb24vUmVib290UmFuay5qc29uXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVsxM10sIG51bSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL2JhY2tncm91bmQucG5nKWA7XHJcbiAgICBcclxuICAgICAgICBsZXQgcmFua2luZ0luc2lnbmlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5raW5nX19pbnNpZ25pYVwiKTtcclxuICAgICAgICBsZXQgd29ybGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhbmtpbmdfX2luc2lnbmlhID4gZGl2XCIpOyBcclxuICAgICAgICBsZXQgd2lkdGggPSAtKHdvcmxkSW1nWzBdLm9mZnNldFdpZHRoICsgMTApOyAgIFxyXG4gICAgICAgIGxldCBtYXggPSB3aWR0aCAqIDlcclxuICAgICAgICBcclxuICAgICAgICByYW5raW5nSW5zaWduaWEuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiB3aWR0aCA+PSB3aWR0aCAqIDIgPyAwIDogKG51bSAtIDIpICogd2lkdGggPCBtYXggPyBtYXggOiAobnVtIC0gMikgKiB3aWR0aDtcclxuXHJcbiAgICAgICAgcmFua2luZ0luc2lnbmlhLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xyXG5cclxuXHJcbiAgICAgICAgd29ybGRJbWcuZm9yRWFjaCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL3VuaW5zaWduaWEucG5nKWA7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gbnVtKSBcclxuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9yYW5raW5nL2luc2lnbmlhLnBuZylgO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB0Ym9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0Ym9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBkYXRhW251bV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aXRlbS5yYW5rfSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDogMXZ3IGhlaWdodDogNXZoOyBtYXJnaW4tcmlnaHQ6IC41ZW07XCIgc3JjPVwiJHtpdGVtLmltZ31cIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLmpvYn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLmxldmVsfSB8ICR7aXRlbS5qb2J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0ubGV2ZWx9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpdGVtLnBvcHVsYXJpdHl9IDwvdGQ+YDtcclxuXHJcbiAgICAgICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHdvcmxkID0gW1xyXG4gICAgICAgIFwibHVuYVwiLFxyXG4gICAgICAgIFwic2NhbmlhXCIsXHJcbiAgICAgICAgXCJlbHlzaXVtXCIsXHJcbiAgICAgICAgXCJjcm9hXCIsXHJcbiAgICAgICAgXCJhdXJvcmFcIixcclxuICAgICAgICBcImJlcmFcIixcclxuICAgICAgICBcInJlZFwiLFxyXG4gICAgICAgIFwidW5pb25cIixcclxuICAgICAgICBcInplbml0aFwiLFxyXG4gICAgICAgIFwiZW5vc2lzXCIsXHJcbiAgICAgICAgXCJhcmNhbmVcIixcclxuICAgICAgICBcIm5vdmFcIixcclxuICAgICAgICBcInJlYm9vdFwiLFxyXG4gICAgICAgIFwicmVib290MlwiXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgeyBsdW5hUmFuaywgc2NhbmlhUmFuaywgZWx5c2l1bVJhbmssIGNyb2FSYW5rLCBhdXJvcmFSYW5rLCBiZXJhUmFuaywgcmVkUmFuaywgdW5pb25SYW5rLCB6ZW5pdGhSYW5rLCBlbm9zaXNSYW5rLCBhcmNhbmVSYW5rLCBub3ZhUmFuayB9ID0gUmFuaztcclxuICAgIGNvbnN0IHsgcmVib290UmFuaywgcmVib290MlJhbmsgfSA9IFJlYm9vdFJhbms7XHJcbiAgICBjb25zdCBkYXRhID0gW107XHJcblxyXG4gICAgZGF0YS5wdXNoKGx1bmFSYW5rLCBzY2FuaWFSYW5rLCBlbHlzaXVtUmFuaywgY3JvYVJhbmssIGF1cm9yYVJhbmssIGJlcmFSYW5rLCByZWRSYW5rLCB1bmlvblJhbmssIHplbml0aFJhbmssIGVub3Npc1JhbmssIGFyY2FuZVJhbmssIG5vdmFSYW5rKTtcclxuICAgIGRhdGEucHVzaChyZWJvb3RSYW5rLCByZWJvb3QyUmFuaylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvcmFua2luZy5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIga2luZD1cIldvcmxkXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5raW5nX19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInByZXYtYnRuXCIgY2xhc3NOYW1lPVwicG9pbnRlclwiIHNyYz1cIi4uLy4uL2ltYWdlcy9sZWZ0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSAtIDEgPCAwID8gMCA6IG51bSAtIDEpfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5raW5nX19pbnNpZ25pYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMCl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2x1bmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMSl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3NjYW5pYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgyKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvZWx5c2l1bS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgzKX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvY3JvYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSg0KX0gY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvYXVyb3JhLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDUpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9iZXJhLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDYpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9yZWQucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNyl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3VuaW9uLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0TnVtKDgpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC96ZW5pdGgucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOSl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2Vub3Npcy5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgxMCl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2FyY2FuZS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE51bSgxMSl9IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL25vdmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTIpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9yZWJvb3QucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTMpfSBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9yZWJvb3QyLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjIwMjDrhYQgMTHsm5QgMjfsnbwg6riI7JqU7J28PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuyInOychDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuy6kOumre2EsCDsoJXrs7Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7snbjquLDrj4Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7quLjrk5w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm5leHQtYnRuXCIgY2xhc3NOYW1lPVwicG9pbnRlclwiIHNyYz1cIi4uLy4uL2ltYWdlcy9yaWdodC1idXR0b24ucG5nXCIgb25DbGljaz17KCk9PnNldE51bShudW0gKyAxID4gd29ybGQubGVuZ3RoIC0gMSA/IHdvcmxkLmxlbmd0aCAtIDEgOiBudW0gKyAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9