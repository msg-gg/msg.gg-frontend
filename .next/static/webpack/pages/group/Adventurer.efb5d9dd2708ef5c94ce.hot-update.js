webpackHotUpdate_N_E("pages/group/Adventurer",{

/***/ "./pages/group/Adventurer.js":
/*!***********************************!*\
  !*** ./pages/group/Adventurer.js ***!
  \***********************************/
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
/* harmony import */ var _compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compornents/Header/header */ "./compornents/Header/header.js");
/* harmony import */ var _compornents_Footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compornents/Footer/footer */ "./compornents/Footer/footer.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('hero'),
      job = _useState[0],
      setJob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState2[0],
      setNum = _useState2[1];

  var jobArr = ["hero", "darknight", "paladine", "arkmagetc", "arkmagefp", "bishop", "bowmaster", "marks", "pathfinder", "nightlord", "shadower", "dualblade", "viper", "captain", "cannonmaster"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    setJob(jobArr[charNum]);
    var characterImg = document.querySelector(".character__img");
    var characterRect = document.querySelector(".character__rect");
    var characterSelecter = document.querySelector(".character");
    characterImg.style.backgroundImage = "url(../../images/job/".concat(job, ".png)");
    characterImg.style.transition = "0s";
    characterImg.style.width = "200vw";
    characterImg.style.height = "200vh";
    characterRect.style.transition = "0s";
    characterRect.style.width = "100%";
    characterRect.style.left = "-20%";
    characterSelecter.style.transition = ".5s";
    var oneBlock = -140;
    var translateX = num * oneBlock >= oneBlock * 2 ? 0 : (num - 2) * oneBlock < -1260 ? -1260 : (num - 2) * oneBlock;
    characterSelecter.style.transform = "translate3d(".concat(translateX, "px, 0px, 0px)");
    setTimeout(function () {
      characterImg.style.transition = ".8s";
      characterImg.style.width = "110vh";
      characterImg.style.height = "110vh";
      if (job == 'hero') characterImg.style.width = "150vh";

      if (job == 'pathfinder') {
        characterImg.style.width = "142vh";
        characterImg.style.height = "142vh";
      }

      if (job == 'darknight') {
        characterImg.style.width = "142vh";
        characterImg.style.height = "142vh";
      }

      characterRect.style.transition = "1s";
      characterRect.style.width = "30%";
      characterRect.style.left = "20%";
    }, 100);
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    href: "/style/job/job.css",
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
  }), __jsx("script", {
    src: "/js/app.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_5__["Img"], {
    className: "character__bg",
    src: "../../images/background/".concat(job, ".png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "character__sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "character__group character__group__active pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Adventurer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 56
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 52
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Resistance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 56
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 50
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Grandis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 53
    }
  }, "\uADF8\uB780\uB514\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Zero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 50
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Kinesis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 53
    }
  }, "\uD0A4\uB124\uC2DC\uC2A4")))), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: job,
    className: "character__img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "prev-btn",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0 ? 0 : num - 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("li", {
    onClick: function onClick() {
      return setNum(0);
    },
    className: "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(1);
    },
    className: "darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(2);
    },
    className: "paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(3);
    },
    className: "arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(4);
    },
    className: "arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(5);
    },
    className: "bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(6);
    },
    className: "bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(7);
    },
    className: "marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(8);
    },
    className: "pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(9);
    },
    className: "nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(10);
    },
    className: "shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(11);
    },
    className: "dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(12);
    },
    className: "viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(13);
    },
    className: "captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setNum(14);
    },
    className: "cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }))), __jsx("img", {
    id: "next-btn",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > jobArr.length - 1 ? jobArr.length - 1 : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }))));
};

_s(Index, "/qhzB9/6a+lGO6gQLGQdMftu01s=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiam9iIiwic2V0Sm9iIiwibnVtIiwic2V0TnVtIiwiam9iQXJyIiwidXNlTGF5b3V0RWZmZWN0IiwiY2hhck51bSIsImNoYXJhY3RlckltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoYXJhY3RlclJlY3QiLCJjaGFyYWN0ZXJTZWxlY3RlciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsIm9uZUJsb2NrIiwidHJhbnNsYXRlWCIsInRyYW5zZm9ybSIsInNldFRpbWVvdXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxNQUFELENBRGQ7QUFBQSxNQUNUQyxHQURTO0FBQUEsTUFDSkMsTUFESTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxDQUFELENBRmQ7QUFBQSxNQUVURyxHQUZTO0FBQUEsTUFFSkMsTUFGSTs7QUFJaEIsTUFBTUMsTUFBTSxHQUFHLENBQ1gsTUFEVyxFQUVYLFdBRlcsRUFHWCxVQUhXLEVBSVgsV0FKVyxFQUtYLFdBTFcsRUFNWCxRQU5XLEVBT1gsV0FQVyxFQVFYLE9BUlcsRUFTWCxZQVRXLEVBVVgsV0FWVyxFQVdYLFVBWFcsRUFZWCxXQVpXLEVBYVgsT0FiVyxFQWNYLFNBZFcsRUFlWCxjQWZXLENBQWY7QUFrQkFDLCtEQUFlLENBQUMsWUFBTTtBQUVsQkosVUFBTSxDQUFDRyxNQUFNLENBQUNFLE9BQUQsQ0FBUCxDQUFOO0FBRUEsUUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJB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O0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBOEIsYUFBUyxFQUFDLFdBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQWFJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQWI7QUFBK0IsYUFBUyxFQUFDLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURKLENBRkosRUFxQkk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUMsK0JBQXZCO0FBQXVELFdBQU8sRUFBRTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQU4sR0FBVUUsTUFBTSxDQUFDa0IsTUFBUCxHQUFnQixDQUExQixHQUE4QmxCLE1BQU0sQ0FBQ2tCLE1BQVAsR0FBZ0IsQ0FBOUMsR0FBa0RwQixHQUFHLEdBQUcsQ0FBekQsQ0FBVjtBQUFBLEtBQWhFO0FBQXVJLE9BQUcsRUFBQyxFQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBaENKLENBWkosQ0FESjtBQXVFSCxDQXBJRDs7R0FBTUosSzs7S0FBQUEsSztBQXNJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5lZmI1ZDlkZDI3MDhlZjVjOTRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvRm9vdGVyL2Zvb3RlclwiXHJcbmltcG9ydCB7SW1nfSBmcm9tICdyZWFjdC1pbWFnZSdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2pvYiwgc2V0Sm9iXSA9IHVzZVN0YXRlKCdoZXJvJyk7XHJcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgam9iQXJyID0gW1xyXG4gICAgICAgIFwiaGVyb1wiLCBcclxuICAgICAgICBcImRhcmtuaWdodFwiLCBcclxuICAgICAgICBcInBhbGFkaW5lXCIsXHJcbiAgICAgICAgXCJhcmttYWdldGNcIixcclxuICAgICAgICBcImFya21hZ2VmcFwiLFxyXG4gICAgICAgIFwiYmlzaG9wXCIsXHJcbiAgICAgICAgXCJib3dtYXN0ZXJcIixcclxuICAgICAgICBcIm1hcmtzXCIsXHJcbiAgICAgICAgXCJwYXRoZmluZGVyXCIsXHJcbiAgICAgICAgXCJuaWdodGxvcmRcIixcclxuICAgICAgICBcInNoYWRvd2VyXCIsXHJcbiAgICAgICAgXCJkdWFsYmxhZGVcIixcclxuICAgICAgICBcInZpcGVyXCIsXHJcbiAgICAgICAgXCJjYXB0YWluXCIsXHJcbiAgICAgICAgXCJjYW5ub25tYXN0ZXJcIlxyXG4gICAgXVxyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldEpvYihqb2JBcnJbY2hhck51bV0pO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIik7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlclJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyU2VsZWN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3RlclwiKTtcclxuXHJcbiAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2pvYi8ke2pvYn0ucG5nKWA7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIwc1wiO1xyXG4gICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMjAwdndcIjtcclxuICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIyMDB2aFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBjaGFyYWN0ZXJSZWN0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS5sZWZ0ID0gXCItMjAlXCI7XHJcblxyXG4gICAgICAgIGNoYXJhY3RlclNlbGVjdGVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIi41c1wiO1xyXG5cclxuICAgICAgICBsZXQgb25lQmxvY2sgPSAtMTQwXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBudW0gKiBvbmVCbG9jayA+PSBvbmVCbG9jayAqIDIgPyAwIDogKG51bSAtIDIpICogb25lQmxvY2sgPCAtMTI2MCA/IC0xMjYwIDogKG51bSAtIDIpICogb25lQmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyU2VsZWN0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMHB4LCAwcHgpYDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckltZy5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2hlcm8nKSBjaGFyYWN0ZXJJbWcuc3R5bGUud2lkdGggPSBcIjE1MHZoXCI7IFxyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ3BhdGhmaW5kZXInKSB7IGNoYXJhY3RlckltZy5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjsgY2hhcmFjdGVySW1nLnN0eWxlLmhlaWdodCA9IFwiMTQydmhcIjsgfVxyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2RhcmtuaWdodCcpIHsgY2hhcmFjdGVySW1nLnN0eWxlLndpZHRoID0gXCIxNDJ2aFwiOyBjaGFyYWN0ZXJJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxNDJ2aFwiOyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcclxuICAgICAgICAgICAgY2hhcmFjdGVyUmVjdC5zdHlsZS53aWR0aCA9IFwiMzAlXCI7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlclJlY3Quc3R5bGUubGVmdCA9IFwiMjAlXCI7XHJcbiAgICAgICAgfSwgMTAwKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2pvYi9qb2IuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uL2ltYWdlcy9iYWNrZ3JvdW5kLyR7am9ifS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19yZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fYWN0aXZlIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9BZHZlbnR1cmVyXCI+PGEgaHJlZj1cIiNcIj7rqqjtl5jqsIA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvQ3lnbnVzXCI+PGEgaHJlZj1cIiNcIj7si5zqt7jrhIjsiqQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvUmVzaXN0YW5jZVwiPjxhIGhyZWY9XCIjXCI+66CI7KeA7Iqk7YOV7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0hlcm9cIj48YSBocmVmPVwiI1wiPuyYgeybhTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9HcmFuZGlzXCI+PGEgaHJlZj1cIiNcIj7qt7jrnoDrlJTsiqQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvWmVyb1wiPjxhIGhyZWY9XCIjXCI+7KCc66GcPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0tpbmVzaXNcIj48YSBocmVmPVwiI1wiPu2CpOuEpOyLnOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2pvYn0gY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19pbWdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3NlbGVjdCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJwcmV2LWJ0blwiIHNyYz1cIi4uLy4uL2ltYWdlcy9sZWZ0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSAtIDEgPCAwID8gMCA6IG51bSAtIDEpfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgwKX0gY2xhc3NOYW1lPVwiaGVyb1wiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEpfSBjbGFzc05hbWU9XCJkYXJrbmlnaHRcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgyKX0gY2xhc3NOYW1lPVwicGFsYWRpbmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSgzKX0gY2xhc3NOYW1lPVwiYXJrbWFnZXRjXCI+PC9saT4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNCl9IGNsYXNzTmFtZT1cImFya21hZ2VmcFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDUpfSBjbGFzc05hbWU9XCJiaXNob3BcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg2KX0gY2xhc3NOYW1lPVwiYm93bWFzdGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNyl9IGNsYXNzTmFtZT1cIm1hcmtzXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oOCl9IGNsYXNzTmFtZT1cInBhdGhmaW5kZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldE51bSg5KX0gY2xhc3NOYW1lPVwibmlnaHRsb3JkXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTApfSBjbGFzc05hbWU9XCJzaGFkb3dlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDExKX0gY2xhc3NOYW1lPVwiZHVhbGJsYWRlXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTIpfSBjbGFzc05hbWU9XCJ2aXBlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDEzKX0gY2xhc3NOYW1lPVwiY2FwdGFpblwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0TnVtKDE0KX0gY2xhc3NOYW1lPVwiY2Fubm9ubWFzdGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibmV4dC1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvcmlnaHQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtICsgMSA+IGpvYkFyci5sZW5ndGggLSAxID8gam9iQXJyLmxlbmd0aCAtIDEgOiBudW0gKyAxKX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9