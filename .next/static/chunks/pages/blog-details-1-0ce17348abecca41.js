(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{9815:function(e,s,l){"use strict";var a=l(1664),i=l.n(a),r=l(5893);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{style:{backgroundImage:"url(images/background/bg5-logicworms.png)",backgroundSize:"cover"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row action-box style-1 align-items-center",children:[(0,r.jsx)("div",{className:"col-xl-7 col-lg-8 col-md-8 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,r.jsxs)("div",{className:"section-head style-1",children:[(0,r.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"More With Us"}),(0,r.jsx)("h2",{className:"title",children:"You Want To Showcase Your Website In Top Join With Us"})]})}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,r.jsx)(i(),{href:"/contact-us-1",children:(0,r.jsxs)("a",{className:"btn btn-link d-inline-flex align-items-center",children:[(0,r.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Join Now"]})})})]})})})})}},7913:function(e,s,l){"use strict";var a=l(5696);Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i,r=(i=l(7294))&&i.__esModule?i:{default:i},n=l(2199),c=l(1587),t=l(7215);var d={};function o(e,s,l,a){if(e&&n.isLocalURL(s)){e.prefetch(s,l,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[s+"%"+l+(i?"%"+i:"")]=!0}}var m=function(e){var s,l=!1!==e.prefetch,i=c.useRouter(),m=r.default.useMemo((function(){var s=n.resolveHref(i,e.href,!0),l=a(s,2),r=l[0],c=l[1];return{href:r,as:e.as?n.resolveHref(i,e.as):c||r}}),[i,e.href,e.as]),h=m.href,u=m.as,x=r.default.useRef(h),j=r.default.useRef(u),f=e.children,p=e.replace,g=e.shallow,b=e.scroll,N=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var v=(s=r.default.Children.only(f))&&"object"===typeof s&&s.ref,y=t.useIntersection({rootMargin:"200px"}),w=a(y,3),k=w[0],q=w[1],M=w[2],C=r.default.useCallback((function(e){j.current===u&&x.current===h||(M(),j.current=u,x.current=h),k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[u,v,h,M,k]);r.default.useEffect((function(){var e=q&&l&&n.isLocalURL(h),s="undefined"!==typeof N?N:i&&i.locale,a=d[h+"%"+u+(s?"%"+s:"")];e&&!a&&o(i,h,u,{locale:s})}),[u,h,q,N,l,i]);var _={ref:C,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,l,a,i,r,c,t){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(l))&&(e.preventDefault(),s[i?"replace":"push"](l,a,{shallow:r,locale:t,scroll:c}))}(e,i,h,u,p,g,b,N)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),n.isLocalURL(h)&&o(i,h,u,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var E="undefined"!==typeof N?N:i&&i.locale,I=i&&i.isLocaleDomain&&n.getDomainLocale(u,E,i&&i.locales,i&&i.domainLocales);_.href=I||n.addBasePath(n.addLocale(u,E,i&&i.defaultLocale))}return r.default.cloneElement(s,_)};s.default=m,("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},7215:function(e,s,l){"use strict";var a=l(5696);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootRef,l=e.rootMargin,d=e.disabled||!n,o=i.useRef(),m=i.useState(!1),h=a(m,2),u=h[0],x=h[1],j=i.useState(s?s.current:null),f=a(j,2),p=f[0],g=f[1],b=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),d||u||e&&e.tagName&&(o.current=function(e,s,l){var a=function(e){var s,l={root:e.root||null,margin:e.rootMargin||""},a=t.find((function(e){return e.root===l.root&&e.margin===l.margin}));a?s=c.get(a):(s=c.get(l),t.push(l));if(s)return s;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var s=i.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;s&&l&&s(l)}))}),e);return c.set(l,s={id:l,observer:r,elements:i}),s}(l),i=a.id,r=a.observer,n=a.elements;return n.set(e,s),r.observe(e),function(){if(n.delete(e),r.unobserve(e),0===n.size){r.disconnect(),c.delete(i);var s=t.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));s>-1&&t.splice(s,1)}}}(e,(function(e){return e&&x(e)}),{root:p,rootMargin:l}))}),[d,p,l,u]),N=i.useCallback((function(){x(!1)}),[]);return i.useEffect((function(){if(!n&&!u){var e=r.requestIdleCallback((function(){return x(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[u]),i.useEffect((function(){s&&g(s.current)}),[s]),[b,u,N]};var i=l(7294),r=l(8065),n="undefined"!==typeof IntersectionObserver;var c=new Map,t=[];("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},5358:function(e,s,l){"use strict";l.r(s);var a=l(2678),i=l(1190),r=l(1664),n=l.n(r),c=l(9815),t=l(5893);s.default=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("div",{className:"page-content bg-white",children:[(0,t.jsx)("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,t.jsx)("h1",{children:"Blog Detail"}),(0,t.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Blog"})]})})]})})}),(0,t.jsx)("section",{className:"content-inner bg-img-fix",style:{backgroundImage:"url(images/background/bg1.png)",backgroundSize:"contain"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-xl-8 col-lg-8 m-b50",children:[(0,t.jsxs)("div",{className:"dlab-blog blog-single style-1",children:[(0,t.jsx)("div",{className:"dlab-media rounded-md shadow",children:(0,t.jsx)("img",{src:"images/blog/default/thum1.jpg",alt:""})}),(0,t.jsx)("div",{className:"dlab-meta m-t10",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsxs)("li",{className:"post-author",children:[(0,t.jsx)("i",{className:"flaticon-user m-r10"}),"By ",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:" Johne Doe"})})]})]})}),(0,t.jsx)("h4",{className:"dlab-title",children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis"}),(0,t.jsxs)("div",{className:"dlab-post-text",children:[(0,t.jsx)("p",{children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,t.jsx)("p",{children:"Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est."}),(0,t.jsx)("blockquote",{className:"blockquote style-1",children:(0,t.jsx)("h4",{className:"blockquote-content",children:"Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies."})}),(0,t.jsx)("p",{children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. "}),(0,t.jsx)("h4",{className:"m-b30",children:"Donec sit amet semper massa ellentesque habitant morbi"}),(0,t.jsx)("img",{className:"alignleft rounded-md shadow",width:"300",src:"images/blog/blog-grid/pic1.jpg",alt:""}),(0,t.jsx)("p",{children:"Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis."}),(0,t.jsx)("p",{children:"Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora"}),(0,t.jsx)("p",{children:"Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum."})]}),(0,t.jsx)("div",{className:"dlab-meta border-top",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-tags",children:["Tags:",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"#Child "})})," ,",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"#Eduction "})})," ,",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"#Money "})})," ,",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"#Resturent "})})]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]}),(0,t.jsxs)("div",{className:"row extra-blog style-1",children:[(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("h2",{className:"blog-title",children:"Related Blogs"})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b30",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/default/thum3.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h5",{className:"dlab-title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Praesent ut lobortis purus hasellus libero orci, accumsan."})})}),(0,t.jsx)("p",{className:"m-b0",children:"Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar."}),(0,t.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b30",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/default/thum2.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h5",{className:"dlab-title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Donec feugiat mollis nisi in dignissim. Morbi sollicitudin."})})}),(0,t.jsx)("p",{className:"m-b0",children:"Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar."}),(0,t.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"post-date",children:[(0,t.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,t.jsx)("li",{className:"post-comment",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"flaticon-speech-bubble"}),(0,t.jsx)("span",{children:"15"})]})})}),(0,t.jsxs)("li",{className:"post-share",children:[(0,t.jsx)("i",{className:"flaticon-share"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]})})]}),(0,t.jsx)("div",{className:"clear",id:"comment-list",children:(0,t.jsxs)("div",{className:"comments-area style-1",id:"comments",children:[(0,t.jsx)("h2",{className:"comments-title",children:"8 Comments"}),(0,t.jsxs)("div",{className:"clearfix",children:[(0,t.jsxs)("ol",{className:"comment-list",children:[(0,t.jsxs)("li",{className:"comment",children:[(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic1.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"Celesto Anderson"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})})]}),(0,t.jsx)("ol",{className:"children",children:(0,t.jsx)("li",{className:"comment odd parent",children:(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic2.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"Jake Johnson"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})})]})})})]}),(0,t.jsx)("li",{className:"comment",children:(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-author vcard",children:[(0,t.jsx)("img",{className:"avatar photo",src:"images/testimonials/pic1.jpg",alt:""}),(0,t.jsx)("cite",{className:"fn",children:"John Doe"})]}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,t.jsx)("div",{className:"reply",children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{className:"comment-reply-link",children:[(0,t.jsx)("i",{className:"fa fa-reply"}),"Reply"]})})})]})})]}),(0,t.jsxs)("div",{className:"comment-respond style-1",id:"respond",children:[(0,t.jsxs)("h2",{className:"comment-reply-title",id:"reply-title",children:["Leave a Reply ",(0,t.jsxs)("small",{children:[" ",(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{style:{display:"none"},id:"cancel-comment-reply-link",rel:"nofollow",children:"Cancel reply"})})," "]})," "]}),(0,t.jsxs)("form",{className:"comment-form",id:"commentform",method:"post",children:[(0,t.jsxs)("p",{className:"comment-form-author",children:[(0,t.jsxs)("label",{htmlFor:"author",children:["Name ",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",{type:"text",name:"Author",placeholder:"Author",id:"author"})]}),(0,t.jsxs)("p",{className:"comment-form-email",children:[(0,t.jsxs)("label",{htmlFor:"email",children:["Email ",(0,t.jsx)("span",{className:"required",children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"Email",name:"email",id:"email"})]}),(0,t.jsxs)("p",{className:"comment-form-url",children:[(0,t.jsx)("label",{htmlFor:"url",children:"Website"}),(0,t.jsx)("input",{type:"text",placeholder:"Website",name:"url",id:"url"})]}),(0,t.jsxs)("p",{className:"comment-form-comment",children:[(0,t.jsx)("label",{htmlFor:"comment",children:"Comment"}),(0,t.jsx)("textarea",{rows:"8",name:"comment",placeholder:"Comment",id:"comment"})]}),(0,t.jsx)("p",{className:"form-submit",children:(0,t.jsxs)("button",{type:"submit",className:"btn btn-link d-inline-flex align-items-center",id:"submit",children:[(0,t.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Submit Now"]})})]})]})]})]})})]}),(0,t.jsx)("div",{className:"col-xl-4 col-lg-4 m-b30",children:(0,t.jsxs)("aside",{className:"side-bar sticky-top",children:[(0,t.jsx)("div",{className:"widget",children:(0,t.jsx)("div",{className:"search-bx",children:(0,t.jsx)("form",{role:"search",method:"post",children:(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("div",{className:"input-group-prepend",children:(0,t.jsx)("span",{className:"input-group-text",children:(0,t.jsx)("i",{className:"la la-search"})})}),(0,t.jsx)("input",{name:"text",className:"form-control",placeholder:"Search",type:"text"}),(0,t.jsx)("span",{className:"input-group-btn",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:(0,t.jsx)("i",{className:"la la-long-arrow-right"})})})]})})})}),(0,t.jsxs)("div",{className:"widget widget_archive",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Category"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["Design",(0,t.jsx)("span",{children:"05"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["Development",(0,t.jsx)("span",{children:"25"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["SEO",(0,t.jsx)("span",{children:"20"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["App Design",(0,t.jsx)("span",{children:"08"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["Branding",(0,t.jsx)("span",{children:"22"})]})})})]})]}),(0,t.jsxs)("div",{className:"widget recent-posts-entry",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Recent Posts"}),(0,t.jsxs)("div",{className:"widget-post-bx",children:[(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic1.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Fusce mollis felis quis tristique"})})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic2.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Fusce mollis felis quis tristique"})})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Fusce mollis felis quis tristique"})})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,t.jsxs)("div",{className:"widget-post clearfix",children:[(0,t.jsx)("div",{className:"dlab-media",children:(0,t.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,t.jsxs)("div",{className:"dlab-info",children:[(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(n(),{href:"/blog-large-right-sidebar",children:(0,t.jsx)("a",{children:"Fusce mollis felis quis tristique"})})}),(0,t.jsx)("div",{className:"dlab-meta",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]})]})]}),(0,t.jsxs)("div",{className:"widget widget_archive",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Archives"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["January",(0,t.jsx)("span",{children:"05"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["Fabruary",(0,t.jsx)("span",{children:"25"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["March",(0,t.jsx)("span",{children:"20"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["April",(0,t.jsx)("span",{children:"08"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["May",(0,t.jsx)("span",{children:"22"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["Jun",(0,t.jsx)("span",{children:"11"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",children:(0,t.jsxs)("a",{children:["July",(0,t.jsx)("span",{children:"19"})]})})})]})]}),(0,t.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,t.jsx)("h2",{className:"widget-title",children:"Tags"}),(0,t.jsxs)("div",{className:"tagcloud",children:[(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Business"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"News"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Brand"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Website"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Internal"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Strategy"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Brand"})}),(0,t.jsx)(n(),{href:"#",children:(0,t.jsx)("a",{children:"Mission"})})]})]})]})})]})})}),(0,t.jsx)(c.Z,{})]}),(0,t.jsx)(a.Z,{})]})}},4376:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-details-1",function(){return l(5358)}])},1664:function(e,s,l){e.exports=l(7913)}},function(e){e.O(0,[426,774,888,179],(function(){return s=4376,e(e.s=s);var s}));var s=e.O();_N_E=s}]);