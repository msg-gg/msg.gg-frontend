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
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dualblade'),
      job = _useState[0],
      setJob = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector(".character__img").style.transition = "0s";
    document.querySelector(".character__img").style.width = "100%";
    document.querySelector(".character__rect").style.transition = "0s";
    document.querySelector(".character__rect").style.width = "100%";
    document.querySelector(".character__rect").style.left = "-20%";
    setTimeout(function () {
      document.querySelector(".character__img").style.transition = "1s";
      document.querySelector(".character__img").style.width = "100%";
      document.querySelector(".character__rect").style.transition = "1s";
      document.querySelector(".character__rect").style.width = "30%";
      document.querySelector(".character__rect").style.left = "20%";
    }, 10);
  });
  var background = {
    backgroundImage: "url(../../images/background/".concat(job, ".png)")
  };
  var characterImg = {
    backgroundImage: "url(../../images/job/".concat(job, ".png)")
  };
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("script", {
    src: "/js/app.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg",
    style: background,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "character__sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "character__group character__group__active pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Adventurer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 56
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 52
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Resistance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 56
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 50
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Nova",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 50
    }
  }, "\uB178\uBC14"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Zero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 50
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Kinesis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, "\uD0A4\uB124\uC2DC\uC2A4")))), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "character__img",
    style: characterImg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "character flex-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("li", {
    onClick: function onClick() {
      return setJob("paladine");
    },
    className: "paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("darknight");
    },
    className: "darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("hero");
    },
    className: "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("dualblade");
    },
    className: "dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("bishop");
    },
    className: "bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("bowmaster");
    },
    className: "bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })))));
};

_s(Index, "UBPFwUEbNWbS6iJ4U6HLv8H6t0U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiam9iIiwic2V0Sm9iIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJsZWZ0Iiwic2V0VGltZW91dCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjaGFyYWN0ZXJJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLFdBQUQsQ0FEZDtBQUFBLE1BQ1RDLEdBRFM7QUFBQSxNQUNKQyxNQURJOztBQUdoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLEtBQTFDLENBQWdEQyxVQUFoRCxHQUE2RCxJQUE3RDtBQUNBSCxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxLQUExQyxDQUFnREUsS0FBaEQsR0FBd0QsTUFBeEQ7QUFFQUosWUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ0MsS0FBM0MsQ0FBaURDLFVBQWpELEdBQThELElBQTlEO0FBQ0FILFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNDLEtBQTNDLENBQWlERSxLQUFqRCxHQUF5RCxNQUF6RDtBQUNBSixZQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDQyxLQUEzQyxDQUFpREcsSUFBakQsR0FBd0QsTUFBeEQ7QUFDQUMsY0FBVSxDQUFDLFlBQU07QUFDakJOLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLEtBQTFDLENBQWdEQyxVQUFoRCxHQUE2RCxJQUE3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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSTtBQUFJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxXQUFELENBQVo7QUFBQSxLQUFiO0FBQXdDLGFBQVMsRUFBQyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQTlCSixDQVpKLENBREo7QUF3REgsQ0FwRkQ7O0dBQU1ILEs7O0tBQUFBLEs7QUFzRlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dyb3VwL0FkdmVudHVyZXIuNDNmZWQ3YTVkNzAzNmMwMDBmYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9Gb290ZXIvZm9vdGVyXCJcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2pvYiwgc2V0Sm9iXSA9IHVzZVN0YXRlKCdkdWFsYmxhZGUnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX3JlY3RcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19yZWN0XCIpLnN0eWxlLmxlZnQgPSBcIi0yMCVcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX2ltZ1wiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKS5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKS5zdHlsZS53aWR0aCA9IFwiMzAlXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19yZWN0XCIpLnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdmFyIGJhY2tncm91bmQgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC4uLy4uL2ltYWdlcy9iYWNrZ3JvdW5kLyR7am9ifS5wbmcpYCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hhcmFjdGVySW1nID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCguLi8uLi9pbWFnZXMvam9iLyR7am9ifS5wbmcpYCxcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9qb2Ivam9iLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYXBwLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19iZ1wiIHN0eWxlPXtiYWNrZ3JvdW5kfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fYWN0aXZlIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9BZHZlbnR1cmVyXCI+PGEgaHJlZj1cIiNcIj7rqqjtl5jqsIA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvQ3lnbnVzXCI+PGEgaHJlZj1cIiNcIj7si5zqt7jrhIjsiqQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvUmVzaXN0YW5jZVwiPjxhIGhyZWY9XCIjXCI+66CI7KeA7Iqk7YOV7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0hlcm9cIj48YSBocmVmPVwiI1wiPuyYgeybhTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9Ob3ZhXCI+PGEgaHJlZj1cIiNcIj7rhbjrsJQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvWmVyb1wiPjxhIGhyZWY9XCIjXCI+7KCc66GcPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0tpbmVzaXNcIj48YSBocmVmPVwiI1wiPu2CpOuEpOyLnOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19pbWdcIiBzdHlsZT17Y2hhcmFjdGVySW1nfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3NlbGVjdCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGFyYWN0ZXIgZmxleC1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcInBhbGFkaW5lXCIpfSBjbGFzc05hbWU9XCJwYWxhZGluZVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJkYXJrbmlnaHRcIil9IGNsYXNzTmFtZT1cImRhcmtuaWdodFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJoZXJvXCIpfSBjbGFzc05hbWU9XCJoZXJvXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImR1YWxibGFkZVwiKX0gY2xhc3NOYW1lPVwiZHVhbGJsYWRlXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImJpc2hvcFwiKX0gY2xhc3NOYW1lPVwiYmlzaG9wXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImJvd21hc3RlclwiKX0gY2xhc3NOYW1lPVwiYm93bWFzdGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9