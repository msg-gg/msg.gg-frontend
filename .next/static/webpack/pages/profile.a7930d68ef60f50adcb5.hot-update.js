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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\profile.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Profile = function Profile() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function getHTML() {
    return _getHTML.apply(this, arguments);
  }

  function _getHTML() {
    _getHTML = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://maple.gg/u/".concat(router.query.username));

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
    return _getHTML.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getHTML().then(function (html) {
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_7___default.a.load(html.data);
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
      return profile;
    }).then(function (res) {
      return console.log(res);
    });
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }));
};

_s(Profile, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJodG1sIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInByb2ZpbGUiLCJuYW1lIiwiZmluZCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJhdHRyaWJzIiwic3JjIiwid29ybGQiLCJsZXZlbCIsIndvcmsiLCJwb3B1bGFyaXR5IiwiZ3VpbGQiLCJ1bmRlZmluZWQiLCJ0b3RhbFJhbmsiLCJyZXBsYWNlIiwid29ybGRSYW5rIiwid29ya1RvdGFsUmFuayIsIndvcmtXb3JsZFJhbmsiLCJyZXMiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQixXQUdIQyxPQUhHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQUdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVxQkMsNENBQUssQ0FBQ0MsR0FBTiw4QkFBZ0NKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQUE3QyxFQUZyQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlRQyxxQkFBTyxDQUFDQyxLQUFSOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSGtCO0FBQUE7QUFBQTs7QUFXbEJDLHlEQUFTLENBQUMsWUFBTTtBQUVaUCxXQUFPLEdBQ0ZRLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFFWixVQUFN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QXNFTCxJQUE5RjtBQUVBLGFBQU9FLE9BQVA7QUFDSCxLQXZCTCxFQXdCS1AsSUF4QkwsQ0F3QlUsVUFBQ3lCLEdBQUQ7QUFBQSxhQUFTNUIsT0FBTyxDQUFDNkIsR0FBUixDQUFZRCxHQUFaLENBQVQ7QUFBQSxLQXhCVjtBQXlCSCxHQTNCUSxDQUFUO0FBNkJBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG1CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxvQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFDSSxRQUFJLEVBQUMscUZBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFlSCxDQXZERDs7R0FBTXBDLE87VUFDYUUscUQ7OztLQURiRixPO0FBeURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmE3OTMwZDY4ZWY2MGY1MGFkY2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjaGVlcmlvIGZyb20gXCJjaGVlcmlvXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRIVE1MKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vbWFwbGUuZ2cvdS8ke3JvdXRlci5xdWVyeS51c2VybmFtZX1gKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZ2V0SFRNTCgpXHJcbiAgICAgICAgICAgIC50aGVuKChodG1sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaHRtbC5kYXRhLmxlbmd0aCA8IDMwMDAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0ge30gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubmFtZSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJiLmFsaWduLW1pZGRsZVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5pbWFnZSA9ICQoXCJkaXYuY2hhcmFjdGVyLWF2YXRhci1yb3dcIikuZmluZChcImltZ1wiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGQgPSAkKFwiaW1nLmFsaWduLW1pZGRsZVwiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubGV2ZWwgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29yayA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLnBvcHVsYXJpdHkgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VpbGQgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXSA9PSB1bmRlZmluZWQgPyBcIijsl4bsnYwpXCIgOiAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2ZpbGUudG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhLnJlcGxhY2UoLyhcXHMqKS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsxXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrVG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsyXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrV29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVszXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZmlsZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL3Byb2ZpbGUuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9