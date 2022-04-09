!function(W,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):W.Popper=b()}(this,function(){"use strict";function W(t){return t&&"[object Function]"==={}.toString.call(t)}function b(t,e){if(1!==t.nodeType)return[];var r=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?r[e]:r}function B(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function D(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=b(t);return/(auto|scroll|overlay)/.test(e.overflow+e.overflowY+e.overflowX)?t:D(B(t))}function z(t){return t&&t.referenceNode?t.referenceNode:t}function x(t){return 11===t?ut:10===t?lt:ut||lt}function L(t){if(!t)return document.documentElement;for(var e=x(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===b(n,"position")?L(n):n:t?t.ownerDocument.documentElement:document.documentElement}function A(t){return null===t.parentNode?t:A(t.parentNode)}function k(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,s=n?e:t,i=document.createRange();i.setStart(r,0),i.setEnd(s,0);var o=i.commonAncestorContainer;if(t!==o&&e!==o||r.contains(s))return function ht(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||L(t.firstElementChild)===t)}(o)?o:L(o);var a=A(t);return a.host?k(a.host,e):k(t,A(e).host)}function T(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",r=t.nodeName;if("BODY"===r||"HTML"===r){var s=t.ownerDocument.documentElement,i=t.ownerDocument.scrollingElement||s;return i[n]}return t[n]}function mt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=T(e,"top"),s=T(e,"left"),i=n?-1:1;return t.top+=r*i,t.bottom+=r*i,t.left+=s*i,t.right+=s*i,t}function G(t,e){var n="x"===e?"Left":"Top",r="Left"==n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+r+"Width"])}function _(t,e,n,r){return w(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],x(10)?parseInt(n["offset"+t])+parseInt(r["margin"+("Height"===t?"Top":"Left")])+parseInt(r["margin"+("Height"===t?"Bottom":"Right")]):0)}function X(t){var e=t.body,n=t.documentElement,r=x(10)&&getComputedStyle(n);return{height:_("Height",e,n,r),width:_("Width",e,n,r)}}function y(t){return g({},t,{right:t.left+t.width,bottom:t.top+t.height})}function M(t){var e={};try{if(x(10)){e=t.getBoundingClientRect();var n=T(t,"top"),r=T(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}else e=t.getBoundingClientRect()}catch(p){}var s={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},i="HTML"===t.nodeName?X(t.ownerDocument):{},f=t.offsetWidth-(i.width||t.clientWidth||s.width),l=t.offsetHeight-(i.height||t.clientHeight||s.height);if(f||l){var d=b(t);f-=G(d,"x"),l-=G(d,"y"),s.width-=f,s.height-=l}return y(s)}function I(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=x(10),s="HTML"===e.nodeName,i=M(t),o=M(e),a=D(t),f=b(e),l=parseFloat(f.borderTopWidth),d=parseFloat(f.borderLeftWidth);n&&s&&(o.top=w(o.top,0),o.left=w(o.left,0));var p=y({top:i.top-o.top-l,left:i.left-o.left-d,width:i.width,height:i.height});if(p.marginTop=0,p.marginLeft=0,!r&&s){var u=parseFloat(f.marginTop),c=parseFloat(f.marginLeft);p.top-=l-u,p.bottom-=l-u,p.left-=d-c,p.right-=d-c,p.marginTop=u,p.marginLeft=c}return(r&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(p=mt(p,e)),p}function gt(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,r=I(t,n),s=w(n.clientWidth,window.innerWidth||0),i=w(n.clientHeight,window.innerHeight||0),o=e?0:T(n),a=e?0:T(n,"left"),f={top:o-r.top+r.marginTop,left:a-r.left+r.marginLeft,width:s,height:i};return y(f)}function J(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===b(t,"position"))return!0;var n=B(t);return!!n&&J(n)}function Q(t){if(!t||!t.parentElement||x())return document.documentElement;for(var e=t.parentElement;e&&"none"===b(e,"transform");)e=e.parentElement;return e||document.documentElement}function j(t,e,n,r){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},o=s?Q(t):k(t,z(e));if("viewport"===r)i=gt(o,s);else{var a;"scrollParent"===r?"BODY"===(a=D(B(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===r?t.ownerDocument.documentElement:r;var f=I(a,o,s);if("HTML"!==a.nodeName||J(o))i=f;else{var l=X(t.ownerDocument),d=l.height,p=l.width;i.top+=f.top-f.marginTop,i.bottom=d+f.top,i.left+=f.left-f.marginLeft,i.right=p+f.left}}var u="number"==typeof(n=n||0);return i.left+=u?n:n.left||0,i.top+=u?n:n.top||0,i.right-=u?n:n.right||0,i.bottom-=u?n:n.bottom||0,i}function vt(t){return t.width*t.height}function Z(t,e,n,r,s){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var o=j(n,r,i,s),a={top:{width:o.width,height:e.top-o.top},right:{width:o.right-e.right,height:o.height},bottom:{width:o.width,height:o.bottom-e.bottom},left:{width:e.left-o.left,height:o.height}},f=Object.keys(a).map(function(u){return g({key:u},a[u],{area:vt(a[u])})}).sort(function(u,c){return c.area-u.area}),l=f.filter(function(u){return u.width>=n.clientWidth&&u.height>=n.clientHeight}),d=0<l.length?l[0].key:f[0].key,p=t.split("-")[1];return d+(p?"-"+p:"")}function $(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,s=r?Q(e):k(e,z(n));return I(n,s,r)}function tt(t){var n=t.ownerDocument.defaultView.getComputedStyle(t),r=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),s=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0);return{width:t.offsetWidth+s,height:t.offsetHeight+r}}function H(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(n){return e[n]})}function et(t,e,n){n=n.split("-")[0];var r=tt(t),s={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),o=i?"top":"left",a=i?"left":"top",f=i?"height":"width",l=i?"width":"height";return s[o]=e[o]+e[f]/2-r[f]/2,s[a]=n===a?e[a]-r[l]:e[H(a)],s}function F(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function nt(t,e,n){var r=void 0===n?t:t.slice(0,function bt(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(s){return s[e]===n});var r=F(t,function(s){return s[e]===n});return t.indexOf(r)}(t,"name",n));return r.forEach(function(s){s.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=s.function||s.fn;s.enabled&&W(i)&&(e.offsets.popper=y(e.offsets.popper),e.offsets.reference=y(e.offsets.reference),e=i(e,s))}),e}function wt(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=$(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Z(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=et(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=nt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function rt(t,e){return t.some(function(n){return n.enabled&&n.name===e})}function R(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length;r++){var s=e[r],i=s?""+s+n:t;if(void 0!==document.body.style[i])return i}return null}function yt(){return this.state.isDestroyed=!0,rt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[R("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ot(t){var e=t.ownerDocument;return e?e.defaultView:window}function it(t,e,n,r){var s="BODY"===t.nodeName,i=s?t.ownerDocument.defaultView:t;i.addEventListener(e,n,{passive:!0}),s||it(D(i.parentNode),e,n,r),r.push(i)}function Et(t,e,n,r){n.updateBound=r,ot(t).addEventListener("resize",n.updateBound,{passive:!0});var s=D(t);return it(s,"scroll",n.updateBound,n.scrollParents),n.scrollElement=s,n.eventsEnabled=!0,n}function Ot(){this.state.eventsEnabled||(this.state=Et(this.reference,0,this.state,this.scheduleUpdate))}function Lt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function xt(t,e){return ot(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(n){n.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}(this.reference,this.state))}function U(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function Y(t,e){Object.keys(e).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&U(e[n])&&(r="px"),t.style[n]=e[n]+r})}function st(t,e,n){var r=F(t,function(o){return o.name===e}),s=!!r&&t.some(function(o){return o.name===n&&o.enabled&&o.order<r.order});if(!s){var i="`"+e+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return s}function at(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=q.indexOf(t),r=q.slice(n+1).concat(q.slice(0,n));return e?r.reverse():r}var ft=Math.min,V=Math.floor,pt=Math.round,w=Math.max,S="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Wt=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(S&&0<=navigator.userAgent.indexOf(t[e]))return 1;return 0}(),Ht=S&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Wt))}},ut=S&&!(!window.MSInputMethodContext||!document.documentMode),lt=S&&/MSIE 10/.test(navigator.userAgent),Pt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Bt=function(){function t(e,n){for(var r,s=0;s<n.length;s++)(r=n[s]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),N=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},g=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},At=S&&/Firefox/i.test(navigator.userAgent),dt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],q=dt.slice(3),P=function(){function t(e,n){var r=this,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Pt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=Ht(this.update.bind(this)),this.options=g({},t.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(g({},t.Defaults.modifiers,s.modifiers)).forEach(function(o){r.options.modifiers[o]=g({},t.Defaults.modifiers[o]||{},s.modifiers?s.modifiers[o]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(o){return g({name:o},r.options.modifiers[o])}).sort(function(o,a){return o.order-a.order}),this.modifiers.forEach(function(o){o.enabled&&W(o.onLoad)&&o.onLoad(r.reference,r.popper,r.options,o,r.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return Bt(t,[{key:"update",value:function(){return wt.call(this)}},{key:"destroy",value:function(){return yt.call(this)}},{key:"enableEventListeners",value:function(){return Ot.call(this)}},{key:"disableEventListeners",value:function(){return Lt.call(this)}}]),t}();return P.Utils=("undefined"==typeof window?global:window).PopperUtils,P.placements=dt,P.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var s=t.offsets,i=s.reference,o=s.popper,a=-1!==["bottom","top"].indexOf(n),f=a?"left":"top",l=a?"width":"height",d={start:N({},f,i[f]),end:N({},f,i[f]+i[l]-o[l])};t.offsets.popper=g({},o,d[r])}return t}},offset:{order:200,enabled:!0,fn:function St(t,e){var n,r=e.offset,i=t.offsets,o=i.popper,a=i.reference,f=t.placement.split("-")[0];return n=U(+r)?[+r,0]:function Ft(t,e,n,r){var s=[0,0],i=-1!==["right","left"].indexOf(r),o=t.split(/(\+|\-)/).map(function(d){return d.trim()}),a=o.indexOf(F(o,function(d){return-1!==d.search(/,|\s/)}));o[a]&&-1===o[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,l=-1===a?[o]:[o.slice(0,a).concat([o[a].split(f)[0]]),[o[a].split(f)[1]].concat(o.slice(a+1))];return l=l.map(function(d,p){var u=(1===p?!i:i)?"height":"width",c=!1;return d.reduce(function(h,m){return""===h[h.length-1]&&-1!==["+","-"].indexOf(m)?(h[h.length-1]=m,c=!0,h):c?(h[h.length-1]+=m,c=!1,h):h.concat(m)},[]).map(function(h){return function Dt(t,e,n,r){var s=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+s[1],o=s[2];return i?0===o.indexOf("%")?y("%p"===o?n:r)[e]/100*i:"vh"===o||"vw"===o?("vh"===o?w(document.documentElement.clientHeight,window.innerHeight||0):w(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i:t}(h,u,e,n)})}),l.forEach(function(d,p){d.forEach(function(u,c){U(u)&&(s[p]+=u*("-"===d[c-1]?-1:1))})}),s}(r,o,a,f),"left"===f?(o.top+=n[0],o.left-=n[1]):"right"===f?(o.top+=n[0],o.left+=n[1]):"top"===f?(o.left+=n[0],o.top-=n[1]):"bottom"===f&&(o.left+=n[0],o.top+=n[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||L(t.instance.popper);t.instance.reference===n&&(n=L(n));var r=R("transform"),s=t.instance.popper.style,i=s.top,o=s.left,a=s[r];s.top="",s.left="",s[r]="";var f=j(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);s.top=i,s.left=o,s[r]=a,e.boundaries=f;var d=t.offsets.popper,p={primary:function(u){var c=d[u];return d[u]<f[u]&&!e.escapeWithReference&&(c=w(d[u],f[u])),N({},u,c)},secondary:function(u){var c="right"===u?"left":"top",h=d[c];return d[u]>f[u]&&!e.escapeWithReference&&(h=ft(d[c],f[u]-("right"===u?d.width:d.height))),N({},c,h)}};return e.priority.forEach(function(u){var c=-1===["left","top"].indexOf(u)?"secondary":"primary";d=g({},d,p[c](u))}),t.offsets.popper=d,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,r=e.reference,s=t.placement.split("-")[0],i=V,o=-1!==["top","bottom"].indexOf(s),a=o?"right":"bottom",f=o?"left":"top",l=o?"width":"height";return n[a]<i(r[f])&&(t.offsets.popper[f]=i(r[f])-n[l]),n[f]>i(r[a])&&(t.offsets.popper[f]=i(r[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!st(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"==typeof r){if(!(r=t.instance.popper.querySelector(r)))return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var s=t.placement.split("-")[0],i=t.offsets,o=i.popper,a=i.reference,f=-1!==["left","right"].indexOf(s),l=f?"height":"width",d=f?"Top":"Left",p=d.toLowerCase(),u=f?"left":"top",c=f?"bottom":"right",h=tt(r)[l];a[c]-h<o[p]&&(t.offsets.popper[p]-=o[p]-(a[c]-h)),a[p]+h>o[c]&&(t.offsets.popper[p]+=a[p]+h-o[c]),t.offsets.popper=y(t.offsets.popper);var m=a[p]+a[l]/2-h/2,E=b(t.instance.popper),C=parseFloat(E["margin"+d]),v=parseFloat(E["border"+d+"Width"]),O=m-t.offsets.popper[p]-C-v;return O=w(ft(o[l]-h,O),0),t.arrowElement=r,t.offsets.arrow=(N(n={},p,pt(O)),N(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(rt(t.instance.modifiers,"inner")||t.flipped&&t.placement===t.originalPlacement)return t;var n=j(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),r=t.placement.split("-")[0],s=H(r),i=t.placement.split("-")[1]||"",o=[];switch(e.behavior){case"flip":o=[r,s];break;case"clockwise":o=at(r);break;case"counterclockwise":o=at(r,!0);break;default:o=e.behavior}return o.forEach(function(a,f){if(r!==a||o.length===f+1)return t;r=t.placement.split("-")[0],s=H(r);var l=t.offsets.popper,d=t.offsets.reference,p=V,u="left"===r&&p(l.right)>p(d.left)||"right"===r&&p(l.left)<p(d.right)||"top"===r&&p(l.bottom)>p(d.top)||"bottom"===r&&p(l.top)<p(d.bottom),c=p(l.left)<p(n.left),h=p(l.right)>p(n.right),m=p(l.top)<p(n.top),E=p(l.bottom)>p(n.bottom),C="left"===r&&c||"right"===r&&h||"top"===r&&m||"bottom"===r&&E,v=-1!==["top","bottom"].indexOf(r),ct=!!e.flipVariations&&(v&&"start"===i&&c||v&&"end"===i&&h||!v&&"start"===i&&m||!v&&"end"===i&&E)||!!e.flipVariationsByContent&&(v&&"start"===i&&h||v&&"end"===i&&c||!v&&"start"===i&&E||!v&&"end"===i&&m);(u||C||ct)&&(t.flipped=!0,(u||C)&&(r=o[f+1]),ct&&(i=function Ct(t){return"end"===t?"start":"start"===t?"end":t}(i)),t.placement=r+(i?"-"+i:""),t.offsets.popper=g({},t.offsets.popper,et(t.instance.popper,t.offsets.reference,t.placement)),t=nt(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,s=r.popper,i=r.reference,o=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return s[o?"left":"top"]=i[n]-(a?s[o?"width":"height"]:0),t.placement=H(e),t.offsets.popper=y(s),t}},hide:{order:800,enabled:!0,fn:function(t){if(!st(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=F(t.instance.modifiers,function(r){return"preventOverflow"===r.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,r=e.y,s=t.offsets.popper,i=F(t.instance.modifiers,function(O){return"applyStyle"===O.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o,a,f=void 0===i?e.gpuAcceleration:i,l=L(t.instance.popper),d=M(l),p={position:s.position},u=function Nt(t,e){var n=t.offsets,r=n.popper,i=pt,o=function(c){return c},a=i(n.reference.width),f=i(r.width),l=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),p=e?l||d||a%2==f%2?i:V:o,u=e?i:o;return{left:p(a%2==1&&f%2==1&&!d&&e?r.left-1:r.left),top:u(r.top),bottom:u(r.bottom),right:p(r.right)}}(t,2>window.devicePixelRatio||!At),c="bottom"===n?"top":"bottom",h="right"===r?"left":"right",m=R("transform");if(a="bottom"==c?"HTML"===l.nodeName?-l.clientHeight+u.bottom:-d.height+u.bottom:u.top,o="right"==h?"HTML"===l.nodeName?-l.clientWidth+u.right:-d.width+u.right:u.left,f&&m)p[m]="translate3d("+o+"px, "+a+"px, 0)",p[c]=0,p[h]=0,p.willChange="transform";else{var C="right"==h?-1:1;p[c]=a*("bottom"==c?-1:1),p[h]=o*C,p.willChange=c+", "+h}return t.attributes=g({},{"x-placement":t.placement},t.attributes),t.styles=g({},p,t.styles),t.arrowStyles=g({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return Y(t.instance.popper,t.styles),function Tt(t,e){Object.keys(e).forEach(function(n){!1===e[n]?t.removeAttribute(n):t.setAttribute(n,e[n])})}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&Y(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,r,s){var i=$(s,e,t,n.positionFixed),o=Z(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",o),Y(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},P});