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
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\profile.js",
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
      console.log(html);
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_7___default.a.load(html.data);

      if (html.data.length < 30000) {
        return;
        router.push("/");
      }

      ;
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
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJodG1sIiwibG9nIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInB1c2giLCJwcm9maWxlIiwibmFtZSIsImZpbmQiLCJjaGlsZHJlbiIsImltYWdlIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJ3b3JrIiwicG9wdWxhcml0eSIsImd1aWxkIiwidW5kZWZpbmVkIiwidG90YWxSYW5rIiwicmVwbGFjZSIsIndvcmxkUmFuayIsIndvcmtUb3RhbFJhbmsiLCJ3b3JrV29ybGRSYW5rIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEa0IsV0FHSEMsT0FIRztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnTUFHbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFcUJDLDRDQUFLLENBQUNDLEdBQU4sOEJBQWdDSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsUUFBN0MsRUFGckI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFJUUMscUJBQU8sQ0FBQ0MsS0FBUjs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhrQjtBQUFBO0FBQUE7O0FBV2xCQyx5REFBUyxDQUFDLFlBQU07QUFFWlAsV0FBTyxHQUNGUSxJQURMLENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FB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QUQsQ0FBeUJRLElBQXpCLENBQThCLFdBQTlCLEVBQTJDLENBQTNDLEVBQThDQyxRQUE5QyxDQUF1RCxDQUF2RCxFQUEwREEsUUFBMUQsQ0FBbUUsQ0FBbkUsRUFBc0VOLElBQTlGO0FBRUEsYUFBT0csT0FBUDtBQUNILEtBMUJMLEVBMkJLVCxJQTNCTCxDQTJCVSxVQUFDMkIsR0FBRDtBQUFBLGFBQVM5QixPQUFPLENBQUNLLEdBQVIsQ0FBWXlCLEdBQVosQ0FBVDtBQUFBLEtBM0JWO0FBNEJILEdBOUJRLENBQVQ7QUFnQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG9CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUNJLFFBQUksRUFBQyxxRkFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBVUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0FESjtBQWVILENBMUREOztHQUFNdEMsTztVQUNhRSxxRDs7O0tBRGJGLE87QUE0RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZWRhNGM0MGI1ZDZkZWVkNzg3Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSBcImNoZWVyaW9cIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SFRNTCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL21hcGxlLmdnL3UvJHtyb3V0ZXIucXVlcnkudXNlcm5hbWV9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGdldEhUTUwoKVxyXG4gICAgICAgICAgICAudGhlbigoaHRtbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaHRtbClcclxuICAgICAgICAgICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaHRtbC5kYXRhLmxlbmd0aCA8IDMwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0ge30gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubmFtZSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJiLmFsaWduLW1pZGRsZVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5pbWFnZSA9ICQoXCJkaXYuY2hhcmFjdGVyLWF2YXRhci1yb3dcIikuZmluZChcImltZ1wiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGQgPSAkKFwiaW1nLmFsaWduLW1pZGRsZVwiKVswXS5hdHRyaWJzLnNyYztcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUubGV2ZWwgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29yayA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLnBvcHVsYXJpdHkgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bNV0uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VpbGQgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXSA9PSB1bmRlZmluZWQgPyBcIijsl4bsnYwpXCIgOiAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiYVwiKVswXS5jaGlsZHJlblswXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2ZpbGUudG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVswXS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5kYXRhLnJlcGxhY2UoLyhcXHMqKS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsxXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrVG90YWxSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVsyXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrV29ybGRSYW5rID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImRpdi5jb2wtNlwiKVszXS5jaGlsZHJlbls0XS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZmlsZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL3Byb2ZpbGUuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9