(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function XI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},$u={},ov={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),ZI=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),s1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),a1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),tg=Symbol.iterator;function u1(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lv=Object.assign,uv={};function Di(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}Di.prototype.isReactComponent={};Di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cv(){}cv.prototype=Di.prototype;function ff(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}var pf=ff.prototype=new cv;pf.constructor=ff;lv(pf,Di.prototype);pf.isPureReactComponent=!0;var ng=Array.isArray,hv=Object.prototype.hasOwnProperty,mf={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)hv.call(e,r)&&!dv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Sa,type:t,key:i,ref:o,props:s,_owner:mf.current}}function c1(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function h1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rg=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h1(""+t.key):e.toString(36)}function kl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case ZI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Jc(o,0):r,ng(s)?(n="",t!=null&&(n=t.replace(rg,"$&/")+"/"),kl(s,e,n,"",function(c){return c})):s!=null&&(gf(s)&&(s=c1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(rg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ng(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Jc(i,l);o+=kl(i,e,n,u,s)}else if(u=u1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Jc(i,l++),o+=kl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],s=0;return kl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function d1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Rl={transition:null},f1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:mf};function pv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Di;re.Fragment=e1;re.Profiler=n1;re.PureComponent=ff;re.StrictMode=t1;re.Suspense=o1;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;re.act=pv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=mf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)hv.call(e,u)&&!dv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Sa,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:s1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r1,_context:t},t.Consumer=t};re.createElement=fv;re.createFactory=function(t){var e=fv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:i1,render:t}};re.isValidElement=gf;re.lazy=function(t){return{$$typeof:l1,_payload:{_status:-1,_result:t},_init:d1}};re.memo=function(t,e){return{$$typeof:a1,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};re.unstable_act=pv;re.useCallback=function(t,e){return yt.current.useCallback(t,e)};re.useContext=function(t){return yt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};re.useEffect=function(t,e){return yt.current.useEffect(t,e)};re.useId=function(){return yt.current.useId()};re.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return yt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};re.useRef=function(t){return yt.current.useRef(t)};re.useState=function(t){return yt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return yt.current.useTransition()};re.version="18.3.1";ov.exports=re;var q=ov.exports;const yf=XI(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=q,m1=Symbol.for("react.element"),g1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,_1=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)y1.call(e,r)&&!v1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m1,type:t,key:i,ref:o,props:s,_owner:_1.current}}$u.Fragment=g1;$u.jsx=mv;$u.jsxs=mv;iv.exports=$u;var g=iv.exports,zh={},gv={exports:{}},jt={},yv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var Q=z.length;z.push(G);e:for(;0<Q;){var ne=Q-1>>>1,de=z[ne];if(0<s(de,G))z[ne]=G,z[Q]=de,Q=ne;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],Q=z.pop();if(Q!==G){z[0]=Q;e:for(var ne=0,de=z.length,Ut=de>>>1;ne<Ut;){var De=2*(ne+1)-1,Rt=z[De],vt=De+1,fn=z[vt];if(0>s(Rt,Q))vt<de&&0>s(fn,Rt)?(z[ne]=fn,z[vt]=Q,ne=vt):(z[ne]=Rt,z[De]=Q,ne=De);else if(vt<de&&0>s(fn,Q))z[ne]=fn,z[vt]=Q,ne=vt;else break e}}return G}function s(z,G){var Q=z.sortIndex-G.sortIndex;return Q!==0?Q:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,p=3,I=!1,k=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function b(z){if(P=!1,C(z),!k)if(n(u)!==null)k=!0,We(V);else{var G=n(c);G!==null&&Re(b,G.startTime-z)}}function V(z,G){k=!1,P&&(P=!1,S(y),y=-1),I=!0;var Q=p;try{for(C(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!E());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,p=m.priorityLevel;var de=ne(m.expirationTime<=G);G=t.unstable_now(),typeof de=="function"?m.callback=de:m===n(u)&&r(u),C(G)}else r(u);m=n(u)}if(m!==null)var Ut=!0;else{var De=n(c);De!==null&&Re(b,De.startTime-G),Ut=!1}return Ut}finally{m=null,p=Q,I=!1}}var L=!1,v=null,y=-1,T=5,A=-1;function E(){return!(t.unstable_now()-A<T)}function R(){if(v!==null){var z=t.unstable_now();A=z;var G=!0;try{G=v(!0,z)}finally{G?x():(L=!1,v=null)}}else L=!1}var x;if(typeof w=="function")x=function(){w(R)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Te=ue.port2;ue.port1.onmessage=R,x=function(){Te.postMessage(null)}}else x=function(){D(R,0)};function We(z){v=z,L||(L=!0,x())}function Re(z,G){y=D(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||I||(k=!0,We(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var Q=p;p=G;try{return z()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=p;p=z;try{return G()}finally{p=Q}},t.unstable_scheduleCallback=function(z,G,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Q+de,z={id:f++,callback:G,priorityLevel:z,startTime:Q,expirationTime:de,sortIndex:-1},Q>ne?(z.sortIndex=Q,e(c,z),n(u)===null&&z===n(c)&&(P?(S(y),y=-1):P=!0,Re(b,Q-ne))):(z.sortIndex=de,e(u,z),k||I||(k=!0,We(V))),z},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(z){var G=p;return function(){var Q=p;p=G;try{return z.apply(this,arguments)}finally{p=Q}}}})(_v);yv.exports=_v;var w1=yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1=q,Mt=w1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vv=new Set,Yo={};function ks(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for(Yo[t]=e,t=0;t<e.length;t++)vv.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bh=Object.prototype.hasOwnProperty,T1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},ig={};function I1(t){return Bh.call(ig,t)?!0:Bh.call(sg,t)?!1:T1.test(t)?ig[t]=!0:(sg[t]=!0,!1)}function S1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x1(t,e,n,r){if(e===null||typeof e>"u"||S1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,vf);nt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,vf);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,vf);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x1(e,n,s,r)&&(n=null),r||s===null?I1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),qh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),og=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Xc;function Io(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var Zc=!1;function eh(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function A1(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=eh(t.type,!1),t;case 11:return t=eh(t.type.render,!1),t;case 1:return t=eh(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ys:return"Fragment";case Qs:return"Portal";case $h:return"Profiler";case Ef:return"StrictMode";case qh:return"Suspense";case Wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function C1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k1(t){var e=Iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=k1(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ag(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Kh(t,e){xv(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qh(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ug(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(So(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Av(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){R1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function Rv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function Pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Rv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var P1=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(t,e){if(e){if(P1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Zh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,ui=null,ci=null;function hg(t){if(t=Ca(t)){if(typeof td!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Ku(e),td(t.stateNode,t.type,e))}}function bv(t){ui?ci?ci.push(t):ci=[t]:ui=t}function Nv(){if(ui){var t=ui,e=ci;if(ci=ui=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function Dv(t,e){return t(e)}function Vv(){}var th=!1;function Ov(t,e,n){if(th)return t(e,n);th=!0;try{return Dv(t,e,n)}finally{th=!1,(ui!==null||ci!==null)&&(Vv(),Nv())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var nd=!1;if(Bn)try{var co={};Object.defineProperty(co,"passive",{get:function(){nd=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{nd=!1}function b1(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,Jl=null,Xl=!1,rd=null,N1={onError:function(t){Vo=!0,Jl=t}};function D1(t,e,n,r,s,i,o,l,u){Vo=!1,Jl=null,b1.apply(N1,arguments)}function V1(t,e,n,r,s,i,o,l,u){if(D1.apply(this,arguments),Vo){if(Vo){var c=Jl;Vo=!1,Jl=null}else throw Error(F(198));Xl||(Xl=!0,rd=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dg(t){if(Rs(t)!==t)throw Error(F(188))}function O1(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return dg(s),t;if(i===r)return dg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Mv(t){return t=O1(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Fv=Mt.unstable_scheduleCallback,fg=Mt.unstable_cancelCallback,L1=Mt.unstable_shouldYield,M1=Mt.unstable_requestPaint,Oe=Mt.unstable_now,j1=Mt.unstable_getCurrentPriorityLevel,xf=Mt.unstable_ImmediatePriority,Uv=Mt.unstable_UserBlockingPriority,Zl=Mt.unstable_NormalPriority,F1=Mt.unstable_LowPriority,zv=Mt.unstable_IdlePriority,qu=null,Tn=null;function U1(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:$1,z1=Math.log,B1=Math.LN2;function $1(t){return t>>>=0,t===0?32:31-(z1(t)/B1|0)|0}var al=64,ll=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=xo(l):(i&=o,i!==0&&(r=xo(i)))}else o=n&~s,o!==0?r=xo(o):i!==0&&(r=xo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),s=1<<n,r|=t[n],e&=~s;return r}function q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-on(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=q1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bv(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function nh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function H1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-on(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var he=0;function $v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qv,Cf,Wv,Hv,Gv,id=!1,ul=[],Ir=null,Sr=null,xr=null,Zo=new Map,ea=new Map,pr=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pg(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function ho(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ca(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function K1(t,e,n,r,s){switch(e){case"focusin":return Ir=ho(Ir,t,e,n,r,s),!0;case"dragenter":return Sr=ho(Sr,t,e,n,r,s),!0;case"mouseover":return xr=ho(xr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Zo.set(i,ho(Zo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ea.set(i,ho(ea.get(i)||null,t,e,n,r,s)),!0}return!1}function Kv(t){var e=os(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=Ca(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function mg(t,e,n){Pl(t)&&n.delete(e)}function Q1(){id=!1,Ir!==null&&Pl(Ir)&&(Ir=null),Sr!==null&&Pl(Sr)&&(Sr=null),xr!==null&&Pl(xr)&&(xr=null),Zo.forEach(mg),ea.forEach(mg)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,Q1)))}function ta(t){function e(s){return fo(s,t)}if(0<ul.length){fo(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&fo(Ir,t),Sr!==null&&fo(Sr,t),xr!==null&&fo(xr,t),Zo.forEach(e),ea.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Kv(n),n.blockedOn===null&&pr.shift()}var hi=Jn.ReactCurrentBatchConfig,tu=!0;function Y1(t,e,n,r){var s=he,i=hi.transition;hi.transition=null;try{he=1,kf(t,e,n,r)}finally{he=s,hi.transition=i}}function J1(t,e,n,r){var s=he,i=hi.transition;hi.transition=null;try{he=4,kf(t,e,n,r)}finally{he=s,hi.transition=i}}function kf(t,e,n,r){if(tu){var s=od(t,e,n,r);if(s===null)dh(t,e,r,nu,n),pg(t,r);else if(K1(s,t,e,n,r))r.stopPropagation();else if(pg(t,r),e&4&&-1<G1.indexOf(t)){for(;s!==null;){var i=Ca(s);if(i!==null&&qv(i),i=od(t,e,n,r),i===null&&dh(t,e,r,nu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else dh(t,e,r,null,n)}}var nu=null;function od(t,e,n,r){if(nu=null,t=Sf(r),t=os(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function Qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j1()){case xf:return 1;case Uv:return 4;case Zl:case F1:return 16;case zv:return 536870912;default:return 16}default:return 16}}var wr=null,Rf=null,bl=null;function Yv(){if(bl)return bl;var t,e=Rf,n=e.length,r,s="value"in wr?wr.value:wr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return bl=s.slice(t,1<r?1-r:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function gg(){return!1}function Ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cl:gg,this.isPropagationStopped=gg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=Ft(Vi),Aa=Ce({},Vi,{view:0,detail:0}),X1=Ft(Aa),rh,sh,po,Wu=Ce({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(rh=t.screenX-po.screenX,sh=t.screenY-po.screenY):sh=rh=0,po=t),rh)},movementY:function(t){return"movementY"in t?t.movementY:sh}}),yg=Ft(Wu),Z1=Ce({},Wu,{dataTransfer:0}),eS=Ft(Z1),tS=Ce({},Aa,{relatedTarget:0}),ih=Ft(tS),nS=Ce({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Ft(nS),sS=Ce({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=Ft(sS),oS=Ce({},Vi,{data:0}),_g=Ft(oS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uS[t])?!!e[t]:!1}function bf(){return cS}var hS=Ce({},Aa,{key:function(t){if(t.key){var e=aS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=Ft(hS),fS=Ce({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=Ft(fS),pS=Ce({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),mS=Ft(pS),gS=Ce({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Ft(gS),_S=Ce({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Ft(_S),wS=[9,13,27,32],Nf=Bn&&"CompositionEvent"in window,Oo=null;Bn&&"documentMode"in document&&(Oo=document.documentMode);var ES=Bn&&"TextEvent"in window&&!Oo,Jv=Bn&&(!Nf||Oo&&8<Oo&&11>=Oo),wg=" ",Eg=!1;function Xv(t,e){switch(t){case"keyup":return wS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function TS(t,e){switch(t){case"compositionend":return Zv(e);case"keypress":return e.which!==32?null:(Eg=!0,wg);case"textInput":return t=e.data,t===wg&&Eg?null:t;default:return null}}function IS(t,e){if(Js)return t==="compositionend"||!Nf&&Xv(t,e)?(t=Yv(),bl=Rf=wr=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jv&&e.locale!=="ko"?null:e.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SS[t.type]:e==="textarea"}function e0(t,e,n,r){bv(r),e=ru(e,"onChange"),0<e.length&&(n=new Pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lo=null,na=null;function xS(t){h0(t,0)}function Hu(t){var e=ei(t);if(Sv(e))return t}function AS(t,e){if(t==="change")return e}var t0=!1;if(Bn){var oh;if(Bn){var ah="oninput"in document;if(!ah){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),ah=typeof Ig.oninput=="function"}oh=ah}else oh=!1;t0=oh&&(!document.documentMode||9<document.documentMode)}function Sg(){Lo&&(Lo.detachEvent("onpropertychange",n0),na=Lo=null)}function n0(t){if(t.propertyName==="value"&&Hu(na)){var e=[];e0(e,na,t,Sf(t)),Ov(xS,e)}}function CS(t,e,n){t==="focusin"?(Sg(),Lo=e,na=n,Lo.attachEvent("onpropertychange",n0)):t==="focusout"&&Sg()}function kS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(na)}function RS(t,e){if(t==="click")return Hu(e)}function PS(t,e){if(t==="input"||t==="change")return Hu(e)}function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:bS;function ra(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Bh.call(e,s)||!un(t[s],e[s]))return!1}return!0}function xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ag(t,e){var n=xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xg(n)}}function r0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=s0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r0(n.ownerDocument.documentElement,n)){if(r!==null&&Df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ag(n,i);var o=Ag(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DS=Bn&&"documentMode"in document&&11>=document.documentMode,Xs=null,ad=null,Mo=null,ld=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Xs==null||Xs!==Yl(r)||(r=Xs,"selectionStart"in r&&Df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&ra(Mo,r)||(Mo=r,r=ru(ad,"onSelect"),0<r.length&&(e=new Pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xs)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},lh={},i0={};Bn&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Gu(t){if(lh[t])return lh[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i0)return lh[t]=e[n];return t}var o0=Gu("animationend"),a0=Gu("animationiteration"),l0=Gu("animationstart"),u0=Gu("transitionend"),c0=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){c0.set(t,e),ks(e,[t])}for(var uh=0;uh<kg.length;uh++){var ch=kg[uh],VS=ch.toLowerCase(),OS=ch[0].toUpperCase()+ch.slice(1);qr(VS,"on"+OS)}qr(o0,"onAnimationEnd");qr(a0,"onAnimationIteration");qr(l0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(u0,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,V1(r,e,void 0,t),t.currentTarget=null}function h0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Rg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Rg(s,l,c),i=u}}}if(Xl)throw t=rd,Xl=!1,rd=null,t}function ve(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(d0(e,t,2,!1),n.add(r))}function hh(t,e,n){var r=0;e&&(r|=4),d0(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[dl]){t[dl]=!0,vv.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||hh(n,!1,t),hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,hh("selectionchange",!1,e))}}function d0(t,e,n,r){switch(Qv(e)){case 1:var s=Y1;break;case 4:s=J1;break;default:s=kf}n=s.bind(null,e,n,t),s=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function dh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=os(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Ov(function(){var c=i,f=Sf(n),m=[];e:{var p=c0.get(t);if(p!==void 0){var I=Pf,k=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":I=dS;break;case"focusin":k="focus",I=ih;break;case"focusout":k="blur",I=ih;break;case"beforeblur":case"afterblur":I=ih;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=mS;break;case o0:case a0:case l0:I=rS;break;case u0:I=yS;break;case"scroll":I=X1;break;case"wheel":I=vS;break;case"copy":case"cut":case"paste":I=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=vg}var P=(e&4)!==0,D=!P&&t==="scroll",S=P?p!==null?p+"Capture":null:p;P=[];for(var w=c,C;w!==null;){C=w;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,S!==null&&(b=Xo(w,S),b!=null&&P.push(ia(w,b,C)))),D)break;w=w.return}0<P.length&&(p=new I(p,k,null,n,f),m.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",p&&n!==ed&&(k=n.relatedTarget||n.fromElement)&&(os(k)||k[$n]))break e;if((I||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,I?(k=n.relatedTarget||n.toElement,I=c,k=k?os(k):null,k!==null&&(D=Rs(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(I=null,k=c),I!==k)){if(P=yg,b="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=vg,b="onPointerLeave",S="onPointerEnter",w="pointer"),D=I==null?p:ei(I),C=k==null?p:ei(k),p=new P(b,w+"leave",I,n,f),p.target=D,p.relatedTarget=C,b=null,os(f)===c&&(P=new P(S,w+"enter",k,n,f),P.target=C,P.relatedTarget=D,b=P),D=b,I&&k)t:{for(P=I,S=k,w=0,C=P;C;C=qs(C))w++;for(C=0,b=S;b;b=qs(b))C++;for(;0<w-C;)P=qs(P),w--;for(;0<C-w;)S=qs(S),C--;for(;w--;){if(P===S||S!==null&&P===S.alternate)break t;P=qs(P),S=qs(S)}P=null}else P=null;I!==null&&Pg(m,p,I,P,!1),k!==null&&D!==null&&Pg(m,D,k,P,!0)}}e:{if(p=c?ei(c):window,I=p.nodeName&&p.nodeName.toLowerCase(),I==="select"||I==="input"&&p.type==="file")var V=AS;else if(Tg(p))if(t0)V=PS;else{V=kS;var L=CS}else(I=p.nodeName)&&I.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(V=RS);if(V&&(V=V(t,c))){e0(m,V,n,f);break e}L&&L(t,p,c),t==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Qh(p,"number",p.value)}switch(L=c?ei(c):window,t){case"focusin":(Tg(L)||L.contentEditable==="true")&&(Xs=L,ad=c,Mo=null);break;case"focusout":Mo=ad=Xs=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Cg(m,n,f);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Cg(m,n,f)}var v;if(Nf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Js?Xv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Jv&&n.locale!=="ko"&&(Js||y!=="onCompositionStart"?y==="onCompositionEnd"&&Js&&(v=Yv()):(wr=f,Rf="value"in wr?wr.value:wr.textContent,Js=!0)),L=ru(c,y),0<L.length&&(y=new _g(y,t,null,n,f),m.push({event:y,listeners:L}),v?y.data=v:(v=Zv(n),v!==null&&(y.data=v)))),(v=ES?TS(t,n):IS(t,n))&&(c=ru(c,"onBeforeInput"),0<c.length&&(f=new _g("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=v))}h0(m,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Xo(t,n),i!=null&&r.unshift(ia(t,i,s)),i=Xo(t,e),i!=null&&r.push(ia(t,i,s))),t=t.return}return r}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Xo(n,i),u!=null&&o.unshift(ia(n,u,l))):s||(u=Xo(n,i),u!=null&&o.push(ia(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(MS,`
`).replace(jS,"")}function fl(t,e,n){if(e=bg(e),bg(t)!==e&&n)throw Error(F(425))}function su(){}var ud=null,cd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(zS)}:dd;function zS(t){setTimeout(function(){throw t})}function fh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ta(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),En="__reactFiber$"+Oi,oa="__reactProps$"+Oi,$n="__reactContainer$"+Oi,fd="__reactEvents$"+Oi,BS="__reactListeners$"+Oi,$S="__reactHandles$"+Oi;function os(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dg(t);t!==null;){if(n=t[En])return n;t=Dg(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[En]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Ku(t){return t[oa]||null}var pd=[],ti=-1;function Wr(t){return{current:t}}function Ee(t){0>ti||(t.current=pd[ti],pd[ti]=null,ti--)}function ge(t,e){ti++,pd[ti]=t.current,t.current=e}var Lr={},ht=Wr(Lr),St=Wr(!1),ms=Lr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xt(t){return t=t.childContextTypes,t!=null}function iu(){Ee(St),Ee(ht)}function Vg(t,e,n){if(ht.current!==Lr)throw Error(F(168));ge(ht,e),ge(St,n)}function f0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,C1(t)||"Unknown",s));return Ce({},n,r)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ms=ht.current,ge(ht,t),ge(St,St.current),!0}function Og(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=f0(t,e,ms),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(ht),ge(ht,t)):Ee(St),ge(St,n)}var Vn=null,Qu=!1,ph=!1;function p0(t){Vn===null?Vn=[t]:Vn.push(t)}function qS(t){Qu=!0,p0(t)}function Hr(){if(!ph&&Vn!==null){ph=!0;var t=0,e=he;try{var n=Vn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Qu=!1}catch(s){throw Vn!==null&&(Vn=Vn.slice(t+1)),Fv(xf,Hr),s}finally{he=e,ph=!1}}return null}var ni=[],ri=0,au=null,lu=0,Bt=[],$t=0,gs=null,On=1,Ln="";function rs(t,e){ni[ri++]=lu,ni[ri++]=au,au=t,lu=e}function m0(t,e,n){Bt[$t++]=On,Bt[$t++]=Ln,Bt[$t++]=gs,gs=t;var r=On;t=Ln;var s=32-on(r)-1;r&=~(1<<s),n+=1;var i=32-on(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,On=1<<32-on(e)+s|n<<s|r,Ln=i+t}else On=1<<i|n<<s|r,Ln=t}function Vf(t){t.return!==null&&(rs(t,1),m0(t,1,0))}function Of(t){for(;t===au;)au=ni[--ri],ni[ri]=null,lu=ni[--ri],ni[ri]=null;for(;t===gs;)gs=Bt[--$t],Bt[$t]=null,Ln=Bt[--$t],Bt[$t]=null,On=Bt[--$t],Bt[$t]=null}var Ot=null,Dt=null,Ie=!1,nn=null;function g0(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Dt=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(Ie){var e=Dt;if(e){var n=e;if(!Lg(t,e)){if(md(t))throw Error(F(418));e=Ar(n.nextSibling);var r=Ot;e&&Lg(t,e)?g0(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ot=t)}}else{if(md(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Ot=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function pl(t){if(t!==Ot)return!1;if(!Ie)return Mg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=Dt)){if(md(t))throw y0(),Error(F(418));for(;e;)g0(t,e),e=Ar(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Ot?Ar(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=Dt;t;)t=Ar(t.nextSibling)}function Ii(){Dt=Ot=null,Ie=!1}function Lf(t){nn===null?nn=[t]:nn.push(t)}var WS=Jn.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function _0(t){function e(S,w){if(t){var C=S.deletions;C===null?(S.deletions=[w],S.flags|=16):C.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=Pr(S,w),S.index=0,S.sibling=null,S}function i(S,w,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<w?(S.flags|=2,w):C):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,C,b){return w===null||w.tag!==6?(w=Eh(C,S.mode,b),w.return=S,w):(w=s(w,C),w.return=S,w)}function u(S,w,C,b){var V=C.type;return V===Ys?f(S,w,C.props.children,b,C.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===hr&&jg(V)===w.type)?(b=s(w,C.props),b.ref=mo(S,w,C),b.return=S,b):(b=Fl(C.type,C.key,C.props,null,S.mode,b),b.ref=mo(S,w,C),b.return=S,b)}function c(S,w,C,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=Th(C,S.mode,b),w.return=S,w):(w=s(w,C.children||[]),w.return=S,w)}function f(S,w,C,b,V){return w===null||w.tag!==7?(w=ds(C,S.mode,b,V),w.return=S,w):(w=s(w,C),w.return=S,w)}function m(S,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Eh(""+w,S.mode,C),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case sl:return C=Fl(w.type,w.key,w.props,null,S.mode,C),C.ref=mo(S,null,w),C.return=S,C;case Qs:return w=Th(w,S.mode,C),w.return=S,w;case hr:var b=w._init;return m(S,b(w._payload),C)}if(So(w)||uo(w))return w=ds(w,S.mode,C,null),w.return=S,w;ml(S,w)}return null}function p(S,w,C,b){var V=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return V!==null?null:l(S,w,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case sl:return C.key===V?u(S,w,C,b):null;case Qs:return C.key===V?c(S,w,C,b):null;case hr:return V=C._init,p(S,w,V(C._payload),b)}if(So(C)||uo(C))return V!==null?null:f(S,w,C,b,null);ml(S,C)}return null}function I(S,w,C,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(C)||null,l(w,S,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case sl:return S=S.get(b.key===null?C:b.key)||null,u(w,S,b,V);case Qs:return S=S.get(b.key===null?C:b.key)||null,c(w,S,b,V);case hr:var L=b._init;return I(S,w,C,L(b._payload),V)}if(So(b)||uo(b))return S=S.get(C)||null,f(w,S,b,V,null);ml(w,b)}return null}function k(S,w,C,b){for(var V=null,L=null,v=w,y=w=0,T=null;v!==null&&y<C.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var A=p(S,v,C[y],b);if(A===null){v===null&&(v=T);break}t&&v&&A.alternate===null&&e(S,v),w=i(A,w,y),L===null?V=A:L.sibling=A,L=A,v=T}if(y===C.length)return n(S,v),Ie&&rs(S,y),V;if(v===null){for(;y<C.length;y++)v=m(S,C[y],b),v!==null&&(w=i(v,w,y),L===null?V=v:L.sibling=v,L=v);return Ie&&rs(S,y),V}for(v=r(S,v);y<C.length;y++)T=I(v,S,y,C[y],b),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),w=i(T,w,y),L===null?V=T:L.sibling=T,L=T);return t&&v.forEach(function(E){return e(S,E)}),Ie&&rs(S,y),V}function P(S,w,C,b){var V=uo(C);if(typeof V!="function")throw Error(F(150));if(C=V.call(C),C==null)throw Error(F(151));for(var L=V=null,v=w,y=w=0,T=null,A=C.next();v!==null&&!A.done;y++,A=C.next()){v.index>y?(T=v,v=null):T=v.sibling;var E=p(S,v,A.value,b);if(E===null){v===null&&(v=T);break}t&&v&&E.alternate===null&&e(S,v),w=i(E,w,y),L===null?V=E:L.sibling=E,L=E,v=T}if(A.done)return n(S,v),Ie&&rs(S,y),V;if(v===null){for(;!A.done;y++,A=C.next())A=m(S,A.value,b),A!==null&&(w=i(A,w,y),L===null?V=A:L.sibling=A,L=A);return Ie&&rs(S,y),V}for(v=r(S,v);!A.done;y++,A=C.next())A=I(v,S,y,A.value,b),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?y:A.key),w=i(A,w,y),L===null?V=A:L.sibling=A,L=A);return t&&v.forEach(function(R){return e(S,R)}),Ie&&rs(S,y),V}function D(S,w,C,b){if(typeof C=="object"&&C!==null&&C.type===Ys&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case sl:e:{for(var V=C.key,L=w;L!==null;){if(L.key===V){if(V=C.type,V===Ys){if(L.tag===7){n(S,L.sibling),w=s(L,C.props.children),w.return=S,S=w;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===hr&&jg(V)===L.type){n(S,L.sibling),w=s(L,C.props),w.ref=mo(S,L,C),w.return=S,S=w;break e}n(S,L);break}else e(S,L);L=L.sibling}C.type===Ys?(w=ds(C.props.children,S.mode,b,C.key),w.return=S,S=w):(b=Fl(C.type,C.key,C.props,null,S.mode,b),b.ref=mo(S,w,C),b.return=S,S=b)}return o(S);case Qs:e:{for(L=C.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(S,w.sibling),w=s(w,C.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Th(C,S.mode,b),w.return=S,S=w}return o(S);case hr:return L=C._init,D(S,w,L(C._payload),b)}if(So(C))return k(S,w,C,b);if(uo(C))return P(S,w,C,b);ml(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,C),w.return=S,S=w):(n(S,w),w=Eh(C,S.mode,b),w.return=S,S=w),o(S)):n(S,w)}return D}var Si=_0(!0),v0=_0(!1),uu=Wr(null),cu=null,si=null,Mf=null;function jf(){Mf=si=cu=null}function Ff(t){var e=uu.current;Ee(uu),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){cu=t,Mf=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Mf!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(cu===null)throw Error(F(308));si=t,cu.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var as=null;function Uf(t){as===null?as=[t]:as.push(t)}function w0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Uf(e)):(n.next=s.next,s.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,qn(t,n)}return s=r.interleaved,s===null?(e.next=e,Uf(r)):(e.next=s.next,s.next=e),r.interleaved=e,qn(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var s=t.updateQueue;dr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var p=l.lane,I=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(p=e,I=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(I,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,p=typeof k=="function"?k.call(I,m,p):k,p==null)break e;m=Ce({},m,p);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else I={eventTime:I,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=m):f=f.next=I,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=m}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ka={},In=Wr(ka),aa=Wr(ka),la=Wr(ka);function ls(t){if(t===ka)throw Error(F(174));return t}function Bf(t,e){switch(ge(la,e),ge(aa,t),ge(In,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jh(e,t)}Ee(In),ge(In,e)}function xi(){Ee(In),Ee(aa),Ee(la)}function T0(t){ls(la.current);var e=ls(In.current),n=Jh(e,t.type);e!==n&&(ge(aa,t),ge(In,n))}function $f(t){aa.current===t&&(Ee(In),Ee(aa))}var xe=Wr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mh=[];function qf(){for(var t=0;t<mh.length;t++)mh[t]._workInProgressVersionPrimary=null;mh.length=0}var Vl=Jn.ReactCurrentDispatcher,gh=Jn.ReactCurrentBatchConfig,ys=0,Ae=null,Be=null,Qe=null,fu=!1,jo=!1,ua=0,HS=0;function it(){throw Error(F(321))}function Wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Hf(t,e,n,r,s,i){if(ys=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?YS:JS,t=n(r,s),jo){i=0;do{if(jo=!1,ua=0,25<=i)throw Error(F(301));i+=1,Qe=Be=null,e.updateQueue=null,Vl.current=XS,t=n(r,s)}while(jo)}if(Vl.current=pu,e=Be!==null&&Be.next!==null,ys=0,Qe=Be=Ae=null,fu=!1,e)throw Error(F(300));return t}function Gf(){var t=ua!==0;return ua=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ae.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Qt(){if(Be===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Qe===null?Ae.memoizedState:Qe.next;if(e!==null)Qe=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Qe===null?Ae.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ca(t,e){return typeof e=="function"?e(t):e}function yh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((ys&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ae.lanes|=f,_s|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,un(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,_s|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _h(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);un(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function I0(){}function S0(t,e){var n=Ae,r=Qt(),s=e(),i=!un(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,Kf(C0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ha(9,A0.bind(null,n,r,s,e),void 0,null),Ye===null)throw Error(F(349));ys&30||x0(n,e,s)}return s}function x0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A0(t,e,n,r){e.value=n,e.getSnapshot=r,k0(e)&&R0(t)}function C0(t,e,n){return n(function(){k0(e)&&R0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function R0(t){var e=qn(t,1);e!==null&&an(e,t,1,-1)}function zg(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=QS.bind(null,Ae,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P0(){return Qt().memoizedState}function Ol(t,e,n,r){var s=_n();Ae.flags|=t,s.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function Yu(t,e,n,r){var s=Qt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var o=Be.memoizedState;if(i=o.destroy,r!==null&&Wf(r,o.deps)){s.memoizedState=ha(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=ha(1|e,n,i,r)}function Bg(t,e){return Ol(8390656,8,t,e)}function Kf(t,e){return Yu(2048,8,t,e)}function b0(t,e){return Yu(4,2,t,e)}function N0(t,e){return Yu(4,4,t,e)}function D0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V0(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4,4,D0.bind(null,e,t),n)}function Qf(){}function O0(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L0(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M0(t,e,n){return ys&21?(un(n,e)||(n=Bv(),Ae.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function GS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=gh.transition;gh.transition={};try{t(!1),e()}finally{he=n,gh.transition=r}}function j0(){return Qt().memoizedState}function KS(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F0(t))U0(e,n);else if(n=w0(t,e,n,r),n!==null){var s=mt();an(n,t,r,s),z0(n,e,r)}}function QS(t,e,n){var r=Rr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F0(t))U0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(s.next=s,Uf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=w0(t,e,s,r),n!==null&&(s=mt(),an(n,t,r,s),z0(n,e,r))}}function F0(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function U0(t,e){jo=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}var pu={readContext:Kt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},YS={readContext:Kt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,D0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KS.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:zg,useDebugValue:Qf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=zg(!1),e=t[0];return t=GS.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=_n();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ye===null)throw Error(F(349));ys&30||x0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Bg(C0.bind(null,r,i,t),[t]),r.flags|=2048,ha(9,A0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=_n(),e=Ye.identifierPrefix;if(Ie){var n=Ln,r=On;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:Kt,useCallback:O0,useContext:Kt,useEffect:Kf,useImperativeHandle:V0,useInsertionEffect:b0,useLayoutEffect:N0,useMemo:L0,useReducer:yh,useRef:P0,useState:function(){return yh(ca)},useDebugValue:Qf,useDeferredValue:function(t){var e=Qt();return M0(e,Be.memoizedState,t)},useTransition:function(){var t=yh(ca)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:S0,useId:j0,unstable_isNewReconciler:!1},XS={readContext:Kt,useCallback:O0,useContext:Kt,useEffect:Kf,useImperativeHandle:V0,useInsertionEffect:b0,useLayoutEffect:N0,useMemo:L0,useReducer:_h,useRef:P0,useState:function(){return _h(ca)},useDebugValue:Qf,useDeferredValue:function(t){var e=Qt();return Be===null?e.memoizedState=t:M0(e,Be.memoizedState,t)},useTransition:function(){var t=_h(ca)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:S0,useId:j0,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Rr(t),i=Fn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(an(e,t,s,r),Dl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=Rr(t),i=Fn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(an(e,t,s,r),Dl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Rr(t),s=Fn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Cr(t,s,r),e!==null&&(an(e,t,r,n),Dl(e,t,r))}};function $g(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(s,i):!0}function B0(t,e,n){var r=!1,s=Lr,i=e.contextType;return typeof i=="object"&&i!==null?i=Kt(i):(s=xt(e)?ms:ht.current,r=e.contextTypes,i=(r=r!=null)?Ti(t,s):Lr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},zf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Kt(i):(i=xt(e)?ms:ht.current,s.context=Ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(_d(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ju.enqueueReplaceState(s,s.state,null),hu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e){try{var n="",r=e;do n+=A1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZS=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gu||(gu=!0,Pd=r),wd(t,e)},n}function q0(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){wd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=fx.bind(null,t,e,n),e.then(t,t))}function Hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var ex=Jn.ReactCurrentOwner,It=!1;function pt(t,e,n,r){e.child=t===null?v0(e,null,n,r):Si(e,t.child,n,r)}function Kg(t,e,n,r,s){n=n.render;var i=e.ref;return di(e,s),r=Hf(t,e,n,r,i,s),n=Gf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Ie&&n&&Vf(e),e.flags|=1,pt(t,e,r,s),e.child)}function Qg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,W0(t,e,i,r,s)):(t=Fl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Wn(t,e,s)}return e.flags|=1,t=Pr(i,r),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ra(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Wn(t,e,s)}return Ed(t,e,n,r,s)}function H0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(oi,bt),bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(oi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(oi,bt),bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(oi,bt),bt|=r;return pt(t,e,s,n),e.child}function G0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,s){var i=xt(n)?ms:ht.current;return i=Ti(e,i),di(e,s),n=Hf(t,e,n,r,i,s),r=Gf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Ie&&r&&Vf(e),e.flags|=1,pt(t,e,n,s),e.child)}function Yg(t,e,n,r,s){if(xt(n)){var i=!0;ou(e)}else i=!1;if(di(e,s),e.stateNode===null)Ll(t,e),B0(e,n,r),vd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=xt(n)?ms:ht.current,c=Ti(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&qg(e,o,r,c),dr=!1;var p=e.memoizedState;o.state=p,hu(e,r,o,s),u=e.memoizedState,l!==r||p!==u||St.current||dr?(typeof f=="function"&&(_d(e,n,f,r),u=e.memoizedState),(l=dr||$g(e,n,l,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Zt(e.type,l),o.props=c,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=xt(n)?ms:ht.current,u=Ti(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&qg(e,o,r,u),dr=!1,p=e.memoizedState,o.state=p,hu(e,r,o,s);var k=e.memoizedState;l!==m||p!==k||St.current||dr?(typeof I=="function"&&(_d(e,n,I,r),k=e.memoizedState),(c=dr||$g(e,n,c,r,p,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,i,s)}function Td(t,e,n,r,s,i){G0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Og(e,n,!1),Wn(t,e,i);r=e.stateNode,ex.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Si(e,t.child,null,i),e.child=Si(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&Og(e,n,!0),e.child}function K0(t){var e=t.stateNode;e.pendingContext?Vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vg(t,e.context,!1),Bf(t,e.containerInfo)}function Jg(t,e,n,r,s){return Ii(),Lf(s),e.flags|=256,pt(t,e,n,r),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q0(t,e,n){var r=e.pendingProps,s=xe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(xe,s&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ec(o,r,0,null),t=ds(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Sd(n),e.memoizedState=Id,t):Yf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return tx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Pr(l,i):(i=ds(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Id,r}return i=t.child,t=i.sibling,r=Pr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&Lf(r),Si(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=vh(Error(F(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ec({mode:"visible",children:r.children},s,0,null),i=ds(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Si(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=Id,i);if(!(e.mode&1))return gl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=vh(i,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=Ye,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,qn(t,s),an(r,t,s,-1))}return np(),r=vh(Error(F(421))),gl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=px.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Dt=Ar(s.nextSibling),Ot=e,Ie=!0,nn=null,t!==null&&(Bt[$t++]=On,Bt[$t++]=Ln,Bt[$t++]=gs,On=t.id,Ln=t.overflow,gs=e),e=Yf(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yd(t.return,e,n)}function wh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Y0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(xe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),wh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&du(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}wh(e,!0,n,null,i);break;case"together":wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nx(t,e,n){switch(e.tag){case 3:K0(e),Ii();break;case 5:T0(e);break;case 1:xt(e.type)&&ou(e);break;case 4:Bf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(uu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?Q0(t,e,n):(ge(xe,xe.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n)}return Wn(t,e,n)}var J0,xd,X0,Z0;J0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};X0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ls(In.current);var i=null;switch(n){case"input":s=Gh(t,s),r=Gh(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=Yh(t,s),r=Yh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}Xh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Z0=function(t,e,n,r){n!==r&&(e.flags|=4)};function go(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rx(t,e,n){var r=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return xt(e.type)&&iu(),ot(e),null;case 3:return r=e.stateNode,xi(),Ee(St),Ee(ht),qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nn!==null&&(Dd(nn),nn=null))),xd(t,e),ot(e),null;case 5:$f(e);var s=ls(la.current);if(n=e.type,t!==null&&e.stateNode!=null)X0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ot(e),null}if(t=ls(In.current),pl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[En]=e,r[oa]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<Ao.length;s++)ve(Ao[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ag(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":ug(r,i),ve("invalid",r)}Xh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":il(r),lg(r,i,!0);break;case"textarea":il(r),cg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=su)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[oa]=r,J0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ao.length;s++)ve(Ao[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":ag(t,r),s=Gh(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),ve("invalid",t);break;case"textarea":ug(t,r),s=Yh(t,r),ve("invalid",t);break;default:s=r}Xh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Pv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&wf(t,i,u,o))}switch(n){case"input":il(t),lg(t,r,!1);break;case"textarea":il(t),cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?li(t,!!r.multiple,i,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Z0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ls(la.current),ls(In.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return ot(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Dt!==null&&e.mode&1&&!(e.flags&128))y0(),Ii(),e.flags|=98560,i=!1;else if(i=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[En]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),i=!1}else nn!==null&&(Dd(nn),nn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?$e===0&&($e=3):np())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return xi(),xd(t,e),t===null&&sa(e.stateNode.containerInfo),ot(e),null;case 10:return Ff(e.type._context),ot(e),null;case 17:return xt(e.type)&&iu(),ot(e),null;case 19:if(Ee(xe),i=e.memoizedState,i===null)return ot(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)go(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,go(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>Ci&&(e.flags|=128,r=!0,go(i,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return ot(e),null}else 2*Oe()-i.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,go(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function sx(t,e){switch(Of(e),e.tag){case 1:return xt(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),Ee(St),Ee(ht),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $f(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return xi(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var yl=!1,ut=!1,ix=typeof WeakSet=="function"?WeakSet:Set,H=null;function ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Ad(t,e,n){try{n()}catch(r){be(t,e,r)}}var Zg=!1;function ox(t,e){if(ud=tu,t=s0(),Df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,p=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)p=m,m=I;for(;;){if(m===t)break t;if(p===n&&++c===s&&(l=o),p===i&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},tu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,D=k.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Zt(e.type,P),D);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){be(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return k=Zg,Zg=!1,k}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ad(e,n,i)}s=s.next}while(s!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ew(t){var e=t.alternate;e!==null&&(t.alternate=null,ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[oa],delete e[fd],delete e[BS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tw(t){return t.tag===5||t.tag===3||t.tag===4}function ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}var Xe=null,en=!1;function ar(t,e,n){for(n=n.child;n!==null;)nw(t,e,n),n=n.sibling}function nw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:ut||ii(n,e);case 6:var r=Xe,s=en;Xe=null,ar(t,e,n),Xe=r,en=s,Xe!==null&&(en?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(en?(t=Xe,n=n.stateNode,t.nodeType===8?fh(t.parentNode,n):t.nodeType===1&&fh(t,n),ta(t)):fh(Xe,n.stateNode));break;case 4:r=Xe,s=en,Xe=n.stateNode.containerInfo,en=!0,ar(t,e,n),Xe=r,en=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ad(n,e,o),s=s.next}while(s!==r)}ar(t,e,n);break;case 1:if(!ut&&(ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ar(t,e,n),ut=r):ar(t,e,n);break;default:ar(t,e,n)}}function ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ix),e.forEach(function(r){var s=mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,en=!1;break e;case 3:Xe=l.stateNode.containerInfo,en=!0;break e;case 4:Xe=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Xe===null)throw Error(F(160));nw(i,o,s),Xe=null,en=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){be(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rw(e,t),e=e.sibling}function rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),gn(t),r&4){try{Fo(3,t,t.return),Xu(3,t)}catch(P){be(t,t.return,P)}try{Fo(5,t,t.return)}catch(P){be(t,t.return,P)}}break;case 1:Xt(e,t),gn(t),r&512&&n!==null&&ii(n,n.return);break;case 5:if(Xt(e,t),gn(t),r&512&&n!==null&&ii(n,n.return),t.flags&32){var s=t.stateNode;try{Jo(s,"")}catch(P){be(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xv(s,i),Zh(l,o);var c=Zh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Pv(s,m):f==="dangerouslySetInnerHTML"?kv(s,m):f==="children"?Jo(s,m):wf(s,f,m,c)}switch(l){case"input":Kh(s,i);break;case"textarea":Av(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?li(s,!!i.multiple,I,!1):p!==!!i.multiple&&(i.defaultValue!=null?li(s,!!i.multiple,i.defaultValue,!0):li(s,!!i.multiple,i.multiple?[]:"",!1))}s[oa]=i}catch(P){be(t,t.return,P)}}break;case 6:if(Xt(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){be(t,t.return,P)}}break;case 3:if(Xt(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(P){be(t,t.return,P)}break;case 4:Xt(e,t),gn(t);break;case 13:Xt(e,t),gn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zf=Oe())),r&4&&ty(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||f,Xt(e,t),ut=c):Xt(e,t),gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(p=H,I=p.child,p.tag){case 0:case 11:case 14:case 15:Fo(4,p,p.return);break;case 1:ii(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){be(r,n,P)}}break;case 5:ii(p,p.return);break;case 22:if(p.memoizedState!==null){ry(m);continue}}I!==null?(I.return=p,H=I):ry(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Rv("display",o))}catch(P){be(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){be(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xt(e,t),gn(t),r&4&&ty(t);break;case 21:break;default:Xt(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Jo(s,""),r.flags&=-33);var i=ey(t);Rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ey(t);kd(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){H=t,sw(t)}function sw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ut;l=yl;var c=ut;if(yl=o,(ut=u)&&!c)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?sy(s):u!==null?(u.return=o,H=u):sy(s);for(;i!==null;)H=i,sw(i),i=i.sibling;H=s,yl=l,ut=c}ny(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):ny(t)}}function ny(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ug(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ta(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ut||e.flags&512&&Cd(e)}catch(p){be(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ry(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function sy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){be(e,s,u)}}var i=e.return;try{Cd(e)}catch(u){be(e,i,u)}break;case 5:var o=e.return;try{Cd(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var lx=Math.ceil,mu=Jn.ReactCurrentDispatcher,Jf=Jn.ReactCurrentOwner,Ht=Jn.ReactCurrentBatchConfig,le=0,Ye=null,je=null,tt=0,bt=0,oi=Wr(0),$e=0,da=null,_s=0,Zu=0,Xf=0,Uo=null,Et=null,Zf=0,Ci=1/0,Dn=null,gu=!1,Pd=null,kr=null,_l=!1,Er=null,yu=0,zo=0,bd=null,Ml=-1,jl=0;function mt(){return le&6?Oe():Ml!==-1?Ml:Ml=Oe()}function Rr(t){return t.mode&1?le&2&&tt!==0?tt&-tt:WS.transition!==null?(jl===0&&(jl=Bv()),jl):(t=he,t!==0||(t=window.event,t=t===void 0?16:Qv(t.type)),t):1}function an(t,e,n,r){if(50<zo)throw zo=0,bd=null,Error(F(185));xa(t,n,r),(!(le&2)||t!==Ye)&&(t===Ye&&(!(le&2)&&(Zu|=n),$e===4&&mr(t,tt)),At(t,r),n===1&&le===0&&!(e.mode&1)&&(Ci=Oe()+500,Qu&&Hr()))}function At(t,e){var n=t.callbackNode;W1(t,e);var r=eu(t,t===Ye?tt:0);if(r===0)n!==null&&fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fg(n),e===1)t.tag===0?qS(iy.bind(null,t)):p0(iy.bind(null,t)),US(function(){!(le&6)&&Hr()}),n=null;else{switch($v(r)){case 1:n=xf;break;case 4:n=Uv;break;case 16:n=Zl;break;case 536870912:n=zv;break;default:n=Zl}n=dw(n,iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iw(t,e){if(Ml=-1,jl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(fi()&&t.callbackNode!==n)return null;var r=eu(t,t===Ye?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_u(t,r);else{e=r;var s=le;le|=2;var i=aw();(Ye!==t||tt!==e)&&(Dn=null,Ci=Oe()+500,hs(t,e));do try{hx();break}catch(l){ow(t,l)}while(!0);jf(),mu.current=i,le=s,je!==null?e=0:(Ye=null,tt=0,e=$e)}if(e!==0){if(e===2&&(s=sd(t),s!==0&&(r=s,e=Nd(t,s))),e===1)throw n=da,hs(t,0),mr(t,r),At(t,Oe()),n;if(e===6)mr(t,r);else{if(s=t.current.alternate,!(r&30)&&!ux(s)&&(e=_u(t,r),e===2&&(i=sd(t),i!==0&&(r=i,e=Nd(t,i))),e===1))throw n=da,hs(t,0),mr(t,r),At(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ss(t,Et,Dn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=Zf+500-Oe(),10<e)){if(eu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=dd(ss.bind(null,t,Et,Dn),e);break}ss(t,Et,Dn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-on(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lx(r/1960))-r,10<r){t.timeoutHandle=dd(ss.bind(null,t,Et,Dn),r);break}ss(t,Et,Dn);break;case 5:ss(t,Et,Dn);break;default:throw Error(F(329))}}}return At(t,Oe()),t.callbackNode===n?iw.bind(null,t):null}function Nd(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=_u(t,e),t!==2&&(e=Et,Et=n,e!==null&&Dd(e)),t}function Dd(t){Et===null?Et=t:Et.push.apply(Et,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!un(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Xf,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(le&6)throw Error(F(327));fi();var e=eu(t,0);if(!(e&1))return At(t,Oe()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var r=sd(t);r!==0&&(e=r,n=Nd(t,r))}if(n===1)throw n=da,hs(t,0),mr(t,e),At(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ss(t,Et,Dn),At(t,Oe()),null}function ep(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ci=Oe()+500,Qu&&Hr())}}function vs(t){Er!==null&&Er.tag===0&&!(le&6)&&fi();var e=le;le|=1;var n=Ht.transition,r=he;try{if(Ht.transition=null,he=1,t)return t()}finally{he=r,Ht.transition=n,le=e,!(le&6)&&Hr()}}function tp(){bt=oi.current,Ee(oi)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FS(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&iu();break;case 3:xi(),Ee(St),Ee(ht),qf();break;case 5:$f(r);break;case 4:xi();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Ff(r.type._context);break;case 22:case 23:tp()}n=n.return}if(Ye=t,je=t=Pr(t.current,null),tt=bt=e,$e=0,da=null,Xf=Zu=_s=0,Et=Uo=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}as=null}return t}function ow(t,e){do{var n=je;try{if(jf(),Vl.current=pu,fu){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fu=!1}if(ys=0,Qe=Be=Ae=null,jo=!1,ua=0,Jf.current=null,n===null||n.return===null){$e=1,da=e,je=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Hg(o);if(I!==null){I.flags&=-257,Gg(I,o,l,i,e),I.mode&1&&Wg(i,c,e),e=I,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){Wg(i,c,e),np();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var D=Hg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Gg(D,o,l,i,e),Lf(Ai(u,l));break e}}i=u=Ai(u,l),$e!==4&&($e=2),Uo===null?Uo=[i]:Uo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=$0(i,u,e);Fg(i,S);break e;case 1:l=u;var w=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(kr===null||!kr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=q0(i,l,e);Fg(i,b);break e}}i=i.return}while(i!==null)}uw(n)}catch(V){e=V,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function aw(){var t=mu.current;return mu.current=pu,t===null?pu:t}function np(){($e===0||$e===3||$e===2)&&($e=4),Ye===null||!(_s&268435455)&&!(Zu&268435455)||mr(Ye,tt)}function _u(t,e){var n=le;le|=2;var r=aw();(Ye!==t||tt!==e)&&(Dn=null,hs(t,e));do try{cx();break}catch(s){ow(t,s)}while(!0);if(jf(),le=n,mu.current=r,je!==null)throw Error(F(261));return Ye=null,tt=0,$e}function cx(){for(;je!==null;)lw(je)}function hx(){for(;je!==null&&!L1();)lw(je)}function lw(t){var e=hw(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?uw(t):je=e,Jf.current=null}function uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sx(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,je=null;return}}else if(n=rx(n,e,bt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);$e===0&&($e=5)}function ss(t,e,n){var r=he,s=Ht.transition;try{Ht.transition=null,he=1,dx(t,e,n,r)}finally{Ht.transition=s,he=r}return null}function dx(t,e,n,r){do fi();while(Er!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(H1(t,i),t===Ye&&(je=Ye=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,dw(Zl,function(){return fi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ht.transition,Ht.transition=null;var o=he;he=1;var l=le;le|=4,Jf.current=null,ox(t,n),rw(n,t),NS(cd),tu=!!ud,cd=ud=null,t.current=n,ax(n),M1(),le=l,he=o,Ht.transition=i}else t.current=n;if(_l&&(_l=!1,Er=t,yu=s),i=t.pendingLanes,i===0&&(kr=null),U1(n.stateNode),At(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(gu)throw gu=!1,t=Pd,Pd=null,t;return yu&1&&t.tag!==0&&fi(),i=t.pendingLanes,i&1?t===bd?zo++:(zo=0,bd=t):zo=0,Hr(),null}function fi(){if(Er!==null){var t=$v(yu),e=Ht.transition,n=he;try{if(Ht.transition=null,he=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,yu=0,le&6)throw Error(F(331));var s=le;for(le|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Fo(8,f,i)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var p=f.sibling,I=f.return;if(ew(f),f===c){H=null;break}if(p!==null){p.return=I,H=p;break}H=I}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,H=S;break e}H=i.return}}var w=t.current;for(H=w;H!==null;){o=H;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,H=C;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xu(9,l)}}catch(V){be(l,l.return,V)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(le=s,Hr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{he=n,Ht.transition=e}}return!1}function oy(t,e,n){e=Ai(n,e),e=$0(t,e,1),t=Cr(t,e,1),e=mt(),t!==null&&(xa(t,1,e),At(t,e))}function be(t,e,n){if(t.tag===3)oy(t,t,n);else for(;e!==null;){if(e.tag===3){oy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=Ai(n,t),t=q0(e,t,1),e=Cr(e,t,1),t=mt(),e!==null&&(xa(e,1,t),At(e,t));break}}e=e.return}}function fx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(tt&n)===n&&($e===4||$e===3&&(tt&130023424)===tt&&500>Oe()-Zf?hs(t,0):Xf|=n),At(t,e)}function cw(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=mt();t=qn(t,e),t!==null&&(xa(t,e,n),At(t,n))}function px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cw(t,n)}function mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),cw(t,n)}var hw;hw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,nx(t,e,n);It=!!(t.flags&131072)}else It=!1,Ie&&e.flags&1048576&&m0(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var s=Ti(e,ht.current);di(e,n),s=Hf(null,e,r,t,s,n);var i=Gf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(i=!0,ou(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zf(e),s.updater=Ju,e.stateNode=s,s._reactInternals=e,vd(e,r,t,n),e=Td(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Vf(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=yx(r),t=Zt(r,t),s){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=Yg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Qg(null,e,r,Zt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Yg(t,e,r,s,n);case 3:e:{if(K0(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,E0(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ai(Error(F(423)),e),e=Jg(t,e,r,n,s);break e}else if(r!==s){s=Ai(Error(F(424)),e),e=Jg(t,e,r,n,s);break e}else for(Dt=Ar(e.stateNode.containerInfo.firstChild),Ot=e,Ie=!0,nn=null,n=v0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===s){e=Wn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return T0(e),t===null&&gd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,hd(r,s)?o=null:i!==null&&hd(r,i)&&(e.flags|=32),G0(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return Q0(t,e,n);case 4:return Bf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Si(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Kg(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(uu,r._currentValue),r._currentValue=o,i!==null)if(un(i.value,o)){if(i.children===s.children&&!St.current){e=Wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),yd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,di(e,n),s=Kt(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=Zt(r,e.pendingProps),s=Zt(r.type,s),Qg(t,e,r,s,n);case 15:return W0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Ll(t,e),e.tag=1,xt(r)?(t=!0,ou(e)):t=!1,di(e,n),B0(e,r,s),vd(e,r,s,n),Td(null,e,r,!0,t,n);case 19:return Y0(t,e,n);case 22:return H0(t,e,n)}throw Error(F(156,e.tag))};function dw(t,e){return Fv(t,e)}function gx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new gx(t,e,n,r)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yx(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===If)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ys:return ds(n.children,s,i,e);case Ef:o=8,s|=8;break;case $h:return t=Wt(12,n,e,s|2),t.elementType=$h,t.lanes=i,t;case qh:return t=Wt(13,n,e,s),t.elementType=qh,t.lanes=i,t;case Wh:return t=Wt(19,n,e,s),t.elementType=Wh,t.lanes=i,t;case Tv:return ec(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Ev:o=9;break e;case Tf:o=11;break e;case If:o=14;break e;case hr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ds(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function ec(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=Tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Eh(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Th(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _x(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,r,s,i,o,l,u){return t=new _x(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Wt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(i),t}function vx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fw(t){if(!t)return Lr;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return f0(t,n,e)}return e}function pw(t,e,n,r,s,i,o,l,u){return t=sp(n,r,!0,t,s,i,o,l,u),t.context=fw(null),n=t.current,r=mt(),s=Rr(n),i=Fn(r,s),i.callback=e??null,Cr(n,i,s),t.current.lanes=s,xa(t,s,r),At(t,r),t}function tc(t,e,n,r){var s=e.current,i=mt(),o=Rr(s);return n=fw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(s,e,o),t!==null&&(an(t,s,o,i),Dl(t,s,o)),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ay(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){ay(t,e),(t=t.alternate)&&ay(t,e)}function wx(){return null}var mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}nc.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));tc(t,e,null,null)};nc.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vs(function(){tc(null,t,null,null)}),e[$n]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&Kv(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ly(){}function Ex(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=vu(o);i.call(c)}}var o=pw(e,r,t,0,null,!1,!1,"",ly);return t._reactRootContainer=o,t[$n]=o.current,sa(t.nodeType===8?t.parentNode:t),vs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=vu(u);l.call(c)}}var u=sp(t,0,!1,null,null,!1,!1,"",ly);return t._reactRootContainer=u,t[$n]=u.current,sa(t.nodeType===8?t.parentNode:t),vs(function(){tc(e,u,n,r)}),u}function sc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=vu(o);l.call(u)}}tc(e,o,t,s)}else o=Ex(n,e,t,s,r);return vu(o)}qv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(Af(e,n|1),At(e,Oe()),!(le&6)&&(Ci=Oe()+500,Hr()))}break;case 13:vs(function(){var r=qn(t,1);if(r!==null){var s=mt();an(r,t,1,s)}}),ip(t,1)}};Cf=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=mt();an(e,t,134217728,n)}ip(t,134217728)}};Wv=function(t){if(t.tag===13){var e=Rr(t),n=qn(t,e);if(n!==null){var r=mt();an(n,t,e,r)}ip(t,e)}};Hv=function(){return he};Gv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};td=function(t,e,n){switch(e){case"input":if(Kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ku(r);if(!s)throw Error(F(90));Sv(r),Kh(r,s)}}}break;case"textarea":Av(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};Dv=ep;Vv=vs;var Tx={usingClientEntryPoint:!1,Events:[Ca,ei,Ku,bv,Nv,ep]},yo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mv(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{qu=vl.inject(Ix),Tn=vl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(F(200));return vx(t,e,null,n)};jt.createRoot=function(t,e){if(!ap(t))throw Error(F(299));var n=!1,r="",s=mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,r,s),t[$n]=e.current,sa(t.nodeType===8?t.parentNode:t),new op(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Mv(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return vs(t)};jt.hydrate=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=mw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pw(e,null,t,1,n??null,s,!1,i,o),t[$n]=e.current,sa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nc(e)};jt.render=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!rc(t))throw Error(F(40));return t._reactRootContainer?(vs(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};jt.unstable_batchedUpdates=ep;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return sc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gw)}catch(t){console.error(t)}}gw(),gv.exports=jt;var yw=gv.exports,uy=yw;zh.createRoot=uy.createRoot,zh.hydrateRoot=uy.hydrateRoot;const Sx=()=>{};var cy={};/**
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
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(p=64)),r.push(n[f],n[m],n[p],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new Ax;const p=i<<2|l>>4;if(r.push(p),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ax extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cx=function(t){const e=_w(t);return vw.encodeByteArray(e,!0)},wu=function(t){return Cx(t).replace(/\./g,"")},ww=function(t){try{return vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rx=()=>kx().__FIREBASE_DEFAULTS__,Px=()=>{if(typeof process>"u"||typeof cy>"u")return;const t=cy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ww(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return Sx()||Rx()||Px()||bx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ew=t=>{var e,n;return(n=(e=ic())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Tw=t=>{const e=Ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Iw=()=>{var t;return(t=ic())==null?void 0:t.config},Sw=t=>{var e;return(e=ic())==null?void 0:e[`_${t}`]};/**
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
 */class Nx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function xw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wu(JSON.stringify(n)),wu(JSON.stringify(o)),""].join(".")}const Bo={};function Dx(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bo))Bo[e]?t.emulator.push(e):t.prod.push(e);return t}function Vx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hy=!1;function up(t,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||Bo[t]===e||Bo[t]||hy)return;Bo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Dx().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,I){p.setAttribute("width","24"),p.setAttribute("id",I),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{hy=!0,o()},p}function f(p,I){p.setAttribute("id",I),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=Vx(r),I=n("text"),k=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),w=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const C=p.element;l(C),f(D,P);const b=c();u(w,S),C.append(w,k,D,b),document.body.appendChild(C)}i?(k.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ox(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Lx(){var e;const t=(e=ic())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Aw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fx(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){return!Lx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function zx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Bx="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bx,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$x(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Jt(s,l,r)}}function $x(t,e){return t.replace(qx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;function Wx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dy(i)&&dy(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hx(t,e){const n=new Gx(t,e);return n.subscribe.bind(n)}class Gx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ih),s.error===void 0&&(s.error=Ih),s.complete===void 0&&(s.complete=Ih);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ih(){}/**
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
 */const Qx=1e3,Yx=2,Jx=4*60*60*1e3,Xx=.5;function fy(t,e=Qx,n=Yx){const r=e*Math.pow(n,t),s=Math.round(Xx*r*(Math.random()-.5)*2);return Math.min(Jx,r+s)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class Zx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(t){return t===is?void 0:t}function tA(t){return t.instantiationMode==="EAGER"}/**
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
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const rA={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},sA=se.INFO,iA={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},oA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=sA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const aA=(t,e)=>e.some(n=>t instanceof n);let py,my;function lA(){return py||(py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uA(){return my||(my=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rw=new WeakMap,Vd=new WeakMap,Pw=new WeakMap,Sh=new WeakMap,cp=new WeakMap;function cA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rw.set(n,t)}).catch(()=>{}),cp.set(e,t),e}function hA(t){if(Vd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dA(t){Od=t(Od)}function fA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xh(this),e,...n);return Pw.set(r,e.sort?e.sort():[e]),br(r)}:uA().includes(t)?function(...e){return t.apply(xh(this),e),br(Rw.get(this))}:function(...e){return br(t.apply(xh(this),e))}}function pA(t){return typeof t=="function"?fA(t):(t instanceof IDBTransaction&&hA(t),aA(t,lA())?new Proxy(t,Od):t)}function br(t){if(t instanceof IDBRequest)return cA(t);if(Sh.has(t))return Sh.get(t);const e=pA(t);return e!==t&&(Sh.set(t,e),cp.set(e,t)),e}const xh=t=>cp.get(t);function bw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const mA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Ah=new Map;function gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Ah.set(e,i),i}dA(t=>({...t,get:(e,n,r)=>gy(e,n)||t.get(e,n,r),has:(e,n)=>!!gy(e,n)||t.has(e,n)}));/**
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
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",yy="0.14.9";/**
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
 */const Hn=new oc("@firebase/app"),vA="@firebase/app-compat",wA="@firebase/analytics-compat",EA="@firebase/analytics",TA="@firebase/app-check-compat",IA="@firebase/app-check",SA="@firebase/auth",xA="@firebase/auth-compat",AA="@firebase/database",CA="@firebase/data-connect",kA="@firebase/database-compat",RA="@firebase/functions",PA="@firebase/functions-compat",bA="@firebase/installations",NA="@firebase/installations-compat",DA="@firebase/messaging",VA="@firebase/messaging-compat",OA="@firebase/performance",LA="@firebase/performance-compat",MA="@firebase/remote-config",jA="@firebase/remote-config-compat",FA="@firebase/storage",UA="@firebase/storage-compat",zA="@firebase/firestore",BA="@firebase/ai",$A="@firebase/firestore-compat",qA="firebase",WA="12.10.0";/**
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
 */const Md="[DEFAULT]",HA={[Ld]:"fire-core",[vA]:"fire-core-compat",[EA]:"fire-analytics",[wA]:"fire-analytics-compat",[IA]:"fire-app-check",[TA]:"fire-app-check-compat",[SA]:"fire-auth",[xA]:"fire-auth-compat",[AA]:"fire-rtdb",[CA]:"fire-data-connect",[kA]:"fire-rtdb-compat",[RA]:"fire-fn",[PA]:"fire-fn-compat",[bA]:"fire-iid",[NA]:"fire-iid-compat",[DA]:"fire-fcm",[VA]:"fire-fcm-compat",[OA]:"fire-perf",[LA]:"fire-perf-compat",[MA]:"fire-rc",[jA]:"fire-rc-compat",[FA]:"fire-gcs",[UA]:"fire-gcs-compat",[zA]:"fire-fst",[$A]:"fire-fst-compat",[BA]:"fire-vertex","fire-js":"fire-js",[qA]:"fire-js-all"};/**
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
 */const Eu=new Map,GA=new Map,jd=new Map;function _y(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(jd.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;jd.set(e,t);for(const n of Eu.values())_y(n,t);for(const n of GA.values())_y(n,t);return!0}function Gr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const KA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new bs("app","Firebase",KA);/**
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
 */class QA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=WA;function Nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Md,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=Iw()),!n)throw Nr.create("no-options");const i=Eu.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new nA(s);for(const u of jd.values())o.addComponent(u);const l=new QA(n,r,o);return Eu.set(s,l),l}function ac(t=Md){const e=Eu.get(t);if(!e&&t===Md&&Iw())return Nw();if(!e)throw Nr.create("no-app",{appName:t});return e}function Ct(t,e,n){let r=HA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(o.join(" "));return}cn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const YA="firebase-heartbeat-database",JA=1,fa="firebase-heartbeat-store";let Ch=null;function Dw(){return Ch||(Ch=bw(YA,JA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function XA(t){try{const n=(await Dw()).transaction(fa),r=await n.objectStore(fa).get(Vw(t));return await n.done,r}catch(e){if(e instanceof Jt)Hn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function vy(t,e){try{const r=(await Dw()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,Vw(t)),await r.done}catch(n){if(n instanceof Jt)Hn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function Vw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZA=1024,eC=30;class tC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>eC){const o=sC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:s}=nC(this._heartbeatsCache.heartbeats),i=wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Hn.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function nC(t,e=ZA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ey(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ey(t){return wu(JSON.stringify({version:2,heartbeats:t})).length}function sC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function iC(t){cn(new Yt("platform-logger",e=>new yA(e),"PRIVATE")),cn(new Yt("heartbeat",e=>new tC(e),"PRIVATE")),Ct(Ld,yy,t),Ct(Ld,yy,"esm2020"),Ct("fire-js","")}iC("");function Ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oC=Ow,Lw=new bs("auth","Firebase",Ow());/**
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
 */const Tu=new oc("@firebase/auth");function aC(t,...e){Tu.logLevel<=se.WARN&&Tu.warn(`Auth (${Ns}): ${t}`,...e)}function Ul(t,...e){Tu.logLevel<=se.ERROR&&Tu.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw hp(t,...e)}function Sn(t,...e){return hp(t,...e)}function Mw(t,e,n){const r={...oC(),[e]:n};return new bs("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return Mw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lw.create(t,...e)}function Y(t,e,...n){if(!t)throw hp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ul(e),new Error(e)}function Gn(t,e){t||Mn(e)}/**
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
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function lC(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function uC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lC()||Aw()||"connection"in navigator)?navigator.onLine:!0}function cC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ox()||jx()}get(){return uC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dp(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fC=new Pa(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Zn(t,e,n,r,s={}){return Fw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ra({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return Mx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(c.credentials="include"),jw.fetch()(await Uw(t,t.config.apiHost,n,l),c)})}async function Fw(t,e,n){t._canInitEmulator=!1;const r={...hC,...e};try{const s=new mC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mw(t,f,c);hn(t,f)}}catch(s){if(s instanceof Jt)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function ba(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?dp(t.config,s):`${t.config.apiScheme}://${s}`;return dC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function pC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),fC.get())})}}function wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}function Iy(t){return t!==void 0&&t.enterprise!==void 0}class gC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yC(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
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
 */async function _C(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Iu(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=fp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$o(kh(s.auth_time)),issuedAtTime:$o(kh(s.iat)),expirationTime:$o(kh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const s=ww(n);return s?JSON.parse(s):(Ul("Failed to decode base64 JWT payload"),null)}catch(s){return Ul("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sy(t){const e=fp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Su(t){var m;const e=t.auth,n=await t.getIdToken(),r=await pa(t,Iu(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?zw(s.providerUserInfo):[],o=IC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function TC(t){const e=Se(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function SC(t,e){const n=await Fw(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Uw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(u.credentials="include"),jw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xC(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new pi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function lr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vC(this,e)}reload(){return TC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await pa(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:I,providerData:k,stsTokenManager:P}=n;Y(m&&P,e,"internal-error");const D=pi.fromJSON(this.name,P);Y(typeof m=="string",e,"internal-error"),lr(r,e.name),lr(s,e.name),Y(typeof p=="boolean",e,"internal-error"),Y(typeof I=="boolean",e,"internal-error"),lr(i,e.name),lr(o,e.name),lr(l,e.name),lr(u,e.name),lr(c,e.name),lr(f,e.name);const S=new rn({uid:m,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return k&&Array.isArray(k)&&(S.providerData=k.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new pi;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Su(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new pi;l.updateFromIdToken(r);const u=new rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const xy=new Map;function jn(t){Gn(t instanceof Function,"Expected a class definition");let e=xy.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xy.set(t,e),e)}/**
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
 */class Bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bw.type="NONE";const Ay=Bw;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zl(this.userKey,s.apiKey,i),this.fullPersistenceKey=zl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Iu(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mi(jn(Ay),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||jn(Ay);const o=zl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const p=await Iu(e,{idToken:f}).catch(()=>{});if(!p)break;m=await rn._fromGetAccountInfoResponse(e,p,f)}else m=rn._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new mi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new mi(i,e,r))}}/**
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
 */function Cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kw(e))return"Blackberry";if(Qw(e))return"Webos";if(qw(e))return"Safari";if((e.includes("chrome/")||Ww(e))&&!e.includes("edge/"))return"Chrome";if(Gw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=dt()){return/firefox\//i.test(t)}function qw(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ww(t=dt()){return/crios\//i.test(t)}function Hw(t=dt()){return/iemobile/i.test(t)}function Gw(t=dt()){return/android/i.test(t)}function Kw(t=dt()){return/blackberry/i.test(t)}function Qw(t=dt()){return/webos/i.test(t)}function pp(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AC(t=dt()){var e;return pp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function CC(){return Fx()&&document.documentMode===10}function Yw(t=dt()){return pp(t)||Gw(t)||Qw(t)||Kw(t)||/windows phone/i.test(t)||Hw(t)}/**
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
 */function Jw(t,e=[]){let n;switch(t){case"Browser":n=Cy(dt());break;case"Worker":n=`${Cy(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RC(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const PC=6;class bC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class NC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Iu(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Un(this));const n=e?Se(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RC(this),n=new bC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&aC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ds(t){return Se(t)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hx(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DC(t){lc=t}function Xw(t){return lc.loadJS(t)}function VC(){return lc.recaptchaEnterpriseScript}function OC(){return lc.gapiScript}function LC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class MC{constructor(){this.enterprise=new jC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const FC="recaptcha-enterprise",Zw="NO_RECAPTCHA";class UC{constructor(e){this.type=FC,this.auth=Ds(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{yC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new gC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Zw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Iy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VC();u.length!==0&&(u+=l),Xw(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ry(t,e,n,r=!1,s=!1){const i=new UC(t);let o;if(s)o=Zw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function zd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ry(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ry(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function zC(t,e){const n=Gr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function BC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $C(t,e,n){const r=Ds(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eE(e),{host:o,port:l}=qC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Mr(c,r.config.emulator)&&Mr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ps(o)?(lp(`${i}//${o}${u}`),up("Auth",!0)):WC()}function eE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qC(t){const e=eE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Py(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Py(o)}}}function Py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function HC(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GC(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}async function KC(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Xn(t,e))}async function QC(t,e){return KC(t,e)}/**
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
 */async function YC(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function JC(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
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
 */class ma extends mp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zd(e,n,"signInWithPassword",GC);case"emailLink":return YC(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zd(e,r,"signUpPassword",HC);case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gi(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
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
 */const XC="http://localhost";class ws extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ws(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function ZC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ek(t){const e=Co(ko(t)).link,n=e?Co(ko(e)).deep_link_id:null,r=Co(ko(t)).deep_link_id;return(r?Co(ko(r)).link:null)||r||n||e||t}class gp{constructor(e){const n=Co(ko(e)),r=n.apiKey??null,s=n.oobCode??null,i=ZC(n.mode??null);Y(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ek(e);try{return new gp(n)}catch{return null}}}/**
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
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gp.parseLink(n);return Y(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends tE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends Na{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class yr extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
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
 */class _r extends Na{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
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
 */class vr extends Na{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
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
 */async function tk(t,e){return ba(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=by(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=by(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function by(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xu extends Jt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xu(e,n,r,s)}}function nE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,i,e,r):i})}async function nk(t,e,n=!1){const r=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
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
 */async function rk(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(Un(r));const s="reauthenticate";try{const i=await pa(t,nE(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=fp(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function rE(t,e,n=!1){if(Nt(t.app))return Promise.reject(Un(t));const r="signIn",s=await nE(t,r,e),i=await Es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function sk(t,e){return rE(Ds(t),e)}/**
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
 */async function sE(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ik(t,e,n){if(Nt(t.app))return Promise.reject(Un(t));const r=Ds(t),o=await zd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sE(t),u}),l=await Es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ok(t,e,n){return Nt(t.app)?Promise.reject(Un(t)):sk(Se(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(t),r})}async function ak(t,e){const n=Se(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await QC(n.auth,s);i!==t.email&&await t.reload()}function lk(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function uk(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function ck(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function hk(t){return Se(t).signOut()}const Au="__sak";/**
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
 */class iE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dk=1e3,fk=10;class oE extends iE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const pk=oE;/**
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
 */class aE extends iE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aE.type="SESSION";const lE=aE;/**
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
 */function mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=yp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xn(){return window}function yk(t){xn().location.href=t}/**
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
 */function uE(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function _k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function wk(){return uE()?self:null}/**
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
 */const cE="firebaseLocalStorageDb",Ek=1,Cu="firebaseLocalStorage",hE="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function Tk(){const t=indexedDB.deleteDatabase(cE);return new Da(t).toPromise()}function Bd(){const t=indexedDB.open(cE,Ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cu,{keyPath:hE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cu)?e(r):(r.close(),await Tk(),e(await Bd()))})})}async function Ny(t,e,n){const r=cc(t,!0).put({[hE]:e,value:n});return new Da(r).toPromise()}async function Ik(t,e){const n=cc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function Dy(t,e){const n=cc(t,!0).delete(e);return new Da(n).toPromise()}const Sk=800,xk=3;class dE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(wk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new gk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await Ny(e,Au,"1"),await Dy(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ik(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new Da(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dE.type="LOCAL";const Ak=dE;new Pa(3e4,6e4);/**
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
 */function Ck(t,e){return e?jn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _p extends mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kk(t){return rE(t.auth,new _p(t),t.bypassAuthState)}function Rk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),rk(n,new _p(t),t.bypassAuthState)}async function Pk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),nk(n,new _p(t),t.bypassAuthState)}/**
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
 */class fE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kk;case"linkViaPopup":case"linkViaRedirect":return Pk;case"reauthViaPopup":case"reauthViaRedirect":return Rk;default:hn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bk=new Pa(2e3,1e4);class ai extends fE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bk.get())};e()}}ai.currentPopupAction=null;/**
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
 */const Nk="pendingRedirect",Bl=new Map;class Dk extends fE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await Vk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vk(t,e){const n=Mk(e),r=Lk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ok(t,e){Bl.set(t._key(),e)}function Lk(t){return jn(t._redirectPersistence)}function Mk(t){return zl(Nk,t.config.apiKey,t.name)}async function jk(t,e,n=!1){if(Nt(t.app))return Promise.reject(Un(t));const r=Ds(t),s=Ck(r,e),o=await new Dk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Fk=10*60*1e3;class Uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vy(e))}saveEventToCache(e){this.cachedEventUids.add(Vy(e)),this.lastProcessedEventTime=Date.now()}}function Vy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pE(t);default:return!1}}/**
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
 */async function Bk(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const $k=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qk=/^https?/;async function Wk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bk(t);for(const n of e)try{if(Hk(n))return}catch{}hn(t,"unauthorized-domain")}function Hk(t){const e=Fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qk.test(n))return!1;if($k.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gk=new Pa(3e4,6e4);function Oy(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kk(t){return new Promise((e,n)=>{var s,i,o;function r(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),n(Sn(t,"network-request-failed"))},timeout:Gk.get()})}if((i=(s=xn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=xn().gapi)!=null&&o.load)r();else{const l=LC("iframefcb");return xn()[l]=()=>{gapi.load?r():n(Sn(t,"network-request-failed"))},Xw(`${OC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function Qk(t){return $l=$l||Kk(t),$l}/**
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
 */const Yk=new Pa(5e3,15e3),Jk="__/auth/iframe",Xk="emulator/auth/iframe",Zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tR(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dp(e,Xk):`https://${t.config.authDomain}/${Jk}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=eR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ra(r).slice(1)}`}async function nR(t){const e=await Qk(t),n=xn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:tR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=xn().setTimeout(()=>{i(o)},Yk.get());function u(){xn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const rR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,oR="_blank",aR="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lR(t,e,n,r=sR,s=iR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...rR,width:r.toString(),height:s.toString(),top:i,left:o},c=dt().toLowerCase();n&&(l=Ww(c)?oR:n),$w(c)&&(e=e||aR,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[I,k])=>`${p}${I}=${k},`,"");if(AC(c)&&l!=="_self")return uR(e||"",l),new Ly(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Ly(m)}function uR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cR="__/auth/handler",hR="emulator/auth/handler",dR=encodeURIComponent("fac");async function My(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof tE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Na){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${dR}=${encodeURIComponent(u)}`:"";return`${fR(t)}?${Ra(l).slice(1)}${c}`}function fR({config:t}){return t.emulator?dp(t,hR):`https://${t.authDomain}/${cR}`}/**
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
 */const Rh="webStorageSupport";class pR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=jk,this._overrideRedirectResult=Ok}async _openPopup(e,n,r,s){var o;Gn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await My(e,n,r,Fd(),s);return lR(e,i,yp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await My(e,n,r,Fd(),s);return yk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nR(e),r=new Uk(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Rh];i!==void 0&&n(!!i),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yw()||qw()||pp()}}const mR=pR;var jy="@firebase/auth",Fy="1.12.1";/**
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
 */class gR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _R(t){cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jw(t)},c=new NC(r,s,i,u);return BC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Yt("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(r=>new gR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(jy,Fy,yR(t)),Ct(jy,Fy,"esm2020")}/**
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
 */const vR=5*60,wR=Sw("authIdTokenMaxAge")||vR;let Uy=null;const ER=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wR)return;const s=n==null?void 0:n.token;Uy!==s&&(Uy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function TR(t=ac()){const e=Gr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zC(t,{popupRedirectResolver:mR,persistence:[Ak,pk,lE]}),r=Sw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ER(i.toString());uk(n,o,()=>o(n.currentUser)),lk(n,l=>o(l))}}const s=Ew("auth");return s&&$C(n,`http://${s}`),n}function IR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}DC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",IR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_R("Browser");var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,mE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.F=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(A,E,R){for(var x=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)x[ue-2]=arguments[ue];return y.prototype[E].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,T){T||(T=0);const A=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)A[E]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(E=0;E<16;++E)A[E]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],E=v.g[2];let R=v.g[3],x;x=y+(R^T&(E^R))+A[0]+3614090360&4294967295,y=T+(x<<7&4294967295|x>>>25),x=R+(E^y&(T^E))+A[1]+3905402710&4294967295,R=y+(x<<12&4294967295|x>>>20),x=E+(T^R&(y^T))+A[2]+606105819&4294967295,E=R+(x<<17&4294967295|x>>>15),x=T+(y^E&(R^y))+A[3]+3250441966&4294967295,T=E+(x<<22&4294967295|x>>>10),x=y+(R^T&(E^R))+A[4]+4118548399&4294967295,y=T+(x<<7&4294967295|x>>>25),x=R+(E^y&(T^E))+A[5]+1200080426&4294967295,R=y+(x<<12&4294967295|x>>>20),x=E+(T^R&(y^T))+A[6]+2821735955&4294967295,E=R+(x<<17&4294967295|x>>>15),x=T+(y^E&(R^y))+A[7]+4249261313&4294967295,T=E+(x<<22&4294967295|x>>>10),x=y+(R^T&(E^R))+A[8]+1770035416&4294967295,y=T+(x<<7&4294967295|x>>>25),x=R+(E^y&(T^E))+A[9]+2336552879&4294967295,R=y+(x<<12&4294967295|x>>>20),x=E+(T^R&(y^T))+A[10]+4294925233&4294967295,E=R+(x<<17&4294967295|x>>>15),x=T+(y^E&(R^y))+A[11]+2304563134&4294967295,T=E+(x<<22&4294967295|x>>>10),x=y+(R^T&(E^R))+A[12]+1804603682&4294967295,y=T+(x<<7&4294967295|x>>>25),x=R+(E^y&(T^E))+A[13]+4254626195&4294967295,R=y+(x<<12&4294967295|x>>>20),x=E+(T^R&(y^T))+A[14]+2792965006&4294967295,E=R+(x<<17&4294967295|x>>>15),x=T+(y^E&(R^y))+A[15]+1236535329&4294967295,T=E+(x<<22&4294967295|x>>>10),x=y+(E^R&(T^E))+A[1]+4129170786&4294967295,y=T+(x<<5&4294967295|x>>>27),x=R+(T^E&(y^T))+A[6]+3225465664&4294967295,R=y+(x<<9&4294967295|x>>>23),x=E+(y^T&(R^y))+A[11]+643717713&4294967295,E=R+(x<<14&4294967295|x>>>18),x=T+(R^y&(E^R))+A[0]+3921069994&4294967295,T=E+(x<<20&4294967295|x>>>12),x=y+(E^R&(T^E))+A[5]+3593408605&4294967295,y=T+(x<<5&4294967295|x>>>27),x=R+(T^E&(y^T))+A[10]+38016083&4294967295,R=y+(x<<9&4294967295|x>>>23),x=E+(y^T&(R^y))+A[15]+3634488961&4294967295,E=R+(x<<14&4294967295|x>>>18),x=T+(R^y&(E^R))+A[4]+3889429448&4294967295,T=E+(x<<20&4294967295|x>>>12),x=y+(E^R&(T^E))+A[9]+568446438&4294967295,y=T+(x<<5&4294967295|x>>>27),x=R+(T^E&(y^T))+A[14]+3275163606&4294967295,R=y+(x<<9&4294967295|x>>>23),x=E+(y^T&(R^y))+A[3]+4107603335&4294967295,E=R+(x<<14&4294967295|x>>>18),x=T+(R^y&(E^R))+A[8]+1163531501&4294967295,T=E+(x<<20&4294967295|x>>>12),x=y+(E^R&(T^E))+A[13]+2850285829&4294967295,y=T+(x<<5&4294967295|x>>>27),x=R+(T^E&(y^T))+A[2]+4243563512&4294967295,R=y+(x<<9&4294967295|x>>>23),x=E+(y^T&(R^y))+A[7]+1735328473&4294967295,E=R+(x<<14&4294967295|x>>>18),x=T+(R^y&(E^R))+A[12]+2368359562&4294967295,T=E+(x<<20&4294967295|x>>>12),x=y+(T^E^R)+A[5]+4294588738&4294967295,y=T+(x<<4&4294967295|x>>>28),x=R+(y^T^E)+A[8]+2272392833&4294967295,R=y+(x<<11&4294967295|x>>>21),x=E+(R^y^T)+A[11]+1839030562&4294967295,E=R+(x<<16&4294967295|x>>>16),x=T+(E^R^y)+A[14]+4259657740&4294967295,T=E+(x<<23&4294967295|x>>>9),x=y+(T^E^R)+A[1]+2763975236&4294967295,y=T+(x<<4&4294967295|x>>>28),x=R+(y^T^E)+A[4]+1272893353&4294967295,R=y+(x<<11&4294967295|x>>>21),x=E+(R^y^T)+A[7]+4139469664&4294967295,E=R+(x<<16&4294967295|x>>>16),x=T+(E^R^y)+A[10]+3200236656&4294967295,T=E+(x<<23&4294967295|x>>>9),x=y+(T^E^R)+A[13]+681279174&4294967295,y=T+(x<<4&4294967295|x>>>28),x=R+(y^T^E)+A[0]+3936430074&4294967295,R=y+(x<<11&4294967295|x>>>21),x=E+(R^y^T)+A[3]+3572445317&4294967295,E=R+(x<<16&4294967295|x>>>16),x=T+(E^R^y)+A[6]+76029189&4294967295,T=E+(x<<23&4294967295|x>>>9),x=y+(T^E^R)+A[9]+3654602809&4294967295,y=T+(x<<4&4294967295|x>>>28),x=R+(y^T^E)+A[12]+3873151461&4294967295,R=y+(x<<11&4294967295|x>>>21),x=E+(R^y^T)+A[15]+530742520&4294967295,E=R+(x<<16&4294967295|x>>>16),x=T+(E^R^y)+A[2]+3299628645&4294967295,T=E+(x<<23&4294967295|x>>>9),x=y+(E^(T|~R))+A[0]+4096336452&4294967295,y=T+(x<<6&4294967295|x>>>26),x=R+(T^(y|~E))+A[7]+1126891415&4294967295,R=y+(x<<10&4294967295|x>>>22),x=E+(y^(R|~T))+A[14]+2878612391&4294967295,E=R+(x<<15&4294967295|x>>>17),x=T+(R^(E|~y))+A[5]+4237533241&4294967295,T=E+(x<<21&4294967295|x>>>11),x=y+(E^(T|~R))+A[12]+1700485571&4294967295,y=T+(x<<6&4294967295|x>>>26),x=R+(T^(y|~E))+A[3]+2399980690&4294967295,R=y+(x<<10&4294967295|x>>>22),x=E+(y^(R|~T))+A[10]+4293915773&4294967295,E=R+(x<<15&4294967295|x>>>17),x=T+(R^(E|~y))+A[1]+2240044497&4294967295,T=E+(x<<21&4294967295|x>>>11),x=y+(E^(T|~R))+A[8]+1873313359&4294967295,y=T+(x<<6&4294967295|x>>>26),x=R+(T^(y|~E))+A[15]+4264355552&4294967295,R=y+(x<<10&4294967295|x>>>22),x=E+(y^(R|~T))+A[6]+2734768916&4294967295,E=R+(x<<15&4294967295|x>>>17),x=T+(R^(E|~y))+A[13]+1309151649&4294967295,T=E+(x<<21&4294967295|x>>>11),x=y+(E^(T|~R))+A[4]+4149444226&4294967295,y=T+(x<<6&4294967295|x>>>26),x=R+(T^(y|~E))+A[11]+3174756917&4294967295,R=y+(x<<10&4294967295|x>>>22),x=E+(y^(R|~T))+A[2]+718787259&4294967295,E=R+(x<<15&4294967295|x>>>17),x=T+(R^(E|~y))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(E+(x<<21&4294967295|x>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const T=y-this.blockSize,A=this.C;let E=this.h,R=0;for(;R<y;){if(E==0)for(;R<=T;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(A[E++]=v.charCodeAt(R++),E==this.blockSize){s(this,A),E=0;break}}else for(;R<y;)if(A[E++]=v[R++],E==this.blockSize){s(this,A),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)v[y++]=this.g[T]>>>A&255;return v};function i(v,y){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;const T=[];let A=!0;for(let E=v.length-1;E>=0;E--){const R=v[E]|0;A&&R==y||(T[E]=R,A=!1)}this.g=T}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return D(c(-v));const y=[];let T=1;for(let A=0;v>=T;A++)y[A]=v/T|0,T*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return D(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let A=m;for(let R=0;R<v.length;R+=8){var E=Math.min(8,v.length-R);const x=parseInt(v.substring(R,R+E),y);E<8?(E=c(Math.pow(y,E)),A=A.j(E).add(c(x))):(A=A.j(T),A=A.add(c(x)))}return A}var m=u(0),p=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();let v=0,y=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);v+=(A>=0?A:4294967296+A)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(P(this))return"-"+D(this).toString(v);const y=c(Math.pow(v,6));var T=this;let A="";for(;;){const E=b(T,y).g;T=S(T,E.j(y));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=E,k(T))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=S(this,v),P(v)?-1:k(v)?0:1};function D(v){const y=v.g.length,T=[];for(let A=0;A<y;A++)T[A]=~v.g[A];return new o(T,~v.h).add(p)}t.abs=function(){return P(this)?D(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),T=[];let A=0;for(let E=0;E<=y;E++){let R=A+(this.i(E)&65535)+(v.i(E)&65535),x=(R>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);A=x>>>16,R&=65535,x&=65535,T[E]=x<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(D(y))}t.j=function(v){if(k(this)||k(v))return m;if(P(this))return P(v)?D(this).j(D(v)):D(D(this).j(v));if(P(v))return D(this.j(D(v)));if(this.l(I)<0&&v.l(I)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,T=[];for(var A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let E=0;E<v.g.length;E++){const R=this.i(A)>>>16,x=this.i(A)&65535,ue=v.i(E)>>>16,Te=v.i(E)&65535;T[2*A+2*E]+=x*Te,w(T,2*A+2*E),T[2*A+2*E+1]+=R*Te,w(T,2*A+2*E+1),T[2*A+2*E+1]+=x*ue,w(T,2*A+2*E+1),T[2*A+2*E+2]+=R*ue,w(T,2*A+2*E+2)}for(v=0;v<y;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=y;v<2*y;v++)T[v]=0;return new o(T,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function C(v,y){this.g=v,this.h=y}function b(v,y){if(k(y))throw Error("division by zero");if(k(v))return new C(m,m);if(P(v))return y=b(D(v),y),new C(D(y.g),D(y.h));if(P(y))return y=b(v,D(y)),new C(D(y.g),y.h);if(v.g.length>30){if(P(v)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=p,A=y;A.l(v)<=0;)T=V(T),A=V(A);var E=L(T,1),R=L(A,1);for(A=L(A,2),T=L(T,2);!k(A);){var x=R.add(A);x.l(v)<=0&&(E=E.add(T),R=x),A=L(A,1),T=L(T,1)}return y=S(v,E.j(y)),new C(E,y)}for(E=m;v.l(y)>=0;){for(T=Math.max(1,Math.floor(v.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=c(T),x=R.j(y);P(x)||x.l(v)>0;)T-=A,R=c(T),x=R.j(y);k(R)&&(R=p),E=E.add(R),v=S(v,x)}return new C(E,v)}t.B=function(v){return b(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)&v.i(A);return new o(T,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)|v.i(A);return new o(T,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)^v.i(A);return new o(T,this.h^v.h)};function V(v){const y=v.g.length+1,T=[];for(let A=0;A<y;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(T,v.h)}function L(v,y){const T=y>>5;y%=32;const A=v.g.length-T,E=[];for(let R=0;R<A;R++)E[R]=y>0?v.i(R+T)>>>y|v.i(R+T+1)<<32-y:v.i(R+T);return new o(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Dr=o}).apply(typeof zy<"u"?zy:typeof self<"u"?self:typeof window<"u"?window:{});var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gE,Ro,yE,ql,$d,_E,vE,wE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof El=="object"&&El];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,N,O){for(var B=Array(arguments.length-2),te=2;te<arguments.length;te++)B[te-2]=arguments[te];return h.prototype[N].apply(_,B)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const N=arguments[_];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const O=N.length||0;a.length=d+O;for(let B=0;B<O;B++)a[d+B]=N[B]}else a.push(N)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,d){const _=C.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var C=new P(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,L=!1,v=new w,y=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){D(d)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}L=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function x(a){return/^[\s\xa0]*$/.test(a)}function ue(a,h){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ue,E),ue.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Te="closure_listenable_"+(Math.random()*1e6|0),We=0;function Re(a,h,d,_,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=N,this.key=++We,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function Q(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ne(a){const h={};for(const d in a)h[d]=a[d];return h}const de="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ut(a,h){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let O=0;O<de.length;O++)d=de[O],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function De(a){this.src=a,this.g={},this.h=0}De.prototype.add=function(a,h,d,_,N){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=vt(a,h,_,N);return B>-1?(h=a[B],d||(h.fa=!1)):(h=new Re(h,this.src,O,!!_,N),h.fa=d,a.push(h)),h};function Rt(a,h){const d=h.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,h,void 0),O;(O=N>=0)&&Array.prototype.splice.call(_,N,1),O&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function vt(a,h,d,_){for(let N=0;N<a.length;++N){const O=a[N];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==_)return N}return-1}var fn="closure_lm_"+(Math.random()*1e6|0),Ms={};function Ua(a,h,d,_,N){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Ua(a,h[O],d,_,N);return null}return d=Ba(d),a&&a[Te]?a.J(h,d,l(_)?!!_.capture:!1,N):qi(a,h,d,!1,_,N)}function qi(a,h,d,_,N,O){if(!h)throw Error("Invalid event type");const B=l(N)?!!N.capture:!!N;let te=Wi(a);if(te||(a[fn]=te=new De(a)),d=te.add(h,d,_,B,O),d.proxy)return d;if(_=Vc(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)R||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),_,N);else if(a.attachEvent)a.attachEvent(Fs(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vc(){function a(d){return h.call(a.src,a.listener,d)}const h=za;return a}function Jr(a,h,d,_,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)Jr(a,h[O],d,_,N);else _=l(_)?!!_.capture:!!_,d=Ba(d),a&&a[Te]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],d=vt(h,d,_,N),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=Wi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=vt(h,d,_,N)),(d=a>-1?h[a]:null)&&js(d))}function js(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Te])Rt(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(Fs(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=Wi(h))?(Rt(d,a),d.h==0&&(d.src=null,h[fn]=null)):z(a)}}}function Fs(a){return a in Ms?Ms[a]:Ms[a]="on"+a}function za(a,h){if(a.da)a=!0;else{h=new ue(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&js(a),a=d.call(_,h)}return a}function Wi(a){return a=a[fn],a instanceof De?a:null}var Hi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ba(a){return typeof a=="function"?a:(a[Hi]||(a[Hi]=function(h){return a.handleEvent(h)}),a[Hi])}function He(){A.call(this),this.i=new De(this),this.M=this,this.G=null}m(He,A),He.prototype[Te]=!0,He.prototype.removeEventListener=function(a,h,d,_){Jr(this,a,h,d,_)};function Je(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new E(h,a);else if(h instanceof E)h.target=h.target||a;else{var N=h;h=new E(_,a),Ut(h,N)}N=!0;let O,B;if(d)for(B=d.length-1;B>=0;B--)O=h.g=d[B],N=U(O,_,!0,h)&&N;if(O=h.g=a,N=U(O,_,!0,h)&&N,N=U(O,_,!1,h)&&N,d)for(B=0;B<d.length;B++)O=h.g=d[B],N=U(O,_,!1,h)&&N}He.prototype.N=function(){if(He.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)z(d[_]);delete a.g[h],a.h--}}this.G=null},He.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},He.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function U(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==d){const te=B.listener,ze=B.ha||B.src;B.fa&&Rt(a.i,B),N=te.call(ze,_)!==!1&&N}}return N&&!_.defaultPrevented}function zt(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function st(a){a.g=zt(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $a extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(a){A.call(this),this.h=a,this.g={}}m(er,A);var qa=[];function Wa(a){G(a.g,function(h,d){this.g.hasOwnProperty(d)&&js(h)},a),a.g={}}er.prototype.N=function(){er.Z.N.call(this),Wa(this)},er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Us=o.JSON.stringify,Gi=o.JSON.parse,RI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function cm(){}function hm(){}var Ki={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Oc(){E.call(this,"d")}m(Oc,E);function Lc(){E.call(this,"c")}m(Lc,E);var Xr={},dm=null;function Ha(){return dm=dm||new He}Xr.Ia="serverreachability";function fm(a){E.call(this,Xr.Ia,a)}m(fm,E);function Qi(a){const h=Ha();Je(h,new fm(h))}Xr.STAT_EVENT="statevent";function pm(a,h){E.call(this,Xr.STAT_EVENT,a),this.stat=h}m(pm,E);function ft(a){const h=Ha();Je(h,new pm(h,a))}Xr.Ja="timingevent";function mm(a,h){E.call(this,Xr.Ja,a),this.size=h}m(mm,E);function Yi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ji(){this.g=!0}Ji.prototype.ua=function(){this.g=!1};function PI(a,h,d,_,N,O){a.info(function(){if(a.g)if(O){var B="",te=O.split("&");for(let fe=0;fe<te.length;fe++){var ze=te[fe].split("=");if(ze.length>1){const Ge=ze[0];ze=ze[1];const mn=Ge.split("_");B=mn.length>=2&&mn[1]=="type"?B+(Ge+"="+ze+"&"):B+(Ge+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+d+`
`+B})}function bI(a,h,d,_,N,O,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+d+`
`+O+" "+B})}function zs(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+DI(a,d)+(_?" "+_:"")})}function NI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ji.prototype.info=function(){};function DI(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var N=_[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<_.length;B++)_[B]=""}}}}return Us(O)}catch{return h}}var Ga={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},gm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ym;function Mc(){}m(Mc,cm),Mc.prototype.g=function(){return new XMLHttpRequest},ym=new Mc;function Xi(a){return encodeURIComponent(String(a))}function VI(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function tr(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _m}function _m(){this.i=null,this.g="",this.h=!1}var vm={},jc={};function Fc(a,h,d){a.M=1,a.A=Qa(pn(h)),a.u=d,a.R=!0,wm(a,null)}function wm(a,h){a.F=Date.now(),Ka(a),a.B=pn(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Dm(d.i,"t",_),a.C=0,d=a.j.L,a.h=new _m,a.g=Jm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new $a(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(qa[0]=N.toString()),N=qa);for(let O=0;O<N.length;O++){const B=Ua(d,N[O],_||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?ne(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Qi(),PI(a.i,a.v,a.B,a.l,a.S,a.u)}tr.prototype.ba=function(a){a=a.target;const h=this.O;h&&sr(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const te=sr(this.g),ze=this.g.ya(),fe=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Um(this.g)))){this.K||te!=4||ze==7||(ze==8||fe<=0?Qi(3):Qi(2)),Uc(this);var h=this.g.ca();this.X=h;var d=OI(this);if(this.o=h==200,bI(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,N=this.g;if((_=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(_)){var O=_;break t}}O=null}if(a=O)zs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zc(this,a);else{this.o=!1,this.m=3,ft(12),Zr(this),Zi(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<d.length;)if(Ge=LI(this,d),Ge==jc){te==4&&(this.m=4,ft(14),a=!1),zs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==vm){this.m=4,ft(15),zs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else zs(this.i,this.l,Ge,null),zc(this,Ge);if(Em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||d.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)zs(this.i,this.l,d,"[Invalid Chunked Response]"),Zr(this),Zi(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Qc(B),B.P=!0,ft(11))}}else zs(this.i,this.l,d,null),zc(this,d);te==4&&Zr(this),this.o&&!this.K&&(te==4?Gm(this.j,this):(this.o=!1,Ka(this)))}else YI(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Zr(this),Zi(this)}}}catch{}finally{}};function OI(a){if(!Em(a))return a.g.la();const h=Um(a.g);if(h==="")return"";let d="";const _=h.length,N=sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Zr(a),Zi(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<_;O++)a.h.h=!0,d+=a.h.i.decode(h[O],{stream:!(N&&O==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Em(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function LI(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?jc:(d=Number(h.substring(d,_)),isNaN(d)?vm:(_+=1,_+d>h.length?jc:(h=h.slice(_,_+d),a.C=_+d,h)))}tr.prototype.cancel=function(){this.K=!0,Zr(this)};function Ka(a){a.T=Date.now()+a.H,Tm(a,a.H)}function Tm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Yi(c(a.aa,a),h)}function Uc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(NI(this.i,this.B),this.M!=2&&(Qi(),ft(17)),Zr(this),this.m=2,Zi(this)):Tm(this,this.T-a)};function Zi(a){a.j.I==0||a.K||Gm(a.j,a)}function Zr(a){Uc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Wa(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function zc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Bc(d.h,a))){if(!a.L&&Bc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)el(d),Xa(d);else break e;Kc(d),ft(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Yi(c(d.Va,d),6e3));xm(d.h)<=1&&d.ta&&(d.ta=void 0)}else ts(d,11)}else if((a.L||d.g==a)&&el(d),!x(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let fe=N[h];const Ge=fe[0];if(!(Ge<=d.K))if(d.K=Ge,fe=fe[1],d.I==2)if(fe[0]=="c"){d.M=fe[1],d.ba=fe[2];const mn=fe[3];mn!=null&&(d.ka=mn,d.j.info("VER="+d.ka));const ns=fe[4];ns!=null&&(d.za=ns,d.j.info("SVER="+d.za));const ir=fe[5];ir!=null&&typeof ir=="number"&&ir>0&&(_=1.5*ir,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const or=a.g;if(or){const nl=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var O=_.h;O.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&($c(O,O.h),O.h=null))}if(_.G){const Yc=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;Yc&&(_.wa=Yc,ye(_.J,_.G,Yc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var B=a;if(_.na=Ym(_,_.L?_.ba:null,_.W),B.L){Am(_.h,B);var te=B,ze=_.O;ze&&(te.H=ze),te.D&&(Uc(te),Ka(te)),_.g=B}else Wm(_);d.i.length>0&&Za(d)}else fe[0]!="stop"&&fe[0]!="close"||ts(d,7);else d.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ts(d,7):Gc(d):fe[0]!="noop"&&d.l&&d.l.qa(fe),d.A=0)}}Qi(4)}catch{}}var MI=class{constructor(a,h){this.g=a,this.map=h}};function Im(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xm(a){return a.h?1:a.g?a.g.size:0}function Bc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $c(a,h){a.g?a.g.add(h):a.h=h}function Am(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Im.prototype.cancel=function(){if(this.i=Cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return I(a.i)}var km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jI(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let N,O=null;_>=0?(N=a[d].substring(0,_),O=a[d].substring(_+1)):N=a[d],h(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function nr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof nr?(this.l=a.l,eo(this,a.j),this.o=a.o,this.g=a.g,to(this,a.u),this.h=a.h,qc(this,Vm(a.i)),this.m=a.m):a&&(h=String(a).match(km))?(this.l=!1,eo(this,h[1]||"",!0),this.o=no(h[2]||""),this.g=no(h[3]||"",!0),to(this,h[4]),this.h=no(h[5]||"",!0),qc(this,h[6]||"",!0),this.m=no(h[7]||"")):(this.l=!1,this.i=new so(null,this.l))}nr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ro(h,Rm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ro(h,Rm,!0),"@"),a.push(Xi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ro(d,d.charAt(0)=="/"?zI:UI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ro(d,$I)),a.join("")},nr.prototype.resolve=function(a){const h=pn(this);let d=!!a.j;d?eo(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)to(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var N=h.h.lastIndexOf("/");N!=-1&&(_=h.h.slice(0,N+1)+_)}if(N=_,N==".."||N==".")_="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){_=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let B=0;B<N.length;){const te=N[B++];te=="."?_&&B==N.length&&O.push(""):te==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),_&&B==N.length&&O.push("")):(O.push(te),_=!0)}_=O.join("/")}else _=N}return d?h.h=_:d=a.i.toString()!=="",d?qc(h,Vm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function pn(a){return new nr(a)}function eo(a,h,d){a.j=d?no(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function to(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function qc(a,h,d){h instanceof so?(a.i=h,qI(a.i,a.l)):(d||(h=ro(h,BI)),a.i=new so(h,a.l))}function ye(a,h,d){a.i.set(h,d)}function Qa(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function no(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ro(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,FI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function FI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Rm=/[#\/\?@]/g,UI=/[#\?:]/g,zI=/[#\?]/g,BI=/[#\?@]/g,$I=/#/g;function so(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function es(a){a.g||(a.g=new Map,a.h=0,a.i&&jI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=so.prototype,t.add=function(a,h){es(this),this.i=null,a=Bs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Pm(a,h){es(a),h=Bs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bm(a,h){return es(a),h=Bs(a,h),a.g.has(h)}t.forEach=function(a,h){es(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(h,N,_,this)},this)},this)};function Nm(a,h){es(a);let d=[];if(typeof h=="string")bm(a,h)&&(d=d.concat(a.g.get(Bs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return es(this),this.i=null,a=Bs(this,a),bm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Nm(this,a),a.length>0?String(a[0]):h):h};function Dm(a,h,d){Pm(a,h),d.length>0&&(a.i=null,a.g.set(Bs(a,h),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const N=Xi(d);d=Nm(this,d);for(let O=0;O<d.length;O++){let B=N;d[O]!==""&&(B+="="+Xi(d[O])),a.push(B)}}return this.i=a.join("&")};function Vm(a){const h=new so;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Bs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qI(a,h){h&&!a.j&&(es(a),a.i=null,a.g.forEach(function(d,_){const N=_.toLowerCase();_!=N&&(Pm(this,_),Dm(this,N,d))},a)),a.j=h}function WI(a,h){const d=new Ji;if(o.Image){const _=new Image;_.onload=f(rr,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(rr,d,"TestLoadImage: error",!1,h,_),_.onabort=f(rr,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(rr,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function HI(a,h){const d=new Ji,_=new AbortController,N=setTimeout(()=>{_.abort(),rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?rr(d,"TestPingServer: ok",!0,h):rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),rr(d,"TestPingServer: error",!1,h)})}function rr(a,h,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function GI(){this.g=new RI}function Wc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Wc,cm),Wc.prototype.g=function(){return new Ya(this.i,this.h)};function Ya(a,h){He.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ya,He),t=Ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,oo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,io(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oo(this)),this.g&&(this.readyState=3,oo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Om(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Om(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?io(this):oo(this),this.readyState==3&&Om(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,io(this))},t.Na=function(a){this.g&&(this.response=a,io(this))},t.ga=function(){this.g&&io(this)};function io(a){a.readyState=4,a.l=null,a.j=null,a.B=null,oo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function oo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lm(a){let h="";return G(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Hc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Lm(d),typeof a=="string"?d!=null&&Xi(d):ye(a,h,d))}function Pe(a){He.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Pe,He);var KI=/^https?$/i,QI=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ym.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Mm(this,O);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())d.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(QI,h,void 0)>=0)||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Mm(this,O)}};function Mm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,jm(a),Ja(a)}function jm(a){a.A||(a.A=!0,Je(a,"complete"),Je(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Je(this,"complete"),Je(this,"abort"),Ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ja(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Fm(this):this.Xa())},t.Xa=function(){Fm(this)};function Fm(a){if(a.h&&typeof i<"u"){if(a.v&&sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Je(a,"readystatechange"),sr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=O===0){let B=String(a.D).match(km)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),_=!KI.test(B?B.toLowerCase():"")}d=_}if(d)Je(a,"complete"),Je(a,"success");else{a.o=6;try{var N=sr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",jm(a)}}finally{Ja(a)}}}}function Ja(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Je(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Gi(h)}};function Um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YI(a){const h={};a=(a.g&&sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var d=VI(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[N]||[];h[N]=O,O.push(d)}Q(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ao(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function zm(a){this.za=0,this.i=[],this.j=new Ji,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ao("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ao("baseRetryDelayMs",5e3,a),this.Za=ao("retryDelaySeedMs",1e4,a),this.Ta=ao("forwardChannelMaxRetries",2,a),this.va=ao("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Im(a&&a.concurrentRequestLimit),this.Ba=new GI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=zm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){ft(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=Ym(this,null,this.W),Za(this)};function Gc(a){if(Bm(a),a.I==3){var h=a.V++,d=pn(a.J);if(ye(d,"SID",a.M),ye(d,"RID",h),ye(d,"TYPE","terminate"),lo(a,d),h=new tr(a,a.j,h),h.M=2,h.A=Qa(pn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Jm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ka(h)}Qm(a)}function Xa(a){a.g&&(Qc(a),a.g.cancel(),a.g=null)}function Bm(a){Xa(a),a.v&&(o.clearTimeout(a.v),a.v=null),el(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Za(a){if(!Sm(a.h)&&!a.m){a.m=!0;var h=a.Ea;V||y(),L||(V(),L=!0),v.add(h,a),a.D=0}}function JI(a,h){return xm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Yi(c(a.Ea,a,h),Km(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new tr(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ne(O),Ut(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=qm(this,N,h),d=pn(this.J),ye(d,"RID",a),ye(d,"CVER",22),this.G&&ye(d,"X-HTTP-Session-Id",this.G),lo(this,d),O&&(this.R?h="headers="+Xi(Lm(O))+"&"+h:this.u&&Hc(d,this.u,O)),$c(this.h,N),this.Ra&&ye(d,"TYPE","init"),this.S?(ye(d,"$req",h),ye(d,"SID","null"),N.U=!0,Fc(N,d,null)):Fc(N,d,h),this.I=2}}else this.I==3&&(a?$m(this,a):this.i.length==0||Sm(this.h)||$m(this))};function $m(a,h){var d;h?d=h.l:d=a.V++;const _=pn(a.J);ye(_,"SID",a.M),ye(_,"RID",d),ye(_,"AID",a.K),lo(a,_),a.u&&a.o&&Hc(_,a.u,a.o),d=new tr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=qm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),$c(a.h,d),Fc(d,_,h)}function lo(a,h){a.H&&G(a.H,function(d,_){ye(h,_,d)}),a.l&&G({},function(d,_){ye(h,_,d)})}function qm(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let te=-1;for(;;){const ze=["count="+d];te==-1?d>0?(te=N[0].g,ze.push("ofs="+te)):te=0:ze.push("ofs="+te);let fe=!0;for(let Ge=0;Ge<d;Ge++){var O=N[Ge].g;const mn=N[Ge].map;if(O-=te,O<0)te=Math.max(0,N[Ge].g-100),fe=!1;else try{O="req"+O+"_"||"";try{var B=mn instanceof Map?mn:Object.entries(mn);for(const[ns,ir]of B){let or=ir;l(ir)&&(or=Us(ir)),ze.push(O+ns+"="+encodeURIComponent(or))}}catch(ns){throw ze.push(O+"type="+encodeURIComponent("_badmap")),ns}}catch{_&&_(mn)}}if(fe){B=ze.join("&");break e}}B=void 0}return a=a.i.splice(0,d),h.G=a,B}function Wm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;V||y(),L||(V(),L=!0),v.add(h,a),a.A=0}}function Kc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Yi(c(a.Da,a),Km(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Hm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Yi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Xa(this),Hm(this))};function Qc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Hm(a){a.g=new tr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=pn(a.na);ye(h,"RID","rpc"),ye(h,"SID",a.M),ye(h,"AID",a.K),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(h,"TO",a.ia),ye(h,"TYPE","xmlhttp"),lo(a,h),a.u&&a.o&&Hc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Qa(pn(h)),d.u=null,d.R=!0,wm(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Xa(this),Kc(this),ft(19))};function el(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Gm(a,h){var d=null;if(a.g==h){el(a),Qc(a),a.g=null;var _=2}else if(Bc(a.h,h))d=h.G,Am(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;_=Ha(),Je(_,new mm(_,d)),Za(a)}else Wm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(_==1&&JI(a,h)||_==2&&Kc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:ts(a,5);break;case 4:ts(a,10);break;case 3:ts(a,6);break;default:ts(a,2)}}}function Km(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function ts(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const N=!_;_=new nr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||eo(_,"https"),Qa(_),N?WI(_.toString(),d):HI(_.toString(),d)}else ft(2);a.I=0,a.l&&a.l.pa(h),Qm(a),Bm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Qm(a){if(a.I=0,a.ja=[],a.l){const h=Cm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Ym(a,h,d){var _=d instanceof nr?pn(d):new nr(d);if(_.g!="")h&&(_.g=h+"."+_.g),to(_,_.u);else{var N=o.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const O=new nr(null);_&&eo(O,_),h&&(O.g=h),N&&to(O,N),d&&(O.h=d),_=O}return d=a.G,h=a.wa,d&&h&&ye(_,d,h),ye(_,"VER",a.ka),lo(a,_),_}function Jm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Pe(new Wc({ab:d})):new Pe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xm(){}t=Xm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function tl(){}tl.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){He.call(this),this.g=new zm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!x(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $s(this)}m(Pt,He),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Gc(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Us(a),a=d);h.i.push(new MI(h.Ya++,a)),h.I==3&&Za(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Gc(this.g),delete this.g,Pt.Z.N.call(this)};function Zm(a){Oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Zm,Oc);function eg(){Lc.call(this),this.status=1}m(eg,Lc);function $s(a){this.g=a}m($s,Xm),$s.prototype.ra=function(){Je(this.g,"a")},$s.prototype.qa=function(a){Je(this.g,new Zm(a))},$s.prototype.pa=function(a){Je(this.g,new eg)},$s.prototype.oa=function(){Je(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,wE=function(){return new tl},vE=function(){return Ha()},_E=Xr,$d={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ga.NO_ERROR=0,Ga.TIMEOUT=8,Ga.HTTP_ERROR=6,ql=Ga,gm.COMPLETE="complete",yE=gm,hm.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",He.prototype.listen=He.prototype.J,Ro=hm,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,gE=Pe}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Mi="12.10.0";function SR(t){Mi=t}/**
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
 */const Ts=new oc("@firebase/firestore");function Ws(){return Ts.logLevel}function W(t,...e){if(Ts.logLevel<=se.DEBUG){const n=e.map(vp);Ts.debug(`Firestore (${Mi}): ${t}`,...n)}}function Kn(t,...e){if(Ts.logLevel<=se.ERROR){const n=e.map(vp);Ts.error(`Firestore (${Mi}): ${t}`,...n)}}function Is(t,...e){if(Ts.logLevel<=se.WARN){const n=e.map(vp);Ts.warn(`Firestore (${Mi}): ${t}`,...n)}}function vp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,EE(t,r,n)}function EE(t,e,n){let r=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||EE(e,s,r)}function Z(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class TE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class AR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class kR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class RR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new By(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new By(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function qd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ph(s)===Ph(i)?ie(s,i):Ph(s)?1:-1}return ie(t.length,e.length)}const NR=55296,DR=57343;function Ph(t){const e=t.charCodeAt(0);return e>=NR&&e<=DR}function ki(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const $y="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ie(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),s=vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?vn.extractNumericId(e).compare(vn.extractNumericId(n)):qd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class me extends vn{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const VR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends vn{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return VR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$y}static keyField(){return new et([$y])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
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
 */function IE(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OR(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qy(t){if(!K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wy(t){if(K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function Va(t,e){if(!SE(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const Hy=-62135596800,Gy=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Gy);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Hy)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gy}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Va(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Ue("string",we._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new we(0,0))}static max(){return new X(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ga=-1;function LR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new jr(s,K.empty(),e)}function MR(t){return new jr(t.readTime,t.key,ga)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(X.min(),K.empty(),ga)}static max(){return new jr(X.max(),K.empty(),ga)}}function jR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const FR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ji(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==FR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function zR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}dc.ce=-1;/**
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
 */const Ep=-1;function fc(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function BR(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xE="";function $R(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ky(e)),e=qR(t.get(n),e);return Ky(e)}function qR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case xE:n+="";break;default:n+=i}}return n}function Ky(t){return t+xE+""}/**
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
 */function Qy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}}class Tl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new qe(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CE("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=WR.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const kE="server_timestamp",RE="__type__",PE="__previous_value__",bE="__local_write_time__";function Tp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[RE])==null?void 0:r.stringValue)===kE}function pc(t){const e=t.mapValue.fields[PE];return Tp(e)?pc(e):e}function ya(t){const e=Fr(t.mapValue.fields[bE].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class HR{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Ru="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||Ru}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}function GR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(t.options.projectId,e)}/**
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
 */const NE="__type__",KR="__max__",Il={mapValue:{}},DE="__vector__",Pu="value";function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tp(t)?4:YR(t)?9007199254740991:QR(t)?10:11:J(28295,{value:t})}function Rn(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fr(s.timestampValue),l=Fr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ur(s.bytesValue).isEqual(Ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),l=Ve(i.doubleValue);return o===l?ku(o)===ku(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Qy(o)!==Qy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function va(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Ri(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ve(i.integerValue||i.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(ya(t),ya(e));case 5:return qd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ur(i),u=Ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ie(l[c],u[c]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(Ve(i.latitude),Ve(o.latitude));return l!==0?l:ie(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,I,k,P;const l=i.fields||{},u=o.fields||{},c=(p=l[Pu])==null?void 0:p.arrayValue,f=(I=u[Pu])==null?void 0:I.arrayValue,m=ie(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:Xy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Il.mapValue&&o===Il.mapValue)return 0;if(i===Il.mapValue)return 1;if(o===Il.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=qd(u[m],f[m]);if(p!==0)return p;const I=Ri(l[u[m]],c[f[m]]);if(I!==0)return I}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Fr(t),r=Fr(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function Xy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ri(n[s],r[s]);if(i)return i}return ie(n.length,r.length)}function Pi(t){return Wd(t)}function Wd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wd(n.fields[o])}`;return s+"}"}(t.mapValue):J(61005,{value:t})}function Wl(t){switch(zr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(t);return e?16+Wl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Wl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Kr(r.fields,(i,o)=>{s+=i.length+Wl(o)}),s}(t.mapValue);default:throw J(13486,{value:t})}}function Zy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hd(t){return!!t&&"integerValue"in t}function Ip(t){return!!t&&"arrayValue"in t}function e_(t){return!!t&&"nullValue"in t}function t_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function QR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[NE])==null?void 0:r.stringValue)===DE}function qo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return{...t}}function YR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===KR}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(qo(this.value))}}function VE(t){const e=[];return Kr(t.fields,(n,r)=>{const s=new et([n]);if(Hl(r)){const i=VE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,X.min(),X.min(),X.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,X.min(),X.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,X.min(),X.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bu{constructor(e,n){this.position=e,this.inclusive=n}}function n_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function r_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function JR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OE{}class Fe extends OE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new nP(e,r):n==="in"?new rP(e,r):n==="not-in"?new sP(e,r):n==="array-contains-any"?new iP(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eP(e,r):new tP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ri(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends OE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dn(e,n)}matches(e){return LE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function ME(t){return XR(t)&&LE(t)}function XR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Gd(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(ME(t))return t.filters.map(e=>Gd(e)).join(",");{const e=t.filters.map(n=>Gd(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&jE(o,s.filters[l]),!0):!1}(t,e):void J(19439)}function FE(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class ZR extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class eP extends Fe{constructor(e,n){super(e,"in",n),this.keys=UE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tP extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=UE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class nP extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ip(n)&&va(n.arrayValue,this.value)}}class rP extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class sP extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!va(this.value.arrayValue,n)}}class iP extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>va(this.value.arrayValue,r))}}/**
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
 */class oP{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function s_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oP(t,e,n,r,s,i,o)}function Sp(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.Te=n}return e.Te}function xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!r_(t.startAt,e.startAt)&&r_(t.endAt,e.endAt)}function Kd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function aP(t,e,n,r,s,i,o,l){return new Ui(t,e,n,r,s,i,o,l)}function mc(t){return new Ui(t)}function i_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lP(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function zE(t){return t.collectionGroup!==null}function Wo(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new wa(i,r))}),n.has(et.keyField().canonicalString())||e.Ie.push(new wa(et.keyField(),r))}return e.Ie}function An(t){const e=Z(t);return e.Ee||(e.Ee=uP(e,Wo(t))),e.Ee}function uP(t,e){if(t.limitType==="F")return s_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wa(s.field,i)});const n=t.endAt?new bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bu(t.startAt.position,t.startAt.inclusive):null;return s_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qd(t,e){const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cP(t,e){const n=t.explicitOrderBy.concat([e]);return new Ui(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Yd(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return xp(An(t),An(e))&&t.limitType===e.limitType}function BE(t){return`${Sp(An(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>FE(s)).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pi(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=n_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Wo(r),s)||r.endAt&&!function(o,l,u){const c=n_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Wo(r),s))}(t,e)}function hP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $E(t){return(e,n)=>{let r=!1;for(const s of Wo(t)){const i=dP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Ri(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
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
 */const fP=new ke(K.comparator);function Qn(){return fP}const qE=new ke(K.comparator);function Po(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return Ho()}function HE(){return Ho()}function Ho(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const pP=new ke(K.comparator),mP=new qe(K.comparator);function oe(...t){let e=mP;for(const n of t)e=e.add(n);return e}const gP=new qe(ie);function yP(){return gP}/**
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
 */function Ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function _P(t,e){return BR(e)?GE(e):Ap(t,e)}/**
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
 */class _c{constructor(){this._=void 0}}function vP(t,e,n){return t instanceof Ea?function(s,i){const o={fields:{[RE]:{stringValue:kE},[bE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tp(i)&&(i=pc(i)),i&&(o.fields[PE]=i),{mapValue:o}}(n,e):t instanceof Ta?QE(t,e):t instanceof Ia?YE(t,e):function(s,i){const o=KE(s,i),l=o_(o)+o_(s.Ae);return Hd(o)&&Hd(s.Ae)?GE(l):Ap(s.serializer,l)}(t,e)}function wP(t,e,n){return t instanceof Ta?QE(t,e):t instanceof Ia?YE(t,e):n}function KE(t,e){return t instanceof Nu?function(r){return Hd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ea extends _c{}class Ta extends _c{constructor(e){super(),this.elements=e}}function QE(t,e){const n=JE(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends _c{constructor(e){super(),this.elements=e}}function YE(t,e){let n=JE(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class Nu extends _c{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function o_(t){return Ve(t.integerValue||t.doubleValue)}function JE(t){return Ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class EP{constructor(e,n){this.field=e,this.transform=n}}function TP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ta&&s instanceof Ta||r instanceof Ia&&s instanceof Ia?ki(r.elements,s.elements,Rn):r instanceof Nu&&s instanceof Nu?Rn(r.Ae,s.Ae):r instanceof Ea&&s instanceof Ea}(t.transform,e.transform)}class IP{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vc{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cp(t.key,Gt.none()):new Oa(t.key,t.data,Gt.none());{const n=t.data,r=Tt.empty();let s=new qe(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new Vt(s.toArray()),Gt.none())}}function SP(t,e,n){t instanceof Oa?function(s,i,o){const l=s.value.clone(),u=l_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Gl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=l_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ZE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Go(t,e,n,r){return t instanceof Oa?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const c=i.value.clone(),f=u_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const c=u_(i.fieldTransforms,u,o),f=o.data;return f.setAll(ZE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Gl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=KE(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function a_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ki(r,s,(i,o)=>TP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends vc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends vc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function l_(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,wP(o,l,n[s]))}return r}function u_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vP(i,o,e))}return r}class Cp extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AP extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&SP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=XE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,r)=>a_(n,r))&&ki(this.baseMutations,e.baseMutations,(n,r)=>a_(n,r))}}class kp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return pP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kp(e,n,r,s)}}/**
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
 */class kP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,ae;function PP(t){switch(t){case M.OK:return J(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function eT(t){if(t===void 0)return Kn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return J(39323,{code:t})}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bP(){return new TextEncoder}/**
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
 */const NP=new Dr([4294967295,4294967295],0);function c_(t){const e=bP().encode(t),n=new mE;return n.update(e),new Uint8Array(n.digest())}function h_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bo(`Invalid padding: ${n}`);if(r<0)throw new bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(NP)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=c_(e),[r,s]=h_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=c_(e),[r,s]=h_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(X.min(),s,new ke(ie),Qn(),oe())}}class La{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new La(r,n,oe(),oe(),oe())}}/**
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
 */class Kl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class tT{constructor(e,n){this.targetId=e,this.Ce=n}}class nT{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class d_{constructor(){this.ve=0,this.Fe=f_(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}}),new La(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=f_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qn(),this.He=Sl(),this.Je=Sl(),this.Ze=new ke(ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Kd(i))if(r===0){const o=new K(i.path);this.et(n,o,ct.newNoDocument(o,X.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(u){if(u instanceof CE)return Is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Rp(o,s,i)}catch(u){return Is(u instanceof bo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Kd(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ct.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=oe();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new wc(e,n,this.Ze,this.je,r);return this.je=Qn(),this.He=Sl(),this.Je=Sl(),this.Ze=new ke(ie),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new d_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new qe(ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new qe(ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new d_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new ke(K.comparator)}function f_(){return new ke(K.comparator)}const VP={asc:"ASCENDING",desc:"DESCENDING"},OP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LP={and:"AND",or:"OR"};class MP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jd(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jP(t,e){return Du(t,e.toTimestamp())}function Cn(t){return ce(!!t,49232),X.fromTimestamp(function(n){const r=Fr(n);return new we(r.seconds,r.nanos)}(t))}function Pp(t,e){return Xd(t,e).canonicalString()}function Xd(t,e){const n=function(s){return new me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sT(t){const e=me.fromString(t);return ce(uT(e),10190,{key:e.toString()}),e}function Zd(t,e){return Pp(t.databaseId,e.path)}function bh(t,e){const n=sT(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(oT(n))}function iT(t,e){return Pp(t.databaseId,e)}function FP(t){const e=sT(t);return e.length===4?me.emptyPath():oT(e)}function ef(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oT(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function p_(t,e,n){return{name:Zd(t,e),fields:n.value.mapValue.fields}}function UP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:eT(c.code);return new $(f,c.message||"")}(o);n=new nT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bh(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):X.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Kl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bh(t,r.document),i=r.readTime?Cn(r.readTime):X.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bh(t,r.document),i=r.removedTargetIds||[];n=new Kl([],i,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RP(s,i),l=r.targetId;n=new tT(l,o)}}return n}function zP(t,e){let n;if(e instanceof Oa)n={update:p_(t,e.key,e.value)};else if(e instanceof Cp)n={delete:Zd(t,e.key)};else if(e instanceof Qr)n={update:p_(t,e.key,e.data),updateMask:YP(e.fieldMask)};else{if(!(e instanceof AP))return J(16599,{dt:e.type});n={verify:Zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)}(t,e.precondition)),n}function BP(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(X.min())&&(o=Cn(i)),new IP(o,s.transformResults||[])}(n,e))):[]}function $P(t,e){return{documents:[iT(t,e.path)]}}function qP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iT(t,s);const i=function(c){if(c.length!==0)return lT(dn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(p){return{field:Gs(p.field),direction:GP(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function WP(t){let e=FP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const p=aT(m);return p instanceof dn&&ME(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(k){return new wa(Ks(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,fc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,I=m.values||[];return new bu(I,p)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const p=!m.before,I=m.values||[];return new bu(I,p)}(n.endAt)),aP(e,s,o,i,l,"F",u,c)}function HP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>aT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function GP(t){return VP[t]}function KP(t){return OP[t]}function QP(t){return LP[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return et.fromServerFormat(t.fieldPath)}function lT(t){return t instanceof Fe?function(n){if(n.op==="=="){if(t_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(e_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(t_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(e_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:KP(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>lT(s));return r.length===1?r[0]:{compositeFilter:{op:QP(n.op),filters:r}}}(t):J(54877,{filter:t})}function YP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function cT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Tr{constructor(e,n,r,s,i=X.min(),o=X.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JP{constructor(e){this.yt=e}}function XP(t){const e=WP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yd(e,e.limit,"L"):e}/**
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
 */class ZP{constructor(){this.Sn=new eb}addToCollectionParentIndex(e,n){return this.Sn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(jr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class eb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(me.comparator)).toArray()}}/**
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
 */const m_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hT=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(hT,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */class bi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new bi(0)}static ar(){return new bi(-1)}}/**
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
 */const g_="LruGarbageCollector",tb=1048576;function y_([t,e],[n,r]){const s=ie(t,n);return s===0?ie(e,r):s}class nb{constructor(e){this.Pr=e,this.buffer=new qe(y_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();y_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class rb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(g_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?W(g_,"Ignoring IndexedDB error during garbage collection: ",n):await ji(n)}await this.Ar(3e5)})}}class sb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(dc.ce);const r=new nb(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(m_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),m_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Ws()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function ib(t,e){return new sb(t,e)}/**
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
 */class ob{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ab{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Go(r.mutation,s,Vt.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Po();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=Ho(),l=function(){return Ho()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Qr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Go(f.mutation,c,f.mutation.getFieldMask(),we.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new ab(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ho();let s=new ke((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||oe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=HE();f.forEach(p=>{if(!i.has(p)){const I=XE(n.get(p),r.get(p));I!==null&&m.set(p,I),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return lP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(us());let l=ga,u=i;return o.next(c=>j.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,oe())).next(f=>({batchId:l,changes:WE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Po();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const c=function(m,p){return new Ui(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=Po();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Go(f.mutation,c,Vt.empty(),we.now()),yc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class ub{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return j.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:XP(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class cb{constructor(){this.overlays=new ke(K.comparator),this.Lr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=us(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=us(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=us(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return j.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kP(n,r));let i=this.Lr.get(n);i===void 0&&(i=oe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class hb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class bp{constructor(){this.kr=new qe(Ke.Kr),this.qr=new qe(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new me([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new me([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=oe();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
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
 */class db{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new qe(Ke.Kr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Ep:this.Yn-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ie);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),j.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new K(i),0);let l=new qe(ie);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),j.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return j.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Jr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fb{constructor(e){this.ti=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jR(MR(f),r)<=0||(s.has(f.key)||yc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J(9500)}ni(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pb(this)}getSize(e){return j.resolve(this.size)}}class pb extends ob{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class mb{constructor(e){this.persistence=e,this.ri=new Vs(n=>Sp(n),xp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new bp,this.targetCount=0,this.oi=bi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),j.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.lr(n),j.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.si.containsKey(n))}}/**
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
 */class dT{constructor(e,n){this._i={},this.overlays={},this.ai=new dc(0),this.ui=!1,this.ui=!0,this.ci=new hb,this.referenceDelegate=e(this),this.li=new mb(this),this.indexManager=new ZP,this.remoteDocumentCache=function(s){return new fb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new JP(n),this.Pi=new ub(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new db(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new gb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return j.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class gb extends UR{constructor(e){super(),this.currentSequenceNumber=e}}class Np{constructor(e){this.persistence=e,this.Ri=new bp,this.Ai=null}static Vi(e){return new Np(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Vu{constructor(e,n){this.persistence=e,this.fi=new Vs(r=>$R(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ib(this,n)}static Vi(e,n){return new Vu(e,n)}Ti(){}Ii(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return j.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,X.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),j.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wl(e.data.value)),n}wr(e,n,r){return j.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dp(e,n.fromCache,r,s)}}/**
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
 */class yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _b{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Ux()?8:zR(dt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yb;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ws()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),j.resolve()):(Ws()<=se.DEBUG&&W("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ws()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):j.resolve())}gs(e,n){if(i_(n))return j.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yd(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Yd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return i_(n)||s.isEqual(X.min())?j.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?j.resolve(null):(Ws()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hs(n)),this.Ds(e,o,n,LR(s,ga)).next(l=>l))})}bs(e,n){let r=new qe($E(e));return n.forEach((s,i)=>{yc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ws()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.fs.getDocumentsMatchingQuery(e,n,jr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Vp="LocalStore",vb=3e8;class wb{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ie),this.Fs=new Vs(i=>Sp(i),xp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function Eb(t,e,n,r){return new wb(t,e,n,r)}async function fT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=oe();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function Tb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,p=m.keys();let I=j.resolve();return p.forEach(k=>{I=I.next(()=>f.getEntry(u,k)).next(P=>{const D=c.docVersions.get(k);ce(D!==null,48541),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function Ib(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const p=s.get(m);if(!p)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let I=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(rt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(P,D,S){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=vb?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,I,f)&&l.push(n.li.updateTargetData(i,I))});let u=Qn(),c=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Sb(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(X.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function Sb(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(Vp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function xb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ep),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ab(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function tf(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;W(Vp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function __(t,e,n){const r=Z(t);let s=X.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=Z(u),p=m.Fs.get(f);return p!==void 0?j.resolve(m.vs.get(p)):m.li.getTargetData(c,f)}(r,o,An(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:oe())).next(l=>(Cb(r,hP(e),l),{documents:l,ks:i})))}function Cb(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class v_{constructor(){this.activeTargetIds=yP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kb{constructor(){this.vo=new v_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new v_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rb{Mo(e){}shutdown(){}}/**
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
 */const w_="ConnectivityMonitor";class E_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(w_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(w_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xl=null;function nf(){return xl===null?xl=function(){return 268435456+Math.round(2147483648*Math.random())}():xl++,"0x"+xl.toString(16)}/**
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
 */const Nh="RestConnection",Pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ru?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=nf(),l=this.Qo(e,n.toUriEncodedString());W(Nh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Ps(c);return this.zo(e,l,u,r,f).then(m=>(W(Nh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Is(Nh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=Pb[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Nb{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const at="WebChannelConnection",_o=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class yi extends bb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!yi.c_){const e=vE();_o(e,_E.STAT_EVENT,n=>{n.stat===$d.PROXY?W(at,"STAT_EVENT: detected buffering proxy"):n.stat===$d.NOPROXY&&W(at,"STAT_EVENT: detected no buffering proxy")}),yi.c_=!0}}zo(e,n,r,s,i){const o=nf();return new Promise((l,u)=>{const c=new gE;c.setWithCredentials(!0),c.listenOnce(yE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ql.NO_ERROR:const m=c.getResponseJson();W(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ql.TIMEOUT:W(at,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case ql.HTTP_ERROR:const p=c.getStatus();if(W(at,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const k=I==null?void 0:I.error;if(k&&k.status&&k.message){const P=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(k.status);u(new $(P,k.message))}else u(new $(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(at,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W(at,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=nf(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");W(at,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,p=!1;const I=new Nb({Ho:k=>{p?W(at,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(W(at,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),W(at,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return _o(f,Ro.EventType.OPEN,()=>{p||(W(at,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),_o(f,Ro.EventType.CLOSE,()=>{p||(p=!0,W(at,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(f))}),_o(f,Ro.EventType.ERROR,k=>{p||(p=!0,Is(at,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),I.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),_o(f,Ro.EventType.MESSAGE,k=>{var P;if(!p){const D=k.data[0];ce(!!D,16349);const S=D,w=(S==null?void 0:S.error)||((P=S[0])==null?void 0:P.error);if(w){W(at,`RPC '${e}' stream ${s} received error:`,w);const C=w.status;let b=function(v){const y=Le[v];if(y!==void 0)return eT(y)}(C),V=w.message;C==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Is(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=M.INTERNAL,V="Unknown error status: "+C+" with message "+w.message),p=!0,I.o_(new $(b,V)),f.close()}else W(at,`RPC '${e}' stream ${s} received:`,D),I.__(D)}}),yi.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wE()}}/**
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
 */function Db(t){return new yi(t)}function Dh(){return typeof document<"u"?document:null}/**
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
 */function Ec(t){return new MP(t,!0)}/**
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
 */yi.c_=!1;class mT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const T_="PersistentStream";class gT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(T_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(T_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vb extends gT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=UP(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Cn(o.readTime):X.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Kd(u)?{documents:$P(i,u)}:{query:qP(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rT(i,o.resumeToken);const c=Jd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Du(i,o.snapshotVersion.toTimestamp());const c=Jd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=HP(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.K_(n)}}class Ob extends gT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BP(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ef(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zP(this.serializer,r))};this.K_(n)}}/**
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
 */class Lb{}class Mb extends Lb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Xd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Xd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function jb(t,e,n,r){return new Mb(t,e,n,r)}class Fb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ss="RemoteStore";class Ub{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Os(this)&&(W(Ss,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ea.add(4),await Ma(c),c.Va.set("Unknown"),c.Ea.delete(4),await Tc(c)}(this))})}),this.Va=new Fb(r,s)}}async function Tc(t){if(Os(t))for(const e of t.Ra)await e(!0)}async function Ma(t){for(const e of t.Ra)await e(!1)}function yT(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),jp(n)?Mp(n):zi(n).O_()&&Lp(n,e))}function Op(t,e){const n=Z(t),r=zi(n);n.Ia.delete(e),r.O_()&&_T(n,e),n.Ia.size===0&&(r.O_()?r.L_():Os(n)&&n.Va.set("Unknown"))}function Lp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zi(t).Z_(e)}function _T(t,e){t.da.$e(e),zi(t).X_(e)}function Mp(t){t.da=new DP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zi(t).start(),t.Va.ua()}function jp(t){return Os(t)&&!zi(t).x_()&&t.Ia.size>0}function Os(t){return Z(t).Ea.size===0}function vT(t){t.da=void 0}async function zb(t){t.Va.set("Online")}async function Bb(t){t.Ia.forEach((e,n)=>{Lp(t,e)})}async function $b(t,e){vT(t),jp(t)?(t.Va.ha(e),Mp(t)):t.Va.set("Unknown")}async function qb(t,e,n){if(t.Va.set("Online"),e instanceof nT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){W(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Kl?t.da.Xe(e):e instanceof tT?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await pT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),_T(i,u);const m=new Tr(f.target,u,c,f.sequenceNumber);Lp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Ss,"Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!Fi(e))throw e;t.Ea.add(1),await Ma(t),t.Va.set("Offline"),n||(n=()=>pT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Ss,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Tc(t)})}function wT(t,e){return e().catch(n=>Ou(t,n,e))}async function Ic(t){const e=Z(t),n=Br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ep;for(;Wb(e);)try{const s=await xb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Hb(e,s)}catch(s){await Ou(e,s)}ET(e)&&TT(e)}function Wb(t){return Os(t)&&t.Ta.length<10}function Hb(t,e){t.Ta.push(e);const n=Br(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function ET(t){return Os(t)&&!Br(t).x_()&&t.Ta.length>0}function TT(t){Br(t).start()}async function Gb(t){Br(t).ra()}async function Kb(t){const e=Br(t);for(const n of t.Ta)e.ea(n.mutations)}async function Qb(t,e,n){const r=t.Ta.shift(),s=kp.from(r,e,n);await wT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ic(t)}async function Yb(t,e){e&&Br(t).Y_&&await async function(r,s){if(function(o){return PP(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Br(r).B_(),await wT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ic(r)}}(t,e),ET(t)&&TT(t)}async function I_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W(Ss,"RemoteStore received new credentials");const r=Os(n);n.Ea.add(3),await Ma(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Tc(n)}async function Jb(t,e){const n=Z(t);e?(n.Ea.delete(2),await Tc(n)):e||(n.Ea.add(2),await Ma(n),n.Va.set("Unknown"))}function zi(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new Vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:zb.bind(null,t),Yo:Bb.bind(null,t),t_:$b.bind(null,t),J_:qb.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),jp(t)?Mp(t):t.Va.set("Unknown")):(await t.ma.stop(),vT(t))})),t.ma}function Br(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new Ob(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Gb.bind(null,t),t_:Yb.bind(null,t),ta:Kb.bind(null,t),na:Qb.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ic(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Ss,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Fp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Fp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Fi(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _i{static emptySet(e){return new _i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Po(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class S_{constructor(){this.ga=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ni{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ni(e,n,_i.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Xb{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Zb{constructor(){this.queries=x_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=x_(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function x_(){return new Vs(t=>BE(t),gc)}async function zp(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Xb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Up(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&$p(n)}async function Bp(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function e2(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&$p(n)}function t2(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function $p(t){t.Ca.forEach(e=>{e.next()})}var rf,A_;(A_=rf||(rf={})).Ma="default",A_.Cache="cache";class qp{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==rf.Cache}}/**
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
 */class IT{constructor(e){this.key=e}}class ST{constructor(e){this.key=e}}class n2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=oe(),this.mutatedKeys=oe(),this.eu=$E(e),this.tu=new _i(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new S_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const p=s.get(f),I=yc(this.query,m)?m:null,k=!!p&&this.mutatedKeys.has(p.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;p&&I?p.data.isEqual(I.data)?k!==P&&(r.track({type:3,doc:I}),D=!0):this.su(p,I)||(r.track({type:2,doc:I}),D=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!p&&I?(r.track({type:0,doc:I}),D=!0):p&&!I&&(r.track({type:1,doc:p}),D=!0,(u||c)&&(l=!0)),D&&(I?(o=o.add(I),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(I,k){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:D})}};return P(I)-P(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Ni(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new S_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new ST(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new IT(r))}),n}cu(e){this.Za=e.ks,this.Ya=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ni.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Wp="SyncEngine";class r2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class s2{constructor(e){this.key=e,this.hu=!1}}class i2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Vs(l=>BE(l),gc),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(K.comparator),this.Au=new Map,this.Vu=new bp,this.du={},this.mu=new Map,this.fu=bi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function o2(t,e,n=!0){const r=PT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await xT(r,e,n,!0),s}async function a2(t,e){const n=PT(t);await xT(n,e,!0,!1)}async function xT(t,e,n,r){const s=await Ab(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await l2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yT(t.remoteStore,s),l}async function l2(t,e,n,r,s){t.pu=(m,p,I)=>async function(P,D,S,w){let C=D.view.ru(S);C.Ss&&(C=await __(P.localStore,D.query,!1).then(({documents:v})=>D.view.ru(v,C)));const b=w&&w.targetChanges.get(D.targetId),V=w&&w.targetMismatches.get(D.targetId)!=null,L=D.view.applyChanges(C,P.isPrimaryClient,b,V);return k_(P,D.targetId,L.au),L.snapshot}(t,m,p,I);const i=await __(t.localStore,e,!0),o=new n2(e,i.ks),l=o.ru(i.documents),u=La.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);k_(t,n,c.au);const f=new r2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function u2(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!gc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Op(r.remoteStore,s.targetId),sf(r,s.targetId)}).catch(ji)):(sf(r,s.targetId),await tf(r.localStore,s.targetId,!0))}async function c2(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Op(n.remoteStore,r.targetId))}async function h2(t,e,n){const r=_2(t);try{const s=await function(o,l){const u=Z(o),c=we.now(),f=l.reduce((I,k)=>I.add(k.key),oe());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=Qn(),P=oe();return u.xs.getEntries(I,f).next(D=>{k=D,k.forEach((S,w)=>{w.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,k)).next(D=>{m=D;const S=[];for(const w of l){const C=xP(w,m.get(w.key).overlayedDocument);C!=null&&S.push(new Qr(w.key,C,VE(C.value.mapValue),Gt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,S,l)}).next(D=>{p=D;const S=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,D.batchId,S)})}).then(()=>({batchId:p.batchId,changes:WE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new ke(ie)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await ja(r,s.changes),await Ic(r.remoteStore)}catch(s){const i=Up(s,"Failed to persist write");n.reject(i)}}async function AT(t,e){const n=Z(t);try{const r=await Ib(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ce(o.hu,14607):s.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await ja(n,r,e)}catch(r){await ji(r)}}function C_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const p of m.ba)p.va(l)&&(c=!0)}),c&&$p(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function d2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ke(K.comparator);o=o.insert(i,ct.newNoDocument(i,X.min()));const l=oe().add(i),u=new wc(X.min(),new Map,new ke(ie),o,l);await AT(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Hp(r)}else await tf(r.localStore,e,!1).then(()=>sf(r,e,n)).catch(ji)}async function f2(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await Tb(n.localStore,e);kT(n,r,null),CT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,s)}catch(s){await ji(s)}}async function p2(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ce(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);kT(r,e,n),CT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,s)}catch(s){await ji(s)}}function CT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function kT(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||RT(t,r)})}function RT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Op(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Hp(t))}function k_(t,e,n){for(const r of n)r instanceof IT?(t.Vu.addReference(r.key,e),m2(t,r)):r instanceof ST?(W(Wp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||RT(t,r.key)):J(19791,{wu:r})}function m2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(W(Wp,"New document in limbo: "+n),t.Eu.add(r),Hp(t))}function Hp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(me.fromString(e)),r=t.fu.next();t.Au.set(r,new s2(n)),t.Ru=t.Ru.insert(n,r),yT(t.remoteStore,new Tr(An(mc(n.path)),r,"TargetPurposeLimboResolution",dc.ce))}}async function ja(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Dp.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(c,p=>j.forEach(p.Ts,I=>f.persistence.referenceDelegate.addReference(m,p.targetId,I)).next(()=>j.forEach(p.Is,I=>f.persistence.referenceDelegate.removeReference(m,p.targetId,I)))))}catch(m){if(!Fi(m))throw m;W(Vp,"Failed to update sequence numbers: "+m)}for(const m of c){const p=m.targetId;if(!m.fromCache){const I=f.vs.get(p),k=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(p,P)}}}(r.localStore,i))}async function g2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W(Wp,"User change. New user:",e.toKey());const r=await fT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.Ns)}}function y2(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let s=oe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function PT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=y2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d2.bind(null,e),e.Pu.J_=e2.bind(null,e.eventManager),e.Pu.yu=t2.bind(null,e.eventManager),e}function _2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=p2.bind(null,e),e}class Lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Eb(this.persistence,new _b,e.initialUser,this.serializer)}Cu(e){return new dT(Np.Vi,this.serializer)}Du(e){return new kb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lu.provider={build:()=>new Lu};class v2 extends Lu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof Vu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new rb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new dT(r=>Vu.Vi(r,n),this.serializer)}}class of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=g2.bind(null,this.syncEngine),await Jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zb}()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=Db(e.databaseInfo);return jb(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ub(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>C_(this.syncEngine,n,0),function(){return E_.v()?new E_:new Rb}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new i2(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);W(Ss,"RemoteStore shutting down."),i.Ea.add(5),await Ma(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}of.provider={build:()=>new of};/**
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
 */class Gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const $r="FirestoreClient";class w2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),W($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E2(t);W($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>I_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>I_(e.remoteStore,s)),t._onlineComponents=e}async function E2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W($r,"Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new Lu)}}else W($r,"Using default OfflineComponentProvider"),await Vh(t,new v2(void 0));return t._offlineComponents}async function bT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W($r,"Using user provided OnlineComponentProvider"),await R_(t,t._uninitializedComponentsProvider._online)):(W($r,"Using default OnlineComponentProvider"),await R_(t,new of))),t._onlineComponents}function T2(t){return bT(t).then(e=>e.syncEngine)}async function Mu(t){const e=await bT(t),n=e.eventManager;return n.onListen=o2.bind(null,e.syncEngine),n.onUnlisten=u2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=a2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=c2.bind(null,e.syncEngine),n}function I2(t,e,n,r){const s=new Gp(r),i=new qp(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>zp(await Mu(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Bp(await Mu(t),i))}}function S2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Gp({next:p=>{f.Nu(),o.enqueueAndForget(()=>Bp(i,m));const I=p.docs.has(l);!I&&p.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&p.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new qp(mc(l.path),f,{includeMetadataChanges:!0,Ka:!0});return zp(i,m)}(await Mu(t),t.asyncQueue,e,n,r)),r.promise}function x2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Gp({next:p=>{f.Nu(),o.enqueueAndForget(()=>Bp(i,m)),p.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new qp(l,f,{includeMetadataChanges:!0,Ka:!0});return zp(i,m)}(await Mu(t),t.asyncQueue,e,n,r)),r.promise}function A2(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>h2(await T2(t),e,n)),n.promise}/**
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
 */function NT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const C2="ComponentProvider",P_=new Map;function k2(t,e,n,r,s){return new HR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,NT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const DT="firestore.googleapis.com",b_=!0;class N_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=DT,this.ssl=b_}else this.host=e.host,this.ssl=e.ssl??b_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tb)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xR;switch(r.type){case"firstParty":return new RR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=P_.get(n);r&&(W(C2,"Removing Datastore"),P_.delete(n),r.terminate())}(this),Promise.resolve()}}function R2(t,e,n,r={}){var c;t=kt(t,Sc);const s=Ps(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(lp(`https://${l}`),up("Firestore",!0)),i.host!==DT&&i.host!==l&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Mr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=lt.MOCK_USER;else{f=xw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new lt(p)}t._authCredentials=new AR(new TE(f,m))}}/**
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
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Va(n,Ne._jsonSchema))return new Ne(e,r||null,new K(me.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Ue("string",Ne._jsonSchemaVersion),referencePath:Ue("string")};class Vr extends Yr{constructor(e,n,r){super(e,n,mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new Vr(this.firestore,e,this._path)}}function wn(t,e,...n){if(t=Se(t),IE("collection","path",e),t instanceof Sc){const r=me.fromString(e,...n);return Wy(r),new Vr(t,null,r)}{if(!(t instanceof Ne||t instanceof Vr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Wy(r),new Vr(t.firestore,null,r)}}function tn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=wp.newId()),IE("doc","path",e),t instanceof Sc){const r=me.fromString(e,...n);return qy(r),new Ne(t,null,new K(r))}{if(!(t instanceof Ne||t instanceof Vr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return qy(r),new Ne(t.firestore,t instanceof Vr?t.converter:null,new K(r))}}/**
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
 */const D_="AsyncQueue";class V_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mT(this,"async_queue_retry"),this._c=()=>{const r=Dh();r&&W(D_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Fi(e))throw e;W(D_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Kn("INTERNAL UNHANDLED ERROR: ",O_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:O_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function O_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Yn extends Sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new V_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function P2(t,e){const n=typeof t=="object"?t:ac(),r=typeof t=="string"?t:Ru,s=Gr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tw("firestore");i&&R2(s,...i)}return s}function xc(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||b2(t),t._firestoreClient}function b2(t){var r,s,i,o;const e=t._freezeSettings(),n=k2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new w2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(rt.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Va(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Ue("string",qt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Kp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ac{constructor(e){this._methodName=e}}/**
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
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(Va(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:Ue("string",kn._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Va(e,ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ln(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Ue("string",ln._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const N2=/^__.*__$/;class D2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}class VT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class Qp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Qp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(OT(this.dataSource)&&N2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class V2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}createContext(e,n,r,s=!1){return new Qp({dataSource:e,methodName:n,targetDoc:r,path:et.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cc(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new V2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LT(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Jp("Data must be an object, but it was:",o,r);const l=MT(r,o);let u,c;if(i.merge)u=new Vt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=xs(e,m,n);if(!o.contains(p))throw new $(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);UT(f,p)||f.push(p)}u=new Vt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new D2(new Tt(l),u,c)}class kc extends Ac{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class Yp extends Ac{_toFieldTransform(e){return new EP(e.path,new Ea)}isEqual(e){return e instanceof Yp}}function O2(t,e,n,r){const s=t.createContext(1,e,n);Jp("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();Kr(r,(u,c)=>{const f=FT(e,u,n);c=Se(c);const m=s.childContextForFieldPath(f);if(c instanceof kc)i.push(f);else{const p=Fa(c,m);p!=null&&(i.push(f),o.set(f,p))}});const l=new Vt(i);return new VT(o,l,s.fieldTransforms)}function L2(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[xs(e,r,n)],u=[s];if(i.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(xs(e,i[p])),u.push(i[p+1]);const c=[],f=Tt.empty();for(let p=l.length-1;p>=0;--p)if(!UT(c,l[p])){const I=l[p];let k=u[p];k=Se(k);const P=o.childContextForFieldPath(I);if(k instanceof kc)c.push(I);else{const D=Fa(k,P);D!=null&&(c.push(I),f.set(I,D))}}const m=new Vt(c);return new VT(f,m,o.fieldTransforms)}function M2(t,e,n,r=!1){return Fa(n,t.createContext(r?4:3,e))}function Fa(t,e){if(jT(t=Se(t)))return Jp("Unsupported field value:",e,t),MT(t,e);if(t instanceof Ac)return function(r,s){if(!OT(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Fa(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _P(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:Du(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(s.serializer,i)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:rT(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ln)return function(o,l){const u=o instanceof ln?o.toArray():o;return{mapValue:{fields:{[NE]:{stringValue:DE},[Pu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Ap(l.serializer,f)})}}}}}}(r,s);if(cT(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${hc(r)}`)}(t,e)}function MT(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,s)=>{const i=Fa(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof kn||t instanceof qt||t instanceof Ne||t instanceof Ac||t instanceof ln||cT(t))}function Jp(t,e,n){if(!jT(n)||!SE(n)){const r=hc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function xs(t,e,n){if((e=Se(e))instanceof Kp)return e._internalPath;if(typeof e=="string")return FT(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const j2=new RegExp("[~\\*/\\[\\]]");function FT(t,e,n){if(e.search(j2)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kp(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(M.INVALID_ARGUMENT,l+t+u)}function UT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class F2{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Pu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new ln(n)}convertGeoPoint(e){return new kn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ce(uT(r),9688,{name:e});const s=new _a(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Xp extends F2{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function vo(){return new Yp("serverTimestamp")}const L_="@firebase/firestore",M_="4.12.0";/**
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
 */function j_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class zT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U2 extends zT{data(){return super.data()}}/**
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
 */function BT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zp{}class $T extends Zp{}function Ko(t,e,...n){let r=[];e instanceof Zp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof em).length,l=i.filter(u=>u instanceof Rc).length;if(o>1||o>0&&l>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rc extends $T{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rc(e,n,r)}_apply(e){const n=this._parse(e);return qT(e._query,n),new Yr(e.firestore,e.converter,Qd(e._query,n))}_parse(e){const n=Cc(e.firestore);return function(i,o,l,u,c,f,m){let p;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){U_(m,f);const k=[];for(const P of m)k.push(F_(u,i,P));p={arrayValue:{values:k}}}else p=F_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||U_(m,f),p=M2(l,o,m,f==="in"||f==="not-in");return Fe.create(c,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function af(t,e,n){const r=e,s=xs("where",t);return Rc._create(s,r,n)}class em extends Zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new em(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)qT(o,u),o=Qd(o,u)}(e._query,n),new Yr(e.firestore,e.converter,Qd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tm extends $T{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tm(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wa(i,o)}(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,cP(e._query,n))}}function z2(t,e="asc"){const n=e,r=xs("orderBy",t);return tm._create(r,n)}function F_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zE(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zy(t,new K(r))}if(n instanceof Ne)return Zy(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function U_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function WT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class No{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fs extends zT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=fs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}fs._jsonSchemaVersion="firestore/documentSnapshot/1.0",fs._jsonSchema={type:Ue("string",fs._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Ql extends fs{data(e={}){return super.data(e)}}class ps{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new No(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ql(this._firestore,this._userDataWriter,r.key,r,new No(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new No(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new No(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:B2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function B2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */ps._jsonSchemaVersion="firestore/querySnapshot/1.0",ps._jsonSchema={type:Ue("string",ps._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};/**
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
 */function $2(t){t=kt(t,Ne);const e=kt(t.firestore,Yn),n=xc(e);return S2(n,t._key).then(r=>HT(e,t,r))}function lf(t){t=kt(t,Yr);const e=kt(t.firestore,Yn),n=xc(e),r=new Xp(e);return BT(t._query),x2(n,t._query).then(s=>new ps(e,r,t,s))}function q2(t,e,n){t=kt(t,Ne);const r=kt(t.firestore,Yn),s=WT(t.converter,e),i=Cc(r);return Pc(r,[LT(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gt.none())])}function fr(t,e,n,...r){t=kt(t,Ne);const s=kt(t.firestore,Yn),i=Cc(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Kp?L2(i,"updateDoc",t._key,e,n,r):O2(i,"updateDoc",t._key,e),Pc(s,[o.toMutation(t._key,Gt.exists(!0))])}function z_(t){return Pc(kt(t.firestore,Yn),[new Cp(t._key,Gt.none())])}function Al(t,e){const n=kt(t.firestore,Yn),r=tn(t),s=WT(t.converter,e),i=Cc(t.firestore);return Pc(n,[LT(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function uf(t,...e){var c,f,m;t=Se(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||j_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(j_(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(f=p.error)==null?void 0:f.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,l;if(t instanceof Ne)o=kt(t.firestore,Yn),l=mc(t._key.path),i={next:p=>{e[r]&&e[r](HT(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=kt(t,Yr);o=kt(p.firestore,Yn),l=p._query;const I=new Xp(o);i={next:k=>{e[r]&&e[r](new ps(o,I,p,k))},error:e[r+1],complete:e[r+2]},BT(t._query)}const u=xc(o);return I2(u,l,s,i)}function Pc(t,e){const n=xc(t);return A2(n,e)}function HT(t,e,n){const r=n.docs.get(e._key),s=new Xp(t);return new fs(t,s,e._key,r,new No(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){SR(Ns),cn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Yn(new CR(r.getProvider("auth-internal")),new PR(o,r.getProvider("app-check-internal")),GR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ct(L_,M_,e),Ct(L_,M_,"esm2020")})();var W2="firebase",H2="12.10.0";/**
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
 */Ct(W2,H2,"app");const GT="@firebase/installations",nm="0.6.20";/**
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
 */const KT=1e4,QT=`w:${nm}`,YT="FIS_v2",G2="https://firebaseinstallations.googleapis.com/v1",K2=60*60*1e3,Q2="installations",Y2="Installations";/**
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
 */const J2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new bs(Q2,Y2,J2);function JT(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
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
 */function XT({projectId:t}){return`${G2}/projects/${t}/installations`}function ZT(t){return{token:t.token,requestStatus:2,expiresIn:Z2(t.expiresIn),creationTime:Date.now()}}async function eI(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function X2(t,{refreshToken:e}){const n=tI(t);return n.append("Authorization",eN(e)),n}async function nI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Z2(t){return Number(t.replace("s","000"))}function eN(t){return`${YT} ${t}`}/**
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
 */async function tN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XT(t),s=tI(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:YT,appId:t.appId,sdkVersion:QT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await nI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ZT(c.authToken)}}else throw await eI("Create Installation",u)}/**
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
 */function rI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function nN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rN=/^[cdef][\w-]{21}$/,cf="";function sN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=iN(t);return rN.test(n)?n:cf}catch{return cf}}function iN(t){return nN(t).substr(0,22)}/**
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
 */function bc(t){return`${t.appName}!${t.appId}`}/**
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
 */const sI=new Map;function iI(t,e){const n=bc(t);oI(n,e),oN(n,e)}function oI(t,e){const n=sI.get(t);if(n)for(const r of n)r(e)}function oN(t,e){const n=aN();n&&n.postMessage({key:t,fid:e}),lN()}let cs=null;function aN(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=t=>{oI(t.data.key,t.data.fid)}),cs}function lN(){sI.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const uN="firebase-installations-database",cN=1,Cs="firebase-installations-store";let Oh=null;function rm(){return Oh||(Oh=bw(uN,cN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}})),Oh}async function Fu(t,e){const n=bc(t),s=(await rm()).transaction(Cs,"readwrite"),i=s.objectStore(Cs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&iI(t,e.fid),e}async function aI(t){const e=bc(t),r=(await rm()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(e),await r.done}async function Nc(t,e){const n=bc(t),s=(await rm()).transaction(Cs,"readwrite"),i=s.objectStore(Cs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&iI(t,l.fid),l}/**
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
 */async function sm(t){let e;const n=await Nc(t.appConfig,r=>{const s=hN(r),i=dN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===cf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hN(t){const e=t||{fid:sN(),registrationStatus:0};return lI(e)}function dN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pN(t)}:{installationEntry:e}}async function fN(t,e){try{const n=await tN(t,e);return Fu(t.appConfig,n)}catch(n){throw JT(n)&&n.customData.serverCode===409?await aI(t.appConfig):await Fu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pN(t){let e=await B_(t.appConfig);for(;e.registrationStatus===1;)await rI(100),e=await B_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sm(t);return r||n}return e}function B_(t){return Nc(t,e=>{if(!e)throw As.create("installation-not-found");return lI(e)})}function lI(t){return mN(t)?{fid:t.fid,registrationStatus:0}:t}function mN(t){return t.registrationStatus===1&&t.registrationTime+KT<Date.now()}/**
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
 */async function gN({appConfig:t,heartbeatServiceProvider:e},n){const r=yN(t,n),s=X2(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:QT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await nI(()=>fetch(r,l));if(u.ok){const c=await u.json();return ZT(c)}else throw await eI("Generate Auth Token",u)}function yN(t,{fid:e}){return`${XT(t)}/${e}/authTokens:generate`}/**
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
 */async function im(t,e=!1){let n;const r=await Nc(t.appConfig,i=>{if(!uI(i))throw As.create("not-registered");const o=i.authToken;if(!e&&wN(o))return i;if(o.requestStatus===1)return n=_N(t,e),i;{if(!navigator.onLine)throw As.create("app-offline");const l=TN(i);return n=vN(t,l),l}});return n?await n:r.authToken}async function _N(t,e){let n=await $_(t.appConfig);for(;n.authToken.requestStatus===1;)await rI(100),n=await $_(t.appConfig);const r=n.authToken;return r.requestStatus===0?im(t,e):r}function $_(t){return Nc(t,e=>{if(!uI(e))throw As.create("not-registered");const n=e.authToken;return IN(n)?{...e,authToken:{requestStatus:0}}:e})}async function vN(t,e){try{const n=await gN(t,e),r={...e,authToken:n};return await Fu(t.appConfig,r),n}catch(n){if(JT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Fu(t.appConfig,r)}throw n}}function uI(t){return t!==void 0&&t.registrationStatus===2}function wN(t){return t.requestStatus===2&&!EN(t)}function EN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+K2}function TN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function IN(t){return t.requestStatus===1&&t.requestTime+KT<Date.now()}/**
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
 */async function SN(t){const e=t,{installationEntry:n,registrationPromise:r}=await sm(e);return r?r.catch(console.error):im(e).catch(console.error),n.fid}/**
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
 */async function xN(t,e=!1){const n=t;return await AN(n),(await im(n,e)).token}async function AN(t){const{registrationPromise:e}=await sm(t);e&&await e}/**
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
 */function CN(t){if(!t||!t.options)throw Lh("App Configuration");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lh(t){return As.create("missing-app-config-values",{valueName:t})}/**
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
 */const cI="installations",kN="installations-internal",RN=t=>{const e=t.getProvider("app").getImmediate(),n=CN(e),r=Gr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PN=t=>{const e=t.getProvider("app").getImmediate(),n=Gr(e,cI).getImmediate();return{getId:()=>SN(n),getToken:s=>xN(n,s)}};function bN(){cn(new Yt(cI,RN,"PUBLIC")),cn(new Yt(kN,PN,"PRIVATE"))}bN();Ct(GT,nm);Ct(GT,nm,"esm2020");/**
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
 */const Uu="analytics",NN="firebase_id",DN="origin",VN=60*1e3,ON="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",om="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new oc("@firebase/analytics");/**
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
 */const LN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new bs("analytics","Analytics",LN);/**
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
 */function MN(t){if(!t.startsWith(om)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function hI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FN(t,e){const n=jN("firebase-js-sdk-policy",{createScriptURL:MN}),r=document.createElement("script"),s=`${om}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function UN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function zN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await hI(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){gt.error(l)}t("config",s,i)}async function BN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await hI(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){gt.error(i)}}function $N(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await BN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await zN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){gt.error(l)}}return s}function qN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=$N(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function WN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(om)&&n.src.includes(t))return n;return null}/**
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
 */const HN=30,GN=1e3;class KN{constructor(e={},n=GN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dI=new KN;function QN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YN(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:QN(n)},s=ON.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function JN(t,e=dI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Lt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new eD;return setTimeout(async()=>{l.abort()},VN),fI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function fI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=dI){var l;const{appId:i,measurementId:o}=t;try{await XN(r,e)}catch(u){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await YN(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!ZN(c)){if(s.deleteThrottleMetadata(i),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?fy(n,s.intervalMillis,HN):fy(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),gt.debug(`Calling attemptFetch again in ${f} millis`),fI(t,m,r,s)}}function XN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZN(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function nD(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function rD(){if(Cw())try{await kw()}catch(t){return gt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sD(t,e,n,r,s,i,o){const l=JN(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>gt.error(p)),e.push(l);const u=rD().then(p=>{if(p)return r.getId()}),[c,f]=await Promise.all([l,u]);WN(i)||FN(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[DN]="firebase",m.update=!0,f!=null&&(m[NN]=f),s("config",c.measurementId,m),c.measurementId}/**
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
 */class iD{constructor(e){this.app=e}_delete(){return delete vi[this.app.options.appId],Promise.resolve()}}let vi={},q_=[];const W_={};let Mh="dataLayer",oD="gtag",H_,am,G_=!1;function aD(){const t=[];if(Aw()&&t.push("This is a browser extension environment."),zx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function lD(t,e,n){aD();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(vi[r]!=null)throw Lt.create("already-exists",{id:r});if(!G_){UN(Mh);const{wrappedGtag:i,gtagCore:o}=qN(vi,q_,W_,Mh,oD);am=i,H_=o,G_=!0}return vi[r]=sD(t,q_,W_,e,H_,Mh,n),new iD(t)}function uD(t=ac()){t=Se(t);const e=Gr(t,Uu);return e.isInitialized()?e.getImmediate():cD(t)}function cD(t,e={}){const n=Gr(t,Uu);if(n.isInitialized()){const s=n.getImmediate();if(Mr(e,n.getOptions()))return s;throw Lt.create("already-initialized")}return n.initialize({options:e})}function hD(t,e,n){t=Se(t),nD(am,vi[t.app.options.appId],e,n).catch(r=>gt.error(r))}function dD(t,e,n,r){t=Se(t),tD(am,vi[t.app.options.appId],e,n,r).catch(s=>gt.error(s))}const K_="@firebase/analytics",Q_="0.10.20";function fD(){cn(new Yt(Uu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return lD(r,s,n)},"PUBLIC")),cn(new Yt("analytics-internal",t,"PRIVATE")),Ct(K_,Q_),Ct(K_,Q_,"esm2020");function t(e){try{const n=e.getProvider(Uu).getImmediate();return{logEvent:(r,s,i)=>dD(n,r,s,i),setUserProperties:(r,s)=>hD(n,r,s)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}fD();/**
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
 */const pI="firebasestorage.googleapis.com",pD="storageBucket",mD=2*60*1e3,gD=10*60*1e3;/**
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
 */class bn extends Jt{constructor(e,n,r=0){super(jh(e),`Firebase Storage: ${n} (${jh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function jh(t){return"storage/"+t}function yD(){const t="An unknown error occurred, please check the error payload for server response.";return new bn(Pn.UNKNOWN,t)}function _D(){return new bn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vD(){return new bn(Pn.CANCELED,"User canceled the upload/download.")}function wD(t){return new bn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function ED(t){return new bn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Y_(t){return new bn(Pn.INVALID_ARGUMENT,t)}function mI(){return new bn(Pn.APP_DELETED,"The Firebase app was deleted.")}function TD(t){return new bn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=sn.makeFromUrl(e,n)}catch{return new sn(e,"")}if(r.path==="")return r;throw ED(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${s}/o${p}`,"i"),k={bucket:1,path:3},P=n===pI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",S=new RegExp(`^https?://${P}/${s}/${D}`,"i"),C=[{regex:l,indices:u,postModify:i},{regex:I,indices:k,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<C.length;b++){const V=C[b],L=V.regex.exec(e);if(L){const v=L[V.indices.bucket];let y=L[V.indices.path];y||(y=""),r=new sn(v,y),V.postModify(r);break}}if(r==null)throw wD(e);return r}}class ID{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function SD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...D){c||(c=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(I,u())},D)}function p(){i&&clearTimeout(i)}function I(D,...S){if(c){p();return}if(D){p(),f.call(null,D,...S);return}if(u()||o){p(),f.call(null,D,...S);return}r<64&&(r*=2);let C;l===1?(l=2,C=0):C=(r+Math.random())*1e3,m(C)}let k=!1;function P(D){k||(k=!0,p(),!c&&(s!==null?(D||(l=2),clearTimeout(s),m(0)):D||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function xD(t){t(!1)}/**
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
 */function AD(t){return t!==void 0}function J_(t,e,n,r){if(r<e)throw Y_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Y_(`Invalid value for '${t}'. Expected ${n} or less.`)}function CD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var zu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zu||(zu={}));/**
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
 */function kD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class RD{constructor(e,n,r,s,i,o,l,u,c,f,m,p=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=p,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,P)=>{this.resolve_=k,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Cl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===zu.NO_ERROR,u=i.getStatus();if(!l||kD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===zu.ABORT;r(!1,new Cl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Cl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());AD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=yD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?mI():vD();o(u)}else{const u=_D();o(u)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=SD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ND(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VD(t,e,n,r,s,i,o=!0,l=!1){const u=CD(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return ND(f,e),PD(f,n),bD(f,i),DD(f,r),new RD(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function OD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Bu{constructor(e,n){this._service=e,n instanceof sn?this._location=n:this._location=sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bu(e,n)}get root(){const e=new sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LD(this._location.path)}get storage(){return this._service}get parent(){const e=OD(this._location.path);if(e===null)return null;const n=new sn(this._location.bucket,e);return new Bu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TD(e)}}function X_(t,e){const n=e==null?void 0:e[pD];return n==null?null:sn.makeFromBucketSpec(n,t)}function MD(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ps(e);s&&(lp(`https://${t.host}/b`),up("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:xw(i,t.app.options.projectId))}class jD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=pI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mD,this._maxUploadRetryTime=gD,this._requests=new Set,s!=null?this._bucket=sn.makeFromBucketSpec(s,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ID(mI());{const o=VD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Z_="@firebase/storage",ev="0.14.1";/**
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
 */const gI="storage";function FD(t=ac(),e){t=Se(t);const r=Gr(t,gI).getImmediate({identifier:e}),s=Tw("storage");return s&&UD(r,...s),r}function UD(t,e,n,r={}){MD(t,e,n,r)}function zD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jD(n,r,s,e,Ns)}function BD(){cn(new Yt(gI,zD,"PUBLIC").setMultipleInstances(!0)),Ct(Z_,ev,""),Ct(Z_,ev,"esm2020")}BD();const $D={apiKey:"AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ",authDomain:"giftwave-pro.firebaseapp.com",projectId:"giftwave-pro",storageBucket:"giftwave-pro.firebasestorage.app",messagingSenderId:"964612051931",appId:"1:964612051931:web:c318a4f6ba21c51d3a8dfe",measurementId:"G-Z8YJ83DXW2"},Dc=Nw($D),yn=TR(Dc),Me=P2(Dc);FD(Dc);typeof window<"u"&&uD(Dc);const yI=q.createContext();function qD({children:t}){const[e,n]=q.useState(null),[r,s]=q.useState([]),[i,o]=q.useState(!0);q.useEffect(()=>{const I=setTimeout(()=>{o(!1)},3e3),k=ck(yn,async D=>{try{if(D){const S=tn(Me,"users",D.uid),w=await $2(S);if(w.exists()){const C=D.emailVerified,b={id:D.uid,...w.data(),isVerified:C};n(b),await fr(S,{lastSeen:"online"})}}else e&&await fr(tn(Me,"users",e.id),{lastSeen:new Date().toISOString()}),n(null)}catch(S){console.error("Auth error:",S)}finally{clearTimeout(I),o(!1)}},D=>{console.error("Auth state error:",D),clearTimeout(I),o(!1)}),P=()=>{yn.currentUser&&fr(tn(Me,"users",yn.currentUser.uid),{lastSeen:new Date().toISOString()})};return window.addEventListener("beforeunload",P),()=>{k(),clearTimeout(I),window.removeEventListener("beforeunload",P)}},[]),q.useEffect(()=>{if(e&&e.isVerified){const I=Ko(wn(Me,"users"));return uf(I,P=>{const D=P.docs.map(S=>({id:S.id,...S.data()}));s(D)})}},[e]);const l=async(I,k,P,D,S)=>{try{const w=wn(Me,"users"),C=Ko(w,af("username","==",I));if(!(await lf(C)).empty)return{error:"Этот юзернейм уже занят. Выберите другой."};const L=(await ik(yn,D,k)).user;await ak(L);const v={username:I.toLowerCase(),displayName:S||I,bio:P,email:D,phone:"",birthday:"",nameColor:"#ffffff",isVerified:!1,role:I.toLowerCase()==="admin"?"admin":"user",avatar:`https://api.dicebear.com/7.x/shapes/svg?seed=${I}`,coins:500,createdAt:new Date().toISOString()};return await q2(tn(Me,"users",L.uid),v),n({id:L.uid,...v}),{success:!0}}catch(w){let C=w.message;return w.code==="auth/email-already-in-use"&&(C="Пользователь с такой почтой уже зарегистрирован."),{error:C}}},u=async(I,k)=>{try{return await ok(yn,I,k),{success:!0}}catch{return{error:"Неверный логин или пароль"}}},c=async()=>{if(!yn.currentUser)return;await yn.currentUser.reload();const I=yn.currentUser.emailVerified;return I&&(await fr(tn(Me,"users",yn.currentUser.uid),{isVerified:!0}),n(k=>({...k,isVerified:!0}))),I},f=async(I,k)=>{if((e==null?void 0:e.role)!=="admin")return{error:"Access denied"};try{const D=(r.find(S=>S.id===I).coins||0)+parseInt(k);return await fr(tn(Me,"users",I),{coins:D}),s(S=>S.map(w=>w.id===I?{...w,coins:D}:w)),{success:!0}}catch(P){return{error:P.message}}},m=()=>hk(yn),p=async I=>{if(e)try{if(I.username&&I.username!==e.username){const P=wn(Me,"users"),D=Ko(P,af("username","==",I.username));if(!(await lf(D)).empty)return{error:"Этот юзернейм уже занят."}}const k=tn(Me,"users",e.id);return await fr(k,I),n(P=>({...P,...I})),{success:!0}}catch(k){return console.error("Error updating user:",k),{error:k.message}}};return g.jsx(yI.Provider,{value:{user:e,allUsers:r,register:l,login:u,logout:m,checkVerification:c,giveCoins:f,updateUser:p,loading:i},children:!i&&t})}const Ls=()=>q.useContext(yI);function WD(t,e){const[n,r]=q.useState(()=>{try{const s=localStorage.getItem(t);if(s!==null)return JSON.parse(s)}catch(s){console.error(`Error reading localStorage key "${t}":`,s)}return e});return q.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(n))}catch(s){console.error(`Error setting localStorage key "${t}":`,s)}},[t,n]),[n,r]}const _I=q.createContext();function HD({children:t}){const{user:e}=Ls(),[n,r]=q.useState([]),[s,i]=WD("activeChatId",null),[o,l]=q.useState(s),[u,c]=q.useState([]),[f,m]=q.useState([]),p=b=>{l(b),i(b)};q.useEffect(()=>{if(!e){r([]);return}const b=Ko(wn(Me,"chats"),af("participants","array-contains",e.id));return uf(b,L=>{const v=L.docs.map(y=>({id:y.id,...y.data()}));r(v)})},[e]),q.useEffect(()=>{if(!o){c([]);return}const b=Ko(wn(Me,`chats/${o}/messages`),z2("timestamp","asc"));return uf(b,L=>{const v=L.docs.map(y=>({id:y.id,...y.data()}));c(v)})},[o]);const I=async b=>{if(!e)return;const V=n.find(y=>y.type==="dm"&&y.participants.includes(b.id));if(V){p(V.id);return}const L={type:"dm",name:b.username,participants:[e.id,b.id],lastMessage:null,createdAt:vo()},v=await Al(wn(Me,"chats"),L);p(v.id)},k=async(b,V)=>{const L={type:"group",name:b,participants:[...V,e.id],ownerId:e.id,lastMessage:"Группа создана",createdAt:vo()},v=await Al(wn(Me,"chats"),L);p(v.id)},P=async(b,V)=>{const L={type:"channel",name:b,participants:[...V,e.id],ownerId:e.id,lastMessage:"Канал создан",createdAt:vo()},v=await Al(wn(Me,"chats"),L);p(v.id)},D=async(b,V="text",L={})=>{if(!e||!o)return;const v={chatId:o,text:b,senderId:e.id,senderName:e.username,type:V,metadata:L,timestamp:vo()};await Al(wn(Me,`chats/${o}/messages`),v),await fr(tn(Me,"chats",o),{lastMessage:b,lastUpdated:vo()})},S=(b,V=8e3)=>{const L=Date.now();m(v=>[...v,{id:L,type:b}]),setTimeout(()=>m(v=>v.filter(y=>y.id!==L)),V)},w=async(b,V)=>{if(!(!e||!o||!b))try{const L=u.find(A=>A.id===b),v=Array.isArray(L==null?void 0:L.reactions)?L.reactions:[],T=v.some(A=>A.emoji===V&&A.userId===e.id)?v.filter(A=>!(A.emoji===V&&A.userId===e.id)):[...v,{emoji:V,userId:e.id}];await fr(tn(Me,`chats/${o}/messages`,b),{reactions:T})}catch(L){console.error("Reaction error",L)}},C=async b=>{if(b)try{const V=wn(Me,`chats/${b}/messages`),v=(await lf(V)).docs.map(y=>z_(y.ref));await Promise.all(v),await z_(tn(Me,"chats",b)),o===b&&p(null)}catch(V){console.error("Error deleting chat",V)}};return g.jsx(_I.Provider,{value:{chats:n,activeChatId:o,setActiveChatId:p,messages:u,sendMessage:D,startPrivateChat:I,createGroup:k,createChannel:P,toggleReaction:w,deleteChat:C,activeEffects:f,applyEffect:S},children:t})}const Bi=()=>q.useContext(_I);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(t,e)=>{const n=q.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>q.createElement("svg",{ref:f,...GD,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${KD(t)}`,l].join(" "),...c},[...e.map(([m,p])=>q.createElement(m,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=pe("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=pe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=pe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=pe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=pe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=pe("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=pe("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=pe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=pe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=pe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=pe("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=pe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=pe("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=pe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function fV(){const[t,e]=q.useState(!1),[n,r]=q.useState(!1),[s,i]=q.useState(""),[o,l]=q.useState(""),[u,c]=q.useState(""),[f,m]=q.useState(""),[p,I]=q.useState(""),[k,P]=q.useState(""),{login:D,register:S,checkVerification:w,logout:C,user:b}=Ls();q.useEffect(()=>{b&&!b.isVerified?r(!0):r(!1)},[b]);const V=async y=>{if(y.preventDefault(),P(""),t){if(!/^[a-zA-Z0-9_]+$/.test(s)){P("Юзернейм может содержать только латинские буквы, цифры и подчеркивание.");return}const T=await S(s,f,p,u,o);T.error&&P(T.error)}else{const T=await D(u,f);T.error&&P(T.error)}},L=async()=>{await w()||P("Письмо еще не подтверждено. Проверьте почту и папку Спам!")},v=async()=>{await C(),r(!1),e(!1)};return n?g.jsx("div",{className:"flex min-h-screen bg-[#09090b] text-zinc-100 font-sans",children:g.jsx("div",{className:"flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center",children:g.jsxs("div",{className:"p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6",children:[g.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse",children:g.jsx(tV,{className:"w-10 h-10 text-emerald-500"})}),g.jsx("h2",{className:"text-2xl font-bold",children:"Подтвердите почту"}),g.jsxs("p",{className:"text-sm text-zinc-500",children:["Мы отправили ссылку на ",g.jsx("b",{children:b==null?void 0:b.email}),". Пожалуйста, перейдите по ней, чтобы активировать аккаунт."]}),g.jsxs("div",{className:"space-y-3 pt-4",children:[g.jsxs("button",{onClick:L,className:"w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all",children:[g.jsx(EI,{className:"w-4 h-4"}),"Я подтвердил! Войти"]}),g.jsx("button",{onClick:v,className:"w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all",children:"Отмена / Выйти"}),g.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-widest pt-2",children:"Не забудьте проверить папку Спам"})]})]})})}):g.jsxs("div",{className:"min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden",children:[g.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:[g.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"}),g.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"1s"}})]}),g.jsx("div",{className:"w-full max-w-md animate-slide-in-up",children:g.jsxs("div",{className:"bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10",children:[g.jsxs("div",{className:"flex flex-col items-center mb-8",children:[g.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500",children:g.jsx(dV,{className:"w-10 h-10 text-emerald-500 fill-emerald-500/20"})}),g.jsx("h1",{className:"text-3xl font-black text-white tracking-tight mb-1",children:"GiftWave"}),g.jsx("p",{className:"text-zinc-500 text-sm font-medium",children:"Новое поколение мессенджеров"})]}),g.jsxs("div",{className:"mb-6 text-center",children:[g.jsx("h2",{className:"text-xl font-semibold",children:t?"Создать аккаунт":"С возвращением"}),g.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:t?"Используйте реальную почту для активации":"Введите данные для входа"})]}),g.jsxs("form",{onSubmit:V,className:"space-y-4",children:[t&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Имя (Отображаемое)"}),g.jsx("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:"Иван Иванов",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Юзернейм (@username)"}),g.jsx("input",{type:"text",value:s,onChange:y=>i(y.target.value),placeholder:"ivan_dev",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0}),g.jsx("p",{className:"text-[10px] text-zinc-500 mt-1 ml-1",children:"Только латиница, цифры и _"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Email"}),g.jsx("input",{type:"email",value:u,onChange:y=>c(y.target.value),placeholder:"alex@example.com",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Пароль"}),g.jsxs("div",{className:"relative",children:[g.jsx(ZD,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600"}),g.jsx("input",{type:"password",value:f,onChange:y=>m(y.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0,minLength:6})]})]}),k&&g.jsx("p",{className:"text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center",children:k}),g.jsx("button",{type:"submit",className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20",children:t?"Отправить ссылку активации":"Войти в систему"})]}),g.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800 text-center",children:g.jsx("button",{onClick:()=>e(!t),className:"text-sm text-zinc-400 hover:text-emerald-500 transition-colors",children:t?"Уже есть аккаунт? Войти":"Нет аккаунта? Создать сейчас"})})]})})]})}function wo({isOpen:t,onClose:e,title:n,children:r}){return q.useEffect(()=>{const s=i=>{i.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[t,e]),t?yw.createPortal(g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:g.jsxs("div",{className:"relative w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",children:[g.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-zinc-800",children:[g.jsx("h3",{className:"text-lg font-semibold text-zinc-100",children:n}),g.jsx("button",{onClick:e,className:"p-1 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors",children:g.jsx(lm,{className:"w-5 h-5"})})]}),g.jsx("div",{className:"p-4",children:r})]})}),document.body):null}const hf=async(t,e="auto")=>{var r;const n=new FormData;n.append("file",t),n.append("upload_preset","ryestqxz"),n.append("cloud_name","dnrrmyqf5"),console.log(`[Cloudinary] Starting upload... Type: ${e}, File: ${t.name}`);try{const i=await fetch(`https://api.cloudinary.com/v1_1/dnrrmyqf5/${e==="voice"?"video":e}/upload`,{method:"POST",body:n});if(!i.ok){const l=await i.json();throw console.error("[Cloudinary] Error response:",l),new Error(((r=l.error)==null?void 0:r.message)||`Upload failed: ${i.statusText}`)}const o=await i.json();return console.log("[Cloudinary] Upload success:",o.secure_url),o.secure_url}catch(s){throw console.error("[Cloudinary] Network error:",s),alert(`Ошибка загрузки файла: ${s.message}. Проверьте интернет или размер файла.`),s}};function pV(){const{user:t,allUsers:e,logout:n,updateUser:r,giveCoins:s}=Ls(),{chats:i,activeChatId:o,setActiveChatId:l,startPrivateChat:u,createGroup:c,createChannel:f,deleteChat:m}=Bi(),[p,I]=q.useState(""),[k,P]=q.useState("messages"),[D,S]=q.useState(!1),[w,C]=q.useState(!1),[b,V]=q.useState(!1),[L,v]=q.useState(!1),[y,T]=q.useState(!1),[A,E]=q.useState(""),[R,x]=q.useState(100),[ue,Te]=q.useState(""),[We,Re]=q.useState(""),[z,G]=q.useState(t.displayName||""),[Q,ne]=q.useState(t.username||""),[de,Ut]=q.useState(t.email||""),[De,Rt]=q.useState(t.phone||""),[vt,fn]=q.useState(t.bio||""),[Ms,Ua]=q.useState(t.birthday||""),[qi,Vc]=q.useState(t.nameColor||"#ffffff"),[Jr,js]=q.useState(null),[Fs,za]=q.useState(!1),Wi=async U=>{if(U.preventDefault(),!Fs){za(!0);try{let zt=t.avatar;Jr&&(zt=await hf(Jr,"image"));const st=await r({displayName:z,username:Q.toLowerCase().trim(),email:de,avatar:zt,bio:vt,birthday:Ms,nameColor:qi});st!=null&&st.error?alert(st.error):(v(!1),js(null))}catch(zt){console.error("Profile update error:",zt),alert("Ошибка при обновлении профиля: "+zt.message)}finally{za(!1)}}},Hi=e.filter(U=>{var zt;return U.id!==t.id&&(U.username.toLowerCase().includes(p.toLowerCase())||((zt=U.displayName)==null?void 0:zt.toLowerCase().includes(p.toLowerCase())))}),Ba=U=>{U.preventDefault(),A&&R&&(s(A,R),alert("Монеты успешно выданы!"))},He=U=>{U.preventDefault(),ue.trim()&&(c(ue,[t.id]),Te(""),C(!1))},Je=U=>{U.preventDefault(),We.trim()&&(f(We,[t.id]),Re(""),V(!1))};return g.jsxs("div",{className:"w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50",children:[g.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("div",{className:"relative",children:[g.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-xl bg-zinc-800 object-cover",alt:"me"}),g.jsx("div",{className:"absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),g.jsxs("div",{children:[g.jsxs("div",{className:"font-semibold text-sm truncate w-24 flex items-center gap-1",style:{color:t.nameColor||"#e4e4e7"},children:[t.displayName||t.username,t.role==="admin"&&g.jsx(aV,{className:"w-3 h-3 text-red-500",title:"Admin"})]}),g.jsxs("div",{className:"text-[10px] text-zinc-500 truncate w-24",children:["@",t.username]}),g.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter",children:[g.jsx(YD,{className:"w-2.5 h-2.5"}),t.coins," credits"]})]})]}),g.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors",children:g.jsx(eV,{className:"w-4 h-4"})})]}),g.jsx("div",{className:"p-4",children:g.jsxs("div",{className:"relative group",children:[g.jsx(TI,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors"}),g.jsx("input",{type:"text",value:p,onChange:U=>I(U.target.value),placeholder:"Поиск людей...",className:"w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"})]})}),g.jsx("div",{className:"flex px-4 mb-2 gap-1",children:[{id:"messages",icon:nV,label:"Чаты"},{id:"groups",icon:hV,label:"Группы"},{id:"channels",icon:XD,label:"Каналы"}].map(U=>g.jsxs("button",{onClick:()=>P(U.id),className:`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${k===U.id?"bg-emerald-500/10 text-emerald-500":"text-zinc-500 hover:bg-zinc-800/50"}`,children:[g.jsx(U.icon,{className:"w-4 h-4 mb-1"}),g.jsx("span",{className:"text-[10px] font-medium",children:U.label})]},U.id))}),g.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:p?g.jsxs("div",{className:"p-2 space-y-1",children:[g.jsx("div",{className:"px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",children:"Результаты поиска"}),Hi.map(U=>g.jsxs("button",{onClick:()=>{u(U),I("")},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group",children:[g.jsx("img",{src:U.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:U.username}),g.jsxs("div",{className:"text-left",children:[g.jsx("div",{className:"text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors",children:U.username}),g.jsx("div",{className:"text-xs text-zinc-500 truncate w-32",children:U.bio||"Нет описания"})]})]},U.id))]}):g.jsxs("div",{className:"p-2 space-y-1",children:[i.filter(U=>k==="messages"&&U.type==="dm"||k==="groups"&&U.type==="group"||k==="channels"&&U.type==="channel").map(U=>{var Us;const zt=(Us=U.participants)==null?void 0:Us.find(Gi=>Gi!==t.id),st=U.type==="dm"?e.find(Gi=>Gi.id===zt):null,$a=st?st.displayName||st.username:U.name,er=st?st.avatar:null,qa=(st==null?void 0:st.lastSeen)==="online",Wa=U.type!=="dm"&&(U.ownerId===t.id||t.role==="admin");return g.jsxs("div",{className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${o===U.id?"bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]":"hover:bg-zinc-800/50 border border-transparent"}`,children:[g.jsxs("button",{onClick:()=>l(U.id),className:"flex items-center gap-3 flex-1 min-w-0 text-left",children:[g.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden",children:[er?g.jsx("img",{src:er,className:"w-full h-full object-cover",alt:"avatar"}):$a[0].toUpperCase(),qa&&g.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),g.jsxs("div",{className:"text-left flex-1 min-w-0",children:[g.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:$a}),g.jsx("div",{className:"text-xs text-zinc-500 truncate",children:U.lastMessage||"Нет сообщений"})]})]}),Wa&&g.jsx("button",{onClick:()=>{window.confirm("Удалить этот чат вместе со всеми сообщениями?")&&m(U.id)},className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-red-400 hover:bg-red-500/10",children:"Удалить"})]},U.id)}),k!=="messages"&&g.jsxs("button",{onClick:()=>{k==="groups"&&C(!0),k==="channels"&&V(!0)},className:"w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4",children:[g.jsx(nv,{className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-semibold",children:k==="groups"?"Создать группу":"Создать канал"})]})]})}),g.jsxs("div",{className:"p-4 border-t border-zinc-800/50 space-y-1",children:[t.role==="admin"&&g.jsxs("button",{onClick:()=>T(!0),className:"w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium",children:[g.jsx(cV,{className:"w-4 h-4"}),"Панель разработчика"]}),g.jsxs("button",{onClick:()=>v(!0),className:"w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium",children:[g.jsx(oV,{className:"w-4 h-4"}),"Настройки профиля"]})]}),g.jsx(wo,{isOpen:y,onClose:()=>T(!1),title:"Console: Developer Panel",children:g.jsxs("form",{onSubmit:Ba,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Выбрать пользователя"}),g.jsxs("select",{value:A,onChange:U=>E(U.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0,children:[g.jsx("option",{value:"",children:"Выберите аккаунт"}),e.map(U=>g.jsxs("option",{value:U.id,children:[U.username," (ID: ",U.id,")"]},U.id))]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Количество монет"}),g.jsx("input",{type:"number",value:R,onChange:U=>x(U.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0})]}),g.jsx("button",{type:"submit",className:"w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs",children:"Выдать валюту"})]})}),g.jsx(wo,{isOpen:D,onClose:()=>S(!1),title:"Найти собеседника",children:g.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:e.filter(U=>U.id!==t.id).map(U=>g.jsxs("button",{onClick:()=>{u(U),S(!1)},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all",children:[g.jsx("img",{src:U.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:U.username}),g.jsxs("div",{className:"text-left",children:[g.jsx("div",{className:"text-sm font-medium text-zinc-200",children:U.username}),g.jsx("div",{className:"text-xs text-zinc-500",children:U.bio||"Нет описания"})]})]},U.id))})}),g.jsx(wo,{isOpen:w,onClose:()=>C(!1),title:"Создать группу",children:g.jsxs("form",{onSubmit:He,className:"space-y-4",children:[g.jsx("input",{type:"text",value:ue,onChange:U=>Te(U.target.value),placeholder:"Название группы",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),g.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),g.jsx(wo,{isOpen:b,onClose:()=>V(!1),title:"Создать канал",children:g.jsxs("form",{onSubmit:Je,className:"space-y-4",children:[g.jsx("input",{type:"text",value:We,onChange:U=>Re(U.target.value),placeholder:"Название канала",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),g.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),g.jsx(wo,{isOpen:L,onClose:()=>v(!1),title:"Настройки профиля",children:g.jsxs("form",{onSubmit:Wi,className:"space-y-4",children:[g.jsxs("div",{className:"flex flex-col items-center gap-3 mb-4",children:[g.jsxs("div",{className:"relative group",children:[g.jsx("img",{src:Jr?URL.createObjectURL(Jr):t.avatar,className:"w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800",alt:"Avatar"}),g.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity",children:[g.jsx(nv,{className:"w-8 h-8 text-white"}),g.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:U=>js(U.target.files[0])})]})]}),g.jsx("p",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-widest",children:"Нажмите, чтобы изменить фото"})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"Отображаемое имя (русский доступен)"}),g.jsx("input",{type:"text",value:z,onChange:U=>G(U.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"Цвет имени"}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("input",{type:"color",value:qi,onChange:U=>Vc(U.target.value),className:"w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer"}),g.jsx("span",{className:"text-xs text-zinc-400",children:qi})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"Дата рождения"}),g.jsx("input",{type:"date",value:Ms,onChange:U=>Ua(U.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"О себе"}),g.jsx("textarea",{value:vt,onChange:U=>fn(U.target.value),rows:3,className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50 resize-none text-sm",placeholder:"Расскажите немного о себе..."})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"Юзернейм (@username)"}),g.jsx("input",{type:"text",value:Q,onChange:U=>ne(U.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-xs text-zinc-500",children:"Email"}),g.jsx("input",{type:"email",value:de,onChange:U=>Ut(U.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"})]}),g.jsx("button",{type:"submit",disabled:Fs,className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2",children:Fs?g.jsxs(g.Fragment,{children:[g.jsx(EI,{className:"w-4 h-4 animate-spin"}),"Загрузка..."]}):g.jsxs(g.Fragment,{children:[g.jsx(QD,{className:"w-4 h-4"}),"Сохранить изменения"]})})]})})]})}const mV=[{id:"hearts",name:"Дождь из сердец",description:"Наполните чат любовью и нежностью",price:150,effect:"hearts",icon:g.jsx(wI,{className:"w-5 h-5 text-rose-500 fill-rose-500"})},{id:"fire",name:"Пламя страсти",description:"Горячий эффект для ярких эмоций",price:300,effect:"fire",icon:g.jsx(JD,{className:"w-5 h-5 text-orange-500 fill-orange-500"})},{id:"stars",name:"Звездная пыль",description:"Волшебное сияние ночного неба",price:500,effect:"stars",icon:g.jsx(lV,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"})}];function gV({onSelect:t,onClose:e}){return g.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[g.jsx("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest",children:"Premium Store"}),g.jsx("button",{onClick:e,className:"p-1 hover:bg-zinc-800 rounded-lg transition-colors",children:g.jsx(lm,{className:"w-4 h-4 text-zinc-600"})})]}),g.jsx("div",{className:"space-y-2",children:mV.map(n=>g.jsxs("button",{onClick:()=>t(n),className:"w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group",children:[g.jsx("div",{className:"p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform",children:n.icon}),g.jsxs("div",{className:"flex-1",children:[g.jsx("div",{className:"text-sm font-semibold text-zinc-100",children:n.name}),g.jsx("div",{className:"text-[10px] text-zinc-500 leading-tight",children:n.description})]}),g.jsxs("div",{className:"flex flex-col items-end",children:[g.jsx("div",{className:"text-amber-500 font-bold text-sm",children:n.price}),g.jsx("div",{className:"text-[8px] text-zinc-600 uppercase font-black",children:"Credits"})]})]},n.id))})]})}function yV(){const[t,e]=q.useState(""),[n,r]=q.useState(!1),[s,i]=q.useState(!1),[o,l]=q.useState(!1),{user:u,updateUser:c}=Ls(),{sendMessage:f,applyEffect:m,activeChatId:p}=Bi(),I=q.useRef(),k=q.useRef(null),P=q.useRef([]),D=V=>{V.preventDefault(),t.trim()&&!o&&(f(t),e(""))},S=async V=>{const L=V.target.files[0];if(!L||!p)return;const v=30,y=v*1024*1024;if(L.size>y){alert(`Файл слишком большой. Максимальный размер: ${v}MB.`),V.target.value="";return}l(!0);try{const T=L.type.startsWith("image/")?"image":L.type.startsWith("video/")?"video":"file",A=await hf(L,T==="video"?"video":"image");await f(L.name,T,{url:A,fileName:L.name,fileSize:L.size})}catch(T){alert("Ошибка загрузки: "+T.message)}finally{l(!1),I.current.value=""}},w=async()=>{try{const V=await navigator.mediaDevices.getUserMedia({audio:!0});k.current=new MediaRecorder(V),P.current=[],k.current.ondataavailable=L=>{P.current.push(L.data)},k.current.onstop=async()=>{const L=new Blob(P.current,{type:"audio/webm"}),v=new File([L],`voice_${Date.now()}.webm`,{type:"audio/webm"});l(!0);try{const y=await hf(v,"video");await f("Голосовое сообщение","voice",{url:y,duration:0})}catch(y){alert("Ошибка отправки голосового: "+y.message)}finally{l(!1)}},k.current.start(),i(!0)}catch(V){alert("Доступ к микрофону отклонен: "+V.message)}},C=()=>{k.current&&s&&(k.current.stop(),i(!1),k.current.stream.getTracks().forEach(V=>V.stop()))},b=async V=>{if(u.coins>=V.price)try{const L=u.coins-V.price,v=await c({coins:L});if(v!=null&&v.error){alert(v.error);return}await f(`🎁 Отправил подарок: ${V.name}! ✨`,"gift",{giftId:V.id,giftName:V.name,effect:V.effect}),m(V.effect),r(!1)}catch(L){console.error("Gift error:",L),alert("Ошибка при покупке подарка: "+L.message)}else alert(`Недостаточно монет! Стоимость подарка: ${V.price}, у вас: ${u.coins}`)};return g.jsxs("div",{className:"relative",children:[n&&g.jsx("div",{className:"absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200",children:g.jsx(gV,{onSelect:b,onClose:()=>r(!1)})}),g.jsxs("div",{className:"flex flex-col gap-2",children:[o&&g.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse",children:[g.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-bounce"}),g.jsx("span",{className:"text-xs text-zinc-400",children:"Отправка файла..."})]}),g.jsxs("form",{onSubmit:D,className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all",children:[g.jsx("input",{type:"file",ref:I,onChange:S,className:"hidden",accept:"image/*,video/*"}),g.jsx("button",{type:"button",onClick:()=>I.current.click(),className:"p-2 text-zinc-500 hover:text-zinc-200 transition-colors",children:g.jsx(sV,{className:"w-5 h-5"})}),g.jsx("input",{type:"text",value:t,onChange:V=>e(V.target.value),placeholder:s?"Идет запись голоса...":"Напишите сообщение...",disabled:s,className:"flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"}),g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx("button",{type:"button",onClick:s?C:w,className:`p-2 rounded-xl transition-all ${s?"bg-red-500 text-white animate-pulse":"text-zinc-500 hover:text-zinc-200"}`,children:s?g.jsx(uV,{className:"w-5 h-5"}):g.jsx(rV,{className:"w-5 h-5"})}),g.jsx("button",{type:"button",onClick:()=>r(!n),className:`p-2 rounded-xl transition-all ${n?"bg-amber-500 text-black shadow-lg shadow-amber-500/20":"text-amber-500 hover:bg-amber-500/10"}`,children:g.jsx(vI,{className:"w-5 h-5"})}),g.jsx("button",{type:"submit",disabled:!t.trim()||o,className:"p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20",children:g.jsx(iV,{className:"w-5 h-5"})})]})]})]})]})}function _V(){var A;const{user:t,allUsers:e}=Ls(),{messages:n,chats:r,activeChatId:s,setActiveChatId:i,applyEffect:o,activeEffects:l,sendMessage:u,toggleReaction:c}=Bi(),f=q.useRef(),m=q.useRef(new Set),[p,I]=q.useState(!1),[k,P]=q.useState(""),[D,S]=q.useState(!1),w=r.find(E=>E.id===s),C=(A=w==null?void 0:w.participants)==null?void 0:A.find(E=>E!==t.id),b=e.find(E=>E.id===C),V=b?b.displayName||b.username:(w==null?void 0:w.name)||"Чат",L=b?b.avatar:null,v=(b==null?void 0:b.lastSeen)==="online",y=q.useMemo(()=>k?n.filter(E=>{var R;return(R=E.text)==null?void 0:R.toLowerCase().includes(k.toLowerCase())}):n,[n,k]),T=async E=>{const R=E==="video"?"📹":"📞",x=E==="video"?"видеозвонок":"голосовой звонок";try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(z=>z.stop())}catch{alert("Нет доступа к микрофону. Разрешите микрофон в браузере, чтобы звонить.");return}const ue=r.find(Re=>Re.id===s);if(!ue)return;const Te=ue.participants.find(Re=>Re!==t.id);e.find(Re=>Re.id===Te)&&await u(`${R} ${t.displayName} начал ${x}!`,"call",{callType:E,callerId:t.id,callerName:t.displayName,targetId:Te,timestamp:Date.now(),status:"ringing",chatId:s})};return q.useEffect(()=>{if(!(!n||n.length===0))try{const E=Date.now();n.forEach(R=>{var Te;if(R.type!=="gift"||!R.timestamp||m.current.has(R.id))return;const x=R.timestamp&&typeof R.timestamp.toMillis=="function"?R.timestamp.toMillis():R.timestamp?new Date(R.timestamp).getTime():Date.now();E-x<6e4&&((Te=R.metadata)!=null&&Te.effect)&&(m.current.add(R.id),o(R.metadata.effect))})}catch(E){console.error("Gift sync error:",E)}},[n,o]),q.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[n]),s?g.jsxs("div",{className:"h-full flex flex-col bg-[#09090b] relative",children:[g.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40",children:[g.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[g.jsx("button",{onClick:()=>i(null),className:"p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden",children:g.jsx(tv,{className:"w-5 h-5"})}),g.jsx("div",{onClick:()=>S(!0),className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform",children:L?g.jsx("img",{src:L,className:"w-full h-full object-cover",alt:"avatar"}):V?V[0].toUpperCase():"?"}),g.jsxs("div",{onClick:()=>S(!0),className:"min-w-0 cursor-pointer",children:[g.jsx("div",{className:"text-sm font-semibold text-zinc-100 truncate hover:text-emerald-500 transition-colors",children:V}),g.jsx("div",{className:`text-[10px] flex items-center gap-1 ${v?"text-emerald-500":"text-zinc-500"}`,children:v?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"}),"В сети"]}):g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"w-1.5 h-1.5 bg-zinc-500 rounded-full"}),b!=null&&b.lastSeen?`Был(а) ${new Date(b.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Не в сети"]})})]})]}),g.jsxs("div",{className:"flex items-center gap-1",children:[p?g.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2",children:[g.jsx("input",{autoFocus:!0,type:"text",placeholder:"Поиск...",value:k,onChange:E=>P(E.target.value),className:"bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"}),g.jsx("button",{onClick:()=>{I(!1),P("")},className:"text-zinc-500 hover:text-zinc-100 text-[10px]",children:"✕"})]}):g.jsx("button",{onClick:()=>I(!0),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:g.jsx(TI,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>T("audio"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:g.jsx(Qo,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>T("video"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:g.jsx(II,{className:"w-4 h-4"})})]})]}),D&&b&&g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",children:g.jsxs("div",{className:"w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in",children:[g.jsx("div",{className:"h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900"}),g.jsxs("div",{className:"px-6 pb-6 -mt-12 flex flex-col items-center",children:[g.jsx("div",{className:"w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3",children:b.avatar?g.jsx("img",{src:b.avatar,className:"w-full h-full object-cover"}):g.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500",children:b.username[0].toUpperCase()})}),g.jsx("h3",{className:"text-lg font-bold text-zinc-100",children:b.displayName||b.username}),g.jsxs("p",{className:"text-xs text-zinc-500 mb-4",children:["@",b.username]}),g.jsxs("div",{className:"w-full space-y-3",children:[g.jsxs("div",{className:"p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30",children:[g.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"О себе"}),g.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:b.bio||'Этот пользователь не заполнил раздел "О себе"'})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[g.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"Монеты"}),g.jsxs("div",{className:"text-sm font-bold text-emerald-500",children:["🪙 ",b.coins||0]})]}),g.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[g.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"Ранг"}),g.jsx("div",{className:"text-sm font-bold text-amber-500 uppercase",children:b.role||"user"})]})]})]}),g.jsx("button",{onClick:()=>S(!1),className:"w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors",children:"Закрыть"})]})]})}),g.jsx("div",{ref:f,className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10",children:y.map(E=>{var Te,We,Re,z,G,Q,ne,de,Ut;const R=E.senderId===t.id,x=E.type==="system",ue=(E.reactions||[]).reduce((De,Rt)=>(De[Rt.emoji]=(De[Rt.emoji]||0)+1,De),{});return x?g.jsx("div",{className:"flex justify-center my-2",children:g.jsx("div",{className:"px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30",children:E.text})},E.id):g.jsx("div",{className:`flex ${R?"justify-end":"justify-start"} animate-message-pop`,children:g.jsxs("div",{className:`flex flex-col max-w-[85%] ${R?"items-end":"items-start"} group mb-1`,children:[g.jsxs("div",{className:`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${E.type==="gift"?"gift-bubble border border-zinc-800/50 py-3":E.type==="call"?"bg-blue-600/20 border border-blue-500/30 text-blue-300":E.type==="image"||E.type==="video"?"p-1.5 bg-zinc-800/80 border border-zinc-700/30":R?"bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10":"bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30"}`,children:[E.type==="gift"&&g.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[g.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30",children:g.jsx(vI,{className:"w-6 h-6 text-emerald-500/80",strokeWidth:1.5})}),g.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60",children:"Особое внимание"}),g.jsx("div",{className:"text-zinc-100 font-light tracking-wide",children:E.text})]}),E.type==="call"&&g.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[g.jsx("div",{className:"text-2xl mb-1",children:((Te=E.text)==null?void 0:Te.split(" ")[0])||(((We=E.metadata)==null?void 0:We.callType)==="video"?"📹":"📞")}),g.jsx("div",{className:"text-sm font-medium",children:((Re=E.metadata)==null?void 0:Re.status)==="ringing"&&((z=E.metadata)==null?void 0:z.callerId)===t.id?"Вы звоните...":((G=E.metadata)==null?void 0:G.status)==="ringing"?"Вам звонят...":((Q=E.metadata)==null?void 0:Q.status)==="accepted"?"Звонок принят":((ne=E.metadata)==null?void 0:ne.status)==="declined"?"Звонок отклонен":(de=E.text)==null?void 0:de.replace(/^[📹📞]\s*/,"")}),g.jsx("div",{className:"text-xs opacity-50",children:((Ut=E.metadata)==null?void 0:Ut.status)==="ringing"?"Ожидание ответа":"История звонка"})]}),E.type==="image"&&g.jsx("img",{src:E.metadata.url,alt:"attachment",className:"max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(E.metadata.url,"_blank")}),E.type==="video"&&g.jsx("video",{src:E.metadata.url,controls:!0,className:"max-w-full rounded-xl overflow-hidden"}),E.type==="voice"&&g.jsxs("div",{className:"flex items-center gap-3 py-1 min-w-[200px]",children:[g.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",children:g.jsx(Qo,{className:"w-4 h-4 text-emerald-500"})}),g.jsx("audio",{src:E.metadata.url,controls:!0,className:"h-8 w-full custom-audio-player"})]}),(E.type==="text"||E.type==="gift"||E.type==="call")&&E.text]}),g.jsxs("div",{className:"flex items-center gap-2 mt-1.5 px-1",children:[g.jsx("span",{className:"text-[10px] text-zinc-600 font-medium",children:E.timestamp?E.timestamp.toDate?E.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(E.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),g.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[Object.entries(ue).map(([De,Rt])=>g.jsxs("button",{onClick:()=>c(E.id,De),className:"px-1.5 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-200 flex items-center gap-1 hover:bg-zinc-700",children:[g.jsx("span",{children:De}),g.jsx("span",{className:"text-[9px] opacity-70",children:Rt})]},De)),g.jsx("button",{onClick:()=>c(E.id,"👍"),className:"px-1 py-0.5 rounded-full text-[11px] text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200",children:"+"})]})]})]})},E.id)})}),g.jsxs("div",{className:"p-6 bg-gradient-to-t from-[#09090b] to-transparent",children:[g.jsx(yV,{}),g.jsx("p",{className:"text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest",children:"End-to-end encryption active"})]})]}):g.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500",children:[g.jsx("div",{className:"w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner",children:g.jsx(tv,{className:"w-8 h-8 opacity-20 rotate-180"})}),g.jsx("p",{className:"text-sm font-medium tracking-wide uppercase opacity-40",children:"Выберите чат для общения"})]})}function vV(){const{activeEffects:t}=Bi();return g.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:t.map(e=>g.jsxs(yf.Fragment,{children:[e.type==="hearts"&&g.jsx("div",{className:"absolute inset-0",children:[...Array(15)].map((n,r)=>g.jsx("div",{className:"absolute animate-float-up text-rose-500/40",style:{left:`${Math.random()*100}%`,top:"110%",animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`},children:g.jsx(wI,{size:20+Math.random()*30,fill:"currentColor"})},r))}),e.type==="fire"&&g.jsx("div",{className:"absolute inset-0 animate-pulse-fast bg-gradient-to-t from-orange-600/20 via-transparent to-transparent shadow-[inset_0_-50px_100px_rgba(249,115,22,0.2)]"}),e.type==="stars"&&g.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((n,r)=>g.jsx("div",{className:"absolute animate-twinkle bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${2+Math.random()*3}px`,height:`${2+Math.random()*3}px`,animationDelay:`${Math.random()*3}s`}},r))})]},e.id))})}function wV(){var f,m,p;const{user:t}=Ls(),{messages:e,activeChatId:n,sendMessage:r}=Bi(),[s,i]=q.useState(0),o=q.useMemo(()=>{if(!t||!n||!(e!=null&&e.length))return null;const I=Date.now(),k=e.filter(P=>{if(P.type!=="call"||!P.metadata||P.metadata.status!=="ringing"||P.metadata.chatId&&P.metadata.chatId!==n)return!1;const D=P.timestamp&&typeof P.timestamp.toMillis=="function"?P.timestamp.toMillis():P.timestamp?new Date(P.timestamp).getTime():I;return I-D>6e4?!1:P.metadata.callerId===t.id||P.metadata.targetId===t.id});return k.length?k[k.length-1]:null},[t,n,e]);if(q.useEffect(()=>{if(!o)return;i(0);const I=setInterval(()=>{i(P=>P+1)},1e3),k=setTimeout(()=>{c("cancelled")},3e4);return()=>{clearInterval(I),clearTimeout(k)}},[o]),!o)return null;const l=((f=o.metadata)==null?void 0:f.callerId)===t.id,u=((m=o.metadata)==null?void 0:m.callType)==="video",c=async I=>{var D;if(!o)return;await r(`${u?"📹":"📞"} Звонок ${u?"видеозвонок":"голосовой звонок"} ${I==="accepted"?"принят":I==="declined"?"отклонен":"отменен"}.`,"call",{...o.metadata,targetId:I==="cancelled"?(D=o.metadata)==null?void 0:D.targetId:t.id,status:I,timestamp:Date.now()})};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:g.jsxs("div",{className:"w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4",children:[g.jsx("div",{className:"w-14 h-1 rounded-full bg-zinc-800 mb-2"}),g.jsx("div",{className:"w-20 h-20 rounded-3xl bg-zinc-900 flex items-center justify-center mb-2",children:u?g.jsx(II,{className:"w-10 h-10 text-emerald-400"}):g.jsx(Qo,{className:"w-10 h-10 text-emerald-400"})}),g.jsx("div",{className:"text-sm text-zinc-500 uppercase tracking-widest",children:l?"Исходящий звонок":"Входящий звонок"}),g.jsx("div",{className:"text-lg font-semibold text-zinc-100 text-center",children:((p=o.metadata)==null?void 0:p.callerName)||"Неизвестный пользователь"}),g.jsx("div",{className:"text-xs text-zinc-500 mb-1",children:u?"Видеозвонок через GiftWave":"Голосовой звонок через GiftWave"}),g.jsxs("div",{className:"text-[11px] text-zinc-500",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),g.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[!l&&g.jsx("button",{onClick:()=>c("declined"),className:"w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40",children:g.jsx(lm,{className:"w-7 h-7"})}),g.jsx("button",{onClick:()=>c(l?"cancelled":"accepted"),className:`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${l?"bg-zinc-600 shadow-zinc-600/40":"bg-emerald-500 shadow-emerald-500/40"}`,children:l?g.jsx(Qo,{className:"w-7 h-7 rotate-135"}):g.jsx(Qo,{className:"w-7 h-7 -rotate-45"})})]}),g.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mt-4",children:l?"Ожидание ответа собеседника":"Разрешите доступ к микрофону, чтобы ответить"})]})})}const um="-",EV=t=>{const e=IV(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(um);return l[0]===""&&l.length!==1&&l.shift(),SI(l,e)||TV(o)},getConflictingClassGroupIds:(o,l)=>{const u=n[o]||[];return l&&r[o]?[...u,...r[o]]:u}}},SI=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?SI(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(um);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},rv=/^\[(.+)\]$/,TV=t=>{if(rv.test(t)){const e=rv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},IV=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return xV(Object.entries(t.classGroups),n).forEach(([i,o])=>{df(o,r,i,e)}),r},df=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:sv(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(SV(s)){df(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{df(o,sv(e,i),n,r)})})},sv=(t,e)=>{let n=t;return e.split(um).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},SV=t=>t.isThemeGetter,xV=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,AV=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},xI="!",CV=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const u=[];let c=0,f=0,m;for(let D=0;D<l.length;D++){let S=l[D];if(c===0){if(S===s&&(r||l.slice(D,D+i)===e)){u.push(l.slice(f,D)),f=D+i;continue}if(S==="/"){m=D;continue}}S==="["?c++:S==="]"&&c--}const p=u.length===0?l:l.substring(f),I=p.startsWith(xI),k=I?p.substring(1):p,P=m&&m>f?m-f:void 0;return{modifiers:u,hasImportantModifier:I,baseClassName:k,maybePostfixModifierPosition:P}};return n?l=>n({className:l,parseClassName:o}):o},kV=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},RV=t=>({cache:AV(t.cacheSize),parseClassName:CV(t),...EV(t)}),PV=/\s+/,bV=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(PV);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:f,hasImportantModifier:m,baseClassName:p,maybePostfixModifierPosition:I}=n(c);let k=!!I,P=r(k?p.substring(0,I):p);if(!P){if(!k){l=c+(l.length>0?" "+l:l);continue}if(P=r(p),!P){l=c+(l.length>0?" "+l:l);continue}k=!1}const D=kV(f).join(":"),S=m?D+xI:D,w=S+P;if(i.includes(w))continue;i.push(w);const C=s(P,k);for(let b=0;b<C.length;++b){const V=C[b];i.push(S+V)}l=c+(l.length>0?" "+l:l)}return l};function NV(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=AI(e))&&(r&&(r+=" "),r+=n);return r}const AI=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=AI(t[r]))&&(n&&(n+=" "),n+=e);return n};function DV(t,...e){let n,r,s,i=o;function o(u){const c=e.reduce((f,m)=>m(f),t());return n=RV(c),r=n.cache.get,s=n.cache.set,i=l,l(u)}function l(u){const c=r(u);if(c)return c;const f=bV(u,n);return s(u,f),f}return function(){return i(NV.apply(null,arguments))}}const _e=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},CI=/^\[(?:([a-z-]+):)?(.+)\]$/i,VV=/^\d+\/\d+$/,OV=new Set(["px","full","screen"]),LV=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,MV=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jV=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,FV=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,UV=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nn=t=>wi(t)||OV.has(t)||VV.test(t),ur=t=>$i(t,"length",KV),wi=t=>!!t&&!Number.isNaN(Number(t)),Fh=t=>$i(t,"number",wi),Eo=t=>!!t&&Number.isInteger(Number(t)),zV=t=>t.endsWith("%")&&wi(t.slice(0,-1)),ee=t=>CI.test(t),cr=t=>LV.test(t),BV=new Set(["length","size","percentage"]),$V=t=>$i(t,BV,kI),qV=t=>$i(t,"position",kI),WV=new Set(["image","url"]),HV=t=>$i(t,WV,YV),GV=t=>$i(t,"",QV),To=()=>!0,$i=(t,e,n)=>{const r=CI.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},KV=t=>MV.test(t)&&!jV.test(t),kI=()=>!1,QV=t=>FV.test(t),YV=t=>UV.test(t),JV=()=>{const t=_e("colors"),e=_e("spacing"),n=_e("blur"),r=_e("brightness"),s=_e("borderColor"),i=_e("borderRadius"),o=_e("borderSpacing"),l=_e("borderWidth"),u=_e("contrast"),c=_e("grayscale"),f=_e("hueRotate"),m=_e("invert"),p=_e("gap"),I=_e("gradientColorStops"),k=_e("gradientColorStopPositions"),P=_e("inset"),D=_e("margin"),S=_e("opacity"),w=_e("padding"),C=_e("saturate"),b=_e("scale"),V=_e("sepia"),L=_e("skew"),v=_e("space"),y=_e("translate"),T=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto",ee,e],R=()=>[ee,e],x=()=>["",Nn,ur],ue=()=>["auto",wi,ee],Te=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],We=()=>["solid","dashed","dotted","double","none"],Re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",ee],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>[wi,ee];return{cacheSize:500,separator:":",theme:{colors:[To],spacing:[Nn,ur],blur:["none","",cr,ee],brightness:ne(),borderColor:[t],borderRadius:["none","","full",cr,ee],borderSpacing:R(),borderWidth:x(),contrast:ne(),grayscale:G(),hueRotate:ne(),invert:G(),gap:R(),gradientColorStops:[t],gradientColorStopPositions:[zV,ur],inset:E(),margin:E(),opacity:ne(),padding:R(),saturate:ne(),scale:ne(),sepia:G(),skew:ne(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",ee]}],container:["container"],columns:[{columns:[cr]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Te(),ee]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Eo,ee]}],basis:[{basis:E()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ee]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",Eo,ee]}],"grid-cols":[{"grid-cols":[To]}],"col-start-end":[{col:["auto",{span:["full",Eo,ee]},ee]}],"col-start":[{"col-start":ue()}],"col-end":[{"col-end":ue()}],"grid-rows":[{"grid-rows":[To]}],"row-start-end":[{row:["auto",{span:[Eo,ee]},ee]}],"row-start":[{"row-start":ue()}],"row-end":[{"row-end":ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ee]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[D]}],mx:[{mx:[D]}],my:[{my:[D]}],ms:[{ms:[D]}],me:[{me:[D]}],mt:[{mt:[D]}],mr:[{mr:[D]}],mb:[{mb:[D]}],ml:[{ml:[D]}],"space-x":[{"space-x":[v]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[v]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ee,e]}],"min-w":[{"min-w":[ee,e,"min","max","fit"]}],"max-w":[{"max-w":[ee,e,"none","full","min","max","fit","prose",{screen:[cr]},cr]}],h:[{h:[ee,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ee,e,"auto","min","max","fit"]}],"font-size":[{text:["base",cr,ur]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Fh]}],"font-family":[{font:[To]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ee]}],"line-clamp":[{"line-clamp":["none",wi,Fh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nn,ee]}],"list-image":[{"list-image":["none",ee]}],"list-style-type":[{list:["none","disc","decimal",ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...We(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nn,ur]}],"underline-offset":[{"underline-offset":["auto",Nn,ee]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Te(),qV]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$V]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},HV]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[I]}],"gradient-via":[{via:[I]}],"gradient-to":[{to:[I]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...We(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:We()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...We()]}],"outline-offset":[{"outline-offset":[Nn,ee]}],"outline-w":[{outline:[Nn,ur]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:x()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[Nn,ur]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",cr,GV]}],"shadow-color":[{shadow:[To]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...Re(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Re()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",cr,ee]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[C]}],sepia:[{sepia:[V]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ee]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",ee]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Eo,ee]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ee]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Nn,ur,Fh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Uh=DV(JV);class XV extends yf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("App Crash:",e,n)}render(){return this.state.hasError?g.jsxs("div",{className:"h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center",children:[g.jsx("h1",{className:"text-xl font-bold text-white mb-4",children:"Ой! Что-то пошло не так"}),g.jsx("p",{className:"text-zinc-400 text-sm mb-6",children:"Возможно, это из-за старого кэша приложения."}),g.jsx("button",{onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.pathname+"?clear=true"},className:"px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all",children:"Очистить кэш и исправить"})]}):this.props.children}}function ZV(){const{user:t,loading:e}=Ls(),{activeChatId:n}=Bi();return e?g.jsx("div",{className:"h-screen bg-[#09090b] flex items-center justify-center",children:g.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):!t||!t.isVerified?g.jsx(fV,{}):g.jsx("div",{className:"flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden",children:g.jsxs("div",{className:Uh("flex-1 flex",n?"mobile-chat-active":"mobile-sidebar-active"),children:[g.jsx("div",{className:Uh("w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",n?"hidden md:flex":"w-full md:w-80 flex"),children:g.jsx(pV,{})}),g.jsxs("main",{className:Uh("flex-1 flex flex-col relative transition-all duration-300",n?"flex":"hidden md:flex"),children:[n?g.jsx(_V,{}):g.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]",children:[g.jsx("div",{className:"p-6 bg-zinc-900/30 rounded-full mb-4",children:g.jsx("img",{src:t.avatar,className:"w-24 h-24 opacity-20 grayscale rounded-2xl object-cover",alt:"logo"})}),g.jsx("h3",{className:"text-xl font-medium text-zinc-400 text-center px-4",children:"Выберите чат, чтобы начать общение"})]}),g.jsx(vV,{}),g.jsx(wV,{})]})]})})}function eO(){return g.jsx(XV,{children:g.jsx(ZV,{})})}console.log("--- APP VERSION 3.0.0 LOADED ---");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>console.log("SW registered v1.2.1-ULTRA-FORCE")).catch(t=>console.log("SW reg error",t))});zh.createRoot(document.getElementById("root")).render(g.jsx(yf.StrictMode,{children:g.jsx(qD,{children:g.jsx(HD,{children:g.jsx(eO,{})})})}));
