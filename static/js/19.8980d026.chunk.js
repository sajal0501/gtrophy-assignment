(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return X}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,u=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),s=function(t){return t instanceof SVGElement&&"getBBox"in t},c=function(t){if(s(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||t.getClientRects().length)},l=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},f="undefined"!==typeof window?window:{},h=new WeakMap,d=/auto|scroll/,v=/^tb|vertical/,p=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),b=function(t){return parseFloat(t||"0")},g=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},y=Object.freeze({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new u(0,0,0,0)}),m=function(t,e){if(void 0===e&&(e=!1),h.has(t)&&!e)return h.get(t);if(c(t))return h.set(t,y),y;var n=getComputedStyle(t),r=s(t)&&t.ownerSVGElement&&t.getBBox(),i=!p&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),a=!r&&d.test(n.overflowY||""),l=!r&&d.test(n.overflowX||""),f=r?0:b(n.paddingTop),m=r?0:b(n.paddingRight),w=r?0:b(n.paddingBottom),x=r?0:b(n.paddingLeft),O=r?0:b(n.borderTopWidth),E=r?0:b(n.borderRightWidth),k=r?0:b(n.borderBottomWidth),z=x+m,T=f+w,S=(r?0:b(n.borderLeftWidth))+E,j=O+k,_=l?t.offsetHeight-j-t.clientHeight:0,B=a?t.offsetWidth-S-t.clientWidth:0,R=i?z+S:0,A=i?T+j:0,C=r?r.width:b(n.width)-R-B,M=r?r.height:b(n.height)-A-_,N=C+z+B+S,V=M+T+_+j,P=Object.freeze({devicePixelContentBoxSize:g(Math.round(C*devicePixelRatio),Math.round(M*devicePixelRatio),o),borderBoxSize:g(N,V,o),contentBoxSize:g(C,M,o),contentRect:new u(x,f,C,M)});return h.set(t,P),P},w=function(t,e,n){var i=m(t,n),o=i.borderBoxSize,a=i.contentBoxSize,u=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return u;case r.BORDER_BOX:return o;default:return a}},x=function(t){var e=m(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},O=function(t){if(c(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},E=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new x(e.target),i=O(e.target);r.push(n),e.lastReportedSize=w(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},k=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(O(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},z=function(){var t=0;for(k(t);i.some((function(t){return t.activeTargets.length>0}));)t=E(),k(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},T=[],S=function(t){if(!a){var e=0,n=document.createTextNode("");new MutationObserver((function(){return T.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(e?e--:e++)}}T.push(t),a()},j=0,_={attributes:!0,characterData:!0,childList:!0,subtree:!0},B=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],R=function(t){return void 0===t&&(t=0),Date.now()+t},A=!1,C=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!A){A=!0;var n,r=R(t);n=function(){var n=!1;try{n=z()}finally{if(A=!1,t=r-R(),!j)return;n?e.run(1e3):t>0?e.run(t):e.start()}},S((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,_)};document.body?e():f.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),B.forEach((function(e){return f.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),B.forEach((function(e){return f.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),M=function(t){!j&&t>0&&C.start(),!(j+=t)&&C.stop()},N=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=w(this.target,this.observedBox,!0);return t=this.target,s(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),V=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},P=new WeakMap,D=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},F=function(){function t(){}return t.connect=function(t,e){var n=new V(t,e);P.set(t,n)},t.observe=function(t,e,n){var r=P.get(t),o=0===r.observationTargets.length;D(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new N(e,n&&n.box)),M(1),C.schedule())},t.unobserve=function(t,e){var n=P.get(t),r=D(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),M(-1))},t.disconnect=function(t){var e=this,n=P.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),X=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");F.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");F.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");F.unobserve(this,t)},t.prototype.disconnect=function(){F.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},116:function(t,e,n){"use strict";e.a=function(t){for(var e;e=t.sourceEvent;)t=e;return t}},131:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t},o=1e-6;function a(t){return"translate("+(t+.5)+",0)"}function u(t){return"translate(0,"+(t+.5)+")"}function s(t){return function(e){return+t(e)}}function c(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function l(){return!this.__axis}function f(t,e){var n=[],f=null,h=null,d=6,v=6,p=3,b=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",y=1===t||3===t?a:u;function m(r){var a=null==f?e.ticks?e.ticks.apply(e,n):e.domain():f,u=null==h?e.tickFormat?e.tickFormat.apply(e,n):i:h,m=Math.max(d,0)+p,w=e.range(),x=+w[0]+.5,O=+w[w.length-1]+.5,E=(e.bandwidth?c:s)(e.copy()),k=r.selection?r.selection():r,z=k.selectAll(".domain").data([null]),T=k.selectAll(".tick").data(a,e).order(),S=T.exit(),j=T.enter().append("g").attr("class","tick"),_=T.select("line"),B=T.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(j),_=_.merge(j.append("line").attr("stroke","currentColor").attr(g+"2",b*d)),B=B.merge(j.append("text").attr("fill","currentColor").attr(g,b*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==k&&(z=z.transition(r),T=T.transition(r),_=_.transition(r),B=B.transition(r),S=S.transition(r).attr("opacity",o).attr("transform",(function(t){return isFinite(t=E(t))?y(t):this.getAttribute("transform")})),j.attr("opacity",o).attr("transform",(function(t){var e=this.parentNode.__axis;return y(e&&isFinite(e=e(t))?e:E(t))}))),S.remove(),z.attr("d",4===t||2==t?v?"M"+b*v+","+x+"H0.5V"+O+"H"+b*v:"M0.5,"+x+"V"+O:v?"M"+x+","+b*v+"V0.5H"+O+"V"+b*v:"M"+x+",0.5H"+O),T.attr("opacity",1).attr("transform",(function(t){return y(E(t))})),_.attr(g+"2",b*d),B.attr(g,b*m).text(u),k.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=E}))}return m.scale=function(t){return arguments.length?(e=t,m):e},m.ticks=function(){return n=r.call(arguments),m},m.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),m):n.slice()},m.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),m):f&&f.slice()},m.tickFormat=function(t){return arguments.length?(h=t,m):h},m.tickSize=function(t){return arguments.length?(d=v=+t,m):d},m.tickSizeInner=function(t){return arguments.length?(d=+t,m):d},m.tickSizeOuter=function(t){return arguments.length?(v=+t,m):v},m.tickPadding=function(t){return arguments.length?(p=+t,m):p},m}function h(t){return f(2,t)}function d(t){return f(3,t)}},154:function(t,e,n){"use strict";var r=n(116);e.a=function(t,e){if(t=Object(r.a)(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var o=e.getBoundingClientRect();return[t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop]}}return[t.pageX,t.pageY]}},206:function(t,e,n){"use strict";var r=n(237),i=n(114),o=n(113),a=n(127),u=n(147),s=n(128);e.a=function(t,e,n){var c=null,l=Object(o.a)(!0),f=null,h=a.a,d=null;function v(o){var a,u,s,v,p,b=(o=Object(i.a)(o)).length,g=!1,y=new Array(b),m=new Array(b);for(null==f&&(d=h(p=Object(r.a)())),a=0;a<=b;++a){if(!(a<b&&l(v=o[a],a,o))===g)if(g=!g)u=a,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),s=a-1;s>=u;--s)d.point(y[s],m[s]);d.lineEnd(),d.areaEnd()}g&&(y[a]=+t(v,a,o),m[a]=+e(v,a,o),d.point(c?+c(v,a,o):y[a],n?+n(v,a,o):m[a]))}if(p)return d=null,p+""||null}function p(){return Object(u.a)().defined(l).curve(h).context(f)}return t="function"===typeof t?t:void 0===t?s.a:Object(o.a)(+t),e="function"===typeof e?e:void 0===e?Object(o.a)(0):Object(o.a)(+e),n="function"===typeof n?n:void 0===n?s.b:Object(o.a)(+n),v.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(o.a)(+e),c=null,v):t},v.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(o.a)(+e),v):t},v.x1=function(t){return arguments.length?(c=null==t?null:"function"===typeof t?t:Object(o.a)(+t),v):c},v.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(o.a)(+t),n=null,v):e},v.y0=function(t){return arguments.length?(e="function"===typeof t?t:Object(o.a)(+t),v):e},v.y1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:Object(o.a)(+t),v):n},v.lineX0=v.lineY0=function(){return p().x(t).y(e)},v.lineY1=function(){return p().x(t).y(n)},v.lineX1=function(){return p().x(c).y(e)},v.defined=function(t){return arguments.length?(l="function"===typeof t?t:Object(o.a)(!!t),v):l},v.curve=function(t){return arguments.length?(h=t,null!=f&&(d=h(f)),v):h},v.context=function(t){return arguments.length?(null==t?f=d=null:d=h(f=t),v):f},v}},209:function(t,e,n){"use strict";n.d(e,"b",(function(){return F})),n.d(e,"a",(function(){return D}));var r=n(89),i=n(233),o=n(236);var a=function(t){t.preventDefault(),t.stopImmediatePropagation()},u=function(t){var e=t.document.documentElement,n=Object(o.a)(t).on("dragstart.drag",a,!0);"onselectstart"in e?n.on("selectstart.drag",a,!0):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")};function s(t,e){var n=t.document.documentElement,r=Object(o.a)(t).on("dragstart.drag",null);e&&(r.on("click.drag",a,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var c=n(260),l=n(154),f=n(101),h=function(t){return function(){return t}};function d(t,e){var n=e.sourceEvent,r=e.target,i=e.selection,o=e.mode,a=e.dispatch;Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},selection:{value:i,enumerable:!0,configurable:!0},mode:{value:o,enumerable:!0,configurable:!0},_:{value:a}})}function v(t){t.stopImmediatePropagation()}var p=function(t){t.preventDefault(),t.stopImmediatePropagation()},b={name:"drag"},g={name:"space"},y={name:"handle"},m={name:"center"},w=Math.abs,x=Math.max,O=Math.min;function E(t){return[+t[0],+t[1]]}function k(t){return[E(t[0]),E(t[1])]}var z={name:"x",handles:["w","e"].map(A),input:function(t,e){return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},T={name:"y",handles:["n","s"].map(A),input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},S=(["n","w","e","s","nw","ne","sw","se"].map(A),{overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}),j={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},_={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},B={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},R={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function A(t){return{type:t}}function C(t){return!t.ctrlKey&&!t.button}function M(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function N(){return navigator.maxTouchPoints||"ontouchstart"in this}function V(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function P(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function D(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function F(){return X(z)}function X(t){var e,n=M,a=C,E=N,D=!0,F=Object(i.a)("start","brush","end"),X=6;function I(e){var n=e.property("__brush",U).selectAll(".overlay").data([A("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",S.overlay).merge(n).each((function(){var t=V(this).extent;Object(o.a)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),e.selectAll(".selection").data([A("selection")]).enter().append("rect").attr("class","selection").attr("cursor",S.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return S[t.type]})),e.each(L).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",H).filter(E).on("touchstart.brush",H).on("touchmove.brush",Y).on("touchend.brush touchcancel.brush",K).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function L(){var t=Object(o.a)(this),e=V(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?e[1][0]-X/2:e[0][0]-X/2})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-X/2:e[0][1]-X/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+X:X})).attr("height",(function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+X:X}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function W(t,e,n){var r=t.__brush.emitter;return!r||n&&r.clean?new G(t,e,n):r}function G(t,e,n){this.that=t,this.args=e,this.state=t.__brush,this.active=0,this.clean=n}function H(n){if((!e||n.touches)&&a.apply(this,arguments)){var i,c,h,d,E,k,A,C,M,N,F,X=this,I=n.target.__data__.type,G="selection"===(D&&n.metaKey?I="overlay":I)?b:D&&n.altKey?m:y,H=t===T?null:B[I],Y=t===z?null:R[I],K=V(X),U=K.extent,q=K.selection,J=U[0][0],Q=U[0][1],Z=U[1][0],$=U[1][1],tt=0,et=0,nt=H&&Y&&D&&n.shiftKey,rt=Array.from(n.touches||[n],(function(t){var e=t.identifier;return(t=Object(l.a)(t,X)).point0=t.slice(),t.identifier=e,t}));if("overlay"===I){q&&(M=!0);var it=[rt[0],rt[1]||rt[0]];K.selection=q=[[i=t===T?J:O(it[0][0],it[1][0]),h=t===z?Q:O(it[0][1],it[1][1])],[E=t===T?Z:x(it[0][0],it[1][0]),A=t===z?$:x(it[0][1],it[1][1])]],rt.length>1&&lt()}else i=q[0][0],h=q[0][1],E=q[1][0],A=q[1][1];c=i,d=h,k=E,C=A;var ot=Object(o.a)(X).attr("pointer-events","none"),at=ot.selectAll(".overlay").attr("cursor",S[I]);Object(f.a)(X);var ut=W(X,arguments,!0).beforestart();if(n.touches)ut.moved=ct,ut.ended=ft;else{var st=Object(o.a)(n.view).on("mousemove.brush",ct,!0).on("mouseup.brush",ft,!0);D&&st.on("keydown.brush",ht,!0).on("keyup.brush",dt,!0),u(n.view)}L.call(X),ut.start(n,G.name)}function ct(t){var e,n=Object(r.a)(t.changedTouches||[t]);try{for(n.s();!(e=n.n()).done;){var i,o=e.value,a=Object(r.a)(rt);try{for(a.s();!(i=a.n()).done;){var u=i.value;u.identifier===o.identifier&&(u.cur=Object(l.a)(o,X))}}catch(d){a.e(d)}finally{a.f()}}}catch(d){n.e(d)}finally{n.f()}if(nt&&!N&&!F&&1===rt.length){var s=rt[0];w(s.cur[0]-s[0])>w(s.cur[1]-s[1])?F=!0:N=!0}var c,f=Object(r.a)(rt);try{for(f.s();!(c=f.n()).done;){var h=c.value;h.cur&&(h[0]=h.cur[0],h[1]=h.cur[1])}}catch(d){f.e(d)}finally{f.f()}M=!0,p(t),lt(t)}function lt(t){var e,n=rt[0],r=n.point0;switch(tt=n[0]-r[0],et=n[1]-r[1],G){case g:case b:H&&(tt=x(J-i,O(Z-E,tt)),c=i+tt,k=E+tt),Y&&(et=x(Q-h,O($-A,et)),d=h+et,C=A+et);break;case y:rt[1]?(H&&(c=x(J,O(Z,rt[0][0])),k=x(J,O(Z,rt[1][0])),H=1),Y&&(d=x(Q,O($,rt[0][1])),C=x(Q,O($,rt[1][1])),Y=1)):(H<0?(tt=x(J-i,O(Z-i,tt)),c=i+tt,k=E):H>0&&(tt=x(J-E,O(Z-E,tt)),c=i,k=E+tt),Y<0?(et=x(Q-h,O($-h,et)),d=h+et,C=A):Y>0&&(et=x(Q-A,O($-A,et)),d=h,C=A+et));break;case m:H&&(c=x(J,O(Z,i-tt*H)),k=x(J,O(Z,E+tt*H))),Y&&(d=x(Q,O($,h-et*Y)),C=x(Q,O($,A+et*Y)))}k<c&&(H*=-1,e=i,i=E,E=e,e=c,c=k,k=e,I in j&&at.attr("cursor",S[I=j[I]])),C<d&&(Y*=-1,e=h,h=A,A=e,e=d,d=C,C=e,I in _&&at.attr("cursor",S[I=_[I]])),K.selection&&(q=K.selection),N&&(c=q[0][0],k=q[1][0]),F&&(d=q[0][1],C=q[1][1]),q[0][0]===c&&q[0][1]===d&&q[1][0]===k&&q[1][1]===C||(K.selection=[[c,d],[k,C]],L.call(X),ut.brush(t,G.name))}function ft(t){if(v(t),t.touches){if(t.touches.length)return;e&&clearTimeout(e),e=setTimeout((function(){e=null}),500)}else s(t.view,M),st.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);ot.attr("pointer-events","all"),at.attr("cursor",S.overlay),K.selection&&(q=K.selection),P(q)&&(K.selection=null,L.call(X)),ut.end(t,G.name)}function ht(t){switch(t.keyCode){case 16:nt=H&&Y;break;case 18:G===y&&(H&&(E=k-tt*H,i=c+tt*H),Y&&(A=C-et*Y,h=d+et*Y),G=m,lt());break;case 32:G!==y&&G!==m||(H<0?E=k-tt:H>0&&(i=c-tt),Y<0?A=C-et:Y>0&&(h=d-et),G=g,at.attr("cursor",S.selection),lt());break;default:return}p(t)}function dt(t){switch(t.keyCode){case 16:nt&&(N=F=nt=!1,lt());break;case 18:G===m&&(H<0?E=k:H>0&&(i=c),Y<0?A=C:Y>0&&(h=d),G=y,lt());break;case 32:G===g&&(t.altKey?(H&&(E=k-tt*H,i=c+tt*H),Y&&(A=C-et*Y,h=d+et*Y),G=m):(H<0?E=k:H>0&&(i=c),Y<0?A=C:Y>0&&(h=d),G=y),at.attr("cursor",S[I]),lt());break;default:return}p(t)}}function Y(t){W(this,arguments).moved(t)}function K(t){W(this,arguments).ended(t)}function U(){var e=this.__brush||{selection:null};return e.extent=k(n.apply(this,arguments)),e.dim=t,e}return I.move=function(e,n){e.tween?e.on("start.brush",(function(t){W(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){W(this,arguments).end(t)})).tween("brush",(function(){var e=this,r=e.__brush,i=W(e,arguments),o=r.selection,a=t.input("function"===typeof n?n.apply(this,arguments):n,r.extent),u=Object(c.a)(o,a);function s(t){r.selection=1===t&&null===a?null:u(t),L.call(e),i.brush()}return null!==o&&null!==a?s:s(1)})):e.each((function(){var e=this,r=arguments,i=e.__brush,o=t.input("function"===typeof n?n.apply(e,r):n,i.extent),a=W(e,r).beforestart();Object(f.a)(e),i.selection=null===o?null:o,L.call(e),a.start().brush().end()}))},I.clear=function(t){I.move(t,null)},G.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,e){return this.starting?(this.starting=!1,this.emit("start",t,e)):this.emit("brush",t),this},brush:function(t,e){return this.emit("brush",t,e),this},end:function(t,e){return 0===--this.active&&(delete this.state.emitter,this.emit("end",t,e)),this},emit:function(e,n,r){var i=Object(o.a)(this.that).datum();F.call(e,this.that,new d(e,{sourceEvent:n,target:I,selection:t.output(this.state.selection),mode:r,dispatch:F}),i)}},I.extent=function(t){return arguments.length?(n="function"===typeof t?t:h(k(t)),I):n},I.filter=function(t){return arguments.length?(a="function"===typeof t?t:h(!!t),I):a},I.touchable=function(t){return arguments.length?(E="function"===typeof t?t:h(!!t),I):E},I.handleSize=function(t){return arguments.length?(X=+t,I):X},I.keyModifiers=function(t){return arguments.length?(D=!!t,I):D},I.on=function(){var t=F.on.apply(F,arguments);return t===F?I:t},I}},253:function(t,e,n){"use strict";var r=n(154),i=n(116);e.a=function(t,e){return t.target&&(t=Object(i.a)(t),void 0===e&&(e=t.currentTarget),t=t.touches||[t]),Array.from(t,(function(t){return Object(r.a)(t,e)}))}},267:function(t,e,n){"use strict";var r=n(89),i=n(114),o=n(113),a=function(t,e){if((i=t.length)>1)for(var n,r,i,o=1,a=t[e[0]],u=a.length;o<i;++o)for(r=a,a=t[e[o]],n=0;n<u;++n)a[n][1]+=a[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},u=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n};function s(t,e){return t[e]}function c(t){var e=[];return e.key=t,e}e.a=function(){var t=Object(o.a)([]),e=u,n=a,l=s;function f(o){var a,u,s,f=Array.from(t.apply(this,arguments),c),h=f.length,d=-1,v=Object(r.a)(o);try{for(v.s();!(s=v.n()).done;){var p=s.value;for(a=0,++d;a<h;++a)(f[a][d]=[0,+l(p,f[a].key,d,o)]).data=p}}catch(b){v.e(b)}finally{v.f()}for(a=0,u=Object(i.a)(e(f));a<h;++a)f[u[a]].index=a;return n(f,u),f}return f.keys=function(e){return arguments.length?(t="function"===typeof e?e:Object(o.a)(Array.from(e)),f):t},f.value=function(t){return arguments.length?(l="function"===typeof t?t:Object(o.a)(+t),f):l},f.order=function(t){return arguments.length?(e=null==t?u:"function"===typeof t?t:Object(o.a)(Array.from(t)),f):e},f.offset=function(t){return arguments.length?(n=null==t?a:t,f):n},f}}}]);
//# sourceMappingURL=19.8980d026.chunk.js.map