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
        router.push("/");
      }

      ;
      var profile = {};
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
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJodG1sIiwibG9nIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInB1c2giLCJwcm9maWxlIiwiaW1hZ2UiLCJmaW5kIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJjaGlsZHJlbiIsIndvcmsiLCJwb3B1bGFyaXR5IiwiZ3VpbGQiLCJ1bmRlZmluZWQiLCJ0b3RhbFJhbmsiLCJyZXBsYWNlIiwid29ybGRSYW5rIiwid29ya1RvdGFsUmFuayIsIndvcmtXb3JsZFJhbmsiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQixXQUdIQyxPQUhHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQUdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVxQkMsNENBQUssQ0FBQ0MsR0FBTiw4QkFBZ0NKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQUE3QyxFQUZyQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlRQyxxQkFBTyxDQUFDQyxLQUFSOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSGtCO0FBQUE7QUFBQTs7QUFXbEJDLHlEQUFTLENBQUMsWUFBTTtBQUVaUCxXQUFPLEdBQ0ZRLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDWkosYUFB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ekJMLENBeUJVLFVBQUMwQixHQUFEO0FBQUEsYUFBUzdCLE9BQU8sQ0FBQ0ssR0FBUixDQUFZd0IsR0FBWixDQUFUO0FBQUEsS0F6QlY7QUEwQkgsR0E1QlEsQ0FBVDtBQThCQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxtQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsb0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQ0ksUUFBSSxFQUFDLHFGQURUO0FBRUksT0FBRyxFQUFDLFlBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREosRUFVSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURKO0FBZUgsQ0F4REQ7O0dBQU1yQyxPO1VBQ2FFLHFEOzs7S0FEYkYsTztBQTBEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS44M2VkODZhNjU0ZmY1YzBhZDYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRIVE1MKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vbWFwbGUuZ2cvdS8ke3JvdXRlci5xdWVyeS51c2VybmFtZX1gKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZ2V0SFRNTCgpXHJcbiAgICAgICAgICAgIC50aGVuKChodG1sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihodG1sLmRhdGEubGVuZ3RoIDwgMzAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmltYWdlID0gJChcImRpdi5jaGFyYWN0ZXItYXZhdGFyLXJvd1wiKS5maW5kKFwiaW1nXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZCA9ICQoXCJpbWcuYWxpZ24tbWlkZGxlXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5sZXZlbCA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGFcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUucG9wdWxhcml0eSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlbls1XS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdID09IHVuZGVmaW5lZCA/IFwiKOyXhuydjClcIiA6ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS50b3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGEucmVwbGFjZSgvKFxccyopL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzFdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzJdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtXb3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzNdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvcHJvZmlsZS5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=