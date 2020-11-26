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
      var $ = cheerio__WEBPACK_IMPORTED_MODULE_7___default.a.load(html.data);

      if (html.data.length < 30000) {
        router.push("/");
        return;
      }

      ;
      console.log(html);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0SFRNTCIsImF4aW9zIiwiZ2V0IiwicXVlcnkiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJodG1sIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiZGF0YSIsImxlbmd0aCIsInB1c2giLCJsb2ciLCJwcm9maWxlIiwibmFtZSIsImZpbmQiLCJjaGlsZHJlbiIsImltYWdlIiwiYXR0cmlicyIsInNyYyIsIndvcmxkIiwibGV2ZWwiLCJ3b3JrIiwicG9wdWxhcml0eSIsImd1aWxkIiwidW5kZWZpbmVkIiwidG90YWxSYW5rIiwicmVwbGFjZSIsIndvcmxkUmFuayIsIndvcmtUb3RhbFJhbmsiLCJ3b3JrV29ybGRSYW5rIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEa0IsV0FHSEMsT0FIRztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnTUFHbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFcUJDLDRDQUFLLENBQUNDLEdBQU4sOEJBQWdDSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsUUFBN0MsRUFGckI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFJUUMscUJBQU8sQ0FBQ0MsS0FBUjs7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhrQjtBQUFBO0FBQUE7O0FBV2xCQyx5REFBUyxDQUFDLFlBQU07QUFFWlAsV0FBTyxHQUNGUSxJQURMLENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FB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QUFELENBQXlCUyxJQUF6QixDQUE4QixXQUE5QixFQUEyQyxDQUEzQyxFQUE4Q0MsUUFBOUMsQ0FBdUQsQ0FBdkQsRUFBMERBLFFBQTFELENBQW1FLENBQW5FLEVBQXNFUCxJQUE5RjtBQUVBLGFBQU9JLE9BQVA7QUFDSCxLQTFCTCxFQTJCS1QsSUEzQkwsQ0EyQlUsVUFBQzJCLEdBQUQ7QUFBQSxhQUFTOUIsT0FBTyxDQUFDVyxHQUFSLENBQVltQixHQUFaLENBQVQ7QUFBQSxLQTNCVjtBQTRCSCxHQTlCUSxDQUFUO0FBZ0NBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG1CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxvQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFDSSxRQUFJLEVBQUMscUZBRFQ7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFlSCxDQTFERDs7R0FBTXRDLE87VUFDYUUscUQ7OztLQURiRixPO0FBNERTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjRlMWRhMzZjMjAxNTFmYTIxZGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjaGVlcmlvIGZyb20gXCJjaGVlcmlvXCI7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEhUTUwoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9tYXBsZS5nZy91LyR7cm91dGVyLnF1ZXJ5LnVzZXJuYW1lfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBnZXRIVE1MKClcclxuICAgICAgICAgICAgLnRoZW4oKGh0bWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoaHRtbC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaHRtbC5kYXRhLmxlbmd0aCA8IDMwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZmlsZSA9IHt9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLm5hbWUgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwiYi5hbGlnbi1taWRkbGVcIilbMF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUuaW1hZ2UgPSAkKFwiZGl2LmNoYXJhY3Rlci1hdmF0YXItcm93XCIpLmZpbmQoXCJpbWdcIilbMF0uYXR0cmlicy5zcmM7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkID0gJChcImltZy5hbGlnbi1taWRkbGVcIilbMF0uYXR0cmlicy5zcmM7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmxldmVsID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmsgPSAkKFwiZGl2I3VzZXItcHJvZmlsZVwiKS5maW5kKFwidWwudXNlci1zdW1tYXJ5LWxpc3RcIilbMF0uY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0uZGF0YVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZS5wb3B1bGFyaXR5ID0gJChcImRpdiN1c2VyLXByb2ZpbGVcIikuZmluZChcInVsLnVzZXItc3VtbWFyeS1saXN0XCIpWzBdLmNoaWxkcmVuWzVdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLmd1aWxkID0gJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImFcIilbMF0gPT0gdW5kZWZpbmVkID8gXCIo7JeG7J2MKVwiIDogJChcImRpdi51c2VyLWFkZGl0aW9uYWxcIikuZmluZChcImFcIilbMF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLnRvdGFsUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMF0uY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0uZGF0YS5yZXBsYWNlKC8oXFxzKikvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlLndvcmxkUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMV0uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1RvdGFsUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbMl0uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGUud29ya1dvcmxkUmFuayA9ICQoXCJkaXYudXNlci1hZGRpdGlvbmFsXCIpLmZpbmQoXCJkaXYuY29sLTZcIilbM10uY2hpbGRyZW5bNF0uY2hpbGRyZW5bMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2ZpbGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9wcm9maWxlLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==