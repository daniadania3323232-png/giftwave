(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function s1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vv={exports:{}},_c={},wv={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),i1=Symbol.for("react.portal"),o1=Symbol.for("react.fragment"),a1=Symbol.for("react.strict_mode"),l1=Symbol.for("react.profiler"),u1=Symbol.for("react.provider"),c1=Symbol.for("react.context"),d1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),f1=Symbol.for("react.memo"),p1=Symbol.for("react.lazy"),pg=Symbol.iterator;function m1(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iv=Object.assign,Tv={};function oo(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xv(){}xv.prototype=oo.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}var Ff=jf.prototype=new xv;Ff.constructor=jf;Iv(Ff,oo.prototype);Ff.isPureReactComponent=!0;var mg=Array.isArray,Sv=Object.prototype.hasOwnProperty,Uf={current:null},Av={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Sv.call(e,r)&&!Av.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Xa,type:t,key:i,ref:o,props:s,_owner:Uf.current}}function g1(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function y1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gg=/\/+/g;function xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?y1(""+t.key):e.toString(36)}function tu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case i1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+xd(o,0):r,mg(s)?(n="",t!=null&&(n=t.replace(gg,"$&/")+"/"),tu(s,e,n,"",function(c){return c})):s!=null&&(zf(s)&&(s=g1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(gg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",mg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+xd(i,l);o+=tu(i,e,n,u,s)}else if(u=m1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+xd(i,l++),o+=tu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bl(t,e,n){if(t==null)return t;var r=[],s=0;return tu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function _1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},nu={transition:null},v1={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:nu,ReactCurrentOwner:Uf};function kv(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=oo;le.Fragment=o1;le.Profiler=l1;le.PureComponent=jf;le.StrictMode=a1;le.Suspense=h1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;le.act=kv;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Iv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Uf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Sv.call(e,u)&&!Av.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Xa,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:c1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u1,_context:t},t.Consumer=t};le.createElement=Cv;le.createFactory=function(t){var e=Cv.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:d1,render:t}};le.isValidElement=zf;le.lazy=function(t){return{$$typeof:p1,_payload:{_status:-1,_result:t},_init:_1}};le.memo=function(t,e){return{$$typeof:f1,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=nu.transition;nu.transition={};try{t()}finally{nu.transition=e}};le.unstable_act=kv;le.useCallback=function(t,e){return It.current.useCallback(t,e)};le.useContext=function(t){return It.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return It.current.useDeferredValue(t)};le.useEffect=function(t,e){return It.current.useEffect(t,e)};le.useId=function(){return It.current.useId()};le.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return It.current.useMemo(t,e)};le.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};le.useRef=function(t){return It.current.useRef(t)};le.useState=function(t){return It.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return It.current.useTransition()};le.version="18.3.1";wv.exports=le;var q=wv.exports;const Bf=s1(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=q,E1=Symbol.for("react.element"),I1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,x1=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S1={key:!0,ref:!0,__self:!0,__source:!0};function Rv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T1.call(e,r)&&!S1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:E1,type:t,key:i,ref:o,props:s,_owner:x1.current}}_c.Fragment=I1;_c.jsx=Rv;_c.jsxs=Rv;vv.exports=_c;var p=vv.exports,ph={},bv={exports:{}},Wt={},Pv={exports:{}},Nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var X=z.length;z.push(Y);e:for(;0<X;){var Z=X-1>>>1,ye=z[Z];if(0<s(ye,Y))z[Z]=Y,z[X]=ye,X=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],X=z.pop();if(X!==Y){z[0]=X;e:for(var Z=0,ye=z.length,Vt=ye>>>1;Z<Vt;){var tt=2*(Z+1)-1,Ot=z[tt],ut=tt+1,xt=z[ut];if(0>s(Ot,X))ut<ye&&0>s(xt,Ot)?(z[Z]=xt,z[ut]=X,Z=ut):(z[Z]=Ot,z[tt]=X,Z=tt);else if(ut<ye&&0>s(xt,X))z[Z]=xt,z[ut]=X,Z=ut;else break e}}return Y}function s(z,Y){var X=z.sortIndex-Y.sortIndex;return X!==0?X:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,g=null,m=3,S=!1,k=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(z){if(b=!1,A(z),!k)if(n(u)!==null)k=!0,K(O);else{var Y=n(c);Y!==null&&ge(V,Y.startTime-z)}}function O(z,Y){k=!1,b&&(b=!1,x(y),y=-1),S=!0;var X=m;try{for(A(Y),g=n(u);g!==null&&(!(g.expirationTime>Y)||z&&!R());){var Z=g.callback;if(typeof Z=="function"){g.callback=null,m=g.priorityLevel;var ye=Z(g.expirationTime<=Y);Y=t.unstable_now(),typeof ye=="function"?g.callback=ye:g===n(u)&&r(u),A(Y)}else r(u);g=n(u)}if(g!==null)var Vt=!0;else{var tt=n(c);tt!==null&&ge(V,tt.startTime-Y),Vt=!1}return Vt}finally{g=null,m=X,S=!1}}var j=!1,E=null,y=-1,T=5,C=-1;function R(){return!(t.unstable_now()-C<T)}function I(){if(E!==null){var z=t.unstable_now();C=z;var Y=!0;try{Y=E(!0,z)}finally{Y?w():(j=!1,E=null)}}else j=!1}var w;if(typeof v=="function")w=function(){v(I)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=I,w=function(){U.postMessage(null)}}else w=function(){D(I,0)};function K(z){E=z,j||(j=!0,w())}function ge(z,Y){y=D(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,K(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var X=m;m=Y;try{return z()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=m;m=z;try{return Y()}finally{m=X}},t.unstable_scheduleCallback=function(z,Y,X){var Z=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Z+X:Z):X=Z,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=X+ye,z={id:f++,callback:Y,priorityLevel:z,startTime:X,expirationTime:ye,sortIndex:-1},X>Z?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(b?(x(y),y=-1):b=!0,ge(V,X-Z))):(z.sortIndex=ye,e(u,z),k||S||(k=!0,K(O))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Y=m;return function(){var X=m;m=Y;try{return z.apply(this,arguments)}finally{m=X}}}})(Nv);Pv.exports=Nv;var A1=Pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=q,qt=A1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dv=new Set,Aa={};function Hs(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(Aa[t]=e,t=0;t<e.length;t++)Dv.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,k1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},_g={};function R1(t){return mh.call(_g,t)?!0:mh.call(yg,t)?!1:k1.test(t)?_g[t]=!0:(yg[t]=!0,!1)}function b1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P1(t,e,n,r){if(e===null||typeof e>"u"||b1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $f=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($f,qf);at[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($f,qf);at[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($f,qf);at[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,r){var s=at.hasOwnProperty(e)?at[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P1(e,n,s,r)&&(n=null),r||s===null?R1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Ov=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),Mv=Symbol.for("react.offscreen"),vg=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Sd;function ea(t){if(Sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sd=e&&e[1]||""}return`
`+Sd+t}var Ad=!1;function Cd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function N1(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case gh:return"Profiler";case Hf:return"StrictMode";case yh:return"Suspense";case _h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ov:return(t.displayName||"Context")+".Consumer";case Vv:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function D1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===Hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V1(t){var e=Lv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nl(t){t._valueTracker||(t._valueTracker=V1(t))}function jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fv(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function Eh(t,e){Fv(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Eg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ta(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function Uv(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,Bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){O1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function $v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=$v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var M1=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(M1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kh=null,Di=null,Vi=null;function xg(t){if(t=tl(t)){if(typeof kh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Tc(e),kh(t.stateNode,t.type,e))}}function Wv(t){Di?Vi?Vi.push(t):Vi=[t]:Di=t}function Hv(){if(Di){var t=Di,e=Vi;if(Vi=Di=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function Gv(t,e){return t(e)}function Kv(){}var kd=!1;function Qv(t,e,n){if(kd)return t(e,n);kd=!0;try{return Gv(t,e,n)}finally{kd=!1,(Di!==null||Vi!==null)&&(Kv(),Hv())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Tc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Rh=!1;if(er)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Rh=!1}function L1(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var da=!1,Su=null,Au=!1,bh=null,j1={onError:function(t){da=!0,Su=t}};function F1(t,e,n,r,s,i,o,l,u){da=!1,Su=null,L1.apply(j1,arguments)}function U1(t,e,n,r,s,i,o,l,u){if(F1.apply(this,arguments),da){if(da){var c=Su;da=!1,Su=null}else throw Error(B(198));Au||(Au=!0,bh=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sg(t){if(Gs(t)!==t)throw Error(B(188))}function z1(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Sg(s),t;if(i===r)return Sg(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Jv(t){return t=z1(t),t!==null?Xv(t):null}function Xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xv(t);if(e!==null)return e;t=t.sibling}return null}var Zv=qt.unstable_scheduleCallback,Ag=qt.unstable_cancelCallback,B1=qt.unstable_shouldYield,$1=qt.unstable_requestPaint,Fe=qt.unstable_now,q1=qt.unstable_getCurrentPriorityLevel,Yf=qt.unstable_ImmediatePriority,e0=qt.unstable_UserBlockingPriority,Cu=qt.unstable_NormalPriority,W1=qt.unstable_LowPriority,t0=qt.unstable_IdlePriority,vc=null,Pn=null;function H1(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Q1,G1=Math.log,K1=Math.LN2;function Q1(t){return t>>>=0,t===0?32:31-(G1(t)/K1|0)|0}var Vl=64,Ol=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=na(l):(i&=o,i!==0&&(r=na(i)))}else o=n&~s,o!==0?r=na(o):i!==0&&(r=na(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),s=1<<n,r|=t[n],e&=~s;return r}function Y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-fn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=Y1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-fn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,Xf,i0,o0,a0,Nh=!1,Ml=[],jr=null,Fr=null,Ur=null,Ra=new Map,ba=new Map,Rr=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cg(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function qo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=tl(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ex(t,e,n,r,s){switch(e){case"focusin":return jr=qo(jr,t,e,n,r,s),!0;case"dragenter":return Fr=qo(Fr,t,e,n,r,s),!0;case"mouseover":return Ur=qo(Ur,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ra.set(i,qo(Ra.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ba.set(i,qo(ba.get(i)||null,t,e,n,r,s)),!0}return!1}function l0(t){var e=xs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Yv(n),e!==null){t.blockedOn=e,a0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=tl(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function kg(t,e,n){ru(t)&&n.delete(e)}function tx(){Nh=!1,jr!==null&&ru(jr)&&(jr=null),Fr!==null&&ru(Fr)&&(Fr=null),Ur!==null&&ru(Ur)&&(Ur=null),Ra.forEach(kg),ba.forEach(kg)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,tx)))}function Pa(t){function e(s){return Wo(s,t)}if(0<Ml.length){Wo(Ml[0],t);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Wo(jr,t),Fr!==null&&Wo(Fr,t),Ur!==null&&Wo(Ur,t),Ra.forEach(e),ba.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&Rr.shift()}var Oi=ur.ReactCurrentBatchConfig,Ru=!0;function nx(t,e,n,r){var s=_e,i=Oi.transition;Oi.transition=null;try{_e=1,Zf(t,e,n,r)}finally{_e=s,Oi.transition=i}}function rx(t,e,n,r){var s=_e,i=Oi.transition;Oi.transition=null;try{_e=4,Zf(t,e,n,r)}finally{_e=s,Oi.transition=i}}function Zf(t,e,n,r){if(Ru){var s=Dh(t,e,n,r);if(s===null)Fd(t,e,r,bu,n),Cg(t,r);else if(ex(s,t,e,n,r))r.stopPropagation();else if(Cg(t,r),e&4&&-1<Z1.indexOf(t)){for(;s!==null;){var i=tl(s);if(i!==null&&s0(i),i=Dh(t,e,n,r),i===null&&Fd(t,e,r,bu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Fd(t,e,r,null,n)}}var bu=null;function Dh(t,e,n,r){if(bu=null,t=Qf(r),t=xs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bu=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case Yf:return 1;case e0:return 4;case Cu:case W1:return 16;case t0:return 536870912;default:return 16}default:return 16}}var Or=null,ep=null,su=null;function c0(){if(su)return su;var t,e=ep,n=e.length,r,s="value"in Or?Or.value:Or.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return su=s.slice(t,1<r?1-r:void 0)}function iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function Rg(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ll:Rg,this.isPropagationStopped=Rg,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Ht(ao),el=De({},ao,{view:0,detail:0}),sx=Ht(el),bd,Pd,Ho,wc=De({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(bd=t.screenX-Ho.screenX,Pd=t.screenY-Ho.screenY):Pd=bd=0,Ho=t),bd)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),bg=Ht(wc),ix=De({},wc,{dataTransfer:0}),ox=Ht(ix),ax=De({},el,{relatedTarget:0}),Nd=Ht(ax),lx=De({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Ht(lx),cx=De({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Ht(cx),hx=De({},ao,{data:0}),Pg=Ht(hx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function np(){return gx}var yx=De({},el,{key:function(t){if(t.key){var e=fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=Ht(yx),vx=De({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=Ht(vx),wx=De({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),Ex=Ht(wx),Ix=De({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Ht(Ix),xx=De({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Ht(xx),Ax=[9,13,27,32],rp=er&&"CompositionEvent"in window,ha=null;er&&"documentMode"in document&&(ha=document.documentMode);var Cx=er&&"TextEvent"in window&&!ha,d0=er&&(!rp||ha&&8<ha&&11>=ha),Dg=" ",Vg=!1;function h0(t,e){switch(t){case"keyup":return Ax.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function kx(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(Vg=!0,Dg);case"textInput":return t=e.data,t===Dg&&Vg?null:t;default:return null}}function Rx(t,e){if(Ei)return t==="compositionend"||!rp&&h0(t,e)?(t=c0(),su=ep=Or=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bx[t.type]:e==="textarea"}function p0(t,e,n,r){Wv(r),e=Pu(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,Na=null;function Px(t){S0(t,0)}function Ec(t){var e=xi(t);if(jv(e))return t}function Nx(t,e){if(t==="change")return e}var m0=!1;if(er){var Dd;if(er){var Vd="oninput"in document;if(!Vd){var Mg=document.createElement("div");Mg.setAttribute("oninput","return;"),Vd=typeof Mg.oninput=="function"}Dd=Vd}else Dd=!1;m0=Dd&&(!document.documentMode||9<document.documentMode)}function Lg(){fa&&(fa.detachEvent("onpropertychange",g0),Na=fa=null)}function g0(t){if(t.propertyName==="value"&&Ec(Na)){var e=[];p0(e,Na,t,Qf(t)),Qv(Px,e)}}function Dx(t,e,n){t==="focusin"?(Lg(),fa=e,Na=n,fa.attachEvent("onpropertychange",g0)):t==="focusout"&&Lg()}function Vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(Na)}function Ox(t,e){if(t==="click")return Ec(e)}function Mx(t,e){if(t==="input"||t==="change")return Ec(e)}function Lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:Lx;function Da(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!mh.call(e,s)||!gn(t[s],e[s]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _0(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=_0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Fg(n,i);var o=Fg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fx=er&&"documentMode"in document&&11>=document.documentMode,Ii=null,Vh=null,pa=null,Oh=!1;function Ug(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||Ii==null||Ii!==xu(r)||(r=Ii,"selectionStart"in r&&sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&Da(pa,r)||(pa=r,r=Pu(Vh,"onSelect"),0<r.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Od={},v0={};er&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Ic(t){if(Od[t])return Od[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return Od[t]=e[n];return t}var w0=Ic("animationend"),E0=Ic("animationiteration"),I0=Ic("animationstart"),T0=Ic("transitionend"),x0=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){x0.set(t,e),Hs(e,[t])}for(var Md=0;Md<zg.length;Md++){var Ld=zg[Md],Ux=Ld.toLowerCase(),zx=Ld[0].toUpperCase()+Ld.slice(1);ss(Ux,"on"+zx)}ss(w0,"onAnimationEnd");ss(E0,"onAnimationIteration");ss(I0,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(T0,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,U1(r,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Bg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Bg(s,l,c),i=u}}}if(Au)throw t=bh,Au=!1,bh=null,t}function Ae(t,e){var n=e[Uh];n===void 0&&(n=e[Uh]=new Set);var r=t+"__bubble";n.has(r)||(A0(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),A0(n,t,r,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[Fl]){t[Fl]=!0,Dv.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,jd("selectionchange",!1,e))}}function A0(t,e,n,r){switch(u0(e)){case 1:var s=nx;break;case 4:s=rx;break;default:s=Zf}n=s.bind(null,e,n,t),s=void 0,!Rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Fd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=xs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Qv(function(){var c=i,f=Qf(n),g=[];e:{var m=x0.get(t);if(m!==void 0){var S=tp,k=t;switch(t){case"keypress":if(iu(n)===0)break e;case"keydown":case"keyup":S=_x;break;case"focusin":k="focus",S=Nd;break;case"focusout":k="blur",S=Nd;break;case"beforeblur":case"afterblur":S=Nd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ex;break;case w0:case E0:case I0:S=ux;break;case T0:S=Tx;break;case"scroll":S=sx;break;case"wheel":S=Sx;break;case"copy":case"cut":case"paste":S=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ng}var b=(e&4)!==0,D=!b&&t==="scroll",x=b?m!==null?m+"Capture":null:m;b=[];for(var v=c,A;v!==null;){A=v;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,x!==null&&(V=ka(v,x),V!=null&&b.push(Oa(v,V,A)))),D)break;v=v.return}0<b.length&&(m=new S(m,k,null,n,f),g.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Ch&&(k=n.relatedTarget||n.fromElement)&&(xs(k)||k[tr]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=c,k=k?xs(k):null,k!==null&&(D=Gs(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=c),S!==k)){if(b=bg,V="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=Ng,V="onPointerLeave",x="onPointerEnter",v="pointer"),D=S==null?m:xi(S),A=k==null?m:xi(k),m=new b(V,v+"leave",S,n,f),m.target=D,m.relatedTarget=A,V=null,xs(f)===c&&(b=new b(x,v+"enter",k,n,f),b.target=A,b.relatedTarget=D,V=b),D=V,S&&k)t:{for(b=S,x=k,v=0,A=b;A;A=fi(A))v++;for(A=0,V=x;V;V=fi(V))A++;for(;0<v-A;)b=fi(b),v--;for(;0<A-v;)x=fi(x),A--;for(;v--;){if(b===x||x!==null&&b===x.alternate)break t;b=fi(b),x=fi(x)}b=null}else b=null;S!==null&&$g(g,m,S,b,!1),k!==null&&D!==null&&$g(g,D,k,b,!0)}}e:{if(m=c?xi(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var O=Nx;else if(Og(m))if(m0)O=Mx;else{O=Vx;var j=Dx}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=Ox);if(O&&(O=O(t,c))){p0(g,O,n,f);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Ih(m,"number",m.value)}switch(j=c?xi(c):window,t){case"focusin":(Og(j)||j.contentEditable==="true")&&(Ii=j,Vh=c,pa=null);break;case"focusout":pa=Vh=Ii=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,Ug(g,n,f);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Ug(g,n,f)}var E;if(rp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ei?h0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(d0&&n.locale!=="ko"&&(Ei||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ei&&(E=c0()):(Or=f,ep="value"in Or?Or.value:Or.textContent,Ei=!0)),j=Pu(c,y),0<j.length&&(y=new Pg(y,t,null,n,f),g.push({event:y,listeners:j}),E?y.data=E:(E=f0(n),E!==null&&(y.data=E)))),(E=Cx?kx(t,n):Rx(t,n))&&(c=Pu(c,"onBeforeInput"),0<c.length&&(f=new Pg("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:c}),f.data=E))}S0(g,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ka(t,n),i!=null&&r.unshift(Oa(t,i,s)),i=ka(t,e),i!=null&&r.push(Oa(t,i,s))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $g(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=ka(n,i),u!=null&&o.unshift(Oa(n,u,l))):s||(u=ka(n,i),u!=null&&o.push(Oa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $x=/\r\n?/g,qx=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(qx,"")}function Ul(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(B(425))}function Nu(){}var Mh=null,Lh=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(t){return Wg.resolve(null).then(t).catch(Gx)}:Fh;function Gx(t){setTimeout(function(){throw t})}function Ud(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Pa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),bn="__reactFiber$"+lo,Ma="__reactProps$"+lo,tr="__reactContainer$"+lo,Uh="__reactEvents$"+lo,Kx="__reactListeners$"+lo,Qx="__reactHandles$"+lo;function xs(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hg(t);t!==null;){if(n=t[bn])return n;t=Hg(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[bn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Tc(t){return t[Ma]||null}var zh=[],Si=-1;function is(t){return{current:t}}function ke(t){0>Si||(t.current=zh[Si],zh[Si]=null,Si--)}function Te(t,e){Si++,zh[Si]=t.current,t.current=e}var Jr={},gt=is(Jr),Rt=is(!1),Ds=Jr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function bt(t){return t=t.childContextTypes,t!=null}function Du(){ke(Rt),ke(gt)}function Gg(t,e,n){if(gt.current!==Jr)throw Error(B(168));Te(gt,e),Te(Rt,n)}function C0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,D1(t)||"Unknown",s));return De({},n,r)}function Vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ds=gt.current,Te(gt,t),Te(Rt,Rt.current),!0}function Kg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=C0(t,e,Ds),r.__reactInternalMemoizedMergedChildContext=t,ke(Rt),ke(gt),Te(gt,t)):ke(Rt),Te(Rt,n)}var Hn=null,xc=!1,zd=!1;function k0(t){Hn===null?Hn=[t]:Hn.push(t)}function Yx(t){xc=!0,k0(t)}function os(){if(!zd&&Hn!==null){zd=!0;var t=0,e=_e;try{var n=Hn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,xc=!1}catch(s){throw Hn!==null&&(Hn=Hn.slice(t+1)),Zv(Yf,os),s}finally{_e=e,zd=!1}}return null}var Ai=[],Ci=0,Ou=null,Mu=0,Kt=[],Qt=0,Vs=null,Gn=1,Kn="";function Es(t,e){Ai[Ci++]=Mu,Ai[Ci++]=Ou,Ou=t,Mu=e}function R0(t,e,n){Kt[Qt++]=Gn,Kt[Qt++]=Kn,Kt[Qt++]=Vs,Vs=t;var r=Gn;t=Kn;var s=32-fn(r)-1;r&=~(1<<s),n+=1;var i=32-fn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Gn=1<<32-fn(e)+s|n<<s|r,Kn=i+t}else Gn=1<<i|n<<s|r,Kn=t}function ip(t){t.return!==null&&(Es(t,1),R0(t,1,0))}function op(t){for(;t===Ou;)Ou=Ai[--Ci],Ai[Ci]=null,Mu=Ai[--Ci],Ai[Ci]=null;for(;t===Vs;)Vs=Kt[--Qt],Kt[Qt]=null,Kn=Kt[--Qt],Kt[Qt]=null,Gn=Kt[--Qt],Kt[Qt]=null}var Bt=null,Ut=null,Re=!1,cn=null;function b0(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vs!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(Re){var e=Ut;if(e){var n=e;if(!Qg(t,e)){if(Bh(t))throw Error(B(418));e=zr(n.nextSibling);var r=Bt;e&&Qg(t,e)?b0(r,n):(t.flags=t.flags&-4097|2,Re=!1,Bt=t)}}else{if(Bh(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Bt=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function zl(t){if(t!==Bt)return!1;if(!Re)return Yg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=Ut)){if(Bh(t))throw P0(),Error(B(418));for(;e;)b0(t,e),e=zr(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?zr(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=Ut;t;)t=zr(t.nextSibling)}function Ki(){Ut=Bt=null,Re=!1}function ap(t){cn===null?cn=[t]:cn.push(t)}var Jx=ur.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Bl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jg(t){var e=t._init;return e(t._payload)}function N0(t){function e(x,v){if(t){var A=x.deletions;A===null?(x.deletions=[v],x.flags|=16):A.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function s(x,v){return x=Wr(x,v),x.index=0,x.sibling=null,x}function i(x,v,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<v?(x.flags|=2,v):A):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,A,V){return v===null||v.tag!==6?(v=Kd(A,x.mode,V),v.return=x,v):(v=s(v,A),v.return=x,v)}function u(x,v,A,V){var O=A.type;return O===wi?f(x,v,A.props.children,V,A.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cr&&Jg(O)===v.type)?(V=s(v,A.props),V.ref=Go(x,v,A),V.return=x,V):(V=hu(A.type,A.key,A.props,null,x.mode,V),V.ref=Go(x,v,A),V.return=x,V)}function c(x,v,A,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Qd(A,x.mode,V),v.return=x,v):(v=s(v,A.children||[]),v.return=x,v)}function f(x,v,A,V,O){return v===null||v.tag!==7?(v=bs(A,x.mode,V,O),v.return=x,v):(v=s(v,A),v.return=x,v)}function g(x,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Kd(""+v,x.mode,A),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pl:return A=hu(v.type,v.key,v.props,null,x.mode,A),A.ref=Go(x,null,v),A.return=x,A;case vi:return v=Qd(v,x.mode,A),v.return=x,v;case Cr:var V=v._init;return g(x,V(v._payload),A)}if(ta(v)||Bo(v))return v=bs(v,x.mode,A,null),v.return=x,v;Bl(x,v)}return null}function m(x,v,A,V){var O=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return O!==null?null:l(x,v,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Pl:return A.key===O?u(x,v,A,V):null;case vi:return A.key===O?c(x,v,A,V):null;case Cr:return O=A._init,m(x,v,O(A._payload),V)}if(ta(A)||Bo(A))return O!==null?null:f(x,v,A,V,null);Bl(x,A)}return null}function S(x,v,A,V,O){if(typeof V=="string"&&V!==""||typeof V=="number")return x=x.get(A)||null,l(v,x,""+V,O);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Pl:return x=x.get(V.key===null?A:V.key)||null,u(v,x,V,O);case vi:return x=x.get(V.key===null?A:V.key)||null,c(v,x,V,O);case Cr:var j=V._init;return S(x,v,A,j(V._payload),O)}if(ta(V)||Bo(V))return x=x.get(A)||null,f(v,x,V,O,null);Bl(v,V)}return null}function k(x,v,A,V){for(var O=null,j=null,E=v,y=v=0,T=null;E!==null&&y<A.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var C=m(x,E,A[y],V);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(x,E),v=i(C,v,y),j===null?O=C:j.sibling=C,j=C,E=T}if(y===A.length)return n(x,E),Re&&Es(x,y),O;if(E===null){for(;y<A.length;y++)E=g(x,A[y],V),E!==null&&(v=i(E,v,y),j===null?O=E:j.sibling=E,j=E);return Re&&Es(x,y),O}for(E=r(x,E);y<A.length;y++)T=S(E,x,y,A[y],V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=i(T,v,y),j===null?O=T:j.sibling=T,j=T);return t&&E.forEach(function(R){return e(x,R)}),Re&&Es(x,y),O}function b(x,v,A,V){var O=Bo(A);if(typeof O!="function")throw Error(B(150));if(A=O.call(A),A==null)throw Error(B(151));for(var j=O=null,E=v,y=v=0,T=null,C=A.next();E!==null&&!C.done;y++,C=A.next()){E.index>y?(T=E,E=null):T=E.sibling;var R=m(x,E,C.value,V);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(x,E),v=i(R,v,y),j===null?O=R:j.sibling=R,j=R,E=T}if(C.done)return n(x,E),Re&&Es(x,y),O;if(E===null){for(;!C.done;y++,C=A.next())C=g(x,C.value,V),C!==null&&(v=i(C,v,y),j===null?O=C:j.sibling=C,j=C);return Re&&Es(x,y),O}for(E=r(x,E);!C.done;y++,C=A.next())C=S(E,x,y,C.value,V),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?y:C.key),v=i(C,v,y),j===null?O=C:j.sibling=C,j=C);return t&&E.forEach(function(I){return e(x,I)}),Re&&Es(x,y),O}function D(x,v,A,V){if(typeof A=="object"&&A!==null&&A.type===wi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Pl:e:{for(var O=A.key,j=v;j!==null;){if(j.key===O){if(O=A.type,O===wi){if(j.tag===7){n(x,j.sibling),v=s(j,A.props.children),v.return=x,x=v;break e}}else if(j.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cr&&Jg(O)===j.type){n(x,j.sibling),v=s(j,A.props),v.ref=Go(x,j,A),v.return=x,x=v;break e}n(x,j);break}else e(x,j);j=j.sibling}A.type===wi?(v=bs(A.props.children,x.mode,V,A.key),v.return=x,x=v):(V=hu(A.type,A.key,A.props,null,x.mode,V),V.ref=Go(x,v,A),V.return=x,x=V)}return o(x);case vi:e:{for(j=A.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(x,v.sibling),v=s(v,A.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Qd(A,x.mode,V),v.return=x,x=v}return o(x);case Cr:return j=A._init,D(x,v,j(A._payload),V)}if(ta(A))return k(x,v,A,V);if(Bo(A))return b(x,v,A,V);Bl(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(x,v.sibling),v=s(v,A),v.return=x,x=v):(n(x,v),v=Kd(A,x.mode,V),v.return=x,x=v),o(x)):n(x,v)}return D}var Qi=N0(!0),D0=N0(!1),Lu=is(null),ju=null,ki=null,lp=null;function up(){lp=ki=ju=null}function cp(t){var e=Lu.current;ke(Lu),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){ju=t,lp=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(ju===null)throw Error(B(308));ki=t,ju.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Ss=null;function dp(t){Ss===null?Ss=[t]:Ss.push(t)}function V0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,dp(e)):(n.next=s.next,s.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nr(t,n)}return s=r.interleaved,s===null?(e.next=e,dp(r)):(e.next=s.next,s.next=e),r.interleaved=e,nr(t,n)}function ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}function Xg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fu(t,e,n,r){var s=t.updateQueue;kr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=c=u=null,l=i;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,b=l;switch(m=e,S=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){g=k.call(S,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,m=typeof k=="function"?k.call(S,g,m):k,m==null)break e;g=De({},g,m);break e;case 2:kr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=g):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ms|=o,t.lanes=o,t.memoizedState=g}}function Zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var nl={},Nn=is(nl),La=is(nl),ja=is(nl);function As(t){if(t===nl)throw Error(B(174));return t}function fp(t,e){switch(Te(ja,e),Te(La,t),Te(Nn,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xh(e,t)}ke(Nn),Te(Nn,e)}function Yi(){ke(Nn),ke(La),ke(ja)}function M0(t){As(ja.current);var e=As(Nn.current),n=xh(e,t.type);e!==n&&(Te(La,t),Te(Nn,n))}function pp(t){La.current===t&&(ke(Nn),ke(La))}var Pe=is(0);function Uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function mp(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var au=ur.ReactCurrentDispatcher,$d=ur.ReactCurrentBatchConfig,Os=0,Ne=null,He=null,Ze=null,zu=!1,ma=!1,Fa=0,Xx=0;function ct(){throw Error(B(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function yp(t,e,n,r,s,i){if(Os=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,au.current=t===null||t.memoizedState===null?nS:rS,t=n(r,s),ma){i=0;do{if(ma=!1,Fa=0,25<=i)throw Error(B(301));i+=1,Ze=He=null,e.updateQueue=null,au.current=sS,t=n(r,s)}while(ma)}if(au.current=Bu,e=He!==null&&He.next!==null,Os=0,Ze=He=Ne=null,zu=!1,e)throw Error(B(300));return t}function _p(){var t=Fa!==0;return Fa=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function nn(){if(He===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ze===null?Ne.memoizedState:Ze.next;if(e!==null)Ze=e,He=t;else{if(t===null)throw Error(B(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ua(t,e){return typeof e=="function"?e(t):e}function qd(t){var e=nn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Os&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ne.lanes|=f,Ms|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,gn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,Ms|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=nn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);gn(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function L0(){}function j0(t,e){var n=Ne,r=nn(),s=e(),i=!gn(r.memoizedState,s);if(i&&(r.memoizedState=s,kt=!0),r=r.queue,vp(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,za(9,U0.bind(null,n,r,s,e),void 0,null),et===null)throw Error(B(349));Os&30||F0(n,e,s)}return s}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&$0(t)}function z0(t,e,n){return n(function(){B0(e)&&$0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function $0(t){var e=nr(t,1);e!==null&&pn(e,t,1,-1)}function ey(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=tS.bind(null,Ne,t),[e.memoizedState,t]}function za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q0(){return nn().memoizedState}function lu(t,e,n,r){var s=kn();Ne.flags|=t,s.memoizedState=za(1|e,n,void 0,r===void 0?null:r)}function Sc(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&gp(r,o.deps)){s.memoizedState=za(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=za(1|e,n,i,r)}function ty(t,e){return lu(8390656,8,t,e)}function vp(t,e){return Sc(2048,8,t,e)}function W0(t,e){return Sc(4,2,t,e)}function H0(t,e){return Sc(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,G0.bind(null,e,t),n)}function wp(){}function Q0(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return Os&21?(gn(n,e)||(n=n0(),Ne.lanes|=n,Ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function Zx(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{_e=n,$d.transition=r}}function X0(){return nn().memoizedState}function eS(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))ew(e,n);else if(n=V0(t,e,n,r),n!==null){var s=wt();pn(n,t,r,s),tw(n,e,r)}}function tS(t,e,n){var r=qr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))ew(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,gn(l,o)){var u=e.interleaved;u===null?(s.next=s,dp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=V0(t,e,s,r),n!==null&&(s=wt(),pn(n,t,r,s),tw(n,e,r))}}function Z0(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function ew(t,e){ma=zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}var Bu={readContext:tn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},nS={readContext:tn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:ty,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lu(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lu(4194308,4,t,e)},useInsertionEffect:function(t,e){return lu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eS.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:ey,useDebugValue:wp,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=ey(!1),e=t[0];return t=Zx.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=kn();if(Re){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),et===null)throw Error(B(349));Os&30||F0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ty(z0.bind(null,r,i,t),[t]),r.flags|=2048,za(9,U0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=kn(),e=et.identifierPrefix;if(Re){var n=Kn,r=Gn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rS={readContext:tn,useCallback:Q0,useContext:tn,useEffect:vp,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:Y0,useReducer:qd,useRef:q0,useState:function(){return qd(Ua)},useDebugValue:wp,useDeferredValue:function(t){var e=nn();return J0(e,He.memoizedState,t)},useTransition:function(){var t=qd(Ua)[0],e=nn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:j0,useId:X0,unstable_isNewReconciler:!1},sS={readContext:tn,useCallback:Q0,useContext:tn,useEffect:vp,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:H0,useMemo:Y0,useReducer:Wd,useRef:q0,useState:function(){return Wd(Ua)},useDebugValue:wp,useDeferredValue:function(t){var e=nn();return He===null?e.memoizedState=t:J0(e,He.memoizedState,t)},useTransition:function(){var t=Wd(Ua)[0],e=nn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:j0,useId:X0,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ac={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),s=qr(t),i=Jn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Br(t,i,s),e!==null&&(pn(e,t,s,r),ou(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),s=qr(t),i=Jn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Br(t,i,s),e!==null&&(pn(e,t,s,r),ou(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=qr(t),s=Jn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Br(t,s,r),e!==null&&(pn(e,t,r,n),ou(e,t,r))}};function ny(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,r)||!Da(s,i):!0}function nw(t,e,n){var r=!1,s=Jr,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=bt(e)?Ds:gt.current,r=e.contextTypes,i=(r=r!=null)?Gi(t,s):Jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ac,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ry(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ac.enqueueReplaceState(e,e.state,null)}function Hh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},hp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=bt(e)?Ds:gt.current,s.context=Gi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ac.enqueueReplaceState(s,s.state,null),Fu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=N1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Hd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function rw(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qu||(qu=!0,rf=r),Gh(t,e)},n}function sw(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Gh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gh(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=vS.bind(null,t,e,n),e.then(t,t))}function iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function oy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var oS=ur.ReactCurrentOwner,kt=!1;function _t(t,e,n,r){e.child=t===null?D0(e,null,n,r):Qi(e,t.child,n,r)}function ay(t,e,n,r,s){n=n.render;var i=e.ref;return Mi(e,s),r=yp(t,e,n,r,i,s),n=_p(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(Re&&n&&ip(e),e.flags|=1,_t(t,e,r,s),e.child)}function ly(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!kp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,iw(t,e,i,r,s)):(t=hu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,r)&&t.ref===e.ref)return rr(t,e,s)}return e.flags|=1,t=Wr(i,r),t.ref=e.ref,t.return=e,e.child=t}function iw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Da(i,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,rr(t,e,s)}return Kh(t,e,n,r,s)}function ow(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(bi,jt),jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(bi,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Te(bi,jt),jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Te(bi,jt),jt|=r;return _t(t,e,s,n),e.child}function aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,s){var i=bt(n)?Ds:gt.current;return i=Gi(e,i),Mi(e,s),n=yp(t,e,n,r,i,s),r=_p(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(Re&&r&&ip(e),e.flags|=1,_t(t,e,n,s),e.child)}function uy(t,e,n,r,s){if(bt(n)){var i=!0;Vu(e)}else i=!1;if(Mi(e,s),e.stateNode===null)uu(t,e),nw(e,n,r),Hh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=bt(n)?Ds:gt.current,c=Gi(e,c));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ry(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,Fu(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Rt.current||kr?(typeof f=="function"&&(Wh(e,n,f,r),u=e.memoizedState),(l=kr||ny(e,n,l,r,m,u,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,O0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),o.props=c,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=bt(n)?Ds:gt.current,u=Gi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&ry(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,Fu(e,r,o,s);var k=e.memoizedState;l!==g||m!==k||Rt.current||kr?(typeof S=="function"&&(Wh(e,n,S,r),k=e.memoizedState),(c=kr||ny(e,n,c,r,m,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qh(t,e,n,r,i,s)}function Qh(t,e,n,r,s,i){aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Kg(e,n,!1),rr(t,e,i);r=e.stateNode,oS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,i),e.child=Qi(e,null,l,i)):_t(t,e,l,i),e.memoizedState=r.state,s&&Kg(e,n,!0),e.child}function lw(t){var e=t.stateNode;e.pendingContext?Gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gg(t,e.context,!1),fp(t,e.containerInfo)}function cy(t,e,n,r,s){return Ki(),ap(s),e.flags|=256,_t(t,e,n,r),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function uw(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Te(Pe,s&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rc(o,r,0,null),t=bs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Jh(n),e.memoizedState=Yh,t):Ep(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return aS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Wr(l,i):(i=bs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Yh,r}return i=t.child,t=i.sibling,r=Wr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ep(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,r){return r!==null&&ap(r),Qi(e,t.child,null,n),t=Ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Hd(Error(B(422))),$l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Rc({mode:"visible",children:r.children},s,0,null),i=bs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qi(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Yh,i);if(!(e.mode&1))return $l(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=Hd(i,r,void 0),$l(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=et,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nr(t,s),pn(r,t,s,-1))}return Cp(),r=Hd(Error(B(421))),$l(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=wS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ut=zr(s.nextSibling),Bt=e,Re=!0,cn=null,t!==null&&(Kt[Qt++]=Gn,Kt[Qt++]=Kn,Kt[Qt++]=Vs,Gn=t.id,Kn=t.overflow,Vs=e),e=Ep(e,r.children),e.flags|=4096,e)}function dy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Gd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function cw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(_t(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dy(t,n,e);else if(t.tag===19)dy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Uu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Gd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Uu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Gd(e,!0,n,null,i);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lS(t,e,n){switch(e.tag){case 3:lw(e),Ki();break;case 5:M0(e);break;case 1:bt(e.type)&&Vu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Te(Lu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?uw(t,e,n):(Te(Pe,Pe.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Te(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Te(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,ow(t,e,n)}return rr(t,e,n)}var dw,Xh,hw,fw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};hw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,As(Nn.current);var i=null;switch(n){case"input":s=wh(t,s),r=wh(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Th(t,s),r=Th(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nu)}Sh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uS(t,e,n){var r=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return bt(e.type)&&Du(),dt(e),null;case 3:return r=e.stateNode,Yi(),ke(Rt),ke(gt),mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(af(cn),cn=null))),Xh(t,e),dt(e),null;case 5:pp(e);var s=As(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)hw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return dt(e),null}if(t=As(Nn.current),zl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bn]=e,r[Ma]=i,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<ra.length;s++)Ae(ra[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":wg(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":Ig(r,i),Ae("invalid",r)}Sh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,l,t),s=["children",""+l]):Aa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Nl(r),Eg(r,i,!0);break;case"textarea":Nl(r),Tg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Nu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[Ma]=r,dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),s=r;break;case"iframe":case"object":case"embed":Ae("load",t),s=r;break;case"video":case"audio":for(s=0;s<ra.length;s++)Ae(ra[s],t);s=r;break;case"source":Ae("error",t),s=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),s=r;break;case"details":Ae("toggle",t),s=r;break;case"input":wg(t,r),s=wh(t,r),Ae("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Ig(t,r),s=Th(t,r),Ae("invalid",t);break;default:s=r}Sh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?qv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Aa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ae("scroll",t):u!=null&&Wf(t,i,u,o))}switch(n){case"input":Nl(t),Eg(t,r,!1);break;case"textarea":Nl(t),Tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ni(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=As(ja.current),As(Nn.current),zl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(i=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return dt(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ut!==null&&e.mode&1&&!(e.flags&128))P0(),Ki(),e.flags|=98560,i=!1;else if(i=zl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[bn]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),i=!1}else cn!==null&&(af(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ge===0&&(Ge=3):Cp())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return Yi(),Xh(t,e),t===null&&Va(e.stateNode.containerInfo),dt(e),null;case 10:return cp(e.type._context),dt(e),null;case 17:return bt(e.type)&&Du(),dt(e),null;case 19:if(ke(Pe),i=e.memoizedState,i===null)return dt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ko(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uu(t),o!==null){for(e.flags|=128,Ko(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>Xi&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304)}else{if(!r)if(t=Uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return dt(e),null}else 2*Fe()-i.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Te(Pe,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function cS(t,e){switch(op(e),e.tag){case 1:return bt(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),ke(Rt),ke(gt),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return Yi(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var ql=!1,pt=!1,dS=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){Me(t,e,r)}}var hy=!1;function hS(t,e){if(Mh=Ru,t=_0(),sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,g=t,m=null;t:for(;;){for(var S;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)m=g,g=S;for(;;){if(g===t)break t;if(m===n&&++c===s&&(l=o),m===i&&++f===r&&(u=o),(S=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},Ru=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,D=k.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?b:ln(e.type,b),D);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Me(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return k=hy,hy=!1,k}function ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Zh(e,n,i)}s=s.next}while(s!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pw(t){var e=t.alternate;e!==null&&(t.alternate=null,pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[Ma],delete e[Uh],delete e[Kx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mw(t){return t.tag===5||t.tag===3||t.tag===4}function fy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nu));else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var rt=null,un=!1;function Tr(t,e,n){for(n=n.child;n!==null;)gw(t,e,n),n=n.sibling}function gw(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:pt||Ri(n,e);case 6:var r=rt,s=un;rt=null,Tr(t,e,n),rt=r,un=s,rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?Ud(t.parentNode,n):t.nodeType===1&&Ud(t,n),Pa(t)):Ud(rt,n.stateNode));break;case 4:r=rt,s=un,rt=n.stateNode.containerInfo,un=!0,Tr(t,e,n),rt=r,un=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Zh(n,e,o),s=s.next}while(s!==r)}Tr(t,e,n);break;case 1:if(!pt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,Tr(t,e,n),pt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(r){var s=ES.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,un=!1;break e;case 3:rt=l.stateNode.containerInfo,un=!0;break e;case 4:rt=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(rt===null)throw Error(B(160));gw(i,o,s),rt=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Me(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),Sn(t),r&4){try{ga(3,t,t.return),Cc(3,t)}catch(b){Me(t,t.return,b)}try{ga(5,t,t.return)}catch(b){Me(t,t.return,b)}}break;case 1:an(e,t),Sn(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(an(e,t),Sn(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var s=t.stateNode;try{Ca(s,"")}catch(b){Me(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Fv(s,i),Ah(l,o);var c=Ah(l,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?qv(s,g):f==="dangerouslySetInnerHTML"?Bv(s,g):f==="children"?Ca(s,g):Wf(s,f,g,c)}switch(l){case"input":Eh(s,i);break;case"textarea":Uv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ni(s,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ni(s,!!i.multiple,i.defaultValue,!0):Ni(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ma]=i}catch(b){Me(t,t.return,b)}}break;case 6:if(an(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Me(t,t.return,b)}}break;case 3:if(an(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(b){Me(t,t.return,b)}break;case 4:an(e,t),Sn(t);break;case 13:an(e,t),Sn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xp=Fe())),r&4&&py(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||f,an(e,t),pt=c):an(e,t),Sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(g=Q=f;Q!==null;){switch(m=Q,S=m.child,m.tag){case 0:case 11:case 14:case 15:ga(4,m,m.return);break;case 1:Ri(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(b){Me(r,n,b)}}break;case 5:Ri(m,m.return);break;case 22:if(m.memoizedState!==null){gy(g);continue}}S!==null?(S.return=m,Q=S):gy(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$v("display",o))}catch(b){Me(t,t.return,b)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(b){Me(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:an(e,t),Sn(t),r&4&&py(t);break;case 21:break;default:an(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ca(s,""),r.flags&=-33);var i=fy(t);nf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=fy(t);tf(t,l,o);break;default:throw Error(B(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fS(t,e,n){Q=t,_w(t)}function _w(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ql;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||pt;l=ql;var c=pt;if(ql=o,(pt=u)&&!c)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?yy(s):u!==null?(u.return=o,Q=u):yy(s);for(;i!==null;)Q=i,_w(i),i=i.sibling;Q=s,ql=l,pt=c}my(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):my(t)}}function my(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Zg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Pa(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}pt||e.flags&512&&ef(e)}catch(m){Me(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function gy(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function yy(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Me(e,s,u)}}var i=e.return;try{ef(e)}catch(u){Me(e,i,u)}break;case 5:var o=e.return;try{ef(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var pS=Math.ceil,$u=ur.ReactCurrentDispatcher,Ip=ur.ReactCurrentOwner,Zt=ur.ReactCurrentBatchConfig,fe=0,et=null,Be=null,ot=0,jt=0,bi=is(0),Ge=0,Ba=null,Ms=0,kc=0,Tp=0,ya=null,At=null,xp=0,Xi=1/0,Wn=null,qu=!1,rf=null,$r=null,Wl=!1,Mr=null,Wu=0,_a=0,sf=null,cu=-1,du=0;function wt(){return fe&6?Fe():cu!==-1?cu:cu=Fe()}function qr(t){return t.mode&1?fe&2&&ot!==0?ot&-ot:Jx.transition!==null?(du===0&&(du=n0()),du):(t=_e,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function pn(t,e,n,r){if(50<_a)throw _a=0,sf=null,Error(B(185));Za(t,n,r),(!(fe&2)||t!==et)&&(t===et&&(!(fe&2)&&(kc|=n),Ge===4&&br(t,ot)),Pt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Xi=Fe()+500,xc&&os()))}function Pt(t,e){var n=t.callbackNode;J1(t,e);var r=ku(t,t===et?ot:0);if(r===0)n!==null&&Ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ag(n),e===1)t.tag===0?Yx(_y.bind(null,t)):k0(_y.bind(null,t)),Hx(function(){!(fe&6)&&os()}),n=null;else{switch(r0(r)){case 1:n=Yf;break;case 4:n=e0;break;case 16:n=Cu;break;case 536870912:n=t0;break;default:n=Cu}n=Aw(n,vw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vw(t,e){if(cu=-1,du=0,fe&6)throw Error(B(327));var n=t.callbackNode;if(Li()&&t.callbackNode!==n)return null;var r=ku(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hu(t,r);else{e=r;var s=fe;fe|=2;var i=Ew();(et!==t||ot!==e)&&(Wn=null,Xi=Fe()+500,Rs(t,e));do try{yS();break}catch(l){ww(t,l)}while(!0);up(),$u.current=i,fe=s,Be!==null?e=0:(et=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(s=Ph(t),s!==0&&(r=s,e=of(t,s))),e===1)throw n=Ba,Rs(t,0),br(t,r),Pt(t,Fe()),n;if(e===6)br(t,r);else{if(s=t.current.alternate,!(r&30)&&!mS(s)&&(e=Hu(t,r),e===2&&(i=Ph(t),i!==0&&(r=i,e=of(t,i))),e===1))throw n=Ba,Rs(t,0),br(t,r),Pt(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Is(t,At,Wn);break;case 3:if(br(t,r),(r&130023424)===r&&(e=xp+500-Fe(),10<e)){if(ku(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Fh(Is.bind(null,t,At,Wn),e);break}Is(t,At,Wn);break;case 4:if(br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-fn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pS(r/1960))-r,10<r){t.timeoutHandle=Fh(Is.bind(null,t,At,Wn),r);break}Is(t,At,Wn);break;case 5:Is(t,At,Wn);break;default:throw Error(B(329))}}}return Pt(t,Fe()),t.callbackNode===n?vw.bind(null,t):null}function of(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=Hu(t,e),t!==2&&(e=At,At=n,e!==null&&af(e)),t}function af(t){At===null?At=t:At.push.apply(At,t)}function mS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!gn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Tp,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function _y(t){if(fe&6)throw Error(B(327));Li();var e=ku(t,0);if(!(e&1))return Pt(t,Fe()),null;var n=Hu(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=of(t,r))}if(n===1)throw n=Ba,Rs(t,0),br(t,e),Pt(t,Fe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Is(t,At,Wn),Pt(t,Fe()),null}function Sp(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Xi=Fe()+500,xc&&os())}}function Ls(t){Mr!==null&&Mr.tag===0&&!(fe&6)&&Li();var e=fe;fe|=1;var n=Zt.transition,r=_e;try{if(Zt.transition=null,_e=1,t)return t()}finally{_e=r,Zt.transition=n,fe=e,!(fe&6)&&os()}}function Ap(){jt=bi.current,ke(bi)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wx(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Du();break;case 3:Yi(),ke(Rt),ke(gt),mp();break;case 5:pp(r);break;case 4:Yi();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:cp(r.type._context);break;case 22:case 23:Ap()}n=n.return}if(et=t,Be=t=Wr(t.current,null),ot=jt=e,Ge=0,Ba=null,Tp=kc=Ms=0,At=ya=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ss=null}return t}function ww(t,e){do{var n=Be;try{if(up(),au.current=Bu,zu){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zu=!1}if(Os=0,Ze=He=Ne=null,ma=!1,Fa=0,Ip.current=null,n===null||n.return===null){Ge=1,Ba=e,Be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=iy(o);if(S!==null){S.flags&=-257,oy(S,o,l,i,e),S.mode&1&&sy(i,c,e),e=S,u=c;var k=e.updateQueue;if(k===null){var b=new Set;b.add(u),e.updateQueue=b}else k.add(u);break e}else{if(!(e&1)){sy(i,c,e),Cp();break e}u=Error(B(426))}}else if(Re&&l.mode&1){var D=iy(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),oy(D,o,l,i,e),ap(Ji(u,l));break e}}i=u=Ji(u,l),Ge!==4&&(Ge=2),ya===null?ya=[i]:ya.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=rw(i,u,e);Xg(i,x);break e;case 1:l=u;var v=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&($r===null||!$r.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=sw(i,l,e);Xg(i,V);break e}}i=i.return}while(i!==null)}Tw(n)}catch(O){e=O,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Ew(){var t=$u.current;return $u.current=Bu,t===null?Bu:t}function Cp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Ms&268435455)&&!(kc&268435455)||br(et,ot)}function Hu(t,e){var n=fe;fe|=2;var r=Ew();(et!==t||ot!==e)&&(Wn=null,Rs(t,e));do try{gS();break}catch(s){ww(t,s)}while(!0);if(up(),fe=n,$u.current=r,Be!==null)throw Error(B(261));return et=null,ot=0,Ge}function gS(){for(;Be!==null;)Iw(Be)}function yS(){for(;Be!==null&&!B1();)Iw(Be)}function Iw(t){var e=Sw(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?Tw(t):Be=e,Ip.current=null}function Tw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cS(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Be=null;return}}else if(n=uS(n,e,jt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ge===0&&(Ge=5)}function Is(t,e,n){var r=_e,s=Zt.transition;try{Zt.transition=null,_e=1,_S(t,e,n,r)}finally{Zt.transition=s,_e=r}return null}function _S(t,e,n,r){do Li();while(Mr!==null);if(fe&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(X1(t,i),t===et&&(Be=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wl||(Wl=!0,Aw(Cu,function(){return Li(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=_e;_e=1;var l=fe;fe|=4,Ip.current=null,hS(t,n),yw(n,t),jx(Lh),Ru=!!Mh,Lh=Mh=null,t.current=n,fS(n),$1(),fe=l,_e=o,Zt.transition=i}else t.current=n;if(Wl&&(Wl=!1,Mr=t,Wu=s),i=t.pendingLanes,i===0&&($r=null),H1(n.stateNode),Pt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(qu)throw qu=!1,t=rf,rf=null,t;return Wu&1&&t.tag!==0&&Li(),i=t.pendingLanes,i&1?t===sf?_a++:(_a=0,sf=t):_a=0,os(),null}function Li(){if(Mr!==null){var t=r0(Wu),e=Zt.transition,n=_e;try{if(Zt.transition=null,_e=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Wu=0,fe&6)throw Error(B(331));var s=fe;for(fe|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:ga(8,f,i)}var g=f.child;if(g!==null)g.return=f,Q=g;else for(;Q!==null;){f=Q;var m=f.sibling,S=f.return;if(pw(f),f===c){Q=null;break}if(m!==null){m.return=S,Q=m;break}Q=S}}}var k=i.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var D=b.sibling;b.sibling=null,b=D}while(b!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ga(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,Q=x;break e}Q=i.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=v;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cc(9,l)}}catch(O){Me(l,l.return,O)}if(l===o){Q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,Q=V;break e}Q=l.return}}if(fe=s,os(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(vc,t)}catch{}r=!0}return r}finally{_e=n,Zt.transition=e}}return!1}function vy(t,e,n){e=Ji(n,e),e=rw(t,e,1),t=Br(t,e,1),e=wt(),t!==null&&(Za(t,1,e),Pt(t,e))}function Me(t,e,n){if(t.tag===3)vy(t,t,n);else for(;e!==null;){if(e.tag===3){vy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Ji(n,t),t=sw(e,t,1),e=Br(e,t,1),t=wt(),e!==null&&(Za(e,1,t),Pt(e,t));break}}e=e.return}}function vS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Fe()-xp?Rs(t,0):Tp|=n),Pt(t,e)}function xw(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=wt();t=nr(t,e),t!==null&&(Za(t,e,n),Pt(t,n))}function wS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xw(t,n)}function ES(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),xw(t,n)}var Sw;Sw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,lS(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Re&&e.flags&1048576&&R0(e,Mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;uu(t,e),t=e.pendingProps;var s=Gi(e,gt.current);Mi(e,n),s=yp(null,e,r,t,s,n);var i=_p();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(i=!0,Vu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hp(e),s.updater=Ac,e.stateNode=s,s._reactInternals=e,Hh(e,r,t,n),e=Qh(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&ip(e),_t(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(uu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=TS(r),t=ln(r,t),s){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=uy(null,e,r,t,n);break e;case 11:e=ay(null,e,r,t,n);break e;case 14:e=ly(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Kh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),uy(t,e,r,s,n);case 3:e:{if(lw(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,O0(t,e),Fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ji(Error(B(423)),e),e=cy(t,e,r,n,s);break e}else if(r!==s){s=Ji(Error(B(424)),e),e=cy(t,e,r,n,s);break e}else for(Ut=zr(e.stateNode.containerInfo.firstChild),Bt=e,Re=!0,cn=null,n=D0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===s){e=rr(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&$h(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,jh(r,s)?o=null:i!==null&&jh(r,i)&&(e.flags|=32),aw(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&$h(e),null;case 13:return uw(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),ay(t,e,r,s,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Te(Lu,r._currentValue),r._currentValue=o,i!==null)if(gn(i.value,o)){if(i.children===s.children&&!Rt.current){e=rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Jn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_t(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Mi(e,n),s=tn(s),r=r(s),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),ly(t,e,r,s,n);case 15:return iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),uu(t,e),e.tag=1,bt(r)?(t=!0,Vu(e)):t=!1,Mi(e,n),nw(e,r,s),Hh(e,r,s,n),Qh(null,e,r,!0,t,n);case 19:return cw(t,e,n);case 22:return ow(t,e,n)}throw Error(B(156,e.tag))};function Aw(t,e){return Zv(t,e)}function IS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new IS(t,e,n,r)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TS(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Kf)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return bs(n.children,s,i,e);case Hf:o=8,s|=8;break;case gh:return t=Xt(12,n,e,s|2),t.elementType=gh,t.lanes=i,t;case yh:return t=Xt(13,n,e,s),t.elementType=yh,t.lanes=i,t;case _h:return t=Xt(19,n,e,s),t.elementType=_h,t.lanes=i,t;case Mv:return Rc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vv:o=10;break e;case Ov:o=9;break e;case Gf:o=11;break e;case Kf:o=14;break e;case Cr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function bs(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Rc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=Mv,t.lanes=n,t.stateNode={isHidden:!1},t}function Kd(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,r,s,i,o,l,u){return t=new xS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(i),t}function SS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cw(t){if(!t)return Jr;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(bt(n))return C0(t,n,e)}return e}function kw(t,e,n,r,s,i,o,l,u){return t=Rp(n,r,!0,t,s,i,o,l,u),t.context=Cw(null),n=t.current,r=wt(),s=qr(n),i=Jn(r,s),i.callback=e??null,Br(n,i,s),t.current.lanes=s,Za(t,s,r),Pt(t,r),t}function bc(t,e,n,r){var s=e.current,i=wt(),o=qr(s);return n=Cw(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(s,e,o),t!==null&&(pn(t,s,o,i),ou(t,s,o)),o}function Gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){wy(t,e),(t=t.alternate)&&wy(t,e)}function AS(){return null}var Rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}Pc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));bc(t,e,null,null)};Pc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ls(function(){bc(null,t,null,null)}),e[tr]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&l0(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ey(){}function CS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Gu(o);i.call(c)}}var o=kw(e,r,t,0,null,!1,!1,"",Ey);return t._reactRootContainer=o,t[tr]=o.current,Va(t.nodeType===8?t.parentNode:t),Ls(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Gu(u);l.call(c)}}var u=Rp(t,0,!1,null,null,!1,!1,"",Ey);return t._reactRootContainer=u,t[tr]=u.current,Va(t.nodeType===8?t.parentNode:t),Ls(function(){bc(e,u,n,r)}),u}function Dc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Gu(o);l.call(u)}}bc(e,o,t,s)}else o=CS(n,e,t,s,r);return Gu(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(Jf(e,n|1),Pt(e,Fe()),!(fe&6)&&(Xi=Fe()+500,os()))}break;case 13:Ls(function(){var r=nr(t,1);if(r!==null){var s=wt();pn(r,t,1,s)}}),bp(t,1)}};Xf=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=wt();pn(e,t,134217728,n)}bp(t,134217728)}};i0=function(t){if(t.tag===13){var e=qr(t),n=nr(t,e);if(n!==null){var r=wt();pn(n,t,e,r)}bp(t,e)}};o0=function(){return _e};a0=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};kh=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Tc(r);if(!s)throw Error(B(90));jv(r),Eh(r,s)}}}break;case"textarea":Uv(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};Gv=Sp;Kv=Ls;var kS={usingClientEntryPoint:!1,Events:[tl,xi,Tc,Wv,Hv,Sp]},Qo={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RS={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jv(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||AS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{vc=Hl.inject(RS),Pn=Hl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(B(200));return SS(t,e,null,n)};Wt.createRoot=function(t,e){if(!Np(t))throw Error(B(299));var n=!1,r="",s=Rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,r,s),t[tr]=e.current,Va(t.nodeType===8?t.parentNode:t),new Pp(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Jv(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Ls(t)};Wt.hydrate=function(t,e,n){if(!Nc(e))throw Error(B(200));return Dc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Rw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kw(e,null,t,1,n??null,s,!1,i,o),t[tr]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Pc(e)};Wt.render=function(t,e,n){if(!Nc(e))throw Error(B(200));return Dc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(B(40));return t._reactRootContainer?(Ls(function(){Dc(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Wt.unstable_batchedUpdates=Sp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Dc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bw)}catch(t){console.error(t)}}bw(),bv.exports=Wt;var Pw=bv.exports,Iy=Pw;ph.createRoot=Iy.createRoot,ph.hydrateRoot=Iy.hydrateRoot;const bS=()=>{};var Ty={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},PS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[f],n[g],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||g==null)throw new NS;const m=i<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),g!==64){const k=c<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(t){const e=Nw(t);return Dw.encodeByteArray(e,!0)},Ku=function(t){return DS(t).replace(/\./g,"")},Vw=function(t){try{return Dw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=()=>VS().__FIREBASE_DEFAULTS__,MS=()=>{if(typeof process>"u"||typeof Ty>"u")return;const t=Ty.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vw(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return bS()||OS()||MS()||LS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=Vc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Mw=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lw=()=>{var t;return(t=Vc())==null?void 0:t.config},jw=t=>{var e;return(e=Vc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ku(JSON.stringify(n)),Ku(JSON.stringify(o)),""].join(".")}const va={};function FS(){const t={prod:[],emulator:[]};for(const e of Object.keys(va))va[e]?t.emulator.push(e):t.prod.push(e);return t}function US(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xy=!1;function Vp(t,e){if(typeof window>"u"||typeof document>"u"||!Ks(window.location.host)||va[t]===e||va[t]||xy)return;va[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=FS().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{xy=!0,o()},m}function f(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=US(r),S=n("text"),k=document.getElementById(S)||document.createElement("span"),b=n("learnmore"),D=document.getElementById(b)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(D,b);const V=c();u(v,x),A.append(v,k,D,V),document.body.appendChild(A)}i?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function BS(){var e;const t=(e=Vc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $S(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WS(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HS(){return!BS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zw(){try{return typeof indexedDB=="object"}catch{return!1}}function Bw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function GS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KS,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new sn(s,l,r)}}function QS(t,e){return t.replace(YS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YS=/\{\$([^}]+)}/g;function JS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sy(i)&&Sy(o)){if(!jn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XS(t,e){const n=new ZS(t,e);return n.subscribe.bind(n)}class ZS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yd),s.error===void 0&&(s.error=Yd),s.complete===void 0&&(s.complete=Yd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1e3,nA=2,rA=4*60*60*1e3,sA=.5;function Ay(t,e=tA,n=nA){const r=e*Math.pow(n,t),s=Math.round(sA*r*(Math.random()-.5)*2);return Math.min(rA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aA(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oA(t){return t===Ts?void 0:t}function aA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const uA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},cA=ue.INFO,dA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},hA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=hA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const fA=(t,e)=>e.some(n=>t instanceof n);let Cy,ky;function pA(){return Cy||(Cy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mA(){return ky||(ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $w=new WeakMap,lf=new WeakMap,qw=new WeakMap,Jd=new WeakMap,Op=new WeakMap;function gA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$w.set(n,t)}).catch(()=>{}),Op.set(e,t),e}function yA(t){if(lf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lf.set(t,e)}let uf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _A(t){uf=t(uf)}function vA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),Hr(r)}:mA().includes(t)?function(...e){return t.apply(Xd(this),e),Hr($w.get(this))}:function(...e){return Hr(t.apply(Xd(this),e))}}function wA(t){return typeof t=="function"?vA(t):(t instanceof IDBTransaction&&yA(t),fA(t,pA())?new Proxy(t,uf):t)}function Hr(t){if(t instanceof IDBRequest)return gA(t);if(Jd.has(t))return Jd.get(t);const e=wA(t);return e!==t&&(Jd.set(t,e),Op.set(e,t)),e}const Xd=t=>Op.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const EA=["get","getKey","getAll","getAllKeys","count"],IA=["put","add","delete","clear"],Zd=new Map;function Ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zd.get(e))return Zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||EA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Zd.set(e,i),i}_A(t=>({...t,get:(e,n,r)=>Ry(e,n)||t.get(e,n,r),has:(e,n)=>!!Ry(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",by="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Oc("@firebase/app"),SA="@firebase/app-compat",AA="@firebase/analytics-compat",CA="@firebase/analytics",kA="@firebase/app-check-compat",RA="@firebase/app-check",bA="@firebase/auth",PA="@firebase/auth-compat",NA="@firebase/database",DA="@firebase/data-connect",VA="@firebase/database-compat",OA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",jA="@firebase/installations-compat",FA="@firebase/messaging",UA="@firebase/messaging-compat",zA="@firebase/performance",BA="@firebase/performance-compat",$A="@firebase/remote-config",qA="@firebase/remote-config-compat",WA="@firebase/storage",HA="@firebase/storage-compat",GA="@firebase/firestore",KA="@firebase/ai",QA="@firebase/firestore-compat",YA="firebase",JA="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="[DEFAULT]",XA={[cf]:"fire-core",[SA]:"fire-core-compat",[CA]:"fire-analytics",[AA]:"fire-analytics-compat",[RA]:"fire-app-check",[kA]:"fire-app-check-compat",[bA]:"fire-auth",[PA]:"fire-auth-compat",[NA]:"fire-rtdb",[DA]:"fire-data-connect",[VA]:"fire-rtdb-compat",[OA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[jA]:"fire-iid-compat",[FA]:"fire-fcm",[UA]:"fire-fcm-compat",[zA]:"fire-perf",[BA]:"fire-perf-compat",[$A]:"fire-rc",[qA]:"fire-rc-compat",[WA]:"fire-gcs",[HA]:"fire-gcs-compat",[GA]:"fire-fst",[QA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[YA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,ZA=new Map,hf=new Map;function Py(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(hf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,t);for(const n of Qu.values())Py(n,t);for(const n of ZA.values())Py(n,t);return!0}function as(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Qs("app","Firebase",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=JA;function Hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:df,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=Lw()),!n)throw Gr.create("no-options");const i=Qu.get(s);if(i){if(jn(n,i.options)&&jn(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new lA(s);for(const u of hf.values())o.addComponent(u);const l=new tC(n,r,o);return Qu.set(s,l),l}function Mc(t=df){const e=Qu.get(t);if(!e&&t===df&&Lw())return Hw();if(!e)throw Gr.create("no-app",{appName:t});return e}function Nt(t,e,n){let r=XA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(o.join(" "));return}yn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",rC=1,$a="firebase-heartbeat-store";let eh=null;function Gw(){return eh||(eh=Ww(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),eh}async function sC(t){try{const n=(await Gw()).transaction($a),r=await n.objectStore($a).get(Kw(t));return await n.done,r}catch(e){if(e instanceof sn)sr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Ny(t,e){try{const r=(await Gw()).transaction($a,"readwrite");await r.objectStore($a).put(e,Kw(t)),await r.done}catch(n){if(n instanceof sn)sr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function Kw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=1024,oC=30;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>oC){const o=cC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dy(),{heartbeatsToSend:r,unsentEntries:s}=lC(this._heartbeatsCache.heartbeats),i=Ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function Dy(){return new Date().toISOString().substring(0,10)}function lC(t,e=iC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zw()?Bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vy(t){return Ku(JSON.stringify({version:2,heartbeats:t})).length}function cC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){yn(new rn("platform-logger",e=>new TA(e),"PRIVATE")),yn(new rn("heartbeat",e=>new aC(e),"PRIVATE")),Nt(cf,by,t),Nt(cf,by,"esm2020"),Nt("fire-js","")}dC("");function Qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=Qw,Yw=new Qs("auth","Firebase",Qw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Oc("@firebase/auth");function fC(t,...e){Yu.logLevel<=ue.WARN&&Yu.warn(`Auth (${Ys}): ${t}`,...e)}function fu(t,...e){Yu.logLevel<=ue.ERROR&&Yu.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw Mp(t,...e)}function Dn(t,...e){return Mp(t,...e)}function Jw(t,e,n){const r={...hC(),[e]:n};return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return Jw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yw.create(t,...e)}function ee(t,e,...n){if(!t)throw Mp(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fu(e),new Error(e)}function ir(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pC(){return Oy()==="http:"||Oy()==="https:"}function Oy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||Uw()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=zS()||qS()}get(){return mC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vC=new sl(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dr(t,e,n,r,s={}){return Zw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=rl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return $S()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(c.credentials="include"),Xw.fetch()(await eE(t,t.config.apiHost,n,l),c)})}async function Zw(t,e,n){t._canInitEmulator=!1;const r={...yC,...e};try{const s=new EC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Gl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jw(t,f,c);_n(t,f)}}catch(s){if(s instanceof sn)throw s;_n(t,"network-request-failed",{message:String(s)})}}async function il(t,e,n,r,s={}){const i=await dr(t,e,n,r,s);return"mfaPendingCredential"in i&&_n(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function eE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Lp(t.config,s):`${t.config.apiScheme}://${s}`;return _C.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function wC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),vC.get())})}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}function My(t){return t!==void 0&&t.enterprise!==void 0}class IC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TC(t,e){return dr(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function Ju(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SC(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=jp(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wa(th(s.auth_time)),issuedAtTime:wa(th(s.iat)),expirationTime:wa(th(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function th(t){return Number(t)*1e3}function jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vw(n);return s?JSON.parse(s):(fu("Failed to decode base64 JWT payload"),null)}catch(s){return fu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ly(t){const e=jp(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&AC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){var g;const e=t.auth,n=await t.getIdToken(),r=await qa(t,Ju(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?tE(s.providerUserInfo):[],o=RC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function kC(t){const e=be(t);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e){const n=await Zw(t,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await eE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(u.credentials="include"),Xw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PC(t,e){return dr(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Ly(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ji;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new CC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qa(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SC(this,e)}reload(){return kC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await qa(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:S,providerData:k,stsTokenManager:b}=n;ee(g&&b,e,"internal-error");const D=ji.fromJSON(this.name,b);ee(typeof g=="string",e,"internal-error"),xr(r,e.name),xr(s,e.name),ee(typeof m=="boolean",e,"internal-error"),ee(typeof S=="boolean",e,"internal-error"),xr(i,e.name),xr(o,e.name),xr(l,e.name),xr(u,e.name),xr(c,e.name),xr(f,e.name);const x=new dn({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return k&&Array.isArray(k)&&(x.providerData=k.map(v=>({...v}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new ji;s.updateFromServerResponse(n);const i=new dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ji;l.updateFromIdToken(r);const u=new dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;function Yn(t){ir(t instanceof Function,"Expected a class definition");let e=jy.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nE.type="NONE";const Fy=nE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pu(this.userKey,s.apiKey,i),this.fullPersistenceKey=pu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ju(this.auth,{idToken:e}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(Yn(Fy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Yn(Fy);const o=pu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let g;if(typeof f=="string"){const m=await Ju(e,{idToken:f}).catch(()=>{});if(!m)break;g=await dn._fromGetAccountInfoResponse(e,m,f)}else g=dn._fromJSON(e,f);c!==i&&(l=g),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Fi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Fi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lE(e))return"Blackberry";if(uE(e))return"Webos";if(sE(e))return"Safari";if((e.includes("chrome/")||iE(e))&&!e.includes("edge/"))return"Chrome";if(aE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rE(t=yt()){return/firefox\//i.test(t)}function sE(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iE(t=yt()){return/crios\//i.test(t)}function oE(t=yt()){return/iemobile/i.test(t)}function aE(t=yt()){return/android/i.test(t)}function lE(t=yt()){return/blackberry/i.test(t)}function uE(t=yt()){return/webos/i.test(t)}function Fp(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NC(t=yt()){var e;return Fp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function DC(){return WS()&&document.documentMode===10}function cE(t=yt()){return Fp(t)||aE(t)||uE(t)||lE(t)||/windows phone/i.test(t)||oE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e=[]){let n;switch(t){case"Browser":n=Uy(yt());break;case"Worker":n=`${Uy(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e={}){return dr(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=6;class LC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zy(this),this.idTokenSubscription=new zy(this),this.beforeStateQueue=new VC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ju(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Xn(this));const n=e?be(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OC(this),n=new LC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Js(t){return be(t)}class zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FC(t){Lc=t}function hE(t){return Lc.loadJS(t)}function UC(){return Lc.recaptchaEnterpriseScript}function zC(){return Lc.gapiScript}function BC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $C{constructor(){this.enterprise=new qC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class qC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WC="recaptcha-enterprise",fE="NO_RECAPTCHA";class HC{constructor(e){this.type=WC,this.auth=Js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{TC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new IC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;My(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(fE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $C().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&My(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UC();u.length!==0&&(u+=l),hE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function By(t,e,n,r=!1,s=!1){const i=new HC(t);let o;if(s)o=fE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function mf(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await By(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await By(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){const n=as(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jn(i,e??{}))return s;_n(s,"already-initialized")}return n.initialize({options:e})}function KC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QC(t,e,n){const r=Js(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pE(e),{host:o,port:l}=YC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(jn(c,r.config.emulator)&&jn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ks(o)?(Dp(`${i}//${o}${u}`),Vp("Auth",!0)):JC()}function pE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YC(t){const e=pE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$y(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$y(o)}}}function $y(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function XC(t,e){return dr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return il(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}async function ek(t,e){return dr(t,"POST","/v1/accounts:sendOobCode",cr(t,e))}async function tk(t,e){return ek(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function rk(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Up{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(e,n,"signInWithPassword",ZC);case"emailLink":return nk(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mf(e,r,"signUpPassword",XC);case"emailLink":return rk(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return il(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="http://localhost";class js extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new js(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:sk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ok(t){const e=sa(ia(t)).link,n=e?sa(ia(e)).deep_link_id:null,r=sa(ia(t)).deep_link_id;return(r?sa(ia(r)).link:null)||r||n||e||t}class zp{constructor(e){const n=sa(ia(e)),r=n.apiKey??null,s=n.oobCode??null,i=ik(n.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ok(e);try{return new zp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zp.parseLink(n);return ee(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends mE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ol{constructor(){super("facebook.com")}static credential(e){return js._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return js._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ol{constructor(){super("github.com")}static credential(e){return js._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends ol{constructor(){super("twitter.com")}static credential(e,n){return js._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return il(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),o=qy(r);return new Fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qy(r);return new Fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends sn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zu(e,n,r,s)}}function gE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,i,e,r):i})}async function lk(t,e,n=!1){const r=await qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await qa(t,gE(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=jp(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),Fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e,n=!1){if(Ft(t.app))return Promise.reject(Xn(t));const r="signIn",s=await gE(t,r,e),i=await Fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ck(t,e){return yE(Js(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t){const e=Js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dk(t,e,n){if(Ft(t.app))return Promise.reject(Xn(t));const r=Js(t),o=await mf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ak).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_E(t),u}),l=await Fs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hk(t,e,n){return Ft(t.app)?Promise.reject(Xn(t)):ck(be(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_E(t),r})}async function fk(t,e){const n=be(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await tk(n.auth,s);i!==t.email&&await t.reload()}function pk(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function mk(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function gk(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function yk(t){return be(t).signOut()}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=1e3,vk=10;class wE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const wk=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EE.type="SESSION";const IE=EE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await Ek(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Bp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Tk(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ak(){return TE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebaseLocalStorageDb",Ck=1,tc="firebaseLocalStorage",SE="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function kk(){const t=indexedDB.deleteDatabase(xE);return new al(t).toPromise()}function gf(){const t=indexedDB.open(xE,Ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:SE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await kk(),e(await gf()))})})}async function Wy(t,e,n){const r=Fc(t,!0).put({[SE]:e,value:n});return new al(r).toPromise()}async function Rk(t,e){const n=Fc(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function Hy(t,e){const n=Fc(t,!0).delete(e);return new al(n).toPromise()}const bk=800,Pk=3;class AE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(Ak()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new Ik(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gf();return await Wy(e,ec,"1"),await Hy(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fc(s,!1).getAll();return new al(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AE.type="LOCAL";const Nk=AE;new sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e){return e?Yn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vk(t){return yE(t.auth,new $p(t),t.bypassAuthState)}function Ok(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),uk(n,new $p(t),t.bypassAuthState)}async function Mk(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),lk(n,new $p(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return Mk;case"reauthViaPopup":case"reauthViaRedirect":return Ok;default:_n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new sl(2e3,1e4);class Pi extends CE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lk.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="pendingRedirect",mu=new Map;class Fk extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const r=await Uk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uk(t,e){const n=$k(e),r=Bk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zk(t,e){mu.set(t._key(),e)}function Bk(t){return Yn(t._redirectPersistence)}function $k(t){return pu(jk,t.config.apiKey,t.name)}async function qk(t,e,n=!1){if(Ft(t.app))return Promise.reject(Xn(t));const r=Js(t),s=Dk(r,e),o=await new Fk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=10*60*1e3;class Hk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gy(e))}saveEventToCache(e){this.cachedEventUids.add(Gy(e)),this.lastProcessedEventTime=Date.now()}}function Gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yk=/^https?/;async function Jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kk(t);for(const n of e)try{if(Xk(n))return}catch{}_n(t,"unauthorized-domain")}function Xk(t){const e=ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yk.test(n))return!1;if(Qk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new sl(3e4,6e4);function Ky(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eR(t){return new Promise((e,n)=>{var s,i,o;function r(){Ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ky(),n(Dn(t,"network-request-failed"))},timeout:Zk.get()})}if((i=(s=Vn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Vn().gapi)!=null&&o.load)r();else{const l=BC("iframefcb");return Vn()[l]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},hE(`${zC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw gu=null,e})}let gu=null;function tR(t){return gu=gu||eR(t),gu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new sl(5e3,15e3),rR="__/auth/iframe",sR="emulator/auth/iframe",iR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lp(e,sR):`https://${t.config.authDomain}/${rR}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=oR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${rl(r).slice(1)}`}async function lR(t){const e=await tR(t),n=Vn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:aR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=Vn().setTimeout(()=>{i(o)},nR.get());function u(){Vn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,dR=600,hR="_blank",fR="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pR(t,e,n,r=cR,s=dR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...uR,width:r.toString(),height:s.toString(),top:i,left:o},c=yt().toLowerCase();n&&(l=iE(c)?hR:n),rE(c)&&(e=e||fR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,k])=>`${m}${S}=${k},`,"");if(NC(c)&&l!=="_self")return mR(e||"",l),new Qy(null);const g=window.open(e||"",l,f);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new Qy(g)}function mR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="__/auth/handler",yR="emulator/auth/handler",_R=encodeURIComponent("fac");async function Yy(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof mE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof ol){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${_R}=${encodeURIComponent(u)}`:"";return`${vR(t)}?${rl(l).slice(1)}${c}`}function vR({config:t}){return t.emulator?Lp(t,yR):`https://${t.authDomain}/${gR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="webStorageSupport";class wR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IE,this._completeRedirectFn=qk,this._overrideRedirectResult=zk}async _openPopup(e,n,r,s){var o;ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Yy(e,n,r,ff(),s);return pR(e,i,Bp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yy(e,n,r,ff(),s);return Tk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lR(e),r=new Hk(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nh,{type:nh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[nh];i!==void 0&&n(!!i),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cE()||sE()||Fp()}}const ER=wR;var Jy="@firebase/auth",Xy="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xR(t){yn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dE(t)},c=new jC(r,s,i,u);return KC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new rn("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(r=>new IR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Jy,Xy,TR(t)),Nt(Jy,Xy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=5*60,AR=jw("authIdTokenMaxAge")||SR;let Zy=null;const CR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const s=n==null?void 0:n.token;Zy!==s&&(Zy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kR(t=Mc()){const e=as(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GC(t,{popupRedirectResolver:ER,persistence:[Nk,wk,IE]}),r=jw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CR(i.toString());mk(n,o,()=>o(n.currentUser)),pk(n,l=>o(l))}}const s=Ow("auth");return s&&QC(n,`http://${s}`),n}function RR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}FC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xR("Browser");var e_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,RE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.F=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(C,R,I){for(var w=Array(arguments.length-2),H=2;H<arguments.length;H++)w[H-2]=arguments[H];return y.prototype[R].apply(C,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,T){T||(T=0);const C=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)C[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;R<16;++R)C[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],R=E.g[2];let I=E.g[3],w;w=y+(I^T&(R^I))+C[0]+3614090360&4294967295,y=T+(w<<7&4294967295|w>>>25),w=I+(R^y&(T^R))+C[1]+3905402710&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(T^I&(y^T))+C[2]+606105819&4294967295,R=I+(w<<17&4294967295|w>>>15),w=T+(y^R&(I^y))+C[3]+3250441966&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(I^T&(R^I))+C[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=I+(R^y&(T^R))+C[5]+1200080426&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(T^I&(y^T))+C[6]+2821735955&4294967295,R=I+(w<<17&4294967295|w>>>15),w=T+(y^R&(I^y))+C[7]+4249261313&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(I^T&(R^I))+C[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=I+(R^y&(T^R))+C[9]+2336552879&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(T^I&(y^T))+C[10]+4294925233&4294967295,R=I+(w<<17&4294967295|w>>>15),w=T+(y^R&(I^y))+C[11]+2304563134&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(I^T&(R^I))+C[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=I+(R^y&(T^R))+C[13]+4254626195&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(T^I&(y^T))+C[14]+2792965006&4294967295,R=I+(w<<17&4294967295|w>>>15),w=T+(y^R&(I^y))+C[15]+1236535329&4294967295,T=R+(w<<22&4294967295|w>>>10),w=y+(R^I&(T^R))+C[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=I+(T^R&(y^T))+C[6]+3225465664&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(I^y))+C[11]+643717713&4294967295,R=I+(w<<14&4294967295|w>>>18),w=T+(I^y&(R^I))+C[0]+3921069994&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(T^R))+C[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=I+(T^R&(y^T))+C[10]+38016083&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(I^y))+C[15]+3634488961&4294967295,R=I+(w<<14&4294967295|w>>>18),w=T+(I^y&(R^I))+C[4]+3889429448&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(T^R))+C[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=I+(T^R&(y^T))+C[14]+3275163606&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(I^y))+C[3]+4107603335&4294967295,R=I+(w<<14&4294967295|w>>>18),w=T+(I^y&(R^I))+C[8]+1163531501&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(T^R))+C[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=I+(T^R&(y^T))+C[2]+4243563512&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^T&(I^y))+C[7]+1735328473&4294967295,R=I+(w<<14&4294967295|w>>>18),w=T+(I^y&(R^I))+C[12]+2368359562&4294967295,T=R+(w<<20&4294967295|w>>>12),w=y+(T^R^I)+C[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=I+(y^T^R)+C[8]+2272392833&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^T)+C[11]+1839030562&4294967295,R=I+(w<<16&4294967295|w>>>16),w=T+(R^I^y)+C[14]+4259657740&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^I)+C[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=I+(y^T^R)+C[4]+1272893353&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^T)+C[7]+4139469664&4294967295,R=I+(w<<16&4294967295|w>>>16),w=T+(R^I^y)+C[10]+3200236656&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^I)+C[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=I+(y^T^R)+C[0]+3936430074&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^T)+C[3]+3572445317&4294967295,R=I+(w<<16&4294967295|w>>>16),w=T+(R^I^y)+C[6]+76029189&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(T^R^I)+C[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=I+(y^T^R)+C[12]+3873151461&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^T)+C[15]+530742520&4294967295,R=I+(w<<16&4294967295|w>>>16),w=T+(R^I^y)+C[2]+3299628645&4294967295,T=R+(w<<23&4294967295|w>>>9),w=y+(R^(T|~I))+C[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=I+(T^(y|~R))+C[7]+1126891415&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~T))+C[14]+2878612391&4294967295,R=I+(w<<15&4294967295|w>>>17),w=T+(I^(R|~y))+C[5]+4237533241&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~I))+C[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=I+(T^(y|~R))+C[3]+2399980690&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~T))+C[10]+4293915773&4294967295,R=I+(w<<15&4294967295|w>>>17),w=T+(I^(R|~y))+C[1]+2240044497&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~I))+C[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=I+(T^(y|~R))+C[15]+4264355552&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~T))+C[6]+2734768916&4294967295,R=I+(w<<15&4294967295|w>>>17),w=T+(I^(R|~y))+C[13]+1309151649&4294967295,T=R+(w<<21&4294967295|w>>>11),w=y+(R^(T|~I))+C[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=I+(T^(y|~R))+C[11]+3174756917&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~T))+C[2]+718787259&4294967295,R=I+(w<<15&4294967295|w>>>17),w=T+(I^(R|~y))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const T=y-this.blockSize,C=this.C;let R=this.h,I=0;for(;I<y;){if(R==0)for(;I<=T;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<y;)if(C[R++]=E.charCodeAt(I++),R==this.blockSize){s(this,C),R=0;break}}else for(;I<y;)if(C[R++]=E[I++],R==this.blockSize){s(this,C),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,T=0;T<4;++T)for(let C=0;C<32;C+=8)E[y++]=this.g[T]>>>C&255;return E};function i(E,y){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;const T=[];let C=!0;for(let R=E.length-1;R>=0;R--){const I=E[R]|0;C&&I==y||(T[R]=I,C=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return D(c(-E));const y=[];let T=1;for(let C=0;E>=T;C++)y[C]=E/T|0,T*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let C=g;for(let I=0;I<E.length;I+=8){var R=Math.min(8,E.length-I);const w=parseInt(E.substring(I,I+R),y);R<8?(R=c(Math.pow(y,R)),C=C.j(R).add(c(w))):(C=C.j(T),C=C.add(c(w)))}return C}var g=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-D(this).m();let E=0,y=1;for(let T=0;T<this.g.length;T++){const C=this.i(T);E+=(C>=0?C:4294967296+C)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(b(this))return"-"+D(this).toString(E);const y=c(Math.pow(E,6));var T=this;let C="";for(;;){const R=V(T,y).g;T=x(T,R.j(y));let I=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=R,k(T))return I+C;for(;I.length<6;)I="0"+I;C=I+C}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function b(E){return E.h==-1}t.l=function(E){return E=x(this,E),b(E)?-1:k(E)?0:1};function D(E){const y=E.g.length,T=[];for(let C=0;C<y;C++)T[C]=~E.g[C];return new o(T,~E.h).add(m)}t.abs=function(){return b(this)?D(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),T=[];let C=0;for(let R=0;R<=y;R++){let I=C+(this.i(R)&65535)+(E.i(R)&65535),w=(I>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);C=w>>>16,I&=65535,w&=65535,T[R]=w<<16|I}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(E,y){return E.add(D(y))}t.j=function(E){if(k(this)||k(E))return g;if(b(this))return b(E)?D(this).j(D(E)):D(D(this).j(E));if(b(E))return D(this.j(D(E)));if(this.l(S)<0&&E.l(S)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,T=[];for(var C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(let R=0;R<E.g.length;R++){const I=this.i(C)>>>16,w=this.i(C)&65535,H=E.i(R)>>>16,U=E.i(R)&65535;T[2*C+2*R]+=w*U,v(T,2*C+2*R),T[2*C+2*R+1]+=I*U,v(T,2*C+2*R+1),T[2*C+2*R+1]+=w*H,v(T,2*C+2*R+1),T[2*C+2*R+2]+=I*H,v(T,2*C+2*R+2)}for(E=0;E<y;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=y;E<2*y;E++)T[E]=0;return new o(T,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function V(E,y){if(k(y))throw Error("division by zero");if(k(E))return new A(g,g);if(b(E))return y=V(D(E),y),new A(D(y.g),D(y.h));if(b(y))return y=V(E,D(y)),new A(D(y.g),y.h);if(E.g.length>30){if(b(E)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,C=y;C.l(E)<=0;)T=O(T),C=O(C);var R=j(T,1),I=j(C,1);for(C=j(C,2),T=j(T,2);!k(C);){var w=I.add(C);w.l(E)<=0&&(R=R.add(T),I=w),C=j(C,1),T=j(T,1)}return y=x(E,R.j(y)),new A(R,y)}for(R=g;E.l(y)>=0;){for(T=Math.max(1,Math.floor(E.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),I=c(T),w=I.j(y);b(w)||w.l(E)>0;)T-=C,I=c(T),w=I.j(y);k(I)&&(I=m),R=R.add(I),E=x(E,w)}return new A(R,E)}t.B=function(E){return V(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)&E.i(C);return new o(T,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)|E.i(C);return new o(T,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)^E.i(C);return new o(T,this.h^E.h)};function O(E){const y=E.g.length+1,T=[];for(let C=0;C<y;C++)T[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(T,E.h)}function j(E,y){const T=y>>5;y%=32;const C=E.g.length-T,R=[];for(let I=0;I<C;I++)R[I]=y>0?E.i(I+T)>>>y|E.i(I+T+1)<<32-y:E.i(I+T);return new o(R,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,RE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Kr=o}).apply(typeof e_<"u"?e_:typeof self<"u"?self:typeof window<"u"?window:{});var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bE,oa,PE,yu,yf,NE,DE,VE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kl=="object"&&Kl];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var h=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in h))break e;h=h[N]}a=a[a.length-1],_=h[a],d=d(_),d!=_&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var h=[],_;for(_ in d)Object.prototype.hasOwnProperty.call(d,_)&&h.push([_,d[_]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,h){return a.call.apply(a.bind,arguments)}function c(a,d,h){return c=u,c.apply(null,arguments)}function f(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var _=h.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function g(a,d){function h(){}h.prototype=d.prototype,a.Z=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(_,N,M){for(var $=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)$[oe-2]=arguments[oe];return d.prototype[N].apply(_,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const d=a.length;if(d>0){const h=Array(d);for(let _=0;_<d;_++)h[_]=a[_];return h}return[]}function k(a,d){for(let _=1;_<arguments.length;_++){const N=arguments[_];var h=typeof N;if(h=h!="object"?h:N?Array.isArray(N)?"array":h:"null",h=="array"||h=="object"&&typeof N.length=="number"){h=a.length||0;const M=N.length||0;a.length=h+M;for(let $=0;$<M;$++)a[h+$]=N[$]}else a.push(N)}}class b{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function x(){var a=E;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class v{constructor(){this.h=this.g=null}add(d,h){const _=A.get();_.set(d,h),this.h?this.h.next=_:this.g=_,this.h=_}}var A=new b(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let O,j=!1,E=new v,y=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(T)}};function T(){for(var a;a=x();){try{a.h.call(a.g)}catch(h){D(h)}var d=A;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}j=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,d),o.removeEventListener("test",h,d)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function H(a,d){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}g(H,R),H.prototype.init=function(a,d){const h=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(Math.random()*1e6|0),K=0;function ge(a,d,h,_,N){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!_,this.ha=N,this.key=++K,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,d,h){for(const _ in a)d.call(h,a[_],_,a)}function X(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function Z(a){const d={};for(const h in a)d[h]=a[h];return d}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vt(a,d){let h,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(h in _)a[h]=_[h];for(let M=0;M<ye.length;M++)h=ye[M],Object.prototype.hasOwnProperty.call(_,h)&&(a[h]=_[h])}}function tt(a){this.src=a,this.g={},this.h=0}tt.prototype.add=function(a,d,h,_,N){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const $=ut(a,d,_,N);return $>-1?(d=a[$],h||(d.fa=!1)):(d=new ge(d,this.src,M,!!_,N),d.fa=h,a.push(d)),d};function Ot(a,d){const h=d.type;if(h in a.g){var _=a.g[h],N=Array.prototype.indexOf.call(_,d,void 0),M;(M=N>=0)&&Array.prototype.splice.call(_,N,1),M&&(z(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function ut(a,d,h,_){for(let N=0;N<a.length;++N){const M=a[N];if(!M.da&&M.listener==d&&M.capture==!!h&&M.ha==_)return N}return-1}var xt="closure_lm_"+(Math.random()*1e6|0),Qe={};function hr(a,d,h,_,N){if(Array.isArray(d)){for(let M=0;M<d.length;M++)hr(a,d[M],h,_,N);return null}return h=Eo(h),a&&a[U]?a.J(d,h,l(_)?!!_.capture:!1,N):Lm(a,d,h,!1,_,N)}function Lm(a,d,h,_,N,M){if(!d)throw Error("Invalid event type");const $=l(N)?!!N.capture:!!N;let oe=wo(a);if(oe||(a[xt]=oe=new tt(a)),h=oe.add(d,h,_,$,M),h.proxy)return h;if(_=fl(),h.proxy=_,_.src=a,_.listener=h,a.addEventListener)I||(N=$),N===void 0&&(N=!1),a.addEventListener(d.toString(),_,N);else if(a.attachEvent)a.attachEvent(ml(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return h}function fl(){function a(h){return d.call(a.src,a.listener,h)}const d=vo;return a}function pl(a,d,h,_,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)pl(a,d[M],h,_,N);else _=l(_)?!!_.capture:!!_,h=Eo(h),a&&a[U]?(a=a.i,M=String(d).toString(),M in a.g&&(d=a.g[M],h=ut(d,h,_,N),h>-1&&(z(d[h]),Array.prototype.splice.call(d,h,1),d.length==0&&(delete a.g[M],a.h--)))):a&&(a=wo(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ut(d,h,_,N)),(h=a>-1?d[a]:null)&&ni(h))}function ni(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[U])Ot(d.i,a);else{var h=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(h,_,a.capture):d.detachEvent?d.detachEvent(ml(h),_):d.addListener&&d.removeListener&&d.removeListener(_),(h=wo(d))?(Ot(h,a),h.h==0&&(h.src=null,d[xt]=null)):z(a)}}}function ml(a){return a in Qe?Qe[a]:Qe[a]="on"+a}function vo(a,d){if(a.da)a=!0;else{d=new H(d,this);const h=a.listener,_=a.ha||a.src;a.fa&&ni(a),a=h.call(_,d)}return a}function wo(a){return a=a[xt],a instanceof tt?a:null}var fr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Eo(a){return typeof a=="function"?a:(a[fr]||(a[fr]=function(d){return a.handleEvent(d)}),a[fr])}function Ue(){C.call(this),this.i=new tt(this),this.M=this,this.G=null}g(Ue,C),Ue.prototype[U]=!0,Ue.prototype.removeEventListener=function(a,d,h,_){pl(this,a,d,h,_)};function Ye(a,d){var h,_=a.G;if(_)for(h=[];_;_=_.G)h.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new R(d,a);else if(d instanceof R)d.target=d.target||a;else{var N=d;d=new R(_,a),Vt(d,N)}N=!0;let M,$;if(h)for($=h.length-1;$>=0;$--)M=d.g=h[$],N=ri(M,_,!0,d)&&N;if(M=d.g=a,N=ri(M,_,!0,d)&&N,N=ri(M,_,!1,d)&&N,h)for($=0;$<h.length;$++)M=d.g=h[$],N=ri(M,_,!1,d)&&N}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const h=a.g[d];for(let _=0;_<h.length;_++)z(h[_]);delete a.g[d],a.h--}}this.G=null},Ue.prototype.J=function(a,d,h,_){return this.i.add(String(a),d,!1,h,_)},Ue.prototype.K=function(a,d,h,_){return this.i.add(String(a),d,!0,h,_)};function ri(a,d,h,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let N=!0;for(let M=0;M<d.length;++M){const $=d[M];if($&&!$.da&&$.capture==h){const oe=$.listener,We=$.ha||$.src;$.fa&&Ot(a.i,$),N=oe.call(We,_)!==!1&&N}}return N&&!_.defaultPrevented}function Io(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function ds(a){a.g=Io(()=>{a.g=null,a.i&&(a.i=!1,ds(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ud extends C{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ds(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(a){C.call(this),this.h=a,this.g={}}g(pr,C);var To=[];function si(a){Y(a.g,function(d,h){this.g.hasOwnProperty(h)&&ni(d)},a),a.g={}}pr.prototype.N=function(){pr.Z.N.call(this),si(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hs=o.JSON.stringify,xo=o.JSON.parse,gl=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function fs(){}function ps(){}var wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ae(){R.call(this,"d")}g(ae,R);function ii(){R.call(this,"c")}g(ii,R);var En={},So=null;function on(){return So=So||new Ue}En.Ia="serverreachability";function Ao(a){R.call(this,En.Ia,a)}g(Ao,R);function mr(a){const d=on();Ye(d,new Ao(d))}En.STAT_EVENT="statevent";function Co(a,d){R.call(this,En.STAT_EVENT,a),this.stat=d}g(Co,R);function nt(a){const d=on();Ye(d,new Co(d,a))}En.Ja="timingevent";function yl(a,d){R.call(this,En.Ja,a),this.size=d}g(yl,R);function ms(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function gs(){this.g=!0}gs.prototype.ua=function(){this.g=!1};function cd(a,d,h,_,N,M){a.info(function(){if(a.g)if(M){var $="",oe=M.split("&");for(let we=0;we<oe.length;we++){var We=oe[we].split("=");if(We.length>1){const Je=We[0];We=We[1];const xn=Je.split("_");$=xn.length>=2&&xn[1]=="type"?$+(Je+"="+We+"&"):$+(Je+"=redacted&")}}}else $=null;else $=M;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+h+`
`+$})}function dd(a,d,h,_,N,M,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+h+`
`+M+" "+$})}function gr(a,d,h,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+fd(a,h)+(_?" "+_:"")})}function hd(a,d){a.info(function(){return"TIMEOUT: "+d})}gs.prototype.info=function(){};function fd(a,d){if(!a.g)return d;if(!d)return null;try{const M=JSON.parse(d);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var h=M[a];if(!(h.length<2)){var _=h[1];if(Array.isArray(_)&&!(_.length<1)){var N=_[0];if(N!="noop"&&N!="stop"&&N!="close")for(let $=1;$<_.length;$++)_[$]=""}}}}return hs(M)}catch{return d}}var oi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ko={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ro;function ai(){}g(ai,fs),ai.prototype.g=function(){return new XMLHttpRequest},Ro=new ai;function P(a){return encodeURIComponent(String(a))}function ie(a){var d=1;a=a.split(":");const h=[];for(;d>0&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function pe(a,d,h,_){this.j=a,this.i=d,this.l=h,this.S=_||1,this.V=new pr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}var Bn={},$n={};function yr(a,d,h){a.M=1,a.A=Il(Tn(d)),a.u=h,a.R=!0,_l(a,null)}function _l(a,d){a.F=Date.now(),li(a),a.B=Tn(a.A);var h=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Hm(h.i,"t",_),a.C=0,h=a.j.L,a.h=new Mt,a.g=cg(a.j,h?d:null,!a.u),a.P>0&&(a.O=new ud(c(a.Y,a,a.g),a.P)),d=a.V,h=a.g,_=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(To[0]=N.toString()),N=To);for(let M=0;M<N.length;M++){const $=hr(h,N[M],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.J?Z(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),mr(),cd(a.i,a.v,a.B,a.l,a.S,a.u)}pe.prototype.ba=function(a){a=a.target;const d=this.O;d&&wr(a)==3?d.j():this.Y(a)},pe.prototype.Y=function(a){try{if(a==this.g)e:{const oe=wr(this.g),We=this.g.ya(),we=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Zm(this.g)))){this.K||oe!=4||We==7||(We==8||we<=0?mr(3):mr(2)),Po(this);var d=this.g.ca();this.X=d;var h=pd(this);if(this.o=d==200,dd(this.i,this.v,this.B,this.l,this.S,oe,d),this.o){if(this.U&&!this.L){t:{if(this.g){var _,N=this.g;if((_=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_)){var M=_;break t}}M=null}if(a=M)gr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ui(this,a);else{this.o=!1,this.m=3,nt(12),In(this),ys(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<h.length;)if(Je=vl(this,h),Je==$n){oe==4&&(this.m=4,nt(14),a=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Bn){this.m=4,nt(15),gr(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else gr(this.i,this.l,Je,null),ui(this,Je);if(bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||h.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)gr(this.i,this.l,h,"[Invalid Chunked Response]"),In(this),ys(this);else if(h.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Id($),$.P=!0,nt(11))}}else gr(this.i,this.l,h,null),ui(this,h);oe==4&&In(this),this.o&&!this.K&&(oe==4?og(this.j,this):(this.o=!1,li(this)))}else n1(this.g),d==400&&h.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),In(this),ys(this)}}}catch{}finally{}};function pd(a){if(!bo(a))return a.g.la();const d=Zm(a.g);if(d==="")return"";let h="";const _=d.length,N=wr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return In(a),ys(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<_;M++)a.h.h=!0,h+=a.h.i.decode(d[M],{stream:!(N&&M==_-1)});return d.length=0,a.h.g+=h,a.C=0,a.h.g}function bo(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function vl(a,d){var h=a.C,_=d.indexOf(`
`,h);return _==-1?$n:(h=Number(d.substring(h,_)),isNaN(h)?Bn:(_+=1,_+h>d.length?$n:(d=d.slice(_,_+h),a.C=_+h,d)))}pe.prototype.cancel=function(){this.K=!0,In(this)};function li(a){a.T=Date.now()+a.H,wl(a,a.H)}function wl(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ms(c(a.aa,a),d)}function Po(a){a.D&&(o.clearTimeout(a.D),a.D=null)}pe.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(hd(this.i,this.B),this.M!=2&&(mr(),nt(17)),In(this),this.m=2,ys(this)):wl(this,this.T-a)};function ys(a){a.j.I==0||a.K||og(a.j,a)}function In(a){Po(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,si(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function ui(a,d){try{var h=a.j;if(h.I!=0&&(h.g==a||md(h.h,a))){if(!a.L&&md(h.h,a)&&h.I==3){try{var _=h.Ba.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Cl(h),Sl(h);else break e;Ed(h),nt(18)}}else h.xa=N[1],0<h.xa-h.K&&N[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ms(c(h.Va,h),6e3));jm(h.h)<=1&&h.ta&&(h.ta=void 0)}else vs(h,11)}else if((a.L||h.g==a)&&Cl(h),!w(d))for(N=h.Ba.g.parse(d),d=0;d<N.length;d++){let we=N[d];const Je=we[0];if(!(Je<=h.K))if(h.K=Je,we=we[1],h.I==2)if(we[0]=="c"){h.M=we[1],h.ba=we[2];const xn=we[3];xn!=null&&(h.ka=xn,h.j.info("VER="+h.ka));const ws=we[4];ws!=null&&(h.za=ws,h.j.info("SVER="+h.za));const Er=we[5];Er!=null&&typeof Er=="number"&&Er>0&&(_=1.5*Er,h.O=_,h.j.info("backChannelRequestTimeoutMs_="+_)),_=h;const Ir=a.g;if(Ir){const Rl=Ir.g?Ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rl){var M=_.h;M.g||Rl.indexOf("spdy")==-1&&Rl.indexOf("quic")==-1&&Rl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(gd(M,M.h),M.h=null))}if(_.G){const Td=Ir.g?Ir.g.getResponseHeader("X-HTTP-Session-Id"):null;Td&&(_.wa=Td,xe(_.J,_.G,Td))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),_=h;var $=a;if(_.na=ug(_,_.L?_.ba:null,_.W),$.L){Fm(_.h,$);var oe=$,We=_.O;We&&(oe.H=We),oe.D&&(Po(oe),li(oe)),_.g=$}else sg(_);h.i.length>0&&Al(h)}else we[0]!="stop"&&we[0]!="close"||vs(h,7);else h.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?vs(h,7):wd(h):we[0]!="noop"&&h.l&&h.l.qa(we),h.A=0)}}mr(4)}catch{}}var El=class{constructor(a,d){this.g=a,this.map=d}};function No(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ci(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jm(a){return a.h?1:a.g?a.g.size:0}function md(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function gd(a,d){a.g?a.g.add(d):a.h=d}function Fm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}No.prototype.cancel=function(){if(this.i=Um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Um(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.G);return d}return S(a.i)}var zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qT(a,d){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const _=a[h].indexOf("=");let N,M=null;_>=0?(N=a[h].substring(0,_),M=a[h].substring(_+1)):N=a[h],d(N,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function _r(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof _r?(this.l=a.l,Do(this,a.j),this.o=a.o,this.g=a.g,Vo(this,a.u),this.h=a.h,yd(this,Gm(a.i)),this.m=a.m):a&&(d=String(a).match(zm))?(this.l=!1,Do(this,d[1]||"",!0),this.o=Oo(d[2]||""),this.g=Oo(d[3]||"",!0),Vo(this,d[4]),this.h=Oo(d[5]||"",!0),yd(this,d[6]||"",!0),this.m=Oo(d[7]||"")):(this.l=!1,this.i=new Lo(null,this.l))}_r.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Mo(d,Bm,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Mo(d,Bm,!0),"@"),a.push(P(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Mo(h,h.charAt(0)=="/"?GT:HT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Mo(h,QT)),a.join("")},_r.prototype.resolve=function(a){const d=Tn(this);let h=!!a.j;h?Do(d,a.j):h=!!a.o,h?d.o=a.o:h=!!a.g,h?d.g=a.g:h=a.u!=null;var _=a.h;if(h)Vo(d,a.u);else if(h=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var N=d.h.lastIndexOf("/");N!=-1&&(_=d.h.slice(0,N+1)+_)}if(N=_,N==".."||N==".")_="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){_=N.lastIndexOf("/",0)==0,N=N.split("/");const M=[];for(let $=0;$<N.length;){const oe=N[$++];oe=="."?_&&$==N.length&&M.push(""):oe==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),_&&$==N.length&&M.push("")):(M.push(oe),_=!0)}_=M.join("/")}else _=N}return h?d.h=_:h=a.i.toString()!=="",h?yd(d,Gm(a.i)):h=!!a.m,h&&(d.m=a.m),d};function Tn(a){return new _r(a)}function Do(a,d,h){a.j=h?Oo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Vo(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function yd(a,d,h){d instanceof Lo?(a.i=d,YT(a.i,a.l)):(h||(d=Mo(d,KT)),a.i=new Lo(d,a.l))}function xe(a,d,h){a.i.set(d,h)}function Il(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Oo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mo(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,WT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function WT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bm=/[#\/\?@]/g,HT=/[#\?:]/g,GT=/[#\?]/g,KT=/[#\?@]/g,QT=/#/g;function Lo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function _s(a){a.g||(a.g=new Map,a.h=0,a.i&&qT(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=Lo.prototype,t.add=function(a,d){_s(this),this.i=null,a=di(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function $m(a,d){_s(a),d=di(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function qm(a,d){return _s(a),d=di(a,d),a.g.has(d)}t.forEach=function(a,d){_s(this),this.g.forEach(function(h,_){h.forEach(function(N){a.call(d,N,_,this)},this)},this)};function Wm(a,d){_s(a);let h=[];if(typeof d=="string")qm(a,d)&&(h=h.concat(a.g.get(di(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)h=h.concat(a[d]);return h}t.set=function(a,d){return _s(this),this.i=null,a=di(this,a),qm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Wm(this,a),a.length>0?String(a[0]):d):d};function Hm(a,d,h){$m(a,d),h.length>0&&(a.i=null,a.g.set(di(a,d),S(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let _=0;_<d.length;_++){var h=d[_];const N=P(h);h=Wm(this,h);for(let M=0;M<h.length;M++){let $=N;h[M]!==""&&($+="="+P(h[M])),a.push($)}}return this.i=a.join("&")};function Gm(a){const d=new Lo;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function di(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function YT(a,d){d&&!a.j&&(_s(a),a.i=null,a.g.forEach(function(h,_){const N=_.toLowerCase();_!=N&&($m(this,_),Hm(this,N,h))},a)),a.j=d}function JT(a,d){const h=new gs;if(o.Image){const _=new Image;_.onload=f(vr,h,"TestLoadImage: loaded",!0,d,_),_.onerror=f(vr,h,"TestLoadImage: error",!1,d,_),_.onabort=f(vr,h,"TestLoadImage: abort",!1,d,_),_.ontimeout=f(vr,h,"TestLoadImage: timeout",!1,d,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function XT(a,d){const h=new gs,_=new AbortController,N=setTimeout(()=>{_.abort(),vr(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(M=>{clearTimeout(N),M.ok?vr(h,"TestPingServer: ok",!0,d):vr(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),vr(h,"TestPingServer: error",!1,d)})}function vr(a,d,h,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(h)}catch{}}function ZT(){this.g=new gl}function _d(a){this.i=a.Sb||null,this.h=a.ab||!1}g(_d,fs),_d.prototype.g=function(){return new Tl(this.i,this.h)};function Tl(a,d){Ue.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Tl,Ue),t=Tl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Fo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,jo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Km(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Km(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?jo(this):Fo(this),this.readyState==3&&Km(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,jo(this))},t.Na=function(a){this.g&&(this.response=a,jo(this))},t.ga=function(){this.g&&jo(this)};function jo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Fo(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Fo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qm(a){let d="";return Y(a,function(h,_){d+=_,d+=":",d+=h,d+=`\r
`}),d}function vd(a,d,h){e:{for(_ in h){var _=!1;break e}_=!0}_||(h=Qm(h),typeof a=="string"?h!=null&&P(h):xe(a,d,h))}function Oe(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Oe,Ue);var e1=/^https?$/i,t1=["POST","PUT"];t=Oe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,h,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ro.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Ym(this,M);return}if(a=h||"",h=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)h.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())h.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(h.keys()).find(M=>M.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(t1,d,void 0)>=0)||_||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of h)this.g.setRequestHeader(M,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){Ym(this,M)}};function Ym(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Jm(a),xl(a)}function Jm(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ye(this,"complete"),Ye(this,"abort"),xl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xl(this,!0)),Oe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Xm(this):this.Xa())},t.Xa=function(){Xm(this)};function Xm(a){if(a.h&&typeof i<"u"){if(a.v&&wr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ye(a,"readystatechange"),wr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var _;if(_=M===0){let $=String(a.D).match(zm)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),_=!e1.test($?$.toLowerCase():"")}h=_}if(h)Ye(a,"complete"),Ye(a,"success");else{a.o=6;try{var N=wr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Jm(a)}}finally{xl(a)}}}}function xl(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,d||Ye(a,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function wr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return wr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),xo(d)}};function Zm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function n1(a){const d={};a=(a.g&&wr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var h=ie(a[_]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const M=d[N]||[];d[N]=M,M.push(h)}X(d,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Uo(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function eg(a){this.za=0,this.i=[],this.j=new gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Uo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Uo("baseRetryDelayMs",5e3,a),this.Za=Uo("retryDelaySeedMs",1e4,a),this.Ta=Uo("forwardChannelMaxRetries",2,a),this.va=Uo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new No(a&&a.concurrentRequestLimit),this.Ba=new ZT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=eg.prototype,t.ka=8,t.I=1,t.connect=function(a,d,h,_){nt(0),this.W=a,this.H=d||{},h&&_!==void 0&&(this.H.OSID=h,this.H.OAID=_),this.F=this.X,this.J=ug(this,null,this.W),Al(this)};function wd(a){if(tg(a),a.I==3){var d=a.V++,h=Tn(a.J);if(xe(h,"SID",a.M),xe(h,"RID",d),xe(h,"TYPE","terminate"),zo(a,h),d=new pe(a,a.j,d),d.M=2,d.A=Il(Tn(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=d.A,h=!0),h||(d.g=cg(d.j,null),d.g.ea(d.A)),d.F=Date.now(),li(d)}lg(a)}function Sl(a){a.g&&(Id(a),a.g.cancel(),a.g=null)}function tg(a){Sl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Cl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Al(a){if(!ci(a.h)&&!a.m){a.m=!0;var d=a.Ea;O||y(),j||(O(),j=!0),E.add(d,a),a.D=0}}function r1(a,d){return jm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ms(c(a.Ea,a,d),ag(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new pe(this,this.j,a);let M=this.o;if(this.U&&(M?(M=Z(M),Vt(M,this.U)):M=this.U),this.u!==null||this.R||(N.J=M,M=null),this.S)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var _=this.i[h];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,d>4096){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=rg(this,N,d),h=Tn(this.J),xe(h,"RID",a),xe(h,"CVER",22),this.G&&xe(h,"X-HTTP-Session-Id",this.G),zo(this,h),M&&(this.R?d="headers="+P(Qm(M))+"&"+d:this.u&&vd(h,this.u,M)),gd(this.h,N),this.Ra&&xe(h,"TYPE","init"),this.S?(xe(h,"$req",d),xe(h,"SID","null"),N.U=!0,yr(N,h,null)):yr(N,h,d),this.I=2}}else this.I==3&&(a?ng(this,a):this.i.length==0||ci(this.h)||ng(this))};function ng(a,d){var h;d?h=d.l:h=a.V++;const _=Tn(a.J);xe(_,"SID",a.M),xe(_,"RID",h),xe(_,"AID",a.K),zo(a,_),a.u&&a.o&&vd(_,a.u,a.o),h=new pe(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),d&&(a.i=d.G.concat(a.i)),d=rg(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),gd(a.h,h),yr(h,_,d)}function zo(a,d){a.H&&Y(a.H,function(h,_){xe(d,_,h)}),a.l&&Y({},function(h,_){xe(d,_,h)})}function rg(a,d,h){h=Math.min(a.i.length,h);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let oe=-1;for(;;){const We=["count="+h];oe==-1?h>0?(oe=N[0].g,We.push("ofs="+oe)):oe=0:We.push("ofs="+oe);let we=!0;for(let Je=0;Je<h;Je++){var M=N[Je].g;const xn=N[Je].map;if(M-=oe,M<0)oe=Math.max(0,N[Je].g-100),we=!1;else try{M="req"+M+"_"||"";try{var $=xn instanceof Map?xn:Object.entries(xn);for(const[ws,Er]of $){let Ir=Er;l(Er)&&(Ir=hs(Er)),We.push(M+ws+"="+encodeURIComponent(Ir))}}catch(ws){throw We.push(M+"type="+encodeURIComponent("_badmap")),ws}}catch{_&&_(xn)}}if(we){$=We.join("&");break e}}$=void 0}return a=a.i.splice(0,h),d.G=a,$}function sg(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;O||y(),j||(O(),j=!0),E.add(d,a),a.A=0}}function Ed(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ms(c(a.Da,a),ag(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ig(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ms(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Sl(this),ig(this))};function Id(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ig(a){a.g=new pe(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Tn(a.na);xe(d,"RID","rpc"),xe(d,"SID",a.M),xe(d,"AID",a.K),xe(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(d,"TO",a.ia),xe(d,"TYPE","xmlhttp"),zo(a,d),a.u&&a.o&&vd(d,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=Il(Tn(d)),h.u=null,h.R=!0,_l(h,a)}t.Va=function(){this.C!=null&&(this.C=null,Sl(this),Ed(this),nt(19))};function Cl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function og(a,d){var h=null;if(a.g==d){Cl(a),Id(a),a.g=null;var _=2}else if(md(a.h,d))h=d.G,Fm(a.h,d),_=1;else return;if(a.I!=0){if(d.o)if(_==1){h=d.u?d.u.length:0,d=Date.now()-d.F;var N=a.D;_=on(),Ye(_,new yl(_,h)),Al(a)}else sg(a);else if(N=d.m,N==3||N==0&&d.X>0||!(_==1&&r1(a,d)||_==2&&Ed(a)))switch(h&&h.length>0&&(d=a.h,d.i=d.i.concat(h)),N){case 1:vs(a,5);break;case 4:vs(a,10);break;case 3:vs(a,6);break;default:vs(a,2)}}}function ag(a,d){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*d}function vs(a,d){if(a.j.info("Error code "+d),d==2){var h=c(a.bb,a),_=a.Ua;const N=!_;_=new _r(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Do(_,"https"),Il(_),N?JT(_.toString(),h):XT(_.toString(),h)}else nt(2);a.I=0,a.l&&a.l.pa(d),lg(a),tg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function lg(a){if(a.I=0,a.ja=[],a.l){const d=Um(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ja,d),k(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function ug(a,d,h){var _=h instanceof _r?Tn(h):new _r(h);if(_.g!="")d&&(_.g=d+"."+_.g),Vo(_,_.u);else{var N=o.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;const M=new _r(null);_&&Do(M,_),d&&(M.g=d),N&&Vo(M,N),h&&(M.h=h),_=M}return h=a.G,d=a.wa,h&&d&&xe(_,h,d),xe(_,"VER",a.ka),zo(a,_),_}function cg(a,d,h){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Oe(new _d({ab:h})):new Oe(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dg(){}t=dg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function kl(){}kl.prototype.g=function(a,d){return new Lt(a,d)};function Lt(a,d){Ue.call(this),this.g=new eg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!w(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new hi(this)}g(Lt,Ue),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){wd(this.g)},Lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=hs(a),a=h);d.i.push(new El(d.Ya++,a)),d.I==3&&Al(d)},Lt.prototype.N=function(){this.g.l=null,delete this.j,wd(this.g),delete this.g,Lt.Z.N.call(this)};function hg(a){ae.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}g(hg,ae);function fg(){ii.call(this),this.status=1}g(fg,ii);function hi(a){this.g=a}g(hi,dg),hi.prototype.ra=function(){Ye(this.g,"a")},hi.prototype.qa=function(a){Ye(this.g,new hg(a))},hi.prototype.pa=function(a){Ye(this.g,new fg)},hi.prototype.oa=function(){Ye(this.g,"b")},kl.prototype.createWebChannel=kl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,VE=function(){return new kl},DE=function(){return on()},NE=En,yf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},oi.NO_ERROR=0,oi.TIMEOUT=8,oi.HTTP_ERROR=6,yu=oi,ko.COMPLETE="complete",PE=ko,ps.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,oa=ps,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,bE=Oe}).apply(typeof Kl<"u"?Kl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="12.10.0";function bR(t){co=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Oc("@firebase/firestore");function mi(){return Us.logLevel}function G(t,...e){if(Us.logLevel<=ue.DEBUG){const n=e.map(qp);Us.debug(`Firestore (${co}): ${t}`,...n)}}function or(t,...e){if(Us.logLevel<=ue.ERROR){const n=e.map(qp);Us.error(`Firestore (${co}): ${t}`,...n)}}function zs(t,...e){if(Us.logLevel<=ue.WARN){const n=e.map(qp);Us.warn(`Firestore (${co}): ${t}`,...n)}}function qp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,OE(t,r,n)}function OE(t,e,n){let r=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||OE(e,s,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DR{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class VR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class OR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new VR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new t_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new t_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function _f(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return rh(s)===rh(i)?ce(s,i):rh(s)?1:-1}return ce(t.length,e.length)}const jR=55296,FR=57343;function rh(t){const e=t.charCodeAt(0);return e>=jR&&e<=FR}function Zi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="__name__";class Rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ce(e.length,n.length)}static compareSegments(e,n){const r=Rn.isNumericId(e),s=Rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):_f(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class Ie extends Rn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Rn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===n_}static keyField(){return new it([n_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ie.fromString(e))}static fromName(e){return new J(Ie.fromString(e).popFirst(5))}static empty(){return new J(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zR(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r_(t){if(!J.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s_(t){if(J.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uc(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ll(t,e){if(!jE(t))throw new W(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=-62135596800,o_=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*o_);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<i_)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/o_}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ll(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-i_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:qe("string",Ce._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ce(0,0))}static max(){return new ne(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=-1;function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Xr(s,J.empty(),e)}function $R(t){return new Xr(t.readTime,t.key,Ha)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(ne.min(),J.empty(),Ha)}static max(){return new Xr(ne.max(),J.empty(),Ha)}}function qR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==WR)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=-1;function Bc(t){return t==null}function nc(t){return t===0&&1/t==-1/0}function KR(t){return typeof t=="number"&&Number.isInteger(t)&&!nc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="";function QR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=a_(e)),e=YR(t.get(n),e);return a_(e)}function YR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case FE:n+="";break;default:n+=i}}return n}function a_(t){return t+FE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ql(this.root,e,this.comparator,!0)}}class Ql{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Ke(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zE("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const JR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=JR.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="server_timestamp",$E="__type__",qE="__previous_value__",WE="__local_write_time__";function Gp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[$E])==null?void 0:r.stringValue)===BE}function $c(t){const e=t.mapValue.fields[qE];return Gp(e)?$c(e):e}function Ga(t){const e=Zr(t.mapValue.fields[WE].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s,i,o,l,u,c,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=g}}const rc="(default)";class Ka{constructor(e,n){this.projectId=e,this.database=n||rc}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===rc}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}function ZR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="__type__",eb="__max__",Yl={mapValue:{}},GE="__vector__",sc="value";function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gp(t)?4:nb(t)?9007199254740991:tb(t)?10:11:te(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zr(s.timestampValue),l=Zr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return es(s.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?nc(o)===nc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(l_(o)!==l_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Fn(o[u],l[u])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function Qa(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return c_(t.timestampValue,e.timestampValue);case 4:return c_(Ga(t),Ga(e));case 5:return _f(t.stringValue,e.stringValue);case 6:return function(i,o){const l=es(i),u=es(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ce(l[c],u[c]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(je(i.latitude),je(o.latitude));return l!==0?l:ce(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return d_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,S,k,b;const l=i.fields||{},u=o.fields||{},c=(m=l[sc])==null?void 0:m.arrayValue,f=(S=u[sc])==null?void 0:S.arrayValue,g=ce(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return g!==0?g:d_(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yl.mapValue&&o===Yl.mapValue)return 0;if(i===Yl.mapValue)return 1;if(o===Yl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=_f(u[g],f[g]);if(m!==0)return m;const S=eo(l[u[g]],c[f[g]]);if(S!==0)return S}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function c_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Zr(t),r=Zr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function d_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=eo(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function to(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vf(n.fields[o])}`;return s+"}"}(t.mapValue):te(61005,{value:t})}function _u(t){switch(ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$c(t);return e?16+_u(e):16;case 5:return 2*t.stringValue.length;case 6:return es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_u(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ls(r.fields,(i,o)=>{s+=i.length+_u(o)}),s}(t.mapValue);default:throw te(13486,{value:t})}}function h_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wf(t){return!!t&&"integerValue"in t}function Kp(t){return!!t&&"arrayValue"in t}function f_(t){return!!t&&"nullValue"in t}function p_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vu(t){return!!t&&"mapValue"in t}function tb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[HE])==null?void 0:r.stringValue)===GE}function Ea(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return{...t}}function nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ea(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Ea(this.value))}}function KE(t){const e=[];return ls(t.fields,(n,r)=>{const s=new it([n]);if(vu(r)){const i=KE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ne.min(),ne.min(),ne.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ne.min(),ne.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ne.min(),ne.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.position=e,this.inclusive=n}}function m_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function g_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function rb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{}class $e extends QE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ib(e,n,r):n==="array-contains"?new lb(e,r):n==="in"?new ub(e,r):n==="not-in"?new cb(e,r):n==="array-contains-any"?new db(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ob(e,r):new ab(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(eo(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends QE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return YE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function YE(t){return t.op==="and"}function JE(t){return sb(t)&&YE(t)}function sb(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Ef(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+to(t.value);if(JE(t))return t.filters.map(e=>Ef(e)).join(",");{const e=t.filters.map(n=>Ef(n)).join(",");return`${t.op}(${e})`}}function XE(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&XE(o,s.filters[l]),!0):!1}(t,e):void te(19439)}function ZE(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(ZE).join(" ,")+"}"}(t):"Filter"}class ib extends $e{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class ob extends $e{constructor(e,n){super(e,"in",n),this.keys=eI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ab extends $e{constructor(e,n){super(e,"not-in",n),this.keys=eI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class lb extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kp(n)&&Qa(n.arrayValue,this.value)}}class ub extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qa(this.value.arrayValue,n)}}class cb extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qa(this.value.arrayValue,n)}}class db extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function y_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hb(t,e,n,r,s,i,o)}function Qp(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ef(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.Te=n}return e.Te}function Yp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!XE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!g_(t.startAt,e.startAt)&&g_(t.endAt,e.endAt)}function If(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function fb(t,e,n,r,s,i,o,l){return new po(t,e,n,r,s,i,o,l)}function qc(t){return new po(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pb(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function tI(t){return t.collectionGroup!==null}function Ia(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ya(i,r))}),n.has(it.keyField().canonicalString())||e.Ie.push(new Ya(it.keyField(),r))}return e.Ie}function On(t){const e=re(t);return e.Ee||(e.Ee=mb(e,Ia(t))),e.Ee}function mb(t,e){if(t.limitType==="F")return y_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ya(s.field,i)});const n=t.endAt?new ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ic(t.startAt.position,t.startAt.inclusive):null;return y_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tf(t,e){const n=t.filters.concat([e]);return new po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gb(t,e){const n=t.explicitOrderBy.concat([e]);return new po(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function xf(t,e,n){return new po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return Yp(On(t),On(e))&&t.limitType===e.limitType}function nI(t){return`${Qp(On(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ZE(s)).join(", ")}]`),Bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>to(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>to(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ia(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=m_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ia(r),s)||r.endAt&&!function(o,l,u){const c=m_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ia(r),s))}(t,e)}function yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rI(t){return(e,n)=>{let r=!1;for(const s of Ia(t)){const i=_b(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _b(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?eo(u,c):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new Ve(J.comparator);function ar(){return vb}const sI=new Ve(J.comparator);function aa(...t){let e=sI;for(const n of t)e=e.insert(n.key,n);return e}function iI(t){let e=sI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cs(){return Ta()}function oI(){return Ta()}function Ta(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const wb=new Ve(J.comparator),Eb=new Ke(J.comparator);function de(...t){let e=Eb;for(const n of t)e=e.add(n);return e}const Ib=new Ke(ce);function Tb(){return Ib}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function aI(t){return{integerValue:""+t}}function xb(t,e){return KR(e)?aI(e):Jp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this._=void 0}}function Sb(t,e,n){return t instanceof Ja?function(s,i){const o={fields:{[$E]:{stringValue:BE},[WE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gp(i)&&(i=$c(i)),i&&(o.fields[qE]=i),{mapValue:o}}(n,e):t instanceof no?uI(t,e):t instanceof ro?cI(t,e):function(s,i){const o=lI(s,i),l=v_(o)+v_(s.Ae);return wf(o)&&wf(s.Ae)?aI(l):Jp(s.serializer,l)}(t,e)}function Ab(t,e,n){return t instanceof no?uI(t,e):t instanceof ro?cI(t,e):n}function lI(t,e){return t instanceof oc?function(r){return wf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ja extends Gc{}class no extends Gc{constructor(e){super(),this.elements=e}}function uI(t,e){const n=dI(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends Gc{constructor(e){super(),this.elements=e}}function cI(t,e){let n=dI(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class oc extends Gc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function v_(t){return je(t.integerValue||t.doubleValue)}function dI(t){return Kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.field=e,this.transform=n}}function Cb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof no&&s instanceof no||r instanceof ro&&s instanceof ro?Zi(r.elements,s.elements,Fn):r instanceof oc&&s instanceof oc?Fn(r.Ae,s.Ae):r instanceof Ja&&s instanceof Ja}(t.transform,e.transform)}class kb{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kc{}function hI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zp(t.key,en.none()):new ul(t.key,t.data,en.none());{const n=t.data,r=Ct.empty();let s=new Ke(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new zt(s.toArray()),en.none())}}function Rb(t,e,n){t instanceof ul?function(s,i,o){const l=s.value.clone(),u=E_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof us?function(s,i,o){if(!wu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=E_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(fI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xa(t,e,n,r){return t instanceof ul?function(i,o,l,u){if(!wu(i.precondition,o))return l;const c=i.value.clone(),f=I_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(i,o,l,u){if(!wu(i.precondition,o))return l;const c=I_(i.fieldTransforms,u,o),f=o.data;return f.setAll(fI(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return wu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lI(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function w_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zi(r,s,(i,o)=>Cb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ul extends Kc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends Kc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E_(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Ab(o,l,n[s]))}return r}function I_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Sb(i,o,e))}return r}class Zp extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pb extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Rb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=hI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>w_(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>w_(n,r))}}class em{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return wb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new em(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,he;function Ob(t){switch(t){case L.OK:return te(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function pI(t){if(t===void 0)return or("GRPC error has no .code"),L.UNKNOWN;switch(t){case ze.OK:return L.OK;case ze.CANCELLED:return L.CANCELLED;case ze.UNKNOWN:return L.UNKNOWN;case ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ze.INTERNAL:return L.INTERNAL;case ze.UNAVAILABLE:return L.UNAVAILABLE;case ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ze.NOT_FOUND:return L.NOT_FOUND;case ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ze.ABORTED:return L.ABORTED;case ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ze.DATA_LOSS:return L.DATA_LOSS;default:return te(39323,{code:t})}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new Kr([4294967295,4294967295],0);function T_(t){const e=Mb().encode(t),n=new RE;return n.update(e),new Uint8Array(n.digest())}function x_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new la(`Invalid padding: ${n}`);if(r<0)throw new la(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new la(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new la(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Kr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(Lb)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=T_(e),[r,s]=x_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new tm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=T_(e),[r,s]=x_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class la extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qc(ne.min(),s,new Ve(ce),ar(),de())}}class cl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cl(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class mI{constructor(e,n){this.targetId=e,this.Ce=n}}class gI{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class S_{constructor(){this.ve=0,this.Fe=A_(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new cl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=A_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class jb{constructor(e){this.Ge=e,this.ze=new Map,this.je=ar(),this.He=Jl(),this.Je=Jl(),this.Ze=new Ve(ce)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(If(i))if(r===0){const o=new J(i.path);this.et(n,o,mt.newNoDocument(o,ne.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=es(r).toUint8Array()}catch(u){if(u instanceof zE)return zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tm(o,s,i)}catch(u){return zs(u instanceof la?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&If(l.target)){const u=new J(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,mt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=de();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Qc(e,n,this.Ze,this.je,r);return this.je=ar(),this.He=Jl(),this.Je=Jl(),this.Ze=new Ve(ce),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new S_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ke(ce),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ke(ce),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new S_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Jl(){return new Ve(J.comparator)}function A_(){return new Ve(J.comparator)}const Fb={asc:"ASCENDING",desc:"DESCENDING"},Ub={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zb={and:"AND",or:"OR"};class Bb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sf(t,e){return t.useProto3Json||Bc(e)?e:{value:e}}function ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $b(t,e){return ac(t,e.toTimestamp())}function Mn(t){return me(!!t,49232),ne.fromTimestamp(function(n){const r=Zr(n);return new Ce(r.seconds,r.nanos)}(t))}function nm(t,e){return Af(t,e).canonicalString()}function Af(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _I(t){const e=Ie.fromString(t);return me(TI(e),10190,{key:e.toString()}),e}function Cf(t,e){return nm(t.databaseId,e.path)}function sh(t,e){const n=_I(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(wI(n))}function vI(t,e){return nm(t.databaseId,e)}function qb(t){const e=_I(t);return e.length===4?Ie.emptyPath():wI(e)}function kf(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wI(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function C_(t,e,n){return{name:Cf(t,e),fields:n.value.mapValue.fields}}function Wb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(me(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:pI(c.code);return new W(f,c.message||"")}(o);n=new gI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sh(t,r.document.name),i=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):ne.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Eu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sh(t,r.document),i=r.readTime?Mn(r.readTime):ne.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Eu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sh(t,r.document),i=r.removedTargetIds||[];n=new Eu([],i,s,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Vb(s,i),l=r.targetId;n=new mI(l,o)}}return n}function Hb(t,e){let n;if(e instanceof ul)n={update:C_(t,e.key,e.value)};else if(e instanceof Zp)n={delete:Cf(t,e.key)};else if(e instanceof us)n={update:C_(t,e.key,e.data),updateMask:tP(e.fieldMask)};else{if(!(e instanceof Pb))return te(16599,{dt:e.type});n={verify:Cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$b(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(t,e.precondition)),n}function Gb(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Mn(s.updateTime):Mn(i);return o.isEqual(ne.min())&&(o=Mn(i)),new kb(o,s.transformResults||[])}(n,e))):[]}function Kb(t,e){return{documents:[vI(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vI(t,s);const i=function(c){if(c.length!==0)return II(vn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:yi(m.field),direction:Xb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function Yb(t){let e=qb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=EI(g);return m instanceof vn&&JE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(k){return new Ya(_i(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Bc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,S=g.values||[];return new ic(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(g){const m=!g.before,S=g.values||[];return new ic(S,m)}(n.endAt)),fb(e,s,o,i,l,"F",u,c)}function Jb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function EI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_i(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(_i(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>EI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(n.compositeFilter.op))}(t):te(30097,{filter:t})}function Xb(t){return Fb[t]}function Zb(t){return Ub[t]}function eP(t){return zb[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return it.fromServerFormat(t.fieldPath)}function II(t){return t instanceof $e?function(n){if(n.op==="=="){if(p_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(f_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(f_(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:Zb(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>II(s));return r.length===1?r[0]:{compositeFilter:{op:eP(n.op),filters:r}}}(t):te(54877,{filter:t})}function tP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function xI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.yt=e}}function rP(t){const e=Yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.Sn=new iP}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Xr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class iP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},SI=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(SI,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new so(0)}static ar(){return new so(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="LruGarbageCollector",oP=1048576;function b_([t,e],[n,r]){const s=ce(t,n);return s===0?ce(e,r):s}class aP{constructor(e){this.Pr=e,this.buffer=new Ke(b_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();b_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){G(R_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?G(R_,"Ignoring IndexedDB error during garbage collection: ",n):await ho(n)}await this.Ar(3e5)})}}class uP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(zc.ce);const r=new aP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(k_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),k_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(c=Date.now(),mi()<=ue.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function cP(t,e){return new uP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xa(r.mutation,s,zt.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=Cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=aa();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ar();const o=Ta(),l=function(){return Ta()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof us)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),xa(f.mutation,c,f.mutation.getFieldMask(),Ce.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new hP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ta();let s=new Ve((o,l)=>o-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const g=(s.get(l.batchId)||de()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,g=oI();f.forEach(m=>{if(!i.has(m)){const S=hI(n.get(m),r.get(m));S!==null&&g.set(m,S),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,g))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return pb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Cs());let l=Ha,u=i;return o.next(c=>F.forEach(c,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,de())).next(f=>({batchId:l,changes:iI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=aa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=aa();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(g,m){return new po(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=aa();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&xa(f.mutation,c,zt.empty(),Ce.now()),Hc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:rP(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.overlays=new Ve(J.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Cs(),i=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Cs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Cs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return F.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Db(n,r));let i=this.Lr.get(n);i===void 0&&(i=de(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.kr=new Ke(Xe.Kr),this.qr=new Ke(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new J(new Ie([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new J(new Ie([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=de();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return J.comparator(e.key,n.key)||ce(e.Hr,n.Hr)}static Ur(e,n){return ce(e.Hr,n.Hr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ke(Xe.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Hp:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ce);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new J(i),0);let l=new Ke(ce);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.ti=e,this.docs=function(){return new Ve(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||qR($R(f),r)<=0||(s.has(f.key)||Hc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vP(this)}getSize(e){return F.resolve(this.size)}}class vP extends dP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.persistence=e,this.ri=new Xs(n=>Qp(n),Yp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new rm,this.targetCount=0,this.oi=so._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new so(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this._i={},this.overlays={},this.ai=new zc(0),this.ui=!1,this.ui=!0,this.ci=new gP,this.referenceDelegate=e(this),this.li=new wP(this),this.indexManager=new sP,this.remoteDocumentCache=function(s){return new _P(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new nP(n),this.Pi=new pP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new yP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new EP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class EP extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class sm{constructor(e){this.persistence=e,this.Ri=new rm,this.Ai=null}static Vi(e){return new sm(e)}get di(){if(this.Ai)return this.Ai;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=J.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class lc{constructor(e,n){this.persistence=e,this.fi=new Xs(r=>QR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cP(this,n)}static Vi(e,n){return new lc(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_u(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new im(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return HS()?8:GR(yt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IP;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(mi()<=ue.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(mi()<=ue.DEBUG&&G("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(mi()<=ue.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}gs(e,n){if(__(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xf(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,xf(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return __(n)||s.isEqual(ne.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(mi()<=ue.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gi(n)),this.Ds(e,o,n,BR(s,Ha)).next(l=>l))})}bs(e,n){let r=new Ke(rI(e));return n.forEach((s,i)=>{Hc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return mi()<=ue.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",gi(n)),this.fs.getDocumentsMatchingQuery(e,n,Xr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="LocalStore",xP=3e8;class SP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ve(ce),this.Fs=new Xs(i=>Qp(i),Yp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function AP(t,e,n,r){return new SP(t,e,n,r)}async function CI(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=de();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function CP(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const g=c.batch,m=g.keys();let S=F.resolve();return m.forEach(k=>{S=S.next(()=>f.getEntry(u,k)).next(b=>{const D=c.docVersions.get(k);me(D!==null,48541),b.version.compareTo(D)<0&&(g.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),f.addEntry(b)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kI(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=re(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let S=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(b,D,x){return b.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=xP?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,S,f)&&l.push(n.li.updateTargetData(i,S))});let u=ar(),c=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(RP(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(ne.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function RP(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(om,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function bP(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PP(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Rf(t,e,n){const r=re(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fo(o))throw o;G(om,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function P_(t,e,n){const r=re(t);let s=ne.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const g=re(u),m=g.Fs.get(f);return m!==void 0?F.resolve(g.vs.get(m)):g.li.getTargetData(c,f)}(r,o,On(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:de())).next(l=>(NP(r,yb(e),l),{documents:l,ks:i})))}function NP(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class N_{constructor(){this.activeTargetIds=Tb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DP{constructor(){this.vo=new N_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new N_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="ConnectivityMonitor";class V_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){G(D_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){G(D_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl=null;function bf(){return Xl===null?Xl=function(){return 268435456+Math.round(2147483648*Math.random())}():Xl++,"0x"+Xl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="RestConnection",OP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class MP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===rc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=bf(),l=this.Qo(e,n.toUriEncodedString());G(ih,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Ks(c);return this.zo(e,l,u,r,f).then(g=>(G(ih,`Received RPC '${e}' ${o}: `,g),g),g=>{throw zs(ih,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=OP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection",Yo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class zi extends MP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zi.c_){const e=DE();Yo(e,NE.STAT_EVENT,n=>{n.stat===yf.PROXY?G(ht,"STAT_EVENT: detected buffering proxy"):n.stat===yf.NOPROXY&&G(ht,"STAT_EVENT: detected no buffering proxy")}),zi.c_=!0}}zo(e,n,r,s,i){const o=bf();return new Promise((l,u)=>{const c=new bE;c.setWithCredentials(!0),c.listenOnce(PE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yu.NO_ERROR:const g=c.getResponseJson();G(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case yu.TIMEOUT:G(ht,`RPC '${e}' ${o} timed out`),u(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case yu.HTTP_ERROR:const m=c.getStatus();if(G(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const b=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(k.status);u(new W(b,k.message))}else u(new W(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(L.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{G(ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(ht,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=bf(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");G(ht,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let g=!1,m=!1;const S=new LP({Ho:k=>{m?G(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(G(ht,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),G(ht,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return Yo(f,oa.EventType.OPEN,()=>{m||(G(ht,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Yo(f,oa.EventType.CLOSE,()=>{m||(m=!0,G(ht,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(f))}),Yo(f,oa.EventType.ERROR,k=>{m||(m=!0,zs(ht,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.o_(new W(L.UNAVAILABLE,"The operation could not be completed")))}),Yo(f,oa.EventType.MESSAGE,k=>{var b;if(!m){const D=k.data[0];me(!!D,16349);const x=D,v=(x==null?void 0:x.error)||((b=x[0])==null?void 0:b.error);if(v){G(ht,`RPC '${e}' stream ${s} received error:`,v);const A=v.status;let V=function(E){const y=ze[E];if(y!==void 0)return pI(y)}(A),O=v.message;A==="NOT_FOUND"&&O.includes("database")&&O.includes("does not exist")&&O.includes(this.databaseId.database)&&zs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=L.INTERNAL,O="Unknown error status: "+A+" with message "+v.message),m=!0,S.o_(new W(V,O)),f.close()}else G(ht,`RPC '${e}' stream ${s} received:`,D),S.__(D)}}),zi.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return VE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return new zi(t)}function oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t){return new Bb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi.c_=!1;class RI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="PersistentStream";class bI{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new RI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(O_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(G(O_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FP extends bI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Wb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Mn(o.readTime):ne.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=kf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=If(u)?{documents:Kb(i,u)}:{query:Qb(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yI(i,o.resumeToken);const c=Sf(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=ac(i,o.snapshotVersion.toTimestamp());const c=Sf(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Jb(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=kf(this.serializer),n.removeTarget=e,this.K_(n)}}class UP extends bI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Gb(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=kf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Hb(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{}class BP extends zP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Af(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Af(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function $P(t,e,n,r){return new BP(t,e,n,r)}class qP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class WP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Zs(this)&&(G(Bs,"Restarting streams for network reachability change."),await async function(u){const c=re(u);c.Ea.add(4),await dl(c),c.Va.set("Unknown"),c.Ea.delete(4),await Jc(c)}(this))})}),this.Va=new qP(r,s)}}async function Jc(t){if(Zs(t))for(const e of t.Ra)await e(!0)}async function dl(t){for(const e of t.Ra)await e(!1)}function PI(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cm(n)?um(n):mo(n).O_()&&lm(n,e))}function am(t,e){const n=re(t),r=mo(n);n.Ia.delete(e),r.O_()&&NI(n,e),n.Ia.size===0&&(r.O_()?r.L_():Zs(n)&&n.Va.set("Unknown"))}function lm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).Z_(e)}function NI(t,e){t.da.$e(e),mo(t).X_(e)}function um(t){t.da=new jb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.Va.ua()}function cm(t){return Zs(t)&&!mo(t).x_()&&t.Ia.size>0}function Zs(t){return re(t).Ea.size===0}function DI(t){t.da=void 0}async function HP(t){t.Va.set("Online")}async function GP(t){t.Ia.forEach((e,n)=>{lm(t,e)})}async function KP(t,e){DI(t),cm(t)?(t.Va.ha(e),um(t)):t.Va.set("Unknown")}async function QP(t,e,n){if(t.Va.set("Online"),e instanceof gI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){G(Bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uc(t,r)}else if(e instanceof Eu?t.da.Xe(e):e instanceof mI?t.da.st(e):t.da.tt(e),!n.isEqual(ne.min()))try{const r=await kI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),NI(i,u);const g=new Lr(f.target,u,c,f.sequenceNumber);lm(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G(Bs,"Failed to raise snapshot:",r),await uc(t,r)}}async function uc(t,e,n){if(!fo(e))throw e;t.Ea.add(1),await dl(t),t.Va.set("Offline"),n||(n=()=>kI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(Bs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Jc(t)})}function VI(t,e){return e().catch(n=>uc(t,n,e))}async function Xc(t){const e=re(t),n=ns(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hp;for(;YP(e);)try{const s=await bP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,JP(e,s)}catch(s){await uc(e,s)}OI(e)&&MI(e)}function YP(t){return Zs(t)&&t.Ta.length<10}function JP(t,e){t.Ta.push(e);const n=ns(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function OI(t){return Zs(t)&&!ns(t).x_()&&t.Ta.length>0}function MI(t){ns(t).start()}async function XP(t){ns(t).ra()}async function ZP(t){const e=ns(t);for(const n of t.Ta)e.ea(n.mutations)}async function e2(t,e,n){const r=t.Ta.shift(),s=em.from(r,e,n);await VI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xc(t)}async function t2(t,e){e&&ns(t).Y_&&await async function(r,s){if(function(o){return Ob(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();ns(r).B_(),await VI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xc(r)}}(t,e),OI(t)&&MI(t)}async function M_(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),G(Bs,"RemoteStore received new credentials");const r=Zs(n);n.Ea.add(3),await dl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Jc(n)}async function n2(t,e){const n=re(t);e?(n.Ea.delete(2),await Jc(n)):e||(n.Ea.add(2),await dl(n),n.Va.set("Unknown"))}function mo(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new FP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:HP.bind(null,t),Yo:GP.bind(null,t),t_:KP.bind(null,t),J_:QP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),cm(t)?um(t):t.Va.set("Unknown")):(await t.ma.stop(),DI(t))})),t.ma}function ns(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new UP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:XP.bind(null,t),t_:t2.bind(null,t),ta:ZP.bind(null,t),na:e2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Xc(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Bs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new dm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hm(t,e){if(or("AsyncQueue",`${e}: ${t}`),fo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=aa(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.ga=new Ve(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new io(e,n,Bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class s2{constructor(){this.queries=j_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=j_(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function j_(){return new Xs(t=>nI(t),Wc)}async function fm(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new r2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=hm(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&mm(n)}async function pm(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i2(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&mm(n)}function o2(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function mm(t){t.Ca.forEach(e=>{e.next()})}var Pf,F_;(F_=Pf||(Pf={})).Ma="default",F_.Cache="cache";class gm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.key=e}}class jI{constructor(e){this.key=e}}class a2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.eu=rI(e),this.tu=new Bi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new L_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),S=Hc(this.query,g)?g:null,k=!!m&&this.mutatedKeys.has(m.key),b=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;m&&S?m.data.isEqual(S.data)?k!==b&&(r.track({type:3,doc:S}),D=!0):this.su(m,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),D=!0):m&&!S&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(l=!0)),D&&(S?(o=o.add(S),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(S,k){const b=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:D})}};return b(S)-b(k)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new io(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new L_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new jI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new LI(r))}),n}cu(e){this.Za=e.ks,this.Ya=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ym="SyncEngine";class l2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u2{constructor(e){this.key=e,this.hu=!1}}class c2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xs(l=>nI(l),Wc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ve(J.comparator),this.Au=new Map,this.Vu=new rm,this.du={},this.mu=new Map,this.fu=so.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d2(t,e,n=!0){const r=qI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await FI(r,e,n,!0),s}async function h2(t,e){const n=qI(t);await FI(n,e,!0,!1)}async function FI(t,e,n,r){const s=await PP(t.localStore,On(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await f2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&PI(t.remoteStore,s),l}async function f2(t,e,n,r,s){t.pu=(g,m,S)=>async function(b,D,x,v){let A=D.view.ru(x);A.Ss&&(A=await P_(b.localStore,D.query,!1).then(({documents:E})=>D.view.ru(E,A)));const V=v&&v.targetChanges.get(D.targetId),O=v&&v.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(A,b.isPrimaryClient,V,O);return z_(b,D.targetId,j.au),j.snapshot}(t,g,m,S);const i=await P_(t.localStore,e,!0),o=new a2(e,i.ks),l=o.ru(i.documents),u=cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);z_(t,n,c.au);const f=new l2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function p2(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Wc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&am(r.remoteStore,s.targetId),Nf(r,s.targetId)}).catch(ho)):(Nf(r,s.targetId),await Rf(r.localStore,s.targetId,!0))}async function m2(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),am(n.remoteStore,r.targetId))}async function g2(t,e,n){const r=T2(t);try{const s=await function(o,l){const u=re(o),c=Ce.now(),f=l.reduce((S,k)=>S.add(k.key),de());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=ar(),b=de();return u.xs.getEntries(S,f).next(D=>{k=D,k.forEach((x,v)=>{v.isValidDocument()||(b=b.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,k)).next(D=>{g=D;const x=[];for(const v of l){const A=bb(v,g.get(v.key).overlayedDocument);A!=null&&x.push(new us(v.key,A,KE(A.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,x,l)}).next(D=>{m=D;const x=D.applyToLocalDocumentSet(g,b);return u.documentOverlayCache.saveOverlays(S,D.batchId,x)})}).then(()=>({batchId:m.batchId,changes:iI(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ve(ce)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await hl(r,s.changes),await Xc(r.remoteStore)}catch(s){const i=hm(s,"Failed to persist write");n.reject(i)}}async function UI(t,e){const n=re(t);try{const r=await kP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await hl(n,r,e)}catch(r){await ho(r)}}function U_(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let c=!1;u.queries.forEach((f,g)=>{for(const m of g.ba)m.va(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y2(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ve(J.comparator);o=o.insert(i,mt.newNoDocument(i,ne.min()));const l=de().add(i),u=new Qc(ne.min(),new Map,new Ve(ce),o,l);await UI(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),_m(r)}else await Rf(r.localStore,e,!1).then(()=>Nf(r,e,n)).catch(ho)}async function _2(t,e){const n=re(t),r=e.batch.batchId;try{const s=await CP(n.localStore,e);BI(n,r,null),zI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hl(n,s)}catch(s){await ho(s)}}async function v2(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(g=>(me(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(c,g))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);BI(r,e,n),zI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hl(r,s)}catch(s){await ho(s)}}function zI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function BI(t,e,n){const r=re(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||$I(t,r)})}function $I(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(am(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),_m(t))}function z_(t,e,n){for(const r of n)r instanceof LI?(t.Vu.addReference(r.key,e),w2(t,r)):r instanceof jI?(G(ym,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||$I(t,r.key)):te(19791,{wu:r})}function w2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(G(ym,"New document in limbo: "+n),t.Eu.add(r),_m(t))}function _m(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(Ie.fromString(e)),r=t.fu.next();t.Au.set(r,new u2(n)),t.Ru=t.Ru.insert(n,r),PI(t.remoteStore,new Lr(On(qc(n.path)),r,"TargetPurposeLimboResolution",zc.ce))}}async function hl(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const g=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(c){s.push(c);const g=im.Es(u.targetId,c);i.push(g)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(c,m=>F.forEach(m.Ts,S=>f.persistence.referenceDelegate.addReference(g,m.targetId,S)).next(()=>F.forEach(m.Is,S=>f.persistence.referenceDelegate.removeReference(g,m.targetId,S)))))}catch(g){if(!fo(g))throw g;G(om,"Failed to update sequence numbers: "+g)}for(const g of c){const m=g.targetId;if(!g.fromCache){const S=f.vs.get(m),k=S.snapshotVersion,b=S.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(m,b)}}}(r.localStore,i))}async function E2(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){G(ym,"User change. New user:",e.toKey());const r=await CI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hl(n,r.Ns)}}function I2(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function qI(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y2.bind(null,e),e.Pu.J_=i2.bind(null,e.eventManager),e.Pu.yu=o2.bind(null,e.eventManager),e}function T2(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v2.bind(null,e),e}class cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AP(this.persistence,new TP,e.initialUser,this.serializer)}Cu(e){return new AI(sm.Vi,this.serializer)}Du(e){return new DP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cc.provider={build:()=>new cc};class x2 extends cc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof lc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new AI(r=>lc.Vi(r,n),this.serializer)}}class Df{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E2.bind(null,this.syncEngine),await n2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s2}()}createDatastore(e){const n=Yc(e.databaseInfo.databaseId),r=jP(e.databaseInfo);return $P(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new WP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>U_(this.syncEngine,n,0),function(){return V_.v()?new V_:new VP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const g=new c2(s,i,o,l,u,c);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);G(Bs,"RemoteStore shutting down."),i.Ea.add(5),await dl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Df.provider={build:()=>new Df};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="FirestoreClient";class S2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(rs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(rs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),G(rs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await CI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A2(t);G(rs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>M_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>M_(e.remoteStore,s)),t._onlineComponents=e}async function A2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(rs,"Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await ah(t,new cc)}}else G(rs,"Using default OfflineComponentProvider"),await ah(t,new x2(void 0));return t._offlineComponents}async function WI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(rs,"Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(G(rs,"Using default OnlineComponentProvider"),await B_(t,new Df))),t._onlineComponents}function C2(t){return WI(t).then(e=>e.syncEngine)}async function dc(t){const e=await WI(t),n=e.eventManager;return n.onListen=d2.bind(null,e.syncEngine),n.onUnlisten=p2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m2.bind(null,e.syncEngine),n}function k2(t,e,n,r){const s=new vm(r),i=new gm(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>fm(await dc(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>pm(await dc(t),i))}}function R2(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new vm({next:m=>{f.Nu(),o.enqueueAndForget(()=>pm(i,g));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),g=new gm(qc(l.path),f,{includeMetadataChanges:!0,Ka:!0});return fm(i,g)}(await dc(t),t.asyncQueue,e,n,r)),r.promise}function b2(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new vm({next:m=>{f.Nu(),o.enqueueAndForget(()=>pm(i,g)),m.fromCache&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),g=new gm(l,f,{includeMetadataChanges:!0,Ka:!0});return fm(i,g)}(await dc(t),t.asyncQueue,e,n,r)),r.promise}function P2(t,e){const n=new Zn;return t.asyncQueue.enqueueAndForget(async()=>g2(await C2(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2="ComponentProvider",$_=new Map;function D2(t,e,n,r,s){return new XR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,HI(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="firestore.googleapis.com",q_=!0;class W_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=GI,this.ssl=q_}else this.host=e.host,this.ssl=e.ssl??q_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=SI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oP)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PR;switch(r.type){case"firstParty":return new OR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(G(N2,"Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function V2(t,e,n,r={}){var c;t=Dt(t,Zc);const s=Ks(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Dp(`https://${l}`),Vp("Firestore",!0)),i.host!==GI&&i.host!==l&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!jn(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=ft.MOCK_USER;else{f=Fw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new ft(m)}t._authCredentials=new NR(new ME(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cs(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ll(n,Le._jsonSchema))return new Le(e,r||null,new J(Ie.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:qe("string",Le._jsonSchemaVersion),referencePath:qe("string")};class Qr extends cs{constructor(e,n,r){super(e,n,qc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new J(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Gt(t,e,...n){if(t=be(t),LE("collection","path",e),t instanceof Zc){const r=Ie.fromString(e,...n);return s_(r),new Qr(t,null,r)}{if(!(t instanceof Le||t instanceof Qr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return s_(r),new Qr(t.firestore,null,r)}}function vt(t,e,...n){if(t=be(t),arguments.length===1&&(e=Wp.newId()),LE("doc","path",e),t instanceof Zc){const r=Ie.fromString(e,...n);return r_(r),new Le(t,null,new J(r))}{if(!(t instanceof Le||t instanceof Qr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return r_(r),new Le(t.firestore,t instanceof Qr?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="AsyncQueue";class G_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new RI(this,"async_queue_retry"),this._c=()=>{const r=oh();r&&G(H_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=oh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!fo(e))throw e;G(H_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",K_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=dm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:K_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function K_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class lr extends Zc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new G_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G_(e),this._firestoreClient=void 0,await e}}}function O2(t,e){const n=typeof t=="object"?t:Mc(),r=typeof t=="string"?t:rc,s=as(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Mw("firestore");i&&V2(s,...i)}return s}function ed(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||M2(t),t._firestoreClient}function M2(t){var r,s,i,o;const e=t._freezeSettings(),n=D2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new S2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(lt.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ll(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:qe("string",Jt._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(ll(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:qe("string",Ln._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ll(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new W(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:qe("string",mn._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=/^__.*__$/;class j2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new ul(e,this.data,n,this.fieldTransforms)}}class KI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:t})}}class td{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new td({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return hc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(QI(this.dataSource)&&L2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class F2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yc(e)}createContext(e,n,r,s=!1){return new td({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nd(t){const e=t._freezeSettings(),n=Yc(t._databaseId);return new F2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YI(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);xm("Data must be an object, but it was:",o,r);const l=XI(r,o);let u,c;if(i.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=$s(e,g,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);tT(f,m)||f.push(m)}u=new zt(f),c=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,c=o.fieldTransforms;return new j2(new Ct(l),u,c)}class rd extends go{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rd}}function JI(t,e,n){return new td({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Em extends go{_toFieldTransform(e){return new Xp(e.path,new Ja)}isEqual(e){return e instanceof Em}}class Im extends go{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=JI(this,e,!0),r=this.Ac.map(i=>ei(i,n)),s=new no(r);return new Xp(e.path,s)}isEqual(e){return e instanceof Im&&jn(this.Ac,e.Ac)}}class Tm extends go{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=JI(this,e,!0),r=this.Ac.map(i=>ei(i,n)),s=new ro(r);return new Xp(e.path,s)}isEqual(e){return e instanceof Tm&&jn(this.Ac,e.Ac)}}function U2(t,e,n,r){const s=t.createContext(1,e,n);xm("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();ls(r,(u,c)=>{const f=eT(e,u,n);c=be(c);const g=s.childContextForFieldPath(f);if(c instanceof rd)i.push(f);else{const m=ei(c,g);m!=null&&(i.push(f),o.set(f,m))}});const l=new zt(i);return new KI(o,l,s.fieldTransforms)}function z2(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[$s(e,r,n)],u=[s];if(i.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push($s(e,i[m])),u.push(i[m+1]);const c=[],f=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!tT(c,l[m])){const S=l[m];let k=u[m];k=be(k);const b=o.childContextForFieldPath(S);if(k instanceof rd)c.push(S);else{const D=ei(k,b);D!=null&&(c.push(S),f.set(S,D))}}const g=new zt(c);return new KI(f,g,o.fieldTransforms)}function B2(t,e,n,r=!1){return ei(n,t.createContext(r?4:3,e))}function ei(t,e){if(ZI(t=be(t)))return xm("Unsupported field value:",e,t),XI(t,e);if(t instanceof go)return function(r,s){if(!QI(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ei(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:ac(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ac(s.serializer,i)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:yI(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mn)return function(o,l){const u=o instanceof mn?o.toArray():o;return{mapValue:{fields:{[HE]:{stringValue:GE},[sc]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Jp(l.serializer,f)})}}}}}}(r,s);if(xI(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Uc(r)}`)}(t,e)}function XI(t,e){const n={};return UE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,s)=>{const i=ei(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ZI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Ln||t instanceof Jt||t instanceof Le||t instanceof go||t instanceof mn||xI(t))}function xm(t,e,n){if(!ZI(n)||!jE(n)){const r=Uc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function $s(t,e,n){if((e=be(e))instanceof wm)return e._internalPath;if(typeof e=="string")return eT(t,e);throw hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $2=new RegExp("[~\\*/\\[\\]]");function eT(t,e,n){if(e.search($2)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wm(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function tT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[sc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>je(o.doubleValue));return new mn(n)}convertGeoPoint(e){return new Ln(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(TI(r),9688,{name:e});const s=new Ka(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends q2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function An(){return new Em("serverTimestamp")}function Q_(...t){return new Im("arrayUnion",t)}function W2(...t){return new Tm("arrayRemove",t)}const Y_="@firebase/firestore",J_="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field($s("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H2 extends nT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Am{}class sT extends Am{}function $i(t,e,...n){let r=[];e instanceof Am&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Cm).length,l=i.filter(u=>u instanceof sd).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sd extends sT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=this._parse(e);return iT(e._query,n),new cs(e.firestore,e.converter,Tf(e._query,n))}_parse(e){const n=nd(e.firestore);return function(i,o,l,u,c,f,g){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ev(g,f);const k=[];for(const b of g)k.push(Z_(u,i,b));m={arrayValue:{values:k}}}else m=Z_(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ev(g,f),m=B2(l,o,g,f==="in"||f==="not-in");return $e.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fc(t,e,n){const r=e,s=$s("where",t);return sd._create(s,r,n)}class Cm extends Am{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)iT(o,u),o=Tf(o,u)}(e._query,n),new cs(e.firestore,e.converter,Tf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class km extends sT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new km(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(i,o)}(e._query,this._field,this._direction);return new cs(e.firestore,e.converter,gb(e._query,n))}}function G2(t,e="asc"){const n=e,r=$s("orderBy",t);return km._create(r,n)}function Z_(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tI(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!J.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return h_(t,new J(r))}if(n instanceof Le)return h_(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(n)}.`)}function ev(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function oT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends nT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($s("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:qe("string",Ps._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class Iu extends Ps{data(e={}){return super.data(e)}}class Ns{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ua(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Iu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ua(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Iu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ua(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:K2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function K2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns._jsonSchemaVersion="firestore/querySnapshot/1.0",Ns._jsonSchema={type:qe("string",Ns._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){t=Dt(t,Le);const e=Dt(t.firestore,lr),n=ed(e);return R2(n,t._key).then(r=>aT(e,t,r))}function Vf(t){t=Dt(t,cs);const e=Dt(t.firestore,lr),n=ed(e),r=new Sm(e);return rT(t._query),b2(n,t._query).then(s=>new Ns(e,r,t,s))}function Y2(t,e,n){t=Dt(t,Le);const r=Dt(t.firestore,lr),s=oT(t.converter,e),i=nd(r);return id(r,[YI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function Yt(t,e,n,...r){t=Dt(t,Le);const s=Dt(t.firestore,lr),i=nd(s);let o;return o=typeof(e=be(e))=="string"||e instanceof wm?z2(i,"updateDoc",t._key,e,n,r):U2(i,"updateDoc",t._key,e),id(s,[o.toMutation(t._key,en.exists(!0))])}function tv(t){return id(Dt(t.firestore,lr),[new Zp(t._key,en.none())])}function Jo(t,e){const n=Dt(t.firestore,lr),r=vt(t),s=oT(t.converter,e),i=nd(t.firestore);return id(n,[YI(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Tu(t,...e){var c,f,g;t=be(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||X_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(X_(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(g=m.complete)==null?void 0:g.bind(m)}let i,o,l;if(t instanceof Le)o=Dt(t.firestore,lr),l=qc(t._key.path),i={next:m=>{e[r]&&e[r](aT(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Dt(t,cs);o=Dt(m.firestore,lr),l=m._query;const S=new Sm(o);i={next:k=>{e[r]&&e[r](new Ns(o,S,m,k))},error:e[r+1],complete:e[r+2]},rT(t._query)}const u=ed(o);return k2(u,l,s,i)}function id(t,e){const n=ed(t);return P2(n,e)}function aT(t,e,n){const r=n.docs.get(e._key),s=new Sm(t);return new Ps(t,s,e._key,r,new ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){bR(Ys),yn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new lr(new DR(r.getProvider("auth-internal")),new MR(o,r.getProvider("app-check-internal")),ZR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nt(Y_,J_,e),Nt(Y_,J_,"esm2020")})();var J2="firebase",X2="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(J2,X2,"app");const lT="@firebase/installations",Rm="0.6.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=1e4,cT=`w:${Rm}`,dT="FIS_v2",Z2="https://firebaseinstallations.googleapis.com/v1",eN=60*60*1e3,tN="installations",nN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qs=new Qs(tN,nN,rN);function hT(t){return t instanceof sn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT({projectId:t}){return`${Z2}/projects/${t}/installations`}function pT(t){return{token:t.token,requestStatus:2,expiresIn:iN(t.expiresIn),creationTime:Date.now()}}async function mT(t,e){const r=(await e.json()).error;return qs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function sN(t,{refreshToken:e}){const n=gT(t);return n.append("Authorization",oN(e)),n}async function yT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iN(t){return Number(t.replace("s","000"))}function oN(t){return`${dT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=fT(t),s=gT(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:dT,appId:t.appId,sdkVersion:cT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await yT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:pT(c.authToken)}}else throw await mT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=/^[cdef][\w-]{21}$/,Of="";function cN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dN(t);return uN.test(n)?n:Of}catch{return Of}}function dN(t){return lN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Map;function wT(t,e){const n=od(t);ET(n,e),hN(n,e)}function ET(t,e){const n=vT.get(t);if(n)for(const r of n)r(e)}function hN(t,e){const n=fN();n&&n.postMessage({key:t,fid:e}),pN()}let ks=null;function fN(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=t=>{ET(t.data.key,t.data.fid)}),ks}function pN(){vT.size===0&&ks&&(ks.close(),ks=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="firebase-installations-database",gN=1,Ws="firebase-installations-store";let lh=null;function bm(){return lh||(lh=Ww(mN,gN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ws)}}})),lh}async function pc(t,e){const n=od(t),s=(await bm()).transaction(Ws,"readwrite"),i=s.objectStore(Ws),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&wT(t,e.fid),e}async function IT(t){const e=od(t),r=(await bm()).transaction(Ws,"readwrite");await r.objectStore(Ws).delete(e),await r.done}async function ad(t,e){const n=od(t),s=(await bm()).transaction(Ws,"readwrite"),i=s.objectStore(Ws),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&wT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t){let e;const n=await ad(t.appConfig,r=>{const s=yN(r),i=_N(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Of?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yN(t){const e=t||{fid:cN(),registrationStatus:0};return TT(e)}function _N(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wN(t)}:{installationEntry:e}}async function vN(t,e){try{const n=await aN(t,e);return pc(t.appConfig,n)}catch(n){throw hT(n)&&n.customData.serverCode===409?await IT(t.appConfig):await pc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wN(t){let e=await nv(t.appConfig);for(;e.registrationStatus===1;)await _T(100),e=await nv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pm(t);return r||n}return e}function nv(t){return ad(t,e=>{if(!e)throw qs.create("installation-not-found");return TT(e)})}function TT(t){return EN(t)?{fid:t.fid,registrationStatus:0}:t}function EN(t){return t.registrationStatus===1&&t.registrationTime+uT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN({appConfig:t,heartbeatServiceProvider:e},n){const r=TN(t,n),s=sN(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:cT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await yT(()=>fetch(r,l));if(u.ok){const c=await u.json();return pT(c)}else throw await mT("Generate Auth Token",u)}function TN(t,{fid:e}){return`${fT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e=!1){let n;const r=await ad(t.appConfig,i=>{if(!xT(i))throw qs.create("not-registered");const o=i.authToken;if(!e&&AN(o))return i;if(o.requestStatus===1)return n=xN(t,e),i;{if(!navigator.onLine)throw qs.create("app-offline");const l=kN(i);return n=SN(t,l),l}});return n?await n:r.authToken}async function xN(t,e){let n=await rv(t.appConfig);for(;n.authToken.requestStatus===1;)await _T(100),n=await rv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Nm(t,e):r}function rv(t){return ad(t,e=>{if(!xT(e))throw qs.create("not-registered");const n=e.authToken;return RN(n)?{...e,authToken:{requestStatus:0}}:e})}async function SN(t,e){try{const n=await IN(t,e),r={...e,authToken:n};return await pc(t.appConfig,r),n}catch(n){if(hT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await pc(t.appConfig,r)}throw n}}function xT(t){return t!==void 0&&t.registrationStatus===2}function AN(t){return t.requestStatus===2&&!CN(t)}function CN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+eN}function kN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function RN(t){return t.requestStatus===1&&t.requestTime+uT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pm(e);return r?r.catch(console.error):Nm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e=!1){const n=t;return await NN(n),(await Nm(n,e)).token}async function NN(t){const{registrationPromise:e}=await Pm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){if(!t||!t.options)throw uh("App Configuration");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uh(t){return qs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="installations",VN="installations-internal",ON=t=>{const e=t.getProvider("app").getImmediate(),n=DN(e),r=as(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},MN=t=>{const e=t.getProvider("app").getImmediate(),n=as(e,ST).getImmediate();return{getId:()=>bN(n),getToken:s=>PN(n,s)}};function LN(){yn(new rn(ST,ON,"PUBLIC")),yn(new rn(VN,MN,"PRIVATE"))}LN();Nt(lT,Rm);Nt(lT,Rm,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",jN="firebase_id",FN="origin",UN=60*1e3,zN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new Qs("analytics","Analytics",BN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t){if(!t.startsWith(Dm)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function AT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function WN(t,e){const n=qN("firebase-js-sdk-policy",{createScriptURL:$N}),r=document.createElement("script"),s=`${Dm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function HN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function GN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await AT(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){Et.error(l)}t("config",s,i)}async function KN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await AT(n);for(const u of o){const c=l.find(g=>g.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Et.error(i)}}function QN(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await KN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await GN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Et.error(l)}}return s}function YN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=QN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function JN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=30,ZN=1e3;class eD{constructor(e={},n=ZN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const CT=new eD;function tD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:tD(n)},s=zN.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function rD(t,e=CT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw $t.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new oD;return setTimeout(async()=>{l.abort()},UN),kT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function kT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=CT){var l;const{appId:i,measurementId:o}=t;try{await sD(r,e)}catch(u){if(o)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await nD(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!iD(c)){if(s.deleteThrottleMetadata(i),o)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Ay(n,s.intervalMillis,XN):Ay(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,g),Et.debug(`Calling attemptFetch again in ${f} millis`),kT(t,g,r,s)}}function sD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iD(t){if(!(t instanceof sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class oD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function lD(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(){if(zw())try{await Bw()}catch(t){return Et.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cD(t,e,n,r,s,i,o){const l=rD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Et.error(m)),e.push(l);const u=uD().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);JN(i)||WN(i,c.measurementId),s("js",new Date);const g=(o==null?void 0:o.config)??{};return g[FN]="firebase",g.update=!0,f!=null&&(g[jN]=f),s("config",c.measurementId,g),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.app=e}_delete(){return delete qi[this.app.options.appId],Promise.resolve()}}let qi={},sv=[];const iv={};let ch="dataLayer",hD="gtag",ov,Vm,av=!1;function fD(){const t=[];if(Uw()&&t.push("This is a browser extension environment."),GS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function pD(t,e,n){fD();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(qi[r]!=null)throw $t.create("already-exists",{id:r});if(!av){HN(ch);const{wrappedGtag:i,gtagCore:o}=YN(qi,sv,iv,ch,hD);Vm=i,ov=o,av=!0}return qi[r]=cD(t,sv,iv,e,ov,ch,n),new dD(t)}function mD(t=Mc()){t=be(t);const e=as(t,mc);return e.isInitialized()?e.getImmediate():gD(t)}function gD(t,e={}){const n=as(t,mc);if(n.isInitialized()){const s=n.getImmediate();if(jn(e,n.getOptions()))return s;throw $t.create("already-initialized")}return n.initialize({options:e})}function yD(t,e,n){t=be(t),lD(Vm,qi[t.app.options.appId],e,n).catch(r=>Et.error(r))}function _D(t,e,n,r){t=be(t),aD(Vm,qi[t.app.options.appId],e,n,r).catch(s=>Et.error(s))}const lv="@firebase/analytics",uv="0.10.20";function vD(){yn(new rn(mc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return pD(r,s,n)},"PUBLIC")),yn(new rn("analytics-internal",t,"PRIVATE")),Nt(lv,uv),Nt(lv,uv,"esm2020");function t(e){try{const n=e.getProvider(mc).getImmediate();return{logEvent:(r,s,i)=>_D(n,r,s,i),setUserProperties:(r,s)=>yD(n,r,s)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}vD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebasestorage.googleapis.com",wD="storageBucket",ED=2*60*1e3,ID=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends sn{constructor(e,n,r=0){super(dh(e),`Firebase Storage: ${n} (${dh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function dh(t){return"storage/"+t}function TD(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(Un.UNKNOWN,t)}function xD(){return new zn(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SD(){return new zn(Un.CANCELED,"User canceled the upload/download.")}function AD(t){return new zn(Un.INVALID_URL,"Invalid URL '"+t+"'.")}function CD(t){return new zn(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cv(t){return new zn(Un.INVALID_ARGUMENT,t)}function bT(){return new zn(Un.APP_DELETED,"The Firebase app was deleted.")}function kD(t){return new zn(Un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw CD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),k={bucket:1,path:3},b=n===RT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",x=new RegExp(`^https?://${b}/${s}/${D}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:S,indices:k,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<A.length;V++){const O=A[V],j=O.regex.exec(e);if(j){const E=j[O.indices.bucket];let y=j[O.indices.path];y||(y=""),r=new hn(E,y),O.postModify(r);break}}if(r==null)throw AD(e);return r}}class RD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...D){c||(c=!0,e.apply(null,D))}function g(D){s=setTimeout(()=>{s=null,t(S,u())},D)}function m(){i&&clearTimeout(i)}function S(D,...x){if(c){m();return}if(D){m(),f.call(null,D,...x);return}if(u()||o){m(),f.call(null,D,...x);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,g(A)}let k=!1;function b(D){k||(k=!0,m(),!c&&(s!==null?(D||(l=2),clearTimeout(s),g(0)):D||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function PD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return t!==void 0}function dv(t,e,n,r){if(r<e)throw cv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cv(`Invalid value for '${t}'. Expected ${n} or less.`)}function DD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var gc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gc||(gc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,s,i,o,l,u,c,f,g,m=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,b)=>{this.resolve_=k,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Zl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===gc.NO_ERROR,u=i.getStatus();if(!l||VD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===gc.ABORT;r(!1,new Zl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Zl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());ND(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=TD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?bT():SD();o(u)}else{const u=xD();o(u)}};this.canceled_?n(!1,new Zl(!1,null,!0)):this.backoffId_=bD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UD(t,e,n,r,s,i,o=!0,l=!1){const u=DD(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return jD(f,e),MD(f,n),LD(f,i),FD(f,r),new OD(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yc(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BD(this._location.path)}get storage(){return this._service}get parent(){const e=zD(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new yc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kD(e)}}function hv(t,e){const n=e==null?void 0:e[wD];return n==null?null:hn.makeFromBucketSpec(n,t)}function $D(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ks(e);s&&(Dp(`https://${t.host}/b`),Vp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Fw(i,t.app.options.projectId))}class qD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=RT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ED,this._maxUploadRetryTime=ID,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=hv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=hv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new RD(bT());{const o=UD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const fv="@firebase/storage",pv="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="storage";function WD(t=Mc(),e){t=be(t);const r=as(t,PT).getImmediate({identifier:e}),s=Mw("storage");return s&&HD(r,...s),r}function HD(t,e,n,r={}){$D(t,e,n,r)}function GD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new qD(n,r,s,e,Ys)}function KD(){yn(new rn(PT,GD,"PUBLIC").setMultipleInstances(!0)),Nt(fv,pv,""),Nt(fv,pv,"esm2020")}KD();const QD={apiKey:"AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ",authDomain:"giftwave-pro.firebaseapp.com",projectId:"giftwave-pro",storageBucket:"giftwave-pro.firebasestorage.app",messagingSenderId:"964612051931",appId:"1:964612051931:web:c318a4f6ba21c51d3a8dfe",measurementId:"G-Z8YJ83DXW2"},ld=Hw(QD),Cn=kR(ld),Ee=O2(ld);WD(ld);typeof window<"u"&&mD(ld);const NT=q.createContext();function YD({children:t}){const[e,n]=q.useState(null),[r,s]=q.useState([]),[i,o]=q.useState(!0);q.useEffect(()=>{const S=setTimeout(()=>{o(!1)},3e3),k=gk(Cn,async D=>{try{if(D){const x=vt(Ee,"users",D.uid),v=await Q2(x);if(v.exists()){const A=D.emailVerified,V={id:D.uid,...v.data(),isVerified:A};n(V),await Yt(x,{lastSeen:"online"})}}else e&&await Yt(vt(Ee,"users",e.id),{lastSeen:new Date().toISOString()}),n(null)}catch(x){console.error("Auth error:",x)}finally{clearTimeout(S),o(!1)}},D=>{console.error("Auth state error:",D),clearTimeout(S),o(!1)}),b=()=>{Cn.currentUser&&Yt(vt(Ee,"users",Cn.currentUser.uid),{lastSeen:new Date().toISOString()})};return window.addEventListener("beforeunload",b),()=>{k(),clearTimeout(S),window.removeEventListener("beforeunload",b)}},[]),q.useEffect(()=>{if(e&&e.isVerified){const S=$i(Gt(Ee,"users"));return Tu(S,b=>{const D=b.docs.map(x=>({id:x.id,...x.data()}));s(D)})}},[e]);const l=async(S,k,b,D,x)=>{try{const v=Gt(Ee,"users"),A=$i(v,fc("username","==",S));if(!(await Vf(A)).empty)return{error:"Этот юзернейм уже занят. Выберите другой."};const j=(await dk(Cn,D,k)).user;await fk(j);const E={username:S.toLowerCase(),displayName:x||S,bio:b,email:D,phone:"",birthday:"",nameColor:"#ffffff",isVerified:!1,role:S.toLowerCase()==="admin"?"admin":"user",avatar:`https://api.dicebear.com/7.x/shapes/svg?seed=${S}`,coins:500,createdAt:new Date().toISOString()};return await Y2(vt(Ee,"users",j.uid),E),n({id:j.uid,...E}),{success:!0}}catch(v){let A=v.message;return v.code==="auth/email-already-in-use"&&(A="Пользователь с такой почтой уже зарегистрирован."),{error:A}}},u=async(S,k)=>{try{return await hk(Cn,S,k),{success:!0}}catch{return{error:"Неверный логин или пароль"}}},c=async()=>{if(!Cn.currentUser)return;await Cn.currentUser.reload();const S=Cn.currentUser.emailVerified;return S&&(await Yt(vt(Ee,"users",Cn.currentUser.uid),{isVerified:!0}),n(k=>({...k,isVerified:!0}))),S},f=async(S,k)=>{if((e==null?void 0:e.role)!=="admin")return{error:"Access denied"};try{const D=(r.find(x=>x.id===S).coins||0)+parseInt(k);return await Yt(vt(Ee,"users",S),{coins:D}),s(x=>x.map(v=>v.id===S?{...v,coins:D}:v)),{success:!0}}catch(b){return{error:b.message}}},g=()=>yk(Cn),m=async S=>{if(e)try{if(S.username&&S.username!==e.username){const b=Gt(Ee,"users"),D=$i(b,fc("username","==",S.username));if(!(await Vf(D)).empty)return{error:"Этот юзернейм уже занят."}}const k=vt(Ee,"users",e.id);return await Yt(k,S),n(b=>({...b,...S})),{success:!0}}catch(k){return console.error("Error updating user:",k),{error:k.message}}};return p.jsx(NT.Provider,{value:{user:e,allUsers:r,register:l,login:u,logout:g,checkVerification:c,giveCoins:f,updateUser:m,loading:i},children:!i&&t})}const ti=()=>q.useContext(NT);function JD(t,e){const[n,r]=q.useState(()=>{try{const s=localStorage.getItem(t);if(s!==null)return JSON.parse(s)}catch(s){console.error(`Error reading localStorage key "${t}":`,s)}return e});return q.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(n))}catch(s){console.error(`Error setting localStorage key "${t}":`,s)}},[t,n]),[n,r]}const DT=q.createContext(),eu={manageInfo:!0,manageMembers:!1,deleteMessages:!1};function XD({children:t}){const{user:e}=ti(),[n,r]=q.useState([]),[s,i]=q.useState([]),[o,l]=JD("activeChatId",null),[u,c]=q.useState(o),[f,g]=q.useState([]),[m,S]=q.useState([]),k=I=>{c(I),l(I)};q.useEffect(()=>{if(!e){r([]);return}const I=$i(Gt(Ee,"chats"),fc("participants","array-contains",e.id));return Tu(I,H=>{const U=H.docs.map(K=>({id:K.id,...K.data()}));r(U)})},[e]),q.useEffect(()=>{if(!u){g([]);return}const I=$i(Gt(Ee,`chats/${u}/messages`),G2("timestamp","asc"));return Tu(I,H=>{const U=H.docs.map(K=>({id:K.id,...K.data()}));g(U)})},[u]),q.useEffect(()=>{if(!e){i([]);return}const I=$i(Gt(Ee,"chats"),fc("type","in",["group","channel"]));return Tu(I,H=>{const U=H.docs.map(K=>({id:K.id,...K.data()})).filter(K=>{var ge;return!((ge=K.participants)!=null&&ge.includes(e.id))});i(U)})},[e]);const b=I=>n.find(w=>w.id===I)||s.find(w=>w.id===I),D=I=>{if(!e||!I)return{isOwner:!1,isAdmin:!1,canManageInfo:!1,canManageMembers:!1,canDeleteMessages:!1};const w=I.ownerId===e.id,H=Array.isArray(I.adminIds)?I.adminIds:[I.ownerId].filter(Boolean),U={...eu,...I.adminPermissions||{}},K=H.includes(e.id);return{isOwner:w,isAdmin:K,canManageInfo:w||K&&U.manageInfo,canManageMembers:w||K&&U.manageMembers,canDeleteMessages:w||K&&U.deleteMessages}},x=async I=>{if(!e)return;const w=n.find(K=>K.type==="dm"&&K.participants.includes(I.id));if(w){k(w.id);return}const H={type:"dm",name:I.username,participants:[e.id,I.id],lastMessage:null,createdAt:An()},U=await Jo(Gt(Ee,"chats"),H);k(U.id)},v=async(I,w)=>{const H=[...new Set([...w||[],e.id])],U={type:"group",name:I,participants:H,ownerId:e.id,adminIds:[e.id],adminPermissions:eu,lastMessage:"Группа создана",createdAt:An()},K=await Jo(Gt(Ee,"chats"),U);k(K.id)},A=async(I,w)=>{const H=[...new Set([...w||[],e.id])],U={type:"channel",name:I,participants:H,ownerId:e.id,adminIds:[e.id],adminPermissions:eu,lastMessage:"Канал создан",createdAt:An()},K=await Jo(Gt(Ee,"chats"),U);k(K.id)},V=async(I,w="text",H={})=>{if(!e||!u)return;const U={chatId:u,text:I,senderId:e.id,senderName:e.username,type:w,metadata:H,timestamp:An()};await Jo(Gt(Ee,`chats/${u}/messages`),U),await Yt(vt(Ee,"chats",u),{lastMessage:I,lastUpdated:An()})},O=(I,w=8e3)=>{const H=Date.now();S(U=>[...U,{id:H,type:I}]),setTimeout(()=>S(U=>U.filter(K=>K.id!==H)),w)},j=async(I,w)=>{if(!(!e||!u||!I))try{const H=f.find(z=>z.id===I),U=Array.isArray(H==null?void 0:H.reactions)?H.reactions:[],ge=U.some(z=>z.emoji===w&&z.userId===e.id)?U.filter(z=>!(z.emoji===w&&z.userId===e.id)):[...U,{emoji:w,userId:e.id}];await Yt(vt(Ee,`chats/${u}/messages`,I),{reactions:ge})}catch(H){console.error("Reaction error",H)}},E=async I=>{if(I)try{const w=Gt(Ee,`chats/${I}/messages`),U=(await Vf(w)).docs.map(K=>tv(K.ref));await Promise.all(U),await tv(vt(Ee,"chats",I)),u===I&&k(null)}catch(w){console.error("Error deleting chat",w)}},y=async I=>{if(!(!e||!I))try{const w=b(I);if(!w||!["group","channel"].includes(w.type))return;await Yt(vt(Ee,"chats",I),{participants:Q_(e.id),lastUpdated:An()}),await Jo(Gt(Ee,`chats/${I}/messages`),{chatId:I,text:`${e.displayName||e.username} присоединился(ась)`,senderId:e.id,senderName:e.username,type:"system",metadata:{},timestamp:An()}),k(I)}catch(w){console.error("Join chat error",w)}},T=async(I,w=[])=>{if(!(!e||!I||w.length===0))try{const H=b(I);if(!H)return;const{canManageMembers:U}=D(H);if(!U)return;const K=w.filter(Boolean);if(K.length===0)return;await Yt(vt(Ee,"chats",I),{participants:Q_(...K),lastUpdated:An()})}catch(H){console.error("Add members error",H)}},C=async(I,w)=>{if(!(!e||!I||!w))try{const H=b(I);if(!H||H.ownerId===w)return;const{canManageMembers:U}=D(H);if(!U&&e.id!==w)return;await Yt(vt(Ee,"chats",I),{participants:W2(w),lastUpdated:An()}),e.id===w&&u===I&&k(null)}catch(H){console.error("Remove member error",H)}},R=async(I,w={})=>{if(!(!e||!I||!w))try{const H=b(I);if(!H)return;const{isOwner:U,canManageInfo:K}=D(H),ge={};if(typeof w.name=="string"&&K){const z=w.name.trim();z&&(ge.name=z)}if(U&&Array.isArray(w.adminIds)&&(ge.adminIds=[...new Set([H.ownerId,...w.adminIds.filter(Boolean)])]),U&&w.adminPermissions&&(ge.adminPermissions={...eu,...w.adminPermissions}),Object.keys(ge).length===0)return;await Yt(vt(Ee,"chats",I),{...ge,lastUpdated:An()})}catch(H){console.error("Update chat settings error",H)}};return p.jsx(DT.Provider,{value:{chats:n,availableCommunities:s,activeChatId:u,setActiveChatId:k,messages:f,sendMessage:V,startPrivateChat:x,createGroup:v,createChannel:A,joinChat:y,addChatMembers:T,removeChatMember:C,updateChatSettings:R,toggleReaction:j,deleteChat:E,activeEffects:m,applyEffect:O},children:t})}const yo=()=>q.useContext(DT);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ve=(t,e)=>{const n=q.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>q.createElement("svg",{ref:f,...ZD,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${eV(t)}`,l].join(" "),...c},[...e.map(([g,m])=>q.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=ve("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=ve("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=ve("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=ve("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=ve("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=ve("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=ve("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ve("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=ve("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=ve("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=ve("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=ve("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=ve("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=ve("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=ve("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=ve("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=ve("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function wV(){const[t,e]=q.useState(!1),[n,r]=q.useState(!1),[s,i]=q.useState(""),[o,l]=q.useState(""),[u,c]=q.useState(""),[f,g]=q.useState(""),[m,S]=q.useState(""),[k,b]=q.useState(""),{login:D,register:x,checkVerification:v,logout:A,user:V}=ti();q.useEffect(()=>{V&&!V.isVerified?r(!0):r(!1)},[V]);const O=async y=>{if(y.preventDefault(),b(""),t){if(!/^[a-zA-Z0-9_]+$/.test(s)){b("Юзернейм может содержать только латинские буквы, цифры и подчеркивание.");return}const T=await x(s,f,m,u,o);T.error&&b(T.error)}else{const T=await D(u,f);T.error&&b(T.error)}},j=async()=>{await v()||b("Письмо еще не подтверждено. Проверьте почту и папку Спам!")},E=async()=>{await A(),r(!1),e(!1)};return n?p.jsx("div",{className:"flex min-h-screen bg-[#09090b] text-zinc-100 font-sans",children:p.jsx("div",{className:"flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center",children:p.jsxs("div",{className:"p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse",children:p.jsx(aV,{className:"w-10 h-10 text-emerald-500"})}),p.jsx("h2",{className:"text-2xl font-bold",children:"Подтвердите почту"}),p.jsxs("p",{className:"text-sm text-zinc-500",children:["Мы отправили ссылку на ",p.jsx("b",{children:V==null?void 0:V.email}),". Пожалуйста, перейдите по ней, чтобы активировать аккаунт."]}),p.jsxs("div",{className:"space-y-3 pt-4",children:[p.jsxs("button",{onClick:j,className:"w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all",children:[p.jsx(MT,{className:"w-4 h-4"}),"Я подтвердил! Войти"]}),p.jsx("button",{onClick:E,className:"w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all",children:"Отмена / Выйти"}),p.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-widest pt-2",children:"Не забудьте проверить папку Спам"})]})]})})}):p.jsxs("div",{className:"min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:[p.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"}),p.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"1s"}})]}),p.jsx("div",{className:"w-full max-w-md animate-slide-in-up",children:p.jsxs("div",{className:"bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10",children:[p.jsxs("div",{className:"flex flex-col items-center mb-8",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500",children:p.jsx(vV,{className:"w-10 h-10 text-emerald-500 fill-emerald-500/20"})}),p.jsx("h1",{className:"text-3xl font-black text-white tracking-tight mb-1",children:"GiftWave"}),p.jsx("p",{className:"text-zinc-500 text-sm font-medium",children:"Новое поколение мессенджеров"})]}),p.jsxs("div",{className:"mb-6 text-center",children:[p.jsx("h2",{className:"text-xl font-semibold",children:t?"Создать аккаунт":"С возвращением"}),p.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:t?"Используйте реальную почту для активации":"Введите данные для входа"})]}),p.jsxs("form",{onSubmit:O,className:"space-y-4",children:[t&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Имя (Отображаемое)"}),p.jsx("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:"Иван Иванов",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:s,onChange:y=>i(y.target.value),placeholder:"ivan_dev",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0}),p.jsx("p",{className:"text-[10px] text-zinc-500 mt-1 ml-1",children:"Только латиница, цифры и _"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Email"}),p.jsx("input",{type:"email",value:u,onChange:y=>c(y.target.value),placeholder:"alex@example.com",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Пароль"}),p.jsxs("div",{className:"relative",children:[p.jsx(iV,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600"}),p.jsx("input",{type:"password",value:f,onChange:y=>g(y.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0,minLength:6})]})]}),k&&p.jsx("p",{className:"text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center",children:k}),p.jsx("button",{type:"submit",className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20",children:t?"Отправить ссылку активации":"Войти в систему"})]}),p.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800 text-center",children:p.jsx("button",{onClick:()=>e(!t),className:"text-sm text-zinc-400 hover:text-emerald-500 transition-colors",children:t?"Уже есть аккаунт? Войти":"Нет аккаунта? Создать сейчас"})})]})})]})}function pi({isOpen:t,onClose:e,title:n,children:r}){return q.useEffect(()=>{const s=i=>{i.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[t,e]),t?Pw.createPortal(p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{className:"relative w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-zinc-800",children:[p.jsx("h3",{className:"text-lg font-semibold text-zinc-100",children:n}),p.jsx("button",{onClick:e,className:"p-1 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(Om,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"p-4",children:r})]})}),document.body):null}const Mf=async(t,e="auto")=>{var r;const n=new FormData;n.append("file",t),n.append("upload_preset","ryestqxz"),n.append("cloud_name","dnrrmyqf5"),console.log(`[Cloudinary] Starting upload... Type: ${e}, File: ${t.name}`);try{const i=await fetch(`https://api.cloudinary.com/v1_1/dnrrmyqf5/${e==="voice"?"video":e}/upload`,{method:"POST",body:n});if(!i.ok){const l=await i.json();throw console.error("[Cloudinary] Error response:",l),new Error(((r=l.error)==null?void 0:r.message)||`Upload failed: ${i.statusText}`)}const o=await i.json();return console.log("[Cloudinary] Upload success:",o.secure_url),o.secure_url}catch(s){throw console.error("[Cloudinary] Network error:",s),alert(`Ошибка загрузки файла: ${s.message}. Проверьте интернет или размер файла.`),s}};function EV(){var ko,Ro,ai;const{user:t,allUsers:e,logout:n,updateUser:r,giveCoins:s}=ti(),{chats:i,availableCommunities:o,activeChatId:l,setActiveChatId:u,startPrivateChat:c,createGroup:f,createChannel:g,joinChat:m,addChatMembers:S,removeChatMember:k,updateChatSettings:b,deleteChat:D}=yo(),[x,v]=q.useState(""),[A,V]=q.useState("messages"),[O,j]=q.useState(!1),[E,y]=q.useState(!1),[T,C]=q.useState(!1),[R,I]=q.useState(!1),[w,H]=q.useState(!1),[U,K]=q.useState(""),[ge,z]=q.useState(100),[Y,X]=q.useState(""),[Z,ye]=q.useState(""),[Vt,tt]=q.useState(t.displayName||""),[Ot,ut]=q.useState(t.username||""),[xt,Qe]=q.useState(t.email||""),[hr,Lm]=q.useState(t.phone||""),[fl,pl]=q.useState(t.bio||""),[ni,ml]=q.useState(t.birthday||""),[vo,wo]=q.useState(t.nameColor||"#ffffff"),[fr,Eo]=q.useState(null),[Ue,Ye]=q.useState(!1),[ri,Io]=q.useState(!1),[ds,ud]=q.useState(null),[pr,To]=q.useState(""),[si,hs]=q.useState(""),[xo,gl]=q.useState([]),[fs,ps]=q.useState({manageInfo:!0,manageMembers:!1,deleteMessages:!1}),wn=(P,ie,pe,Mt)=>{const Bn=P%10,$n=P%100;return Bn===1&&$n!==11?ie:Bn>=2&&Bn<=4&&($n<10||$n>=20)?pe:Mt},ae=i.find(P=>P.id===ds)||null,ii=((ae==null?void 0:ae.participants)||[]).map(P=>e.find(ie=>ie.id===P)).filter(Boolean),En=(ae==null?void 0:ae.adminIds)||[ae==null?void 0:ae.ownerId].filter(Boolean),So={manageInfo:((ko=ae==null?void 0:ae.adminPermissions)==null?void 0:ko.manageInfo)??!0,manageMembers:((Ro=ae==null?void 0:ae.adminPermissions)==null?void 0:Ro.manageMembers)??!1,deleteMessages:((ai=ae==null?void 0:ae.adminPermissions)==null?void 0:ai.deleteMessages)??!1},on=(ae==null?void 0:ae.ownerId)===t.id,Ao=En.includes(t.id),mr=on||Ao&&So.manageInfo,Co=on||Ao&&So.manageMembers,nt=e.filter(P=>{var ie;return!((ie=ae==null?void 0:ae.participants)!=null&&ie.includes(P.id))}),yl=P=>{var ie,pe,Mt;ud(P.id),To(P.name||""),gl(P.adminIds||[P.ownerId].filter(Boolean)),ps({manageInfo:((ie=P.adminPermissions)==null?void 0:ie.manageInfo)??!0,manageMembers:((pe=P.adminPermissions)==null?void 0:pe.manageMembers)??!1,deleteMessages:((Mt=P.adminPermissions)==null?void 0:Mt.deleteMessages)??!1}),hs(""),Io(!0)},ms=P=>{!on||!ae||P!==ae.ownerId&&gl(ie=>ie.includes(P)?ie.filter(pe=>pe!==P):[...ie,P])},gs=async P=>{if(P.preventDefault(),!ae)return;const ie={};mr&&(ie.name=pr),on&&(ie.adminIds=xo,ie.adminPermissions=fs),await b(ds,ie),Io(!1)},cd=async()=>{si&&(await S(ds,[si]),hs(""))},dd=async P=>{if(P.preventDefault(),!Ue){Ye(!0);try{let ie=t.avatar;fr&&(ie=await Mf(fr,"image"));const pe=await r({displayName:Vt,username:Ot.toLowerCase().trim(),email:xt,avatar:ie,bio:fl,birthday:ni,nameColor:vo});pe!=null&&pe.error?alert(pe.error):(I(!1),Eo(null))}catch(ie){console.error("Profile update error:",ie),alert("Ошибка при обновлении профиля: "+ie.message)}finally{Ye(!1)}}},gr=e.filter(P=>{var ie;return P.id!==t.id&&(P.username.toLowerCase().includes(x.toLowerCase())||((ie=P.displayName)==null?void 0:ie.toLowerCase().includes(x.toLowerCase())))}),hd=P=>{P.preventDefault(),U&&ge&&(s(U,ge),alert("Монеты успешно выданы!"))},fd=P=>{P.preventDefault(),Y.trim()&&(f(Y,[t.id]),X(""),y(!1))},oi=P=>{P.preventDefault(),Z.trim()&&(g(Z,[t.id]),ye(""),C(!1))};return p.jsxs("div",{className:"w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50",children:[p.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md",children:[p.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[p.jsxs("div",{className:"relative shrink-0",children:[p.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-xl bg-zinc-800 object-cover",alt:"me"}),p.jsx("div",{className:"absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"flex-1 min-w-0 pr-2",children:[p.jsxs("div",{className:"font-semibold text-sm truncate flex items-center gap-1",style:{color:t.nameColor||"#e4e4e7"},children:[p.jsx("span",{className:"truncate",children:t.displayName||t.username}),t.role==="admin"&&p.jsx(fV,{className:"w-3 h-3 text-red-500 shrink-0",title:"Admin"})]}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",t.username]}),p.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter",children:[p.jsx(nV,{className:"w-2.5 h-2.5"}),t.coins," credits"]})]})]}),p.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors",children:p.jsx(oV,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"p-4",children:p.jsxs("div",{className:"relative group",children:[p.jsx(LT,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors"}),p.jsx("input",{type:"text",value:x,onChange:P=>v(P.target.value),placeholder:"Поиск людей...",className:"w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"})]})}),p.jsx("div",{className:"flex px-4 mb-2 gap-1",children:[{id:"messages",icon:lV,label:"Чаты"},{id:"groups",icon:_V,label:"Группы"},{id:"channels",icon:sV,label:"Каналы"}].map(P=>p.jsxs("button",{onClick:()=>V(P.id),className:`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${A===P.id?"bg-emerald-500/10 text-emerald-500":"text-zinc-500 hover:bg-zinc-800/50"}`,children:[p.jsx(P.icon,{className:"w-4 h-4 mb-1"}),p.jsx("span",{className:"text-[10px] font-medium",children:P.label})]},P.id))}),p.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:x?p.jsxs("div",{className:"p-2 space-y-1",children:[p.jsx("div",{className:"px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",children:"Результаты поиска"}),gr.map(P=>p.jsxs("button",{onClick:()=>{c(P),v("")},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group",children:[p.jsx("img",{src:P.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:P.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors",children:P.username}),p.jsx("div",{className:"text-xs text-zinc-500 truncate w-32",children:P.bio||"Нет описания"})]})]},P.id))]}):p.jsxs("div",{className:"p-2 space-y-1",children:[i.filter(P=>A==="messages"&&P.type==="dm"||A==="groups"&&P.type==="group"||A==="channels"&&P.type==="channel").map(P=>{var In,ui,El,No;const ie=(In=P.participants)==null?void 0:In.find(ci=>ci!==t.id),pe=P.type==="dm"?e.find(ci=>ci.id===ie):null,Mt=pe?pe.displayName||pe.username:P.name,Bn=pe?pe.avatar:null,$n=(pe==null?void 0:pe.lastSeen)==="online",yr=((ui=P.participants)==null?void 0:ui.length)||0,_l=P.type==="group"?`${yr} ${wn(yr,"участник","участника","участников")}`:`${yr} ${wn(yr,"подписчик","подписчика","подписчиков")}`,pd=P.adminIds||[P.ownerId].filter(Boolean),bo=P.ownerId===t.id,vl=pd.includes(t.id),li=bo||vl&&(((El=P.adminPermissions)==null?void 0:El.manageInfo)??!0),wl=bo||vl&&(((No=P.adminPermissions)==null?void 0:No.manageMembers)??!1),Po=P.type!=="dm"&&(li||wl),ys=P.type!=="dm"&&(P.ownerId===t.id||t.role==="admin");return p.jsxs("div",{className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${l===P.id?"bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]":"hover:bg-zinc-800/50 border border-transparent"}`,children:[p.jsxs("button",{onClick:()=>u(P.id),className:"flex items-center gap-3 flex-1 min-w-0 text-left",children:[p.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden",children:[Bn?p.jsx("img",{src:Bn,className:"w-full h-full object-cover",alt:"avatar"}):Mt[0].toUpperCase(),P.type==="dm"&&$n&&p.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"text-left flex-1 min-w-0",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:Mt}),p.jsx("div",{className:"text-xs text-zinc-500 truncate",children:P.type==="dm"?P.lastMessage||"Нет сообщений":_l})]})]}),Po&&p.jsx("button",{onClick:()=>yl(P),className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-emerald-400 hover:bg-emerald-500/10",children:"Управление"}),ys&&p.jsx("button",{onClick:()=>{window.confirm("Удалить этот чат вместе со всеми сообщениями?")&&D(P.id)},className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-red-400 hover:bg-red-500/10",children:"Удалить"})]},P.id)}),A!=="messages"&&o.filter(P=>A==="groups"&&P.type==="group"||A==="channels"&&P.type==="channel").map(P=>{var ie,pe,Mt;return p.jsx("div",{className:"w-full p-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30",children:p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:P.name}),p.jsxs("div",{className:"text-xs text-zinc-500",children:[((ie=P.participants)==null?void 0:ie.length)||0," ",P.type==="group"?wn(((pe=P.participants)==null?void 0:pe.length)||0,"участник","участника","участников"):wn(((Mt=P.participants)==null?void 0:Mt.length)||0,"подписчик","подписчика","подписчиков")]})]}),p.jsxs("button",{onClick:()=>m(P.id),className:"px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-1",children:[p.jsx(yV,{className:"w-3.5 h-3.5"}),"Вступить"]})]})},P.id)}),A!=="messages"&&p.jsxs("button",{onClick:()=>{A==="groups"&&y(!0),A==="channels"&&C(!0)},className:"w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4",children:[p.jsx(gv,{className:"w-5 h-5"}),p.jsx("span",{className:"text-sm font-semibold",children:A==="groups"?"Создать группу":"Создать канал"})]})]})}),p.jsxs("div",{className:"p-4 border-t border-zinc-800/50 space-y-1",children:[t.role==="admin"&&p.jsxs("button",{onClick:()=>H(!0),className:"w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium",children:[p.jsx(gV,{className:"w-4 h-4"}),"Панель разработчика"]}),p.jsxs("button",{onClick:()=>I(!0),className:"w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium",children:[p.jsx(hV,{className:"w-4 h-4"}),"Настройки профиля"]})]}),p.jsx(pi,{isOpen:w,onClose:()=>H(!1),title:"Console: Developer Panel",children:p.jsxs("form",{onSubmit:hd,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Выбрать пользователя"}),p.jsxs("select",{value:U,onChange:P=>K(P.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0,children:[p.jsx("option",{value:"",children:"Выберите аккаунт"}),e.map(P=>p.jsxs("option",{value:P.id,children:[P.username," (ID: ",P.id,")"]},P.id))]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Количество монет"}),p.jsx("input",{type:"number",value:ge,onChange:P=>z(P.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs",children:"Выдать валюту"})]})}),p.jsx(pi,{isOpen:O,onClose:()=>j(!1),title:"Найти собеседника",children:p.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:e.filter(P=>P.id!==t.id).map(P=>p.jsxs("button",{onClick:()=>{c(P),j(!1)},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all",children:[p.jsx("img",{src:P.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:P.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200",children:P.username}),p.jsx("div",{className:"text-xs text-zinc-500",children:P.bio||"Нет описания"})]})]},P.id))})}),p.jsx(pi,{isOpen:E,onClose:()=>y(!1),title:"Создать группу",children:p.jsxs("form",{onSubmit:fd,className:"space-y-4",children:[p.jsx("input",{type:"text",value:Y,onChange:P=>X(P.target.value),placeholder:"Название группы",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(pi,{isOpen:T,onClose:()=>C(!1),title:"Создать канал",children:p.jsxs("form",{onSubmit:oi,className:"space-y-4",children:[p.jsx("input",{type:"text",value:Z,onChange:P=>ye(P.target.value),placeholder:"Название канала",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(pi,{isOpen:ri,onClose:()=>Io(!1),title:(ae==null?void 0:ae.type)==="group"?"Управление группой":"Управление каналом",children:ae?p.jsxs("form",{onSubmit:gs,className:"space-y-4",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Название"}),p.jsx("input",{type:"text",value:pr,onChange:P=>To(P.target.value),disabled:!mr,className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none disabled:opacity-50"})]}),on&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Админы"}),p.jsx("div",{className:"max-h-36 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:ii.map(P=>p.jsxs("button",{type:"button",onClick:()=>ms(P.id),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${xo.includes(P.id)?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300":"border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`,children:[p.jsx("span",{children:P.displayName||P.username}),p.jsx("span",{children:P.id===ae.ownerId?"Владелец":xo.includes(P.id)?"Админ":"Участник"})]},P.id))})]}),on&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Права админов"}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Редактирование информации"}),p.jsx("input",{type:"checkbox",checked:fs.manageInfo,onChange:P=>ps(ie=>({...ie,manageInfo:P.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Управление участниками"}),p.jsx("input",{type:"checkbox",checked:fs.manageMembers,onChange:P=>ps(ie=>({...ie,manageMembers:P.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Удаление сообщений"}),p.jsx("input",{type:"checkbox",checked:fs.deleteMessages,onChange:P=>ps(ie=>({...ie,deleteMessages:P.target.checked}))})]})]})]}),Co&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Добавить участника"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("select",{value:si,onChange:P=>hs(P.target.value),className:"flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs outline-none focus:border-emerald-500/50",children:[p.jsx("option",{value:"",children:"Выберите пользователя"}),nt.map(P=>p.jsx("option",{value:P.id,children:P.displayName||P.username},P.id))]}),p.jsx("button",{type:"button",onClick:cd,className:"px-3 py-2 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-500",children:"Добавить"})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Участники"}),p.jsx("div",{className:"max-h-40 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:ii.map(P=>p.jsxs("div",{className:"flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs",children:[p.jsx("span",{className:"text-zinc-200 truncate pr-2",children:P.displayName||P.username}),p.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[P.id===ae.ownerId&&p.jsx("span",{className:"text-amber-500",children:"Owner"}),P.id!==ae.ownerId&&En.includes(P.id)&&p.jsx("span",{className:"text-emerald-500",children:"Admin"}),Co&&P.id!==ae.ownerId&&p.jsx("button",{type:"button",onClick:()=>k(ds,P.id),className:"text-red-400 hover:text-red-300",children:"Удалить"})]})]},P.id))})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium",children:"Сохранить"})]}):null}),p.jsx(pi,{isOpen:R,onClose:()=>I(!1),title:"Настройки профиля",children:p.jsxs("form",{onSubmit:dd,className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-col items-center gap-3 mb-4",children:[p.jsxs("div",{className:"relative group",children:[p.jsx("img",{src:fr?URL.createObjectURL(fr):t.avatar,className:"w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800",alt:"Avatar"}),p.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity",children:[p.jsx(gv,{className:"w-8 h-8 text-white"}),p.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:P=>Eo(P.target.files[0])})]})]}),p.jsx("p",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-widest",children:"Нажмите, чтобы изменить фото"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Отображаемое имя (русский доступен)"}),p.jsx("input",{type:"text",value:Vt,onChange:P=>tt(P.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Цвет имени"}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("input",{type:"color",value:vo,onChange:P=>wo(P.target.value),className:"w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer"}),p.jsx("span",{className:"text-xs text-zinc-400",children:vo})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Дата рождения"}),p.jsx("input",{type:"date",value:ni,onChange:P=>ml(P.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"О себе"}),p.jsx("textarea",{value:fl,onChange:P=>pl(P.target.value),rows:3,className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50 resize-none text-sm",placeholder:"Расскажите немного о себе..."})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:Ot,onChange:P=>ut(P.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Email"}),p.jsx("input",{type:"email",value:xt,onChange:P=>Qe(P.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"})]}),p.jsx("button",{type:"submit",disabled:Ue,className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2",children:Ue?p.jsxs(p.Fragment,{children:[p.jsx(MT,{className:"w-4 h-4 animate-spin"}),"Загрузка..."]}):p.jsxs(p.Fragment,{children:[p.jsx(tV,{className:"w-4 h-4"}),"Сохранить изменения"]})})]})})]})}const IV=[{id:"hearts",name:"Дождь из сердец",description:"Наполните чат любовью и нежностью",price:150,effect:"hearts",icon:p.jsx(OT,{className:"w-5 h-5 text-rose-500 fill-rose-500"})},{id:"fire",name:"Пламя страсти",description:"Горячий эффект для ярких эмоций",price:300,effect:"fire",icon:p.jsx(rV,{className:"w-5 h-5 text-orange-500 fill-orange-500"})},{id:"stars",name:"Звездная пыль",description:"Волшебное сияние ночного неба",price:500,effect:"stars",icon:p.jsx(pV,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"})}];function TV({onSelect:t,onClose:e}){return p.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[p.jsx("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest",children:"Premium Store"}),p.jsx("button",{onClick:e,className:"p-1 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(Om,{className:"w-4 h-4 text-zinc-600"})})]}),p.jsx("div",{className:"space-y-2",children:IV.map(n=>p.jsxs("button",{onClick:()=>t(n),className:"w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group",children:[p.jsx("div",{className:"p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform",children:n.icon}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"text-sm font-semibold text-zinc-100",children:n.name}),p.jsx("div",{className:"text-[10px] text-zinc-500 leading-tight",children:n.description})]}),p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("div",{className:"text-amber-500 font-bold text-sm",children:n.price}),p.jsx("div",{className:"text-[8px] text-zinc-600 uppercase font-black",children:"Credits"})]})]},n.id))})]})}function xV(){const[t,e]=q.useState(""),[n,r]=q.useState(!1),[s,i]=q.useState(!1),[o,l]=q.useState(!1),{user:u,updateUser:c}=ti(),{sendMessage:f,applyEffect:g,activeChatId:m}=yo(),S=q.useRef(),k=q.useRef(null),b=q.useRef([]),D=O=>{O.preventDefault(),t.trim()&&!o&&(f(t),e(""))},x=async O=>{const j=O.target.files[0];if(!j||!m)return;const E=30,y=E*1024*1024;if(j.size>y){alert(`Файл слишком большой. Максимальный размер: ${E}MB.`),O.target.value="";return}l(!0);try{const T=j.type.startsWith("image/")?"image":j.type.startsWith("video/")?"video":"file",C=await Mf(j,T==="video"?"video":"image");await f(j.name,T,{url:C,fileName:j.name,fileSize:j.size})}catch(T){alert("Ошибка загрузки: "+T.message)}finally{l(!1),S.current.value=""}},v=async()=>{try{const O=await navigator.mediaDevices.getUserMedia({audio:!0});k.current=new MediaRecorder(O),b.current=[],k.current.ondataavailable=j=>{b.current.push(j.data)},k.current.onstop=async()=>{const j=new Blob(b.current,{type:"audio/webm"}),E=new File([j],`voice_${Date.now()}.webm`,{type:"audio/webm"});l(!0);try{const y=await Mf(E,"video");await f("Голосовое сообщение","voice",{url:y,duration:0})}catch(y){alert("Ошибка отправки голосового: "+y.message)}finally{l(!1)}},k.current.start(),i(!0)}catch(O){alert("Доступ к микрофону отклонен: "+O.message)}},A=()=>{k.current&&s&&(k.current.stop(),i(!1),k.current.stream.getTracks().forEach(O=>O.stop()))},V=async O=>{if(u.coins>=O.price)try{const j=u.coins-O.price,E=await c({coins:j});if(E!=null&&E.error){alert(E.error);return}await f(`🎁 Отправил подарок: ${O.name}! ✨`,"gift",{giftId:O.id,giftName:O.name,effect:O.effect}),g(O.effect),r(!1)}catch(j){console.error("Gift error:",j),alert("Ошибка при покупке подарка: "+j.message)}else alert(`Недостаточно монет! Стоимость подарка: ${O.price}, у вас: ${u.coins}`)};return p.jsxs("div",{className:"relative",children:[n&&p.jsx("div",{className:"absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200",children:p.jsx(TV,{onSelect:V,onClose:()=>r(!1)})}),p.jsxs("div",{className:"flex flex-col gap-2",children:[o&&p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse",children:[p.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-bounce"}),p.jsx("span",{className:"text-xs text-zinc-400",children:"Отправка файла..."})]}),p.jsxs("form",{onSubmit:D,className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all",children:[p.jsx("input",{type:"file",ref:S,onChange:x,className:"hidden",accept:"image/*,video/*"}),p.jsx("button",{type:"button",onClick:()=>S.current.click(),className:"p-2 text-zinc-500 hover:text-zinc-200 transition-colors",children:p.jsx(cV,{className:"w-5 h-5"})}),p.jsx("input",{type:"text",value:t,onChange:O=>e(O.target.value),placeholder:s?"Идет запись голоса...":"Напишите сообщение...",disabled:s,className:"flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("button",{type:"button",onClick:s?A:v,className:`p-2 rounded-xl transition-all ${s?"bg-red-500 text-white animate-pulse":"text-zinc-500 hover:text-zinc-200"}`,children:s?p.jsx(mV,{className:"w-5 h-5"}):p.jsx(uV,{className:"w-5 h-5"})}),p.jsx("button",{type:"button",onClick:()=>r(!n),className:`p-2 rounded-xl transition-all ${n?"bg-amber-500 text-black shadow-lg shadow-amber-500/20":"text-amber-500 hover:bg-amber-500/10"}`,children:p.jsx(VT,{className:"w-5 h-5"})}),p.jsx("button",{type:"submit",disabled:!t.trim()||o,className:"p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20",children:p.jsx(dV,{className:"w-5 h-5"})})]})]})]})]})}function SV(){var w,H;const{user:t,allUsers:e}=ti(),{messages:n,chats:r,activeChatId:s,setActiveChatId:i,applyEffect:o,activeEffects:l,sendMessage:u,toggleReaction:c}=yo(),f=q.useRef(),g=q.useRef(new Set),[m,S]=q.useState(!1),[k,b]=q.useState(""),[D,x]=q.useState(!1),v=r.find(U=>U.id===s),A=(v==null?void 0:v.type)==="dm",V=(w=v==null?void 0:v.participants)==null?void 0:w.find(U=>U!==t.id),O=e.find(U=>U.id===V),j=A&&O?O.displayName||O.username:(v==null?void 0:v.name)||"Чат",E=O?O.avatar:null,y=(O==null?void 0:O.lastSeen)==="online",T=((H=v==null?void 0:v.participants)==null?void 0:H.length)||0,C=A?y?"В сети":O!=null&&O.lastSeen?`Был(а) ${new Date(O.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Не в сети":(v==null?void 0:v.type)==="group"?`${T} участников`:`${T} подписчиков`,R=q.useMemo(()=>k?n.filter(U=>{var K;return(K=U.text)==null?void 0:K.toLowerCase().includes(k.toLowerCase())}):n,[n,k]),I=async U=>{const K=U==="video"?"📹":"📞",ge=U==="video"?"видеозвонок":"голосовой звонок";try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(ye=>ye.stop())}catch{alert("Нет доступа к микрофону. Разрешите микрофон в браузере, чтобы звонить.");return}const z=r.find(Z=>Z.id===s);if(!z||z.type!=="dm")return;const Y=z.participants.find(Z=>Z!==t.id);e.find(Z=>Z.id===Y)&&await u(`${K} ${t.displayName} начал ${ge}!`,"call",{callType:U,callerId:t.id,callerName:t.displayName,targetId:Y,timestamp:Date.now(),status:"ringing",chatId:s})};return q.useEffect(()=>{if(!(!n||n.length===0))try{const U=Date.now();n.forEach(K=>{var Y;if(K.type!=="gift"||!K.timestamp||g.current.has(K.id))return;const ge=K.timestamp&&typeof K.timestamp.toMillis=="function"?K.timestamp.toMillis():K.timestamp?new Date(K.timestamp).getTime():Date.now();U-ge<6e4&&((Y=K.metadata)!=null&&Y.effect)&&(g.current.add(K.id),o(K.metadata.effect))})}catch(U){console.error("Gift sync error:",U)}},[n,o]),q.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[n]),s?p.jsxs("div",{className:"h-full flex flex-col bg-[#09090b] relative",children:[p.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40",children:[p.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p.jsx("button",{onClick:()=>i(null),className:"p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden",children:p.jsx(mv,{className:"w-5 h-5"})}),p.jsx("div",{onClick:()=>x(!0),className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform",children:E?p.jsx("img",{src:E,className:"w-full h-full object-cover",alt:"avatar"}):j?j[0].toUpperCase():"?"}),p.jsxs("div",{onClick:()=>x(!0),className:"min-w-0 cursor-pointer",children:[p.jsx("div",{className:"text-sm font-semibold text-zinc-100 truncate hover:text-emerald-500 transition-colors",children:j}),p.jsx("div",{className:`text-[10px] flex items-center gap-1 ${A&&y?"text-emerald-500":"text-zinc-500"}`,children:A&&y?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"}),C]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-zinc-500 rounded-full"}),C]})})]})]}),p.jsxs("div",{className:"flex items-center gap-1",children:[m?p.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2",children:[p.jsx("input",{autoFocus:!0,type:"text",placeholder:"Поиск...",value:k,onChange:U=>b(U.target.value),className:"bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"}),p.jsx("button",{onClick:()=>{S(!1),b("")},className:"text-zinc-500 hover:text-zinc-100 text-[10px]",children:"✕"})]}):p.jsx("button",{onClick:()=>S(!0),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(LT,{className:"w-4 h-4"})}),A&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>I("audio"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(Sa,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>I("video"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(jT,{className:"w-4 h-4"})})]})]})]}),D&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",children:p.jsxs("div",{className:"w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in",children:[p.jsx("div",{className:"h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900"}),p.jsxs("div",{className:"px-6 pb-6 -mt-12 flex flex-col items-center",children:[p.jsx("div",{className:"w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3",children:E?p.jsx("img",{src:E,className:"w-full h-full object-cover"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500",children:j[0].toUpperCase()})}),p.jsx("h3",{className:"text-lg font-bold text-zinc-100",children:j}),p.jsx("p",{className:"text-xs text-zinc-500 mb-4",children:C}),p.jsxs("div",{className:"w-full space-y-3",children:[p.jsxs("div",{className:"p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"О себе"}),p.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:A?(O==null?void 0:O.bio)||'Этот пользователь не заполнил раздел "О себе"':"Информация о сообществе доступна в управлении чатом."})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:A?"Монеты":"Участники"}),p.jsx("div",{className:"text-sm font-bold text-emerald-500",children:A?`🪙 ${(O==null?void 0:O.coins)||0}`:T})]}),p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:A?"Ранг":"Тип"}),p.jsx("div",{className:"text-sm font-bold text-amber-500 uppercase",children:A?(O==null?void 0:O.role)||"user":v==null?void 0:v.type})]})]})]}),p.jsx("button",{onClick:()=>x(!1),className:"w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors",children:"Закрыть"})]})]})}),p.jsx("div",{ref:f,className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10",children:R.map(U=>{var Y,X,Z,ye,Vt,tt,Ot,ut,xt;const K=U.senderId===t.id,ge=U.type==="system",z=(U.reactions||[]).reduce((Qe,hr)=>(Qe[hr.emoji]=(Qe[hr.emoji]||0)+1,Qe),{});return ge?p.jsx("div",{className:"flex justify-center my-2",children:p.jsx("div",{className:"px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30",children:U.text})},U.id):p.jsx("div",{className:`flex ${K?"justify-end":"justify-start"} animate-message-pop`,children:p.jsxs("div",{className:`flex flex-col max-w-[85%] ${K?"items-end":"items-start"} group mb-1`,children:[p.jsxs("div",{className:`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${U.type==="gift"?"gift-bubble border border-zinc-800/50 py-3":U.type==="call"?"bg-blue-600/20 border border-blue-500/30 text-blue-300":U.type==="image"||U.type==="video"?"p-1.5 bg-zinc-800/80 border border-zinc-700/30":K?"bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10":"bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30"}`,children:[U.type==="gift"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30",children:p.jsx(VT,{className:"w-6 h-6 text-emerald-500/80",strokeWidth:1.5})}),p.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60",children:"Особое внимание"}),p.jsx("div",{className:"text-zinc-100 font-light tracking-wide",children:U.text})]}),U.type==="call"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"text-2xl mb-1",children:((Y=U.text)==null?void 0:Y.split(" ")[0])||(((X=U.metadata)==null?void 0:X.callType)==="video"?"📹":"📞")}),p.jsx("div",{className:"text-sm font-medium",children:((Z=U.metadata)==null?void 0:Z.status)==="ringing"&&((ye=U.metadata)==null?void 0:ye.callerId)===t.id?"Вы звоните...":((Vt=U.metadata)==null?void 0:Vt.status)==="ringing"?"Вам звонят...":((tt=U.metadata)==null?void 0:tt.status)==="accepted"?"Звонок принят":((Ot=U.metadata)==null?void 0:Ot.status)==="declined"?"Звонок отклонен":(ut=U.text)==null?void 0:ut.replace(/^[📹📞]\s*/,"")}),p.jsx("div",{className:"text-xs opacity-50",children:((xt=U.metadata)==null?void 0:xt.status)==="ringing"?"Ожидание ответа":"История звонка"})]}),U.type==="image"&&p.jsx("img",{src:U.metadata.url,alt:"attachment",className:"max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(U.metadata.url,"_blank")}),U.type==="video"&&p.jsx("video",{src:U.metadata.url,controls:!0,className:"max-w-full rounded-xl overflow-hidden"}),U.type==="voice"&&p.jsxs("div",{className:"flex items-center gap-3 py-1 min-w-[200px]",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",children:p.jsx(Sa,{className:"w-4 h-4 text-emerald-500"})}),p.jsx("audio",{src:U.metadata.url,controls:!0,className:"h-8 w-full custom-audio-player"})]}),(U.type==="text"||U.type==="gift"||U.type==="call")&&U.text]}),p.jsxs("div",{className:"flex items-center gap-2 mt-1.5 px-1",children:[p.jsx("span",{className:"text-[10px] text-zinc-600 font-medium",children:U.timestamp?U.timestamp.toDate?U.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(U.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),p.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[Object.entries(z).map(([Qe,hr])=>p.jsxs("button",{onClick:()=>c(U.id,Qe),className:"px-1.5 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-200 flex items-center gap-1 hover:bg-zinc-700",children:[p.jsx("span",{children:Qe}),p.jsx("span",{className:"text-[9px] opacity-70",children:hr})]},Qe)),p.jsx("div",{className:"flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:["👍","❤️","🔥","😂","😢"].map(Qe=>p.jsx("button",{onClick:()=>c(U.id,Qe),className:"w-6 h-6 flex items-center justify-center rounded-full text-[14px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors",title:Qe,children:Qe},Qe))})]})]})]})},U.id)})}),p.jsxs("div",{className:"p-6 bg-gradient-to-t from-[#09090b] to-transparent",children:[p.jsx(xV,{}),p.jsx("p",{className:"text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest",children:"End-to-end encryption active"})]})]}):p.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500",children:[p.jsx("div",{className:"w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner",children:p.jsx(mv,{className:"w-8 h-8 opacity-20 rotate-180"})}),p.jsx("p",{className:"text-sm font-medium tracking-wide uppercase opacity-40",children:"Выберите чат для общения"})]})}function AV(){const{activeEffects:t}=yo();return p.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:t.map(e=>p.jsxs(Bf.Fragment,{children:[e.type==="hearts"&&p.jsx("div",{className:"absolute inset-0",children:[...Array(15)].map((n,r)=>p.jsx("div",{className:"absolute animate-float-up text-rose-500/40",style:{left:`${Math.random()*100}%`,top:"110%",animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`},children:p.jsx(OT,{size:20+Math.random()*30,fill:"currentColor"})},r))}),e.type==="fire"&&p.jsx("div",{className:"absolute inset-0 animate-pulse-fast bg-gradient-to-t from-orange-600/20 via-transparent to-transparent shadow-[inset_0_-50px_100px_rgba(249,115,22,0.2)]"}),e.type==="stars"&&p.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((n,r)=>p.jsx("div",{className:"absolute animate-twinkle bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${2+Math.random()*3}px`,height:`${2+Math.random()*3}px`,animationDelay:`${Math.random()*3}s`}},r))})]},e.id))})}function CV(){var f,g,m;const{user:t}=ti(),{messages:e,activeChatId:n,sendMessage:r}=yo(),[s,i]=q.useState(0),o=q.useMemo(()=>{if(!t||!n||!(e!=null&&e.length))return null;const S=Date.now(),k=e.filter(b=>{if(b.type!=="call"||!b.metadata||b.metadata.status!=="ringing"||b.metadata.chatId&&b.metadata.chatId!==n)return!1;const D=b.timestamp&&typeof b.timestamp.toMillis=="function"?b.timestamp.toMillis():b.timestamp?new Date(b.timestamp).getTime():S;return S-D>6e4?!1:b.metadata.callerId===t.id||b.metadata.targetId===t.id});return k.length?k[k.length-1]:null},[t,n,e]);if(q.useEffect(()=>{if(!o)return;i(0);const S=setInterval(()=>{i(b=>b+1)},1e3),k=setTimeout(()=>{c("cancelled")},3e4);return()=>{clearInterval(S),clearTimeout(k)}},[o]),!o)return null;const l=((f=o.metadata)==null?void 0:f.callerId)===t.id,u=((g=o.metadata)==null?void 0:g.callType)==="video",c=async S=>{var D;if(!o)return;await r(`${u?"📹":"📞"} Звонок ${u?"видеозвонок":"голосовой звонок"} ${S==="accepted"?"принят":S==="declined"?"отклонен":"отменен"}.`,"call",{...o.metadata,targetId:S==="cancelled"?(D=o.metadata)==null?void 0:D.targetId:t.id,status:S,timestamp:Date.now()})};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:p.jsxs("div",{className:"w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4",children:[p.jsx("div",{className:"w-14 h-1 rounded-full bg-zinc-800 mb-2"}),p.jsx("div",{className:"w-20 h-20 rounded-3xl bg-zinc-900 flex items-center justify-center mb-2",children:u?p.jsx(jT,{className:"w-10 h-10 text-emerald-400"}):p.jsx(Sa,{className:"w-10 h-10 text-emerald-400"})}),p.jsx("div",{className:"text-sm text-zinc-500 uppercase tracking-widest",children:l?"Исходящий звонок":"Входящий звонок"}),p.jsx("div",{className:"text-lg font-semibold text-zinc-100 text-center",children:((m=o.metadata)==null?void 0:m.callerName)||"Неизвестный пользователь"}),p.jsx("div",{className:"text-xs text-zinc-500 mb-1",children:u?"Видеозвонок через GiftWave":"Голосовой звонок через GiftWave"}),p.jsxs("div",{className:"text-[11px] text-zinc-500",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),p.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[!l&&p.jsx("button",{onClick:()=>c("declined"),className:"w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40",children:p.jsx(Om,{className:"w-7 h-7"})}),p.jsx("button",{onClick:()=>c(l?"cancelled":"accepted"),className:`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${l?"bg-zinc-600 shadow-zinc-600/40":"bg-emerald-500 shadow-emerald-500/40"}`,children:l?p.jsx(Sa,{className:"w-7 h-7 rotate-135"}):p.jsx(Sa,{className:"w-7 h-7 -rotate-45"})})]}),p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mt-4",children:l?"Ожидание ответа собеседника":"Разрешите доступ к микрофону, чтобы ответить"})]})})}const Mm="-",kV=t=>{const e=bV(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Mm);return l[0]===""&&l.length!==1&&l.shift(),FT(l,e)||RV(o)},getConflictingClassGroupIds:(o,l)=>{const u=n[o]||[];return l&&r[o]?[...u,...r[o]]:u}}},FT=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?FT(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Mm);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},yv=/^\[(.+)\]$/,RV=t=>{if(yv.test(t)){const e=yv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},bV=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return NV(Object.entries(t.classGroups),n).forEach(([i,o])=>{Lf(o,r,i,e)}),r},Lf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:_v(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(PV(s)){Lf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Lf(o,_v(e,i),n,r)})})},_v=(t,e)=>{let n=t;return e.split(Mm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},PV=t=>t.isThemeGetter,NV=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,DV=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},UT="!",VV=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const u=[];let c=0,f=0,g;for(let D=0;D<l.length;D++){let x=l[D];if(c===0){if(x===s&&(r||l.slice(D,D+i)===e)){u.push(l.slice(f,D)),f=D+i;continue}if(x==="/"){g=D;continue}}x==="["?c++:x==="]"&&c--}const m=u.length===0?l:l.substring(f),S=m.startsWith(UT),k=S?m.substring(1):m,b=g&&g>f?g-f:void 0;return{modifiers:u,hasImportantModifier:S,baseClassName:k,maybePostfixModifierPosition:b}};return n?l=>n({className:l,parseClassName:o}):o},OV=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},MV=t=>({cache:DV(t.cacheSize),parseClassName:VV(t),...kV(t)}),LV=/\s+/,jV=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(LV);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:f,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:S}=n(c);let k=!!S,b=r(k?m.substring(0,S):m);if(!b){if(!k){l=c+(l.length>0?" "+l:l);continue}if(b=r(m),!b){l=c+(l.length>0?" "+l:l);continue}k=!1}const D=OV(f).join(":"),x=g?D+UT:D,v=x+b;if(i.includes(v))continue;i.push(v);const A=s(b,k);for(let V=0;V<A.length;++V){const O=A[V];i.push(x+O)}l=c+(l.length>0?" "+l:l)}return l};function FV(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=zT(e))&&(r&&(r+=" "),r+=n);return r}const zT=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=zT(t[r]))&&(n&&(n+=" "),n+=e);return n};function UV(t,...e){let n,r,s,i=o;function o(u){const c=e.reduce((f,g)=>g(f),t());return n=MV(c),r=n.cache.get,s=n.cache.set,i=l,l(u)}function l(u){const c=r(u);if(c)return c;const f=jV(u,n);return s(u,f),f}return function(){return i(FV.apply(null,arguments))}}const Se=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},BT=/^\[(?:([a-z-]+):)?(.+)\]$/i,zV=/^\d+\/\d+$/,BV=new Set(["px","full","screen"]),$V=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qV=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,WV=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,HV=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,GV=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,qn=t=>Wi(t)||BV.has(t)||zV.test(t),Sr=t=>_o(t,"length",t4),Wi=t=>!!t&&!Number.isNaN(Number(t)),hh=t=>_o(t,"number",Wi),Xo=t=>!!t&&Number.isInteger(Number(t)),KV=t=>t.endsWith("%")&&Wi(t.slice(0,-1)),se=t=>BT.test(t),Ar=t=>$V.test(t),QV=new Set(["length","size","percentage"]),YV=t=>_o(t,QV,$T),JV=t=>_o(t,"position",$T),XV=new Set(["image","url"]),ZV=t=>_o(t,XV,r4),e4=t=>_o(t,"",n4),Zo=()=>!0,_o=(t,e,n)=>{const r=BT.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},t4=t=>qV.test(t)&&!WV.test(t),$T=()=>!1,n4=t=>HV.test(t),r4=t=>GV.test(t),s4=()=>{const t=Se("colors"),e=Se("spacing"),n=Se("blur"),r=Se("brightness"),s=Se("borderColor"),i=Se("borderRadius"),o=Se("borderSpacing"),l=Se("borderWidth"),u=Se("contrast"),c=Se("grayscale"),f=Se("hueRotate"),g=Se("invert"),m=Se("gap"),S=Se("gradientColorStops"),k=Se("gradientColorStopPositions"),b=Se("inset"),D=Se("margin"),x=Se("opacity"),v=Se("padding"),A=Se("saturate"),V=Se("scale"),O=Se("sepia"),j=Se("skew"),E=Se("space"),y=Se("translate"),T=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",se,e],I=()=>[se,e],w=()=>["",qn,Sr],H=()=>["auto",Wi,se],U=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",se],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[Wi,se];return{cacheSize:500,separator:":",theme:{colors:[Zo],spacing:[qn,Sr],blur:["none","",Ar,se],brightness:Z(),borderColor:[t],borderRadius:["none","","full",Ar,se],borderSpacing:I(),borderWidth:w(),contrast:Z(),grayscale:Y(),hueRotate:Z(),invert:Y(),gap:I(),gradientColorStops:[t],gradientColorStopPositions:[KV,Sr],inset:R(),margin:R(),opacity:Z(),padding:I(),saturate:Z(),scale:Z(),sepia:Y(),skew:Z(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",se]}],container:["container"],columns:[{columns:[Ar]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...U(),se]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Xo,se]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",se]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",Xo,se]}],"grid-cols":[{"grid-cols":[Zo]}],"col-start-end":[{col:["auto",{span:["full",Xo,se]},se]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[Zo]}],"row-start-end":[{row:["auto",{span:[Xo,se]},se]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",se]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[D]}],mx:[{mx:[D]}],my:[{my:[D]}],ms:[{ms:[D]}],me:[{me:[D]}],mt:[{mt:[D]}],mr:[{mr:[D]}],mb:[{mb:[D]}],ml:[{ml:[D]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",se,e]}],"min-w":[{"min-w":[se,e,"min","max","fit"]}],"max-w":[{"max-w":[se,e,"none","full","min","max","fit","prose",{screen:[Ar]},Ar]}],h:[{h:[se,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[se,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[se,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Ar,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",hh]}],"font-family":[{font:[Zo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",se]}],"line-clamp":[{"line-clamp":["none",Wi,hh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",qn,se]}],"list-image":[{"list-image":["none",se]}],"list-style-type":[{list:["none","disc","decimal",se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",qn,Sr]}],"underline-offset":[{"underline-offset":["auto",qn,se]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...U(),JV]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",YV]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ZV]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:K()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[qn,se]}],"outline-w":[{outline:[qn,Sr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:w()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[qn,Sr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Ar,e4]}],"shadow-color":[{shadow:[Zo]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...ge(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ge()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Ar,se]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[A]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",se]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",se]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[Xo,se]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",se]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[qn,Sr,hh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},fh=UV(s4);class i4 extends Bf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("App Crash:",e,n)}render(){return this.state.hasError?p.jsxs("div",{className:"h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center",children:[p.jsx("h1",{className:"text-xl font-bold text-white mb-4",children:"Ой! Что-то пошло не так"}),p.jsx("p",{className:"text-zinc-400 text-sm mb-6",children:"Возможно, это из-за старого кэша приложения."}),p.jsx("button",{onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.pathname+"?clear=true"},className:"px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all",children:"Очистить кэш и исправить"})]}):this.props.children}}function o4(){const{user:t,loading:e}=ti(),{activeChatId:n}=yo();return e?p.jsx("div",{className:"h-screen bg-[#09090b] flex items-center justify-center",children:p.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):!t||!t.isVerified?p.jsx(wV,{}):p.jsx("div",{className:"flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden",children:p.jsxs("div",{className:fh("flex-1 flex",n?"mobile-chat-active":"mobile-sidebar-active"),children:[p.jsx("div",{className:fh("w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",n?"hidden md:flex":"w-full md:w-80 flex"),children:p.jsx(EV,{})}),p.jsxs("main",{className:fh("flex-1 flex flex-col relative transition-all duration-300",n?"flex":"hidden md:flex"),children:[n?p.jsx(SV,{}):p.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]",children:[p.jsx("div",{className:"p-6 bg-zinc-900/30 rounded-full mb-4",children:p.jsx("img",{src:t.avatar,className:"w-24 h-24 opacity-20 grayscale rounded-2xl object-cover",alt:"logo"})}),p.jsx("h3",{className:"text-xl font-medium text-zinc-400 text-center px-4",children:"Выберите чат, чтобы начать общение"})]}),p.jsx(AV,{}),p.jsx(CV,{})]})]})})}function a4(){return p.jsx(i4,{children:p.jsx(o4,{})})}console.log("--- APP VERSION 3.0.0 LOADED ---");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>console.log("SW registered v1.2.1-ULTRA-FORCE")).catch(t=>console.log("SW reg error",t))});ph.createRoot(document.getElementById("root")).render(p.jsx(Bf.StrictMode,{children:p.jsx(YD,{children:p.jsx(XD,{children:p.jsx(a4,{})})})}));
