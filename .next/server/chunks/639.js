"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 3639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__(3732);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/protfolioModel.js





const protfolioModel = () => {
  return /*#__PURE__*/_jsxs(Modal.Dialog, {
    children: [/*#__PURE__*/_jsx(Modal.Header, {
      closeButton: true,
      children: /*#__PURE__*/_jsx(Modal.Title, {
        children: "Modal title"
      })
    }), /*#__PURE__*/_jsx(Modal.Body, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Modal body text goes here."
      })
    }), /*#__PURE__*/_jsxs(Modal.Footer, {
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "secondary",
        children: "Close"
      }), /*#__PURE__*/_jsx(Button, {
        variant: "primary",
        children: "Save changes"
      })]
    })]
  });
};

/* harmony default export */ const component_protfolioModel = ((/* unused pure expression or super */ null && (protfolioModel)));
;// CONCATENATED MODULE: ./component/portfolio.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Image1 from "images/projects/grid/pic1";










function Portfolio() {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const {
    0: modalImage,
    1: setmodalImage
  } = (0,external_react_.useState)("");
  const {
    0: projectName,
    1: setProjectName
  } = (0,external_react_.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)("");
  const {
    0: link,
    1: setLink
  } = (0,external_react_.useState)("");

  const handleClose = () => setShow(false);

  const portfolio = [{
    title: "2K Tablets ",
    category: ["all", "seo"],
    imageSrc: "/images/projects/seo/2k.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/seo/2k.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    lnk: "https://www.2ktablets.com/",
    description: "2ktablets.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking top amazon products like tablets. As an Amazon Associate, we earn affiliate commissions from qualifying purchases."
  }, {
    title: "10 G ",
    category: ["all", "seo"],
    imageSrc: "/images/projects/seo/10g.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/seo/10g.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    lnk: "https://www.10coolgadgets.com/",
    description: "10coolgadgets is an affiliate blog created on October 11, 2019. Our prior goal is to unite people who are interested in technology. We are providing them with honest product reviews in the form of lists. We also offer daily tech news other than product reviews."
  }, {
    title: "BhaiTv",
    category: ["seo"],
    imageSrc: "/images/projects/seo/bhai tv.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/seo/bhai tv.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    lnk: "https://bhaitv.com/",
    description: "10coolgadgets is an affiliate blog created on October 11, 2019. Our prior goal is to unite people who are interested in technology. We are providing them with honest product reviews in the form of lists. We also offer daily tech news other than product reviews."
  }, {
    title: " Bhai Trending",
    category: ["seo"],
    imageSrc: "/images/projects/seo/bhaitrending.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/seo/bhaitrending.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    lnk: "https://bhaitrending.com/",
    description: "BhaiTrending has the passion for providing products of home appliances, Jewelry, smart gadgets, security camera, tech products, and electronics etc.."
  }, {
    title: "Healthy Cyte",
    category: ["seo"],
    imageSrc: "/images/projects/seo/healthy cyte.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/seo/healthy cyte.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    lnk: "https://healthycyte.com/",
    description: "Healthycyte.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking top amazon products like tablets. As an Amazon Associate, we earn affiliate commissions from qualifying purchases."
  }, {
    title: "Time Sheet Management Tool",
    category: ["all", "web_development"],
    imageSrc: "/images/projects/websiteDevelopment/time mangement tool4x.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/websiteDevelopment/time mangement tool4x.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "It is a tool that is uses to mange time",
    lnk: "https://pmprocess.in/#/auth"
  }, {
    title: "PRESTIGE JEWELLERS",
    category: ["all", "web_development"],
    imageSrc: "/images/projects/websiteDevelopment/prestigejewellers4x.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/websiteDevelopment/prestigejewellers4x.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "It is an online Jewellery Shop",
    lnk: "https://www.prestigejewellers.ca"
  }, {
    title: "Travel BD",
    category: ["all", "web_development"],
    imageSrc: "/images/projects/websiteDevelopment/travel bd4x.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/websiteDevelopment/travel bd4x.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "It is an online Jewellery Shop",
    lnk: "https://travel.a4aero.com/"
  }, {
    title: "Title ",
    category: ["web_design"],
    imageSrc: "/images/projects/Website/doctorwebsitebig.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/Website/doctorwebsitebig.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "Behance",
    lnk: "https://www.behance.net/badrulislam/projects"
  }, {
    title: "Title",
    category: ["web_design"],
    imageSrc: "/images/projects/Website/quiz.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/Website/quiz.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "Behance",
    lnk: "https://www.behance.net/badrulislam/projects"
  }, {
    title: "Title",
    category: ["all", "web_design"],
    imageSrc: "/images/projects/Website/realestatewebsite.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/Website/realestatewebsite.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logicworms",
    description: "Behance",
    lnk: "https://www.behance.net/badrulislam/projects"
  }, {
    title: "Stay Fit | Home Workout",
    category: ["mobile_app"],
    imageSrc: "/images/projects/mobileApp/fitness app.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/fitness app.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "Stay Home and Stay Fit app allows you to build your body in no time with some simple exercises at home",
    lnk: "https://play.google.com/store/apps/details?id=com.homeworkout.fitness.exercise.stayhome.stayfit.app"
  }, {
    title: "Data Vault - Hide Pictures",
    category: ["all", "mobile_app"],
    imageSrc: "/images/projects/mobileApp/datavaultapp.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/datavaultapp.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "Data Vault - Hide Pictures is a powerful tool that can secure and hide your personal data like photos, videos, and other confidential data like ATMs card information, Emails and passwords, and notes.",
    lnk: "https://play.google.com/store/apps/details?id=com.logictubers.folderlock.datalock"
  }, {
    title: "Events Invitation Card Maker",
    category: ["mobile_app"],
    imageSrc: "/images/projects/mobileApp/invitaioncardmaker.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/invitaioncardmaker.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "Digital card designing hub with multiple options and templates for making birthday cards, wedding cards, events cards, party invitation cards and much more in one single application.",
    lnk: "https://play.google.com/store/apps/details?id=com.smartgorilla.greetings.invitation.cards.island"
  }, {
    title: "NFT Maker NFT Art - NFT Crypto",
    category: ["all", "mobile_app"],
    imageSrc: "/images/projects/mobileApp/nft creator.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/nft creator.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "NFT art maker is an amazing photo editing tool that focuses on artistic filters and creates real NFTs art.",
    lnk: "https://play.google.com/store/apps/details?id=com.logictubers.nftcreator"
  }, {
    title: "Screen Recorder, Video Editor",
    category: ["all", "mobile_app"],
    imageSrc: "/images/projects/mobileApp/screen recorder.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/screen recorder.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "With Screen Recorder, you can record smooth and clear videos of your screen including tutorials that are perfect for YouTube. You also have the option to take screenshots easily with this tool! In addition to recording HD video content on demand like gameplays or how-to guides from internet browser windows; it's possible now even while playing games live streamed directly into one app - no need to download anything onto device just exclusive use within gaming session itself.",
    lnk: "https://bit.ly/36qtUKa"
  }, {
    title: "Screen Recorder, Video Editor",
    category: ["all", "mobile_app"],
    imageSrc: "/images/projects/mobileApp/app.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/mobileApp/app.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Jhone Doe",
    description: "NFT art maker is an amazing photo editing tool that focuses on artistic filters and creates real NFTs art.",
    lnk: "https://bit.ly/36qtUKa"
  }, {
    title: "Restaurant-logo-Food-Restaurant-Branding",
    category: ["all", "branding"],
    imageSrc: "/images/projects/branding/a restuarant.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/a restuarant.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    lnk: "https://www.behance.net/gallery/118046035/Restaurant-logo-Food-Restaurant-Branding",
    description: "Restaurant logo | Food Restaurant Branding.",
    author: "Logic Worms"
  }, {
    title: "Dragon food Delivery",
    category: ["all", "branding"],
    imageSrc: "/images/projects/branding/dragon food delivery.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/dragon food delivery.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    lnk: "https://www.behance.net/gallery/129967539/Dragon-food-Delivery",
    description: "Design of a Food Delivery app",
    author: "Logic Worms"
  }, {
    title: "Fresh Juice Branding",
    category: ["branding"],
    imageSrc: "/images/projects/branding/fresh juice logo.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/fresh juice logo.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    lnk: "https://www.behance.net/gallery/132265397/Fresh-Juice-Natural-Product",
    description: "Branding of Fresh Juice",
    author: "Logic Worms"
  }, {
    title: "Monarch logo Design",
    category: ["branding"],
    imageSrc: "/images/projects/branding/monarch.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/monarch.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    lnk: "https://www.behance.net/gallery/132206187/Monarch-logo-Design",
    author: "Logic Worms",
    description: "Monarch logo Design"
  }, {
    title: "Techintrending logo design",
    category: ["branding"],
    imageSrc: "/images/projects/branding/tech in trending logo.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/tech in trending logo.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    lnk: "https://www.behance.net/gallery/134910263/techintrending-logo-design",
    description: "Techintrending logo design",
    author: "Logic Worms"
  }, {
    title: "Rambo text Logo",
    category: ["branding"],
    imageSrc: "/images/projects/branding/upclever.png",
    img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/projects/branding/upclever.png",
      layout: "responsive",
      width: 370,
      height: 370
    }),
    author: "Logic Worms",
    description: "Rambo text Logo",
    lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo"
  }, {
    title: "Business card",
    category: ["branding"],
    imageSrc: "/images/projects/branding/bcard.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/bcard.png"
    }),
    author: "Logic Worms",
    description: "Business card",
    lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo"
  }, {
    title: "Business card",
    category: ["branding"],
    imageSrc: "/images/projects/branding/cbottle.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/cbottle.png"
    }),
    author: "Logic Worms",
    description: "Business card",
    lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo"
  }, {
    title: "Business card",
    category: ["branding"],
    imageSrc: "/images/projects/branding/cCard.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/cCard.png"
    }),
    author: "Logic Worms",
    description: "Business card",
    lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo"
  }, {
    title: "Business card",
    category: ["branding"],
    imageSrc: "/images/projects/branding/Image 36.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/Image 36.png"
    }),
    author: "Logic Worms",
    description: "Business card",
    lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo"
  }, {
    title: "Business card",
    category: ["branding"],
    imageSrc: "/images/projects/branding/Image 39.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/Image 39.png"
    }),
    author: "Logic Worms",
    description: "Business card",
    lnk: "https://www.behance.net/gallery/121558541/Social-Media-Post-Design-Instagram-Post"
  }, {
    title: "Instagram story",
    category: ["branding"],
    imageSrc: "/images/projects/branding/Image 40.png",
    img: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/projects/branding/Image 40.png"
    }),
    author: "Logic Worms",
    description: "Instagram story",
    lnk: "https://www.behance.net/gallery/121558541/Social-Media-Post-Design-Instagram-Post"
  }];
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("all");
  const {
    0: projects,
    1: setProjects
  } = (0,external_react_.useState)([]);
  const {
    openLightbox
  } = (0,external_simple_react_lightbox_.useLightbox)();
  (0,external_react_.useEffect)(() => {
    setProjects(portfolio);
  }, []);
  (0,external_react_.useEffect)(() => {
    setProjects([]);
    const filtered = portfolio.map(p => _objectSpread(_objectSpread({}, p), {}, {
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "site-filters style-1 clearfix center m-b40",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "filters",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "all" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "all",
            onClick: () => setFilter("all"),
            children: "All"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "web_design" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "web_design",
            onClick: () => setFilter("web_design"),
            children: "Web Design"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "web_development" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "web_development",
            onClick: () => setFilter("web_development"),
            children: "Web Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "branding" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "branding",
            onClick: () => setFilter("branding"),
            children: "Branding"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "mobile_app" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "mobile_app",
            onClick: () => setFilter("mobile_app"),
            children: "Mobile Apps"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: `btn ${filter === "seo" ? "active" : ""}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            active: "seo",
            onClick: () => setFilter("seo"),
            children: "SEO"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "clearfix",
      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
        id: "masonry",
        className: "row",
        "data-column-width": "3",
        children: projects.map((item, i) => item.filtered === true ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.1s",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dlab-box style-1 m-b30",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-media",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    cursor: "pointer"
                  },
                  target: "_blank",
                  onClick: () => {
                    setShow(true);
                    setmodalImage(item.img);
                    setProjectName(item.title);
                    setDescription(item.description);
                    setLink(item.lnk);
                  },
                  children: item.img
                })
              })
            })
          })
        }) : "")
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
        show: show,
        className: "mt-5",
        onHide: handleClose,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
          closeButton: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Title, {
            children: [projectName, " "]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: modalImage
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "fw-bold",
              style: {
                color: "#FF8700"
              },
              children: "Project Description"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), description, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: link,
              target: "_blank",
              children: link
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {})]
      })]
    })]
  });
}

/* harmony default export */ const portfolio = (Portfolio);

/***/ })

};
;