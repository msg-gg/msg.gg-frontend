webpackHotUpdate_N_E("pages/ranking/WorldRanking",{

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
    console.log(props);
    document.querySelectorAll(".rankSidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("active");else li.classList.add("none");
    });
  });
  var kind = ["World", "Reboot", "guild", "Achievement"];
  return __jsx("ul", {
    className: "rankSidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 59
    }
  }, "\uC6D4\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 59
    }
  }, "\uB9AC\uBD80\uD2B8 \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 59
    }
  }, "\uAE38\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/".concat(props.title, "Ranking"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 59
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvdG90YWxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbInNpZGVCYXIiLCJwcm9wcyIsInVzZUVmZmVjdCIsImFjdGl2ZSIsImtpbmQiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaSIsImkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxPQUFMLENBQWFKLEtBQUssQ0FBQ0csSUFBbkIsQ0FBYjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUVBTyxZQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDOUQsVUFBR0EsQ0FBQyxJQUFJVCxNQUFSLEVBQ0lRLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFFBQWpCLEVBREosS0FHSUgsRUFBRSxDQUFDRSxTQUFILENBQWFDLEdBQWIsQ0FBaUIsTUFBakI7QUFDUCxLQUxEO0FBTUgsR0FWUSxDQUFUO0FBWUEsTUFBTVYsSUFBSSxHQUFHLENBQ1QsT0FEUyxFQUVULFFBRlMsRUFHVCxPQUhTLEVBSVQsYUFKUyxDQUFiO0FBT0EsU0FDSTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY0gsS0FBSyxDQUFDYyxLQUFwQixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEM7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBOUMsQ0FESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHFCQUFjZCxLQUFLLENBQUNjLEtBQXBCLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QztBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUE5QyxDQUZKLEVBR0ksTUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWNkLEtBQUssQ0FBQ2MsS0FBcEIsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThDO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTlDLENBSEosRUFJSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY2QsS0FBSyxDQUFDYyxLQUFwQixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEM7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBOUMsQ0FKSixDQURKO0FBUUgsQ0E1QkQ7O0dBQU1mLE87O0FBOEJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5raW5nL1dvcmxkUmFua2luZy5mYTY5OTllNzlhNmE2NmNlMWI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZSA9IGtpbmQuaW5kZXhPZihwcm9wcy5raW5kKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYW5rU2lkZWJhciA+IGxpXCIpLmZvckVhY2goKGxpLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gYWN0aXZlKSBcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBraW5kID0gW1xyXG4gICAgICAgIFwiV29ybGRcIiwgXHJcbiAgICAgICAgXCJSZWJvb3RcIixcclxuICAgICAgICBcImd1aWxkXCIsXHJcbiAgICAgICAgXCJBY2hpZXZlbWVudFwiXHJcbiAgICBdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhbmtTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy8ke3Byb3BzLnRpdGxlfVJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBhY3RpdmVcIj7sm5Trk5wg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy8ke3Byb3BzLnRpdGxlfVJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBhY3RpdmVcIj7rpqzrtoDtirgg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy8ke3Byb3BzLnRpdGxlfVJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBhY3RpdmVcIj7quLjrk5wg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy8ke3Byb3BzLnRpdGxlfVJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBhY3RpdmVcIj7sl4XsoIEg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=