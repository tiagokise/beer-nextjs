exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 6331:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/like.b6a9092c.svg","height":512,"width":512});

/***/ }),

/***/ 8537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cervejas)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(5804);
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/BeerCard/BeerCard.style.jsx


const BeerCard = (external_styled_components_default()).div`
  position: relative;
  max-width: 150px;
  height: 180px;
  display: grid;
  grid-template-areas: 'beerImage' 'descriptions';
  grid-template-columns: 100%;
  grid-template-rows: 100px 1fr;
  grid-gap: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 24px;
  border-radius: 15px;
  background-color: white;
  border-left: 10px solid #260700;
  justify-content: center;
  cursor: pointer;
  ${({ loading  })=>external_styled_components_.css`
    ::after{
      display: ${loading ? "block" : "none"};
      content: "";
      background: linear-gradient(-45deg, #FF9, #fff, #eee, #ff3);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 0px 15px 15px 0px;
      z-index: 1;
    }
  `}
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  :hover{
    border-left: 10px solid #003F87;
  }
  :active {
    border-left: 10px solid red;
  }
  

`;
const BeerImage = (external_styled_components_default()).img`
  
  /* width: 100%; */
  height: 100%;
  /* object-fit: inherit; */
  margin: auto;


`;
const BeerName = (external_styled_components_default()).div`
display: block;
  font-weight: 400;
  position: relative;
  text-align: center;
  font-size: 12px;
  margin-bottom: 8px;
  font-family: sans-serif;
  line-height: 1.3;
  

  /* ::before{
    content: "<";
    position: absolute;
    left: -30px;
    top: -8px;
    font-size: 30px;
    line-height: 1;
    color: orange;
  } */
`;
const Descriptions = (external_styled_components_default()).p`
  


`;
const Description = (external_styled_components_default()).div`
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  font-size: 10px;
  height: auto;

  /* min-height: 60px;   */
`;
const Pairing = (external_styled_components_default()).p`
  overflow: hidden; 
  position: relative;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  font-size: 10px;
`;
const Highlight = (external_styled_components_default()).div`
  font-size: 10px;
`;
const Like = external_styled_components_default()((image_default()))`

  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index:2;
`;

// EXTERNAL MODULE: ./images/like.svg
var like = __webpack_require__(6331);
;// CONCATENATED MODULE: ./images/liked.svg
/* harmony default export */ const liked = ({"src":"/_next/static/media/liked.4b8021ec.svg","height":392,"width":392});
;// CONCATENATED MODULE: ./components/BeerCard/index.js








function BeerCard_BeerCard({ loading , isOpen , setIsOpen , i , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BeerCard, {
        loading: loading,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BeerImage, {
                src: props.image_url,
                alt: "Foto"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Descriptions, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(BeerName, {
                    children: props.name
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Jumbotron/index.js + 2 modules
var Jumbotron = __webpack_require__(3423);
;// CONCATENATED MODULE: ./components/BeersList/BeersList.style.js

const BeersList = (external_styled_components_default()).div`
  display: flex;
`;
const BeersListWrapper = (external_styled_components_default()).div`
  padding: 20px;
`;

;// CONCATENATED MODULE: ./components/BeersList/index.js








function BeersList_BeersList(props) {
    console.log(props);
    const router = (0,router_.useRouter)();
    const [beer, setBeer] = (0,external_react_.useState)(0);
    const beers = Object.values(props).filter((beer)=>beer.image_url !== "https://images.punkapi.com/v2/keg.png");
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 3000,
                min: 1900
            },
            items: 10
        },
        desktop: {
            breakpoint: {
                max: 1900,
                min: 1024
            },
            items: 6
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 4
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 3
        }
    };
    const handleClick = (0,external_react_.useCallback)((id)=>setBeer(id), [
        setBeer
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            beers.length && /*#__PURE__*/ jsx_runtime_.jsx(Jumbotron/* default */.Z, {
                beer: beers[beer]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BeersListWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                    responsive: responsive,
                    children: beers?.length && beers.map((beer, i)=>/*#__PURE__*/ jsx_runtime_.jsx(BeerCard_BeerCard, {
                            ...beer,
                            onClick: ()=>handleClick(i)
                        }, beer.id))
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./styles/Beers.style.js

const Beers = (external_styled_components_default()).div`
  background-color: #99999940;

`;

;// CONCATENATED MODULE: ./pages/cervejas/Beers.js



function Cervejas({ beers  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Beers, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(BeersList_BeersList, {
            ...beers
        })
    });
}


/***/ }),

/***/ 2694:
/***/ (() => {



/***/ })

};
;