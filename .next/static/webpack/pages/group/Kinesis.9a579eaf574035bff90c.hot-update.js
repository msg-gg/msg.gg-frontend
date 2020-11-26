webpackHotUpdate_N_E("pages/group/Kinesis",{

/***/ "./compornents/Sidebar.js":
/*!********************************!*\
  !*** ./compornents/Sidebar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\compornents\\Sidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var sideBar = function sideBar(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var active = group.indexOf(props.group);
    document.querySelectorAll(".sidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("sidebar__group__active");else li.classList.add("sidebar__group__none");
    });
  });
  var group = ["adventruer", "cygnus", "resistance", "hero", "grandis", "zero", "kinesis"];
  return __jsx("ul", {
    className: "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Adventurer"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 59
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Cygnus"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 55
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Resistance"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 59
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Hero"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 53
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Grandis"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 56
    }
  }, "\uADF8\uB780\uB514\uC2A4"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Zero"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 53
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "sidebar__group sidebar__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Kinesis"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 56
    }
  }, "\uD0A4\uB124\uC2DC\uC2A4"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJzaWRlQmFyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJhY3RpdmUiLCJncm91cCIsImluZGV4T2YiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGkiLCJpIiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixLQUFLLENBQUNHLEtBQXBCLENBQWI7QUFFQUUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0MsT0FBM0MsQ0FBbUQsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDMUQsVUFBR0EsQ0FBQyxJQUFJUCxNQUFSLEVBQ0lNLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCLHdCQUFqQixFQURKLEtBR0lILEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCLHNCQUFqQjtBQUNQLEtBTEQ7QUFNSCxHQVRRLENBQVQ7QUFXQSxNQUFNUixLQUFLLEdBQUcsQ0FDVixZQURVLEVBRVYsUUFGVSxFQUdWLFlBSFUsRUFJVixNQUpVLEVBS1YsU0FMVSxFQU1WLE1BTlUsRUFPVixTQVBVLENBQWQ7QUFVQSxTQUNJO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNSCxLQUFLLENBQUNZLEtBQVosZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTFDLENBREosQ0FESixFQUlJO0FBQUksYUFBUyxFQUFDLDZDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNWixLQUFLLENBQUNZLEtBQVosWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBdEMsQ0FESixDQUpKLEVBT0k7QUFBSSxhQUFTLEVBQUMsNkNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1aLEtBQUssQ0FBQ1ksS0FBWixnQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBDO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBMUMsQ0FESixDQVBKLEVBVUk7QUFBSSxhQUFTLEVBQUMsNkNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1aLEtBQUssQ0FBQ1ksS0FBWixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0M7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFwQyxDQURKLENBVkosRUFhSTtBQUFJLGFBQVMsRUFBQyw2Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksYUFBTVosS0FBSyxDQUFDWSxLQUFaLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQXZDLENBREosQ0FiSixFQWdCSTtBQUFJLGFBQVMsRUFBQyw2Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksYUFBTVosS0FBSyxDQUFDWSxLQUFaLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXBDLENBREosQ0FoQkosRUFtQkk7QUFBSSxhQUFTLEVBQUMsNkNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1aLEtBQUssQ0FBQ1ksS0FBWixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUM7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUF2QyxDQURKLENBbkJKLENBREo7QUF5QkgsQ0EvQ0Q7O0dBQU1iLE87O0FBaURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cC9LaW5lc2lzLjlhNTc5ZWFmNTc0MDM1YmZmOTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWN0aXZlID0gZ3JvdXAuaW5kZXhPZihwcm9wcy5ncm91cCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhciA+IGxpXCIpLmZvckVhY2goKGxpLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gYWN0aXZlKSBcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX19ncm91cF9fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9fZ3JvdXBfX25vbmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwID0gW1xyXG4gICAgICAgIFwiYWR2ZW50cnVlclwiLCBcclxuICAgICAgICBcImN5Z251c1wiLFxyXG4gICAgICAgIFwicmVzaXN0YW5jZVwiLFxyXG4gICAgICAgIFwiaGVyb1wiLFxyXG4gICAgICAgIFwiZ3JhbmRpc1wiLCBcclxuICAgICAgICBcInplcm9cIixcclxuICAgICAgICBcImtpbmVzaXNcIixcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L0FkdmVudHVyZXJgfT48YSBocmVmPVwiI1wiPuuqqO2XmOqwgDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBzaWRlYmFyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L0N5Z251c2B9PjxhIGhyZWY9XCIjXCI+7Iuc6re464SI7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2dyb3VwIHNpZGViYXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50aXRsZX0vUmVzaXN0YW5jZWB9PjxhIGhyZWY9XCIjXCI+66CI7KeA7Iqk7YOV7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2dyb3VwIHNpZGViYXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50aXRsZX0vSGVyb2B9PjxhIGhyZWY9XCIjXCI+7JiB7JuFPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2dyb3VwIHNpZGViYXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50aXRsZX0vR3JhbmRpc2B9PjxhIGhyZWY9XCIjXCI+6re4656A65SU7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2dyb3VwIHNpZGViYXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50aXRsZX0vWmVyb2B9PjxhIGhyZWY9XCIjXCI+7KCc66GcPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXJfX2dyb3VwIHNpZGViYXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50aXRsZX0vS2luZXNpc2B9PjxhIGhyZWY9XCIjXCI+7YKk64Sk7Iuc7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==