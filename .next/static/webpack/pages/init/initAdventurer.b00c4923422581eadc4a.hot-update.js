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
    var startX = 0;
    var translateX = 0;
    initJobGroup.addEventListener("mousedown", function (e) {
      flag = true;
      startX = e.clientX;
    });
    window.addEventListener("mousemove", function (e) {
      if (!flag) return; // let x =  -  > 0 ? 0 : e.clientX - startX < initJobGroup.width ? initJobGroup.width : e.clientX - startX;

      if (startX - e.clientX > 0) translateX += 1;else translateX -= 1;
      initJobGroup.style.transform = "translateX(".concat(translateX, "px)");
    });
    window.addEventListener("mouseup", function () {
      flag = false;
    });
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/adventurer.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group warrior flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
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
        num: 1
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
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 99,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group magician flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "arkmagetc",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "arkmagefp",
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
        num: 4
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
  }))), __jsx("div", {
    className: "bishop",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group bowman flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
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
        num: 1
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
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group thief flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hero",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 99
    }
  }))), __jsx("div", {
    className: "paladine",
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
        num: 1
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
  }))), __jsx("div", {
    className: "darknight",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 99
    }
  })))), __jsx("div", {
    className: "job__group pirate flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9pbml0QWR2ZW50dXJlci5qcyJdLCJuYW1lcyI6WyJvbk1vdXNlT3ZlciIsImUiLCJqb2JJbWFnZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm9uTW91c2VMZWF2ZSIsImEiLCJhbGVydCIsIkluZGV4IiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZHZlbnR1cmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkYXRhIiwiZ3JvdXAiLCJjbGFzc0xpc3QiLCJqb2IiLCJpIiwidHJhbnNmb3JtIiwiaW5pdEpvYkdyb3VwIiwiZmxhZyIsInN0YXJ0WCIsInRyYW5zbGF0ZVgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpZW50WCIsIndpbmRvdyIsInBhdGhuYW1lIiwicXVlcnkiLCJudW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCLE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQXhCO0FBQ0FGLFVBQVEsQ0FBQ0csS0FBVCxDQUFlQyxVQUFmLEdBQTRCLEtBQTVCO0FBQ0FKLFVBQVEsQ0FBQ0csS0FBVCxDQUFlRSxLQUFmLEdBQXVCLE9BQXZCO0FBQ0FMLFVBQVEsQ0FBQ0csS0FBVCxDQUFlRyxNQUFmLEdBQXdCLE9BQXhCO0FBQ0gsQ0FMRDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBUixDQUFDLEVBQUk7QUFDdEIsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsVUFBeEI7QUFDQUYsVUFBUSxDQUFDRyxLQUFULENB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBRXlCLGNBQVEscUJBQVY7QUFBaUNDLFdBQUssRUFBRTtBQUFFQyxXQUFHLEVBQUU7QUFBUDtBQUF4QyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWxFLENBREosQ0FSSixDQXJDSixFQWlESTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRKLENBSkosQ0FGSixDQVhKLENBREo7QUEwRUgsQ0F2SEQ7O0dBQU14QixLOztLQUFBQSxLO0FBeUhTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbml0L2luaXRBZHZlbnR1cmVyLmIwMGM0OTIzNDIyNTgxZWFkYzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvU2lkZWJhclwiO1xyXG5cclxuY29uc3Qgb25Nb3VzZU92ZXIgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCI0MTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCI0NTBweFwiO1xyXG59XHJcblxyXG5jb25zdCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCIzNTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIzNzBweFwiO1xyXG59XHJcblxyXG5jb25zdCBhID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJhc2RcIik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy9iYWNrZ3JvdW5kL2FkdmVudHVyZXIucG5nKWBcclxuXHJcbiAgICAgICAgbGV0IGFkdmVudHVyZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvYl9fZ3JvdXBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWR2ZW50dXJlci5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtkYXRhLmNsYXNzTGlzdFsxXX0gPiBkaXZgKTtcclxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaCgoam9iLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMTcwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMTcwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpICUgMiAhPSAwICYmIGkgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0kezE3MCAqIChpIC0gMSl9cHgsIDE3MHB4KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsxNzAgKiAoaSAtIDEpfXB4KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGluaXRKb2JHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdF9fam9iX19ncm91cFwiKTtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGFydFggPSAwO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gMDtcclxuICAgICAgICBpbml0Sm9iR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RhcnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFmbGFnKSByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIGxldCB4ID0gIC0gID4gMCA/IDAgOiBlLmNsaWVudFggLSBzdGFydFggPCBpbml0Sm9iR3JvdXAud2lkdGggPyBpbml0Sm9iR3JvdXAud2lkdGggOiBlLmNsaWVudFggLSBzdGFydFg7XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0WCAtIGUuY2xpZW50WCA+IDApXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYICs9IDE7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggLT0gMTtcclxuICAgICAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5tc2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaGVhZGVyLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9pbml0LmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0aXRsZT1cImluaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvaW5pdC9hZHZlbnR1cmVyLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRfX2pvYl9fZ3JvdXAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCB3YXJyaW9yIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWxhZGluZVwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogMSB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrbmlnaHRcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDIgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JfX2dyb3VwIG1hZ2ljaWFuIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya21hZ2V0Y1wiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogMyB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya21hZ2VmcFwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvQWR2ZW50dXJlcmAsIHF1ZXJ5OiB7IG51bTogNCB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXNob3BcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDUgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JfX2dyb3VwIGJvd21hbiBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAwIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFsYWRpbmVcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFya25pZ2h0XCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCB0aGllZiBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAwIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFsYWRpbmVcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0FkdmVudHVyZXJgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFya25pZ2h0XCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9BZHZlbnR1cmVyYCwgcXVlcnk6IHsgbnVtOiAyIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iX19ncm91cCBwaXJhdGUgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=