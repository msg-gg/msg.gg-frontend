webpackHotUpdate_N_E("pages/init/Cygnus",{

/***/ "./pages/init/Cygnus.js":
/*!******************************!*\
  !*** ./pages/init/Cygnus.js ***!
  \******************************/
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
/* harmony import */ var _compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compornents/Sidebar */ "./compornents/Sidebar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\init\\Cygnus.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var onMouseOver = function onMouseOver(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "410px";
  jobImage.style.height = "450px";
};

var onMouseLeave = function onMouseLeave(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "350px";
  jobImage.style.height = "370px";
};

var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(num);
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/cygnus.png)";
    var cygnus = document.querySelectorAll(".job__group");
    cygnus.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(100px)";
          console.log("asd");
        } else if (i == 1) {
          job.style.transform = "translateY(170px)";
        } else if (i % 2 != 0 && i != 1) {
          job.style.transform = "translate(-".concat(100 * (i - 1), "px, 170px)");
        } else {
          job.style.transform = "translateX(-".concat(100 * (i - 1), "px)");
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var width = cygnus[0].offsetWidth;
    initJobGroup.style.transition = ".5s";
    initJobGroup.style.transform = "translateX(-".concat(width * num, "px)");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    group: "cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/cygnus.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "soulMaster",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "mikhail",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "flameWizard",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "windBreaker",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 3
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "nightWalker",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 4
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 95
    }
  }))), __jsx("div", {
    className: "striker",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Cygnus",
      query: {
        num: 5
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 95
    }
  }))))))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9DeWdudXMuanMiXSwibmFtZXMiOlsib25Nb3VzZU92ZXIiLCJlIiwiam9iSW1hZ2UiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvbk1vdXNlTGVhdmUiLCJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJudW0iLCJzZXROdW0iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY3lnbnVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkYXRhIiwiZ3JvdXAiLCJjbGFzc0xpc3QiLCJqb2IiLCJpIiwidHJhbnNmb3JtIiwiaW5pdEpvYkdyb3VwIiwib2Zmc2V0V2lkdGgiLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLENBQUMsRUFBSTtBQUNyQixNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUF4QjtBQUNBRixVQUFRLENBQUNHLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtBQUNBSixVQUFRLENBQUNHLEtBQVQsQ0FBZUUsS0FBZixHQUF1QixPQUF2QjtBQUNBTCxVQUFRLENBQUNHLEtBQVQsQ0FBZUcsTUFBZixHQUF3QixPQUF4QjtBQUNILENBTEQ7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVIsQ0FBQyxFQUFJO0FBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQXhCO0FBQ0FGLFVBQVEsQ0FBQ0csS0FBVCxDQUFlQyxVQUFmLEdBQTRCLEtBQTVCO0FBQ0FKLFVBQVEsQ0FBQ0csS0FB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LGNBQVEsaUJBQVY7QUFBNkJDLFdBQUssRUFBRTtBQUFFcEIsV0FBRyxFQUFFO0FBQVA7QUFBcEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5RCxDQURKLENBYkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixlQUFXLEVBQUViLFdBQXRDO0FBQW1ELGdCQUFZLEVBQUVTLFlBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFO0FBQUV1QixjQUFRLGlCQUFWO0FBQTZCQyxXQUFLLEVBQUU7QUFBRXBCLFdBQUcsRUFBRTtBQUFQO0FBQXBDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4RDtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUQsQ0FESixDQWhCSixDQURKLENBSkosQ0FGSixDQVhKLENBREo7QUE0Q0gsQ0E3RUQ7O0dBQU1ILEs7O0tBQUFBLEs7QUErRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luaXQvQ3lnbnVzLjEwYzBmYmIwYTRhM2RjYjRkZjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvU2lkZWJhclwiO1xyXG5cclxuY29uc3Qgb25Nb3VzZU92ZXIgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCI0MTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCI0NTBweFwiO1xyXG59XHJcblxyXG5jb25zdCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCIzNTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIzNzBweFwiO1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2JhY2tncm91bmQvY3lnbnVzLnBuZylgXHJcblxyXG4gICAgICAgIGxldCBjeWdudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvYl9fZ3JvdXBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3lnbnVzLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2RhdGEuY2xhc3NMaXN0WzFdfSA+IGRpdmApO1xyXG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKChqb2IsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgxMDBweClgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNkXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDE3MHB4KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSAlIDIgIT0gMCAmJiBpICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtJHsxMDAgKiAoaSAtIDEpfXB4LCAxNzBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7MTAwICogKGkgLSAxKX1weClgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBpbml0Sm9iR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRfX2pvYl9fZ3JvdXBcIik7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY3lnbnVzWzBdLm9mZnNldFdpZHRoOyAgICBcclxuICAgICAgICBcclxuICAgICAgICBpbml0Sm9iR3JvdXAuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjVzXCI7XHJcblxyXG4gICAgICAgIGluaXRKb2JHcm91cC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt3aWR0aCAqIG51bX1weClgO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2luaXQuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRpdGxlPVwiaW5pdFwiIGdyb3VwPVwiY3lnbnVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdF9fam9iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL2luaXQvY3lnbnVzLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fZ3JvdXAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3VsTWFzdGVyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9DeWdudXNgLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWtoYWlsXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9DeWdudXNgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGFtZVdpemFyZFwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQ3lnbnVzYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZEJyZWFrZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0N5Z251c2AsIHF1ZXJ5OiB7IG51bTogMyB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5pZ2h0V2Fsa2VyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9DeWdudXNgLCBxdWVyeTogeyBudW06IDQgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJpa2VyXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9DeWdudXNgLCBxdWVyeTogeyBudW06IDUgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==