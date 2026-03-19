(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function i1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wv={exports:{}},Iu={},Ev={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),o1=Symbol.for("react.portal"),a1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),c1=Symbol.for("react.profiler"),u1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),h1=Symbol.for("react.forward_ref"),f1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),m1=Symbol.for("react.lazy"),mg=Symbol.iterator;function g1(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var Iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tv=Object.assign,xv={};function uo(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||Iv}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sv(){}Sv.prototype=uo.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||Iv}var $f=zf.prototype=new Sv;$f.constructor=zf;Tv($f,uo.prototype);$f.isPureReactComponent=!0;var gg=Array.isArray,Av=Object.prototype.hasOwnProperty,Bf={current:null},Cv={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Av.call(e,r)&&!Cv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:rl,type:t,key:i,ref:o,props:s,_owner:Bf.current}}function y1(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function _1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yg=/\/+/g;function Ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_1(""+t.key):e.toString(36)}function ic(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case o1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ad(o,0):r,gg(s)?(n="",t!=null&&(n=t.replace(yg,"$&/")+"/"),ic(s,e,n,"",function(u){return u})):s!=null&&(qf(s)&&(s=y1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(yg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",gg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Ad(i,l);o+=ic(i,e,n,c,s)}else if(c=g1(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Ad(i,l++),o+=ic(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var r=[],s=0;return ic(t,r,"","",function(i){return e.call(n,i,s++)}),r}function v1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},oc={transition:null},w1={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Bf};function Rv(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=uo;he.Fragment=a1;he.Profiler=c1;he.PureComponent=zf;he.StrictMode=l1;he.Suspense=f1;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;he.act=Rv;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Bf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Av.call(e,c)&&!Cv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:rl,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:d1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u1,_context:t},t.Consumer=t};he.createElement=kv;he.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:h1,render:t}};he.isValidElement=qf;he.lazy=function(t){return{$$typeof:m1,_payload:{_status:-1,_result:t},_init:v1}};he.memo=function(t,e){return{$$typeof:p1,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=oc.transition;oc.transition={};try{t()}finally{oc.transition=e}};he.unstable_act=Rv;he.useCallback=function(t,e){return At.current.useCallback(t,e)};he.useContext=function(t){return At.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return At.current.useDeferredValue(t)};he.useEffect=function(t,e){return At.current.useEffect(t,e)};he.useId=function(){return At.current.useId()};he.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return At.current.useMemo(t,e)};he.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};he.useRef=function(t){return At.current.useRef(t)};he.useState=function(t){return At.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return At.current.useTransition()};he.version="18.3.1";Ev.exports=he;var B=Ev.exports;const Wf=i1(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1=B,I1=Symbol.for("react.element"),T1=Symbol.for("react.fragment"),x1=Object.prototype.hasOwnProperty,S1=E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A1={key:!0,ref:!0,__self:!0,__source:!0};function bv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)x1.call(e,r)&&!A1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:I1,type:t,key:i,ref:o,props:s,_owner:S1.current}}Iu.Fragment=T1;Iu.jsx=bv;Iu.jsxs=bv;wv.exports=Iu;var p=wv.exports,yh={},Pv={exports:{}},Ht={},Nv={exports:{}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var K=N.length;N.push($);e:for(;0<K;){var re=K-1>>>1,ee=N[re];if(0<s(ee,$))N[re]=$,N[K]=ee,K=re;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var $=N[0],K=N.pop();if(K!==$){N[0]=K;e:for(var re=0,ee=N.length,ce=ee>>>1;re<ce;){var se=2*(re+1)-1,ne=N[se],we=se+1,xe=N[we];if(0>s(ne,K))we<ee&&0>s(xe,ne)?(N[re]=xe,N[we]=K,re=we):(N[re]=ne,N[se]=K,re=se);else if(we<ee&&0>s(xe,K))N[re]=xe,N[we]=K,re=we;else break e}}return $}function s(N,$){var K=N.sortIndex-$.sortIndex;return K!==0?K:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,g=null,m=3,x=!1,k=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(N){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=N)r(u),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(u)}}function D(N){if(b=!1,T(N),!k)if(n(c)!==null)k=!0,Q(j);else{var $=n(u);$!==null&&X(D,$.startTime-N)}}function j(N,$){k=!1,b&&(b=!1,E(y),y=-1),x=!0;var K=m;try{for(T($),g=n(c);g!==null&&(!(g.expirationTime>$)||N&&!C());){var re=g.callback;if(typeof re=="function"){g.callback=null,m=g.priorityLevel;var ee=re(g.expirationTime<=$);$=t.unstable_now(),typeof ee=="function"?g.callback=ee:g===n(c)&&r(c),T($)}else r(c);g=n(c)}if(g!==null)var ce=!0;else{var se=n(u);se!==null&&X(D,se.startTime-$),ce=!1}return ce}finally{g=null,m=K,x=!1}}var M=!1,w=null,y=-1,I=5,A=-1;function C(){return!(t.unstable_now()-A<I)}function R(){if(w!==null){var N=t.unstable_now();A=N;var $=!0;try{$=w(!0,N)}finally{$?S():(M=!1,w=null)}}else M=!1}var S;if(typeof v=="function")S=function(){v(R)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=R,S=function(){W.postMessage(null)}}else S=function(){P(R,0)};function Q(N){w=N,M||(M=!0,S())}function X(N,$){y=P(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){k||x||(k=!0,Q(j))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(N){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var K=m;m=$;try{return N()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=m;m=N;try{return $()}finally{m=K}},t.unstable_scheduleCallback=function(N,$,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=K+ee,N={id:f++,callback:$,priorityLevel:N,startTime:K,expirationTime:ee,sortIndex:-1},K>re?(N.sortIndex=K,e(u,N),n(c)===null&&N===n(u)&&(b?(E(y),y=-1):b=!0,X(D,K-re))):(N.sortIndex=ee,e(c,N),k||x||(k=!0,Q(j))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var $=m;return function(){var K=m;m=$;try{return N.apply(this,arguments)}finally{m=K}}}})(Dv);Nv.exports=Dv;var C1=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=B,Wt=C1;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vv=new Set,Pa={};function ei(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(Pa[t]=e,t=0;t<e.length;t++)Vv.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,R1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},vg={};function b1(t){return _h.call(vg,t)?!0:_h.call(_g,t)?!1:R1.test(t)?vg[t]=!0:(_g[t]=!0,!1)}function P1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N1(t,e,n,r){if(e===null||typeof e>"u"||P1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hf=/[\-:]([a-z])/g;function Gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hf,Gf);ht[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hf,Gf);ht[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hf,Gf);ht[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,r){var s=ht.hasOwnProperty(e)?ht[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N1(e,n,s,r)&&(n=null),r||s===null?b1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),wg=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Cd;function oa(t){if(Cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var kd=!1;function Rd(t,e){if(!t||kd)return"";kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{kd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function D1(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Rd(t.type,!1),t;case 11:return t=Rd(t.type.render,!1),t;case 1:return t=Rd(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ti:return"Portal";case vh:return"Profiler";case Qf:return"StrictMode";case wh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jf:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function V1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O1(t){var e=jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ml(t){t._valueTracker||(t._valueTracker=O1(t))}function Fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uv(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function xh(t,e){Uv(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(aa(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function zv(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $v(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$v(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ll,Bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M1=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){M1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function qv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function Wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=qv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var L1=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(L1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,Li=null,ji=null;function Sg(t){if(t=ol(t)){if(typeof Ph!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Cu(e),Ph(t.stateNode,t.type,e))}}function Hv(t){Li?ji?ji.push(t):ji=[t]:Li=t}function Gv(){if(Li){var t=Li,e=ji;if(ji=Li=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function Kv(t,e){return t(e)}function Qv(){}var bd=!1;function Yv(t,e,n){if(bd)return t(e,n);bd=!0;try{return Kv(t,e,n)}finally{bd=!1,(Li!==null||ji!==null)&&(Qv(),Gv())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Nh=!1;if(sr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Nh=!1}function j1(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ya=!1,Rc=null,bc=!1,Dh=null,F1={onError:function(t){ya=!0,Rc=t}};function U1(t,e,n,r,s,i,o,l,c){ya=!1,Rc=null,j1.apply(F1,arguments)}function z1(t,e,n,r,s,i,o,l,c){if(U1.apply(this,arguments),ya){if(ya){var u=Rc;ya=!1,Rc=null}else throw Error(q(198));bc||(bc=!0,Dh=u)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(ti(t)!==t)throw Error(q(188))}function $1(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ag(s),t;if(i===r)return Ag(s),e;i=i.sibling}throw Error(q(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function Xv(t){return t=$1(t),t!==null?Zv(t):null}function Zv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zv(t);if(e!==null)return e;t=t.sibling}return null}var e0=Wt.unstable_scheduleCallback,Cg=Wt.unstable_cancelCallback,B1=Wt.unstable_shouldYield,q1=Wt.unstable_requestPaint,We=Wt.unstable_now,W1=Wt.unstable_getCurrentPriorityLevel,Zf=Wt.unstable_ImmediatePriority,t0=Wt.unstable_UserBlockingPriority,Pc=Wt.unstable_NormalPriority,H1=Wt.unstable_LowPriority,n0=Wt.unstable_IdlePriority,Tu=null,Vn=null;function G1(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Y1,K1=Math.log,Q1=Math.LN2;function Y1(t){return t>>>=0,t===0?32:31-(K1(t)/Q1|0)|0}var jl=64,Fl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=la(l):(i&=o,i!==0&&(r=la(i)))}else o=n&~s,o!==0?r=la(o):i!==0&&(r=la(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),s=1<<n,r|=t[n],e&=~s;return r}function J1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-mn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=J1(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function Z1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ie=0;function s0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,tp,o0,a0,l0,Oh=!1,Ul=[],zr=null,$r=null,Br=null,Va=new Map,Oa=new Map,Nr=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Yo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ol(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function tx(t,e,n,r,s){switch(e){case"focusin":return zr=Yo(zr,t,e,n,r,s),!0;case"dragenter":return $r=Yo($r,t,e,n,r,s),!0;case"mouseover":return Br=Yo(Br,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Va.set(i,Yo(Va.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Oa.set(i,Yo(Oa.get(i)||null,t,e,n,r,s)),!0}return!1}function c0(t){var e=Ns(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=Jv(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ol(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){ac(t)&&n.delete(e)}function nx(){Oh=!1,zr!==null&&ac(zr)&&(zr=null),$r!==null&&ac($r)&&($r=null),Br!==null&&ac(Br)&&(Br=null),Va.forEach(Rg),Oa.forEach(Rg)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,nx)))}function Ma(t){function e(s){return Jo(s,t)}if(0<Ul.length){Jo(Ul[0],t);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zr!==null&&Jo(zr,t),$r!==null&&Jo($r,t),Br!==null&&Jo(Br,t),Va.forEach(e),Oa.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&Nr.shift()}var Fi=fr.ReactCurrentBatchConfig,Dc=!0;function rx(t,e,n,r){var s=Ie,i=Fi.transition;Fi.transition=null;try{Ie=1,np(t,e,n,r)}finally{Ie=s,Fi.transition=i}}function sx(t,e,n,r){var s=Ie,i=Fi.transition;Fi.transition=null;try{Ie=4,np(t,e,n,r)}finally{Ie=s,Fi.transition=i}}function np(t,e,n,r){if(Dc){var s=Mh(t,e,n,r);if(s===null)zd(t,e,r,Vc,n),kg(t,r);else if(tx(s,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<ex.indexOf(t)){for(;s!==null;){var i=ol(s);if(i!==null&&i0(i),i=Mh(t,e,n,r),i===null&&zd(t,e,r,Vc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zd(t,e,r,null,n)}}var Vc=null;function Mh(t,e,n,r){if(Vc=null,t=Xf(r),t=Ns(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case Zf:return 1;case t0:return 4;case Pc:case H1:return 16;case n0:return 536870912;default:return 16}default:return 16}}var jr=null,rp=null,lc=null;function d0(){if(lc)return lc;var t,e=rp,n=e.length,r,s="value"in jr?jr.value:jr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return lc=s.slice(t,1<r?1-r:void 0)}function cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function bg(){return!1}function Gt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zl:bg,this.isPropagationStopped=bg,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Gt(ho),il=je({},ho,{view:0,detail:0}),ix=Gt(il),Nd,Dd,Xo,xu=je({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Nd=t.screenX-Xo.screenX,Dd=t.screenY-Xo.screenY):Dd=Nd=0,Xo=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:Dd}}),Pg=Gt(xu),ox=je({},xu,{dataTransfer:0}),ax=Gt(ox),lx=je({},il,{relatedTarget:0}),Vd=Gt(lx),cx=je({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Gt(cx),dx=je({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hx=Gt(dx),fx=je({},ho,{data:0}),Ng=Gt(fx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gx[t])?!!e[t]:!1}function ip(){return yx}var _x=je({},il,{key:function(t){if(t.key){var e=px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vx=Gt(_x),wx=je({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Gt(wx),Ex=je({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),Ix=Gt(Ex),Tx=je({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Gt(Tx),Sx=je({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Gt(Sx),Cx=[9,13,27,32],op=sr&&"CompositionEvent"in window,_a=null;sr&&"documentMode"in document&&(_a=document.documentMode);var kx=sr&&"TextEvent"in window&&!_a,h0=sr&&(!op||_a&&8<_a&&11>=_a),Vg=" ",Og=!1;function f0(t,e){switch(t){case"keyup":return Cx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function Rx(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(Og=!0,Vg);case"textInput":return t=e.data,t===Vg&&Og?null:t;default:return null}}function bx(t,e){if(Si)return t==="compositionend"||!op&&f0(t,e)?(t=d0(),lc=rp=jr=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Px[t.type]:e==="textarea"}function m0(t,e,n,r){Hv(r),e=Oc(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var va=null,La=null;function Nx(t){A0(t,0)}function Su(t){var e=ki(t);if(Fv(e))return t}function Dx(t,e){if(t==="change")return e}var g0=!1;if(sr){var Od;if(sr){var Md="oninput"in document;if(!Md){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),Md=typeof Lg.oninput=="function"}Od=Md}else Od=!1;g0=Od&&(!document.documentMode||9<document.documentMode)}function jg(){va&&(va.detachEvent("onpropertychange",y0),La=va=null)}function y0(t){if(t.propertyName==="value"&&Su(La)){var e=[];m0(e,La,t,Xf(t)),Yv(Nx,e)}}function Vx(t,e,n){t==="focusin"?(jg(),va=e,La=n,va.attachEvent("onpropertychange",y0)):t==="focusout"&&jg()}function Ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(La)}function Mx(t,e){if(t==="click")return Su(e)}function Lx(t,e){if(t==="input"||t==="change")return Su(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:jx;function ja(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_h.call(e,s)||!_n(t[s],e[s]))return!1}return!0}function Fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ug(t,e){var n=Fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fg(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fx(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ug(n,i);var o=Ug(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=sr&&"documentMode"in document&&11>=document.documentMode,Ai=null,Lh=null,wa=null,jh=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jh||Ai==null||Ai!==kc(r)||(r=Ai,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wa&&ja(wa,r)||(wa=r,r=Oc(Lh,"onSelect"),0<r.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},Ld={},w0={};sr&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function Au(t){if(Ld[t])return Ld[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return Ld[t]=e[n];return t}var E0=Au("animationend"),I0=Au("animationiteration"),T0=Au("animationstart"),x0=Au("transitionend"),S0=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(t,e){S0.set(t,e),ei(e,[t])}for(var jd=0;jd<$g.length;jd++){var Fd=$g[jd],zx=Fd.toLowerCase(),$x=Fd[0].toUpperCase()+Fd.slice(1);as(zx,"on"+$x)}as(E0,"onAnimationEnd");as(I0,"onAnimationIteration");as(T0,"onAnimationStart");as("dblclick","onDoubleClick");as("focusin","onFocus");as("focusout","onBlur");as(x0,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,z1(r,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Bg(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Bg(s,l,u),i=c}}}if(bc)throw t=Dh,bc=!1,Dh=null,t}function Pe(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(C0(e,t,2,!1),n.add(r))}function Ud(t,e,n){var r=0;e&&(r|=4),C0(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[Bl]){t[Bl]=!0,Vv.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,Ud("selectionchange",!1,e))}}function C0(t,e,n,r){switch(u0(e)){case 1:var s=rx;break;case 4:s=sx;break;default:s=np}n=s.bind(null,e,n,t),s=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ns(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Yv(function(){var u=i,f=Xf(n),g=[];e:{var m=S0.get(t);if(m!==void 0){var x=sp,k=t;switch(t){case"keypress":if(cc(n)===0)break e;case"keydown":case"keyup":x=vx;break;case"focusin":k="focus",x=Vd;break;case"focusout":k="blur",x=Vd;break;case"beforeblur":case"afterblur":x=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ix;break;case E0:case I0:case T0:x=ux;break;case x0:x=xx;break;case"scroll":x=ix;break;case"wheel":x=Ax;break;case"copy":case"cut":case"paste":x=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Dg}var b=(e&4)!==0,P=!b&&t==="scroll",E=b?m!==null?m+"Capture":null:m;b=[];for(var v=u,T;v!==null;){T=v;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,E!==null&&(D=Da(v,E),D!=null&&b.push(Ua(v,D,T)))),P)break;v=v.return}0<b.length&&(m=new x(m,k,null,n,f),g.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==bh&&(k=n.relatedTarget||n.fromElement)&&(Ns(k)||k[ir]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?Ns(k):null,k!==null&&(P=ti(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(b=Pg,D="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=Dg,D="onPointerLeave",E="onPointerEnter",v="pointer"),P=x==null?m:ki(x),T=k==null?m:ki(k),m=new b(D,v+"leave",x,n,f),m.target=P,m.relatedTarget=T,D=null,Ns(f)===u&&(b=new b(E,v+"enter",k,n,f),b.target=T,b.relatedTarget=P,D=b),P=D,x&&k)t:{for(b=x,E=k,v=0,T=b;T;T=_i(T))v++;for(T=0,D=E;D;D=_i(D))T++;for(;0<v-T;)b=_i(b),v--;for(;0<T-v;)E=_i(E),T--;for(;v--;){if(b===E||E!==null&&b===E.alternate)break t;b=_i(b),E=_i(E)}b=null}else b=null;x!==null&&qg(g,m,x,b,!1),k!==null&&P!==null&&qg(g,P,k,b,!0)}}e:{if(m=u?ki(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=Dx;else if(Mg(m))if(g0)j=Lx;else{j=Ox;var M=Vx}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Mx);if(j&&(j=j(t,u))){m0(g,j,n,f);break e}M&&M(t,m,u),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Sh(m,"number",m.value)}switch(M=u?ki(u):window,t){case"focusin":(Mg(M)||M.contentEditable==="true")&&(Ai=M,Lh=u,wa=null);break;case"focusout":wa=Lh=Ai=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,zg(g,n,f);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":zg(g,n,f)}var w;if(op)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Si?f0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(h0&&n.locale!=="ko"&&(Si||y!=="onCompositionStart"?y==="onCompositionEnd"&&Si&&(w=d0()):(jr=f,rp="value"in jr?jr.value:jr.textContent,Si=!0)),M=Oc(u,y),0<M.length&&(y=new Ng(y,t,null,n,f),g.push({event:y,listeners:M}),w?y.data=w:(w=p0(n),w!==null&&(y.data=w)))),(w=kx?Rx(t,n):bx(t,n))&&(u=Oc(u,"onBeforeInput"),0<u.length&&(f=new Ng("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:u}),f.data=w))}A0(g,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Da(t,n),i!=null&&r.unshift(Ua(t,i,s)),i=Da(t,e),i!=null&&r.push(Ua(t,i,s))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Da(n,i),c!=null&&o.unshift(Ua(n,c,l))):s||(c=Da(n,i),c!=null&&o.push(Ua(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Wx,"")}function ql(t,e,n){if(e=Wg(e),Wg(t)!==e&&n)throw Error(q(425))}function Mc(){}var Fh=null,Uh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(Kx)}:$h;function Kx(t){setTimeout(function(){throw t})}function $d(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ma(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Dn="__reactFiber$"+fo,za="__reactProps$"+fo,ir="__reactContainer$"+fo,Bh="__reactEvents$"+fo,Qx="__reactListeners$"+fo,Yx="__reactHandles$"+fo;function Ns(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[Dn])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[Dn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Cu(t){return t[za]||null}var qh=[],Ri=-1;function ls(t){return{current:t}}function De(t){0>Ri||(t.current=qh[Ri],qh[Ri]=null,Ri--)}function ke(t,e){Ri++,qh[Ri]=t.current,t.current=e}var es={},wt=ls(es),Dt=ls(!1),zs=es;function Ji(t,e){var n=t.type.contextTypes;if(!n)return es;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Vt(t){return t=t.childContextTypes,t!=null}function Lc(){De(Dt),De(wt)}function Kg(t,e,n){if(wt.current!==es)throw Error(q(168));ke(wt,e),ke(Dt,n)}function k0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(q(108,V1(t)||"Unknown",s));return je({},n,r)}function jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||es,zs=wt.current,ke(wt,t),ke(Dt,Dt.current),!0}function Qg(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=k0(t,e,zs),r.__reactInternalMemoizedMergedChildContext=t,De(Dt),De(wt),ke(wt,t)):De(Dt),ke(Dt,n)}var Yn=null,ku=!1,Bd=!1;function R0(t){Yn===null?Yn=[t]:Yn.push(t)}function Jx(t){ku=!0,R0(t)}function cs(){if(!Bd&&Yn!==null){Bd=!0;var t=0,e=Ie;try{var n=Yn;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,ku=!1}catch(s){throw Yn!==null&&(Yn=Yn.slice(t+1)),e0(Zf,cs),s}finally{Ie=e,Bd=!1}}return null}var bi=[],Pi=0,Fc=null,Uc=0,Qt=[],Yt=0,$s=null,Jn=1,Xn="";function ks(t,e){bi[Pi++]=Uc,bi[Pi++]=Fc,Fc=t,Uc=e}function b0(t,e,n){Qt[Yt++]=Jn,Qt[Yt++]=Xn,Qt[Yt++]=$s,$s=t;var r=Jn;t=Xn;var s=32-mn(r)-1;r&=~(1<<s),n+=1;var i=32-mn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Jn=1<<32-mn(e)+s|n<<s|r,Xn=i+t}else Jn=1<<i|n<<s|r,Xn=t}function lp(t){t.return!==null&&(ks(t,1),b0(t,1,0))}function cp(t){for(;t===Fc;)Fc=bi[--Pi],bi[Pi]=null,Uc=bi[--Pi],bi[Pi]=null;for(;t===$s;)$s=Qt[--Yt],Qt[Yt]=null,Xn=Qt[--Yt],Qt[Yt]=null,Jn=Qt[--Yt],Qt[Yt]=null}var Bt=null,zt=null,Ve=!1,hn=null;function P0(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,zt=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$s!==null?{id:Jn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,zt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(Ve){var e=zt;if(e){var n=e;if(!Yg(t,e)){if(Wh(t))throw Error(q(418));e=qr(n.nextSibling);var r=Bt;e&&Yg(t,e)?P0(r,n):(t.flags=t.flags&-4097|2,Ve=!1,Bt=t)}}else{if(Wh(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ve=!1,Bt=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Wl(t){if(t!==Bt)return!1;if(!Ve)return Jg(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=zt)){if(Wh(t))throw N0(),Error(q(418));for(;e;)P0(t,e),e=qr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Bt?qr(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=zt;t;)t=qr(t.nextSibling)}function Xi(){zt=Bt=null,Ve=!1}function up(t){hn===null?hn=[t]:hn.push(t)}var Xx=fr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function D0(t){function e(E,v){if(t){var T=E.deletions;T===null?(E.deletions=[v],E.flags|=16):T.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function s(E,v){return E=Kr(E,v),E.index=0,E.sibling=null,E}function i(E,v,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<v?(E.flags|=2,v):T):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,T,D){return v===null||v.tag!==6?(v=Yd(T,E.mode,D),v.return=E,v):(v=s(v,T),v.return=E,v)}function c(E,v,T,D){var j=T.type;return j===xi?f(E,v,T.props.children,D,T.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===br&&Xg(j)===v.type)?(D=s(v,T.props),D.ref=Zo(E,v,T),D.return=E,D):(D=gc(T.type,T.key,T.props,null,E.mode,D),D.ref=Zo(E,v,T),D.return=E,D)}function u(E,v,T,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Jd(T,E.mode,D),v.return=E,v):(v=s(v,T.children||[]),v.return=E,v)}function f(E,v,T,D,j){return v===null||v.tag!==7?(v=js(T,E.mode,D,j),v.return=E,v):(v=s(v,T),v.return=E,v)}function g(E,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yd(""+v,E.mode,T),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ol:return T=gc(v.type,v.key,v.props,null,E.mode,T),T.ref=Zo(E,null,v),T.return=E,T;case Ti:return v=Jd(v,E.mode,T),v.return=E,v;case br:var D=v._init;return g(E,D(v._payload),T)}if(aa(v)||Ko(v))return v=js(v,E.mode,T,null),v.return=E,v;Hl(E,v)}return null}function m(E,v,T,D){var j=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:l(E,v,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ol:return T.key===j?c(E,v,T,D):null;case Ti:return T.key===j?u(E,v,T,D):null;case br:return j=T._init,m(E,v,j(T._payload),D)}if(aa(T)||Ko(T))return j!==null?null:f(E,v,T,D,null);Hl(E,T)}return null}function x(E,v,T,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(T)||null,l(v,E,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ol:return E=E.get(D.key===null?T:D.key)||null,c(v,E,D,j);case Ti:return E=E.get(D.key===null?T:D.key)||null,u(v,E,D,j);case br:var M=D._init;return x(E,v,T,M(D._payload),j)}if(aa(D)||Ko(D))return E=E.get(T)||null,f(v,E,D,j,null);Hl(v,D)}return null}function k(E,v,T,D){for(var j=null,M=null,w=v,y=v=0,I=null;w!==null&&y<T.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var A=m(E,w,T[y],D);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(E,w),v=i(A,v,y),M===null?j=A:M.sibling=A,M=A,w=I}if(y===T.length)return n(E,w),Ve&&ks(E,y),j;if(w===null){for(;y<T.length;y++)w=g(E,T[y],D),w!==null&&(v=i(w,v,y),M===null?j=w:M.sibling=w,M=w);return Ve&&ks(E,y),j}for(w=r(E,w);y<T.length;y++)I=x(w,E,y,T[y],D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),v=i(I,v,y),M===null?j=I:M.sibling=I,M=I);return t&&w.forEach(function(C){return e(E,C)}),Ve&&ks(E,y),j}function b(E,v,T,D){var j=Ko(T);if(typeof j!="function")throw Error(q(150));if(T=j.call(T),T==null)throw Error(q(151));for(var M=j=null,w=v,y=v=0,I=null,A=T.next();w!==null&&!A.done;y++,A=T.next()){w.index>y?(I=w,w=null):I=w.sibling;var C=m(E,w,A.value,D);if(C===null){w===null&&(w=I);break}t&&w&&C.alternate===null&&e(E,w),v=i(C,v,y),M===null?j=C:M.sibling=C,M=C,w=I}if(A.done)return n(E,w),Ve&&ks(E,y),j;if(w===null){for(;!A.done;y++,A=T.next())A=g(E,A.value,D),A!==null&&(v=i(A,v,y),M===null?j=A:M.sibling=A,M=A);return Ve&&ks(E,y),j}for(w=r(E,w);!A.done;y++,A=T.next())A=x(w,E,y,A.value,D),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?y:A.key),v=i(A,v,y),M===null?j=A:M.sibling=A,M=A);return t&&w.forEach(function(R){return e(E,R)}),Ve&&ks(E,y),j}function P(E,v,T,D){if(typeof T=="object"&&T!==null&&T.type===xi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ol:e:{for(var j=T.key,M=v;M!==null;){if(M.key===j){if(j=T.type,j===xi){if(M.tag===7){n(E,M.sibling),v=s(M,T.props.children),v.return=E,E=v;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===br&&Xg(j)===M.type){n(E,M.sibling),v=s(M,T.props),v.ref=Zo(E,M,T),v.return=E,E=v;break e}n(E,M);break}else e(E,M);M=M.sibling}T.type===xi?(v=js(T.props.children,E.mode,D,T.key),v.return=E,E=v):(D=gc(T.type,T.key,T.props,null,E.mode,D),D.ref=Zo(E,v,T),D.return=E,E=D)}return o(E);case Ti:e:{for(M=T.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(E,v.sibling),v=s(v,T.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Jd(T,E.mode,D),v.return=E,E=v}return o(E);case br:return M=T._init,P(E,v,M(T._payload),D)}if(aa(T))return k(E,v,T,D);if(Ko(T))return b(E,v,T,D);Hl(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(E,v.sibling),v=s(v,T),v.return=E,E=v):(n(E,v),v=Yd(T,E.mode,D),v.return=E,E=v),o(E)):n(E,v)}return P}var Zi=D0(!0),V0=D0(!1),zc=ls(null),$c=null,Ni=null,dp=null;function hp(){dp=Ni=$c=null}function fp(t){var e=zc.current;De(zc),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){$c=t,dp=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if($c===null)throw Error(q(308));Ni=t,$c.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var Ds=null;function pp(t){Ds===null?Ds=[t]:Ds.push(t)}function O0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,pp(e)):(n.next=s.next,s.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,or(t,n)}return s=r.interleaved,s===null?(e.next=e,pp(r)):(e.next=s.next,s.next=e),r.interleaved=e,or(t,n)}function uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function Zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,r){var s=t.updateQueue;Pr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var g=s.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,b=l;switch(m=e,x=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){g=k.call(x,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,m=typeof k=="function"?k.call(x,g,m):k,m==null)break e;g=je({},g,m);break e;case 2:Pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,c=g):f=f.next=x,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(c=g),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);qs|=o,t.lanes=o,t.memoizedState=g}}function ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(q(191,s));s.call(r)}}}var al={},On=ls(al),$a=ls(al),Ba=ls(al);function Vs(t){if(t===al)throw Error(q(174));return t}function gp(t,e){switch(ke(Ba,e),ke($a,t),ke(On,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}De(On),ke(On,e)}function eo(){De(On),De($a),De(Ba)}function L0(t){Vs(Ba.current);var e=Vs(On.current),n=Ch(e,t.type);e!==n&&(ke($a,t),ke(On,n))}function yp(t){$a.current===t&&(De(On),De($a))}var Me=ls(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function _p(){for(var t=0;t<qd.length;t++)qd[t]._workInProgressVersionPrimary=null;qd.length=0}var dc=fr.ReactCurrentDispatcher,Wd=fr.ReactCurrentBatchConfig,Bs=0,Le=null,Xe=null,it=null,Wc=!1,Ea=!1,qa=0,Zx=0;function pt(){throw Error(q(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,s,i){if(Bs=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dc.current=t===null||t.memoizedState===null?rS:sS,t=n(r,s),Ea){i=0;do{if(Ea=!1,qa=0,25<=i)throw Error(q(301));i+=1,it=Xe=null,e.updateQueue=null,dc.current=iS,t=n(r,s)}while(Ea)}if(dc.current=Hc,e=Xe!==null&&Xe.next!==null,Bs=0,it=Xe=Le=null,Wc=!1,e)throw Error(q(300));return t}function Ep(){var t=qa!==0;return qa=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Le.memoizedState=it=t:it=it.next=t,it}function rn(){if(Xe===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=it===null?Le.memoizedState:it.next;if(e!==null)it=e,Xe=t;else{if(t===null)throw Error(q(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?Le.memoizedState=it=t:it=it.next=t}return it}function Wa(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=rn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Xe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((Bs&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var g={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=g,o=r):c=c.next=g,Le.lanes|=f,qs|=f}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,_n(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,qs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gd(t){var e=rn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);_n(i,e.memoizedState)||(Nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function j0(){}function F0(t,e){var n=Le,r=rn(),s=e(),i=!_n(r.memoizedState,s);if(i&&(r.memoizedState=s,Nt=!0),r=r.queue,Ip($0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Ha(9,z0.bind(null,n,r,s,e),void 0,null),ot===null)throw Error(q(349));Bs&30||U0(n,e,s)}return s}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&q0(t)}function $0(t,e,n){return n(function(){B0(e)&&q0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function q0(t){var e=or(t,1);e!==null&&gn(e,t,1,-1)}function ty(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,Le,t),[e.memoizedState,t]}function Ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W0(){return rn().memoizedState}function hc(t,e,n,r){var s=Pn();Le.flags|=t,s.memoizedState=Ha(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var s=rn();r=r===void 0?null:r;var i=void 0;if(Xe!==null){var o=Xe.memoizedState;if(i=o.destroy,r!==null&&vp(r,o.deps)){s.memoizedState=Ha(e,n,i,r);return}}Le.flags|=t,s.memoizedState=Ha(1|e,n,i,r)}function ny(t,e){return hc(8390656,8,t,e)}function Ip(t,e){return Ru(2048,8,t,e)}function H0(t,e){return Ru(4,2,t,e)}function G0(t,e){return Ru(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,K0.bind(null,e,t),n)}function Tp(){}function Y0(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return Bs&21?(_n(n,e)||(n=r0(),Le.lanes|=n,qs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function eS(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Wd.transition;Wd.transition={};try{t(!1),e()}finally{Ie=n,Wd.transition=r}}function Z0(){return rn().memoizedState}function tS(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ew(t))tw(e,n);else if(n=O0(t,e,n,r),n!==null){var s=xt();gn(n,t,r,s),nw(n,e,r)}}function nS(t,e,n){var r=Gr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ew(t))tw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,_n(l,o)){var c=e.interleaved;c===null?(s.next=s,pp(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=O0(t,e,s,r),n!==null&&(s=xt(),gn(n,t,r,s),nw(n,e,r))}}function ew(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function tw(t,e){Ea=Wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var Hc={readContext:nn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},rS={readContext:nn,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hc(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return hc(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tS.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:ty,useDebugValue:Tp,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=ty(!1),e=t[0];return t=eS.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=Pn();if(Ve){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),ot===null)throw Error(q(349));Bs&30||U0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ny($0.bind(null,r,i,t),[t]),r.flags|=2048,Ha(9,z0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Pn(),e=ot.identifierPrefix;if(Ve){var n=Xn,r=Jn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sS={readContext:nn,useCallback:Y0,useContext:nn,useEffect:Ip,useImperativeHandle:Q0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:J0,useReducer:Hd,useRef:W0,useState:function(){return Hd(Wa)},useDebugValue:Tp,useDeferredValue:function(t){var e=rn();return X0(e,Xe.memoizedState,t)},useTransition:function(){var t=Hd(Wa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1},iS={readContext:nn,useCallback:Y0,useContext:nn,useEffect:Ip,useImperativeHandle:Q0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:J0,useReducer:Gd,useRef:W0,useState:function(){return Gd(Wa)},useDebugValue:Tp,useDeferredValue:function(t){var e=rn();return Xe===null?e.memoizedState=t:X0(e,Xe.memoizedState,t)},useTransition:function(){var t=Gd(Wa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=Gr(t),i=tr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(gn(e,t,s,r),uc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=Gr(t),i=tr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Wr(t,i,s),e!==null&&(gn(e,t,s,r),uc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=Gr(t),s=tr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Wr(t,s,r),e!==null&&(gn(e,t,r,n),uc(e,t,r))}};function ry(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ja(n,r)||!ja(s,i):!0}function rw(t,e,n){var r=!1,s=es,i=e.contextType;return typeof i=="object"&&i!==null?i=nn(i):(s=Vt(e)?zs:wt.current,r=e.contextTypes,i=(r=r!=null)?Ji(t,s):es),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function Qh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},mp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=nn(i):(i=Vt(e)?zs:wt.current,s.context=Ji(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Kh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&bu.enqueueReplaceState(s,s.state,null),Bc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",r=e;do n+=D1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function sw(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kc||(Kc=!0,af=r),Yh(t,e)},n}function iw(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Yh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yh(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=wS.bind(null,t,e,n),e.then(t,t))}function oy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ay(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var aS=fr.ReactCurrentOwner,Nt=!1;function It(t,e,n,r){e.child=t===null?V0(e,null,n,r):Zi(e,t.child,n,r)}function ly(t,e,n,r,s){n=n.render;var i=e.ref;return Ui(e,s),r=wp(t,e,n,r,i,s),n=Ep(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(Ve&&n&&lp(e),e.flags|=1,It(t,e,r,s),e.child)}function cy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Pp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ow(t,e,i,r,s)):(t=gc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(o,r)&&t.ref===e.ref)return ar(t,e,s)}return e.flags|=1,t=Kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function ow(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ja(i,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,ar(t,e,s)}return Jh(t,e,n,r,s)}function aw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Vi,Ft),Ft|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Vi,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ke(Vi,Ft),Ft|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ke(Vi,Ft),Ft|=r;return It(t,e,s,n),e.child}function lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,n,r,s){var i=Vt(n)?zs:wt.current;return i=Ji(e,i),Ui(e,s),n=wp(t,e,n,r,i,s),r=Ep(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(Ve&&r&&lp(e),e.flags|=1,It(t,e,n,s),e.child)}function uy(t,e,n,r,s){if(Vt(n)){var i=!0;jc(e)}else i=!1;if(Ui(e,s),e.stateNode===null)fc(t,e),rw(e,n,r),Qh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Vt(n)?zs:wt.current,u=Ji(e,u));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&sy(e,o,r,u),Pr=!1;var m=e.memoizedState;o.state=m,Bc(e,r,o,s),c=e.memoizedState,l!==r||m!==c||Dt.current||Pr?(typeof f=="function"&&(Kh(e,n,f,r),c=e.memoizedState),(l=Pr||ry(e,n,l,r,m,c,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,M0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:un(e.type,l),o.props=u,g=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Vt(n)?zs:wt.current,c=Ji(e,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==c)&&sy(e,o,r,c),Pr=!1,m=e.memoizedState,o.state=m,Bc(e,r,o,s);var k=e.memoizedState;l!==g||m!==k||Dt.current||Pr?(typeof x=="function"&&(Kh(e,n,x,r),k=e.memoizedState),(u=Pr||ry(e,n,u,r,m,k,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,i,s)}function Xh(t,e,n,r,s,i){lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Qg(e,n,!1),ar(t,e,i);r=e.stateNode,aS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,i),e.child=Zi(e,null,l,i)):It(t,e,l,i),e.memoizedState=r.state,s&&Qg(e,n,!0),e.child}function cw(t){var e=t.stateNode;e.pendingContext?Kg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kg(t,e.context,!1),gp(t,e.containerInfo)}function dy(t,e,n,r,s){return Xi(),up(s),e.flags|=256,It(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function uw(t,e,n){var r=e.pendingProps,s=Me.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ke(Me,s&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Du(o,r,0,null),t=js(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ef(n),e.memoizedState=Zh,t):xp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return lS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Kr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Kr(l,i):(i=js(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return i=t.child,t=i.sibling,r=Kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xp(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&up(r),Zi(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Kd(Error(q(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Du({mode:"visible",children:r.children},s,0,null),i=js(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Zh,i);if(!(e.mode&1))return Gl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(q(419)),r=Kd(i,r,void 0),Gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Nt||l){if(r=ot,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,or(t,s),gn(r,t,s,-1))}return bp(),r=Kd(Error(q(421))),Gl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=ES.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,zt=qr(s.nextSibling),Bt=e,Ve=!0,hn=null,t!==null&&(Qt[Yt++]=Jn,Qt[Yt++]=Xn,Qt[Yt++]=$s,Jn=t.id,Xn=t.overflow,$s=e),e=xp(e,r.children),e.flags|=4096,e)}function hy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gh(t.return,e,n)}function Qd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function dw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(It(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hy(t,n,e);else if(t.tag===19)hy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Me,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&qc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qd(e,!0,n,null,i);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cS(t,e,n){switch(e.tag){case 3:cw(e),Xi();break;case 5:L0(e);break;case 1:Vt(e.type)&&jc(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ke(zc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?uw(t,e,n):(ke(Me,Me.current&1),t=ar(t,e,n),t!==null?t.sibling:null);ke(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,aw(t,e,n)}return ar(t,e,n)}var hw,tf,fw,pw;hw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};fw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vs(On.current);var i=null;switch(n){case"input":s=Th(t,s),r=Th(t,r),i=[];break;case"select":s=je({},s,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":s=Ah(t,s),r=Ah(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mc)}kh(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uS(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Vt(e.type)&&Lc(),mt(e),null;case 3:return r=e.stateNode,eo(),De(Dt),De(wt),_p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(uf(hn),hn=null))),tf(t,e),mt(e),null;case 5:yp(e);var s=Vs(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)fw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return mt(e),null}if(t=Vs(On.current),Wl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Dn]=e,r[za]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<ca.length;s++)Pe(ca[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Eg(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":Tg(r,i),Pe("invalid",r)}kh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ql(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ql(r.textContent,l,t),s=["children",""+l]):Pa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Ml(r),Ig(r,i,!0);break;case"textarea":Ml(r),xg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$v(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[za]=r,hw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rh(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<ca.length;s++)Pe(ca[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":Eg(t,r),s=Th(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=je({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Tg(t,r),s=Ah(t,r),Pe("invalid",t);break;default:s=r}kh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Wv(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Bv(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Na(t,c):typeof c=="number"&&Na(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pa.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Pe("scroll",t):c!=null&&Kf(t,i,c,o))}switch(n){case"input":Ml(t),Ig(t,r,!1);break;case"textarea":Ml(t),xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Mi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Vs(Ba.current),Vs(On.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(i=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ql(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return mt(e),null;case 13:if(De(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&zt!==null&&e.mode&1&&!(e.flags&128))N0(),Xi(),e.flags|=98560,i=!1;else if(i=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(q(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[Dn]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else hn!==null&&(uf(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Ze===0&&(Ze=3):bp())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return eo(),tf(t,e),t===null&&Fa(e.stateNode.containerInfo),mt(e),null;case 10:return fp(e.type._context),mt(e),null;case 17:return Vt(e.type)&&Lc(),mt(e),null;case 19:if(De(Me),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ea(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,ea(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Me,Me.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>no&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304)}else{if(!r)if(t=qc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ve)return mt(e),null}else 2*We()-i.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Me.current,ke(Me,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function dS(t,e){switch(cp(e),e.tag){case 1:return Vt(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),De(Dt),De(wt),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(De(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Me),null;case 4:return eo(),null;case 10:return fp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var Kl=!1,_t=!1,hS=typeof WeakSet=="function"?WeakSet:Set,J=null;function Di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function nf(t,e,n){try{n()}catch(r){ze(t,e,r)}}var fy=!1;function fS(t,e){if(Fh=Dc,t=v0(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,g=t,m=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===t)break t;if(m===n&&++u===s&&(l=o),m===i&&++f===r&&(c=o),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uh={focusedElem:t,selectionRange:n},Dc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,P=k.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:un(e.type,b),P);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(D){ze(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return k=fy,fy=!1,k}function Ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&nf(e,n,i)}s=s.next}while(s!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mw(t){var e=t.alternate;e!==null&&(t.alternate=null,mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[za],delete e[Bh],delete e[Qx],delete e[Yx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gw(t){return t.tag===5||t.tag===3||t.tag===4}function py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mc));else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var lt=null,dn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)yw(t,e,n),n=n.sibling}function yw(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:_t||Di(n,e);case 6:var r=lt,s=dn;lt=null,Ar(t,e,n),lt=r,dn=s,lt!==null&&(dn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(dn?(t=lt,n=n.stateNode,t.nodeType===8?$d(t.parentNode,n):t.nodeType===1&&$d(t,n),Ma(t)):$d(lt,n.stateNode));break;case 4:r=lt,s=dn,lt=n.stateNode.containerInfo,dn=!0,Ar(t,e,n),lt=r,dn=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&nf(n,e,o),s=s.next}while(s!==r)}Ar(t,e,n);break;case 1:if(!_t&&(Di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,e,l)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Ar(t,e,n),_t=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function my(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hS),e.forEach(function(r){var s=IS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:lt=l.stateNode,dn=!1;break e;case 3:lt=l.stateNode.containerInfo,dn=!0;break e;case 4:lt=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(lt===null)throw Error(q(160));yw(i,o,s),lt=null,dn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ze(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_w(e,t),e=e.sibling}function _w(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),kn(t),r&4){try{Ia(3,t,t.return),Pu(3,t)}catch(b){ze(t,t.return,b)}try{Ia(5,t,t.return)}catch(b){ze(t,t.return,b)}}break;case 1:cn(e,t),kn(t),r&512&&n!==null&&Di(n,n.return);break;case 5:if(cn(e,t),kn(t),r&512&&n!==null&&Di(n,n.return),t.flags&32){var s=t.stateNode;try{Na(s,"")}catch(b){ze(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Uv(s,i),Rh(l,o);var u=Rh(l,i);for(o=0;o<c.length;o+=2){var f=c[o],g=c[o+1];f==="style"?Wv(s,g):f==="dangerouslySetInnerHTML"?Bv(s,g):f==="children"?Na(s,g):Kf(s,f,g,u)}switch(l){case"input":xh(s,i);break;case"textarea":zv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Mi(s,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Mi(s,!!i.multiple,i.defaultValue,!0):Mi(s,!!i.multiple,i.multiple?[]:"",!1))}s[za]=i}catch(b){ze(t,t.return,b)}}break;case 6:if(cn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(q(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){ze(t,t.return,b)}}break;case 3:if(cn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(b){ze(t,t.return,b)}break;case 4:cn(e,t),kn(t);break;case 13:cn(e,t),kn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Cp=We())),r&4&&my(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||f,cn(e,t),_t=u):cn(e,t),kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(J=t,f=t.child;f!==null;){for(g=J=f;J!==null;){switch(m=J,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ia(4,m,m.return);break;case 1:Di(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(b){ze(r,n,b)}}break;case 5:Di(m,m.return);break;case 22:if(m.memoizedState!==null){yy(g);continue}}x!==null?(x.return=m,J=x):yy(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=qv("display",o))}catch(b){ze(t,t.return,b)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(b){ze(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:cn(e,t),kn(t),r&4&&my(t);break;case 21:break;default:cn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gw(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Na(s,""),r.flags&=-33);var i=py(t);of(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=py(t);sf(t,l,o);break;default:throw Error(q(161))}}catch(c){ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){J=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var s=J,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Kl;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||_t;l=Kl;var u=_t;if(Kl=o,(_t=c)&&!u)for(J=s;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null?_y(s):c!==null?(c.return=o,J=c):_y(s);for(;i!==null;)J=i,vw(i),i=i.sibling;J=s,Kl=l,_t=u}gy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,J=i):gy(t)}}function gy(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ey(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ey(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Ma(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}_t||e.flags&512&&rf(e)}catch(m){ze(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function yy(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function _y(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(c){ze(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){ze(e,s,c)}}var i=e.return;try{rf(e)}catch(c){ze(e,i,c)}break;case 5:var o=e.return;try{rf(e)}catch(c){ze(e,o,c)}}}catch(c){ze(e,e.return,c)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var mS=Math.ceil,Gc=fr.ReactCurrentDispatcher,Sp=fr.ReactCurrentOwner,en=fr.ReactCurrentBatchConfig,ve=0,ot=null,Ke=null,dt=0,Ft=0,Vi=ls(0),Ze=0,Ga=null,qs=0,Nu=0,Ap=0,Ta=null,bt=null,Cp=0,no=1/0,Qn=null,Kc=!1,af=null,Hr=null,Ql=!1,Fr=null,Qc=0,xa=0,lf=null,pc=-1,mc=0;function xt(){return ve&6?We():pc!==-1?pc:pc=We()}function Gr(t){return t.mode&1?ve&2&&dt!==0?dt&-dt:Xx.transition!==null?(mc===0&&(mc=r0()),mc):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function gn(t,e,n,r){if(50<xa)throw xa=0,lf=null,Error(q(185));sl(t,n,r),(!(ve&2)||t!==ot)&&(t===ot&&(!(ve&2)&&(Nu|=n),Ze===4&&Dr(t,dt)),Ot(t,r),n===1&&ve===0&&!(e.mode&1)&&(no=We()+500,ku&&cs()))}function Ot(t,e){var n=t.callbackNode;X1(t,e);var r=Nc(t,t===ot?dt:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?Jx(vy.bind(null,t)):R0(vy.bind(null,t)),Gx(function(){!(ve&6)&&cs()}),n=null;else{switch(s0(r)){case 1:n=Zf;break;case 4:n=t0;break;case 16:n=Pc;break;case 536870912:n=n0;break;default:n=Pc}n=Cw(n,ww.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ww(t,e){if(pc=-1,mc=0,ve&6)throw Error(q(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=Nc(t,t===ot?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yc(t,r);else{e=r;var s=ve;ve|=2;var i=Iw();(ot!==t||dt!==e)&&(Qn=null,no=We()+500,Ls(t,e));do try{_S();break}catch(l){Ew(t,l)}while(!0);hp(),Gc.current=i,ve=s,Ke!==null?e=0:(ot=null,dt=0,e=Ze)}if(e!==0){if(e===2&&(s=Vh(t),s!==0&&(r=s,e=cf(t,s))),e===1)throw n=Ga,Ls(t,0),Dr(t,r),Ot(t,We()),n;if(e===6)Dr(t,r);else{if(s=t.current.alternate,!(r&30)&&!gS(s)&&(e=Yc(t,r),e===2&&(i=Vh(t),i!==0&&(r=i,e=cf(t,i))),e===1))throw n=Ga,Ls(t,0),Dr(t,r),Ot(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Rs(t,bt,Qn);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Cp+500-We(),10<e)){if(Nc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$h(Rs.bind(null,t,bt,Qn),e);break}Rs(t,bt,Qn);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-mn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mS(r/1960))-r,10<r){t.timeoutHandle=$h(Rs.bind(null,t,bt,Qn),r);break}Rs(t,bt,Qn);break;case 5:Rs(t,bt,Qn);break;default:throw Error(q(329))}}}return Ot(t,We()),t.callbackNode===n?ww.bind(null,t):null}function cf(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Ls(t,e).flags|=256),t=Yc(t,e),t!==2&&(e=bt,bt=n,e!==null&&uf(e)),t}function uf(t){bt===null?bt=t:bt.push.apply(bt,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!_n(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Ap,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function vy(t){if(ve&6)throw Error(q(327));zi();var e=Nc(t,0);if(!(e&1))return Ot(t,We()),null;var n=Yc(t,e);if(t.tag!==0&&n===2){var r=Vh(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=Ga,Ls(t,0),Dr(t,e),Ot(t,We()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,bt,Qn),Ot(t,We()),null}function kp(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(no=We()+500,ku&&cs())}}function Ws(t){Fr!==null&&Fr.tag===0&&!(ve&6)&&zi();var e=ve;ve|=1;var n=en.transition,r=Ie;try{if(en.transition=null,Ie=1,t)return t()}finally{Ie=r,en.transition=n,ve=e,!(ve&6)&&cs()}}function Rp(){Ft=Vi.current,De(Vi)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hx(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lc();break;case 3:eo(),De(Dt),De(wt),_p();break;case 5:yp(r);break;case 4:eo();break;case 13:De(Me);break;case 19:De(Me);break;case 10:fp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(ot=t,Ke=t=Kr(t.current,null),dt=Ft=e,Ze=0,Ga=null,Ap=Nu=qs=0,bt=Ta=null,Ds!==null){for(e=0;e<Ds.length;e++)if(n=Ds[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ds=null}return t}function Ew(t,e){do{var n=Ke;try{if(hp(),dc.current=Hc,Wc){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Wc=!1}if(Bs=0,it=Xe=Le=null,Ea=!1,qa=0,Sp.current=null,n===null||n.return===null){Ze=1,Ga=e,Ke=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=dt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=oy(o);if(x!==null){x.flags&=-257,ay(x,o,l,i,e),x.mode&1&&iy(i,u,e),e=x,c=u;var k=e.updateQueue;if(k===null){var b=new Set;b.add(c),e.updateQueue=b}else k.add(c);break e}else{if(!(e&1)){iy(i,u,e),bp();break e}c=Error(q(426))}}else if(Ve&&l.mode&1){var P=oy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ay(P,o,l,i,e),up(to(c,l));break e}}i=c=to(c,l),Ze!==4&&(Ze=2),Ta===null?Ta=[i]:Ta.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=sw(i,c,e);Zg(i,E);break e;case 1:l=c;var v=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hr===null||!Hr.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=iw(i,l,e);Zg(i,D);break e}}i=i.return}while(i!==null)}xw(n)}catch(j){e=j,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Iw(){var t=Gc.current;return Gc.current=Hc,t===null?Hc:t}function bp(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(qs&268435455)&&!(Nu&268435455)||Dr(ot,dt)}function Yc(t,e){var n=ve;ve|=2;var r=Iw();(ot!==t||dt!==e)&&(Qn=null,Ls(t,e));do try{yS();break}catch(s){Ew(t,s)}while(!0);if(hp(),ve=n,Gc.current=r,Ke!==null)throw Error(q(261));return ot=null,dt=0,Ze}function yS(){for(;Ke!==null;)Tw(Ke)}function _S(){for(;Ke!==null&&!B1();)Tw(Ke)}function Tw(t){var e=Aw(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?xw(t):Ke=e,Sp.current=null}function xw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dS(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ke=null;return}}else if(n=uS(n,e,Ft),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Ze===0&&(Ze=5)}function Rs(t,e,n){var r=Ie,s=en.transition;try{en.transition=null,Ie=1,vS(t,e,n,r)}finally{en.transition=s,Ie=r}return null}function vS(t,e,n,r){do zi();while(Fr!==null);if(ve&6)throw Error(q(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Z1(t,i),t===ot&&(Ke=ot=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,Cw(Pc,function(){return zi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=en.transition,en.transition=null;var o=Ie;Ie=1;var l=ve;ve|=4,Sp.current=null,fS(t,n),_w(n,t),Fx(Uh),Dc=!!Fh,Uh=Fh=null,t.current=n,pS(n),q1(),ve=l,Ie=o,en.transition=i}else t.current=n;if(Ql&&(Ql=!1,Fr=t,Qc=s),i=t.pendingLanes,i===0&&(Hr=null),G1(n.stateNode),Ot(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Kc)throw Kc=!1,t=af,af=null,t;return Qc&1&&t.tag!==0&&zi(),i=t.pendingLanes,i&1?t===lf?xa++:(xa=0,lf=t):xa=0,cs(),null}function zi(){if(Fr!==null){var t=s0(Qc),e=en.transition,n=Ie;try{if(en.transition=null,Ie=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,Qc=0,ve&6)throw Error(q(331));var s=ve;for(ve|=4,J=t.current;J!==null;){var i=J,o=i.child;if(J.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(J=u;J!==null;){var f=J;switch(f.tag){case 0:case 11:case 15:Ia(8,f,i)}var g=f.child;if(g!==null)g.return=f,J=g;else for(;J!==null;){f=J;var m=f.sibling,x=f.return;if(mw(f),f===u){J=null;break}if(m!==null){m.return=x,J=m;break}J=x}}}var k=i.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}J=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,J=o;else e:for(;J!==null;){if(i=J,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ia(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,J=E;break e}J=i.return}}var v=t.current;for(J=v;J!==null;){o=J;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,J=T;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(j){ze(l,l.return,j)}if(l===o){J=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,J=D;break e}J=l.return}}if(ve=s,cs(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{Ie=n,en.transition=e}}return!1}function wy(t,e,n){e=to(n,e),e=sw(t,e,1),t=Wr(t,e,1),e=xt(),t!==null&&(sl(t,1,e),Ot(t,e))}function ze(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=to(n,t),t=iw(e,t,1),e=Wr(e,t,1),t=xt(),e!==null&&(sl(e,1,t),Ot(e,t));break}}e=e.return}}function wS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(dt&n)===n&&(Ze===4||Ze===3&&(dt&130023424)===dt&&500>We()-Cp?Ls(t,0):Ap|=n),Ot(t,e)}function Sw(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=xt();t=or(t,e),t!==null&&(sl(t,e,n),Ot(t,n))}function ES(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sw(t,n)}function IS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),Sw(t,n)}var Aw;Aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,cS(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Ve&&e.flags&1048576&&b0(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fc(t,e),t=e.pendingProps;var s=Ji(e,wt.current);Ui(e,n),s=wp(null,e,r,t,s,n);var i=Ep();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(i=!0,jc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mp(e),s.updater=bu,e.stateNode=s,s._reactInternals=e,Qh(e,r,t,n),e=Xh(null,e,r,!0,i,n)):(e.tag=0,Ve&&i&&lp(e),It(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=xS(r),t=un(r,t),s){case 0:e=Jh(null,e,r,t,n);break e;case 1:e=uy(null,e,r,t,n);break e;case 11:e=ly(null,e,r,t,n);break e;case 14:e=cy(null,e,r,un(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Jh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),uy(t,e,r,s,n);case 3:e:{if(cw(e),t===null)throw Error(q(387));r=e.pendingProps,i=e.memoizedState,s=i.element,M0(t,e),Bc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=to(Error(q(423)),e),e=dy(t,e,r,n,s);break e}else if(r!==s){s=to(Error(q(424)),e),e=dy(t,e,r,n,s);break e}else for(zt=qr(e.stateNode.containerInfo.firstChild),Bt=e,Ve=!0,hn=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===s){e=ar(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return L0(e),t===null&&Hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,zh(r,s)?o=null:i!==null&&zh(r,i)&&(e.flags|=32),lw(t,e),It(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return uw(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),ly(t,e,r,s,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ke(zc,r._currentValue),r._currentValue=o,i!==null)if(_n(i.value,o)){if(i.children===s.children&&!Dt.current){e=ar(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=tr(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Gh(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}It(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ui(e,n),s=nn(s),r=r(s),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),cy(t,e,r,s,n);case 15:return ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),fc(t,e),e.tag=1,Vt(r)?(t=!0,jc(e)):t=!1,Ui(e,n),rw(e,r,s),Qh(e,r,s,n),Xh(null,e,r,!0,t,n);case 19:return dw(t,e,n);case 22:return aw(t,e,n)}throw Error(q(156,e.tag))};function Cw(t,e){return e0(t,e)}function TS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new TS(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xS(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Jf)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return js(n.children,s,i,e);case Qf:o=8,s|=8;break;case vh:return t=Zt(12,n,e,s|2),t.elementType=vh,t.lanes=i,t;case wh:return t=Zt(13,n,e,s),t.elementType=wh,t.lanes=i,t;case Eh:return t=Zt(19,n,e,s),t.elementType=Eh,t.lanes=i,t;case Lv:return Du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:o=10;break e;case Mv:o=9;break e;case Yf:o=11;break e;case Jf:o=14;break e;case br:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function js(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=Lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Yd(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Jd(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pd(0),this.expirationTimes=Pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,r,s,i,o,l,c){return t=new SS(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(i),t}function AS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kw(t){if(!t)return es;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Vt(n))return k0(t,n,e)}return e}function Rw(t,e,n,r,s,i,o,l,c){return t=Np(n,r,!0,t,s,i,o,l,c),t.context=kw(null),n=t.current,r=xt(),s=Gr(n),i=tr(r,s),i.callback=e??null,Wr(n,i,s),t.current.lanes=s,sl(t,s,r),Ot(t,r),t}function Vu(t,e,n,r){var s=e.current,i=xt(),o=Gr(s);return n=kw(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(s,e,o),t!==null&&(gn(t,s,o,i),uc(t,s,o)),o}function Jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){Ey(t,e),(t=t.alternate)&&Ey(t,e)}function CS(){return null}var bw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vp(t){this._internalRoot=t}Ou.prototype.render=Vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Vu(t,e,null,null)};Ou.prototype.unmount=Vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ws(function(){Vu(null,t,null,null)}),e[ir]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&c0(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function kS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Jc(o);i.call(u)}}var o=Rw(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[ir]=o.current,Fa(t.nodeType===8?t.parentNode:t),Ws(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Jc(c);l.call(u)}}var c=Np(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=c,t[ir]=c.current,Fa(t.nodeType===8?t.parentNode:t),Ws(function(){Vu(e,c,n,r)}),c}function Lu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Jc(o);l.call(c)}}Vu(e,o,t,s)}else o=kS(n,e,t,s,r);return Jc(o)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(ep(e,n|1),Ot(e,We()),!(ve&6)&&(no=We()+500,cs()))}break;case 13:Ws(function(){var r=or(t,1);if(r!==null){var s=xt();gn(r,t,1,s)}}),Dp(t,1)}};tp=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=xt();gn(e,t,134217728,n)}Dp(t,134217728)}};o0=function(t){if(t.tag===13){var e=Gr(t),n=or(t,e);if(n!==null){var r=xt();gn(n,t,e,r)}Dp(t,e)}};a0=function(){return Ie};l0=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Ph=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Cu(r);if(!s)throw Error(q(90));Fv(r),xh(r,s)}}}break;case"textarea":zv(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};Kv=kp;Qv=Ws;var RS={usingClientEntryPoint:!1,Events:[ol,ki,Cu,Hv,Gv,kp]},ta={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xv(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||CS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Tu=Yl.inject(bS),Vn=Yl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RS;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(q(200));return AS(t,e,null,n)};Ht.createRoot=function(t,e){if(!Op(t))throw Error(q(299));var n=!1,r="",s=bw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,r,s),t[ir]=e.current,Fa(t.nodeType===8?t.parentNode:t),new Vp(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=Xv(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Ws(t)};Ht.hydrate=function(t,e,n){if(!Mu(e))throw Error(q(200));return Lu(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=bw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rw(e,null,t,1,n??null,s,!1,i,o),t[ir]=e.current,Fa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ou(e)};Ht.render=function(t,e,n){if(!Mu(e))throw Error(q(200));return Lu(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(q(40));return t._reactRootContainer?(Ws(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Ht.unstable_batchedUpdates=kp;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mu(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Lu(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function Pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pw)}catch(t){console.error(t)}}Pw(),Pv.exports=Ht;var Nw=Pv.exports,Ty=Nw;yh.createRoot=Ty.createRoot,yh.hydrateRoot=Ty.hydrateRoot;const PS=()=>{};var xy={};/**
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
 */const Dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,x=u&63;c||(x=64,o||(m=64)),r.push(n[f],n[g],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||g==null)throw new DS;const m=i<<2|l>>4;if(r.push(m),u!==64){const x=l<<4&240|u>>2;if(r.push(x),g!==64){const k=u<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VS=function(t){const e=Dw(t);return Vw.encodeByteArray(e,!0)},Xc=function(t){return VS(t).replace(/\./g,"")},Ow=function(t){try{return Vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MS=()=>OS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof xy>"u")return;const t=xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ow(t[1]);return e&&JSON.parse(e)},ju=()=>{try{return PS()||MS()||LS()||jS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mw=t=>{var e,n;return(n=(e=ju())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Lw=t=>{const e=Mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jw=()=>{var t;return(t=ju())==null?void 0:t.config},Fw=t=>{var e;return(e=ju())==null?void 0:e[`_${t}`]};/**
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
 */class FS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xc(JSON.stringify(n)),Xc(JSON.stringify(o)),""].join(".")}const Sa={};function US(){const t={prod:[],emulator:[]};for(const e of Object.keys(Sa))Sa[e]?t.emulator.push(e):t.prod.push(e);return t}function zS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Sy=!1;function Lp(t,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||Sa[t]===e||Sa[t]||Sy)return;Sa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=US().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,x){m.setAttribute("width","24"),m.setAttribute("id",x),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Sy=!0,o()},m}function f(m,x){m.setAttribute("id",x),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=zS(r),x=n("text"),k=document.getElementById(x)||document.createElement("span"),b=n("learnmore"),P=document.getElementById(b)||document.createElement("a"),E=n("preprendIcon"),v=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),f(P,b);const D=u();c(v,E),T.append(v,k,P,D),document.body.appendChild(T)}i?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $S(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function BS(){var e;const t=(e=ju())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GS(){return!BS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $w(){try{return typeof indexedDB=="object"}catch{return!1}}function Bw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function KS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const QS="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QS,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new on(s,l,r)}}function YS(t,e){return t.replace(JS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JS=/\{\$([^}]+)}/g;function XS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ay(i)&&Ay(o)){if(!zn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ay(t){return t!==null&&typeof t=="object"}/**
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
 */function ll(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function da(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZS(t,e){const n=new eA(t,e);return n.subscribe.bind(n)}class eA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xd),s.error===void 0&&(s.error=Xd),s.complete===void 0&&(s.complete=Xd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}/**
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
 */const nA=1e3,rA=2,sA=4*60*60*1e3,iA=.5;function Cy(t,e=nA,n=rA){const r=e*Math.pow(n,t),s=Math.round(iA*r*(Math.random()-.5)*2);return Math.min(sA,r+s)}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bs="[DEFAULT]";/**
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
 */class oA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lA(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aA(t){return t===bs?void 0:t}function lA(t){return t.instantiationMode==="EAGER"}/**
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
 */class cA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const uA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},dA=me.INFO,hA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},fA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=dA,this._logHandler=fA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const pA=(t,e)=>e.some(n=>t instanceof n);let ky,Ry;function mA(){return ky||(ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gA(){return Ry||(Ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qw=new WeakMap,df=new WeakMap,Ww=new WeakMap,Zd=new WeakMap,jp=new WeakMap;function yA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qw.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function _A(t){if(df.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vA(t){hf=t(hf)}function wA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),Qr(r)}:gA().includes(t)?function(...e){return t.apply(eh(this),e),Qr(qw.get(this))}:function(...e){return Qr(t.apply(eh(this),e))}}function EA(t){return typeof t=="function"?wA(t):(t instanceof IDBTransaction&&_A(t),pA(t,mA())?new Proxy(t,hf):t)}function Qr(t){if(t instanceof IDBRequest)return yA(t);if(Zd.has(t))return Zd.get(t);const e=EA(t);return e!==t&&(Zd.set(t,e),jp.set(e,t)),e}const eh=t=>jp.get(t);function Hw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Qr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qr(o.result),c.oldVersion,c.newVersion,Qr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const IA=["get","getKey","getAll","getAllKeys","count"],TA=["put","add","delete","clear"],th=new Map;function by(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=TA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return th.set(e,i),i}vA(t=>({...t,get:(e,n,r)=>by(e,n)||t.get(e,n,r),has:(e,n)=>!!by(e,n)||t.has(e,n)}));/**
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
 */class xA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",Py="0.14.9";/**
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
 */const lr=new Fu("@firebase/app"),AA="@firebase/app-compat",CA="@firebase/analytics-compat",kA="@firebase/analytics",RA="@firebase/app-check-compat",bA="@firebase/app-check",PA="@firebase/auth",NA="@firebase/auth-compat",DA="@firebase/database",VA="@firebase/data-connect",OA="@firebase/database-compat",MA="@firebase/functions",LA="@firebase/functions-compat",jA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",zA="@firebase/messaging-compat",$A="@firebase/performance",BA="@firebase/performance-compat",qA="@firebase/remote-config",WA="@firebase/remote-config-compat",HA="@firebase/storage",GA="@firebase/storage-compat",KA="@firebase/firestore",QA="@firebase/ai",YA="@firebase/firestore-compat",JA="firebase",XA="12.10.0";/**
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
 */const pf="[DEFAULT]",ZA={[ff]:"fire-core",[AA]:"fire-core-compat",[kA]:"fire-analytics",[CA]:"fire-analytics-compat",[bA]:"fire-app-check",[RA]:"fire-app-check-compat",[PA]:"fire-auth",[NA]:"fire-auth-compat",[DA]:"fire-rtdb",[VA]:"fire-data-connect",[OA]:"fire-rtdb-compat",[MA]:"fire-fn",[LA]:"fire-fn-compat",[jA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[zA]:"fire-fcm-compat",[$A]:"fire-perf",[BA]:"fire-perf-compat",[qA]:"fire-rc",[WA]:"fire-rc-compat",[HA]:"fire-gcs",[GA]:"fire-gcs-compat",[KA]:"fire-fst",[YA]:"fire-fst-compat",[QA]:"fire-vertex","fire-js":"fire-js",[JA]:"fire-js-all"};/**
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
 */const Zc=new Map,eC=new Map,mf=new Map;function Ny(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(mf.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,t);for(const n of Zc.values())Ny(n,t);for(const n of eC.values())Ny(n,t);return!0}function us(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new ri("app","Firebase",tC);/**
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
 */class nC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const si=XA;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Yr.create("bad-app-name",{appName:String(s)});if(n||(n=jw()),!n)throw Yr.create("no-options");const i=Zc.get(s);if(i){if(zn(n,i.options)&&zn(r,i.config))return i;throw Yr.create("duplicate-app",{appName:s})}const o=new cA(s);for(const c of mf.values())o.addComponent(c);const l=new nC(n,r,o);return Zc.set(s,l),l}function Uu(t=pf){const e=Zc.get(t);if(!e&&t===pf&&jw())return Gw();if(!e)throw Yr.create("no-app",{appName:t});return e}function Mt(t,e,n){let r=ZA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(o.join(" "));return}vn(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const rC="firebase-heartbeat-database",sC=1,Ka="firebase-heartbeat-store";let nh=null;function Kw(){return nh||(nh=Hw(rC,sC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),nh}async function iC(t){try{const n=(await Kw()).transaction(Ka),r=await n.objectStore(Ka).get(Qw(t));return await n.done,r}catch(e){if(e instanceof on)lr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function Dy(t,e){try{const r=(await Kw()).transaction(Ka,"readwrite");await r.objectStore(Ka).put(e,Qw(t)),await r.done}catch(n){if(n instanceof on)lr.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function Qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oC=1024,aC=30;class lC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aC){const o=dC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vy(),{heartbeatsToSend:r,unsentEntries:s}=cC(this._heartbeatsCache.heartbeats),i=Xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lr.warn(n),""}}}function Vy(){return new Date().toISOString().substring(0,10)}function cC(t,e=oC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Oy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?Bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Oy(t){return Xc(JSON.stringify({version:2,heartbeats:t})).length}function dC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hC(t){vn(new sn("platform-logger",e=>new xA(e),"PRIVATE")),vn(new sn("heartbeat",e=>new lC(e),"PRIVATE")),Mt(ff,Py,t),Mt(ff,Py,"esm2020"),Mt("fire-js","")}hC("");function Yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=Yw,Jw=new ri("auth","Firebase",Yw());/**
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
 */const eu=new Fu("@firebase/auth");function pC(t,...e){eu.logLevel<=me.WARN&&eu.warn(`Auth (${si}): ${t}`,...e)}function yc(t,...e){eu.logLevel<=me.ERROR&&eu.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Fp(t,...e)}function Mn(t,...e){return Fp(t,...e)}function Xw(t,e,n){const r={...fC(),[e]:n};return new ri("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Xw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function ie(t,e,...n){if(!t)throw Fp(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yc(e),new Error(e)}function cr(t,e){t||Zn(e)}/**
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
 */function gf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function mC(){return My()==="http:"||My()==="https:"}function My(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function gC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mC()||zw()||"connection"in navigator)?navigator.onLine:!0}function yC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=$S()||WS()}get(){return gC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Up(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wC=new cl(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mr(t,e,n,r,s={}){return eE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ll({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return qS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ni(t.emulatorConfig.host)&&(u.credentials="include"),Zw.fetch()(await tE(t,t.config.apiHost,n,l),u)})}async function eE(t,e,n){t._canInitEmulator=!1;const r={..._C,...e};try{const s=new IC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Jl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xw(t,f,u);wn(t,f)}}catch(s){if(s instanceof on)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function ul(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function tE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Up(t.config,s):`${t.config.apiScheme}://${s}`;return vC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function EC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),wC.get())})}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}function Ly(t){return t!==void 0&&t.enterprise!==void 0}class TC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xC(t,e){return mr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
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
 */async function SC(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function tu(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AC(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),s=zp(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Aa(rh(s.auth_time)),issuedAtTime:Aa(rh(s.iat)),expirationTime:Aa(rh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ow(n);return s?JSON.parse(s):(yc("Failed to decode base64 JWT payload"),null)}catch(s){return yc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jy(t){const e=zp(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&CC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nu(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Qa(t,tu(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?nE(s.providerUserInfo):[],o=bC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function RC(t){const e=Oe(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function PC(t,e){const n=await eE(t,{},async()=>{const r=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await tE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ni(t.emulatorConfig.host)&&(c.credentials="include"),Zw.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NC(t,e){return mr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=jy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $i;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function Cr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Qa(this,SC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:x,providerData:k,stsTokenManager:b}=n;ie(g&&b,e,"internal-error");const P=$i.fromJSON(this.name,b);ie(typeof g=="string",e,"internal-error"),Cr(r,e.name),Cr(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof x=="boolean",e,"internal-error"),Cr(i,e.name),Cr(o,e.name),Cr(l,e.name),Cr(c,e.name),Cr(u,e.name),Cr(f,e.name);const E=new fn({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(E.providerData=k.map(v=>({...v}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new $i;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await nu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $i;l.updateFromIdToken(r);const c=new fn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Fy=new Map;function er(t){cr(t instanceof Function,"Expected a class definition");let e=Fy.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fy.set(t,e),e)}/**
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
 */class rE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rE.type="NONE";const Uy=rE;/**
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
 */function _c(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_c(this.userKey,s.apiKey,i),this.fullPersistenceKey=_c("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await tu(this.auth,{idToken:e}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(er(Uy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||er(Uy);const o=_c(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let g;if(typeof f=="string"){const m=await tu(e,{idToken:f}).catch(()=>{});if(!m)break;g=await fn._fromGetAccountInfoResponse(e,m,f)}else g=fn._fromJSON(e,f);u!==i&&(l=g),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bi(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bi(i,e,r))}}/**
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
 */function zy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cE(e))return"Blackberry";if(uE(e))return"Webos";if(iE(e))return"Safari";if((e.includes("chrome/")||oE(e))&&!e.includes("edge/"))return"Chrome";if(lE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sE(t=Et()){return/firefox\//i.test(t)}function iE(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oE(t=Et()){return/crios\//i.test(t)}function aE(t=Et()){return/iemobile/i.test(t)}function lE(t=Et()){return/android/i.test(t)}function cE(t=Et()){return/blackberry/i.test(t)}function uE(t=Et()){return/webos/i.test(t)}function $p(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DC(t=Et()){var e;return $p(t)&&!!((e=window.navigator)!=null&&e.standalone)}function VC(){return HS()&&document.documentMode===10}function dE(t=Et()){return $p(t)||lE(t)||uE(t)||cE(t)||/windows phone/i.test(t)||aE(t)}/**
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
 */function hE(t,e=[]){let n;switch(t){case"Browser":n=zy(Et());break;case"Worker":n=`${zy(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class OC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MC(t,e={}){return mr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const LC=6;class jC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??LC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class FC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $y(this),this.idTokenSubscription=new $y(this),this.beforeStateQueue=new OC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tu(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(nr(this));const n=e?Oe(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MC(this),n=new jC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&pC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ii(t){return Oe(t)}class $y{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZS(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UC(t){zu=t}function fE(t){return zu.loadJS(t)}function zC(){return zu.recaptchaEnterpriseScript}function $C(){return zu.gapiScript}function BC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qC{constructor(){this.enterprise=new WC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class WC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const HC="recaptcha-enterprise",pE="NO_RECAPTCHA";class GC{constructor(e){this.type=HC,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{xC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new TC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Ly(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(pE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ly(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=zC();c.length!==0&&(c+=l),fE(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function By(t,e,n,r=!1,s=!1){const i=new GC(t);let o;if(s)o=pE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _f(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await By(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await By(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function KC(t,e){const n=us(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zn(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function QC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YC(t,e,n){const r=ii(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mE(e),{host:o,port:l}=JC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(zn(u,r.config.emulator)&&zn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ni(o)?(Mp(`${i}//${o}${c}`),Lp("Auth",!0)):XC()}function mE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JC(t){const e=mE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function ZC(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ek(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function tk(t,e){return mr(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function nk(t,e){return tk(t,e)}/**
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
 */async function rk(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function sk(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
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
 */class Ya extends Bp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,n,"signInWithPassword",ek);case"emailLink":return rk(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,r,"signUpPassword",ZC);case"emailLink":return sk(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qi(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
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
 */const ik="http://localhost";class Hs extends Bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ll(n)}return e}}/**
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
 */function ok(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ak(t){const e=ua(da(t)).link,n=e?ua(da(e)).deep_link_id:null,r=ua(da(t)).deep_link_id;return(r?ua(da(r)).link:null)||r||n||e||t}class qp{constructor(e){const n=ua(da(e)),r=n.apiKey??null,s=n.oobCode??null,i=ok(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ak(e);try{return new qp(n)}catch{return null}}}/**
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
 */class po{constructor(){this.providerId=po.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return ie(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}po.PROVIDER_ID="password";po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dl extends gE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vr extends dl{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
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
 */class Or extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class Mr extends dl{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Lr extends dl{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
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
 */async function lk(t,e){return ul(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
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
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=Wy(r);return new Gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wy(r);return new Gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ru extends on{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ru(e,n,r,s)}}function yE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,i,e,r):i})}async function ck(t,e,n=!1){const r=await Qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",r)}/**
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
 */async function uk(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await Qa(t,yE(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=zp(i.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),Gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
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
 */async function _E(t,e,n=!1){if(Ut(t.app))return Promise.reject(nr(t));const r="signIn",s=await yE(t,r,e),i=await Gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dk(t,e){return _E(ii(t),e)}/**
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
 */async function vE(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hk(t,e,n){if(Ut(t.app))return Promise.reject(nr(t));const r=ii(t),o=await _f(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&vE(t),c}),l=await Gs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fk(t,e,n){return Ut(t.app)?Promise.reject(nr(t)):dk(Oe(t),po.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vE(t),r})}async function pk(t,e){const n=Oe(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await nk(n.auth,s);i!==t.email&&await t.reload()}function mk(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function gk(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function yk(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function _k(t){return Oe(t).signOut()}const su="__sak";/**
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
 */class wE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vk=1e3,wk=10;class EE extends wE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}EE.type="LOCAL";const Ek=EE;/**
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
 */class IE extends wE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IE.type="SESSION";const TE=IE;/**
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
 */function Ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Ik(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
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
 */function Wp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Wp("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ln(){return window}function xk(t){Ln().location.href=t}/**
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
 */function xE(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function Sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ck(){return xE()?self:null}/**
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
 */const SE="firebaseLocalStorageDb",kk=1,iu="firebaseLocalStorage",AE="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bu(t,e){return t.transaction([iu],e?"readwrite":"readonly").objectStore(iu)}function Rk(){const t=indexedDB.deleteDatabase(SE);return new hl(t).toPromise()}function vf(){const t=indexedDB.open(SE,kk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(iu,{keyPath:AE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(iu)?e(r):(r.close(),await Rk(),e(await vf()))})})}async function Hy(t,e,n){const r=Bu(t,!0).put({[AE]:e,value:n});return new hl(r).toPromise()}async function bk(t,e){const n=Bu(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function Gy(t,e){const n=Bu(t,!0).delete(e);return new hl(n).toPromise()}const Pk=800,Nk=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Sk(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Hy(e,su,"1"),await Gy(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bu(s,!1).getAll();return new hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const Dk=CE;new cl(3e4,6e4);/**
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
 */function Vk(t,e){return e?er(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hp extends Bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ok(t){return _E(t.auth,new Hp(t),t.bypassAuthState)}function Mk(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),uk(n,new Hp(t),t.bypassAuthState)}async function Lk(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),ck(n,new Hp(t),t.bypassAuthState)}/**
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
 */class kE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ok;case"linkViaPopup":case"linkViaRedirect":return Lk;case"reauthViaPopup":case"reauthViaRedirect":return Mk;default:wn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jk=new cl(2e3,1e4);class Oi extends kE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jk.get())};e()}}Oi.currentPopupAction=null;/**
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
 */const Fk="pendingRedirect",vc=new Map;class Uk extends kE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vc.get(this.auth._key());if(!e){try{const r=await zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vc.set(this.auth._key(),e)}return this.bypassAuthState||vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zk(t,e){const n=qk(e),r=Bk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $k(t,e){vc.set(t._key(),e)}function Bk(t){return er(t._redirectPersistence)}function qk(t){return _c(Fk,t.config.apiKey,t.name)}async function Wk(t,e,n=!1){if(Ut(t.app))return Promise.reject(nr(t));const r=ii(t),s=Vk(r,e),o=await new Uk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Hk=10*60*1e3;class Gk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ky(e))}saveEventToCache(e){this.cachedEventUids.add(Ky(e)),this.lastProcessedEventTime=Date.now()}}function Ky(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
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
 */async function Qk(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
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
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jk=/^https?/;async function Xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qk(t);for(const n of e)try{if(Zk(n))return}catch{}wn(t,"unauthorized-domain")}function Zk(t){const e=gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jk.test(n))return!1;if(Yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eR=new cl(3e4,6e4);function Qy(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tR(t){return new Promise((e,n)=>{var s,i,o;function r(){Qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(Mn(t,"network-request-failed"))},timeout:eR.get()})}if((i=(s=Ln().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ln().gapi)!=null&&o.load)r();else{const l=BC("iframefcb");return Ln()[l]=()=>{gapi.load?r():n(Mn(t,"network-request-failed"))},fE(`${$C()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wc=null,e})}let wc=null;function nR(t){return wc=wc||tR(t),wc}/**
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
 */const rR=new cl(5e3,15e3),sR="__/auth/iframe",iR="emulator/auth/iframe",oR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lR(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,iR):`https://${t.config.authDomain}/${sR}`,r={apiKey:e.apiKey,appName:t.name,v:si},s=aR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ll(r).slice(1)}`}async function cR(t){const e=await nR(t),n=Ln().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:lR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),l=Ln().setTimeout(()=>{i(o)},rR.get());function c(){Ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const uR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dR=500,hR=600,fR="_blank",pR="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mR(t,e,n,r=dR,s=hR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...uR,width:r.toString(),height:s.toString(),top:i,left:o},u=Et().toLowerCase();n&&(l=oE(u)?fR:n),sE(u)&&(e=e||pR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[x,k])=>`${m}${x}=${k},`,"");if(DC(u)&&l!=="_self")return gR(e||"",l),new Yy(null);const g=window.open(e||"",l,f);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new Yy(g)}function gR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yR="__/auth/handler",_R="emulator/auth/handler",vR=encodeURIComponent("fac");async function Jy(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:s};if(e instanceof gE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof dl){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${vR}=${encodeURIComponent(c)}`:"";return`${wR(t)}?${ll(l).slice(1)}${u}`}function wR({config:t}){return t.emulator?Up(t,_R):`https://${t.authDomain}/${yR}`}/**
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
 */const sh="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TE,this._completeRedirectFn=Wk,this._overrideRedirectResult=$k}async _openPopup(e,n,r,s){var o;cr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jy(e,n,r,gf(),s);return mR(e,i,Wp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jy(e,n,r,gf(),s);return xk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cR(e),r=new Gk(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[sh];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dE()||iE()||$p()}}const IR=ER;var Xy="@firebase/auth",Zy="1.12.1";/**
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
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SR(t){vn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hE(t)},u=new FC(r,s,i,c);return QC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new sn("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Xy,Zy,xR(t)),Mt(Xy,Zy,"esm2020")}/**
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
 */const AR=5*60,CR=Fw("authIdTokenMaxAge")||AR;let e_=null;const kR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CR)return;const s=n==null?void 0:n.token;e_!==s&&(e_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RR(t=Uu()){const e=us(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KC(t,{popupRedirectResolver:IR,persistence:[Dk,Ek,TE]}),r=Fw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kR(i.toString());gk(n,o,()=>o(n.currentUser)),mk(n,l=>o(l))}}const s=Mw("auth");return s&&YC(n,`http://${s}`),n}function bR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}UC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SR("Browser");var t_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,bE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.F=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(A,C,R){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return y.prototype[C].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;C<16;++C)A[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],C=w.g[2];let R=w.g[3],S;S=y+(R^I&(C^R))+A[0]+3614090360&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[1]+3905402710&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[2]+606105819&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[3]+3250441966&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[4]+4118548399&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[5]+1200080426&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[6]+2821735955&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[7]+4249261313&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[8]+1770035416&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[9]+2336552879&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[10]+4294925233&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[11]+2304563134&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[12]+1804603682&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[13]+4254626195&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[14]+2792965006&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[15]+1236535329&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(C^R&(I^C))+A[1]+4129170786&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[6]+3225465664&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[11]+643717713&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[0]+3921069994&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[5]+3593408605&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[10]+38016083&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[15]+3634488961&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[4]+3889429448&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[9]+568446438&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[14]+3275163606&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[3]+4107603335&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[8]+1163531501&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[13]+2850285829&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[2]+4243563512&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[7]+1735328473&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[12]+2368359562&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(I^C^R)+A[5]+4294588738&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[8]+2272392833&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[11]+1839030562&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[14]+4259657740&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[1]+2763975236&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[4]+1272893353&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[7]+4139469664&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[10]+3200236656&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[13]+681279174&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[0]+3936430074&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[3]+3572445317&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[6]+76029189&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[9]+3654602809&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[12]+3873151461&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[15]+530742520&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[2]+3299628645&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(C^(I|~R))+A[0]+4096336452&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[7]+1126891415&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[14]+2878612391&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[5]+4237533241&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[12]+1700485571&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[3]+2399980690&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[10]+4293915773&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[1]+2240044497&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[8]+1873313359&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[15]+4264355552&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[6]+2734768916&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[13]+1309151649&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[4]+4149444226&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[11]+3174756917&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[2]+718787259&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const I=y-this.blockSize,A=this.C;let C=this.h,R=0;for(;R<y;){if(C==0)for(;R<=I;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(A[C++]=w.charCodeAt(R++),C==this.blockSize){s(this,A),C=0;break}}else for(;R<y;)if(A[C++]=w[R++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)w[y++]=this.g[I]>>>A&255;return w};function i(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;const I=[];let A=!0;for(let C=w.length-1;C>=0;C--){const R=w[C]|0;A&&R==y||(I[C]=R,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return P(u(-w));const y=[];let I=1;for(let A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(y,8));let A=g;for(let R=0;R<w.length;R+=8){var C=Math.min(8,w.length-R);const S=parseInt(w.substring(R,R+C),y);C<8?(C=u(Math.pow(y,C)),A=A.j(C).add(u(S))):(A=A.j(I),A=A.add(u(S)))}return A}var g=c(0),m=c(1),x=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-P(this).m();let w=0,y=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);w+=(A>=0?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(b(this))return"-"+P(this).toString(w);const y=u(Math.pow(w,6));var I=this;let A="";for(;;){const C=D(I,y).g;I=E(I,C.j(y));let R=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=C,k(I))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function b(w){return w.h==-1}t.l=function(w){return w=E(this,w),b(w)?-1:k(w)?0:1};function P(w){const y=w.g.length,I=[];for(let A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return b(this)?P(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),I=[];let A=0;for(let C=0;C<=y;C++){let R=A+(this.i(C)&65535)+(w.i(C)&65535),S=(R>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);A=S>>>16,R&=65535,S&=65535,I[C]=S<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(P(y))}t.j=function(w){if(k(this)||k(w))return g;if(b(this))return b(w)?P(this).j(P(w)):P(P(this).j(w));if(b(w))return P(this.j(P(w)));if(this.l(x)<0&&w.l(x)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,I=[];for(var A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<w.g.length;C++){const R=this.i(A)>>>16,S=this.i(A)&65535,z=w.i(C)>>>16,W=w.i(C)&65535;I[2*A+2*C]+=S*W,v(I,2*A+2*C),I[2*A+2*C+1]+=R*W,v(I,2*A+2*C+1),I[2*A+2*C+1]+=S*z,v(I,2*A+2*C+1),I[2*A+2*C+2]+=R*z,v(I,2*A+2*C+2)}for(w=0;w<y;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=y;w<2*y;w++)I[w]=0;return new o(I,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function D(w,y){if(k(y))throw Error("division by zero");if(k(w))return new T(g,g);if(b(w))return y=D(P(w),y),new T(P(y.g),P(y.h));if(b(y))return y=D(w,P(y)),new T(P(y.g),y.h);if(w.g.length>30){if(b(w)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;A.l(w)<=0;)I=j(I),A=j(A);var C=M(I,1),R=M(A,1);for(A=M(A,2),I=M(I,2);!k(A);){var S=R.add(A);S.l(w)<=0&&(C=C.add(I),R=S),A=M(A,1),I=M(I,1)}return y=E(w,C.j(y)),new T(C,y)}for(C=g;w.l(y)>=0;){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=u(I),S=R.j(y);b(S)||S.l(w)>0;)I-=A,R=u(I),S=R.j(y);k(R)&&(R=m),C=C.add(R),w=E(w,S)}return new T(C,w)}t.B=function(w){return D(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function j(w){const y=w.g.length+1,I=[];for(let A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function M(w,y){const I=y>>5;y%=32;const A=w.g.length-I,C=[];for(let R=0;R<A;R++)C[R]=y>0?w.i(R+I)>>>y|w.i(R+I+1)<<32-y:w.i(R+I);return new o(C,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,bE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Jr=o}).apply(typeof t_<"u"?t_:typeof self<"u"?self:typeof window<"u"?window:{});var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PE,ha,NE,Ec,wf,DE,VE,OE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xl=="object"&&Xl];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var h=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in h))break e;h=h[O]}a=a[a.length-1],_=h[a],d=d(_),d!=_&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var h=[],_;for(_ in d)Object.prototype.hasOwnProperty.call(d,_)&&h.push([_,d[_]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,h){return a.call.apply(a.bind,arguments)}function u(a,d,h){return u=c,u.apply(null,arguments)}function f(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var _=h.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function g(a,d){function h(){}h.prototype=d.prototype,a.Z=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(_,O,L){for(var H=Array(arguments.length-2),de=2;de<arguments.length;de++)H[de-2]=arguments[de];return d.prototype[O].apply(_,H)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const d=a.length;if(d>0){const h=Array(d);for(let _=0;_<d;_++)h[_]=a[_];return h}return[]}function k(a,d){for(let _=1;_<arguments.length;_++){const O=arguments[_];var h=typeof O;if(h=h!="object"?h:O?Array.isArray(O)?"array":h:"null",h=="array"||h=="object"&&typeof O.length=="number"){h=a.length||0;const L=O.length||0;a.length=h+L;for(let H=0;H<L;H++)a[h+H]=O[H]}else a.push(O)}}class b{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function P(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class v{constructor(){this.h=this.g=null}add(d,h){const _=T.get();_.set(d,h),this.h?this.h.next=_:this.g=_,this.h=_}}var T=new b(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,w=new v,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=E();){try{a.h.call(a.g)}catch(h){P(h)}var d=T;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}M=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,d),o.removeEventListener("test",h,d)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function z(a,d){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}g(z,C),z.prototype.init=function(a,d){const h=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&z.Z.h.call(this)},z.prototype.h=function(){z.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var W="closure_listenable_"+(Math.random()*1e6|0),Q=0;function X(a,d,h,_,O){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!_,this.ha=O,this.key=++Q,this.da=this.fa=!1}function N(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $(a,d,h){for(const _ in a)d.call(h,a[_],_,a)}function K(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function re(a){const d={};for(const h in a)d[h]=a[h];return d}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(a,d){let h,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(h in _)a[h]=_[h];for(let L=0;L<ee.length;L++)h=ee[L],Object.prototype.hasOwnProperty.call(_,h)&&(a[h]=_[h])}}function se(a){this.src=a,this.g={},this.h=0}se.prototype.add=function(a,d,h,_,O){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const H=we(a,d,_,O);return H>-1?(d=a[H],h||(d.fa=!1)):(d=new X(d,this.src,L,!!_,O),d.fa=h,a.push(d)),d};function ne(a,d){const h=d.type;if(h in a.g){var _=a.g[h],O=Array.prototype.indexOf.call(_,d,void 0),L;(L=O>=0)&&Array.prototype.splice.call(_,O,1),L&&(N(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function we(a,d,h,_){for(let O=0;O<a.length;++O){const L=a[O];if(!L.da&&L.listener==d&&L.capture==!!h&&L.ha==_)return O}return-1}var xe="closure_lm_"+(Math.random()*1e6|0),kt={};function gr(a,d,h,_,O){if(Array.isArray(d)){for(let L=0;L<d.length;L++)gr(a,d[L],h,_,O);return null}return h=xo(h),a&&a[W]?a.J(d,h,l(_)?!!_.capture:!1,O):To(a,d,h,!1,_,O)}function To(a,d,h,_,O,L){if(!d)throw Error("Invalid event type");const H=l(O)?!!O.capture:!!O;let de=In(a);if(de||(a[xe]=de=new se(a)),h=de.add(d,h,_,H,L),h.proxy)return h;if(_=ps(),h.proxy=_,_.src=a,_.listener=h,a.addEventListener)R||(O=H),O===void 0&&(O=!1),a.addEventListener(d.toString(),_,O);else if(a.attachEvent)a.attachEvent(gs(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ps(){function a(h){return d.call(a.src,a.listener,h)}const d=Be;return a}function ms(a,d,h,_,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)ms(a,d[L],h,_,O);else _=l(_)?!!_.capture:!!_,h=xo(h),a&&a[W]?(a=a.i,L=String(d).toString(),L in a.g&&(d=a.g[L],h=we(d,h,_,O),h>-1&&(N(d[h]),Array.prototype.splice.call(d,h,1),d.length==0&&(delete a.g[L],a.h--)))):a&&(a=In(a))&&(d=a.g[d.toString()],a=-1,d&&(a=we(d,h,_,O)),(h=a>-1?d[a]:null)&&Wn(h))}function Wn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[W])ne(d.i,a);else{var h=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(h,_,a.capture):d.detachEvent?d.detachEvent(gs(h),_):d.addListener&&d.removeListener&&d.removeListener(_),(h=In(d))?(ne(h,a),h.h==0&&(h.src=null,d[xe]=null)):N(a)}}}function gs(a){return a in kt?kt[a]:kt[a]="on"+a}function Be(a,d){if(a.da)a=!0;else{d=new z(d,this);const h=a.listener,_=a.ha||a.src;a.fa&&Wn(a),a=h.call(_,d)}return a}function In(a){return a=a[xe],a instanceof se?a:null}var yr="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(a){return typeof a=="function"?a:(a[yr]||(a[yr]=function(d){return a.handleEvent(d)}),a[yr])}function He(){A.call(this),this.i=new se(this),this.M=this,this.G=null}g(He,A),He.prototype[W]=!0,He.prototype.removeEventListener=function(a,d,h,_){ms(this,a,d,h,_)};function tt(a,d){var h,_=a.G;if(_)for(h=[];_;_=_.G)h.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new C(d,a);else if(d instanceof C)d.target=d.target||a;else{var O=d;d=new C(_,a),ce(d,O)}O=!0;let L,H;if(h)for(H=h.length-1;H>=0;H--)L=d.g=h[H],O=ui(L,_,!0,d)&&O;if(L=d.g=a,O=ui(L,_,!0,d)&&O,O=ui(L,_,!1,d)&&O,h)for(H=0;H<h.length;H++)L=d.g=h[H],O=ui(L,_,!1,d)&&O}He.prototype.N=function(){if(He.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const h=a.g[d];for(let _=0;_<h.length;_++)N(h[_]);delete a.g[d],a.h--}}this.G=null},He.prototype.J=function(a,d,h,_){return this.i.add(String(a),d,!1,h,_)},He.prototype.K=function(a,d,h,_){return this.i.add(String(a),d,!0,h,_)};function ui(a,d,h,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let O=!0;for(let L=0;L<d.length;++L){const H=d[L];if(H&&!H.da&&H.capture==h){const de=H.listener,Je=H.ha||H.src;H.fa&&ne(a.i,H),O=de.call(Je,_)!==!1&&O}}return O&&!_.defaultPrevented}function So(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function _l(a){a.g=So(()=>{a.g=null,a.i&&(a.i=!1,_l(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ao extends A{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_l(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(a){A.call(this),this.h=a,this.g={}}g(an,A);var vl=[];function Co(a){$(a.g,function(d,h){this.g.hasOwnProperty(h)&&Wn(d)},a),a.g={}}an.prototype.N=function(){an.Z.N.call(this),Co(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var di=o.JSON.stringify,ko=o.JSON.parse,wl=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ys(){}function _s(){}var Tn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fe(){C.call(this,"d")}g(fe,C);function hi(){C.call(this,"c")}g(hi,C);var xn={},Ro=null;function ln(){return Ro=Ro||new He}xn.Ia="serverreachability";function bo(a){C.call(this,xn.Ia,a)}g(bo,C);function _r(a){const d=ln();tt(d,new bo(d))}xn.STAT_EVENT="statevent";function Po(a,d){C.call(this,xn.STAT_EVENT,a),this.stat=d}g(Po,C);function nt(a){const d=ln();tt(d,new Po(d,a))}xn.Ja="timingevent";function El(a,d){C.call(this,xn.Ja,a),this.size=d}g(El,C);function vs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function fd(a,d,h,_,O,L){a.info(function(){if(a.g)if(L){var H="",de=L.split("&");for(let Se=0;Se<de.length;Se++){var Je=de[Se].split("=");if(Je.length>1){const rt=Je[0];Je=Je[1];const Cn=rt.split("_");H=Cn.length>=2&&Cn[1]=="type"?H+(rt+"="+Je+"&"):H+(rt+"=redacted&")}}}else H=null;else H=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+h+`
`+H})}function pd(a,d,h,_,O,L,H){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+h+`
`+L+" "+H})}function vr(a,d,h,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+gd(a,h)+(_?" "+_:"")})}function md(a,d){a.info(function(){return"TIMEOUT: "+d})}ws.prototype.info=function(){};function gd(a,d){if(!a.g)return d;if(!d)return null;try{const L=JSON.parse(d);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var h=L[a];if(!(h.length<2)){var _=h[1];if(Array.isArray(_)&&!(_.length<1)){var O=_[0];if(O!="noop"&&O!="stop"&&O!="close")for(let H=1;H<_.length;H++)_[H]=""}}}}return di(L)}catch{return d}}var fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Il={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},No;function pi(){}g(pi,ys),pi.prototype.g=function(){return new XMLHttpRequest},No=new pi;function wr(a){return encodeURIComponent(String(a))}function V(a){var d=1;a=a.split(":");const h=[];for(;d>0&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function Z(a,d,h,_){this.j=a,this.i=d,this.l=h,this.S=_||1,this.V=new an(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pe}function pe(){this.i=null,this.g="",this.h=!1}var at={},Hn={};function Sn(a,d,h){a.M=1,a.A=Al(An(d)),a.u=h,a.R=!0,Tl(a,null)}function Tl(a,d){a.F=Date.now(),Es(a),a.B=An(a.A);var h=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Gm(h.i,"t",_),a.C=0,h=a.j.L,a.h=new pe,a.g=dg(a.j,h?d:null,!a.u),a.P>0&&(a.O=new Ao(u(a.Y,a,a.g),a.P)),d=a.V,h=a.g,_=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(vl[0]=O.toString()),O=vl);for(let L=0;L<O.length;L++){const H=gr(h,O[L],_||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=a.J?re(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),_r(),fd(a.i,a.v,a.B,a.l,a.S,a.u)}Z.prototype.ba=function(a){a=a.target;const d=this.O;d&&Tr(a)==3?d.j():this.Y(a)},Z.prototype.Y=function(a){try{if(a==this.g)e:{const de=Tr(this.g),Je=this.g.ya(),Se=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||eg(this.g)))){this.K||de!=4||Je==7||(Je==8||Se<=0?_r(3):_r(2)),Vo(this);var d=this.g.ca();this.X=d;var h=mi(this);if(this.o=d==200,pd(this.i,this.v,this.B,this.l,this.S,de,d),this.o){if(this.U&&!this.L){t:{if(this.g){var _,O=this.g;if((_=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(_)){var L=_;break t}}L=null}if(a=L)vr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oo(this,a);else{this.o=!1,this.m=3,nt(12),Gn(this),Is(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<h.length;)if(rt=yd(this,h),rt==Hn){de==4&&(this.m=4,nt(14),a=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==at){this.m=4,nt(15),vr(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else vr(this.i,this.l,rt,null),Oo(this,rt);if(xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||h.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)vr(this.i,this.l,h,"[Invalid Chunked Response]"),Gn(this),Is(this);else if(h.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),xd(H),H.P=!0,nt(11))}}else vr(this.i,this.l,h,null),Oo(this,h);de==4&&Gn(this),this.o&&!this.K&&(de==4?ag(this.j,this):(this.o=!1,Es(this)))}else r1(this.g),d==400&&h.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Gn(this),Is(this)}}}catch{}finally{}};function mi(a){if(!xl(a))return a.g.la();const d=eg(a.g);if(d==="")return"";let h="";const _=d.length,O=Tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),Is(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<_;L++)a.h.h=!0,h+=a.h.i.decode(d[L],{stream:!(O&&L==_-1)});return d.length=0,a.h.g+=h,a.C=0,a.h.g}function xl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function yd(a,d){var h=a.C,_=d.indexOf(`
`,h);return _==-1?Hn:(h=Number(d.substring(h,_)),isNaN(h)?at:(_+=1,_+h>d.length?Hn:(d=d.slice(_,_+h),a.C=_+h,d)))}Z.prototype.cancel=function(){this.K=!0,Gn(this)};function Es(a){a.T=Date.now()+a.H,Do(a,a.H)}function Do(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=vs(u(a.aa,a),d)}function Vo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Z.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(md(this.i,this.B),this.M!=2&&(_r(),nt(17)),Gn(this),this.m=2,Is(this)):Do(this,this.T-a)};function Is(a){a.j.I==0||a.K||ag(a.j,a)}function Gn(a){Vo(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Co(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Oo(a,d){try{var h=a.j;if(h.I!=0&&(h.g==a||Ts(h.h,a))){if(!a.L&&Ts(h.h,a)&&h.I==3){try{var _=h.Ba.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Pl(h),Rl(h);else break e;Td(h),nt(18)}}else h.xa=O[1],0<h.xa-h.K&&O[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=vs(u(h.Va,h),6e3));jo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Ss(h,11)}else if((a.L||h.g==a)&&Pl(h),!S(d))for(O=h.Ba.g.parse(d),d=0;d<O.length;d++){let Se=O[d];const rt=Se[0];if(!(rt<=h.K))if(h.K=rt,Se=Se[1],h.I==2)if(Se[0]=="c"){h.M=Se[1],h.ba=Se[2];const Cn=Se[3];Cn!=null&&(h.ka=Cn,h.j.info("VER="+h.ka));const As=Se[4];As!=null&&(h.za=As,h.j.info("SVER="+h.za));const xr=Se[5];xr!=null&&typeof xr=="number"&&xr>0&&(_=1.5*xr,h.O=_,h.j.info("backChannelRequestTimeoutMs_="+_)),_=h;const Sr=a.g;if(Sr){const Dl=Sr.g?Sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dl){var L=_.h;L.g||Dl.indexOf("spdy")==-1&&Dl.indexOf("quic")==-1&&Dl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(_d(L,L.h),L.h=null))}if(_.G){const Sd=Sr.g?Sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Sd&&(_.wa=Sd,Re(_.J,_.G,Sd))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),_=h;var H=a;if(_.na=ug(_,_.L?_.ba:null,_.W),H.L){Um(_.h,H);var de=H,Je=_.O;Je&&(de.H=Je),de.D&&(Vo(de),Es(de)),_.g=H}else ig(_);h.i.length>0&&bl(h)}else Se[0]!="stop"&&Se[0]!="close"||Ss(h,7);else h.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Ss(h,7):Id(h):Se[0]!="noop"&&h.l&&h.l.qa(Se),h.A=0)}}_r(4)}catch{}}var Sl=class{constructor(a,d){this.g=a,this.map=d}};function Mo(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jo(a){return a.h?1:a.g?a.g.size:0}function Ts(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function _d(a,d){a.g?a.g.add(d):a.h=d}function Um(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Mo.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.G);return d}return x(a.i)}var $m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WT(a,d){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const _=a[h].indexOf("=");let O,L=null;_>=0?(O=a[h].substring(0,_),L=a[h].substring(_+1)):O=a[h],d(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Er?(this.l=a.l,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.u),this.h=a.h,vd(this,Km(a.i)),this.m=a.m):a&&(d=String(a).match($m))?(this.l=!1,Fo(this,d[1]||"",!0),this.o=zo(d[2]||""),this.g=zo(d[3]||"",!0),Uo(this,d[4]),this.h=zo(d[5]||"",!0),vd(this,d[6]||"",!0),this.m=zo(d[7]||"")):(this.l=!1,this.i=new Bo(null,this.l))}Er.prototype.toString=function(){const a=[];var d=this.j;d&&a.push($o(d,Bm,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push($o(d,Bm,!0),"@"),a.push(wr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push($o(h,h.charAt(0)=="/"?KT:GT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",$o(h,YT)),a.join("")},Er.prototype.resolve=function(a){const d=An(this);let h=!!a.j;h?Fo(d,a.j):h=!!a.o,h?d.o=a.o:h=!!a.g,h?d.g=a.g:h=a.u!=null;var _=a.h;if(h)Uo(d,a.u);else if(h=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var O=d.h.lastIndexOf("/");O!=-1&&(_=d.h.slice(0,O+1)+_)}if(O=_,O==".."||O==".")_="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){_=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let H=0;H<O.length;){const de=O[H++];de=="."?_&&H==O.length&&L.push(""):de==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),_&&H==O.length&&L.push("")):(L.push(de),_=!0)}_=L.join("/")}else _=O}return h?d.h=_:h=a.i.toString()!=="",h?vd(d,Km(a.i)):h=!!a.m,h&&(d.m=a.m),d};function An(a){return new Er(a)}function Fo(a,d,h){a.j=h?zo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function vd(a,d,h){d instanceof Bo?(a.i=d,JT(a.i,a.l)):(h||(d=$o(d,QT)),a.i=new Bo(d,a.l))}function Re(a,d,h){a.i.set(d,h)}function Al(a){return Re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $o(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,HT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bm=/[#\/\?@]/g,GT=/[#\?:]/g,KT=/[#\?]/g,QT=/[#\?@]/g,YT=/#/g;function Bo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function xs(a){a.g||(a.g=new Map,a.h=0,a.i&&WT(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=Bo.prototype,t.add=function(a,d){xs(this),this.i=null,a=gi(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function qm(a,d){xs(a),d=gi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Wm(a,d){return xs(a),d=gi(a,d),a.g.has(d)}t.forEach=function(a,d){xs(this),this.g.forEach(function(h,_){h.forEach(function(O){a.call(d,O,_,this)},this)},this)};function Hm(a,d){xs(a);let h=[];if(typeof d=="string")Wm(a,d)&&(h=h.concat(a.g.get(gi(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)h=h.concat(a[d]);return h}t.set=function(a,d){return xs(this),this.i=null,a=gi(this,a),Wm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Hm(this,a),a.length>0?String(a[0]):d):d};function Gm(a,d,h){qm(a,d),h.length>0&&(a.i=null,a.g.set(gi(a,d),x(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let _=0;_<d.length;_++){var h=d[_];const O=wr(h);h=Hm(this,h);for(let L=0;L<h.length;L++){let H=O;h[L]!==""&&(H+="="+wr(h[L])),a.push(H)}}return this.i=a.join("&")};function Km(a){const d=new Bo;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function gi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function JT(a,d){d&&!a.j&&(xs(a),a.i=null,a.g.forEach(function(h,_){const O=_.toLowerCase();_!=O&&(qm(this,_),Gm(this,O,h))},a)),a.j=d}function XT(a,d){const h=new ws;if(o.Image){const _=new Image;_.onload=f(Ir,h,"TestLoadImage: loaded",!0,d,_),_.onerror=f(Ir,h,"TestLoadImage: error",!1,d,_),_.onabort=f(Ir,h,"TestLoadImage: abort",!1,d,_),_.ontimeout=f(Ir,h,"TestLoadImage: timeout",!1,d,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function ZT(a,d){const h=new ws,_=new AbortController,O=setTimeout(()=>{_.abort(),Ir(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?Ir(h,"TestPingServer: ok",!0,d):Ir(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Ir(h,"TestPingServer: error",!1,d)})}function Ir(a,d,h,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(h)}catch{}}function e1(){this.g=new wl}function wd(a){this.i=a.Sb||null,this.h=a.ab||!1}g(wd,ys),wd.prototype.g=function(){return new Cl(this.i,this.h)};function Cl(a,d){He.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Cl,He),t=Cl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?qo(this):Wo(this),this.readyState==3&&Qm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qo(this))},t.Na=function(a){this.g&&(this.response=a,qo(this))},t.ga=function(){this.g&&qo(this)};function qo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ym(a){let d="";return $(a,function(h,_){d+=_,d+=":",d+=h,d+=`\r
`}),d}function Ed(a,d,h){e:{for(_ in h){var _=!1;break e}_=!0}_||(h=Ym(h),typeof a=="string"?h!=null&&wr(h):Re(a,d,h))}function Ue(a){He.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ue,He);var t1=/^https?$/i,n1=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,h,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():No.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){Jm(this,L);return}if(a=h||"",h=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)h.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())h.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(h.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(n1,d,void 0)>=0)||_||O||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of h)this.g.setRequestHeader(L,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Jm(this,L)}};function Jm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Xm(a),kl(a)}function Xm(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,tt(this,"complete"),tt(this,"abort"),kl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kl(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zm(this):this.Xa())},t.Xa=function(){Zm(this)};function Zm(a){if(a.h&&typeof i<"u"){if(a.v&&Tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(tt(a,"readystatechange"),Tr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var _;if(_=L===0){let H=String(a.D).match($m)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),_=!t1.test(H?H.toLowerCase():"")}h=_}if(h)tt(a,"complete"),tt(a,"success");else{a.o=6;try{var O=Tr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Xm(a)}}finally{kl(a)}}}}function kl(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,d||tt(a,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ko(d)}};function eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function r1(a){const d={};a=(a.g&&Tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(S(a[_]))continue;var h=V(a[_]);const O=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const L=d[O]||[];d[O]=L,L.push(h)}K(d,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function tg(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ho("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ho("baseRetryDelayMs",5e3,a),this.Za=Ho("retryDelaySeedMs",1e4,a),this.Ta=Ho("forwardChannelMaxRetries",2,a),this.va=Ho("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Mo(a&&a.concurrentRequestLimit),this.Ba=new e1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tg.prototype,t.ka=8,t.I=1,t.connect=function(a,d,h,_){nt(0),this.W=a,this.H=d||{},h&&_!==void 0&&(this.H.OSID=h,this.H.OAID=_),this.F=this.X,this.J=ug(this,null,this.W),bl(this)};function Id(a){if(ng(a),a.I==3){var d=a.V++,h=An(a.J);if(Re(h,"SID",a.M),Re(h,"RID",d),Re(h,"TYPE","terminate"),Go(a,h),d=new Z(a,a.j,d),d.M=2,d.A=Al(An(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=d.A,h=!0),h||(d.g=dg(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Es(d)}cg(a)}function Rl(a){a.g&&(xd(a),a.g.cancel(),a.g=null)}function ng(a){Rl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Pl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bl(a){if(!Lo(a.h)&&!a.m){a.m=!0;var d=a.Ea;j||y(),M||(j(),M=!0),w.add(d,a),a.D=0}}function s1(a,d){return jo(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=vs(u(a.Ea,a,d),lg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Z(this,this.j,a);let L=this.o;if(this.U&&(L?(L=re(L),ce(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var _=this.i[h];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,d>4096){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=sg(this,O,d),h=An(this.J),Re(h,"RID",a),Re(h,"CVER",22),this.G&&Re(h,"X-HTTP-Session-Id",this.G),Go(this,h),L&&(this.R?d="headers="+wr(Ym(L))+"&"+d:this.u&&Ed(h,this.u,L)),_d(this.h,O),this.Ra&&Re(h,"TYPE","init"),this.S?(Re(h,"$req",d),Re(h,"SID","null"),O.U=!0,Sn(O,h,null)):Sn(O,h,d),this.I=2}}else this.I==3&&(a?rg(this,a):this.i.length==0||Lo(this.h)||rg(this))};function rg(a,d){var h;d?h=d.l:h=a.V++;const _=An(a.J);Re(_,"SID",a.M),Re(_,"RID",h),Re(_,"AID",a.K),Go(a,_),a.u&&a.o&&Ed(_,a.u,a.o),h=new Z(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),d&&(a.i=d.G.concat(a.i)),d=sg(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_d(a.h,h),Sn(h,_,d)}function Go(a,d){a.H&&$(a.H,function(h,_){Re(d,_,h)}),a.l&&$({},function(h,_){Re(d,_,h)})}function sg(a,d,h){h=Math.min(a.i.length,h);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let de=-1;for(;;){const Je=["count="+h];de==-1?h>0?(de=O[0].g,Je.push("ofs="+de)):de=0:Je.push("ofs="+de);let Se=!0;for(let rt=0;rt<h;rt++){var L=O[rt].g;const Cn=O[rt].map;if(L-=de,L<0)de=Math.max(0,O[rt].g-100),Se=!1;else try{L="req"+L+"_"||"";try{var H=Cn instanceof Map?Cn:Object.entries(Cn);for(const[As,xr]of H){let Sr=xr;l(xr)&&(Sr=di(xr)),Je.push(L+As+"="+encodeURIComponent(Sr))}}catch(As){throw Je.push(L+"type="+encodeURIComponent("_badmap")),As}}catch{_&&_(Cn)}}if(Se){H=Je.join("&");break e}}H=void 0}return a=a.i.splice(0,h),d.G=a,H}function ig(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;j||y(),M||(j(),M=!0),w.add(d,a),a.A=0}}function Td(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=vs(u(a.Da,a),lg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,og(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=vs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Rl(this),og(this))};function xd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function og(a){a.g=new Z(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=An(a.na);Re(d,"RID","rpc"),Re(d,"SID",a.M),Re(d,"AID",a.K),Re(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Re(d,"TO",a.ia),Re(d,"TYPE","xmlhttp"),Go(a,d),a.u&&a.o&&Ed(d,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=Al(An(d)),h.u=null,h.R=!0,Tl(h,a)}t.Va=function(){this.C!=null&&(this.C=null,Rl(this),Td(this),nt(19))};function Pl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ag(a,d){var h=null;if(a.g==d){Pl(a),xd(a),a.g=null;var _=2}else if(Ts(a.h,d))h=d.G,Um(a.h,d),_=1;else return;if(a.I!=0){if(d.o)if(_==1){h=d.u?d.u.length:0,d=Date.now()-d.F;var O=a.D;_=ln(),tt(_,new El(_,h)),bl(a)}else ig(a);else if(O=d.m,O==3||O==0&&d.X>0||!(_==1&&s1(a,d)||_==2&&Td(a)))switch(h&&h.length>0&&(d=a.h,d.i=d.i.concat(h)),O){case 1:Ss(a,5);break;case 4:Ss(a,10);break;case 3:Ss(a,6);break;default:Ss(a,2)}}}function lg(a,d){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*d}function Ss(a,d){if(a.j.info("Error code "+d),d==2){var h=u(a.bb,a),_=a.Ua;const O=!_;_=new Er(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fo(_,"https"),Al(_),O?XT(_.toString(),h):ZT(_.toString(),h)}else nt(2);a.I=0,a.l&&a.l.pa(d),cg(a),ng(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function cg(a){if(a.I=0,a.ja=[],a.l){const d=zm(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ja,d),k(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function ug(a,d,h){var _=h instanceof Er?An(h):new Er(h);if(_.g!="")d&&(_.g=d+"."+_.g),Uo(_,_.u);else{var O=o.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;const L=new Er(null);_&&Fo(L,_),d&&(L.g=d),O&&Uo(L,O),h&&(L.h=h),_=L}return h=a.G,d=a.wa,h&&d&&Re(_,h,d),Re(_,"VER",a.ka),Go(a,_),_}function dg(a,d,h){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ue(new wd({ab:h})):new Ue(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hg(){}t=hg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Nl(){}Nl.prototype.g=function(a,d){return new jt(a,d)};function jt(a,d){He.call(this),this.g=new tg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!S(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new yi(this)}g(jt,He),jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Id(this.g)},jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=di(a),a=h);d.i.push(new Sl(d.Ya++,a)),d.I==3&&bl(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,Id(this.g),delete this.g,jt.Z.N.call(this)};function fg(a){fe.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}g(fg,fe);function pg(){hi.call(this),this.status=1}g(pg,hi);function yi(a){this.g=a}g(yi,hg),yi.prototype.ra=function(){tt(this.g,"a")},yi.prototype.qa=function(a){tt(this.g,new fg(a))},yi.prototype.pa=function(a){tt(this.g,new pg)},yi.prototype.oa=function(){tt(this.g,"b")},Nl.prototype.createWebChannel=Nl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,OE=function(){return new Nl},VE=function(){return ln()},DE=xn,wf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,Ec=fi,Il.COMPLETE="complete",NE=Il,_s.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",He.prototype.listen=He.prototype.J,ha=_s,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,PE=Ue}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let mo="12.10.0";function PR(t){mo=t}/**
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
 */const Ks=new Fu("@firebase/firestore");function vi(){return Ks.logLevel}function Y(t,...e){if(Ks.logLevel<=me.DEBUG){const n=e.map(Gp);Ks.debug(`Firestore (${mo}): ${t}`,...n)}}function ur(t,...e){if(Ks.logLevel<=me.ERROR){const n=e.map(Gp);Ks.error(`Firestore (${mo}): ${t}`,...n)}}function Qs(t,...e){if(Ks.logLevel<=me.WARN){const n=e.map(Gp);Ks.warn(`Firestore (${mo}): ${t}`,...n)}}function Gp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ME(t,r,n)}function ME(t,e,n){let r=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ur(r),new Error(r)}function Ee(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ME(e,s,r)}function le(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class LE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VR{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new LE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class OR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class MR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new n_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new n_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=jR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Ef(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ih(s)===ih(i)?ge(s,i):ih(s)?1:-1}return ge(t.length,e.length)}const FR=55296,UR=57343;function ih(t){const e=t.charCodeAt(0);return e>=FR&&e<=UR}function ro(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const r_="__name__";class Nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Nn.isNumericId(e),s=Nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Nn.extractNumericId(e).compare(Nn.extractNumericId(n)):Ef(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class Ce extends Nn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const zR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Nn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return zR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===r_}static keyField(){return new ut([r_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ce.fromString(e))}static fromName(e){return new te(Ce.fromString(e).popFirst(5))}static empty(){return new te(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ce(e.slice()))}}/**
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
 */function jE(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $R(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s_(t){if(!te.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i_(t){if(te.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function FE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function fl(t,e){if(!FE(t))throw new G(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const o_=-62135596800,a_=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*a_);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<o_)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/a_}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-o_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:Ye("string",Ne._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ne(0,0))}static max(){return new ae(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ja=-1;function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new ts(s,te.empty(),e)}function qR(t){return new ts(t.readTime,t.key,Ja)}class ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ts(ae.min(),te.empty(),Ja)}static max(){return new ts(ae.max(),te.empty(),Ja)}}function WR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const HR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function go(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==HR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wu.ce=-1;/**
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
 */const Qp=-1;function Hu(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function QR(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const UE="";function YR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=l_(e)),e=JR(t.get(n),e);return l_(e)}function JR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case UE:n+="";break;default:n+=i}}return n}function l_(t){return t+UE+""}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new $t([])}unionWith(e){let n=new et(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $E("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const XR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(Ee(!!t,39018),typeof t=="string"){let e=0;const n=XR.exec(t);if(Ee(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const BE="server_timestamp",qE="__type__",WE="__previous_value__",HE="__local_write_time__";function Yp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[qE])==null?void 0:r.stringValue)===BE}function Gu(t){const e=t.mapValue.fields[WE];return Yp(e)?Gu(e):e}function Xa(t){const e=ns(t.mapValue.fields[HE].timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class ZR{constructor(e,n,r,s,i,o,l,c,u,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=g}}const au="(default)";class Za{constructor(e,n){this.projectId=e,this.database=n||au}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database===au}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}function eb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(t.options.projectId,e)}/**
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
 */const GE="__type__",tb="__max__",ec={mapValue:{}},KE="__vector__",lu="value";function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yp(t)?4:rb(t)?9007199254740991:nb(t)?10:11:oe(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ns(s.timestampValue),l=ns(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),l=qe(i.doubleValue);return o===l?ou(o)===ou(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(c_(o)!==c_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!$n(o[c],l[c])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function el(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return d_(t.timestampValue,e.timestampValue);case 4:return d_(Xa(t),Xa(e));case 5:return Ef(t.stringValue,e.stringValue);case 6:return function(i,o){const l=rs(i),c=rs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ge(l[u],c[u]);if(f!==0)return f}return ge(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge(qe(i.latitude),qe(o.latitude));return l!==0?l:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return h_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,x,k,b;const l=i.fields||{},c=o.fields||{},u=(m=l[lu])==null?void 0:m.arrayValue,f=(x=c[lu])==null?void 0:x.arrayValue,g=ge(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return g!==0?g:h_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ec.mapValue&&o===ec.mapValue)return 0;if(i===ec.mapValue)return 1;if(o===ec.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const m=Ef(c[g],f[g]);if(m!==0)return m;const x=so(l[c[g]],u[f[g]]);if(x!==0)return x}return ge(c.length,f.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function d_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ns(t),r=ns(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function h_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=so(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function io(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ns(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=If(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${If(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function Ic(t){switch(ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(t);return e?16+Ic(e):16;case 5:return 2*t.stringValue.length;case 6:return rs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ic(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ds(r.fields,(i,o)=>{s+=i.length+Ic(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function f_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tf(t){return!!t&&"integerValue"in t}function Jp(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function nb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[GE])==null?void 0:r.stringValue)===KE}function Ca(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return{...t}}function rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===tb}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ca(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(Ca(this.value))}}function QE(t){const e=[];return ds(t.fields,(n,r)=>{const s=new ut([n]);if(Tc(r)){const i=QE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,ae.min(),ae.min(),ae.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,ae.min(),ae.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ae.min(),ae.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=so(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function sb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class YE{}class Qe extends YE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ob(e,n,r):n==="array-contains"?new cb(e,r):n==="in"?new ub(e,r):n==="not-in"?new db(e,r):n==="array-contains-any"?new hb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ab(e,r):new lb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(so(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends YE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new En(e,n)}matches(e){return JE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function JE(t){return t.op==="and"}function XE(t){return ib(t)&&JE(t)}function ib(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function xf(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+io(t.value);if(XE(t))return t.filters.map(e=>xf(e)).join(",");{const e=t.filters.map(n=>xf(n)).join(",");return`${t.op}(${e})`}}function ZE(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ZE(o,s.filters[l]),!0):!1}(t,e):void oe(19439)}function eI(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(eI).join(" ,")+"}"}(t):"Filter"}class ob extends Qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class ab extends Qe{constructor(e,n){super(e,"in",n),this.keys=tI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=tI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class cb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jp(n)&&el(n.arrayValue,this.value)}}class ub extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class db extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!el(this.value.arrayValue,n)}}class hb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}/**
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
 */class fb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function __(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fb(t,e,n,r,s,i,o)}function Xp(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.Te=n}return e.Te}function Zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Sf(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _o{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pb(t,e,n,r,s,i,o,l){return new _o(t,e,n,r,s,i,o,l)}function Ku(t){return new _o(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mb(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nI(t){return t.collectionGroup!==null}function ka(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new tl(i,r))}),n.has(ut.keyField().canonicalString())||e.Ie.push(new tl(ut.keyField(),r))}return e.Ie}function jn(t){const e=le(t);return e.Ee||(e.Ee=gb(e,ka(t))),e.Ee}function gb(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tl(s.field,i)});const n=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e){const n=t.filters.concat([e]);return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yb(t,e){const n=t.explicitOrderBy.concat([e]);return new _o(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Cf(t,e,n){return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return Zp(jn(t),jn(e))&&t.limitType===e.limitType}function rI(t){return`${Xp(jn(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eI(s)).join(", ")}]`),Hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>io(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>io(s)).join(",")),`Target(${r})`}(jn(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ka(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=g_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,ka(r),s)||r.endAt&&!function(o,l,c){const u=g_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,ka(r),s))}(t,e)}function _b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sI(t){return(e,n)=>{let r=!1;for(const s of ka(t)){const i=vb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?so(c,u):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
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
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zE(this.inner)}size(){return this.innerSize}}/**
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
 */const wb=new Fe(te.comparator);function dr(){return wb}const iI=new Fe(te.comparator);function fa(...t){let e=iI;for(const n of t)e=e.insert(n.key,n);return e}function oI(t){let e=iI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Os(){return Ra()}function aI(){return Ra()}function Ra(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Eb=new Fe(te.comparator),Ib=new et(te.comparator);function ye(...t){let e=Ib;for(const n of t)e=e.add(n);return e}const Tb=new et(ge);function xb(){return Tb}/**
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
 */function em(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function lI(t){return{integerValue:""+t}}function Sb(t,e){return QR(e)?lI(e):em(t,e)}/**
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
 */class Ju{constructor(){this._=void 0}}function Ab(t,e,n){return t instanceof nl?function(s,i){const o={fields:{[qE]:{stringValue:BE},[HE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yp(i)&&(i=Gu(i)),i&&(o.fields[WE]=i),{mapValue:o}}(n,e):t instanceof oo?uI(t,e):t instanceof ao?dI(t,e):function(s,i){const o=cI(s,i),l=w_(o)+w_(s.Ae);return Tf(o)&&Tf(s.Ae)?lI(l):em(s.serializer,l)}(t,e)}function Cb(t,e,n){return t instanceof oo?uI(t,e):t instanceof ao?dI(t,e):n}function cI(t,e){return t instanceof uu?function(r){return Tf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nl extends Ju{}class oo extends Ju{constructor(e){super(),this.elements=e}}function uI(t,e){const n=hI(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends Ju{constructor(e){super(),this.elements=e}}function dI(t,e){let n=hI(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class uu extends Ju{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function w_(t){return qe(t.integerValue||t.doubleValue)}function hI(t){return Jp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tm{constructor(e,n){this.field=e,this.transform=n}}function kb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oo&&s instanceof oo||r instanceof ao&&s instanceof ao?ro(r.elements,s.elements,$n):r instanceof uu&&s instanceof uu?$n(r.Ae,s.Ae):r instanceof nl&&s instanceof nl}(t.transform,e.transform)}class Rb{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function fI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nm(t.key,tn.none()):new pl(t.key,t.data,tn.none());{const n=t.data,r=Pt.empty();let s=new et(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hs(t.key,r,new $t(s.toArray()),tn.none())}}function bb(t,e,n){t instanceof pl?function(s,i,o){const l=s.value.clone(),c=I_(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(s,i,o){if(!xc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=I_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pI(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,r){return t instanceof pl?function(i,o,l,c){if(!xc(i.precondition,o))return l;const u=i.value.clone(),f=T_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof hs?function(i,o,l,c){if(!xc(i.precondition,o))return l;const u=T_(i.fieldTransforms,c,o),f=o.data;return f.setAll(pI(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return xc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Pb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cI(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ro(r,s,(i,o)=>kb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends Xu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hs extends Xu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;Ee(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Cb(o,l,n[s]))}return r}function T_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ab(i,o,e))}return r}class nm extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nb extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Db{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=fI(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>E_(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class rm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Eb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rm(e,n,r,s)}}/**
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
 */class Vb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,_e;function Mb(t){switch(t){case F.OK:return oe(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function mI(t){if(t===void 0)return ur("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ge.OK:return F.OK;case Ge.CANCELLED:return F.CANCELLED;case Ge.UNKNOWN:return F.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return F.INTERNAL;case Ge.UNAVAILABLE:return F.UNAVAILABLE;case Ge.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ge.NOT_FOUND:return F.NOT_FOUND;case Ge.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ge.ABORTED:return F.ABORTED;case Ge.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ge.DATA_LOSS:return F.DATA_LOSS;default:return oe(39323,{code:t})}}(_e=Ge||(Ge={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lb(){return new TextEncoder}/**
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
 */const jb=new Jr([4294967295,4294967295],0);function x_(t){const e=Lb().encode(t),n=new bE;return n.update(e),new Uint8Array(n.digest())}function S_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pa(`Invalid padding: ${n}`);if(r<0)throw new pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Jr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(jb)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=x_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(ae.min(),s,new Fe(ge),dr(),ye())}}class ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,ye(),ye(),ye())}}/**
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
 */class Sc{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class gI{constructor(e,n){this.targetId=e,this.Ce=n}}class yI{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class A_{constructor(){this.ve=0,this.Fe=C_(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new ml(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=C_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Fb{constructor(e){this.Ge=e,this.ze=new Map,this.je=dr(),this.He=tc(),this.Je=tc(),this.Ze=new Fe(ge)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Sf(i))if(r===0){const o=new te(i.path);this.et(n,o,vt.newNoDocument(o,ae.min()))}else Ee(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=rs(r).toUint8Array()}catch(c){if(c instanceof $E)return Qs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new sm(o,s,i)}catch(c){return Qs(c instanceof pa?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Sf(l.target)){const c=new te(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,vt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ye();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Zu(e,n,this.Ze,this.je,r);return this.je=dr(),this.He=tc(),this.Je=tc(),this.Ze=new Fe(ge),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new A_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new et(ge),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new et(ge),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new A_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function tc(){return new Fe(te.comparator)}function C_(){return new Fe(te.comparator)}const Ub={asc:"ASCENDING",desc:"DESCENDING"},zb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$b={and:"AND",or:"OR"};class Bb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Hu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _I(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qb(t,e){return du(t,e.toTimestamp())}function Fn(t){return Ee(!!t,49232),ae.fromTimestamp(function(n){const r=ns(n);return new Ne(r.seconds,r.nanos)}(t))}function im(t,e){return Rf(t,e).canonicalString()}function Rf(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vI(t){const e=Ce.fromString(t);return Ee(xI(e),10190,{key:e.toString()}),e}function bf(t,e){return im(t.databaseId,e.path)}function oh(t,e){const n=vI(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(EI(n))}function wI(t,e){return im(t.databaseId,e)}function Wb(t){const e=vI(t);return e.length===4?Ce.emptyPath():EI(e)}function Pf(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EI(t){return Ee(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function k_(t,e,n){return{name:bf(t,e),fields:n.value.mapValue.fields}}function Hb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ee(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:mI(u.code);return new G(f,u.message||"")}(o);n=new yI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oh(t,r.document.name),i=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):ae.min(),l=new Pt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Sc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oh(t,r.document),i=r.readTime?Fn(r.readTime):ae.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Sc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oh(t,r.document),i=r.removedTargetIds||[];n=new Sc([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ob(s,i),l=r.targetId;n=new gI(l,o)}}return n}function Gb(t,e){let n;if(e instanceof pl)n={update:k_(t,e.key,e.value)};else if(e instanceof nm)n={delete:bf(t,e.key)};else if(e instanceof hs)n={update:k_(t,e.key,e.data),updateMask:nP(e.fieldMask)};else{if(!(e instanceof Nb))return oe(16599,{dt:e.type});n={verify:bf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function Kb(t,e){return t&&t.length>0?(Ee(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Fn(s.updateTime):Fn(i);return o.isEqual(ae.min())&&(o=Fn(i)),new Rb(o,s.transformResults||[])}(n,e))):[]}function Qb(t,e){return{documents:[wI(t,e.path)]}}function Yb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wI(t,s);const i=function(u){if(u.length!==0)return TI(En.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ei(m.field),direction:Zb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Jb(t){let e=Wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=II(g);return m instanceof En&&XE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(k){return new tl(Ii(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Hu(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(g){const m=!!g.before,x=g.values||[];return new cu(x,m)}(n.startAt));let u=null;return n.endAt&&(u=function(g){const m=!g.before,x=g.values||[];return new cu(x,m)}(n.endAt)),pb(e,s,o,i,l,"F",c,u)}function Xb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function II(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ii(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>II(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function Zb(t){return Ub[t]}function eP(t){return zb[t]}function tP(t){return $b[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function Ii(t){return ut.fromServerFormat(t.fieldPath)}function TI(t){return t instanceof Qe?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:eP(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>TI(s));return r.length===1?r[0]:{compositeFilter:{op:tP(n.op),filters:r}}}(t):oe(54877,{filter:t})}function nP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function SI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Ur{constructor(e,n,r,s,i=ae.min(),o=ae.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rP{constructor(e){this.yt=e}}function sP(t){const e=Jb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}/**
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
 */class iP{constructor(){this.Sn=new oP}addToCollectionParentIndex(e,n){return this.Sn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ts.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class oP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Ce.comparator)).toArray()}}/**
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
 */const R_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AI=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(AI,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
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
 */class lo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new lo(0)}static ar(){return new lo(-1)}}/**
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
 */const b_="LruGarbageCollector",aP=1048576;function P_([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class lP{constructor(e){this.Pr=e,this.buffer=new et(P_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();P_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Y(b_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yo(n)?Y(b_,"Ignoring IndexedDB error during garbage collection: ",n):await go(n)}await this.Ar(3e5)})}}class uP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Wu.ce);const r=new lP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(R_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(u=Date.now(),vi()<=me.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function dP(t,e){return new uP(t,e)}/**
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
 */class hP{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ba(r.mutation,s,$t.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=fa();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=dr();const o=Ra(),l=function(){return Ra()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof hs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ba(f.mutation,u,f.mutation.getFieldMask(),Ne.now())):o.set(u.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new fP(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ra();let s=new Fe((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||$t.empty();f=l.applyToLocalView(u,f),r.set(c,f);const g=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,g=aI();f.forEach(m=>{if(!i.has(m)){const x=fI(n.get(m),r.get(m));x!==null&&g.set(m,x),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,g))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return mb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Os());let l=Ja,c=i;return o.next(u=>U.forEach(u,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(f=>({batchId:l,changes:oI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=fa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=fa();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(g,m){return new _o(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))});let l=fa();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ba(f.mutation,u,$t.empty(),Ne.now()),Yu(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class mP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:sP(s.bundledQuery),readTime:Fn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class gP{constructor(){this.overlays=new Fe(te.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Os(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Os(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Os(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return U.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vb(n,r));let i=this.Lr.get(n);i===void 0&&(i=ye(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class yP{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class om{constructor(){this.kr=new et(st.Kr),this.qr=new et(st.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new st(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new st(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new te(new Ce([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new te(new Ce([])),r=new st(n,e),s=new st(n,e+1);let i=ye();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return te.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||te.comparator(e.key,n.key)}}/**
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
 */class _P{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new et(st.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Db(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Qp:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ge);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new st(new te(i),0);let l=new et(ge);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),U.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return U.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new st(n,0),s=this.Jr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vP{constructor(e){this.ti=e,this.docs=function(){return new Fe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dr();const o=n.path,l=new te(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WR(qR(f),r)<=0||(s.has(f.key)||Yu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wP(this)}getSize(e){return U.resolve(this.size)}}class wP extends hP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class EP{constructor(e){this.persistence=e,this.ri=new oi(n=>Xp(n),Zp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new om,this.targetCount=0,this.oi=lo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
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
 */class CI{constructor(e,n){this._i={},this.overlays={},this.ai=new Wu(0),this.ui=!1,this.ui=!0,this.ci=new yP,this.referenceDelegate=e(this),this.li=new EP(this),this.indexManager=new iP,this.remoteDocumentCache=function(s){return new vP(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new rP(n),this.Pi=new mP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new _P(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new IP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class IP extends GR{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.Ri=new om,this.Ai=null}static Vi(e){return new am(e)}get di(){if(this.Ai)return this.Ai;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=te.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class hu{constructor(e,n){this.persistence=e,this.fi=new oi(r=>YR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dP(this,n)}static Vi(e,n){return new hu(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ic(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lm(e,n.fromCache,r,s)}}/**
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
 */class TP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return GS()?8:KR(Et())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TP;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(vi()<=me.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(vi()<=me.DEBUG&&Y("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(vi()<=me.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):U.resolve())}gs(e,n){if(v_(n))return U.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cf(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ss(n,u,o,c.readTime)?this.gs(e,Cf(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,s){return v_(n)||s.isEqual(ae.min())?U.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?U.resolve(null):(vi()<=me.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wi(n)),this.Ds(e,o,n,BR(s,Ja)).next(l=>l))})}bs(e,n){let r=new et(sI(e));return n.forEach((s,i)=>{Yu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return vi()<=me.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",wi(n)),this.fs.getDocumentsMatchingQuery(e,n,ts.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const cm="LocalStore",SP=3e8;class AP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Fe(ge),this.Fs=new oi(i=>Xp(i),Zp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function CP(t,e,n,r){return new AP(t,e,n,r)}async function kI(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function kP(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const g=u.batch,m=g.keys();let x=U.resolve();return m.forEach(k=>{x=x.next(()=>f.getEntry(c,k)).next(b=>{const P=u.docVersions.get(k);Ee(P!==null,48541),b.version.compareTo(P)<0&&(g.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function RI(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function RP(t,e){const n=le(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let x=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?x=x.withResumeToken(ft.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(g,x),function(b,P,E){return b.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=SP?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,x,f)&&l.push(n.li.updateTargetData(i,x))});let c=dr(),u=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(bP(i,o,e.documentUpdates).next(f=>{c=f.Bs,u=f.Ls})),!r.isEqual(ae.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.vs=s,i))}function bP(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=dr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(cm,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function PP(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NP(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nf(t,e,n){const r=le(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yo(o))throw o;Y(cm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function N_(t,e,n){const r=le(t);let s=ae.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const g=le(c),m=g.Fs.get(f);return m!==void 0?U.resolve(g.vs.get(m)):g.li.getTargetData(u,f)}(r,o,jn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ye())).next(l=>(DP(r,_b(e),l),{documents:l,ks:i})))}function DP(t,e,n){let r=t.Ms.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class D_{constructor(){this.activeTargetIds=xb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.vo=new D_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OP{Mo(e){}shutdown(){}}/**
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
 */const V_="ConnectivityMonitor";class O_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Y(V_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Y(V_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function Df(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
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
 */const ah="RestConnection",MP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===au?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Df(),l=this.Qo(e,n.toUriEncodedString());Y(ah,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),f=ni(u);return this.zo(e,l,c,r,f).then(g=>(Y(ah,`Received RPC '${e}' ${o}: `,g),g),g=>{throw Qs(ah,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=MP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class jP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const gt="WebChannelConnection",na=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Wi extends LP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Wi.c_){const e=VE();na(e,DE.STAT_EVENT,n=>{n.stat===wf.PROXY?Y(gt,"STAT_EVENT: detected buffering proxy"):n.stat===wf.NOPROXY&&Y(gt,"STAT_EVENT: detected no buffering proxy")}),Wi.c_=!0}}zo(e,n,r,s,i){const o=Df();return new Promise((l,c)=>{const u=new PE;u.setWithCredentials(!0),u.listenOnce(NE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ec.NO_ERROR:const g=u.getResponseJson();Y(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Ec.TIMEOUT:Y(gt,`RPC '${e}' ${o} timed out`),c(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const m=u.getStatus();if(Y(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let x=u.getResponseJson();Array.isArray(x)&&(x=x[0]);const k=x==null?void 0:x.error;if(k&&k.status&&k.message){const b=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(k.status);c(new G(b,k.message))}else c(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new G(F.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Y(gt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Y(gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Df(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");Y(gt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const f=o.createWebChannel(u,l);this.I_(f);let g=!1,m=!1;const x=new jP({Ho:k=>{m?Y(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(Y(gt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),Y(gt,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return na(f,ha.EventType.OPEN,()=>{m||(Y(gt,`RPC '${e}' stream ${s} transport opened.`),x.i_())}),na(f,ha.EventType.CLOSE,()=>{m||(m=!0,Y(gt,`RPC '${e}' stream ${s} transport closed`),x.o_(),this.E_(f))}),na(f,ha.EventType.ERROR,k=>{m||(m=!0,Qs(gt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),x.o_(new G(F.UNAVAILABLE,"The operation could not be completed")))}),na(f,ha.EventType.MESSAGE,k=>{var b;if(!m){const P=k.data[0];Ee(!!P,16349);const E=P,v=(E==null?void 0:E.error)||((b=E[0])==null?void 0:b.error);if(v){Y(gt,`RPC '${e}' stream ${s} received error:`,v);const T=v.status;let D=function(w){const y=Ge[w];if(y!==void 0)return mI(y)}(T),j=v.message;T==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Qs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=F.INTERNAL,j="Unknown error status: "+T+" with message "+v.message),m=!0,x.o_(new G(D,j)),f.close()}else Y(gt,`RPC '${e}' stream ${s} received:`,P),x.__(P)}}),Wi.u_(),setTimeout(()=>{x.s_()},0),x}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return OE()}}/**
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
 */function FP(t){return new Wi(t)}function lh(){return typeof document<"u"?document:null}/**
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
 */function ed(t){return new Bb(t,!0)}/**
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
 */Wi.c_=!1;class bI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const M_="PersistentStream";class PI{constructor(e,n,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Y(M_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Y(M_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UP extends PI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Hb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Fn(o.readTime):ae.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Pf(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Sf(c)?{documents:Qb(i,c)}:{query:Yb(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_I(i,o.resumeToken);const u=kf(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){l.readTime=du(i,o.snapshotVersion.toTimestamp());const u=kf(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=Xb(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Pf(this.serializer),n.removeTarget=e,this.K_(n)}}class zP extends PI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Kb(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Pf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Gb(this.serializer,r))};this.K_(n)}}/**
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
 */class $P{}class BP extends $P{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Rf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(F.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function qP(t,e,n,r){return new BP(t,e,n,r)}class WP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):Y("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ys="RemoteStore";class HP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ai(this)&&(Y(Ys,"Restarting streams for network reachability change."),await async function(c){const u=le(c);u.Ea.add(4),await gl(u),u.Va.set("Unknown"),u.Ea.delete(4),await td(u)}(this))})}),this.Va=new WP(r,s)}}async function td(t){if(ai(t))for(const e of t.Ra)await e(!0)}async function gl(t){for(const e of t.Ra)await e(!1)}function NI(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),fm(n)?hm(n):vo(n).O_()&&dm(n,e))}function um(t,e){const n=le(t),r=vo(n);n.Ia.delete(e),r.O_()&&DI(n,e),n.Ia.size===0&&(r.O_()?r.L_():ai(n)&&n.Va.set("Unknown"))}function dm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).Z_(e)}function DI(t,e){t.da.$e(e),vo(t).X_(e)}function hm(t){t.da=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.Va.ua()}function fm(t){return ai(t)&&!vo(t).x_()&&t.Ia.size>0}function ai(t){return le(t).Ea.size===0}function VI(t){t.da=void 0}async function GP(t){t.Va.set("Online")}async function KP(t){t.Ia.forEach((e,n)=>{dm(t,e)})}async function QP(t,e){VI(t),fm(t)?(t.Va.ha(e),hm(t)):t.Va.set("Unknown")}async function YP(t,e,n){if(t.Va.set("Online"),e instanceof yI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){Y(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fu(t,r)}else if(e instanceof Sc?t.da.Xe(e):e instanceof gI?t.da.st(e):t.da.tt(e),!n.isEqual(ae.min()))try{const r=await RI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),DI(i,c);const g=new Ur(f.target,c,u,f.sequenceNumber);dm(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(Ys,"Failed to raise snapshot:",r),await fu(t,r)}}async function fu(t,e,n){if(!yo(e))throw e;t.Ea.add(1),await gl(t),t.Va.set("Offline"),n||(n=()=>RI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(Ys,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await td(t)})}function OI(t,e){return e().catch(n=>fu(t,n,e))}async function nd(t){const e=le(t),n=is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qp;for(;JP(e);)try{const s=await PP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,XP(e,s)}catch(s){await fu(e,s)}MI(e)&&LI(e)}function JP(t){return ai(t)&&t.Ta.length<10}function XP(t,e){t.Ta.push(e);const n=is(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function MI(t){return ai(t)&&!is(t).x_()&&t.Ta.length>0}function LI(t){is(t).start()}async function ZP(t){is(t).ra()}async function eN(t){const e=is(t);for(const n of t.Ta)e.ea(n.mutations)}async function tN(t,e,n){const r=t.Ta.shift(),s=rm.from(r,e,n);await OI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await nd(t)}async function nN(t,e){e&&is(t).Y_&&await async function(r,s){if(function(o){return Mb(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();is(r).B_(),await OI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nd(r)}}(t,e),MI(t)&&LI(t)}async function L_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Y(Ys,"RemoteStore received new credentials");const r=ai(n);n.Ea.add(3),await gl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await td(n)}async function rN(t,e){const n=le(t);e?(n.Ea.delete(2),await td(n)):e||(n.Ea.add(2),await gl(n),n.Va.set("Unknown"))}function vo(t){return t.ma||(t.ma=function(n,r,s){const i=le(n);return i.sa(),new UP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:GP.bind(null,t),Yo:KP.bind(null,t),t_:QP.bind(null,t),J_:YP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),fm(t)?hm(t):t.Va.set("Unknown")):(await t.ma.stop(),VI(t))})),t.ma}function is(t){return t.fa||(t.fa=function(n,r,s){const i=le(n);return i.sa(),new zP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ZP.bind(null,t),t_:nN.bind(null,t),ta:eN.bind(null,t),na:tN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await nd(t)):(await t.fa.stop(),t.Ta.length>0&&(Y(Ys,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class pm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(ur("AsyncQueue",`${e}: ${t}`),yo(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hi{static emptySet(e){return new Hi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=fa(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class j_{constructor(){this.ga=new Fe(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class co{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new co(e,n,Hi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class iN{constructor(){this.queries=F_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=F_(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function F_(){return new oi(t=>rI(t),Qu)}async function gm(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new sN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mm(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_m(n)}async function ym(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oN(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&_m(n)}function aN(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function _m(t){t.Ca.forEach(e=>{e.next()})}var Vf,U_;(U_=Vf||(Vf={})).Ma="default",U_.Cache="cache";class vm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vf.Cache}}/**
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
 */class jI{constructor(e){this.key=e}}class FI{constructor(e){this.key=e}}class lN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.eu=sI(e),this.tu=new Hi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new j_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),x=Yu(this.query,g)?g:null,k=!!m&&this.mutatedKeys.has(m.key),b=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let P=!1;m&&x?m.data.isEqual(x.data)?k!==b&&(r.track({type:3,doc:x}),P=!0):this.su(m,x)||(r.track({type:2,doc:x}),P=!0,(c&&this.eu(x,c)>0||u&&this.eu(x,u)<0)&&(l=!0)):!m&&x?(r.track({type:0,doc:x}),P=!0):m&&!x&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(x?(o=o.add(x),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(x,k){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:P})}};return b(x)-b(k)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new co(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new j_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new FI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new jI(r))}),n}cu(e){this.Za=e.ks,this.Ya=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return co.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wm="SyncEngine";class cN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uN{constructor(e){this.key=e,this.hu=!1}}class dN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new oi(l=>rI(l),Qu),this.Iu=new Map,this.Eu=new Set,this.Ru=new Fe(te.comparator),this.Au=new Map,this.Vu=new om,this.du={},this.mu=new Map,this.fu=lo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hN(t,e,n=!0){const r=WI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await UI(r,e,n,!0),s}async function fN(t,e){const n=WI(t);await UI(n,e,!0,!1)}async function UI(t,e,n,r){const s=await NP(t.localStore,jn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await pN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&NI(t.remoteStore,s),l}async function pN(t,e,n,r,s){t.pu=(g,m,x)=>async function(b,P,E,v){let T=P.view.ru(E);T.Ss&&(T=await N_(b.localStore,P.query,!1).then(({documents:w})=>P.view.ru(w,T)));const D=v&&v.targetChanges.get(P.targetId),j=v&&v.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(T,b.isPrimaryClient,D,j);return $_(b,P.targetId,M.au),M.snapshot}(t,g,m,x);const i=await N_(t.localStore,e,!0),o=new lN(e,i.ks),l=o.ru(i.documents),c=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$_(t,n,u.au);const f=new cN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function mN(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&um(r.remoteStore,s.targetId),Of(r,s.targetId)}).catch(go)):(Of(r,s.targetId),await Nf(r.localStore,s.targetId,!0))}async function gN(t,e){const n=le(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function yN(t,e,n){const r=xN(t);try{const s=await function(o,l){const c=le(o),u=Ne.now(),f=l.reduce((x,k)=>x.add(k.key),ye());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let k=dr(),b=ye();return c.xs.getEntries(x,f).next(P=>{k=P,k.forEach((E,v)=>{v.isValidDocument()||(b=b.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,k)).next(P=>{g=P;const E=[];for(const v of l){const T=Pb(v,g.get(v.key).overlayedDocument);T!=null&&E.push(new hs(v.key,T,QE(T.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(x,u,E,l)}).next(P=>{m=P;const E=P.applyToLocalDocumentSet(g,b);return c.documentOverlayCache.saveOverlays(x,P.batchId,E)})}).then(()=>({batchId:m.batchId,changes:oI(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Fe(ge)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await yl(r,s.changes),await nd(r.remoteStore)}catch(s){const i=mm(s,"Failed to persist write");n.reject(i)}}async function zI(t,e){const n=le(t);try{const r=await RP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ee(o.hu,14607):s.removedDocuments.size>0&&(Ee(o.hu,42227),o.hu=!1))}),await yl(n,r,e)}catch(r){await go(r)}}function z_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=le(o);c.onlineState=l;let u=!1;c.queries.forEach((f,g)=>{for(const m of g.ba)m.va(l)&&(u=!0)}),u&&_m(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _N(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Fe(te.comparator);o=o.insert(i,vt.newNoDocument(i,ae.min()));const l=ye().add(i),c=new Zu(ae.min(),new Map,new Fe(ge),o,l);await zI(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Em(r)}else await Nf(r.localStore,e,!1).then(()=>Of(r,e,n)).catch(go)}async function vN(t,e){const n=le(t),r=e.batch.batchId;try{const s=await kP(n.localStore,e);BI(n,r,null),$I(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,s)}catch(s){await go(s)}}async function wN(t,e,n){const r=le(t);try{const s=await function(o,l){const c=le(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(g=>(Ee(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(u,g))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);BI(r,e,n),$I(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,s)}catch(s){await go(s)}}function $I(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function BI(t,e,n){const r=le(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||qI(t,r)})}function qI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(um(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Em(t))}function $_(t,e,n){for(const r of n)r instanceof jI?(t.Vu.addReference(r.key,e),EN(t,r)):r instanceof FI?(Y(wm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||qI(t,r.key)):oe(19791,{wu:r})}function EN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Y(wm,"New document in limbo: "+n),t.Eu.add(r),Em(t))}function Em(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new uN(n)),t.Ru=t.Ru.insert(n,r),NI(t.remoteStore,new Ur(jn(Ku(n.path)),r,"TargetPurposeLimboResolution",Wu.ce))}}async function yl(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const g=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(u){s.push(u);const g=lm.Es(c.targetId,u);i.push(g)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,u){const f=le(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(u,m=>U.forEach(m.Ts,x=>f.persistence.referenceDelegate.addReference(g,m.targetId,x)).next(()=>U.forEach(m.Is,x=>f.persistence.referenceDelegate.removeReference(g,m.targetId,x)))))}catch(g){if(!yo(g))throw g;Y(cm,"Failed to update sequence numbers: "+g)}for(const g of u){const m=g.targetId;if(!g.fromCache){const x=f.vs.get(m),k=x.snapshotVersion,b=x.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(m,b)}}}(r.localStore,i))}async function IN(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Y(wm,"User change. New user:",e.toKey());const r=await kI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new G(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.Ns)}}function TN(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function WI(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_N.bind(null,e),e.Pu.J_=oN.bind(null,e.eventManager),e.Pu.yu=aN.bind(null,e.eventManager),e}function xN(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wN.bind(null,e),e}class pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ed(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return CP(this.persistence,new xP,e.initialUser,this.serializer)}Cu(e){return new CI(am.Vi,this.serializer)}Du(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pu.provider={build:()=>new pu};class SN extends pu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ee(this.persistence.referenceDelegate instanceof hu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new CI(r=>hu.Vi(r,n),this.serializer)}}class Mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>z_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IN.bind(null,this.syncEngine),await rN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iN}()}createDatastore(e){const n=ed(e.databaseInfo.databaseId),r=FP(e.databaseInfo);return qP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new HP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>z_(this.syncEngine,n,0),function(){return O_.v()?new O_:new OP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const g=new dN(s,i,o,l,c,u);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);Y(Ys,"RemoteStore shutting down."),i.Ea.add(5),await gl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mf.provider={build:()=>new Mf};/**
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
 */class Im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const os="FirestoreClient";class AN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Kp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y(os,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y(os,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ch(t,e){t.asyncQueue.verifyOperationInProgress(),Y(os,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CN(t);Y(os,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>L_(e.remoteStore,s)),t._onlineComponents=e}async function CN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(os,"Using user provided OfflineComponentProvider");try{await ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await ch(t,new pu)}}else Y(os,"Using default OfflineComponentProvider"),await ch(t,new SN(void 0));return t._offlineComponents}async function HI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(os,"Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(Y(os,"Using default OnlineComponentProvider"),await B_(t,new Mf))),t._onlineComponents}function kN(t){return HI(t).then(e=>e.syncEngine)}async function mu(t){const e=await HI(t),n=e.eventManager;return n.onListen=hN.bind(null,e.syncEngine),n.onUnlisten=mN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gN.bind(null,e.syncEngine),n}function RN(t,e,n,r){const s=new Im(r),i=new vm(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>gm(await mu(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>ym(await mu(t),i))}}function bN(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Im({next:m=>{f.Nu(),o.enqueueAndForget(()=>ym(i,g));const x=m.docs.has(l);!x&&m.fromCache?u.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&c&&c.source==="server"?u.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),g=new vm(Ku(l.path),f,{includeMetadataChanges:!0,Ka:!0});return gm(i,g)}(await mu(t),t.asyncQueue,e,n,r)),r.promise}function PN(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Im({next:m=>{f.Nu(),o.enqueueAndForget(()=>ym(i,g)),m.fromCache&&c.source==="server"?u.reject(new G(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),g=new vm(l,f,{includeMetadataChanges:!0,Ka:!0});return gm(i,g)}(await mu(t),t.asyncQueue,e,n,r)),r.promise}function NN(t,e){const n=new rr;return t.asyncQueue.enqueueAndForget(async()=>yN(await kN(t),e,n)),n.promise}/**
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
 */function GI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const DN="ComponentProvider",q_=new Map;function VN(t,e,n,r,s){return new ZR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,GI(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const KI="firestore.googleapis.com",W_=!0;class H_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KI,this.ssl=W_}else this.host=e.host,this.ssl=e.ssl??W_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aP)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NR;switch(r.type){case"firstParty":return new MR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q_.get(n);r&&(Y(DN,"Removing Datastore"),q_.delete(n),r.terminate())}(this),Promise.resolve()}}function ON(t,e,n,r={}){var u;t=Lt(t,rd);const s=ni(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Mp(`https://${l}`),Lp("Firestore",!0)),i.host!==KI&&i.host!==l&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!zn(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=yt.MOCK_USER;else{f=Uw(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new yt(m)}t._authCredentials=new DR(new LE(f,g))}}/**
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
 */class fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fl(n,$e._jsonSchema))return new $e(e,r||null,new te(Ce.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Ye("string",$e._jsonSchemaVersion),referencePath:Ye("string")};class Xr extends fs{constructor(e,n,r){super(e,n,Ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new te(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Kt(t,e,...n){if(t=Oe(t),jE("collection","path",e),t instanceof rd){const r=Ce.fromString(e,...n);return i_(r),new Xr(t,null,r)}{if(!(t instanceof $e||t instanceof Xr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return i_(r),new Xr(t.firestore,null,r)}}function Tt(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=Kp.newId()),jE("doc","path",e),t instanceof rd){const r=Ce.fromString(e,...n);return s_(r),new $e(t,null,new te(r))}{if(!(t instanceof $e||t instanceof Xr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return s_(r),new $e(t.firestore,t instanceof Xr?t.converter:null,new te(r))}}/**
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
 */const G_="AsyncQueue";class K_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bI(this,"async_queue_retry"),this._c=()=>{const r=lh();r&&Y(G_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new rr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!yo(e))throw e;Y(G_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",Q_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=pm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:Q_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Q_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class hr extends rd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new K_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K_(e),this._firestoreClient=void 0,await e}}}function MN(t,e){const n=typeof t=="object"?t:Uu(),r=typeof t=="string"?t:au,s=us(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lw("firestore");i&&ON(s,...i)}return s}function sd(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LN(t),t._firestoreClient}function LN(t){var r,s,i,o;const e=t._freezeSettings(),n=VN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new AN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(ft.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Ye("string",Xt._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class Tm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wo{constructor(e){this._methodName=e}}/**
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
 */class Un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Un._jsonSchemaVersion}}static fromJSON(e){if(fl(e,Un._jsonSchema))return new Un(e.latitude,e.longitude)}}Un._jsonSchemaVersion="firestore/geoPoint/1.0",Un._jsonSchema={type:Ye("string",Un._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yn(e.vectorValues);throw new G(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Ye("string",yn._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const jN=/^__.*__$/;class FN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new pl(e,this.data,n,this.fieldTransforms)}}class QI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function YI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{dataSource:t})}}class id{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new id({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return gu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(YI(this.dataSource)&&jN.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class UN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ed(e)}createContext(e,n,r,s=!1){return new id({dataSource:e,methodName:n,targetDoc:r,path:ut.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function od(t){const e=t._freezeSettings(),n=ed(t._databaseId);return new UN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JI(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Cm("Data must be an object, but it was:",o,r);const l=ZI(r,o);let c,u;if(i.merge)c=new $t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Js(e,g,n);if(!o.contains(m))throw new G(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nT(f,m)||f.push(m)}c=new $t(f),u=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,u=o.fieldTransforms;return new FN(new Pt(l),c,u)}class ad extends wo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ad}}function XI(t,e,n){return new id({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xm extends wo{_toFieldTransform(e){return new tm(e.path,new nl)}isEqual(e){return e instanceof xm}}class Sm extends wo{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=XI(this,e,!0),r=this.Ac.map(i=>li(i,n)),s=new oo(r);return new tm(e.path,s)}isEqual(e){return e instanceof Sm&&zn(this.Ac,e.Ac)}}class Am extends wo{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=XI(this,e,!0),r=this.Ac.map(i=>li(i,n)),s=new ao(r);return new tm(e.path,s)}isEqual(e){return e instanceof Am&&zn(this.Ac,e.Ac)}}function zN(t,e,n,r){const s=t.createContext(1,e,n);Cm("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();ds(r,(c,u)=>{const f=tT(e,c,n);u=Oe(u);const g=s.childContextForFieldPath(f);if(u instanceof ad)i.push(f);else{const m=li(u,g);m!=null&&(i.push(f),o.set(f,m))}});const l=new $t(i);return new QI(o,l,s.fieldTransforms)}function $N(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Js(e,r,n)],c=[s];if(i.length%2!=0)throw new G(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Js(e,i[m])),c.push(i[m+1]);const u=[],f=Pt.empty();for(let m=l.length-1;m>=0;--m)if(!nT(u,l[m])){const x=l[m];let k=c[m];k=Oe(k);const b=o.childContextForFieldPath(x);if(k instanceof ad)u.push(x);else{const P=li(k,b);P!=null&&(u.push(x),f.set(x,P))}}const g=new $t(u);return new QI(f,g,o.fieldTransforms)}function BN(t,e,n,r=!1){return li(n,t.createContext(r?4:3,e))}function li(t,e){if(eT(t=Oe(t)))return Cm("Unsupported field value:",e,t),ZI(t,e);if(t instanceof wo)return function(r,s){if(!YI(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=li(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:du(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:du(s.serializer,i)}}if(r instanceof Un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:_I(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:im(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yn)return function(o,l){const c=o instanceof yn?o.toArray():o;return{mapValue:{fields:{[GE]:{stringValue:KE},[lu]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return em(l.serializer,f)})}}}}}}(r,s);if(SI(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${qu(r)}`)}(t,e)}function ZI(t,e){const n={};return zE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=li(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Un||t instanceof Xt||t instanceof $e||t instanceof wo||t instanceof yn||SI(t))}function Cm(t,e,n){if(!eT(n)||!FE(n)){const r=qu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Js(t,e,n){if((e=Oe(e))instanceof Tm)return e._internalPath;if(typeof e=="string")return tT(t,e);throw gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const qN=new RegExp("[~\\*/\\[\\]]");function tT(t,e,n){if(e.search(qN)>=0)throw gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tm(...e.split("."))._internalPath}catch{throw gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(F.INVALID_ARGUMENT,l+t+c)}function nT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class WN{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[lu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new yn(n)}convertGeoPoint(e){return new Un(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=ns(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Ee(xI(r),9688,{name:e});const s=new Za(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||ur(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class km extends WN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Rn(){return new xm("serverTimestamp")}function Y_(...t){return new Sm("arrayUnion",t)}function HN(...t){return new Am("arrayRemove",t)}const J_="@firebase/firestore",X_="4.12.0";/**
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
 */function Z_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class rT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Js("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GN extends rT{data(){return super.data()}}/**
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
 */function sT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rm{}class iT extends Rm{}function Gi(t,e,...n){let r=[];e instanceof Rm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof bm).length,l=i.filter(c=>c instanceof ld).length;if(o>1||o>0&&l>0)throw new G(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ld extends iT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ld(e,n,r)}_apply(e){const n=this._parse(e);return oT(e._query,n),new fs(e.firestore,e.converter,Af(e._query,n))}_parse(e){const n=od(e.firestore);return function(i,o,l,c,u,f,g){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){tv(g,f);const k=[];for(const b of g)k.push(ev(c,i,b));m={arrayValue:{values:k}}}else m=ev(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||tv(g,f),m=BN(l,o,g,f==="in"||f==="not-in");return Qe.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yu(t,e,n){const r=e,s=Js("where",t);return ld._create(s,r,n)}class bm extends Rm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)oT(o,c),o=Af(o,c)}(e._query,n),new fs(e.firestore,e.converter,Af(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pm extends iT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pm(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tl(i,o)}(e._query,this._field,this._direction);return new fs(e.firestore,e.converter,yb(e._query,n))}}function KN(t,e="asc"){const n=e,r=Js("orderBy",t);return Pm._create(r,n)}function ev(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new G(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nI(e)&&n.indexOf("/")!==-1)throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!te.isDocumentKey(r))throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return f_(t,new te(r))}if(n instanceof $e)return f_(t,n._key);throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qu(n)}.`)}function tv(t,e){if(!Array.isArray(t)||t.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function aT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ma{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fs extends rT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Js("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Fs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fs._jsonSchema={type:Ye("string",Fs._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Ac extends Fs{data(e={}){return super.data(e)}}class Us{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ma(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ac(this._firestore,this._userDataWriter,r.key,r,new ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ac(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ma(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ac(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ma(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:QN(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
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
 */Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:Ye("string",Us._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};/**
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
 */function YN(t){t=Lt(t,$e);const e=Lt(t.firestore,hr),n=sd(e);return bN(n,t._key).then(r=>lT(e,t,r))}function Lf(t){t=Lt(t,fs);const e=Lt(t.firestore,hr),n=sd(e),r=new km(e);return sT(t._query),PN(n,t._query).then(s=>new Us(e,r,t,s))}function JN(t,e,n){t=Lt(t,$e);const r=Lt(t.firestore,hr),s=aT(t.converter,e),i=od(r);return cd(r,[JI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function Jt(t,e,n,...r){t=Lt(t,$e);const s=Lt(t.firestore,hr),i=od(s);let o;return o=typeof(e=Oe(e))=="string"||e instanceof Tm?$N(i,"updateDoc",t._key,e,n,r):zN(i,"updateDoc",t._key,e),cd(s,[o.toMutation(t._key,tn.exists(!0))])}function nv(t){return cd(Lt(t.firestore,hr),[new nm(t._key,tn.none())])}function ra(t,e){const n=Lt(t.firestore,hr),r=Tt(t),s=aT(t.converter,e),i=od(t.firestore);return cd(n,[JI(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function Cc(t,...e){var u,f,g;t=Oe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Z_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Z_(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(g=m.complete)==null?void 0:g.bind(m)}let i,o,l;if(t instanceof $e)o=Lt(t.firestore,hr),l=Ku(t._key.path),i={next:m=>{e[r]&&e[r](lT(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Lt(t,fs);o=Lt(m.firestore,hr),l=m._query;const x=new km(o);i={next:k=>{e[r]&&e[r](new Us(o,x,m,k))},error:e[r+1],complete:e[r+2]},sT(t._query)}const c=sd(o);return RN(c,l,s,i)}function cd(t,e){const n=sd(t);return NN(n,e)}function lT(t,e,n){const r=n.docs.get(e._key),s=new km(t);return new Fs(t,s,e._key,r,new ma(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){PR(si),vn(new sn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new hr(new VR(r.getProvider("auth-internal")),new LR(o,r.getProvider("app-check-internal")),eb(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Mt(J_,X_,e),Mt(J_,X_,"esm2020")})();var XN="firebase",ZN="12.10.0";/**
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
 */Mt(XN,ZN,"app");const cT="@firebase/installations",Nm="0.6.20";/**
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
 */const uT=1e4,dT=`w:${Nm}`,hT="FIS_v2",e2="https://firebaseinstallations.googleapis.com/v1",t2=60*60*1e3,n2="installations",r2="Installations";/**
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
 */const s2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xs=new ri(n2,r2,s2);function fT(t){return t instanceof on&&t.code.includes("request-failed")}/**
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
 */function pT({projectId:t}){return`${e2}/projects/${t}/installations`}function mT(t){return{token:t.token,requestStatus:2,expiresIn:o2(t.expiresIn),creationTime:Date.now()}}async function gT(t,e){const r=(await e.json()).error;return Xs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function i2(t,{refreshToken:e}){const n=yT(t);return n.append("Authorization",a2(e)),n}async function _T(t){const e=await t();return e.status>=500&&e.status<600?t():e}function o2(t){return Number(t.replace("s","000"))}function a2(t){return`${hT} ${t}`}/**
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
 */async function l2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=pT(t),s=yT(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:hT,appId:t.appId,sdkVersion:dT},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await _T(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mT(u.authToken)}}else throw await gT("Create Installation",c)}/**
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
 */function vT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function c2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const u2=/^[cdef][\w-]{21}$/,jf="";function d2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=h2(t);return u2.test(n)?n:jf}catch{return jf}}function h2(t){return c2(t).substr(0,22)}/**
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
 */function ud(t){return`${t.appName}!${t.appId}`}/**
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
 */const wT=new Map;function ET(t,e){const n=ud(t);IT(n,e),f2(n,e)}function IT(t,e){const n=wT.get(t);if(n)for(const r of n)r(e)}function f2(t,e){const n=p2();n&&n.postMessage({key:t,fid:e}),m2()}let Ms=null;function p2(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=t=>{IT(t.data.key,t.data.fid)}),Ms}function m2(){wT.size===0&&Ms&&(Ms.close(),Ms=null)}/**
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
 */const g2="firebase-installations-database",y2=1,Zs="firebase-installations-store";let uh=null;function Dm(){return uh||(uh=Hw(g2,y2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}})),uh}async function _u(t,e){const n=ud(t),s=(await Dm()).transaction(Zs,"readwrite"),i=s.objectStore(Zs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ET(t,e.fid),e}async function TT(t){const e=ud(t),r=(await Dm()).transaction(Zs,"readwrite");await r.objectStore(Zs).delete(e),await r.done}async function dd(t,e){const n=ud(t),s=(await Dm()).transaction(Zs,"readwrite"),i=s.objectStore(Zs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&ET(t,l.fid),l}/**
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
 */async function Vm(t){let e;const n=await dd(t.appConfig,r=>{const s=_2(r),i=v2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===jf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _2(t){const e=t||{fid:d2(),registrationStatus:0};return xT(e)}function v2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Xs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=w2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:E2(t)}:{installationEntry:e}}async function w2(t,e){try{const n=await l2(t,e);return _u(t.appConfig,n)}catch(n){throw fT(n)&&n.customData.serverCode===409?await TT(t.appConfig):await _u(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function E2(t){let e=await rv(t.appConfig);for(;e.registrationStatus===1;)await vT(100),e=await rv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vm(t);return r||n}return e}function rv(t){return dd(t,e=>{if(!e)throw Xs.create("installation-not-found");return xT(e)})}function xT(t){return I2(t)?{fid:t.fid,registrationStatus:0}:t}function I2(t){return t.registrationStatus===1&&t.registrationTime+uT<Date.now()}/**
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
 */async function T2({appConfig:t,heartbeatServiceProvider:e},n){const r=x2(t,n),s=i2(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:dT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await _T(()=>fetch(r,l));if(c.ok){const u=await c.json();return mT(u)}else throw await gT("Generate Auth Token",c)}function x2(t,{fid:e}){return`${pT(t)}/${e}/authTokens:generate`}/**
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
 */async function Om(t,e=!1){let n;const r=await dd(t.appConfig,i=>{if(!ST(i))throw Xs.create("not-registered");const o=i.authToken;if(!e&&C2(o))return i;if(o.requestStatus===1)return n=S2(t,e),i;{if(!navigator.onLine)throw Xs.create("app-offline");const l=R2(i);return n=A2(t,l),l}});return n?await n:r.authToken}async function S2(t,e){let n=await sv(t.appConfig);for(;n.authToken.requestStatus===1;)await vT(100),n=await sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Om(t,e):r}function sv(t){return dd(t,e=>{if(!ST(e))throw Xs.create("not-registered");const n=e.authToken;return b2(n)?{...e,authToken:{requestStatus:0}}:e})}async function A2(t,e){try{const n=await T2(t,e),r={...e,authToken:n};return await _u(t.appConfig,r),n}catch(n){if(fT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await TT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await _u(t.appConfig,r)}throw n}}function ST(t){return t!==void 0&&t.registrationStatus===2}function C2(t){return t.requestStatus===2&&!k2(t)}function k2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+t2}function R2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function b2(t){return t.requestStatus===1&&t.requestTime+uT<Date.now()}/**
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
 */async function P2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vm(e);return r?r.catch(console.error):Om(e).catch(console.error),n.fid}/**
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
 */async function N2(t,e=!1){const n=t;return await D2(n),(await Om(n,e)).token}async function D2(t){const{registrationPromise:e}=await Vm(t);e&&await e}/**
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
 */function V2(t){if(!t||!t.options)throw dh("App Configuration");if(!t.name)throw dh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw dh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function dh(t){return Xs.create("missing-app-config-values",{valueName:t})}/**
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
 */const AT="installations",O2="installations-internal",M2=t=>{const e=t.getProvider("app").getImmediate(),n=V2(e),r=us(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},L2=t=>{const e=t.getProvider("app").getImmediate(),n=us(e,AT).getImmediate();return{getId:()=>P2(n),getToken:s=>N2(n,s)}};function j2(){vn(new sn(AT,M2,"PUBLIC")),vn(new sn(O2,L2,"PRIVATE"))}j2();Mt(cT,Nm);Mt(cT,Nm,"esm2020");/**
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
 */const vu="analytics",F2="firebase_id",U2="origin",z2=60*1e3,$2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new Fu("@firebase/analytics");/**
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
 */const B2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qt=new ri("analytics","Analytics",B2);/**
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
 */function q2(t){if(!t.startsWith(Mm)){const e=qt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function CT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function W2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function H2(t,e){const n=W2("firebase-js-sdk-policy",{createScriptURL:q2}),r=document.createElement("script"),s=`${Mm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function G2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function K2(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await CT(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){St.error(l)}t("config",s,i)}async function Q2(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await CT(n);for(const c of o){const u=l.find(g=>g.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){St.error(i)}}function Y2(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await Q2(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await K2(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){St.error(l)}}return s}function J2(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Y2(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function X2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mm)&&n.src.includes(t))return n;return null}/**
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
 */const Z2=30,eD=1e3;class tD{constructor(e={},n=eD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kT=new tD;function nD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:nD(n)},s=$2.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const c=await i.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function sD(t,e=kT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new aD;return setTimeout(async()=>{l.abort()},z2),RT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function RT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=kT){var l;const{appId:i,measurementId:o}=t;try{await iD(r,e)}catch(c){if(o)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await rD(t);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!oD(u)){if(s.deleteThrottleMetadata(i),o)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?Cy(n,s.intervalMillis,Z2):Cy(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,g),St.debug(`Calling attemptFetch again in ${f} millis`),RT(t,g,r,s)}}function iD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oD(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class aD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function cD(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function uD(){if($w())try{await Bw()}catch(t){return St.warn(qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dD(t,e,n,r,s,i,o){const l=sD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>St.error(m)),e.push(l);const c=uD().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([l,c]);X2(i)||H2(i,u.measurementId),s("js",new Date);const g=(o==null?void 0:o.config)??{};return g[U2]="firebase",g.update=!0,f!=null&&(g[F2]=f),s("config",u.measurementId,g),u.measurementId}/**
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
 */class hD{constructor(e){this.app=e}_delete(){return delete Ki[this.app.options.appId],Promise.resolve()}}let Ki={},iv=[];const ov={};let hh="dataLayer",fD="gtag",av,Lm,lv=!1;function pD(){const t=[];if(zw()&&t.push("This is a browser extension environment."),KS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function mD(t,e,n){pD();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(Ki[r]!=null)throw qt.create("already-exists",{id:r});if(!lv){G2(hh);const{wrappedGtag:i,gtagCore:o}=J2(Ki,iv,ov,hh,fD);Lm=i,av=o,lv=!0}return Ki[r]=dD(t,iv,ov,e,av,hh,n),new hD(t)}function gD(t=Uu()){t=Oe(t);const e=us(t,vu);return e.isInitialized()?e.getImmediate():yD(t)}function yD(t,e={}){const n=us(t,vu);if(n.isInitialized()){const s=n.getImmediate();if(zn(e,n.getOptions()))return s;throw qt.create("already-initialized")}return n.initialize({options:e})}function _D(t,e,n){t=Oe(t),cD(Lm,Ki[t.app.options.appId],e,n).catch(r=>St.error(r))}function vD(t,e,n,r){t=Oe(t),lD(Lm,Ki[t.app.options.appId],e,n,r).catch(s=>St.error(s))}const cv="@firebase/analytics",uv="0.10.20";function wD(){vn(new sn(vu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return mD(r,s,n)},"PUBLIC")),vn(new sn("analytics-internal",t,"PRIVATE")),Mt(cv,uv),Mt(cv,uv,"esm2020");function t(e){try{const n=e.getProvider(vu).getImmediate();return{logEvent:(r,s,i)=>vD(n,r,s,i),setUserProperties:(r,s)=>_D(n,r,s)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}wD();/**
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
 */const bT="firebasestorage.googleapis.com",ED="storageBucket",ID=2*60*1e3,TD=10*60*1e3;/**
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
 */class qn extends on{constructor(e,n,r=0){super(fh(e),`Firebase Storage: ${n} (${fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bn||(Bn={}));function fh(t){return"storage/"+t}function xD(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(Bn.UNKNOWN,t)}function SD(){return new qn(Bn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AD(){return new qn(Bn.CANCELED,"User canceled the upload/download.")}function CD(t){return new qn(Bn.INVALID_URL,"Invalid URL '"+t+"'.")}function kD(t){return new qn(Bn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dv(t){return new qn(Bn.INVALID_ARGUMENT,t)}function PT(){return new qn(Bn.APP_DELETED,"The Firebase app was deleted.")}function RD(t){return new qn(Bn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw kD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),k={bucket:1,path:3},b=n===bT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",E=new RegExp(`^https?://${b}/${s}/${P}`,"i"),T=[{regex:l,indices:c,postModify:i},{regex:x,indices:k,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<T.length;D++){const j=T[D],M=j.regex.exec(e);if(M){const w=M[j.indices.bucket];let y=M[j.indices.path];y||(y=""),r=new pn(w,y),j.postModify(r);break}}if(r==null)throw CD(e);return r}}class bD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function PD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,t(x,c())},P)}function m(){i&&clearTimeout(i)}function x(P,...E){if(u){m();return}if(P){m(),f.call(null,P,...E);return}if(c()||o){m(),f.call(null,P,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,g(T)}let k=!1;function b(P){k||(k=!0,m(),!u&&(s!==null?(P||(l=2),clearTimeout(s),g(0)):P||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function ND(t){t(!1)}/**
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
 */function DD(t){return t!==void 0}function hv(t,e,n,r){if(r<e)throw dv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw dv(`Invalid value for '${t}'. Expected ${n} or less.`)}function VD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var wu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wu||(wu={}));/**
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
 */function OD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class MD{constructor(e,n,r,s,i,o,l,c,u,f,g,m=!0,x=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,b)=>{this.resolve_=k,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new rc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===wu.NO_ERROR,c=i.getStatus();if(!l||OD(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===wu.ABORT;r(!1,new rc(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new rc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());DD(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=xD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?PT():AD();o(c)}else{const c=SD();o(c)}};this.canceled_?n(!1,new rc(!1,null,!0)):this.backoffId_=PD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ND(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zD(t,e,n,r,s,i,o=!0,l=!1){const c=VD(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return FD(f,e),LD(f,n),jD(f,i),UD(f,r),new MD(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function $D(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Eu{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Eu(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BD(this._location.path)}get storage(){return this._service}get parent(){const e=$D(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new Eu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RD(e)}}function fv(t,e){const n=e==null?void 0:e[ED];return n==null?null:pn.makeFromBucketSpec(n,t)}function qD(t,e,n,r={}){t.host=`${e}:${n}`;const s=ni(e);s&&(Mp(`https://${t.host}/b`),Lp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Uw(i,t.app.options.projectId))}class WD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=bT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ID,this._maxUploadRetryTime=TD,this._requests=new Set,s!=null?this._bucket=pn.makeFromBucketSpec(s,this._host):this._bucket=fv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=fv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bD(PT());{const o=zD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const pv="@firebase/storage",mv="0.14.1";/**
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
 */const NT="storage";function HD(t=Uu(),e){t=Oe(t);const r=us(t,NT).getImmediate({identifier:e}),s=Lw("storage");return s&&GD(r,...s),r}function GD(t,e,n,r={}){qD(t,e,n,r)}function KD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new WD(n,r,s,e,si)}function QD(){vn(new sn(NT,KD,"PUBLIC").setMultipleInstances(!0)),Mt(pv,mv,""),Mt(pv,mv,"esm2020")}QD();const YD={apiKey:"AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ",authDomain:"giftwave-pro.firebaseapp.com",projectId:"giftwave-pro",storageBucket:"giftwave-pro.firebasestorage.app",messagingSenderId:"964612051931",appId:"1:964612051931:web:c318a4f6ba21c51d3a8dfe",measurementId:"G-Z8YJ83DXW2"},hd=Gw(YD),bn=RR(hd),Ae=MN(hd);HD(hd);typeof window<"u"&&gD(hd);const DT=B.createContext();function JD({children:t}){const[e,n]=B.useState(null),[r,s]=B.useState([]),[i,o]=B.useState(!0);B.useEffect(()=>{const x=setTimeout(()=>{o(!1)},3e3),k=yk(bn,async P=>{try{if(P){const E=Tt(Ae,"users",P.uid),v=await YN(E);if(v.exists()){const T=P.emailVerified,D={id:P.uid,...v.data(),isVerified:T};n(D),await Jt(E,{lastSeen:"online"})}}else e&&await Jt(Tt(Ae,"users",e.id),{lastSeen:new Date().toISOString()}),n(null)}catch(E){console.error("Auth error:",E)}finally{clearTimeout(x),o(!1)}},P=>{console.error("Auth state error:",P),clearTimeout(x),o(!1)}),b=()=>{bn.currentUser&&Jt(Tt(Ae,"users",bn.currentUser.uid),{lastSeen:new Date().toISOString()})};return window.addEventListener("beforeunload",b),()=>{k(),clearTimeout(x),window.removeEventListener("beforeunload",b)}},[]),B.useEffect(()=>{if(e&&e.isVerified){const x=Gi(Kt(Ae,"users"));return Cc(x,b=>{const P=b.docs.map(E=>({id:E.id,...E.data()}));s(P)})}},[e]);const l=async(x,k,b,P,E)=>{try{const v=Kt(Ae,"users"),T=Gi(v,yu("username","==",x));if(!(await Lf(T)).empty)return{error:"Этот юзернейм уже занят. Выберите другой."};const M=(await hk(bn,P,k)).user;await pk(M);const w={username:x.toLowerCase(),displayName:E||x,bio:b,email:P,phone:"",birthday:"",nameColor:"#ffffff",isVerified:!1,role:x.toLowerCase()==="admin"?"admin":"user",avatar:`https://api.dicebear.com/7.x/shapes/svg?seed=${x}`,coins:500,createdAt:new Date().toISOString()};return await JN(Tt(Ae,"users",M.uid),w),n({id:M.uid,...w}),{success:!0}}catch(v){let T=v.message;return v.code==="auth/email-already-in-use"&&(T="Пользователь с такой почтой уже зарегистрирован."),{error:T}}},c=async(x,k)=>{try{return await fk(bn,x,k),{success:!0}}catch{return{error:"Неверный логин или пароль"}}},u=async()=>{if(!bn.currentUser)return;await bn.currentUser.reload();const x=bn.currentUser.emailVerified;return x&&(await Jt(Tt(Ae,"users",bn.currentUser.uid),{isVerified:!0}),n(k=>({...k,isVerified:!0}))),x},f=async(x,k)=>{if((e==null?void 0:e.role)!=="admin")return{error:"Access denied"};try{const P=(r.find(E=>E.id===x).coins||0)+parseInt(k);return await Jt(Tt(Ae,"users",x),{coins:P}),s(E=>E.map(v=>v.id===x?{...v,coins:P}:v)),{success:!0}}catch(b){return{error:b.message}}},g=()=>_k(bn),m=async x=>{if(e)try{if(x.username&&x.username!==e.username){const b=Kt(Ae,"users"),P=Gi(b,yu("username","==",x.username));if(!(await Lf(P)).empty)return{error:"Этот юзернейм уже занят."}}const k=Tt(Ae,"users",e.id);return await Jt(k,x),n(b=>({...b,...x})),{success:!0}}catch(k){return console.error("Error updating user:",k),{error:k.message}}};return p.jsx(DT.Provider,{value:{user:e,allUsers:r,register:l,login:c,logout:g,checkVerification:u,giveCoins:f,updateUser:m,loading:i},children:!i&&t})}const ci=()=>B.useContext(DT);function XD(t,e){const[n,r]=B.useState(()=>{try{const s=localStorage.getItem(t);if(s!==null)return JSON.parse(s)}catch(s){console.error(`Error reading localStorage key "${t}":`,s)}return e});return B.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(n))}catch(s){console.error(`Error setting localStorage key "${t}":`,s)}},[t,n]),[n,r]}const VT=B.createContext(),sc={manageInfo:!0,manageMembers:!1,deleteMessages:!1};function ZD({children:t}){const{user:e}=ci(),[n,r]=B.useState([]),[s,i]=B.useState([]),[o,l]=XD("activeChatId",null),[c,u]=B.useState(o),[f,g]=B.useState([]),[m,x]=B.useState([]),k=z=>{u(z),l(z)};B.useEffect(()=>{if(!e){r([]);return}const z=Gi(Kt(Ae,"chats"),yu("participants","array-contains",e.id));return Cc(z,Q=>{const X=Q.docs.map(N=>({id:N.id,...N.data()}));r(X)})},[e]),B.useEffect(()=>{if(!c){g([]);return}const z=Gi(Kt(Ae,`chats/${c}/messages`),KN("timestamp","asc"));return Cc(z,Q=>{const X=Q.docs.map(N=>({id:N.id,...N.data()}));g(X)})},[c]),B.useEffect(()=>{if(!e){i([]);return}const z=Gi(Kt(Ae,"chats"),yu("type","in",["group","channel"]));return Cc(z,Q=>{const X=Q.docs.map(N=>({id:N.id,...N.data()})).filter(N=>{var $;return!(($=N.participants)!=null&&$.includes(e.id))});i(X)})},[e]);const b=z=>n.find(W=>W.id===z)||s.find(W=>W.id===z),P=z=>{if(!e||!z)return{isOwner:!1,isAdmin:!1,canManageInfo:!1,canManageMembers:!1,canDeleteMessages:!1};const W=z.ownerId===e.id,Q=Array.isArray(z.adminIds)?z.adminIds:[z.ownerId].filter(Boolean),X={...sc,...z.adminPermissions||{}},N=Q.includes(e.id);return{isOwner:W,isAdmin:N,canManageInfo:W||N&&X.manageInfo,canManageMembers:W||N&&X.manageMembers,canDeleteMessages:W||N&&X.deleteMessages}},E=async z=>{if(!e)return;const W=n.find(N=>N.type==="dm"&&N.participants.includes(z.id));if(W){k(W.id);return}const Q={type:"dm",name:z.username,participants:[e.id,z.id],lastMessage:null,createdAt:Rn()},X=await ra(Kt(Ae,"chats"),Q);k(X.id)},v=async(z,W)=>{const Q=[...new Set([...W||[],e.id])],X={type:"group",name:z,participants:Q,ownerId:e.id,adminIds:[e.id],adminPermissions:sc,lastMessage:"Группа создана",createdAt:Rn()},N=await ra(Kt(Ae,"chats"),X);k(N.id)},T=async(z,W)=>{const Q=[...new Set([...W||[],e.id])],X={type:"channel",name:z,participants:Q,ownerId:e.id,adminIds:[e.id],adminPermissions:sc,lastMessage:"Канал создан",createdAt:Rn()},N=await ra(Kt(Ae,"chats"),X);k(N.id)},D=async(z,W,Q="text",X={})=>{if(!e||!z)return;const N={chatId:z,text:W,senderId:e.id,senderName:e.username,type:Q,metadata:X,timestamp:Rn()};await ra(Kt(Ae,`chats/${z}/messages`),N),await Jt(Tt(Ae,"chats",z),{lastMessage:W,lastUpdated:Rn()})},j=async(z,W="text",Q={})=>{c&&await D(c,z,W,Q)},M=(z,W=8e3)=>{const Q=Date.now();x(X=>[...X,{id:Q,type:z}]),setTimeout(()=>x(X=>X.filter(N=>N.id!==Q)),W)},w=async(z,W)=>{if(!(!e||!c||!z))try{const Q=f.find(K=>K.id===z),X=Array.isArray(Q==null?void 0:Q.reactions)?Q.reactions:[],$=X.some(K=>K.emoji===W&&K.userId===e.id)?X.filter(K=>!(K.emoji===W&&K.userId===e.id)):[...X,{emoji:W,userId:e.id}];await Jt(Tt(Ae,`chats/${c}/messages`,z),{reactions:$})}catch(Q){console.error("Reaction error",Q)}},y=async z=>{if(z)try{const W=Kt(Ae,`chats/${z}/messages`),X=(await Lf(W)).docs.map(N=>nv(N.ref));await Promise.all(X),await nv(Tt(Ae,"chats",z)),c===z&&k(null)}catch(W){console.error("Error deleting chat",W)}},I=async z=>{if(!(!e||!z))try{const W=b(z);if(!W||!["group","channel"].includes(W.type))return;await Jt(Tt(Ae,"chats",z),{participants:Y_(e.id),lastUpdated:Rn()}),await ra(Kt(Ae,`chats/${z}/messages`),{chatId:z,text:`${e.displayName||e.username} присоединился(ась)`,senderId:e.id,senderName:e.username,type:"system",metadata:{},timestamp:Rn()}),k(z)}catch(W){console.error("Join chat error",W)}},A=async(z,W=[])=>{if(!(!e||!z||W.length===0))try{const Q=b(z);if(!Q)return;const{canManageMembers:X}=P(Q);if(!X)return;const N=W.filter(Boolean);if(N.length===0)return;await Jt(Tt(Ae,"chats",z),{participants:Y_(...N),lastUpdated:Rn()})}catch(Q){console.error("Add members error",Q)}},C=async(z,W)=>{if(!(!e||!z||!W))try{const Q=n.find(re=>re.id===z&&re.type==="dm"),X=b(W);if(!Q||!X||!["group","channel"].includes(X.type))return;const{canManageMembers:N}=P(X);if(!N)return;const $=`${window.location.origin}${window.location.pathname}#invite=${X.id}`,K=X.type==="group"?"группу":"канал";await D(z,`Приглашение в ${K} «${X.name}»`,"invite",{targetChatId:X.id,targetChatName:X.name,targetChatType:X.type,inviteUrl:$,invitedById:e.id,invitedByName:e.displayName||e.username})}catch(Q){console.error("Send invite error",Q)}},R=async(z,W)=>{if(!(!e||!z||!W))try{const Q=b(z);if(!Q||Q.ownerId===W)return;const{canManageMembers:X}=P(Q);if(!X&&e.id!==W)return;await Jt(Tt(Ae,"chats",z),{participants:HN(W),lastUpdated:Rn()}),e.id===W&&c===z&&k(null)}catch(Q){console.error("Remove member error",Q)}},S=async(z,W={})=>{if(!(!e||!z||!W))try{const Q=b(z);if(!Q)return;const{isOwner:X,canManageInfo:N}=P(Q),$={};if(typeof W.name=="string"&&N){const K=W.name.trim();K&&($.name=K)}if(X&&Array.isArray(W.adminIds)&&($.adminIds=[...new Set([Q.ownerId,...W.adminIds.filter(Boolean)])]),X&&W.adminPermissions&&($.adminPermissions={...sc,...W.adminPermissions}),Object.keys($).length===0)return;await Jt(Tt(Ae,"chats",z),{...$,lastUpdated:Rn()})}catch(Q){console.error("Update chat settings error",Q)}};return p.jsx(VT.Provider,{value:{chats:n,availableCommunities:s,activeChatId:c,setActiveChatId:k,messages:f,sendMessage:j,startPrivateChat:E,createGroup:v,createChannel:T,joinChat:I,sendChatInvite:C,addChatMembers:A,removeChatMember:R,updateChatSettings:S,toggleReaction:w,deleteChat:y,activeEffects:m,applyEffect:M},children:t})}const Eo=()=>B.useContext(VT);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Te=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...u},f)=>B.createElement("svg",{ref:f,...e4,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${t4(t)}`,l].join(" "),...u},[...e.map(([g,m])=>B.createElement(g,m)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=Te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Te("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=Te("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=Te("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=Te("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=Te("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=Te("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=Te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=Te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=Te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=Te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=Te("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=Te("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=Te("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=Te("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=Te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=Te("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=Te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=Te("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=Te("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=Te("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=Te("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=Te("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=Te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=Te("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=Te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=Te("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function E4(){const[t,e]=B.useState(!1),[n,r]=B.useState(!1),[s,i]=B.useState(""),[o,l]=B.useState(""),[c,u]=B.useState(""),[f,g]=B.useState(""),[m,x]=B.useState(""),[k,b]=B.useState(""),{login:P,register:E,checkVerification:v,logout:T,user:D}=ci();B.useEffect(()=>{D&&!D.isVerified?r(!0):r(!1)},[D]);const j=async y=>{if(y.preventDefault(),b(""),t){if(!/^[a-zA-Z0-9_]+$/.test(s)){b("Юзернейм может содержать только латинские буквы, цифры и подчеркивание.");return}const I=await E(s,f,m,c,o);I.error&&b(I.error)}else{const I=await P(c,f);I.error&&b(I.error)}},M=async()=>{await v()||b("Письмо еще не подтверждено. Проверьте почту и папку Спам!")},w=async()=>{await T(),r(!1),e(!1)};return n?p.jsx("div",{className:"flex min-h-screen bg-[#09090b] text-zinc-100 font-sans",children:p.jsx("div",{className:"flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center",children:p.jsxs("div",{className:"p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse",children:p.jsx(l4,{className:"w-10 h-10 text-emerald-500"})}),p.jsx("h2",{className:"text-2xl font-bold",children:"Подтвердите почту"}),p.jsxs("p",{className:"text-sm text-zinc-500",children:["Мы отправили ссылку на ",p.jsx("b",{children:D==null?void 0:D.email}),". Пожалуйста, перейдите по ней, чтобы активировать аккаунт."]}),p.jsxs("div",{className:"space-y-3 pt-4",children:[p.jsxs("button",{onClick:M,className:"w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all",children:[p.jsx(LT,{className:"w-4 h-4"}),"Я подтвердил! Войти"]}),p.jsx("button",{onClick:w,className:"w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all",children:"Отмена / Выйти"}),p.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-widest pt-2",children:"Не забудьте проверить папку Спам"})]})]})})}):p.jsxs("div",{className:"min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:[p.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"}),p.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"1s"}})]}),p.jsx("div",{className:"w-full max-w-md animate-slide-in-up",children:p.jsxs("div",{className:"bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10",children:[p.jsxs("div",{className:"flex flex-col items-center mb-8",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500",children:p.jsx(w4,{className:"w-10 h-10 text-emerald-500 fill-emerald-500/20"})}),p.jsx("h1",{className:"text-3xl font-black text-white tracking-tight mb-1",children:"GiftWave"}),p.jsx("p",{className:"text-zinc-500 text-sm font-medium",children:"Новое поколение мессенджеров"})]}),p.jsxs("div",{className:"mb-6 text-center",children:[p.jsx("h2",{className:"text-xl font-semibold",children:t?"Создать аккаунт":"С возвращением"}),p.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:t?"Используйте реальную почту для активации":"Введите данные для входа"})]}),p.jsxs("form",{onSubmit:j,className:"space-y-4",children:[t&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Имя (Отображаемое)"}),p.jsx("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:"Иван Иванов",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:s,onChange:y=>i(y.target.value),placeholder:"ivan_dev",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0}),p.jsx("p",{className:"text-[10px] text-zinc-500 mt-1 ml-1",children:"Только латиница, цифры и _"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Email"}),p.jsx("input",{type:"email",value:c,onChange:y=>u(y.target.value),placeholder:"alex@example.com",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Пароль"}),p.jsxs("div",{className:"relative",children:[p.jsx(o4,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600"}),p.jsx("input",{type:"password",value:f,onChange:y=>g(y.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0,minLength:6})]})]}),k&&p.jsx("p",{className:"text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center",children:k}),p.jsx("button",{type:"submit",className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20",children:t?"Отправить ссылку активации":"Войти в систему"})]}),p.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800 text-center",children:p.jsx("button",{onClick:()=>e(!t),className:"text-sm text-zinc-400 hover:text-emerald-500 transition-colors",children:t?"Уже есть аккаунт? Войти":"Нет аккаунта? Создать сейчас"})})]})})]})}function Cs({isOpen:t,onClose:e,title:n,children:r}){return B.useEffect(()=>{const s=i=>{i.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[t,e]),t?Nw.createPortal(p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{className:"relative w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-zinc-800",children:[p.jsx("h3",{className:"text-lg font-semibold text-zinc-100",children:n}),p.jsx("button",{onClick:e,className:"p-1 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(jm,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"p-4",children:r})]})}),document.body):null}const Ff=async(t,e="auto")=>{var r;const n=new FormData;n.append("file",t),n.append("upload_preset","ryestqxz"),n.append("cloud_name","dnrrmyqf5"),console.log(`[Cloudinary] Starting upload... Type: ${e}, File: ${t.name}`);try{const i=await fetch(`https://api.cloudinary.com/v1_1/dnrrmyqf5/${e==="voice"?"video":e}/upload`,{method:"POST",body:n});if(!i.ok){const l=await i.json();throw console.error("[Cloudinary] Error response:",l),new Error(((r=l.error)==null?void 0:r.message)||`Upload failed: ${i.statusText}`)}const o=await i.json();return console.log("[Cloudinary] Upload success:",o.secure_url),o.secure_url}catch(s){throw console.error("[Cloudinary] Network error:",s),alert(`Ошибка загрузки файла: ${s.message}. Проверьте интернет или размер файла.`),s}};function I4(){var No,pi,wr;const{user:t,allUsers:e,logout:n,updateUser:r,giveCoins:s}=ci(),{chats:i,availableCommunities:o,activeChatId:l,setActiveChatId:c,startPrivateChat:u,createGroup:f,createChannel:g,joinChat:m,sendChatInvite:x,removeChatMember:k,updateChatSettings:b,deleteChat:P}=Eo(),[E,v]=B.useState(""),[T,D]=B.useState("messages"),[j,M]=B.useState(!1),[w,y]=B.useState(!1),[I,A]=B.useState(!1),[C,R]=B.useState(!1),[S,z]=B.useState(!1),[W,Q]=B.useState(""),[X,N]=B.useState(100),[$,K]=B.useState(""),[re,ee]=B.useState(""),[ce,se]=B.useState(t.displayName||""),[ne,we]=B.useState(t.username||""),[xe,kt]=B.useState(t.email||""),[gr,To]=B.useState(t.phone||""),[ps,ms]=B.useState(t.bio||""),[Wn,gs]=B.useState(t.birthday||""),[Be,In]=B.useState(t.nameColor||"#ffffff"),[yr,xo]=B.useState(null),[He,tt]=B.useState(!1),[ui,So]=B.useState(!1),[_l,Ao]=B.useState(!1),[an,vl]=B.useState(null),[Co,di]=B.useState(""),[ko,wl]=B.useState([]),[ys,_s]=B.useState({manageInfo:!0,manageMembers:!1,deleteMessages:!1}),Tn=(V,Z,pe,at)=>{const Hn=V%10,Sn=V%100;return Hn===1&&Sn!==11?Z:Hn>=2&&Hn<=4&&(Sn<10||Sn>=20)?pe:at},fe=i.find(V=>V.id===an)||null,hi=((fe==null?void 0:fe.participants)||[]).map(V=>e.find(Z=>Z.id===V)).filter(Boolean),xn=(fe==null?void 0:fe.adminIds)||[fe==null?void 0:fe.ownerId].filter(Boolean),Ro={manageInfo:((No=fe==null?void 0:fe.adminPermissions)==null?void 0:No.manageInfo)??!0,manageMembers:((pi=fe==null?void 0:fe.adminPermissions)==null?void 0:pi.manageMembers)??!1,deleteMessages:((wr=fe==null?void 0:fe.adminPermissions)==null?void 0:wr.deleteMessages)??!1},ln=(fe==null?void 0:fe.ownerId)===t.id,bo=xn.includes(t.id),_r=ln||bo&&Ro.manageInfo,Po=ln||bo&&Ro.manageMembers,nt=i.filter(V=>V.type==="dm"),El=V=>{var pe;const Z=(pe=V.participants)==null?void 0:pe.find(at=>at!==t.id);return e.find(at=>at.id===Z)},vs=V=>{var Z,pe,at;vl(V.id),di(V.name||""),wl(V.adminIds||[V.ownerId].filter(Boolean)),_s({manageInfo:((Z=V.adminPermissions)==null?void 0:Z.manageInfo)??!0,manageMembers:((pe=V.adminPermissions)==null?void 0:pe.manageMembers)??!1,deleteMessages:((at=V.adminPermissions)==null?void 0:at.deleteMessages)??!1}),So(!0)},ws=V=>{!ln||!fe||V!==fe.ownerId&&wl(Z=>Z.includes(V)?Z.filter(pe=>pe!==V):[...Z,V])},fd=async V=>{if(V.preventDefault(),!fe)return;const Z={};_r&&(Z.name=Co),ln&&(Z.adminIds=ko,Z.adminPermissions=ys),await b(an,Z),So(!1)},pd=async V=>{an&&(await x(V,an),Ao(!1))},vr=async V=>{if(V.preventDefault(),!He){tt(!0);try{let Z=t.avatar;yr&&(Z=await Ff(yr,"image"));const pe=await r({displayName:ce,username:ne.toLowerCase().trim(),email:xe,avatar:Z,bio:ps,birthday:Wn,nameColor:Be});pe!=null&&pe.error?alert(pe.error):(R(!1),xo(null))}catch(Z){console.error("Profile update error:",Z),alert("Ошибка при обновлении профиля: "+Z.message)}finally{tt(!1)}}},md=e.filter(V=>{var Z;return V.id!==t.id&&(V.username.toLowerCase().includes(E.toLowerCase())||((Z=V.displayName)==null?void 0:Z.toLowerCase().includes(E.toLowerCase())))}),gd=V=>{V.preventDefault(),W&&X&&(s(W,X),alert("Монеты успешно выданы!"))},fi=V=>{V.preventDefault(),$.trim()&&(f($,[t.id]),K(""),y(!1))},Il=V=>{V.preventDefault(),re.trim()&&(g(re,[t.id]),ee(""),A(!1))};return p.jsxs("div",{className:"w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50",children:[p.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md",children:[p.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[p.jsxs("div",{className:"relative shrink-0",children:[p.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-xl bg-zinc-800 object-cover",alt:"me"}),p.jsx("div",{className:"absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"flex-1 min-w-0 pr-2",children:[p.jsxs("div",{className:"font-semibold text-sm truncate flex items-center gap-1",style:{color:t.nameColor||"#e4e4e7"},children:[p.jsx("span",{className:"truncate",children:t.displayName||t.username}),t.role==="admin"&&p.jsx(f4,{className:"w-3 h-3 text-red-500 shrink-0",title:"Admin"})]}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",t.username]}),p.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter",children:[p.jsx(r4,{className:"w-2.5 h-2.5"}),t.coins," credits"]})]})]}),p.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors",children:p.jsx(a4,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"p-4",children:p.jsxs("div",{className:"relative group",children:[p.jsx(jT,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors"}),p.jsx("input",{type:"text",value:E,onChange:V=>v(V.target.value),placeholder:"Поиск людей...",className:"w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"})]})}),p.jsx("div",{className:"flex px-4 mb-2 gap-1",children:[{id:"messages",icon:c4,label:"Чаты"},{id:"groups",icon:_4,label:"Группы"},{id:"channels",icon:i4,label:"Каналы"}].map(V=>p.jsxs("button",{onClick:()=>D(V.id),className:`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${T===V.id?"bg-emerald-500/10 text-emerald-500":"text-zinc-500 hover:bg-zinc-800/50"}`,children:[p.jsx(V.icon,{className:"w-4 h-4 mb-1"}),p.jsx("span",{className:"text-[10px] font-medium",children:V.label})]},V.id))}),p.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:E?p.jsxs("div",{className:"p-2 space-y-1",children:[p.jsx("div",{className:"px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",children:"Результаты поиска"}),md.map(V=>p.jsxs("button",{onClick:()=>{u(V),v("")},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group",children:[p.jsx("img",{src:V.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:V.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium truncate transition-colors",style:{color:V.nameColor||"#e4e4e7"},children:V.displayName||V.username}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",V.username]}),p.jsx("div",{className:"text-xs text-zinc-500 truncate w-32",children:V.bio||"Нет описания"})]})]},V.id))]}):p.jsxs("div",{className:"p-2 space-y-1",children:[i.filter(V=>T==="messages"&&V.type==="dm"||T==="groups"&&V.type==="group"||T==="channels"&&V.type==="channel").map(V=>{var Sl,Mo,Lo,jo;const Z=(Sl=V.participants)==null?void 0:Sl.find(Ts=>Ts!==t.id),pe=V.type==="dm"?e.find(Ts=>Ts.id===Z):null,at=pe?pe.displayName||pe.username:V.name,Hn=pe!=null&&pe.username?`@${pe.username}`:"",Sn=pe?pe.avatar:null,Tl=(pe==null?void 0:pe.lastSeen)==="online",mi=((Mo=V.participants)==null?void 0:Mo.length)||0,xl=V.type==="group"?`${mi} ${Tn(mi,"участник","участника","участников")}`:`${mi} ${Tn(mi,"подписчик","подписчика","подписчиков")}`,yd=V.adminIds||[V.ownerId].filter(Boolean),Es=V.ownerId===t.id,Do=yd.includes(t.id),Vo=Es||Do&&(((Lo=V.adminPermissions)==null?void 0:Lo.manageInfo)??!0),Is=Es||Do&&(((jo=V.adminPermissions)==null?void 0:jo.manageMembers)??!1),Gn=V.type!=="dm"&&(Vo||Is),Oo=V.type!=="dm"&&(V.ownerId===t.id||t.role==="admin");return p.jsxs("div",{className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${l===V.id?"bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]":"hover:bg-zinc-800/50 border border-transparent"}`,children:[p.jsxs("button",{onClick:()=>c(V.id),className:"flex items-center gap-3 flex-1 min-w-0 text-left",children:[p.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden",children:[Sn?p.jsx("img",{src:Sn,className:"w-full h-full object-cover",alt:"avatar"}):at[0].toUpperCase(),V.type==="dm"&&Tl&&p.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"text-left flex-1 min-w-0",children:[p.jsx("div",{className:"text-sm font-medium truncate",style:{color:(pe==null?void 0:pe.nameColor)||"#e4e4e7"},children:at}),p.jsx("div",{className:"text-xs text-zinc-500 truncate",children:V.type==="dm"?Hn||V.lastMessage||"Нет сообщений":xl})]})]}),Gn&&p.jsx("button",{onClick:()=>vs(V),className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-emerald-400 hover:bg-emerald-500/10",children:"Управление"}),Oo&&p.jsx("button",{onClick:()=>{window.confirm("Удалить этот чат вместе со всеми сообщениями?")&&P(V.id)},className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-red-400 hover:bg-red-500/10",children:"Удалить"})]},V.id)}),T!=="messages"&&o.filter(V=>T==="groups"&&V.type==="group"||T==="channels"&&V.type==="channel").map(V=>{var Z,pe,at;return p.jsx("div",{className:"w-full p-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30",children:p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:V.name}),p.jsxs("div",{className:"text-xs text-zinc-500",children:[((Z=V.participants)==null?void 0:Z.length)||0," ",V.type==="group"?Tn(((pe=V.participants)==null?void 0:pe.length)||0,"участник","участника","участников"):Tn(((at=V.participants)==null?void 0:at.length)||0,"подписчик","подписчика","подписчиков")]})]}),p.jsxs("button",{onClick:()=>m(V.id),className:"px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-1",children:[p.jsx(y4,{className:"w-3.5 h-3.5"}),"Вступить"]})]})},V.id)}),T!=="messages"&&p.jsxs("button",{onClick:()=>{T==="groups"&&y(!0),T==="channels"&&A(!0)},className:"w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4",children:[p.jsx(yv,{className:"w-5 h-5"}),p.jsx("span",{className:"text-sm font-semibold",children:T==="groups"?"Создать группу":"Создать канал"})]})]})}),p.jsxs("div",{className:"p-4 border-t border-zinc-800/50 space-y-1",children:[t.role==="admin"&&p.jsxs("button",{onClick:()=>z(!0),className:"w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium",children:[p.jsx(g4,{className:"w-4 h-4"}),"Панель разработчика"]}),p.jsxs("button",{onClick:()=>R(!0),className:"w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium",children:[p.jsx(h4,{className:"w-4 h-4"}),"Настройки профиля"]})]}),p.jsx(Cs,{isOpen:S,onClose:()=>z(!1),title:"Console: Developer Panel",children:p.jsxs("form",{onSubmit:gd,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Выбрать пользователя"}),p.jsxs("select",{value:W,onChange:V=>Q(V.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0,children:[p.jsx("option",{value:"",children:"Выберите аккаунт"}),e.map(V=>p.jsxs("option",{value:V.id,children:[V.username," (ID: ",V.id,")"]},V.id))]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Количество монет"}),p.jsx("input",{type:"number",value:X,onChange:V=>N(V.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs",children:"Выдать валюту"})]})}),p.jsx(Cs,{isOpen:j,onClose:()=>M(!1),title:"Найти собеседника",children:p.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:e.filter(V=>V.id!==t.id).map(V=>p.jsxs("button",{onClick:()=>{u(V),M(!1)},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all",children:[p.jsx("img",{src:V.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:V.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium",style:{color:V.nameColor||"#e4e4e7"},children:V.displayName||V.username}),p.jsxs("div",{className:"text-[10px] text-zinc-500",children:["@",V.username]}),p.jsx("div",{className:"text-xs text-zinc-500",children:V.bio||"Нет описания"})]})]},V.id))})}),p.jsx(Cs,{isOpen:w,onClose:()=>y(!1),title:"Создать группу",children:p.jsxs("form",{onSubmit:fi,className:"space-y-4",children:[p.jsx("input",{type:"text",value:$,onChange:V=>K(V.target.value),placeholder:"Название группы",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(Cs,{isOpen:I,onClose:()=>A(!1),title:"Создать канал",children:p.jsxs("form",{onSubmit:Il,className:"space-y-4",children:[p.jsx("input",{type:"text",value:re,onChange:V=>ee(V.target.value),placeholder:"Название канала",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(Cs,{isOpen:ui,onClose:()=>So(!1),title:(fe==null?void 0:fe.type)==="group"?"Управление группой":"Управление каналом",children:fe?p.jsxs("form",{onSubmit:fd,className:"space-y-4",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Название"}),p.jsx("input",{type:"text",value:Co,onChange:V=>di(V.target.value),disabled:!_r,className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none disabled:opacity-50"})]}),ln&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Админы"}),p.jsx("div",{className:"max-h-36 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:hi.map(V=>p.jsxs("button",{type:"button",onClick:()=>ws(V.id),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${ko.includes(V.id)?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300":"border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`,children:[p.jsx("span",{children:V.displayName||V.username}),p.jsx("span",{children:V.id===fe.ownerId?"Владелец":ko.includes(V.id)?"Админ":"Участник"})]},V.id))})]}),ln&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Права админов"}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Редактирование информации"}),p.jsx("input",{type:"checkbox",checked:ys.manageInfo,onChange:V=>_s(Z=>({...Z,manageInfo:V.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Управление участниками"}),p.jsx("input",{type:"checkbox",checked:ys.manageMembers,onChange:V=>_s(Z=>({...Z,manageMembers:V.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Удаление сообщений"}),p.jsx("input",{type:"checkbox",checked:ys.deleteMessages,onChange:V=>_s(Z=>({...Z,deleteMessages:V.target.checked}))})]})]})]}),Po&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Приглашения"}),p.jsxs("button",{type:"button",onClick:()=>Ao(!0),className:"w-full px-3 py-2.5 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 flex items-center justify-center gap-2",children:[p.jsx(FT,{className:"w-3.5 h-3.5"}),"Отправить приглашение"]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Участники"}),p.jsx("div",{className:"max-h-40 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:hi.map(V=>p.jsxs("div",{className:"flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs",children:[p.jsx("span",{className:"text-zinc-200 truncate pr-2",children:V.displayName||V.username}),p.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[V.id===fe.ownerId&&p.jsx("span",{className:"text-amber-500",children:"Owner"}),V.id!==fe.ownerId&&xn.includes(V.id)&&p.jsx("span",{className:"text-emerald-500",children:"Admin"}),Po&&V.id!==fe.ownerId&&p.jsx("button",{type:"button",onClick:()=>k(an,V.id),className:"text-red-400 hover:text-red-300",children:"Удалить"})]})]},V.id))})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium",children:"Сохранить"})]}):null}),p.jsx(Cs,{isOpen:_l,onClose:()=>Ao(!1),title:"Отправить приглашение",children:p.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:[nt.length===0&&p.jsx("div",{className:"text-xs text-zinc-500 px-1",children:"Нет личных чатов для отправки приглашения"}),nt.map(V=>{const Z=El(V);return p.jsxs("div",{className:"flex items-center justify-between gap-2 p-2 rounded-lg border border-zinc-800 bg-zinc-900/40",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-xs truncate",style:{color:(Z==null?void 0:Z.nameColor)||"#e4e4e7"},children:(Z==null?void 0:Z.displayName)||(Z==null?void 0:Z.username)||"Пользователь"}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",(Z==null?void 0:Z.username)||"unknown"]})]}),p.jsx("button",{type:"button",onClick:()=>pd(V.id),className:"px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/10",children:"Отправить"})]},V.id)})]})}),p.jsx(Cs,{isOpen:C,onClose:()=>R(!1),title:"Настройки профиля",children:p.jsxs("form",{onSubmit:vr,className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-col items-center gap-3 mb-4",children:[p.jsxs("div",{className:"relative group",children:[p.jsx("img",{src:yr?URL.createObjectURL(yr):t.avatar,className:"w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800",alt:"Avatar"}),p.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity",children:[p.jsx(yv,{className:"w-8 h-8 text-white"}),p.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:V=>xo(V.target.files[0])})]})]}),p.jsx("p",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-widest",children:"Нажмите, чтобы изменить фото"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Отображаемое имя (русский доступен)"}),p.jsx("input",{type:"text",value:ce,onChange:V=>se(V.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Цвет имени"}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("input",{type:"color",value:Be,onChange:V=>In(V.target.value),className:"w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer"}),p.jsx("span",{className:"text-xs text-zinc-400",children:Be})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Дата рождения"}),p.jsx("input",{type:"date",value:Wn,onChange:V=>gs(V.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"О себе"}),p.jsx("textarea",{value:ps,onChange:V=>ms(V.target.value),rows:3,className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50 resize-none text-sm",placeholder:"Расскажите немного о себе..."})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:ne,onChange:V=>we(V.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Email"}),p.jsx("input",{type:"email",value:xe,onChange:V=>kt(V.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"})]}),p.jsx("button",{type:"submit",disabled:He,className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2",children:He?p.jsxs(p.Fragment,{children:[p.jsx(LT,{className:"w-4 h-4 animate-spin"}),"Загрузка..."]}):p.jsxs(p.Fragment,{children:[p.jsx(n4,{className:"w-4 h-4"}),"Сохранить изменения"]})})]})})]})}const T4=[{id:"hearts",name:"Дождь из сердец",description:"Наполните чат любовью и нежностью",price:150,effect:"hearts",icon:p.jsx(MT,{className:"w-5 h-5 text-rose-500 fill-rose-500"})},{id:"fire",name:"Пламя страсти",description:"Горячий эффект для ярких эмоций",price:300,effect:"fire",icon:p.jsx(s4,{className:"w-5 h-5 text-orange-500 fill-orange-500"})},{id:"stars",name:"Звездная пыль",description:"Волшебное сияние ночного неба",price:500,effect:"stars",icon:p.jsx(p4,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"})}];function x4({onSelect:t,onClose:e}){return p.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[p.jsx("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest",children:"Premium Store"}),p.jsx("button",{onClick:e,className:"p-1 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(jm,{className:"w-4 h-4 text-zinc-600"})})]}),p.jsx("div",{className:"space-y-2",children:T4.map(n=>p.jsxs("button",{onClick:()=>t(n),className:"w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group",children:[p.jsx("div",{className:"p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform",children:n.icon}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"text-sm font-semibold text-zinc-100",children:n.name}),p.jsx("div",{className:"text-[10px] text-zinc-500 leading-tight",children:n.description})]}),p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("div",{className:"text-amber-500 font-bold text-sm",children:n.price}),p.jsx("div",{className:"text-[8px] text-zinc-600 uppercase font-black",children:"Credits"})]})]},n.id))})]})}function S4(){const[t,e]=B.useState(""),[n,r]=B.useState(!1),[s,i]=B.useState(!1),[o,l]=B.useState(!1),{user:c,updateUser:u}=ci(),{sendMessage:f,applyEffect:g,activeChatId:m}=Eo(),x=B.useRef(),k=B.useRef(null),b=B.useRef([]),P=j=>{j.preventDefault(),t.trim()&&!o&&(f(t),e(""))},E=async j=>{const M=j.target.files[0];if(!M||!m)return;const w=30,y=w*1024*1024;if(M.size>y){alert(`Файл слишком большой. Максимальный размер: ${w}MB.`),j.target.value="";return}l(!0);try{const I=M.type.startsWith("image/")?"image":M.type.startsWith("video/")?"video":"file",A=await Ff(M,I==="video"?"video":"image");await f(M.name,I,{url:A,fileName:M.name,fileSize:M.size})}catch(I){alert("Ошибка загрузки: "+I.message)}finally{l(!1),x.current.value=""}},v=async()=>{try{const j=await navigator.mediaDevices.getUserMedia({audio:!0});k.current=new MediaRecorder(j),b.current=[],k.current.ondataavailable=M=>{b.current.push(M.data)},k.current.onstop=async()=>{const M=new Blob(b.current,{type:"audio/webm"}),w=new File([M],`voice_${Date.now()}.webm`,{type:"audio/webm"});l(!0);try{const y=await Ff(w,"video");await f("Голосовое сообщение","voice",{url:y,duration:0})}catch(y){alert("Ошибка отправки голосового: "+y.message)}finally{l(!1)}},k.current.start(),i(!0)}catch(j){alert("Доступ к микрофону отклонен: "+j.message)}},T=()=>{k.current&&s&&(k.current.stop(),i(!1),k.current.stream.getTracks().forEach(j=>j.stop()))},D=async j=>{if(c.coins>=j.price)try{const M=c.coins-j.price,w=await u({coins:M});if(w!=null&&w.error){alert(w.error);return}await f(`🎁 Отправил подарок: ${j.name}! ✨`,"gift",{giftId:j.id,giftName:j.name,effect:j.effect}),g(j.effect),r(!1)}catch(M){console.error("Gift error:",M),alert("Ошибка при покупке подарка: "+M.message)}else alert(`Недостаточно монет! Стоимость подарка: ${j.price}, у вас: ${c.coins}`)};return p.jsxs("div",{className:"relative",children:[n&&p.jsx("div",{className:"absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200",children:p.jsx(x4,{onSelect:D,onClose:()=>r(!1)})}),p.jsxs("div",{className:"flex flex-col gap-2",children:[o&&p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse",children:[p.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-bounce"}),p.jsx("span",{className:"text-xs text-zinc-400",children:"Отправка файла..."})]}),p.jsxs("form",{onSubmit:P,className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all",children:[p.jsx("input",{type:"file",ref:x,onChange:E,className:"hidden",accept:"image/*,video/*"}),p.jsx("button",{type:"button",onClick:()=>x.current.click(),className:"p-2 text-zinc-500 hover:text-zinc-200 transition-colors",children:p.jsx(d4,{className:"w-5 h-5"})}),p.jsx("input",{type:"text",value:t,onChange:j=>e(j.target.value),placeholder:s?"Идет запись голоса...":"Напишите сообщение...",disabled:s,className:"flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("button",{type:"button",onClick:s?T:v,className:`p-2 rounded-xl transition-all ${s?"bg-red-500 text-white animate-pulse":"text-zinc-500 hover:text-zinc-200"}`,children:s?p.jsx(m4,{className:"w-5 h-5"}):p.jsx(u4,{className:"w-5 h-5"})}),p.jsx("button",{type:"button",onClick:()=>r(!n),className:`p-2 rounded-xl transition-all ${n?"bg-amber-500 text-black shadow-lg shadow-amber-500/20":"text-amber-500 hover:bg-amber-500/10"}`,children:p.jsx(OT,{className:"w-5 h-5"})}),p.jsx("button",{type:"submit",disabled:!t.trim()||o,className:"p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20",children:p.jsx(FT,{className:"w-5 h-5"})})]})]})]})]})}function A4(){var Q,X;const{user:t,allUsers:e}=ci(),{messages:n,chats:r,activeChatId:s,setActiveChatId:i,applyEffect:o,activeEffects:l,sendMessage:c,toggleReaction:u,joinChat:f}=Eo(),g=B.useRef(),m=B.useRef(new Set),[x,k]=B.useState(!1),[b,P]=B.useState(""),[E,v]=B.useState(!1),T=r.find(N=>N.id===s),D=(T==null?void 0:T.type)==="dm",j=(Q=T==null?void 0:T.participants)==null?void 0:Q.find(N=>N!==t.id),M=e.find(N=>N.id===j),w=D&&M?M.displayName||M.username:(T==null?void 0:T.name)||"Чат",y=D&&M!=null&&M.username?`@${M.username}`:"",I=D&&(M==null?void 0:M.nameColor)||"#e4e4e7",A=M?M.avatar:null,C=(M==null?void 0:M.lastSeen)==="online",R=((X=T==null?void 0:T.participants)==null?void 0:X.length)||0,S=D?C?"В сети":M!=null&&M.lastSeen?`Был(а) ${new Date(M.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Не в сети":(T==null?void 0:T.type)==="group"?`${R} участников`:`${R} подписчиков`,z=B.useMemo(()=>{const N=n.filter($=>$.type!=="call-signal");return b?N.filter($=>{var K;return(K=$.text)==null?void 0:K.toLowerCase().includes(b.toLowerCase())}):N},[n,b]),W=async N=>{const $=`call_${Date.now()}_${t.id}`,K=N==="video"?"📹":"📞",re=N==="video"?"видеозвонок":"голосовой звонок";try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(we=>we.stop())}catch{alert("Нет доступа к микрофону. Разрешите микрофон в браузере, чтобы звонить.");return}const ee=r.find(ne=>ne.id===s);if(!ee||ee.type!=="dm")return;const ce=ee.participants.find(ne=>ne!==t.id);e.find(ne=>ne.id===ce)&&await c(`${K} ${t.displayName} начал ${re}!`,"call",{callId:$,callType:N,callerId:t.id,callerName:t.displayName,targetId:ce,timestamp:Date.now(),status:"ringing",startedAt:Date.now(),chatId:s})};return B.useEffect(()=>{if(!(!n||n.length===0))try{const N=Date.now();n.forEach($=>{var ee;if($.type!=="gift"||!$.timestamp||m.current.has($.id))return;const K=$.timestamp&&typeof $.timestamp.toMillis=="function"?$.timestamp.toMillis():$.timestamp?new Date($.timestamp).getTime():Date.now();N-K<6e4&&((ee=$.metadata)!=null&&ee.effect)&&(m.current.add($.id),o($.metadata.effect))})}catch(N){console.error("Gift sync error:",N)}},[n,o]),B.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[n]),s?p.jsxs("div",{className:"h-full flex flex-col bg-[#09090b] relative",children:[p.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40",children:[p.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p.jsx("button",{onClick:()=>i(null),className:"p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden",children:p.jsx(gv,{className:"w-5 h-5"})}),p.jsx("div",{onClick:()=>v(!0),className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform",children:A?p.jsx("img",{src:A,className:"w-full h-full object-cover",alt:"avatar"}):w?w[0].toUpperCase():"?"}),p.jsxs("div",{onClick:()=>v(!0),className:"min-w-0 cursor-pointer",children:[p.jsx("div",{className:"text-sm font-semibold truncate hover:text-emerald-500 transition-colors",style:{color:I},children:w}),D&&y&&p.jsx("div",{className:"text-[10px] text-zinc-500 truncate",children:y}),p.jsx("div",{className:`text-[10px] flex items-center gap-1 ${D&&C?"text-emerald-500":"text-zinc-500"}`,children:D&&C?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"}),S]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-zinc-500 rounded-full"}),S]})})]})]}),p.jsxs("div",{className:"flex items-center gap-1",children:[x?p.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2",children:[p.jsx("input",{autoFocus:!0,type:"text",placeholder:"Поиск...",value:b,onChange:N=>P(N.target.value),className:"bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"}),p.jsx("button",{onClick:()=>{k(!1),P("")},className:"text-zinc-500 hover:text-zinc-100 text-[10px]",children:"✕"})]}):p.jsx("button",{onClick:()=>k(!0),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(jT,{className:"w-4 h-4"})}),D&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>W("audio"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(Ps,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>W("video"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(v4,{className:"w-4 h-4"})})]})]})]}),E&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",children:p.jsxs("div",{className:"w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in",children:[p.jsx("div",{className:"h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900"}),p.jsxs("div",{className:"px-6 pb-6 -mt-12 flex flex-col items-center",children:[p.jsx("div",{className:"w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3",children:A?p.jsx("img",{src:A,className:"w-full h-full object-cover"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500",children:w[0].toUpperCase()})}),p.jsx("h3",{className:"text-lg font-bold",style:{color:I},children:w}),D&&y&&p.jsx("p",{className:"text-xs text-zinc-400 mb-1",children:y}),p.jsx("p",{className:"text-xs text-zinc-500 mb-4",children:S}),p.jsxs("div",{className:"w-full space-y-3",children:[p.jsxs("div",{className:"p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"О себе"}),p.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:D?(M==null?void 0:M.bio)||'Этот пользователь не заполнил раздел "О себе"':"Информация о сообществе доступна в управлении чатом."})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:D?"Монеты":"Участники"}),p.jsx("div",{className:"text-sm font-bold text-emerald-500",children:D?`🪙 ${(M==null?void 0:M.coins)||0}`:R})]}),p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:D?"Ранг":"Тип"}),p.jsx("div",{className:"text-sm font-bold text-amber-500 uppercase",children:D?(M==null?void 0:M.role)||"user":T==null?void 0:T.type})]})]})]}),p.jsx("button",{onClick:()=>v(!1),className:"w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors",children:"Закрыть"})]})]})}),p.jsx("div",{ref:g,className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10",children:z.map(N=>{var ee,ce,se,ne,we,xe,kt,gr,To,ps,ms,Wn,gs;const $=N.senderId===t.id,K=N.type==="system",re=(N.reactions||[]).reduce((Be,In)=>(Be[In.emoji]=(Be[In.emoji]||0)+1,Be),{});return K?p.jsx("div",{className:"flex justify-center my-2",children:p.jsx("div",{className:"px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30",children:N.text})},N.id):p.jsx("div",{className:`flex ${$?"justify-end":"justify-start"} animate-message-pop`,children:p.jsxs("div",{className:`flex flex-col max-w-[85%] ${$?"items-end":"items-start"} group mb-1`,children:[p.jsxs("div",{className:`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${N.type==="gift"?"gift-bubble border border-zinc-800/50 py-3":N.type==="call"?"bg-blue-600/20 border border-blue-500/30 text-blue-300":N.type==="invite"?"bg-violet-600/15 border border-violet-500/30 text-violet-100":N.type==="image"||N.type==="video"?"p-1.5 bg-zinc-800/80 border border-zinc-700/30":$?"bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10":"bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30"}`,children:[N.type==="gift"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30",children:p.jsx(OT,{className:"w-6 h-6 text-emerald-500/80",strokeWidth:1.5})}),p.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60",children:"Особое внимание"}),p.jsx("div",{className:"text-zinc-100 font-light tracking-wide",children:N.text})]}),N.type==="call"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"text-2xl mb-1",children:((ee=N.text)==null?void 0:ee.split(" ")[0])||(((ce=N.metadata)==null?void 0:ce.callType)==="video"?"📹":"📞")}),p.jsx("div",{className:"text-sm font-medium",children:((se=N.metadata)==null?void 0:se.status)==="ringing"&&((ne=N.metadata)==null?void 0:ne.callerId)===t.id?"Вы звоните...":((we=N.metadata)==null?void 0:we.status)==="ringing"?"Вам звонят...":((xe=N.metadata)==null?void 0:xe.status)==="accepted"?"Звонок принят":((kt=N.metadata)==null?void 0:kt.status)==="declined"?"Звонок отклонен":(gr=N.text)==null?void 0:gr.replace(/^[📹📞]\s*/,"")}),p.jsx("div",{className:"text-xs opacity-50",children:((To=N.metadata)==null?void 0:To.status)==="ringing"?"Ожидание ответа":"История звонка"})]}),N.type==="image"&&p.jsx("img",{src:N.metadata.url,alt:"attachment",className:"max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(N.metadata.url,"_blank")}),N.type==="video"&&p.jsx("video",{src:N.metadata.url,controls:!0,className:"max-w-full rounded-xl overflow-hidden"}),N.type==="voice"&&p.jsxs("div",{className:"flex items-center gap-3 py-1 min-w-[200px]",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",children:p.jsx(Ps,{className:"w-4 h-4 text-emerald-500"})}),p.jsx("audio",{src:N.metadata.url,controls:!0,className:"h-8 w-full custom-audio-player"})]}),N.type==="invite"&&p.jsxs("div",{className:"space-y-2 min-w-[220px]",children:[p.jsxs("div",{className:"text-xs text-violet-200/80",children:[((ps=N.metadata)==null?void 0:ps.invitedByName)||N.senderName," приглашает вас в ",((ms=N.metadata)==null?void 0:ms.targetChatType)==="group"?"группу":"канал"]}),p.jsx("div",{className:"text-sm font-semibold text-violet-100",children:((Wn=N.metadata)==null?void 0:Wn.targetChatName)||"Сообщество"}),((gs=N.metadata)==null?void 0:gs.inviteUrl)&&p.jsx("a",{href:N.metadata.inviteUrl,target:"_blank",rel:"noreferrer",className:"block text-[11px] text-violet-300 hover:text-violet-200 underline break-all",children:N.metadata.inviteUrl}),p.jsx("button",{onClick:()=>{var Be;return f((Be=N.metadata)==null?void 0:Be.targetChatId)},className:"px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500/30 hover:bg-violet-500/40 text-violet-100 border border-violet-400/40",children:"Вступить"})]}),(N.type==="text"||N.type==="gift"||N.type==="call")&&N.text]}),p.jsxs("div",{className:"flex items-center gap-2 mt-1.5 px-1",children:[p.jsx("span",{className:"text-[10px] text-zinc-600 font-medium",children:N.timestamp?N.timestamp.toDate?N.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(N.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),p.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[Object.entries(re).map(([Be,In])=>p.jsxs("button",{onClick:()=>u(N.id,Be),className:"px-1.5 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-200 flex items-center gap-1 hover:bg-zinc-700",children:[p.jsx("span",{children:Be}),p.jsx("span",{className:"text-[9px] opacity-70",children:In})]},Be)),p.jsx("div",{className:"flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:["👍","❤️","🔥","😂","😢"].map(Be=>p.jsx("button",{onClick:()=>u(N.id,Be),className:"w-6 h-6 flex items-center justify-center rounded-full text-[14px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors",title:Be,children:Be},Be))})]})]})]})},N.id)})}),p.jsxs("div",{className:"p-6 bg-gradient-to-t from-[#09090b] to-transparent",children:[p.jsx(S4,{}),p.jsx("p",{className:"text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest",children:"End-to-end encryption active"})]})]}):p.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500",children:[p.jsx("div",{className:"w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner",children:p.jsx(gv,{className:"w-8 h-8 opacity-20 rotate-180"})}),p.jsx("p",{className:"text-sm font-medium tracking-wide uppercase opacity-40",children:"Выберите чат для общения"})]})}function C4(){const{activeEffects:t}=Eo();return p.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:t.map(e=>p.jsxs(Wf.Fragment,{children:[e.type==="hearts"&&p.jsx("div",{className:"absolute inset-0",children:[...Array(24)].map((n,r)=>p.jsx("div",{className:"absolute effect-heart text-rose-500/50",style:{left:`${Math.random()*100}%`,"--heart-delay":`${Math.random()*1.4}s`,"--heart-duration":`${2.4+Math.random()*1.8}s`,"--heart-size":`${16+Math.random()*28}px`,"--heart-drift":`${-30+Math.random()*60}px`},children:p.jsx(MT,{size:20,fill:"currentColor"})},r))}),e.type==="fire"&&p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute inset-0 effect-fire-glow"}),p.jsx("div",{className:"absolute inset-x-0 bottom-0 h-48 effect-fire-wave"}),[...Array(18)].map((n,r)=>p.jsx("div",{className:"absolute effect-fire-spark",style:{left:`${Math.random()*100}%`,"--spark-delay":`${Math.random()*1.2}s`,"--spark-duration":`${.9+Math.random()*1.4}s`,"--spark-size":`${2+Math.random()*5}px`,"--spark-drift":`${-24+Math.random()*48}px`}},r))]}),e.type==="stars"&&p.jsxs("div",{className:"absolute inset-0",children:[[...Array(40)].map((n,r)=>p.jsx("div",{className:"absolute effect-star-dot",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${2+Math.random()*4}px`,height:`${2+Math.random()*4}px`,"--star-delay":`${Math.random()*1.4}s`,"--star-duration":`${.8+Math.random()*1.6}s`}},r)),[...Array(6)].map((n,r)=>p.jsx("div",{className:"absolute effect-shooting-star",style:{top:`${Math.random()*45}%`,left:`${-20+Math.random()*40}%`,"--shoot-delay":`${Math.random()*1.8}s`,"--shoot-duration":`${1.1+Math.random()*.8}s`}},`shoot-${r}`))]})]},e.id))})}const ph=["declined","cancelled","ended","missed"];function k4(){var W,Q,X,N,$,K,re;const{user:t}=ci(),{messages:e,activeChatId:n,sendMessage:r}=Eo(),[s,i]=B.useState(0),[o,l]=B.useState(null),[c,u]=B.useState(null),f=B.useRef(null),g=B.useRef(null),m=B.useRef(null),x=B.useRef(new Set),k=B.useRef(null),b=B.useRef([]),P=B.useMemo(()=>{if(!t||!n||!(e!=null&&e.length))return null;const ee=e.filter(ne=>ne.type!=="call"||!ne.metadata||ne.metadata.chatId&&ne.metadata.chatId!==n?!1:ne.metadata.callerId===t.id||ne.metadata.targetId===t.id);if(!ee.length)return null;const ce=new Map;ee.forEach(ne=>{const we=ne.metadata.callId||ne.id;ce.set(we,ne)});const se=Array.from(ce.values()).filter(ne=>{var we;return!ph.includes((we=ne.metadata)==null?void 0:we.status)});return se.length?se[se.length-1]:null},[t,n,e]);B.useEffect(()=>{var ce;if(!P||!["accepted","connected"].includes((ce=P.metadata)==null?void 0:ce.status)){i(0);return}const ee=setInterval(()=>{i(se=>se+1)},1e3);return()=>{clearInterval(ee)}},[P]);const E=((W=P==null?void 0:P.metadata)==null?void 0:W.callId)||(P==null?void 0:P.id)||null,v=((Q=P==null?void 0:P.metadata)==null?void 0:Q.callerId)===(t==null?void 0:t.id),T=((X=P==null?void 0:P.metadata)==null?void 0:X.callType)==="video",D=(N=P==null?void 0:P.metadata)==null?void 0:N.status,j=v?($=P==null?void 0:P.metadata)==null?void 0:$.targetId:(K=P==null?void 0:P.metadata)==null?void 0:K.callerId,M=()=>{m.current&&(m.current.ontrack=null,m.current.onicecandidate=null,m.current.onconnectionstatechange=null,m.current.close(),m.current=null),o&&o.getTracks().forEach(ee=>ee.stop()),l(null),u(null),b.current=[],k.current=null},w=async ee=>{var ne;if(!P||!E)return;await r(`${T?"📹":"📞"} Звонок ${T?"видеозвонок":"голосовой звонок"} ${ee==="accepted"?"принят":ee==="declined"?"отклонен":ee==="ended"?"завершен":"отменен"}.`,"call",{...P.metadata,callId:E,targetId:ee==="cancelled"?(ne=P.metadata)==null?void 0:ne.targetId:t.id,status:ee,timestamp:Date.now()}),["declined","cancelled","ended"].includes(ee)&&M()},y=async()=>{if(!E||!j)return null;if(m.current)return m.current;let ee=null;try{ee=await navigator.mediaDevices.getUserMedia({audio:!0,video:T})}catch(se){throw await w(v?"cancelled":"declined"),alert(T?"Нет доступа к микрофону или камере. Разрешите доступ к устройствам в браузере.":"Нет доступа к микрофону. Разрешите доступ к микрофону в браузере."),se}l(ee);const ce=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});return ee.getTracks().forEach(se=>ce.addTrack(se,ee)),ce.ontrack=se=>{const[ne]=se.streams;ne&&u(ne)},ce.onicecandidate=async se=>{se.candidate&&await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:j,signalType:"ice",candidate:se.candidate.toJSON()})},ce.onconnectionstatechange=async()=>{ce.connectionState==="connected"&&(k.current=E),["failed","disconnected","closed"].includes(ce.connectionState)&&(k.current===E?await w("ended"):M())},m.current=ce,ce};if(B.useEffect(()=>{if(!P||!E){M();return}if(ph.includes(D)){M();return}},[P,E,D]),B.useEffect(()=>{if(!P||!E||!v||D!=="accepted"||k.current===E)return;(async()=>{try{const ce=await y();if(!ce)return;const se=await ce.createOffer();await ce.setLocalDescription(se),await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:j,signalType:"offer",sdp:se})}catch(ce){console.error("Offer creation error",ce)}})()},[P,E,v,D]),B.useEffect(()=>{if(!P||!E)return;const ee=e.filter(se=>!(se.type!=="call-signal"||!se.metadata||se.metadata.callId!==E||se.metadata.fromId===t.id));(async()=>{for(const se of ee){if(x.current.has(se.id))continue;const ne=se.metadata;let we=!1;try{if(ne.signalType==="offer"){if(v||D!=="accepted")continue;const xe=await y();if(!xe)continue;await xe.setRemoteDescription(new RTCSessionDescription(ne.sdp));const kt=await xe.createAnswer();for(await xe.setLocalDescription(kt),await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:j,signalType:"answer",sdp:kt});b.current.length;){const gr=b.current.shift();await xe.addIceCandidate(new RTCIceCandidate(gr))}we=!0}if(ne.signalType==="answer"&&m.current){if(!v||!["accepted","connected"].includes(D))continue;for(await m.current.setRemoteDescription(new RTCSessionDescription(ne.sdp));b.current.length;){const xe=b.current.shift();await m.current.addIceCandidate(new RTCIceCandidate(xe))}we=!0}if(ne.signalType==="ice"){if(!["accepted","connected"].includes(D))continue;!m.current||!m.current.remoteDescription?b.current.push(ne.candidate):await m.current.addIceCandidate(new RTCIceCandidate(ne.candidate)),we=!0}we&&x.current.add(se.id)}catch(xe){console.error("Signal processing error",xe)}}})()},[e,P,E,v,D]),B.useEffect(()=>{f.current&&(f.current.srcObject=o||null)},[o]),B.useEffect(()=>{g.current&&(g.current.srcObject=c||null)},[c]),B.useEffect(()=>()=>{M()},[]),B.useEffect(()=>{var xe,kt;if(!P||D!=="ringing")return;const ee=Number(((xe=P.metadata)==null?void 0:xe.startedAt)||((kt=P.metadata)==null?void 0:kt.timestamp)||Date.now()),ce=Date.now()-ee,se=Math.max(0,3e4-ce),ne=v?"cancelled":"missed";if(se===0){w(ne);return}const we=setTimeout(()=>{w(ne)},se);return()=>clearTimeout(we)},[P,D,v]),!P)return null;const I=!v&&D==="ringing",A=!v&&["ringing","accepted"].includes(D),C=v&&D==="ringing",R=["accepted","connected"].includes(D),S=!ph.includes(D)&&!I&&!A&&!C&&!R,z=D==="ringing"?v?"cancelled":"declined":"ended";return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:p.jsxs("div",{className:"w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4",children:[p.jsx("div",{className:"w-14 h-1 rounded-full bg-zinc-800 mb-2"}),p.jsx("div",{className:"w-full rounded-2xl bg-zinc-900/70 border border-zinc-800 p-2",children:T?p.jsxs("div",{className:"relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950",children:[c?p.jsx("video",{ref:g,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-zinc-500 text-xs",children:"Ожидание видео..."}),p.jsx("video",{ref:f,autoPlay:!0,playsInline:!0,muted:!0,className:"absolute bottom-2 right-2 w-24 h-16 object-cover rounded-lg border border-zinc-700 bg-zinc-900"})]}):p.jsx("div",{className:"w-full h-28 rounded-xl flex items-center justify-center",children:p.jsx(Ps,{className:"w-10 h-10 text-emerald-400"})})}),p.jsx("div",{className:"text-sm text-zinc-500 uppercase tracking-widest",children:I?"Входящий звонок":v?"Исходящий звонок":"Звонок"}),p.jsx("div",{className:"text-lg font-semibold text-zinc-100 text-center",children:v?"Собеседник":((re=P.metadata)==null?void 0:re.callerName)||"Неизвестный пользователь"}),p.jsx("div",{className:"text-xs text-zinc-500 mb-1",children:T?"Видеозвонок через GiftWave":"Голосовой звонок через GiftWave"}),p.jsxs("div",{className:"text-[11px] text-zinc-500",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),p.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[A&&p.jsx("button",{onClick:()=>w("declined"),className:"w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40",children:p.jsx(jm,{className:"w-7 h-7"})}),I&&p.jsx("button",{onClick:()=>w("accepted"),className:"w-16 h-16 rounded-full bg-emerald-500 shadow-emerald-500/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ps,{className:"w-7 h-7 -rotate-45"})}),C&&p.jsx("button",{onClick:()=>w("cancelled"),className:"w-16 h-16 rounded-full bg-zinc-600 shadow-zinc-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ps,{className:"w-7 h-7 rotate-135"})}),R&&p.jsx("button",{onClick:()=>w("ended"),className:"w-16 h-16 rounded-full bg-red-600 shadow-red-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ps,{className:"w-7 h-7 rotate-135"})}),S&&p.jsx("button",{onClick:()=>w(z),className:"w-16 h-16 rounded-full bg-red-600 shadow-red-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ps,{className:"w-7 h-7 rotate-135"})})]}),p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mt-4",children:D==="ringing"?v?"Ожидание ответа собеседника":"Примите звонок, чтобы подключиться":D==="accepted"?"Идет реальное соединение":"Управление звонком"})]})})}const Fm="-",R4=t=>{const e=P4(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Fm);return l[0]===""&&l.length!==1&&l.shift(),UT(l,e)||b4(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},UT=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?UT(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Fm);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},_v=/^\[(.+)\]$/,b4=t=>{if(_v.test(t)){const e=_v.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},P4=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return D4(Object.entries(t.classGroups),n).forEach(([i,o])=>{Uf(o,r,i,e)}),r},Uf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:vv(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(N4(s)){Uf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Uf(o,vv(e,i),n,r)})})},vv=(t,e)=>{let n=t;return e.split(Fm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},N4=t=>t.isThemeGetter,D4=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,V4=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},zT="!",O4=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let u=0,f=0,g;for(let P=0;P<l.length;P++){let E=l[P];if(u===0){if(E===s&&(r||l.slice(P,P+i)===e)){c.push(l.slice(f,P)),f=P+i;continue}if(E==="/"){g=P;continue}}E==="["?u++:E==="]"&&u--}const m=c.length===0?l:l.substring(f),x=m.startsWith(zT),k=x?m.substring(1):m,b=g&&g>f?g-f:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:k,maybePostfixModifierPosition:b}};return n?l=>n({className:l,parseClassName:o}):o},M4=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},L4=t=>({cache:V4(t.cacheSize),parseClassName:O4(t),...R4(t)}),j4=/\s+/,F4=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(j4);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{modifiers:f,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:x}=n(u);let k=!!x,b=r(k?m.substring(0,x):m);if(!b){if(!k){l=u+(l.length>0?" "+l:l);continue}if(b=r(m),!b){l=u+(l.length>0?" "+l:l);continue}k=!1}const P=M4(f).join(":"),E=g?P+zT:P,v=E+b;if(i.includes(v))continue;i.push(v);const T=s(b,k);for(let D=0;D<T.length;++D){const j=T[D];i.push(E+j)}l=u+(l.length>0?" "+l:l)}return l};function U4(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=$T(e))&&(r&&(r+=" "),r+=n);return r}const $T=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=$T(t[r]))&&(n&&(n+=" "),n+=e);return n};function z4(t,...e){let n,r,s,i=o;function o(c){const u=e.reduce((f,g)=>g(f),t());return n=L4(u),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const u=r(c);if(u)return u;const f=F4(c,n);return s(c,f),f}return function(){return i(U4.apply(null,arguments))}}const be=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},BT=/^\[(?:([a-z-]+):)?(.+)\]$/i,$4=/^\d+\/\d+$/,B4=new Set(["px","full","screen"]),q4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,W4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,H4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,G4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,K4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Kn=t=>Qi(t)||B4.has(t)||$4.test(t),kr=t=>Io(t,"length",nV),Qi=t=>!!t&&!Number.isNaN(Number(t)),mh=t=>Io(t,"number",Qi),sa=t=>!!t&&Number.isInteger(Number(t)),Q4=t=>t.endsWith("%")&&Qi(t.slice(0,-1)),ue=t=>BT.test(t),Rr=t=>q4.test(t),Y4=new Set(["length","size","percentage"]),J4=t=>Io(t,Y4,qT),X4=t=>Io(t,"position",qT),Z4=new Set(["image","url"]),eV=t=>Io(t,Z4,sV),tV=t=>Io(t,"",rV),ia=()=>!0,Io=(t,e,n)=>{const r=BT.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},nV=t=>W4.test(t)&&!H4.test(t),qT=()=>!1,rV=t=>G4.test(t),sV=t=>K4.test(t),iV=()=>{const t=be("colors"),e=be("spacing"),n=be("blur"),r=be("brightness"),s=be("borderColor"),i=be("borderRadius"),o=be("borderSpacing"),l=be("borderWidth"),c=be("contrast"),u=be("grayscale"),f=be("hueRotate"),g=be("invert"),m=be("gap"),x=be("gradientColorStops"),k=be("gradientColorStopPositions"),b=be("inset"),P=be("margin"),E=be("opacity"),v=be("padding"),T=be("saturate"),D=be("scale"),j=be("sepia"),M=be("skew"),w=be("space"),y=be("translate"),I=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",ue,e],R=()=>[ue,e],S=()=>["",Kn,kr],z=()=>["auto",Qi,ue],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Q=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",ue],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[Qi,ue];return{cacheSize:500,separator:":",theme:{colors:[ia],spacing:[Kn,kr],blur:["none","",Rr,ue],brightness:re(),borderColor:[t],borderRadius:["none","","full",Rr,ue],borderSpacing:R(),borderWidth:S(),contrast:re(),grayscale:$(),hueRotate:re(),invert:$(),gap:R(),gradientColorStops:[t],gradientColorStopPositions:[Q4,kr],inset:C(),margin:C(),opacity:re(),padding:R(),saturate:re(),scale:re(),sepia:$(),skew:re(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",ue]}],container:["container"],columns:[{columns:[Rr]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),ue]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",sa,ue]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ue]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",sa,ue]}],"grid-cols":[{"grid-cols":[ia]}],"col-start-end":[{col:["auto",{span:["full",sa,ue]},ue]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[ia]}],"row-start-end":[{row:["auto",{span:[sa,ue]},ue]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ue]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ue,e]}],"min-w":[{"min-w":[ue,e,"min","max","fit"]}],"max-w":[{"max-w":[ue,e,"none","full","min","max","fit","prose",{screen:[Rr]},Rr]}],h:[{h:[ue,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ue,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ue,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ue,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Rr,kr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mh]}],"font-family":[{font:[ia]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ue]}],"line-clamp":[{"line-clamp":["none",Qi,mh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Kn,ue]}],"list-image":[{"list-image":["none",ue]}],"list-style-type":[{list:["none","disc","decimal",ue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Kn,kr]}],"underline-offset":[{"underline-offset":["auto",Kn,ue]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),X4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",J4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},eV]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...Q(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:Q()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Q()]}],"outline-offset":[{"outline-offset":[Kn,ue]}],"outline-w":[{outline:[Kn,kr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:S()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Kn,kr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Rr,tV]}],"shadow-color":[{shadow:[ia]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Rr,ue]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[T]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[T]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ue]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",ue]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",ue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[sa,ue]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ue]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ue]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ue]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Kn,kr,mh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},gh=z4(iV);class oV extends Wf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("App Crash:",e,n)}render(){return this.state.hasError?p.jsxs("div",{className:"h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center",children:[p.jsx("h1",{className:"text-xl font-bold text-white mb-4",children:"Ой! Что-то пошло не так"}),p.jsx("p",{className:"text-zinc-400 text-sm mb-6",children:"Возможно, это из-за старого кэша приложения."}),p.jsx("button",{onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.pathname+"?clear=true"},className:"px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all",children:"Очистить кэш и исправить"})]}):this.props.children}}function aV(){const{user:t,loading:e}=ci(),{activeChatId:n}=Eo();return e?p.jsx("div",{className:"h-screen bg-[#09090b] flex items-center justify-center",children:p.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):!t||!t.isVerified?p.jsx(E4,{}):p.jsx("div",{className:"flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden",children:p.jsxs("div",{className:gh("flex-1 flex",n?"mobile-chat-active":"mobile-sidebar-active"),children:[p.jsx("div",{className:gh("w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",n?"hidden md:flex":"w-full md:w-80 flex"),children:p.jsx(I4,{})}),p.jsxs("main",{className:gh("flex-1 flex flex-col relative transition-all duration-300",n?"flex":"hidden md:flex"),children:[n?p.jsx(A4,{}):p.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]",children:[p.jsx("div",{className:"p-6 bg-zinc-900/30 rounded-full mb-4",children:p.jsx("img",{src:t.avatar,className:"w-24 h-24 opacity-20 grayscale rounded-2xl object-cover",alt:"logo"})}),p.jsx("h3",{className:"text-xl font-medium text-zinc-400 text-center px-4",children:"Выберите чат, чтобы начать общение"})]}),p.jsx(C4,{}),p.jsx(k4,{})]})]})})}function lV(){return p.jsx(oV,{children:p.jsx(aV,{})})}console.log("--- APP VERSION 3.0.0 LOADED ---");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>console.log("SW registered v1.2.1-ULTRA-FORCE")).catch(t=>console.log("SW reg error",t))});yh.createRoot(document.getElementById("root")).render(p.jsx(Wf.StrictMode,{children:p.jsx(JD,{children:p.jsx(ZD,{children:p.jsx(lV,{})})})}));
