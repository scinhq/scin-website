"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{9076:function(e,t,n){n.d(t,{Z:function(){return tn}});var r=n(4184),o=n.n(r),i=n(7294),a=n(930),s=n(9351);function c(e,t,n){const r=(0,i.useRef)(void 0!==e),[o,a]=(0,i.useState)(t),s=void 0!==e,c=r.current;return r.current=s,!s&&c&&o!==t&&a(t),[s?e:o,(0,i.useCallback)(((...e)=>{const[t,...r]=e;let o=null==n?void 0:n(t,...r);return a(t),o}),[n])]}var l=n(8833),f=n(4357),u=n(5111),d=n(8146);var p=i.createContext(null),m=n(2092),v=Object.prototype.hasOwnProperty;function h(e,t,n){for(n of e.keys())if(g(n,t))return n}function g(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&g(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((o=r)&&"object"===typeof o&&!(o=h(t,o)))return!1;if(!t.has(o))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((o=r[0])&&"object"===typeof o&&!(o=h(t,o)))return!1;if(!g(r[1],t.get(o)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(v.call(e,n)&&++r&&!v.call(t,n))return!1;if(!(n in t)||!g(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var b=n(6454);var y=function(e){const t=(0,b.Z)();return[e[0],(0,i.useCallback)((n=>{if(t())return e[1](n)}),[t,e[1]])]};function w(e){return e.split("-")[0]}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){return e instanceof x(e).Element||e instanceof Element}function E(e){return e instanceof x(e).HTMLElement||e instanceof HTMLElement}function k(e){return"undefined"!==typeof ShadowRoot&&(e instanceof x(e).ShadowRoot||e instanceof ShadowRoot)}var j=Math.max,C=Math.min,N=Math.round;function D(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function P(){return!/^((?!chrome|android).)*safari/i.test(D())}function A(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&E(e)&&(o=e.offsetWidth>0&&N(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&N(r.height)/e.offsetHeight||1);var a=(O(e)?x(e):window).visualViewport,s=!P()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,l=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,u=r.height/i;return{width:f,height:u,top:l,right:c+f,bottom:l+u,left:c,x:c,y:l}}function R(e){var t=A(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function S(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&k(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function T(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){return x(e).getComputedStyle(e)}function L(e){return["table","td","th"].indexOf(T(e))>=0}function Z(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function I(e){return"html"===T(e)?e:e.assignedSlot||e.parentNode||(k(e)?e.host:null)||Z(e)}function $(e){return E(e)&&"fixed"!==M(e).position?e.offsetParent:null}function B(e){for(var t=x(e),n=$(e);n&&L(n)&&"static"===M(n).position;)n=$(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(D());if(/Trident/i.test(D())&&E(e)&&"fixed"===M(e).position)return null;var n=I(e);for(k(n)&&(n=n.host);E(n)&&["html","body"].indexOf(T(n))<0;){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function W(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function H(e,t,n){return j(e,C(t,n))}function F(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function V(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var _="top",U="bottom",q="right",z="left",K="auto",Y=[_,U,q,z],X="start",G="end",J="viewport",Q="popper",ee=Y.reduce((function(e,t){return e.concat([t+"-"+X,t+"-"+G])}),[]),te=[].concat(Y,[K]).reduce((function(e,t){return e.concat([t,t+"-"+X,t+"-"+G])}),[]),ne=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var re={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=w(n.placement),c=W(s),l=[z,q].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return F("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:V(e,Y))}(o.padding,n),u=R(i),d="y"===c?_:z,p="y"===c?U:q,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],v=a[c]-n.rects.reference[c],h=B(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=m/2-v/2,y=f[d],x=g-u[l]-f[p],O=g/2-u[l]/2+b,E=H(y,O,x),k=c;n.modifiersData[r]=((t={})[k]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&S(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,u=e.isFixed,d=a.x,p=void 0===d?0:d,m=a.y,v=void 0===m?0:m,h="function"===typeof f?f({x:p,y:v}):{x:p,y:v};p=h.x,v=h.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=z,w=_,O=window;if(l){var E=B(n),k="clientHeight",j="clientWidth";if(E===x(n)&&"static"!==M(E=Z(n)).position&&"absolute"===s&&(k="scrollHeight",j="scrollWidth"),E=E,o===_||(o===z||o===q)&&i===G)w=U,v-=(u&&E===O&&O.visualViewport?O.visualViewport.height:E[k])-r.height,v*=c?1:-1;if(o===z||(o===_||o===U)&&i===G)y=q,p-=(u&&E===O&&O.visualViewport?O.visualViewport.width:E[j])-r.width,p*=c?1:-1}var C,D=Object.assign({position:s},l&&ie),P=!0===f?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:N(n*o)/o||0,y:N(r*o)/o||0}}({x:p,y:v},x(n)):{x:p,y:v};return p=P.x,v=P.y,c?Object.assign({},D,((C={})[w]=b?"0":"",C[y]=g?"0":"",C.transform=(O.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",C)):Object.assign({},D,((t={})[w]=b?v+"px":"",t[y]=g?p+"px":"",t.transform="",t))}var se={passive:!0};var ce={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var fe={start:"end",end:"start"};function ue(e){return e.replace(/start|end/g,(function(e){return fe[e]}))}function de(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pe(e){return A(Z(e)).left+de(e).scrollLeft}function me(e){var t=M(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ve(e){return["html","body","#document"].indexOf(T(e))>=0?e.ownerDocument.body:E(e)&&me(e)?e:ve(I(e))}function he(e,t){var n;void 0===t&&(t=[]);var r=ve(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=x(r),a=o?[i].concat(i.visualViewport||[],me(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(he(I(a)))}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t,n){return t===J?ge(function(e,t){var n=x(e),r=Z(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var l=P();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+pe(e),y:c}}(e,n)):O(t)?function(e,t){var n=A(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ge(function(e){var t,n=Z(e),r=de(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=j(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=j(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+pe(e),c=-r.scrollTop;return"rtl"===M(o||n).direction&&(s+=j(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(Z(e)))}function ye(e,t,n,r){var o="clippingParents"===t?function(e){var t=he(I(e)),n=["absolute","fixed"].indexOf(M(e).position)>=0&&E(e)?B(e):e;return O(n)?t.filter((function(e){return O(e)&&S(e,n)&&"body"!==T(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=be(e,n,r);return t.top=j(o.top,t.top),t.right=C(o.right,t.right),t.bottom=C(o.bottom,t.bottom),t.left=j(o.left,t.left),t}),be(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function we(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?w(o):null,a=o?oe(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case _:t={x:s,y:n.y-r.height};break;case U:t={x:s,y:n.y+n.height};break;case q:t={x:n.x+n.width,y:c};break;case z:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?W(i):null;if(null!=l){var f="y"===l?"height":"width";switch(a){case X:t[l]=t[l]-(n[f]/2-r[f]/2);break;case G:t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,l=n.rootBoundary,f=void 0===l?J:l,u=n.elementContext,d=void 0===u?Q:u,p=n.altBoundary,m=void 0!==p&&p,v=n.padding,h=void 0===v?0:v,g=F("number"!==typeof h?h:V(h,Y)),b=d===Q?"reference":Q,y=e.rects.popper,w=e.elements[m?b:d],x=ye(O(w)?w:w.contextElement||Z(e.elements.popper),c,f,a),E=A(e.elements.reference),k=we({reference:E,element:y,strategy:"absolute",placement:o}),j=ge(Object.assign({},y,k)),C=d===Q?j:E,N={top:x.top-C.top+g.top,bottom:C.bottom-x.bottom+g.bottom,left:x.left-C.left+g.left,right:C.right-x.right+g.right},D=e.modifiersData.offset;if(d===Q&&D){var P=D[o];Object.keys(N).forEach((function(e){var t=[q,U].indexOf(e)>=0?1:-1,n=[_,U].indexOf(e)>=0?"y":"x";N[e]+=P[n]*t}))}return N}function Oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ee(e){return[_,q,U,z].some((function(t){return e[t]>=0}))}var ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=te.reduce((function(e,n){return e[n]=function(e,t,n){var r=w(e),o=[z,_].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[z,q].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}};var je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,u=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,h=xe(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:f}),g=w(t.placement),b=oe(t.placement),y=!b,x=W(g),O="x"===x?"y":"x",E=t.modifiersData.popperOffsets,k=t.rects.reference,N=t.rects.popper,D="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P="number"===typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(E){if(i){var T,M="y"===x?_:z,L="y"===x?U:q,Z="y"===x?"height":"width",I=E[x],$=I+h[M],F=I-h[L],V=p?-N[Z]/2:0,K=b===X?k[Z]:N[Z],Y=b===X?-N[Z]:-k[Z],G=t.elements.arrow,J=p&&G?R(G):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[M],te=Q[L],ne=H(0,k[Z],J[Z]),re=y?k[Z]/2-V-ne-ee-P.mainAxis:K-ne-ee-P.mainAxis,ie=y?-k[Z]/2+V+ne+te+P.mainAxis:Y+ne+te+P.mainAxis,ae=t.elements.arrow&&B(t.elements.arrow),se=ae?"y"===x?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(T=null==A?void 0:A[x])?T:0,le=I+ie-ce,fe=H(p?C($,I+re-ce-se):$,I,p?j(F,le):F);E[x]=fe,S[x]=fe-I}if(s){var ue,de="x"===x?_:z,pe="x"===x?U:q,me=E[O],ve="y"===O?"height":"width",he=me+h[de],ge=me-h[pe],be=-1!==[_,z].indexOf(g),ye=null!=(ue=null==A?void 0:A[O])?ue:0,we=be?he:me-k[ve]-N[ve]-ye+P.altAxis,Oe=be?me+k[ve]+N[ve]-ye-P.altAxis:ge,Ee=p&&be?function(e,t,n){var r=H(e,t,n);return r>n?n:r}(we,me,Oe):H(p?we:he,me,p?Oe:ge);E[O]=Ee,S[O]=Ee-me}t.modifiersData[r]=S}},requiresIfExists:["offset"]};function Ce(e,t,n){void 0===n&&(n=!1);var r=E(t),o=E(t)&&function(e){var t=e.getBoundingClientRect(),n=N(t.width)/e.offsetWidth||1,r=N(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=Z(t),a=A(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==T(t)||me(i))&&(s=function(e){return e!==x(e)&&E(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:de(e);var t}(t)),E(t)?((c=A(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=pe(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Ne(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function De(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Pe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Pe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;l(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:O(e)?he(e):e.contextElement?he(e.contextElement):[],popper:he(t)};var f=function(e){var t=Ne(e);return ne.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),l=function(){};a.push(s||l)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Ae(t,n)){o.rects={reference:Ce(t,B(n),"fixed"===o.options.strategy),popper:R(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,l=i.options,f=void 0===l?{}:l,u=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:u,instance:c})||o)}else o.reset=!1,r=-1}}},update:De((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){l(),s=!0}};if(!Ae(e,t))return c;function l(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}const Se=Re({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=xe(t,{elementContext:"reference"}),s=xe(t,{altBoundary:!0}),c=Oe(a,r),l=Oe(s,o,i),f=Ee(c),u=Ee(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=we({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:w(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ae(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ae(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=x(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,se)})),s&&c.addEventListener("resize",n.update,se),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,se)})),s&&c.removeEventListener("resize",n.update,se)}},data:{}},ke,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,f=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,h=t.options.placement,g=w(h),b=c||(g===h||!m?[le(h)]:function(e){if(w(e)===K)return[];var t=le(e);return[ue(e),t,ue(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(w(n)===K?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?te:c,f=oe(r),u=f?s?ee:ee.filter((function(e){return oe(e)===f})):Y,d=u.filter((function(e){return l.indexOf(e)>=0}));0===d.length&&(d=u);var p=d.reduce((function(t,n){return t[n]=xe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[w(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,O=t.rects.popper,E=new Map,k=!0,j=y[0],C=0;C<y.length;C++){var N=y[C],D=w(N),P=oe(N)===X,A=[_,U].indexOf(D)>=0,R=A?"width":"height",S=xe(t,{placement:N,boundary:f,rootBoundary:u,altBoundary:d,padding:l}),T=A?P?q:z:P?U:_;x[R]>O[R]&&(T=le(T));var M=le(T),L=[];if(i&&L.push(S[D]<=0),s&&L.push(S[T]<=0,S[M]<=0),L.every((function(e){return e}))){j=N,k=!1;break}E.set(N,L)}if(k)for(var Z=function(e){var t=y.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},I=m?3:1;I>0;I--){if("break"===Z(I))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},je,re]}),Te=["enabled","placement","strategy","modifiers"];const Me={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Le={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const e=(t.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){const e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},Ze=[];var Ie=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:a="absolute",modifiers:s=Ze}=n,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,Te);const l=(0,i.useRef)(s),f=(0,i.useRef)(),u=(0,i.useCallback)((()=>{var e;null==(e=f.current)||e.update()}),[]),d=(0,i.useCallback)((()=>{var e;null==(e=f.current)||e.forceUpdate()}),[]),[p,m]=y((0,i.useState)({placement:o,update:u,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),v=(0,i.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{const t={},n={};Object.keys(e.elements).forEach((r=>{t[r]=e.styles[r],n[r]=e.attributes[r]})),m({state:e,styles:t,attributes:n,update:u,forceUpdate:d,placement:e.placement})}})),[u,d,m]),h=(0,i.useMemo)((()=>(g(l.current,s)||(l.current=s),l.current)),[s]);return(0,i.useEffect)((()=>{f.current&&r&&f.current.setOptions({placement:o,strategy:a,modifiers:[...h,v,Me]})}),[a,o,v,r,h]),(0,i.useEffect)((()=>{if(r&&null!=e&&null!=t)return f.current=Se(e,t,Object.assign({},c,{placement:o,strategy:a,modifiers:[...h,Le,v]})),()=>{null!=f.current&&(f.current.destroy(),f.current=void 0,m((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[r,e,t]),p},$e=n(424),Be=n(5096),We=n(7216),He=n(2473),Fe=n.n(He);const Ve=()=>{};const _e=e=>e&&("current"in e?e.current:e),Ue={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var qe=function(e,t=Ve,{disabled:n,clickTrigger:r="click"}={}){const o=(0,i.useRef)(!1),a=(0,i.useRef)(!1),s=(0,i.useCallback)((t=>{const n=_e(e);var r;Fe()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!n||!!((r=t).metaKey||r.altKey||r.ctrlKey||r.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,$e.Z)(n,t.target)||a.current,a.current=!1}),[e]),c=(0,d.Z)((t=>{const n=_e(e);n&&(0,$e.Z)(n,t.target)&&(a.current=!0)})),l=(0,d.Z)((e=>{o.current||t(e)}));(0,i.useEffect)((()=>{var t,o;if(n||null==e)return;const i=(0,We.Z)(_e(e)),a=i.defaultView||window;let f=null!=(t=a.event)?t:null==(o=a.parent)?void 0:o.event,u=null;Ue[r]&&(u=(0,Be.Z)(i,Ue[r],c,!0));const d=(0,Be.Z)(i,r,s,!0),p=(0,Be.Z)(i,r,(e=>{e!==f?l(e):f=void 0}));let m=[];return"ontouchstart"in i.documentElement&&(m=[].slice.call(i.body.children).map((e=>(0,Be.Z)(e,"mousemove",Ve)))),()=>{null==u||u(),d(),p(),m.forEach((e=>e()))}}),[e,n,r,s,c,l])};function ze(e={}){return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function Ke({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:c={}}){var l,f,u,d,p;const m=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(c.modifiers);return Object.assign({},c,{placement:n,enabled:e,strategy:i?"fixed":c.strategy,modifiers:ze(Object.assign({},m,{eventListeners:{enabled:t,options:null==(l=m.eventListeners)?void 0:l.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(f=m.preventOverflow)?void 0:f.options):null==(u=m.preventOverflow)?void 0:u.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}var Ye=n(5893);const Xe=["children"];const Ge=()=>{};function Je(e={}){const t=(0,i.useContext)(p),[n,r]=(0,m.Z)(),o=(0,i.useRef)(!1),{flip:a,offset:s,rootCloseEvent:c,fixed:l=!1,placement:f,popperConfig:u={},enableEventListeners:d=!0,usePopper:v=!!t}=e,h=null==(null==t?void 0:t.show)?!!e.show:t.show;h&&!o.current&&(o.current=!0);const{placement:g,setMenu:b,menuElement:y,toggleElement:w}=t||{},x=Ie(w,y,Ke({placement:f||g||"bottom-start",enabled:v,enableEvents:null==d?h:d,offset:s,flip:a,fixed:l,arrowElement:n,popperConfig:u})),O=Object.assign({ref:b||Ge,"aria-labelledby":null==w?void 0:w.id},x.attributes.popper,{style:x.styles.popper}),E={show:h,placement:g,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:v?x:null,arrowProps:v?Object.assign({ref:r},x.attributes.arrow,{style:x.styles.arrow}):{}};return qe(y,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:c,disabled:!h}),[O,E]}function Qe(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Xe);const[r,o]=Je(n);return(0,Ye.jsx)(Ye.Fragment,{children:t(r,o)})}Qe.displayName="DropdownMenu",Qe.defaultProps={usePopper:!0};var et=Qe;const tt={prefix:String(Math.round(1e10*Math.random())),current:0},nt=i.createContext(tt),rt=i.createContext(!1);let ot=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),it=new WeakMap;function at(e=!1){let t=(0,i.useContext)(nt),n=(0,i.useRef)(null);if(null===n.current&&!e){var r,o;let e=null===(r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===r||null===(o=r.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=it.get(e);null==n?it.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,it.delete(e))}n.current=++t.current}return n.current}const st="function"===typeof i.useId?function(e){let t=i.useId(),[n]=(0,i.useState)("function"===typeof i.useSyncExternalStore?i.useSyncExternalStore(ft,ct,lt):(0,i.useContext)(rt));return e||`${n?"react-aria":`react-aria${tt.prefix}`}-${t}`}:function(e){let t=(0,i.useContext)(nt);t!==tt||ot||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=at(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`};function ct(){return!1}function lt(){return!0}function ft(e){return()=>{}}const ut=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},dt=()=>{};function pt(){const e=st(),{show:t=!1,toggle:n=dt,setToggle:r,menuElement:o}=(0,i.useContext)(p)||{},a=(0,i.useCallback)((e=>{n(!t,e)}),[t,n]),s={id:e,ref:r||dt,onClick:a,"aria-expanded":!!t};return o&&ut(o)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:n}]}function mt({children:e}){const[t,n]=pt();return(0,Ye.jsx)(Ye.Fragment,{children:e(t,n)})}mt.displayName="DropdownToggle";var vt=mt,ht=n(7126),gt=n(6056),bt=n(861),yt=n(2747);const wt=["eventKey","disabled","onClick","active","as"];function xt({key:e,href:t,active:n,disabled:r,onClick:o}){const a=(0,i.useContext)(ht.Z),s=(0,i.useContext)(gt.Z),{activeKey:c}=s||{},l=(0,ht.h)(e,t),f=null==n&&null!=e?(0,ht.h)(c)===l:n;return[{onClick:(0,d.Z)((e=>{r||(null==o||o(e),a&&!e.isPropagationStopped()&&a(l,e))})),"aria-disabled":r||void 0,"aria-selected":f,[(0,yt.PB)("dropdown-item")]:""},{isActive:f}]}const Ot=i.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=bt.ZP}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,wt);const[c]=xt({key:n,href:s.href,disabled:r,onClick:o,active:i});return(0,Ye.jsx)(a,Object.assign({},s,{ref:t},c))}));Ot.displayName="DropdownItem";var Et=Ot,kt=n(2963);function jt(){const e=(0,f.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function Ct({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,yt.PB)("dropdown-item")}]`,focusFirstItemOnShow:f,placement:m="bottom-start",children:v}){const h=(0,kt.Z)(),[g,b]=c(t,e,r),[y,w]=jt(),x=y.current,[O,E]=jt(),k=O.current,j=(0,l.Z)(g),C=(0,i.useRef)(null),N=(0,i.useRef)(!1),D=(0,i.useContext)(ht.Z),P=(0,i.useCallback)(((e,t,n=(null==t?void 0:t.type))=>{b(e,{originalEvent:t,source:n})}),[b]),A=(0,d.Z)(((e,t)=>{null==n||n(e,t),P(!1,t,"select"),t.isPropagationStopped()||null==D||D(e,t)})),R=(0,i.useMemo)((()=>({toggle:P,placement:m,show:g,menuElement:x,toggleElement:k,setMenu:w,setToggle:E})),[P,m,g,x,k,w,E]);x&&j&&!g&&(N.current=x.contains(x.ownerDocument.activeElement));const S=(0,d.Z)((()=>{k&&k.focus&&k.focus()})),T=(0,d.Z)((()=>{const e=C.current;let t=f;if(null==t&&(t=!(!y.current||!ut(y.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,a.Z)(y.current,o)[0];n&&n.focus&&n.focus()}));(0,i.useEffect)((()=>{g?T():N.current&&(N.current=!1,S())}),[g,N,S,T]),(0,i.useEffect)((()=>{C.current=null}));const M=(e,t)=>{if(!y.current)return null;const n=(0,a.Z)(y.current,o);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,u.Z)((0,i.useCallback)((()=>h.document),[h]),"keydown",(e=>{var t,n;const{key:r}=e,o=e.target,i=null==(t=y.current)?void 0:t.contains(o),a=null==(n=O.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))return;if(!i&&!a)return;if("Tab"===r&&(!y.current||!g))return;C.current=e.type;const c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=M(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),g){const e=M(o,1);e&&e.focus&&e.focus()}else b(!0,c);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=y.current)&&t.contains(e.target)||b(!1,c)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),b(!1,c)}})),(0,Ye.jsx)(ht.Z.Provider,{value:A,children:(0,Ye.jsx)(p.Provider,{value:R,children:v})})}Ct.displayName="Dropdown",Ct.Menu=et,Ct.Toggle=vt,Ct.Item=Et;var Nt=Ct,Dt=n(7150);const Pt=i.createContext({});Pt.displayName="DropdownContext";var At=Pt,Rt=n(6792);const St=i.forwardRef((({className:e,bsPrefix:t,as:n="hr",role:r="separator",...i},a)=>(t=(0,Rt.vE)(t,"dropdown-divider"),(0,Ye.jsx)(n,{ref:a,className:o()(e,t),role:r,...i}))));St.displayName="DropdownDivider";var Tt=St;const Mt=i.forwardRef((({className:e,bsPrefix:t,as:n="div",role:r="heading",...i},a)=>(t=(0,Rt.vE)(t,"dropdown-header"),(0,Ye.jsx)(n,{ref:a,className:o()(e,t),role:r,...i}))));Mt.displayName="DropdownHeader";var Lt=Mt,Zt=n(3551);const It=i.forwardRef((({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:i,active:a,as:s=Zt.Z,...c},l)=>{const f=(0,Rt.vE)(e,"dropdown-item"),[u,d]=xt({key:n,href:c.href,disabled:r,onClick:i,active:a});return(0,Ye.jsx)(s,{...c,...u,ref:l,className:o()(t,f,d.isActive&&"active",r&&"disabled")})}));It.displayName="DropdownItem";var $t=It;const Bt=i.forwardRef((({className:e,bsPrefix:t,as:n="span",...r},i)=>(t=(0,Rt.vE)(t,"dropdown-item-text"),(0,Ye.jsx)(n,{ref:i,className:o()(e,t),...r}))));Bt.displayName="DropdownItemText";var Wt=Bt,Ht=n(9585),Ft=n(5654);const Vt=i.createContext(null);Vt.displayName="InputGroupContext";var _t=Vt,Ut=n(4819);n(1143);function qt(e,t){return e}function zt(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}const Kt=i.forwardRef((({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:a=!0,show:s,renderOnMount:c,as:l="div",popperConfig:f,variant:u,...d},p)=>{let m=!1;const v=(0,i.useContext)(Ut.Z),h=(0,Rt.vE)(e,"dropdown-menu"),{align:g,drop:b,isRTL:y}=(0,i.useContext)(At);n=n||g;const w=(0,i.useContext)(_t),x=[];if(n)if("object"===typeof n){const e=Object.keys(n);if(e.length){const t=e[0],r=n[t];m="start"===r,x.push(`${h}-${t}-${r}`)}}else"end"===n&&(m=!0);const O=zt(m,b,y),[E,{hasShown:k,popper:j,show:C,toggle:N}]=Je({flip:a,rootCloseEvent:r,show:s,usePopper:!v&&0===x.length,offset:[0,2],popperConfig:f,placement:O});if(E.ref=(0,Ft.Z)(qt(p),E.ref),(0,Ht.Z)((()=>{C&&(null==j||j.update())}),[C]),!k&&!c&&!w)return null;"string"!==typeof l&&(E.show=C,E.close=()=>null==N?void 0:N(!1),E.align=n);let D=d.style;return null!=j&&j.placement&&(D={...d.style,...E.style},d["x-placement"]=j.placement),(0,Ye.jsx)(l,{...d,...E,style:D,...(x.length||v)&&{"data-bs-popper":"static"},className:o()(t,h,C&&"show",m&&`${h}-end`,u&&`${h}-${u}`,...x)})}));Kt.displayName="DropdownMenu";var Yt=Kt;const Xt=i.forwardRef((({as:e,bsPrefix:t,variant:n="primary",size:r,active:i=!1,disabled:a=!1,className:s,...c},l)=>{const f=(0,Rt.vE)(t,"btn"),[u,{tagName:d}]=(0,bt.FT)({tagName:e,disabled:a,...c}),p=d;return(0,Ye.jsx)(p,{...u,...c,ref:l,disabled:a,className:o()(s,f,i&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,c.href&&a&&"disabled")})}));Xt.displayName="Button";var Gt=Xt;const Jt=i.forwardRef((({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:a=Gt,...s},c)=>{const l=(0,Rt.vE)(e,"dropdown-toggle"),f=(0,i.useContext)(p);void 0!==r&&(s.bsPrefix=r);const[u]=pt();return u.ref=(0,Ft.Z)(u.ref,qt(c)),(0,Ye.jsx)(a,{className:o()(n,l,t&&`${l}-split`,(null==f?void 0:f.show)&&"show"),...u,...s})}));Jt.displayName="DropdownToggle";var Qt=Jt;const en=i.forwardRef(((e,t)=>{const{bsPrefix:n,drop:r="down",show:a,className:s,align:c="start",onSelect:l,onToggle:f,focusFirstItemOnShow:u,as:p="div",navbar:m,autoClose:v=!0,...h}=(0,Dt.Ch)(e,{show:"onToggle"}),g=(0,i.useContext)(_t),b=(0,Rt.vE)(n,"dropdown"),y=(0,Rt.SC)(),w=(0,d.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===v?"click"===n:"inside"===v?"rootClose"!==n:"outside"!==v||"select"!==n)&&(null==f||f(e,t))})),x=zt("end"===c,r,y),O=(0,i.useMemo)((()=>({align:c,drop:r,isRTL:y})),[c,r,y]),E={down:b,"down-centered":`${b}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,Ye.jsx)(At.Provider,{value:O,children:(0,Ye.jsx)(Nt,{placement:x,show:a,onSelect:l,onToggle:w,focusFirstItemOnShow:u,itemSelector:`.${b}-item:not(.disabled):not(:disabled)`,children:g?h.children:(0,Ye.jsx)(p,{...h,ref:t,className:o()(s,a&&"show",E[r])})})})}));en.displayName="Dropdown";var tn=Object.assign(en,{Toggle:Qt,Menu:Yt,Item:$t,ItemText:Wt,Divider:Tt,Header:Lt})},5772:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(4184),o=n.n(r),i=n(7294),a=n(5697),s=n.n(a),c=n(5893);const l={type:s().string,tooltip:s().bool,as:s().elementType},f=i.forwardRef((({as:e="div",className:t,type:n="valid",tooltip:r=!1,...i},a)=>(0,c.jsx)(e,{...i,ref:a,className:o()(t,`${n}-${r?"tooltip":"feedback"}`)})));f.displayName="Feedback",f.propTypes=l;var u=f;var d=i.createContext({}),p=n(6792);const m=i.forwardRef((({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:a=!1,isInvalid:s=!1,as:l="input",...f},u)=>{const{controlId:m}=(0,i.useContext)(d);return t=(0,p.vE)(t,"form-check-input"),(0,c.jsx)(l,{...f,ref:u,type:r,id:e||m,className:o()(n,t,a&&"is-valid",s&&"is-invalid")})}));m.displayName="FormCheckInput";var v=m;const h=i.forwardRef((({bsPrefix:e,className:t,htmlFor:n,...r},a)=>{const{controlId:s}=(0,i.useContext)(d);return e=(0,p.vE)(e,"form-check-label"),(0,c.jsx)("label",{...r,ref:a,htmlFor:n||s,className:o()(t,e)})}));h.displayName="FormCheckLabel";var g=h;const b=i.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:a=!1,disabled:s=!1,isValid:l=!1,isInvalid:f=!1,feedbackTooltip:m=!1,feedback:h,feedbackType:b,className:y,style:w,title:x="",type:O="checkbox",label:E,children:k,as:j="input",...C},N)=>{t=(0,p.vE)(t,"form-check"),n=(0,p.vE)(n,"form-switch");const{controlId:D}=(0,i.useContext)(d),P=(0,i.useMemo)((()=>({controlId:e||D})),[D,e]),A=!k&&null!=E&&!1!==E||function(e,t){return i.Children.toArray(e).some((e=>i.isValidElement(e)&&e.type===t))}(k,g),R=(0,c.jsx)(v,{...C,type:"switch"===O?"checkbox":O,ref:N,isValid:l,isInvalid:f,disabled:s,as:j});return(0,c.jsx)(d.Provider,{value:P,children:(0,c.jsx)("div",{style:w,className:o()(y,A&&t,r&&`${t}-inline`,a&&`${t}-reverse`,"switch"===O&&n),children:k||(0,c.jsxs)(c.Fragment,{children:[R,A&&(0,c.jsx)(g,{title:x,children:E}),h&&(0,c.jsx)(u,{type:b,tooltip:m,children:h})]})})})}));b.displayName="FormCheck";var y=Object.assign(b,{Input:v,Label:g})},2473:function(e){var t=function(){};e.exports=t}}]);