"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 3423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Jumbotron_Jumbotron)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/index.jsx + 1 modules
var Button = __webpack_require__(7888);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Jumbotron/Jumbotron.style.js


const Jumbotron = (external_styled_components_default()).div`
  background: #260700;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 70vh;
  padding: 0 20vw 0 0;
  gap: 25%;
  overflow: hidden;
`;
const BeerLogo = external_styled_components_default()((image_default()))`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 10vw;
  height: auto;
`;
const BeerInfoWrapper = (external_styled_components_default()).div`
  height: auto;
  width: 30vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  

`;
const BeerDescriptionWrapper = (external_styled_components_default()).div`
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

`;
const BeerDescription = (external_styled_components_default()).h3`
  color: #999999;
  line-height: 1.8;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 100;

`;
const BeerName = (external_styled_components_default()).p`
  color: #999999;
  line-height: 1.6;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  display: block;
  text-transform: uppercase;

`;
const BeerImage = external_styled_components_default()((image_default()))`
  width: 11vw;
  height: auto;
  object-fit: contain;
  min-height: 53vh;
  max-height: 53vh;
  box-shadow:
    0 0 60px 30px #d1981b,  /* inner white */
    0 0 80px 130px #d1981b, /* middle magenta */
    0 0 400px 200px #260700; /* outer cyan */
  background-color: #d1981b;
  z-index: 1;
`;
const BeerDataWrapper = (external_styled_components_default()).div`
  color: #999999;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  ::before{
    position: absolute;
    display: block;
    top: -5px;
    content: '';
    width: 100%;
    height: 1px;
    background: #FFFFFF;  
  }

  ::after{
    position: absolute;
    display: block;
    bottom: -5px;

    content: '';
    width: 100%;
    height: 1px;
    background: #FFFFFF;
  }
  >span{

    display: flex;
    justify-content: space-between;
  }
  >span:last-child{
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    >p:first-child{
      margin-bottom: 8px;
    }
  }
`;
const DataLabel = (external_styled_components_default()).p`
  font-weight: 600;
`;
const DataValue = (external_styled_components_default()).p`
  font-weight: 100;
  line-height: 1.4;

`;

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(4607);
;// CONCATENATED MODULE: ./components/Jumbotron/Jumbotron.js





function Jumbotron_Jumbotron({ beer  }) {
    console.log(beer);
    //   abv
    //   ibu
    //   first_brewed
    //   attenuation_level
    //   ingredients{
    //     malt
    //     hops
    //     yeast
    //   }
    //   method{
    //     mash_temp
    //     fermentation
    //     twist
    //   }
    //   brewers_tips
    //   food_pairing
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Jumbotron, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BeerLogo, {
                alt: "ĺogo",
                src: logo/* default */.Z,
                width: 400,
                height: 400,
                className: "logo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BeerInfoWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BeerDescriptionWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BeerDescription, {
                            children: beer?.tagline
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BeerName, {
                        children: beer?.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BeerDataWrapper, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataLabel, {
                                        children: "ABV"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataValue, {
                                        children: beer.abv
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataLabel, {
                                        children: "IBU"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataValue, {
                                        children: beer.ibu
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataLabel, {
                                        children: "First brewed"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataValue, {
                                        children: beer.first_brewed
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataLabel, {
                                        children: "Attenuation level"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataValue, {
                                        children: beer.attenuation_level
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataLabel, {
                                        children: "Food pairing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DataValue, {
                                        children: beer.food_pairing
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BeerImage, {
                alt: beer?.name,
                src: beer?.image_url,
                width: 300,
                height: 1000,
                className: "shadowfilter"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Jumbotron/index.js



/***/ })

};
;