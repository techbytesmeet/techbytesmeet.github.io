(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{9087:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/basics-of-photoshop",function(){return n(5860)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(1664);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,o,c=d(l);function l(){return a(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=(e.pageTitle,e.homePageUrl),n=e.homePageText,o=e.activePageText,a=e.categoryPageUrl,s=e.categoryPageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"page-title-content",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:t,children:(0,r.jsx)("a",{children:n})})}),a&&(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:a,children:(0,r.jsx)("a",{children:s})})}),(0,r.jsx)("li",{children:o})]})})})})}}])&&s(t.prototype,n),o&&s(t,o),l}(o.Component);t.Z=h},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),s=n(387),c=n(7190);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,g=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,j=r(c.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],P=i.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,d,h,{locale:t})}),[h,d,w,b,n,o]);var O={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,o,d,h,g,y,v,b)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof b?b:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(h,_,o&&o.locales,o&&o.domainLocales);O.href=k||a.addBasePath(a.addLocale(h,_,o&&o.defaultLocale))}return i.default.cloneElement(t,O)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),l=r(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},5860:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5893),o=n(7294),i=n(8614),a=n(3538),s=n(1664);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,o,i=p(a);function a(){return c(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return(0,r.jsx)("section",{className:"news-details-area ptb-100",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"blog-details-desc",children:[(0,r.jsx)("h2",{className:"text-center",children:"PHOTOSHOP"}),(0,r.jsx)("div",{className:"article-image mt-30",children:(0,r.jsx)("img",{src:"/images/workshops/Photoshop.webp",alt:"photoshop"})}),(0,r.jsxs)("div",{className:"article-content",children:[(0,r.jsx)("div",{className:"entry-meta",children:(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Category"}),": Design Thinking"]})})})}),(0,r.jsx)("p",{className:"mt-30",children:"Photoshop is a widely-used image editing software developed and published by Adobe. It allows users to manipulate and enhance digital images, create vector graphics, and design layouts for print and digital media. It is widely used by photographers, graphic designers, and digital artists for a variety of tasks, including retouching, color correction, compositing, and creating digital art."}),(0,r.jsx)("p",{children:"Photoshop is one of the most popular image editing software programs because it offers a wide range of powerful tools and features that make it versatile and user-friendly. Some of the reasons why Photoshop is so popular include:"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Wide range of tools and features"}),": Photoshop offers a wide range of tools and features that can be used for photo editing and retouching, graphic design, digital painting and illustration, and more. This makes it an all-in-one software that can be used for a wide range of tasks."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Professional-grade quality"}),": Photoshop is widely used by professionals in the photography, graphic design, and advertising industries. Its high-quality tools and features allow users to create professional-grade images and designs that can be used for print and digital media."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"User-friendly interface"}),": Photoshop has an intuitive and user-friendly interface that makes it easy to use, even for beginners. The software is also highly customizable, allowing users to customize the interface and tools to their specific needs."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Large community and resources"}),": Photoshop has a large community of users and a wide range of resources available, including tutorials, templates, and plug-ins. This makes it easy for users to learn and grow their skills, and also to find solutions to any problem they might encounter."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Integration with other Adobe software"}),": Photoshop can be seamlessly integrated with other Adobe software, such as Illustrator, InDesign, and Premiere Pro, to create a complete workflow for creating, editing, and publishing professional-grade designs and media."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Constant updates"}),": Adobe Photoshop is constantly updated with new features and improvements, making it a reliable and up-to-date software to use."]})]}),(0,r.jsx)("p",{children:"Learning Photoshop can provide a wide range of benefits and open up many job opportunities. Some of the benefits include:"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Photo editing and retouching"}),": Photoshop is a powerful tool for editing and retouching photos, allowing users to adjust color, brightness, contrast, and other elements to enhance the overall look and feel of an image."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Graphic design"}),": Photoshop can be used to create a wide range of visual designs, including logos, brochures, posters, and other marketing materials."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Digital painting and illustration"}),": Photoshop has a wide range of brushes and tools that can be used for digital painting and illustration, allowing users to create detailed and intricate artwork."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Preparing images for print or web"}),": Photoshop can be used to prepare images for print or web use, including optimizing file size, resolution, and color space."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Job opportunities"}),": Learning Photoshop can open up many job opportunities in fields such as graphic design, advertising, photography, web design, and more. Photoshop is widely used in the industry and having knowledge of it is a valuable skill that is often required by employers."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Freelancing"}),": Photoshop skills can also be utilized to create designs, edit photos and videos for independent clients, making it a great way to start a freelancing career."]})]}),(0,r.jsx)("p",{children:"Some of the job positions that require knowledge of Photoshop are:"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Graphic designer"}),(0,r.jsx)("li",{children:"Web designer"}),(0,r.jsx)("li",{children:"Photo editor"}),(0,r.jsx)("li",{children:"Digital marketer"}),(0,r.jsx)("li",{children:"Illustrator"}),(0,r.jsx)("li",{children:"User interface designer"}),(0,r.jsx)("li",{children:"Art director"}),(0,r.jsx)("li",{children:"Branding specialist"}),(0,r.jsx)("li",{children:"Motion graphics designer"})]}),(0,r.jsx)("p",{children:"Overall, learning Photoshop can be a valuable skill that can open up many job opportunities and enhance your career in the creative field."}),(0,r.jsx)("a",{href:"https://www.adobe.com/ca/products/photoshop/landpa.html",className:"default-btn",children:"Get Started \xbb"})]}),(0,r.jsx)("div",{className:"article-footer"}),(0,r.jsx)("div",{className:"post-navigation",children:(0,r.jsxs)("div",{className:"navigation-links",children:[(0,r.jsx)("div",{className:"nav-previous",children:(0,r.jsx)(s.default,{href:"/projects/digital-arts",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("i",{className:"bx bx-left-arrow-alt"})," Digital Arts"]})})}),(0,r.jsx)("div",{className:"nav-next",children:(0,r.jsx)(s.default,{href:"/projects/animation-with-scratch",children:(0,r.jsxs)("a",{children:["Animation With Scratch ",(0,r.jsx)("i",{className:"bx bx-right-arrow-alt"})]})})})]})})]})})})})})}}])&&l(t.prototype,n),o&&l(t,o),a}(o.Component),y=n(8348);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,n,o,s=P(c);function c(){return v(this,c),s.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(a.Z,{homePageUrl:"/",homePageText:"Home",categoryPageUrl:"/projects",categoryPageText:"Projects",activePageText:"Basics Of Photoshop"}),(0,r.jsx)(g,{}),(0,r.jsx)(y.Z,{})]})}}])&&b(t.prototype,n),o&&b(t,o),c}(o.Component)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=9087,e(e.s=t);var t}));var t=e.O();_N_E=t}]);