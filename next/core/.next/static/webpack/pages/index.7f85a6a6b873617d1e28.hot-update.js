self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\project\\python\\DRF-ecommerce\\next\\core\\pages\\index.js",
    _s = $RefreshSig$();




 // use this code as baseline!
// override styles

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
  return {
    example: {
      color: "#ccc"
    },
    cardGrid: {
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0"
    },
    cardMedia: {
      paddingTop: "140%"
    }
  };
});

function Home(_ref) {
  _s();

  var _this = this;

  var posts = _ref.posts;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_header__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
        className: classes.cardGrid,
        maxWidth: "lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          spacing: 2,
          children: ["  ", console.log(posts), posts.map(function (post) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                item: true,
                xs: 6,
                sm: 4,
                md: 3,
                children: ["  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Card, {
                  className: classes.card,
                  elevation: 0,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardMedia, {
                    className: classes.cardMedia,
                    image: post.product_image[0].image,
                    alt: post.product_image[0].alt_text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                      gutterBottom: true,
                      component: "p",
                      children: post.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
                      component: "p",
                      fontSize: 16,
                      fontWeight: 900,
                      children: ["$", post.regular_price]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this)
            }, post.id, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation


_s(Home, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZXhhbXBsZSIsImNvbG9yIiwiY2FyZEdyaWQiLCJwYWRkaW5nQm90dG9tIiwic3BhY2luZyIsImNhcmQiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsImNhcmRNZWRpYSIsInBhZGRpbmdUb3AiLCJIb21lIiwicG9zdHMiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJwcm9kdWN0X2ltYWdlIiwiaW1hZ2UiLCJhbHRfdGV4dCIsInRpdGxlIiwicmVndWxhcl9wcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtDQUdBO0FBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBREEsS0FEOEI7QUFJdkNDLFlBQVEsRUFBRTtBQUNSQyxtQkFBYSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FKNkI7QUFPdkNDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsTUFESjtBQUVKQyxhQUFPLEVBQUUsTUFGTDtBQUdKQyxtQkFBYSxFQUFFLFFBSFg7QUFJSkMsa0JBQVksRUFBRTtBQUpWLEtBUGlDO0FBYXZDQyxhQUFTLEVBQUU7QUFDVEMsZ0JBQVUsRUFBRTtBQURIO0FBYjRCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWtCQSxTQUFTQyxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3ZCLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFBVyxpQkFBUyxFQUFFaUIsT0FBTyxDQUFDWixRQUE5QjtBQUF3QyxnQkFBUSxFQUFDLElBQWpEO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLGlCQUFPLEVBQUUsQ0FBekI7QUFBQSwyQkFDR2EsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosQ0FESCxFQUVHQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsZ0NBQ1QsOERBQUMsa0RBQUQ7QUFBb0Isa0JBQUksRUFBRSxHQUExQjtBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFXLGtCQUFFLEVBQUUsQ0FBZjtBQUFrQixrQkFBRSxFQUFFLENBQXRCO0FBQXlCLGtCQUFFLEVBQUUsQ0FBN0I7QUFBQSw4Q0FDRSw4REFBQyxtREFBRDtBQUFNLDJCQUFTLEVBQUVKLE9BQU8sQ0FBQ1QsSUFBekI7QUFBK0IsMkJBQVMsRUFBRSxDQUExQztBQUFBLDBDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsNkJBQVMsRUFBRVMsT0FBTyxDQUFDSixTQURyQjtBQUVFLHlCQUFLLEVBQUVRLElBQUksQ0FBQ0MsYUFBTCxDQUFtQixDQUFuQixFQUFzQkMsS0FGL0I7QUFHRSx1QkFBRyxFQUFFRixJQUFJLENBQUNDLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JFO0FBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRSw4REFBQywwREFBRDtBQUFBLDRDQUNFLDhEQUFDLHlEQUFEO0FBQVksa0NBQVksTUFBeEI7QUFBeUIsK0JBQVMsRUFBQyxHQUFuQztBQUFBLGdDQUNHSCxJQUFJLENBQUNJO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFLDhEQUFDLGtEQUFEO0FBQUssK0JBQVMsRUFBQyxHQUFmO0FBQW1CLDhCQUFRLEVBQUUsRUFBN0I7QUFBaUMsZ0NBQVUsRUFBRSxHQUE3QztBQUFBLHNDQUNJSixJQUFJLENBQUNLLGFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBV0wsSUFBSSxDQUFDTSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQWlDRCxDLENBRUQ7OztHQXRDU1osSTtVQUNTZixTOzs7S0FEVGUsSTs7QUFrRFQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2Y4NWE2YTZiODczNjE3ZDFlMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmRNZWRpYSxcbiAgQ29udGFpbmVyLFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyB1c2UgdGhpcyBjb2RlIGFzIGJhc2VsaW5lIVxuXG4vLyBvdmVycmlkZSBzdHlsZXNcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBleGFtcGxlOiB7XG4gICAgY29sb3I6IFwiI2NjY1wiLFxuICB9LFxuICBjYXJkR3JpZDoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgfSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgcGFkZGluZ1RvcDogXCIxNDAlXCIsXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEdyaWR9IG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+ICB7Lyogc3BhY2UgYmV0d2VlbiB0d28gaXRlbXMgKi99XG4gICAgICAgICAgICB7Y29uc29sZS5sb2cocG9zdHMpfVxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuaWR9IGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9PiAgey8qIG51bWJlciBvZiBjb2x1bW5zIGRpdmlkZWQgYnkgMTIgPC0geHM6IGV4dHJhLXNtYWxsLCBzbTogc21hbGwsIG1kOiBtZWRpdW0gKi99XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkTWVkaWF9XG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Bvc3QucHJvZHVjdF9pbWFnZVswXS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QucHJvZHVjdF9pbWFnZVswXS5hbHRfdGV4dH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJwXCIgZm9udFNpemU9ezE2fSBmb250V2VpZ2h0PXs5MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwb3N0LnJlZ3VsYXJfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3Byb3BzLXN0YXRpYy1nZW5lcmF0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9cIik7IC8vIERqYW5nbyBzZXJ2ZXJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpOyAvLyBzdG9yZSBkYXRhXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=