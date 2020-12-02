webpackHotUpdate_N_E("pages/world/WorldStats",{

/***/ "./pages/world/WorldStats.js":
/*!***********************************!*\
  !*** ./pages/world/WorldStats.js ***!
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
/* harmony import */ var _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Json/AllJob.json */ "./Json/AllJob.json");
var _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Json/AllJob.json */ "./Json/AllJob.json", 1);
/* harmony import */ var _Json_first_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Json/first.json */ "./Json/first.json");
var _Json_first_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Json/first.json */ "./Json/first.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Desktop\\msg.gg-frontend\\pages\\world\\WorldStats.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector("#__next").style.backgroundImage = "url(../../images/world/background.png)";
    document.querySelectorAll(".worldSideBar > li").forEach(function (li, i) {
      li.classList.remove("worldSideBar__group__active");
      li.classList.remove("worldSideBar__group__none");
      if (i == num) li.classList.add("worldSideBar__group__active");else li.classList.add("worldSideBar__group__none");
    }); // let worldTitle = document.querySelector(".world__title > h1").innerHTML = `${worldKo[num]}`;

    var world_210 = document.querySelector(".world__210");
    var world_240 = document.querySelector(".world__240");
    console.log(first[num]);
    world_210.innerHTML = "<p class=\"pt-3 pl-5\">\uC778\uAD6C\uC218 (Lv210)</p>\n                                <p class=\"pt-2\">".concat(first[num].people210.rank, " <span>/ 14\uC704</span></p>\n                                <p class=\"pt-2\">").concat(first[num].people210.people, "</p>");
    world_240.innerHTML = "<p class=\"pt-3 pl-5\">\uC778\uAD6C\uC218 (Lv240)</p>\n                                <p class=\"pt-2\">".concat(first[num].people240.rank, " <span>/ 14\uC704</span></p>\n                                <p class=\"pt-2\">").concat(first[num].people240.people, "</p>");
    var contentLeft = document.querySelector(".world__content__left");
    var contentRight = document.querySelector(".world__content__right");
    contentLeft.innerHTML = "";
    contentRight.innerHTML = "";
    data[num].forEach(function (item, i) {
      var div = document.createElement("div");
      div.classList.add("d-flex");
      div.classList.add("pt-2");
      var max = parseFloat(data[num][0].people.split("%"));
      var width = 100 * parseFloat(item.people.split("%")) / max;
      div.innerHTML = "<div class=\"d-flex pt-2\">\n                                <p class=\"mr-3\">".concat(item.world, "</p>\n                                <p class=\"pr-2\">").concat(item.name, "</p>\n                                <div class=\"progress pl-3\" >\n                                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(width, "%;\">").concat(item.people, "</div>\n                                </div>\n                            </div>");
      if (i < 22) contentLeft.appendChild(div);else contentRight.appendChild(div);
    });
    var _first$num = first[num],
        dojang = _first$num.dojang,
        seed = _first$num.seed,
        union = _first$num.union,
        achievement = _first$num.achievement;
    var dojangHtml = document.querySelector("#dojang");
    dojangHtml.classList.add("d-flex");
    dojangHtml.innerHTML = "\n            <img style=\"width: 75px; height: 75px; margin-left: 10px; margin-top: 1em;\" src=\"https://avatar.maplestory.nexon.com/Character/LICKAOPEOFJNLEANNJEFFPGLCKCOIBIOAJIKIOPJLJGDKCHLNLAGMACBJIFDOHHNCFBOLACNBPMIHCKCEHBBDBCCKCDOGOHJLLKMCCAGAAJMINFJKFAKJFPCKLBPECEEMFEMDEOKICHGMHIABFCDJBOLEAPHMPHMIDMPOIJENBHFCCNLFKDIBAHHHBFIPNKGDBILKCJKPBPGOINILJFOOMECABLLJMPGCDNAALFNONKKJODPDBBANLNGIIEDALJP.png\" alt=\"\"/>\n            <div class=\"pt-4 pl-3 mt-2\">\n                <p>".concat(dojang.name, "</p>\n                <p>").concat(dojang.level, " | ").concat(dojang.job, "</p>\n            </div>\n            ");
    var seedHtml = document.querySelector("#seed"); // seedHtml.innerHTML = ``

    var unionHtml = document.querySelector("#union"); // unionHtml.innerHTML = ``

    var achievementHtml = document.querySelector("#achievement"); // achievementHtml.innerHTML = ``
  });
  var luna = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.luna,
      scania = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.scania,
      elysium = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.elysium,
      croa = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.croa,
      aurora = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.aurora,
      bera = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.bera,
      red = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.red,
      union = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.union,
      zenith = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.zenith,
      enosis = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.enosis,
      arcane = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.arcane,
      nova = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.nova,
      reboot = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.reboot,
      reboot2 = _Json_AllJob_json__WEBPACK_IMPORTED_MODULE_4__.reboot2;
  var firstluna = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstluna,
      firstscania = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstscania,
      firstelysium = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstelysium,
      firstcroa = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstcroa,
      firstaurora = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstaurora,
      firstbera = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstbera,
      firstred = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstred,
      firstunion = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstunion,
      firstzenith = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstzenith,
      firstenosis = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstenosis,
      firstarcane = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstarcane,
      firstnova = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstnova,
      firstreboot = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstreboot,
      firstreboot2 = _Json_first_json__WEBPACK_IMPORTED_MODULE_5__.firstreboot2;
  var data = [];
  var first = [];
  data.push(luna, scania, elysium, croa, aurora, bera, red, union, zenith, enosis, arcane, nova, reboot, reboot2);
  first.push(firstluna, firstscania, firstelysium, firstcroa, firstaurora, firstbera, firstred, firstunion, firstzenith, firstenosis, firstarcane, firstnova, firstreboot, firstreboot2);
  var worldEn = ["luna", "scania", "elysium", "croa", "aurora", "bera", "red", "union", "zenith", "enosis", "arcane", "nova", "reboot", "reboot2"];
  var worldKo = ["루나", "스카니아", "엘리시움", "크로아", "오로라", "베라", "레드", "유니온", "제니스", "이노시스", "아케인", "노바", "리부트", "리부트2"];
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "msg.gg"), __jsx("link", {
    rel: "stylesheet",
    href: "/style/header.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/style/world.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })), __jsx(_compornents_Header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "worldSideBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(0);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/luna.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 73
    }
  }, "\uB8E8\uB098")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/scania.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 75
    }
  }, "\uC2A4\uCE74\uB2C8\uC544")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/elysium.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 76
    }
  }, "\uC5D8\uB9AC\uC2DC\uC6C0")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/croa.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 73
    }
  }, "\uD06C\uB85C\uC544")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/aurora.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 75
    }
  }, "\uC624\uB85C\uB77C")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(5);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/bera.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 73
    }
  }, "\uBCA0\uB77C")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(6);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/red.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 72
    }
  }, "\uB808\uB4DC")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(7);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/union.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 74
    }
  }, "\uC720\uB2C8\uC628")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(8);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/zenith.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 75
    }
  }, "\uC81C\uB2C8\uC2A4")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(9);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/enosis.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 75
    }
  }, "\uC774\uB178\uC2DC\uC2A4")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(10);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/arcane.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 75
    }
  }, "\uC544\uCF00\uC778")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(11);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/nova.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 73
    }
  }, "\uB178\uBC14")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(12);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/reboot.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 75
    }
  }, "\uB9AC\uBD80\uD2B8")), __jsx("li", {
    className: "worldSideBar__group pointer",
    onClick: function onClick() {
      return setNum(13);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../images/world/reboot2.gif",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 76
    }
  }, "\uB9AC\uBD80\uD2B82"))), __jsx("div", {
    className: "world__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "world__title d-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "world__section mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "world__210",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "pt-3 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  }, "\uC778\uAD6C\uC218 (Lv210)"), __jsx("p", {
    className: "pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 33
    }
  }, "1\uC704 ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 56
    }
  }, "/ 14\uC704")), __jsx("p", {
    className: "pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, "315,379\uBA85")), __jsx("div", {
    className: "world__240",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "pt-3 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }, "\uC778\uAD6C\uC218 (Lv210)"), __jsx("p", {
    className: "pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, "1\uC704 ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 56
    }
  }, "/ 14\uC704")), __jsx("p", {
    className: "pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 33
    }
  }, "25,125\uBA85"))), __jsx("div", {
    className: "world__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "world__content__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "pt-4 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 33
    }
  }, "2020\uB144 12\uC6D4 2\uC77C \uD1B5\uACC4")), __jsx("div", {
    className: "flex-between pt-3 pl-4 pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "world__content__left content pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "world__content__right content pl-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "world__side",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, __jsx("div", {
    id: "dojang",
    className: "pt-2 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 25
    }
  }), __jsx("div", {
    id: "seed",
    className: "pt-2 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 25
    }
  }), __jsx("div", {
    id: "union",
    className: "pt-2 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 25
    }
  }), __jsx("div", {
    id: "achievement",
    className: "pt-2 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ybGQvV29ybGRTdGF0cy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJudW0iLCJzZXROdW0iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGkiLCJpIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid29ybGRfMjEwIiwid29ybGRfMjQwIiwiY29uc29sZSIsImxvZyIsImZpcnN0IiwiaW5uZXJIVE1MIiwicGVvcGxlMjEwIiwicmFuayIsInBlb3BsZSIsInBlb3BsZTI0MCIsImNvbnRlbnRMZWZ0IiwiY29udGVudFJpZ2h0IiwiZGF0YSIsIml0ZW0iLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInNwbGl0Iiwid2lkdGgiLCJ3b3JsZCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImRvamFuZyIsInNlZWQiLCJ1bmlvbiIsImFjaGlldmVtZW50IiwiZG9qYW5nSHRtbCIsImxldmVsIiwiam9iIiwic2VlZEh0bWwiLCJ1bmlvbkh0bWwiLCJhY2hpZXZlbWVudEh0bWwiLCJsdW5hIiwiSnNvbiIsInNjYW5pYSIsImVseXNpdW0iLCJjcm9hIiwiYXVyb3JhIiwiYmVyYSIsInJlZCIsInplbml0aCIsImVub3NpcyIsImFyY2FuZSIsIm5vdmEiLCJyZWJvb3QiLCJyZWJvb3QyIiwiZmlyc3RsdW5hIiwiRmlyc3QiLCJmaXJzdHNjYW5pYSIsImZpcnN0ZWx5c2l1bSIsImZpcnN0Y3JvYSIsImZpcnN0YXVyb3JhIiwiZmlyc3RiZXJhIiwiZmlyc3RyZWQiLCJmaXJzdHVuaW9uIiwiZmlyc3R6ZW5pdGgiLCJmaXJzdGVub3NpcyIsImZpcnN0YXJjYW5lIiwiZmlyc3Rub3ZhIiwiZmlyc3RyZWJvb3QiLCJmaXJzdHJlYm9vdDIiLCJwdXNo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QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQS9CSixDQTdDSixDQVhKLENBREo7QUFvR0gsQ0F4TkQ7O0dBQU1KLEs7O0tBQUFBLEs7QUEwTlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmxkL1dvcmxkU3RhdHMuMmYwMDI0MzJkN2EyMWI0NWQyOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9ybmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgSnNvbiBmcm9tIFwiLi4vLi4vSnNvbi9BbGxKb2IuanNvblwiO1xyXG5pbXBvcnQgRmlyc3QgZnJvbSBcIi4uLy4uL0pzb24vZmlyc3QuanNvblwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi4vLi4vaW1hZ2VzL3dvcmxkL2JhY2tncm91bmQucG5nKWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b3JsZFNpZGVCYXIgPiBsaVwiKS5mb3JFYWNoKChsaSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKFwid29ybGRTaWRlQmFyX19ncm91cF9fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKFwid29ybGRTaWRlQmFyX19ncm91cF9fbm9uZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGkgPT0gbnVtKSBcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ3b3JsZFNpZGVCYXJfX2dyb3VwX19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ3b3JsZFNpZGVCYXJfX2dyb3VwX19ub25lXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGxldCB3b3JsZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JsZF9fdGl0bGUgPiBoMVwiKS5pbm5lckhUTUwgPSBgJHt3b3JsZEtvW251bV19YDtcclxuXHJcbiAgICAgICAgbGV0IHdvcmxkXzIxMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ybGRfXzIxMFwiKTtcclxuICAgICAgICBsZXQgd29ybGRfMjQwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JsZF9fMjQwXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0W251bV0pXHJcbiAgICAgICAgd29ybGRfMjEwLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInB0LTMgcGwtNVwiPuyduOq1rOyImCAoTHYyMTApPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHQtMlwiPiR7Zmlyc3RbbnVtXS5wZW9wbGUyMTAucmFua30gPHNwYW4+LyAxNOychDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwdC0yXCI+JHtmaXJzdFtudW1dLnBlb3BsZTIxMC5wZW9wbGV9PC9wPmA7XHJcblxyXG4gICAgICAgIHdvcmxkXzI0MC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJwdC0zIHBsLTVcIj7snbjqtazsiJggKEx2MjQwKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInB0LTJcIj4ke2ZpcnN0W251bV0ucGVvcGxlMjQwLnJhbmt9IDxzcGFuPi8gMTTsnIQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHQtMlwiPiR7Zmlyc3RbbnVtXS5wZW9wbGUyNDAucGVvcGxlfTwvcD5gO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmxkX19jb250ZW50X19sZWZ0XCIpO1xyXG4gICAgICAgIGxldCBjb250ZW50UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmxkX19jb250ZW50X19yaWdodFwiKTtcclxuICAgICAgICBjb250ZW50TGVmdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbnRlbnRSaWdodC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBkYXRhW251bV0uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIik7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHQtMlwiKTtcclxuICAgICAgICAgICAgbGV0IG1heCA9IHBhcnNlRmxvYXQoZGF0YVtudW1dWzBdLnBlb3BsZS5zcGxpdChcIiVcIikpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAoMTAwICogcGFyc2VGbG9hdChpdGVtLnBlb3BsZS5zcGxpdChcIiVcIikpKSAvIG1heDsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJkLWZsZXggcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXItM1wiPiR7aXRlbS53b3JsZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwci0yXCI+JHtpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBwbC0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogJHt3aWR0aH0lO1wiPiR7aXRlbS5wZW9wbGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICBpZihpIDwgMjIpIFxyXG4gICAgICAgICAgICAgICAgY29udGVudExlZnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyBkb2phbmcsIHNlZWQsIHVuaW9uLCBhY2hpZXZlbWVudCB9ID0gZmlyc3RbbnVtXTtcclxuXHJcbiAgICAgICAgbGV0IGRvamFuZ0h0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvamFuZ1wiKTtcclxuICAgICAgICBkb2phbmdIdG1sLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIilcclxuICAgICAgICBkb2phbmdIdG1sLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOiA3NXB4OyBoZWlnaHQ6IDc1cHg7IG1hcmdpbi1sZWZ0OiAxMHB4OyBtYXJnaW4tdG9wOiAxZW07XCIgc3JjPVwiaHR0cHM6Ly9hdmF0YXIubWFwbGVzdG9yeS5uZXhvbi5jb20vQ2hhcmFjdGVyL0xJQ0tBT1BFT0ZKTkxFQU5OSkVGRlBHTENLQ09JQklPQUpJS0lPUEpMSkdES0NITE5MQUdNQUNCSklGRE9ISE5DRkJPTEFDTkJQTUlIQ0tDRUhCQkRCQ0NLQ0RPR09ISkxMS01DQ0FHQUFKTUlORkpLRkFLSkZQQ0tMQlBFQ0VFTUZFTURFT0tJQ0hHTUhJQUJGQ0RKQk9MRUFQSE1QSE1JRE1QT0lKRU5CSEZDQ05MRktESUJBSEhIQkZJUE5LR0RCSUxLQ0pLUEJQR09JTklMSkZPT01FQ0FCTExKTVBHQ0ROQUFMRk5PTktLSk9EUERCQkFOTE5HSUlFREFMSlAucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtNCBwbC0zIG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7ZG9qYW5nLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkb2phbmcubGV2ZWx9IHwgJHtkb2phbmcuam9ifTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICBsZXQgc2VlZEh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlZWRcIik7XHJcbiAgICAgICAgLy8gc2VlZEh0bWwuaW5uZXJIVE1MID0gYGBcclxuICAgICAgICBsZXQgdW5pb25IdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bmlvblwiKTtcclxuICAgICAgICAvLyB1bmlvbkh0bWwuaW5uZXJIVE1MID0gYGBcclxuICAgICAgICBsZXQgYWNoaWV2ZW1lbnRIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY2hpZXZlbWVudFwiKTtcclxuICAgICAgICAvLyBhY2hpZXZlbWVudEh0bWwuaW5uZXJIVE1MID0gYGBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBsdW5hLCBzY2FuaWEsIGVseXNpdW0sIGNyb2EsIGF1cm9yYSwgYmVyYSwgcmVkLCB1bmlvbiwgemVuaXRoLCBlbm9zaXMsIGFyY2FuZSwgbm92YSwgcmVib290LCByZWJvb3QyfSA9IEpzb247XHJcbiAgICBjb25zdCB7IGZpcnN0bHVuYSwgZmlyc3RzY2FuaWEsIGZpcnN0ZWx5c2l1bSwgZmlyc3Rjcm9hLCBmaXJzdGF1cm9yYSwgZmlyc3RiZXJhLCBmaXJzdHJlZCwgZmlyc3R1bmlvbiwgZmlyc3R6ZW5pdGgsIGZpcnN0ZW5vc2lzLCBmaXJzdGFyY2FuZSwgZmlyc3Rub3ZhLCBmaXJzdHJlYm9vdCwgZmlyc3RyZWJvb3QyfSA9IEZpcnN0O1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICBjb25zdCBmaXJzdCA9IFtdO1xyXG5cclxuICAgIGRhdGEucHVzaChsdW5hLCBzY2FuaWEsIGVseXNpdW0sIGNyb2EsIGF1cm9yYSwgYmVyYSwgcmVkLCB1bmlvbiwgemVuaXRoLCBlbm9zaXMsIGFyY2FuZSwgbm92YSwgcmVib290LCByZWJvb3QyKTtcclxuICAgIGZpcnN0LnB1c2goZmlyc3RsdW5hLCBmaXJzdHNjYW5pYSwgZmlyc3RlbHlzaXVtLCBmaXJzdGNyb2EsIGZpcnN0YXVyb3JhLCBmaXJzdGJlcmEsIGZpcnN0cmVkLCBmaXJzdHVuaW9uLCBmaXJzdHplbml0aCwgZmlyc3Rlbm9zaXMsIGZpcnN0YXJjYW5lLCBmaXJzdG5vdmEsIGZpcnN0cmVib290LCBmaXJzdHJlYm9vdDIpO1xyXG5cclxuICAgIGNvbnN0IHdvcmxkRW4gPSBbXHJcbiAgICAgICAgXCJsdW5hXCIsXHJcbiAgICAgICAgXCJzY2FuaWFcIixcclxuICAgICAgICBcImVseXNpdW1cIixcclxuICAgICAgICBcImNyb2FcIixcclxuICAgICAgICBcImF1cm9yYVwiLFxyXG4gICAgICAgIFwiYmVyYVwiLFxyXG4gICAgICAgIFwicmVkXCIsXHJcbiAgICAgICAgXCJ1bmlvblwiLFxyXG4gICAgICAgIFwiemVuaXRoXCIsXHJcbiAgICAgICAgXCJlbm9zaXNcIixcclxuICAgICAgICBcImFyY2FuZVwiLFxyXG4gICAgICAgIFwibm92YVwiLFxyXG4gICAgICAgIFwicmVib290XCIsXHJcbiAgICAgICAgXCJyZWJvb3QyXCJcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCB3b3JsZEtvID0gW1xyXG4gICAgICAgIFwi66Oo64KYXCIsXHJcbiAgICAgICAgXCLsiqTsubTri4jslYRcIixcclxuICAgICAgICBcIuyXmOumrOyLnOybgFwiLFxyXG4gICAgICAgIFwi7YGs66Gc7JWEXCIsXHJcbiAgICAgICAgXCLsmKTroZzrnbxcIixcclxuICAgICAgICBcIuuyoOudvFwiLFxyXG4gICAgICAgIFwi66CI65OcXCIsXHJcbiAgICAgICAgXCLsnKDri4jsmKhcIixcclxuICAgICAgICBcIuygnOuLiOyKpFwiLFxyXG4gICAgICAgIFwi7J2064W47Iuc7IqkXCIsXHJcbiAgICAgICAgXCLslYTsvIDsnbhcIixcclxuICAgICAgICBcIuuFuOuwlFwiLFxyXG4gICAgICAgIFwi66as67aA7Yq4XCIsXHJcbiAgICAgICAgXCLrpqzrtoDtirgyXCJcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1zZy5nZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZS9oZWFkZXIuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0eWxlL3dvcmxkLmNzc1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid29ybGRTaWRlQmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSgwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL2x1bmEuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuujqOuCmDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9zY2FuaWEuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuyKpOy5tOuLiOyVhDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9lbHlzaXVtLmdpZlwiIGFsdD1cIlwiLz4gPGEgaHJlZj1cIiNcIj7sl5jrpqzsi5zsm4A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid29ybGRTaWRlQmFyX19ncm91cCBwb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0TnVtKDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvY3JvYS5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+7YGs66Gc7JWEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSg0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL2F1cm9yYS5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+7Jik66Gc6528PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSg1KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL2JlcmEuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuuyoOudvDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9yZWQuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuugiOuTnDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oNyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC91bmlvbi5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+7Jyg64uI7JioPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSg4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL3plbml0aC5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+7KCc64uI7IqkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSg5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL3dvcmxkL2Vub3Npcy5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+7J2064W47Iuc7IqkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9hcmNhbmUuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuyVhOy8gOyduDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvbm92YS5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+64W467CUPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndvcmxkU2lkZUJhcl9fZ3JvdXAgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE51bSgxMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy93b3JsZC9yZWJvb3QuZ2lmXCIgYWx0PVwiXCIvPiA8YSBocmVmPVwiI1wiPuumrOu2gO2KuDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3JsZFNpZGVCYXJfX2dyb3VwIHBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROdW0oMTMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWFnZXMvd29ybGQvcmVib290Mi5naWZcIiBhbHQ9XCJcIi8+IDxhIGhyZWY9XCIjXCI+66as67aA7Yq4MjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ybGRfX21haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmxkX190aXRsZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDE+66Oo64KYPC9oMT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZF9fc2VjdGlvbiBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmxkX18yMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0zIHBsLTVcIj7snbjqtazsiJggKEx2MjEwKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+MeychCA8c3Bhbj4vIDE07JyEPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+MzE1LDM3OeuqhTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZF9fMjQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMyBwbC01XCI+7J246rWs7IiYIChMdjIxMCk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPjHsnIQgPHNwYW4+LyAxNOychDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPjI1LDEyNeuqhTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZF9fY29udGVudF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC00IHBsLTVcIj4yMDIw64WEIDEy7JuUIDLsnbwg7Ya16rOEPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlbiBwdC0zIHBsLTQgcHItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ybGRfX2NvbnRlbnRfX2xlZnQgY29udGVudCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ybGRfX2NvbnRlbnRfX3JpZ2h0IGNvbnRlbnQgcGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmxkX19zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkb2phbmdcIiBjbGFzc05hbWU9XCJwdC0yIHBsLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlZWRcIiBjbGFzc05hbWU9XCJwdC0yIHBsLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVuaW9uXCIgY2xhc3NOYW1lPVwicHQtMiBwbC01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2hpZXZlbWVudFwiIGNsYXNzTmFtZT1cInB0LTIgcGwtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9