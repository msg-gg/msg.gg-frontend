webpackHotUpdate_N_E("pages/profile",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

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
  if (e.key === 'Enter') {}
}

var Profile = function Profile() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
      return _getHTML.apply(this, arguments);
    }

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
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOlsib25LZXlQcmVzcyIsImUiLCJrZXkiLCJQcm9maWxlIiwidXNlRWZmZWN0IiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwiZXJyb3IiLCJ0aGVuIiwiaHRtbCIsIiQiLCJjaGVlcmlvIiwibG9hZCIsImRhdGEiLCJsZW5ndGgiLCJwcm9maWxlIiwibmFtZSIsImZpbmQiLCJjaGlsZHJlbiIsImltYWdlIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJ3b3JrIiwicG9wdWxhcml0eSIsImd1aWxkIiwidW5kZWZpbmVkIiwidG90YWxSYW5rIiwicmVwbGFjZSIsIndvcmxkUmFuayIsIndvcmtUb3RhbFJhbmsiLCJ3b3JrV29ybGRSYW5rIiwiZG9jdW1lbnQiLCJ3cml0ZSIsInJlcyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDbkIsTUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBZCxFQUF1QixDQUV0QjtBQUNKOztBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxP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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG9CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUNJLFFBQUksRUFBQyxxRkFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBVUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSTtBQUFPLGFBQVMsRUFBQyxtQkFBakI7QUFBcUMsUUFBSSxFQUFDLFFBQTFDO0FBQW1ELGNBQVUsRUFBR3ZDLFVBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixDQURKO0FBZ0JILENBM0VEOztHQUFNRyxPOztLQUFBQSxPO0FBNkVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjM4OGZkMDEyNTExZTZmYThkZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcclxuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufSIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5cclxuZnVuY3Rpb24gb25LZXlQcmVzcyhlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEhUTUwoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL21hcGxlLmdnL3UvJHtlLnRhcmdldC52YWx1ZX1gKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRIVE1MKClcclxuICAgICAgICAgICAgLnRoZW4oKGh0bWwpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihodG1sLmRhdGEubGVuZ3RoIDwgMzAwMDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGUgPSB7fSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5uYW1lID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcImIuYWxpZ24tbWlkZGxlXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmltYWdlID0gJChcImRpdi5jaGFyYWN0ZXItYXZhdGFyLXJvd1wiKS5maW5kKFwiaW1nXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZCA9ICQoXCJpbWcuYWxpZ24tbWlkZGxlXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5sZXZlbCA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGFcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUucG9wdWxhcml0eSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlbls1XS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdID09IHVuZGVmaW5lZCA/IFwiKOyXhuydjClcIiA6ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS50b3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGEucmVwbGFjZSgvKFxccyopL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzFdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzJdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtXb3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzNdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7cHJvZmlsZS53b3JsZH1cIiBhbHQ9XCJcIi8+YCArIFwiJm5ic3A7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLmxldmVsICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUud29yayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLnBvcHVsYXJpdHkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLnRvdGFsUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrV29ybGRSYW5rICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7cHJvZmlsZS5pbWFnZX1cIiBhbHQ9XCJcIi8+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvcHJvZmlsZS5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTI1IGZvcm0tY29udHJvbFwiIHR5cGU9XCJzZWFyY2hcIiBvbktleVByZXNzPXsgb25LZXlQcmVzcyB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==