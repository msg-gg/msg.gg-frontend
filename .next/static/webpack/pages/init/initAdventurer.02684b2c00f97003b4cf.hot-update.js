webpackHotUpdate_N_E("pages/init/initAdventurer",{

/***/ "./pages/init/initAdventurer.js":
/*!**************************************!*\
  !*** ./pages/init/initAdventurer.js ***!
  \**************************************/
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
/* harmony import */ var _compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compornents/Sidebar */ "./compornents/Sidebar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\School\\Desktop\\msg.gg-frontend\\pages\\init\\initAdventurer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var onMouseOver = function onMouseOver(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "410px";
  jobImage.style.height = "450px";
};

var onMouseLeave = function onMouseLeave(e) {
  var jobImage = e.target.parentNode;
  jobImage.style.transition = ".8s";
  jobImage.style.width = "350px";
  jobImage.style.height = "370px";
};

var a = function a() {
  alert("asd");
};

var Index = function Index(props) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/adventurer.png)";
    var adventurer = document.querySelectorAll(".job__group");
    adventurer.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(170px)";
        } else if (i == 1) {
          job.style.transform = "translateY(170px)";
        } else if (i % 2 != 0 && i != 1) {
          job.style.transform = "translate(-".concat(170 * (i - 1), "px, 170px)");
        } else {
          job.style.transform = "translateX(-".concat(170 * (i - 1), "px)");
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var flag = false;
    var startX;
    initJobGroup.addEventListener("mousedown", function (e) {
      flag = true;
      startX = e.clientX;
    });
    window.addEventListener("mousemove", function (e) {
      if (!flag) return;
      console.log(initJobGroup);
      var x = e.clientX - startX > 0 ? 0 : e.clientX - startX < initJobGroup.width ? initJobGroup.width : e.clientX - startX;
      initJobGroup.style.transform = "translateX(".concat(x, "px)");
    });
    window.addEventListener("mouseup", function () {
      flag = false;
    });
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/adventurer.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group warrior flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group magician flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "arkmagetc",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 3
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "arkmagefp",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 4
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "bishop",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 5
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group bowman flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group thief flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Adventurer",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group pirate flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  })))));
};

_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9pbml0QWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJvbk1vdXNlT3ZlciIsImUiLCJqb2JJbWFnZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm9uTW91c2VMZWF2ZSIsImEiLCJhbGVydCIsIkluZGV4IiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZHZlbnR1cmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkYXRhIiwiZ3JvdXAiLCJjbGFzc0xpc3QiLCJqb2IiLCJpIiwidHJhbnNmb3JtIiwiaW5pdEpvYkdyb3VwIiwiZmxhZyIsInN0YXJ0WCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGllbnRYIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsIngiLCJwYXRobmFtZSIsInF1ZXJ5IiwibnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLENBQUMsRUFBSTtBQUNyQixNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUF4QjtBQUNBRixVQUFRLENBQUNHLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtBQUNBSixVQUFRLENBQUNHLEtBQVQsQ0FBZUUsS0FBZixHQUF1QixPQUF2QjtBQUNBTCxVQUFRLENBQUNHLEtBQVQsQ0FBZUcsTUFBZixHQUF3QixPQUF4QjtBQUNILENBTEQ7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQVIsQ0FBQyxFQUFJO0FBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQXhCO0FBQ0FGLFVBQVEsQ0FBQ0cs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Q0FESixDQUpKLEVBUUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFXLEVBQUV0QyxXQUF4QztBQUFxRCxnQkFBWSxFQUFFUyxZQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTtBQUFFMkIsY0FBUSxxQkFBVjtBQUFpQ0MsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRTtBQUFQO0FBQXhDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbEUsQ0FESixDQVJKLENBckNKLEVBaURJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqREosQ0FKSixDQUZKLENBWEosQ0FESjtBQTBFSCxDQW5IRDs7R0FBTTFCLEs7O0tBQUFBLEs7QUFxSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luaXQvaW5pdEFkdmVudHVyZXIuMDI2ODRiMmMwMGY5NzAwM2I0Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb3JuZW50cy9TaWRlYmFyXCI7XHJcblxyXG5jb25zdCBvbk1vdXNlT3ZlciA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjQxMHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjQ1MHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IG9uTW91c2VMZWF2ZSA9IGUgPT4ge1xyXG4gICAgbGV0IGpvYkltYWdlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGpvYkltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi44c1wiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjM1MHB4XCI7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjM3MHB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IGEgPSAoKSA9PiB7XHJcbiAgICBhbGVydChcImFzZFwiKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL2JhY2tncm91bmQvYWR2ZW50dXJlci5wbmcpYFxyXG5cclxuICAgICAgICBsZXQgYWR2ZW50dXJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuam9iX19ncm91cFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBhZHZlbnR1cmVyLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2RhdGEuY2xhc3NMaXN0WzFdfSA+IGRpdmApO1xyXG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKChqb2IsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgxNzBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgxNzBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgJSAyICE9IDAgJiYgaSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLSR7MTcwICogKGkgLSAxKX1weCwgMTcwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0kezE3MCAqIChpIC0gMSl9cHgpYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5pdEpvYkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0X19qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHN0YXJ0WDtcclxuICAgICAgICBpbml0Sm9iR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RhcnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFmbGFnKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluaXRKb2JHcm91cClcclxuICAgICAgICAgICAgbGV0IHggPSBlLmNsaWVudFggLSBzdGFydFggPiAwID8gMCA6IGUuY2xpZW50WCAtIHN0YXJ0WCA8IGluaXRKb2JHcm91cC53aWR0aCA/IGluaXRKb2JHcm91cC53aWR0aCA6IGUuY2xpZW50WCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eH1weClgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9pbml0LmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImluaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvaW5pdC9hZHZlbnR1cmVyLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fZ3JvdXAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCB3YXJyaW9yIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWxhZGluZVwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogMSB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrbmlnaHRcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDIgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JfX2dyb3VwIG1hZ2ljaWFuIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya21hZ2V0Y1wiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogMyB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya21hZ2VmcFwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogNCB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXNob3BcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDUgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JfX2dyb3VwIGJvd21hbiBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAwIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFsYWRpbmVcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFya25pZ2h0XCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCB0aGllZiBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAwIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFsYWRpbmVcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFya25pZ2h0XCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBwaXJhdGUgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=