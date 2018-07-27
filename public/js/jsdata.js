!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var r=n(5),i=n(19),o=Object.prototype.toString;function a(t){return"[object Array]"===o.call(t)}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===o.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){var r=n(0),i=n(21),o={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n(7):void 0!==e&&(s=n(7)),s),transformRequest:[function(t,e){return i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(o)}),t.exports=u}).call(e,n(6))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,r=["Edge","Trident","Firefox"],i=0,o=0;o<r.length;o+=1)if(n&&navigator.userAgent.indexOf(r[o])>=0){i=1;break}var a=n&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},i))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function u(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function c(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function l(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=u(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/(auto|scroll)/.test(n+i+r)?t:l(c(t))}function f(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===u(e,"position")?f(e):e:t?t.ownerDocument.documentElement:document.documentElement}function p(t){return null!==t.parentNode?p(t.parentNode):t}function d(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,i=n?e:t,o=document.createRange();o.setStart(r,0),o.setEnd(i,0);var a,s,u=o.commonAncestorContainer;if(t!==u&&e!==u||r.contains(i))return"BODY"===(s=(a=u).nodeName)||"HTML"!==s&&f(a.firstElementChild)!==a?f(u):u;var c=p(t);return c.host?d(c.host,e):d(t,p(e).host)}function h(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var r=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||r)[e]}return t[e]}function v(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+r+"Width"],10)}var g=void 0,m=function(){return void 0===g&&(g=-1!==navigator.appVersion.indexOf("MSIE 10")),g};function y(t,e,n,r){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],m()?n["offset"+t]+r["margin"+("Height"===t?"Top":"Left")]+r["margin"+("Height"===t?"Bottom":"Right")]:0)}function _(){var t=document.body,e=document.documentElement,n=m()&&getComputedStyle(e);return{height:y("Height",t,e,n),width:y("Width",t,e,n)}}var b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),x=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function T(t){return C({},t,{right:t.left+t.width,bottom:t.top+t.height})}function E(t){var e={};if(m())try{e=t.getBoundingClientRect();var n=h(t,"top"),r=h(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}catch(t){}else e=t.getBoundingClientRect();var i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?_():{},a=o.width||t.clientWidth||i.right-i.left,s=o.height||t.clientHeight||i.bottom-i.top,c=t.offsetWidth-a,l=t.offsetHeight-s;if(c||l){var f=u(t);c-=v(f,"x"),l-=v(f,"y"),i.width-=c,i.height-=l}return T(i)}function A(t,e){var n=m(),r="HTML"===e.nodeName,i=E(t),o=E(e),a=l(t),s=u(e),c=parseFloat(s.borderTopWidth,10),f=parseFloat(s.borderLeftWidth,10),p=T({top:i.top-o.top-c,left:i.left-o.left-f,width:i.width,height:i.height});if(p.marginTop=0,p.marginLeft=0,!n&&r){var d=parseFloat(s.marginTop,10),v=parseFloat(s.marginLeft,10);p.top-=c-d,p.bottom-=c-d,p.left-=f-v,p.right-=f-v,p.marginTop=d,p.marginLeft=v}return(n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(e,"top"),i=h(e,"left"),o=n?-1:1;return t.top+=r*o,t.bottom+=r*o,t.left+=i*o,t.right+=i*o,t}(p,e)),p}function S(t,e,n,r){var i,o,a,s,f,p,v,g={top:0,left:0},m=d(t,e);if("viewport"===r)o=(i=m).ownerDocument.documentElement,a=A(i,o),s=Math.max(o.clientWidth,window.innerWidth||0),f=Math.max(o.clientHeight,window.innerHeight||0),p=h(o),v=h(o,"left"),g=T({top:p-a.top+a.marginTop,left:v-a.left+a.marginLeft,width:s,height:f});else{var y=void 0;"scrollParent"===r?"BODY"===(y=l(c(e))).nodeName&&(y=t.ownerDocument.documentElement):y="window"===r?t.ownerDocument.documentElement:r;var b=A(y,m);if("HTML"!==y.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===u(e,"position")||t(c(e)))}(m))g=b;else{var w=_(),x=w.height,C=w.width;g.top+=b.top-b.marginTop,g.bottom=x+b.top,g.left+=b.left-b.marginLeft,g.right=C+b.left}}return g.left+=n,g.top+=n,g.right-=n,g.bottom-=n,g}function k(t,e,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=S(n,r,o,i),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},u=Object.keys(s).map(function(t){return C({key:t},s[t],{area:(e=s[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=u.filter(function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight}),l=c.length>0?c[0].key:u[0].key,f=t.split("-")[1];return l+(f?"-"+f:"")}function O(t,e,n){return A(n,d(e,n))}function D(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),r=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+r,height:t.offsetHeight+n}}function I(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function N(t,e,n){n=n.split("-")[0];var r=D(t),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",u=o?"height":"width",c=o?"width":"height";return i[a]=e[a]+e[u]/2-r[u]/2,i[s]=n===s?e[s]-r[c]:e[I(s)],i}function j(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function L(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var r=j(t,function(t){return t[e]===n});return t.indexOf(r)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&s(n)&&(e.offsets.popper=T(e.offsets.popper),e.offsets.reference=T(e.offsets.reference),e=n(e,t))}),e}function $(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function R(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length-1;r++){var i=e[r],o=i?""+i+n:t;if(void 0!==document.body.style[o])return o}return null}function P(t){var e=t.ownerDocument;return e?e.defaultView:window}function M(t,e,n,r){n.updateBound=r,P(t).addEventListener("resize",n.updateBound,{passive:!0});var i=l(t);return function t(e,n,r,i){var o="BODY"===e.nodeName,a=o?e.ownerDocument.defaultView:e;a.addEventListener(n,r,{passive:!0}),o||t(l(a.parentNode),n,r,i),i.push(a)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function F(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,P(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function H(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function B(t,e){Object.keys(e).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&H(e[n])&&(r="px"),t.style[n]=e[n]+r})}function W(t,e,n){var r=j(t,function(t){return t.name===e}),i=!!r&&t.some(function(t){return t.name===n&&t.enabled&&t.order<r.order});if(!i){var o="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],U=q.slice(3);function z(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=U.indexOf(t),r=U.slice(n+1).concat(U.slice(0,n));return e?r.reverse():r}var V={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function K(t,e,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),a=t.split(/(\+|\-)/).map(function(t){return t.trim()}),s=a.indexOf(j(a,function(t){return-1!==t.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,c=-1!==s?[a.slice(0,s).concat([a[s].split(u)[0]]),[a[s].split(u)[1]].concat(a.slice(s+1))]:[a];return(c=c.map(function(t,r){var i=(1===r?!o:o)?"height":"width",a=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,r){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],a=i[2];if(!o)return t;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return T(s)[e]/100*o}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,i,e,n)})})).forEach(function(t,e){t.forEach(function(n,r){H(n)&&(i[e]+=n*("-"===t[r-1]?-1:1))})}),i}var Q={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var i=t.offsets,o=i.reference,a=i.popper,s=-1!==["bottom","top"].indexOf(n),u=s?"left":"top",c=s?"width":"height",l={start:x({},u,o[u]),end:x({},u,o[u]+o[c]-a[c])};t.offsets.popper=C({},a,l[r])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,r=t.placement,i=t.offsets,o=i.popper,a=i.reference,s=r.split("-")[0],u=void 0;return u=H(+n)?[+n,0]:K(n,o,a,s),"left"===s?(o.top+=u[0],o.left-=u[1]):"right"===s?(o.top+=u[0],o.left+=u[1]):"top"===s?(o.left+=u[0],o.top-=u[1]):"bottom"===s&&(o.left+=u[0],o.top+=u[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||f(t.instance.popper);t.instance.reference===n&&(n=f(n));var r=S(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=r;var i=e.priority,o=t.offsets.popper,a={primary:function(t){var n=o[t];return o[t]<r[t]&&!e.escapeWithReference&&(n=Math.max(o[t],r[t])),x({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=o[n];return o[t]>r[t]&&!e.escapeWithReference&&(i=Math.min(o[n],r[t]-("right"===t?o.width:o.height))),x({},n,i)}};return i.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=C({},o,a[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,r=e.reference,i=t.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(i),s=a?"right":"bottom",u=a?"left":"top",c=a?"width":"height";return n[s]<o(r[u])&&(t.offsets.popper[u]=o(r[u])-n[c]),n[u]>o(r[s])&&(t.offsets.popper[u]=o(r[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!W(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"==typeof r){if(!(r=t.instance.popper.querySelector(r)))return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,a=o.popper,s=o.reference,c=-1!==["left","right"].indexOf(i),l=c?"height":"width",f=c?"Top":"Left",p=f.toLowerCase(),d=c?"left":"top",h=c?"bottom":"right",v=D(r)[l];s[h]-v<a[p]&&(t.offsets.popper[p]-=a[p]-(s[h]-v)),s[p]+v>a[h]&&(t.offsets.popper[p]+=s[p]+v-a[h]),t.offsets.popper=T(t.offsets.popper);var g=s[p]+s[l]/2-v/2,m=u(t.instance.popper),y=parseFloat(m["margin"+f],10),_=parseFloat(m["border"+f+"Width"],10),b=g-t.offsets.popper[p]-y-_;return b=Math.max(Math.min(a[l]-v,b),0),t.arrowElement=r,t.offsets.arrow=(x(n={},p,Math.round(b)),x(n,d,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if($(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=S(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),r=t.placement.split("-")[0],i=I(r),o=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case V.FLIP:a=[r,i];break;case V.CLOCKWISE:a=z(r);break;case V.COUNTERCLOCKWISE:a=z(r,!0);break;default:a=e.behavior}return a.forEach(function(s,u){if(r!==s||a.length===u+1)return t;r=t.placement.split("-")[0],i=I(r);var c,l=t.offsets.popper,f=t.offsets.reference,p=Math.floor,d="left"===r&&p(l.right)>p(f.left)||"right"===r&&p(l.left)<p(f.right)||"top"===r&&p(l.bottom)>p(f.top)||"bottom"===r&&p(l.top)<p(f.bottom),h=p(l.left)<p(n.left),v=p(l.right)>p(n.right),g=p(l.top)<p(n.top),m=p(l.bottom)>p(n.bottom),y="left"===r&&h||"right"===r&&v||"top"===r&&g||"bottom"===r&&m,_=-1!==["top","bottom"].indexOf(r),b=!!e.flipVariations&&(_&&"start"===o&&h||_&&"end"===o&&v||!_&&"start"===o&&g||!_&&"end"===o&&m);(d||y||b)&&(t.flipped=!0,(d||y)&&(r=a[u+1]),b&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=r+(o?"-"+o:""),t.offsets.popper=C({},t.offsets.popper,N(t.instance.popper,t.offsets.reference,t.placement)),t=L(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,i=r.popper,o=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return i[a?"left":"top"]=o[n]-(s?i[a?"width":"height"]:0),t.placement=I(e),t.offsets.popper=T(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!W(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=j(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,r=e.y,i=t.offsets.popper,o=j(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==o?o:e.gpuAcceleration,s=E(f(t.instance.popper)),u={position:i.position},c={left:Math.floor(i.left),top:Math.floor(i.top),bottom:Math.floor(i.bottom),right:Math.floor(i.right)},l="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=R("transform"),h=void 0,v=void 0;if(v="bottom"===l?-s.height+c.bottom:c.top,h="right"===p?-s.width+c.right:c.left,a&&d)u[d]="translate3d("+h+"px, "+v+"px, 0)",u[l]=0,u[p]=0,u.willChange="transform";else{var g="bottom"===l?-1:1,m="right"===p?-1:1;u[l]=v*g,u[p]=h*m,u.willChange=l+", "+p}var y={"x-placement":t.placement};return t.attributes=C({},y,t.attributes),t.styles=C({},u,t.styles),t.arrowStyles=C({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return B(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&B(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,r,i){var o=O(0,e,t),a=k(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),B(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},G=function(){function t(e,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=a(this.update.bind(this)),this.options=C({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(C({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=C({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return C({name:t},r.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return w(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=O(this.state,this.popper,this.reference),t.placement=k(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=N(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=L(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,$(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[R("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=M(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return F.call(this)}}]),t}();G.Utils=("undefined"!=typeof window?window:t).PopperUtils,G.placements=q,G.Defaults=Q,e.default=G}.call(e,n(1))},function(t,e,n){var r;!function(e,n){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,i){"use strict";var o=[],a=n.document,s=Object.getPrototypeOf,u=o.slice,c=o.concat,l=o.push,f=o.indexOf,p={},d=p.toString,h=p.hasOwnProperty,v=h.toString,g=v.call(Object),m={};function y(t,e){var n=(e=e||a).createElement("script");n.text=t,e.head.appendChild(n).parentNode.removeChild(n)}var _=function(t,e){return new _.fn.init(t,e)},b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^-ms-/,x=/-([a-z])/g,C=function(t,e){return e.toUpperCase()};function T(t){var e=!!t&&"length"in t&&t.length,n=_.type(t);return"function"!==n&&!_.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}_.fn=_.prototype={jquery:"3.2.1",constructor:_,length:0,toArray:function(){return u.call(this)},get:function(t){return null==t?u.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=_.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return _.each(this,t)},map:function(t){return this.pushStack(_.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},_.extend=_.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||_.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(t=arguments[s]))for(e in t)n=a[e],a!==(r=t[e])&&(c&&r&&(_.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&_.isPlainObject(n)?n:{},a[e]=_.extend(c,o,r)):void 0!==r&&(a[e]=r));return a},_.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===_.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=_.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==d.call(t))&&(!(e=s(t))||"function"==typeof(n=h.call(e,"constructor")&&e.constructor)&&v.call(n)===g)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?p[d.call(t)]||"object":typeof t},globalEval:function(t){y(t)},camelCase:function(t){return t.replace(w,"ms-").replace(x,C)},each:function(t,e){var n,r=0;if(T(t))for(n=t.length;r<n&&!1!==e.call(t[r],r,t[r]);r++);else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},trim:function(t){return null==t?"":(t+"").replace(b,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(T(Object(t))?_.merge(n,"string"==typeof t?[t]:t):l.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:f.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r=[],i=0,o=t.length,a=!n;i<o;i++)!e(t[i],i)!==a&&r.push(t[i]);return r},map:function(t,e,n){var r,i,o=0,a=[];if(T(t))for(r=t.length;o<r;o++)null!=(i=e(t[o],o,n))&&a.push(i);else for(o in t)null!=(i=e(t[o],o,n))&&a.push(i);return c.apply([],a)},guid:1,proxy:function(t,e){var n,r,i;if("string"==typeof e&&(n=t[e],e=t,t=n),_.isFunction(t))return r=u.call(arguments,2),(i=function(){return t.apply(e||this,r.concat(u.call(arguments)))}).guid=t.guid=t.guid||_.guid++,i},now:Date.now,support:m}),"function"==typeof Symbol&&(_.fn[Symbol.iterator]=o[Symbol.iterator]),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){p["[object "+e+"]"]=e.toLowerCase()});var E=function(t){var e,n,r,i,o,a,s,u,c,l,f,p,d,h,v,g,m,y,_,b="sizzle"+1*new Date,w=t.document,x=0,C=0,T=at(),E=at(),A=at(),S=function(t,e){return t===e&&(f=!0),0},k={}.hasOwnProperty,O=[],D=O.pop,I=O.push,N=O.push,j=O.slice,L=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},$="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+R+"*("+P+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+R+"*\\]",F=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",H=new RegExp(R+"+","g"),B=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),W=new RegExp("^"+R+"*,"+R+"*"),q=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),z=new RegExp(F),V=new RegExp("^"+P+"$"),K={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+$+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),tt=function(t,e,n){var r="0x"+e-65536;return r!=r||n?e:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},rt=function(){p()},it=yt(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{N.apply(O=j.call(w.childNodes),w.childNodes),O[w.childNodes.length].nodeType}catch(t){N={apply:O.length?function(t,e){I.apply(t,j.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}function ot(t,e,r,i){var o,s,c,l,f,h,m,y=e&&e.ownerDocument,x=e?e.nodeType:9;if(r=r||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return r;if(!i&&((e?e.ownerDocument||e:w)!==d&&p(e),e=e||d,v)){if(11!==x&&(f=X.exec(t)))if(o=f[1]){if(9===x){if(!(c=e.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(y&&(c=y.getElementById(o))&&_(e,c)&&c.id===o)return r.push(c),r}else{if(f[2])return N.apply(r,e.getElementsByTagName(t)),r;if((o=f[3])&&n.getElementsByClassName&&e.getElementsByClassName)return N.apply(r,e.getElementsByClassName(o)),r}if(n.qsa&&!A[t+" "]&&(!g||!g.test(t))){if(1!==x)y=e,m=t;else if("object"!==e.nodeName.toLowerCase()){for((l=e.getAttribute("id"))?l=l.replace(et,nt):e.setAttribute("id",l=b),s=(h=a(t)).length;s--;)h[s]="#"+l+" "+mt(h[s]);m=h.join(","),y=J.test(t)&&vt(e.parentNode)||e}if(m)try{return N.apply(r,y.querySelectorAll(m)),r}catch(t){}finally{l===b&&e.removeAttribute("id")}}}return u(t.replace(B,"$1"),e,r,i)}function at(){var t=[];return function e(n,i){return t.push(n+" ")>r.cacheLength&&delete e[t.shift()],e[n+" "]=i}}function st(t){return t[b]=!0,t}function ut(t){var e=d.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ct(t,e){for(var n=t.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=e}function lt(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ft(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function dt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&it(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ht(t){return st(function(e){return e=+e,st(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function vt(t){return t&&void 0!==t.getElementsByTagName&&t}n=ot.support={},o=ot.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},p=ot.setDocument=function(t){var e,i,a=t?t.ownerDocument||t:w;return a!==d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,v=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",rt,!1):i.attachEvent&&i.attachEvent("onunload",rt)),n.attributes=ut(function(t){return t.className="i",!t.getAttribute("className")}),n.getElementsByTagName=ut(function(t){return t.appendChild(d.createComment("")),!t.getElementsByTagName("*").length}),n.getElementsByClassName=Y.test(d.getElementsByClassName),n.getById=ut(function(t){return h.appendChild(t).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(t){var e=t.replace(Z,tt);return function(t){return t.getAttribute("id")===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&v){var n=e.getElementById(t);return n?[n]:[]}}):(r.filter.ID=function(t){var e=t.replace(Z,tt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&v){var n,r,i,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(i=e.getElementsByName(t),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&v)return e.getElementsByClassName(t)},m=[],g=[],(n.qsa=Y.test(d.querySelectorAll))&&(ut(function(t){h.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+R+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+R+"*(?:value|"+$+")"),t.querySelectorAll("[id~="+b+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")}),ut(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=d.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+R+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Y.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ut(function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),m.push("!=",F)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),e=Y.test(h.compareDocumentPosition),_=e||Y.test(h.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},S=e?function(t,e){if(t===e)return f=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r||(1&(r=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===r?t===d||t.ownerDocument===w&&_(w,t)?-1:e===d||e.ownerDocument===w&&_(w,e)?1:l?L(l,t)-L(l,e):0:4&r?-1:1)}:function(t,e){if(t===e)return f=!0,0;var n,r=0,i=t.parentNode,o=e.parentNode,a=[t],s=[e];if(!i||!o)return t===d?-1:e===d?1:i?-1:o?1:l?L(l,t)-L(l,e):0;if(i===o)return lt(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?lt(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},ot.matches=function(t,e){return ot(t,null,null,e)},ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==d&&p(t),e=e.replace(U,"='$1']"),n.matchesSelector&&v&&!A[e+" "]&&(!m||!m.test(e))&&(!g||!g.test(e)))try{var r=y.call(t,e);if(r||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(t){}return ot(e,d,null,[t]).length>0},ot.contains=function(t,e){return(t.ownerDocument||t)!==d&&p(t),_(t,e)},ot.attr=function(t,e){(t.ownerDocument||t)!==d&&p(t);var i=r.attrHandle[e.toLowerCase()],o=i&&k.call(r.attrHandle,e.toLowerCase())?i(t,e,!v):void 0;return void 0!==o?o:n.attributes||!v?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},ot.escape=function(t){return(t+"").replace(et,nt)},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var e,r=[],i=0,o=0;if(f=!n.detectDuplicates,l=!n.sortStable&&t.slice(0),t.sort(S),f){for(;e=t[o++];)e===t[o]&&(i=r.push(o));for(;i--;)t.splice(r[i],1)}return l=null,t},i=ot.getText=function(t){var e,n="",r=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=i(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[r++];)n+=i(e);return n},(r=ot.selectors={cacheLength:50,createPseudo:st,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Z,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Z,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return K.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&z.test(n)&&(e=a(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Z,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=T[t+" "];return e||(e=new RegExp("(^|"+R+")"+t+"("+R+"|$)"))&&T(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,n){return function(r){var i=ot.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(H," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var c,l,f,p,d,h,v=o!==a?"nextSibling":"previousSibling",g=e.parentNode,m=s&&e.nodeName.toLowerCase(),y=!u&&!s,_=!1;if(g){if(o){for(;v;){for(p=e;p=p[v];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(_=(d=(c=(l=(f=(p=g)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]||[])[0]===x&&c[1])&&c[2],p=d&&g.childNodes[d];p=++d&&p&&p[v]||(_=d=0)||h.pop();)if(1===p.nodeType&&++_&&p===e){l[t]=[x,d,_];break}}else if(y&&(_=d=(c=(l=(f=(p=e)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]||[])[0]===x&&c[1]),!1===_)for(;(p=++d&&p&&p[v]||(_=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++_||(y&&((l=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]=[x,_]),p!==e)););return(_-=i)===r||_%r==0&&_/r>=0}}},PSEUDO:function(t,e){var n,i=r.pseudos[t]||r.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return i[b]?i(e):i.length>1?(n=[t,t,"",e],r.setFilters.hasOwnProperty(t.toLowerCase())?st(function(t,n){for(var r,o=i(t,e),a=o.length;a--;)t[r=L(t,o[a])]=!(n[r]=o[a])}):function(t){return i(t,0,n)}):i}},pseudos:{not:st(function(t){var e=[],n=[],r=s(t.replace(B,"$1"));return r[b]?st(function(t,e,n,i){for(var o,a=r(t,null,i,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))}):function(t,i,o){return e[0]=t,r(e,null,o,n),e[0]=null,!n.pop()}}),has:st(function(t){return function(e){return ot(t,e).length>0}}),contains:st(function(t){return t=t.replace(Z,tt),function(e){return(e.textContent||e.innerText||i(e)).indexOf(t)>-1}}),lang:st(function(t){return V.test(t||"")||ot.error("unsupported lang: "+t),t=t.replace(Z,tt).toLowerCase(),function(e){var n;do{if(n=v?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===h},focus:function(t){return t===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:dt(!1),disabled:dt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!r.pseudos.empty(t)},header:function(t){return G.test(t.nodeName)},input:function(t){return Q.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ht(function(){return[0]}),last:ht(function(t,e){return[e-1]}),eq:ht(function(t,e,n){return[n<0?n+e:n]}),even:ht(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:ht(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:ht(function(t,e,n){for(var r=n<0?n+e:n;--r>=0;)t.push(r);return t}),gt:ht(function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t})}}).pseudos.nth=r.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=ft(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=pt(e);function gt(){}function mt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function yt(t,e,n){var r=e.dir,i=e.next,o=i||r,a=n&&"parentNode"===o,s=C++;return e.first?function(e,n,i){for(;e=e[r];)if(1===e.nodeType||a)return t(e,n,i);return!1}:function(e,n,u){var c,l,f,p=[x,s];if(u){for(;e=e[r];)if((1===e.nodeType||a)&&t(e,n,u))return!0}else for(;e=e[r];)if(1===e.nodeType||a)if(l=(f=e[b]||(e[b]={}))[e.uniqueID]||(f[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=l[o])&&c[0]===x&&c[1]===s)return p[2]=c[2];if(l[o]=p,p[2]=t(e,n,u))return!0}return!1}}function _t(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function bt(t,e,n,r,i){for(var o,a=[],s=0,u=t.length,c=null!=e;s<u;s++)(o=t[s])&&(n&&!n(o,r,i)||(a.push(o),c&&e.push(s)));return a}function wt(t,e,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),st(function(o,a,s,u){var c,l,f,p=[],d=[],h=a.length,v=o||function(t,e,n){for(var r=0,i=e.length;r<i;r++)ot(t,e[r],n);return n}(e||"*",s.nodeType?[s]:s,[]),g=!t||!o&&e?v:bt(v,p,t,s,u),m=n?i||(o?t:h||r)?[]:a:g;if(n&&n(g,m,s,u),r)for(c=bt(m,d),r(c,[],s,u),l=c.length;l--;)(f=c[l])&&(m[d[l]]=!(g[d[l]]=f));if(o){if(i||t){if(i){for(c=[],l=m.length;l--;)(f=m[l])&&c.push(g[l]=f);i(null,m=[],c,u)}for(l=m.length;l--;)(f=m[l])&&(c=i?L(o,f):p[l])>-1&&(o[c]=!(a[c]=f))}}else m=bt(m===a?m.splice(h,m.length):m),i?i(null,a,m,u):N.apply(a,m)})}function xt(t){for(var e,n,i,o=t.length,a=r.relative[t[0].type],s=a||r.relative[" "],u=a?1:0,l=yt(function(t){return t===e},s,!0),f=yt(function(t){return L(e,t)>-1},s,!0),p=[function(t,n,r){var i=!a&&(r||n!==c)||((e=n).nodeType?l(t,n,r):f(t,n,r));return e=null,i}];u<o;u++)if(n=r.relative[t[u].type])p=[yt(_t(p),n)];else{if((n=r.filter[t[u].type].apply(null,t[u].matches))[b]){for(i=++u;i<o&&!r.relative[t[i].type];i++);return wt(u>1&&_t(p),u>1&&mt(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&xt(t.slice(u,i)),i<o&&xt(t=t.slice(i)),i<o&&mt(t))}p.push(n)}return _t(p)}return gt.prototype=r.filters=r.pseudos,r.setFilters=new gt,a=ot.tokenize=function(t,e){var n,i,o,a,s,u,c,l=E[t+" "];if(l)return e?0:l.slice(0);for(s=t,u=[],c=r.preFilter;s;){n&&!(i=W.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=q.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=K[a].exec(s))||c[a]&&!(i=c[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return e?s.length:s?ot.error(t):E(t,u).slice(0)},s=ot.compile=function(t,e){var n,i,o,s,u,l,f=[],h=[],g=A[t+" "];if(!g){for(e||(e=a(t)),n=e.length;n--;)(g=xt(e[n]))[b]?f.push(g):h.push(g);(g=A(t,(i=h,s=(o=f).length>0,u=i.length>0,l=function(t,e,n,a,l){var f,h,g,m=0,y="0",_=t&&[],b=[],w=c,C=t||u&&r.find.TAG("*",l),T=x+=null==w?1:Math.random()||.1,E=C.length;for(l&&(c=e===d||e||l);y!==E&&null!=(f=C[y]);y++){if(u&&f){for(h=0,e||f.ownerDocument===d||(p(f),n=!v);g=i[h++];)if(g(f,e||d,n)){a.push(f);break}l&&(x=T)}s&&((f=!g&&f)&&m--,t&&_.push(f))}if(m+=y,s&&y!==m){for(h=0;g=o[h++];)g(_,b,e,n);if(t){if(m>0)for(;y--;)_[y]||b[y]||(b[y]=D.call(a));b=bt(b)}N.apply(a,b),l&&!t&&b.length>0&&m+o.length>1&&ot.uniqueSort(a)}return l&&(x=T,c=w),_},s?st(l):l))).selector=t}return g},u=ot.select=function(t,e,n,i){var o,u,c,l,f,p="function"==typeof t&&t,d=!i&&a(t=p.selector||t);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===e.nodeType&&v&&r.relative[u[1].type]){if(!(e=(r.find.ID(c.matches[0].replace(Z,tt),e)||[])[0]))return n;p&&(e=e.parentNode),t=t.slice(u.shift().value.length)}for(o=K.needsContext.test(t)?0:u.length;o--&&(c=u[o],!r.relative[l=c.type]);)if((f=r.find[l])&&(i=f(c.matches[0].replace(Z,tt),J.test(u[0].type)&&vt(e.parentNode)||e))){if(u.splice(o,1),!(t=i.length&&mt(u)))return N.apply(n,i),n;break}}return(p||s(t,d))(i,e,!v,n,!e||J.test(t)&&vt(e.parentNode)||e),n},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ut(function(t){return 1&t.compareDocumentPosition(d.createElement("fieldset"))}),ut(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ct("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),n.attributes&&ut(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ct("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),ut(function(t){return null==t.getAttribute("disabled")})||ct($,function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),ot}(n);_.find=E,_.expr=E.selectors,_.expr[":"]=_.expr.pseudos,_.uniqueSort=_.unique=E.uniqueSort,_.text=E.getText,_.isXMLDoc=E.isXML,_.contains=E.contains,_.escapeSelector=E.escape;var A=function(t,e,n){for(var r=[],i=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(i&&_(t).is(n))break;r.push(t)}return r},S=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},k=_.expr.match.needsContext;function O(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,I=/^.[^:#\[\.,]*$/;function N(t,e,n){return _.isFunction(e)?_.grep(t,function(t,r){return!!e.call(t,r,t)!==n}):e.nodeType?_.grep(t,function(t){return t===e!==n}):"string"!=typeof e?_.grep(t,function(t){return f.call(e,t)>-1!==n}):I.test(e)?_.filter(e,t,n):(e=_.filter(e,t),_.grep(t,function(t){return f.call(e,t)>-1!==n&&1===t.nodeType}))}_.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?_.find.matchesSelector(r,t)?[r]:[]:_.find.matches(t,_.grep(e,function(t){return 1===t.nodeType}))},_.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!=typeof t)return this.pushStack(_(t).filter(function(){for(e=0;e<r;e++)if(_.contains(i[e],this))return!0}));for(n=this.pushStack([]),e=0;e<r;e++)_.find(t,i[e],n);return r>1?_.uniqueSort(n):n},filter:function(t){return this.pushStack(N(this,t||[],!1))},not:function(t){return this.pushStack(N(this,t||[],!0))},is:function(t){return!!N(this,"string"==typeof t&&k.test(t)?_(t):t||[],!1).length}});var j,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||j,"string"==typeof t){if(!(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:L.exec(t))||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof _?e[0]:e,_.merge(this,_.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:a,!0)),D.test(r[1])&&_.isPlainObject(e))for(r in e)_.isFunction(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return(i=a.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_.isFunction(t)?void 0!==n.ready?n.ready(t):t(_):_.makeArray(t,this)}).prototype=_.fn,j=_(a);var $=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function P(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}_.fn.extend({has:function(t){var e=_(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(_.contains(this,e[t]))return!0})},closest:function(t,e){var n,r=0,i=this.length,o=[],a="string"!=typeof t&&_(t);if(!k.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&_.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?_.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?f.call(_(t),this[0]):f.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(_.uniqueSort(_.merge(this.get(),_(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),_.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return A(t,"parentNode")},parentsUntil:function(t,e,n){return A(t,"parentNode",n)},next:function(t){return P(t,"nextSibling")},prev:function(t){return P(t,"previousSibling")},nextAll:function(t){return A(t,"nextSibling")},prevAll:function(t){return A(t,"previousSibling")},nextUntil:function(t,e,n){return A(t,"nextSibling",n)},prevUntil:function(t,e,n){return A(t,"previousSibling",n)},siblings:function(t){return S((t.parentNode||{}).firstChild,t)},children:function(t){return S(t.firstChild)},contents:function(t){return O(t,"iframe")?t.contentDocument:(O(t,"template")&&(t=t.content||t),_.merge([],t.childNodes))}},function(t,e){_.fn[t]=function(n,r){var i=_.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=_.filter(r,i)),this.length>1&&(R[t]||_.uniqueSort(i),$.test(t)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function F(t){return t}function H(t){throw t}function B(t,e,n,r){var i;try{t&&_.isFunction(i=t.promise)?i.call(t).done(e).fail(n):t&&_.isFunction(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}_.Callbacks=function(t){var e,n;t="string"==typeof t?(e=t,n={},_.each(e.match(M)||[],function(t,e){n[e]=!0}),n):_.extend({},t);var r,i,o,a,s=[],u=[],c=-1,l=function(){for(a=a||t.once,o=r=!0;u.length;c=-1)for(i=u.shift();++c<s.length;)!1===s[c].apply(i[0],i[1])&&t.stopOnFalse&&(c=s.length,i=!1);t.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(c=s.length-1,u.push(i)),function e(n){_.each(n,function(n,r){_.isFunction(r)?t.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==_.type(r)&&e(r)})}(arguments),i&&!r&&l()),this},remove:function(){return _.each(arguments,function(t,e){for(var n;(n=_.inArray(e,s,n))>-1;)s.splice(n,1),n<=c&&c--}),this},has:function(t){return t?_.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(t,e){return a||(e=[t,(e=e||[]).slice?e.slice():e],u.push(e),r||l()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},_.extend({Deferred:function(t){var e=[["notify","progress",_.Callbacks("memory"),_.Callbacks("memory"),2],["resolve","done",_.Callbacks("once memory"),_.Callbacks("once memory"),0,"resolved"],["reject","fail",_.Callbacks("once memory"),_.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return _.Deferred(function(n){_.each(e,function(e,r){var i=_.isFunction(t[r[4]])&&t[r[4]];o[r[1]](function(){var t=i&&i.apply(this,arguments);t&&_.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[t]:arguments)})}),t=null}).promise()},then:function(t,r,i){var o=0;function a(t,e,r,i){return function(){var s=this,u=arguments,c=function(){var n,c;if(!(t<o)){if((n=r.apply(s,u))===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,_.isFunction(c)?i?c.call(n,a(o,e,F,i),a(o,e,H,i)):(o++,c.call(n,a(o,e,F,i),a(o,e,H,i),a(o,e,F,e.notifyWith))):(r!==F&&(s=void 0,u=[n]),(i||e.resolveWith)(s,u))}},l=i?c:function(){try{c()}catch(n){_.Deferred.exceptionHook&&_.Deferred.exceptionHook(n,l.stackTrace),t+1>=o&&(r!==H&&(s=void 0,u=[n]),e.rejectWith(s,u))}};t?l():(_.Deferred.getStackHook&&(l.stackTrace=_.Deferred.getStackHook()),n.setTimeout(l))}}return _.Deferred(function(n){e[0][3].add(a(0,n,_.isFunction(i)?i:F,n.notifyWith)),e[1][3].add(a(0,n,_.isFunction(t)?t:F)),e[2][3].add(a(0,n,_.isFunction(r)?r:H))}).promise()},promise:function(t){return null!=t?_.extend(t,i):i}},o={};return _.each(e,function(t,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add(function(){r=s},e[3-t][2].disable,e[0][2].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,n=e,r=Array(n),i=u.call(arguments),o=_.Deferred(),a=function(t){return function(n){r[t]=this,i[t]=arguments.length>1?u.call(arguments):n,--e||o.resolveWith(r,i)}};if(e<=1&&(B(t,o.done(a(n)).resolve,o.reject,!e),"pending"===o.state()||_.isFunction(i[n]&&i[n].then)))return o.then();for(;n--;)B(i[n],a(n),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&W.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},_.readyException=function(t){n.setTimeout(function(){throw t})};var q=_.Deferred();function U(){a.removeEventListener("DOMContentLoaded",U),n.removeEventListener("load",U),_.ready()}_.fn.ready=function(t){return q.then(t).catch(function(t){_.readyException(t)}),this},_.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--_.readyWait:_.isReady)||(_.isReady=!0,!0!==t&&--_.readyWait>0||q.resolveWith(a,[_]))}}),_.ready.then=q.then,"complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?n.setTimeout(_.ready):(a.addEventListener("DOMContentLoaded",U),n.addEventListener("load",U));var z=function(t,e,n,r,i,o,a){var s=0,u=t.length,c=null==n;if("object"===_.type(n)){i=!0;for(s in n)z(t,e,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,_.isFunction(r)||(a=!0),c&&(a?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(_(t),n)})),e))for(;s<u;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:c?e.call(t):u?e(t[0],n):o},V=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function K(){this.expando=_.expando+K.uid++}K.uid=1,K.prototype={cache:function(t){var e=t[this.expando];return e||(e={},V(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"==typeof e)i[_.camelCase(e)]=n;else for(r in e)i[_.camelCase(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][_.camelCase(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){n=(e=Array.isArray(e)?e.map(_.camelCase):(e=_.camelCase(e))in r?[e]:e.match(M)||[]).length;for(;n--;)delete r[e[n]]}(void 0===e||_.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!_.isEmptyObject(e)}};var Q=new K,G=new K,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,X=/[A-Z]/g;function J(t,e,n){var r,i;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(X,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:Y.test(i)?JSON.parse(i):i)}catch(t){}G.set(t,e,n)}else n=void 0;return n}_.extend({hasData:function(t){return G.hasData(t)||Q.hasData(t)},data:function(t,e,n){return G.access(t,e,n)},removeData:function(t,e){G.remove(t,e)},_data:function(t,e,n){return Q.access(t,e,n)},_removeData:function(t,e){Q.remove(t,e)}}),_.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(i=G.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=_.camelCase(r.slice(5)),J(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof t?this.each(function(){G.set(this,t)}):z(this,function(e){var n;if(o&&void 0===e)return void 0!==(n=G.get(o,t))?n:void 0!==(n=J(o,t))?n:void 0;this.each(function(){G.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){G.remove(this,t)})}}),_.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=Q.get(t,e),n&&(!r||Array.isArray(n)?r=Q.access(t,e,_.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=_.queue(t,e),r=n.length,i=n.shift(),o=_._queueHooks(t,e);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,function(){_.dequeue(t,e)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Q.get(t,n)||Q.access(t,n,{empty:_.Callbacks("once memory").add(function(){Q.remove(t,[e+"queue",n])})})}}),_.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?_.queue(this[0],t):void 0===e?this:this.each(function(){var n=_.queue(this,t,e);_._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&_.dequeue(this,t)})},dequeue:function(t){return this.each(function(){_.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=_.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(n=Q.get(o[a],t+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var Z=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,tt=new RegExp("^(?:([+-])=|)("+Z+")([a-z%]*)$","i"),et=["Top","Right","Bottom","Left"],nt=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&_.contains(t.ownerDocument,t)&&"none"===_.css(t,"display")},rt=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i};function it(t,e,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return _.css(t,e,"")},u=s(),c=n&&n[3]||(_.cssNumber[e]?"":"px"),l=(_.cssNumber[e]||"px"!==c&&+u)&&tt.exec(_.css(t,e));if(l&&l[3]!==c){c=c||l[3],n=n||[],l=+u||1;do{l/=o=o||".5",_.style(t,e,l+c)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var ot={};function at(t,e){for(var n,r,i,o,a,s,u,c=[],l=0,f=t.length;l<f;l++)(r=t[l]).style&&(n=r.style.display,e?("none"===n&&(c[l]=Q.get(r,"display")||null,c[l]||(r.style.display="")),""===r.style.display&&nt(r)&&(c[l]=(o=void 0,a=void 0,void 0,u=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ot[s])||(o=a.body.appendChild(a.createElement(s)),u=_.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ot[s]=u,u)))):"none"!==n&&(c[l]="none",Q.set(r,"display",n)));for(l=0;l<f;l++)null!=c[l]&&(t[l].style.display=c[l]);return t}_.fn.extend({show:function(){return at(this,!0)},hide:function(){return at(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){nt(this)?_(this).show():_(this).hide()})}});var st=/^(?:checkbox|radio)$/i,ut=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ct=/^$|\/(?:java|ecma)script/i,lt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ft(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&O(t,e)?_.merge([t],n):n}function pt(t,e){for(var n=0,r=t.length;n<r;n++)Q.set(t[n],"globalEval",!e||Q.get(e[n],"globalEval"))}lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.thead,lt.th=lt.td;var dt,ht,vt=/<|&#?\w+;/;function gt(t,e,n,r,i){for(var o,a,s,u,c,l,f=e.createDocumentFragment(),p=[],d=0,h=t.length;d<h;d++)if((o=t[d])||0===o)if("object"===_.type(o))_.merge(p,o.nodeType?[o]:o);else if(vt.test(o)){for(a=a||f.appendChild(e.createElement("div")),s=(ut.exec(o)||["",""])[1].toLowerCase(),u=lt[s]||lt._default,a.innerHTML=u[1]+_.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;_.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(e.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&_.inArray(o,r)>-1)i&&i.push(o);else if(c=_.contains(o.ownerDocument,o),a=ft(f.appendChild(o),"script"),c&&pt(a),n)for(l=0;o=a[l++];)ct.test(o.type||"")&&n.push(o);return f}dt=a.createDocumentFragment().appendChild(a.createElement("div")),(ht=a.createElement("input")).setAttribute("type","radio"),ht.setAttribute("checked","checked"),ht.setAttribute("name","t"),dt.appendChild(ht),m.checkClone=dt.cloneNode(!0).cloneNode(!0).lastChild.checked,dt.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!dt.cloneNode(!0).lastChild.defaultValue;var mt=a.documentElement,yt=/^key/,_t=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bt=/^([^.]*)(?:\.(.+)|)/;function wt(){return!0}function xt(){return!1}function Ct(){try{return a.activeElement}catch(t){}}function Tt(t,e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=void 0);for(s in e)Tt(t,s,n,r,e[s],o);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=xt;else if(!i)return t;return 1===o&&(a=i,(i=function(t){return _().off(t),a.apply(this,arguments)}).guid=a.guid||(a.guid=_.guid++)),t.each(function(){_.event.add(this,e,i,r,n)})}_.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Q.get(t);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&_.find.matchesSelector(mt,i),n.guid||(n.guid=_.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(e){return void 0!==_&&_.event.triggered!==e.type?_.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(M)||[""]).length;c--;)d=v=(s=bt.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=_.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=_.event.special[d]||{},l=_.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&_.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),_.event.global[d]=!0)},remove:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Q.hasData(t)&&Q.get(t);if(g&&(u=g.events)){for(c=(e=(e||"").match(M)||[""]).length;c--;)if(d=v=(s=bt.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=_.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(t,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(t,h,g.handle)||_.removeEvent(t,d,g.handle),delete u[d])}else for(d in u)_.event.remove(t,d+e[c],n,r,!0);_.isEmptyObject(u)&&Q.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,o,a,s=_.event.fix(t),u=new Array(arguments.length),c=(Q.get(this,"events")||{})[s.type]||[],l=_.event.special[s.type]||{};for(u[0]=s,e=1;e<arguments.length;e++)u[e]=arguments[e];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=_.event.handlers.call(this,s,c),e=0;(i=a[e++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((_.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(t,e){var n,r,i,o,a,s=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=e[n]).selector+" "]&&(a[i]=r.needsContext?_(i,this).index(c)>-1:_.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<e.length&&s.push({elem:c,handlers:e.slice(u)}),s},addProp:function(t,e){Object.defineProperty(_.Event.prototype,t,{enumerable:!0,configurable:!0,get:_.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[_.expando]?t:new _.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ct()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ct()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&O(this,"input"))return this.click(),!1},_default:function(t){return O(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},_.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},_.Event=function(t,e){if(!(this instanceof _.Event))return new _.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?wt:xt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&_.extend(this,e),this.timeStamp=t&&t.timeStamp||_.now(),this[_.expando]=!0},_.Event.prototype={constructor:_.Event,isDefaultPrevented:xt,isPropagationStopped:xt,isImmediatePropagationStopped:xt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=wt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=wt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=wt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},_.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&yt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&_t.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},_.event.addProp),_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){_.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=t.relatedTarget,i=t.handleObj;return r&&(r===this||_.contains(this,r))||(t.type=i.origType,n=i.handler.apply(this,arguments),t.type=e),n}}}),_.fn.extend({on:function(t,e,n,r){return Tt(this,t,e,n,r)},one:function(t,e,n,r){return Tt(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,_(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=xt),this.each(function(){_.event.remove(this,t,n,e)})}});var Et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,At=/<script|<style|<link/i,St=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^true\/(.*)/,Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Dt(t,e){return O(t,"table")&&O(11!==e.nodeType?e:e.firstChild,"tr")&&_(">tbody",t)[0]||t}function It(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Nt(t){var e=kt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function jt(t,e){var n,r,i,o,a,s,u,c;if(1===e.nodeType){if(Q.hasData(t)&&(o=Q.access(t),a=Q.set(e,o),c=o.events)){delete a.handle,a.events={};for(i in c)for(n=0,r=c[i].length;n<r;n++)_.event.add(e,i,c[i][n])}G.hasData(t)&&(s=G.access(t),u=_.extend({},s),G.set(e,u))}}function Lt(t,e,n,r){e=c.apply([],e);var i,o,a,s,u,l,f=0,p=t.length,d=p-1,h=e[0],v=_.isFunction(h);if(v||p>1&&"string"==typeof h&&!m.checkClone&&St.test(h))return t.each(function(i){var o=t.eq(i);v&&(e[0]=h.call(this,i,o.html())),Lt(o,e,n,r)});if(p&&(o=(i=gt(e,t[0].ownerDocument,!1,t,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=_.map(ft(i,"script"),It)).length;f<p;f++)u=i,f!==d&&(u=_.clone(u,!0,!0),s&&_.merge(a,ft(u,"script"))),n.call(t[f],u,f);if(s)for(l=a[a.length-1].ownerDocument,_.map(a,Nt),f=0;f<s;f++)u=a[f],ct.test(u.type||"")&&!Q.access(u,"globalEval")&&_.contains(l,u)&&(u.src?_._evalUrl&&_._evalUrl(u.src):y(u.textContent.replace(Ot,""),l))}return t}function $t(t,e,n){for(var r,i=e?_.filter(e,t):t,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||_.cleanData(ft(r)),r.parentNode&&(n&&_.contains(r.ownerDocument,r)&&pt(ft(r,"script")),r.parentNode.removeChild(r));return t}_.extend({htmlPrefilter:function(t){return t.replace(Et,"<$1></$2>")},clone:function(t,e,n){var r,i,o,a,s,u,c,l=t.cloneNode(!0),f=_.contains(t.ownerDocument,t);if(!(m.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||_.isXMLDoc(t)))for(a=ft(l),r=0,i=(o=ft(t)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(c=u.nodeName.toLowerCase())&&st.test(s.type)?u.checked=s.checked:"input"!==c&&"textarea"!==c||(u.defaultValue=s.defaultValue);if(e)if(n)for(o=o||ft(t),a=a||ft(l),r=0,i=o.length;r<i;r++)jt(o[r],a[r]);else jt(t,l);return(a=ft(l,"script")).length>0&&pt(a,!f&&ft(t,"script")),l},cleanData:function(t){for(var e,n,r,i=_.event.special,o=0;void 0!==(n=t[o]);o++)if(V(n)){if(e=n[Q.expando]){if(e.events)for(r in e.events)i[r]?_.event.remove(n,r):_.removeEvent(n,r,e.handle);n[Q.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),_.fn.extend({detach:function(t){return $t(this,t,!0)},remove:function(t){return $t(this,t)},text:function(t){return z(this,function(t){return void 0===t?_.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Lt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Dt(this,t).appendChild(t)})},prepend:function(){return Lt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Dt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(_.cleanData(ft(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return _.clone(this,t,e)})},html:function(t){return z(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!At.test(t)&&!lt[(ut.exec(t)||["",""])[1].toLowerCase()]){t=_.htmlPrefilter(t);try{for(;n<r;n++)1===(e=this[n]||{}).nodeType&&(_.cleanData(ft(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Lt(this,arguments,function(e){var n=this.parentNode;_.inArray(this,t)<0&&(_.cleanData(ft(this)),n&&n.replaceChild(e,this))},t)}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){_.fn[t]=function(t){for(var n,r=[],i=_(t),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),_(i[a])[e](n),l.apply(r,n.get());return this.pushStack(r)}});var Rt=/^margin/,Pt=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),Mt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)};function Ft(t,e,n){var r,i,o,a,s=t.style;return(n=n||Mt(t))&&(""!==(a=n.getPropertyValue(e)||n[e])||_.contains(t.ownerDocument,t)||(a=_.style(t,e)),!m.pixelMarginRight()&&Pt.test(a)&&Rt.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Ht(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){u.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",u.innerHTML="",mt.appendChild(s);var t=n.getComputedStyle(u);e="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,u.style.marginRight="50%",i="4px"===t.marginRight,mt.removeChild(s),u=null}}var e,r,i,o,s=a.createElement("div"),u=a.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(u),_.extend(m,{pixelPosition:function(){return t(),e},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}();var Bt=/^(none|table(?!-c[ea]).+)/,Wt=/^--/,qt={position:"absolute",visibility:"hidden",display:"block"},Ut={letterSpacing:"0",fontWeight:"400"},zt=["Webkit","Moz","ms"],Vt=a.createElement("div").style;function Kt(t){var e=_.cssProps[t];return e||(e=_.cssProps[t]=function(t){if(t in Vt)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=zt.length;n--;)if((t=zt[n]+e)in Vt)return t}(t)||t),e}function Qt(t,e,n){var r=tt.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function Gt(t,e,n,r,i){var o,a=0;for(o=n===(r?"border":"content")?4:"width"===e?1:0;o<4;o+=2)"margin"===n&&(a+=_.css(t,n+et[o],!0,i)),r?("content"===n&&(a-=_.css(t,"padding"+et[o],!0,i)),"margin"!==n&&(a-=_.css(t,"border"+et[o]+"Width",!0,i))):(a+=_.css(t,"padding"+et[o],!0,i),"padding"!==n&&(a+=_.css(t,"border"+et[o]+"Width",!0,i)));return a}function Yt(t,e,n){var r,i=Mt(t),o=Ft(t,e,i),a="border-box"===_.css(t,"boxSizing",!1,i);return Pt.test(o)?o:(r=a&&(m.boxSizingReliable()||o===t.style[e]),"auto"===o&&(o=t["offset"+e[0].toUpperCase()+e.slice(1)]),(o=parseFloat(o)||0)+Gt(t,e,n||(a?"border":"content"),r,i)+"px")}function Xt(t,e,n,r,i){return new Xt.prototype.init(t,e,n,r,i)}_.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Ft(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=_.camelCase(e),u=Wt.test(e),c=t.style;if(u||(e=Kt(s)),a=_.cssHooks[e]||_.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:c[e];"string"===(o=typeof n)&&(i=tt.exec(n))&&i[1]&&(n=it(t,e,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(_.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(n=a.set(t,n,r))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,o,a,s=_.camelCase(e);return Wt.test(e)||(e=Kt(s)),(a=_.cssHooks[e]||_.cssHooks[s])&&"get"in a&&(i=a.get(t,!0,n)),void 0===i&&(i=Ft(t,e,r)),"normal"===i&&e in Ut&&(i=Ut[e]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),_.each(["height","width"],function(t,e){_.cssHooks[e]={get:function(t,n,r){if(n)return!Bt.test(_.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Yt(t,e,r):rt(t,qt,function(){return Yt(t,e,r)})},set:function(t,n,r){var i,o=r&&Mt(t),a=r&&Gt(t,e,r,"border-box"===_.css(t,"boxSizing",!1,o),o);return a&&(i=tt.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=_.css(t,e)),Qt(0,n,a)}}}),_.cssHooks.marginLeft=Ht(m.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Ft(t,"marginLeft"))||t.getBoundingClientRect().left-rt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),_.each({margin:"",padding:"",border:"Width"},function(t,e){_.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[t+et[r]+e]=o[r]||o[r-2]||o[0];return i}},Rt.test(t)||(_.cssHooks[t+e].set=Qt)}),_.fn.extend({css:function(t,e){return z(this,function(t,e,n){var r,i,o={},a=0;if(Array.isArray(e)){for(r=Mt(t),i=e.length;a<i;a++)o[e[a]]=_.css(t,e[a],!1,r);return o}return void 0!==n?_.style(t,e,n):_.css(t,e)},t,e,arguments.length>1)}}),_.Tween=Xt,Xt.prototype={constructor:Xt,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||_.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(_.cssNumber[n]?"":"px")},cur:function(){var t=Xt.propHooks[this.prop];return t&&t.get?t.get(this):Xt.propHooks._default.get(this)},run:function(t){var e,n=Xt.propHooks[this.prop];return this.options.duration?this.pos=e=_.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Xt.propHooks._default.set(this),this}},Xt.prototype.init.prototype=Xt.prototype,Xt.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=_.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){_.fx.step[t.prop]?_.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[_.cssProps[t.prop]]&&!_.cssHooks[t.prop]?t.elem[t.prop]=t.now:_.style(t.elem,t.prop,t.now+t.unit)}}},Xt.propHooks.scrollTop=Xt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},_.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},_.fx=Xt.prototype.init,_.fx.step={};var Jt,Zt,te,ee,ne=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function ie(){Zt&&(!1===a.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ie):n.setTimeout(ie,_.fx.interval),_.fx.tick())}function oe(){return n.setTimeout(function(){Jt=void 0}),Jt=_.now()}function ae(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)i["margin"+(n=et[r])]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function se(t,e,n){for(var r,i=(ue.tweeners[e]||[]).concat(ue.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,e,t))return r}function ue(t,e,n){var r,i,o=0,a=ue.prefilters.length,s=_.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var e=Jt||oe(),n=Math.max(0,c.startTime+c.duration-e),r=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(r);return s.notifyWith(t,[c,r,n]),r<1&&a?n:(a||s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c]),!1)},c=s.promise({elem:t,props:_.extend({},e),opts:_.extend(!0,{specialEasing:{},easing:_.easing._default},n),originalProperties:e,originalOptions:n,startTime:Jt||oe(),duration:n.duration,tweens:[],createTween:function(e,n){var r=_.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c,e])):s.rejectWith(t,[c,e]),this}}),l=c.props;for(!function(t,e){var n,r,i,o,a;for(n in t)if(i=e[r=_.camelCase(n)],o=t[n],Array.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),(a=_.cssHooks[r])&&"expand"in a){o=a.expand(o),delete t[r];for(n in o)n in t||(t[n]=o[n],e[n]=i)}else e[r]=i}(l,c.opts.specialEasing);o<a;o++)if(r=ue.prefilters[o].call(c,t,l,c.opts))return _.isFunction(r.stop)&&(_._queueHooks(c.elem,c.opts.queue).stop=_.proxy(r.stop,r)),r;return _.map(l,se,c),_.isFunction(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),_.fx.timer(_.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}_.Animation=_.extend(ue,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return it(n.elem,t,tt.exec(e),n),n}]},tweener:function(t,e){_.isFunction(t)?(e=t,t=["*"]):t=t.match(M);for(var n,r=0,i=t.length;r<i;r++)n=t[r],ue.tweeners[n]=ue.tweeners[n]||[],ue.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var r,i,o,a,s,u,c,l,f="width"in e||"height"in e,p=this,d={},h=t.style,v=t.nodeType&&nt(t),g=Q.get(t,"fxshow");n.queue||(null==(a=_._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,_.queue(t,"fx").length||a.empty.fire()})}));for(r in e)if(i=e[r],ne.test(i)){if(delete e[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;v=!0}d[r]=g&&g[r]||_.style(t,r)}if((u=!_.isEmptyObject(e))||!_.isEmptyObject(d)){f&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=g&&g.display)&&(c=Q.get(t,"display")),"none"===(l=_.css(t,"display"))&&(c?l=c:(at([t],!0),c=t.style.display||c,l=_.css(t,"display"),at([t]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===_.css(t,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(g?"hidden"in g&&(v=g.hidden):g=Q.access(t,"fxshow",{display:c}),o&&(g.hidden=!v),v&&at([t],!0),p.done(function(){v||at([t]),Q.remove(t,"fxshow");for(r in d)_.style(t,r,d[r])})),u=se(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,u.start=0))}}],prefilter:function(t,e){e?ue.prefilters.unshift(t):ue.prefilters.push(t)}}),_.speed=function(t,e,n){var r=t&&"object"==typeof t?_.extend({},t):{complete:n||!n&&e||_.isFunction(t)&&t,duration:t,easing:n&&e||e&&!_.isFunction(e)&&e};return _.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in _.fx.speeds?r.duration=_.fx.speeds[r.duration]:r.duration=_.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){_.isFunction(r.old)&&r.old.call(this),r.queue&&_.dequeue(this,r.queue)},r},_.fn.extend({fadeTo:function(t,e,n,r){return this.filter(nt).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=_.isEmptyObject(t),o=_.speed(e,n,r),a=function(){var e=ue(this,_.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=_.timers,a=Q.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&re.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));!e&&n||_.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=Q.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=_.timers,a=r?r.length:0;for(n.finish=!0,_.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<a;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),_.each(["toggle","show","hide"],function(t,e){var n=_.fn[e];_.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(ae(e,!0),t,r,i)}}),_.each({slideDown:ae("show"),slideUp:ae("hide"),slideToggle:ae("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){_.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),_.timers=[],_.fx.tick=function(){var t,e=0,n=_.timers;for(Jt=_.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||_.fx.stop(),Jt=void 0},_.fx.timer=function(t){_.timers.push(t),_.fx.start()},_.fx.interval=13,_.fx.start=function(){Zt||(Zt=!0,ie())},_.fx.stop=function(){Zt=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(t,e){return t=_.fx&&_.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,r){var i=n.setTimeout(e,t);r.stop=function(){n.clearTimeout(i)}})},te=a.createElement("input"),ee=a.createElement("select").appendChild(a.createElement("option")),te.type="checkbox",m.checkOn=""!==te.value,m.optSelected=ee.selected,(te=a.createElement("input")).value="t",te.type="radio",m.radioValue="t"===te.value;var ce,le=_.expr.attrHandle;_.fn.extend({attr:function(t,e){return z(this,_.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){_.removeAttr(this,t)})}}),_.extend({attr:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?_.prop(t,e,n):(1===o&&_.isXMLDoc(t)||(i=_.attrHooks[e.toLowerCase()]||(_.expr.match.bool.test(e)?ce:void 0)),void 0!==n?null===n?void _.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:null==(r=_.find.attr(t,e))?void 0:r)},attrHooks:{type:{set:function(t,e){if(!m.radioValue&&"radio"===e&&O(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(M);if(i&&1===t.nodeType)for(;n=i[r++];)t.removeAttribute(n)}}),ce={set:function(t,e,n){return!1===e?_.removeAttr(t,n):t.setAttribute(n,n),n}},_.each(_.expr.match.bool.source.match(/\w+/g),function(t,e){var n=le[e]||_.find.attr;le[e]=function(t,e,r){var i,o,a=e.toLowerCase();return r||(o=le[a],le[a]=i,i=null!=n(t,e,r)?a:null,le[a]=o),i}});var fe=/^(?:input|select|textarea|button)$/i,pe=/^(?:a|area)$/i;function de(t){return(t.match(M)||[]).join(" ")}function he(t){return t.getAttribute&&t.getAttribute("class")||""}_.fn.extend({prop:function(t,e){return z(this,_.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[_.propFix[t]||t]})}}),_.extend({prop:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&_.isXMLDoc(t)||(e=_.propFix[e]||e,i=_.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=_.find.attr(t,"tabindex");return e?parseInt(e,10):fe.test(t.nodeName)||pe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(_.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this}),_.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(_.isFunction(t))return this.each(function(e){_(this).addClass(t.call(this,e,he(this)))});if("string"==typeof t&&t)for(e=t.match(M)||[];n=this[u++];)if(i=he(n),r=1===n.nodeType&&" "+de(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=de(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(_.isFunction(t))return this.each(function(e){_(this).removeClass(t.call(this,e,he(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(M)||[];n=this[u++];)if(i=he(n),r=1===n.nodeType&&" "+de(i)+" "){for(a=0;o=e[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=de(r))&&n.setAttribute("class",s)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):_.isFunction(t)?this.each(function(n){_(this).toggleClass(t.call(this,n,he(this),e),e)}):this.each(function(){var e,r,i,o;if("string"===n)for(r=0,i=_(this),o=t.match(M)||[];e=o[r++];)i.hasClass(e)?i.removeClass(e):i.addClass(e);else void 0!==t&&"boolean"!==n||((e=he(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Q.get(this,"__className__")||""))})},hasClass:function(t){var e,n,r=0;for(e=" "+t+" ";n=this[r++];)if(1===n.nodeType&&(" "+de(he(n))+" ").indexOf(e)>-1)return!0;return!1}});var ve=/\r/g;_.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=_.isFunction(t),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?t.call(this,n,_(this).val()):t)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=_.map(i,function(t){return null==t?"":t+""})),(e=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))})):i?(e=_.valHooks[i.type]||_.valHooks[i.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(ve,""):null==n?"":n:void 0}}),_.extend({valHooks:{option:{get:function(t){var e=_.find.attr(t,"value");return null!=e?e:de(_.text(t))}},select:{get:function(t){var e,n,r,i=t.options,o=t.selectedIndex,a="select-one"===t.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(e=_(n).val(),a)return e;s.push(e)}return s},set:function(t,e){for(var n,r,i=t.options,o=_.makeArray(e),a=i.length;a--;)((r=i[a]).selected=_.inArray(_.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=_.inArray(_(t).val(),e)>-1}},m.checkOn||(_.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var ge=/^(?:focusinfocus|focusoutblur)$/;_.extend(_.event,{trigger:function(t,e,r,i){var o,s,u,c,l,f,p,d=[r||a],v=h.call(t,"type")?t.type:t,g=h.call(t,"namespace")?t.namespace.split("."):[];if(s=u=r=r||a,3!==r.nodeType&&8!==r.nodeType&&!ge.test(v+_.event.triggered)&&(v.indexOf(".")>-1&&(v=(g=v.split(".")).shift(),g.sort()),l=v.indexOf(":")<0&&"on"+v,(t=t[_.expando]?t:new _.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:_.makeArray(e,[t]),p=_.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,e))){if(!i&&!p.noBubble&&!_.isWindow(r)){for(c=p.delegateType||v,ge.test(c+v)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||a)&&d.push(u.defaultView||u.parentWindow||n)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?c:p.bindType||v,(f=(Q.get(s,"events")||{})[t.type]&&Q.get(s,"handle"))&&f.apply(s,e),(f=l&&s[l])&&f.apply&&V(s)&&(t.result=f.apply(s,e),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(d.pop(),e)||!V(r)||l&&_.isFunction(r[v])&&!_.isWindow(r)&&((u=r[l])&&(r[l]=null),_.event.triggered=v,r[v](),_.event.triggered=void 0,u&&(r[l]=u)),t.result}},simulate:function(t,e,n){var r=_.extend(new _.Event,n,{type:t,isSimulated:!0});_.event.trigger(r,null,e)}}),_.fn.extend({trigger:function(t,e){return this.each(function(){_.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return _.event.trigger(t,e,n,!0)}}),_.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){_.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),_.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),m.focusin="onfocusin"in n,m.focusin||_.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){_.event.simulate(e,t.target,_.event.fix(t))};_.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=Q.access(r,e);i||r.addEventListener(t,n,!0),Q.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Q.access(r,e)-1;i?Q.access(r,e,i):(r.removeEventListener(t,n,!0),Q.remove(r,e))}}});var me=n.location,ye=_.now(),_e=/\?/;_.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||_.error("Invalid XML: "+t),e};var be=/\[\]$/,we=/\r?\n/g,xe=/^(?:submit|button|image|reset|file)$/i,Ce=/^(?:input|select|textarea|keygen)/i;function Te(t,e,n,r){var i;if(Array.isArray(e))_.each(e,function(e,i){n||be.test(t)?r(t,i):Te(t+"["+("object"==typeof i&&null!=i?e:"")+"]",i,n,r)});else if(n||"object"!==_.type(e))r(t,e);else for(i in e)Te(t+"["+i+"]",e[i],n,r)}_.param=function(t,e){var n,r=[],i=function(t,e){var n=_.isFunction(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!_.isPlainObject(t))_.each(t,function(){i(this.name,this.value)});else for(n in t)Te(n,t[n],e,i);return r.join("&")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=_.prop(this,"elements");return t?_.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!_(this).is(":disabled")&&Ce.test(this.nodeName)&&!xe.test(t)&&(this.checked||!st.test(t))}).map(function(t,e){var n=_(this).val();return null==n?null:Array.isArray(n)?_.map(n,function(t){return{name:e.name,value:t.replace(we,"\r\n")}}):{name:e.name,value:n.replace(we,"\r\n")}}).get()}});var Ee=/%20/g,Ae=/#.*$/,Se=/([?&])_=[^&]*/,ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Oe=/^(?:GET|HEAD)$/,De=/^\/\//,Ie={},Ne={},je="*/".concat("*"),Le=a.createElement("a");function $e(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(M)||[];if(_.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function Re(t,e,n,r){var i={},o=t===Ne;function a(s){var u;return i[s]=!0,_.each(t[s]||[],function(t,s){var c=s(e,n,r);return"string"!=typeof c||o||i[c]?o?!(u=c):void 0:(e.dataTypes.unshift(c),a(c),!1)}),u}return a(e.dataTypes[0])||!i["*"]&&a("*")}function Pe(t,e){var n,r,i=_.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&_.extend(!0,t,r),t}Le.href=me.href,_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:me.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":je,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Pe(Pe(t,_.ajaxSettings),e):Pe(_.ajaxSettings,t)},ajaxPrefilter:$e(Ie),ajaxTransport:$e(Ne),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,i,o,s,u,c,l,f,p,d,h=_.ajaxSetup({},e),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?_(v):_.event,m=_.Deferred(),y=_.Callbacks("once memory"),b=h.statusCode||{},w={},x={},C="canceled",T={readyState:0,getResponseHeader:function(t){var e;if(l){if(!s)for(s={};e=ke.exec(o);)s[e[1].toLowerCase()]=e[2];e=s[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(t,e){return null==l&&(t=x[t.toLowerCase()]=x[t.toLowerCase()]||t,w[t]=e),this},overrideMimeType:function(t){return null==l&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(l)T.always(t[T.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||C;return r&&r.abort(e),E(0,e),this}};if(m.promise(T),h.url=((t||h.url||me.href)+"").replace(De,me.protocol+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){c=a.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Le.protocol+"//"+Le.host!=c.protocol+"//"+c.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=_.param(h.data,h.traditional)),Re(Ie,h,e,T),l)return T;(f=_.event&&h.global)&&0==_.active++&&_.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Oe.test(h.type),i=h.url.replace(Ae,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ee,"+")):(d=h.url.slice(i.length),h.data&&(i+=(_e.test(i)?"&":"?")+h.data,delete h.data),!1===h.cache&&(i=i.replace(Se,"$1"),d=(_e.test(i)?"&":"?")+"_="+ye+++d),h.url=i+d),h.ifModified&&(_.lastModified[i]&&T.setRequestHeader("If-Modified-Since",_.lastModified[i]),_.etag[i]&&T.setRequestHeader("If-None-Match",_.etag[i])),(h.data&&h.hasContent&&!1!==h.contentType||e.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+je+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)T.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(v,T,h)||l))return T.abort();if(C="abort",y.add(h.complete),T.done(h.success),T.fail(h.error),r=Re(Ne,h,e,T)){if(T.readyState=1,f&&g.trigger("ajaxSend",[T,h]),l)return T;h.async&&h.timeout>0&&(u=n.setTimeout(function(){T.abort("timeout")},h.timeout));try{l=!1,r.send(w,E)}catch(t){if(l)throw t;E(-1,t)}}else E(-1,"No Transport");function E(t,e,a,s){var c,p,d,w,x,C=e;l||(l=!0,u&&n.clearTimeout(u),r=void 0,o=s||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,a&&(w=function(t,e,n){for(var r,i,o,a,s=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||t.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,T,a)),w=function(t,e,n,r){var i,o,a,s,u,c={},l=t.dataTypes.slice();if(l[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(o=l.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!u&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+u+" to "+o}}}return{state:"success",data:e}}(h,w,T,c),c?(h.ifModified&&((x=T.getResponseHeader("Last-Modified"))&&(_.lastModified[i]=x),(x=T.getResponseHeader("etag"))&&(_.etag[i]=x)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=w.state,p=w.data,c=!(d=w.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(e||C)+"",c?m.resolveWith(v,[p,C,T]):m.rejectWith(v,[T,C,d]),T.statusCode(b),b=void 0,f&&g.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?p:d]),y.fireWith(v,[T,C]),f&&(g.trigger("ajaxComplete",[T,h]),--_.active||_.event.trigger("ajaxStop")))}return T},getJSON:function(t,e,n){return _.get(t,e,n,"json")},getScript:function(t,e){return _.get(t,void 0,e,"script")}}),_.each(["get","post"],function(t,e){_[e]=function(t,n,r,i){return _.isFunction(n)&&(i=i||r,r=n,n=void 0),_.ajax(_.extend({url:t,type:e,dataType:i,data:n,success:r},_.isPlainObject(t)&&t))}}),_._evalUrl=function(t){return _.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},_.fn.extend({wrapAll:function(t){var e;return this[0]&&(_.isFunction(t)&&(t=t.call(this[0])),e=_(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return _.isFunction(t)?this.each(function(e){_(this).wrapInner(t.call(this,e))}):this.each(function(){var e=_(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=_.isFunction(t);return this.each(function(n){_(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){_(this).replaceWith(this.childNodes)}),this}}),_.expr.pseudos.hidden=function(t){return!_.expr.pseudos.visible(t)},_.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},_.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var Me={0:200,1223:204},Fe=_.ajaxSettings.xhr();m.cors=!!Fe&&"withCredentials"in Fe,m.ajax=Fe=!!Fe,_.ajaxTransport(function(t){var e,r;if(m.cors||Fe&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);e=function(t){return function(){e&&(e=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Me[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=e(),r=s.onerror=e("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){e&&r()})},e=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),_.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return _.globalEval(t),t}}}),_.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),_.ajaxTransport("script",function(t){var e,n;if(t.crossDomain)return{send:function(r,i){e=_("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),a.head.appendChild(e[0])},abort:function(){n&&n()}}});var He,Be=[],We=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Be.pop()||_.expando+"_"+ye++;return this[t]=!0,t}}),_.ajaxPrefilter("json jsonp",function(t,e,r){var i,o,a,s=!1!==t.jsonp&&(We.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&We.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=_.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(We,"$1"+i):!1!==t.jsonp&&(t.url+=(_e.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||_.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){void 0===o?_(n).removeProp(i):n[i]=o,t[i]&&(t.jsonpCallback=e.jsonpCallback,Be.push(i)),a&&_.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),m.createHTMLDocument=((He=a.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===He.childNodes.length),_.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(m.createHTMLDocument?((r=(e=a.implementation.createHTMLDocument("")).createElement("base")).href=a.location.href,e.head.appendChild(r)):e=a),i=D.exec(t),o=!n&&[],i?[e.createElement(i[1])]:(i=gt([t],e,o),o&&o.length&&_(o).remove(),_.merge([],i.childNodes)));var r,i,o},_.fn.load=function(t,e,n){var r,i,o,a=this,s=t.indexOf(" ");return s>-1&&(r=de(t.slice(s)),t=t.slice(0,s)),_.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(i="POST"),a.length>0&&_.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done(function(t){o=arguments,a.html(r?_("<div>").append(_.parseHTML(t)).find(r):t)}).always(n&&function(t,e){a.each(function(){n.apply(this,o||[t.responseText,e,t])})}),this},_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){_.fn[e]=function(t){return this.on(e,t)}}),_.expr.pseudos.animated=function(t){return _.grep(_.timers,function(e){return t===e.elem}).length},_.offset={setOffset:function(t,e,n){var r,i,o,a,s,u,c=_.css(t,"position"),l=_(t),f={};"static"===c&&(t.style.position="relative"),s=l.offset(),o=_.css(t,"top"),u=_.css(t,"left"),("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1?(a=(r=l.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),_.isFunction(e)&&(e=e.call(t,n,_.extend({},s))),null!=e.top&&(f.top=e.top-s.top+a),null!=e.left&&(f.left=e.left-s.left+i),"using"in e?e.using.call(t,f):l.css(f)}},_.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){_.offset.setOffset(this,t,e)});var e,n,r,i,o=this[0];return o?o.getClientRects().length?(r=o.getBoundingClientRect(),n=(e=o.ownerDocument).documentElement,i=e.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n=this[0],r={top:0,left:0};return"fixed"===_.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),O(t[0],"html")||(r=t.offset()),r={top:r.top+_.css(t[0],"borderTopWidth",!0),left:r.left+_.css(t[0],"borderLeftWidth",!0)}),{top:e.top-r.top-_.css(n,"marginTop",!0),left:e.left-r.left-_.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===_.css(t,"position");)t=t.offsetParent;return t||mt})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;_.fn[t]=function(r){return z(this,function(t,r,i){var o;if(_.isWindow(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===i)return o?o[e]:t[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):t[r]=i},t,r,arguments.length)}}),_.each(["top","left"],function(t,e){_.cssHooks[e]=Ht(m.pixelPosition,function(t,n){if(n)return n=Ft(t,e),Pt.test(n)?_(t).position()[e]+"px":n})}),_.each({Height:"height",Width:"width"},function(t,e){_.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){_.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(e,n,i){var o;return _.isWindow(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?_.css(e,n,s):_.style(e,n,i,s)},e,a?i:void 0,a)}})}),_.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),_.holdReady=function(t){t?_.readyWait++:_.ready(!0)},_.isArray=Array.isArray,_.parseJSON=JSON.parse,_.nodeName=O,void 0===(r=function(){return _}.apply(e,[]))||(t.exports=r);var qe=n.jQuery,Ue=n.$;return _.noConflict=function(t){return n.$===_&&(n.$=Ue),t&&n.jQuery===_&&(n.jQuery=qe),_},i||(n.jQuery=n.$=_),_})},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=s(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0),i=n(22),o=n(24),a=n(25),s=n(26),u=n(8),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(27);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var g=t.auth.username||"",m=t.auth.password||"";p.Authorization="Basic "+c(g+":"+m)}if(d.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};i(e,l,r),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(28),_=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;_&&(p[t.xsrfHeaderName]=_)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(t,e,n){"use strict";var r=n(23);t.exports=function(t,e,n,i,o){var a=new Error(t);return r(a,e,n,i,o)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){n(12),t.exports=n(43)},function(t,e,n){n(13),window.Vue=n(36),Vue.component("example-component",n(39));new Vue({el:"#app"})},function(t,e,n){window._=n(14),window.Popper=n(3).default;try{window.$=window.jQuery=n(4),n(16)}catch(t){}window.axios=n(17),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},function(t,e,n){(function(t,r){var i;(function(){var o,a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="__lodash_hash_undefined__",l=500,f="__lodash_placeholder__",p=1,d=2,h=4,v=1,g=2,m=1,y=2,_=4,b=8,w=16,x=32,C=64,T=128,E=256,A=512,S=30,k="...",O=800,D=16,I=1,N=2,j=1/0,L=9007199254740991,$=1.7976931348623157e308,R=NaN,P=4294967295,M=P-1,F=P>>>1,H=[["ary",T],["bind",m],["bindKey",y],["curry",b],["curryRight",w],["flip",A],["partial",x],["partialRight",C],["rearg",E]],B="[object Arguments]",W="[object Array]",q="[object AsyncFunction]",U="[object Boolean]",z="[object Date]",V="[object DOMException]",K="[object Error]",Q="[object Function]",G="[object GeneratorFunction]",Y="[object Map]",X="[object Number]",J="[object Null]",Z="[object Object]",tt="[object Promise]",et="[object Proxy]",nt="[object RegExp]",rt="[object Set]",it="[object String]",ot="[object Symbol]",at="[object Undefined]",st="[object WeakMap]",ut="[object WeakSet]",ct="[object ArrayBuffer]",lt="[object DataView]",ft="[object Float32Array]",pt="[object Float64Array]",dt="[object Int8Array]",ht="[object Int16Array]",vt="[object Int32Array]",gt="[object Uint8Array]",mt="[object Uint8ClampedArray]",yt="[object Uint16Array]",_t="[object Uint32Array]",bt=/\b__p \+= '';/g,wt=/\b(__p \+=) '' \+/g,xt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ct=/&(?:amp|lt|gt|quot|#39);/g,Tt=/[&<>"']/g,Et=RegExp(Ct.source),At=RegExp(Tt.source),St=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,Dt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,It=/^\w*$/,Nt=/^\./,jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,$t=RegExp(Lt.source),Rt=/^\s+|\s+$/g,Pt=/^\s+/,Mt=/\s+$/,Ft=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ht=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,Wt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qt=/\\(\\)?/g,Ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zt=/\w*$/,Vt=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Gt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jt=/($^)/,Zt=/['\n\r\u2028\u2029\\]/g,te="\\ud800-\\udfff",ee="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ne="\\u2700-\\u27bf",re="a-z\\xdf-\\xf6\\xf8-\\xff",ie="A-Z\\xc0-\\xd6\\xd8-\\xde",oe="\\ufe0e\\ufe0f",ae="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",se="['’]",ue="["+te+"]",ce="["+ae+"]",le="["+ee+"]",fe="\\d+",pe="["+ne+"]",de="["+re+"]",he="[^"+te+ae+fe+ne+re+ie+"]",ve="\\ud83c[\\udffb-\\udfff]",ge="[^"+te+"]",me="(?:\\ud83c[\\udde6-\\uddff]){2}",ye="[\\ud800-\\udbff][\\udc00-\\udfff]",_e="["+ie+"]",be="\\u200d",we="(?:"+de+"|"+he+")",xe="(?:"+_e+"|"+he+")",Ce="(?:['’](?:d|ll|m|re|s|t|ve))?",Te="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ee="(?:"+le+"|"+ve+")"+"?",Ae="["+oe+"]?",Se=Ae+Ee+("(?:"+be+"(?:"+[ge,me,ye].join("|")+")"+Ae+Ee+")*"),ke="(?:"+[pe,me,ye].join("|")+")"+Se,Oe="(?:"+[ge+le+"?",le,me,ye,ue].join("|")+")",De=RegExp(se,"g"),Ie=RegExp(le,"g"),Ne=RegExp(ve+"(?="+ve+")|"+Oe+Se,"g"),je=RegExp([_e+"?"+de+"+"+Ce+"(?="+[ce,_e,"$"].join("|")+")",xe+"+"+Te+"(?="+[ce,_e+we,"$"].join("|")+")",_e+"?"+we+"+"+Ce,_e+"+"+Te,"\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",fe,ke].join("|"),"g"),Le=RegExp("["+be+te+ee+oe+"]"),$e=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Re=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Pe=-1,Me={};Me[ft]=Me[pt]=Me[dt]=Me[ht]=Me[vt]=Me[gt]=Me[mt]=Me[yt]=Me[_t]=!0,Me[B]=Me[W]=Me[ct]=Me[U]=Me[lt]=Me[z]=Me[K]=Me[Q]=Me[Y]=Me[X]=Me[Z]=Me[nt]=Me[rt]=Me[it]=Me[st]=!1;var Fe={};Fe[B]=Fe[W]=Fe[ct]=Fe[lt]=Fe[U]=Fe[z]=Fe[ft]=Fe[pt]=Fe[dt]=Fe[ht]=Fe[vt]=Fe[Y]=Fe[X]=Fe[Z]=Fe[nt]=Fe[rt]=Fe[it]=Fe[ot]=Fe[gt]=Fe[mt]=Fe[yt]=Fe[_t]=!0,Fe[K]=Fe[Q]=Fe[st]=!1;var He={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Be=parseFloat,We=parseInt,qe="object"==typeof t&&t&&t.Object===Object&&t,Ue="object"==typeof self&&self&&self.Object===Object&&self,ze=qe||Ue||Function("return this")(),Ve="object"==typeof e&&e&&!e.nodeType&&e,Ke=Ve&&"object"==typeof r&&r&&!r.nodeType&&r,Qe=Ke&&Ke.exports===Ve,Ge=Qe&&qe.process,Ye=function(){try{return Ge&&Ge.binding&&Ge.binding("util")}catch(t){}}(),Xe=Ye&&Ye.isArrayBuffer,Je=Ye&&Ye.isDate,Ze=Ye&&Ye.isMap,tn=Ye&&Ye.isRegExp,en=Ye&&Ye.isSet,nn=Ye&&Ye.isTypedArray;function rn(t,e){return t.set(e[0],e[1]),t}function on(t,e){return t.add(e),t}function an(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function sn(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}function un(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function cn(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function ln(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function fn(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}function pn(t,e){return!!(null==t?0:t.length)&&xn(t,e,0)>-1}function dn(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function hn(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function vn(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function gn(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function mn(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function yn(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var _n=An("length");function bn(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function wn(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function xn(t,e,n){return e==e?function(t,e,n){var r=n-1,i=t.length;for(;++r<i;)if(t[r]===e)return r;return-1}(t,e,n):wn(t,Tn,n)}function Cn(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function Tn(t){return t!=t}function En(t,e){var n=null==t?0:t.length;return n?On(t,e)/n:R}function An(t){return function(e){return null==e?o:e[t]}}function Sn(t){return function(e){return null==t?o:t[e]}}function kn(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function On(t,e){for(var n,r=-1,i=t.length;++r<i;){var a=e(t[r]);a!==o&&(n=n===o?a:n+a)}return n}function Dn(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function In(t){return function(e){return t(e)}}function Nn(t,e){return hn(e,function(e){return t[e]})}function jn(t,e){return t.has(e)}function Ln(t,e){for(var n=-1,r=t.length;++n<r&&xn(e,t[n],0)>-1;);return n}function $n(t,e){for(var n=t.length;n--&&xn(e,t[n],0)>-1;);return n}var Rn=Sn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Pn=Sn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Mn(t){return"\\"+He[t]}function Fn(t){return Le.test(t)}function Hn(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function Bn(t,e){return function(n){return t(e(n))}}function Wn(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n];a!==e&&a!==f||(t[n]=f,o[i++]=n)}return o}function qn(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function Un(t){return Fn(t)?function(t){var e=Ne.lastIndex=0;for(;Ne.test(t);)++e;return e}(t):_n(t)}function zn(t){return Fn(t)?t.match(Ne)||[]:t.split("")}var Vn=Sn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Kn=function t(e){var n,r=(e=null==e?ze:Kn.defaults(ze.Object(),e,Kn.pick(ze,Re))).Array,i=e.Date,te=e.Error,ee=e.Function,ne=e.Math,re=e.Object,ie=e.RegExp,oe=e.String,ae=e.TypeError,se=r.prototype,ue=ee.prototype,ce=re.prototype,le=e["__core-js_shared__"],fe=ue.toString,pe=ce.hasOwnProperty,de=0,he=(n=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",ve=ce.toString,ge=fe.call(re),me=ze._,ye=ie("^"+fe.call(pe).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=Qe?e.Buffer:o,be=e.Symbol,we=e.Uint8Array,xe=_e?_e.allocUnsafe:o,Ce=Bn(re.getPrototypeOf,re),Te=re.create,Ee=ce.propertyIsEnumerable,Ae=se.splice,Se=be?be.isConcatSpreadable:o,ke=be?be.iterator:o,Oe=be?be.toStringTag:o,Ne=function(){try{var t=Wo(re,"defineProperty");return t({},"",{}),t}catch(t){}}(),Le=e.clearTimeout!==ze.clearTimeout&&e.clearTimeout,He=i&&i.now!==ze.Date.now&&i.now,qe=e.setTimeout!==ze.setTimeout&&e.setTimeout,Ue=ne.ceil,Ve=ne.floor,Ke=re.getOwnPropertySymbols,Ge=_e?_e.isBuffer:o,Ye=e.isFinite,_n=se.join,Sn=Bn(re.keys,re),Qn=ne.max,Gn=ne.min,Yn=i.now,Xn=e.parseInt,Jn=ne.random,Zn=se.reverse,tr=Wo(e,"DataView"),er=Wo(e,"Map"),nr=Wo(e,"Promise"),rr=Wo(e,"Set"),ir=Wo(e,"WeakMap"),or=Wo(re,"create"),ar=ir&&new ir,sr={},ur=va(tr),cr=va(er),lr=va(nr),fr=va(rr),pr=va(ir),dr=be?be.prototype:o,hr=dr?dr.valueOf:o,vr=dr?dr.toString:o;function gr(t){if(Ns(t)&&!ws(t)&&!(t instanceof br)){if(t instanceof _r)return t;if(pe.call(t,"__wrapped__"))return ga(t)}return new _r(t)}var mr=function(){function t(){}return function(e){if(!Is(e))return{};if(Te)return Te(e);t.prototype=e;var n=new t;return t.prototype=o,n}}();function yr(){}function _r(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=o}function br(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=P,this.__views__=[]}function wr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Cr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Cr;++e<n;)this.add(t[e])}function Er(t){var e=this.__data__=new xr(t);this.size=e.size}function Ar(t,e){var n=ws(t),r=!n&&bs(t),i=!n&&!r&&Es(t),o=!n&&!r&&!i&&Hs(t),a=n||r||i||o,s=a?Dn(t.length,oe):[],u=s.length;for(var c in t)!e&&!pe.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Go(c,u))||s.push(c);return s}function Sr(t){var e=t.length;return e?t[Ti(0,e-1)]:o}function kr(t,e){return la(oo(t),Pr(e,0,t.length))}function Or(t){return la(oo(t))}function Dr(t,e,n){(n===o||ms(t[e],n))&&(n!==o||e in t)||$r(t,e,n)}function Ir(t,e,n){var r=t[e];pe.call(t,e)&&ms(r,n)&&(n!==o||e in t)||$r(t,e,n)}function Nr(t,e){for(var n=t.length;n--;)if(ms(t[n][0],e))return n;return-1}function jr(t,e,n,r){return Wr(t,function(t,i,o){e(r,t,n(t),o)}),r}function Lr(t,e){return t&&ao(e,uu(e),t)}function $r(t,e,n){"__proto__"==e&&Ne?Ne(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Rr(t,e){for(var n=-1,i=e.length,a=r(i),s=null==t;++n<i;)a[n]=s?o:ru(t,e[n]);return a}function Pr(t,e,n){return t==t&&(n!==o&&(t=t<=n?t:n),e!==o&&(t=t>=e?t:e)),t}function Mr(t,e,n,r,i,a){var s,u=e&p,c=e&d,l=e&h;if(n&&(s=i?n(t,r,i,a):n(t)),s!==o)return s;if(!Is(t))return t;var f,v,g,m,y,_,b,w,x,C=ws(t);if(C){if(b=t,w=b.length,x=b.constructor(w),w&&"string"==typeof b[0]&&pe.call(b,"index")&&(x.index=b.index,x.input=b.input),s=x,!u)return oo(t,s)}else{var T=zo(t),E=T==Q||T==G;if(Es(t))return Zi(t,u);if(T==Z||T==B||E&&!i){if(s=c||E?{}:Ko(t),!u)return c?(g=t,_=t,m=(y=s)&&ao(_,cu(_),y),ao(g,Uo(g),m)):(f=t,v=Lr(s,t),ao(f,qo(f),v))}else{if(!Fe[T])return i?t:{};s=function(t,e,n,r){var i,o,a,s,u,c,l,f=t.constructor;switch(e){case ct:return to(t);case U:case z:return new f(+t);case lt:return c=t,l=r?to(c.buffer):c.buffer,new c.constructor(l,c.byteOffset,c.byteLength);case ft:case pt:case dt:case ht:case vt:case gt:case mt:case yt:case _t:return eo(t,r);case Y:return u=t,gn(r?n(Hn(u),p):Hn(u),rn,new u.constructor);case X:case it:return new f(t);case nt:return(s=new(a=t).constructor(a.source,zt.exec(a))).lastIndex=a.lastIndex,s;case rt:return o=t,gn(r?n(qn(o),p):qn(o),on,new o.constructor);case ot:return i=t,hr?re(hr.call(i)):{}}}(t,T,Mr,u)}}a||(a=new Er);var A=a.get(t);if(A)return A;a.set(t,s);var S=C?o:(l?c?$o:Lo:c?cu:uu)(t);return un(S||t,function(r,i){S&&(r=t[i=r]),Ir(s,i,Mr(r,e,n,i,t,a))}),s}function Fr(t,e,n){var r=n.length;if(null==t)return!r;for(t=re(t);r--;){var i=n[r],a=e[i],s=t[i];if(s===o&&!(i in t)||!a(s))return!1}return!0}function Hr(t,e,n){if("function"!=typeof t)throw new ae(u);return aa(function(){t.apply(o,n)},e)}function Br(t,e,n,r){var i=-1,o=pn,s=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=hn(e,In(n))),r?(o=dn,s=!1):e.length>=a&&(o=jn,s=!1,e=new Tr(e));t:for(;++i<u;){var f=t[i],p=null==n?f:n(f);if(f=r||0!==f?f:0,s&&p==p){for(var d=l;d--;)if(e[d]===p)continue t;c.push(f)}else o(e,p,r)||c.push(f)}return c}gr.templateSettings={escape:St,evaluate:kt,interpolate:Ot,variable:"",imports:{_:gr}},gr.prototype=yr.prototype,gr.prototype.constructor=gr,_r.prototype=mr(yr.prototype),_r.prototype.constructor=_r,br.prototype=mr(yr.prototype),br.prototype.constructor=br,wr.prototype.clear=function(){this.__data__=or?or(null):{},this.size=0},wr.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wr.prototype.get=function(t){var e=this.__data__;if(or){var n=e[t];return n===c?o:n}return pe.call(e,t)?e[t]:o},wr.prototype.has=function(t){var e=this.__data__;return or?e[t]!==o:pe.call(e,t)},wr.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=or&&e===o?c:e,this},xr.prototype.clear=function(){this.__data__=[],this.size=0},xr.prototype.delete=function(t){var e=this.__data__,n=Nr(e,t);return!(n<0||(n==e.length-1?e.pop():Ae.call(e,n,1),--this.size,0))},xr.prototype.get=function(t){var e=this.__data__,n=Nr(e,t);return n<0?o:e[n][1]},xr.prototype.has=function(t){return Nr(this.__data__,t)>-1},xr.prototype.set=function(t,e){var n=this.__data__,r=Nr(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Cr.prototype.clear=function(){this.size=0,this.__data__={hash:new wr,map:new(er||xr),string:new wr}},Cr.prototype.delete=function(t){var e=Ho(this,t).delete(t);return this.size-=e?1:0,e},Cr.prototype.get=function(t){return Ho(this,t).get(t)},Cr.prototype.has=function(t){return Ho(this,t).has(t)},Cr.prototype.set=function(t,e){var n=Ho(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Tr.prototype.add=Tr.prototype.push=function(t){return this.__data__.set(t,c),this},Tr.prototype.has=function(t){return this.__data__.has(t)},Er.prototype.clear=function(){this.__data__=new xr,this.size=0},Er.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Er.prototype.get=function(t){return this.__data__.get(t)},Er.prototype.has=function(t){return this.__data__.has(t)},Er.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xr){var r=n.__data__;if(!er||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Cr(r)}return n.set(t,e),this.size=n.size,this};var Wr=co(Yr),qr=co(Xr,!0);function Ur(t,e){var n=!0;return Wr(t,function(t,r,i){return n=!!e(t,r,i)}),n}function zr(t,e,n){for(var r=-1,i=t.length;++r<i;){var a=t[r],s=e(a);if(null!=s&&(u===o?s==s&&!Fs(s):n(s,u)))var u=s,c=a}return c}function Vr(t,e){var n=[];return Wr(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function Kr(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=Qo),i||(i=[]);++o<a;){var s=t[o];e>0&&n(s)?e>1?Kr(s,e-1,n,r,i):vn(i,s):r||(i[i.length]=s)}return i}var Qr=lo(),Gr=lo(!0);function Yr(t,e){return t&&Qr(t,e,uu)}function Xr(t,e){return t&&Gr(t,e,uu)}function Jr(t,e){return fn(e,function(e){return ks(t[e])})}function Zr(t,e){for(var n=0,r=(e=Gi(e,t)).length;null!=t&&n<r;)t=t[ha(e[n++])];return n&&n==r?t:o}function ti(t,e,n){var r=e(t);return ws(t)?r:vn(r,n(t))}function ei(t){return null==t?t===o?at:J:Oe&&Oe in re(t)?function(t){var e=pe.call(t,Oe),n=t[Oe];try{t[Oe]=o;var r=!0}catch(t){}var i=ve.call(t);return r&&(e?t[Oe]=n:delete t[Oe]),i}(t):(e=t,ve.call(e));var e}function ni(t,e){return t>e}function ri(t,e){return null!=t&&pe.call(t,e)}function ii(t,e){return null!=t&&e in re(t)}function oi(t,e,n){for(var i=n?dn:pn,a=t[0].length,s=t.length,u=s,c=r(s),l=1/0,f=[];u--;){var p=t[u];u&&e&&(p=hn(p,In(e))),l=Gn(p.length,l),c[u]=!n&&(e||a>=120&&p.length>=120)?new Tr(u&&p):o}p=t[0];var d=-1,h=c[0];t:for(;++d<a&&f.length<l;){var v=p[d],g=e?e(v):v;if(v=n||0!==v?v:0,!(h?jn(h,g):i(f,g,n))){for(u=s;--u;){var m=c[u];if(!(m?jn(m,g):i(t[u],g,n)))continue t}h&&h.push(g),f.push(v)}}return f}function ai(t,e,n){var r=null==(t=ia(t,e=Gi(e,t)))?t:t[ha(Sa(e))];return null==r?o:an(r,t,n)}function si(t){return Ns(t)&&ei(t)==B}function ui(t,e,n,r,i){return t===e||(null==t||null==e||!Ns(t)&&!Ns(e)?t!=t&&e!=e:function(t,e,n,r,i,a){var s=ws(t),u=ws(e),c=s?W:zo(t),l=u?W:zo(e),f=(c=c==B?Z:c)==Z,p=(l=l==B?Z:l)==Z,d=c==l;if(d&&Es(t)){if(!Es(e))return!1;s=!0,f=!1}if(d&&!f)return a||(a=new Er),s||Hs(t)?No(t,e,n,r,i,a):function(t,e,n,r,i,o,a){switch(n){case lt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ct:return!(t.byteLength!=e.byteLength||!o(new we(t),new we(e)));case U:case z:case X:return ms(+t,+e);case K:return t.name==e.name&&t.message==e.message;case nt:case it:return t==e+"";case Y:var s=Hn;case rt:var u=r&v;if(s||(s=qn),t.size!=e.size&&!u)return!1;var c=a.get(t);if(c)return c==e;r|=g,a.set(t,e);var l=No(s(t),s(e),r,i,o,a);return a.delete(t),l;case ot:if(hr)return hr.call(t)==hr.call(e)}return!1}(t,e,c,n,r,i,a);if(!(n&v)){var h=f&&pe.call(t,"__wrapped__"),m=p&&pe.call(e,"__wrapped__");if(h||m){var y=h?t.value():t,_=m?e.value():e;return a||(a=new Er),i(y,_,n,r,a)}}return!!d&&(a||(a=new Er),function(t,e,n,r,i,a){var s=n&v,u=Lo(t),c=u.length,l=Lo(e).length;if(c!=l&&!s)return!1;for(var f=c;f--;){var p=u[f];if(!(s?p in e:pe.call(e,p)))return!1}var d=a.get(t);if(d&&a.get(e))return d==e;var h=!0;a.set(t,e),a.set(e,t);for(var g=s;++f<c;){p=u[f];var m=t[p],y=e[p];if(r)var _=s?r(y,m,p,e,t,a):r(m,y,p,t,e,a);if(!(_===o?m===y||i(m,y,n,r,a):_)){h=!1;break}g||(g="constructor"==p)}if(h&&!g){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return a.delete(t),a.delete(e),h}(t,e,n,r,i,a))}(t,e,n,r,ui,i))}function ci(t,e,n,r){var i=n.length,a=i,s=!r;if(null==t)return!a;for(t=re(t);i--;){var u=n[i];if(s&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++i<a;){var c=(u=n[i])[0],l=t[c],f=u[1];if(s&&u[2]){if(l===o&&!(c in t))return!1}else{var p=new Er;if(r)var d=r(l,f,c,t,e,p);if(!(d===o?ui(f,l,v|g,r,p):d))return!1}}return!0}function li(t){return!(!Is(t)||he&&he in t)&&(ks(t)?ye:Qt).test(va(t))}function fi(t){return"function"==typeof t?t:null==t?Lu:"object"==typeof t?ws(t)?mi(t[0],t[1]):gi(t):qu(t)}function pi(t){if(!ta(t))return Sn(t);var e=[];for(var n in re(t))pe.call(t,n)&&"constructor"!=n&&e.push(n);return e}function di(t){if(!Is(t))return function(t){var e=[];if(null!=t)for(var n in re(t))e.push(n);return e}(t);var e=ta(t),n=[];for(var r in t)("constructor"!=r||!e&&pe.call(t,r))&&n.push(r);return n}function hi(t,e){return t<e}function vi(t,e){var n=-1,i=Cs(t)?r(t.length):[];return Wr(t,function(t,r,o){i[++n]=e(t,r,o)}),i}function gi(t){var e=Bo(t);return 1==e.length&&e[0][2]?na(e[0][0],e[0][1]):function(n){return n===t||ci(n,t,e)}}function mi(t,e){return Xo(t)&&ea(e)?na(ha(t),e):function(n){var r=ru(n,t);return r===o&&r===e?iu(n,t):ui(e,r,v|g)}}function yi(t,e,n,r,i){t!==e&&Qr(e,function(a,s){if(Is(a))i||(i=new Er),function(t,e,n,r,i,a,s){var u=t[n],c=e[n],l=s.get(c);if(l)Dr(t,n,l);else{var f=a?a(u,c,n+"",t,e,s):o,p=f===o;if(p){var d=ws(c),h=!d&&Es(c),v=!d&&!h&&Hs(c);f=c,d||h||v?ws(u)?f=u:Ts(u)?f=oo(u):h?(p=!1,f=Zi(c,!0)):v?(p=!1,f=eo(c,!0)):f=[]:$s(c)||bs(c)?(f=u,bs(u)?f=Qs(u):(!Is(u)||r&&ks(u))&&(f=Ko(c))):p=!1}p&&(s.set(c,f),i(f,c,r,a,s),s.delete(c)),Dr(t,n,f)}}(t,e,s,n,yi,r,i);else{var u=r?r(t[s],a,s+"",t,e,i):o;u===o&&(u=a),Dr(t,s,u)}},cu)}function _i(t,e){var n=t.length;if(n)return Go(e+=e<0?n:0,n)?t[e]:o}function bi(t,e,n){var r=-1;return e=hn(e.length?e:[Lu],In(Fo())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(vi(t,function(t,n,i){return{criteria:hn(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;++r<a;){var u=no(i[r],o[r]);if(u){if(r>=s)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}(t,e,n)})}function wi(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=Zr(t,a);n(s,a)&&Oi(o,Gi(a,t),s)}return o}function xi(t,e,n,r){var i=r?Cn:xn,o=-1,a=e.length,s=t;for(t===e&&(e=oo(e)),n&&(s=hn(t,In(n)));++o<a;)for(var u=0,c=e[o],l=n?n(c):c;(u=i(s,l,u,r))>-1;)s!==t&&Ae.call(s,u,1),Ae.call(t,u,1);return t}function Ci(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;Go(i)?Ae.call(t,i,1):Bi(t,i)}}return t}function Ti(t,e){return t+Ve(Jn()*(e-t+1))}function Ei(t,e){var n="";if(!t||e<1||e>L)return n;do{e%2&&(n+=t),(e=Ve(e/2))&&(t+=t)}while(e);return n}function Ai(t,e){return sa(ra(t,e,Lu),t+"")}function Si(t){return Sr(mu(t))}function ki(t,e){var n=mu(t);return la(n,Pr(e,0,n.length))}function Oi(t,e,n,r){if(!Is(t))return t;for(var i=-1,a=(e=Gi(e,t)).length,s=a-1,u=t;null!=u&&++i<a;){var c=ha(e[i]),l=n;if(i!=s){var f=u[c];(l=r?r(f,c,u):o)===o&&(l=Is(f)?f:Go(e[i+1])?[]:{})}Ir(u,c,l),u=u[c]}return t}var Di=ar?function(t,e){return ar.set(t,e),t}:Lu,Ii=Ne?function(t,e){return Ne(t,"toString",{configurable:!0,enumerable:!1,value:Iu(e),writable:!0})}:Lu;function Ni(t){return la(mu(t))}function ji(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=r(o);++i<o;)a[i]=t[i+e];return a}function Li(t,e){var n;return Wr(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function $i(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e==e&&i<=F){for(;r<i;){var o=r+i>>>1,a=t[o];null!==a&&!Fs(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return Ri(t,e,Lu,n)}function Ri(t,e,n,r){e=n(e);for(var i=0,a=null==t?0:t.length,s=e!=e,u=null===e,c=Fs(e),l=e===o;i<a;){var f=Ve((i+a)/2),p=n(t[f]),d=p!==o,h=null===p,v=p==p,g=Fs(p);if(s)var m=r||v;else m=l?v&&(r||d):u?v&&d&&(r||!h):c?v&&d&&!h&&(r||!g):!h&&!g&&(r?p<=e:p<e);m?i=f+1:a=f}return Gn(a,M)}function Pi(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a;if(!n||!ms(s,u)){var u=s;o[i++]=0===a?0:a}}return o}function Mi(t){return"number"==typeof t?t:Fs(t)?R:+t}function Fi(t){if("string"==typeof t)return t;if(ws(t))return hn(t,Fi)+"";if(Fs(t))return vr?vr.call(t):"";var e=t+"";return"0"==e&&1/t==-j?"-0":e}function Hi(t,e,n){var r=-1,i=pn,o=t.length,s=!0,u=[],c=u;if(n)s=!1,i=dn;else if(o>=a){var l=e?null:Ao(t);if(l)return qn(l);s=!1,i=jn,c=new Tr}else c=e?[]:u;t:for(;++r<o;){var f=t[r],p=e?e(f):f;if(f=n||0!==f?f:0,s&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(f)}else i(c,p,n)||(c!==u&&c.push(p),u.push(f))}return u}function Bi(t,e){return null==(t=ia(t,e=Gi(e,t)))||delete t[ha(Sa(e))]}function Wi(t,e,n,r){return Oi(t,e,n(Zr(t,e)),r)}function qi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?ji(t,r?0:o,r?o+1:i):ji(t,r?o+1:0,r?i:o)}function Ui(t,e){var n=t;return n instanceof br&&(n=n.value()),gn(e,function(t,e){return e.func.apply(e.thisArg,vn([t],e.args))},n)}function zi(t,e,n){var i=t.length;if(i<2)return i?Hi(t[0]):[];for(var o=-1,a=r(i);++o<i;)for(var s=t[o],u=-1;++u<i;)u!=o&&(a[o]=Br(a[o]||s,t[u],e,n));return Hi(Kr(a,1),e,n)}function Vi(t,e,n){for(var r=-1,i=t.length,a=e.length,s={};++r<i;){var u=r<a?e[r]:o;n(s,t[r],u)}return s}function Ki(t){return Ts(t)?t:[]}function Qi(t){return"function"==typeof t?t:Lu}function Gi(t,e){return ws(t)?t:Xo(t,e)?[t]:da(Gs(t))}var Yi=Ai;function Xi(t,e,n){var r=t.length;return n=n===o?r:n,!e&&n>=r?t:ji(t,e,n)}var Ji=Le||function(t){return ze.clearTimeout(t)};function Zi(t,e){if(e)return t.slice();var n=t.length,r=xe?xe(n):new t.constructor(n);return t.copy(r),r}function to(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function eo(t,e){var n=e?to(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function no(t,e){if(t!==e){var n=t!==o,r=null===t,i=t==t,a=Fs(t),s=e!==o,u=null===e,c=e==e,l=Fs(e);if(!u&&!l&&!a&&t>e||a&&s&&c&&!u&&!l||r&&s&&c||!n&&c||!i)return 1;if(!r&&!a&&!l&&t<e||l&&n&&i&&!r&&!a||u&&n&&i||!s&&i||!c)return-1}return 0}function ro(t,e,n,i){for(var o=-1,a=t.length,s=n.length,u=-1,c=e.length,l=Qn(a-s,0),f=r(c+l),p=!i;++u<c;)f[u]=e[u];for(;++o<s;)(p||o<a)&&(f[n[o]]=t[o]);for(;l--;)f[u++]=t[o++];return f}function io(t,e,n,i){for(var o=-1,a=t.length,s=-1,u=n.length,c=-1,l=e.length,f=Qn(a-u,0),p=r(f+l),d=!i;++o<f;)p[o]=t[o];for(var h=o;++c<l;)p[h+c]=e[c];for(;++s<u;)(d||o<a)&&(p[h+n[s]]=t[o++]);return p}function oo(t,e){var n=-1,i=t.length;for(e||(e=r(i));++n<i;)e[n]=t[n];return e}function ao(t,e,n,r){var i=!n;n||(n={});for(var a=-1,s=e.length;++a<s;){var u=e[a],c=r?r(n[u],t[u],u,n,t):o;c===o&&(c=t[u]),i?$r(n,u,c):Ir(n,u,c)}return n}function so(t,e){return function(n,r){var i=ws(n)?sn:jr,o=e?e():{};return i(n,t,Fo(r,2),o)}}function uo(t){return Ai(function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:o,s=i>2?n[2]:o;for(a=t.length>3&&"function"==typeof a?(i--,a):o,s&&Yo(n[0],n[1],s)&&(a=i<3?o:a,i=1),e=re(e);++r<i;){var u=n[r];u&&t(e,u,r,a)}return e})}function co(t,e){return function(n,r){if(null==n)return n;if(!Cs(n))return t(n,r);for(var i=n.length,o=e?i:-1,a=re(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function lo(t){return function(e,n,r){for(var i=-1,o=re(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i];if(!1===n(o[u],u,o))break}return e}}function fo(t){return function(e){var n=Fn(e=Gs(e))?zn(e):o,r=n?n[0]:e.charAt(0),i=n?Xi(n,1).join(""):e.slice(1);return r[t]()+i}}function po(t){return function(e){return gn(ku(bu(e).replace(De,"")),t,"")}}function ho(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=mr(t.prototype),r=t.apply(n,e);return Is(r)?r:n}}function vo(t){return function(e,n,r){var i=re(e);if(!Cs(e)){var a=Fo(n,3);e=uu(e),n=function(t){return a(i[t],t,i)}}var s=t(e,n,r);return s>-1?i[a?e[s]:s]:o}}function go(t){return jo(function(e){var n=e.length,r=n,i=_r.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new ae(u);if(i&&!s&&"wrapper"==Po(a))var s=new _r([],!0)}for(r=s?r:n;++r<n;){var c=Po(a=e[r]),l="wrapper"==c?Ro(a):o;s=l&&Jo(l[0])&&l[1]==(T|b|x|E)&&!l[4].length&&1==l[9]?s[Po(l[0])].apply(s,l[3]):1==a.length&&Jo(a)?s[c]():s.thru(a)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&ws(r))return s.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}function mo(t,e,n,i,a,s,u,c,l,f){var p=e&T,d=e&m,h=e&y,v=e&(b|w),g=e&A,_=h?o:ho(t);return function m(){for(var y=arguments.length,b=r(y),w=y;w--;)b[w]=arguments[w];if(v)var x=Mo(m),C=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}(b,x);if(i&&(b=ro(b,i,a,v)),s&&(b=io(b,s,u,v)),y-=C,v&&y<f){var T=Wn(b,x);return To(t,e,mo,m.placeholder,n,b,T,c,l,f-y)}var E=d?n:this,A=h?E[t]:t;return y=b.length,c?b=function(t,e){for(var n=t.length,r=Gn(e.length,n),i=oo(t);r--;){var a=e[r];t[r]=Go(a,n)?i[a]:o}return t}(b,c):g&&y>1&&b.reverse(),p&&l<y&&(b.length=l),this&&this!==ze&&this instanceof m&&(A=_||ho(A)),A.apply(E,b)}}function yo(t,e){return function(n,r){return i=n,o=t,a=e(r),s={},Yr(i,function(t,e,n){o(s,a(t),e,n)}),s;var i,o,a,s}}function _o(t,e){return function(n,r){var i;if(n===o&&r===o)return e;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Fi(n),r=Fi(r)):(n=Mi(n),r=Mi(r)),i=t(n,r)}return i}}function bo(t){return jo(function(e){return e=hn(e,In(Fo())),Ai(function(n){var r=this;return t(e,function(t){return an(t,r,n)})})})}function wo(t,e){var n=(e=e===o?" ":Fi(e)).length;if(n<2)return n?Ei(e,t):e;var r=Ei(e,Ue(t/Un(e)));return Fn(e)?Xi(zn(r),0,t).join(""):r.slice(0,t)}function xo(t){return function(e,n,i){return i&&"number"!=typeof i&&Yo(e,n,i)&&(n=i=o),e=Us(e),n===o?(n=e,e=0):n=Us(n),function(t,e,n,i){for(var o=-1,a=Qn(Ue((e-t)/(n||1)),0),s=r(a);a--;)s[i?a:++o]=t,t+=n;return s}(e,n,i=i===o?e<n?1:-1:Us(i),t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Ks(e),n=Ks(n)),t(e,n)}}function To(t,e,n,r,i,a,s,u,c,l){var f=e&b;e|=f?x:C,(e&=~(f?C:x))&_||(e&=~(m|y));var p=[t,e,i,f?a:o,f?s:o,f?o:a,f?o:s,u,c,l],d=n.apply(o,p);return Jo(t)&&oa(d,p),d.placeholder=r,ua(d,t,e)}function Eo(t){var e=ne[t];return function(t,n){if(t=Ks(t),n=null==n?0:Gn(zs(n),292)){var r=(Gs(t)+"e").split("e");return+((r=(Gs(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Ao=rr&&1/qn(new rr([,-0]))[1]==j?function(t){return new rr(t)}:Fu;function So(t){return function(e){var n,r,i,o,a=zo(e);return a==Y?Hn(e):a==rt?(n=e,r=-1,i=Array(n.size),n.forEach(function(t){i[++r]=[t,t]}),i):(o=e,hn(t(e),function(t){return[t,o[t]]}))}}function ko(t,e,n,i,a,s,c,l){var p=e&y;if(!p&&"function"!=typeof t)throw new ae(u);var d=i?i.length:0;if(d||(e&=~(x|C),i=a=o),c=c===o?c:Qn(zs(c),0),l=l===o?l:zs(l),d-=a?a.length:0,e&C){var h=i,v=a;i=a=o}var g,A,S,k,O,D,I,N,j,L,$,R,P,M=p?o:Ro(t),F=[t,e,n,i,a,h,v,s,c,l];if(M&&function(t,e){var n=t[1],r=e[1],i=n|r,o=i<(m|y|T),a=r==T&&n==b||r==T&&n==E&&t[7].length<=e[8]||r==(T|E)&&e[7].length<=e[8]&&n==b;if(!o&&!a)return t;r&m&&(t[2]=e[2],i|=n&m?0:_);var s=e[3];if(s){var u=t[3];t[3]=u?ro(u,s,e[4]):s,t[4]=u?Wn(t[3],f):e[4]}(s=e[5])&&(u=t[5],t[5]=u?io(u,s,e[6]):s,t[6]=u?Wn(t[5],f):e[6]),(s=e[7])&&(t[7]=s),r&T&&(t[8]=null==t[8]?e[8]:Gn(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i}(F,M),t=F[0],e=F[1],n=F[2],i=F[3],a=F[4],!(l=F[9]=F[9]===o?p?0:t.length:Qn(F[9]-d,0))&&e&(b|w)&&(e&=~(b|w)),e&&e!=m)e==b||e==w?(I=e,N=l,j=ho(D=t),H=function t(){for(var e=arguments.length,n=r(e),i=e,a=Mo(t);i--;)n[i]=arguments[i];var s=e<3&&n[0]!==a&&n[e-1]!==a?[]:Wn(n,a);return(e-=s.length)<N?To(D,I,mo,t.placeholder,o,n,s,o,o,N-e):an(this&&this!==ze&&this instanceof t?j:D,this,n)}):e!=x&&e!=(m|x)||a.length?H=mo.apply(o,F):(A=n,S=i,k=e&m,O=ho(g=t),H=function t(){for(var e=-1,n=arguments.length,i=-1,o=S.length,a=r(o+n),s=this&&this!==ze&&this instanceof t?O:g;++i<o;)a[i]=S[i];for(;n--;)a[i++]=arguments[++e];return an(s,k?A:this,a)});else var H=($=n,R=e&m,P=ho(L=t),function t(){return(this&&this!==ze&&this instanceof t?P:L).apply(R?$:this,arguments)});return ua((M?Di:oa)(H,F),t,e)}function Oo(t,e,n,r){return t===o||ms(t,ce[n])&&!pe.call(r,n)?e:t}function Do(t,e,n,r,i,a){return Is(t)&&Is(e)&&(a.set(e,t),yi(t,e,o,Do,a),a.delete(e)),t}function Io(t){return $s(t)?o:t}function No(t,e,n,r,i,a){var s=n&v,u=t.length,c=e.length;if(u!=c&&!(s&&c>u))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var f=-1,p=!0,d=n&g?new Tr:o;for(a.set(t,e),a.set(e,t);++f<u;){var h=t[f],m=e[f];if(r)var y=s?r(m,h,f,e,t,a):r(h,m,f,t,e,a);if(y!==o){if(y)continue;p=!1;break}if(d){if(!yn(e,function(t,e){if(!jn(d,e)&&(h===t||i(h,t,n,r,a)))return d.push(e)})){p=!1;break}}else if(h!==m&&!i(h,m,n,r,a)){p=!1;break}}return a.delete(t),a.delete(e),p}function jo(t){return sa(ra(t,o,xa),t+"")}function Lo(t){return ti(t,uu,qo)}function $o(t){return ti(t,cu,Uo)}var Ro=ar?function(t){return ar.get(t)}:Fu;function Po(t){for(var e=t.name+"",n=sr[e],r=pe.call(sr,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function Mo(t){return(pe.call(gr,"placeholder")?gr:t).placeholder}function Fo(){var t=gr.iteratee||$u;return t=t===$u?fi:t,arguments.length?t(arguments[0],arguments[1]):t}function Ho(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Bo(t){for(var e=uu(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,ea(i)]}return e}function Wo(t,e){var n,r=null==(n=t)?o:n[e];return li(r)?r:o}var qo=Ke?function(t){return null==t?[]:(t=re(t),fn(Ke(t),function(e){return Ee.call(t,e)}))}:Vu,Uo=Ke?function(t){for(var e=[];t;)vn(e,qo(t)),t=Ce(t);return e}:Vu,zo=ei;function Vo(t,e,n){for(var r=-1,i=(e=Gi(e,t)).length,o=!1;++r<i;){var a=ha(e[r]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&Ds(i)&&Go(a,i)&&(ws(t)||bs(t))}function Ko(t){return"function"!=typeof t.constructor||ta(t)?{}:mr(Ce(t))}function Qo(t){return ws(t)||bs(t)||!!(Se&&t&&t[Se])}function Go(t,e){return!!(e=null==e?L:e)&&("number"==typeof t||Yt.test(t))&&t>-1&&t%1==0&&t<e}function Yo(t,e,n){if(!Is(n))return!1;var r=typeof e;return!!("number"==r?Cs(n)&&Go(e,n.length):"string"==r&&e in n)&&ms(n[e],t)}function Xo(t,e){if(ws(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fs(t))||It.test(t)||!Dt.test(t)||null!=e&&t in re(e)}function Jo(t){var e=Po(t),n=gr[e];if("function"!=typeof n||!(e in br.prototype))return!1;if(t===n)return!0;var r=Ro(n);return!!r&&t===r[0]}(tr&&zo(new tr(new ArrayBuffer(1)))!=lt||er&&zo(new er)!=Y||nr&&zo(nr.resolve())!=tt||rr&&zo(new rr)!=rt||ir&&zo(new ir)!=st)&&(zo=function(t){var e=ei(t),n=e==Z?t.constructor:o,r=n?va(n):"";if(r)switch(r){case ur:return lt;case cr:return Y;case lr:return tt;case fr:return rt;case pr:return st}return e});var Zo=le?ks:Ku;function ta(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ce)}function ea(t){return t==t&&!Is(t)}function na(t,e){return function(n){return null!=n&&n[t]===e&&(e!==o||t in re(n))}}function ra(t,e,n){return e=Qn(e===o?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=Qn(i.length-e,0),s=r(a);++o<a;)s[o]=i[e+o];o=-1;for(var u=r(e+1);++o<e;)u[o]=i[o];return u[e]=n(s),an(t,this,u)}}function ia(t,e){return e.length<2?t:Zr(t,ji(e,0,-1))}var oa=ca(Di),aa=qe||function(t,e){return ze.setTimeout(t,e)},sa=ca(Ii);function ua(t,e,n){var r,i,o,a=e+"";return sa(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ft,"{\n/* [wrapped with "+e+"] */\n")}(a,(o=a.match(Ht),r=o?o[1].split(Bt):[],i=n,un(H,function(t){var e="_."+t[0];i&t[1]&&!pn(r,e)&&r.push(e)}),r.sort())))}function ca(t){var e=0,n=0;return function(){var r=Yn(),i=D-(r-n);if(n=r,i>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(o,arguments)}}function la(t,e){var n=-1,r=t.length,i=r-1;for(e=e===o?r:e;++n<e;){var a=Ti(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=e,t}var fa,pa,da=(fa=fs(function(t){var e=[];return Nt.test(t)&&e.push(""),t.replace(jt,function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)}),e},function(t){return pa.size===l&&pa.clear(),t}),pa=fa.cache,fa);function ha(t){if("string"==typeof t||Fs(t))return t;var e=t+"";return"0"==e&&1/t==-j?"-0":e}function va(t){if(null!=t){try{return fe.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ga(t){if(t instanceof br)return t.clone();var e=new _r(t.__wrapped__,t.__chain__);return e.__actions__=oo(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var ma=Ai(function(t,e){return Ts(t)?Br(t,Kr(e,1,Ts,!0)):[]}),ya=Ai(function(t,e){var n=Sa(e);return Ts(n)&&(n=o),Ts(t)?Br(t,Kr(e,1,Ts,!0),Fo(n,2)):[]}),_a=Ai(function(t,e){var n=Sa(e);return Ts(n)&&(n=o),Ts(t)?Br(t,Kr(e,1,Ts,!0),o,n):[]});function ba(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:zs(n);return i<0&&(i=Qn(r+i,0)),wn(t,Fo(e,3),i)}function wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==o&&(i=zs(n),i=n<0?Qn(r+i,0):Gn(i,r-1)),wn(t,Fo(e,3),i,!0)}function xa(t){return null!=t&&t.length?Kr(t,1):[]}function Ca(t){return t&&t.length?t[0]:o}var Ta=Ai(function(t){var e=hn(t,Ki);return e.length&&e[0]===t[0]?oi(e):[]}),Ea=Ai(function(t){var e=Sa(t),n=hn(t,Ki);return e===Sa(n)?e=o:n.pop(),n.length&&n[0]===t[0]?oi(n,Fo(e,2)):[]}),Aa=Ai(function(t){var e=Sa(t),n=hn(t,Ki);return(e="function"==typeof e?e:o)&&n.pop(),n.length&&n[0]===t[0]?oi(n,o,e):[]});function Sa(t){var e=null==t?0:t.length;return e?t[e-1]:o}var ka=Ai(Oa);function Oa(t,e){return t&&t.length&&e&&e.length?xi(t,e):t}var Da=jo(function(t,e){var n=null==t?0:t.length,r=Rr(t,e);return Ci(t,hn(e,function(t){return Go(t,n)?+t:t}).sort(no)),r});function Ia(t){return null==t?t:Zn.call(t)}var Na=Ai(function(t){return Hi(Kr(t,1,Ts,!0))}),ja=Ai(function(t){var e=Sa(t);return Ts(e)&&(e=o),Hi(Kr(t,1,Ts,!0),Fo(e,2))}),La=Ai(function(t){var e=Sa(t);return e="function"==typeof e?e:o,Hi(Kr(t,1,Ts,!0),o,e)});function $a(t){if(!t||!t.length)return[];var e=0;return t=fn(t,function(t){if(Ts(t))return e=Qn(t.length,e),!0}),Dn(e,function(e){return hn(t,An(e))})}function Ra(t,e){if(!t||!t.length)return[];var n=$a(t);return null==e?n:hn(n,function(t){return an(e,o,t)})}var Pa=Ai(function(t,e){return Ts(t)?Br(t,e):[]}),Ma=Ai(function(t){return zi(fn(t,Ts))}),Fa=Ai(function(t){var e=Sa(t);return Ts(e)&&(e=o),zi(fn(t,Ts),Fo(e,2))}),Ha=Ai(function(t){var e=Sa(t);return e="function"==typeof e?e:o,zi(fn(t,Ts),o,e)}),Ba=Ai($a);var Wa=Ai(function(t){var e=t.length,n=e>1?t[e-1]:o;return Ra(t,n="function"==typeof n?(t.pop(),n):o)});function qa(t){var e=gr(t);return e.__chain__=!0,e}function Ua(t,e){return e(t)}var za=jo(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return Rr(e,t)};return!(e>1||this.__actions__.length)&&r instanceof br&&Go(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:Ua,args:[i],thisArg:o}),new _r(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(o),t})):this.thru(i)});var Va=so(function(t,e,n){pe.call(t,n)?++t[n]:$r(t,n,1)});var Ka=vo(ba),Qa=vo(wa);function Ga(t,e){return(ws(t)?un:Wr)(t,Fo(e,3))}function Ya(t,e){return(ws(t)?cn:qr)(t,Fo(e,3))}var Xa=so(function(t,e,n){pe.call(t,n)?t[n].push(e):$r(t,n,[e])});var Ja=Ai(function(t,e,n){var i=-1,o="function"==typeof e,a=Cs(t)?r(t.length):[];return Wr(t,function(t){a[++i]=o?an(e,t,n):ai(t,e,n)}),a}),Za=so(function(t,e,n){$r(t,n,e)});function ts(t,e){return(ws(t)?hn:vi)(t,Fo(e,3))}var es=so(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]});var ns=Ai(function(t,e){if(null==t)return[];var n=e.length;return n>1&&Yo(t,e[0],e[1])?e=[]:n>2&&Yo(e[0],e[1],e[2])&&(e=[e[0]]),bi(t,Kr(e,1),[])}),rs=He||function(){return ze.Date.now()};function is(t,e,n){return e=n?o:e,e=t&&null==e?t.length:e,ko(t,T,o,o,o,o,e)}function os(t,e){var n;if("function"!=typeof e)throw new ae(u);return t=zs(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=o),n}}var as=Ai(function(t,e,n){var r=m;if(n.length){var i=Wn(n,Mo(as));r|=x}return ko(t,r,e,n,i)}),ss=Ai(function(t,e,n){var r=m|y;if(n.length){var i=Wn(n,Mo(ss));r|=x}return ko(e,r,t,n,i)});function us(t,e,n){var r,i,a,s,c,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof t)throw new ae(u);function v(e){var n=r,a=i;return r=i=o,f=e,s=t.apply(a,n)}function g(t){var n=t-l;return l===o||n>=e||n<0||d&&t-f>=a}function m(){var t,n,r=rs();if(g(r))return y(r);c=aa(m,(n=e-((t=r)-l),d?Gn(n,a-(t-f)):n))}function y(t){return c=o,h&&r?v(t):(r=i=o,s)}function _(){var t,n=rs(),a=g(n);if(r=arguments,i=this,l=n,a){if(c===o)return f=t=l,c=aa(m,e),p?v(t):s;if(d)return c=aa(m,e),v(l)}return c===o&&(c=aa(m,e)),s}return e=Ks(e)||0,Is(n)&&(p=!!n.leading,a=(d="maxWait"in n)?Qn(Ks(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h),_.cancel=function(){c!==o&&Ji(c),f=0,r=l=i=c=o},_.flush=function(){return c===o?s:y(rs())},_}var cs=Ai(function(t,e){return Hr(t,1,e)}),ls=Ai(function(t,e,n){return Hr(t,Ks(e)||0,n)});function fs(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new ae(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(fs.Cache||Cr),n}function ps(t){if("function"!=typeof t)throw new ae(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}fs.Cache=Cr;var ds=Yi(function(t,e){var n=(e=1==e.length&&ws(e[0])?hn(e[0],In(Fo())):hn(Kr(e,1),In(Fo()))).length;return Ai(function(r){for(var i=-1,o=Gn(r.length,n);++i<o;)r[i]=e[i].call(this,r[i]);return an(t,this,r)})}),hs=Ai(function(t,e){var n=Wn(e,Mo(hs));return ko(t,x,o,e,n)}),vs=Ai(function(t,e){var n=Wn(e,Mo(vs));return ko(t,C,o,e,n)}),gs=jo(function(t,e){return ko(t,E,o,o,o,e)});function ms(t,e){return t===e||t!=t&&e!=e}var ys=Co(ni),_s=Co(function(t,e){return t>=e}),bs=si(function(){return arguments}())?si:function(t){return Ns(t)&&pe.call(t,"callee")&&!Ee.call(t,"callee")},ws=r.isArray,xs=Xe?In(Xe):function(t){return Ns(t)&&ei(t)==ct};function Cs(t){return null!=t&&Ds(t.length)&&!ks(t)}function Ts(t){return Ns(t)&&Cs(t)}var Es=Ge||Ku,As=Je?In(Je):function(t){return Ns(t)&&ei(t)==z};function Ss(t){if(!Ns(t))return!1;var e=ei(t);return e==K||e==V||"string"==typeof t.message&&"string"==typeof t.name&&!$s(t)}function ks(t){if(!Is(t))return!1;var e=ei(t);return e==Q||e==G||e==q||e==et}function Os(t){return"number"==typeof t&&t==zs(t)}function Ds(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=L}function Is(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ns(t){return null!=t&&"object"==typeof t}var js=Ze?In(Ze):function(t){return Ns(t)&&zo(t)==Y};function Ls(t){return"number"==typeof t||Ns(t)&&ei(t)==X}function $s(t){if(!Ns(t)||ei(t)!=Z)return!1;var e=Ce(t);if(null===e)return!0;var n=pe.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&fe.call(n)==ge}var Rs=tn?In(tn):function(t){return Ns(t)&&ei(t)==nt};var Ps=en?In(en):function(t){return Ns(t)&&zo(t)==rt};function Ms(t){return"string"==typeof t||!ws(t)&&Ns(t)&&ei(t)==it}function Fs(t){return"symbol"==typeof t||Ns(t)&&ei(t)==ot}var Hs=nn?In(nn):function(t){return Ns(t)&&Ds(t.length)&&!!Me[ei(t)]};var Bs=Co(hi),Ws=Co(function(t,e){return t<=e});function qs(t){if(!t)return[];if(Cs(t))return Ms(t)?zn(t):oo(t);if(ke&&t[ke])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[ke]());var e=zo(t);return(e==Y?Hn:e==rt?qn:mu)(t)}function Us(t){return t?(t=Ks(t))===j||t===-j?(t<0?-1:1)*$:t==t?t:0:0===t?t:0}function zs(t){var e=Us(t),n=e%1;return e==e?n?e-n:e:0}function Vs(t){return t?Pr(zs(t),0,P):0}function Ks(t){if("number"==typeof t)return t;if(Fs(t))return R;if(Is(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Is(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Rt,"");var n=Kt.test(t);return n||Gt.test(t)?We(t.slice(2),n?2:8):Vt.test(t)?R:+t}function Qs(t){return ao(t,cu(t))}function Gs(t){return null==t?"":Fi(t)}var Ys=uo(function(t,e){if(ta(e)||Cs(e))ao(e,uu(e),t);else for(var n in e)pe.call(e,n)&&Ir(t,n,e[n])}),Xs=uo(function(t,e){ao(e,cu(e),t)}),Js=uo(function(t,e,n,r){ao(e,cu(e),t,r)}),Zs=uo(function(t,e,n,r){ao(e,uu(e),t,r)}),tu=jo(Rr);var eu=Ai(function(t){return t.push(o,Oo),an(Js,o,t)}),nu=Ai(function(t){return t.push(o,Do),an(fu,o,t)});function ru(t,e,n){var r=null==t?o:Zr(t,e);return r===o?n:r}function iu(t,e){return null!=t&&Vo(t,e,ii)}var ou=yo(function(t,e,n){t[e]=n},Iu(Lu)),au=yo(function(t,e,n){pe.call(t,e)?t[e].push(n):t[e]=[n]},Fo),su=Ai(ai);function uu(t){return Cs(t)?Ar(t):pi(t)}function cu(t){return Cs(t)?Ar(t,!0):di(t)}var lu=uo(function(t,e,n){yi(t,e,n)}),fu=uo(function(t,e,n,r){yi(t,e,n,r)}),pu=jo(function(t,e){var n={};if(null==t)return n;var r=!1;e=hn(e,function(e){return e=Gi(e,t),r||(r=e.length>1),e}),ao(t,$o(t),n),r&&(n=Mr(n,p|d|h,Io));for(var i=e.length;i--;)Bi(n,e[i]);return n});var du=jo(function(t,e){return null==t?{}:wi(n=t,e,function(t,e){return iu(n,e)});var n});function hu(t,e){if(null==t)return{};var n=hn($o(t),function(t){return[t]});return e=Fo(e),wi(t,n,function(t,n){return e(t,n[0])})}var vu=So(uu),gu=So(cu);function mu(t){return null==t?[]:Nn(t,uu(t))}var yu=po(function(t,e,n){return e=e.toLowerCase(),t+(n?_u(e):e)});function _u(t){return Su(Gs(t).toLowerCase())}function bu(t){return(t=Gs(t))&&t.replace(Xt,Rn).replace(Ie,"")}var wu=po(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),xu=po(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),Cu=fo("toLowerCase");var Tu=po(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()});var Eu=po(function(t,e,n){return t+(n?" ":"")+Su(e)});var Au=po(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),Su=fo("toUpperCase");function ku(t,e,n){return t=Gs(t),(e=n?o:e)===o?(r=t,$e.test(r)?t.match(je)||[]:t.match(Wt)||[]):t.match(e)||[];var r}var Ou=Ai(function(t,e){try{return an(t,o,e)}catch(t){return Ss(t)?t:new te(t)}}),Du=jo(function(t,e){return un(e,function(e){e=ha(e),$r(t,e,as(t[e],t))}),t});function Iu(t){return function(){return t}}var Nu=go(),ju=go(!0);function Lu(t){return t}function $u(t){return fi("function"==typeof t?t:Mr(t,p))}var Ru=Ai(function(t,e){return function(n){return ai(n,t,e)}}),Pu=Ai(function(t,e){return function(n){return ai(t,n,e)}});function Mu(t,e,n){var r=uu(e),i=Jr(e,r);null!=n||Is(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Jr(e,uu(e)));var o=!(Is(n)&&"chain"in n&&!n.chain),a=ks(t);return un(i,function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__);return(n.__actions__=oo(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,vn([this.value()],arguments))})}),t}function Fu(){}var Hu=bo(hn),Bu=bo(ln),Wu=bo(yn);function qu(t){return Xo(t)?An(ha(t)):(e=t,function(t){return Zr(t,e)});var e}var Uu=xo(),zu=xo(!0);function Vu(){return[]}function Ku(){return!1}var Qu=_o(function(t,e){return t+e},0),Gu=Eo("ceil"),Yu=_o(function(t,e){return t/e},1),Xu=Eo("floor");var Ju,Zu=_o(function(t,e){return t*e},1),tc=Eo("round"),ec=_o(function(t,e){return t-e},0);return gr.after=function(t,e){if("function"!=typeof e)throw new ae(u);return t=zs(t),function(){if(--t<1)return e.apply(this,arguments)}},gr.ary=is,gr.assign=Ys,gr.assignIn=Xs,gr.assignInWith=Js,gr.assignWith=Zs,gr.at=tu,gr.before=os,gr.bind=as,gr.bindAll=Du,gr.bindKey=ss,gr.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return ws(t)?t:[t]},gr.chain=qa,gr.chunk=function(t,e,n){e=(n?Yo(t,e,n):e===o)?1:Qn(zs(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];for(var a=0,s=0,u=r(Ue(i/e));a<i;)u[s++]=ji(t,a,a+=e);return u},gr.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i},gr.concat=function(){var t=arguments.length;if(!t)return[];for(var e=r(t-1),n=arguments[0],i=t;i--;)e[i-1]=arguments[i];return vn(ws(n)?oo(n):[n],Kr(e,1))},gr.cond=function(t){var e=null==t?0:t.length,n=Fo();return t=e?hn(t,function(t){if("function"!=typeof t[1])throw new ae(u);return[n(t[0]),t[1]]}):[],Ai(function(n){for(var r=-1;++r<e;){var i=t[r];if(an(i[0],this,n))return an(i[1],this,n)}})},gr.conforms=function(t){return e=Mr(t,p),n=uu(e),function(t){return Fr(t,e,n)};var e,n},gr.constant=Iu,gr.countBy=Va,gr.create=function(t,e){var n=mr(t);return null==e?n:Lr(n,e)},gr.curry=function t(e,n,r){var i=ko(e,b,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},gr.curryRight=function t(e,n,r){var i=ko(e,w,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},gr.debounce=us,gr.defaults=eu,gr.defaultsDeep=nu,gr.defer=cs,gr.delay=ls,gr.difference=ma,gr.differenceBy=ya,gr.differenceWith=_a,gr.drop=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,(e=n||e===o?1:zs(e))<0?0:e,r):[]},gr.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,0,(e=r-(e=n||e===o?1:zs(e)))<0?0:e):[]},gr.dropRightWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!0,!0):[]},gr.dropWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!0):[]},gr.fill=function(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&Yo(t,e,n)&&(n=0,r=i),function(t,e,n,r){var i=t.length;for((n=zs(n))<0&&(n=-n>i?0:i+n),(r=r===o||r>i?i:zs(r))<0&&(r+=i),r=n>r?0:Vs(r);n<r;)t[n++]=e;return t}(t,e,n,r)):[]},gr.filter=function(t,e){return(ws(t)?fn:Vr)(t,Fo(e,3))},gr.flatMap=function(t,e){return Kr(ts(t,e),1)},gr.flatMapDeep=function(t,e){return Kr(ts(t,e),j)},gr.flatMapDepth=function(t,e,n){return n=n===o?1:zs(n),Kr(ts(t,e),n)},gr.flatten=xa,gr.flattenDeep=function(t){return null!=t&&t.length?Kr(t,j):[]},gr.flattenDepth=function(t,e){return null!=t&&t.length?Kr(t,e=e===o?1:zs(e)):[]},gr.flip=function(t){return ko(t,A)},gr.flow=Nu,gr.flowRight=ju,gr.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r},gr.functions=function(t){return null==t?[]:Jr(t,uu(t))},gr.functionsIn=function(t){return null==t?[]:Jr(t,cu(t))},gr.groupBy=Xa,gr.initial=function(t){return null!=t&&t.length?ji(t,0,-1):[]},gr.intersection=Ta,gr.intersectionBy=Ea,gr.intersectionWith=Aa,gr.invert=ou,gr.invertBy=au,gr.invokeMap=Ja,gr.iteratee=$u,gr.keyBy=Za,gr.keys=uu,gr.keysIn=cu,gr.map=ts,gr.mapKeys=function(t,e){var n={};return e=Fo(e,3),Yr(t,function(t,r,i){$r(n,e(t,r,i),t)}),n},gr.mapValues=function(t,e){var n={};return e=Fo(e,3),Yr(t,function(t,r,i){$r(n,r,e(t,r,i))}),n},gr.matches=function(t){return gi(Mr(t,p))},gr.matchesProperty=function(t,e){return mi(t,Mr(e,p))},gr.memoize=fs,gr.merge=lu,gr.mergeWith=fu,gr.method=Ru,gr.methodOf=Pu,gr.mixin=Mu,gr.negate=ps,gr.nthArg=function(t){return t=zs(t),Ai(function(e){return _i(e,t)})},gr.omit=pu,gr.omitBy=function(t,e){return hu(t,ps(Fo(e)))},gr.once=function(t){return os(2,t)},gr.orderBy=function(t,e,n,r){return null==t?[]:(ws(e)||(e=null==e?[]:[e]),ws(n=r?o:n)||(n=null==n?[]:[n]),bi(t,e,n))},gr.over=Hu,gr.overArgs=ds,gr.overEvery=Bu,gr.overSome=Wu,gr.partial=hs,gr.partialRight=vs,gr.partition=es,gr.pick=du,gr.pickBy=hu,gr.property=qu,gr.propertyOf=function(t){return function(e){return null==t?o:Zr(t,e)}},gr.pull=ka,gr.pullAll=Oa,gr.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?xi(t,e,Fo(n,2)):t},gr.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?xi(t,e,o,n):t},gr.pullAt=Da,gr.range=Uu,gr.rangeRight=zu,gr.rearg=gs,gr.reject=function(t,e){return(ws(t)?fn:Vr)(t,ps(Fo(e,3)))},gr.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=Fo(e,3);++r<o;){var a=t[r];e(a,r,t)&&(n.push(a),i.push(r))}return Ci(t,i),n},gr.rest=function(t,e){if("function"!=typeof t)throw new ae(u);return Ai(t,e=e===o?e:zs(e))},gr.reverse=Ia,gr.sampleSize=function(t,e,n){return e=(n?Yo(t,e,n):e===o)?1:zs(e),(ws(t)?kr:ki)(t,e)},gr.set=function(t,e,n){return null==t?t:Oi(t,e,n)},gr.setWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Oi(t,e,n,r)},gr.shuffle=function(t){return(ws(t)?Or:Ni)(t)},gr.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Yo(t,e,n)?(e=0,n=r):(e=null==e?0:zs(e),n=n===o?r:zs(n)),ji(t,e,n)):[]},gr.sortBy=ns,gr.sortedUniq=function(t){return t&&t.length?Pi(t):[]},gr.sortedUniqBy=function(t,e){return t&&t.length?Pi(t,Fo(e,2)):[]},gr.split=function(t,e,n){return n&&"number"!=typeof n&&Yo(t,e,n)&&(e=n=o),(n=n===o?P:n>>>0)?(t=Gs(t))&&("string"==typeof e||null!=e&&!Rs(e))&&!(e=Fi(e))&&Fn(t)?Xi(zn(t),0,n):t.split(e,n):[]},gr.spread=function(t,e){if("function"!=typeof t)throw new ae(u);return e=null==e?0:Qn(zs(e),0),Ai(function(n){var r=n[e],i=Xi(n,0,e);return r&&vn(i,r),an(t,this,i)})},gr.tail=function(t){var e=null==t?0:t.length;return e?ji(t,1,e):[]},gr.take=function(t,e,n){return t&&t.length?ji(t,0,(e=n||e===o?1:zs(e))<0?0:e):[]},gr.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,(e=r-(e=n||e===o?1:zs(e)))<0?0:e,r):[]},gr.takeRightWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!1,!0):[]},gr.takeWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3)):[]},gr.tap=function(t,e){return e(t),t},gr.throttle=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new ae(u);return Is(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),us(t,e,{leading:r,maxWait:e,trailing:i})},gr.thru=Ua,gr.toArray=qs,gr.toPairs=vu,gr.toPairsIn=gu,gr.toPath=function(t){return ws(t)?hn(t,ha):Fs(t)?[t]:oo(da(Gs(t)))},gr.toPlainObject=Qs,gr.transform=function(t,e,n){var r=ws(t),i=r||Es(t)||Hs(t);if(e=Fo(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:Is(t)&&ks(o)?mr(Ce(t)):{}}return(i?un:Yr)(t,function(t,r,i){return e(n,t,r,i)}),n},gr.unary=function(t){return is(t,1)},gr.union=Na,gr.unionBy=ja,gr.unionWith=La,gr.uniq=function(t){return t&&t.length?Hi(t):[]},gr.uniqBy=function(t,e){return t&&t.length?Hi(t,Fo(e,2)):[]},gr.uniqWith=function(t,e){return e="function"==typeof e?e:o,t&&t.length?Hi(t,o,e):[]},gr.unset=function(t,e){return null==t||Bi(t,e)},gr.unzip=$a,gr.unzipWith=Ra,gr.update=function(t,e,n){return null==t?t:Wi(t,e,Qi(n))},gr.updateWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Wi(t,e,Qi(n),r)},gr.values=mu,gr.valuesIn=function(t){return null==t?[]:Nn(t,cu(t))},gr.without=Pa,gr.words=ku,gr.wrap=function(t,e){return hs(Qi(e),t)},gr.xor=Ma,gr.xorBy=Fa,gr.xorWith=Ha,gr.zip=Ba,gr.zipObject=function(t,e){return Vi(t||[],e||[],Ir)},gr.zipObjectDeep=function(t,e){return Vi(t||[],e||[],Oi)},gr.zipWith=Wa,gr.entries=vu,gr.entriesIn=gu,gr.extend=Xs,gr.extendWith=Js,Mu(gr,gr),gr.add=Qu,gr.attempt=Ou,gr.camelCase=yu,gr.capitalize=_u,gr.ceil=Gu,gr.clamp=function(t,e,n){return n===o&&(n=e,e=o),n!==o&&(n=(n=Ks(n))==n?n:0),e!==o&&(e=(e=Ks(e))==e?e:0),Pr(Ks(t),e,n)},gr.clone=function(t){return Mr(t,h)},gr.cloneDeep=function(t){return Mr(t,p|h)},gr.cloneDeepWith=function(t,e){return Mr(t,p|h,e="function"==typeof e?e:o)},gr.cloneWith=function(t,e){return Mr(t,h,e="function"==typeof e?e:o)},gr.conformsTo=function(t,e){return null==e||Fr(t,e,uu(e))},gr.deburr=bu,gr.defaultTo=function(t,e){return null==t||t!=t?e:t},gr.divide=Yu,gr.endsWith=function(t,e,n){t=Gs(t),e=Fi(e);var r=t.length,i=n=n===o?r:Pr(zs(n),0,r);return(n-=e.length)>=0&&t.slice(n,i)==e},gr.eq=ms,gr.escape=function(t){return(t=Gs(t))&&At.test(t)?t.replace(Tt,Pn):t},gr.escapeRegExp=function(t){return(t=Gs(t))&&$t.test(t)?t.replace(Lt,"\\$&"):t},gr.every=function(t,e,n){var r=ws(t)?ln:Ur;return n&&Yo(t,e,n)&&(e=o),r(t,Fo(e,3))},gr.find=Ka,gr.findIndex=ba,gr.findKey=function(t,e){return bn(t,Fo(e,3),Yr)},gr.findLast=Qa,gr.findLastIndex=wa,gr.findLastKey=function(t,e){return bn(t,Fo(e,3),Xr)},gr.floor=Xu,gr.forEach=Ga,gr.forEachRight=Ya,gr.forIn=function(t,e){return null==t?t:Qr(t,Fo(e,3),cu)},gr.forInRight=function(t,e){return null==t?t:Gr(t,Fo(e,3),cu)},gr.forOwn=function(t,e){return t&&Yr(t,Fo(e,3))},gr.forOwnRight=function(t,e){return t&&Xr(t,Fo(e,3))},gr.get=ru,gr.gt=ys,gr.gte=_s,gr.has=function(t,e){return null!=t&&Vo(t,e,ri)},gr.hasIn=iu,gr.head=Ca,gr.identity=Lu,gr.includes=function(t,e,n,r){t=Cs(t)?t:mu(t),n=n&&!r?zs(n):0;var i=t.length;return n<0&&(n=Qn(i+n,0)),Ms(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&xn(t,e,n)>-1},gr.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:zs(n);return i<0&&(i=Qn(r+i,0)),xn(t,e,i)},gr.inRange=function(t,e,n){return e=Us(e),n===o?(n=e,e=0):n=Us(n),t=Ks(t),(r=t)>=Gn(i=e,a=n)&&r<Qn(i,a);var r,i,a},gr.invoke=su,gr.isArguments=bs,gr.isArray=ws,gr.isArrayBuffer=xs,gr.isArrayLike=Cs,gr.isArrayLikeObject=Ts,gr.isBoolean=function(t){return!0===t||!1===t||Ns(t)&&ei(t)==U},gr.isBuffer=Es,gr.isDate=As,gr.isElement=function(t){return Ns(t)&&1===t.nodeType&&!$s(t)},gr.isEmpty=function(t){if(null==t)return!0;if(Cs(t)&&(ws(t)||"string"==typeof t||"function"==typeof t.splice||Es(t)||Hs(t)||bs(t)))return!t.length;var e=zo(t);if(e==Y||e==rt)return!t.size;if(ta(t))return!pi(t).length;for(var n in t)if(pe.call(t,n))return!1;return!0},gr.isEqual=function(t,e){return ui(t,e)},gr.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:o)?n(t,e):o;return r===o?ui(t,e,o,n):!!r},gr.isError=Ss,gr.isFinite=function(t){return"number"==typeof t&&Ye(t)},gr.isFunction=ks,gr.isInteger=Os,gr.isLength=Ds,gr.isMap=js,gr.isMatch=function(t,e){return t===e||ci(t,e,Bo(e))},gr.isMatchWith=function(t,e,n){return n="function"==typeof n?n:o,ci(t,e,Bo(e),n)},gr.isNaN=function(t){return Ls(t)&&t!=+t},gr.isNative=function(t){if(Zo(t))throw new te(s);return li(t)},gr.isNil=function(t){return null==t},gr.isNull=function(t){return null===t},gr.isNumber=Ls,gr.isObject=Is,gr.isObjectLike=Ns,gr.isPlainObject=$s,gr.isRegExp=Rs,gr.isSafeInteger=function(t){return Os(t)&&t>=-L&&t<=L},gr.isSet=Ps,gr.isString=Ms,gr.isSymbol=Fs,gr.isTypedArray=Hs,gr.isUndefined=function(t){return t===o},gr.isWeakMap=function(t){return Ns(t)&&zo(t)==st},gr.isWeakSet=function(t){return Ns(t)&&ei(t)==ut},gr.join=function(t,e){return null==t?"":_n.call(t,e)},gr.kebabCase=wu,gr.last=Sa,gr.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==o&&(i=(i=zs(n))<0?Qn(r+i,0):Gn(i,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}(t,e,i):wn(t,Tn,i,!0)},gr.lowerCase=xu,gr.lowerFirst=Cu,gr.lt=Bs,gr.lte=Ws,gr.max=function(t){return t&&t.length?zr(t,Lu,ni):o},gr.maxBy=function(t,e){return t&&t.length?zr(t,Fo(e,2),ni):o},gr.mean=function(t){return En(t,Lu)},gr.meanBy=function(t,e){return En(t,Fo(e,2))},gr.min=function(t){return t&&t.length?zr(t,Lu,hi):o},gr.minBy=function(t,e){return t&&t.length?zr(t,Fo(e,2),hi):o},gr.stubArray=Vu,gr.stubFalse=Ku,gr.stubObject=function(){return{}},gr.stubString=function(){return""},gr.stubTrue=function(){return!0},gr.multiply=Zu,gr.nth=function(t,e){return t&&t.length?_i(t,zs(e)):o},gr.noConflict=function(){return ze._===this&&(ze._=me),this},gr.noop=Fu,gr.now=rs,gr.pad=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return wo(Ve(i),n)+t+wo(Ue(i),n)},gr.padEnd=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;return e&&r<e?t+wo(e-r,n):t},gr.padStart=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;return e&&r<e?wo(e-r,n)+t:t},gr.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Xn(Gs(t).replace(Pt,""),e||0)},gr.random=function(t,e,n){if(n&&"boolean"!=typeof n&&Yo(t,e,n)&&(e=n=o),n===o&&("boolean"==typeof e?(n=e,e=o):"boolean"==typeof t&&(n=t,t=o)),t===o&&e===o?(t=0,e=1):(t=Us(t),e===o?(e=t,t=0):e=Us(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=Jn();return Gn(t+i*(e-t+Be("1e-"+((i+"").length-1))),e)}return Ti(t,e)},gr.reduce=function(t,e,n){var r=ws(t)?gn:kn,i=arguments.length<3;return r(t,Fo(e,4),n,i,Wr)},gr.reduceRight=function(t,e,n){var r=ws(t)?mn:kn,i=arguments.length<3;return r(t,Fo(e,4),n,i,qr)},gr.repeat=function(t,e,n){return e=(n?Yo(t,e,n):e===o)?1:zs(e),Ei(Gs(t),e)},gr.replace=function(){var t=arguments,e=Gs(t[0]);return t.length<3?e:e.replace(t[1],t[2])},gr.result=function(t,e,n){var r=-1,i=(e=Gi(e,t)).length;for(i||(i=1,t=o);++r<i;){var a=null==t?o:t[ha(e[r])];a===o&&(r=i,a=n),t=ks(a)?a.call(t):a}return t},gr.round=tc,gr.runInContext=t,gr.sample=function(t){return(ws(t)?Sr:Si)(t)},gr.size=function(t){if(null==t)return 0;if(Cs(t))return Ms(t)?Un(t):t.length;var e=zo(t);return e==Y||e==rt?t.size:pi(t).length},gr.snakeCase=Tu,gr.some=function(t,e,n){var r=ws(t)?yn:Li;return n&&Yo(t,e,n)&&(e=o),r(t,Fo(e,3))},gr.sortedIndex=function(t,e){return $i(t,e)},gr.sortedIndexBy=function(t,e,n){return Ri(t,e,Fo(n,2))},gr.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=$i(t,e);if(r<n&&ms(t[r],e))return r}return-1},gr.sortedLastIndex=function(t,e){return $i(t,e,!0)},gr.sortedLastIndexBy=function(t,e,n){return Ri(t,e,Fo(n,2),!0)},gr.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=$i(t,e,!0)-1;if(ms(t[n],e))return n}return-1},gr.startCase=Eu,gr.startsWith=function(t,e,n){return t=Gs(t),n=null==n?0:Pr(zs(n),0,t.length),e=Fi(e),t.slice(n,n+e.length)==e},gr.subtract=ec,gr.sum=function(t){return t&&t.length?On(t,Lu):0},gr.sumBy=function(t,e){return t&&t.length?On(t,Fo(e,2)):0},gr.template=function(t,e,n){var r=gr.templateSettings;n&&Yo(t,e,n)&&(e=o),t=Gs(t),e=Js({},e,r,Oo);var i,a,s=Js({},e.imports,r.imports,Oo),u=uu(s),c=Nn(s,u),l=0,f=e.interpolate||Jt,p="__p += '",d=ie((e.escape||Jt).source+"|"+f.source+"|"+(f===Ot?Ut:Jt).source+"|"+(e.evaluate||Jt).source+"|$","g"),h="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++Pe+"]")+"\n";t.replace(d,function(e,n,r,o,s,u){return r||(r=o),p+=t.slice(l,u).replace(Zt,Mn),n&&(i=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+e.length,e}),p+="';\n";var v=e.variable;v||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace(bt,""):p).replace(wt,"$1").replace(xt,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Ou(function(){return ee(u,h+"return "+p).apply(o,c)});if(g.source=p,Ss(g))throw g;return g},gr.times=function(t,e){if((t=zs(t))<1||t>L)return[];var n=P,r=Gn(t,P);e=Fo(e),t-=P;for(var i=Dn(r,e);++n<t;)e(n);return i},gr.toFinite=Us,gr.toInteger=zs,gr.toLength=Vs,gr.toLower=function(t){return Gs(t).toLowerCase()},gr.toNumber=Ks,gr.toSafeInteger=function(t){return t?Pr(zs(t),-L,L):0===t?t:0},gr.toString=Gs,gr.toUpper=function(t){return Gs(t).toUpperCase()},gr.trim=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Rt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t),i=zn(e);return Xi(r,Ln(r,i),$n(r,i)+1).join("")},gr.trimEnd=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Mt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t);return Xi(r,0,$n(r,zn(e))+1).join("")},gr.trimStart=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Pt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t);return Xi(r,Ln(r,zn(e))).join("")},gr.truncate=function(t,e){var n=S,r=k;if(Is(e)){var i="separator"in e?e.separator:i;n="length"in e?zs(e.length):n,r="omission"in e?Fi(e.omission):r}var a=(t=Gs(t)).length;if(Fn(t)){var s=zn(t);a=s.length}if(n>=a)return t;var u=n-Un(r);if(u<1)return r;var c=s?Xi(s,0,u).join(""):t.slice(0,u);if(i===o)return c+r;if(s&&(u+=c.length-u),Rs(i)){if(t.slice(u).search(i)){var l,f=c;for(i.global||(i=ie(i.source,Gs(zt.exec(i))+"g")),i.lastIndex=0;l=i.exec(f);)var p=l.index;c=c.slice(0,p===o?u:p)}}else if(t.indexOf(Fi(i),u)!=u){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r},gr.unescape=function(t){return(t=Gs(t))&&Et.test(t)?t.replace(Ct,Vn):t},gr.uniqueId=function(t){var e=++de;return Gs(t)+e},gr.upperCase=Au,gr.upperFirst=Su,gr.each=Ga,gr.eachRight=Ya,gr.first=Ca,Mu(gr,(Ju={},Yr(gr,function(t,e){pe.call(gr.prototype,e)||(Ju[e]=t)}),Ju),{chain:!1}),gr.VERSION="4.17.4",un(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){gr[t].placeholder=gr}),un(["drop","take"],function(t,e){br.prototype[t]=function(n){n=n===o?1:Qn(zs(n),0);var r=this.__filtered__&&!e?new br(this):this.clone();return r.__filtered__?r.__takeCount__=Gn(n,r.__takeCount__):r.__views__.push({size:Gn(n,P),type:t+(r.__dir__<0?"Right":"")}),r},br.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),un(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==I||3==n;br.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Fo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),un(["head","last"],function(t,e){var n="take"+(e?"Right":"");br.prototype[t]=function(){return this[n](1).value()[0]}}),un(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");br.prototype[t]=function(){return this.__filtered__?new br(this):this[n](1)}}),br.prototype.compact=function(){return this.filter(Lu)},br.prototype.find=function(t){return this.filter(t).head()},br.prototype.findLast=function(t){return this.reverse().find(t)},br.prototype.invokeMap=Ai(function(t,e){return"function"==typeof t?new br(this):this.map(function(n){return ai(n,t,e)})}),br.prototype.reject=function(t){return this.filter(ps(Fo(t)))},br.prototype.slice=function(t,e){t=zs(t);var n=this;return n.__filtered__&&(t>0||e<0)?new br(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==o&&(n=(e=zs(e))<0?n.dropRight(-e):n.take(e-t)),n)},br.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},br.prototype.toArray=function(){return this.take(P)},Yr(br.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=gr[r?"take"+("last"==e?"Right":""):e],a=r||/^find/.test(e);i&&(gr.prototype[e]=function(){var e=this.__wrapped__,s=r?[1]:arguments,u=e instanceof br,c=s[0],l=u||ws(e),f=function(t){var e=i.apply(gr,vn([t],s));return r&&p?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var p=this.__chain__,d=!!this.__actions__.length,h=a&&!p,v=u&&!d;if(!a&&l){e=v?e:new br(this);var g=t.apply(e,s);return g.__actions__.push({func:Ua,args:[f],thisArg:o}),new _r(g,p)}return h&&v?t.apply(this,s):(g=this.thru(f),h?r?g.value()[0]:g.value():g)})}),un(["pop","push","shift","sort","splice","unshift"],function(t){var e=se[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);gr.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ws(i)?i:[],t)}return this[n](function(n){return e.apply(ws(n)?n:[],t)})}}),Yr(br.prototype,function(t,e){var n=gr[e];if(n){var r=n.name+"";(sr[r]||(sr[r]=[])).push({name:e,func:n})}}),sr[mo(o,y).name]=[{name:"wrapper",func:o}],br.prototype.clone=function(){var t=new br(this.__wrapped__);return t.__actions__=oo(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=oo(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=oo(this.__views__),t},br.prototype.reverse=function(){if(this.__filtered__){var t=new br(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},br.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=ws(t),r=e<0,i=n?t.length:0,o=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=Gn(e,t+a);break;case"takeRight":t=Qn(t,e-a)}}return{start:t,end:e}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,c=r?s:a-1,l=this.__iteratees__,f=l.length,p=0,d=Gn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Ui(t,this.__actions__);var h=[];t:for(;u--&&p<d;){for(var v=-1,g=t[c+=e];++v<f;){var m=l[v],y=m.iteratee,_=m.type,b=y(g);if(_==N)g=b;else if(!b){if(_==I)continue t;break t}}h[p++]=g}return h},gr.prototype.at=za,gr.prototype.chain=function(){return qa(this)},gr.prototype.commit=function(){return new _r(this.value(),this.__chain__)},gr.prototype.next=function(){this.__values__===o&&(this.__values__=qs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?o:this.__values__[this.__index__++]}},gr.prototype.plant=function(t){for(var e,n=this;n instanceof yr;){var r=ga(n);r.__index__=0,r.__values__=o,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e},gr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof br){var e=t;return this.__actions__.length&&(e=new br(this)),(e=e.reverse()).__actions__.push({func:Ua,args:[Ia],thisArg:o}),new _r(e,this.__chain__)}return this.thru(Ia)},gr.prototype.toJSON=gr.prototype.valueOf=gr.prototype.value=function(){return Ui(this.__wrapped__,this.__actions__)},gr.prototype.first=gr.prototype.head,ke&&(gr.prototype[ke]=function(){return this}),gr}();ze._=Kn,(i=function(){return Kn}.call(e,n,e,r))===o||(r.exports=i)}).call(this)}).call(e,n(1),n(15)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){(function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var a,s,u,c,l,f,p,d,h,v,g,m,y,_,b,w,x,C,T,E,A,S,k,O,D,I,N,j,L,$,R,P,M,F,H,B,W,q,U,z,V,K,Q,G,Y,X,J,Z,tt,et,nt,rt,it,ot,at,st,ut,ct,lt,ft,pt,dt,ht,vt,gt,mt,yt,_t,bt,wt,xt,Ct,Tt,Et,At,St,kt,Ot,Dt,It,Nt,jt,Lt,$t,Rt,Pt,Mt,Ft,Ht,Bt,Wt,qt,Ut,zt,Vt,Kt,Qt,Gt,Yt,Xt,Jt,Zt,te,ee,ne,re,ie,oe,ae,se,ue,ce,le,fe,pe,de,he,ve,ge,me,ye,_e,be,we,xe,Ce,Te,Ee,Ae,Se,ke,Oe,De,Ie,Ne,je,Le,$e,Re,Pe,Me,Fe,He,Be,We,qe,Ue,ze,Ve,Ke,Qe,Ge,Ye,Xe,Je,Ze,tn,en,nn,rn,on,an,sn,un,cn,ln,fn,pn,dn,hn,vn,gn,mn,yn,_n,bn,wn,xn=function(t){var e=!1;function n(e){var n=this,i=!1;return t(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},e),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,r=e.getAttribute("data-target");r&&"#"!==r||(r=e.getAttribute("href")||""),"#"===r.charAt(0)&&(n=r,r=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(r).length>0?r:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=e[i],s=a&&r.isElement(a)?"element":(u=a,{}.toString.call(u).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var u}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(t.event.special[r.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),r}(e),Cn=(s="alert",c="."+(u="bs.alert"),l=(a=e).fn[s],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},p="alert",d="fade",h="show",v=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){a.removeData(this._element,u),this._element=null},e._getRootElement=function(t){var e=xn.getSelectorFromElement(t),n=!1;return e&&(n=a(e)[0]),n||(n=a(t).closest("."+p)[0]),n},e._triggerCloseEvent=function(t){var e=a.Event(f.CLOSE);return a(t).trigger(e),e},e._removeElement=function(t){var e=this;a(t).removeClass(h),xn.supportsTransitionEnd()&&a(t).hasClass(d)?a(t).one(xn.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){a(t).detach().trigger(f.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=a(this),r=n.data(u);r||(r=new t(this),n.data(u,r)),"close"===e&&r[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),a(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),a.fn[s]=v._jQueryInterface,a.fn[s].Constructor=v,a.fn[s].noConflict=function(){return a.fn[s]=l,v._jQueryInterface},v),Tn=(m="button",_="."+(y="bs.button"),b=".data-api",w=(g=e).fn[m],x="active",C="btn",T="focus",E='[data-toggle^="button"]',A='[data-toggle="buttons"]',S="input",k=".active",O=".btn",D={CLICK_DATA_API:"click"+_+b,FOCUS_BLUR_DATA_API:"focus"+_+b+" blur"+_+b},I=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var r=g(this._element).find(S)[0];if(r){if("radio"===r.type)if(r.checked&&g(this._element).hasClass(x))t=!1;else{var i=g(n).find(k)[0];i&&g(i).removeClass(x)}if(t){if(r.hasAttribute("disabled")||n.hasAttribute("disabled")||r.classList.contains("disabled")||n.classList.contains("disabled"))return;r.checked=!g(this._element).hasClass(x),g(r).trigger("change")}r.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(x)),t&&g(this._element).toggleClass(x)},e.dispose=function(){g.removeData(this._element,y),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(y);n||(n=new t(this),g(this).data(y,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),g(document).on(D.CLICK_DATA_API,E,function(t){t.preventDefault();var e=t.target;g(e).hasClass(C)||(e=g(e).closest(O)),I._jQueryInterface.call(g(e),"toggle")}).on(D.FOCUS_BLUR_DATA_API,E,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),g.fn[m]=I._jQueryInterface,g.fn[m].Constructor=I,g.fn[m].noConflict=function(){return g.fn[m]=w,I._jQueryInterface},I),En=(j="carousel",$="."+(L="bs.carousel"),R=(N=e).fn[j],P={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},F="next",H="prev",B="left",W="right",q={SLIDE:"slide"+$,SLID:"slid"+$,KEYDOWN:"keydown"+$,MOUSEENTER:"mouseenter"+$,MOUSELEAVE:"mouseleave"+$,TOUCHEND:"touchend"+$,LOAD_DATA_API:"load"+$+".data-api",CLICK_DATA_API:"click"+$+".data-api"},U="carousel",z="active",V="slide",K="carousel-item-right",Q="carousel-item-left",G="carousel-item-next",Y="carousel-item-prev",X={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},J=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=N(t)[0],this._indicatorsElement=N(this._element).find(X.INDICATORS)[0],this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(F)},e.nextWhenVisible=function(){!document.hidden&&N(this._element).is(":visible")&&"hidden"!==N(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(H)},e.pause=function(t){t||(this._isPaused=!0),N(this._element).find(X.NEXT_PREV)[0]&&xn.supportsTransitionEnd()&&(xn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=N(this._element).find(X.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)N(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var r=t>n?F:H;this._slide(r,this._items[t])}},e.dispose=function(){N(this._element).off($),N.removeData(this._element,L),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=o({},P,t),xn.typeCheckConfig(j,t,M),t},e._addEventListeners=function(){var t=this;this._config.keyboard&&N(this._element).on(q.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(N(this._element).on(q.MOUSEENTER,function(e){return t.pause(e)}).on(q.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&N(this._element).on(q.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=N.makeArray(N(t).parent().find(X.ITEM)),this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===F,r=t===H,i=this._getItemIndex(e),o=this._items.length-1;if((r&&0===i||n&&i===o)&&!this._config.wrap)return e;var a=(i+(t===H?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),r=this._getItemIndex(N(this._element).find(X.ACTIVE_ITEM)[0]),i=N.Event(q.SLIDE,{relatedTarget:t,direction:e,from:r,to:n});return N(this._element).trigger(i),i},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){N(this._indicatorsElement).find(X.ACTIVE).removeClass(z);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&N(e).addClass(z)}},e._slide=function(t,e){var n,r,i,o=this,a=N(this._element).find(X.ACTIVE_ITEM)[0],s=this._getItemIndex(a),u=e||a&&this._getItemByDirection(t,a),c=this._getItemIndex(u),l=Boolean(this._interval);if(t===F?(n=Q,r=G,i=B):(n=K,r=Y,i=W),u&&N(u).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(u,i).isDefaultPrevented()&&a&&u){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(u);var f=N.Event(q.SLID,{relatedTarget:u,direction:i,from:s,to:c});xn.supportsTransitionEnd()&&N(this._element).hasClass(V)?(N(u).addClass(r),xn.reflow(u),N(a).addClass(n),N(u).addClass(n),N(a).one(xn.TRANSITION_END,function(){N(u).removeClass(n+" "+r).addClass(z),N(a).removeClass(z+" "+r+" "+n),o._isSliding=!1,setTimeout(function(){return N(o._element).trigger(f)},0)}).emulateTransitionEnd(600)):(N(a).removeClass(z),N(u).addClass(z),this._isSliding=!1,N(this._element).trigger(f)),l&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=N(this).data(L),r=o({},P,N(this).data());"object"==typeof e&&(r=o({},r,e));var i="string"==typeof e?e:r.slide;if(n||(n=new t(this,r),N(this).data(L,n)),"number"==typeof e)n.to(e);else if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'+i+'"');n[i]()}else r.interval&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=xn.getSelectorFromElement(this);if(n){var r=N(n)[0];if(r&&N(r).hasClass(U)){var i=o({},N(r).data(),N(this).data()),a=this.getAttribute("data-slide-to");a&&(i.interval=!1),t._jQueryInterface.call(N(r),i),a&&N(r).data(L).to(a),e.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return P}}]),t}(),N(document).on(q.CLICK_DATA_API,X.DATA_SLIDE,J._dataApiClickHandler),N(window).on(q.LOAD_DATA_API,function(){N(X.DATA_RIDE).each(function(){var t=N(this);J._jQueryInterface.call(t,t.data())})}),N.fn[j]=J._jQueryInterface,N.fn[j].Constructor=J,N.fn[j].noConflict=function(){return N.fn[j]=R,J._jQueryInterface},J),An=(tt="collapse",nt="."+(et="bs.collapse"),rt=(Z=e).fn[tt],it={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},st="show",ut="collapse",ct="collapsing",lt="collapsed",ft="width",pt="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},ht=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=Z.makeArray(Z('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=Z(dt.DATA_TOGGLE),r=0;r<n.length;r++){var i=n[r],o=xn.getSelectorFromElement(i);null!==o&&Z(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){Z(this._element).hasClass(st)?this.hide():this.show()},e.show=function(){var e,n,r=this;if(!this._isTransitioning&&!Z(this._element).hasClass(st)&&(this._parent&&0===(e=Z.makeArray(Z(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(n=Z(e).not(this._selector).data(et))&&n._isTransitioning))){var i=Z.Event(at.SHOW);if(Z(this._element).trigger(i),!i.isDefaultPrevented()){e&&(t._jQueryInterface.call(Z(e).not(this._selector),"hide"),n||Z(e).data(et,null));var o=this._getDimension();Z(this._element).removeClass(ut).addClass(ct),this._element.style[o]=0,this._triggerArray.length>0&&Z(this._triggerArray).removeClass(lt).attr("aria-expanded",!0),this.setTransitioning(!0);var a=function(){Z(r._element).removeClass(ct).addClass(ut).addClass(st),r._element.style[o]="",r.setTransitioning(!1),Z(r._element).trigger(at.SHOWN)};if(xn.supportsTransitionEnd()){var s="scroll"+(o[0].toUpperCase()+o.slice(1));Z(this._element).one(xn.TRANSITION_END,a).emulateTransitionEnd(600),this._element.style[o]=this._element[s]+"px"}else a()}}},e.hide=function(){var t=this;if(!this._isTransitioning&&Z(this._element).hasClass(st)){var e=Z.Event(at.HIDE);if(Z(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",xn.reflow(this._element),Z(this._element).addClass(ct).removeClass(ut).removeClass(st),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var i=this._triggerArray[r],o=xn.getSelectorFromElement(i);if(null!==o)Z(o).hasClass(st)||Z(i).addClass(lt).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){t.setTransitioning(!1),Z(t._element).removeClass(ct).addClass(ut).trigger(at.HIDDEN)};this._element.style[n]="",xn.supportsTransitionEnd()?Z(this._element).one(xn.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){Z.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=o({},it,t)).toggle=Boolean(t.toggle),xn.typeCheckConfig(tt,t,ot),t},e._getDimension=function(){return Z(this._element).hasClass(ft)?ft:pt},e._getParent=function(){var e=this,n=null;xn.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=Z(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return Z(n).find(r).each(function(n,r){e._addAriaAndCollapsedClass(t._getTargetFromElement(r),[r])}),n},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=Z(t).hasClass(st);e.length>0&&Z(e).toggleClass(lt,!n).attr("aria-expanded",n)}},t._getTargetFromElement=function(t){var e=xn.getSelectorFromElement(t);return e?Z(e)[0]:null},t._jQueryInterface=function(e){return this.each(function(){var n=Z(this),r=n.data(et),i=o({},it,n.data(),"object"==typeof e&&e);if(!r&&i.toggle&&/show|hide/.test(e)&&(i.toggle=!1),r||(r=new t(this,i),n.data(et,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return it}}]),t}(),Z(document).on(at.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=Z(this),n=xn.getSelectorFromElement(this);Z(n).each(function(){var t=Z(this),n=t.data(et)?"toggle":e.data();ht._jQueryInterface.call(t,n)})}),Z.fn[tt]=ht._jQueryInterface,Z.fn[tt].Constructor=ht,Z.fn[tt].noConflict=function(){return Z.fn[tt]=rt,ht._jQueryInterface},ht),Sn=(gt="dropdown",yt="."+(mt="bs.dropdown"),_t=".data-api",bt=(vt=e).fn[gt],wt=new RegExp("38|40|27"),xt={HIDE:"hide"+yt,HIDDEN:"hidden"+yt,SHOW:"show"+yt,SHOWN:"shown"+yt,CLICK:"click"+yt,CLICK_DATA_API:"click"+yt+_t,KEYDOWN_DATA_API:"keydown"+yt+_t,KEYUP_DATA_API:"keyup"+yt+_t},Ct="disabled",Tt="show",Et="dropup",At="dropright",St="dropleft",kt="dropdown-menu-right",Ot="dropdown-menu-left",Dt="position-static",It='[data-toggle="dropdown"]',Nt=".dropdown form",jt=".dropdown-menu",Lt=".navbar-nav",$t=".dropdown-menu .dropdown-item:not(.disabled)",Rt="top-start",Pt="top-end",Mt="bottom-start",Ft="bottom-end",Ht="right-start",Bt="left-start",Wt={offset:0,flip:!0,boundary:"scrollParent"},qt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},Ut=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!vt(this._element).hasClass(Ct)){var e=t._getParentFromElement(this._element),r=vt(this._menu).hasClass(Tt);if(t._clearMenus(),!r){var i={relatedTarget:this._element},o=vt.Event(xt.SHOW,i);if(vt(e).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var a=this._element;vt(e).hasClass(Et)&&(vt(this._menu).hasClass(Ot)||vt(this._menu).hasClass(kt))&&(a=e),"scrollParent"!==this._config.boundary&&vt(e).addClass(Dt),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===vt(e).closest(Lt).length&&vt("body").children().on("mouseover",null,vt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),vt(this._menu).toggleClass(Tt),vt(e).toggleClass(Tt).trigger(vt.Event(xt.SHOWN,i))}}}},e.dispose=function(){vt.removeData(this._element,mt),vt(this._element).off(yt),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;vt(this._element).on(xt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=o({},this.constructor.Default,vt(this._element).data(),t),xn.typeCheckConfig(gt,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);this._menu=vt(e).find(jt)[0]}return this._menu},e._getPlacement=function(){var t=vt(this._element).parent(),e=Mt;return t.hasClass(Et)?(e=Rt,vt(this._menu).hasClass(kt)&&(e=Pt)):t.hasClass(At)?e=Ht:t.hasClass(St)?e=Bt:vt(this._menu).hasClass(kt)&&(e=Ft),e},e._detectNavbar=function(){return vt(this._element).closest(".navbar").length>0},e._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},t._jQueryInterface=function(e){return this.each(function(){var n=vt(this).data(mt);if(n||(n=new t(this,"object"==typeof e?e:null),vt(this).data(mt,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=vt.makeArray(vt(It)),r=0;r<n.length;r++){var i=t._getParentFromElement(n[r]),o=vt(n[r]).data(mt),a={relatedTarget:n[r]};if(o){var s=o._menu;if(vt(i).hasClass(Tt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&vt.contains(i,e.target))){var u=vt.Event(xt.HIDE,a);vt(i).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&vt("body").children().off("mouseover",null,vt.noop),n[r].setAttribute("aria-expanded","false"),vt(s).removeClass(Tt),vt(i).removeClass(Tt).trigger(vt.Event(xt.HIDDEN,a)))}}}},t._getParentFromElement=function(t){var e,n=xn.getSelectorFromElement(t);return n&&(e=vt(n)[0]),e||t.parentNode},t._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||vt(e.target).closest(jt).length)):wt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!vt(this).hasClass(Ct))){var n=t._getParentFromElement(this),r=vt(n).hasClass(Tt);if((r||27===e.which&&32===e.which)&&(!r||27!==e.which&&32!==e.which)){var i=vt(n).find($t).get();if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&o>0&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var a=vt(n).find(It)[0];vt(a).trigger("focus")}vt(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Wt}},{key:"DefaultType",get:function(){return qt}}]),t}(),vt(document).on(xt.KEYDOWN_DATA_API,It,Ut._dataApiKeydownHandler).on(xt.KEYDOWN_DATA_API,jt,Ut._dataApiKeydownHandler).on(xt.CLICK_DATA_API+" "+xt.KEYUP_DATA_API,Ut._clearMenus).on(xt.CLICK_DATA_API,It,function(t){t.preventDefault(),t.stopPropagation(),Ut._jQueryInterface.call(vt(this),"toggle")}).on(xt.CLICK_DATA_API,Nt,function(t){t.stopPropagation()}),vt.fn[gt]=Ut._jQueryInterface,vt.fn[gt].Constructor=Ut,vt.fn[gt].noConflict=function(){return vt.fn[gt]=bt,Ut._jQueryInterface},Ut),kn=(Vt="modal",Qt="."+(Kt="bs.modal"),Gt=(zt=e).fn[Vt],Yt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Xt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Jt={HIDE:"hide"+Qt,HIDDEN:"hidden"+Qt,SHOW:"show"+Qt,SHOWN:"shown"+Qt,FOCUSIN:"focusin"+Qt,RESIZE:"resize"+Qt,CLICK_DISMISS:"click.dismiss"+Qt,KEYDOWN_DISMISS:"keydown.dismiss"+Qt,MOUSEUP_DISMISS:"mouseup.dismiss"+Qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Qt,CLICK_DATA_API:"click"+Qt+".data-api"},Zt="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",re="show",ie={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},oe=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=zt(t).find(ie.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=zt.Event(Jt.SHOW,{relatedTarget:t});zt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),zt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),zt(this._element).on(Jt.CLICK_DISMISS,ie.DATA_DISMISS,function(t){return e.hide(t)}),zt(this._dialog).on(Jt.MOUSEDOWN_DISMISS,function(){zt(e._element).one(Jt.MOUSEUP_DISMISS,function(t){zt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=zt.Event(Jt.HIDE);if(zt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var r=xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),zt(document).off(Jt.FOCUSIN),zt(this._element).removeClass(re),zt(this._element).off(Jt.CLICK_DISMISS),zt(this._dialog).off(Jt.MOUSEDOWN_DISMISS),r?zt(this._element).one(xn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},e.dispose=function(){zt.removeData(this._element,Kt),zt(window,document,this._element,this._backdrop).off(Qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=o({},Yt,t),xn.typeCheckConfig(Vt,t,Xt),t},e._showElement=function(t){var e=this,n=xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&xn.reflow(this._element),zt(this._element).addClass(re),this._config.focus&&this._enforceFocus();var r=zt.Event(Jt.SHOWN,{relatedTarget:t}),i=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,zt(e._element).trigger(r)};n?zt(this._dialog).one(xn.TRANSITION_END,i).emulateTransitionEnd(300):i()},e._enforceFocus=function(){var t=this;zt(document).off(Jt.FOCUSIN).on(Jt.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===zt(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?zt(this._element).on(Jt.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||zt(this._element).off(Jt.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?zt(window).on(Jt.RESIZE,function(e){return t.handleUpdate(e)}):zt(window).off(Jt.RESIZE)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){zt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),zt(t._element).trigger(Jt.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(zt(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=zt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){var r=xn.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&zt(this._backdrop).addClass(n),zt(this._backdrop).appendTo(document.body),zt(this._element).on(Jt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),r&&xn.reflow(this._backdrop),zt(this._backdrop).addClass(re),!t)return;if(!r)return void t();zt(this._backdrop).one(xn.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){zt(this._backdrop).removeClass(re);var i=function(){e._removeBackdrop(),t&&t()};xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne)?zt(this._backdrop).one(xn.TRANSITION_END,i).emulateTransitionEnd(150):i()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){zt(ie.FIXED_CONTENT).each(function(e,n){var r=zt(n)[0].style.paddingRight,i=zt(n).css("padding-right");zt(n).data("padding-right",r).css("padding-right",parseFloat(i)+t._scrollbarWidth+"px")}),zt(ie.STICKY_CONTENT).each(function(e,n){var r=zt(n)[0].style.marginRight,i=zt(n).css("margin-right");zt(n).data("margin-right",r).css("margin-right",parseFloat(i)-t._scrollbarWidth+"px")}),zt(ie.NAVBAR_TOGGLER).each(function(e,n){var r=zt(n)[0].style.marginRight,i=zt(n).css("margin-right");zt(n).data("margin-right",r).css("margin-right",parseFloat(i)+t._scrollbarWidth+"px")});var e=document.body.style.paddingRight,n=zt("body").css("padding-right");zt("body").data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){zt(ie.FIXED_CONTENT).each(function(t,e){var n=zt(e).data("padding-right");void 0!==n&&zt(e).css("padding-right",n).removeData("padding-right")}),zt(ie.STICKY_CONTENT+", "+ie.NAVBAR_TOGGLER).each(function(t,e){var n=zt(e).data("margin-right");void 0!==n&&zt(e).css("margin-right",n).removeData("margin-right")});var t=zt("body").data("padding-right");void 0!==t&&zt("body").css("padding-right",t).removeData("padding-right")},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Zt,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var r=zt(this).data(Kt),i=o({},t.Default,zt(this).data(),"object"==typeof e&&e);if(r||(r=new t(this,i),zt(this).data(Kt,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e](n)}else i.show&&r.show(n)})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Yt}}]),t}(),zt(document).on(Jt.CLICK_DATA_API,ie.DATA_TOGGLE,function(t){var e,n=this,r=xn.getSelectorFromElement(this);r&&(e=zt(r)[0]);var i=zt(e).data(Kt)?"toggle":o({},zt(e).data(),zt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=zt(e).one(Jt.SHOW,function(t){t.isDefaultPrevented()||a.one(Jt.HIDDEN,function(){zt(n).is(":visible")&&n.focus()})});oe._jQueryInterface.call(zt(e),i,this)}),zt.fn[Vt]=oe._jQueryInterface,zt.fn[Vt].Constructor=oe,zt.fn[Vt].noConflict=function(){return zt.fn[Vt]=Gt,oe._jQueryInterface},oe),On=(se="tooltip",ce="."+(ue="bs.tooltip"),le=(ae=e).fn[se],fe="bs-tooltip",pe=new RegExp("(^|\\s)"+fe+"\\S+","g"),de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},he={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},ve={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},ge="show",me="out",ye={HIDE:"hide"+ce,HIDDEN:"hidden"+ce,SHOW:"show"+ce,SHOWN:"shown"+ce,INSERTED:"inserted"+ce,CLICK:"click"+ce,FOCUSIN:"focusin"+ce,FOCUSOUT:"focusout"+ce,MOUSEENTER:"mouseenter"+ce,MOUSELEAVE:"mouseleave"+ce},_e="fade",be="show",we=".tooltip-inner",xe=".arrow",Ce="hover",Te="focus",Ee="click",Ae="manual",Se=function(){function t(t,e){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=ae(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(ae(this.getTipElement()).hasClass(be))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),ae.removeData(this.element,this.constructor.DATA_KEY),ae(this.element).off(this.constructor.EVENT_KEY),ae(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&ae(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var e=this;if("none"===ae(this.element).css("display"))throw new Error("Please use show on visible elements");var r=ae.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){ae(this.element).trigger(r);var i=ae.contains(this.element.ownerDocument.documentElement,this.element);if(r.isDefaultPrevented()||!i)return;var o=this.getTipElement(),a=xn.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&ae(o).addClass(_e);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(s);this.addAttachmentClass(u);var c=!1===this.config.container?document.body:ae(this.config.container);ae(o).data(this.constructor.DATA_KEY,this),ae.contains(this.element.ownerDocument.documentElement,this.tip)||ae(o).appendTo(c),ae(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:xe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),ae(o).addClass(be),"ontouchstart"in document.documentElement&&ae("body").children().on("mouseover",null,ae.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,ae(e.element).trigger(e.constructor.Event.SHOWN),t===me&&e._leave(null,e)};xn.supportsTransitionEnd()&&ae(this.tip).hasClass(_e)?ae(this.tip).one(xn.TRANSITION_END,l).emulateTransitionEnd(t._TRANSITION_DURATION):l()}},e.hide=function(t){var e=this,n=this.getTipElement(),r=ae.Event(this.constructor.Event.HIDE),i=function(){e._hoverState!==ge&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),ae(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};ae(this.element).trigger(r),r.isDefaultPrevented()||(ae(n).removeClass(be),"ontouchstart"in document.documentElement&&ae("body").children().off("mouseover",null,ae.noop),this._activeTrigger[Ee]=!1,this._activeTrigger[Te]=!1,this._activeTrigger[Ce]=!1,xn.supportsTransitionEnd()&&ae(this.tip).hasClass(_e)?ae(n).one(xn.TRANSITION_END,i).emulateTransitionEnd(150):i(),this._hoverState="")},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){ae(this.getTipElement()).addClass(fe+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||ae(this.config.template)[0],this.tip},e.setContent=function(){var t=ae(this.getTipElement());this.setElementContent(t.find(we),this.getTitle()),t.removeClass(_e+" "+be)},e.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?ae(e).parent().is(t)||t.empty().append(e):t.text(ae(e).text()):t[n?"html":"text"](e)},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getAttachment=function(t){return he[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)ae(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==Ae){var n=e===Ce?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=e===Ce?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;ae(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}ae(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Te:Ce]=!0),ae(e.getTipElement()).hasClass(be)||e._hoverState===ge?e._hoverState=ge:(clearTimeout(e._timeout),e._hoverState=ge,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===ge&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Te:Ce]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===me&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){return"number"==typeof(t=o({},this.constructor.Default,ae(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),xn.typeCheckConfig(se,t,this.constructor.DefaultType),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=ae(this.getTipElement()),e=t.attr("class").match(pe);null!==e&&e.length>0&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(ae(t).removeClass(_e),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=ae(this).data(ue),r="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new t(this,r),ae(this).data(ue,n)),"string"==typeof e)){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return ve}},{key:"NAME",get:function(){return se}},{key:"DATA_KEY",get:function(){return ue}},{key:"Event",get:function(){return ye}},{key:"EVENT_KEY",get:function(){return ce}},{key:"DefaultType",get:function(){return de}}]),t}(),ae.fn[se]=Se._jQueryInterface,ae.fn[se].Constructor=Se,ae.fn[se].noConflict=function(){return ae.fn[se]=le,Se._jQueryInterface},Se),Dn=(Oe="popover",Ie="."+(De="bs.popover"),Ne=(ke=e).fn[Oe],je="bs-popover",Le=new RegExp("(^|\\s)"+je+"\\S+","g"),$e=o({},On.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Re=o({},On.DefaultType,{content:"(string|element|function)"}),Pe="fade",Me="show",Fe=".popover-header",He=".popover-body",Be={HIDE:"hide"+Ie,HIDDEN:"hidden"+Ie,SHOW:"show"+Ie,SHOWN:"shown"+Ie,INSERTED:"inserted"+Ie,CLICK:"click"+Ie,FOCUSIN:"focusin"+Ie,FOCUSOUT:"focusout"+Ie,MOUSEENTER:"mouseenter"+Ie,MOUSELEAVE:"mouseleave"+Ie},We=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){ke(this.getTipElement()).addClass(je+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||ke(this.config.template)[0],this.tip},o.setContent=function(){var t=ke(this.getTipElement());this.setElementContent(t.find(Fe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(He),e),t.removeClass(Pe+" "+Me)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=ke(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length>0&&t.removeClass(e.join(""))},r._jQueryInterface=function(t){return this.each(function(){var e=ke(this).data(De),n="object"==typeof t?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new r(this,n),ke(this).data(De,e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return $e}},{key:"NAME",get:function(){return Oe}},{key:"DATA_KEY",get:function(){return De}},{key:"Event",get:function(){return Be}},{key:"EVENT_KEY",get:function(){return Ie}},{key:"DefaultType",get:function(){return Re}}]),r}(On),ke.fn[Oe]=We._jQueryInterface,ke.fn[Oe].Constructor=We,ke.fn[Oe].noConflict=function(){return ke.fn[Oe]=Ne,We._jQueryInterface},We),In=(Ue="scrollspy",Ve="."+(ze="bs.scrollspy"),Ke=(qe=e).fn[Ue],Qe={offset:10,method:"auto",target:""},Ge={offset:"number",method:"string",target:"(string|element)"},Ye={ACTIVATE:"activate"+Ve,SCROLL:"scroll"+Ve,LOAD_DATA_API:"load"+Ve+".data-api"},Xe="dropdown-item",Je="active",Ze={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Ze.NAV_LINKS+","+this._config.target+" "+Ze.LIST_ITEMS+","+this._config.target+" "+Ze.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,qe(this._scrollElement).on(Ye.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?tn:en,n="auto"===this._config.method?e:this._config.method,r=n===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),qe.makeArray(qe(this._selector)).map(function(t){var e,i=xn.getSelectorFromElement(t);if(i&&(e=qe(i)[0]),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[qe(e)[n]().top+r,i]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){qe.removeData(this._element,ze),qe(this._scrollElement).off(Ve),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=o({},Qe,t)).target){var e=qe(t.target).attr("id");e||(e=xn.getUID(Ue),qe(t.target).attr("id",e)),t.target="#"+e}return xn.typeCheckConfig(Ue,t,Ge),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var r=this._targets[this._targets.length-1];this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&t>=this._offsets[i]&&(void 0===this._offsets[i+1]||t<this._offsets[i+1])&&this._activate(this._targets[i])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=qe(e.join(","));n.hasClass(Xe)?(n.closest(Ze.DROPDOWN).find(Ze.DROPDOWN_TOGGLE).addClass(Je),n.addClass(Je)):(n.addClass(Je),n.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_LINKS+", "+Ze.LIST_ITEMS).addClass(Je),n.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_ITEMS).children(Ze.NAV_LINKS).addClass(Je)),qe(this._scrollElement).trigger(Ye.ACTIVATE,{relatedTarget:t})},e._clear=function(){qe(this._selector).filter(Ze.ACTIVE).removeClass(Je)},t._jQueryInterface=function(e){return this.each(function(){var n=qe(this).data(ze);if(n||(n=new t(this,"object"==typeof e&&e),qe(this).data(ze,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Qe}}]),t}(),qe(window).on(Ye.LOAD_DATA_API,function(){for(var t=qe.makeArray(qe(Ze.DATA_SPY)),e=t.length;e--;){var n=qe(t[e]);nn._jQueryInterface.call(n,n.data())}}),qe.fn[Ue]=nn._jQueryInterface,qe.fn[Ue].Constructor=nn,qe.fn[Ue].noConflict=function(){return qe.fn[Ue]=Ke,nn._jQueryInterface},nn),Nn=(an="."+(on="bs.tab"),sn=(rn=e).fn.tab,un={HIDE:"hide"+an,HIDDEN:"hidden"+an,SHOW:"show"+an,SHOWN:"shown"+an,CLICK_DATA_API:"click.bs.tab.data-api"},cn="dropdown-menu",ln="active",fn="disabled",pn="fade",dn="show",hn=".dropdown",vn=".nav, .list-group",gn=".active",mn="> li > .active",yn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',_n=".dropdown-toggle",bn="> .dropdown-menu .active",wn=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(ln)||rn(this._element).hasClass(fn))){var e,n,r=rn(this._element).closest(vn)[0],i=xn.getSelectorFromElement(this._element);if(r){var o="UL"===r.nodeName?mn:gn;n=(n=rn.makeArray(rn(r).find(o)))[n.length-1]}var a=rn.Event(un.HIDE,{relatedTarget:this._element}),s=rn.Event(un.SHOW,{relatedTarget:n});if(n&&rn(n).trigger(a),rn(this._element).trigger(s),!s.isDefaultPrevented()&&!a.isDefaultPrevented()){i&&(e=rn(i)[0]),this._activate(this._element,r);var u=function(){var e=rn.Event(un.HIDDEN,{relatedTarget:t._element}),r=rn.Event(un.SHOWN,{relatedTarget:n});rn(n).trigger(e),rn(t._element).trigger(r)};e?this._activate(e,e.parentNode,u):u()}}},e.dispose=function(){rn.removeData(this._element,on),this._element=null},e._activate=function(t,e,n){var r=this,i=("UL"===e.nodeName?rn(e).find(mn):rn(e).children(gn))[0],o=n&&xn.supportsTransitionEnd()&&i&&rn(i).hasClass(pn),a=function(){return r._transitionComplete(t,i,n)};i&&o?rn(i).one(xn.TRANSITION_END,a).emulateTransitionEnd(150):a()},e._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+ln);var r=rn(e.parentNode).find(bn)[0];r&&rn(r).removeClass(ln),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(ln),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),xn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(cn)){var i=rn(t).closest(hn)[0];i&&rn(i).find(_n).addClass(ln),t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=rn(this),r=n.data(on);if(r||(r=new t(this),n.data(on,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),rn(document).on(un.CLICK_DATA_API,yn,function(t){t.preventDefault(),wn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=wn._jQueryInterface,rn.fn.tab.Constructor=wn,rn.fn.tab.noConflict=function(){return rn.fn.tab=sn,wn._jQueryInterface},wn);!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=xn,t.Alert=Cn,t.Button=Tn,t.Carousel=En,t.Collapse=An,t.Dropdown=Sn,t.Modal=kn,t.Popover=Dn,t.Scrollspy=In,t.Tab=Nn,t.Tooltip=On,Object.defineProperty(t,"__esModule",{value:!0})})(e,n(4),n(3))},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";var r=n(0),i=n(5),o=n(20),a=n(2);function s(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var u=s(a);u.Axios=o,u.create=function(t){return s(r.merge(a,t))},u.Cancel=n(10),u.CancelToken=n(34),u.isCancel=n(9),u.all=function(t){return Promise.all(t)},u.spread=n(35),t.exports=u,t.exports.default=u},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))||!!t._isBuffer);var e}},function(t,e,n){"use strict";var r=n(2),i=n(0),o=n(29),a=n(30);function s(t){this.defaults=t,this.interceptors={request:new o,response:new o}}s.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),(t=i.merge(r,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(8);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},function(t,e,n){"use strict";var r=n(0);function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var a=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(i(e)+"="+i(t))}))}),o=a.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,a={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(a[e]&&i.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,o=String(t),a="",s=0,u=r;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new i;e=e<<8|n}return a}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},function(t,e,n){"use strict";var r=n(0),i=n(31),o=n(9),a=n(2),s=n(32),u=n(33);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(c(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(10);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";(function(e,n){var r=Object.freeze({});function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function u(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var g=v("slot,component",!0),m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var x=/-(\w)/g,C=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),T=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=/\B([A-Z])/g,A=w(function(t){return t.replace(E,"-$1").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function I(t,e,n){}var N=function(t,e,n){return!1},j=function(t){return t};function L(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return L(t[n],e[n])})}catch(t){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var P="data-server-rendered",M=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:I,parsePlatformTagName:j,mustUseProp:N,_lifecycleHooks:F};function B(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=/[^\w.$]/;var U,z="__proto__"in{},V="undefined"!=typeof window,K="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),G=V&&window.navigator.userAgent.toLowerCase(),Y=G&&/msie|trident/.test(G),X=G&&G.indexOf("msie 9.0")>0,J=G&&G.indexOf("edge/")>0,Z=G&&G.indexOf("android")>0||"android"===Q,tt=G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===Q,et=(G&&/chrome\/\d+/.test(G),{}.watch),nt=!1;if(V)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){nt=!0}}),window.addEventListener("test-passive",null,rt)}catch(t){}var it=function(){return void 0===U&&(U=!V&&void 0!==e&&"server"===e.process.env.VUE_ENV),U},ot=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);st="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=I,lt=0,ft=function(){this.id=lt++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){y(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var pt=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ht={child:{configurable:!0}};ht.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,ht);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t,e){var n=t.componentOptions,r=new dt(t.tag,t.data,t.children,t.text,t.elm,t.context,n,t.asyncFactory);return r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r.isComment=t.isComment,r.fnContext=t.fnContext,r.fnOptions=t.fnOptions,r.fnScopeId=t.fnScopeId,r.isCloned=!0,e&&(t.children&&(r.children=yt(t.children,!0)),n&&n.children&&(n.children=yt(n.children,!0))),r}function yt(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=mt(t[i],e);return r}var _t=Array.prototype,bt=Object.create(_t);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_t[t];W(bt,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(bt),xt={shouldConvert:!0},Ct=function(t){(this.value=t,this.dep=new ft,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t))?((z?Tt:Et)(t,bt,wt),this.observeArray(t)):this.walk(t)};function Tt(t,e,n){t.__proto__=e}function Et(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function At(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof Ct?n=t.__ob__:xt.shouldConvert&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ct(t)),e&&n&&n.vmCount++,n}function St(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set,c=!i&&At(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,i=e.length;r<i;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(u?u.call(t,e):n=e,c=!i&&At(e),o.notify())}})}}function kt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(St(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}Ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)St(t,e[n],t[e[n]])},Ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)At(t[e])};var Dt=H.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),a=0;a<o.length;a++)r=t[n=o[a]],i=e[n],b(t,n)?l(r)&&l(i)&&It(r,i):kt(t,n,i);return t}function Nt(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?It(r,i):i}:e?t?function(){return It("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function jt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Lt(t,e,n,r){var i=Object.create(t||null);return e?O(i,e):i}Dt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!=typeof e?t:Nt(t,e)},F.forEach(function(t){Dt[t]=jt}),M.forEach(function(t){Dt[t+"s"]=Lt}),Dt.watch=function(t,e,n,r){if(t===et&&(t=void 0),e===et&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};O(i,t);for(var o in e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return O(i,t),e&&O(i,e),i},Dt.provide=Nt;var $t=function(t,e){return void 0===e?t:e};function Rt(t,e,n){"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[C(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[C(a)]=l(i)?i:{type:i};t.props=o}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?O({from:o},a):{from:a}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=Rt(t,r,n)),e.mixins)for(var i=0,o=e.mixins.length;i<o;i++)t=Rt(t,e.mixins[i],n);var a,s={};for(a in t)u(a);for(a in e)b(t,a)||u(a);function u(r){var i=Dt[r]||$t;s[r]=i(t[r],e[r],n,r)}return s}function Pt(t,e,n,r){if("string"==typeof n){var i=t[e];if(b(i,n))return i[n];var o=C(n);if(b(i,o))return i[o];var a=T(o);return b(i,a)?i[a]:i[n]||i[o]||i[a]}}function Mt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t];if(Ht(Boolean,i.type)&&(o&&!b(i,"default")?a=!1:Ht(String,i.type)||""!==a&&a!==A(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!b(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ft(e.type)?r.call(t):r}(r,i,t);var s=xt.shouldConvert;xt.shouldConvert=!0,At(a),xt.shouldConvert=s}return a}function Ft(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ht(t,e){if(!Array.isArray(e))return Ft(e)===Ft(t);for(var n=0,r=e.length;n<r;n++)if(Ft(e[n])===Ft(t))return!0;return!1}function Bt(t,e,n){if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){Wt(t,r,"errorCaptured hook")}}Wt(t,e,n)}function Wt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(t){qt(t,null,"config.errorHandler")}qt(t,e,n)}function qt(t,e,n){if(!V&&!K||"undefined"==typeof console)throw t;console.error(t)}var Ut,zt,Vt=[],Kt=!1;function Qt(){Kt=!1;var t=Vt.slice(0);Vt.length=0;for(var e=0;e<t.length;e++)t[e]()}var Gt=!1;if(void 0!==n&&at(n))zt=function(){n(Qt)};else if("undefined"==typeof MessageChannel||!at(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())zt=function(){setTimeout(Qt,0)};else{var Yt=new MessageChannel,Xt=Yt.port2;Yt.port1.onmessage=Qt,zt=function(){Xt.postMessage(1)}}if("undefined"!=typeof Promise&&at(Promise)){var Jt=Promise.resolve();Ut=function(){Jt.then(Qt),tt&&setTimeout(I)}}else Ut=zt;function Zt(t,e){var n;if(Vt.push(function(){if(t)try{t.call(e)}catch(t){Bt(t,e,"nextTick")}else n&&n(e)}),Kt||(Kt=!0,Gt?zt():Ut()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var te=new st;function ee(t){!function t(e,n){var r,i;var o=Array.isArray(e);if(!o&&!u(e)||Object.isFrozen(e))return;if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=e.length;r--;)t(e[r],n);else for(i=Object.keys(e),r=i.length;r--;)t(e[i[r]],n)}(t,te),te.clear()}var ne,re=w(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ie(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function oe(t,e,n,r,o){var a,s,u,c;for(a in t)s=t[a],u=e[a],c=re(a),i(s)||(i(u)?(i(s.fns)&&(s=t[a]=ie(s)),n(c.name,s,c.once,c.capture,c.passive,c.params)):s!==u&&(u.fns=s,t[a]=u));for(a in e)i(t[a])&&r((c=re(a)).name,e[a],c.capture)}function ae(t,e,n){var r;t instanceof dt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function u(){n.apply(this,arguments),y(r.fns,u)}i(s)?r=ie([u]):o(s.fns)&&a(s.merged)?(r=s).fns.push(u):r=ie([s,u]),r.merged=!0,t[e]=r}function se(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ue(t){return s(t)?[gt(t)]:Array.isArray(t)?function t(e,n){var r=[];var u,c,l,f;for(u=0;u<e.length;u++)i(c=e[u])||"boolean"==typeof c||(l=r.length-1,f=r[l],Array.isArray(c)?c.length>0&&(ce((c=t(c,(n||"")+"_"+u))[0])&&ce(f)&&(r[l]=gt(f.text+c[0].text),c.shift()),r.push.apply(r,c)):s(c)?ce(f)?r[l]=gt(f.text+c):""!==c&&r.push(gt(c)):ce(c)&&ce(f)?r[l]=gt(f.text+c.text):(a(e._isVList)&&o(c.tag)&&i(c.key)&&o(n)&&(c.key="__vlist"+n+"_"+u+"__"),r.push(c)));return r}(t):void 0}function ce(t){return o(t)&&o(t.text)&&!1===t.isComment}function le(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function fe(t){return t.isComment&&t.asyncFactory}function pe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||fe(n)))return n}}function de(t,e,n){n?ne.$once(t,e):ne.$on(t,e)}function he(t,e){ne.$off(t,e)}function ve(t,e,n){ne=t,oe(e,n||{},de,he),ne=void 0}function ge(t,e){var n={};if(!t)return n;for(var r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(me)&&delete n[c];return n}function me(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ye(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?ye(t[n],e):e[t[n].key]=t[n].fn;return e}var _e=null;function be(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,be(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);xe(t,"activated")}}function xe(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){Bt(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Ce=[],Te=[],Ee={},Ae=!1,Se=!1,ke=0;function Oe(){var t,e;for(Se=!0,Ce.sort(function(t,e){return t.id-e.id}),ke=0;ke<Ce.length;ke++)e=(t=Ce[ke]).id,Ee[e]=null,t.run();var n=Te.slice(),r=Ce.slice();ke=Ce.length=Te.length=0,Ee={},Ae=Se=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&xe(r,"updated")}}(r),ot&&H.devtools&&ot.emit("flush")}var De=0,Ie=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ie.prototype.get=function(){var t,e;t=this,ft.target&&pt.push(ft.target),ft.target=t;var n=this.vm;try{e=this.getter.call(n,n)}catch(t){if(!this.user)throw t;Bt(t,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ee(e),ft.target=pt.pop(),this.cleanupDeps()}return e},Ie.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ie.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Ie.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Ee[e]){if(Ee[e]=!0,Se){for(var n=Ce.length-1;n>ke&&Ce[n].id>t.id;)n--;Ce.splice(n+1,0,t)}else Ce.push(t);Ae||(Ae=!0,Zt(Oe))}}(this)},Ie.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){Bt(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ie.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ie.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ie.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Ne={enumerable:!0,configurable:!0,get:I,set:I};function je(t,e,n){Ne.get=function(){return this[e][n]},Ne.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ne)}function Le(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;xt.shouldConvert=o;var a=function(o){i.push(o);var a=Mt(o,e,n,t);St(r,o,a),o in t||je(t,"_props",o)};for(var s in e)a(s);xt.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:S(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;l(e=t._data="function"==typeof e?function(t,e){try{return t.call(e,e)}catch(t){return Bt(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&b(r,o)||B(o)||je(t,"_data",o)}At(e,!0)}(t):At(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"==typeof o?o:o.get;0,r||(n[i]=new Ie(t,a||I,I,$e)),i in t||Re(t,i,o)}}(t,e.computed),e.watch&&e.watch!==et&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Me(t,n,r[i]);else Me(t,n,r)}}(t,e.watch)}var $e={lazy:!0};function Re(t,e,n){var r=!it();"function"==typeof n?(Ne.get=r?Pe(e):n,Ne.set=I):(Ne.get=n.get?r&&!1!==n.cache?Pe(e):n.get:I,Ne.set=n.set?n.set:I),Object.defineProperty(t,e,Ne)}function Pe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function Me(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Fe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"==typeof u?u.call(e):u}else 0}return n}}function He(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)&&(n._isVList=!0),n}function Be(t,e,n,r){var i,o=this.$scopedSlots[t];if(o)n=n||{},r&&(n=O(O({},r),n)),i=o(n)||e;else{var a=this.$slots[t];a&&(a._rendered=!0),i=a||e}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function We(t){return Pt(this.$options,"filters",t)||j}function qe(t,e,n,r){var i=H.keyCodes[e]||n;return i?Array.isArray(i)?-1===i.indexOf(t):i!==t:r?A(r)!==e:void 0}function Ue(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=D(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in o||(o[a]=n[a],i&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var s in n)a(s)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?Array.isArray(r)?yt(r):mt(r):(Ke(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function Ve(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Qe(t[r],e+"_"+r,n);else Qe(t,e,n)}function Qe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(l(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ye(t){t._o=Ve,t._n=h,t._s=d,t._l=He,t._t=Be,t._q=L,t._i=$,t._m=ze,t._f=We,t._k=qe,t._b=Ue,t._v=gt,t._e=vt,t._u=ye,t._g=Ge}function Xe(t,e,n,i,o){var s=o.options;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Fe(s.inject,i),this.slots=function(){return ge(n,i)};var u=Object.create(i),c=a(s._compiled),l=!c;c&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=t.scopedSlots||r),s._scopeId?this._c=function(t,e,n,r){var o=an(u,t,e,n,r,l);return o&&(o.fnScopeId=s._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return an(u,t,e,n,r,l)}}function Je(t,e){for(var n in e)t[C(n)]=e[n]}Ye(Xe.prototype);var Ze={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,r){var i={_isComponent:!0,parent:e,_parentVnode:t,_parentElm:n||null,_refElm:r||null},a=t.data.inlineTemplate;o(a)&&(i.render=a.render,i.staticRenderFns=a.staticRenderFns);return new t.componentOptions.Ctor(i)}(t,_e,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;Ze.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,i,o){var a=!!(o||t.$options._renderChildren||i.data.scopedSlots||t.$scopedSlots!==r);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data&&i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){xt.shouldConvert=!1;for(var s=t._props,u=t.$options._propKeys||[],c=0;c<u.length;c++){var l=u[c];s[l]=Mt(l,t.$options.props,e,t)}xt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ve(t,n,f)}a&&(t.$slots=ge(o,i.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,xe(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Te.push(e)):we(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,be(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);xe(e,"deactivated")}}(e,!0):e.$destroy())}},tn=Object.keys(Ze);function en(t,e,n,s,c){if(!i(t)){var l=n.$options._base;if(u(t)&&(t=l.extend(t)),"function"==typeof t){var f,p,d,h,v,g,m;if(i(t.cid)&&void 0===(t=function(t,e,n){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},l=R(function(n){t.resolved=le(n,e),s||c()}),f=R(function(e){o(t.errorComp)&&(t.error=!0,c())}),p=t(l,f);return u(p)&&("function"==typeof p.then?i(t.resolved)&&p.then(l,f):o(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),o(p.error)&&(t.errorComp=le(p.error,e)),o(p.loading)&&(t.loadingComp=le(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,c())},p.delay||200)),o(p.timeout)&&setTimeout(function(){i(t.resolved)&&f(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}(f=t,l,n)))return p=f,d=e,h=n,v=s,g=c,(m=vt()).asyncFactory=p,m.asyncMeta={data:d,context:h,children:v,tag:g},m;e=e||{},vn(t),o(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});o(i[r])?i[r]=[e.model.callback].concat(i[r]):i[r]=e.model.callback}(t.options,e);var y=function(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in r){var l=A(c);se(a,u,c,l,!0)||se(a,s,c,l,!1)}return a}}(e,t);if(a(t.options.functional))return function(t,e,n,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var l in c)u[l]=Mt(l,c,e||r);else o(n.attrs)&&Je(u,n.attrs),o(n.props)&&Je(u,n.props);var f=new Xe(n,u,a,i,t),p=s.render.call(null,f._c,f);return p instanceof dt&&(p.fnContext=i,p.fnOptions=s,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}(t,y,e,n,s);var _=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var b=e.slot;e={},b&&(e.slot=b)}!function(t){t.hook||(t.hook={});for(var e=0;e<tn.length;e++){var n=tn[e],r=t.hook[n],i=Ze[n];t.hook[n]=r?nn(i,r):i}}(e);var w=t.options.name||c;return new dt("vue-component-"+t.cid+(w?"-"+w:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:y,listeners:_,tag:c,children:s},f)}}}function nn(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}var rn=1,on=2;function an(t,e,n,r,u,c){return(Array.isArray(n)||s(n))&&(u=r,r=n,n=void 0),a(c)&&(u=on),function(t,e,n,r,s){if(o(n)&&o(n.__ob__))return vt();o(n)&&o(n.is)&&(e=n.is);if(!e)return vt();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);s===on?r=ue(r):s===rn&&(r=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(r));var u,c;if("string"==typeof e){var l;c=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),u=H.isReservedTag(e)?new dt(H.parsePlatformTagName(e),n,r,void 0,void 0,t):o(l=Pt(t.$options,"components",e))?en(l,n,t,r,e):new dt(e,n,r,void 0,void 0,t)}else u=en(e,n,t,r);return o(u)?(c&&function t(e,n,r){e.ns=n;"foreignObject"===e.tag&&(n=void 0,r=!0);if(o(e.children))for(var s=0,u=e.children.length;s<u;s++){var c=e.children[s];o(c.tag)&&(i(c.ns)||a(r))&&t(c,n,r)}}(u,c),u):vt()}(t,e,n,r,u)}var sn,un,cn,ln,fn,pn,dn,hn=0;function vn(t){var e=t.options;if(t.super){var n=vn(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=gn(n[o],r[o],i[o]));return e}(t);r&&O(t.extendOptions,r),(e=t.options=Rt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function gn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function mn(t){this._init(t)}function yn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Rt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)je(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)Re(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),i[r]=a,a}}function _n(t){return t&&(t.Ctor.options.name||t.tag)}function bn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function wn(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=_n(a.componentOptions);s&&!e(s)&&xn(n,o,r,i)}}}function xn(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}mn.prototype._init=function(t){var e,n,i,o,a=this;a._uid=hn++,a._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r,n._parentElm=e._parentElm,n._refElm=e._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(a,t):a.$options=Rt(vn(a.constructor),t||{},a),a._renderProxy=a,a._self=a,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(a),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ve(t,e)}(a),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=ge(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return an(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return an(t,e,n,r,i,!0)};var o=n&&n.data;St(t,"$attrs",o&&o.attrs||r,0,!0),St(t,"$listeners",e._parentListeners||r,0,!0)}(a),xe(a,"beforeCreate"),(n=Fe((e=a).$options.inject,e))&&(xt.shouldConvert=!1,Object.keys(n).forEach(function(t){St(e,t,n[t])}),xt.shouldConvert=!0),Le(a),(o=(i=a).$options.provide)&&(i._provided="function"==typeof o?o.call(i):o),xe(a,"created"),a.$options.el&&a.$mount(a.$options.el)},sn=mn,un={get:function(){return this._data}},cn={get:function(){return this._props}},Object.defineProperty(sn.prototype,"$data",un),Object.defineProperty(sn.prototype,"$props",cn),sn.prototype.$set=kt,sn.prototype.$delete=Ot,sn.prototype.$watch=function(t,e,n){if(l(e))return Me(this,t,e,n);(n=n||{}).user=!0;var r=new Ie(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}},fn=/^hook:/,(ln=mn).prototype.$on=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)this.$on(t[n],e);else(this._events[t]||(this._events[t]=[])).push(e),fn.test(t)&&(this._hasHookEvent=!0);return this},ln.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},ln.prototype.$off=function(t,e){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)this.$off(t[n],e);return this}var i=this._events[t];if(!i)return this;if(!e)return this._events[t]=null,this;if(e)for(var o,a=i.length;a--;)if((o=i[a])===e||o.fn===e){i.splice(a,1);break}return this},ln.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?k(e):e;for(var n=k(arguments,1),r=0,i=e.length;r<i;r++)try{e[r].apply(this,n)}catch(e){Bt(e,this,'event handler for "'+t+'"')}}return this},(pn=mn).prototype._update=function(t,e){var n=this;n._isMounted&&xe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=_e;_e=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),_e=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},pn.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},pn.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){xe(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),xe(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}},Ye((dn=mn).prototype),dn.prototype.$nextTick=function(t){return Zt(t,this)},dn.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,o=n._parentVnode;if(e._isMounted)for(var a in e.$slots){var s=e.$slots[a];(s._rendered||s[0]&&s[0].elm)&&(e.$slots[a]=yt(s,!0))}e.$scopedSlots=o&&o.data.scopedSlots||r,e.$vnode=o;try{t=i.call(e._renderProxy,e.$createElement)}catch(n){Bt(n,e,"render"),t=e._vnode}return t instanceof dt||(t=vt()),t.parent=o,t};var Cn,Tn,En,An=[String,RegExp,Array],Sn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:An,exclude:An,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)xn(this.cache,t,this.keys)},watch:{include:function(t){wn(this,function(e){return bn(t,e)})},exclude:function(t){wn(this,function(e){return!bn(t,e)})}},render:function(){var t=this.$slots.default,e=pe(t),n=e&&e.componentOptions;if(n){var r=_n(n),i=this.include,o=this.exclude;if(i&&(!r||!bn(i,r))||o&&r&&bn(o,r))return e;var a=this.cache,s=this.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[u]?(e.componentInstance=a[u].componentInstance,y(s,u),s.push(u)):(a[u]=e,s.push(u),this.max&&s.length>parseInt(this.max)&&xn(a,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};Cn=mn,En={get:function(){return H}},Object.defineProperty(Cn,"config",En),Cn.util={warn:ct,extend:O,mergeOptions:Rt,defineReactive:St},Cn.set=kt,Cn.delete=Ot,Cn.nextTick=Zt,Cn.options=Object.create(null),M.forEach(function(t){Cn.options[t+"s"]=Object.create(null)}),Cn.options._base=Cn,O(Cn.options.components,Sn),Cn.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this},Cn.mixin=function(t){return this.options=Rt(this.options,t),this},yn(Cn),Tn=Cn,M.forEach(function(t){Tn[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),Object.defineProperty(mn.prototype,"$isServer",{get:it}),Object.defineProperty(mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),mn.version="2.5.13";var kn=v("style,class"),On=v("input,textarea,option,select,progress"),Dn=function(t,e,n){return"value"===n&&On(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},In=v("contenteditable,draggable,spellcheck"),Nn=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),jn="http://www.w3.org/1999/xlink",Ln=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},$n=function(t){return Ln(t)?t.slice(6,t.length):""},Rn=function(t){return null==t||!1===t};function Pn(t){for(var e=t.data,n=t,r=t;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Mn(r.data,e));for(;o(n=n.parent);)n&&n.data&&(e=Mn(e,n.data));return function(t,e){if(o(t)||o(e))return Fn(t,Hn(e));return""}(e.staticClass,e.class)}function Mn(t,e){return{staticClass:Fn(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Fn(t,e){return t?e?t+" "+e:t:e||""}function Hn(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Hn(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):u(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Bn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Wn=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),qn=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Un=function(t){return Wn(t)||qn(t)};function zn(t){return qn(t)?"svg":"math"===t?"math":void 0}var Vn=Object.create(null);var Kn=v("text,number,password,search,email,tel,url");function Qn(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var Gn=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Bn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),Yn={create:function(t,e){Xn(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xn(t,!0),Xn(e))},destroy:function(t){Xn(t,!0)}};function Xn(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?y(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Jn=new dt("",{},[]),Zn=["create","activate","update","remove","destroy"];function tr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Kn(r)&&Kn(i)}(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&i(e.asyncFactory.error))}function er(t,e,n){var r,i,a={};for(r=e;r<=n;++r)o(i=t[r].key)&&(a[i]=r);return a}var nr={create:rr,update:rr,destroy:function(t){rr(t,Jn)}};function rr(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===Jn,a=e===Jn,s=or(t.data.directives,t.context),u=or(e.data.directives,e.context),c=[],l=[];for(n in u)r=s[n],i=u[n],r?(i.oldValue=r.value,ar(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ar(i,"bind",e,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var n=0;n<c.length;n++)ar(c[n],"inserted",e,t)};o?ae(e,"insert",f):f()}l.length&&ae(e,"postpatch",function(){for(var n=0;n<l.length;n++)ar(l[n],"componentUpdated",e,t)});if(!o)for(n in s)u[n]||ar(s[n],"unbind",t,t,a)}(t,e)}var ir=Object.create(null);function or(t,e){var n,r,i,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=ir),o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r,r.def=Pt(e.$options,"directives",r.name);return o}function ar(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){Bt(r,n.context,"directive "+t.name+" "+e+" hook")}}var sr=[Yn,nr];function ur(t,e){var n=e.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(t.data.attrs)&&i(e.data.attrs))){var r,a,s=e.elm,u=t.data.attrs||{},c=e.data.attrs||{};o(c.__ob__)&&(c=e.data.attrs=O({},c));for(r in c)a=c[r],u[r]!==a&&cr(s,r,a);(Y||J)&&c.value!==u.value&&cr(s,"value",c.value);for(r in u)i(c[r])&&(Ln(r)?s.removeAttributeNS(jn,$n(r)):In(r)||s.removeAttribute(r))}}function cr(t,e,n){if(Nn(e))Rn(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n));else if(In(e))t.setAttribute(e,Rn(n)||"false"===n?"false":"true");else if(Ln(e))Rn(n)?t.removeAttributeNS(jn,$n(e)):t.setAttributeNS(jn,e,n);else if(Rn(n))t.removeAttribute(e);else{if(Y&&!X&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var lr={create:ur,update:ur};function fr(t,e){var n=e.elm,r=e.data,a=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=Pn(e),u=n._transitionClasses;o(u)&&(s=Fn(s,Hn(u))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var pr,dr,hr,vr,gr,mr,yr={create:fr,update:fr},_r=/[\w).+\-_$\]]/;function br(t){var e,n,r,i,o,a=!1,s=!1,u=!1,c=!1,l=0,f=0,p=0,d=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),a)39===e&&92!==n&&(a=!1);else if(s)34===e&&92!==n&&(s=!1);else if(u)96===e&&92!==n&&(u=!1);else if(c)47===e&&92!==n&&(c=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||f||p){switch(e){case 34:s=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===e){for(var h=r-1,v=void 0;h>=0&&" "===(v=t.charAt(h));h--);v&&_r.test(v)||(c=!0)}}else void 0===i?(d=r+1,i=t.slice(0,r).trim()):g();function g(){(o||(o=[])).push(t.slice(d,r).trim()),d=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==d&&g(),o)for(r=0;r<o.length;r++)i=wr(i,o[r]);return i}function wr(t,e){var n=e.indexOf("(");return n<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,n)+'")('+t+","+e.slice(n+1)}function xr(t){console.error("[Vue compiler]: "+t)}function Cr(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function Tr(t,e,n){(t.props||(t.props=[])).push({name:e,value:n}),t.plain=!1}function Er(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n}),t.plain=!1}function Ar(t,e,n){t.attrsMap[e]=n,t.attrsList.push({name:e,value:n})}function Sr(t,e,n,i,o,a){var s;(i=i||r).capture&&(delete i.capture,e="!"+e),i.once&&(delete i.once,e="~"+e),i.passive&&(delete i.passive,e="&"+e),"click"===e&&(i.right?(e="contextmenu",delete i.right):i.middle&&(e="mouseup")),i.native?(delete i.native,s=t.nativeEvents||(t.nativeEvents={})):s=t.events||(t.events={});var u={value:n};i!==r&&(u.modifiers=i);var c=s[e];Array.isArray(c)?o?c.unshift(u):c.push(u):s[e]=c?o?[u,c]:[c,u]:u,t.plain=!1}function kr(t,e,n){var r=Or(t,":"+e)||Or(t,"v-bind:"+e);if(null!=r)return br(r);if(!1!==n){var i=Or(t,e);if(null!=i)return JSON.stringify(i)}}function Or(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function Dr(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Ir(e,o);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function Ir(t,e){var n=function(t){if(pr=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<pr-1)return(vr=t.lastIndexOf("."))>-1?{exp:t.slice(0,vr),key:'"'+t.slice(vr+1)+'"'}:{exp:t,key:null};dr=t,vr=gr=mr=0;for(;!jr();)Lr(hr=Nr())?Rr(hr):91===hr&&$r(hr);return{exp:t.slice(0,gr),key:t.slice(gr+1,mr)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function Nr(){return dr.charCodeAt(++vr)}function jr(){return vr>=pr}function Lr(t){return 34===t||39===t}function $r(t){var e=1;for(gr=vr;!jr();)if(Lr(t=Nr()))Rr(t);else if(91===t&&e++,93===t&&e--,0===e){mr=vr;break}}function Rr(t){for(var e=t;!jr()&&(t=Nr())!==e;);}var Pr,Mr="__r",Fr="__c";function Hr(t,e,n,r,i){var o,a,s,u,c;e=(o=e)._withTask||(o._withTask=function(){Gt=!0;var t=o.apply(null,arguments);return Gt=!1,t}),n&&(a=e,s=t,u=r,c=Pr,e=function t(){null!==a.apply(null,arguments)&&Br(s,t,u,c)}),Pr.addEventListener(t,e,nt?{capture:r,passive:i}:r)}function Br(t,e,n,r){(r||Pr).removeEventListener(t,e._withTask||e,n)}function Wr(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Pr=e.elm,function(t){if(o(t[Mr])){var e=Y?"change":"input";t[e]=[].concat(t[Mr],t[e]||[]),delete t[Mr]}o(t[Fr])&&(t.change=[].concat(t[Fr],t.change||[]),delete t[Fr])}(n),oe(n,r,Hr,Br,e.context),Pr=void 0}}var qr={create:Wr,update:Wr};function Ur(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,a,s,u=e.elm,c=t.data.domProps||{},l=e.data.domProps||{};o(l.__ob__)&&(l=e.data.domProps=O({},l));for(n in c)i(l[n])&&(u[n]="");for(n in l){if(r=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===u.childNodes.length&&u.removeChild(u.childNodes[0])}if("value"===n){u._value=r;var f=i(r)?"":String(r);s=f,(a=u).composing||"OPTION"!==a.tagName&&!function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(a,s)&&!function(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.lazy)return!1;if(r.number)return h(n)!==h(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(a,s)||(u.value=f)}else u[n]=r}}}var zr={create:Ur,update:Ur},Vr=w(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function Kr(t){var e=Qr(t.style);return t.staticStyle?O(t.staticStyle,e):e}function Qr(t){return Array.isArray(t)?D(t):"string"==typeof t?Vr(t):t}var Gr,Yr=/^--/,Xr=/\s*!important$/,Jr=function(t,e,n){if(Yr.test(e))t.style.setProperty(e,n);else if(Xr.test(n))t.style.setProperty(e,n.replace(Xr,""),"important");else{var r=ti(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Zr=["Webkit","Moz","ms"],ti=w(function(t){if(Gr=Gr||document.createElement("div").style,"filter"!==(t=C(t))&&t in Gr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Zr.length;n++){var r=Zr[n]+e;if(r in Gr)return r}});function ei(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,u=e.elm,c=r.staticStyle,l=r.normalizedStyle||r.style||{},f=c||l,p=Qr(e.data.style)||{};e.data.normalizedStyle=o(p.__ob__)?O({},p):p;var d=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Kr(i.data))&&O(r,n);(n=Kr(t.data))&&O(r,n);for(var o=t;o=o.parent;)o.data&&(n=Kr(o.data))&&O(r,n);return r}(e,!0);for(s in f)i(d[s])&&Jr(u,s,"");for(s in d)(a=d[s])!==f[s]&&Jr(u,s,null==a?"":a)}}var ni={create:ei,update:ei};function ri(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ii(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function oi(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&O(e,ai(t.name||"v")),O(e,t),e}return"string"==typeof t?ai(t):void 0}}var ai=w(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),si=V&&!X,ui="transition",ci="animation",li="transition",fi="transitionend",pi="animation",di="animationend";si&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",fi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(pi="WebkitAnimation",di="webkitAnimationEnd"));var hi=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function vi(t){hi(function(){hi(t)})}function gi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ri(t,e))}function mi(t,e){t._transitionClasses&&y(t._transitionClasses,e),ii(t,e)}function yi(t,e,n){var r=bi(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ui?fi:di,u=0,c=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++u>=a&&c()};setTimeout(function(){u<a&&c()},o+1),t.addEventListener(s,l)}var _i=/\b(transform|all)(,|$)/;function bi(t,e){var n,r=window.getComputedStyle(t),i=r[li+"Delay"].split(", "),o=r[li+"Duration"].split(", "),a=wi(i,o),s=r[pi+"Delay"].split(", "),u=r[pi+"Duration"].split(", "),c=wi(s,u),l=0,f=0;return e===ui?a>0&&(n=ui,l=a,f=o.length):e===ci?c>0&&(n=ci,l=c,f=u.length):f=(n=(l=Math.max(a,c))>0?a>c?ui:ci:null)?n===ui?o.length:u.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===ui&&_i.test(r[li+"Property"])}}function wi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return xi(e)+xi(t[n])}))}function xi(t){return 1e3*Number(t.slice(0,-1))}function Ci(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=oi(t.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,s=r.type,c=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,p=r.appearClass,d=r.appearToClass,v=r.appearActiveClass,g=r.beforeEnter,m=r.enter,y=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,w=r.appear,x=r.afterAppear,C=r.appearCancelled,T=r.duration,E=_e,A=_e.$vnode;A&&A.parent;)E=(A=A.parent).context;var S=!E._isMounted||!t.isRootInsert;if(!S||w||""===w){var k=S&&p?p:c,O=S&&v?v:f,D=S&&d?d:l,I=S&&b||g,N=S&&"function"==typeof w?w:m,j=S&&x||y,L=S&&C||_,$=h(u(T)?T.enter:T);0;var P=!1!==a&&!X,M=Ai(N),F=n._enterCb=R(function(){P&&(mi(n,D),mi(n,O)),F.cancelled?(P&&mi(n,k),L&&L(n)):j&&j(n),n._enterCb=null});t.data.show||ae(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,F)}),I&&I(n),P&&(gi(n,k),gi(n,O),vi(function(){gi(n,D),mi(n,k),F.cancelled||M||(Ei($)?setTimeout(F,$):yi(n,s,F))})),t.data.show&&(e&&e(),N&&N(n,F)),P||M||F()}}}function Ti(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=oi(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var a=r.css,s=r.type,c=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,p=r.beforeLeave,d=r.leave,v=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,y=r.duration,_=!1!==a&&!X,b=Ai(d),w=h(u(y)?y.leave:y);0;var x=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(mi(n,l),mi(n,f)),x.cancelled?(_&&mi(n,c),g&&g(n)):(e(),v&&v(n)),n._leaveCb=null});m?m(C):C()}function C(){x.cancelled||(t.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),p&&p(n),_&&(gi(n,c),gi(n,f),vi(function(){gi(n,l),mi(n,c),x.cancelled||b||(Ei(w)?setTimeout(x,w):yi(n,s,x))})),d&&d(n,x),_||b||x())}}function Ei(t){return"number"==typeof t&&!isNaN(t)}function Ai(t){if(i(t))return!1;var e=t.fns;return o(e)?Ai(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Si(t,e){!0!==e.data.show&&Ci(e)}var ki=function(t){var e,n,r={},u=t.modules,c=t.nodeOps;for(e=0;e<Zn.length;++e)for(r[Zn[e]]=[],n=0;n<u.length;++n)o(u[n][Zn[e]])&&r[Zn[e]].push(u[n][Zn[e]]);function l(t){var e=c.parentNode(t);o(e)&&c.removeChild(e,t)}function f(t,e,n,i,s){if(t.isRootInsert=!s,!function(t,e,n,i){var s=t.data;if(o(s)){var u=o(t.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(t,!1,n,i),o(t.componentInstance))return p(t,e),a(u)&&function(t,e,n,i){for(var a,s=t;s.componentInstance;)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](Jn,s);e.push(s);break}d(n,t.elm,i)}(t,e,n,i),!0}}(t,e,n,i)){var u=t.data,l=t.children,f=t.tag;o(f)?(t.elm=t.ns?c.createElementNS(t.ns,f):c.createElement(f,t),y(t),h(t,l,e),o(u)&&m(t,e),d(n,t.elm,i)):a(t.isComment)?(t.elm=c.createComment(t.text),d(n,t.elm,i)):(t.elm=c.createTextNode(t.text),d(n,t.elm,i))}}function p(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,g(t)?(m(t,e),y(t)):(Xn(t),e.push(t))}function d(t,e,n){o(t)&&(o(n)?n.parentNode===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function h(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0);else s(t.text)&&c.appendChild(t.elm,c.createTextNode(String(t.text)))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function m(t,n){for(var i=0;i<r.create.length;++i)r.create[i](Jn,t);o(e=t.data.hook)&&(o(e.create)&&e.create(Jn,t),o(e.insert)&&n.push(t))}function y(t){var e;if(o(e=t.fnScopeId))c.setAttribute(t.elm,e,"");else for(var n=t;n;)o(e=n.context)&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,""),n=n.parent;o(e=_e)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,"")}function _(t,e,n,r,i,o){for(;r<=i;++r)f(n[r],o,t,e)}function b(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function w(t,e,n,r){for(;n<=r;++n){var i=e[n];o(i)&&(o(i.tag)?(x(i),b(i)):l(i.elm))}}function x(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=function(t,e){function n(){0==--n.listeners&&l(t)}return n.listeners=e,n}(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&x(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r){for(var i=n;i<r;i++){var a=e[i];if(o(a)&&tr(t,a))return i}}function T(t,e,n,s){if(t!==e){var u=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?S(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var l,p=e.data;o(p)&&o(l=p.hook)&&o(l=l.prepatch)&&l(t,e);var d=t.children,h=e.children;if(o(p)&&g(e)){for(l=0;l<r.update.length;++l)r.update[l](t,e);o(l=p.hook)&&o(l=l.update)&&l(t,e)}i(e.text)?o(d)&&o(h)?d!==h&&function(t,e,n,r,a){for(var s,u,l,p=0,d=0,h=e.length-1,v=e[0],g=e[h],m=n.length-1,y=n[0],b=n[m],x=!a;p<=h&&d<=m;)i(v)?v=e[++p]:i(g)?g=e[--h]:tr(v,y)?(T(v,y,r),v=e[++p],y=n[++d]):tr(g,b)?(T(g,b,r),g=e[--h],b=n[--m]):tr(v,b)?(T(v,b,r),x&&c.insertBefore(t,v.elm,c.nextSibling(g.elm)),v=e[++p],b=n[--m]):tr(g,y)?(T(g,y,r),x&&c.insertBefore(t,g.elm,v.elm),g=e[--h],y=n[++d]):(i(s)&&(s=er(e,p,h)),i(u=o(y.key)?s[y.key]:C(y,e,p,h))?f(y,r,t,v.elm):tr(l=e[u],y)?(T(l,y,r),e[u]=void 0,x&&c.insertBefore(t,l.elm,v.elm)):f(y,r,t,v.elm),y=n[++d]);p>h?_(t,i(n[m+1])?null:n[m+1].elm,n,d,m,r):d>m&&w(0,e,p,h)}(u,d,h,n,s):o(h)?(o(t.text)&&c.setTextContent(u,""),_(u,null,h,0,h.length-1,n)):o(d)?w(0,d,0,d.length-1):o(t.text)&&c.setTextContent(u,""):t.text!==e.text&&c.setTextContent(u,e.text),o(p)&&o(l=p.hook)&&o(l=l.postpatch)&&l(t,e)}}}function E(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var A=v("attrs,class,staticClass,staticStyle,key");function S(t,e,n,r){var i,s=e.tag,u=e.data,c=e.children;if(r=r||u&&u.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(u)&&(o(i=u.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return p(e,n),!0;if(o(s)){if(o(c))if(t.hasChildNodes())if(o(i=u)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,d=0;d<c.length;d++){if(!f||!S(f,c[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(e,c,n);if(o(u)){var v=!1;for(var g in u)if(!A(g)){v=!0,m(e,n);break}!v&&u.class&&ee(u.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s,u,l){if(!i(e)){var p,d=!1,h=[];if(i(t))d=!0,f(e,h,u,l);else{var v=o(t.nodeType);if(!v&&tr(t,e))T(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(P)&&(t.removeAttribute(P),n=!0),a(n)&&S(t,e,h))return E(e,h,!0),t;p=t,t=new dt(c.tagName(p).toLowerCase(),{},[],void 0,p)}var m=t.elm,y=c.parentNode(m);if(f(e,h,m._leaveCb?null:y,c.nextSibling(m)),o(e.parent))for(var _=e.parent,x=g(e);_;){for(var C=0;C<r.destroy.length;++C)r.destroy[C](_);if(_.elm=e.elm,x){for(var A=0;A<r.create.length;++A)r.create[A](Jn,_);var k=_.data.hook.insert;if(k.merged)for(var O=1;O<k.fns.length;O++)k.fns[O]()}else Xn(_);_=_.parent}o(y)?w(0,[t],0,0):o(t.tag)&&b(t)}}return E(e,h,d),e.elm}o(t)&&b(t)}}({nodeOps:Gn,modules:[lr,yr,qr,zr,ni,V?{create:Si,activate:Si,remove:function(t,e){!0!==t.data.show?Ti(t,e):e()}}:{}].concat(sr)});X&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ri(t,"input")});var Oi={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ae(n,"postpatch",function(){Oi.componentUpdated(t,e,n)}):Di(t,e,n.context),t._vOptions=[].map.call(t.options,ji)):("textarea"===n.tag||Kn(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",$i),Z||(t.addEventListener("compositionstart",Li),t.addEventListener("compositionend",$i)),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Di(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ji);if(i.some(function(t,e){return!L(t,r[e])}))(t.multiple?e.value.some(function(t){return Ni(t,i)}):e.value!==e.oldValue&&Ni(e.value,i))&&Ri(t,"change")}}};function Di(t,e,n){Ii(t,e,n),(Y||J)&&setTimeout(function(){Ii(t,e,n)},0)}function Ii(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,u=t.options.length;s<u;s++)if(a=t.options[s],i)o=$(r,ji(a))>-1,a.selected!==o&&(a.selected=o);else if(L(ji(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Ni(t,e){return e.every(function(e){return!L(e,t)})}function ji(t){return"_value"in t?t._value:t.value}function Li(t){t.target.composing=!0}function $i(t){t.target.composing&&(t.target.composing=!1,Ri(t.target,"input"))}function Ri(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Pi(t){return!t.componentInstance||t.data&&t.data.transition?t:Pi(t.componentInstance._vnode)}var Mi={model:Oi,show:{bind:function(t,e,n){var r=e.value,i=(n=Pi(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Ci(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;r!==e.oldValue&&((n=Pi(n)).data&&n.data.transition?(n.data.show=!0,r?Ci(n,function(){t.style.display=t.__vOriginalDisplay}):Ti(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},Fi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Hi(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Hi(pe(e.children)):t}function Bi(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[C(o)]=i[o];return e}function Wi(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var qi={name:"transition",props:Fi,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag||fe(t)})).length){0;var r=this.mode;0;var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var o=Hi(i);if(!o)return i;if(this._leaving)return Wi(t,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var u,c,l=(o.data||(o.data={})).transition=Bi(this),f=this._vnode,p=Hi(f);if(o.data.directives&&o.data.directives.some(function(t){return"show"===t.name})&&(o.data.show=!0),p&&p.data&&(u=o,(c=p).key!==u.key||c.tag!==u.tag)&&!fe(p)&&(!p.componentInstance||!p.componentInstance._vnode.isComment)){var d=p.data.transition=O({},l);if("out-in"===r)return this._leaving=!0,ae(d,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),Wi(t,i);if("in-out"===r){if(fe(o))return f;var h,v=function(){h()};ae(l,"afterEnter",v),ae(l,"enterCancelled",v),ae(d,"delayLeave",function(t){h=t})}}return i}}},Ui=O({tag:String,moveClass:String},Fi);function zi(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Vi(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ki(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Ui.mode;var Qi={Transition:qi,TransitionGroup:{props:Ui,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Bi(this),s=0;s<i.length;s++){var u=i[s];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a;else;}if(r){for(var c=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?c.push(p):l.push(p)}this.kept=t(e,null,c),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(zi),t.forEach(Vi),t.forEach(Ki),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;gi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(fi,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(fi,t),n._moveCb=null,mi(n,e))})}}))},methods:{hasMove:function(t,e){if(!si)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){ii(n,t)}),ri(n,e),n.style.display="none",this.$el.appendChild(n);var r=bi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};mn.config.mustUseProp=Dn,mn.config.isReservedTag=Un,mn.config.isReservedAttr=kn,mn.config.getTagNamespace=zn,mn.config.isUnknownElement=function(t){if(!V)return!0;if(Un(t))return!1;if(t=t.toLowerCase(),null!=Vn[t])return Vn[t];var e=document.createElement(t);return t.indexOf("-")>-1?Vn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Vn[t]=/HTMLUnknownElement/.test(e.toString())},O(mn.options.directives,Mi),O(mn.options.components,Qi),mn.prototype.__patch__=V?ki:I,mn.prototype.$mount=function(t,e){return t=t&&V?Qn(t):void 0,r=t,i=e,(n=this).$el=r,n.$options.render||(n.$options.render=vt),xe(n,"beforeMount"),new Ie(n,function(){n._update(n._render(),i)},I,null,!0),i=!1,null==n.$vnode&&(n._isMounted=!0,xe(n,"mounted")),n;var n,r,i},mn.nextTick(function(){H.devtools&&ot&&ot.emit("init",mn)},0);var Gi=/\{\{((?:.|\n)+?)\}\}/g,Yi=/[-.*+?^${}()|[\]\/\\]/g,Xi=w(function(t){var e=t[0].replace(Yi,"\\$&"),n=t[1].replace(Yi,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});function Ji(t,e){var n=e?Xi(e):Gi;if(n.test(t)){for(var r,i,o,a=[],s=[],u=n.lastIndex=0;r=n.exec(t);){(i=r.index)>u&&(s.push(o=t.slice(u,i)),a.push(JSON.stringify(o)));var c=br(r[1].trim());a.push("_s("+c+")"),s.push({"@binding":c}),u=i+r[0].length}return u<t.length&&(s.push(o=t.slice(u)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}var Zi={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Or(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=kr(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}};var to,eo={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Or(t,"style");n&&(t.staticStyle=JSON.stringify(Vr(n)));var r=kr(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},no=function(t){return(to=to||document.createElement("div")).innerHTML=t,to.textContent},ro=v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),io=v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),oo=v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),ao=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,so="[a-zA-Z_][\\w\\-\\.]*",uo="((?:"+so+"\\:)?"+so+")",co=new RegExp("^<"+uo),lo=/^\s*(\/?)>/,fo=new RegExp("^<\\/"+uo+"[^>]*>"),po=/^<!DOCTYPE [^>]+>/i,ho=/^<!--/,vo=/^<!\[/,go=!1;"x".replace(/x(.)?/g,function(t,e){go=""===e});var mo=v("script,style,textarea",!0),yo={},_o={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},bo=/&(?:lt|gt|quot|amp);/g,wo=/&(?:lt|gt|quot|amp|#10|#9);/g,xo=v("pre,textarea",!0),Co=function(t,e){return t&&xo(t)&&"\n"===e[0]};var To,Eo,Ao,So,ko,Oo,Do,Io,No=/^@|^v-on:/,jo=/^v-|^@|^:/,Lo=/(.*?)\s+(?:in|of)\s+(.*)/,$o=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Ro=/^\(|\)$/g,Po=/:(.*)$/,Mo=/^:|^v-bind:/,Fo=/\.[^.]+/g,Ho=w(no);function Bo(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),parent:n,children:[]}}function Wo(t,e){To=e.warn||xr,Oo=e.isPreTag||N,Do=e.mustUseProp||N,Io=e.getTagNamespace||N,Ao=Cr(e.modules,"transformNode"),So=Cr(e.modules,"preTransformNode"),ko=Cr(e.modules,"postTransformNode"),Eo=e.delimiters;var n,r,i=[],o=!1!==e.preserveWhitespace,a=!1,s=!1;function u(t){t.pre&&(a=!1),Oo(t.tag)&&(s=!1);for(var n=0;n<ko.length;n++)ko[n](t,e)}return function(t,e){for(var n,r,i=[],o=e.expectHTML,a=e.isUnaryTag||N,s=e.canBeLeftOpenTag||N,u=0;t;){if(n=t,r&&mo(r)){var c=0,l=r.toLowerCase(),f=yo[l]||(yo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=t.replace(f,function(t,n,r){return c=r.length,mo(l)||"noscript"===l||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Co(l,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});u+=t.length-p.length,t=p,A(l,u-c,u)}else{var d=t.indexOf("<");if(0===d){if(ho.test(t)){var h=t.indexOf("--\x3e");if(h>=0){e.shouldKeepComment&&e.comment(t.substring(4,h)),C(h+3);continue}}if(vo.test(t)){var v=t.indexOf("]>");if(v>=0){C(v+2);continue}}var g=t.match(po);if(g){C(g[0].length);continue}var m=t.match(fo);if(m){var y=u;C(m[0].length),A(m[1],y,u);continue}var _=T();if(_){E(_),Co(r,t)&&C(1);continue}}var b=void 0,w=void 0,x=void 0;if(d>=0){for(w=t.slice(d);!(fo.test(w)||co.test(w)||ho.test(w)||vo.test(w)||(x=w.indexOf("<",1))<0);)d+=x,w=t.slice(d);b=t.substring(0,d),C(d)}d<0&&(b=t,t=""),e.chars&&b&&e.chars(b)}if(t===n){e.chars&&e.chars(t);break}}function C(e){u+=e,t=t.substring(e)}function T(){var e=t.match(co);if(e){var n,r,i={tagName:e[1],attrs:[],start:u};for(C(e[0].length);!(n=t.match(lo))&&(r=t.match(ao));)C(r[0].length),i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=u,i}}function E(t){var n=t.tagName,u=t.unarySlash;o&&("p"===r&&oo(n)&&A(r),s(n)&&r===n&&A(n));for(var c,l,f,p=a(n)||!!u,d=t.attrs.length,h=new Array(d),v=0;v<d;v++){var g=t.attrs[v];go&&-1===g[0].indexOf('""')&&(""===g[3]&&delete g[3],""===g[4]&&delete g[4],""===g[5]&&delete g[5]);var m=g[3]||g[4]||g[5]||"",y="a"===n&&"href"===g[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;h[v]={name:g[1],value:(c=m,l=y,f=l?wo:bo,c.replace(f,function(t){return _o[t]}))}}p||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h}),r=n),e.start&&e.start(n,h,p,t.start,t.end)}function A(t,n,o){var a,s;if(null==n&&(n=u),null==o&&(o=u),t&&(s=t.toLowerCase()),t)for(a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var c=i.length-1;c>=a;c--)e.end&&e.end(i[c].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,o):"p"===s&&(e.start&&e.start(t,[],!1,n,o),e.end&&e.end(t,n,o))}A()}(t,{warn:To,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,start:function(t,o,c){var l=r&&r.ns||Io(t);Y&&"svg"===l&&(o=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ko.test(r.name)||(r.name=r.name.replace(Qo,""),e.push(r))}return e}(o));var f,p,d,h,v,g=Bo(t,o,r);l&&(g.ns=l),"style"!==(f=g).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||it()||(g.forbidden=!0);for(var m=0;m<So.length;m++)g=So[m](g,e)||g;function y(t){0}if(a||(null!=Or(p=g,"v-pre")&&(p.pre=!0),g.pre&&(a=!0)),Oo(g.tag)&&(s=!0),a?function(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}(g):g.processed||(Uo(g),function(t){var e=Or(t,"v-if");if(e)t.if=e,zo(t,{exp:e,block:t});else{null!=Or(t,"v-else")&&(t.else=!0);var n=Or(t,"v-else-if");n&&(t.elseif=n)}}(g),null!=Or(d=g,"v-once")&&(d.once=!0),qo(g,e)),n?i.length||n.if&&(g.elseif||g.else)&&(y(),zo(n,{exp:g.elseif,block:g})):(n=g,y()),r&&!g.forbidden)if(g.elseif||g.else)h=g,(v=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(r.children))&&v.if&&zo(v,{exp:h.elseif,block:h});else if(g.slotScope){r.plain=!1;var _=g.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[_]=g}else r.children.push(g),g.parent=r;c?u(g):(r=g,i.push(g))},end:function(){var t=i[i.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!s&&t.children.pop(),i.length-=1,r=i[i.length-1],u(t)},chars:function(t){if(r&&(!Y||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var e,n,i=r.children;if(t=s||t.trim()?"script"===(e=r).tag||"style"===e.tag?t:Ho(t):o&&i.length?" ":"")!a&&" "!==t&&(n=Ji(t,Eo))?i.push({type:2,expression:n.expression,tokens:n.tokens,text:t}):" "===t&&i.length&&" "===i[i.length-1].text||i.push({type:3,text:t})}},comment:function(t){r.children.push({type:3,text:t,isComment:!0})}}),n}function qo(t,e){var n,r,i,o;(r=kr(n=t,"key"))&&(n.key=r),t.plain=!t.key&&!t.attrsList.length,(o=kr(i=t,"ref"))&&(i.ref=o,i.refInFor=function(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(i)),function(t){if("slot"===t.tag)t.slotName=kr(t,"name");else{var e;"template"===t.tag?(e=Or(t,"scope"),t.slotScope=e||Or(t,"slot-scope")):(e=Or(t,"slot-scope"))&&(t.slotScope=e);var n=kr(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,"template"===t.tag||t.slotScope||Er(t,"slot",n))}}(t),function(t){var e;(e=kr(t,"is"))&&(t.component=e);null!=Or(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var a=0;a<Ao.length;a++)t=Ao[a](t,e)||t;!function(t){var e,n,r,i,o,a,s,u=t.attrsList;for(e=0,n=u.length;e<n;e++){if(r=i=u[e].name,o=u[e].value,jo.test(r))if(t.hasBindings=!0,(a=Vo(r))&&(r=r.replace(Fo,"")),Mo.test(r))r=r.replace(Mo,""),o=br(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=C(r))&&(r="innerHTML")),a.camel&&(r=C(r)),a.sync&&Sr(t,"update:"+C(r),Ir(o,"$event"))),s||!t.component&&Do(t.tag,t.attrsMap.type,r)?Tr(t,r,o):Er(t,r,o);else if(No.test(r))r=r.replace(No,""),Sr(t,r,o,a,!1);else{var c=(r=r.replace(jo,"")).match(Po),l=c&&c[1];l&&(r=r.slice(0,-(l.length+1))),p=r,d=i,h=o,v=l,g=a,((f=t).directives||(f.directives=[])).push({name:p,rawName:d,value:h,arg:v,modifiers:g}),f.plain=!1}else Er(t,r,JSON.stringify(o)),!t.component&&"muted"===r&&Do(t.tag,t.attrsMap.type,r)&&Tr(t,r,"true")}var f,p,d,h,v,g}(t)}function Uo(t){var e;if(e=Or(t,"v-for")){var n=function(t){var e=t.match(Lo);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(Ro,""),i=r.match($o);i?(n.alias=r.replace($o,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&O(t,n)}}function zo(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Vo(t){var e=t.match(Fo);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}var Ko=/^xmlns:NS\d+/,Qo=/^NS\d+:/;function Go(t){return Bo(t.tag,t.attrsList.slice(),t.parent)}var Yo=[Zi,eo,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=kr(t,"type"),i=Or(t,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Or(t,"v-else",!0),s=Or(t,"v-else-if",!0),u=Go(t);Uo(u),Ar(u,"type","checkbox"),qo(u,e),u.processed=!0,u.if="("+r+")==='checkbox'"+o,zo(u,{exp:u.if,block:u});var c=Go(t);Or(c,"v-for",!0),Ar(c,"type","radio"),qo(c,e),zo(u,{exp:"("+r+")==='radio'"+o,block:c});var l=Go(t);return Or(l,"v-for",!0),Ar(l,":type",r),qo(l,e),zo(u,{exp:i,block:l}),a?u.else=!0:s&&(u.elseif=s),u}}}}];var Xo,Jo,Zo,ta={expectHTML:!0,modules:Yo,directives:{model:function(t,e,n){n;var r,i,o,a,s,u,c,l,f,p,d,h,v,g,m,y,_=e.value,b=e.modifiers,w=t.tag,x=t.attrsMap.type;if(t.component)return Dr(t,_,b),!1;if("select"===w)v=t,g=_,y=(y='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((m=b)&&m.number?"_n(val)":"val")+"});")+" "+Ir(g,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Sr(v,"change",y,null,!0);else if("input"===w&&"checkbox"===x)u=t,c=_,f=(l=b)&&l.number,p=kr(u,"value")||"null",d=kr(u,"true-value")||"true",h=kr(u,"false-value")||"false",Tr(u,"checked","Array.isArray("+c+")?_i("+c+","+p+")>-1"+("true"===d?":("+c+")":":_q("+c+","+d+")")),Sr(u,"change","var $$a="+c+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+h+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+c+"=$$a.concat([$$v]))}else{$$i>-1&&("+c+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+Ir(c,"$$c")+"}",null,!0);else if("input"===w&&"radio"===x)r=t,i=_,a=(o=b)&&o.number,s=kr(r,"value")||"null",Tr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Sr(r,"change",Ir(i,s),null,!0);else if("input"===w||"textarea"===w)!function(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,u=!o&&"range"!==r,c=o?"change":"range"===r?Mr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Ir(e,l);u&&(f="if($event.target.composing)return;"+f),Tr(t,"value","("+e+")"),Sr(t,c,f,null,!0),(s||a)&&Sr(t,"blur","$forceUpdate()")}(t,_,b);else if(!H.isReservedTag(w))return Dr(t,_,b),!1;return!0},text:function(t,e){e.value&&Tr(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&Tr(t,"innerHTML","_s("+e.value+")")}},isPreTag:function(t){return"pre"===t},isUnaryTag:ro,mustUseProp:Dn,canBeLeftOpenTag:io,isReservedTag:Un,getTagNamespace:zn,staticKeys:(Xo=Yo,Xo.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(","))},ea=w(function(t){return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))});function na(t,e){t&&(Jo=ea(e.staticKeys||""),Zo=e.isReservedTag||N,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||g(t.tag)||!Zo(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Jo)))}(e);if(1===e.type){if(!Zo(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];t(i),i.static||(e.static=!1)}if(e.ifConditions)for(var o=1,a=e.ifConditions.length;o<a;o++){var s=e.ifConditions[o].block;t(s),s.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,i=e.children.length;r<i;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(var o=1,a=e.ifConditions.length;o<a;o++)t(e.ifConditions[o].block,n)}}(t,!1))}var ra=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ia=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,oa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},aa=function(t){return"if("+t+")return null;"},sa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:aa("$event.target !== $event.currentTarget"),ctrl:aa("!$event.ctrlKey"),shift:aa("!$event.shiftKey"),alt:aa("!$event.altKey"),meta:aa("!$event.metaKey"),left:aa("'button' in $event && $event.button !== 0"),middle:aa("'button' in $event && $event.button !== 1"),right:aa("'button' in $event && $event.button !== 2")};function ua(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t)r+='"'+i+'":'+ca(i,t[i])+",";return r.slice(0,-1)+"}"}function ca(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ca(t,e)}).join(",")+"]";var n=ia.test(e.value),r=ra.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(sa[s])o+=sa[s],oa[s]&&a.push(s);else if("exact"===s){var u=e.modifiers;o+=aa(["ctrl","shift","alt","meta"].filter(function(t){return!u[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!('button' in $event)&&"+a.map(la).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function la(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=oa[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key)"}var fa={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:I},pa=function(t){this.options=t,this.warn=t.warn||xr,this.transforms=Cr(t.modules,"transformCode"),this.dataGenFns=Cr(t.modules,"genData"),this.directives=O(O({},fa),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]};function da(t,e){var n=new pa(e);return{render:"with(this){return "+(t?ha(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ha(t,e){if(t.staticRoot&&!t.staticProcessed)return va(t,e);if(t.once&&!t.onceProcessed)return ga(t,e);if(t.for&&!t.forProcessed)return function(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";0;return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ha)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return ma(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=ba(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return C(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(t,e);var n;if(t.component)a=t.component,u=e,c=(s=t).inlineTemplate?null:ba(s,u,!0),n="_c("+a+","+ya(s,u)+(c?","+c:"")+")";else{var r=t.plain?void 0:ya(t,e),i=t.inlineTemplate?null:ba(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return ba(t,e)||"void 0";var a,s,u,c}function va(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+ha(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function ga(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return ma(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ha(t,e)+","+e.onceId+++","+n+")":ha(t,e)}return va(t,e)}function ma(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,i){if(!e.length)return i||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+t(e,n,r,i):""+a(o.block);function a(t){return r?r(t,n):t.once?ga(t,n):ha(t,n)}}(t.ifConditions.slice(),e,n,r)}function ya(t,e){var n,r,i="{",o=function(t,e){var n=t.directives;if(!n)return;var r,i,o,a,s="directives:[",u=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=e.directives[o.name];c&&(a=!!c(t,o,e.warn)),a&&(u=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(u)return s.slice(0,-1)+"]"}(t,e);o&&(i+=o+","),t.key&&(i+="key:"+t.key+","),t.ref&&(i+="ref:"+t.ref+","),t.refInFor&&(i+="refInFor:true,"),t.pre&&(i+="pre:true,"),t.component&&(i+='tag:"'+t.tag+'",');for(var a=0;a<e.dataGenFns.length;a++)i+=e.dataGenFns[a](t);if(t.attrs&&(i+="attrs:{"+Ca(t.attrs)+"},"),t.props&&(i+="domProps:{"+Ca(t.props)+"},"),t.events&&(i+=ua(t.events,!1,e.warn)+","),t.nativeEvents&&(i+=ua(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&!t.slotScope&&(i+="slot:"+t.slotTarget+","),t.scopedSlots&&(i+=(n=t.scopedSlots,r=e,"scopedSlots:_u(["+Object.keys(n).map(function(t){return _a(t,n[t],r)}).join(",")+"]),")),t.model&&(i+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var s=function(t,e){var n=t.children[0];0;if(1===n.type){var r=da(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",t.wrapData&&(i=t.wrapData(i)),t.wrapListeners&&(i=t.wrapListeners(i)),i}function _a(t,e,n){return e.for&&!e.forProcessed?(r=t,o=n,a=(i=e).for,s=i.alias,u=i.iterator1?","+i.iterator1:"",c=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+u+c+"){return "+_a(r,i,o)+"})"):"{key:"+t+",fn:"+("function("+String(e.slotScope)+"){return "+("template"===e.tag?e.if?e.if+"?"+(ba(e,n)||"undefined")+":undefined":ba(e,n)||"undefined":ha(e,n))+"}")+"}";var r,i,o,a,s,u,c}function ba(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||ha)(a,e);var s=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(wa(i)||i.ifConditions&&i.ifConditions.some(function(t){return wa(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(o,e.maybeComponent):0,u=i||xa;return"["+o.map(function(t){return u(t,e)}).join(",")+"]"+(s?","+s:"")}}function wa(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function xa(t,e){return 1===t.type?ha(t,e):3===t.type&&t.isComment?(r=t,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=t).type?n.expression:Ta(JSON.stringify(n.text)))+")";var n,r}function Ca(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Ta(r.value)+","}return e.slice(0,-1)}function Ta(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function Ea(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),I}}var Aa,Sa,ka=(Aa=function(t,e){var n=Wo(t.trim(),e);!1!==e.optimize&&na(n,e);var r=da(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),i=[],o=[];if(r.warn=function(t,e){(e?o:i).push(t)},n){n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=O(Object.create(t.directives||null),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=Aa(e,r);return s.errors=i,s.tips=o,s}return{compile:e,compileToFunctions:(n=e,r=Object.create(null),function(t,e,i){(e=O({},e)).warn,delete e.warn;var o=e.delimiters?String(e.delimiters)+t:t;if(r[o])return r[o];var a=n(t,e),s={},u=[];return s.render=Ea(a.render,u),s.staticRenderFns=a.staticRenderFns.map(function(t){return Ea(t,u)}),r[o]=s})};var n,r})(ta).compileToFunctions;function Oa(t){return(Sa=Sa||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Sa.innerHTML.indexOf("&#10;")>0}var Da=!!V&&Oa(!1),Ia=!!V&&Oa(!0),Na=w(function(t){var e=Qn(t);return e&&e.innerHTML}),ja=mn.prototype.$mount;mn.prototype.$mount=function(t,e){if((t=t&&Qn(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Na(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){0;var i=ka(r,{shouldDecodeNewlines:Da,shouldDecodeNewlinesForHref:Ia,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ja.call(this,t,e)},mn.compile=ka,t.exports=mn}).call(e,n(1),n(37).setImmediate)},function(t,e,n){var r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(38),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,a,s,u=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){h(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){h(t.data)},r=function(t){o.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(h,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(a+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return c[u]=i,r(u),u++},p.clearImmediate=d}function d(t){delete c[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{d(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(1),n(6))},function(t,e,n){var r=n(40)(n(41),n(42),!1,null,null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r,i,o){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){console.log("Component mounted.")}}},function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[this._v("Example Component")]),this._v(" "),e("div",{staticClass:"panel-body"},[this._v("\n                    I'm an example component!\n                ")])])])])])}]}},function(t,e){}]);
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/*!
 DataTables 1.10.19
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Z(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Z(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Z(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Da(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&(d&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(d&&"Loading..."===b.sLoadingRecords)&&F(a,
a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Da(a)}}function fb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(n.models.oSearch,a[b])}function gb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function hb(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth}
function ib(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ea(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);ka(a,d,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],
d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(gb(c),J(n.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=b.mRender?
S(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return N(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,
b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function $(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&la(a);r(a,null,"column-sizing",[a])}function aa(a,b){var c=ma(a,"bVisible");return"number"===
typeof c[b]?c[b]:null}function ba(a,b){var c=ma(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function V(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function ma(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ga(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<
j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function jb(a,b,c,d){var e,f,g,j,i,m,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){m=b[e];var q=m.targets!==k?m.targets:m.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ea(a);d(q[f],m)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],m);else if("string"===
typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,m)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ha(a,e,c,d);return e}function na(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,
e){c=Ia(a,e);return O(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function kb(a,
b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||
-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ja(f);for(var i=0,m=j.length;i<m;i++){f=j[i].match(ca);g=j[i].match(W);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(m=a.length;i<m;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(W,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}
function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,j,i=0,m=e.length-1;i<m;i++){g=e[i].match(ca);j=e[i].match(W);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(m=d.length;j<m;j++)f={},b(f,d[j],g),
a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(W,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(W))a[f.replace(W,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ka(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function pa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,
1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ia(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;La(a,e)}}function Ia(a,b,c,d){var e=[],f=b.firstChild,g,
j,i=0,m,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)))}},G=function(a){if(c===k||c===i)j=l[i],m=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,m),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,m)):d[i]=m;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)G(f),e.push(f);f=f.nextSibling}else{e=b.anCells;
f=0;for(g=e.length;f<g;f++)G(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e}}function Ha(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,m,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;La(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){m=a.aoColumns[l];i=c?d[l]:H.createElement(m.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||m.mRender||m.mData!==l)&&(!h.isPlainObject(m.mData)||m.mData._!==l+".display"))i.innerHTML=
B(a,b,l,"display");m.sClass&&(i.className+=" "+m.sClass);m.bVisible&&!c?j.appendChild(i):!m.bVisible&&c&&i.parentNode.removeChild(i);m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b,g])}e.nTr.setAttribute("role","row")}function La(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function lb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ma(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Na(a,"header")(a,d,
f,m);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=
0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(m=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+m]!==k&&g[d][f].cell==g[d][f+m].cell;){for(c=0;c<i;c++)j[d+c][f+m]=1;m++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",m)}}}}function P(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=
d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!mb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ha(a,l);var t=q.nTr;if(0!==e){var G=d[c%e];q._sRowStripe!=G&&(h(t).removeClass(q._sRowStripe).addClass(G),
q._sRowStripe=G)}r(a,"aoRowCallback",null,[t,q._aData,c,j,l]);b.push(t);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:V(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,m,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,m,i]);d=h(a.nTBody);d.children().detach();
d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&nb(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1}function ob(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=
a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];m=f[k+1];if("'"==m||'"'==m){l="";for(q=2;f[k+q]!=m;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=pb(a);else if("f"==j&&
d.bFilter)g=qb(a);else if("r"==j&&d.bProcessing)g=rb(a);else if("t"==j)g=sb(a);else if("i"==j&&d.bInfo)g=tb(a);else if("p"==j&&d.bPaginate)g=ub(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(m=i.length;q<m;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,m,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<
i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;m=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][m+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||
!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var m="function"===typeof f?f(b,a):f,b="function"===typeof f&&m?m:h.extend(!0,b,m);delete g.data}m={data:b,success:function(b){var c=
b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(m,{url:g||a.sAjaxSource})):
"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(m,g)),g.data=f)}function mb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),sa(a,vb(a),function(b){wb(a,b)}),!1):!0}function vb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,k=X(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",
i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)m=b[g],l=f[g],i="function"==typeof m.mData?"function":m.mData,G.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,m.bSearchable)),d.bSort&&t("bSortable_"+g,m.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",
e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+a,b.dir)}),t("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G}function wb(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,
10);d=0;for(e=c.length;d<e;d++)O(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b}function qb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",
g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Oa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",
c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ga(a);if("ssp"!=y(a)){xb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)yb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,
e[b].bSmart,e[b].bCaseInsensitive);zb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function zb(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,m=c.length;i<m;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function yb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Pa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function xb(a,b,c,d,e,f){var d=Pa(b,
d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==n.ext.search.length&&(c=!0);j=Ab(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',
"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Ab(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);
h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Bb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Cb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function tb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Db,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",
b+"_info"));return d[0]}function Db(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Eb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Eb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,
c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){ob(a);lb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);T(a);e=
y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)O(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ha(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&$(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);r(a,null,"length",[a,c])}function pb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=
e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ra(a,h(this).val());P(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===
c&&h("select",i).val(d)});return i[0]}function ub(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function(a){P(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Na(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,
e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&P(a));return b}function rb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}
function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");r(a,null,"processing",[a,b])}function sb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",
position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:la,sName:"scrolling"});return i[0]}function la(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,
f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,m=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),n=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),Q,L,R,w,Ua=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==
L&&a.scrollBarVis!==k)a.scrollBarVis=L,$(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();u&&(R=u.clone().prependTo(p),Q=u.find("tr"),R=R.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=aa(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},R);f=p.outerWidth();if(""===c){r.width="100%";if(U&&(p.find("tbody").height()>j.offsetHeight||
"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width=v(d),f=p.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Ua.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ua[b]},o);h(L).height(0);u&&(I(C,R),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},R),I(function(a,b){a.style.width=y[b]},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height=
"0";a.childNodes[0].style.overflow="hidden";a.style.width=Ua[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+A[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b]},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else Q="100%";q.width=v(Q);
g.width=v(Q);u&&(a.nScrollFoot.style.width=v(Q));!e&&U&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();m[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(n[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,
f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=ma(a,"bVisible"),m=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(l=n);for(n=0;n<i.length;n++)o=c[i[n]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),t=!0);if(d||
!t&&!f&&!e&&j==V(a)&&j==m.length)for(n=0;n<j;n++)i=aa(a,n),null!==i&&(c[i].sWidth=v(m.eq(n).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");m=ra(a,j.find("thead")[0]);for(n=0;n<i.length;n++)o=c[i[n]],m[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):
"",o.sWidthOrig&&f&&h(m[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(n=0;n<i.length;n++)t=i[n],o=c[t],h(Gb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(n=e=0;n<i.length;n++)k=h(m[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(m[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width=v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Oa(function(){$(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,
b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function X(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function(a){a.length&&
!h.isArray(a[0])?m.push(a):h.merge(m,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]})}return d}function nb(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ga(a);h=X(a);b=0;for(c=h.length;b<
c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],
c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=X(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,
b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==
typeof d&&d(a)}function Ma(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=X(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+
(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Bb(a.oPreviousSearch),
columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Bb(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&
(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==k&&h.extend(a.oPreviousSearch,Cb(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Cb(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=
a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=n.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=n.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==
typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Xa(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",
function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Na(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Lb.numbers_length,d=Math.floor(c/2);b<=c?c=Y(0,b):a<=d?(c=Y(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Y(b-(c-2),b):(c=Y(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function Da(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Ya)},"html-num":function(b){return za(b,
a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Ya)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Mb(a){return function(){var b=[ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b)}}var n=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};
this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&la(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,
b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():
c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};
this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();
(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in n.ext.internal)e&&(this[e]=Mb(e));this.each(function(){var e={},g=1<d?Xa(e,a,!0):a,j=0,i,e=this.getAttribute("id"),m=!1,l=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{fb(l);gb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var t=n.settings,
j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();break}else{K(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,
sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();fb(g);Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Xa(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");
z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);hb(p);var u=p.oClasses;h.extend(u,n.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(p)},error:function(){ha(p)}}),m=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(ea(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=
g.aoColumns;j=0;for(i=t.length;j<i;j++)Ea(p,e?e[j]:null);jb(p,g.aoColumnDefs,t,function(a,b){ka(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a)}}})}var U=p.oFeatures,
e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);U.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=X(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Jb(p)}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||U.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){p.nTFoot=b[0];ea(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)O(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&na(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();
p.bInitialised=true;m===false&&ha(p)};g.bStateSave?(U.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Kb(p,g,e)):e()}});b=null;return this},x,s,o,u,Za={},Nb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Ya=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Ob=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Pb=function(a,b){Za[b]||(Za[b]=RegExp(Qa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Za[b],"."):a},$a=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Pb(a,b));c&&d&&(a=a.replace(Ya,""));return!isNaN(parseFloat(a))&&isFinite(a)},Qb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:$a(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},Y=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Rb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};n.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,W=/\(\)$/,Qa=n.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=
/<.*?>/g,Oa=n.util.throttle,Sb=[],w=Array.prototype,ac=function(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof
s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Sb)};n.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,m,l=this.context,
n,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Ba(l[g],u.opts));h=0;for(m=o.length;h<m;h++)f=o[h],f="cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,n),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return ib(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return ib(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a,b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Sb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var m=f.length;i<m;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});o("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Tb=function(a,b,c){if(c){var d=new s(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){oa(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)O(a,c[d]);T(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});o("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Tb(c,!1===b,a)})});var ab=function(a,b,c,d,e){var f=[],g,j,i,m,l,n;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(m=b.length;i<m;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(n=j.length;l<n;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(m=a.length;i<m;i++)f=a[i](d,e,f)}return qa(f)},bb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},cb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Y(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==c||"applied"==c)if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<d;c++)i[g[c]]=null;f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null})}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++)"none"==
j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=b,f;return ab("row",a,function(a){var b=Ob(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null});if(a.nodeName){var b=
a._DT_RowIndex,m=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(m)return i[m.row]&&i[m.row].nTr===a?[m.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx]}b=Rb(ja(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",
function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,m,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(m=
l.length;i<m;i++)l[i]._DT_CellIndex.row=g}pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(na(b,c)[0]):h.push(O(b,c));return h},
1),c=this.rows(-1);c.pop();h.merge(c,b);return c});o("row()",function(a,b){return cb(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);da(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&
a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?na(b,a)[0]:O(b,a)});return this.row(b[0])});var db=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Ub=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=V(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&db(f,c)}))}}};o("row().child()",function(a,b){var c=
this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)db(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=V(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);
c._detailsShow&&c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Ub(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Ub(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){db(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Vb=function(a,b,
c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return ab("column",e,function(a){var b=Ob(a);if(a==="")return Y(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Vb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):
"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null});return[n[n.length+b]]}return[aa(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},
1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Vb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},
1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,
i,m,l;if(a!==k&&g.bVisible!==a){if(a){var n=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(m=j.length;i<m;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[n]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);b.aiDisplay.length||h(b.nTBody).find("td[colspan]").attr("colspan",V(b));xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",
function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});o("columns.adjust()",function(){return this.iterator("table",function(a){$(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return aa(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});o("column()",function(a,b){return cb(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));
h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=bb(c),f=b.aoData,g=Ba(b,e),j=Rb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,n,o,u,s,r,v;return ab("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<m;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(r)}else n.push(r)}}return n}if(h.isPlainObject(a))return a.column!==
k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b),e=this.rows(a),f,g,j,i,m;this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}},1);var l=this.cells(f,
c);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",
function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});o("cell()",function(a,b,c){return cb(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],
c[0].row,c[0].column):k;kb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ma(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=
this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,
h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:
null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};n.isDataTable=
n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};n.tables=n.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};n.camelToHungarian=J;o("$()",function(a,b){var c=
this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){oa(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=
this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");
h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),
(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:
a._);return a.replace("%d",c)});n.version="1.10.19";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,
sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Z(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Z(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:
this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=x={buttons:{},
classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});
h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Lb=n.ext.pager;h.extend(Lb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function(a,b,c,d,e,
f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,n=0,o=function(b,d){var k,s,u,r,v=function(b){Ta(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{m=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=
j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=r+1;l=e===r?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":n,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(m).appendTo(b);Wa(u,{action:r},v);n++}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+
s+"]").focus()}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Qb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Qb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||
"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(n.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Nb," ").replace(Aa,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Nb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Pb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return M(a)?
"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Da("");h.extend(!0,n.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:
c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]==
"asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var eb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};n.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return eb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(e||"")}}},text:function(){return{display:eb,filter:eb}}};h.extend(n.ext.internal,{_fnExternApiFunc:Mb,_fnBuildAjax:sa,_fnAjaxUpdate:mb,_fnAjaxParameters:vb,_fnAjaxUpdateDraw:wb,_fnAjaxDataSrc:ta,_fnAddColumn:Ea,_fnColumnOptions:ka,_fnAdjustColumnSizing:$,_fnVisibleToColumnIndex:aa,_fnColumnIndexToVisible:ba,_fnVisbleColumns:V,_fnGetColumns:ma,_fnColumnTypes:Ga,_fnApplyColumnDefs:jb,_fnHungarianMap:Z,_fnCamelToHungarian:J,_fnLanguageCompat:Ca,_fnBrowserDetect:hb,_fnAddData:O,_fnAddTr:na,_fnNodeToDataIndex:function(a,
b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:kb,_fnSplitObjNotation:Ja,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ka,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:Ia,_fnCreateTr:Ha,_fnBuildHead:lb,_fnDrawHead:fa,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:ob,_fnDetectHeader:ea,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:qb,_fnFilterComplete:ga,_fnFilterCustom:zb,
_fnFilterColumn:yb,_fnFilter:xb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:Ab,_fnFeatureHtmlInfo:tb,_fnUpdateInfo:Db,_fnInfoMacros:Eb,_fnInitialise:ha,_fnInitComplete:ua,_fnLengthChange:Ra,_fnFeatureHtmlLength:pb,_fnFeatureHtmlPaginate:ub,_fnPageChange:Ta,_fnFeatureHtmlProcessing:rb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:sb,_fnScrollDraw:la,_fnApplyToChildren:I,_fnCalculateColumnWidths:Fa,_fnThrottle:Oa,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:v,
_fnSortFlatten:X,_fnSort:nb,_fnSortAria:Jb,_fnSortListener:Va,_fnSortAttachListener:Ma,_fnSortingClasses:wa,_fnSortData:Ib,_fnSaveState:xa,_fnLoadState:Kb,_fnSettingsFromNode:ya,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Sa,_fnRenderer:Na,_fnDataSource:y,_fnRowAttributes:La,_fnExtend:Xa,_fnCalculateEnd:function(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};
h.each(n,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*!
 Buttons for DataTables 1.5.2
 ©2016-2018 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(n){return d(n,window,document)}):"object"===typeof exports?module.exports=function(n,o){n||(n=window);if(!o||!o.fn.dataTable)o=require("datatables.net")(n,o).$;return d(o,n,n.document)}:d(jQuery,window,document)})(function(d,n,o,m){var i=d.fn.dataTable,x=0,y=0,k=i.ext.buttons,l=function(a,b){"undefined"===typeof b&&(b={});!0===b&&(b={});d.isArray(b)&&(b={buttons:b});this.c=d.extend(!0,{},l.defaults,b);
b.buttons&&(this.c.buttons=b.buttons);this.s={dt:new i.Api(a),buttons:[],listenKeys:"",namespace:"dtb"+x++};this.dom={container:d("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};this._constructor()};d.extend(l.prototype,{action:function(a,b){var c=this._nodeToButton(a);if(b===m)return c.conf.action;c.conf.action=b;return this},active:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.button.active,c=d(c.node);if(b===m)return c.hasClass(e);c.toggleClass(e,b===m?!0:
b);return this},add:function(a,b){var c=this.s.buttons;if("string"===typeof b){for(var e=b.split("-"),c=this.s,d=0,h=e.length-1;d<h;d++)c=c.buttons[1*e[d]];c=c.buttons;b=1*e[e.length-1]}this._expandButton(c,a,!1,b);this._draw();return this},container:function(){return this.dom.container},disable:function(a){a=this._nodeToButton(a);d(a.node).addClass(this.c.dom.button.disabled);return this},destroy:function(){d("body").off("keyup."+this.s.namespace);var a=this.s.buttons.slice(),b,c;b=0;for(c=a.length;b<
c;b++)this.remove(a[b].node);this.dom.container.remove();a=this.s.dt.settings()[0];b=0;for(c=a.length;b<c;b++)if(a.inst===this){a.splice(b,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);var c=this._nodeToButton(a);d(c.node).removeClass(this.c.dom.button.disabled);return this},name:function(){return this.c.name},node:function(a){a=this._nodeToButton(a);return d(a.node)},processing:function(a,b){var c=this._nodeToButton(a);if(b===m)return d(c.node).hasClass("processing");
d(c.node).toggleClass("processing",b);return this},remove:function(a){var b=this._nodeToButton(a),c=this._nodeToHost(a),e=this.s.dt;if(b.buttons.length)for(var g=b.buttons.length-1;0<=g;g--)this.remove(b.buttons[g].node);b.conf.destroy&&b.conf.destroy.call(e.button(a),e,d(a),b.conf);this._removeKey(b.conf);d(b.node).remove();a=d.inArray(b,c);c.splice(a,1);return this},text:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.collection.buttonLiner,e=c.inCollection&&e&&e.tag?e.tag:this.c.dom.buttonLiner.tag,
g=this.s.dt,h=d(c.node),f=function(a){return"function"===typeof a?a(g,h,c.conf):a};if(b===m)return f(c.conf.text);c.conf.text=b;e?h.children(e).html(f(b)):h.html(f(b));return this},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=this.c.buttons;c._buttons||(c._buttons=[]);c._buttons.push({inst:this,name:this.c.name});for(var g=0,h=e.length;g<h;g++)this.add(e[g]);b.on("destroy",function(b,e){e===c&&a.destroy()});d("body").on("keyup."+this.s.namespace,function(b){if(!o.activeElement||
o.activeElement===o.body){var c=String.fromCharCode(b.keyCode).toLowerCase();a.s.listenKeys.toLowerCase().indexOf(c)!==-1&&a._keypress(c,b)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=d.isPlainObject(a.key)?a.key.key:a.key)},_draw:function(a,b){a||(a=this.dom.container,b=this.s.buttons);a.children().detach();for(var c=0,e=b.length;c<e;c++)a.append(b[c].inserter),a.append(" "),b[c].buttons&&b[c].buttons.length&&this._draw(b[c].collection,b[c].buttons)},_expandButton:function(a,b,c,e){for(var g=
this.s.dt,h=0,b=!d.isArray(b)?[b]:b,f=0,q=b.length;f<q;f++){var j=this._resolveExtends(b[f]);if(j)if(d.isArray(j))this._expandButton(a,j,c,e);else{var p=this._buildButton(j,c);if(p){e!==m?(a.splice(e,0,p),e++):a.push(p);if(p.conf.buttons){var u=this.c.dom.collection;p.collection=d("<"+u.tag+"/>").addClass(u.className).attr("role","menu");p.conf._collection=p.collection;this._expandButton(p.buttons,p.conf.buttons,!0,e)}j.init&&j.init.call(g.button(p.node),g,d(p.node),j);h++}}}},_buildButton:function(a,
b){var c=this.c.dom.button,e=this.c.dom.buttonLiner,g=this.c.dom.collection,h=this.s.dt,f=function(b){return"function"===typeof b?b(h,j,a):b};b&&g.button&&(c=g.button);b&&g.buttonLiner&&(e=g.buttonLiner);if(a.available&&!a.available(h,a))return!1;var q=function(a,b,c,e){e.action.call(b.button(c),a,b,c,e);d(b.table().node()).triggerHandler("buttons-action.dt",[b.button(c),b,c,e])},g=a.tag||c.tag,j=d("<"+g+"/>").addClass(c.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",
this.s.dt.table().node().id).on("click.dtb",function(b){b.preventDefault();!j.hasClass(c.disabled)&&a.action&&q(b,h,j,a);j.blur()}).on("keyup.dtb",function(b){b.keyCode===13&&!j.hasClass(c.disabled)&&a.action&&q(b,h,j,a)});"a"===g.toLowerCase()&&j.attr("href","#");"button"===g.toLowerCase()&&j.attr("type","button");e.tag?(g=d("<"+e.tag+"/>").html(f(a.text)).addClass(e.className),"a"===e.tag.toLowerCase()&&g.attr("href","#"),j.append(g)):j.html(f(a.text));!1===a.enabled&&j.addClass(c.disabled);a.className&&
j.addClass(a.className);a.titleAttr&&j.attr("title",f(a.titleAttr));a.attr&&j.attr(a.attr);a.namespace||(a.namespace=".dt-button-"+y++);e=(e=this.c.dom.buttonContainer)&&e.tag?d("<"+e.tag+"/>").addClass(e.className).append(j):j;this._addKey(a);return{conf:a,node:j.get(0),inserter:e,buttons:[],inCollection:b,collection:null}},_nodeToButton:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b[c];if(b[c].buttons.length){var d=this._nodeToButton(a,b[c].buttons);
if(d)return d}}},_nodeToHost:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b;if(b[c].buttons.length){var d=this._nodeToHost(a,b[c].buttons);if(d)return d}}},_keypress:function(a,b){if(!b._buttonsHandled){var c=function(e){for(var g=0,h=e.length;g<h;g++){var f=e[g].conf,q=e[g].node;if(f.key)if(f.key===a)b._buttonsHandled=!0,d(q).click();else if(d.isPlainObject(f.key)&&f.key.key===a&&(!f.key.shiftKey||b.shiftKey))if(!f.key.altKey||b.altKey)if(!f.key.ctrlKey||
b.ctrlKey)if(!f.key.metaKey||b.metaKey)b._buttonsHandled=!0,d(q).click();e[g].buttons.length&&c(e[g].buttons)}};c(this.s.buttons)}},_removeKey:function(a){if(a.key){var b=d.isPlainObject(a.key)?a.key.key:a.key,a=this.s.listenKeys.split(""),b=d.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){for(var b=this.s.dt,c,e,g=function(c){for(var e=0;!d.isPlainObject(c)&&!d.isArray(c);){if(c===m)return;if("function"===typeof c){if(c=c(b,a),!c)return!1}else if("string"===
typeof c){if(!k[c])throw"Unknown button type: "+c;c=k[c]}e++;if(30<e)throw"Buttons: Too many iterations";}return d.isArray(c)?c:d.extend({},c)},a=g(a);a&&a.extend;){if(!k[a.extend])throw"Cannot extend unknown button type: "+a.extend;var h=g(k[a.extend]);if(d.isArray(h))return h;if(!h)return!1;c=h.className;a=d.extend({},h,a);c&&a.className!==c&&(a.className=c+" "+a.className);var f=a.postfixButtons;if(f){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.push(f[c]);a.postfixButtons=null}if(f=
a.prefixButtons){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.splice(c,0,f[c]);a.prefixButtons=null}a.extend=h.extend}return a}});l.background=function(a,b,c){c===m&&(c=400);a?d("<div/>").addClass(b).css("display","none").appendTo("body").fadeIn(c):d("body > div."+b).fadeOut(c,function(){d(this).removeClass(b).remove()})};l.instanceSelector=function(a,b){if(!a)return d.map(b,function(a){return a.inst});var c=[],e=d.map(b,function(a){return a.name}),g=function(a){if(d.isArray(a))for(var f=
0,q=a.length;f<q;f++)g(a[f]);else"string"===typeof a?-1!==a.indexOf(",")?g(a.split(",")):(a=d.inArray(d.trim(a),e),-1!==a&&c.push(b[a].inst)):"number"===typeof a&&c.push(b[a].inst)};g(a);return c};l.buttonSelector=function(a,b){for(var c=[],e=function(a,b,c){for(var d,g,f=0,h=b.length;f<h;f++)if(d=b[f])g=c!==m?c+f:f+"",a.push({node:d.node,name:d.conf.name,idx:g}),d.buttons&&e(a,d.buttons,g+"-")},g=function(a,b){var f,h,i=[];e(i,b.s.buttons);f=d.map(i,function(a){return a.node});if(d.isArray(a)||a instanceof
d){f=0;for(h=a.length;f<h;f++)g(a[f],b)}else if(null===a||a===m||"*"===a){f=0;for(h=i.length;f<h;f++)c.push({inst:b,node:i[f].node})}else if("number"===typeof a)c.push({inst:b,node:b.s.buttons[a].node});else if("string"===typeof a)if(-1!==a.indexOf(",")){i=a.split(",");f=0;for(h=i.length;f<h;f++)g(d.trim(i[f]),b)}else if(a.match(/^\d+(\-\d+)*$/))f=d.map(i,function(a){return a.idx}),c.push({inst:b,node:i[d.inArray(a,f)].node});else if(-1!==a.indexOf(":name")){var k=a.replace(":name","");f=0;for(h=
i.length;f<h;f++)i[f].name===k&&c.push({inst:b,node:i[f].node})}else d(f).filter(a).each(function(){c.push({inst:b,node:this})});else"object"===typeof a&&a.nodeName&&(i=d.inArray(a,f),-1!==i&&c.push({inst:b,node:f[i]}))},h=0,f=a.length;h<f;h++)g(b,a[h]);return c};l.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"button",className:"dt-button",active:"active",
disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};l.version="1.5.2";d.extend(k,{collection:{text:function(a){return a.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(a,b,c,e){var g=d(c).parents("div.dt-button-collection"),a=c.position(),h=d(b.table().container()),f=!1,i=c;g.length&&(f=d(".dt-button-collection").position(),i=g,d("body").trigger("click.dtb-collection"));i.parents("body")[0]!==o.body&&(i=o.body.lastChild);e._collection.addClass(e.collectionLayout).css("display",
"none").insertAfter(i).fadeIn(e.fade);g=e._collection.css("position");f&&"absolute"===g?e._collection.css({top:f.top,left:f.left}):"absolute"===g?(e._collection.css({top:a.top+c.outerHeight(),left:a.left}),f=h.offset().top+h.height(),f=a.top+c.outerHeight()+e._collection.outerHeight()-f,g=a.top-e._collection.outerHeight(),g=h.offset().top-g,(f>g||e.dropup)&&e._collection.css("top",a.top-e._collection.outerHeight()-5),f=a.left+e._collection.outerWidth(),h=h.offset().left+h.width(),f>h&&e._collection.css("left",
a.left-(f-h)),c=c.offset().left+e._collection.outerWidth(),c>d(n).width()&&e._collection.css("left",a.left-(c-d(n).width()))):(c=e._collection.height()/2,c>d(n).height()/2&&(c=d(n).height()/2),e._collection.css("marginTop",-1*c));e.background&&l.background(!0,e.backgroundClassName,e.fade);var j=function(){e._collection.fadeOut(e.fade,function(){e._collection.detach()});d("div.dt-button-background").off("click.dtb-collection");l.background(false,e.backgroundClassName,e.fade);d("body").off(".dtb-collection");
b.off("buttons-action.b-internal")};setTimeout(function(){d("div.dt-button-background").on("click.dtb-collection",function(){});d("body").on("click.dtb-collection",function(a){var b=d.fn.addBack?"addBack":"andSelf";d(a.target).parents()[b]().filter(e._collection).length||j()}).on("keyup.dtb-collection",function(a){a.keyCode===27&&j()});if(e.autoClose)b.on("buttons-action.b-internal",function(){j()})},10)},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400,
attr:{"aria-haspopup":!0}},copy:function(a,b){if(k.copyHtml5)return"copyHtml5";if(k.copyFlash&&k.copyFlash.available(a,b))return"copyFlash"},csv:function(a,b){if(k.csvHtml5&&k.csvHtml5.available(a,b))return"csvHtml5";if(k.csvFlash&&k.csvFlash.available(a,b))return"csvFlash"},excel:function(a,b){if(k.excelHtml5&&k.excelHtml5.available(a,b))return"excelHtml5";if(k.excelFlash&&k.excelFlash.available(a,b))return"excelFlash"},pdf:function(a,b){if(k.pdfHtml5&&k.pdfHtml5.available(a,b))return"pdfHtml5";
if(k.pdfFlash&&k.pdfFlash.available(a,b))return"pdfFlash"},pageLength:function(a){var a=a.settings()[0].aLengthMenu,b=d.isArray(a[0])?a[0]:a,c=d.isArray(a[0])?a[1]:a,e=function(a){return a.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},a.page.len())};return{extend:"collection",text:e,className:"buttons-page-length",autoClose:!0,buttons:d.map(b,function(a,b){return{text:c[b],className:"button-page-length",action:function(b,c){c.page.len(a).draw()},init:function(b,c,e){var d=this,
c=function(){d.active(b.page.len()===a)};b.on("length.dt"+e.namespace,c);c()},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}),init:function(a,b,c){var d=this;a.on("length.dt"+c.namespace,function(){d.text(e(a))})},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}});i.Api.register("buttons()",function(a,b){b===m&&(b=a,a=m);this.selector.buttonGroup=a;var c=this.iterator(!0,"table",function(c){if(c._buttons)return l.buttonSelector(l.instanceSelector(a,c._buttons),b)},!0);c._groupSelector=
a;return c});i.Api.register("button()",function(a,b){var c=this.buttons(a,b);1<c.length&&c.splice(1,c.length);return c});i.Api.registerPlural("buttons().active()","button().active()",function(a){return a===m?this.map(function(a){return a.inst.active(a.node)}):this.each(function(b){b.inst.active(b.node,a)})});i.Api.registerPlural("buttons().action()","button().action()",function(a){return a===m?this.map(function(a){return a.inst.action(a.node)}):this.each(function(b){b.inst.action(b.node,a)})});i.Api.register(["buttons().enable()",
"button().enable()"],function(a){return this.each(function(b){b.inst.enable(b.node,a)})});i.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(a){a.inst.disable(a.node)})});i.Api.registerPlural("buttons().nodes()","button().node()",function(){var a=d();d(this.each(function(b){a=a.add(b.inst.node(b.node))}));return a});i.Api.registerPlural("buttons().processing()","button().processing()",function(a){return a===m?this.map(function(a){return a.inst.processing(a.node)}):
this.each(function(b){b.inst.processing(b.node,a)})});i.Api.registerPlural("buttons().text()","button().text()",function(a){return a===m?this.map(function(a){return a.inst.text(a.node)}):this.each(function(b){b.inst.text(b.node,a)})});i.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(a){a.inst.node(a.node).trigger("click")})});i.Api.registerPlural("buttons().containers()","buttons().container()",function(){var a=d(),b=this._groupSelector;this.iterator(!0,
"table",function(c){if(c._buttons)for(var c=l.instanceSelector(b,c._buttons),d=0,g=c.length;d<g;d++)a=a.add(c[d].container())});return a});i.Api.register("button().add()",function(a,b){var c=this.context;c.length&&(c=l.instanceSelector(this._groupSelector,c[0]._buttons),c.length&&c[0].add(b,a));return this.button(this._groupSelector,a)});i.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});return this});i.Api.registerPlural("buttons().remove()",
"buttons().remove()",function(){this.each(function(a){a.inst.remove(a.node)});return this});var r;i.Api.register("buttons.info()",function(a,b,c){var e=this;if(!1===a)return d("#datatables_buttons_info").fadeOut(function(){d(this).remove()}),clearTimeout(r),r=null,this;r&&clearTimeout(r);d("#datatables_buttons_info").length&&d("#datatables_buttons_info").remove();d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a?"<h2>"+a+"</h2>":"").append(d("<div/>")["string"===typeof b?"html":
"append"](b)).css("display","none").appendTo("body").fadeIn();c!==m&&0!==c&&(r=setTimeout(function(){e.buttons.info(!1)},c));return this});i.Api.register("buttons.exportData()",function(a){if(this.context.length){var b=new i.Api(this.context[0]),c=d.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(a){return e(a)},footer:function(a){return e(a)},body:function(a){return e(a)}},
customizeData:null},a),e=function(a){if("string"!==typeof a)return a;a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");a=a.replace(/<!\-\-.*?\-\->/g,"");c.stripHtml&&(a=a.replace(/<[^>]*>/g,""));c.trim&&(a=a.replace(/^\s+|\s+$/g,""));c.stripNewlines&&(a=a.replace(/\n/g," "));c.decodeEntities&&(v.innerHTML=a,a=v.value);return a},a=b.columns(c.columns).indexes().map(function(a){var d=b.column(a).header();return c.format.header(d.innerHTML,a,d)}).toArray(),g=b.table().footer()?b.columns(c.columns).indexes().map(function(a){var d=
b.column(a).footer();return c.format.footer(d?d.innerHTML:"",a,d)}).toArray():null,h=d.extend({},c.modifier);b.select&&"function"===typeof b.select.info&&h.selected===m&&b.rows(c.rows,d.extend({selected:!0},h)).any()&&d.extend(h,{selected:!0});for(var h=b.rows(c.rows,h).indexes().toArray(),f=b.cells(h,c.columns),h=f.render(c.orthogonal).toArray(),f=f.nodes().toArray(),k=a.length,j=[],l=0,n=0,o=0<k?h.length/k:0;n<o;n++){for(var r=[k],s=0;s<k;s++)r[s]=c.format.body(h[l],n,s,f[l]),l++;j[n]=r}a={header:a,
footer:g,body:j};c.customizeData&&c.customizeData(a);return a}});i.Api.register("buttons.exportInfo()",function(a){a||(a={});var b;var c=a;b="*"===c.filename&&"*"!==c.title&&c.title!==m&&null!==c.title&&""!==c.title?c.title:c.filename;"function"===typeof b&&(b=b());b===m||null===b?b=null:(-1!==b.indexOf("*")&&(b=d.trim(b.replace("*",d("head > title").text()))),b=b.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(c=t(c.extension))||(c=""),b+=c);c=t(a.title);c=null===c?null:-1!==c.indexOf("*")?
c.replace("*",d("head > title").text()||"Exported data"):c;return{filename:b,title:c,messageTop:w(this,a.message||a.messageTop,"top"),messageBottom:w(this,a.messageBottom,"bottom")}});var t=function(a){return null===a||a===m?null:"function"===typeof a?a():a},w=function(a,b,c){b=t(b);if(null===b)return null;a=d("caption",a.table().container()).eq(0);return"*"===b?a.css("caption-side")!==c?null:a.length?a.text():"":b},v=d("<textarea/>")[0];d.fn.dataTable.Buttons=l;d.fn.DataTable.Buttons=l;d(o).on("init.dt plugin-init.dt",
function(a,b){if("dt"===a.namespace){var c=b.oInit.buttons||i.defaults.buttons;c&&!b._buttons&&(new l(b,c)).container()}});i.ext.feature.push({fnInit:function(a){var a=new i.Api(a),b=a.init().buttons||i.defaults.buttons;return(new l(a,b)).container()},cFeature:"B"});return l});