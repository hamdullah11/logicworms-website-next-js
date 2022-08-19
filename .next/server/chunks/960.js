"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 8115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function TeamSlider() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: designation,
    1: setDesignation
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: about,
    1: setAbout
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: link1,
    1: setLink1
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: link2,
    1: setLink2
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: link3,
    1: setLink3
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: socialLinks,
    1: setsocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(["fa-linkedin", "fa-instagram", "fa-twitter"]);
  const {
    0: skills,
    1: setSkills
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(["", "", "", ""]);

  const handleClose = () => setShow(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    speed: 5000,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, settings), {}, {
      className: "team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.5s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/atif.png");
          setName("Atif Waheed");
          setDesignation("Digital Marketing team lead");
          setLink1("https://www.linkedin.com/in/atif-waheed-17964534?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZIoOTgawRLWnQ3qfQbon1w%3D%3D");
          setLink2("https://www.instagram.com/m_adil_kamboh/");
          setLink3("https://twitter.com/atifwaheedktk");
          setsocialLinks(["fa-linkedin", "fa-instagram", "fa-twitter"]);
          setAbout("Digital marketing specialist with an immense knowledge and more then six year of experience. Also in inspiration for the newbie digital marketer for I have got several rewards for my great works.");
          setSkills(["Blogger  ", "Off-page SEO", "Products Hunting", "Sales Generation"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/atif.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                  children: "Atif Waheed"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Digital Marketing team lead"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/atif-waheed-17964534/",
                  target: "_blank",
                  className: "fa fa-linkedin"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  className: "fa fa-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/atifwaheedktk",
                  target: "_blank",
                  className: "fa fa-twitter"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.1s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/adil.png");
          setName("Muhammd Adil");
          setDesignation("Senior Web Developer");
          setLink1("https://www.linkedin.com/in/m-adi%D9%84-%C2%AB-kamboh-%C2%BB-52b09111b/");
          setLink2("https://www.instagram.com/m_adil_kamboh/");
          setLink3("https://twitter.com/_adil_Kamboh");
          setsocialLinks(["fa-linkedin", "fa-instagram", "fa-twitter"]);
          setAbout(` Software Engineer with 4+ years of experience specializing in the designing and developing innovative web / mobile interactive applications that deliver improved functionality and user experience in a very well structured code. Effectively combines technical expertise and creativity with strong business management experience to consistently deliver solid results. \n Thrives on challenges and adopts a flexible approach to every task, including a willingness to learn new skills in order to achieve results. with considerable international exposure, works effectively as part of a cross-functional team and adapts to different cultures with ease and professionalism.`);
          setSkills(["Full Stack JS Developer", "Data Engineer  ", "DevOps Engineer", "MERN | Firebsae | SQL"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/adil.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                  children: "M Adil"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Senior Web Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/m-adi%D9%84-%C2%AB-kamboh-%C2%BB-52b09111b/",
                  target: "_blank",
                  className: "fa fa-linkedin"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/m_adil_kamboh/",
                  target: "_blank",
                  className: "fa fa-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/_adil_Kamboh",
                  target: "_blank",
                  className: "fa fa-twitter"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/mazhar.png");
          setName("Sayyed Mazhar Ullah Jan");
          setDesignation("Web Developer");
          setLink1("https://www.linkedin.com/in/mazhar-jan-755a35196/");
          setLink2("https://www.instagram.com/this_is.mj/");
          setLink3("https://twitter.com/MazharJan15");
          setAbout("Software Engineer having more than 1 and half year of experience in IT field. A highly competent, motivated and enthusiastic individual with experience of working as part of a team as well as an individual in a busy office environment. I have strong technical skills in Web Development as well as excellent interpersonal skills, enabling me to interact with a wide range of different people including customers/clients & visitors. Possessing a proven ability to generate innovative ideas and solutions to problems. Currently working as a Web developer. Always excited to try out new technologies which would help me grow as a professional and as a person.");
          setSkills(["JS Developer", "MERN Stack", "Firebase | MySQL", "Bootstrap | MUI | Tailwind CSS"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/mazhar.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: " Mazhar Jan"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Web Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/mazhar-jan-755a35196/",
                  target: "_blank",
                  className: "fa fa-linkedin"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/this_is.mj/",
                  target: "_blank",
                  className: "fa fa-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/MazharJan15",
                  target: "_blank",
                  className: "fa fa-twitter"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.3s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/aqib.png");
          setName("Muhammad Aqib");
          setDesignation("Andriod Developer");
          setLink1("https://www.facebook.com/profile.php?id=100010238443949");
          setLink2("https://www.instagram.com/aqif_khattak/");
          setLink3("https://www.linkedin.com/in/aqib-iqbal-420052175/");
          setsocialLinks(["fa-facebook", "fa-instagram", "fa-linkedin"]);
          setAbout("Android Developer with more than 1 years of involvement. I  offers a wide scope of administrations for Android applications improvement Go ahead and connect with me so we can begin arranging your project.");
          setSkills(["Android Using Java", "Firebase Database  ", "adMob ads implementation,ironSource,mediation", "project management lead "]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/aqib.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "Aqib Iqbal"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Andriod Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/aqib-iqbal-420052175/",
                  target: "_blank",
                  className: "fa fa-linkedin"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/aqif_khattak/",
                  target: "_blank",
                  className: "fa fa-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.facebook.com/profile.php?id=100010238443949",
                  target: "_blank",
                  className: "fa fa-facebook"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.4s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/zakir.png");
          setName("Zakir Ullah");
          setDesignation("UI/UX Designer");
          setLink1("https://en-gb.facebook.com/");
          setLink2("https://www.instagram.com/zakirdesigns/");
          setLink3("https://www.linkedin.com/in/zakir-ullah-068197217/");
          setsocialLinks(["fa-facebook", "fa-instagram", "fa-linkedin"]);
          setAbout(" Creative UI/UX Designer With 1.5+ Years Of Experience In Optimizing User Experience Through Innovative Solutions and Dynamic Interface Designs. Successful In Enhancing User Engagement For Well-Known Brands, Providing A Compelling User Experience To Improve Brand Loyalty And Customer Retention. ");
          setSkills(["Logo Design", "Web Design", "App Design", "Software design"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/zakir.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "Zakir Ullah"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "UI/UX Designer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://en-gb.facebook.com/",
                  className: "fa fa-facebook",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/zakirdesigns/",
                  className: "fa fa-instagram",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/zakir-ullah-068197217/",
                  className: "fa fa-linkedin",
                  target: "_blank"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.5s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/sadiq.png");
          setName("M. Sadiq");
          setDesignation("Graphics Designer");
          setLink1("https://www.facebook.com/profile.php?id=100012424505096");
          setLink2("https://twitter.com/0311_4429337");
          setLink3("https://www.linkedin.com/in/muhammad-sadiq-a44541177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIR0YctNBSvWamdn144jWaA%3D%3D");
          setsocialLinks(["fa-facebook", "fa-twitter", "fa-linkedin"]);
          setAbout("Graphic designer  assisting and collaborating with  designing team to complete tasks and project beyond my capabilities such as icons, logo, banner, brusher and branding work designs etc.");
          setSkills(["Typography", "Banner", "Design for Screen and Print", "Photo editing"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/sadiq.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "M. Sadiq"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Graphics Designer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/muhammad-sadiq-a44541177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIR0YctNBSvWamdn144jWaA%3D%3D",
                  target: "_blank",
                  className: "fa fa-linkedin"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/0311_4429337",
                  target: "_blank",
                  className: "fa fa-twitter"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.facebook.com/profile.php?id=100012424505096",
                  target: "_blank",
                  className: "fa fa-facebook"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.6s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/hamza2.png");
          setName("Hamza Khattak");
          setDesignation("  Content Creator /Shopify Expert");
          setLink1("https://www.facebook.com/hamza.writes.1042");
          setLink2("https://www.instagram.com/hamxoo_974/");
          setLink3("https://twitter.com/hamzakhattak974");
          setsocialLinks(["fa-facebook", "fa-instagram", "fa-twitter"]);
          setAbout("Experienced Blogger with a demonstrated history of working in the information technology and services industry. Skilled in Research, English, Networking, and Media Strategy. Besides, I am Shopify Expert and have strong affiliation with businesses. I enjoy helping businesses create an online presence that accurately represents their brand. If you're looking for someone who can help you write SEO friendly, eye-catching, and engaging content or set up an online store, then please get in touch. I'd be happy to help.");
          setSkills(["SEO Friendly Content", "Off-page SEO", "Products Hunting", "Sales Generation"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/hamza2.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "Hamza Khattak"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "dlab-position",
                children: ["Content Creator Shopify Expert", " "]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.facebook.com/hamza.writes.1042",
                  target: "_blank",
                  className: "fa fa-facebook"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.instagram.com/hamxoo_974/",
                  target: "_blank",
                  className: "fa fa-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/hamzakhattak974",
                  target: "_blank",
                  className: "fa fa-twitter"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.7s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/basit.png");
          setName("Basit Ali");
          setDesignation("Andriod Developer");
          setLink1("https://facebook.com/justbasitali");
          setLink2("https://www.linkedin.com/in/basit-ali-5718a2201/");
          setLink3("https://twitter.com/justbasitali");
          setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
          setAbout("Android Developer with more than 1 year of experience. I  offers a wide scope of administrations for Android applications improvement Go ahead and connect with me so we can begin arranging your project.");
          setSkills(["Android Using Kotlin/Java", "Firebase Database  ", "adMob ads implementation,ironSource,mediation", "project management"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/basit.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "Basit Ali"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Andriod Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/justbasitali",
                  className: "fa fa-twitter",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://facebook.com/justbasitali",
                  className: "fa fa-facebook",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/basit-ali-5718a2201/",
                  className: "fa fa-linkedin",
                  target: "_blank"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.8s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/hamd.png");
          setName("Hamd Ullah");
          setDesignation("Web Developer");
          setLink1("https://www.facebook.com/hamdullah.kha");
          setLink2("https://www.linkedin.com/in/hamd-ullah-7747b6218/");
          setLink3("https://twitter.com/login?lang=en");
          setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
          setAbout("Software Engineer  with 1 years of experience in web designing and web development that deliver improved functionality and user experience in a very well structured code.");
          setSkills(["React js", "Next js", "Firebase | SQL", "MUI | React Bootstrap"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/hamd.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  children: "Hamd ullah"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Web Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/hamd-ullah-7747b6218/",
                  className: "fa fa-linkedin",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.facebook.com/hamdullah.kha",
                  className: "fa fa-facebook",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/login?lang=en",
                  className: "fa fa-twitter",
                  target: "_blank"
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.9s",
        onClick: () => {
          setShow(true);
          setImage("/images/team/employees/asad.png");
          setName("Syed Asad");
          setDesignation("Web Developer");
          setLink1("https://www.facebook.com/syedasad.shah.16100");
          setLink2("https://www.linkedin.com/in/syed-asad-4b3776234/");
          setLink3("https://twitter.com/QC6UCZwXMPDc2rd?t=lPOHSybDpSJJPetEmqSEBA&s=08");
          setsocialLinks(["fa-facebook", "fa-linkedin", "fa-twitter"]);
          setAbout("Software Engineer  with 1 years of experience in web designing and web development that deliver improved functionality and user experience in a very well structured code.");
          setSkills(["React js", "Web developer", "Html | Css ", "Bootstrap"]);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dlab-team style-1 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-media",
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: "images/team/employees/asad.png",
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "dlab-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                  children: "Syed Asad"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "dlab-position",
                children: "Web Developer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
              className: "dlab-social-icon primary-light",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.facebook.com/syedasad.shah.16100",
                  className: "fa fa-facebook",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://www.linkedin.com/in/syed-asad-4b3776234/",
                  className: "fa fa-linkedin",
                  target: "_blank"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "https://twitter.com/QC6UCZwXMPDc2rd?t=lPOHSybDpSJJPetEmqSEBA&s=08",
                  className: "fa fa-twitter",
                  target: "_blank"
                })
              })]
            })]
          })]
        })
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      show: show,
      className: "mt-5",
      onHide: handleClose,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Title, {
          children: " "
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Body, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: image,
          width: 500,
          height: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          className: "fw-bold ",
          style: {
            color: "#FF8700"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
            className: "mb-0 mt-3",
            children: name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            className: "dlab-position",
            children: designation
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), about]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
          className: "mt-1",
          children: "Skills"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          style: {
            listStyleType: "square"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              class: "fa fa-solid fa-caret-right mx-2",
              style: {
                color: "#FF8700",
                fontSize: "20px"
              }
            }), skills[0]]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              class: "fa fa-solid fa-caret-right mx-2",
              style: {
                color: "#FF8700",
                fontSize: "20px"
              }
            }), skills[1]]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              class: "fa fa-solid fa-caret-right mx-2",
              style: {
                color: "#FF8700",
                fontSize: "20px"
              }
            }), skills[2]]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              class: "fa fa-solid fa-caret-right mx-2",
              style: {
                color: "#FF8700",
                fontSize: "20px"
              }
            }), skills[3]]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal.Footer, {
        style: {
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "dlab-social-icon primary-light",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              href: link1,
              className: `fa ${socialLinks[0]}`,
              target: "_blank"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              href: link2,
              className: `fa ${socialLinks[1]}`,
              target: "_blank"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              href: link3,
              className: `fa ${socialLinks[2]}`,
              target: "_blank"
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamSlider);

/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ testimonial)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/testimonialSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function TestimonialSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,external_react_.useState)();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [{
      breakpoint: 1320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }]
  };

  const renderArrows = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "owl-nav",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-prev",
        onClick: () => asd.slickPrev(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-left"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "owl-next",
        onClick: () => asd.slickNext(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fa fa-arrow-right"
        })
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s" // data-wow-delay="0.2s"
          ,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CCarefully looks at the requirements and delivers without complains. Professional and a good communicator. Will definitely work with them again\u201D"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-detail",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "clearfix",
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Mark Lee"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          s: "0.4s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CHaving work done on schedule, real time communication to ensure the work are done nicely! Highly recommend!\u201D"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-detail",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "clearfix ",
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Nouf Almutairi"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          s: "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CGreat individuals to work with \u201D"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-detail",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "clearfix",
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "Olha Bahlyk"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          s: "0.6s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u201CHighly Knowledgeable in Android development. Great Communication skills and showed excellent results with fast deliverables. I will definitely work with them again for future updates \u201D"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonial-detail",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "clearfix",
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  className: "testimonial-name",
                  children: "PILOT COMMUNICATIONS"
                })
              })
            })]
          })
        })]
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const testimonialSlider = (TestimonialSlider);
;// CONCATENATED MODULE: ./element/testimonial.js





function Testimonial() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner bg-primary",
      style: {
        backgroundImage: "url(images/background/bg3.png)"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-xl-5 px-md-4 px-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row testimonials-wraper-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/jsx_runtime_.jsx(testimonialSlider, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-1 text-white p-t15",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "sub-title bgl-light m-b20",
                children: "Testmonial"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: "title m-b10",
                children: ["See What Are They Say About Us ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Upwork Clients"]
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const testimonial = (Testimonial);

/***/ })

};
;