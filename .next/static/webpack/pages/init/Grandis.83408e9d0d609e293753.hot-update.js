webpackHotUpdate_N_E("pages/init/Grandis",{

/***/ "./pages/init/Grandis.js":
/*!*******************************!*\
  !*** ./pages/init/Grandis.js ***!
  \*******************************/
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
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\init\\Grandis.js",
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

var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector("#__next").style.backgroundImage = "url(../../images/background/grandis.png)";
    var grandis = document.querySelectorAll(".job__group");
    grandis.forEach(function (data) {
      var group = document.querySelectorAll(".".concat(data.classList[1], " > div"));
      group.forEach(function (job, i) {
        if (i == 0) {
          job.style.transform = "translateX(-20px)";
        } else if (i == 1) {
          job.style.transform = "translate(-180px, 170px)";
        } else if (i % 2 != 0 && i != 1) {
          job.style.transform = "translate(-".concat(170 * (i - 1), "px, 170px)");
        } else {
          job.style.transform = "translateX(-".concat(250 * (i - 1), "px)");
        }
      });
    });
    var initJobGroup = document.querySelector(".init__job__group");
    var width = grandis[0].offsetWidth;
    initJobGroup.style.transition = ".5s";
    initJobGroup.style.transform = "translateX(-".concat(width * num, "px)");
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/init.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_compornents_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "init",
    group: "grandis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "init__job",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "init__job__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/init/grandis.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "init__job__group d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "job__group nova flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "kaiser",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 0
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "cadena",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 1
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "angelicbuster",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 96
    }
  })))), __jsx("div", {
    className: "job__group lef flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "adele",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 3
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "illium",
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
      pathname: "/group/Grandis",
      query: {
        num: 4
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
      columnNumber: 96
    }
  }))), __jsx("div", {
    className: "ark",
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
      pathname: "/group/Grandis",
      query: {
        num: 5
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
      columnNumber: 96
    }
  })))), __jsx("div", {
    className: "job__group anima flex-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "hoyoung",
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/group/Grandis",
      query: {
        num: 6
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "clickArea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 96
    }
  }))))), __jsx("img", {
    id: "prev-btn",
    src: "../../images/left-button.png",
    onClick: function onClick() {
      return setNum(num - 1 < 0 ? 0 : num - 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "next-btn",
    src: "../../images/right-button.png",
    onClick: function onClick() {
      return setNum(num + 1 > 2 ? 2 : num + 1);
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }))));
};

_s(Index, "Zi44ycKtge5fGC+PlhDAtGhhgVE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5pdC9HcmFuZGlzLmpzIl0sIm5hbWVzIjpbIm9uTW91c2VPdmVyIiwiZSIsImpvYkltYWdlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib25Nb3VzZUxlYXZlIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiZ3JhbmRpcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGF0YSIsImdyb3VwIiwiY2xhc3NMaXN0Iiwiam9iIiwiaSIsInRyYW5zZm9ybSIsImluaXRKb2JHcm91cCIsIm9mZnNldFdpZHRoIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxDQUFDLEVBQUk7QUFDckIsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsVUFBeEI7QUFDQUYsVUFBUSxDQUFDRyxLQUFULENBQWVDLFVBQWYsR0FBNEIsS0FBNUI7QUFDQUosVUFBUSxDQUFDRyxLQUFULENBQWVFLEtBQWYsR0FBdUIsT0FBdkI7QUFDQUwsVUFBUSxDQUFDRyxLQUFULENBQWVHLE1BQWYsR0FBd0IsT0FBeEI7QUFDSCxDQUxEOztBQU9BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFSLENBQUMsRUFBSTtBQUN0QixNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUF4QjtBQUNBRixVQUFRLENBQUNHLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixLQUE1QjtBQUNBSixVQUFRLENBQUNHLEtBQVQsQ0FBZUUsS0FBZixH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QUFBbUIsT0FBRyxFQUFDLDhCQUF2QjtBQUFzRCxXQUFPLEVBQUU7QUFBQSxhQUFJQyxNQUFNLENBQUNELEdBQUcsR0FBRyxDQUFOLEdBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0JBLEdBQUcsR0FBRyxDQUF6QixDQUFWO0FBQUEsS0FBL0Q7QUFBc0csT0FBRyxFQUFDLEVBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0osRUFvQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUMsK0JBQXZCO0FBQXVELFdBQU8sRUFBRTtBQUFBLGFBQUlDLE1BQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsR0FBRyxHQUFHLENBQXpCLENBQVY7QUFBQSxLQUFoRTtBQUF1RyxPQUFHLEVBQUMsRUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDSixDQUZKLENBWEosQ0FESjtBQXVESCxDQXRGRDs7R0FBTUgsSzs7S0FBQUEsSztBQXdGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5pdC9HcmFuZGlzLjgzNDA4ZTlkMGQ2MDllMjkzNzUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvU2lkZWJhclwiO1xyXG5cclxuY29uc3Qgb25Nb3VzZU92ZXIgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCI0MTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCI0NTBweFwiO1xyXG59XHJcblxyXG5jb25zdCBvbk1vdXNlTGVhdmUgPSBlID0+IHtcclxuICAgIGxldCBqb2JJbWFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBqb2JJbWFnZS5zdHlsZS50cmFuc2l0aW9uID0gXCIuOHNcIjtcclxuICAgIGpvYkltYWdlLnN0eWxlLndpZHRoID0gXCIzNTBweFwiO1xyXG4gICAgam9iSW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gXCIzNzBweFwiO1xyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNfX25leHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvYmFja2dyb3VuZC9ncmFuZGlzLnBuZylgXHJcblxyXG4gICAgICAgIGxldCBncmFuZGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyYW5kaXMuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7ZGF0YS5jbGFzc0xpc3RbMV19ID4gZGl2YCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goKGpvYiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0yMHB4KWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTE4MHB4LCAxNzBweClgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGkgJSAyICE9IDAgJiYgaSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLSR7MTcwICogKGkgLSAxKX1weCwgMTcwcHgpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0kezI1MCAqIChpIC0gMSl9cHgpYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaW5pdEpvYkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0X19qb2JfX2dyb3VwXCIpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGdyYW5kaXNbMF0ub2Zmc2V0V2lkdGg7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRKb2JHcm91cC5zdHlsZS50cmFuc2l0aW9uID0gXCIuNXNcIjtcclxuXHJcbiAgICAgICAgaW5pdEpvYkdyb3VwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3dpZHRoICogbnVtfXB4KWA7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bXNnLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL2hlYWRlci5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3R5bGUvaW5pdC5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgdGl0bGU9XCJpbml0XCIgZ3JvdXA9XCJncmFuZGlzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdF9fam9iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL2luaXQvZ3JhbmRpcy5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0X19qb2JfX2dyb3VwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYl9fZ3JvdXAgbm92YSBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrYWlzZXJcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0dyYW5kaXNgLCBxdWVyeTogeyBudW06IDAgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRlbmFcIiBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2dyb3VwL0dyYW5kaXNgLCBxdWVyeTogeyBudW06IDEgfSB9fT48ZGl2IGNsYXNzTmFtZT1cImNsaWNrQXJlYVwiPjwvZGl2PjwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5nZWxpY2J1c3RlclwiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvR3JhbmRpc2AsIHF1ZXJ5OiB7IG51bTogMiB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYl9fZ3JvdXAgbGVmIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZWxlXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiAzIH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWxsaXVtXCIgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9ncm91cC9HcmFuZGlzYCwgcXVlcnk6IHsgbnVtOiA0IH0gfX0+PGRpdiBjbGFzc05hbWU9XCJjbGlja0FyZWFcIj48L2Rpdj48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFya1wiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvR3JhbmRpc2AsIHF1ZXJ5OiB7IG51bTogNSB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYl9fZ3JvdXAgYW5pbWEgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG95b3VuZ1wiIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvZ3JvdXAvR3JhbmRpc2AsIHF1ZXJ5OiB7IG51bTogNiB9IH19PjxkaXYgY2xhc3NOYW1lPVwiY2xpY2tBcmVhXCI+PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJwcmV2LWJ0blwiIHNyYz1cIi4uLy4uL2ltYWdlcy9sZWZ0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSAtIDEgPCAwID8gMCA6IG51bSAtIDEpfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIm5leHQtYnRuXCIgc3JjPVwiLi4vLi4vaW1hZ2VzL3JpZ2h0LWJ1dHRvbi5wbmdcIiBvbkNsaWNrPXsoKT0+c2V0TnVtKG51bSArIDEgPiAyID8gMiA6IG51bSArIDEpfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=