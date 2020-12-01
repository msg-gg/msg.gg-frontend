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
/* harmony import */ var _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Json/adventruer/job.json */ "./Json/adventruer/job.json");
var _Json_adventruer_job_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../Json/adventruer/job.json */ "./Json/adventruer/job.json", 1);
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
    console.log(num);
    document.querySelector("#__next").style.backgroundImage = "url(../../images/ranking/background.png)";
    var rankingInsignia = document.querySelector(".ranking__insignia");
    var width = -260;
    rankingInsignia.style.transition = ".5s";
    var translateX = num * width >= width * 2 ? 0 : (num - 2) * width < -1820 ? -1820 : (num - 2) * width;
    rankingInsignia.style.transform = "translateX(".concat(translateX, "px)");
    var worldImg = document.querySelectorAll(".ranking__insignia > div");
    worldImg.forEach(function (img, i) {
      img.style.backgroundImage = "url(../../images/ranking/uninsignia.png)";
      if (i == num) img.style.backgroundImage = "url(../../images/ranking/insignia.png)";
    });
  });
  var world = ["luna", "scania", "elysium", "croa", "aurora", "bera", "red", "union", "zenith", "enosis", "arcane", "nova"];
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/ranking.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_compornents_totalSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    kind: "World",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ranking__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ranking__insignia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/luna.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/scania.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/elysium.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/croa.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/aurora.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/bera.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/red.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/union.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/zenith.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/enosis.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/arcane.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 66
    }
  })), __jsx("div", {
    className: "flex-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "../../images/ranking/world/nova.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 66
    }
  })))), __jsx("img", {
    id: "next-btn",
    className: "pointer",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > world.length ? world.length : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2luZy90b3RhbC9Xb3JsZFJhbmtpbmcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicmFua2luZ0luc2lnbmlhIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsIndvcmxkSW1nIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbWciLCJpIiwid29ybGQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2RDLEdBRGM7QUFBQSxNQUNUQyxNQURTOztBQUdyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0FLLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ0MsS0FBbEMsQ0FBd0NDLGVBQXhDO0FBRUEsUUFBSUMsZUFBZSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXRCO0FBQ0EsUUFBSUksS0FBSyxHQUFHLENBQUMsR0FBYjtBQUVBRCxtQkFBZSxDQUFDRixLQUFoQixDQUFzQkksVUFBdEIsR0FBbUMsS0FBbkM7QUFDQSxRQUFJQyxVQUFVLEdBQUdaLEdBQUcsR0FBR1UsS0FBTixJQUFlQSxLQUFLLEdBQUcsQ0FBdkIsR0FBMkIsQ0FBM0IsR0FBK0IsQ0FBQ1YsR0FBRyxHQUFHLENBQVAsSUFBWVUsS0FBWixHQUFv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O0FBQWlKLE9BQUcsRUFBQyxFQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJKLENBRkosQ0FYSixDQURKO0FBcUNILENBNUVEOztHQUFNSCxLOztLQUFBQSxLO0FBOEVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5raW5nL3RvdGFsL1dvcmxkUmFua2luZy45ZmRlNjIxMmU4NjExZGJkMTI5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb3JuZW50cy90b3RhbFNpZGViYXJcIlxyXG5pbXBvcnQgSnNvbiBmcm9tIFwiLi4vLi4vLi4vSnNvbi9hZHZlbnRydWVyL2pvYi5qc29uXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL3JhbmtpbmcvYmFja2dyb3VuZC5wbmcpYDtcclxuICAgIFxyXG4gICAgICAgIGxldCByYW5raW5nSW5zaWduaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmtpbmdfX2luc2lnbmlhXCIpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IC0yNjA7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmFua2luZ0luc2lnbmlhLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gbnVtICogd2lkdGggPj0gd2lkdGggKiAyID8gMCA6IChudW0gLSAyKSAqIHdpZHRoIDwgLTE4MjAgPyAtMTgyMCA6IChudW0gLSAyKSAqIHdpZHRoO1xyXG5cclxuICAgICAgICByYW5raW5nSW5zaWduaWEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWA7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFua2luZ19faW5zaWduaWEgPiBkaXZcIik7IFxyXG5cclxuICAgICAgICB3b3JsZEltZy5mb3JFYWNoKChpbWcsIGkpID0+IHtcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL3JhbmtpbmcvdW5pbnNpZ25pYS5wbmcpYDtcclxuICAgICAgICAgICAgaWYoaSA9PSBudW0pIFxyXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL3JhbmtpbmcvaW5zaWduaWEucG5nKWA7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgd29ybGQgPSBbXHJcbiAgICAgICAgXCJsdW5hXCIsXHJcbiAgICAgICAgXCJzY2FuaWFcIixcclxuICAgICAgICBcImVseXNpdW1cIixcclxuICAgICAgICBcImNyb2FcIixcclxuICAgICAgICBcImF1cm9yYVwiLFxyXG4gICAgICAgIFwiYmVyYVwiLFxyXG4gICAgICAgIFwicmVkXCIsXHJcbiAgICAgICAgXCJ1bmlvblwiLFxyXG4gICAgICAgIFwiemVuaXRoXCIsXHJcbiAgICAgICAgXCJlbm9zaXNcIixcclxuICAgICAgICBcImFyY2FuZVwiLFxyXG4gICAgICAgIFwibm92YVwiXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9yYW5raW5nLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciBraW5kPVwiV29ybGRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtpbmdfX21haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJldi1idG5cIiBjbGFzc05hbWU9XCJwb2ludGVyXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL2xlZnQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtIC0gMSA8IDAgPyAwIDogbnVtIC0gMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtpbmdfX2luc2lnbmlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2x1bmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9zY2FuaWEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9lbHlzaXVtLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9pbnRlclwiPjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3Jhbmtpbmcvd29ybGQvY3JvYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2F1cm9yYS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2JlcmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC9yZWQucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlciBwb2ludGVyXCI+PGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvcmFua2luZy93b3JsZC91bmlvbi5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL3plbml0aC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2Vub3Npcy5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL2FyY2FuZS5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvaW50ZXJcIj48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9yYW5raW5nL3dvcmxkL25vdmEucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibmV4dC1idG5cIiBjbGFzc05hbWU9XCJwb2ludGVyXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSArIDEgPiB3b3JsZC5sZW5ndGggPyB3b3JsZC5sZW5ndGggOiBudW0gKyAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9