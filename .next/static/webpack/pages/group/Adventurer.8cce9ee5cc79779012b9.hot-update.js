webpackHotUpdate_N_E("pages/group/Adventurer",{

/***/ "./compornents/Header/header.js":
/*!**************************************!*\
  !*** ./compornents/Header/header.js ***!
  \**************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ "./compornents/Header/nav.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\compornents\\Header\\header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var header = function header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {});
  return __jsx("header", {
    className: "d-flex align-items-center fs-2 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header__logo flex-center col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "pointer",
    src: "/images/logo/logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "header__nav h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "header__search flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        router.push({
          pathname: '/profile',
          query: {
            username: document.querySelector("input").value
          }
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return router.push({
        pathname: '/profile',
        query: {
          username: document.querySelector("input").value
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "\uAC80\uC0C9")), __jsx("div", {
    className: "header__login d-flex align-items-center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4Q0U4MzlGNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4Q0U4M0EwNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzhDRTgzOUQ3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzhDRTgzOUU3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zFVZAAACLklEQVR42ryXzytEURTH33vGmPzOzxmmSbGSlaXt5D+QIqNYkKz8WCiSbFnJgiaysmCj+Bf4A6wQdkhK+ZFf0fU9Oq9er5l7zzVy6rOYeeec733v3XvOea5SyrGwCIiCGlDO/z2De/ABPsWZSNhAEYiDGfCq8tsr+8Q5RpvXJJoCu8redjnWWtgFQ6pwoxyeVLgYbKq/sy3OqRWmd5NVf2/Z8HsPC2cESeb5/ZUyLWBREJfJJ5wyBJ4bNgxduzTkSIWFaQPsaAIe+JiYTkGcffPZjr/ZggE66xWI+vQYciXIz+M6MqSpMWdg36K6HYATzfVhv3JFDBVpz+JuffYMFS7ice2NaVb45tjbh+YaaUU9Lvg6o+uupXC1KScJlxmcOkC9hWgdaDf4lHmCRAkwZiE8DpolbTEpLHtpwaZKC3MlHS57UqMzGsshGBOc36CVUvujqeLJsLODdgyWwTlPJG1gkveCxOiUVPgrnlX/Z6TluDxz0Qa6Fqz2CiyBQ3AHXkAJSII0mBM8uSZwI20Sp6AzV0MPTS0loBvcakYiT9oWF0DUsmRWgg1JW8w1CFB7G+A7cX6BGxoQMtLR55IbiFOA8KB09PGHvTUOWAG1vxCtDeRYlQx7wdUOBB7TCKgXCDaA0UBcXz5f1/AJk+Bi0c+/18ERuAAP3LUqQSvoAqPstw2mf45NAZ8wtP0bwZSgOEywr2fKa7rjsBVxwaA2WUXrBo9cTN7BlzTRtwADAOPsTPUcvaPqAAAAAElFTkSuQmCC",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })));
};

_s(header, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (header);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJoZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJlIiwia2V5IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ1c2VybmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTSxDQUNmLENBRFEsQ0FBVDtBQUdBLFNBQ0k7QUFBUSxhQUFTLEVBQUMsMkNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixPQUFHLEVBQUMsdUJBQTdCO0FBQXFELE9BQUcsRUFBQyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQTRDLGNBQVUsRUFBRSxvQkFBQ0MsQ0FBRCxFQUFPO0FBQzNELFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDbkJKLGNBQU0sQ0FBQ0ssSUFBUCxDQUFZO0FBQ1JDLGtCQUFRLEVBQUUsVUFERjtBQUVSQyxlQUFLLEVBQUU7QUFBRUMsb0JBQVEsRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDQztBQUE1QztBQUZDLFNBQVo7QUFJSDtBQUNKLEtBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBU0k7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxNQUFNLENBQUNLLElBQVAsQ0FBWTtBQUMvQkMsZ0JBQVEsRUFBRSxVQURxQjtBQUUvQkMsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixFQUFnQ0M7QUFBNUM7QUFGd0IsT0FBWixDQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSixDQVBKLEVBcUJJO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxnOERBQVQ7QUFBMDhELE9BQUcsRUFBQyxFQUE5OEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBckJKLENBREo7QUEyQkgsQ0FoQ0Q7O0dBQU1aLE07VUFDYUUscUQ7OztBQWlDSkYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci44Y2NlOWVlNWNjNzk3NzkwMTJiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmcy0yIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gZmxleC1jZW50ZXIgY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9pbnRlclwiIHNyYz1cIi9pbWFnZXMvbG9nby9sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXYgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxOYXY+PC9OYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbktleVByZXNzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyB1c2VybmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgdXNlcm5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgfSl9PuqygOyDiTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ2luIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGdnS0ZkcGJtUnZkM01wSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tNNFEwVTRNemxHTnpJd1FqRXhSVGxDTnpGQ1JqaEdRelk1TmpFMVF6VkVJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa000UTBVNE0wRXdOekl3UWpFeFJUbENOekZDUmpoR1F6WTVOakUxUXpWRUlqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZRemhEUlRnek9VUTNNakJDTVRGRk9VSTNNVUpHT0VaRE5qazJNVFZETlVRaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlF6aERSVGd6T1VVM01qQkNNVEZGT1VJM01VSkdPRVpETmprMk1UVkROVVFpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo1OXpGVlpBQUFDTGtsRVFWUjQycnlYenl0RVVSVEgzM3ZHbVB6T3p4bW1TYkdTbGFYdDVEK1FJcU5Za0t6OFdDaVNiRm5KZ2lheXNtQ2orQmY0QTZ3UWRraEsrWkZmMGZVOU9xOWVyNWw3enpWeTZyT1llZWVjNzMzdjNYdk9lYTVTeXJHd0NJaUNHbERPL3oyRGUvQUJQc1daU05oQUVZaURHZkNxOHRzcis4UTVScHZYSkpvQ3U4cmVkam5XV3RnRlE2cHdveHllVkxnWWJLcS9zeTNPcVJXbWQ1TlZmMi9aOEhzUEMyY0VTZWI1L1pVeUxXQlJFSmZKSjV3eUJKNGJOZ3hkdXpUa1NJV0ZhUVBzYUFJZStKaVlUa0djZmZQWmpyL1pnZ0U2NnhXSSt2UVljaVhJeitNNk1xU3BNV2RnMzZLNkhZQVR6ZlZodjNKRkRCVnB6K0p1ZmZZTUZTN2ljZTJOYVZiNDV0amJoK1lhYVVVOUx2ZzZvK3V1cFhDMUtTY0pseG1jT2tDOWhXZ2RhRGY0bEhtQ1JBa3daaUU4RHBvbGJURXBMSHRwd2FaS0MzTWxIUzU3VXFNekdzc2hHQk9jMzZDVlV2dWpxZUxKc0xPRGRneVd3VGxQSkcxZ2t2ZUN4T2lVVlBncm5sWC9aNlRsdUR4ejBRYTZGcXoyQ2l5QlEzQUhYa0FKU0lJMG1CTTh1U1p3STIwU3A2QXpWME1QVFMwbG9CdmNha1lpVDlvV0YwRFVzbVJXZ2cxSlc4dzFDRkI3RytBN2NYNkJHeG9RTXRMUjU1SWJpRk9BOEtCMDlQR0h2VFVPV0FHMXZ4Q3REZVJZbFF4N3dkVU9CQjdUQ0tnWENEYUEwVUJjWHo1ZjEvQUprK0JpMGMrLzE4RVJ1QUFQM0xVcVFTdm9BcVBzdHcybWY0NU5BWjh3dFAwYndaU2dPRXl3cjJmS2E3cmpzQlZ4d2FBMldVWHJCbzljVE43Qmx6VFJ0d0FEQU9Qc1RQVWN2YVBxQUFBQUFFbEZUa1N1UW1DQ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9