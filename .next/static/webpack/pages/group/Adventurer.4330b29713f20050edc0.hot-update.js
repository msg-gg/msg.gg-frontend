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
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\group\\Adventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('hero'),
      job = _useState[0],
      setJob = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      num = _useState2[0],
      setNum = _useState2[1];

  console.log(num);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector(".character__img").style.transition = "0s";
    document.querySelector(".character__img").style.width = "200vw";
    document.querySelector(".character__img").style.height = "200vh";
    document.querySelector(".character__rect").style.transition = "0s";
    document.querySelector(".character__rect").style.width = "100%";
    document.querySelector(".character__rect").style.left = "-20%";
    setTimeout(function () {
      document.querySelector(".character__img").style.transition = ".8s";
      document.querySelector(".character__img").style.width = "110vh";
      document.querySelector(".character__img").style.height = "110vh";
      if (job == 'hero') document.querySelector(".character__img").style.width = "150vh";

      if (job == 'pathfinder') {
        document.querySelector(".character__img").style.width = "142vh";
        document.querySelector(".character__img").style.height = "142vh";
      }

      if (job == 'darknight') {
        document.querySelector(".character__img").style.width = "142vh";
        document.querySelector(".character__img").style.height = "142vh";
      }

      document.querySelector(".character__rect").style.transition = "1s";
      document.querySelector(".character__rect").style.width = "30%";
      document.querySelector(".character__rect").style.left = "20%";
    }, 100);
  });
  var background = {
    backgroundImage: "url(../../images/background/".concat(job, ".png)")
  };
  var characterImg = {
    backgroundImage: "url(../../images/job/".concat(job, ".png)")
  };
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/job/job.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("script", {
    src: "/js/app.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "character__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "character__bg",
    style: background,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "character__rect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "character__sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "character__group character__group__active pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Adventurer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 56
    }
  }, "\uBAA8\uD5D8\uAC00"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Cygnus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 52
    }
  }, "\uC2DC\uADF8\uB108\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Resistance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 56
    }
  }, "\uB808\uC9C0\uC2A4\uD0D5\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 50
    }
  }, "\uC601\uC6C5"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Grandis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  }, "\uADF8\uB780\uB514\uC2A4"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Zero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 50
    }
  }, "\uC81C\uB85C"))), __jsx("li", {
    className: "character__group character__group__none pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/group/Kinesis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 53
    }
  }, "\uD0A4\uB124\uC2DC\uC2A4")))), __jsx("div", {
    className: "character__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: job,
    className: "character__img",
    style: characterImg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "character__select flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "prev-btn",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "character__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "character d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx("li", {
    onClick: function onClick() {
      return setJob("hero");
    },
    className: "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("darknight");
    },
    className: "darknight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("paladine");
    },
    className: "paladine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("arkmagetc");
    },
    className: "arkmagetc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("arkmagefp");
    },
    className: "arkmagefp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("bishop");
    },
    className: "bishop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("bowmaster");
    },
    className: "bowmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("marks");
    },
    className: "marks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("pathfinder");
    },
    className: "pathfinder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("nightlord");
    },
    className: "nightlord",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("shadower");
    },
    className: "shadower",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("dualblade");
    },
    className: "dualblade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("viper");
    },
    className: "viper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("captain");
    },
    className: "captain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }), __jsx("li", {
    onClick: function onClick() {
      return setJob("cannonmaster");
    },
    className: "cannonmaster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }))), __jsx("img", {
    id: "next-btn",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }))));
};

_s(Index, "6m4K88c0zlvCgjYuCEwtLelpV6w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3JvdXAvQWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiam9iIiwic2V0Sm9iIiwibnVtIiwic2V0TnVtIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInNldFRpbWVvdXQiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiY2hhcmFjdGVySW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxNQUFELENBRGQ7QUFBQSxNQUNUQyxHQURTO0FBQUEsTUFDSkMsTUFESTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxDQUFELENBRmQ7QUFBQSxNQUVURyxHQUZTO0FBQUEsTUFFSkMsTUFGSTs7QUFJaEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBRUFJLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxLQUExQyxDQUFnREMsVUFBaEQsR0FBNkQsSUFBN0Q7QUFDQUgsWUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsS0FBMUMsQ0FBZ0RFLEtBQWhELEdBQXdELE9BQXhEO0FBQ0FKLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLEtBQTFDLENBQWdERyxNQUFoRCxHQUF5RCxPQUF6RDtBQUVBTCxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDQyxLQUEzQyxDQUFpREMsVUFBakQsR0FBOEQsSUFBOUQ7QUFDQUgsWUFBUSxDQUFDQyxhQUFULENBQXVC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LEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsV0FBRCxDQUFaO0FBQUEsS0FBYjtBQUF3QyxhQUFTLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsUUFBRCxDQUFaO0FBQUEsS0FBYjtBQUFxQyxhQUFTLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsV0FBRCxDQUFaO0FBQUEsS0FBYjtBQUF3QyxhQUFTLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsT0FBRCxDQUFaO0FBQUEsS0FBYjtBQUFvQyxhQUFTLEVBQUMsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsWUFBRCxDQUFaO0FBQUEsS0FBYjtBQUF5QyxhQUFTLEVBQUMsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsV0FBRCxDQUFaO0FBQUEsS0FBYjtBQUF3QyxhQUFTLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsVUFBRCxDQUFaO0FBQUEsS0FBYjtBQUF1QyxhQUFTLEVBQUMsVUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsV0FBRCxDQUFaO0FBQUEsS0FBYjtBQUF3QyxhQUFTLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBYUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsT0FBRCxDQUFaO0FBQUEsS0FBYjtBQUFvQyxhQUFTLEVBQUMsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLEVBY0k7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsU0FBRCxDQUFaO0FBQUEsS0FBYjtBQUFzQyxhQUFTLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLEVBZUk7QUFBSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsY0FBRCxDQUFaO0FBQUEsS0FBYjtBQUEyQyxhQUFTLEVBQUMsY0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBREosQ0FGSixFQXFCSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLE9BQUcsRUFBQywrQkFBdkI7QUFBdUQsV0FBTyxFQUFFO0FBQUEsYUFBSUUsTUFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFWO0FBQUEsS0FBaEU7QUFBcUYsT0FBRyxFQUFDLEVBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosQ0E5QkosQ0FaSixDQURKO0FBcUVILENBekdEOztHQUFNSixLOztLQUFBQSxLO0FBMkdTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ncm91cC9BZHZlbnR1cmVyLjQzMzBiMjk3MTNmMjAwNTBlZGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvcm5lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvRm9vdGVyL2Zvb3RlclwiXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtqb2IsIHNldEpvYl0gPSB1c2VTdGF0ZSgnaGVybycpO1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG51bSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiMHNcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLndpZHRoID0gXCIyMDB2d1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUuaGVpZ2h0ID0gXCIyMDB2aFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19yZWN0XCIpLnN0eWxlLnRyYW5zaXRpb24gPSBcIjBzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX3JlY3RcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKS5zdHlsZS5sZWZ0ID0gXCItMjAlXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjhzXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUud2lkdGggPSBcIjExMHZoXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmFjdGVyX19pbWdcIikuc3R5bGUuaGVpZ2h0ID0gXCIxMTB2aFwiO1xyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2hlcm8nKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLndpZHRoID0gXCIxNTB2aFwiOyBcclxuICAgICAgICAgICAgaWYoam9iID09ICdwYXRoZmluZGVyJykgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLndpZHRoID0gXCIxNDJ2aFwiOyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9faW1nXCIpLnN0eWxlLmhlaWdodCA9IFwiMTQydmhcIjsgfVxyXG4gICAgICAgICAgICBpZihqb2IgPT0gJ2RhcmtuaWdodCcpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX2ltZ1wiKS5zdHlsZS53aWR0aCA9IFwiMTQydmhcIjsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX2ltZ1wiKS5zdHlsZS5oZWlnaHQgPSBcIjE0MnZoXCI7IH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX3JlY3RcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFyYWN0ZXJfX3JlY3RcIikuc3R5bGUud2lkdGggPSBcIjMwJVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXJhY3Rlcl9fcmVjdFwiKS5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcclxuICAgICAgICB9LCAxMDApXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB2YXIgYmFja2dyb3VuZCA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoLi4vLi4vaW1hZ2VzL2JhY2tncm91bmQvJHtqb2J9LnBuZylgLFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjaGFyYWN0ZXJJbWcgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC4uLy4uL2ltYWdlcy9qb2IvJHtqb2J9LnBuZylgLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2pvYi9qb2IuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2JnXCIgc3R5bGU9e2JhY2tncm91bmR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3JlY3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX3NpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19hY3RpdmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0FkdmVudHVyZXJcIj48YSBocmVmPVwiI1wiPuuqqO2XmOqwgDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9DeWdudXNcIj48YSBocmVmPVwiI1wiPuyLnOq3uOuEiOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9SZXNpc3RhbmNlXCI+PGEgaHJlZj1cIiNcIj7roIjsp4DsiqTtg5XsiqQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvSGVyb1wiPjxhIGhyZWY9XCIjXCI+7JiB7JuFPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2dyb3VwIGNoYXJhY3Rlcl9fZ3JvdXBfX25vbmUgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dyb3VwL0dyYW5kaXNcIj48YSBocmVmPVwiI1wiPuq3uOuegOuUlOyKpDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19ncm91cCBjaGFyYWN0ZXJfX2dyb3VwX19ub25lIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cC9aZXJvXCI+PGEgaHJlZj1cIiNcIj7soJzroZw8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fZ3JvdXAgY2hhcmFjdGVyX19ncm91cF9fbm9uZSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ3JvdXAvS2luZXNpc1wiPjxhIGhyZWY9XCIjXCI+7YKk64Sk7Iuc7IqkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17am9ifSBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2ltZ1wiIHN0eWxlPXtjaGFyYWN0ZXJJbWd9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9fc2VsZWN0IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInByZXYtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL2xlZnQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtIC0gMSA8IDApfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImhlcm9cIil9IGNsYXNzTmFtZT1cImhlcm9cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImRhcmtuaWdodFwiKX0gY2xhc3NOYW1lPVwiZGFya25pZ2h0XCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJwYWxhZGluZVwiKX0gY2xhc3NOYW1lPVwicGFsYWRpbmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImFya21hZ2V0Y1wiKX0gY2xhc3NOYW1lPVwiYXJrbWFnZXRjXCI+PC9saT4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJhcmttYWdlZnBcIil9IGNsYXNzTmFtZT1cImFya21hZ2VmcFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2V0Sm9iKFwiYmlzaG9wXCIpfSBjbGFzc05hbWU9XCJiaXNob3BcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImJvd21hc3RlclwiKX0gY2xhc3NOYW1lPVwiYm93bWFzdGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJtYXJrc1wiKX0gY2xhc3NOYW1lPVwibWFya3NcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcInBhdGhmaW5kZXJcIil9IGNsYXNzTmFtZT1cInBhdGhmaW5kZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcIm5pZ2h0bG9yZFwiKX0gY2xhc3NOYW1lPVwibmlnaHRsb3JkXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJzaGFkb3dlclwiKX0gY2xhc3NOYW1lPVwic2hhZG93ZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImR1YWxibGFkZVwiKX0gY2xhc3NOYW1lPVwiZHVhbGJsYWRlXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzZXRKb2IoXCJ2aXBlclwiKX0gY2xhc3NOYW1lPVwidmlwZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImNhcHRhaW5cIil9IGNsYXNzTmFtZT1cImNhcHRhaW5cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldEpvYihcImNhbm5vbm1hc3RlclwiKX0gY2xhc3NOYW1lPVwiY2Fubm9ubWFzdGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwibmV4dC1idG5cIiBzcmM9XCIuLi8uLi9pbWFnZXMvcmlnaHQtYnV0dG9uLnBuZ1wiIG9uQ2xpY2s9eygpPT5zZXROdW0obnVtICsgMSl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==