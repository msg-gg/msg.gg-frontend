webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compornents/Header/header */ "./compornents/Header/header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function onKeyPress(e) {
  if (e.key === 'Enter') {
    var getHTML = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://maple.gg/u/".concat(e.target.value));

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      return function getHTML() {
        return _ref.apply(this, arguments);
      };
    }();

    getHTML().then(function (html) {
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_6___default.a.load(html.data);
      if (html.data.length < 30000) return;
      var profile = {};
      profile.name = $("div#user-profile").find("b.align-middle")[0].children[0].data;
      profile.image = $("div.character-avatar-row").find("img")[0].attribs.src;
      profile.world = $("img.align-middle")[0].attribs.src;
      profile.level = $("div#user-profile").find("ul.user-summary-list")[0].children[1].children[0].data;
      profile.work = $("div#user-profile").find("ul.user-summary-list")[0].children[3].children[0].data;
      profile.popularity = $("div#user-profile").find("ul.user-summary-list")[0].children[5].children[2].children[0].data;
      profile.guild = $("div.user-additional").find("a")[0] == undefined ? "(없음)" : $("div.user-additional").find("a")[0].children[0].data;
      profile.totalRank = $("div.user-additional").find("div.col-6")[0].children[3].children[0].data.replace(/(\s*)/g, "");
      profile.worldRank = $("div.user-additional").find("div.col-6")[1].children[4].children[0].data;
      profile.workTotalRank = $("div.user-additional").find("div.col-6")[2].children[4].children[0].data;
      profile.workWorldRank = $("div.user-additional").find("div.col-6")[3].children[4].children[0].data;
      document.write("<img src=\"".concat(profile.world, "\" alt=\"\"/>") + "&nbsp;" + profile.name + "</br>" + profile.level + "</br>" + profile.work + "</br>" + profile.popularity + "</br>" + profile.guild + "</br>" + profile.totalRank + "</br>" + profile.worldRank + "</br>" + profile.workTotalRank + "</br>" + profile.workWorldRank + "</br>" + "<img src=\"".concat(profile.image, "\" alt=\"\"/>"));
      return profile;
    }).then(function (res) {
      return console.log(res);
    });
  }
}

var Profile = function Profile() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {});
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: "w-25 form-control",
    type: "search",
    onKeyPress: onKeyPress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }));
};

_s(Profile, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJvbktleVByZXNzIiwiZSIsImtleSIsImdldEhUTUwiLCJheGlvcyIsImdldCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImVycm9yIiwidGhlbiIsImh0bWwiLCIkIiwiY2hlZXJpbyIsImxvYWQiLCJkYXRhIiwibGVuZ3RoIiwicHJvZmlsZSIsIm5hbWUiLCJmaW5kIiwiY2hpbGRyZW4iLCJpbWFnZSIsImF0dHJpYnMiLCJzcmMiLCJ3b3JsZCIsImxldmVsIiwid29yayIsInBvcHVsYXJpdHkiLCJndWlsZCIsInVuZGVmaW5lZCIsInRvdGFsUmFuayIsInJlcGxhY2UiLCJ3b3JsZFJhbmsiLCJ3b3JrVG90YWxSYW5rIiwid29ya1dvcmxkUmFuayIsImRvY3VtZW50Iiwid3JpdGUiLCJyZXMiLCJsb2ciLCJQcm9maWxlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDbkIsTUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUFBLFFBQ0pDLE9BREk7QUFBQSxrTUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFcUJDLDRDQUFLLENBQUNDLEdBQU4sOEJBQWdDSixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBekMsRUFGckI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFJUUMsdUJBQU8sQ0FBQ0MsS0FBUjs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURtQjs7QUFBQSxzQkFDSk4sT0FESTtBQUFBO0FBQUE7QUFBQTs7QUFTbkJBLFdBQU8sR0FDRk8sSUFETCxDQUNVLFVBQUNDLElBQUQsRUFBVTtBQUVaLFVBQU1DLENB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFDSSxRQUFJLEVBQUMscUZBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBTyxhQUFTLEVBQUMsbUJBQWpCO0FBQXFDLFFBQUksRUFBQyxRQUExQztBQUFtRCxjQUFVLEVBQUd4QyxVQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FESjtBQWdCSCxDQXJCRDs7R0FBTXVDLE87O0tBQUFBLE87QUF1QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuY2U5NTMwOTNlYTVjYTM0YTgzNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5cclxuZnVuY3Rpb24gb25LZXlQcmVzcyhlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRIVE1MKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9tYXBsZS5nZy91LyR7ZS50YXJnZXQudmFsdWV9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0SFRNTCgpXHJcbiAgICAgICAgICAgIC50aGVuKChodG1sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaHRtbC5kYXRhLmxlbmd0aCA8IDMwMDAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0ge30gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubmFtZSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJiLmFsaWduLW1pZGRsZVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5pbWFnZSA9ICQoXCJkaXYuY2hhcmFjdGVyLWF2YXRhci1yb3dcIikuZmluZChcImltZ1wiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGQgPSAkKFwiaW1nLmFsaWduLW1pZGRsZVwiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubGV2ZWwgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29yayA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLnBvcHVsYXJpdHkgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VpbGQgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXSA9PSB1bmRlZmluZWQgPyBcIijsl4bsnYwpXCIgOiAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2ZpbGUudG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhLnJlcGxhY2UoLyhcXHMqKS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsxXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrVG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsyXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrV29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVszXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC53cml0ZShcclxuICAgICAgICAgICAgICAgICAgICBgPGltZyBzcmM9XCIke3Byb2ZpbGUud29ybGR9XCIgYWx0PVwiXCIvPmAgKyBcIiZuYnNwO1wiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5sZXZlbCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5wb3B1bGFyaXR5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VpbGQgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS50b3RhbFJhbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZFJhbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrVG90YWxSYW5rICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1dvcmxkUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBgPGltZyBzcmM9XCIke3Byb2ZpbGUuaW1hZ2V9XCIgYWx0PVwiXCIvPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZmlsZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvcHJvZmlsZS5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTI1IGZvcm0tY29udHJvbFwiIHR5cGU9XCJzZWFyY2hcIiBvbktleVByZXNzPXsgb25LZXlQcmVzcyB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==