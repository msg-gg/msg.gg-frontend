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
    if (!router.query.username) return;
    var character = {};
    getHTML().then(function (html) {
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_7___default.a.load(html.data);

      if (html.data.length < 30000) {
        router.push("/");
        return;
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
      character = res;
      document.querySelector("#__next").style.backgroundImage = "url(../../images/background/adventurer.png)";
      console.log(character);
    });
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsImNoYXJhY3RlciIsInRoZW4iLCJodG1sIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInB1c2giLCJwcm9maWxlIiwibmFtZSIsImZpbmQiLCJjaGlsZHJlbiIsImltYWdlIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJ3b3JrIiwicG9wdWxhcml0eSIsImd1aWxkIiwidW5kZWZpbmVkIiwidG90YWxSYW5rIiwicmVwbGFjZSIsIndvcmxkUmFuayIsIndvcmtUb3RhbFJhbmsiLCJ3b3JrV29ybGRSYW5rIiwicmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQixXQUdIQyxPQUhHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQUdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVxQkMsNENBQUssQ0FBQ0MsR0FBTiw4QkFBZ0NKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxRQUE3QyxFQUZyQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlRQyxxQkFBTyxDQUFDQyxLQUFSOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSGtCO0FBQUE7QUFBQTs7QUFXbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUcsQ0FBQ1QsTUFBTSxDQUFDSyxLQUFQLENBQWFDLFFBQWpCLEVBQTJCO0FBRTNCLFFBQUlJLFNBQVMsR0FBRyxFQUFoQjtBQUVBUixXQUFPLEdBQ0ZTLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFDWixVQUFNQyxDQUFDLEdBQUdDLDhDQUFPLENBQUNDLElBQVIsQ0FBYUgsSUFBSSxDQUFDSSxJQUFsQixDQUFWOztBQUVBLFVBQUdKLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQXRCLEVBQTZCO0FBQ3pCakIsY0FBTSxDQUFDa0IsSUFBUCxDQUFZLEdBQVo7QUFDQTtBQUNIOztBQUFBO0FBRUQsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQUEsYUFBTyxDQUFDQyxJQUFSLEdBQWVQLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUSxJQUF0QixDQUEyQixnQkFBM0IsRUFBNkMsQ0FBN0MsRUFBZ0RDLFFBQWhELENBQXlELENBQXpELEVBQTRETixJQUEzRTtBQUNBRyxhQUFPLENBQUNJLEtBQVIsR0FBZ0JWLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCUSxJQUE5QixDQUFtQyxLQUFuQyxFQUEwQyxDQUExQyxFQUE2Q0csT0FBN0MsQ0FBcURDLEdBQXJFO0FBQ0FOLGFBQU8sQ0FBQ08sS0FBUixHQUFnQmIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsQ0FBdEIsRUFBeUJXLE9BQXpCLENBQWlDQyxHQUFqRDtBQUNBTixhQUFPLENBQUNRLEtBQVIsR0FBZ0JkLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUSxJQUF0QixDQUEyQixzQkFBM0IsRUFBbUQsQ0FBbkQsRUFBc0RDLFFBQXRELENBQStELENBQS9ELEVBQWtFQSxRQUFsRSxDQUEyRSxDQUEzRSxFQUE4RU4sSUFBOUY7QUFDQUcsYUFBTyxDQUFDUyxJQUFSLEdBQWVmLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUSxJQUF0QixDQUEyQixzQkFBM0IsRUFBbUQsQ0FBbkQsRUFBc0RDLFFBQXRELENBQStELENBQS9ELEVBQWtFQSxRQUFsRSxDQUEyRSxDQUEzRSxFQUE4RU4sSUFBN0Y7QUFDQUcsYUFBTyxDQUFDVSxVQUFSLEdBQXFCaEIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JRLElBQXRCLENBQTJCLHNCQUEzQixFQUFtRCxDQUFuRCxFQUFzREMsUUFBdEQsQ0FBK0QsQ0FBL0QsRUFBa0VBLFFBQWxFLENBQTJFLENBQTNFLEVBQThFQSxRQUE5RSxDQUF1RixDQUF2RixFQUEwRk4sSUFBL0c7QUFDQUcsYUFBTyxDQUFDVyxLQUFSLEdBQWdCakIsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJRLElBQXpCLENBQThCLEdBQTlCLEVBQW1DLENBQW5DLEtBQXlDVSxTQUF6QyxHQUFxRCxNQUFyRCxHQUE4RGxCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QixDQUE4QixHQUE5QixFQUFtQyxDQUFuQyxFQUFzQ0MsUUFBdEMsQ0FBK0MsQ0FBL0MsRUFBa0ROLElBQWhJO0FBRUFHLGFBQU8sQ0FBQ2EsU0FBUixHQUFvQm5CLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QixDQUE4QixXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsUUFBOUMsQ0FBdUQsQ0FBdkQsRUFBMERBLFFBQTFELENBQW1FLENBQW5FLEVBQXNFTixJQUF0RSxDQUEyRWlCLE9BQTNFLENBQW1GLFFBQW5GLEVBQTZGLEVBQTdGLENBQXBCO0FBQ0FkLGFBQU8sQ0FBQ2UsU0FBUixHQUFvQnJCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxJQUF6QixDQUE4QixXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsUUFBOUMsQ0FBdUQsQ0FBdkQsRUFBMERBLFFBQTFELENBQW1FLENBQW5FLEVBQXNFTixJQUExRjtBQUNBRyxhQUFPLENBQUNnQixhQUFSLEdBQXdCdEIsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJRLElBQXpCLENBQThCLFdBQTlCLEVBQTJDLENBQTNDLEVBQThDQyxRQUE5QyxDQUF1RCxDQUF2RCxFQUEwREEsUUFBMUQsQ0FBbUUsQ0FBbkUsRUFBc0VOLElBQTlGO0FBQ0FHLGFBQU8sQ0FBQ2lCLGFBQVIsR0FBd0J2QixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlEsSUFBekIsQ0FBOEIsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLFFBQTlDLENBQXVELENBQXZELEVBQTBEQSxRQUExRCxDQUFtRSxDQUFuRSxFQUFzRU4sSUFBOUY7QUFFQSxhQUFPRyxPQUFQO0FBQ0gsS0F6QkwsRUEwQktSLElBMUJMLENBMEJVLFVBQUMwQixHQUFELEVBQVM7QUFDWDNCLGVBQVMsR0FBRzJCLEdBQVo7QUFDQUMsY0FBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDQyxLQUFsQyxDQUF3Q0MsZUFBeEM7QUFFQWxDLGFBQU8sQ0FBQ21DLEdBQVIsQ0FBWWhDLFNBQVo7QUFDSCxLQS9CTDtBQWlDSCxHQXRDUSxDQUFUO0FBd0NBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG1CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxvQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFDSSxRQUFJLEVBQUMscUZBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FESjtBQWtCSCxDQXJFRDs7R0FBTVgsTztVQUNhRSxxRDs7O0tBRGJGLE87QUF1RVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOGY4ZGQ0NWU4MDdmNTE4NDMzZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSBcImNoZWVyaW9cIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SFRNTCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL21hcGxlLmdnL3UvJHtyb3V0ZXIucXVlcnkudXNlcm5hbWV9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIXJvdXRlci5xdWVyeS51c2VybmFtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgY2hhcmFjdGVyID0ge307XHJcblxyXG4gICAgICAgIGdldEhUTUwoKVxyXG4gICAgICAgICAgICAudGhlbigoaHRtbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihodG1sLmRhdGEubGVuZ3RoIDwgMzAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGUgPSB7fSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5uYW1lID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcImIuYWxpZ24tbWlkZGxlXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmltYWdlID0gJChcImRpdi5jaGFyYWN0ZXItYXZhdGFyLXJvd1wiKS5maW5kKFwiaW1nXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZCA9ICQoXCJpbWcuYWxpZ24tbWlkZGxlXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5sZXZlbCA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGFcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUucG9wdWxhcml0eSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlbls1XS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdID09IHVuZGVmaW5lZCA/IFwiKOyXhuydjClcIiA6ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS50b3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGEucmVwbGFjZSgvKFxccyopL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzFdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzJdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtXb3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzNdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2FkdmVudHVyZXIucG5nKWBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFyYWN0ZXIpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvcHJvZmlsZS5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9