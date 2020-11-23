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

var Profile = function Profile() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/profile.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOlsiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0Iiwicm91dGVyIiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlByb2ZpbGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiaHRtbCIsIiQiLCJjaGVlcmlvIiwibG9hZCIsImRhdGEiLCJsZW5ndGgiLCJwcm9maWxlIiwibmFtZSIsImZpbmQiLCJjaGlsZHJlbiIsImltYWdlIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJ3b3JrIiwicG9wdWxhcml0eSIsImd1aWxkIiwidW5kZWZpbmVkIiwidG90YWxSYW5rIiwicmVwbGFjZSIsIndvcmxkUmFuayIsIndvcmtUb3RhbFJhbmsiLCJ3b3JrV29ybGRSYW5rIiwiZG9jdW1lbnQiLCJ3cml0ZSIsInJlcyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQUVlQSxPOzs7Ozs4TEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVxQkMsNENBQUssQ0FBQ0MsR0FBTiw4QkFBZ0NDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxRQUE3QyxFQUZyQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUlRQyxtQkFBTyxDQUFDQyxLQUFSOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFPQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1MLE1BQU0sR0FBR00sNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBRVpWLFdBQU8sR0FDRlcsSUFETCxDQUNVLFVBQUNDLElBQUQsRUFBVTtBQUVaLFVBQU1DLENBQUMsR0FBR0MsOENBQU8sQ0FBQ0MsSUFBUixDQUFhSCxJQUFJLENBQUNJLElBQWxCLENBQVY7QUFFQSxVQUFHSixJQUFJLENBQUNJLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUF0QixFQUE2QjtBQUU3QixVQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBQSxhQUFPLENBQUNDLElBQVIsR0FBZU4sQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JPLElBQXRCLENBQTJCLGdCQUEzQixFQUE2QyxDQUE3QyxFQUFnREMsUUFBaEQsQ0FBeUQsQ0FBekQsRUFBNERMLElBQTNFO0FBQ0FFLGFBQU8sQ0FBQ0ksS0FBUixHQUFnQlQsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJPLElBQTlCLENBQW1DLEtBQW5DLEVBQTBDLENBQTFDLEVBQTZDRyxPQUE3QyxDQUFxREMsR0FBckU7QUFDQU4sYUFBTyxDQUFDTyxLQUFSLEdBQWdCWixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixDQUF0QixFQUF5QlUsT0FBekIsQ0FBaUNDLEdBQWpEO0FBQ0FOLGFBQU8sQ0FBQ1EsS0FBUixHQUFnQmIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JPLElBQXRCLENBQTJCLHNCQUEzQixFQUFtRCxDQUFuRCxFQUFzREMsUUFBdEQsQ0FBK0QsQ0FBL0QsRUFBa0VBLFFBQWxFLENBQTJFLENBQTNFLEVBQThFTCxJQUE5RjtBQUNBRSxhQUFPLENBQUNTLElBQVIsR0FBZWQsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JPLElBQXRCLENBQTJCLHNCQUEzQixFQUFtRCxDQUFuRCxFQUFzREMsUUFBdEQsQ0FBK0QsQ0FBL0QsRUFBa0VBLFFBQWxFLENBQTJFLENBQTNFLEVBQThFTCxJQUE3RjtBQUNBRSxhQUFPLENBQUNVLFVBQVIsR0FBcUJmLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTyxJQUF0QixDQUEyQixzQkFBM0IsRUFBbUQsQ0FBbkQsRUFBc0RDLFFBQXRELENBQStELENBQS9ELEVBQWtFQSxRQUFsRSxDQUEyRSxDQUEzRSxFQUE4RUEsUUFBOUUsQ0FBdUYsQ0FBdkYsRUFBMEZMLElBQS9HO0FBQ0FFLGFBQU8sQ0FBQ1csS0FBUixHQUFnQmhCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCTyxJQUF6QixDQUE4QixHQUE5QixFQUFtQyxDQUFuQyxLQUF5Q1UsU0FBekMsR0FBcUQsTUFBckQsR0FBOERqQixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sSUFBekIsQ0FBOEIsR0FBOUIsRUFBbUMsQ0FBbkMsRUFBc0NDLFFBQXRDLENBQStDLENBQS9DLEVBQWtETCxJQUFoSTtBQUVBRSxhQUFPLENBQUNhLFNBQVIsR0FBb0JsQixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sSUFBekIsQ0FBOEIsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLFFBQTlDLENBQXVELENBQXZELEVBQTBEQSxRQUExRCxDQUFtRSxDQUFuRSxFQUFzRUwsSUFBdEUsQ0FBMkVnQixPQUEzRSxDQUFtRixRQUFuRixFQUE2RixFQUE3RixDQUFwQjtBQUNBZCxhQUFPLENBQUNlLFNBQVIsR0FBb0JwQixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sSUFBekIsQ0FBOEIsV0FBOUIsRUFBMkMsQ0FBM0MsRUFBOENDLFFBQTlDLENBQXVELENBQXZELEVBQTBEQSxRQUExRCxDQUFtRSxDQUFuRSxFQUFzRUwsSUFBMUY7QUFDQUUsYUFBTyxDQUFDZ0IsYUFBUixHQUF3QnJCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCTyxJQUF6QixDQUE4QixXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsUUFBOUMsQ0FBdUQsQ0FBdkQsRUFBMERBLFFBQTFELENBQW1FLENBQW5FLEVBQXNFTCxJQUE5RjtBQUNBRSxhQUFPLENBQUNpQixhQUFSLEdBQXdCdEIsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJPLElBQXpCLENBQThCLFdBQTlCLEVBQTJDLENBQTNDLEVBQThDQyxRQUE5QyxDQUF1RCxDQUF2RCxFQUEwREEsUUFBMUQsQ0FBbUUsQ0FBbkUsRUFBc0VMLElBQTlGO0FBRUFvQixjQUFRLENBQUNDLEtBQVQsQ0FDSSxxQkFBYW5CLE9BQU8sQ0FBQ08sS0FBckIscUJBQXlDLFFBQXpDLEdBQ0FQLE9BQU8sQ0FBQ0MsSUFEUixHQUVBLE9BRkEsR0FHQUQsT0FBTyxDQUFDUSxLQUhSLEdBSUEsT0FKQSxHQUtBUixPQUFPLENBQUNTLElBTFIsR0FNQSxPQU5BLEdBT0FULE9BQU8sQ0FBQ1UsVUFQUixHQVFBLE9BUkEsR0FTQVYsT0FBTyxDQUFDVyxLQVRSLEdBVUEsT0FWQSxHQVdBWCxPQUFPLENBQUNhLFNBWFIsR0FZQSxPQVpBLEdBYUFiLE9BQU8sQ0FBQ2UsU0FiUixHQWNBLE9BZEEsR0FlQWYsT0FBTyxDQUFDZ0IsYUFmUixHQWdCQSxPQWhCQSxHQWlCQWhCLE9BQU8sQ0FBQ2lCLGFBakJSLEdBa0JBLE9BbEJBLHdCQW1CYWpCLE9BQU8sQ0FBQ0ksS0FuQnJCLGtCQURKO0FBc0JBLGFBQU9KLE9BQVA7QUFDSCxLQTdDTCxFQThDS1AsSUE5Q0wsQ0E4Q1UsVUFBQzJCLEdBQUQ7QUFBQSxhQUFTaEMsT0FBTyxDQUFDaUMsR0FBUixDQUFZRCxHQUFaLENBQVQ7QUFBQSxLQTlDVjtBQStDSCxHQWpEUSxDQUFUO0FBbURBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG1CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxvQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFDSSxRQUFJLEVBQUMscUZBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFlSCxDQXJFRDs7R0FBTTlCLE87VUFDYUMscUQ7OztLQURiRCxPO0FBdUVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjBmZDgxYjdiNGVmOGRhMTMyYWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcclxuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufSIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSBcImNoZWVyaW9cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEhUTUwoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vbWFwbGUuZ2cvdS8ke3JvdXRlci5xdWVyeS51c2VybmFtZX1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGdldEhUTUwoKVxyXG4gICAgICAgICAgICAudGhlbigoaHRtbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGh0bWwuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGh0bWwuZGF0YS5sZW5ndGggPCAzMDAwMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLm5hbWUgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwiYi5hbGlnbi1taWRkbGVcIilbMF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUuaW1hZ2UgPSAkKFwiZGl2LmNoYXJhY3Rlci1hdmF0YXItcm93XCIpLmZpbmQoXCJpbWdcIilbMF0uYXR0cmlicy5zcmM7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkID0gJChcImltZy5hbGlnbi1taWRkbGVcIilbMF0uYXR0cmlicy5zcmM7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmxldmVsID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmsgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0uZGF0YVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5wb3B1bGFyaXR5ID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzVdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmd1aWxkID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImFcIilbMF0gPT0gdW5kZWZpbmVkID8gXCIo7JeG7J2MKVwiIDogJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImFcIilbMF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLnRvdGFsUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMF0uY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0uZGF0YS5yZXBsYWNlKC8oXFxzKikvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMV0uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1RvdGFsUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMl0uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1dvcmxkUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbM10uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxpbWcgc3JjPVwiJHtwcm9maWxlLndvcmxkfVwiIGFsdD1cIlwiLz5gICsgXCImbmJzcDtcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUubGV2ZWwgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUucG9wdWxhcml0eSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLmd1aWxkICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUudG90YWxSYW5rICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUud29ybGRSYW5rICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1RvdGFsUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtXb3JsZFJhbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgYDxpbWcgc3JjPVwiJHtwcm9maWxlLmltYWdlfVwiIGFsdD1cIlwiLz5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2ZpbGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9wcm9maWxlLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==