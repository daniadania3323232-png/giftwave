(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function a1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iv={exports:{}},Tu={},Tv={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),l1=Symbol.for("react.portal"),c1=Symbol.for("react.fragment"),u1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),p1=Symbol.for("react.forward_ref"),m1=Symbol.for("react.suspense"),g1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),mg=Symbol.iterator;function _1(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,Av={};function ho(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||xv}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cv(){}Cv.prototype=ho.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||xv}var $f=zf.prototype=new Cv;$f.constructor=zf;Sv($f,ho.prototype);$f.isPureReactComponent=!0;var gg=Array.isArray,kv=Object.prototype.hasOwnProperty,Bf={current:null},Rv={key:!0,ref:!0,__self:!0,__source:!0};function bv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)kv.call(e,r)&&!Rv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:sl,type:t,key:i,ref:o,props:s,_owner:Bf.current}}function v1(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function w1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yg=/\/+/g;function Cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w1(""+t.key):e.toString(36)}function oc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case l1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Cd(o,0):r,gg(s)?(n="",t!=null&&(n=t.replace(yg,"$&/")+"/"),oc(s,e,n,"",function(u){return u})):s!=null&&(qf(s)&&(s=v1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(yg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",gg(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Cd(i,l);o+=oc(i,e,n,c,s)}else if(c=_1(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Cd(i,l++),o+=oc(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var r=[],s=0;return oc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function E1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},ac={transition:null},I1={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:ac,ReactCurrentOwner:Bf};function Pv(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=ho;fe.Fragment=c1;fe.Profiler=d1;fe.PureComponent=zf;fe.StrictMode=u1;fe.Suspense=m1;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;fe.act=Pv;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Bf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)kv.call(e,c)&&!Rv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:sl,type:t.type,key:s,ref:i,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:f1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};fe.createElement=bv;fe.createFactory=function(t){var e=bv.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:p1,render:t}};fe.isValidElement=qf;fe.lazy=function(t){return{$$typeof:y1,_payload:{_status:-1,_result:t},_init:E1}};fe.memo=function(t,e){return{$$typeof:g1,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};fe.unstable_act=Pv;fe.useCallback=function(t,e){return Rt.current.useCallback(t,e)};fe.useContext=function(t){return Rt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Rt.current.useEffect(t,e)};fe.useId=function(){return Rt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Rt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};fe.useRef=function(t){return Rt.current.useRef(t)};fe.useState=function(t){return Rt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Rt.current.useTransition()};fe.version="18.3.1";Tv.exports=fe;var $=Tv.exports;const Wf=a1($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1=$,x1=Symbol.for("react.element"),S1=Symbol.for("react.fragment"),A1=Object.prototype.hasOwnProperty,C1=T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function Nv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)A1.call(e,r)&&!k1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:x1,type:t,key:i,ref:o,props:s,_owner:C1.current}}Tu.Fragment=S1;Tu.jsx=Nv;Tu.jsxs=Nv;Iv.exports=Tu;var p=Iv.exports,yh={},Dv={exports:{}},Qt={},Ov={exports:{}},Vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var K=P.length;P.push(B);e:for(;0<K;){var se=K-1>>>1,he=P[se];if(0<s(he,B))P[se]=B,P[K]=he,K=se;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],K=P.pop();if(K!==B){P[0]=K;e:for(var se=0,he=P.length,Xe=he>>>1;se<Xe;){var ne=2*(se+1)-1,te=P[ne],X=ne+1,ae=P[X];if(0>s(te,K))X<he&&0>s(ae,te)?(P[se]=ae,P[X]=K,se=X):(P[se]=te,P[ne]=K,se=ne);else if(X<he&&0>s(ae,K))P[se]=ae,P[X]=K,se=X;else break e}}return B}function s(P,B){var K=P.sortIndex-B.sortIndex;return K!==0?K:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,g=null,m=3,x=!1,k=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(c,B);else break;B=n(u)}}function N(P){if(b=!1,E(P),!k)if(n(c)!==null)k=!0,Q(j);else{var B=n(u);B!==null&&Z(N,B.startTime-P)}}function j(P,B){k=!1,b&&(b=!1,T(y),y=-1),x=!0;var K=m;try{for(E(B),g=n(c);g!==null&&(!(g.expirationTime>B)||P&&!C());){var se=g.callback;if(typeof se=="function"){g.callback=null,m=g.priorityLevel;var he=se(g.expirationTime<=B);B=t.unstable_now(),typeof he=="function"?g.callback=he:g===n(c)&&r(c),E(B)}else r(c);g=n(c)}if(g!==null)var Xe=!0;else{var ne=n(u);ne!==null&&Z(N,ne.startTime-B),Xe=!1}return Xe}finally{g=null,m=K,x=!1}}var M=!1,w=null,y=-1,I=5,A=-1;function C(){return!(t.unstable_now()-A<I)}function R(){if(w!==null){var P=t.unstable_now();A=P;var B=!0;try{B=w(!0,P)}finally{B?S():(M=!1,w=null)}}else M=!1}var S;if(typeof _=="function")S=function(){_(R)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=R,S=function(){H.postMessage(null)}}else S=function(){V(R,0)};function Q(P){w=P,M||(M=!0,S())}function Z(P,B){y=V(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){k||x||(k=!0,Q(j))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var K=m;m=B;try{return P()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var K=m;m=P;try{return B()}finally{m=K}},t.unstable_scheduleCallback=function(P,B,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=K+he,P={id:f++,callback:B,priorityLevel:P,startTime:K,expirationTime:he,sortIndex:-1},K>se?(P.sortIndex=K,e(u,P),n(c)===null&&P===n(u)&&(b?(T(y),y=-1):b=!0,Z(N,K-se))):(P.sortIndex=he,e(c,P),k||x||(k=!0,Q(j))),P},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(P){var B=m;return function(){var K=m;m=B;try{return P.apply(this,arguments)}finally{m=K}}}})(Vv);Ov.exports=Vv;var R1=Ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=$,Kt=R1;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,Na={};function ti(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(Na[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,P1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},vg={};function N1(t){return _h.call(vg,t)?!0:_h.call(_g,t)?!1:P1.test(t)?vg[t]=!0:(_g[t]=!0,!1)}function D1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O1(t,e,n,r){if(e===null||typeof e>"u"||D1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hf=/[\-:]([a-z])/g;function Gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hf,Gf);mt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hf,Gf);mt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hf,Gf);mt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,r){var s=mt.hasOwnProperty(e)?mt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O1(e,n,s,r)&&(n=null),r||s===null?N1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),Fv=Symbol.for("react.offscreen"),wg=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,kd;function aa(t){if(kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kd=e&&e[1]||""}return`
`+kd+t}var Rd=!1;function bd(t,e){if(!t||Rd)return"";Rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function V1(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=bd(t.type,!1),t;case 11:return t=bd(t.type.render,!1),t;case 1:return t=bd(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case xi:return"Portal";case vh:return"Profiler";case Qf:return"StrictMode";case wh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jv:return(t.displayName||"Context")+".Consumer";case Lv:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jf:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L1(t){var e=Uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=L1(t))}function zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $v(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function xh(t,e){$v(t,e);var n=rs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function Li(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(la(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function Bv(t,e){var n=rs(e.value),r=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,Wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j1=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){j1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Hv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var F1=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(F1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,ji=null,Fi=null;function Sg(t){if(t=al(t)){if(typeof Ph!="function")throw Error(q(280));var e=t.stateNode;e&&(e=ku(e),Ph(t.stateNode,t.type,e))}}function Kv(t){ji?Fi?Fi.push(t):Fi=[t]:ji=t}function Qv(){if(ji){var t=ji,e=Fi;if(Fi=ji=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function Yv(t,e){return t(e)}function Jv(){}var Pd=!1;function Xv(t,e,n){if(Pd)return t(e,n);Pd=!0;try{return Yv(t,e,n)}finally{Pd=!1,(ji!==null||Fi!==null)&&(Jv(),Qv())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Nh=!1;if(cr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Nh=!1}function U1(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var _a=!1,bc=null,Pc=!1,Dh=null,z1={onError:function(t){_a=!0,bc=t}};function $1(t,e,n,r,s,i,o,l,c){_a=!1,bc=null,U1.apply(z1,arguments)}function B1(t,e,n,r,s,i,o,l,c){if($1.apply(this,arguments),_a){if(_a){var u=bc;_a=!1,bc=null}else throw Error(q(198));Pc||(Pc=!0,Dh=u)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(ni(t)!==t)throw Error(q(188))}function q1(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ag(s),t;if(i===r)return Ag(s),e;i=i.sibling}throw Error(q(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function e0(t){return t=q1(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=Kt.unstable_scheduleCallback,Cg=Kt.unstable_cancelCallback,W1=Kt.unstable_shouldYield,H1=Kt.unstable_requestPaint,He=Kt.unstable_now,G1=Kt.unstable_getCurrentPriorityLevel,Zf=Kt.unstable_ImmediatePriority,r0=Kt.unstable_UserBlockingPriority,Nc=Kt.unstable_NormalPriority,K1=Kt.unstable_LowPriority,s0=Kt.unstable_IdlePriority,xu=null,Fn=null;function Q1(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:X1,Y1=Math.log,J1=Math.LN2;function X1(t){return t>>>=0,t===0?32:31-(Y1(t)/J1|0)|0}var Fl=64,Ul=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ca(l):(i&=o,i!==0&&(r=ca(i)))}else o=n&~s,o!==0?r=ca(o):i!==0&&(r=ca(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),s=1<<n,r|=t[n],e&=~s;return r}function Z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-vn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Z1(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i0(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function Nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-vn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var xe=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a0,tp,l0,c0,u0,Vh=!1,zl=[],Wr=null,Hr=null,Gr=null,Va=new Map,Ma=new Map,Mr=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Yo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=al(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function rx(t,e,n,r,s){switch(e){case"focusin":return Wr=Yo(Wr,t,e,n,r,s),!0;case"dragenter":return Hr=Yo(Hr,t,e,n,r,s),!0;case"mouseover":return Gr=Yo(Gr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Va.set(i,Yo(Va.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ma.set(i,Yo(Ma.get(i)||null,t,e,n,r,s)),!0}return!1}function d0(t){var e=Ds(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=Zv(n),e!==null){t.blockedOn=e,u0(t.priority,function(){l0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=al(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){lc(t)&&n.delete(e)}function sx(){Vh=!1,Wr!==null&&lc(Wr)&&(Wr=null),Hr!==null&&lc(Hr)&&(Hr=null),Gr!==null&&lc(Gr)&&(Gr=null),Va.forEach(Rg),Ma.forEach(Rg)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Vh||(Vh=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,sx)))}function La(t){function e(s){return Jo(s,t)}if(0<zl.length){Jo(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wr!==null&&Jo(Wr,t),Hr!==null&&Jo(Hr,t),Gr!==null&&Jo(Gr,t),Va.forEach(e),Ma.forEach(e),n=0;n<Mr.length;n++)r=Mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&Mr.shift()}var Ui=_r.ReactCurrentBatchConfig,Oc=!0;function ix(t,e,n,r){var s=xe,i=Ui.transition;Ui.transition=null;try{xe=1,np(t,e,n,r)}finally{xe=s,Ui.transition=i}}function ox(t,e,n,r){var s=xe,i=Ui.transition;Ui.transition=null;try{xe=4,np(t,e,n,r)}finally{xe=s,Ui.transition=i}}function np(t,e,n,r){if(Oc){var s=Mh(t,e,n,r);if(s===null)$d(t,e,r,Vc,n),kg(t,r);else if(rx(s,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<nx.indexOf(t)){for(;s!==null;){var i=al(s);if(i!==null&&a0(i),i=Mh(t,e,n,r),i===null&&$d(t,e,r,Vc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else $d(t,e,r,null,n)}}var Vc=null;function Mh(t,e,n,r){if(Vc=null,t=Xf(r),t=Ds(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function h0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G1()){case Zf:return 1;case r0:return 4;case Nc:case K1:return 16;case s0:return 536870912;default:return 16}default:return 16}}var $r=null,rp=null,cc=null;function f0(){if(cc)return cc;var t,e=rp,n=e.length,r,s="value"in $r?$r.value:$r.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return cc=s.slice(t,1<r?1-r:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function bg(){return!1}function Yt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$l:bg,this.isPropagationStopped=bg,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Yt(fo),ol=Ue({},fo,{view:0,detail:0}),ax=Yt(ol),Dd,Od,Xo,Su=Ue({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Dd=t.screenX-Xo.screenX,Od=t.screenY-Xo.screenY):Od=Dd=0,Xo=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),Pg=Yt(Su),lx=Ue({},Su,{dataTransfer:0}),cx=Yt(lx),ux=Ue({},ol,{relatedTarget:0}),Vd=Yt(ux),dx=Ue({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Yt(dx),fx=Ue({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),px=Yt(fx),mx=Ue({},fo,{data:0}),Ng=Yt(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_x[t])?!!e[t]:!1}function ip(){return vx}var wx=Ue({},ol,{key:function(t){if(t.key){var e=gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=Yt(wx),Ix=Ue({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Yt(Ix),Tx=Ue({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),xx=Yt(Tx),Sx=Ue({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=Yt(Sx),Cx=Ue({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Yt(Cx),Rx=[9,13,27,32],op=cr&&"CompositionEvent"in window,va=null;cr&&"documentMode"in document&&(va=document.documentMode);var bx=cr&&"TextEvent"in window&&!va,p0=cr&&(!op||va&&8<va&&11>=va),Og=" ",Vg=!1;function m0(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function Px(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(Vg=!0,Og);case"textInput":return t=e.data,t===Og&&Vg?null:t;default:return null}}function Nx(t,e){if(Ai)return t==="compositionend"||!op&&m0(t,e)?(t=f0(),cc=rp=$r=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dx[t.type]:e==="textarea"}function y0(t,e,n,r){Kv(r),e=Mc(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,ja=null;function Ox(t){k0(t,0)}function Au(t){var e=Ri(t);if(zv(e))return t}function Vx(t,e){if(t==="change")return e}var _0=!1;if(cr){var Md;if(cr){var Ld="oninput"in document;if(!Ld){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),Ld=typeof Lg.oninput=="function"}Md=Ld}else Md=!1;_0=Md&&(!document.documentMode||9<document.documentMode)}function jg(){wa&&(wa.detachEvent("onpropertychange",v0),ja=wa=null)}function v0(t){if(t.propertyName==="value"&&Au(ja)){var e=[];y0(e,ja,t,Xf(t)),Xv(Ox,e)}}function Mx(t,e,n){t==="focusin"?(jg(),wa=e,ja=n,wa.attachEvent("onpropertychange",v0)):t==="focusout"&&jg()}function Lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(ja)}function jx(t,e){if(t==="click")return Au(e)}function Fx(t,e){if(t==="input"||t==="change")return Au(e)}function Ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:Ux;function Fa(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_h.call(e,s)||!In(t[s],e[s]))return!1}return!0}function Fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ug(t,e){var n=Fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fg(n)}}function w0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rc(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zx(t){var e=E0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w0(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ug(n,i);var o=Ug(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=cr&&"documentMode"in document&&11>=document.documentMode,Ci=null,Lh=null,Ea=null,jh=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jh||Ci==null||Ci!==Rc(r)||(r=Ci,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&Fa(Ea,r)||(Ea=r,r=Mc(Lh,"onSelect"),0<r.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ci)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},jd={},I0={};cr&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Cu(t){if(jd[t])return jd[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I0)return jd[t]=e[n];return t}var T0=Cu("animationend"),x0=Cu("animationiteration"),S0=Cu("animationstart"),A0=Cu("transitionend"),C0=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){C0.set(t,e),ti(e,[t])}for(var Fd=0;Fd<$g.length;Fd++){var Ud=$g[Fd],Bx=Ud.toLowerCase(),qx=Ud[0].toUpperCase()+Ud.slice(1);ds(Bx,"on"+qx)}ds(T0,"onAnimationEnd");ds(x0,"onAnimationIteration");ds(S0,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(A0,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B1(r,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Bg(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Bg(s,l,u),i=c}}}if(Pc)throw t=Dh,Pc=!1,Dh=null,t}function Ne(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(R0(e,t,2,!1),n.add(r))}function zd(t,e,n){var r=0;e&&(r|=4),R0(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[ql]){t[ql]=!0,Mv.forEach(function(n){n!=="selectionchange"&&(Wx.has(n)||zd(n,!1,t),zd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,zd("selectionchange",!1,e))}}function R0(t,e,n,r){switch(h0(e)){case 1:var s=ix;break;case 4:s=ox;break;default:s=np}n=s.bind(null,e,n,t),s=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function $d(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ds(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Xv(function(){var u=i,f=Xf(n),g=[];e:{var m=C0.get(t);if(m!==void 0){var x=sp,k=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":x=Ex;break;case"focusin":k="focus",x=Vd;break;case"focusout":k="blur",x=Vd;break;case"beforeblur":case"afterblur":x=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=xx;break;case T0:case x0:case S0:x=hx;break;case A0:x=Ax;break;case"scroll":x=ax;break;case"wheel":x=kx;break;case"copy":case"cut":case"paste":x=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Dg}var b=(e&4)!==0,V=!b&&t==="scroll",T=b?m!==null?m+"Capture":null:m;b=[];for(var _=u,E;_!==null;){E=_;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,T!==null&&(N=Oa(_,T),N!=null&&b.push(za(_,N,E)))),V)break;_=_.return}0<b.length&&(m=new x(m,k,null,n,f),g.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==bh&&(k=n.relatedTarget||n.fromElement)&&(Ds(k)||k[ur]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=u,k=k?Ds(k):null,k!==null&&(V=ni(k),k!==V||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=u),x!==k)){if(b=Pg,N="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=Dg,N="onPointerLeave",T="onPointerEnter",_="pointer"),V=x==null?m:Ri(x),E=k==null?m:Ri(k),m=new b(N,_+"leave",x,n,f),m.target=V,m.relatedTarget=E,N=null,Ds(f)===u&&(b=new b(T,_+"enter",k,n,f),b.target=E,b.relatedTarget=V,N=b),V=N,x&&k)t:{for(b=x,T=k,_=0,E=b;E;E=vi(E))_++;for(E=0,N=T;N;N=vi(N))E++;for(;0<_-E;)b=vi(b),_--;for(;0<E-_;)T=vi(T),E--;for(;_--;){if(b===T||T!==null&&b===T.alternate)break t;b=vi(b),T=vi(T)}b=null}else b=null;x!==null&&qg(g,m,x,b,!1),k!==null&&V!==null&&qg(g,V,k,b,!0)}}e:{if(m=u?Ri(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=Vx;else if(Mg(m))if(_0)j=Fx;else{j=Lx;var M=Mx}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=jx);if(j&&(j=j(t,u))){y0(g,j,n,f);break e}M&&M(t,m,u),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Sh(m,"number",m.value)}switch(M=u?Ri(u):window,t){case"focusin":(Mg(M)||M.contentEditable==="true")&&(Ci=M,Lh=u,Ea=null);break;case"focusout":Ea=Lh=Ci=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,zg(g,n,f);break;case"selectionchange":if($x)break;case"keydown":case"keyup":zg(g,n,f)}var w;if(op)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ai?m0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(p0&&n.locale!=="ko"&&(Ai||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ai&&(w=f0()):($r=f,rp="value"in $r?$r.value:$r.textContent,Ai=!0)),M=Mc(u,y),0<M.length&&(y=new Ng(y,t,null,n,f),g.push({event:y,listeners:M}),w?y.data=w:(w=g0(n),w!==null&&(y.data=w)))),(w=bx?Px(t,n):Nx(t,n))&&(u=Mc(u,"onBeforeInput"),0<u.length&&(f=new Ng("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:u}),f.data=w))}k0(g,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Oa(t,n),i!=null&&r.unshift(za(t,i,s)),i=Oa(t,e),i!=null&&r.push(za(t,i,s))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Oa(n,i),c!=null&&o.unshift(za(n,c,l))):s||(c=Oa(n,i),c!=null&&o.push(za(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Hx,`
`).replace(Gx,"")}function Wl(t,e,n){if(e=Wg(e),Wg(t)!==e&&n)throw Error(q(425))}function Lc(){}var Fh=null,Uh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(Yx)}:$h;function Yx(t){setTimeout(function(){throw t})}function Bd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),La(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);La(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),jn="__reactFiber$"+po,$a="__reactProps$"+po,ur="__reactContainer$"+po,Bh="__reactEvents$"+po,Jx="__reactListeners$"+po,Xx="__reactHandles$"+po;function Ds(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[jn])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[jn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function ku(t){return t[$a]||null}var qh=[],bi=-1;function hs(t){return{current:t}}function Oe(t){0>bi||(t.current=qh[bi],qh[bi]=null,bi--)}function Re(t,e){bi++,qh[bi]=t.current,t.current=e}var ss={},Tt=hs(ss),Mt=hs(!1),$s=ss;function Xi(t,e){var n=t.type.contextTypes;if(!n)return ss;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function jc(){Oe(Mt),Oe(Tt)}function Kg(t,e,n){if(Tt.current!==ss)throw Error(q(168));Re(Tt,e),Re(Mt,n)}function b0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(q(108,M1(t)||"Unknown",s));return Ue({},n,r)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ss,$s=Tt.current,Re(Tt,t),Re(Mt,Mt.current),!0}function Qg(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=b0(t,e,$s),r.__reactInternalMemoizedMergedChildContext=t,Oe(Mt),Oe(Tt),Re(Tt,t)):Oe(Mt),Re(Mt,n)}var tr=null,Ru=!1,qd=!1;function P0(t){tr===null?tr=[t]:tr.push(t)}function Zx(t){Ru=!0,P0(t)}function fs(){if(!qd&&tr!==null){qd=!0;var t=0,e=xe;try{var n=tr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tr=null,Ru=!1}catch(s){throw tr!==null&&(tr=tr.slice(t+1)),n0(Zf,fs),s}finally{xe=e,qd=!1}}return null}var Pi=[],Ni=0,Uc=null,zc=0,Xt=[],Zt=0,Bs=null,nr=1,rr="";function Rs(t,e){Pi[Ni++]=zc,Pi[Ni++]=Uc,Uc=t,zc=e}function N0(t,e,n){Xt[Zt++]=nr,Xt[Zt++]=rr,Xt[Zt++]=Bs,Bs=t;var r=nr;t=rr;var s=32-vn(r)-1;r&=~(1<<s),n+=1;var i=32-vn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,nr=1<<32-vn(e)+s|n<<s|r,rr=i+t}else nr=1<<i|n<<s|r,rr=t}function lp(t){t.return!==null&&(Rs(t,1),N0(t,1,0))}function cp(t){for(;t===Uc;)Uc=Pi[--Ni],Pi[Ni]=null,zc=Pi[--Ni],Pi[Ni]=null;for(;t===Bs;)Bs=Xt[--Zt],Xt[Zt]=null,rr=Xt[--Zt],Xt[Zt]=null,nr=Xt[--Zt],Xt[Zt]=null}var Ht=null,qt=null,Me=!1,gn=null;function D0(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,qt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bs!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,qt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(Me){var e=qt;if(e){var n=e;if(!Yg(t,e)){if(Wh(t))throw Error(q(418));e=Kr(n.nextSibling);var r=Ht;e&&Yg(t,e)?D0(r,n):(t.flags=t.flags&-4097|2,Me=!1,Ht=t)}}else{if(Wh(t))throw Error(q(418));t.flags=t.flags&-4097|2,Me=!1,Ht=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Hl(t){if(t!==Ht)return!1;if(!Me)return Jg(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=qt)){if(Wh(t))throw O0(),Error(q(418));for(;e;)D0(t,e),e=Kr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Ht?Kr(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=qt;t;)t=Kr(t.nextSibling)}function Zi(){qt=Ht=null,Me=!1}function up(t){gn===null?gn=[t]:gn.push(t)}var eS=_r.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function V0(t){function e(T,_){if(t){var E=T.deletions;E===null?(T.deletions=[_],T.flags|=16):E.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function s(T,_){return T=Xr(T,_),T.index=0,T.sibling=null,T}function i(T,_,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<_?(T.flags|=2,_):E):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,E,N){return _===null||_.tag!==6?(_=Jd(E,T.mode,N),_.return=T,_):(_=s(_,E),_.return=T,_)}function c(T,_,E,N){var j=E.type;return j===Si?f(T,_,E.props.children,N,E.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Or&&Xg(j)===_.type)?(N=s(_,E.props),N.ref=Zo(T,_,E),N.return=T,N):(N=yc(E.type,E.key,E.props,null,T.mode,N),N.ref=Zo(T,_,E),N.return=T,N)}function u(T,_,E,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Xd(E,T.mode,N),_.return=T,_):(_=s(_,E.children||[]),_.return=T,_)}function f(T,_,E,N,j){return _===null||_.tag!==7?(_=Fs(E,T.mode,N,j),_.return=T,_):(_=s(_,E),_.return=T,_)}function g(T,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jd(""+_,T.mode,E),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return E=yc(_.type,_.key,_.props,null,T.mode,E),E.ref=Zo(T,null,_),E.return=T,E;case xi:return _=Xd(_,T.mode,E),_.return=T,_;case Or:var N=_._init;return g(T,N(_._payload),E)}if(la(_)||Ko(_))return _=Fs(_,T.mode,E,null),_.return=T,_;Gl(T,_)}return null}function m(T,_,E,N){var j=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:l(T,_,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ml:return E.key===j?c(T,_,E,N):null;case xi:return E.key===j?u(T,_,E,N):null;case Or:return j=E._init,m(T,_,j(E._payload),N)}if(la(E)||Ko(E))return j!==null?null:f(T,_,E,N,null);Gl(T,E)}return null}function x(T,_,E,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(E)||null,l(_,T,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ml:return T=T.get(N.key===null?E:N.key)||null,c(_,T,N,j);case xi:return T=T.get(N.key===null?E:N.key)||null,u(_,T,N,j);case Or:var M=N._init;return x(T,_,E,M(N._payload),j)}if(la(N)||Ko(N))return T=T.get(E)||null,f(_,T,N,j,null);Gl(_,N)}return null}function k(T,_,E,N){for(var j=null,M=null,w=_,y=_=0,I=null;w!==null&&y<E.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var A=m(T,w,E[y],N);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(T,w),_=i(A,_,y),M===null?j=A:M.sibling=A,M=A,w=I}if(y===E.length)return n(T,w),Me&&Rs(T,y),j;if(w===null){for(;y<E.length;y++)w=g(T,E[y],N),w!==null&&(_=i(w,_,y),M===null?j=w:M.sibling=w,M=w);return Me&&Rs(T,y),j}for(w=r(T,w);y<E.length;y++)I=x(w,T,y,E[y],N),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=i(I,_,y),M===null?j=I:M.sibling=I,M=I);return t&&w.forEach(function(C){return e(T,C)}),Me&&Rs(T,y),j}function b(T,_,E,N){var j=Ko(E);if(typeof j!="function")throw Error(q(150));if(E=j.call(E),E==null)throw Error(q(151));for(var M=j=null,w=_,y=_=0,I=null,A=E.next();w!==null&&!A.done;y++,A=E.next()){w.index>y?(I=w,w=null):I=w.sibling;var C=m(T,w,A.value,N);if(C===null){w===null&&(w=I);break}t&&w&&C.alternate===null&&e(T,w),_=i(C,_,y),M===null?j=C:M.sibling=C,M=C,w=I}if(A.done)return n(T,w),Me&&Rs(T,y),j;if(w===null){for(;!A.done;y++,A=E.next())A=g(T,A.value,N),A!==null&&(_=i(A,_,y),M===null?j=A:M.sibling=A,M=A);return Me&&Rs(T,y),j}for(w=r(T,w);!A.done;y++,A=E.next())A=x(w,T,y,A.value,N),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?y:A.key),_=i(A,_,y),M===null?j=A:M.sibling=A,M=A);return t&&w.forEach(function(R){return e(T,R)}),Me&&Rs(T,y),j}function V(T,_,E,N){if(typeof E=="object"&&E!==null&&E.type===Si&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ml:e:{for(var j=E.key,M=_;M!==null;){if(M.key===j){if(j=E.type,j===Si){if(M.tag===7){n(T,M.sibling),_=s(M,E.props.children),_.return=T,T=_;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Or&&Xg(j)===M.type){n(T,M.sibling),_=s(M,E.props),_.ref=Zo(T,M,E),_.return=T,T=_;break e}n(T,M);break}else e(T,M);M=M.sibling}E.type===Si?(_=Fs(E.props.children,T.mode,N,E.key),_.return=T,T=_):(N=yc(E.type,E.key,E.props,null,T.mode,N),N.ref=Zo(T,_,E),N.return=T,T=N)}return o(T);case xi:e:{for(M=E.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(T,_.sibling),_=s(_,E.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Xd(E,T.mode,N),_.return=T,T=_}return o(T);case Or:return M=E._init,V(T,_,M(E._payload),N)}if(la(E))return k(T,_,E,N);if(Ko(E))return b(T,_,E,N);Gl(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(T,_.sibling),_=s(_,E),_.return=T,T=_):(n(T,_),_=Jd(E,T.mode,N),_.return=T,T=_),o(T)):n(T,_)}return V}var eo=V0(!0),M0=V0(!1),$c=hs(null),Bc=null,Di=null,dp=null;function hp(){dp=Di=Bc=null}function fp(t){var e=$c.current;Oe($c),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){Bc=t,dp=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(Bc===null)throw Error(q(308));Di=t,Bc.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var Os=null;function pp(t){Os===null?Os=[t]:Os.push(t)}function L0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,pp(e)):(n.next=s.next,s.next=n),e.interleaved=n,dr(t,r)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,dr(t,n)}return s=r.interleaved,s===null?(e.next=e,pp(r)):(e.next=s.next,s.next=e),r.interleaved=e,dr(t,n)}function dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function Zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,r){var s=t.updateQueue;Vr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var g=s.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,b=l;switch(m=e,x=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){g=k.call(x,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,m=typeof k=="function"?k.call(x,g,m):k,m==null)break e;g=Ue({},g,m);break e;case 2:Vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,c=g):f=f.next=x,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(c=g),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=g}}function ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(q(191,s));s.call(r)}}}var ll={},Un=hs(ll),Ba=hs(ll),qa=hs(ll);function Vs(t){if(t===ll)throw Error(q(174));return t}function gp(t,e){switch(Re(qa,e),Re(Ba,t),Re(Un,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}Oe(Un),Re(Un,e)}function to(){Oe(Un),Oe(Ba),Oe(qa)}function F0(t){Vs(qa.current);var e=Vs(Un.current),n=Ch(e,t.type);e!==n&&(Re(Ba,t),Re(Un,n))}function yp(t){Ba.current===t&&(Oe(Un),Oe(Ba))}var je=hs(0);function Wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wd=[];function _p(){for(var t=0;t<Wd.length;t++)Wd[t]._workInProgressVersionPrimary=null;Wd.length=0}var hc=_r.ReactCurrentDispatcher,Hd=_r.ReactCurrentBatchConfig,qs=0,Fe=null,et=null,at=null,Hc=!1,Ia=!1,Wa=0,tS=0;function yt(){throw Error(q(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,s,i){if(qs=i,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hc.current=t===null||t.memoizedState===null?iS:oS,t=n(r,s),Ia){i=0;do{if(Ia=!1,Wa=0,25<=i)throw Error(q(301));i+=1,at=et=null,e.updateQueue=null,hc.current=aS,t=n(r,s)}while(Ia)}if(hc.current=Gc,e=et!==null&&et.next!==null,qs=0,at=et=Fe=null,Hc=!1,e)throw Error(q(300));return t}function Ep(){var t=Wa!==0;return Wa=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function an(){if(et===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(q(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function Ha(t,e){return typeof e=="function"?e(t):e}function Gd(t){var e=an(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=et,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((qs&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var g={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=g,o=r):c=c.next=g,Fe.lanes|=f,Ws|=f}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,In(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Fe.lanes|=i,Ws|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kd(t){var e=an(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);In(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function U0(){}function z0(t,e){var n=Fe,r=an(),s=e(),i=!In(r.memoizedState,s);if(i&&(r.memoizedState=s,Vt=!0),r=r.queue,Ip(q0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Ga(9,B0.bind(null,n,r,s,e),void 0,null),lt===null)throw Error(q(349));qs&30||$0(n,e,s)}return s}function $0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&H0(t)}function q0(t,e,n){return n(function(){W0(e)&&H0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function H0(t){var e=dr(t,1);e!==null&&wn(e,t,1,-1)}function ty(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=sS.bind(null,Fe,t),[e.memoizedState,t]}function Ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G0(){return an().memoizedState}function fc(t,e,n,r){var s=Mn();Fe.flags|=t,s.memoizedState=Ga(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var s=an();r=r===void 0?null:r;var i=void 0;if(et!==null){var o=et.memoizedState;if(i=o.destroy,r!==null&&vp(r,o.deps)){s.memoizedState=Ga(e,n,i,r);return}}Fe.flags|=t,s.memoizedState=Ga(1|e,n,i,r)}function ny(t,e){return fc(8390656,8,t,e)}function Ip(t,e){return bu(2048,8,t,e)}function K0(t,e){return bu(4,2,t,e)}function Q0(t,e){return bu(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,Y0.bind(null,e,t),n)}function Tp(){}function X0(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ew(t,e,n){return qs&21?(In(n,e)||(n=i0(),Fe.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function nS(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Hd.transition;Hd.transition={};try{t(!1),e()}finally{xe=n,Hd.transition=r}}function tw(){return an().memoizedState}function rS(t,e,n){var r=Jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nw(t))rw(e,n);else if(n=L0(t,e,n,r),n!==null){var s=Ct();wn(n,t,r,s),sw(n,e,r)}}function sS(t,e,n){var r=Jr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nw(t))rw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,In(l,o)){var c=e.interleaved;c===null?(s.next=s,pp(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=L0(t,e,s,r),n!==null&&(s=Ct(),wn(n,t,r,s),sw(n,e,r))}}function nw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function rw(t,e){Ia=Hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var Gc={readContext:on,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},iS={readContext:on,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rS.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:ty,useDebugValue:Tp,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=ty(!1),e=t[0];return t=nS.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,s=Mn();if(Me){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),lt===null)throw Error(q(349));qs&30||$0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ny(q0.bind(null,r,i,t),[t]),r.flags|=2048,Ga(9,B0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Mn(),e=lt.identifierPrefix;if(Me){var n=rr,r=nr;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oS={readContext:on,useCallback:X0,useContext:on,useEffect:Ip,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Q0,useMemo:Z0,useReducer:Gd,useRef:G0,useState:function(){return Gd(Ha)},useDebugValue:Tp,useDeferredValue:function(t){var e=an();return ew(e,et.memoizedState,t)},useTransition:function(){var t=Gd(Ha)[0],e=an().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:z0,useId:tw,unstable_isNewReconciler:!1},aS={readContext:on,useCallback:X0,useContext:on,useEffect:Ip,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Q0,useMemo:Z0,useReducer:Kd,useRef:G0,useState:function(){return Kd(Ha)},useDebugValue:Tp,useDeferredValue:function(t){var e=an();return et===null?e.memoizedState=t:ew(e,et.memoizedState,t)},useTransition:function(){var t=Kd(Ha)[0],e=an().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:z0,useId:tw,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Jr(t),i=or(r,s);i.payload=e,n!=null&&(i.callback=n),e=Qr(t,i,s),e!==null&&(wn(e,t,s,r),dc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Jr(t),i=or(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Qr(t,i,s),e!==null&&(wn(e,t,s,r),dc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Jr(t),s=or(n,r);s.tag=2,e!=null&&(s.callback=e),e=Qr(t,s,r),e!==null&&(wn(e,t,r,n),dc(e,t,r))}};function ry(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(s,i):!0}function iw(t,e,n){var r=!1,s=ss,i=e.contextType;return typeof i=="object"&&i!==null?i=on(i):(s=Lt(e)?$s:Tt.current,r=e.contextTypes,i=(r=r!=null)?Xi(t,s):ss),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Qh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},mp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=on(i):(i=Lt(e)?$s:Tt.current,s.context=Xi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Kh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Pu.enqueueReplaceState(s,s.state,null),qc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",r=e;do n+=V1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lS=typeof WeakMap=="function"?WeakMap:Map;function ow(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qc||(Qc=!0,af=r),Yh(t,e)},n}function aw(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Yh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yh(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=IS.bind(null,t,e,n),e.then(t,t))}function oy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ay(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var cS=_r.ReactCurrentOwner,Vt=!1;function St(t,e,n,r){e.child=t===null?M0(e,null,n,r):eo(e,t.child,n,r)}function ly(t,e,n,r,s){n=n.render;var i=e.ref;return zi(e,s),r=wp(t,e,n,r,i,s),n=Ep(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,hr(t,e,s)):(Me&&n&&lp(e),e.flags|=1,St(t,e,r,s),e.child)}function cy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Pp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,lw(t,e,i,r,s)):(t=yc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return hr(t,e,s)}return e.flags|=1,t=Xr(i,r),t.ref=e.ref,t.return=e,e.child=t}function lw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Fa(i,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,hr(t,e,s)}return Jh(t,e,n,r,s)}function cw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Vi,$t),$t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Vi,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(Vi,$t),$t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Re(Vi,$t),$t|=r;return St(t,e,s,n),e.child}function uw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,n,r,s){var i=Lt(n)?$s:Tt.current;return i=Xi(e,i),zi(e,s),n=wp(t,e,n,r,i,s),r=Ep(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,hr(t,e,s)):(Me&&r&&lp(e),e.flags|=1,St(t,e,n,s),e.child)}function uy(t,e,n,r,s){if(Lt(n)){var i=!0;Fc(e)}else i=!1;if(zi(e,s),e.stateNode===null)pc(t,e),iw(e,n,r),Qh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Lt(n)?$s:Tt.current,u=Xi(e,u));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&sy(e,o,r,u),Vr=!1;var m=e.memoizedState;o.state=m,qc(e,r,o,s),c=e.memoizedState,l!==r||m!==c||Mt.current||Vr?(typeof f=="function"&&(Kh(e,n,f,r),c=e.memoizedState),(l=Vr||ry(e,n,l,r,m,c,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pn(e.type,l),o.props=u,g=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=on(c):(c=Lt(n)?$s:Tt.current,c=Xi(e,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==c)&&sy(e,o,r,c),Vr=!1,m=e.memoizedState,o.state=m,qc(e,r,o,s);var k=e.memoizedState;l!==g||m!==k||Mt.current||Vr?(typeof x=="function"&&(Kh(e,n,x,r),k=e.memoizedState),(u=Vr||ry(e,n,u,r,m,k,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,i,s)}function Xh(t,e,n,r,s,i){uw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Qg(e,n,!1),hr(t,e,i);r=e.stateNode,cS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,i),e.child=eo(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&Qg(e,n,!0),e.child}function dw(t){var e=t.stateNode;e.pendingContext?Kg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kg(t,e.context,!1),gp(t,e.containerInfo)}function dy(t,e,n,r,s){return Zi(),up(s),e.flags|=256,St(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function hw(t,e,n){var r=e.pendingProps,s=je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Re(je,s&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ou(o,r,0,null),t=Fs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ef(n),e.memoizedState=Zh,t):xp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return uS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Xr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Xr(l,i):(i=Fs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return i=t.child,t=i.sibling,r=Xr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xp(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kl(t,e,n,r){return r!==null&&up(r),eo(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Qd(Error(q(422))),Kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ou({mode:"visible",children:r.children},s,0,null),i=Fs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Zh,i);if(!(e.mode&1))return Kl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(q(419)),r=Qd(i,r,void 0),Kl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Vt||l){if(r=lt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,dr(t,s),wn(r,t,s,-1))}return bp(),r=Qd(Error(q(421))),Kl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=TS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,qt=Kr(s.nextSibling),Ht=e,Me=!0,gn=null,t!==null&&(Xt[Zt++]=nr,Xt[Zt++]=rr,Xt[Zt++]=Bs,nr=t.id,rr=t.overflow,Bs=e),e=xp(e,r.children),e.flags|=4096,e)}function hy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gh(t.return,e,n)}function Yd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function fw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hy(t,n,e);else if(t.tag===19)hy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Wc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Wc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yd(e,!0,n,null,i);break;case"together":Yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dS(t,e,n){switch(e.tag){case 3:dw(e),Zi();break;case 5:F0(e);break;case 1:Lt(e.type)&&Fc(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Re($c,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?hw(t,e,n):(Re(je,je.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Re(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,cw(t,e,n)}return hr(t,e,n)}var pw,tf,mw,gw;pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};mw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vs(Un.current);var i=null;switch(n){case"input":s=Th(t,s),r=Th(t,r),i=[];break;case"select":s=Ue({},s,{value:void 0}),r=Ue({},r,{value:void 0}),i=[];break;case"textarea":s=Ah(t,s),r=Ah(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lc)}kh(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Na.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Na.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ne("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hS(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Lt(e.type)&&jc(),_t(e),null;case 3:return r=e.stateNode,to(),Oe(Mt),Oe(Tt),_p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(uf(gn),gn=null))),tf(t,e),_t(e),null;case 5:yp(e);var s=Vs(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)mw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return _t(e),null}if(t=Vs(Un.current),Hl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[jn]=e,r[$a]=i,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<ua.length;s++)Ne(ua[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Eg(r,i),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",r);break;case"textarea":Tg(r,i),Ne("invalid",r)}kh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Wl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Wl(r.textContent,l,t),s=["children",""+l]):Na.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Ll(r),Ig(r,i,!0);break;case"textarea":Ll(r),xg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Lc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[$a]=r,pw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rh(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),s=r;break;case"iframe":case"object":case"embed":Ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<ua.length;s++)Ne(ua[s],t);s=r;break;case"source":Ne("error",t),s=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),s=r;break;case"details":Ne("toggle",t),s=r;break;case"input":Eg(t,r),s=Th(t,r),Ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ue({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Tg(t,r),s=Ah(t,r),Ne("invalid",t);break;default:s=r}kh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Gv(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wv(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Da(t,c):typeof c=="number"&&Da(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Na.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ne("scroll",t):c!=null&&Kf(t,i,c,o))}switch(n){case"input":Ll(t),Ig(t,r,!1);break;case"textarea":Ll(t),xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Li(t,!!r.multiple,i,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Lc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Vs(qa.current),Vs(Un.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return _t(e),null;case 13:if(Oe(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&qt!==null&&e.mode&1&&!(e.flags&128))O0(),Zi(),e.flags|=98560,i=!1;else if(i=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(q(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[jn]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),i=!1}else gn!==null&&(uf(gn),gn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?tt===0&&(tt=3):bp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return to(),tf(t,e),t===null&&Ua(e.stateNode.containerInfo),_t(e),null;case 10:return fp(e.type._context),_t(e),null;case 17:return Lt(e.type)&&jc(),_t(e),null;case 19:if(Oe(je),i=e.memoizedState,i===null)return _t(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ea(i,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wc(t),o!==null){for(e.flags|=128,ea(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(je,je.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>ro&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304)}else{if(!r)if(t=Wc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Me)return _t(e),null}else 2*He()-i.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=je.current,Re(je,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function fS(t,e){switch(cp(e),e.tag){case 1:return Lt(e.type)&&jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Oe(Mt),Oe(Tt),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(Oe(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(je),null;case 4:return to(),null;case 10:return fp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var Ql=!1,Et=!1,pS=typeof WeakSet=="function"?WeakSet:Set,J=null;function Oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function nf(t,e,n){try{n()}catch(r){Be(t,e,r)}}var fy=!1;function mS(t,e){if(Fh=Oc,t=E0(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,g=t,m=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(c=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===t)break t;if(m===n&&++u===s&&(l=o),m===i&&++f===r&&(c=o),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uh={focusedElem:t,selectionRange:n},Oc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,V=k.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?b:pn(e.type,b),V);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(N){Be(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return k=fy,fy=!1,k}function Ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&nf(e,n,i)}s=s.next}while(s!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yw(t){var e=t.alternate;e!==null&&(t.alternate=null,yw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[$a],delete e[Bh],delete e[Jx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _w(t){return t.tag===5||t.tag===3||t.tag===4}function py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lc));else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var dt=null,mn=!1;function br(t,e,n){for(n=n.child;n!==null;)vw(t,e,n),n=n.sibling}function vw(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:Et||Oi(n,e);case 6:var r=dt,s=mn;dt=null,br(t,e,n),dt=r,mn=s,dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?Bd(t.parentNode,n):t.nodeType===1&&Bd(t,n),La(t)):Bd(dt,n.stateNode));break;case 4:r=dt,s=mn,dt=n.stateNode.containerInfo,mn=!0,br(t,e,n),dt=r,mn=s;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&nf(n,e,o),s=s.next}while(s!==r)}br(t,e,n);break;case 1:if(!Et&&(Oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,br(t,e,n),Et=r):br(t,e,n);break;default:br(t,e,n)}}function my(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pS),e.forEach(function(r){var s=xS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,mn=!1;break e;case 3:dt=l.stateNode.containerInfo,mn=!0;break e;case 4:dt=l.stateNode.containerInfo,mn=!0;break e}l=l.return}if(dt===null)throw Error(q(160));vw(i,o,s),dt=null,mn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){Be(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ww(e,t),e=e.sibling}function ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Dn(t),r&4){try{Ta(3,t,t.return),Nu(3,t)}catch(b){Be(t,t.return,b)}try{Ta(5,t,t.return)}catch(b){Be(t,t.return,b)}}break;case 1:fn(e,t),Dn(t),r&512&&n!==null&&Oi(n,n.return);break;case 5:if(fn(e,t),Dn(t),r&512&&n!==null&&Oi(n,n.return),t.flags&32){var s=t.stateNode;try{Da(s,"")}catch(b){Be(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&$v(s,i),Rh(l,o);var u=Rh(l,i);for(o=0;o<c.length;o+=2){var f=c[o],g=c[o+1];f==="style"?Gv(s,g):f==="dangerouslySetInnerHTML"?Wv(s,g):f==="children"?Da(s,g):Kf(s,f,g,u)}switch(l){case"input":xh(s,i);break;case"textarea":Bv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Li(s,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Li(s,!!i.multiple,i.defaultValue,!0):Li(s,!!i.multiple,i.multiple?[]:"",!1))}s[$a]=i}catch(b){Be(t,t.return,b)}}break;case 6:if(fn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(q(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Be(t,t.return,b)}}break;case 3:if(fn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(b){Be(t,t.return,b)}break;case 4:fn(e,t),Dn(t);break;case 13:fn(e,t),Dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Cp=He())),r&4&&my(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||f,fn(e,t),Et=u):fn(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(J=t,f=t.child;f!==null;){for(g=J=f;J!==null;){switch(m=J,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ta(4,m,m.return);break;case 1:Oi(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(b){Be(r,n,b)}}break;case 5:Oi(m,m.return);break;case 22:if(m.memoizedState!==null){yy(g);continue}}x!==null?(x.return=m,J=x):yy(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Hv("display",o))}catch(b){Be(t,t.return,b)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(b){Be(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:fn(e,t),Dn(t),r&4&&my(t);break;case 21:break;default:fn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_w(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Da(s,""),r.flags&=-33);var i=py(t);of(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=py(t);sf(t,l,o);break;default:throw Error(q(161))}}catch(c){Be(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gS(t,e,n){J=t,Ew(t)}function Ew(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var s=J,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ql;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Et;l=Ql;var u=Et;if(Ql=o,(Et=c)&&!u)for(J=s;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null?_y(s):c!==null?(c.return=o,J=c):_y(s);for(;i!==null;)J=i,Ew(i),i=i.sibling;J=s,Ql=l,Et=u}gy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,J=i):gy(t)}}function gy(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ey(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ey(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&La(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Et||e.flags&512&&rf(e)}catch(m){Be(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function yy(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function _y(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(c){Be(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Be(e,s,c)}}var i=e.return;try{rf(e)}catch(c){Be(e,i,c)}break;case 5:var o=e.return;try{rf(e)}catch(c){Be(e,o,c)}}}catch(c){Be(e,e.return,c)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var yS=Math.ceil,Kc=_r.ReactCurrentDispatcher,Sp=_r.ReactCurrentOwner,rn=_r.ReactCurrentBatchConfig,Ee=0,lt=null,Qe=null,pt=0,$t=0,Vi=hs(0),tt=0,Ka=null,Ws=0,Du=0,Ap=0,xa=null,Dt=null,Cp=0,ro=1/0,er=null,Qc=!1,af=null,Yr=null,Yl=!1,Br=null,Yc=0,Sa=0,lf=null,mc=-1,gc=0;function Ct(){return Ee&6?He():mc!==-1?mc:mc=He()}function Jr(t){return t.mode&1?Ee&2&&pt!==0?pt&-pt:eS.transition!==null?(gc===0&&(gc=i0()),gc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:h0(t.type)),t):1}function wn(t,e,n,r){if(50<Sa)throw Sa=0,lf=null,Error(q(185));il(t,n,r),(!(Ee&2)||t!==lt)&&(t===lt&&(!(Ee&2)&&(Du|=n),tt===4&&Lr(t,pt)),jt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(ro=He()+500,Ru&&fs()))}function jt(t,e){var n=t.callbackNode;ex(t,e);var r=Dc(t,t===lt?pt:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?Zx(vy.bind(null,t)):P0(vy.bind(null,t)),Qx(function(){!(Ee&6)&&fs()}),n=null;else{switch(o0(r)){case 1:n=Zf;break;case 4:n=r0;break;case 16:n=Nc;break;case 536870912:n=s0;break;default:n=Nc}n=Rw(n,Iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iw(t,e){if(mc=-1,gc=0,Ee&6)throw Error(q(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=Dc(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jc(t,r);else{e=r;var s=Ee;Ee|=2;var i=xw();(lt!==t||pt!==e)&&(er=null,ro=He()+500,js(t,e));do try{wS();break}catch(l){Tw(t,l)}while(!0);hp(),Kc.current=i,Ee=s,Qe!==null?e=0:(lt=null,pt=0,e=tt)}if(e!==0){if(e===2&&(s=Oh(t),s!==0&&(r=s,e=cf(t,s))),e===1)throw n=Ka,js(t,0),Lr(t,r),jt(t,He()),n;if(e===6)Lr(t,r);else{if(s=t.current.alternate,!(r&30)&&!_S(s)&&(e=Jc(t,r),e===2&&(i=Oh(t),i!==0&&(r=i,e=cf(t,i))),e===1))throw n=Ka,js(t,0),Lr(t,r),jt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:bs(t,Dt,er);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=Cp+500-He(),10<e)){if(Dc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$h(bs.bind(null,t,Dt,er),e);break}bs(t,Dt,er);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-vn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yS(r/1960))-r,10<r){t.timeoutHandle=$h(bs.bind(null,t,Dt,er),r);break}bs(t,Dt,er);break;case 5:bs(t,Dt,er);break;default:throw Error(q(329))}}}return jt(t,He()),t.callbackNode===n?Iw.bind(null,t):null}function cf(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(js(t,e).flags|=256),t=Jc(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&uf(e)),t}function uf(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!In(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~Ap,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function vy(t){if(Ee&6)throw Error(q(327));$i();var e=Dc(t,0);if(!(e&1))return jt(t,He()),null;var n=Jc(t,e);if(t.tag!==0&&n===2){var r=Oh(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=Ka,js(t,0),Lr(t,e),jt(t,He()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,Dt,er),jt(t,He()),null}function kp(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(ro=He()+500,Ru&&fs())}}function Hs(t){Br!==null&&Br.tag===0&&!(Ee&6)&&$i();var e=Ee;Ee|=1;var n=rn.transition,r=xe;try{if(rn.transition=null,xe=1,t)return t()}finally{xe=r,rn.transition=n,Ee=e,!(Ee&6)&&fs()}}function Rp(){$t=Vi.current,Oe(Vi)}function js(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kx(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jc();break;case 3:to(),Oe(Mt),Oe(Tt),_p();break;case 5:yp(r);break;case 4:to();break;case 13:Oe(je);break;case 19:Oe(je);break;case 10:fp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(lt=t,Qe=t=Xr(t.current,null),pt=$t=e,tt=0,Ka=null,Ap=Du=Ws=0,Dt=xa=null,Os!==null){for(e=0;e<Os.length;e++)if(n=Os[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Os=null}return t}function Tw(t,e){do{var n=Qe;try{if(hp(),hc.current=Gc,Hc){for(var r=Fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Hc=!1}if(qs=0,at=et=Fe=null,Ia=!1,Wa=0,Sp.current=null,n===null||n.return===null){tt=1,Ka=e,Qe=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=pt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=oy(o);if(x!==null){x.flags&=-257,ay(x,o,l,i,e),x.mode&1&&iy(i,u,e),e=x,c=u;var k=e.updateQueue;if(k===null){var b=new Set;b.add(c),e.updateQueue=b}else k.add(c);break e}else{if(!(e&1)){iy(i,u,e),bp();break e}c=Error(q(426))}}else if(Me&&l.mode&1){var V=oy(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),ay(V,o,l,i,e),up(no(c,l));break e}}i=c=no(c,l),tt!==4&&(tt=2),xa===null?xa=[i]:xa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=ow(i,c,e);Zg(i,T);break e;case 1:l=c;var _=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Yr===null||!Yr.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=aw(i,l,e);Zg(i,N);break e}}i=i.return}while(i!==null)}Aw(n)}catch(j){e=j,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function xw(){var t=Kc.current;return Kc.current=Gc,t===null?Gc:t}function bp(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||!(Ws&268435455)&&!(Du&268435455)||Lr(lt,pt)}function Jc(t,e){var n=Ee;Ee|=2;var r=xw();(lt!==t||pt!==e)&&(er=null,js(t,e));do try{vS();break}catch(s){Tw(t,s)}while(!0);if(hp(),Ee=n,Kc.current=r,Qe!==null)throw Error(q(261));return lt=null,pt=0,tt}function vS(){for(;Qe!==null;)Sw(Qe)}function wS(){for(;Qe!==null&&!W1();)Sw(Qe)}function Sw(t){var e=kw(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?Aw(t):Qe=e,Sp.current=null}function Aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fS(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Qe=null;return}}else if(n=hS(n,e,$t),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);tt===0&&(tt=5)}function bs(t,e,n){var r=xe,s=rn.transition;try{rn.transition=null,xe=1,ES(t,e,n,r)}finally{rn.transition=s,xe=r}return null}function ES(t,e,n,r){do $i();while(Br!==null);if(Ee&6)throw Error(q(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(tx(t,i),t===lt&&(Qe=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,Rw(Nc,function(){return $i(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var o=xe;xe=1;var l=Ee;Ee|=4,Sp.current=null,mS(t,n),ww(n,t),zx(Uh),Oc=!!Fh,Uh=Fh=null,t.current=n,gS(n),H1(),Ee=l,xe=o,rn.transition=i}else t.current=n;if(Yl&&(Yl=!1,Br=t,Yc=s),i=t.pendingLanes,i===0&&(Yr=null),Q1(n.stateNode),jt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Qc)throw Qc=!1,t=af,af=null,t;return Yc&1&&t.tag!==0&&$i(),i=t.pendingLanes,i&1?t===lf?Sa++:(Sa=0,lf=t):Sa=0,fs(),null}function $i(){if(Br!==null){var t=o0(Yc),e=rn.transition,n=xe;try{if(rn.transition=null,xe=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,Yc=0,Ee&6)throw Error(q(331));var s=Ee;for(Ee|=4,J=t.current;J!==null;){var i=J,o=i.child;if(J.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(J=u;J!==null;){var f=J;switch(f.tag){case 0:case 11:case 15:Ta(8,f,i)}var g=f.child;if(g!==null)g.return=f,J=g;else for(;J!==null;){f=J;var m=f.sibling,x=f.return;if(yw(f),f===u){J=null;break}if(m!==null){m.return=x,J=m;break}J=x}}}var k=i.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}J=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,J=o;else e:for(;J!==null;){if(i=J,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ta(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,J=T;break e}J=i.return}}var _=t.current;for(J=_;J!==null;){o=J;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,J=E;else e:for(o=_;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nu(9,l)}}catch(j){Be(l,l.return,j)}if(l===o){J=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,J=N;break e}J=l.return}}if(Ee=s,fs(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{xe=n,rn.transition=e}}return!1}function wy(t,e,n){e=no(n,e),e=ow(t,e,1),t=Qr(t,e,1),e=Ct(),t!==null&&(il(t,1,e),jt(t,e))}function Be(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=no(n,t),t=aw(e,t,1),e=Qr(e,t,1),t=Ct(),e!==null&&(il(e,1,t),jt(e,t));break}}e=e.return}}function IS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(tt===4||tt===3&&(pt&130023424)===pt&&500>He()-Cp?js(t,0):Ap|=n),jt(t,e)}function Cw(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=Ct();t=dr(t,e),t!==null&&(il(t,e,n),jt(t,n))}function TS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cw(t,n)}function xS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),Cw(t,n)}var kw;kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,dS(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Me&&e.flags&1048576&&N0(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pc(t,e),t=e.pendingProps;var s=Xi(e,Tt.current);zi(e,n),s=wp(null,e,r,t,s,n);var i=Ep();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,Fc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mp(e),s.updater=Pu,e.stateNode=s,s._reactInternals=e,Qh(e,r,t,n),e=Xh(null,e,r,!0,i,n)):(e.tag=0,Me&&i&&lp(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=AS(r),t=pn(r,t),s){case 0:e=Jh(null,e,r,t,n);break e;case 1:e=uy(null,e,r,t,n);break e;case 11:e=ly(null,e,r,t,n);break e;case 14:e=cy(null,e,r,pn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pn(r,s),Jh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pn(r,s),uy(t,e,r,s,n);case 3:e:{if(dw(e),t===null)throw Error(q(387));r=e.pendingProps,i=e.memoizedState,s=i.element,j0(t,e),qc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=no(Error(q(423)),e),e=dy(t,e,r,n,s);break e}else if(r!==s){s=no(Error(q(424)),e),e=dy(t,e,r,n,s);break e}else for(qt=Kr(e.stateNode.containerInfo.firstChild),Ht=e,Me=!0,gn=null,n=M0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===s){e=hr(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return F0(e),t===null&&Hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,zh(r,s)?o=null:i!==null&&zh(r,i)&&(e.flags|=32),uw(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return hw(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=eo(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pn(r,s),ly(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Re($c,r._currentValue),r._currentValue=o,i!==null)if(In(i.value,o)){if(i.children===s.children&&!Mt.current){e=hr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=or(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Gh(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,zi(e,n),s=on(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=pn(r,e.pendingProps),s=pn(r.type,s),cy(t,e,r,s,n);case 15:return lw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pn(r,s),pc(t,e),e.tag=1,Lt(r)?(t=!0,Fc(e)):t=!1,zi(e,n),iw(e,r,s),Qh(e,r,s,n),Xh(null,e,r,!0,t,n);case 19:return fw(t,e,n);case 22:return cw(t,e,n)}throw Error(q(156,e.tag))};function Rw(t,e){return n0(t,e)}function SS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new SS(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AS(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Jf)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return Fs(n.children,s,i,e);case Qf:o=8,s|=8;break;case vh:return t=nn(12,n,e,s|2),t.elementType=vh,t.lanes=i,t;case wh:return t=nn(13,n,e,s),t.elementType=wh,t.lanes=i,t;case Eh:return t=nn(19,n,e,s),t.elementType=Eh,t.lanes=i,t;case Fv:return Ou(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lv:o=10;break e;case jv:o=9;break e;case Yf:o=11;break e;case Jf:o=14;break e;case Or:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=nn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Fs(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Ou(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Fv,t.lanes=n,t.stateNode={isHidden:!1},t}function Jd(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Xd(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nd(0),this.expirationTimes=Nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,r,s,i,o,l,c){return t=new CS(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=nn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(i),t}function kS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return ss;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Lt(n))return b0(t,n,e)}return e}function Pw(t,e,n,r,s,i,o,l,c){return t=Np(n,r,!0,t,s,i,o,l,c),t.context=bw(null),n=t.current,r=Ct(),s=Jr(n),i=or(r,s),i.callback=e??null,Qr(n,i,s),t.current.lanes=s,il(t,s,r),jt(t,r),t}function Vu(t,e,n,r){var s=e.current,i=Ct(),o=Jr(s);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=or(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(s,e,o),t!==null&&(wn(t,s,o,i),dc(t,s,o)),o}function Xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){Ey(t,e),(t=t.alternate)&&Ey(t,e)}function RS(){return null}var Nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Op(t){this._internalRoot=t}Mu.prototype.render=Op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Vu(t,e,null,null)};Mu.prototype.unmount=Op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hs(function(){Vu(null,t,null,null)}),e[ur]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=c0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&d0(t)}};function Vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function bS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Xc(o);i.call(u)}}var o=Pw(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[ur]=o.current,Ua(t.nodeType===8?t.parentNode:t),Hs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Xc(c);l.call(u)}}var c=Np(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=c,t[ur]=c.current,Ua(t.nodeType===8?t.parentNode:t),Hs(function(){Vu(e,c,n,r)}),c}function ju(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Xc(o);l.call(c)}}Vu(e,o,t,s)}else o=bS(n,e,t,s,r);return Xc(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(ep(e,n|1),jt(e,He()),!(Ee&6)&&(ro=He()+500,fs()))}break;case 13:Hs(function(){var r=dr(t,1);if(r!==null){var s=Ct();wn(r,t,1,s)}}),Dp(t,1)}};tp=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Ct();wn(e,t,134217728,n)}Dp(t,134217728)}};l0=function(t){if(t.tag===13){var e=Jr(t),n=dr(t,e);if(n!==null){var r=Ct();wn(n,t,e,r)}Dp(t,e)}};c0=function(){return xe};u0=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Ph=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ku(r);if(!s)throw Error(q(90));zv(r),xh(r,s)}}}break;case"textarea":Bv(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};Yv=kp;Jv=Hs;var PS={usingClientEntryPoint:!1,Events:[al,Ri,ku,Kv,Qv,kp]},ta={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NS={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{xu=Jl.inject(NS),Fn=Jl}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(e))throw Error(q(200));return kS(t,e,null,n)};Qt.createRoot=function(t,e){if(!Vp(t))throw Error(q(299));var n=!1,r="",s=Nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,r,s),t[ur]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Op(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Hs(t)};Qt.hydrate=function(t,e,n){if(!Lu(e))throw Error(q(200));return ju(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!Vp(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Nw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pw(e,null,t,1,n??null,s,!1,i,o),t[ur]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Mu(e)};Qt.render=function(t,e,n){if(!Lu(e))throw Error(q(200));return ju(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(q(40));return t._reactRootContainer?(Hs(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Qt.unstable_batchedUpdates=kp;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lu(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return ju(t,e,n,!1,r)};Qt.version="18.3.1-next-f1338f8080-20240426";function Dw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dw)}catch(t){console.error(t)}}Dw(),Dv.exports=Qt;var Ow=Dv.exports,Ty=Ow;yh.createRoot=Ty.createRoot,yh.hydrateRoot=Ty.hydrateRoot;const DS=()=>{};var xy={};/**
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
 */const Vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,x=u&63;c||(x=64,o||(m=64)),r.push(n[f],n[g],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||g==null)throw new VS;const m=i<<2|l>>4;if(r.push(m),u!==64){const x=l<<4&240|u>>2;if(r.push(x),g!==64){const k=u<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MS=function(t){const e=Vw(t);return Mw.encodeByteArray(e,!0)},Zc=function(t){return MS(t).replace(/\./g,"")},Lw=function(t){try{return Mw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jS=()=>LS().__FIREBASE_DEFAULTS__,FS=()=>{if(typeof process>"u"||typeof xy>"u")return;const t=xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},US=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lw(t[1]);return e&&JSON.parse(e)},Fu=()=>{try{return DS()||jS()||FS()||US()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jw=t=>{var e,n;return(n=(e=Fu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Fw=t=>{const e=jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=Fu())==null?void 0:t.config},zw=t=>{var e;return(e=Fu())==null?void 0:e[`_${t}`]};/**
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
 */class zS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function $w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Zc(JSON.stringify(n)),Zc(JSON.stringify(o)),""].join(".")}const Aa={};function $S(){const t={prod:[],emulator:[]};for(const e of Object.keys(Aa))Aa[e]?t.emulator.push(e):t.prod.push(e);return t}function BS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Sy=!1;function Lp(t,e){if(typeof window>"u"||typeof document>"u"||!ri(window.location.host)||Aa[t]===e||Aa[t]||Sy)return;Aa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=$S().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,x){m.setAttribute("width","24"),m.setAttribute("id",x),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Sy=!0,o()},m}function f(m,x){m.setAttribute("id",x),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=BS(r),x=n("text"),k=document.getElementById(x)||document.createElement("span"),b=n("learnmore"),V=document.getElementById(b)||document.createElement("a"),T=n("preprendIcon"),_=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;l(E),f(V,b);const N=u();c(_,T),E.append(_,k,V,N),document.body.appendChild(E)}i?(k.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function WS(){var e;const t=(e=Fu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KS(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QS(){return!WS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ww(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function YS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const JS="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JS,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cn(s,l,r)}}function XS(t,e){return t.replace(ZS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZS=/\{\$([^}]+)}/g;function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ay(i)&&Ay(o)){if(!Hn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ay(t){return t!==null&&typeof t=="object"}/**
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
 */function cl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ha(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tA(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zd),s.error===void 0&&(s.error=Zd),s.complete===void 0&&(s.complete=Zd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}/**
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
 */const sA=1e3,iA=2,oA=4*60*60*1e3,aA=.5;function Cy(t,e=sA,n=iA){const r=e*Math.pow(n,t),s=Math.round(aA*r*(Math.random()-.5)*2);return Math.min(oA,r+s)}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class lA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uA(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cA(t){return t===Ps?void 0:t}function uA(t){return t.instantiationMode==="EAGER"}/**
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
 */class dA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const hA={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},fA=ye.INFO,pA={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},mA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uu{constructor(e){this.name=e,this._logLevel=fA,this._logHandler=mA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const gA=(t,e)=>e.some(n=>t instanceof n);let ky,Ry;function yA(){return ky||(ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _A(){return Ry||(Ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hw=new WeakMap,df=new WeakMap,Gw=new WeakMap,eh=new WeakMap,jp=new WeakMap;function vA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hw.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function wA(t){if(df.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EA(t){hf=t(hf)}function IA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return Gw.set(r,e.sort?e.sort():[e]),Zr(r)}:_A().includes(t)?function(...e){return t.apply(th(this),e),Zr(Hw.get(this))}:function(...e){return Zr(t.apply(th(this),e))}}function TA(t){return typeof t=="function"?IA(t):(t instanceof IDBTransaction&&wA(t),gA(t,yA())?new Proxy(t,hf):t)}function Zr(t){if(t instanceof IDBRequest)return vA(t);if(eh.has(t))return eh.get(t);const e=TA(t);return e!==t&&(eh.set(t,e),jp.set(e,t)),e}const th=t=>jp.get(t);function Kw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Zr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Zr(o.result),c.oldVersion,c.newVersion,Zr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xA=["get","getKey","getAll","getAllKeys","count"],SA=["put","add","delete","clear"],nh=new Map;function by(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return nh.set(e,i),i}EA(t=>({...t,get:(e,n,r)=>by(e,n)||t.get(e,n,r),has:(e,n)=>!!by(e,n)||t.has(e,n)}));/**
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
 */class AA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",Py="0.14.9";/**
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
 */const fr=new Uu("@firebase/app"),kA="@firebase/app-compat",RA="@firebase/analytics-compat",bA="@firebase/analytics",PA="@firebase/app-check-compat",NA="@firebase/app-check",DA="@firebase/auth",OA="@firebase/auth-compat",VA="@firebase/database",MA="@firebase/data-connect",LA="@firebase/database-compat",jA="@firebase/functions",FA="@firebase/functions-compat",UA="@firebase/installations",zA="@firebase/installations-compat",$A="@firebase/messaging",BA="@firebase/messaging-compat",qA="@firebase/performance",WA="@firebase/performance-compat",HA="@firebase/remote-config",GA="@firebase/remote-config-compat",KA="@firebase/storage",QA="@firebase/storage-compat",YA="@firebase/firestore",JA="@firebase/ai",XA="@firebase/firestore-compat",ZA="firebase",eC="12.10.0";/**
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
 */const pf="[DEFAULT]",tC={[ff]:"fire-core",[kA]:"fire-core-compat",[bA]:"fire-analytics",[RA]:"fire-analytics-compat",[NA]:"fire-app-check",[PA]:"fire-app-check-compat",[DA]:"fire-auth",[OA]:"fire-auth-compat",[VA]:"fire-rtdb",[MA]:"fire-data-connect",[LA]:"fire-rtdb-compat",[jA]:"fire-fn",[FA]:"fire-fn-compat",[UA]:"fire-iid",[zA]:"fire-iid-compat",[$A]:"fire-fcm",[BA]:"fire-fcm-compat",[qA]:"fire-perf",[WA]:"fire-perf-compat",[HA]:"fire-rc",[GA]:"fire-rc-compat",[KA]:"fire-gcs",[QA]:"fire-gcs-compat",[YA]:"fire-fst",[XA]:"fire-fst-compat",[JA]:"fire-vertex","fire-js":"fire-js",[ZA]:"fire-js-all"};/**
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
 */const eu=new Map,nC=new Map,mf=new Map;function Ny(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(mf.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,t);for(const n of eu.values())Ny(n,t);for(const n of nC.values())Ny(n,t);return!0}function ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new si("app","Firebase",rC);/**
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
 */class sC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=eC;function Qw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw es.create("bad-app-name",{appName:String(s)});if(n||(n=Uw()),!n)throw es.create("no-options");const i=eu.get(s);if(i){if(Hn(n,i.options)&&Hn(r,i.config))return i;throw es.create("duplicate-app",{appName:s})}const o=new dA(s);for(const c of mf.values())o.addComponent(c);const l=new sC(n,r,o);return eu.set(s,l),l}function zu(t=pf){const e=eu.get(t);if(!e&&t===pf&&Uw())return Qw();if(!e)throw es.create("no-app",{appName:t});return e}function Ft(t,e,n){let r=tC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(o.join(" "));return}Tn(new ln(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const iC="firebase-heartbeat-database",oC=1,Qa="firebase-heartbeat-store";let rh=null;function Yw(){return rh||(rh=Kw(iC,oC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qa)}catch(n){console.warn(n)}}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),rh}async function aC(t){try{const n=(await Yw()).transaction(Qa),r=await n.objectStore(Qa).get(Jw(t));return await n.done,r}catch(e){if(e instanceof cn)fr.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Dy(t,e){try{const r=(await Yw()).transaction(Qa,"readwrite");await r.objectStore(Qa).put(e,Jw(t)),await r.done}catch(n){if(n instanceof cn)fr.warn(n.message);else{const r=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function Jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lC=1024,cC=30;class uC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cC){const o=fC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oy(),{heartbeatsToSend:r,unsentEntries:s}=dC(this._heartbeatsCache.heartbeats),i=Zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fr.warn(n),""}}}function Oy(){return new Date().toISOString().substring(0,10)}function dC(t,e=lC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qw()?Ww().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vy(t){return Zc(JSON.stringify({version:2,heartbeats:t})).length}function fC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function pC(t){Tn(new ln("platform-logger",e=>new AA(e),"PRIVATE")),Tn(new ln("heartbeat",e=>new uC(e),"PRIVATE")),Ft(ff,Py,t),Ft(ff,Py,"esm2020"),Ft("fire-js","")}pC("");function Xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mC=Xw,Zw=new si("auth","Firebase",Xw());/**
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
 */const tu=new Uu("@firebase/auth");function gC(t,...e){tu.logLevel<=ye.WARN&&tu.warn(`Auth (${ii}): ${t}`,...e)}function _c(t,...e){tu.logLevel<=ye.ERROR&&tu.error(`Auth (${ii}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw Fp(t,...e)}function zn(t,...e){return Fp(t,...e)}function eE(t,e,n){const r={...mC(),[e]:n};return new si("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return eE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zw.create(t,...e)}function ie(t,e,...n){if(!t)throw Fp(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _c(e),new Error(e)}function pr(t,e){t||sr(e)}/**
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
 */function gf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function yC(){return My()==="http:"||My()==="https:"}function My(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function _C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yC()||Bw()||"connection"in navigator)?navigator.onLine:!0}function vC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=qS()||GS()}get(){return _C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Up(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IC=new ul(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wr(t,e,n,r,s={}){return nE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=cl({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return HS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ri(t.emulatorConfig.host)&&(u.credentials="include"),tE.fetch()(await rE(t,t.config.apiHost,n,l),u)})}async function nE(t,e,n){t._canInitEmulator=!1;const r={...wC,...e};try{const s=new xC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eE(t,f,u);xn(t,f)}}catch(s){if(s instanceof cn)throw s;xn(t,"network-request-failed",{message:String(s)})}}async function dl(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&xn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function rE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Up(t.config,s):`${t.config.apiScheme}://${s}`;return EC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function TC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zn(this.auth,"network-request-failed")),IC.get())})}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zn(t,e,r);return s.customData._tokenResponse=n,s}function Ly(t){return t!==void 0&&t.enterprise!==void 0}class SC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AC(t,e){return wr(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
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
 */async function CC(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function nu(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kC(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=zp(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ca(sh(s.auth_time)),issuedAtTime:Ca(sh(s.iat)),expirationTime:Ca(sh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _c("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lw(n);return s?JSON.parse(s):(_c("Failed to decode base64 JWT payload"),null)}catch(s){return _c("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jy(t){const e=zp(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&RC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ru(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Ya(t,nu(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?sE(s.providerUserInfo):[],o=NC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function PC(t){const e=Le(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function DC(t,e){const n=await nE(t,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await rE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ri(t.emulatorConfig.host)&&(c.credentials="include"),tE.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OC(t,e){return wr(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
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
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=jy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await DC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bi;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
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
 */function Pr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Ya(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:x,providerData:k,stsTokenManager:b}=n;ie(g&&b,e,"internal-error");const V=Bi.fromJSON(this.name,b);ie(typeof g=="string",e,"internal-error"),Pr(r,e.name),Pr(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof x=="boolean",e,"internal-error"),Pr(i,e.name),Pr(o,e.name),Pr(l,e.name),Pr(c,e.name),Pr(u,e.name),Pr(f,e.name);const T=new yn({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(T.providerData=k.map(_=>({..._}))),c&&(T._redirectEventId=c),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bi;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ru(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Bi;l.updateFromIdToken(r);const c=new yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Fy=new Map;function ir(t){pr(t instanceof Function,"Expected a class definition");let e=Fy.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fy.set(t,e),e)}/**
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
 */class iE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iE.type="NONE";const Uy=iE;/**
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
 */function vc(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vc(this.userKey,s.apiKey,i),this.fullPersistenceKey=vc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nu(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(ir(Uy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ir(Uy);const o=vc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let g;if(typeof f=="string"){const m=await nu(e,{idToken:f}).catch(()=>{});if(!m)break;g=await yn._fromGetAccountInfoResponse(e,m,f)}else g=yn._fromJSON(e,f);u!==i&&(l=g),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qi(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qi(i,e,r))}}/**
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
 */function zy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dE(e))return"Blackberry";if(hE(e))return"Webos";if(aE(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(uE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=xt()){return/firefox\//i.test(t)}function aE(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=xt()){return/crios\//i.test(t)}function cE(t=xt()){return/iemobile/i.test(t)}function uE(t=xt()){return/android/i.test(t)}function dE(t=xt()){return/blackberry/i.test(t)}function hE(t=xt()){return/webos/i.test(t)}function $p(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=xt()){var e;return $p(t)&&!!((e=window.navigator)!=null&&e.standalone)}function MC(){return KS()&&document.documentMode===10}function fE(t=xt()){return $p(t)||uE(t)||hE(t)||dE(t)||/windows phone/i.test(t)||cE(t)}/**
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
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=zy(xt());break;case"Worker":n=`${zy(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class LC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jC(t,e={}){return wr(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
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
 */const FC=6;class UC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $y(this),this.idTokenSubscription=new $y(this),this.beforeStateQueue=new LC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nu(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(ar(this));const n=e?Le(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),n=new UC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&gC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oi(t){return Le(t)}class $y{constructor(e){this.auth=e,this.observer=null,this.addObserver=tA(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $C(t){$u=t}function mE(t){return $u.loadJS(t)}function BC(){return $u.recaptchaEnterpriseScript}function qC(){return $u.gapiScript}function WC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class HC{constructor(){this.enterprise=new GC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const KC="recaptcha-enterprise",gE="NO_RECAPTCHA";class QC{constructor(e){this.type=KC,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{AC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new SC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Ly(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(gE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ly(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BC();c.length!==0&&(c+=l),mE(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function By(t,e,n,r=!1,s=!1){const i=new QC(t);let o;if(s)o=gE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _f(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await By(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await By(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function YC(t,e){const n=ps(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hn(i,e??{}))return s;xn(s,"already-initialized")}return n.initialize({options:e})}function JC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XC(t,e,n){const r=oi(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yE(e),{host:o,port:l}=ZC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Hn(u,r.config.emulator)&&Hn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ri(o)?(Mp(`${i}//${o}${c}`),Lp("Auth",!0)):ek()}function yE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZC(t){const e=yE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ek(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function tk(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nk(t,e){return dl(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}async function rk(t,e){return wr(t,"POST","/v1/accounts:sendOobCode",vr(t,e))}async function sk(t,e){return rk(t,e)}/**
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
 */async function ik(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function ok(t,e){return dl(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
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
 */class Ja extends Bp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,n,"signInWithPassword",nk);case"emailLink":return ik(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,r,"signUpPassword",tk);case"emailLink":return ok(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wi(t,e){return dl(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
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
 */const ak="http://localhost";class Gs extends Bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:ak,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cl(n)}return e}}/**
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
 */function lk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ck(t){const e=da(ha(t)).link,n=e?da(ha(e)).deep_link_id:null,r=da(ha(t)).deep_link_id;return(r?da(ha(r)).link:null)||r||n||e||t}class qp{constructor(e){const n=da(ha(e)),r=n.apiKey??null,s=n.oobCode??null,i=lk(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ck(e);try{return new qp(n)}catch{return null}}}/**
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
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,n){return Ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return ie(r,"argument-error"),Ja._fromEmailAndCode(e,r.code,r.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hl extends _E{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jr extends hl{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class Ur extends hl{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
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
 */class zr extends hl{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zr.credential(n,r)}catch{return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com";zr.PROVIDER_ID="twitter.com";/**
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
 */async function uk(t,e){return dl(t,"POST","/v1/accounts:signUp",vr(t,e))}/**
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
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=Wy(r);return new Ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wy(r);return new Ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class su extends cn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,su.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new su(e,n,r,s)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?su._fromErrorAndOperation(t,i,e,r):i})}async function dk(t,e,n=!1){const r=await Ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",r)}/**
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
 */async function hk(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await Ya(t,vE(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=zp(i.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),Ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),i}}/**
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
 */async function wE(t,e,n=!1){if(Bt(t.app))return Promise.reject(ar(t));const r="signIn",s=await vE(t,r,e),i=await Ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fk(t,e){return wE(oi(t),e)}/**
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
 */async function EE(t){const e=oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pk(t,e,n){if(Bt(t.app))return Promise.reject(ar(t));const r=oi(t),o=await _f(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&EE(t),c}),l=await Ks._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function mk(t,e,n){return Bt(t.app)?Promise.reject(ar(t)):fk(Le(t),mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&EE(t),r})}async function gk(t,e){const n=Le(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await sk(n.auth,s);i!==t.email&&await t.reload()}function yk(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function _k(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function vk(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function wk(t){return Le(t).signOut()}const iu="__sak";/**
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
 */class IE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ek=1e3,Ik=10;class TE extends IE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ik):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const Tk=TE;/**
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
 */class xE extends IE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const SE=xE;/**
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
 */function xk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await xk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
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
 */class Sk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Wp("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $n(){return window}function Ak(t){$n().location.href=t}/**
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
 */function AE(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function Ck(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Rk(){return AE()?self:null}/**
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
 */const CE="firebaseLocalStorageDb",bk=1,ou="firebaseLocalStorage",kE="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qu(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function Pk(){const t=indexedDB.deleteDatabase(CE);return new fl(t).toPromise()}function vf(){const t=indexedDB.open(CE,bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:kE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await Pk(),e(await vf()))})})}async function Hy(t,e,n){const r=qu(t,!0).put({[kE]:e,value:n});return new fl(r).toPromise()}async function Nk(t,e){const n=qu(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function Gy(t,e){const n=qu(t,!0).delete(e);return new fl(n).toPromise()}const Dk=800,Ok=3;class RE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ok)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(Rk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Ck(),!this.activeServiceWorker)return;this.sender=new Sk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Hy(e,iu,"1"),await Gy(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qu(s,!1).getAll();return new fl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RE.type="LOCAL";const Vk=RE;new ul(3e4,6e4);/**
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
 */function Mk(t,e){return e?ir(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hp extends Bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lk(t){return wE(t.auth,new Hp(t),t.bypassAuthState)}function jk(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),hk(n,new Hp(t),t.bypassAuthState)}async function Fk(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),dk(n,new Hp(t),t.bypassAuthState)}/**
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
 */class bE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lk;case"linkViaPopup":case"linkViaRedirect":return Fk;case"reauthViaPopup":case"reauthViaRedirect":return jk;default:xn(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Uk=new ul(2e3,1e4);class Mi extends bE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=Wp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uk.get())};e()}}Mi.currentPopupAction=null;/**
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
 */const zk="pendingRedirect",wc=new Map;class $k extends bE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wc.get(this.auth._key());if(!e){try{const r=await Bk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wc.set(this.auth._key(),e)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bk(t,e){const n=Hk(e),r=Wk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qk(t,e){wc.set(t._key(),e)}function Wk(t){return ir(t._redirectPersistence)}function Hk(t){return vc(zk,t.config.apiKey,t.name)}async function Gk(t,e,n=!1){if(Bt(t.app))return Promise.reject(ar(t));const r=oi(t),s=Mk(r,e),o=await new $k(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Kk=10*60*1e3;class Qk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ky(e))}saveEventToCache(e){this.cachedEventUids.add(Ky(e)),this.lastProcessedEventTime=Date.now()}}function Ky(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PE(t);default:return!1}}/**
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
 */async function Jk(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const Xk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zk=/^https?/;async function eR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jk(t);for(const n of e)try{if(tR(n))return}catch{}xn(t,"unauthorized-domain")}function tR(t){const e=gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zk.test(n))return!1;if(Xk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nR=new ul(3e4,6e4);function Qy(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rR(t){return new Promise((e,n)=>{var s,i,o;function r(){Qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(zn(t,"network-request-failed"))},timeout:nR.get()})}if((i=(s=$n().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=$n().gapi)!=null&&o.load)r();else{const l=WC("iframefcb");return $n()[l]=()=>{gapi.load?r():n(zn(t,"network-request-failed"))},mE(`${qC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function sR(t){return Ec=Ec||rR(t),Ec}/**
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
 */const iR=new ul(5e3,15e3),oR="__/auth/iframe",aR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uR(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,aR):`https://${t.config.authDomain}/${oR}`,r={apiKey:e.apiKey,appName:t.name,v:ii},s=cR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cl(r).slice(1)}`}async function dR(t){const e=await sR(t),n=$n().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:uR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),l=$n().setTimeout(()=>{i(o)},iR.get());function c(){$n().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fR=500,pR=600,mR="_blank",gR="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(t,e,n,r=fR,s=pR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...hR,width:r.toString(),height:s.toString(),top:i,left:o},u=xt().toLowerCase();n&&(l=lE(u)?mR:n),oE(u)&&(e=e||gR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[x,k])=>`${m}${x}=${k},`,"");if(VC(u)&&l!=="_self")return _R(e||"",l),new Yy(null);const g=window.open(e||"",l,f);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new Yy(g)}function _R(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vR="__/auth/handler",wR="emulator/auth/handler",ER=encodeURIComponent("fac");async function Jy(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:s};if(e instanceof _E){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof hl){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${ER}=${encodeURIComponent(c)}`:"";return`${IR(t)}?${cl(l).slice(1)}${u}`}function IR({config:t}){return t.emulator?Up(t,wR):`https://${t.authDomain}/${vR}`}/**
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
 */const ih="webStorageSupport";class TR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=Gk,this._overrideRedirectResult=qk}async _openPopup(e,n,r,s){var o;pr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jy(e,n,r,gf(),s);return yR(e,i,Wp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jy(e,n,r,gf(),s);return Ak(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dR(e),r=new Qk(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ih];i!==void 0&&n(!!i),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fE()||aE()||$p()}}const xR=TR;var Xy="@firebase/auth",Zy="1.12.1";/**
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
 */class SR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CR(t){Tn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},u=new zC(r,s,i,c);return JC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new ln("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new SR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Xy,Zy,AR(t)),Ft(Xy,Zy,"esm2020")}/**
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
 */const kR=5*60,RR=zw("authIdTokenMaxAge")||kR;let e_=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const s=n==null?void 0:n.token;e_!==s&&(e_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PR(t=zu()){const e=ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YC(t,{popupRedirectResolver:xR,persistence:[Vk,Tk,SE]}),r=zw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bR(i.toString());_k(n,o,()=>o(n.currentUser)),yk(n,l=>o(l))}}const s=jw("auth");return s&&XC(n,`http://${s}`),n}function NR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$C({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CR("Browser");var t_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,NE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.F=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(A,C,R){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return y.prototype[C].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;C<16;++C)A[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],C=w.g[2];let R=w.g[3],S;S=y+(R^I&(C^R))+A[0]+3614090360&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[1]+3905402710&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[2]+606105819&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[3]+3250441966&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[4]+4118548399&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[5]+1200080426&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[6]+2821735955&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[7]+4249261313&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[8]+1770035416&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[9]+2336552879&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[10]+4294925233&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[11]+2304563134&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(R^I&(C^R))+A[12]+1804603682&4294967295,y=I+(S<<7&4294967295|S>>>25),S=R+(C^y&(I^C))+A[13]+4254626195&4294967295,R=y+(S<<12&4294967295|S>>>20),S=C+(I^R&(y^I))+A[14]+2792965006&4294967295,C=R+(S<<17&4294967295|S>>>15),S=I+(y^C&(R^y))+A[15]+1236535329&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(C^R&(I^C))+A[1]+4129170786&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[6]+3225465664&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[11]+643717713&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[0]+3921069994&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[5]+3593408605&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[10]+38016083&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[15]+3634488961&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[4]+3889429448&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[9]+568446438&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[14]+3275163606&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[3]+4107603335&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[8]+1163531501&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^R&(I^C))+A[13]+2850285829&4294967295,y=I+(S<<5&4294967295|S>>>27),S=R+(I^C&(y^I))+A[2]+4243563512&4294967295,R=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(R^y))+A[7]+1735328473&4294967295,C=R+(S<<14&4294967295|S>>>18),S=I+(R^y&(C^R))+A[12]+2368359562&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(I^C^R)+A[5]+4294588738&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[8]+2272392833&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[11]+1839030562&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[14]+4259657740&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[1]+2763975236&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[4]+1272893353&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[7]+4139469664&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[10]+3200236656&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[13]+681279174&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[0]+3936430074&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[3]+3572445317&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[6]+76029189&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^R)+A[9]+3654602809&4294967295,y=I+(S<<4&4294967295|S>>>28),S=R+(y^I^C)+A[12]+3873151461&4294967295,R=y+(S<<11&4294967295|S>>>21),S=C+(R^y^I)+A[15]+530742520&4294967295,C=R+(S<<16&4294967295|S>>>16),S=I+(C^R^y)+A[2]+3299628645&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(C^(I|~R))+A[0]+4096336452&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[7]+1126891415&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[14]+2878612391&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[5]+4237533241&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[12]+1700485571&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[3]+2399980690&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[10]+4293915773&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[1]+2240044497&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[8]+1873313359&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[15]+4264355552&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[6]+2734768916&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[13]+1309151649&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~R))+A[4]+4149444226&4294967295,y=I+(S<<6&4294967295|S>>>26),S=R+(I^(y|~C))+A[11]+3174756917&4294967295,R=y+(S<<10&4294967295|S>>>22),S=C+(y^(R|~I))+A[2]+718787259&4294967295,C=R+(S<<15&4294967295|S>>>17),S=I+(R^(C|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const I=y-this.blockSize,A=this.C;let C=this.h,R=0;for(;R<y;){if(C==0)for(;R<=I;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(A[C++]=w.charCodeAt(R++),C==this.blockSize){s(this,A),C=0;break}}else for(;R<y;)if(A[C++]=w[R++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)w[y++]=this.g[I]>>>A&255;return w};function i(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;const I=[];let A=!0;for(let C=w.length-1;C>=0;C--){const R=w[C]|0;A&&R==y||(I[C]=R,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return V(u(-w));const y=[];let I=1;for(let A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(y,8));let A=g;for(let R=0;R<w.length;R+=8){var C=Math.min(8,w.length-R);const S=parseInt(w.substring(R,R+C),y);C<8?(C=u(Math.pow(y,C)),A=A.j(C).add(u(S))):(A=A.j(I),A=A.add(u(S)))}return A}var g=c(0),m=c(1),x=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-V(this).m();let w=0,y=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);w+=(A>=0?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(b(this))return"-"+V(this).toString(w);const y=u(Math.pow(w,6));var I=this;let A="";for(;;){const C=N(I,y).g;I=T(I,C.j(y));let R=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=C,k(I))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function b(w){return w.h==-1}t.l=function(w){return w=T(this,w),b(w)?-1:k(w)?0:1};function V(w){const y=w.g.length,I=[];for(let A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return b(this)?V(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),I=[];let A=0;for(let C=0;C<=y;C++){let R=A+(this.i(C)&65535)+(w.i(C)&65535),S=(R>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);A=S>>>16,R&=65535,S&=65535,I[C]=S<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(V(y))}t.j=function(w){if(k(this)||k(w))return g;if(b(this))return b(w)?V(this).j(V(w)):V(V(this).j(w));if(b(w))return V(this.j(V(w)));if(this.l(x)<0&&w.l(x)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,I=[];for(var A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<w.g.length;C++){const R=this.i(A)>>>16,S=this.i(A)&65535,z=w.i(C)>>>16,H=w.i(C)&65535;I[2*A+2*C]+=S*H,_(I,2*A+2*C),I[2*A+2*C+1]+=R*H,_(I,2*A+2*C+1),I[2*A+2*C+1]+=S*z,_(I,2*A+2*C+1),I[2*A+2*C+2]+=R*z,_(I,2*A+2*C+2)}for(w=0;w<y;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=y;w<2*y;w++)I[w]=0;return new o(I,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function E(w,y){this.g=w,this.h=y}function N(w,y){if(k(y))throw Error("division by zero");if(k(w))return new E(g,g);if(b(w))return y=N(V(w),y),new E(V(y.g),V(y.h));if(b(y))return y=N(w,V(y)),new E(V(y.g),y.h);if(w.g.length>30){if(b(w)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;A.l(w)<=0;)I=j(I),A=j(A);var C=M(I,1),R=M(A,1);for(A=M(A,2),I=M(I,2);!k(A);){var S=R.add(A);S.l(w)<=0&&(C=C.add(I),R=S),A=M(A,1),I=M(I,1)}return y=T(w,C.j(y)),new E(C,y)}for(C=g;w.l(y)>=0;){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=u(I),S=R.j(y);b(S)||S.l(w)>0;)I-=A,R=u(I),S=R.j(y);k(R)&&(R=m),C=C.add(R),w=T(w,S)}return new E(C,w)}t.B=function(w){return N(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function j(w){const y=w.g.length+1,I=[];for(let A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function M(w,y){const I=y>>5;y%=32;const A=w.g.length-I,C=[];for(let R=0;R<A;R++)C[R]=y>0?w.i(R+I)>>>y|w.i(R+I+1)<<32-y:w.i(R+I);return new o(C,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,NE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ts=o}).apply(typeof t_<"u"?t_:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DE,fa,OE,Ic,wf,VE,ME,LE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var h=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in h))break e;h=h[O]}a=a[a.length-1],v=h[a],d=d(v),d!=v&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var h=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&h.push([v,d[v]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,h){return a.call.apply(a.bind,arguments)}function u(a,d,h){return u=c,u.apply(null,arguments)}function f(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var v=h.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function g(a,d){function h(){}h.prototype=d.prototype,a.Z=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(v,O,L){for(var W=Array(arguments.length-2),de=2;de<arguments.length;de++)W[de-2]=arguments[de];return d.prototype[O].apply(v,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const d=a.length;if(d>0){const h=Array(d);for(let v=0;v<d;v++)h[v]=a[v];return h}return[]}function k(a,d){for(let v=1;v<arguments.length;v++){const O=arguments[v];var h=typeof O;if(h=h!="object"?h:O?Array.isArray(O)?"array":h:"null",h=="array"||h=="object"&&typeof O.length=="number"){h=a.length||0;const L=O.length||0;a.length=h+L;for(let W=0;W<L;W++)a[h+W]=O[W]}else a.push(O)}}class b{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(a){o.setTimeout(()=>{throw a},0)}function T(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class _{constructor(){this.h=this.g=null}add(d,h){const v=E.get();v.set(d,h),this.h?this.h.next=v:this.g=v,this.h=v}}var E=new b(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,w=new _,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=T();){try{a.h.call(a.g)}catch(h){V(h)}var d=E;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}M=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,d),o.removeEventListener("test",h,d)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function z(a,d){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}g(z,C),z.prototype.init=function(a,d){const h=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&z.Z.h.call(this)},z.prototype.h=function(){z.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var H="closure_listenable_"+(Math.random()*1e6|0),Q=0;function Z(a,d,h,v,O){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!v,this.ha=O,this.key=++Q,this.da=this.fa=!1}function P(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function B(a,d,h){for(const v in a)d.call(h,a[v],v,a)}function K(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function se(a){const d={};for(const h in a)d[h]=a[h];return d}const he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xe(a,d){let h,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(h in v)a[h]=v[h];for(let L=0;L<he.length;L++)h=he[L],Object.prototype.hasOwnProperty.call(v,h)&&(a[h]=v[h])}}function ne(a){this.src=a,this.g={},this.h=0}ne.prototype.add=function(a,d,h,v,O){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const W=X(a,d,v,O);return W>-1?(d=a[W],h||(d.fa=!1)):(d=new Z(d,this.src,L,!!v,O),d.fa=h,a.push(d)),d};function te(a,d){const h=d.type;if(h in a.g){var v=a.g[h],O=Array.prototype.indexOf.call(v,d,void 0),L;(L=O>=0)&&Array.prototype.splice.call(v,O,1),L&&(P(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function X(a,d,h,v){for(let O=0;O<a.length;++O){const L=a[O];if(!L.da&&L.listener==d&&L.capture==!!h&&L.ha==v)return O}return-1}var ae="closure_lm_"+(Math.random()*1e6|0),pe={};function Ie(a,d,h,v,O){if(Array.isArray(d)){for(let L=0;L<d.length;L++)Ie(a,d[L],h,v,O);return null}return h=xo(h),a&&a[H]?a.J(d,h,l(v)?!!v.capture:!1,O):ct(a,d,h,!1,v,O)}function ct(a,d,h,v,O,L){if(!d)throw Error("Invalid event type");const W=l(O)?!!O.capture:!!O;let de=Cn(a);if(de||(a[ae]=de=new ne(a)),h=de.add(d,h,v,W,L),h.proxy)return h;if(v=Pt(),h.proxy=v,v.src=a,v.listener=h,a.addEventListener)R||(O=W),O===void 0&&(O=!1),a.addEventListener(d.toString(),v,O);else if(a.attachEvent)a.attachEvent(An(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Pt(){function a(h){return d.call(a.src,a.listener,h)}const d=Ve;return a}function Yn(a,d,h,v,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Yn(a,d[L],h,v,O);else v=l(v)?!!v.capture:!!v,h=xo(h),a&&a[H]?(a=a.i,L=String(d).toString(),L in a.g&&(d=a.g[L],h=X(d,h,v,O),h>-1&&(P(d[h]),Array.prototype.splice.call(d,h,1),d.length==0&&(delete a.g[L],a.h--)))):a&&(a=Cn(a))&&(d=a.g[d.toString()],a=-1,d&&(a=X(d,h,v,O)),(h=a>-1?d[a]:null)&&un(h))}function un(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[H])te(d.i,a);else{var h=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(h,v,a.capture):d.detachEvent?d.detachEvent(An(h),v):d.addListener&&d.removeListener&&d.removeListener(v),(h=Cn(d))?(te(h,a),h.h==0&&(h.src=null,d[ae]=null)):P(a)}}}function An(a){return a in pe?pe[a]:pe[a]="on"+a}function Ve(a,d){if(a.da)a=!0;else{d=new z(d,this);const h=a.listener,v=a.ha||a.src;a.fa&&un(a),a=h.call(v,d)}return a}function Cn(a){return a=a[ae],a instanceof ne?a:null}var Er="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(a){return typeof a=="function"?a:(a[Er]||(a[Er]=function(d){return a.handleEvent(d)}),a[Er])}function Ge(){A.call(this),this.i=new ne(this),this.M=this,this.G=null}g(Ge,A),Ge.prototype[H]=!0,Ge.prototype.removeEventListener=function(a,d,h,v){Yn(this,a,d,h,v)};function rt(a,d){var h,v=a.G;if(v)for(h=[];v;v=v.G)h.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new C(d,a);else if(d instanceof C)d.target=d.target||a;else{var O=d;d=new C(v,a),Xe(d,O)}O=!0;let L,W;if(h)for(W=h.length-1;W>=0;W--)L=d.g=h[W],O=di(L,v,!0,d)&&O;if(L=d.g=a,O=di(L,v,!0,d)&&O,O=di(L,v,!1,d)&&O,h)for(W=0;W<h.length;W++)L=d.g=h[W],O=di(L,v,!1,d)&&O}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const h=a.g[d];for(let v=0;v<h.length;v++)P(h[v]);delete a.g[d],a.h--}}this.G=null},Ge.prototype.J=function(a,d,h,v){return this.i.add(String(a),d,!1,h,v)},Ge.prototype.K=function(a,d,h,v){return this.i.add(String(a),d,!0,h,v)};function di(a,d,h,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let O=!0;for(let L=0;L<d.length;++L){const W=d[L];if(W&&!W.da&&W.capture==h){const de=W.listener,Ze=W.ha||W.src;W.fa&&te(a.i,W),O=de.call(Ze,v)!==!1&&O}}return O&&!v.defaultPrevented}function So(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function vl(a){a.g=So(()=>{a.g=null,a.i&&(a.i=!1,vl(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ao extends A{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(a){A.call(this),this.h=a,this.g={}}g(dn,A);var wl=[];function Co(a){B(a.g,function(d,h){this.g.hasOwnProperty(h)&&un(d)},a),a.g={}}dn.prototype.N=function(){dn.Z.N.call(this),Co(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=o.JSON.stringify,ko=o.JSON.parse,El=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function _s(){}function vs(){}var kn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function me(){C.call(this,"d")}g(me,C);function fi(){C.call(this,"c")}g(fi,C);var Rn={},Ro=null;function hn(){return Ro=Ro||new Ge}Rn.Ia="serverreachability";function bo(a){C.call(this,Rn.Ia,a)}g(bo,C);function Ir(a){const d=hn();rt(d,new bo(d))}Rn.STAT_EVENT="statevent";function Po(a,d){C.call(this,Rn.STAT_EVENT,a),this.stat=d}g(Po,C);function st(a){const d=hn();rt(d,new Po(d,a))}Rn.Ja="timingevent";function Il(a,d){C.call(this,Rn.Ja,a),this.size=d}g(Il,C);function ws(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function pd(a,d,h,v,O,L){a.info(function(){if(a.g)if(L){var W="",de=L.split("&");for(let Ae=0;Ae<de.length;Ae++){var Ze=de[Ae].split("=");if(Ze.length>1){const it=Ze[0];Ze=Ze[1];const Nn=it.split("_");W=Nn.length>=2&&Nn[1]=="type"?W+(it+"="+Ze+"&"):W+(it+"=redacted&")}}}else W=null;else W=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+d+`
`+h+`
`+W})}function md(a,d,h,v,O,L,W){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+d+`
`+h+`
`+L+" "+W})}function Tr(a,d,h,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+yd(a,h)+(v?" "+v:"")})}function gd(a,d){a.info(function(){return"TIMEOUT: "+d})}Es.prototype.info=function(){};function yd(a,d){if(!a.g)return d;if(!d)return null;try{const L=JSON.parse(d);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var h=L[a];if(!(h.length<2)){var v=h[1];if(Array.isArray(v)&&!(v.length<1)){var O=v[0];if(O!="noop"&&O!="stop"&&O!="close")for(let W=1;W<v.length;W++)v[W]=""}}}}return hi(L)}catch{return d}}var pi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},No;function mi(){}g(mi,_s),mi.prototype.g=function(){return new XMLHttpRequest},No=new mi;function xr(a){return encodeURIComponent(String(a))}function D(a){var d=1;a=a.split(":");const h=[];for(;d>0&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function ee(a,d,h,v){this.j=a,this.i=d,this.l=h,this.S=v||1,this.V=new dn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ge}function ge(){this.i=null,this.g="",this.h=!1}var ut={},Jn={};function bn(a,d,h){a.M=1,a.A=Cl(Pn(d)),a.u=h,a.R=!0,xl(a,null)}function xl(a,d){a.F=Date.now(),Is(a),a.B=Pn(a.A);var h=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Gm(h.i,"t",v),a.C=0,h=a.j.L,a.h=new ge,a.g=dg(a.j,h?d:null,!a.u),a.P>0&&(a.O=new Ao(u(a.Y,a,a.g),a.P)),d=a.V,h=a.g,v=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(wl[0]=O.toString()),O=wl);for(let L=0;L<O.length;L++){const W=Ie(h,O[L],v||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=a.J?se(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Ir(),pd(a.i,a.v,a.B,a.l,a.S,a.u)}ee.prototype.ba=function(a){a=a.target;const d=this.O;d&&Cr(a)==3?d.j():this.Y(a)},ee.prototype.Y=function(a){try{if(a==this.g)e:{const de=Cr(this.g),Ze=this.g.ya(),Ae=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||eg(this.g)))){this.K||de!=4||Ze==7||(Ze==8||Ae<=0?Ir(3):Ir(2)),Oo(this);var d=this.g.ca();this.X=d;var h=gi(this);if(this.o=d==200,md(this.i,this.v,this.B,this.l,this.S,de,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,O=this.g;if((v=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(v)){var L=v;break t}}L=null}if(a=L)Tr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vo(this,a);else{this.o=!1,this.m=3,st(12),Xn(this),Ts(this);break e}}if(this.R){a=!0;let it;for(;!this.K&&this.C<h.length;)if(it=_d(this,h),it==Jn){de==4&&(this.m=4,st(14),a=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(it==ut){this.m=4,st(15),Tr(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else Tr(this.i,this.l,it,null),Vo(this,it);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||h.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)Tr(this.i,this.l,h,"[Invalid Chunked Response]"),Xn(this),Ts(this);else if(h.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Sd(W),W.P=!0,st(11))}}else Tr(this.i,this.l,h,null),Vo(this,h);de==4&&Xn(this),this.o&&!this.K&&(de==4?ag(this.j,this):(this.o=!1,Is(this)))}else i1(this.g),d==400&&h.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Xn(this),Ts(this)}}}catch{}finally{}};function gi(a){if(!Sl(a))return a.g.la();const d=eg(a.g);if(d==="")return"";let h="";const v=d.length,O=Cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Xn(a),Ts(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<v;L++)a.h.h=!0,h+=a.h.i.decode(d[L],{stream:!(O&&L==v-1)});return d.length=0,a.h.g+=h,a.C=0,a.h.g}function Sl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function _d(a,d){var h=a.C,v=d.indexOf(`
`,h);return v==-1?Jn:(h=Number(d.substring(h,v)),isNaN(h)?ut:(v+=1,v+h>d.length?Jn:(d=d.slice(v,v+h),a.C=v+h,d)))}ee.prototype.cancel=function(){this.K=!0,Xn(this)};function Is(a){a.T=Date.now()+a.H,Do(a,a.H)}function Do(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ws(u(a.aa,a),d)}function Oo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ee.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gd(this.i,this.B),this.M!=2&&(Ir(),st(17)),Xn(this),this.m=2,Ts(this)):Do(this,this.T-a)};function Ts(a){a.j.I==0||a.K||ag(a.j,a)}function Xn(a){Oo(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Co(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Vo(a,d){try{var h=a.j;if(h.I!=0&&(h.g==a||xs(h.h,a))){if(!a.L&&xs(h.h,a)&&h.I==3){try{var v=h.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Nl(h),bl(h);else break e;xd(h),st(18)}}else h.xa=O[1],0<h.xa-h.K&&O[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ws(u(h.Va,h),6e3));jo(h.h)<=1&&h.ta&&(h.ta=void 0)}else As(h,11)}else if((a.L||h.g==a)&&Nl(h),!S(d))for(O=h.Ba.g.parse(d),d=0;d<O.length;d++){let Ae=O[d];const it=Ae[0];if(!(it<=h.K))if(h.K=it,Ae=Ae[1],h.I==2)if(Ae[0]=="c"){h.M=Ae[1],h.ba=Ae[2];const Nn=Ae[3];Nn!=null&&(h.ka=Nn,h.j.info("VER="+h.ka));const Cs=Ae[4];Cs!=null&&(h.za=Cs,h.j.info("SVER="+h.za));const kr=Ae[5];kr!=null&&typeof kr=="number"&&kr>0&&(v=1.5*kr,h.O=v,h.j.info("backChannelRequestTimeoutMs_="+v)),v=h;const Rr=a.g;if(Rr){const Ol=Rr.g?Rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ol){var L=v.h;L.g||Ol.indexOf("spdy")==-1&&Ol.indexOf("quic")==-1&&Ol.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(vd(L,L.h),L.h=null))}if(v.G){const Ad=Rr.g?Rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ad&&(v.wa=Ad,be(v.J,v.G,Ad))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),v=h;var W=a;if(v.na=ug(v,v.L?v.ba:null,v.W),W.L){Um(v.h,W);var de=W,Ze=v.O;Ze&&(de.H=Ze),de.D&&(Oo(de),Is(de)),v.g=W}else ig(v);h.i.length>0&&Pl(h)}else Ae[0]!="stop"&&Ae[0]!="close"||As(h,7);else h.I==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?As(h,7):Td(h):Ae[0]!="noop"&&h.l&&h.l.qa(Ae),h.A=0)}}Ir(4)}catch{}}var Al=class{constructor(a,d){this.g=a,this.map=d}};function Mo(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jo(a){return a.h?1:a.g?a.g.size:0}function xs(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function vd(a,d){a.g?a.g.add(d):a.h=d}function Um(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Mo.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.G);return d}return x(a.i)}var $m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GT(a,d){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const v=a[h].indexOf("=");let O,L=null;v>=0?(O=a[h].substring(0,v),L=a[h].substring(v+1)):O=a[h],d(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Sr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Sr?(this.l=a.l,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.u),this.h=a.h,wd(this,Km(a.i)),this.m=a.m):a&&(d=String(a).match($m))?(this.l=!1,Fo(this,d[1]||"",!0),this.o=zo(d[2]||""),this.g=zo(d[3]||"",!0),Uo(this,d[4]),this.h=zo(d[5]||"",!0),wd(this,d[6]||"",!0),this.m=zo(d[7]||"")):(this.l=!1,this.i=new Bo(null,this.l))}Sr.prototype.toString=function(){const a=[];var d=this.j;d&&a.push($o(d,Bm,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push($o(d,Bm,!0),"@"),a.push(xr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push($o(h,h.charAt(0)=="/"?YT:QT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",$o(h,XT)),a.join("")},Sr.prototype.resolve=function(a){const d=Pn(this);let h=!!a.j;h?Fo(d,a.j):h=!!a.o,h?d.o=a.o:h=!!a.g,h?d.g=a.g:h=a.u!=null;var v=a.h;if(h)Uo(d,a.u);else if(h=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var O=d.h.lastIndexOf("/");O!=-1&&(v=d.h.slice(0,O+1)+v)}if(O=v,O==".."||O==".")v="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){v=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let W=0;W<O.length;){const de=O[W++];de=="."?v&&W==O.length&&L.push(""):de==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&W==O.length&&L.push("")):(L.push(de),v=!0)}v=L.join("/")}else v=O}return h?d.h=v:h=a.i.toString()!=="",h?wd(d,Km(a.i)):h=!!a.m,h&&(d.m=a.m),d};function Pn(a){return new Sr(a)}function Fo(a,d,h){a.j=h?zo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function wd(a,d,h){d instanceof Bo?(a.i=d,ZT(a.i,a.l)):(h||(d=$o(d,JT)),a.i=new Bo(d,a.l))}function be(a,d,h){a.i.set(d,h)}function Cl(a){return be(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $o(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,KT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bm=/[#\/\?@]/g,QT=/[#\?:]/g,YT=/[#\?]/g,JT=/[#\?@]/g,XT=/#/g;function Bo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Ss(a){a.g||(a.g=new Map,a.h=0,a.i&&GT(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=Bo.prototype,t.add=function(a,d){Ss(this),this.i=null,a=yi(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function qm(a,d){Ss(a),d=yi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Wm(a,d){return Ss(a),d=yi(a,d),a.g.has(d)}t.forEach=function(a,d){Ss(this),this.g.forEach(function(h,v){h.forEach(function(O){a.call(d,O,v,this)},this)},this)};function Hm(a,d){Ss(a);let h=[];if(typeof d=="string")Wm(a,d)&&(h=h.concat(a.g.get(yi(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)h=h.concat(a[d]);return h}t.set=function(a,d){return Ss(this),this.i=null,a=yi(this,a),Wm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Hm(this,a),a.length>0?String(a[0]):d):d};function Gm(a,d,h){qm(a,d),h.length>0&&(a.i=null,a.g.set(yi(a,d),x(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var h=d[v];const O=xr(h);h=Hm(this,h);for(let L=0;L<h.length;L++){let W=O;h[L]!==""&&(W+="="+xr(h[L])),a.push(W)}}return this.i=a.join("&")};function Km(a){const d=new Bo;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function yi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ZT(a,d){d&&!a.j&&(Ss(a),a.i=null,a.g.forEach(function(h,v){const O=v.toLowerCase();v!=O&&(qm(this,v),Gm(this,O,h))},a)),a.j=d}function e1(a,d){const h=new Es;if(o.Image){const v=new Image;v.onload=f(Ar,h,"TestLoadImage: loaded",!0,d,v),v.onerror=f(Ar,h,"TestLoadImage: error",!1,d,v),v.onabort=f(Ar,h,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(Ar,h,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function t1(a,d){const h=new Es,v=new AbortController,O=setTimeout(()=>{v.abort(),Ar(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?Ar(h,"TestPingServer: ok",!0,d):Ar(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Ar(h,"TestPingServer: error",!1,d)})}function Ar(a,d,h,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(h)}catch{}}function n1(){this.g=new El}function Ed(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Ed,_s),Ed.prototype.g=function(){return new kl(this.i,this.h)};function kl(a,d){Ge.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(kl,Ge),t=kl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?qo(this):Wo(this),this.readyState==3&&Qm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qo(this))},t.Na=function(a){this.g&&(this.response=a,qo(this))},t.ga=function(){this.g&&qo(this)};function qo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ym(a){let d="";return B(a,function(h,v){d+=v,d+=":",d+=h,d+=`\r
`}),d}function Id(a,d,h){e:{for(v in h){var v=!1;break e}v=!0}v||(h=Ym(h),typeof a=="string"?h!=null&&xr(h):be(a,d,h))}function $e(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g($e,Ge);var r1=/^https?$/i,s1=["POST","PUT"];t=$e.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,h,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():No.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){Jm(this,L);return}if(a=h||"",h=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)h.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())h.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(h.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(s1,d,void 0)>=0)||v||O||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of h)this.g.setRequestHeader(L,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Jm(this,L)}};function Jm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Xm(a),Rl(a)}function Xm(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rl(this,!0)),$e.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zm(this):this.Xa())},t.Xa=function(){Zm(this)};function Zm(a){if(a.h&&typeof i<"u"){if(a.v&&Cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Cr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var v;if(v=L===0){let W=String(a.D).match($m)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),v=!r1.test(W?W.toLowerCase():"")}h=v}if(h)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var O=Cr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Xm(a)}}finally{Rl(a)}}}}function Rl(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,d||rt(a,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ko(d)}};function eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i1(a){const d={};a=(a.g&&Cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(S(a[v]))continue;var h=D(a[v]);const O=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const L=d[O]||[];d[O]=L,L.push(h)}K(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function tg(a){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ho("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ho("baseRetryDelayMs",5e3,a),this.Za=Ho("retryDelaySeedMs",1e4,a),this.Ta=Ho("forwardChannelMaxRetries",2,a),this.va=Ho("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Mo(a&&a.concurrentRequestLimit),this.Ba=new n1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tg.prototype,t.ka=8,t.I=1,t.connect=function(a,d,h,v){st(0),this.W=a,this.H=d||{},h&&v!==void 0&&(this.H.OSID=h,this.H.OAID=v),this.F=this.X,this.J=ug(this,null,this.W),Pl(this)};function Td(a){if(ng(a),a.I==3){var d=a.V++,h=Pn(a.J);if(be(h,"SID",a.M),be(h,"RID",d),be(h,"TYPE","terminate"),Go(a,h),d=new ee(a,a.j,d),d.M=2,d.A=Cl(Pn(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=d.A,h=!0),h||(d.g=dg(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Is(d)}cg(a)}function bl(a){a.g&&(Sd(a),a.g.cancel(),a.g=null)}function ng(a){bl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Nl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Pl(a){if(!Lo(a.h)&&!a.m){a.m=!0;var d=a.Ea;j||y(),M||(j(),M=!0),w.add(d,a),a.D=0}}function o1(a,d){return jo(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ws(u(a.Ea,a,d),lg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new ee(this,this.j,a);let L=this.o;if(this.U&&(L?(L=se(L),Xe(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var v=this.i[h];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=sg(this,O,d),h=Pn(this.J),be(h,"RID",a),be(h,"CVER",22),this.G&&be(h,"X-HTTP-Session-Id",this.G),Go(this,h),L&&(this.R?d="headers="+xr(Ym(L))+"&"+d:this.u&&Id(h,this.u,L)),vd(this.h,O),this.Ra&&be(h,"TYPE","init"),this.S?(be(h,"$req",d),be(h,"SID","null"),O.U=!0,bn(O,h,null)):bn(O,h,d),this.I=2}}else this.I==3&&(a?rg(this,a):this.i.length==0||Lo(this.h)||rg(this))};function rg(a,d){var h;d?h=d.l:h=a.V++;const v=Pn(a.J);be(v,"SID",a.M),be(v,"RID",h),be(v,"AID",a.K),Go(a,v),a.u&&a.o&&Id(v,a.u,a.o),h=new ee(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),d&&(a.i=d.G.concat(a.i)),d=sg(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),vd(a.h,h),bn(h,v,d)}function Go(a,d){a.H&&B(a.H,function(h,v){be(d,v,h)}),a.l&&B({},function(h,v){be(d,v,h)})}function sg(a,d,h){h=Math.min(a.i.length,h);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let de=-1;for(;;){const Ze=["count="+h];de==-1?h>0?(de=O[0].g,Ze.push("ofs="+de)):de=0:Ze.push("ofs="+de);let Ae=!0;for(let it=0;it<h;it++){var L=O[it].g;const Nn=O[it].map;if(L-=de,L<0)de=Math.max(0,O[it].g-100),Ae=!1;else try{L="req"+L+"_"||"";try{var W=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Cs,kr]of W){let Rr=kr;l(kr)&&(Rr=hi(kr)),Ze.push(L+Cs+"="+encodeURIComponent(Rr))}}catch(Cs){throw Ze.push(L+"type="+encodeURIComponent("_badmap")),Cs}}catch{v&&v(Nn)}}if(Ae){W=Ze.join("&");break e}}W=void 0}return a=a.i.splice(0,h),d.G=a,W}function ig(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;j||y(),M||(j(),M=!0),w.add(d,a),a.A=0}}function xd(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ws(u(a.Da,a),lg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,og(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ws(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),bl(this),og(this))};function Sd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function og(a){a.g=new ee(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Pn(a.na);be(d,"RID","rpc"),be(d,"SID",a.M),be(d,"AID",a.K),be(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&be(d,"TO",a.ia),be(d,"TYPE","xmlhttp"),Go(a,d),a.u&&a.o&&Id(d,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=Cl(Pn(d)),h.u=null,h.R=!0,xl(h,a)}t.Va=function(){this.C!=null&&(this.C=null,bl(this),xd(this),st(19))};function Nl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ag(a,d){var h=null;if(a.g==d){Nl(a),Sd(a),a.g=null;var v=2}else if(xs(a.h,d))h=d.G,Um(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){h=d.u?d.u.length:0,d=Date.now()-d.F;var O=a.D;v=hn(),rt(v,new Il(v,h)),Pl(a)}else ig(a);else if(O=d.m,O==3||O==0&&d.X>0||!(v==1&&o1(a,d)||v==2&&xd(a)))switch(h&&h.length>0&&(d=a.h,d.i=d.i.concat(h)),O){case 1:As(a,5);break;case 4:As(a,10);break;case 3:As(a,6);break;default:As(a,2)}}}function lg(a,d){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*d}function As(a,d){if(a.j.info("Error code "+d),d==2){var h=u(a.bb,a),v=a.Ua;const O=!v;v=new Sr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fo(v,"https"),Cl(v),O?e1(v.toString(),h):t1(v.toString(),h)}else st(2);a.I=0,a.l&&a.l.pa(d),cg(a),ng(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function cg(a){if(a.I=0,a.ja=[],a.l){const d=zm(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ja,d),k(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function ug(a,d,h){var v=h instanceof Sr?Pn(h):new Sr(h);if(v.g!="")d&&(v.g=d+"."+v.g),Uo(v,v.u);else{var O=o.location;v=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;const L=new Sr(null);v&&Fo(L,v),d&&(L.g=d),O&&Uo(L,O),h&&(L.h=h),v=L}return h=a.G,d=a.wa,h&&d&&be(v,h,d),be(v,"VER",a.ka),Go(a,v),v}function dg(a,d,h){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new $e(new Ed({ab:h})):new $e(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hg(){}t=hg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Dl(){}Dl.prototype.g=function(a,d){return new zt(a,d)};function zt(a,d){Ge.call(this),this.g=new tg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!S(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new _i(this)}g(zt,Ge),zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Td(this.g)},zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=hi(a),a=h);d.i.push(new Al(d.Ya++,a)),d.I==3&&Pl(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,Td(this.g),delete this.g,zt.Z.N.call(this)};function fg(a){me.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}g(fg,me);function pg(){fi.call(this),this.status=1}g(pg,fi);function _i(a){this.g=a}g(_i,hg),_i.prototype.ra=function(){rt(this.g,"a")},_i.prototype.qa=function(a){rt(this.g,new fg(a))},_i.prototype.pa=function(a){rt(this.g,new pg)},_i.prototype.oa=function(){rt(this.g,"b")},Dl.prototype.createWebChannel=Dl.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,LE=function(){return new Dl},ME=function(){return hn()},VE=Rn,wf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Ic=pi,Tl.COMPLETE="complete",OE=Tl,vs.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,fa=vs,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,DE=$e}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let go="12.10.0";function DR(t){go=t}/**
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
 */const Qs=new Uu("@firebase/firestore");function wi(){return Qs.logLevel}function Y(t,...e){if(Qs.logLevel<=ye.DEBUG){const n=e.map(Gp);Qs.debug(`Firestore (${go}): ${t}`,...n)}}function mr(t,...e){if(Qs.logLevel<=ye.ERROR){const n=e.map(Gp);Qs.error(`Firestore (${go}): ${t}`,...n)}}function Ys(t,...e){if(Qs.logLevel<=ye.WARN){const n=e.map(Gp);Qs.warn(`Firestore (${go}): ${t}`,...n)}}function Gp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jE(t,r,n)}function jE(t,e,n){let r=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw mr(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jE(e,s,r)}function ce(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class FE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class VR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MR{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new FE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class LR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new LR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new n_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new n_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Ef(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return oh(s)===oh(i)?_e(s,i):oh(s)?1:-1}return _e(t.length,e.length)}const zR=55296,$R=57343;function oh(t){const e=t.charCodeAt(0);return e>=zR&&e<=$R}function so(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const r_="__name__";class Ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=Ln.isNumericId(e),s=Ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ln.extractNumericId(e).compare(Ln.extractNumericId(n)):Ef(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class ke extends Ln{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const BR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ln{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return BR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===r_}static keyField(){return new ft([r_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(ke.fromString(e))}static fromName(e){return new re(ke.fromString(e).popFirst(5))}static empty(){return new re(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new ke(e.slice()))}}/**
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
 */function UE(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qR(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s_(t){if(!re.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i_(t){if(re.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wu(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function pl(t,e){if(!zE(t))throw new G(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const o_=-62135596800,a_=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*a_);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<o_)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/a_}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pl(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-o_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:Je("string",De._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new De(0,0))}static max(){return new le(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xa=-1;function WR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new is(s,re.empty(),e)}function HR(t){return new is(t.readTime,t.key,Xa)}class is{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new is(le.min(),re.empty(),Xa)}static max(){return new is(le.max(),re.empty(),Xa)}}function GR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const KR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==KR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function YR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hu.ce=-1;/**
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
 */const Qp=-1;function Gu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function JR(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const $E="";function XR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=l_(e)),e=ZR(t.get(n),e);return l_(e)}function ZR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $E:n+="";break;default:n+=i}}return n}function l_(t){return t+$E+""}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new nt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qE("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=eb.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */const WE="server_timestamp",HE="__type__",GE="__previous_value__",KE="__local_write_time__";function Yp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[HE])==null?void 0:r.stringValue)===WE}function Ku(t){const e=t.mapValue.fields[GE];return Yp(e)?Ku(e):e}function Za(t){const e=os(t.mapValue.fields[KE].timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class tb{constructor(e,n,r,s,i,o,l,c,u,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=g}}const lu="(default)";class el{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new el("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}function nb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(t.options.projectId,e)}/**
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
 */const QE="__type__",rb="__max__",tc={mapValue:{}},YE="__vector__",cu="value";function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yp(t)?4:ib(t)?9007199254740991:sb(t)?10:11:oe(28295,{value:t})}function Gn(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Za(t).isEqual(Za(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=os(s.timestampValue),l=os(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return as(s.bytesValue).isEqual(as(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),l=We(i.doubleValue);return o===l?au(o)===au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(c_(o)!==c_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Gn(o[c],l[c])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function tl(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=We(i.integerValue||i.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return d_(t.timestampValue,e.timestampValue);case 4:return d_(Za(t),Za(e));case 5:return Ef(t.stringValue,e.stringValue);case 6:return function(i,o){const l=as(i),c=as(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=_e(l[u],c[u]);if(f!==0)return f}return _e(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=_e(We(i.latitude),We(o.latitude));return l!==0?l:_e(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return h_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,x,k,b;const l=i.fields||{},c=o.fields||{},u=(m=l[cu])==null?void 0:m.arrayValue,f=(x=c[cu])==null?void 0:x.arrayValue,g=_e(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return g!==0?g:h_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===tc.mapValue&&o===tc.mapValue)return 0;if(i===tc.mapValue)return 1;if(o===tc.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const m=Ef(c[g],f[g]);if(m!==0)return m;const x=io(l[c[g]],u[f[g]]);if(x!==0)return x}return _e(c.length,f.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function d_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=os(t),r=os(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function h_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=io(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function oo(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=os(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return as(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=If(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${If(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function Tc(t){switch(ls(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ku(t);return e?16+Tc(e):16;case 5:return 2*t.stringValue.length;case 6:return as(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Tc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ms(r.fields,(i,o)=>{s+=i.length+Tc(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function f_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tf(t){return!!t&&"integerValue"in t}function Jp(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xc(t){return!!t&&"mapValue"in t}function sb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[QE])==null?void 0:r.stringValue)===YE}function ka(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ka(t.arrayValue.values[n]);return e}return{...t}}function ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rb}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ka(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(ka(this.value))}}function JE(t){const e=[];return ms(t.fields,(n,r)=>{const s=new ft([n]);if(xc(r)){const i=JE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class It{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new It(e,0,le.min(),le.min(),le.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new It(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new It(e,2,n,le.min(),le.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,le.min(),le.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uu{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=io(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function ob(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XE{}class Ye extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lb(e,n,r):n==="array-contains"?new db(e,r):n==="in"?new hb(e,r):n==="not-in"?new fb(e,r):n==="array-contains-any"?new pb(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cb(e,r):new ub(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(io(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Sn(e,n)}matches(e){return ZE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ZE(t){return t.op==="and"}function eI(t){return ab(t)&&ZE(t)}function ab(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function xf(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(eI(t))return t.filters.map(e=>xf(e)).join(",");{const e=t.filters.map(n=>xf(n)).join(",");return`${t.op}(${e})`}}function tI(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Gn(r.value,s.value)}(t,e):t instanceof Sn?function(r,s){return s instanceof Sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&tI(o,s.filters[l]),!0):!1}(t,e):void oe(19439)}function nI(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(nI).join(" ,")+"}"}(t):"Filter"}class lb extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class cb extends Ye{constructor(e,n){super(e,"in",n),this.keys=rI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ub extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=rI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class db extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jp(n)&&tl(n.arrayValue,this.value)}}class hb extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tl(this.value.arrayValue,n)}}class fb extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!tl(this.value.arrayValue,n)}}class pb extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tl(this.value.arrayValue,r))}}/**
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
 */class mb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function __(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mb(t,e,n,r,s,i,o)}function Xp(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.Te=n}return e.Te}function Zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ob(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Sf(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function gb(t,e,n,r,s,i,o,l){return new vo(t,e,n,r,s,i,o,l)}function Qu(t){return new vo(t)}function v_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yb(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function sI(t){return t.collectionGroup!==null}function Ra(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new nl(i,r))}),n.has(ft.keyField().canonicalString())||e.Ie.push(new nl(ft.keyField(),r))}return e.Ie}function Bn(t){const e=ce(t);return e.Ee||(e.Ee=_b(e,Ra(t))),e.Ee}function _b(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new nl(s.field,i)});const n=t.endAt?new uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new uu(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e){const n=t.filters.concat([e]);return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vb(t,e){const n=t.explicitOrderBy.concat([e]);return new vo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Cf(t,e,n){return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return Zp(Bn(t),Bn(e))&&t.limitType===e.limitType}function iI(t){return`${Xp(Bn(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>nI(s)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>oo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>oo(s)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ra(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=g_(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ra(r),s)||r.endAt&&!function(o,l,c){const u=g_(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ra(r),s))}(t,e)}function wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oI(t){return(e,n)=>{let r=!1;for(const s of Ra(t)){const i=Eb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Eb(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?io(c,u):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
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
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return BE(this.inner)}size(){return this.innerSize}}/**
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
 */const Ib=new ze(re.comparator);function gr(){return Ib}const aI=new ze(re.comparator);function pa(...t){let e=aI;for(const n of t)e=e.insert(n.key,n);return e}function lI(t){let e=aI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ms(){return ba()}function cI(){return ba()}function ba(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const Tb=new ze(re.comparator),xb=new nt(re.comparator);function ve(...t){let e=xb;for(const n of t)e=e.add(n);return e}const Sb=new nt(_e);function Ab(){return Sb}/**
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
 */function em(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function uI(t){return{integerValue:""+t}}function Cb(t,e){return JR(e)?uI(e):em(t,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function kb(t,e,n){return t instanceof rl?function(s,i){const o={fields:{[HE]:{stringValue:WE},[KE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yp(i)&&(i=Ku(i)),i&&(o.fields[GE]=i),{mapValue:o}}(n,e):t instanceof ao?hI(t,e):t instanceof lo?fI(t,e):function(s,i){const o=dI(s,i),l=w_(o)+w_(s.Ae);return Tf(o)&&Tf(s.Ae)?uI(l):em(s.serializer,l)}(t,e)}function Rb(t,e,n){return t instanceof ao?hI(t,e):t instanceof lo?fI(t,e):n}function dI(t,e){return t instanceof du?function(r){return Tf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class rl extends Xu{}class ao extends Xu{constructor(e){super(),this.elements=e}}function hI(t,e){const n=pI(e);for(const r of t.elements)n.some(s=>Gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends Xu{constructor(e){super(),this.elements=e}}function fI(t,e){let n=pI(e);for(const r of t.elements)n=n.filter(s=>!Gn(s,r));return{arrayValue:{values:n}}}class du extends Xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function w_(t){return We(t.integerValue||t.doubleValue)}function pI(t){return Jp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tm{constructor(e,n){this.field=e,this.transform=n}}function bb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ao&&s instanceof ao||r instanceof lo&&s instanceof lo?so(r.elements,s.elements,Gn):r instanceof du&&s instanceof du?Gn(r.Ae,s.Ae):r instanceof rl&&s instanceof rl}(t.transform,e.transform)}class Pb{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function mI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nm(t.key,sn.none()):new ml(t.key,t.data,sn.none());{const n=t.data,r=Ot.empty();let s=new nt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gs(t.key,r,new Wt(s.toArray()),sn.none())}}function Nb(t,e,n){t instanceof ml?function(s,i,o){const l=s.value.clone(),c=I_(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(s,i,o){if(!Sc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=I_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gI(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pa(t,e,n,r){return t instanceof ml?function(i,o,l,c){if(!Sc(i.precondition,o))return l;const u=i.value.clone(),f=T_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(i,o,l,c){if(!Sc(i.precondition,o))return l;const u=T_(i.fieldTransforms,c,o),f=o.data;return f.setAll(gI(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return Sc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Db(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dI(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&so(r,s,(i,o)=>bb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends Zu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gs extends Zu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Rb(o,l,n[s]))}return r}function T_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kb(i,o,e))}return r}class nm extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ob extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Nb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=mI(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>E_(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class rm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Tb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rm(e,n,r,s)}}/**
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
 */class Mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Lb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,we;function jb(t){switch(t){case F.OK:return oe(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function yI(t){if(t===void 0)return mr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ke.OK:return F.OK;case Ke.CANCELLED:return F.CANCELLED;case Ke.UNKNOWN:return F.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return F.INTERNAL;case Ke.UNAVAILABLE:return F.UNAVAILABLE;case Ke.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ke.NOT_FOUND:return F.NOT_FOUND;case Ke.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ke.ABORTED:return F.ABORTED;case Ke.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ke.DATA_LOSS:return F.DATA_LOSS;default:return oe(39323,{code:t})}}(we=Ke||(Ke={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Fb(){return new TextEncoder}/**
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
 */const Ub=new ts([4294967295,4294967295],0);function x_(t){const e=Fb().encode(t),n=new NE;return n.update(e),new Uint8Array(n.digest())}function S_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(Ub)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=x_(e),[r,s]=S_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ed{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ed(le.min(),s,new ze(_e),gr(),ve())}}class gl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,ve(),ve(),ve())}}/**
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
 */class Ac{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class _I{constructor(e,n){this.targetId=e,this.Ce=n}}class vI{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class A_{constructor(){this.ve=0,this.Fe=C_(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),n=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new gl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=C_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class zb{constructor(e){this.Ge=e,this.ze=new Map,this.je=gr(),this.He=nc(),this.Je=nc(),this.Ze=new ze(_e)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Sf(i))if(r===0){const o=new re(i.path);this.et(n,o,It.newNoDocument(o,le.min()))}else Te(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=as(r).toUint8Array()}catch(c){if(c instanceof qE)return Ys("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new sm(o,s,i)}catch(c){return Ys(c instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Sf(l.target)){const c=new re(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,It.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ve();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ed(e,n,this.Ze,this.je,r);return this.je=gr(),this.He=nc(),this.Je=nc(),this.Ze=new ze(_e),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new A_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new nt(_e),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new nt(_e),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new A_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nc(){return new ze(re.comparator)}function C_(){return new ze(re.comparator)}const $b={asc:"ASCENDING",desc:"DESCENDING"},Bb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qb={and:"AND",or:"OR"};class Wb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function hu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Hb(t,e){return hu(t,e.toTimestamp())}function qn(t){return Te(!!t,49232),le.fromTimestamp(function(n){const r=os(n);return new De(r.seconds,r.nanos)}(t))}function im(t,e){return Rf(t,e).canonicalString()}function Rf(t,e){const n=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EI(t){const e=ke.fromString(t);return Te(AI(e),10190,{key:e.toString()}),e}function bf(t,e){return im(t.databaseId,e.path)}function ah(t,e){const n=EI(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(TI(n))}function II(t,e){return im(t.databaseId,e)}function Gb(t){const e=EI(t);return e.length===4?ke.emptyPath():TI(e)}function Pf(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TI(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function k_(t,e,n){return{name:bf(t,e),fields:n.value.mapValue.fields}}function Kb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Te(f===void 0||typeof f=="string",58123),gt.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?F.UNKNOWN:yI(u.code);return new G(f,u.message||"")}(o);n=new vI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ah(t,r.document.name),i=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):le.min(),l=new Ot({mapValue:{fields:r.document.fields}}),c=It.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ac(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ah(t,r.document),i=r.readTime?qn(r.readTime):le.min(),o=It.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ac([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ah(t,r.document),i=r.removedTargetIds||[];n=new Ac([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Lb(s,i),l=r.targetId;n=new _I(l,o)}}return n}function Qb(t,e){let n;if(e instanceof ml)n={update:k_(t,e.key,e.value)};else if(e instanceof nm)n={delete:bf(t,e.key)};else if(e instanceof gs)n={update:k_(t,e.key,e.data),updateMask:sP(e.fieldMask)};else{if(!(e instanceof Ob))return oe(16599,{dt:e.type});n={verify:bf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof du)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function Yb(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?qn(s.updateTime):qn(i);return o.isEqual(le.min())&&(o=qn(i)),new Pb(o,s.transformResults||[])}(n,e))):[]}function Jb(t,e){return{documents:[II(t,e.path)]}}function Xb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=II(t,s);const i=function(u){if(u.length!==0)return SI(Sn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ii(m.field),direction:tP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Zb(t){let e=Gb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=xI(g);return m instanceof Sn&&eI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(k){return new nl(Ti(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Gu(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(g){const m=!!g.before,x=g.values||[];return new uu(x,m)}(n.startAt));let u=null;return n.endAt&&(u=function(g){const m=!g.before,x=g.values||[];return new uu(x,m)}(n.endAt)),gb(e,s,o,i,l,"F",c,u)}function eP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ti(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ti(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Ti(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>xI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function tP(t){return $b[t]}function nP(t){return Bb[t]}function rP(t){return qb[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Ti(t){return ft.fromServerFormat(t.fieldPath)}function SI(t){return t instanceof Ye?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(n.field),op:nP(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(s=>SI(s));return r.length===1?r[0]:{compositeFilter:{op:rP(n.op),filters:r}}}(t):oe(54877,{filter:t})}function sP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function CI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class qr{constructor(e,n,r,s,i=le.min(),o=le.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iP{constructor(e){this.yt=e}}function oP(t){const e=Zb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}/**
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
 */class aP{constructor(){this.Sn=new lP}addToCollectionParentIndex(e,n){return this.Sn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(is.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class lP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(ke.comparator)).toArray()}}/**
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
 */const R_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kI=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(kI,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class co{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new co(0)}static ar(){return new co(-1)}}/**
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
 */const b_="LruGarbageCollector",cP=1048576;function P_([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class uP{constructor(e){this.Pr=e,this.buffer=new nt(P_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();P_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Y(b_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_o(n)?Y(b_,"Ignoring IndexedDB error during garbage collection: ",n):await yo(n)}await this.Ar(3e5)})}}class hP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Hu.ce);const r=new uP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(R_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(u=Date.now(),wi()<=ye.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function fP(t,e){return new hP(t,e)}/**
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
 */class pP{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pa(r.mutation,s,Wt.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pa();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=gr();const o=ba(),l=function(){return ba()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof gs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Pa(f.mutation,u,f.mutation.getFieldMask(),De.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new mP(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ba();let s=new ze((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Wt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const g=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,g=cI();f.forEach(m=>{if(!i.has(m)){const x=mI(n.get(m),r.get(m));x!==null&&g.set(m,x),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,g))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return yb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ms());let l=Xa,c=i;return o.next(u=>U.forEach(u,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(f=>({batchId:l,changes:lI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=pa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pa();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(g,m){return new vo(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,It.newInvalidDocument(f)))});let l=pa();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Pa(f.mutation,u,Wt.empty(),De.now()),Ju(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class yP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:qn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:oP(s.bundledQuery),readTime:qn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class _P{constructor(){this.overlays=new ze(re.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ms();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ms(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ms(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ms(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return U.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mb(n,r));let i=this.Lr.get(n);i===void 0&&(i=ve(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class vP{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class om{constructor(){this.kr=new nt(ot.Kr),this.qr=new nt(ot.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ot(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new re(new ke([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new re(new ke([])),r=new ot(n,e),s=new ot(n,e+1);let i=ve();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return re.comparator(e.key,n.key)||_e(e.Hr,n.Hr)}static Ur(e,n){return _e(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
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
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new nt(ot.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Qp:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(_e);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new ot(new re(i),0);let l=new nt(_e);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),U.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return U.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ot(n,0),s=this.Jr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EP{constructor(e){this.ti=e,this.docs=function(){return new ze(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gr();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||GR(HR(f),r)<=0||(s.has(f.key)||Ju(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return U.resolve(this.size)}}class IP extends pP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class TP{constructor(e){this.persistence=e,this.ri=new ai(n=>Xp(n),Zp),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.ii=0,this.si=new om,this.targetCount=0,this.oi=co._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new co(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
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
 */class RI{constructor(e,n){this._i={},this.overlays={},this.ai=new Hu(0),this.ui=!1,this.ui=!0,this.ci=new vP,this.referenceDelegate=e(this),this.li=new TP(this),this.indexManager=new aP,this.remoteDocumentCache=function(s){return new EP(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new iP(n),this.Pi=new yP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _P,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new xP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class xP extends QR{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.Ri=new om,this.Ai=null}static Vi(e){return new am(e)}get di(){if(this.Ai)return this.Ai;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=re.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class fu{constructor(e,n){this.persistence=e,this.fi=new ai(r=>XR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=fP(this,n)}static Vi(e,n){return new fu(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Tc(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lm(e,n.fromCache,r,s)}}/**
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
 */class SP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return QS()?8:YR(xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SP;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(wi()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(wi()<=ye.DEBUG&&Y("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(wi()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):U.resolve())}gs(e,n){if(v_(n))return U.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cf(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ss(n,u,o,c.readTime)?this.gs(e,Cf(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,s){return v_(n)||s.isEqual(le.min())?U.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?U.resolve(null):(wi()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ei(n)),this.Ds(e,o,n,WR(s,Xa)).next(l=>l))})}bs(e,n){let r=new nt(oI(e));return n.forEach((s,i)=>{Ju(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return wi()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.fs.getDocumentsMatchingQuery(e,n,is.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const cm="LocalStore",CP=3e8;class kP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ze(_e),this.Fs=new ai(i=>Xp(i),Zp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function RP(t,e,n,r){return new kP(t,e,n,r)}async function bI(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function bP(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const g=u.batch,m=g.keys();let x=U.resolve();return m.forEach(k=>{x=x.next(()=>f.getEntry(c,k)).next(b=>{const V=u.docVersions.get(k);Te(V!==null,48541),b.version.compareTo(V)<0&&(g.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function PI(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function PP(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let x=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?x=x.withResumeToken(gt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(g,x),function(b,V,T){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=CP?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,x,f)&&l.push(n.li.updateTargetData(i,x))});let c=gr(),u=ve();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(NP(i,o,e.documentUpdates).next(f=>{c=f.Bs,u=f.Ls})),!r.isEqual(le.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.vs=s,i))}function NP(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(cm,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function DP(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OP(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nf(t,e,n){const r=ce(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_o(o))throw o;Y(cm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function N_(t,e,n){const r=ce(t);let s=le.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const g=ce(c),m=g.Fs.get(f);return m!==void 0?U.resolve(g.vs.get(m)):g.li.getTargetData(u,f)}(r,o,Bn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:ve())).next(l=>(VP(r,wb(e),l),{documents:l,ks:i})))}function VP(t,e,n){let r=t.Ms.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class D_{constructor(){this.activeTargetIds=Ab()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MP{constructor(){this.vo=new D_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LP{Mo(e){}shutdown(){}}/**
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
 */const O_="ConnectivityMonitor";class V_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Y(O_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Y(O_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rc=null;function Df(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
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
 */const lh="RestConnection",jP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class FP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===lu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Df(),l=this.Qo(e,n.toUriEncodedString());Y(lh,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),f=ri(u);return this.zo(e,l,c,r,f).then(g=>(Y(lh,`Received RPC '${e}' ${o}: `,g),g),g=>{throw Ys(lh,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=jP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class UP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const vt="WebChannelConnection",na=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Hi extends FP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Hi.c_){const e=ME();na(e,VE.STAT_EVENT,n=>{n.stat===wf.PROXY?Y(vt,"STAT_EVENT: detected buffering proxy"):n.stat===wf.NOPROXY&&Y(vt,"STAT_EVENT: detected no buffering proxy")}),Hi.c_=!0}}zo(e,n,r,s,i){const o=Df();return new Promise((l,c)=>{const u=new DE;u.setWithCredentials(!0),u.listenOnce(OE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ic.NO_ERROR:const g=u.getResponseJson();Y(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Ic.TIMEOUT:Y(vt,`RPC '${e}' ${o} timed out`),c(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const m=u.getStatus();if(Y(vt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let x=u.getResponseJson();Array.isArray(x)&&(x=x[0]);const k=x==null?void 0:x.error;if(k&&k.status&&k.message){const b=function(T){const _=T.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(k.status);c(new G(b,k.message))}else c(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new G(F.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Y(vt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Y(vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Df(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");Y(vt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const f=o.createWebChannel(u,l);this.I_(f);let g=!1,m=!1;const x=new UP({Ho:k=>{m?Y(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(Y(vt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),Y(vt,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return na(f,fa.EventType.OPEN,()=>{m||(Y(vt,`RPC '${e}' stream ${s} transport opened.`),x.i_())}),na(f,fa.EventType.CLOSE,()=>{m||(m=!0,Y(vt,`RPC '${e}' stream ${s} transport closed`),x.o_(),this.E_(f))}),na(f,fa.EventType.ERROR,k=>{m||(m=!0,Ys(vt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),x.o_(new G(F.UNAVAILABLE,"The operation could not be completed")))}),na(f,fa.EventType.MESSAGE,k=>{var b;if(!m){const V=k.data[0];Te(!!V,16349);const T=V,_=(T==null?void 0:T.error)||((b=T[0])==null?void 0:b.error);if(_){Y(vt,`RPC '${e}' stream ${s} received error:`,_);const E=_.status;let N=function(w){const y=Ke[w];if(y!==void 0)return yI(y)}(E),j=_.message;E==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Ys(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=F.INTERNAL,j="Unknown error status: "+E+" with message "+_.message),m=!0,x.o_(new G(N,j)),f.close()}else Y(vt,`RPC '${e}' stream ${s} received:`,V),x.__(V)}}),Hi.u_(),setTimeout(()=>{x.s_()},0),x}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return LE()}}/**
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
 */function zP(t){return new Hi(t)}function ch(){return typeof document<"u"?document:null}/**
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
 */function td(t){return new Wb(t,!0)}/**
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
 */Hi.c_=!1;class NI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const M_="PersistentStream";class DI{constructor(e,n,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new NI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Y(M_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Y(M_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends DI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Kb(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?qn(o.readTime):le.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Pf(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Sf(c)?{documents:Jb(i,c)}:{query:Xb(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wI(i,o.resumeToken);const u=kf(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=hu(i,o.snapshotVersion.toTimestamp());const u=kf(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=eP(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Pf(this.serializer),n.removeTarget=e,this.K_(n)}}class BP extends DI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Yb(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Pf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qb(this.serializer,r))};this.K_(n)}}/**
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
 */class qP{}class WP extends qP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Rf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(F.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function HP(t,e,n,r){return new WP(t,e,n,r)}class GP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(n),this.aa=!1):Y("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Js="RemoteStore";class KP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{li(this)&&(Y(Js,"Restarting streams for network reachability change."),await async function(c){const u=ce(c);u.Ea.add(4),await yl(u),u.Va.set("Unknown"),u.Ea.delete(4),await nd(u)}(this))})}),this.Va=new GP(r,s)}}async function nd(t){if(li(t))for(const e of t.Ra)await e(!0)}async function yl(t){for(const e of t.Ra)await e(!1)}function OI(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),fm(n)?hm(n):wo(n).O_()&&dm(n,e))}function um(t,e){const n=ce(t),r=wo(n);n.Ia.delete(e),r.O_()&&VI(n,e),n.Ia.size===0&&(r.O_()?r.L_():li(n)&&n.Va.set("Unknown"))}function dm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wo(t).Z_(e)}function VI(t,e){t.da.$e(e),wo(t).X_(e)}function hm(t){t.da=new zb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),wo(t).start(),t.Va.ua()}function fm(t){return li(t)&&!wo(t).x_()&&t.Ia.size>0}function li(t){return ce(t).Ea.size===0}function MI(t){t.da=void 0}async function QP(t){t.Va.set("Online")}async function YP(t){t.Ia.forEach((e,n)=>{dm(t,e)})}async function JP(t,e){MI(t),fm(t)?(t.Va.ha(e),hm(t)):t.Va.set("Unknown")}async function XP(t,e,n){if(t.Va.set("Online"),e instanceof vI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){Y(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof Ac?t.da.Xe(e):e instanceof _I?t.da.st(e):t.da.tt(e),!n.isEqual(le.min()))try{const r=await PI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),VI(i,c);const g=new qr(f.target,c,u,f.sequenceNumber);dm(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(Js,"Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!_o(e))throw e;t.Ea.add(1),await yl(t),t.Va.set("Offline"),n||(n=()=>PI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(Js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await nd(t)})}function LI(t,e){return e().catch(n=>pu(t,n,e))}async function rd(t){const e=ce(t),n=cs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qp;for(;ZP(e);)try{const s=await DP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,eN(e,s)}catch(s){await pu(e,s)}jI(e)&&FI(e)}function ZP(t){return li(t)&&t.Ta.length<10}function eN(t,e){t.Ta.push(e);const n=cs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function jI(t){return li(t)&&!cs(t).x_()&&t.Ta.length>0}function FI(t){cs(t).start()}async function tN(t){cs(t).ra()}async function nN(t){const e=cs(t);for(const n of t.Ta)e.ea(n.mutations)}async function rN(t,e,n){const r=t.Ta.shift(),s=rm.from(r,e,n);await LI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await rd(t)}async function sN(t,e){e&&cs(t).Y_&&await async function(r,s){if(function(o){return jb(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();cs(r).B_(),await LI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rd(r)}}(t,e),jI(t)&&FI(t)}async function L_(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Y(Js,"RemoteStore received new credentials");const r=li(n);n.Ea.add(3),await yl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await nd(n)}async function iN(t,e){const n=ce(t);e?(n.Ea.delete(2),await nd(n)):e||(n.Ea.add(2),await yl(n),n.Va.set("Unknown"))}function wo(t){return t.ma||(t.ma=function(n,r,s){const i=ce(n);return i.sa(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:QP.bind(null,t),Yo:YP.bind(null,t),t_:JP.bind(null,t),J_:XP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),fm(t)?hm(t):t.Va.set("Unknown")):(await t.ma.stop(),MI(t))})),t.ma}function cs(t){return t.fa||(t.fa=function(n,r,s){const i=ce(n);return i.sa(),new BP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:tN.bind(null,t),t_:sN.bind(null,t),ta:nN.bind(null,t),na:rN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await rd(t)):(await t.fa.stop(),t.Ta.length>0&&(Y(Js,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class pm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(mr("AsyncQueue",`${e}: ${t}`),_o(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gi{static emptySet(e){return new Gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class j_{constructor(){this.ga=new ze(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class uo{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new uo(e,n,Gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class oN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class aN{constructor(){this.queries=F_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=F_(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function F_(){return new ai(t=>iI(t),Yu)}async function gm(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new oN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mm(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_m(n)}async function ym(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lN(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&_m(n)}function cN(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function _m(t){t.Ca.forEach(e=>{e.next()})}var Of,U_;(U_=Of||(Of={})).Ma="default",U_.Cache="cache";class vm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Of.Cache}}/**
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
 */class UI{constructor(e){this.key=e}}class zI{constructor(e){this.key=e}}class uN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ve(),this.mutatedKeys=ve(),this.eu=oI(e),this.tu=new Gi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new j_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),x=Ju(this.query,g)?g:null,k=!!m&&this.mutatedKeys.has(m.key),b=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;m&&x?m.data.isEqual(x.data)?k!==b&&(r.track({type:3,doc:x}),V=!0):this.su(m,x)||(r.track({type:2,doc:x}),V=!0,(c&&this.eu(x,c)>0||u&&this.eu(x,u)<0)&&(l=!0)):!m&&x?(r.track({type:0,doc:x}),V=!0):m&&!x&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(x?(o=o.add(x),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(x,k){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:V})}};return b(x)-b(k)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new uo(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new j_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ve(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new zI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new UI(r))}),n}cu(e){this.Za=e.ks,this.Ya=ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wm="SyncEngine";class dN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hN{constructor(e){this.key=e,this.hu=!1}}class fN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ai(l=>iI(l),Yu),this.Iu=new Map,this.Eu=new Set,this.Ru=new ze(re.comparator),this.Au=new Map,this.Vu=new om,this.du={},this.mu=new Map,this.fu=co.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pN(t,e,n=!0){const r=GI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $I(r,e,n,!0),s}async function mN(t,e){const n=GI(t);await $I(n,e,!0,!1)}async function $I(t,e,n,r){const s=await OP(t.localStore,Bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await gN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&OI(t.remoteStore,s),l}async function gN(t,e,n,r,s){t.pu=(g,m,x)=>async function(b,V,T,_){let E=V.view.ru(T);E.Ss&&(E=await N_(b.localStore,V.query,!1).then(({documents:w})=>V.view.ru(w,E)));const N=_&&_.targetChanges.get(V.targetId),j=_&&_.targetMismatches.get(V.targetId)!=null,M=V.view.applyChanges(E,b.isPrimaryClient,N,j);return $_(b,V.targetId,M.au),M.snapshot}(t,g,m,x);const i=await N_(t.localStore,e,!0),o=new uN(e,i.ks),l=o.ru(i.documents),c=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$_(t,n,u.au);const f=new dN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function yN(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Yu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&um(r.remoteStore,s.targetId),Vf(r,s.targetId)}).catch(yo)):(Vf(r,s.targetId),await Nf(r.localStore,s.targetId,!0))}async function _N(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function vN(t,e,n){const r=AN(t);try{const s=await function(o,l){const c=ce(o),u=De.now(),f=l.reduce((x,k)=>x.add(k.key),ve());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let k=gr(),b=ve();return c.xs.getEntries(x,f).next(V=>{k=V,k.forEach((T,_)=>{_.isValidDocument()||(b=b.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,k)).next(V=>{g=V;const T=[];for(const _ of l){const E=Db(_,g.get(_.key).overlayedDocument);E!=null&&T.push(new gs(_.key,E,JE(E.value.mapValue),sn.exists(!0)))}return c.mutationQueue.addMutationBatch(x,u,T,l)}).next(V=>{m=V;const T=V.applyToLocalDocumentSet(g,b);return c.documentOverlayCache.saveOverlays(x,V.batchId,T)})}).then(()=>({batchId:m.batchId,changes:lI(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new ze(_e)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await _l(r,s.changes),await rd(r.remoteStore)}catch(s){const i=mm(s,"Failed to persist write");n.reject(i)}}async function BI(t,e){const n=ce(t);try{const r=await PP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Te(o.hu,14607):s.removedDocuments.size>0&&(Te(o.hu,42227),o.hu=!1))}),await _l(n,r,e)}catch(r){await yo(r)}}function z_(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ce(o);c.onlineState=l;let u=!1;c.queries.forEach((f,g)=>{for(const m of g.ba)m.va(l)&&(u=!0)}),u&&_m(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wN(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ze(re.comparator);o=o.insert(i,It.newNoDocument(i,le.min()));const l=ve().add(i),c=new ed(le.min(),new Map,new ze(_e),o,l);await BI(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Em(r)}else await Nf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(yo)}async function EN(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await bP(n.localStore,e);WI(n,r,null),qI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,s)}catch(s){await yo(s)}}async function IN(t,e,n){const r=ce(t);try{const s=await function(o,l){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(g=>(Te(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(u,g))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);WI(r,e,n),qI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,s)}catch(s){await yo(s)}}function qI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function WI(t,e,n){const r=ce(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||HI(t,r)})}function HI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(um(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Em(t))}function $_(t,e,n){for(const r of n)r instanceof UI?(t.Vu.addReference(r.key,e),TN(t,r)):r instanceof zI?(Y(wm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||HI(t,r.key)):oe(19791,{wu:r})}function TN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Y(wm,"New document in limbo: "+n),t.Eu.add(r),Em(t))}function Em(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new hN(n)),t.Ru=t.Ru.insert(n,r),OI(t.remoteStore,new qr(Bn(Qu(n.path)),r,"TargetPurposeLimboResolution",Hu.ce))}}async function _l(t,e,n){const r=ce(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const g=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(u){s.push(u);const g=lm.Es(c.targetId,u);i.push(g)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,u){const f=ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(u,m=>U.forEach(m.Ts,x=>f.persistence.referenceDelegate.addReference(g,m.targetId,x)).next(()=>U.forEach(m.Is,x=>f.persistence.referenceDelegate.removeReference(g,m.targetId,x)))))}catch(g){if(!_o(g))throw g;Y(cm,"Failed to update sequence numbers: "+g)}for(const g of u){const m=g.targetId;if(!g.fromCache){const x=f.vs.get(m),k=x.snapshotVersion,b=x.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(m,b)}}}(r.localStore,i))}async function xN(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Y(wm,"User change. New user:",e.toKey());const r=await bI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new G(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.Ns)}}function SN(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function GI(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wN.bind(null,e),e.Pu.J_=lN.bind(null,e.eventManager),e.Pu.yu=cN.bind(null,e.eventManager),e}function AN(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IN.bind(null,e),e}class mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=td(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return RP(this.persistence,new AP,e.initialUser,this.serializer)}Cu(e){return new RI(am.Vi,this.serializer)}Du(e){return new MP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mu.provider={build:()=>new mu};class CN extends mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Te(this.persistence.referenceDelegate instanceof fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new RI(r=>fu.Vi(r,n),this.serializer)}}class Mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>z_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aN}()}createDatastore(e){const n=td(e.databaseInfo.databaseId),r=zP(e.databaseInfo);return HP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new KP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>z_(this.syncEngine,n,0),function(){return V_.v()?new V_:new LP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const g=new fN(s,i,o,l,c,u);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ce(s);Y(Js,"RemoteStore shutting down."),i.Ea.add(5),await yl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mf.provider={build:()=>new Mf};/**
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
 */class Im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const us="FirestoreClient";class kN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Kp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y(us,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y(us,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),Y(us,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RN(t);Y(us,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>L_(e.remoteStore,s)),t._onlineComponents=e}async function RN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(us,"Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new mu)}}else Y(us,"Using default OfflineComponentProvider"),await uh(t,new CN(void 0));return t._offlineComponents}async function KI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(us,"Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(Y(us,"Using default OnlineComponentProvider"),await B_(t,new Mf))),t._onlineComponents}function bN(t){return KI(t).then(e=>e.syncEngine)}async function gu(t){const e=await KI(t),n=e.eventManager;return n.onListen=pN.bind(null,e.syncEngine),n.onUnlisten=yN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_N.bind(null,e.syncEngine),n}function PN(t,e,n,r){const s=new Im(r),i=new vm(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>gm(await gu(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>ym(await gu(t),i))}}function NN(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Im({next:m=>{f.Nu(),o.enqueueAndForget(()=>ym(i,g));const x=m.docs.has(l);!x&&m.fromCache?u.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&c&&c.source==="server"?u.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),g=new vm(Qu(l.path),f,{includeMetadataChanges:!0,Ka:!0});return gm(i,g)}(await gu(t),t.asyncQueue,e,n,r)),r.promise}function DN(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Im({next:m=>{f.Nu(),o.enqueueAndForget(()=>ym(i,g)),m.fromCache&&c.source==="server"?u.reject(new G(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),g=new vm(l,f,{includeMetadataChanges:!0,Ka:!0});return gm(i,g)}(await gu(t),t.asyncQueue,e,n,r)),r.promise}function ON(t,e){const n=new lr;return t.asyncQueue.enqueueAndForget(async()=>vN(await bN(t),e,n)),n.promise}/**
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
 */function QI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const VN="ComponentProvider",q_=new Map;function MN(t,e,n,r,s){return new tb(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,QI(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const YI="firestore.googleapis.com",W_=!0;class H_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YI,this.ssl=W_}else this.host=e.host,this.ssl=e.ssl??W_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cP)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OR;switch(r.type){case"firstParty":return new jR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q_.get(n);r&&(Y(VN,"Removing Datastore"),q_.delete(n),r.terminate())}(this),Promise.resolve()}}function LN(t,e,n,r={}){var u;t=Ut(t,sd);const s=ri(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Mp(`https://${l}`),Lp("Firestore",!0)),i.host!==YI&&i.host!==l&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Hn(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=wt.MOCK_USER;else{f=$w(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new wt(m)}t._authCredentials=new VR(new FE(f,g))}}/**
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
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(pl(n,qe._jsonSchema))return new qe(e,r||null,new re(ke.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Je("string",qe._jsonSchemaVersion),referencePath:Je("string")};class ns extends ys{constructor(e,n,r){super(e,n,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new re(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function Jt(t,e,...n){if(t=Le(t),UE("collection","path",e),t instanceof sd){const r=ke.fromString(e,...n);return i_(r),new ns(t,null,r)}{if(!(t instanceof qe||t instanceof ns))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return i_(r),new ns(t.firestore,null,r)}}function At(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Kp.newId()),UE("doc","path",e),t instanceof sd){const r=ke.fromString(e,...n);return s_(r),new qe(t,null,new re(r))}{if(!(t instanceof qe||t instanceof ns))throw new G(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return s_(r),new qe(t.firestore,t instanceof ns?t.converter:null,new re(r))}}/**
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
 */const G_="AsyncQueue";class K_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new NI(this,"async_queue_retry"),this._c=()=>{const r=ch();r&&Y(G_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!_o(e))throw e;Y(G_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",Q_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=pm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:Q_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Q_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class yr extends sd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new K_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K_(e),this._firestoreClient=void 0,await e}}}function jN(t,e){const n=typeof t=="object"?t:zu(),r=typeof t=="string"?t:lu,s=ps(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fw("firestore");i&&LN(s,...i)}return s}function id(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||FN(t),t._firestoreClient}function FN(t){var r,s,i,o;const e=t._freezeSettings(),n=MN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new kN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(gt.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:Je("string",tn._jsonSchemaVersion),bytes:Je("string")};/**
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
 */class Tm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Eo{constructor(e){this._methodName=e}}/**
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
 */class Wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wn._jsonSchemaVersion}}static fromJSON(e){if(pl(e,Wn._jsonSchema))return new Wn(e.latitude,e.longitude)}}Wn._jsonSchemaVersion="firestore/geoPoint/1.0",Wn._jsonSchema={type:Je("string",Wn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
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
 */class En{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pl(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new En(e.vectorValues);throw new G(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:Je("string",En._jsonSchemaVersion),vectorValues:Je("object")};/**
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
 */const UN=/^__.*__$/;class zN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class JI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{dataSource:t})}}class od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new od({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return yu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(XI(this.dataSource)&&UN.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class $N{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||td(e)}createContext(e,n,r,s=!1){return new od({dataSource:e,methodName:n,targetDoc:r,path:ft.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ad(t){const e=t._freezeSettings(),n=td(t._databaseId);return new $N(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZI(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Cm("Data must be an object, but it was:",o,r);const l=tT(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Xs(e,g,n);if(!o.contains(m))throw new G(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sT(f,m)||f.push(m)}c=new Wt(f),u=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,u=o.fieldTransforms;return new zN(new Ot(l),c,u)}class ld extends Eo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ld}}function eT(t,e,n){return new od({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xm extends Eo{_toFieldTransform(e){return new tm(e.path,new rl)}isEqual(e){return e instanceof xm}}class Sm extends Eo{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=eT(this,e,!0),r=this.Ac.map(i=>ci(i,n)),s=new ao(r);return new tm(e.path,s)}isEqual(e){return e instanceof Sm&&Hn(this.Ac,e.Ac)}}class Am extends Eo{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=eT(this,e,!0),r=this.Ac.map(i=>ci(i,n)),s=new lo(r);return new tm(e.path,s)}isEqual(e){return e instanceof Am&&Hn(this.Ac,e.Ac)}}function BN(t,e,n,r){const s=t.createContext(1,e,n);Cm("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();ms(r,(c,u)=>{const f=rT(e,c,n);u=Le(u);const g=s.childContextForFieldPath(f);if(u instanceof ld)i.push(f);else{const m=ci(u,g);m!=null&&(i.push(f),o.set(f,m))}});const l=new Wt(i);return new JI(o,l,s.fieldTransforms)}function qN(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Xs(e,r,n)],c=[s];if(i.length%2!=0)throw new G(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Xs(e,i[m])),c.push(i[m+1]);const u=[],f=Ot.empty();for(let m=l.length-1;m>=0;--m)if(!sT(u,l[m])){const x=l[m];let k=c[m];k=Le(k);const b=o.childContextForFieldPath(x);if(k instanceof ld)u.push(x);else{const V=ci(k,b);V!=null&&(u.push(x),f.set(x,V))}}const g=new Wt(u);return new JI(f,g,o.fieldTransforms)}function WN(t,e,n,r=!1){return ci(n,t.createContext(r?4:3,e))}function ci(t,e){if(nT(t=Le(t)))return Cm("Unsupported field value:",e,t),tT(t,e);if(t instanceof Eo)return function(r,s){if(!XI(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ci(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:hu(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hu(s.serializer,i)}}if(r instanceof Wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:wI(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:im(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return function(o,l){const c=o instanceof En?o.toArray():o;return{mapValue:{fields:{[QE]:{stringValue:YE},[cu]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return em(l.serializer,f)})}}}}}}(r,s);if(CI(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Wu(r)}`)}(t,e)}function tT(t,e){const n={};return BE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=ci(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function nT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Wn||t instanceof tn||t instanceof qe||t instanceof Eo||t instanceof En||CI(t))}function Cm(t,e,n){if(!nT(n)||!zE(n)){const r=Wu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Xs(t,e,n){if((e=Le(e))instanceof Tm)return e._internalPath;if(typeof e=="string")return rT(t,e);throw yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const HN=new RegExp("[~\\*/\\[\\]]");function rT(t,e,n){if(e.search(HN)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tm(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(F.INVALID_ARGUMENT,l+t+c)}function sT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GN{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[cu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>We(o.doubleValue));return new En(n)}convertGeoPoint(e){return new Wn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const n=os(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Te(AI(r),9688,{name:e});const s=new el(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||mr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class km extends GN{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function On(){return new xm("serverTimestamp")}function Y_(...t){return new Sm("arrayUnion",t)}function KN(...t){return new Am("arrayRemove",t)}const J_="@firebase/firestore",X_="4.12.0";/**
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
 */class iT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Xs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QN extends iT{data(){return super.data()}}/**
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
 */function oT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rm{}class aT extends Rm{}function Ki(t,e,...n){let r=[];e instanceof Rm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof bm).length,l=i.filter(c=>c instanceof cd).length;if(o>1||o>0&&l>0)throw new G(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class cd extends aT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=this._parse(e);return lT(e._query,n),new ys(e.firestore,e.converter,Af(e._query,n))}_parse(e){const n=ad(e.firestore);return function(i,o,l,c,u,f,g){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){tv(g,f);const k=[];for(const b of g)k.push(ev(c,i,b));m={arrayValue:{values:k}}}else m=ev(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||tv(g,f),m=WN(l,o,g,f==="in"||f==="not-in");return Ye.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _u(t,e,n){const r=e,s=Xs("where",t);return cd._create(s,r,n)}class bm extends Rm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)lT(o,c),o=Af(o,c)}(e._query,n),new ys(e.firestore,e.converter,Af(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pm extends aT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pm(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nl(i,o)}(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,vb(e._query,n))}}function YN(t,e="asc"){const n=e,r=Xs("orderBy",t);return Pm._create(r,n)}function ev(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new G(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sI(e)&&n.indexOf("/")!==-1)throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!re.isDocumentKey(r))throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return f_(t,new re(r))}if(n instanceof qe)return f_(t,n._key);throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wu(n)}.`)}function tv(t,e){if(!Array.isArray(t)||t.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Us extends iT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Us._jsonSchemaVersion="firestore/documentSnapshot/1.0",Us._jsonSchema={type:Je("string",Us._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class Cc extends Us{data(e={}){return super.data(e)}}class zs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ga(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cc(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Cc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ga(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Cc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ga(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:JN(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
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
 */zs._jsonSchemaVersion="firestore/querySnapshot/1.0",zs._jsonSchema={type:Je("string",zs._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};/**
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
 */function XN(t){t=Ut(t,qe);const e=Ut(t.firestore,yr),n=id(e);return NN(n,t._key).then(r=>uT(e,t,r))}function Lf(t){t=Ut(t,ys);const e=Ut(t.firestore,yr),n=id(e),r=new km(e);return oT(t._query),DN(n,t._query).then(s=>new zs(e,r,t,s))}function ZN(t,e,n){t=Ut(t,qe);const r=Ut(t.firestore,yr),s=cT(t.converter,e),i=ad(r);return ud(r,[ZI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function en(t,e,n,...r){t=Ut(t,qe);const s=Ut(t.firestore,yr),i=ad(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof Tm?qN(i,"updateDoc",t._key,e,n,r):BN(i,"updateDoc",t._key,e),ud(s,[o.toMutation(t._key,sn.exists(!0))])}function nv(t){return ud(Ut(t.firestore,yr),[new nm(t._key,sn.none())])}function ra(t,e){const n=Ut(t.firestore,yr),r=At(t),s=cT(t.converter,e),i=ad(t.firestore);return ud(n,[ZI(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function kc(t,...e){var u,f,g;t=Le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Z_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Z_(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(g=m.complete)==null?void 0:g.bind(m)}let i,o,l;if(t instanceof qe)o=Ut(t.firestore,yr),l=Qu(t._key.path),i={next:m=>{e[r]&&e[r](uT(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Ut(t,ys);o=Ut(m.firestore,yr),l=m._query;const x=new km(o);i={next:k=>{e[r]&&e[r](new zs(o,x,m,k))},error:e[r+1],complete:e[r+2]},oT(t._query)}const c=id(o);return PN(c,l,s,i)}function ud(t,e){const n=id(t);return ON(n,e)}function uT(t,e,n){const r=n.docs.get(e._key),s=new km(t);return new Us(t,s,e._key,r,new ga(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){DR(ii),Tn(new ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new yr(new MR(r.getProvider("auth-internal")),new FR(o,r.getProvider("app-check-internal")),nb(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ft(J_,X_,e),Ft(J_,X_,"esm2020")})();var e2="firebase",t2="12.10.0";/**
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
 */Ft(e2,t2,"app");const dT="@firebase/installations",Nm="0.6.20";/**
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
 */const hT=1e4,fT=`w:${Nm}`,pT="FIS_v2",n2="https://firebaseinstallations.googleapis.com/v1",r2=60*60*1e3,s2="installations",i2="Installations";/**
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
 */const o2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zs=new si(s2,i2,o2);function mT(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function gT({projectId:t}){return`${n2}/projects/${t}/installations`}function yT(t){return{token:t.token,requestStatus:2,expiresIn:l2(t.expiresIn),creationTime:Date.now()}}async function _T(t,e){const r=(await e.json()).error;return Zs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a2(t,{refreshToken:e}){const n=vT(t);return n.append("Authorization",c2(e)),n}async function wT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function l2(t){return Number(t.replace("s","000"))}function c2(t){return`${pT} ${t}`}/**
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
 */async function u2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=gT(t),s=vT(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:pT,appId:t.appId,sdkVersion:fT},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await wT(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:yT(u.authToken)}}else throw await _T("Create Installation",c)}/**
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
 */function ET(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function d2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const h2=/^[cdef][\w-]{21}$/,jf="";function f2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p2(t);return h2.test(n)?n:jf}catch{return jf}}function p2(t){return d2(t).substr(0,22)}/**
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
 */function dd(t){return`${t.appName}!${t.appId}`}/**
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
 */const IT=new Map;function TT(t,e){const n=dd(t);xT(n,e),m2(n,e)}function xT(t,e){const n=IT.get(t);if(n)for(const r of n)r(e)}function m2(t,e){const n=g2();n&&n.postMessage({key:t,fid:e}),y2()}let Ls=null;function g2(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=t=>{xT(t.data.key,t.data.fid)}),Ls}function y2(){IT.size===0&&Ls&&(Ls.close(),Ls=null)}/**
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
 */const _2="firebase-installations-database",v2=1,ei="firebase-installations-store";let dh=null;function Dm(){return dh||(dh=Kw(_2,v2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),dh}async function vu(t,e){const n=dd(t),s=(await Dm()).transaction(ei,"readwrite"),i=s.objectStore(ei),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&TT(t,e.fid),e}async function ST(t){const e=dd(t),r=(await Dm()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function hd(t,e){const n=dd(t),s=(await Dm()).transaction(ei,"readwrite"),i=s.objectStore(ei),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&TT(t,l.fid),l}/**
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
 */async function Om(t){let e;const n=await hd(t.appConfig,r=>{const s=w2(r),i=E2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===jf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function w2(t){const e=t||{fid:f2(),registrationStatus:0};return AT(e)}function E2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Zs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=I2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T2(t)}:{installationEntry:e}}async function I2(t,e){try{const n=await u2(t,e);return vu(t.appConfig,n)}catch(n){throw mT(n)&&n.customData.serverCode===409?await ST(t.appConfig):await vu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function T2(t){let e=await rv(t.appConfig);for(;e.registrationStatus===1;)await ET(100),e=await rv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Om(t);return r||n}return e}function rv(t){return hd(t,e=>{if(!e)throw Zs.create("installation-not-found");return AT(e)})}function AT(t){return x2(t)?{fid:t.fid,registrationStatus:0}:t}function x2(t){return t.registrationStatus===1&&t.registrationTime+hT<Date.now()}/**
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
 */async function S2({appConfig:t,heartbeatServiceProvider:e},n){const r=A2(t,n),s=a2(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:fT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await wT(()=>fetch(r,l));if(c.ok){const u=await c.json();return yT(u)}else throw await _T("Generate Auth Token",c)}function A2(t,{fid:e}){return`${gT(t)}/${e}/authTokens:generate`}/**
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
 */async function Vm(t,e=!1){let n;const r=await hd(t.appConfig,i=>{if(!CT(i))throw Zs.create("not-registered");const o=i.authToken;if(!e&&R2(o))return i;if(o.requestStatus===1)return n=C2(t,e),i;{if(!navigator.onLine)throw Zs.create("app-offline");const l=P2(i);return n=k2(t,l),l}});return n?await n:r.authToken}async function C2(t,e){let n=await sv(t.appConfig);for(;n.authToken.requestStatus===1;)await ET(100),n=await sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vm(t,e):r}function sv(t){return hd(t,e=>{if(!CT(e))throw Zs.create("not-registered");const n=e.authToken;return N2(n)?{...e,authToken:{requestStatus:0}}:e})}async function k2(t,e){try{const n=await S2(t,e),r={...e,authToken:n};return await vu(t.appConfig,r),n}catch(n){if(mT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ST(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await vu(t.appConfig,r)}throw n}}function CT(t){return t!==void 0&&t.registrationStatus===2}function R2(t){return t.requestStatus===2&&!b2(t)}function b2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+r2}function P2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function N2(t){return t.requestStatus===1&&t.requestTime+hT<Date.now()}/**
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
 */async function D2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Om(e);return r?r.catch(console.error):Vm(e).catch(console.error),n.fid}/**
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
 */async function O2(t,e=!1){const n=t;return await V2(n),(await Vm(n,e)).token}async function V2(t){const{registrationPromise:e}=await Om(t);e&&await e}/**
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
 */function M2(t){if(!t||!t.options)throw hh("App Configuration");if(!t.name)throw hh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hh(t){return Zs.create("missing-app-config-values",{valueName:t})}/**
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
 */const kT="installations",L2="installations-internal",j2=t=>{const e=t.getProvider("app").getImmediate(),n=M2(e),r=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},F2=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,kT).getImmediate();return{getId:()=>D2(n),getToken:s=>O2(n,s)}};function U2(){Tn(new ln(kT,j2,"PUBLIC")),Tn(new ln(L2,F2,"PRIVATE"))}U2();Ft(dT,Nm);Ft(dT,Nm,"esm2020");/**
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
 */const wu="analytics",z2="firebase_id",$2="origin",B2=60*1e3,q2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const kt=new Uu("@firebase/analytics");/**
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
 */const W2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Gt=new si("analytics","Analytics",W2);/**
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
 */function H2(t){if(!t.startsWith(Mm)){const e=Gt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function RT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function G2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function K2(t,e){const n=G2("firebase-js-sdk-policy",{createScriptURL:H2}),r=document.createElement("script"),s=`${Mm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Q2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y2(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await RT(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){kt.error(l)}t("config",s,i)}async function J2(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await RT(n);for(const c of o){const u=l.find(g=>g.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){kt.error(i)}}function X2(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await J2(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await Y2(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){kt.error(l)}}return s}function Z2(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=X2(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function eD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mm)&&n.src.includes(t))return n;return null}/**
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
 */const tD=30,nD=1e3;class rD{constructor(e={},n=nD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bT=new rD;function sD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function iD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:sD(n)},s=q2.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const c=await i.json();(o=c.error)!=null&&o.message&&(l=c.error.message)}catch{}throw Gt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function oD(t,e=bT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Gt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cD;return setTimeout(async()=>{l.abort()},B2),PT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function PT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=bT){var l;const{appId:i,measurementId:o}=t;try{await aD(r,e)}catch(c){if(o)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await iD(t);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!lD(u)){if(s.deleteThrottleMetadata(i),o)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw c}const f=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?Cy(n,s.intervalMillis,tD):Cy(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,g),kt.debug(`Calling attemptFetch again in ${f} millis`),PT(t,g,r,s)}}function aD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lD(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function dD(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function hD(){if(qw())try{await Ww()}catch(t){return kt.warn(Gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fD(t,e,n,r,s,i,o){const l=oD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>kt.error(m)),e.push(l);const c=hD().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([l,c]);eD(i)||K2(i,u.measurementId),s("js",new Date);const g=(o==null?void 0:o.config)??{};return g[$2]="firebase",g.update=!0,f!=null&&(g[z2]=f),s("config",u.measurementId,g),u.measurementId}/**
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
 */class pD{constructor(e){this.app=e}_delete(){return delete Qi[this.app.options.appId],Promise.resolve()}}let Qi={},iv=[];const ov={};let fh="dataLayer",mD="gtag",av,Lm,lv=!1;function gD(){const t=[];if(Bw()&&t.push("This is a browser extension environment."),YS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Gt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function yD(t,e,n){gD();const r=t.options.appId;if(!r)throw Gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Gt.create("no-api-key");if(Qi[r]!=null)throw Gt.create("already-exists",{id:r});if(!lv){Q2(fh);const{wrappedGtag:i,gtagCore:o}=Z2(Qi,iv,ov,fh,mD);Lm=i,av=o,lv=!0}return Qi[r]=fD(t,iv,ov,e,av,fh,n),new pD(t)}function _D(t=zu()){t=Le(t);const e=ps(t,wu);return e.isInitialized()?e.getImmediate():vD(t)}function vD(t,e={}){const n=ps(t,wu);if(n.isInitialized()){const s=n.getImmediate();if(Hn(e,n.getOptions()))return s;throw Gt.create("already-initialized")}return n.initialize({options:e})}function wD(t,e,n){t=Le(t),dD(Lm,Qi[t.app.options.appId],e,n).catch(r=>kt.error(r))}function ED(t,e,n,r){t=Le(t),uD(Lm,Qi[t.app.options.appId],e,n,r).catch(s=>kt.error(s))}const cv="@firebase/analytics",uv="0.10.20";function ID(){Tn(new ln(wu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return yD(r,s,n)},"PUBLIC")),Tn(new ln("analytics-internal",t,"PRIVATE")),Ft(cv,uv),Ft(cv,uv,"esm2020");function t(e){try{const n=e.getProvider(wu).getImmediate();return{logEvent:(r,s,i)=>ED(n,r,s,i),setUserProperties:(r,s)=>wD(n,r,s)}}catch(n){throw Gt.create("interop-component-reg-failed",{reason:n})}}}ID();/**
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
 */const NT="firebasestorage.googleapis.com",TD="storageBucket",xD=2*60*1e3,SD=10*60*1e3;/**
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
 */class Qn extends cn{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kn||(Kn={}));function ph(t){return"storage/"+t}function AD(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(Kn.UNKNOWN,t)}function CD(){return new Qn(Kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kD(){return new Qn(Kn.CANCELED,"User canceled the upload/download.")}function RD(t){return new Qn(Kn.INVALID_URL,"Invalid URL '"+t+"'.")}function bD(t){return new Qn(Kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dv(t){return new Qn(Kn.INVALID_ARGUMENT,t)}function DT(){return new Qn(Kn.APP_DELETED,"The Firebase app was deleted.")}function PD(t){return new Qn(Kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw bD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),k={bucket:1,path:3},b=n===NT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",T=new RegExp(`^https?://${b}/${s}/${V}`,"i"),E=[{regex:l,indices:c,postModify:i},{regex:x,indices:k,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<E.length;N++){const j=E[N],M=j.regex.exec(e);if(M){const w=M[j.indices.bucket];let y=M[j.indices.path];y||(y=""),r=new _n(w,y),j.postModify(r);break}}if(r==null)throw RD(e);return r}}class ND{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...V){u||(u=!0,e.apply(null,V))}function g(V){s=setTimeout(()=>{s=null,t(x,c())},V)}function m(){i&&clearTimeout(i)}function x(V,...T){if(u){m();return}if(V){m(),f.call(null,V,...T);return}if(c()||o){m(),f.call(null,V,...T);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,g(E)}let k=!1;function b(V){k||(k=!0,m(),!u&&(s!==null?(V||(l=2),clearTimeout(s),g(0)):V||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function OD(t){t(!1)}/**
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
 */function VD(t){return t!==void 0}function hv(t,e,n,r){if(r<e)throw dv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw dv(`Invalid value for '${t}'. Expected ${n} or less.`)}function MD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Eu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Eu||(Eu={}));/**
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
 */function LD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class jD{constructor(e,n,r,s,i,o,l,c,u,f,g,m=!0,x=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,b)=>{this.resolve_=k,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new sc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Eu.NO_ERROR,c=i.getStatus();if(!l||LD(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Eu.ABORT;r(!1,new sc(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new sc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());VD(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=AD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?DT():kD();o(c)}else{const c=CD();o(c)}};this.canceled_?n(!1,new sc(!1,null,!0)):this.backoffId_=DD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $D(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BD(t,e,n,r,s,i,o=!0,l=!1){const c=MD(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return zD(f,e),FD(f,n),UD(f,i),$D(f,r),new jD(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function qD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Iu{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Iu(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WD(this._location.path)}get storage(){return this._service}get parent(){const e=qD(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new Iu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PD(e)}}function fv(t,e){const n=e==null?void 0:e[TD];return n==null?null:_n.makeFromBucketSpec(n,t)}function HD(t,e,n,r={}){t.host=`${e}:${n}`;const s=ri(e);s&&(Mp(`https://${t.host}/b`),Lp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$w(i,t.app.options.projectId))}class GD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=NT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xD,this._maxUploadRetryTime=SD,this._requests=new Set,s!=null?this._bucket=_n.makeFromBucketSpec(s,this._host):this._bucket=fv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=fv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Iu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ND(DT());{const o=BD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const pv="@firebase/storage",mv="0.14.1";/**
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
 */const OT="storage";function KD(t=zu(),e){t=Le(t);const r=ps(t,OT).getImmediate({identifier:e}),s=Fw("storage");return s&&QD(r,...s),r}function QD(t,e,n,r={}){HD(t,e,n,r)}function YD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new GD(n,r,s,e,ii)}function JD(){Tn(new ln(OT,YD,"PUBLIC").setMultipleInstances(!0)),Ft(pv,mv,""),Ft(pv,mv,"esm2020")}JD();const XD={apiKey:"AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ",authDomain:"giftwave-pro.firebaseapp.com",projectId:"giftwave-pro",storageBucket:"giftwave-pro.firebasestorage.app",messagingSenderId:"964612051931",appId:"1:964612051931:web:c318a4f6ba21c51d3a8dfe",measurementId:"G-Z8YJ83DXW2"},fd=Qw(XD),Vn=PR(fd),Ce=jN(fd);KD(fd);typeof window<"u"&&_D(fd);const VT=$.createContext();function ZD({children:t}){const[e,n]=$.useState(null),[r,s]=$.useState([]),[i,o]=$.useState(!0);$.useEffect(()=>{const x=setTimeout(()=>{o(!1)},3e3),k=vk(Vn,async V=>{try{if(V){const T=At(Ce,"users",V.uid),_=await XN(T);if(_.exists()){const E=V.emailVerified,N={id:V.uid,..._.data(),isVerified:E};n(N),await en(T,{lastSeen:"online"})}}else e&&await en(At(Ce,"users",e.id),{lastSeen:new Date().toISOString()}),n(null)}catch(T){console.error("Auth error:",T)}finally{clearTimeout(x),o(!1)}},V=>{console.error("Auth state error:",V),clearTimeout(x),o(!1)}),b=()=>{Vn.currentUser&&en(At(Ce,"users",Vn.currentUser.uid),{lastSeen:new Date().toISOString()})};return window.addEventListener("beforeunload",b),()=>{k(),clearTimeout(x),window.removeEventListener("beforeunload",b)}},[]),$.useEffect(()=>{if(e&&e.isVerified){const x=Ki(Jt(Ce,"users"));return kc(x,b=>{const V=b.docs.map(T=>({id:T.id,...T.data()}));s(V)})}},[e]);const l=async(x,k,b,V,T)=>{try{const _=Jt(Ce,"users"),E=Ki(_,_u("username","==",x));if(!(await Lf(E)).empty)return{error:"Этот юзернейм уже занят. Выберите другой."};const M=(await pk(Vn,V,k)).user;await gk(M);const w={username:x.toLowerCase(),displayName:T||x,bio:b,email:V,phone:"",birthday:"",nameColor:"#ffffff",isVerified:!1,role:x.toLowerCase()==="admin"?"admin":"user",avatar:`https://api.dicebear.com/7.x/shapes/svg?seed=${x}`,coins:500,createdAt:new Date().toISOString()};return await ZN(At(Ce,"users",M.uid),w),n({id:M.uid,...w}),{success:!0}}catch(_){let E=_.message;return _.code==="auth/email-already-in-use"&&(E="Пользователь с такой почтой уже зарегистрирован."),{error:E}}},c=async(x,k)=>{try{return await mk(Vn,x,k),{success:!0}}catch{return{error:"Неверный логин или пароль"}}},u=async()=>{if(!Vn.currentUser)return;await Vn.currentUser.reload();const x=Vn.currentUser.emailVerified;return x&&(await en(At(Ce,"users",Vn.currentUser.uid),{isVerified:!0}),n(k=>({...k,isVerified:!0}))),x},f=async(x,k)=>{if((e==null?void 0:e.role)!=="admin")return{error:"Access denied"};try{const V=(r.find(T=>T.id===x).coins||0)+parseInt(k);return await en(At(Ce,"users",x),{coins:V}),s(T=>T.map(_=>_.id===x?{..._,coins:V}:_)),{success:!0}}catch(b){return{error:b.message}}},g=()=>wk(Vn),m=async x=>{if(e)try{if(x.username&&x.username!==e.username){const b=Jt(Ce,"users"),V=Ki(b,_u("username","==",x.username));if(!(await Lf(V)).empty)return{error:"Этот юзернейм уже занят."}}const k=At(Ce,"users",e.id);return await en(k,x),n(b=>({...b,...x})),{success:!0}}catch(k){return console.error("Error updating user:",k),{error:k.message}}};return p.jsx(VT.Provider,{value:{user:e,allUsers:r,register:l,login:c,logout:g,checkVerification:u,giveCoins:f,updateUser:m,loading:i},children:!i&&t})}const ui=()=>$.useContext(VT);function e4(t,e){const[n,r]=$.useState(()=>{try{const s=localStorage.getItem(t);if(s!==null)return JSON.parse(s)}catch(s){console.error(`Error reading localStorage key "${t}":`,s)}return e});return $.useEffect(()=>{try{localStorage.setItem(t,JSON.stringify(n))}catch(s){console.error(`Error setting localStorage key "${t}":`,s)}},[t,n]),[n,r]}const MT=$.createContext(),ic={manageInfo:!0,manageMembers:!1,deleteMessages:!1};function t4({children:t}){const{user:e}=ui(),[n,r]=$.useState([]),[s,i]=$.useState([]),[o,l]=e4("activeChatId",null),[c,u]=$.useState(o),[f,g]=$.useState([]),[m,x]=$.useState([]),k=z=>{u(z),l(z)};$.useEffect(()=>{if(!e){r([]);return}const z=Ki(Jt(Ce,"chats"),_u("participants","array-contains",e.id));return kc(z,Q=>{const Z=Q.docs.map(P=>({id:P.id,...P.data()}));r(Z)})},[e]),$.useEffect(()=>{if(!c){g([]);return}const z=Ki(Jt(Ce,`chats/${c}/messages`),YN("timestamp","asc"));return kc(z,Q=>{const Z=Q.docs.map(P=>({id:P.id,...P.data()}));g(Z)})},[c]),$.useEffect(()=>{if(!e){i([]);return}const z=Ki(Jt(Ce,"chats"),_u("type","in",["group","channel"]));return kc(z,Q=>{const Z=Q.docs.map(P=>({id:P.id,...P.data()})).filter(P=>{var B;return!((B=P.participants)!=null&&B.includes(e.id))});i(Z)})},[e]);const b=z=>n.find(H=>H.id===z)||s.find(H=>H.id===z),V=z=>{if(!e||!z)return{isOwner:!1,isAdmin:!1,canManageInfo:!1,canManageMembers:!1,canDeleteMessages:!1};const H=z.ownerId===e.id,Q=Array.isArray(z.adminIds)?z.adminIds:[z.ownerId].filter(Boolean),Z={...ic,...z.adminPermissions||{}},P=Q.includes(e.id);return{isOwner:H,isAdmin:P,canManageInfo:H||P&&Z.manageInfo,canManageMembers:H||P&&Z.manageMembers,canDeleteMessages:H||P&&Z.deleteMessages}},T=async z=>{if(!e)return;const H=n.find(P=>P.type==="dm"&&P.participants.includes(z.id));if(H){k(H.id);return}const Q={type:"dm",name:z.username,participants:[e.id,z.id],lastMessage:null,createdAt:On()},Z=await ra(Jt(Ce,"chats"),Q);k(Z.id)},_=async(z,H)=>{const Q=[...new Set([...H||[],e.id])],Z={type:"group",name:z,participants:Q,ownerId:e.id,adminIds:[e.id],adminPermissions:ic,lastMessage:"Группа создана",createdAt:On()},P=await ra(Jt(Ce,"chats"),Z);k(P.id)},E=async(z,H)=>{const Q=[...new Set([...H||[],e.id])],Z={type:"channel",name:z,participants:Q,ownerId:e.id,adminIds:[e.id],adminPermissions:ic,lastMessage:"Канал создан",createdAt:On()},P=await ra(Jt(Ce,"chats"),Z);k(P.id)},N=async(z,H,Q="text",Z={})=>{if(!e||!z)return;const P={chatId:z,text:H,senderId:e.id,senderName:e.username,type:Q,metadata:Z,timestamp:On()};await ra(Jt(Ce,`chats/${z}/messages`),P),await en(At(Ce,"chats",z),{lastMessage:H,lastUpdated:On()})},j=async(z,H="text",Q={})=>{c&&await N(c,z,H,Q)},M=(z,H=8e3)=>{const Q=Date.now();x(Z=>[...Z,{id:Q,type:z}]),setTimeout(()=>x(Z=>Z.filter(P=>P.id!==Q)),H)},w=async(z,H)=>{if(!(!e||!c||!z))try{const Q=f.find(K=>K.id===z),Z=Array.isArray(Q==null?void 0:Q.reactions)?Q.reactions:[],B=Z.some(K=>K.emoji===H&&K.userId===e.id)?Z.filter(K=>!(K.emoji===H&&K.userId===e.id)):[...Z,{emoji:H,userId:e.id}];await en(At(Ce,`chats/${c}/messages`,z),{reactions:B})}catch(Q){console.error("Reaction error",Q)}},y=async z=>{if(z)try{const H=Jt(Ce,`chats/${z}/messages`),Z=(await Lf(H)).docs.map(P=>nv(P.ref));await Promise.all(Z),await nv(At(Ce,"chats",z)),c===z&&k(null)}catch(H){console.error("Error deleting chat",H)}},I=async z=>{if(!(!e||!z))try{const H=b(z);if(!H||!["group","channel"].includes(H.type))return;await en(At(Ce,"chats",z),{participants:Y_(e.id),lastUpdated:On()}),await ra(Jt(Ce,`chats/${z}/messages`),{chatId:z,text:`${e.displayName||e.username} присоединился(ась)`,senderId:e.id,senderName:e.username,type:"system",metadata:{},timestamp:On()}),k(z)}catch(H){console.error("Join chat error",H)}},A=async(z,H=[])=>{if(!(!e||!z||H.length===0))try{const Q=b(z);if(!Q)return;const{canManageMembers:Z}=V(Q);if(!Z)return;const P=H.filter(Boolean);if(P.length===0)return;await en(At(Ce,"chats",z),{participants:Y_(...P),lastUpdated:On()})}catch(Q){console.error("Add members error",Q)}},C=async(z,H)=>{if(!(!e||!z||!H))try{const Q=n.find(se=>se.id===z&&se.type==="dm"),Z=b(H);if(!Q||!Z||!["group","channel"].includes(Z.type))return;const{canManageMembers:P}=V(Z);if(!P)return;const B=`${window.location.origin}${window.location.pathname}#invite=${Z.id}`,K=Z.type==="group"?"группу":"канал";await N(z,`Приглашение в ${K} «${Z.name}»`,"invite",{targetChatId:Z.id,targetChatName:Z.name,targetChatType:Z.type,inviteUrl:B,invitedById:e.id,invitedByName:e.displayName||e.username})}catch(Q){console.error("Send invite error",Q)}},R=async(z,H)=>{if(!(!e||!z||!H))try{const Q=b(z);if(!Q||Q.ownerId===H)return;const{canManageMembers:Z}=V(Q);if(!Z&&e.id!==H)return;await en(At(Ce,"chats",z),{participants:KN(H),lastUpdated:On()}),e.id===H&&c===z&&k(null)}catch(Q){console.error("Remove member error",Q)}},S=async(z,H={})=>{if(!(!e||!z||!H))try{const Q=b(z);if(!Q)return;const{isOwner:Z,canManageInfo:P}=V(Q),B={};if(typeof H.name=="string"&&P){const K=H.name.trim();K&&(B.name=K)}if(Z&&Array.isArray(H.adminIds)&&(B.adminIds=[...new Set([Q.ownerId,...H.adminIds.filter(Boolean)])]),Z&&H.adminPermissions&&(B.adminPermissions={...ic,...H.adminPermissions}),Object.keys(B).length===0)return;await en(At(Ce,"chats",z),{...B,lastUpdated:On()})}catch(Q){console.error("Update chat settings error",Q)}};return p.jsx(MT.Provider,{value:{chats:n,availableCommunities:s,activeChatId:c,setActiveChatId:k,messages:f,sendMessage:j,startPrivateChat:T,createGroup:_,createChannel:E,joinChat:I,sendChatInvite:C,addChatMembers:A,removeChatMember:R,updateChatSettings:S,toggleReaction:w,deleteChat:y,activeEffects:m,applyEffect:M},children:t})}const Io=()=>$.useContext(MT);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Se=(t,e)=>{const n=$.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...u},f)=>$.createElement("svg",{ref:f,...n4,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${r4(t)}`,l].join(" "),...u},[...e.map(([g,m])=>$.createElement(g,m)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=Se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=Se("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=Se("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=Se("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=Se("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=Se("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=Se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=Se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=Se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=Se("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=Se("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=Se("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=Se("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=Se("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=Se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=Se("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=Se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=Se("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=Se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=Se("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=Se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=Se("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=Se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=Se("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=Se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=Se("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function T4(){const[t,e]=$.useState(!1),[n,r]=$.useState(!1),[s,i]=$.useState(""),[o,l]=$.useState(""),[c,u]=$.useState(""),[f,g]=$.useState(""),[m,x]=$.useState(""),[k,b]=$.useState(""),{login:V,register:T,checkVerification:_,logout:E,user:N}=ui();$.useEffect(()=>{N&&!N.isVerified?r(!0):r(!1)},[N]);const j=async y=>{if(y.preventDefault(),b(""),t){if(!/^[a-zA-Z0-9_]+$/.test(s)){b("Юзернейм может содержать только латинские буквы, цифры и подчеркивание.");return}const I=await T(s,f,m,c,o);I.error&&b(I.error)}else{const I=await V(c,f);I.error&&b(I.error)}},M=async()=>{await _()||b("Письмо еще не подтверждено. Проверьте почту и папку Спам!")},w=async()=>{await E(),r(!1),e(!1)};return n?p.jsx("div",{className:"flex min-h-screen bg-[#09090b] text-zinc-100 font-sans",children:p.jsx("div",{className:"flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center",children:p.jsxs("div",{className:"p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse",children:p.jsx(u4,{className:"w-10 h-10 text-emerald-500"})}),p.jsx("h2",{className:"text-2xl font-bold",children:"Подтвердите почту"}),p.jsxs("p",{className:"text-sm text-zinc-500",children:["Мы отправили ссылку на ",p.jsx("b",{children:N==null?void 0:N.email}),". Пожалуйста, перейдите по ней, чтобы активировать аккаунт."]}),p.jsxs("div",{className:"space-y-3 pt-4",children:[p.jsxs("button",{onClick:M,className:"w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all",children:[p.jsx(FT,{className:"w-4 h-4"}),"Я подтвердил! Войти"]}),p.jsx("button",{onClick:w,className:"w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all",children:"Отмена / Выйти"}),p.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-widest pt-2",children:"Не забудьте проверить папку Спам"})]})]})})}):p.jsxs("div",{className:"min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:[p.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"}),p.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"1s"}})]}),p.jsx("div",{className:"w-full max-w-md animate-slide-in-up",children:p.jsxs("div",{className:"bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10",children:[p.jsxs("div",{className:"flex flex-col items-center mb-8",children:[p.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500",children:p.jsx(I4,{className:"w-10 h-10 text-emerald-500 fill-emerald-500/20"})}),p.jsx("h1",{className:"text-3xl font-black text-white tracking-tight mb-1",children:"GiftWave"}),p.jsx("p",{className:"text-zinc-500 text-sm font-medium",children:"Новое поколение мессенджеров"})]}),p.jsxs("div",{className:"mb-6 text-center",children:[p.jsx("h2",{className:"text-xl font-semibold",children:t?"Создать аккаунт":"С возвращением"}),p.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:t?"Используйте реальную почту для активации":"Введите данные для входа"})]}),p.jsxs("form",{onSubmit:j,className:"space-y-4",children:[t&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Имя (Отображаемое)"}),p.jsx("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:"Иван Иванов",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:s,onChange:y=>i(y.target.value),placeholder:"ivan_dev",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0}),p.jsx("p",{className:"text-[10px] text-zinc-500 mt-1 ml-1",children:"Только латиница, цифры и _"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Email"}),p.jsx("input",{type:"email",value:c,onChange:y=>u(y.target.value),placeholder:"alex@example.com",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Пароль"}),p.jsxs("div",{className:"relative",children:[p.jsx(l4,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600"}),p.jsx("input",{type:"password",value:f,onChange:y=>g(y.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0,minLength:6})]})]}),k&&p.jsx("p",{className:"text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center",children:k}),p.jsx("button",{type:"submit",className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20",children:t?"Отправить ссылку активации":"Войти в систему"})]}),p.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800 text-center",children:p.jsx("button",{onClick:()=>e(!t),className:"text-sm text-zinc-400 hover:text-emerald-500 transition-colors",children:t?"Уже есть аккаунт? Войти":"Нет аккаунта? Создать сейчас"})})]})})]})}function ks({isOpen:t,onClose:e,title:n,children:r}){return $.useEffect(()=>{const s=i=>{i.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[t,e]),t?Ow.createPortal(p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:p.jsxs("div",{className:"relative w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-zinc-800",children:[p.jsx("h3",{className:"text-lg font-semibold text-zinc-100",children:n}),p.jsx("button",{onClick:e,className:"p-1 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(jm,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"p-4",children:r})]})}),document.body):null}const Ff=async(t,e="auto")=>{var r;const n=new FormData;n.append("file",t),n.append("upload_preset","ryestqxz"),n.append("cloud_name","dnrrmyqf5"),console.log(`[Cloudinary] Starting upload... Type: ${e}, File: ${t.name}`);try{const i=await fetch(`https://api.cloudinary.com/v1_1/dnrrmyqf5/${e==="voice"?"video":e}/upload`,{method:"POST",body:n});if(!i.ok){const l=await i.json();throw console.error("[Cloudinary] Error response:",l),new Error(((r=l.error)==null?void 0:r.message)||`Upload failed: ${i.statusText}`)}const o=await i.json();return console.log("[Cloudinary] Upload success:",o.secure_url),o.secure_url}catch(s){throw console.error("[Cloudinary] Network error:",s),alert(`Ошибка загрузки файла: ${s.message}. Проверьте интернет или размер файла.`),s}};function x4(){var No,mi,xr;const{user:t,allUsers:e,logout:n,updateUser:r,giveCoins:s}=ui(),{chats:i,availableCommunities:o,activeChatId:l,setActiveChatId:c,startPrivateChat:u,createGroup:f,createChannel:g,joinChat:m,sendChatInvite:x,removeChatMember:k,updateChatSettings:b,deleteChat:V}=Io(),[T,_]=$.useState(""),[E,N]=$.useState("messages"),[j,M]=$.useState(!1),[w,y]=$.useState(!1),[I,A]=$.useState(!1),[C,R]=$.useState(!1),[S,z]=$.useState(!1),[H,Q]=$.useState(""),[Z,P]=$.useState(100),[B,K]=$.useState(""),[se,he]=$.useState(""),[Xe,ne]=$.useState(t.displayName||""),[te,X]=$.useState(t.username||""),[ae,pe]=$.useState(t.email||""),[Ie,ct]=$.useState(t.phone||""),[Pt,Yn]=$.useState(t.bio||""),[un,An]=$.useState(t.birthday||""),[Ve,Cn]=$.useState(t.nameColor||"#ffffff"),[Er,xo]=$.useState(null),[Ge,rt]=$.useState(!1),[di,So]=$.useState(!1),[vl,Ao]=$.useState(!1),[dn,wl]=$.useState(null),[Co,hi]=$.useState(""),[ko,El]=$.useState([]),[_s,vs]=$.useState({manageInfo:!0,manageMembers:!1,deleteMessages:!1}),kn=(D,ee,ge,ut)=>{const Jn=D%10,bn=D%100;return Jn===1&&bn!==11?ee:Jn>=2&&Jn<=4&&(bn<10||bn>=20)?ge:ut},me=i.find(D=>D.id===dn)||null,fi=((me==null?void 0:me.participants)||[]).map(D=>e.find(ee=>ee.id===D)).filter(Boolean),Rn=(me==null?void 0:me.adminIds)||[me==null?void 0:me.ownerId].filter(Boolean),Ro={manageInfo:((No=me==null?void 0:me.adminPermissions)==null?void 0:No.manageInfo)??!0,manageMembers:((mi=me==null?void 0:me.adminPermissions)==null?void 0:mi.manageMembers)??!1,deleteMessages:((xr=me==null?void 0:me.adminPermissions)==null?void 0:xr.deleteMessages)??!1},hn=(me==null?void 0:me.ownerId)===t.id,bo=Rn.includes(t.id),Ir=hn||bo&&Ro.manageInfo,Po=hn||bo&&Ro.manageMembers,st=i.filter(D=>D.type==="dm"),Il=D=>{var ge;const ee=(ge=D.participants)==null?void 0:ge.find(ut=>ut!==t.id);return e.find(ut=>ut.id===ee)},ws=D=>{var ee,ge,ut;wl(D.id),hi(D.name||""),El(D.adminIds||[D.ownerId].filter(Boolean)),vs({manageInfo:((ee=D.adminPermissions)==null?void 0:ee.manageInfo)??!0,manageMembers:((ge=D.adminPermissions)==null?void 0:ge.manageMembers)??!1,deleteMessages:((ut=D.adminPermissions)==null?void 0:ut.deleteMessages)??!1}),So(!0)},Es=D=>{!hn||!me||D!==me.ownerId&&El(ee=>ee.includes(D)?ee.filter(ge=>ge!==D):[...ee,D])},pd=async D=>{if(D.preventDefault(),!me)return;const ee={};Ir&&(ee.name=Co),hn&&(ee.adminIds=ko,ee.adminPermissions=_s),await b(dn,ee),So(!1)},md=async D=>{dn&&(await x(D,dn),Ao(!1))},Tr=async D=>{if(D.preventDefault(),!Ge){rt(!0);try{let ee=t.avatar;Er&&(ee=await Ff(Er,"image"));const ge=await r({displayName:Xe,username:te.toLowerCase().trim(),email:ae,avatar:ee,bio:Pt,birthday:un,nameColor:Ve});ge!=null&&ge.error?alert(ge.error):(R(!1),xo(null))}catch(ee){console.error("Profile update error:",ee),alert("Ошибка при обновлении профиля: "+ee.message)}finally{rt(!1)}}},gd=e.filter(D=>{var ee;return D.id!==t.id&&(D.username.toLowerCase().includes(T.toLowerCase())||((ee=D.displayName)==null?void 0:ee.toLowerCase().includes(T.toLowerCase())))}),yd=D=>{D.preventDefault(),H&&Z&&(s(H,Z),alert("Монеты успешно выданы!"))},pi=D=>{D.preventDefault(),B.trim()&&(f(B,[t.id]),K(""),y(!1))},Tl=D=>{D.preventDefault(),se.trim()&&(g(se,[t.id]),he(""),A(!1))};return p.jsxs("div",{className:"w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50",children:[p.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md",children:[p.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[p.jsxs("div",{className:"relative shrink-0",children:[p.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-xl bg-zinc-800 object-cover",alt:"me"}),p.jsx("div",{className:"absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"flex-1 min-w-0 pr-2",children:[p.jsxs("div",{className:"font-semibold text-sm truncate flex items-center gap-1",style:{color:t.nameColor||"#e4e4e7"},children:[p.jsx("span",{className:"truncate",children:t.displayName||t.username}),t.role==="admin"&&p.jsx(m4,{className:"w-3 h-3 text-red-500 shrink-0",title:"Admin"})]}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",t.username]}),p.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter",children:[p.jsx(i4,{className:"w-2.5 h-2.5"}),t.coins," credits"]})]})]}),p.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors",children:p.jsx(c4,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"p-4",children:p.jsxs("div",{className:"relative group",children:[p.jsx(UT,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors"}),p.jsx("input",{type:"text",value:T,onChange:D=>_(D.target.value),placeholder:"Поиск людей...",className:"w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"})]})}),p.jsx("div",{className:"flex px-4 mb-2 gap-1",children:[{id:"messages",icon:d4,label:"Чаты"},{id:"groups",icon:w4,label:"Группы"},{id:"channels",icon:a4,label:"Каналы"}].map(D=>p.jsxs("button",{onClick:()=>N(D.id),className:`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${E===D.id?"bg-emerald-500/10 text-emerald-500":"text-zinc-500 hover:bg-zinc-800/50"}`,children:[p.jsx(D.icon,{className:"w-4 h-4 mb-1"}),p.jsx("span",{className:"text-[10px] font-medium",children:D.label})]},D.id))}),p.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:T?p.jsxs("div",{className:"p-2 space-y-1",children:[p.jsx("div",{className:"px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",children:"Результаты поиска"}),gd.map(D=>p.jsxs("button",{onClick:()=>{u(D),_("")},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group",children:[p.jsx("img",{src:D.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:D.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium truncate transition-colors",style:{color:D.nameColor||"#e4e4e7"},children:D.displayName||D.username}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",D.username]}),p.jsx("div",{className:"text-xs text-zinc-500 truncate w-32",children:D.bio||"Нет описания"})]})]},D.id))]}):p.jsxs("div",{className:"p-2 space-y-1",children:[i.filter(D=>E==="messages"&&D.type==="dm"||E==="groups"&&D.type==="group"||E==="channels"&&D.type==="channel").map(D=>{var Al,Mo,Lo,jo;const ee=(Al=D.participants)==null?void 0:Al.find(xs=>xs!==t.id),ge=D.type==="dm"?e.find(xs=>xs.id===ee):null,ut=ge?ge.displayName||ge.username:D.name,Jn=ge!=null&&ge.username?`@${ge.username}`:"",bn=ge?ge.avatar:null,xl=(ge==null?void 0:ge.lastSeen)==="online",gi=((Mo=D.participants)==null?void 0:Mo.length)||0,Sl=D.type==="group"?`${gi} ${kn(gi,"участник","участника","участников")}`:`${gi} ${kn(gi,"подписчик","подписчика","подписчиков")}`,_d=D.adminIds||[D.ownerId].filter(Boolean),Is=D.ownerId===t.id,Do=_d.includes(t.id),Oo=Is||Do&&(((Lo=D.adminPermissions)==null?void 0:Lo.manageInfo)??!0),Ts=Is||Do&&(((jo=D.adminPermissions)==null?void 0:jo.manageMembers)??!1),Xn=D.type!=="dm"&&(Oo||Ts),Vo=D.type!=="dm"&&(D.ownerId===t.id||t.role==="admin");return p.jsxs("div",{className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${l===D.id?"bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]":"hover:bg-zinc-800/50 border border-transparent"}`,children:[p.jsxs("button",{onClick:()=>c(D.id),className:"flex items-center gap-3 flex-1 min-w-0 text-left",children:[p.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden",children:[bn?p.jsx("img",{src:bn,className:"w-full h-full object-cover",alt:"avatar"}):ut[0].toUpperCase(),D.type==="dm"&&xl&&p.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),p.jsxs("div",{className:"text-left flex-1 min-w-0",children:[p.jsx("div",{className:"text-sm font-medium truncate",style:{color:(ge==null?void 0:ge.nameColor)||"#e4e4e7"},children:ut}),p.jsx("div",{className:"text-xs text-zinc-500 truncate",children:D.type==="dm"?Jn||D.lastMessage||"Нет сообщений":Sl})]})]}),Xn&&p.jsx("button",{onClick:()=>ws(D),className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-emerald-400 hover:bg-emerald-500/10",children:"Управление"}),Vo&&p.jsx("button",{onClick:()=>{window.confirm("Удалить этот чат вместе со всеми сообщениями?")&&V(D.id)},className:"ml-1 px-2 py-1 rounded-lg text-[10px] text-red-400 hover:bg-red-500/10",children:"Удалить"})]},D.id)}),E!=="messages"&&o.filter(D=>E==="groups"&&D.type==="group"||E==="channels"&&D.type==="channel").map(D=>{var ee,ge,ut;return p.jsx("div",{className:"w-full p-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30",children:p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:D.name}),p.jsxs("div",{className:"text-xs text-zinc-500",children:[((ee=D.participants)==null?void 0:ee.length)||0," ",D.type==="group"?kn(((ge=D.participants)==null?void 0:ge.length)||0,"участник","участника","участников"):kn(((ut=D.participants)==null?void 0:ut.length)||0,"подписчик","подписчика","подписчиков")]})]}),p.jsxs("button",{onClick:()=>m(D.id),className:"px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-1",children:[p.jsx(v4,{className:"w-3.5 h-3.5"}),"Вступить"]})]})},D.id)}),E!=="messages"&&p.jsxs("button",{onClick:()=>{E==="groups"&&y(!0),E==="channels"&&A(!0)},className:"w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4",children:[p.jsx(yv,{className:"w-5 h-5"}),p.jsx("span",{className:"text-sm font-semibold",children:E==="groups"?"Создать группу":"Создать канал"})]})]})}),p.jsxs("div",{className:"p-4 border-t border-zinc-800/50 space-y-1",children:[t.role==="admin"&&p.jsxs("button",{onClick:()=>z(!0),className:"w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium",children:[p.jsx(_4,{className:"w-4 h-4"}),"Панель разработчика"]}),p.jsxs("button",{onClick:()=>R(!0),className:"w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium",children:[p.jsx(p4,{className:"w-4 h-4"}),"Настройки профиля"]})]}),p.jsx(ks,{isOpen:S,onClose:()=>z(!1),title:"Console: Developer Panel",children:p.jsxs("form",{onSubmit:yd,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Выбрать пользователя"}),p.jsxs("select",{value:H,onChange:D=>Q(D.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0,children:[p.jsx("option",{value:"",children:"Выберите аккаунт"}),e.map(D=>p.jsxs("option",{value:D.id,children:[D.username," (ID: ",D.id,")"]},D.id))]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Количество монет"}),p.jsx("input",{type:"number",value:Z,onChange:D=>P(D.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs",children:"Выдать валюту"})]})}),p.jsx(ks,{isOpen:j,onClose:()=>M(!1),title:"Найти собеседника",children:p.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:e.filter(D=>D.id!==t.id).map(D=>p.jsxs("button",{onClick:()=>{u(D),M(!1)},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all",children:[p.jsx("img",{src:D.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:D.username}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"text-sm font-medium",style:{color:D.nameColor||"#e4e4e7"},children:D.displayName||D.username}),p.jsxs("div",{className:"text-[10px] text-zinc-500",children:["@",D.username]}),p.jsx("div",{className:"text-xs text-zinc-500",children:D.bio||"Нет описания"})]})]},D.id))})}),p.jsx(ks,{isOpen:w,onClose:()=>y(!1),title:"Создать группу",children:p.jsxs("form",{onSubmit:pi,className:"space-y-4",children:[p.jsx("input",{type:"text",value:B,onChange:D=>K(D.target.value),placeholder:"Название группы",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(ks,{isOpen:I,onClose:()=>A(!1),title:"Создать канал",children:p.jsxs("form",{onSubmit:Tl,className:"space-y-4",children:[p.jsx("input",{type:"text",value:se,onChange:D=>he(D.target.value),placeholder:"Название канала",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),p.jsx(ks,{isOpen:di,onClose:()=>So(!1),title:(me==null?void 0:me.type)==="group"?"Управление группой":"Управление каналом",children:me?p.jsxs("form",{onSubmit:pd,className:"space-y-4",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Название"}),p.jsx("input",{type:"text",value:Co,onChange:D=>hi(D.target.value),disabled:!Ir,className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none disabled:opacity-50"})]}),hn&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Админы"}),p.jsx("div",{className:"max-h-36 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:fi.map(D=>p.jsxs("button",{type:"button",onClick:()=>Es(D.id),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs ${ko.includes(D.id)?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300":"border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`,children:[p.jsx("span",{children:D.displayName||D.username}),p.jsx("span",{children:D.id===me.ownerId?"Владелец":ko.includes(D.id)?"Админ":"Участник"})]},D.id))})]}),hn&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Права админов"}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Редактирование информации"}),p.jsx("input",{type:"checkbox",checked:_s.manageInfo,onChange:D=>vs(ee=>({...ee,manageInfo:D.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Управление участниками"}),p.jsx("input",{type:"checkbox",checked:_s.manageMembers,onChange:D=>vs(ee=>({...ee,manageMembers:D.target.checked}))})]}),p.jsxs("label",{className:"flex items-center justify-between text-xs text-zinc-300",children:[p.jsx("span",{children:"Удаление сообщений"}),p.jsx("input",{type:"checkbox",checked:_s.deleteMessages,onChange:D=>vs(ee=>({...ee,deleteMessages:D.target.checked}))})]})]})]}),Po&&p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Приглашения"}),p.jsxs("button",{type:"button",onClick:()=>Ao(!0),className:"w-full px-3 py-2.5 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 flex items-center justify-center gap-2",children:[p.jsx(zT,{className:"w-3.5 h-3.5"}),"Отправить приглашение"]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Участники"}),p.jsx("div",{className:"max-h-40 overflow-y-auto custom-scrollbar space-y-1 pr-1",children:fi.map(D=>p.jsxs("div",{className:"flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs",children:[p.jsx("span",{className:"text-zinc-200 truncate pr-2",children:D.displayName||D.username}),p.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[D.id===me.ownerId&&p.jsx("span",{className:"text-amber-500",children:"Owner"}),D.id!==me.ownerId&&Rn.includes(D.id)&&p.jsx("span",{className:"text-emerald-500",children:"Admin"}),Po&&D.id!==me.ownerId&&p.jsx("button",{type:"button",onClick:()=>k(dn,D.id),className:"text-red-400 hover:text-red-300",children:"Удалить"})]})]},D.id))})]}),p.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium",children:"Сохранить"})]}):null}),p.jsx(ks,{isOpen:vl,onClose:()=>Ao(!1),title:"Отправить приглашение",children:p.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:[st.length===0&&p.jsx("div",{className:"text-xs text-zinc-500 px-1",children:"Нет личных чатов для отправки приглашения"}),st.map(D=>{const ee=Il(D);return p.jsxs("div",{className:"flex items-center justify-between gap-2 p-2 rounded-lg border border-zinc-800 bg-zinc-900/40",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-xs truncate",style:{color:(ee==null?void 0:ee.nameColor)||"#e4e4e7"},children:(ee==null?void 0:ee.displayName)||(ee==null?void 0:ee.username)||"Пользователь"}),p.jsxs("div",{className:"text-[10px] text-zinc-500 truncate",children:["@",(ee==null?void 0:ee.username)||"unknown"]})]}),p.jsx("button",{type:"button",onClick:()=>md(D.id),className:"px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/10",children:"Отправить"})]},D.id)})]})}),p.jsx(ks,{isOpen:C,onClose:()=>R(!1),title:"Настройки профиля",children:p.jsxs("form",{onSubmit:Tr,className:"space-y-4",children:[p.jsxs("div",{className:"flex flex-col items-center gap-3 mb-4",children:[p.jsxs("div",{className:"relative group",children:[p.jsx("img",{src:Er?URL.createObjectURL(Er):t.avatar,className:"w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800",alt:"Avatar"}),p.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity",children:[p.jsx(yv,{className:"w-8 h-8 text-white"}),p.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:D=>xo(D.target.files[0])})]})]}),p.jsx("p",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-widest",children:"Нажмите, чтобы изменить фото"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Отображаемое имя (русский доступен)"}),p.jsx("input",{type:"text",value:Xe,onChange:D=>ne(D.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Цвет имени"}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("input",{type:"color",value:Ve,onChange:D=>Cn(D.target.value),className:"w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer"}),p.jsx("span",{className:"text-xs text-zinc-400",children:Ve})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Дата рождения"}),p.jsx("input",{type:"date",value:un,onChange:D=>An(D.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"О себе"}),p.jsx("textarea",{value:Pt,onChange:D=>Yn(D.target.value),rows:3,className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50 resize-none text-sm",placeholder:"Расскажите немного о себе..."})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Юзернейм (@username)"}),p.jsx("input",{type:"text",value:te,onChange:D=>X(D.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-xs text-zinc-500",children:"Email"}),p.jsx("input",{type:"email",value:ae,onChange:D=>pe(D.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"})]}),p.jsx("button",{type:"submit",disabled:Ge,className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2",children:Ge?p.jsxs(p.Fragment,{children:[p.jsx(FT,{className:"w-4 h-4 animate-spin"}),"Загрузка..."]}):p.jsxs(p.Fragment,{children:[p.jsx(s4,{className:"w-4 h-4"}),"Сохранить изменения"]})})]})})]})}const S4=[{id:"hearts",name:"Дождь из сердец",description:"Наполните чат любовью и нежностью",price:150,effect:"hearts",icon:p.jsx(jT,{className:"w-5 h-5 text-rose-500 fill-rose-500"})},{id:"fire",name:"Пламя страсти",description:"Горячий эффект для ярких эмоций",price:300,effect:"fire",icon:p.jsx(o4,{className:"w-5 h-5 text-orange-500 fill-orange-500"})},{id:"stars",name:"Звездная пыль",description:"Волшебное сияние ночного неба",price:500,effect:"stars",icon:p.jsx(g4,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"})}];function A4({onSelect:t,onClose:e}){return p.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[p.jsx("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest",children:"Premium Store"}),p.jsx("button",{onClick:e,className:"p-1 hover:bg-zinc-800 rounded-lg transition-colors",children:p.jsx(jm,{className:"w-4 h-4 text-zinc-600"})})]}),p.jsx("div",{className:"space-y-2",children:S4.map(n=>p.jsxs("button",{onClick:()=>t(n),className:"w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group",children:[p.jsx("div",{className:"p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform",children:n.icon}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"text-sm font-semibold text-zinc-100",children:n.name}),p.jsx("div",{className:"text-[10px] text-zinc-500 leading-tight",children:n.description})]}),p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("div",{className:"text-amber-500 font-bold text-sm",children:n.price}),p.jsx("div",{className:"text-[8px] text-zinc-600 uppercase font-black",children:"Credits"})]})]},n.id))})]})}function C4(){const[t,e]=$.useState(""),[n,r]=$.useState(!1),[s,i]=$.useState(!1),[o,l]=$.useState(!1),{user:c,updateUser:u}=ui(),{sendMessage:f,applyEffect:g,activeChatId:m}=Io(),x=$.useRef(),k=$.useRef(null),b=$.useRef([]),V=j=>{j.preventDefault(),t.trim()&&!o&&(f(t),e(""))},T=async j=>{const M=j.target.files[0];if(!M||!m)return;const w=30,y=w*1024*1024;if(M.size>y){alert(`Файл слишком большой. Максимальный размер: ${w}MB.`),j.target.value="";return}l(!0);try{const I=M.type.startsWith("image/")?"image":M.type.startsWith("video/")?"video":"file",A=await Ff(M,I==="video"?"video":"image");await f(M.name,I,{url:A,fileName:M.name,fileSize:M.size})}catch(I){alert("Ошибка загрузки: "+I.message)}finally{l(!1),x.current.value=""}},_=async()=>{try{const j=await navigator.mediaDevices.getUserMedia({audio:!0});k.current=new MediaRecorder(j),b.current=[],k.current.ondataavailable=M=>{b.current.push(M.data)},k.current.onstop=async()=>{const M=new Blob(b.current,{type:"audio/webm"}),w=new File([M],`voice_${Date.now()}.webm`,{type:"audio/webm"});l(!0);try{const y=await Ff(w,"video");await f("Голосовое сообщение","voice",{url:y,duration:0})}catch(y){alert("Ошибка отправки голосового: "+y.message)}finally{l(!1)}},k.current.start(),i(!0)}catch(j){alert("Доступ к микрофону отклонен: "+j.message)}},E=()=>{k.current&&s&&(k.current.stop(),i(!1),k.current.stream.getTracks().forEach(j=>j.stop()))},N=async j=>{if(c.coins>=j.price)try{const M=c.coins-j.price,w=await u({coins:M});if(w!=null&&w.error){alert(w.error);return}await f(`🎁 Отправил подарок: ${j.name}! ✨`,"gift",{giftId:j.id,giftName:j.name,effect:j.effect}),g(j.effect),r(!1)}catch(M){console.error("Gift error:",M),alert("Ошибка при покупке подарка: "+M.message)}else alert(`Недостаточно монет! Стоимость подарка: ${j.price}, у вас: ${c.coins}`)};return p.jsxs("div",{className:"relative",children:[n&&p.jsx("div",{className:"absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200",children:p.jsx(A4,{onSelect:N,onClose:()=>r(!1)})}),p.jsxs("div",{className:"flex flex-col gap-2",children:[o&&p.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse",children:[p.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-bounce"}),p.jsx("span",{className:"text-xs text-zinc-400",children:"Отправка файла..."})]}),p.jsxs("form",{onSubmit:V,className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all",children:[p.jsx("input",{type:"file",ref:x,onChange:T,className:"hidden",accept:"image/*,video/*"}),p.jsx("button",{type:"button",onClick:()=>x.current.click(),className:"p-2 text-zinc-500 hover:text-zinc-200 transition-colors",children:p.jsx(f4,{className:"w-5 h-5"})}),p.jsx("input",{type:"text",value:t,onChange:j=>e(j.target.value),placeholder:s?"Идет запись голоса...":"Напишите сообщение...",disabled:s,className:"flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("button",{type:"button",onClick:s?E:_,className:`p-2 rounded-xl transition-all ${s?"bg-red-500 text-white animate-pulse":"text-zinc-500 hover:text-zinc-200"}`,children:s?p.jsx(y4,{className:"w-5 h-5"}):p.jsx(h4,{className:"w-5 h-5"})}),p.jsx("button",{type:"button",onClick:()=>r(!n),className:`p-2 rounded-xl transition-all ${n?"bg-amber-500 text-black shadow-lg shadow-amber-500/20":"text-amber-500 hover:bg-amber-500/10"}`,children:p.jsx(LT,{className:"w-5 h-5"})}),p.jsx("button",{type:"submit",disabled:!t.trim()||o,className:"p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20",children:p.jsx(zT,{className:"w-5 h-5"})})]})]})]})]})}function k4(){var Q,Z;const{user:t,allUsers:e}=ui(),{messages:n,chats:r,activeChatId:s,setActiveChatId:i,applyEffect:o,activeEffects:l,sendMessage:c,toggleReaction:u,joinChat:f}=Io(),g=$.useRef(),m=$.useRef(new Set),[x,k]=$.useState(!1),[b,V]=$.useState(""),[T,_]=$.useState(!1),E=r.find(P=>P.id===s),N=(E==null?void 0:E.type)==="dm",j=(Q=E==null?void 0:E.participants)==null?void 0:Q.find(P=>P!==t.id),M=e.find(P=>P.id===j),w=N&&M?M.displayName||M.username:(E==null?void 0:E.name)||"Чат",y=N&&M!=null&&M.username?`@${M.username}`:"",I=N&&(M==null?void 0:M.nameColor)||"#e4e4e7",A=M?M.avatar:null,C=(M==null?void 0:M.lastSeen)==="online",R=((Z=E==null?void 0:E.participants)==null?void 0:Z.length)||0,S=N?C?"В сети":M!=null&&M.lastSeen?`Был(а) ${new Date(M.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Не в сети":(E==null?void 0:E.type)==="group"?`${R} участников`:`${R} подписчиков`,z=$.useMemo(()=>{const P=n.filter(B=>B.type!=="call-signal");return b?P.filter(B=>{var K;return(K=B.text)==null?void 0:K.toLowerCase().includes(b.toLowerCase())}):P},[n,b]),H=async P=>{const B=`call_${Date.now()}_${t.id}`,K=P==="video"?"📹":"📞",se=P==="video"?"видеозвонок":"голосовой звонок";try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(X=>X.stop())}catch{alert("Нет доступа к микрофону. Разрешите микрофон в браузере, чтобы звонить.");return}const he=r.find(te=>te.id===s);if(!he||he.type!=="dm")return;const Xe=he.participants.find(te=>te!==t.id);e.find(te=>te.id===Xe)&&await c(`${K} ${t.displayName} начал ${se}!`,"call",{callId:B,callType:P,callerId:t.id,callerName:t.displayName,targetId:Xe,timestamp:Date.now(),status:"ringing",startedAt:Date.now(),chatId:s})};return $.useEffect(()=>{if(!(!n||n.length===0))try{const P=Date.now();n.forEach(B=>{var he;if(B.type!=="gift"||!B.timestamp||m.current.has(B.id))return;const K=B.timestamp&&typeof B.timestamp.toMillis=="function"?B.timestamp.toMillis():B.timestamp?new Date(B.timestamp).getTime():Date.now();P-K<6e4&&((he=B.metadata)!=null&&he.effect)&&(m.current.add(B.id),o(B.metadata.effect))})}catch(P){console.error("Gift sync error:",P)}},[n,o]),$.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[n]),s?p.jsxs("div",{className:"h-full flex flex-col bg-[#09090b] relative",children:[p.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40",children:[p.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p.jsx("button",{onClick:()=>i(null),className:"p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden",children:p.jsx(gv,{className:"w-5 h-5"})}),p.jsx("div",{onClick:()=>_(!0),className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform",children:A?p.jsx("img",{src:A,className:"w-full h-full object-cover",alt:"avatar"}):w?w[0].toUpperCase():"?"}),p.jsxs("div",{onClick:()=>_(!0),className:"min-w-0 cursor-pointer",children:[p.jsx("div",{className:"text-sm font-semibold truncate hover:text-emerald-500 transition-colors",style:{color:I},children:w}),N&&y&&p.jsx("div",{className:"text-[10px] text-zinc-500 truncate",children:y}),p.jsx("div",{className:`text-[10px] flex items-center gap-1 ${N&&C?"text-emerald-500":"text-zinc-500"}`,children:N&&C?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"}),S]}):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-zinc-500 rounded-full"}),S]})})]})]}),p.jsxs("div",{className:"flex items-center gap-1",children:[x?p.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2",children:[p.jsx("input",{autoFocus:!0,type:"text",placeholder:"Поиск...",value:b,onChange:P=>V(P.target.value),className:"bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"}),p.jsx("button",{onClick:()=>{k(!1),V("")},className:"text-zinc-500 hover:text-zinc-100 text-[10px]",children:"✕"})]}):p.jsx("button",{onClick:()=>k(!0),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(UT,{className:"w-4 h-4"})}),N&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>H("audio"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(Ns,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>H("video"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:p.jsx(E4,{className:"w-4 h-4"})})]})]})]}),T&&p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",children:p.jsxs("div",{className:"w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in",children:[p.jsx("div",{className:"h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900"}),p.jsxs("div",{className:"px-6 pb-6 -mt-12 flex flex-col items-center",children:[p.jsx("div",{className:"w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3",children:A?p.jsx("img",{src:A,className:"w-full h-full object-cover"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500",children:w[0].toUpperCase()})}),p.jsx("h3",{className:"text-lg font-bold",style:{color:I},children:w}),N&&y&&p.jsx("p",{className:"text-xs text-zinc-400 mb-1",children:y}),p.jsx("p",{className:"text-xs text-zinc-500 mb-4",children:S}),p.jsxs("div",{className:"w-full space-y-3",children:[p.jsxs("div",{className:"p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"О себе"}),p.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:N?(M==null?void 0:M.bio)||'Этот пользователь не заполнил раздел "О себе"':"Информация о сообществе доступна в управлении чатом."})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:N?"Монеты":"Участники"}),p.jsx("div",{className:"text-sm font-bold text-emerald-500",children:N?`🪙 ${(M==null?void 0:M.coins)||0}`:R})]}),p.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:N?"Ранг":"Тип"}),p.jsx("div",{className:"text-sm font-bold text-amber-500 uppercase",children:N?(M==null?void 0:M.role)||"user":E==null?void 0:E.type})]})]})]}),p.jsx("button",{onClick:()=>_(!1),className:"w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors",children:"Закрыть"})]})]})}),p.jsx("div",{ref:g,className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10",children:z.map(P=>{var he,Xe,ne,te,X,ae,pe,Ie,ct,Pt,Yn,un,An;const B=P.senderId===t.id,K=P.type==="system",se=(P.reactions||[]).reduce((Ve,Cn)=>(Ve[Cn.emoji]=(Ve[Cn.emoji]||0)+1,Ve),{});return K?p.jsx("div",{className:"flex justify-center my-2",children:p.jsx("div",{className:"px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30",children:P.text})},P.id):p.jsx("div",{className:`flex ${B?"justify-end":"justify-start"} animate-message-pop`,children:p.jsxs("div",{className:`flex flex-col max-w-[85%] ${B?"items-end":"items-start"} group mb-1`,children:[p.jsxs("div",{className:`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${P.type==="gift"?"gift-bubble border border-zinc-800/50 py-3":P.type==="call"?"bg-blue-600/20 border border-blue-500/30 text-blue-300":P.type==="invite"?"bg-violet-600/15 border border-violet-500/30 text-violet-100":P.type==="image"||P.type==="video"?"p-1.5 bg-zinc-800/80 border border-zinc-700/30":B?"bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10":"bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30"}`,children:[P.type==="gift"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30",children:p.jsx(LT,{className:"w-6 h-6 text-emerald-500/80",strokeWidth:1.5})}),p.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60",children:"Особое внимание"}),p.jsx("div",{className:"text-zinc-100 font-light tracking-wide",children:P.text})]}),P.type==="call"&&p.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[p.jsx("div",{className:"text-2xl mb-1",children:((he=P.text)==null?void 0:he.split(" ")[0])||(((Xe=P.metadata)==null?void 0:Xe.callType)==="video"?"📹":"📞")}),p.jsx("div",{className:"text-sm font-medium",children:((ne=P.metadata)==null?void 0:ne.status)==="ringing"&&((te=P.metadata)==null?void 0:te.callerId)===t.id?"Вы звоните...":((X=P.metadata)==null?void 0:X.status)==="ringing"?"Вам звонят...":((ae=P.metadata)==null?void 0:ae.status)==="accepted"?"Звонок принят":((pe=P.metadata)==null?void 0:pe.status)==="declined"?"Звонок отклонен":(Ie=P.text)==null?void 0:Ie.replace(/^[📹📞]\s*/,"")}),p.jsx("div",{className:"text-xs opacity-50",children:((ct=P.metadata)==null?void 0:ct.status)==="ringing"?"Ожидание ответа":"История звонка"})]}),P.type==="image"&&p.jsx("img",{src:P.metadata.url,alt:"attachment",className:"max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(P.metadata.url,"_blank")}),P.type==="video"&&p.jsx("video",{src:P.metadata.url,controls:!0,className:"max-w-full rounded-xl overflow-hidden"}),P.type==="voice"&&p.jsxs("div",{className:"flex items-center gap-3 py-1 min-w-[200px]",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",children:p.jsx(Ns,{className:"w-4 h-4 text-emerald-500"})}),p.jsx("audio",{src:P.metadata.url,controls:!0,className:"h-8 w-full custom-audio-player"})]}),P.type==="invite"&&p.jsxs("div",{className:"space-y-2 min-w-[220px]",children:[p.jsxs("div",{className:"text-xs text-violet-200/80",children:[((Pt=P.metadata)==null?void 0:Pt.invitedByName)||P.senderName," приглашает вас в ",((Yn=P.metadata)==null?void 0:Yn.targetChatType)==="group"?"группу":"канал"]}),p.jsx("div",{className:"text-sm font-semibold text-violet-100",children:((un=P.metadata)==null?void 0:un.targetChatName)||"Сообщество"}),((An=P.metadata)==null?void 0:An.inviteUrl)&&p.jsx("a",{href:P.metadata.inviteUrl,target:"_blank",rel:"noreferrer",className:"block text-[11px] text-violet-300 hover:text-violet-200 underline break-all",children:P.metadata.inviteUrl}),p.jsx("button",{onClick:()=>{var Ve;return f((Ve=P.metadata)==null?void 0:Ve.targetChatId)},className:"px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500/30 hover:bg-violet-500/40 text-violet-100 border border-violet-400/40",children:"Вступить"})]}),(P.type==="text"||P.type==="gift"||P.type==="call")&&P.text]}),p.jsxs("div",{className:"flex items-center gap-2 mt-1.5 px-1",children:[p.jsx("span",{className:"text-[10px] text-zinc-600 font-medium",children:P.timestamp?P.timestamp.toDate?P.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(P.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),p.jsxs("div",{className:"flex items-center gap-1 ml-2",children:[Object.entries(se).map(([Ve,Cn])=>p.jsxs("button",{onClick:()=>u(P.id,Ve),className:"px-1.5 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-200 flex items-center gap-1 hover:bg-zinc-700",children:[p.jsx("span",{children:Ve}),p.jsx("span",{className:"text-[9px] opacity-70",children:Cn})]},Ve)),p.jsx("div",{className:"flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:["👍","❤️","🔥","😂","😢"].map(Ve=>p.jsx("button",{onClick:()=>u(P.id,Ve),className:"w-6 h-6 flex items-center justify-center rounded-full text-[14px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors",title:Ve,children:Ve},Ve))})]})]})]})},P.id)})}),p.jsxs("div",{className:"p-6 bg-gradient-to-t from-[#09090b] to-transparent",children:[p.jsx(C4,{}),p.jsx("p",{className:"text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest",children:"End-to-end encryption active"})]})]}):p.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500",children:[p.jsx("div",{className:"w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner",children:p.jsx(gv,{className:"w-8 h-8 opacity-20 rotate-180"})}),p.jsx("p",{className:"text-sm font-medium tracking-wide uppercase opacity-40",children:"Выберите чат для общения"})]})}function R4(){const{activeEffects:t}=Io();return p.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:t.map(e=>p.jsxs(Wf.Fragment,{children:[e.type==="hearts"&&p.jsx("div",{className:"absolute inset-0",children:[...Array(24)].map((n,r)=>p.jsx("div",{className:"absolute effect-heart text-rose-500/50",style:{left:`${Math.random()*100}%`,"--heart-delay":`${Math.random()*1.4}s`,"--heart-duration":`${2.4+Math.random()*1.8}s`,"--heart-size":`${16+Math.random()*28}px`,"--heart-drift":`${-30+Math.random()*60}px`},children:p.jsx(jT,{size:20,fill:"currentColor"})},r))}),e.type==="fire"&&p.jsxs("div",{className:"absolute inset-0",children:[p.jsx("div",{className:"absolute inset-0 effect-fire-glow"}),p.jsx("div",{className:"absolute inset-x-0 bottom-0 h-48 effect-fire-wave"}),[...Array(18)].map((n,r)=>p.jsx("div",{className:"absolute effect-fire-spark",style:{left:`${Math.random()*100}%`,"--spark-delay":`${Math.random()*1.2}s`,"--spark-duration":`${.9+Math.random()*1.4}s`,"--spark-size":`${2+Math.random()*5}px`,"--spark-drift":`${-24+Math.random()*48}px`}},r))]}),e.type==="stars"&&p.jsxs("div",{className:"absolute inset-0",children:[[...Array(40)].map((n,r)=>p.jsx("div",{className:"absolute effect-star-dot",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${2+Math.random()*4}px`,height:`${2+Math.random()*4}px`,"--star-delay":`${Math.random()*1.4}s`,"--star-duration":`${.8+Math.random()*1.6}s`}},r)),[...Array(6)].map((n,r)=>p.jsx("div",{className:"absolute effect-shooting-star",style:{top:`${Math.random()*45}%`,left:`${-20+Math.random()*40}%`,"--shoot-delay":`${Math.random()*1.8}s`,"--shoot-duration":`${1.1+Math.random()*.8}s`}},`shoot-${r}`))]})]},e.id))})}const sa=["declined","cancelled","ended","missed"],_v=3e4,vv=12e4;function b4(){var Z,P,B,K,se,he,Xe;const{user:t}=ui(),{messages:e,activeChatId:n,sendMessage:r}=Io(),[s,i]=$.useState(0),[o,l]=$.useState(null),[c,u]=$.useState(null),f=$.useRef(null),g=$.useRef(null),m=$.useRef(null),x=$.useRef(new Set),k=$.useRef(null),b=$.useRef([]),V=$.useRef(new Set),T=ne=>{var X,ae;const te=((X=ne==null?void 0:ne.metadata)==null?void 0:X.timestamp)??((ae=ne==null?void 0:ne.metadata)==null?void 0:ae.startedAt)??(ne==null?void 0:ne.timestamp);if(te&&typeof te.toMillis=="function")return te.toMillis();if(typeof te=="number")return te;if(typeof te=="string"){const pe=Number(te);if(Number.isFinite(pe))return pe;const Ie=new Date(te).getTime();if(!Number.isNaN(Ie))return Ie}return Date.now()},_=$.useMemo(()=>{if(!t||!n||!(e!=null&&e.length))return null;const ne=e.filter(pe=>pe.type!=="call"||!pe.metadata||pe.metadata.chatId&&pe.metadata.chatId!==n?!1:pe.metadata.callerId===t.id||pe.metadata.targetId===t.id);if(!ne.length)return null;const te=new Map;ne.forEach(pe=>{const Ie=pe.metadata.callId||pe.id;te.set(Ie,pe)});const X=Date.now(),ae=Array.from(te.values()).filter(pe=>{var Pt;const Ie=(Pt=pe.metadata)==null?void 0:Pt.status;if(sa.includes(Ie))return!1;const ct=X-T(pe);return!(Ie==="ringing"&&ct>_v||["accepted","connected"].includes(Ie)&&ct>vv)});return ae.length?ae[ae.length-1]:null},[t,n,e]);$.useEffect(()=>{var te;if(!_||!["accepted","connected"].includes((te=_.metadata)==null?void 0:te.status)){i(0);return}const ne=setInterval(()=>{i(X=>X+1)},1e3);return()=>{clearInterval(ne)}},[_]);const E=((Z=_==null?void 0:_.metadata)==null?void 0:Z.callId)||(_==null?void 0:_.id)||null,N=((P=_==null?void 0:_.metadata)==null?void 0:P.callerId)===(t==null?void 0:t.id),j=((B=_==null?void 0:_.metadata)==null?void 0:B.callType)==="video",M=(K=_==null?void 0:_.metadata)==null?void 0:K.status,w=N?(se=_==null?void 0:_.metadata)==null?void 0:se.targetId:(he=_==null?void 0:_.metadata)==null?void 0:he.callerId,y=()=>{m.current&&(m.current.ontrack=null,m.current.onicecandidate=null,m.current.onconnectionstatechange=null,m.current.close(),m.current=null),o&&o.getTracks().forEach(ne=>ne.stop()),l(null),u(null),b.current=[],k.current=null},I=async ne=>{var ae;if(!_||!E)return;await r(`${j?"📹":"📞"} Звонок ${j?"видеозвонок":"голосовой звонок"} ${ne==="accepted"?"принят":ne==="declined"?"отклонен":ne==="ended"?"завершен":"отменен"}.`,"call",{..._.metadata,callId:E,targetId:ne==="cancelled"?(ae=_.metadata)==null?void 0:ae.targetId:t.id,status:ne,timestamp:Date.now()}),["declined","cancelled","ended"].includes(ne)&&y()},A=async()=>{if(!E||!w)return null;if(m.current)return m.current;let ne=null;try{ne=await navigator.mediaDevices.getUserMedia({audio:!0,video:j})}catch(X){throw await I(N?"cancelled":"declined"),alert(j?"Нет доступа к микрофону или камере. Разрешите доступ к устройствам в браузере.":"Нет доступа к микрофону. Разрешите доступ к микрофону в браузере."),X}l(ne);const te=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});return ne.getTracks().forEach(X=>te.addTrack(X,ne)),te.ontrack=X=>{const[ae]=X.streams;ae&&u(ae)},te.onicecandidate=async X=>{X.candidate&&await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:w,signalType:"ice",candidate:X.candidate.toJSON()})},te.onconnectionstatechange=async()=>{te.connectionState==="connected"&&(k.current=E),["failed","disconnected","closed"].includes(te.connectionState)&&(k.current===E?await I("ended"):y())},m.current=te,te};if($.useEffect(()=>{if(!_||!E){y();return}if(sa.includes(M)){y();return}},[_,E,M]),$.useEffect(()=>{if(!t||!n||!(e!=null&&e.length))return;const ne=new Map;e.forEach(X=>{if(X.type!=="call"||!X.metadata||X.metadata.chatId&&X.metadata.chatId!==n||X.metadata.callerId!==t.id&&X.metadata.targetId!==t.id)return;const ae=X.metadata.callId||X.id;ne.set(ae,X)});const te=Date.now();ne.forEach((X,ae)=>{var An,Ve;if(V.current.has(ae))return;const pe=(An=X.metadata)==null?void 0:An.status;if(sa.includes(pe))return;const Ie=te-T(X),ct=pe==="ringing"&&Ie>_v,Pt=["accepted","connected"].includes(pe)&&Ie>vv;if(!ct&&!Pt)return;V.current.add(ae);const Yn=((Ve=X.metadata)==null?void 0:Ve.callerId)===t.id,un=ct?Yn?"cancelled":"missed":"ended";r("","call",{...X.metadata,callId:ae,status:un,timestamp:Date.now()}).catch(()=>{V.current.delete(ae)})})},[t,n,e,r]),$.useEffect(()=>{if(!_||!E||!N||M!=="accepted"||k.current===E)return;(async()=>{try{const te=await A();if(!te)return;const X=await te.createOffer();await te.setLocalDescription(X),await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:w,signalType:"offer",sdp:X})}catch(te){console.error("Offer creation error",te)}})()},[_,E,N,M]),$.useEffect(()=>{if(!_||!E)return;const ne=e.filter(X=>!(X.type!=="call-signal"||!X.metadata||X.metadata.callId!==E||X.metadata.fromId===t.id));(async()=>{for(const X of ne){if(x.current.has(X.id))continue;const ae=X.metadata;let pe=!1;try{if(ae.signalType==="offer"){if(N||M!=="accepted")continue;const Ie=await A();if(!Ie)continue;await Ie.setRemoteDescription(new RTCSessionDescription(ae.sdp));const ct=await Ie.createAnswer();for(await Ie.setLocalDescription(ct),await r("","call-signal",{callId:E,chatId:n,fromId:t.id,targetId:w,signalType:"answer",sdp:ct});b.current.length;){const Pt=b.current.shift();await Ie.addIceCandidate(new RTCIceCandidate(Pt))}pe=!0}if(ae.signalType==="answer"&&m.current){if(!N||!["accepted","connected"].includes(M))continue;for(await m.current.setRemoteDescription(new RTCSessionDescription(ae.sdp));b.current.length;){const Ie=b.current.shift();await m.current.addIceCandidate(new RTCIceCandidate(Ie))}pe=!0}if(ae.signalType==="ice"){if(!["accepted","connected"].includes(M))continue;!m.current||!m.current.remoteDescription?b.current.push(ae.candidate):await m.current.addIceCandidate(new RTCIceCandidate(ae.candidate)),pe=!0}pe&&x.current.add(X.id)}catch(Ie){console.error("Signal processing error",Ie)}}})()},[e,_,E,N,M]),$.useEffect(()=>{f.current&&(f.current.srcObject=o||null)},[o]),$.useEffect(()=>{g.current&&(g.current.srcObject=c||null)},[c]),$.useEffect(()=>()=>{y()},[]),$.useEffect(()=>{var Ie,ct;if(!_||M!=="ringing")return;const ne=Number(((Ie=_.metadata)==null?void 0:Ie.startedAt)||((ct=_.metadata)==null?void 0:ct.timestamp)||Date.now()),te=Date.now()-ne,X=Math.max(0,3e4-te),ae=N?"cancelled":"missed";if(X===0){I(ae);return}const pe=setTimeout(()=>{I(ae)},X);return()=>clearTimeout(pe)},[_,M,N]),!_)return null;const C=!N&&M==="ringing",R=!N&&["ringing","accepted"].includes(M),S=N&&M==="ringing",z=["accepted","connected"].includes(M),H=!sa.includes(M)&&!C&&!R&&!S&&!z,Q=M==="ringing"?N?"cancelled":"declined":"ended";return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:p.jsxs("div",{className:"w-full max-w-sm mx-4 bg-[#09090b] border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4",children:[p.jsx("div",{className:"w-14 h-1 rounded-full bg-zinc-800 mb-2"}),p.jsx("div",{className:"w-full rounded-2xl bg-zinc-900/70 border border-zinc-800 p-2",children:j?p.jsxs("div",{className:"relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-950",children:[c?p.jsx("video",{ref:g,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-zinc-500 text-xs",children:"Ожидание видео..."}),p.jsx("video",{ref:f,autoPlay:!0,playsInline:!0,muted:!0,className:"absolute bottom-2 right-2 w-24 h-16 object-cover rounded-lg border border-zinc-700 bg-zinc-900"})]}):p.jsx("div",{className:"w-full h-28 rounded-xl flex items-center justify-center",children:p.jsx(Ns,{className:"w-10 h-10 text-emerald-400"})})}),p.jsx("div",{className:"text-sm text-zinc-500 uppercase tracking-widest",children:C?"Входящий звонок":N?"Исходящий звонок":"Звонок"}),p.jsx("div",{className:"text-lg font-semibold text-zinc-100 text-center",children:N?"Собеседник":((Xe=_.metadata)==null?void 0:Xe.callerName)||"Неизвестный пользователь"}),p.jsx("div",{className:"text-xs text-zinc-500 mb-1",children:j?"Видеозвонок через GiftWave":"Голосовой звонок через GiftWave"}),p.jsxs("div",{className:"text-[11px] text-zinc-500",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),p.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[R&&p.jsx("button",{onClick:()=>I("declined"),className:"w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40",children:p.jsx(jm,{className:"w-7 h-7"})}),C&&p.jsx("button",{onClick:()=>I("accepted"),className:"w-16 h-16 rounded-full bg-emerald-500 shadow-emerald-500/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ns,{className:"w-7 h-7 -rotate-45"})}),S&&p.jsx("button",{onClick:()=>I("cancelled"),className:"w-16 h-16 rounded-full bg-zinc-600 shadow-zinc-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ns,{className:"w-7 h-7 rotate-135"})}),z&&p.jsx("button",{onClick:()=>I("ended"),className:"w-16 h-16 rounded-full bg-red-600 shadow-red-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ns,{className:"w-7 h-7 rotate-135"})}),H&&p.jsx("button",{onClick:()=>I(Q),className:"w-16 h-16 rounded-full bg-red-600 shadow-red-600/40 flex items-center justify-center text-white shadow-lg",children:p.jsx(Ns,{className:"w-7 h-7 rotate-135"})})]}),p.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mt-4",children:M==="ringing"?N?"Ожидание ответа собеседника":"Примите звонок, чтобы подключиться":M==="accepted"?"Идет реальное соединение":"Управление звонком"}),!sa.includes(M)&&p.jsx("button",{onClick:()=>I(Q),className:"mt-1 text-xs text-zinc-300 hover:text-white underline underline-offset-4",children:"Завершить звонок"})]})})}const Fm="-",P4=t=>{const e=D4(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Fm);return l[0]===""&&l.length!==1&&l.shift(),$T(l,e)||N4(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},$T=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?$T(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Fm);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},wv=/^\[(.+)\]$/,N4=t=>{if(wv.test(t)){const e=wv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},D4=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return V4(Object.entries(t.classGroups),n).forEach(([i,o])=>{Uf(o,r,i,e)}),r},Uf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Ev(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(O4(s)){Uf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Uf(o,Ev(e,i),n,r)})})},Ev=(t,e)=>{let n=t;return e.split(Fm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},O4=t=>t.isThemeGetter,V4=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,M4=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},BT="!",L4=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const c=[];let u=0,f=0,g;for(let V=0;V<l.length;V++){let T=l[V];if(u===0){if(T===s&&(r||l.slice(V,V+i)===e)){c.push(l.slice(f,V)),f=V+i;continue}if(T==="/"){g=V;continue}}T==="["?u++:T==="]"&&u--}const m=c.length===0?l:l.substring(f),x=m.startsWith(BT),k=x?m.substring(1):m,b=g&&g>f?g-f:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:k,maybePostfixModifierPosition:b}};return n?l=>n({className:l,parseClassName:o}):o},j4=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},F4=t=>({cache:M4(t.cacheSize),parseClassName:L4(t),...P4(t)}),U4=/\s+/,z4=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(U4);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{modifiers:f,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:x}=n(u);let k=!!x,b=r(k?m.substring(0,x):m);if(!b){if(!k){l=u+(l.length>0?" "+l:l);continue}if(b=r(m),!b){l=u+(l.length>0?" "+l:l);continue}k=!1}const V=j4(f).join(":"),T=g?V+BT:V,_=T+b;if(i.includes(_))continue;i.push(_);const E=s(b,k);for(let N=0;N<E.length;++N){const j=E[N];i.push(T+j)}l=u+(l.length>0?" "+l:l)}return l};function $4(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=qT(e))&&(r&&(r+=" "),r+=n);return r}const qT=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=qT(t[r]))&&(n&&(n+=" "),n+=e);return n};function B4(t,...e){let n,r,s,i=o;function o(c){const u=e.reduce((f,g)=>g(f),t());return n=F4(u),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const u=r(c);if(u)return u;const f=z4(c,n);return s(c,f),f}return function(){return i($4.apply(null,arguments))}}const Pe=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},WT=/^\[(?:([a-z-]+):)?(.+)\]$/i,q4=/^\d+\/\d+$/,W4=new Set(["px","full","screen"]),H4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,G4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,K4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Q4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Y4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zn=t=>Yi(t)||W4.has(t)||q4.test(t),Nr=t=>To(t,"length",sO),Yi=t=>!!t&&!Number.isNaN(Number(t)),mh=t=>To(t,"number",Yi),ia=t=>!!t&&Number.isInteger(Number(t)),J4=t=>t.endsWith("%")&&Yi(t.slice(0,-1)),ue=t=>WT.test(t),Dr=t=>H4.test(t),X4=new Set(["length","size","percentage"]),Z4=t=>To(t,X4,HT),eO=t=>To(t,"position",HT),tO=new Set(["image","url"]),nO=t=>To(t,tO,oO),rO=t=>To(t,"",iO),oa=()=>!0,To=(t,e,n)=>{const r=WT.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},sO=t=>G4.test(t)&&!K4.test(t),HT=()=>!1,iO=t=>Q4.test(t),oO=t=>Y4.test(t),aO=()=>{const t=Pe("colors"),e=Pe("spacing"),n=Pe("blur"),r=Pe("brightness"),s=Pe("borderColor"),i=Pe("borderRadius"),o=Pe("borderSpacing"),l=Pe("borderWidth"),c=Pe("contrast"),u=Pe("grayscale"),f=Pe("hueRotate"),g=Pe("invert"),m=Pe("gap"),x=Pe("gradientColorStops"),k=Pe("gradientColorStopPositions"),b=Pe("inset"),V=Pe("margin"),T=Pe("opacity"),_=Pe("padding"),E=Pe("saturate"),N=Pe("scale"),j=Pe("sepia"),M=Pe("skew"),w=Pe("space"),y=Pe("translate"),I=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",ue,e],R=()=>[ue,e],S=()=>["",Zn,Nr],z=()=>["auto",Yi,ue],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Q=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",ue],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[Yi,ue];return{cacheSize:500,separator:":",theme:{colors:[oa],spacing:[Zn,Nr],blur:["none","",Dr,ue],brightness:se(),borderColor:[t],borderRadius:["none","","full",Dr,ue],borderSpacing:R(),borderWidth:S(),contrast:se(),grayscale:B(),hueRotate:se(),invert:B(),gap:R(),gradientColorStops:[t],gradientColorStopPositions:[J4,Nr],inset:C(),margin:C(),opacity:se(),padding:R(),saturate:se(),scale:se(),sepia:B(),skew:se(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",ue]}],container:["container"],columns:[{columns:[Dr]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),ue]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ia,ue]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ue]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",ia,ue]}],"grid-cols":[{"grid-cols":[oa]}],"col-start-end":[{col:["auto",{span:["full",ia,ue]},ue]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[oa]}],"row-start-end":[{row:["auto",{span:[ia,ue]},ue]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ue]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[V]}],mx:[{mx:[V]}],my:[{my:[V]}],ms:[{ms:[V]}],me:[{me:[V]}],mt:[{mt:[V]}],mr:[{mr:[V]}],mb:[{mb:[V]}],ml:[{ml:[V]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ue,e]}],"min-w":[{"min-w":[ue,e,"min","max","fit"]}],"max-w":[{"max-w":[ue,e,"none","full","min","max","fit","prose",{screen:[Dr]},Dr]}],h:[{h:[ue,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ue,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ue,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ue,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Dr,Nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mh]}],"font-family":[{font:[oa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ue]}],"line-clamp":[{"line-clamp":["none",Yi,mh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Zn,ue]}],"list-image":[{"list-image":["none",ue]}],"list-style-type":[{list:["none","disc","decimal",ue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Zn,Nr]}],"underline-offset":[{"underline-offset":["auto",Zn,ue]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),eO]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Z4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},nO]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...Q(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:Q()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Q()]}],"outline-offset":[{"outline-offset":[Zn,ue]}],"outline-w":[{outline:[Zn,Nr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:S()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[Zn,Nr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Dr,rO]}],"shadow-color":[{shadow:[oa]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Dr,ue]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[E]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ue]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",ue]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",ue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[ia,ue]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ue]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ue]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ue]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Zn,Nr,mh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},gh=B4(aO);class lO extends Wf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("App Crash:",e,n)}render(){return this.state.hasError?p.jsxs("div",{className:"h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center",children:[p.jsx("h1",{className:"text-xl font-bold text-white mb-4",children:"Ой! Что-то пошло не так"}),p.jsx("p",{className:"text-zinc-400 text-sm mb-6",children:"Возможно, это из-за старого кэша приложения."}),p.jsx("button",{onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.pathname+"?clear=true"},className:"px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all",children:"Очистить кэш и исправить"})]}):this.props.children}}function cO(){const{user:t,loading:e}=ui(),{activeChatId:n}=Io();return e?p.jsx("div",{className:"h-screen bg-[#09090b] flex items-center justify-center",children:p.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):!t||!t.isVerified?p.jsx(T4,{}):p.jsx("div",{className:"flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden",children:p.jsxs("div",{className:gh("flex-1 flex",n?"mobile-chat-active":"mobile-sidebar-active"),children:[p.jsx("div",{className:gh("w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",n?"hidden md:flex":"w-full md:w-80 flex"),children:p.jsx(x4,{})}),p.jsxs("main",{className:gh("flex-1 flex flex-col relative transition-all duration-300",n?"flex":"hidden md:flex"),children:[n?p.jsx(k4,{}):p.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]",children:[p.jsx("div",{className:"p-6 bg-zinc-900/30 rounded-full mb-4",children:p.jsx("img",{src:t.avatar,className:"w-24 h-24 opacity-20 grayscale rounded-2xl object-cover",alt:"logo"})}),p.jsx("h3",{className:"text-xl font-medium text-zinc-400 text-center px-4",children:"Выберите чат, чтобы начать общение"})]}),p.jsx(R4,{}),p.jsx(b4,{})]})]})})}function uO(){return p.jsx(lO,{children:p.jsx(cO,{})})}console.log("--- APP VERSION 3.0.0 LOADED ---");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>console.log("SW registered v1.2.1-ULTRA-FORCE")).catch(t=>console.log("SW reg error",t))});yh.createRoot(document.getElementById("root")).render(p.jsx(Wf.StrictMode,{children:p.jsx(ZD,{children:p.jsx(t4,{children:p.jsx(uO,{})})})}));
