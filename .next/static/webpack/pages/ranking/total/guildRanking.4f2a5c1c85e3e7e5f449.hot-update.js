webpackHotUpdate_N_E("pages/ranking/total/guildRanking",{

/***/ "./compornents/totalSidebar.js":
/*!*************************************!*\
  !*** ./compornents/totalSidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\compornents\\totalSidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var sideBar = function sideBar(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var active = kind.indexOf(props.kind);
    document.querySelectorAll(".rankSidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("active");else li.classList.remove("active");
    });
  });
  var kind = ["Nomal", "Reboot", "Guild", "Achievement"];
  return __jsx("ul", {
    className: "rankSidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/total/NomalRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 56
    }
  }, "\uC6D4\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/total/guildRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 56
    }
  }, "\uAE38\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/total/AchievementRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 62
    }
  }, "\uC5C5\uC801 \uB7AD\uD0B9")));
};

_s(sideBar, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (sideBar);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvdG90YWxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbInNpZGVCYXIiLCJwcm9wcyIsInVzZUVmZmVjdCIsImFjdGl2ZSIsImtpbmQiLCJpbmRleE9mIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpIiwiaSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxPQUFMLENBQWFKLEtBQUssQ0FBQ0csSUFBbkIsQ0FBYjtBQUVBRSxZQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDOUQsVUFBR0EsQ0FBQyxJQUFJUCxNQUFSLEVBQ0lNLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFFBQWpCLEVBREosS0FHSUgsRUFBRSxDQUFDRSxTQUFILENBQWFFLE1BQWIsQ0FBb0IsUUFBcEI7QUFDUCxLQUxEO0FBTUgsR0FUUSxDQUFUO0FBV0EsTUFBTVQsSUFBSSxHQUFHLENBQ1QsT0FEUyxFQUVULFFBRlMsRUFHVCxPQUhTLEVBSVQsYUFKUyxDQUFiO0FBT0EsU0FDSTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSwrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJDO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBM0MsQ0FESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLCtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkM7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUEzQyxDQUZKLEVBR0ksTUFBQyxnREFBRDtBQUFNLFFBQUkscUNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpRDtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQWpELENBSEosQ0FESjtBQU9ILENBMUJEOztHQUFNSixPOztBQTRCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmFua2luZy90b3RhbC9ndWlsZFJhbmtpbmcuNGYyYTVjMWM4NWUzZTdlNWY0NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBhY3RpdmUgPSBraW5kLmluZGV4T2YocHJvcHMua2luZCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFua1NpZGViYXIgPiBsaVwiKS5mb3JFYWNoKChsaSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpID09IGFjdGl2ZSkgXHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBraW5kID0gW1xyXG4gICAgICAgIFwiTm9tYWxcIiwgXHJcbiAgICAgICAgXCJSZWJvb3RcIixcclxuICAgICAgICBcIkd1aWxkXCIsXHJcbiAgICAgICAgXCJBY2hpZXZlbWVudFwiXHJcbiAgICBdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhbmtTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy90b3RhbC9Ob21hbFJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlclwiPuyblOuTnCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nL3RvdGFsL2d1aWxkUmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIFwiPuq4uOuTnCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nL3RvdGFsL0FjaGlldmVtZW50UmFua2luZ2B9PjxsaSBjbGFzc05hbWU9XCJwb2ludGVyIFwiPuyXheyggSDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==