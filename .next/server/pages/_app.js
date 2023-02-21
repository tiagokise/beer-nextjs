(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6331:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/like.b6a9092c.svg","height":512,"width":512});

/***/ }),

/***/ 7366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/Header.style.js

const Header = (external_styled_components_default()).div`
  max-width: 100vw;
  background-color: orange;
  position: relative;
`;
const HeaderTitle = (external_styled_components_default()).h1`
  font-size: 3em;
  color: #003F87;
`;

// EXTERNAL MODULE: ./images/like.svg
var like = __webpack_require__(6331);
;// CONCATENATED MODULE: ./components/Header/Header.js




function Header_Header() {
    const [isOpen, setIsOpen] = useState(false);
    return /*#__PURE__*/ _jsx(S.Header, {
        children: /*#__PURE__*/ _jsx(S.HeaderTitle, {
            children: "Beer"
        })
    });
}

;// CONCATENATED MODULE: ./components/Header/index.js


;// CONCATENATED MODULE: ./components/layout/index.js


function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            children: children
        })
    });
}

// EXTERNAL MODULE: ./pages/index.css
var pages = __webpack_require__(1713);
;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 1713:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7366));
module.exports = __webpack_exports__;

})();