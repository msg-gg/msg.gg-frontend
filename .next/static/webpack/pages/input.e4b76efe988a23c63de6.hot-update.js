webpackHotUpdate_N_E("pages/input",{

/***/ "./pages/input.js":
/*!************************!*\
  !*** ./pages/input.js ***!
  \************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg\\msg.gg-frontend\\pages\\input.js";


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
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://maple.gg/u/".concat(e.target.value));

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
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_5___default.a.load(html.data);
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

var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("input", {
    className: "w-50form-control",
    type: "search",
    onKeyPress: onKeyPress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5wdXQuanMiXSwibmFtZXMiOlsib25LZXlQcmVzcyIsImUiLCJrZXkiLCJnZXRIVE1MIiwiYXhpb3MiLCJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJlcnJvciIsInRoZW4iLCJodG1sIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInByb2ZpbGUiLCJuYW1lIiwiZmluZCIsImNoaWxkcmVuIiwiaW1hZ2UiLCJhdHRyaWJzIiwic3JjIiwid29ybGQiLCJsZXZlbCIsIndvcmsiLCJwb3B1bGFyaXR5IiwiZ3VpbGQiLCJ1bmRlZmluZWQiLCJ0b3RhbFJhbmsiLCJyZXBsYWNlIiwid29ybGRSYW5rIiwid29ya1RvdGFsUmFuayIsIndvcmtXb3JsZFJhbmsiLCJkb2N1bWVudCIsIndyaXRlIiwicmVzIiwibG9nIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ25CLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFBQSxRQUNKQyxPQURJO0FBQUEsa01BQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRXFCQyw0Q0FBSyxDQUFDQyxHQUFOLDhCQUFnQ0osQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQXpDLEVBRnJCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSVFDLHVCQUFPLENBQUNDLEtBQVI7O0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEbUI7O0FBQUEsc0JBQ0pOLE9BREk7QUFBQTtBQUFBO0FBQUE7O0FBU25CQSxXQUFPLEdBQ0ZPLElBREwsQ0FDVSxVQUFDQyxJQUFELEVBQVU7QUFFWixVQUFNQyxDQUFDLEdBQUdDLDhDQUFPLENBQUNDLElBQVIsQ0FB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LENBQ0kscUJBQWFuQixPQUFPLENBQUNPLEtBQXJCLHFCQUF5QyxRQUF6QyxHQUNBUCxPQUFPLENBQUNDLElBRFIsR0FFQSxPQUZBLEdBR0FELE9BQU8sQ0FBQ1EsS0FIUixHQUlBLE9BSkEsR0FLQVIsT0FBTyxDQUFDUyxJQUxSLEdBTUEsT0FOQSxHQU9BVCxPQUFPLENBQUNVLFVBUFIsR0FRQSxPQVJBLEdBU0FWLE9BQU8sQ0FBQ1csS0FUUixHQVVBLE9BVkEsR0FXQVgsT0FBTyxDQUFDYSxTQVhSLEdBWUEsT0FaQSxHQWFBYixPQUFPLENBQUNlLFNBYlIsR0FjQSxPQWRBLEdBZUFmLE9BQU8sQ0FBQ2dCLGFBZlIsR0FnQkEsT0FoQkEsR0FpQkFoQixPQUFPLENBQUNpQixhQWpCUixHQWtCQSxPQWxCQSx3QkFtQmFqQixPQUFPLENBQUNJLEtBbkJyQixrQkFESjtBQXNCQSxhQUFPSixPQUFQO0FBQ0gsS0E3Q0wsRUE4Q0tQLElBOUNMLENBOENVLFVBQUMyQixHQUFEO0FBQUEsYUFBUzdCLE9BQU8sQ0FBQzhCLEdBQVIsQ0FBWUQsR0FBWixDQUFUO0FBQUEsS0E5Q1Y7QUErQ0g7QUFDSjs7QUFFRCxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTyxhQUFTLEVBQUMsa0JBQWpCO0FBQW9DLFFBQUksRUFBQyxRQUF6QztBQUFrRCxjQUFVLEVBQUd2QyxVQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU9ILENBUkQ7O0tBQU11QyxLO0FBVVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2lucHV0LmU0Yjc2ZWZlOTg4YTIzYzYzZGU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5cclxuZnVuY3Rpb24gb25LZXlQcmVzcyhlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRIVE1MKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9tYXBsZS5nZy91LyR7ZS50YXJnZXQudmFsdWV9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0SFRNTCgpXHJcbiAgICAgICAgICAgIC50aGVuKChodG1sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaHRtbC5kYXRhLmxlbmd0aCA8IDMwMDAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGUgPSB7fSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5uYW1lID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcImIuYWxpZ24tbWlkZGxlXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmltYWdlID0gJChcImRpdi5jaGFyYWN0ZXItYXZhdGFyLXJvd1wiKS5maW5kKFwiaW1nXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZCA9ICQoXCJpbWcuYWxpZ24tbWlkZGxlXCIpWzBdLmF0dHJpYnMuc3JjO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5sZXZlbCA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGFcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUucG9wdWxhcml0eSA9ICQoXCJkaXYjdXNlci1wcm9maWxlXCIpLmZpbmQoXCJ1bC51c2VyLXN1bW1hcnktbGlzdFwiKVswXS5jaGlsZHJlbls1XS5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdID09IHVuZGVmaW5lZCA/IFwiKOyXhuydjClcIiA6ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJhXCIpWzBdLmNoaWxkcmVuWzBdLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS50b3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzBdLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmRhdGEucmVwbGFjZSgvKFxccyopL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS53b3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzFdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzJdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtXb3JsZFJhbmsgPSAkKFwiZGl2LnVzZXItYWRkaXRpb25hbFwiKS5maW5kKFwiZGl2LmNvbC02XCIpWzNdLmNoaWxkcmVuWzRdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7cHJvZmlsZS53b3JsZH1cIiBhbHQ9XCJcIi8+YCArIFwiJm5ic3A7XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLmxldmVsICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUud29yayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLnBvcHVsYXJpdHkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5ndWlsZCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLnRvdGFsUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkUmFuayArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2JyPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlLndvcmtUb3RhbFJhbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9icj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS53b3JrV29ybGRSYW5rICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYnI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGA8aW1nIHNyYz1cIiR7cHJvZmlsZS5pbWFnZX1cIiBhbHQ9XCJcIi8+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy01MGZvcm0tY29udHJvbFwiIHR5cGU9XCJzZWFyY2hcIiBvbktleVByZXNzPXsgb25LZXlQcmVzcyB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=