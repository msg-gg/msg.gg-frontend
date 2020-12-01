webpackHotUpdate_N_E("pages/group/Adventurer",{

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
    console.log(props.group);
    document.querySelectorAll(".sidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("sidebar__group__active");else li.classList.add("sidebar__group__none");
    });
  });
  var group = ["adventurer", "cygnus", "resistance", "hero", "grandis", "zero", "kinesis"];
  return __jsx("ul", {
    className: "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Adventurer"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 59
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Cygnus"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 55
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Resistance"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 59
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Hero"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 53
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Grandis"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 56
    }
  }, "\uADF8\uB780\uB514\uC2A4"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Zero"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 53
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "sidebar__group pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.title, "/Kinesis"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJzaWRlQmFyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJhY3RpdmUiLCJncm91cCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpIiwiaSIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osS0FBSyxDQUFDRyxLQUFwQixDQUFiO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFLLENBQUNHLEtBQWxCO0FBRUFJLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzFELFVBQUdBLENBQUMsSUFBSVQsTUFBUixFQUNJUSxFQUFFLENBQUNFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQix3QkFBakIsRUFESixLQUdJSCxFQUFFLENBQUNFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixzQkFBakI7QUFDUCxLQUxEO0FBTUgsR0FWUSxDQUFUO0FBWUEsTUFBTVYsS0FBSyxHQUFHLENBQ1YsWUFEVSxFQUVWLFFBRlUsRUFHVixZQUhVLEVBSVYsTUFKVSxFQUtWLFNBTFUsRUFNVixNQU5VLEVBT1YsU0FQVSxDQUFkO0FBVUEsU0FDSTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksYUFBTUgsS0FBSyxDQUFDYyxLQUFaLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEM7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUExQyxDQURKLENBREosRUFJSTtBQUFJLGFBQVMsRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksYUFBTWQsS0FBSyxDQUFDYyxLQUFaLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQXRDLENBREosQ0FKSixFQU9JO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNZCxLQUFLLENBQUNjLEtBQVosZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQTFDLENBREosQ0FQSixFQVVJO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNZCxLQUFLLENBQUNjLEtBQVosVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBcEMsQ0FESixDQVZKLEVBYUk7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1kLEtBQUssQ0FBQ2MsS0FBWixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUM7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUF2QyxDQURKLENBYkosRUFnQkk7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1kLEtBQUssQ0FBQ2MsS0FBWixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0M7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFwQyxDQURKLENBaEJKLEVBbUJJO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNZCxLQUFLLENBQUNjLEtBQVosYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBdkMsQ0FESixDQW5CSixDQURKO0FBeUJILENBaEREOztHQUFNZixPOztBQWtEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5iZWE3ZWUyMzVmNmVkZjU2MmZjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZSA9IGdyb3VwLmluZGV4T2YocHJvcHMuZ3JvdXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmdyb3VwKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXIgPiBsaVwiKS5mb3JFYWNoKChsaSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpID09IGFjdGl2ZSkgXHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9fZ3JvdXBfX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfX2dyb3VwX19ub25lXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncm91cCA9IFtcclxuICAgICAgICBcImFkdmVudHVyZXJcIiwgXHJcbiAgICAgICAgXCJjeWdudXNcIixcclxuICAgICAgICBcInJlc2lzdGFuY2VcIixcclxuICAgICAgICBcImhlcm9cIixcclxuICAgICAgICBcImdyYW5kaXNcIiwgXHJcbiAgICAgICAgXCJ6ZXJvXCIsXHJcbiAgICAgICAgXCJraW5lc2lzXCIsXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fZ3JvdXAgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb3BzLnRpdGxlfS9BZHZlbnR1cmVyYH0+PGEgaHJlZj1cIiNcIj7rqqjtl5jqsIA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhcl9fZ3JvdXAgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Byb3BzLnRpdGxlfS9DeWdudXNgfT48YSBocmVmPVwiI1wiPuyLnOq3uOuEiOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L1Jlc2lzdGFuY2VgfT48YSBocmVmPVwiI1wiPuugiOyngOyKpO2DleyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L0hlcm9gfT48YSBocmVmPVwiI1wiPuyYgeybhTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L0dyYW5kaXNgfT48YSBocmVmPVwiI1wiPuq3uOuegOuUlOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L1plcm9gfT48YSBocmVmPVwiI1wiPuygnOuhnDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyX19ncm91cCBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvcHMudGl0bGV9L0tpbmVzaXNgfT48YSBocmVmPVwiI1wiPu2CpOuEpOyLnOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=