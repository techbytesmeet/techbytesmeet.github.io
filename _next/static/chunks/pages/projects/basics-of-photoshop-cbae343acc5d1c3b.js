(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{9087:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/basics-of-photoshop",function(){return n(5860)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),c=n(1664);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,o,u=p(s);function s(){return i(this,s),u.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.pageTitle,e.homePageUrl),n=e.homePageText,o=e.activePageText,i=e.categoryPageUrl,a=e.categoryPageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"page-title-content",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:t,children:(0,r.jsx)("a",{children:n})})}),i&&(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:i,children:(0,r.jsx)("a",{children:a})})}),(0,r.jsx)("li",{children:o})]})})})})}}])&&a(t.prototype,n),o&&a(t,o),s}(o.Component);t.Z=h},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),a=n(387),u=n(7190);var s={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),f=c.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],c=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):c||n}}),[o,e.href,e.as]),p=f.href,h=f.as,d=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof d&&(d=c.default.createElement("a",null,d));var j=(t=c.default.Children.only(d))&&"object"===typeof t&&t.ref,x=r(u.useIntersection({rootMargin:"200px"}),2),g=x[0],w=x[1],O=c.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);c.default.useEffect((function(){var e=w&&n&&i.isLocalURL(p),t="undefined"!==typeof m?m:o&&o.locale,r=s[p+"%"+h+(t?"%"+t:"")];e&&!r&&l(o,p,h,{locale:t})}),[h,p,w,m,n,o]);var P={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:a}))}(e,o,p,h,y,v,b,m)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof m?m:o&&o.locale,R=o&&o.isLocaleDomain&&i.getDomainLocale(h,_,o&&o.locales,o&&o.domainLocales);P.href=R||i.addBasePath(i.addLocale(h,_,o&&o.defaultLocale))}return c.default.cloneElement(t,P)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=o.useRef(),s=r(o.useState(!1),2),l=s[0],f=s[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!i&&!l){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),c=n(9311),i="undefined"!==typeof IntersectionObserver;var a=new Map},5860:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5893),o=n(7294),c=n(8614),i=n(3538),a=n(1664);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,o,c=d(i);function i(){return u(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)("section",{className:"news-details-area ptb-100",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"blog-details-desc",children:[(0,r.jsx)("h2",{className:"text-center",children:"BASICS OF PHOTOSHOP"}),(0,r.jsx)("div",{className:"article-image mt-30",children:(0,r.jsx)("img",{src:"/images/workshops/Photoshop.webp",alt:"photoshop"})}),(0,r.jsxs)("div",{className:"article-content",children:[(0,r.jsx)("div",{className:"entry-meta",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Category"}),": Graphic Design"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Reference"}),": Adobe Photoshop"]})})]})}),(0,r.jsx)("h3",{children:"A demo on basics of using Photoshop."}),(0,r.jsx)("p",{children:"Would you like to get know the basics of using Adobe Photoshop?"}),(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"Ram Tejash presented a small demo on how to use this tool."})})]}),(0,r.jsx)("div",{className:"article-footer"}),(0,r.jsx)("div",{className:"post-navigation",children:(0,r.jsxs)("div",{className:"navigation-links",children:[(0,r.jsx)("div",{className:"nav-previous",children:(0,r.jsx)(a.default,{href:"/workshops/animation-with-scratch",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("i",{className:"bx bx-left-arrow-alt"})," Animation With Scratch"]})})}),(0,r.jsx)("div",{className:"nav-next",children:(0,r.jsx)(a.default,{href:"/workshops/fintech",children:(0,r.jsxs)("a",{children:["Fintech ",(0,r.jsx)("i",{className:"bx bx-right-arrow-alt"})]})})})]})})]})})})})})}}])&&s(t.prototype,n),o&&s(t,o),i}(o.Component),v=n(8348);function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,o,a=O(u);function u(){return b(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(i.Z,{homePageUrl:"/",homePageText:"Home",categoryPageUrl:"/projects",categoryPageText:"Projects",activePageText:"Basics Of Photoshop"}),(0,r.jsx)(y,{}),(0,r.jsx)(v.Z,{})]})}}])&&m(t.prototype,n),o&&m(t,o),u}(o.Component)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=9087,e(e.s=t);var t}));var t=e.O();_N_E=t}]);