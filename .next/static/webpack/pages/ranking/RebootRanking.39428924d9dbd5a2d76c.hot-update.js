webpackHotUpdate_N_E("pages/ranking/RebootRanking",{

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
    console.log(active);
    document.querySelectorAll(".rankSidebar > li").forEach(function (li, i) {
      if (i == active) li.classList.add("active");else li.classList.remove("none");
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
    href: "/ranking/WorldRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 50
    }
  }, "\uC6D4\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/RebootRanking",
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
      columnNumber: 51
    }
  }, "\uB9AC\uBD80\uD2B8 \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/guildRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 50
    }
  }, "\uAE38\uB4DC \uB7AD\uD0B9")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ranking/AchievementRanking",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "pointer ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 56
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvdG90YWxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbInNpZGVCYXIiLCJwcm9wcyIsInVzZUVmZmVjdCIsImFjdGl2ZSIsImtpbmQiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaSIsImkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsT0FBTCxDQUFhSixLQUFLLENBQUNHLElBQW5CLENBQWI7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFFQUssWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NDLE9BQS9DLENBQXVELFVBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzlELFVBQUdBLENBQUMsSUFBSVQsTUFBUixFQUNJUSxFQUFFLENBQUNFLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixRQUFqQixFQURKLEtBR0lILEVBQUUsQ0FBQ0UsU0FBSCxDQUFhRSxNQUFiLENBQW9CLE1BQXBCO0FBQ1AsS0FMRDtBQU1ILEdBVlEsQ0FBVDtBQVlBLE1BQU1YLElBQUksR0FBRyxDQUNULE9BRFMsRUFFVCxRQUZTLEVBR1QsT0FIUyxFQUlULGFBSlMsQ0FBYjtBQU9BLFNBQ0k7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUkseUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQztBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQXJDLENBREosRUFFSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSwwQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBdEMsQ0FGSixFQUdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUM7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFyQyxDQUhKLEVBSUksTUFBQyxnREFBRDtBQUFNLFFBQUksK0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQztBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTNDLENBSkosQ0FESjtBQVFILENBNUJEOztHQUFNSixPOztBQThCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmFua2luZy9SZWJvb3RSYW5raW5nLjM5NDI4OTI0ZDlkYmQ1YTJkNzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWN0aXZlID0ga2luZC5pbmRleE9mKHByb3BzLmtpbmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYW5rU2lkZWJhciA+IGxpXCIpLmZvckVhY2goKGxpLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gYWN0aXZlKSBcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBraW5kID0gW1xyXG4gICAgICAgIFwiV29ybGRcIiwgXHJcbiAgICAgICAgXCJSZWJvb3RcIixcclxuICAgICAgICBcImd1aWxkXCIsXHJcbiAgICAgICAgXCJBY2hpZXZlbWVudFwiXHJcbiAgICBdXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJhbmtTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy9Xb3JsZFJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlclwiPuyblOuTnCDrnq3tgrk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYW5raW5nL1JlYm9vdFJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBcIj7rpqzrtoDtirgg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy9ndWlsZFJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBcIj7quLjrk5wg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmFua2luZy9BY2hpZXZlbWVudFJhbmtpbmdgfT48bGkgY2xhc3NOYW1lPVwicG9pbnRlciBcIj7sl4XsoIEg656t7YK5PC9saT48L0xpbms+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=