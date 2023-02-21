"use strict";
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 4607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.3276b036.png","height":508,"width":508,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0ElEQVR42mNQZWMAgjBXi7L0oNK04EAHYwYGBnUuJgZlZobcWL/seP+y3ITCzJiceN+0EBdZBgYGNX6urGCHaF3+lZOqp9elxxqKpfhayzEwMOgKMIXqMlfa8izrr5hXl1piyhCkxa4jwMqgxss2f1LDke2LTuxZfnznksPbFs3uqxNiYGCQYWCYNbFhxoT6nrq8noaCeVNbpnRXMzEwMGgJctqqcHsaySUEu8T42Tuq8dqq8AIFGdTYGBQZGcJcjPvr0rsrkwLs9OUZGNTYGQBiuTdW32UyGgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Button/Button.styles.js

const StyledButton = (external_styled_components_default()).button`
  ${({ variant  })=>external_styled_components_.css`
    height: 48px;
    border-radius: 50px;
    font-size: 16px;  
    font-weight: bold;
    max-width: fit-content;
    padding: 6px 24px;
    ${variant === "primary" && external_styled_components_.css`
      background-color: #999999;
      color: #000000;
      :hover{
        background-color: #99999970;
        color: #ffffff;

      }
    `}
    ${variant === "secondary" && external_styled_components_.css`
      background-color: #cccccc;
      border: 1px solid #000000;
      :hover{
        background-color: #888888;
        color: #ffffff;
        border: 1px solid transparent;


      }
    `}
  `}
`;

;// CONCATENATED MODULE: ./components/Button/index.jsx


function Button({ label , children , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledButton, {
        ...props,
        children: [
            label,
            children
        ]
    });
}


/***/ })

};
;