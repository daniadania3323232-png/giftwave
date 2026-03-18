(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function YI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z_={exports:{}},Vu={},ev={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),JI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),ZI=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),s1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),o1=Symbol.for("react.lazy"),Km=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=Km&&t[Km]||t["@@iterator"],typeof t=="function"?t:null)}var tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nv=Object.assign,rv={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sv(){}sv.prototype=Ri.prototype;function rf(t,e,n){this.props=t,this.context=e,this.refs=rv,this.updater=n||tv}var sf=rf.prototype=new sv;sf.constructor=rf;nv(sf,Ri.prototype);sf.isPureReactComponent=!0;var Qm=Array.isArray,iv=Object.prototype.hasOwnProperty,of={current:null},ov={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)iv.call(e,r)&&!ov.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:_a,type:t,key:i,ref:o,props:s,_owner:of.current}}function l1(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function af(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function u1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ym=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u1(""+t.key):e.toString(36)}function vl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case JI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+$c(o,0):r,Qm(s)?(n="",t!=null&&(n=t.replace(Ym,"$&/")+"/"),vl(s,e,n,"",function(c){return c})):s!=null&&(af(s)&&(s=l1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ym,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Qm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+$c(i,l);o+=vl(i,e,n,u,s)}else if(u=a1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+$c(i,l++),o+=vl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],s=0;return vl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function c1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},wl={transition:null},h1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:of};function lv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ri;re.Fragment=XI;re.Profiler=e1;re.PureComponent=rf;re.StrictMode=ZI;re.Suspense=s1;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;re.act=lv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=of.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iv.call(e,u)&&!ov.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_a,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:n1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t1,_context:t},t.Consumer=t};re.createElement=av;re.createFactory=function(t){var e=av.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:r1,render:t}};re.isValidElement=af;re.lazy=function(t){return{$$typeof:o1,_payload:{_status:-1,_result:t},_init:c1}};re.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};re.unstable_act=lv;re.useCallback=function(t,e){return mt.current.useCallback(t,e)};re.useContext=function(t){return mt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};re.useEffect=function(t,e){return mt.current.useEffect(t,e)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return mt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};re.useRef=function(t){return mt.current.useRef(t)};re.useState=function(t){return mt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.3.1";ev.exports=re;var H=ev.exports;const lf=YI(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=H,f1=Symbol.for("react.element"),p1=Symbol.for("react.fragment"),m1=Object.prototype.hasOwnProperty,g1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function uv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)m1.call(e,r)&&!y1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:f1,type:t,key:i,ref:o,props:s,_owner:g1.current}}Vu.Fragment=p1;Vu.jsx=uv;Vu.jsxs=uv;Z_.exports=Vu;var _=Z_.exports,Dh={},cv={exports:{}},Lt={},hv={exports:{}},dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var ne=J-1>>>1,Ie=z[ne];if(0<s(Ie,G))z[ne]=G,z[J]=Ie,J=ne;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var ne=0,Ie=z.length,Xn=Ie>>>1;ne<Xn;){var xt=2*(ne+1)-1,Ft=z[xt],yt=xt+1,jt=z[yt];if(0>s(Ft,J))yt<Ie&&0>s(jt,Ft)?(z[ne]=jt,z[yt]=J,ne=yt):(z[ne]=Ft,z[xt]=J,ne=xt);else if(yt<Ie&&0>s(jt,J))z[ne]=jt,z[yt]=J,ne=yt;else break e}}return G}function s(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,p=3,I=!1,k=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D(z){if(R=!1,A(z),!k)if(n(u)!==null)k=!0,Fe(O);else{var G=n(c);G!==null&&Yt(D,G.startTime-z)}}function O(z,G){k=!1,R&&(R=!1,w(g),g=-1),I=!0;var J=p;try{for(A(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!C());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,p=m.priorityLevel;var Ie=ne(m.expirationTime<=G);G=t.unstable_now(),typeof Ie=="function"?m.callback=Ie:m===n(u)&&r(u),A(G)}else r(u);m=n(u)}if(m!==null)var Xn=!0;else{var xt=n(c);xt!==null&&Yt(D,xt.startTime-G),Xn=!1}return Xn}finally{m=null,p=J,I=!1}}var M=!1,T=null,g=-1,S=5,E=-1;function C(){return!(t.unstable_now()-E<S)}function P(){if(T!==null){var z=t.unstable_now();E=z;var G=!0;try{G=T(!0,z)}finally{G?x():(M=!1,T=null)}}else M=!1}var x;if(typeof v=="function")x=function(){v(P)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Me=ue.port2;ue.port1.onmessage=P,x=function(){Me.postMessage(null)}}else x=function(){b(P,0)};function Fe(z){T=z,M||(M=!0,x())}function Yt(z,G){g=b(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||I||(k=!0,Fe(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var J=p;p=G;try{return z()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=p;p=z;try{return G()}finally{p=J}},t.unstable_scheduleCallback=function(z,G,J){var ne=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ne+J:ne):J=ne,z){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,z={id:f++,callback:G,priorityLevel:z,startTime:J,expirationTime:Ie,sortIndex:-1},J>ne?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(R?(w(g),g=-1):R=!0,Yt(D,J-ne))):(z.sortIndex=Ie,e(u,z),k||I||(k=!0,Fe(O))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var G=p;return function(){var J=p;p=G;try{return z.apply(this,arguments)}finally{p=J}}}})(dv);hv.exports=dv;var _1=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=H,Ot=_1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fv=new Set,qo={};function Cs(t,e){yi(t,e),yi(t+"Capture",e)}function yi(t,e){for(qo[t]=e,t=0;t<e.length;t++)fv.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,w1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},Xm={};function E1(t){return Vh.call(Xm,t)?!0:Vh.call(Jm,t)?!1:w1.test(t)?Xm[t]=!0:(Jm[t]=!0,!1)}function T1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I1(t,e,n,r){if(e===null||typeof e>"u"||T1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);tt[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);tt[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);tt[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,r){var s=tt.hasOwnProperty(e)?tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I1(e,n,s,r)&&(n=null),r||s===null?E1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),gv=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,qc;function _o(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Wc=!1;function Hc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function S1(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Ws:return"Portal";case Oh:return"Profiler";case df:return"StrictMode";case Lh:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mv:return(t.displayName||"Context")+".Consumer";case pv:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function A1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x1(t){var e=yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=x1(t))}function _v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jh(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vv(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Uh(t,e){vv(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&zh(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zh(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function si(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(vo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function wv(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C1=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){C1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function Iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function Sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var k1=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(t,e){if(e){if(k1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,ii=null,oi=null;function sg(t){if(t=Ea(t)){if(typeof Gh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=ju(e),Gh(t.stateNode,t.type,e))}}function Av(t){ii?oi?oi.push(t):oi=[t]:ii=t}function xv(){if(ii){var t=ii,e=oi;if(oi=ii=null,sg(t),e)for(t=0;t<e.length;t++)sg(e[t])}}function Cv(t,e){return t(e)}function kv(){}var Gc=!1;function Rv(t,e,n){if(Gc)return t(e,n);Gc=!0;try{return Cv(t,e,n)}finally{Gc=!1,(ii!==null||oi!==null)&&(kv(),xv())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Kh=!1;if(zn)try{var io={};Object.defineProperty(io,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Kh=!1}function R1(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ro=!1,Bl=null,$l=!1,Qh=null,P1={onError:function(t){Ro=!0,Bl=t}};function b1(t,e,n,r,s,i,o,l,u){Ro=!1,Bl=null,R1.apply(P1,arguments)}function N1(t,e,n,r,s,i,o,l,u){if(b1.apply(this,arguments),Ro){if(Ro){var c=Bl;Ro=!1,Bl=null}else throw Error(j(198));$l||($l=!0,Qh=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ig(t){if(ks(t)!==t)throw Error(j(188))}function D1(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ig(s),t;if(i===r)return ig(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function bv(t){return t=D1(t),t!==null?Nv(t):null}function Nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=Ot.unstable_scheduleCallback,og=Ot.unstable_cancelCallback,V1=Ot.unstable_shouldYield,O1=Ot.unstable_requestPaint,Ne=Ot.unstable_now,L1=Ot.unstable_getCurrentPriorityLevel,gf=Ot.unstable_ImmediatePriority,Vv=Ot.unstable_UserBlockingPriority,ql=Ot.unstable_NormalPriority,M1=Ot.unstable_LowPriority,Ov=Ot.unstable_IdlePriority,Ou=null,vn=null;function F1(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Ou,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:z1,j1=Math.log,U1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(j1(t)/U1|0)|0}var Xa=64,Za=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=wo(l):(i&=o,i!==0&&(r=wo(i)))}else o=n&~s,o!==0?r=wo(o):i!==0&&(r=wo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),s=1<<n,r|=t[n],e&=~s;return r}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-rn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=B1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function q1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var he=0;function Mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fv,_f,jv,Uv,zv,Jh=!1,el=[],Er=null,Tr=null,Ir=null,Go=new Map,Ko=new Map,dr=[],W1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function oo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ea(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function H1(t,e,n,r,s){switch(e){case"focusin":return Er=oo(Er,t,e,n,r,s),!0;case"dragenter":return Tr=oo(Tr,t,e,n,r,s),!0;case"mouseover":return Ir=oo(Ir,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Go.set(i,oo(Go.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ko.set(i,oo(Ko.get(i)||null,t,e,n,r,s)),!0}return!1}function Bv(t){var e=is(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,zv(t.priority,function(){jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return e=Ea(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){El(t)&&n.delete(e)}function G1(){Jh=!1,Er!==null&&El(Er)&&(Er=null),Tr!==null&&El(Tr)&&(Tr=null),Ir!==null&&El(Ir)&&(Ir=null),Go.forEach(lg),Ko.forEach(lg)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,G1)))}function Qo(t){function e(s){return ao(s,t)}if(0<el.length){ao(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&ao(Er,t),Tr!==null&&ao(Tr,t),Ir!==null&&ao(Ir,t),Go.forEach(e),Ko.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&dr.shift()}var ai=Qn.ReactCurrentBatchConfig,Hl=!0;function K1(t,e,n,r){var s=he,i=ai.transition;ai.transition=null;try{he=1,vf(t,e,n,r)}finally{he=s,ai.transition=i}}function Q1(t,e,n,r){var s=he,i=ai.transition;ai.transition=null;try{he=4,vf(t,e,n,r)}finally{he=s,ai.transition=i}}function vf(t,e,n,r){if(Hl){var s=Xh(t,e,n,r);if(s===null)sh(t,e,r,Gl,n),ag(t,r);else if(H1(s,t,e,n,r))r.stopPropagation();else if(ag(t,r),e&4&&-1<W1.indexOf(t)){for(;s!==null;){var i=Ea(s);if(i!==null&&Fv(i),i=Xh(t,e,n,r),i===null&&sh(t,e,r,Gl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sh(t,e,r,null,n)}}var Gl=null;function Xh(t,e,n,r){if(Gl=null,t=mf(r),t=is(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function $v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L1()){case gf:return 1;case Vv:return 4;case ql:case M1:return 16;case Ov:return 536870912;default:return 16}default:return 16}}var _r=null,wf=null,Tl=null;function qv(){if(Tl)return Tl;var t,e=wf,n=e.length,r,s="value"in _r?_r.value:_r.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tl=s.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function ug(){return!1}function Mt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tl:ug,this.isPropagationStopped=ug,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Mt(Pi),wa=xe({},Pi,{view:0,detail:0}),Y1=Mt(wa),Qc,Yc,lo,Lu=xe({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Qc=t.screenX-lo.screenX,Yc=t.screenY-lo.screenY):Yc=Qc=0,lo=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),cg=Mt(Lu),J1=xe({},Lu,{dataTransfer:0}),X1=Mt(J1),Z1=xe({},wa,{relatedTarget:0}),Jc=Mt(Z1),eS=xe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Mt(eS),nS=xe({},Pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Mt(nS),sS=xe({},Pi,{data:0}),hg=Mt(sS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function Tf(){return lS}var uS=xe({},wa,{key:function(t){if(t.key){var e=iS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=Mt(uS),hS=xe({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=Mt(hS),dS=xe({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),fS=Mt(dS),pS=xe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Mt(pS),gS=xe({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Mt(gS),_S=[9,13,27,32],If=zn&&"CompositionEvent"in window,Po=null;zn&&"documentMode"in document&&(Po=document.documentMode);var vS=zn&&"TextEvent"in window&&!Po,Wv=zn&&(!If||Po&&8<Po&&11>=Po),fg=" ",pg=!1;function Hv(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function wS(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(pg=!0,fg);case"textInput":return t=e.data,t===fg&&pg?null:t;default:return null}}function ES(t,e){if(Gs)return t==="compositionend"||!If&&Hv(t,e)?(t=qv(),Tl=wf=_r=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wv&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function Kv(t,e,n,r){Av(r),e=Kl(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bo=null,Yo=null;function IS(t){i0(t,0)}function Mu(t){var e=Ys(t);if(_v(e))return t}function SS(t,e){if(t==="change")return e}var Qv=!1;if(zn){var Xc;if(zn){var Zc="oninput"in document;if(!Zc){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Zc=typeof gg.oninput=="function"}Xc=Zc}else Xc=!1;Qv=Xc&&(!document.documentMode||9<document.documentMode)}function yg(){bo&&(bo.detachEvent("onpropertychange",Yv),Yo=bo=null)}function Yv(t){if(t.propertyName==="value"&&Mu(Yo)){var e=[];Kv(e,Yo,t,mf(t)),Rv(IS,e)}}function AS(t,e,n){t==="focusin"?(yg(),bo=e,Yo=n,bo.attachEvent("onpropertychange",Yv)):t==="focusout"&&yg()}function xS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Yo)}function CS(t,e){if(t==="click")return Mu(e)}function kS(t,e){if(t==="input"||t==="change")return Mu(e)}function RS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:RS;function Jo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Vh.call(e,s)||!ln(t[s],e[s]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=_g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function Jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PS(t){var e=Xv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jv(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=vg(n,i);var o=vg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bS=zn&&"documentMode"in document&&11>=document.documentMode,Ks=null,Zh=null,No=null,ed=!1;function wg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Ks==null||Ks!==zl(r)||(r=Ks,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Jo(No,r)||(No=r,r=Kl(Zh,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ks)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},eh={},Zv={};zn&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Fu(t){if(eh[t])return eh[t];if(!Qs[t])return t;var e=Qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zv)return eh[t]=e[n];return t}var e0=Fu("animationend"),t0=Fu("animationiteration"),n0=Fu("animationstart"),r0=Fu("transitionend"),s0=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){s0.set(t,e),Cs(e,[t])}for(var th=0;th<Eg.length;th++){var nh=Eg[th],NS=nh.toLowerCase(),DS=nh[0].toUpperCase()+nh.slice(1);$r(NS,"on"+DS)}$r(e0,"onAnimationEnd");$r(t0,"onAnimationIteration");$r(n0,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(r0,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,N1(r,e,void 0,t),t.currentTarget=null}function i0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Tg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Tg(s,l,c),i=u}}}if($l)throw t=Qh,$l=!1,Qh=null,t}function _e(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var r=t+"__bubble";n.has(r)||(o0(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),o0(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[rl]){t[rl]=!0,fv.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,rh("selectionchange",!1,e))}}function o0(t,e,n,r){switch($v(e)){case 1:var s=K1;break;case 4:s=Q1;break;default:s=vf}n=s.bind(null,e,n,t),s=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function sh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=is(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Rv(function(){var c=i,f=mf(n),m=[];e:{var p=s0.get(t);if(p!==void 0){var I=Ef,k=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":I=cS;break;case"focusin":k="focus",I=Jc;break;case"focusout":k="blur",I=Jc;break;case"beforeblur":case"afterblur":I=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=fS;break;case e0:case t0:case n0:I=tS;break;case r0:I=mS;break;case"scroll":I=Y1;break;case"wheel":I=yS;break;case"copy":case"cut":case"paste":I=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=dg}var R=(e&4)!==0,b=!R&&t==="scroll",w=R?p!==null?p+"Capture":null:p;R=[];for(var v=c,A;v!==null;){A=v;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,w!==null&&(D=Ho(v,w),D!=null&&R.push(Zo(v,D,A)))),b)break;v=v.return}0<R.length&&(p=new I(p,k,null,n,f),m.push({event:p,listeners:R}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",p&&n!==Hh&&(k=n.relatedTarget||n.fromElement)&&(is(k)||k[Bn]))break e;if((I||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,I?(k=n.relatedTarget||n.toElement,I=c,k=k?is(k):null,k!==null&&(b=ks(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(I=null,k=c),I!==k)){if(R=cg,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=dg,D="onPointerLeave",w="onPointerEnter",v="pointer"),b=I==null?p:Ys(I),A=k==null?p:Ys(k),p=new R(D,v+"leave",I,n,f),p.target=b,p.relatedTarget=A,D=null,is(f)===c&&(R=new R(w,v+"enter",k,n,f),R.target=A,R.relatedTarget=b,D=R),b=D,I&&k)t:{for(R=I,w=k,v=0,A=R;A;A=Us(A))v++;for(A=0,D=w;D;D=Us(D))A++;for(;0<v-A;)R=Us(R),v--;for(;0<A-v;)w=Us(w),A--;for(;v--;){if(R===w||w!==null&&R===w.alternate)break t;R=Us(R),w=Us(w)}R=null}else R=null;I!==null&&Ig(m,p,I,R,!1),k!==null&&b!==null&&Ig(m,b,k,R,!0)}}e:{if(p=c?Ys(c):window,I=p.nodeName&&p.nodeName.toLowerCase(),I==="select"||I==="input"&&p.type==="file")var O=SS;else if(mg(p))if(Qv)O=kS;else{O=xS;var M=AS}else(I=p.nodeName)&&I.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=CS);if(O&&(O=O(t,c))){Kv(m,O,n,f);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&zh(p,"number",p.value)}switch(M=c?Ys(c):window,t){case"focusin":(mg(M)||M.contentEditable==="true")&&(Ks=M,Zh=c,No=null);break;case"focusout":No=Zh=Ks=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,wg(m,n,f);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":wg(m,n,f)}var T;if(If)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Gs?Hv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Wv&&n.locale!=="ko"&&(Gs||g!=="onCompositionStart"?g==="onCompositionEnd"&&Gs&&(T=qv()):(_r=f,wf="value"in _r?_r.value:_r.textContent,Gs=!0)),M=Kl(c,g),0<M.length&&(g=new hg(g,t,null,n,f),m.push({event:g,listeners:M}),T?g.data=T:(T=Gv(n),T!==null&&(g.data=T)))),(T=vS?wS(t,n):ES(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(f=new hg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}i0(m,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ho(t,n),i!=null&&r.unshift(Zo(t,i,s)),i=Ho(t,e),i!=null&&r.push(Zo(t,i,s))),t=t.return}return r}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ig(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Ho(n,i),u!=null&&o.unshift(Zo(n,u,l))):s||(u=Ho(n,i),u!=null&&o.push(Zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,LS=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(LS,"")}function sl(t,e,n){if(e=Sg(e),Sg(t)!==e&&n)throw Error(j(425))}function Ql(){}var td=null,nd=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(jS)}:sd;function jS(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Qo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),_n="__reactFiber$"+bi,ea="__reactProps$"+bi,Bn="__reactContainer$"+bi,id="__reactEvents$"+bi,US="__reactListeners$"+bi,zS="__reactHandles$"+bi;function is(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xg(t);t!==null;){if(n=t[_n])return n;t=xg(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[_n]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function ju(t){return t[ea]||null}var od=[],Js=-1;function qr(t){return{current:t}}function we(t){0>Js||(t.current=od[Js],od[Js]=null,Js--)}function me(t,e){Js++,od[Js]=t.current,t.current=e}var Vr={},ut=qr(Vr),Tt=qr(!1),ps=Vr;function _i(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function It(t){return t=t.childContextTypes,t!=null}function Yl(){we(Tt),we(ut)}function Cg(t,e,n){if(ut.current!==Vr)throw Error(j(168));me(ut,e),me(Tt,n)}function a0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,A1(t)||"Unknown",s));return xe({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,ps=ut.current,me(ut,t),me(Tt,Tt.current),!0}function kg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=a0(t,e,ps),r.__reactInternalMemoizedMergedChildContext=t,we(Tt),we(ut),me(ut,t)):we(Tt),me(Tt,n)}var Nn=null,Uu=!1,oh=!1;function l0(t){Nn===null?Nn=[t]:Nn.push(t)}function BS(t){Uu=!0,l0(t)}function Wr(){if(!oh&&Nn!==null){oh=!0;var t=0,e=he;try{var n=Nn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Uu=!1}catch(s){throw Nn!==null&&(Nn=Nn.slice(t+1)),Dv(gf,Wr),s}finally{he=e,oh=!1}}return null}var Xs=[],Zs=0,Xl=null,Zl=0,zt=[],Bt=0,ms=null,Vn=1,On="";function ts(t,e){Xs[Zs++]=Zl,Xs[Zs++]=Xl,Xl=t,Zl=e}function u0(t,e,n){zt[Bt++]=Vn,zt[Bt++]=On,zt[Bt++]=ms,ms=t;var r=Vn;t=On;var s=32-rn(r)-1;r&=~(1<<s),n+=1;var i=32-rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Vn=1<<32-rn(e)+s|n<<s|r,On=i+t}else Vn=1<<i|n<<s|r,On=t}function Af(t){t.return!==null&&(ts(t,1),u0(t,1,0))}function xf(t){for(;t===Xl;)Xl=Xs[--Zs],Xs[Zs]=null,Zl=Xs[--Zs],Xs[Zs]=null;for(;t===ms;)ms=zt[--Bt],zt[Bt]=null,On=zt[--Bt],zt[Bt]=null,Vn=zt[--Bt],zt[Bt]=null}var Nt=null,Pt=null,Ee=!1,en=null;function c0(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Vn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(Ee){var e=Pt;if(e){var n=e;if(!Rg(t,e)){if(ad(t))throw Error(j(418));e=Sr(n.nextSibling);var r=Nt;e&&Rg(t,e)?c0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Nt=t)}}else{if(ad(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ee=!1,Nt=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function il(t){if(t!==Nt)return!1;if(!Ee)return Pg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Pt)){if(ad(t))throw h0(),Error(j(418));for(;e;)c0(t,e),e=Sr(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?Sr(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=Pt;t;)t=Sr(t.nextSibling)}function vi(){Pt=Nt=null,Ee=!1}function Cf(t){en===null?en=[t]:en.push(t)}var $S=Qn.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bg(t){var e=t._init;return e(t._payload)}function d0(t){function e(w,v){if(t){var A=w.deletions;A===null?(w.deletions=[v],w.flags|=16):A.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function s(w,v){return w=kr(w,v),w.index=0,w.sibling=null,w}function i(w,v,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<v?(w.flags|=2,v):A):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,A,D){return v===null||v.tag!==6?(v=fh(A,w.mode,D),v.return=w,v):(v=s(v,A),v.return=w,v)}function u(w,v,A,D){var O=A.type;return O===Hs?f(w,v,A.props.children,D,A.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===cr&&bg(O)===v.type)?(D=s(v,A.props),D.ref=uo(w,v,A),D.return=w,D):(D=Pl(A.type,A.key,A.props,null,w.mode,D),D.ref=uo(w,v,A),D.return=w,D)}function c(w,v,A,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=ph(A,w.mode,D),v.return=w,v):(v=s(v,A.children||[]),v.return=w,v)}function f(w,v,A,D,O){return v===null||v.tag!==7?(v=hs(A,w.mode,D,O),v.return=w,v):(v=s(v,A),v.return=w,v)}function m(w,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fh(""+v,w.mode,A),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return A=Pl(v.type,v.key,v.props,null,w.mode,A),A.ref=uo(w,null,v),A.return=w,A;case Ws:return v=ph(v,w.mode,A),v.return=w,v;case cr:var D=v._init;return m(w,D(v._payload),A)}if(vo(v)||so(v))return v=hs(v,w.mode,A,null),v.return=w,v;ol(w,v)}return null}function p(w,v,A,D){var O=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return O!==null?null:l(w,v,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Qa:return A.key===O?u(w,v,A,D):null;case Ws:return A.key===O?c(w,v,A,D):null;case cr:return O=A._init,p(w,v,O(A._payload),D)}if(vo(A)||so(A))return O!==null?null:f(w,v,A,D,null);ol(w,A)}return null}function I(w,v,A,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(A)||null,l(v,w,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Qa:return w=w.get(D.key===null?A:D.key)||null,u(v,w,D,O);case Ws:return w=w.get(D.key===null?A:D.key)||null,c(v,w,D,O);case cr:var M=D._init;return I(w,v,A,M(D._payload),O)}if(vo(D)||so(D))return w=w.get(A)||null,f(v,w,D,O,null);ol(v,D)}return null}function k(w,v,A,D){for(var O=null,M=null,T=v,g=v=0,S=null;T!==null&&g<A.length;g++){T.index>g?(S=T,T=null):S=T.sibling;var E=p(w,T,A[g],D);if(E===null){T===null&&(T=S);break}t&&T&&E.alternate===null&&e(w,T),v=i(E,v,g),M===null?O=E:M.sibling=E,M=E,T=S}if(g===A.length)return n(w,T),Ee&&ts(w,g),O;if(T===null){for(;g<A.length;g++)T=m(w,A[g],D),T!==null&&(v=i(T,v,g),M===null?O=T:M.sibling=T,M=T);return Ee&&ts(w,g),O}for(T=r(w,T);g<A.length;g++)S=I(T,w,g,A[g],D),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?g:S.key),v=i(S,v,g),M===null?O=S:M.sibling=S,M=S);return t&&T.forEach(function(C){return e(w,C)}),Ee&&ts(w,g),O}function R(w,v,A,D){var O=so(A);if(typeof O!="function")throw Error(j(150));if(A=O.call(A),A==null)throw Error(j(151));for(var M=O=null,T=v,g=v=0,S=null,E=A.next();T!==null&&!E.done;g++,E=A.next()){T.index>g?(S=T,T=null):S=T.sibling;var C=p(w,T,E.value,D);if(C===null){T===null&&(T=S);break}t&&T&&C.alternate===null&&e(w,T),v=i(C,v,g),M===null?O=C:M.sibling=C,M=C,T=S}if(E.done)return n(w,T),Ee&&ts(w,g),O;if(T===null){for(;!E.done;g++,E=A.next())E=m(w,E.value,D),E!==null&&(v=i(E,v,g),M===null?O=E:M.sibling=E,M=E);return Ee&&ts(w,g),O}for(T=r(w,T);!E.done;g++,E=A.next())E=I(T,w,g,E.value,D),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?g:E.key),v=i(E,v,g),M===null?O=E:M.sibling=E,M=E);return t&&T.forEach(function(P){return e(w,P)}),Ee&&ts(w,g),O}function b(w,v,A,D){if(typeof A=="object"&&A!==null&&A.type===Hs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Qa:e:{for(var O=A.key,M=v;M!==null;){if(M.key===O){if(O=A.type,O===Hs){if(M.tag===7){n(w,M.sibling),v=s(M,A.props.children),v.return=w,w=v;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===cr&&bg(O)===M.type){n(w,M.sibling),v=s(M,A.props),v.ref=uo(w,M,A),v.return=w,w=v;break e}n(w,M);break}else e(w,M);M=M.sibling}A.type===Hs?(v=hs(A.props.children,w.mode,D,A.key),v.return=w,w=v):(D=Pl(A.type,A.key,A.props,null,w.mode,D),D.ref=uo(w,v,A),D.return=w,w=D)}return o(w);case Ws:e:{for(M=A.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(w,v.sibling),v=s(v,A.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=ph(A,w.mode,D),v.return=w,w=v}return o(w);case cr:return M=A._init,b(w,v,M(A._payload),D)}if(vo(A))return k(w,v,A,D);if(so(A))return R(w,v,A,D);ol(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(w,v.sibling),v=s(v,A),v.return=w,w=v):(n(w,v),v=fh(A,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return b}var wi=d0(!0),f0=d0(!1),eu=qr(null),tu=null,ei=null,kf=null;function Rf(){kf=ei=tu=null}function Pf(t){var e=eu.current;we(eu),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function li(t,e){tu=t,kf=ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(kf!==t)if(t={context:t,memoizedValue:e,next:null},ei===null){if(tu===null)throw Error(j(308));ei=t,tu.dependencies={lanes:0,firstContext:t}}else ei=ei.next=t;return e}var os=null;function bf(t){os===null?os=[t]:os.push(t)}function p0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,bf(e)):(n.next=s.next,s.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,$n(t,n)}return s=r.interleaved,s===null?(e.next=e,bf(r)):(e.next=s.next,s.next=e),r.interleaved=e,$n(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}function Ng(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var s=t.updateQueue;hr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var p=l.lane,I=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,R=l;switch(p=e,I=n,R.tag){case 1:if(k=R.payload,typeof k=="function"){m=k.call(I,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=R.payload,p=typeof k=="function"?k.call(I,m,p):k,p==null)break e;m=xe({},m,p);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else I={eventTime:I,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=m):f=f.next=I,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Ta={},wn=qr(Ta),ta=qr(Ta),na=qr(Ta);function as(t){if(t===Ta)throw Error(j(174));return t}function Df(t,e){switch(me(na,e),me(ta,t),me(wn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$h(e,t)}we(wn),me(wn,e)}function Ei(){we(wn),we(ta),we(na)}function g0(t){as(na.current);var e=as(wn.current),n=$h(e,t.type);e!==n&&(me(ta,t),me(wn,n))}function Vf(t){ta.current===t&&(we(wn),we(ta))}var Se=qr(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function Of(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var Al=Qn.ReactCurrentDispatcher,lh=Qn.ReactCurrentBatchConfig,gs=0,Ae=null,Ue=null,Ge=null,su=!1,Do=!1,ra=0,qS=0;function rt(){throw Error(j(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Mf(t,e,n,r,s,i){if(gs=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?KS:QS,t=n(r,s),Do){i=0;do{if(Do=!1,ra=0,25<=i)throw Error(j(301));i+=1,Ge=Ue=null,e.updateQueue=null,Al.current=YS,t=n(r,s)}while(Do)}if(Al.current=iu,e=Ue!==null&&Ue.next!==null,gs=0,Ge=Ue=Ae=null,su=!1,e)throw Error(j(300));return t}function Ff(){var t=ra!==0;return ra=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ae.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Gt(){if(Ue===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ge===null?Ae.memoizedState:Ge.next;if(e!==null)Ge=e,Ue=t;else{if(t===null)throw Error(j(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?Ae.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function sa(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=Gt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((gs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ae.lanes|=f,ys|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Gt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);ln(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function y0(){}function _0(t,e){var n=Ae,r=Gt(),s=e(),i=!ln(r.memoizedState,s);if(i&&(r.memoizedState=s,Et=!0),r=r.queue,jf(E0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,ia(9,w0.bind(null,n,r,s,e),void 0,null),Ke===null)throw Error(j(349));gs&30||v0(n,e,s)}return s}function v0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,r){e.value=n,e.getSnapshot=r,T0(e)&&I0(t)}function E0(t,e,n){return n(function(){T0(e)&&I0(t)})}function T0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function I0(t){var e=$n(t,1);e!==null&&sn(e,t,1,-1)}function Vg(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=GS.bind(null,Ae,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S0(){return Gt().memoizedState}function xl(t,e,n,r){var s=gn();Ae.flags|=t,s.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function zu(t,e,n,r){var s=Gt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Lf(r,o.deps)){s.memoizedState=ia(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=ia(1|e,n,i,r)}function Og(t,e){return xl(8390656,8,t,e)}function jf(t,e){return zu(2048,8,t,e)}function A0(t,e){return zu(4,2,t,e)}function x0(t,e){return zu(4,4,t,e)}function C0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k0(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,C0.bind(null,e,t),n)}function Uf(){}function R0(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P0(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b0(t,e,n){return gs&21?(ln(n,e)||(n=Lv(),Ae.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function WS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{he=n,lh.transition=r}}function N0(){return Gt().memoizedState}function HS(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D0(t))V0(e,n);else if(n=p0(t,e,n,r),n!==null){var s=ft();sn(n,t,r,s),O0(n,e,r)}}function GS(t,e,n){var r=Cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D0(t))V0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(s.next=s,bf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=p0(t,e,s,r),n!==null&&(s=ft(),sn(n,t,r,s),O0(n,e,r))}}function D0(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function V0(t,e){Do=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}var iu={readContext:Ht,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},KS={readContext:Ht,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,C0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Vg,useDebugValue:Uf,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Vg(!1),e=t[0];return t=WS.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=gn();if(Ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ke===null)throw Error(j(349));gs&30||v0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Og(E0.bind(null,r,i,t),[t]),r.flags|=2048,ia(9,w0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=gn(),e=Ke.identifierPrefix;if(Ee){var n=On,r=Vn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:Ht,useCallback:R0,useContext:Ht,useEffect:jf,useImperativeHandle:k0,useInsertionEffect:A0,useLayoutEffect:x0,useMemo:P0,useReducer:uh,useRef:S0,useState:function(){return uh(sa)},useDebugValue:Uf,useDeferredValue:function(t){var e=Gt();return b0(e,Ue.memoizedState,t)},useTransition:function(){var t=uh(sa)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:_0,useId:N0,unstable_isNewReconciler:!1},YS={readContext:Ht,useCallback:R0,useContext:Ht,useEffect:jf,useImperativeHandle:k0,useInsertionEffect:A0,useLayoutEffect:x0,useMemo:P0,useReducer:ch,useRef:S0,useState:function(){return ch(sa)},useDebugValue:Uf,useDeferredValue:function(t){var e=Gt();return Ue===null?e.memoizedState=t:b0(e,Ue.memoizedState,t)},useTransition:function(){var t=ch(sa)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:_0,useId:N0,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),s=Cr(t),i=Fn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(sn(e,t,s,r),Sl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),s=Cr(t),i=Fn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(sn(e,t,s,r),Sl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Cr(t),s=Fn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ar(t,s,r),e!==null&&(sn(e,t,r,n),Sl(e,t,r))}};function Lg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,r)||!Jo(s,i):!0}function L0(t,e,n){var r=!1,s=Vr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=It(e)?ps:ut.current,r=e.contextTypes,i=(r=r!=null)?_i(t,s):Vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Nf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=It(e)?ps:ut.current,s.context=_i(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(cd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Bu.enqueueReplaceState(s,s.state,null),nu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e){try{var n="",r=e;do n+=S1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function M0(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,Td=r),dd(t,e)},n}function F0(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){dd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hA.bind(null,t,e,n),e.then(t,t))}function jg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ug(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var XS=Qn.ReactCurrentOwner,Et=!1;function dt(t,e,n,r){e.child=t===null?f0(e,null,n,r):wi(e,t.child,n,r)}function zg(t,e,n,r,s){n=n.render;var i=e.ref;return li(e,s),r=Mf(t,e,n,r,i,s),n=Ff(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qn(t,e,s)):(Ee&&n&&Af(e),e.flags|=1,dt(t,e,r,s),e.child)}function Bg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Kf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,j0(t,e,i,r,s)):(t=Pl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,r)&&t.ref===e.ref)return qn(t,e,s)}return e.flags|=1,t=kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Jo(i,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,qn(t,e,s)}return fd(t,e,n,r,s)}function U0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ni,kt),kt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ni,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(ni,kt),kt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(ni,kt),kt|=r;return dt(t,e,s,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,r,s){var i=It(n)?ps:ut.current;return i=_i(e,i),li(e,s),n=Mf(t,e,n,r,i,s),r=Ff(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qn(t,e,s)):(Ee&&r&&Af(e),e.flags|=1,dt(t,e,n,s),e.child)}function $g(t,e,n,r,s){if(It(n)){var i=!0;Jl(e)}else i=!1;if(li(e,s),e.stateNode===null)Cl(t,e),L0(e,n,r),hd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=It(n)?ps:ut.current,c=_i(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Mg(e,o,r,c),hr=!1;var p=e.memoizedState;o.state=p,nu(e,r,o,s),u=e.memoizedState,l!==r||p!==u||Tt.current||hr?(typeof f=="function"&&(cd(e,n,f,r),u=e.memoizedState),(l=hr||Lg(e,n,l,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Xt(e.type,l),o.props=c,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=It(n)?ps:ut.current,u=_i(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&Mg(e,o,r,u),hr=!1,p=e.memoizedState,o.state=p,nu(e,r,o,s);var k=e.memoizedState;l!==m||p!==k||Tt.current||hr?(typeof I=="function"&&(cd(e,n,I,r),k=e.memoizedState),(c=hr||Lg(e,n,c,r,p,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return pd(t,e,n,r,i,s)}function pd(t,e,n,r,s,i){z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&kg(e,n,!1),qn(t,e,i);r=e.stateNode,XS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wi(e,t.child,null,i),e.child=wi(e,null,l,i)):dt(t,e,l,i),e.memoizedState=r.state,s&&kg(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?Cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cg(t,e.context,!1),Df(t,e.containerInfo)}function qg(t,e,n,r,s){return vi(),Cf(s),e.flags|=256,dt(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var r=e.pendingProps,s=Se.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(Se,s&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wu(o,r,0,null),t=hs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=gd(n),e.memoizedState=md,t):zf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return ZS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=kr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=kr(l,i):(i=hs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=md,r}return i=t.child,t=i.sibling,r=kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zf(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Cf(r),wi(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=hh(Error(j(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wu({mode:"visible",children:r.children},s,0,null),i=hs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wi(e,t.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,i);if(!(e.mode&1))return al(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=hh(i,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=Ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,$n(t,s),sn(r,t,s,-1))}return Gf(),r=hh(Error(j(421))),al(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=dA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=Sr(s.nextSibling),Nt=e,Ee=!0,en=null,t!==null&&(zt[Bt++]=Vn,zt[Bt++]=On,zt[Bt++]=ms,Vn=t.id,On=t.overflow,ms=e),e=zf(e,r.children),e.flags|=4096,e)}function Wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ud(t.return,e,n)}function dh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function q0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(dt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,n,e);else if(t.tag===19)Wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Se,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),dh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ru(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}dh(e,!0,n,null,i);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eA(t,e,n){switch(e.tag){case 3:B0(e),vi();break;case 5:g0(e);break;case 1:It(e.type)&&Jl(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(eu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(me(Se,Se.current&1),t=qn(t,e,n),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return qn(t,e,n)}var W0,yd,H0,G0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};H0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,as(wn.current);var i=null;switch(n){case"input":s=jh(t,s),r=jh(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=Bh(t,s),r=Bh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}qh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};G0=function(t,e,n,r){n!==r&&(e.flags|=4)};function co(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tA(t,e,n){var r=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return It(e.type)&&Yl(),st(e),null;case 3:return r=e.stateNode,Ei(),we(Tt),we(ut),Of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Ad(en),en=null))),yd(t,e),st(e),null;case 5:Vf(e);var s=as(na.current);if(n=e.type,t!==null&&e.stateNode!=null)H0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return st(e),null}if(t=as(wn.current),il(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[_n]=e,r[ea]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<Eo.length;s++)_e(Eo[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":eg(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":ng(r,i),_e("invalid",r)}qh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),s=["children",""+l]):qo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ya(r),tg(r,i,!0);break;case"textarea":Ya(r),rg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ql)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[ea]=r,W0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<Eo.length;s++)_e(Eo[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":eg(t,r),s=jh(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":ng(t,r),s=Bh(t,r),_e("invalid",t);break;default:s=r}qh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Sv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Tv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(t,u):typeof u=="number"&&Wo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&hf(t,i,u,o))}switch(n){case"input":Ya(t),tg(t,r,!1);break;case"textarea":Ya(t),rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?si(t,!!r.multiple,i,!1):r.defaultValue!=null&&si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)G0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=as(na.current),as(wn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(i=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return st(e),null;case 13:if(we(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Pt!==null&&e.mode&1&&!(e.flags&128))h0(),vi(),e.flags|=98560,i=!1;else if(i=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[_n]=e}else vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else en!==null&&(Ad(en),en=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?ze===0&&(ze=3):Gf())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Ei(),yd(t,e),t===null&&Xo(e.stateNode.containerInfo),st(e),null;case 10:return Pf(e.type._context),st(e),null;case 17:return It(e.type)&&Yl(),st(e),null;case 19:if(we(Se),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)co(i,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,co(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>Ii&&(e.flags|=128,r=!0,co(i,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return st(e),null}else 2*Ne()-i.renderingStartTime>Ii&&n!==1073741824&&(e.flags|=128,r=!0,co(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function nA(t,e){switch(xf(e),e.tag){case 1:return It(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),we(Tt),we(ut),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vf(e),null;case 13:if(we(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Se),null;case 4:return Ei(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var ll=!1,at=!1,rA=typeof WeakSet=="function"?WeakSet:Set,W=null;function ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function _d(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Hg=!1;function sA(t,e){if(td=Hl,t=Xv(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,p=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)p=m,m=I;for(;;){if(m===t)break t;if(p===n&&++c===s&&(l=o),p===i&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Hl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var R=k.memoizedProps,b=k.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:Xt(e.type,R),b);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return k=Hg,Hg=!1,k}function Vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&_d(e,n,i)}s=s.next}while(s!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[ea],delete e[id],delete e[US],delete e[zS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Ye=null,Zt=!1;function or(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Ou,n)}catch{}switch(n.tag){case 5:at||ti(n,e);case 6:var r=Ye,s=Zt;Ye=null,or(t,e,n),Ye=r,Zt=s,Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Qo(t)):ih(Ye,n.stateNode));break;case 4:r=Ye,s=Zt,Ye=n.stateNode.containerInfo,Zt=!0,or(t,e,n),Ye=r,Zt=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&_d(n,e,o),s=s.next}while(s!==r)}or(t,e,n);break;case 1:if(!at&&(ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,or(t,e,n),at=r):or(t,e,n);break;default:or(t,e,n)}}function Kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rA),e.forEach(function(r){var s=fA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Zt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ye===null)throw Error(j(160));Y0(i,o,s),Ye=null,Zt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Re(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J0(e,t),e=e.sibling}function J0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),pn(t),r&4){try{Vo(3,t,t.return),$u(3,t)}catch(R){Re(t,t.return,R)}try{Vo(5,t,t.return)}catch(R){Re(t,t.return,R)}}break;case 1:Jt(e,t),pn(t),r&512&&n!==null&&ti(n,n.return);break;case 5:if(Jt(e,t),pn(t),r&512&&n!==null&&ti(n,n.return),t.flags&32){var s=t.stateNode;try{Wo(s,"")}catch(R){Re(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&vv(s,i),Wh(l,o);var c=Wh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Sv(s,m):f==="dangerouslySetInnerHTML"?Tv(s,m):f==="children"?Wo(s,m):hf(s,f,m,c)}switch(l){case"input":Uh(s,i);break;case"textarea":wv(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?si(s,!!i.multiple,I,!1):p!==!!i.multiple&&(i.defaultValue!=null?si(s,!!i.multiple,i.defaultValue,!0):si(s,!!i.multiple,i.multiple?[]:"",!1))}s[ea]=i}catch(R){Re(t,t.return,R)}}break;case 6:if(Jt(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Re(t,t.return,R)}}break;case 3:if(Jt(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(R){Re(t,t.return,R)}break;case 4:Jt(e,t),pn(t);break;case 13:Jt(e,t),pn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(qf=Ne())),r&4&&Kg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||f,Jt(e,t),at=c):Jt(e,t),pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(p=W,I=p.child,p.tag){case 0:case 11:case 14:case 15:Vo(4,p,p.return);break;case 1:ti(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(R){Re(r,n,R)}}break;case 5:ti(p,p.return);break;case 22:if(p.memoizedState!==null){Yg(m);continue}}I!==null?(I.return=p,W=I):Yg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Iv("display",o))}catch(R){Re(t,t.return,R)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(R){Re(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jt(e,t),pn(t),r&4&&Kg(t);break;case 21:break;default:Jt(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Wo(s,""),r.flags&=-33);var i=Gg(t);Ed(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gg(t);wd(t,l,o);break;default:throw Error(j(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iA(t,e,n){W=t,X0(t)}function X0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ll;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||at;l=ll;var c=at;if(ll=o,(at=u)&&!c)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Jg(s):u!==null?(u.return=o,W=u):Jg(s);for(;i!==null;)W=i,X0(i),i=i.sibling;W=s,ll=l,at=c}Qg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Qg(t)}}function Qg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Dg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}at||e.flags&512&&vd(e)}catch(p){Re(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Yg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Jg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Re(e,s,u)}}var i=e.return;try{vd(e)}catch(u){Re(e,i,u)}break;case 5:var o=e.return;try{vd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var oA=Math.ceil,ou=Qn.ReactCurrentDispatcher,Bf=Qn.ReactCurrentOwner,Wt=Qn.ReactCurrentBatchConfig,le=0,Ke=null,Ve=null,et=0,kt=0,ni=qr(0),ze=0,oa=null,ys=0,qu=0,$f=0,Oo=null,vt=null,qf=0,Ii=1/0,Pn=null,au=!1,Td=null,xr=null,ul=!1,vr=null,lu=0,Lo=0,Id=null,kl=-1,Rl=0;function ft(){return le&6?Ne():kl!==-1?kl:kl=Ne()}function Cr(t){return t.mode&1?le&2&&et!==0?et&-et:$S.transition!==null?(Rl===0&&(Rl=Lv()),Rl):(t=he,t!==0||(t=window.event,t=t===void 0?16:$v(t.type)),t):1}function sn(t,e,n,r){if(50<Lo)throw Lo=0,Id=null,Error(j(185));va(t,n,r),(!(le&2)||t!==Ke)&&(t===Ke&&(!(le&2)&&(qu|=n),ze===4&&fr(t,et)),St(t,r),n===1&&le===0&&!(e.mode&1)&&(Ii=Ne()+500,Uu&&Wr()))}function St(t,e){var n=t.callbackNode;$1(t,e);var r=Wl(t,t===Ke?et:0);if(r===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?BS(Xg.bind(null,t)):l0(Xg.bind(null,t)),FS(function(){!(le&6)&&Wr()}),n=null;else{switch(Mv(r)){case 1:n=gf;break;case 4:n=Vv;break;case 16:n=ql;break;case 536870912:n=Ov;break;default:n=ql}n=ow(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(kl=-1,Rl=0,le&6)throw Error(j(327));var n=t.callbackNode;if(ui()&&t.callbackNode!==n)return null;var r=Wl(t,t===Ke?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var s=le;le|=2;var i=tw();(Ke!==t||et!==e)&&(Pn=null,Ii=Ne()+500,cs(t,e));do try{uA();break}catch(l){ew(t,l)}while(!0);Rf(),ou.current=i,le=s,Ve!==null?e=0:(Ke=null,et=0,e=ze)}if(e!==0){if(e===2&&(s=Yh(t),s!==0&&(r=s,e=Sd(t,s))),e===1)throw n=oa,cs(t,0),fr(t,r),St(t,Ne()),n;if(e===6)fr(t,r);else{if(s=t.current.alternate,!(r&30)&&!aA(s)&&(e=uu(t,r),e===2&&(i=Yh(t),i!==0&&(r=i,e=Sd(t,i))),e===1))throw n=oa,cs(t,0),fr(t,r),St(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ns(t,vt,Pn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=qf+500-Ne(),10<e)){if(Wl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=sd(ns.bind(null,t,vt,Pn),e);break}ns(t,vt,Pn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oA(r/1960))-r,10<r){t.timeoutHandle=sd(ns.bind(null,t,vt,Pn),r);break}ns(t,vt,Pn);break;case 5:ns(t,vt,Pn);break;default:throw Error(j(329))}}}return St(t,Ne()),t.callbackNode===n?Z0.bind(null,t):null}function Sd(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=uu(t,e),t!==2&&(e=vt,vt=n,e!==null&&Ad(e)),t}function Ad(t){vt===null?vt=t:vt.push.apply(vt,t)}function aA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!ln(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~$f,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Xg(t){if(le&6)throw Error(j(327));ui();var e=Wl(t,0);if(!(e&1))return St(t,Ne()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=Sd(t,r))}if(n===1)throw n=oa,cs(t,0),fr(t,e),St(t,Ne()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ns(t,vt,Pn),St(t,Ne()),null}function Wf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Ii=Ne()+500,Uu&&Wr())}}function _s(t){vr!==null&&vr.tag===0&&!(le&6)&&ui();var e=le;le|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,t)return t()}finally{he=r,Wt.transition=n,le=e,!(le&6)&&Wr()}}function Hf(){kt=ni.current,we(ni)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:Ei(),we(Tt),we(ut),Of();break;case 5:Vf(r);break;case 4:Ei();break;case 13:we(Se);break;case 19:we(Se);break;case 10:Pf(r.type._context);break;case 22:case 23:Hf()}n=n.return}if(Ke=t,Ve=t=kr(t.current,null),et=kt=e,ze=0,oa=null,$f=qu=ys=0,vt=Oo=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}os=null}return t}function ew(t,e){do{var n=Ve;try{if(Rf(),Al.current=iu,su){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}su=!1}if(gs=0,Ge=Ue=Ae=null,Do=!1,ra=0,Bf.current=null,n===null||n.return===null){ze=1,oa=e,Ve=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=jg(o);if(I!==null){I.flags&=-257,Ug(I,o,l,i,e),I.mode&1&&Fg(i,c,e),e=I,u=c;var k=e.updateQueue;if(k===null){var R=new Set;R.add(u),e.updateQueue=R}else k.add(u);break e}else{if(!(e&1)){Fg(i,c,e),Gf();break e}u=Error(j(426))}}else if(Ee&&l.mode&1){var b=jg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ug(b,o,l,i,e),Cf(Ti(u,l));break e}}i=u=Ti(u,l),ze!==4&&(ze=2),Oo===null?Oo=[i]:Oo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=M0(i,u,e);Ng(i,w);break e;case 1:l=u;var v=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(xr===null||!xr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=F0(i,l,e);Ng(i,D);break e}}i=i.return}while(i!==null)}rw(n)}catch(O){e=O,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function tw(){var t=ou.current;return ou.current=iu,t===null?iu:t}function Gf(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(ys&268435455)&&!(qu&268435455)||fr(Ke,et)}function uu(t,e){var n=le;le|=2;var r=tw();(Ke!==t||et!==e)&&(Pn=null,cs(t,e));do try{lA();break}catch(s){ew(t,s)}while(!0);if(Rf(),le=n,ou.current=r,Ve!==null)throw Error(j(261));return Ke=null,et=0,ze}function lA(){for(;Ve!==null;)nw(Ve)}function uA(){for(;Ve!==null&&!V1();)nw(Ve)}function nw(t){var e=iw(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?rw(t):Ve=e,Bf.current=null}function rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nA(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ve=null;return}}else if(n=tA(n,e,kt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);ze===0&&(ze=5)}function ns(t,e,n){var r=he,s=Wt.transition;try{Wt.transition=null,he=1,cA(t,e,n,r)}finally{Wt.transition=s,he=r}return null}function cA(t,e,n,r){do ui();while(vr!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(q1(t,i),t===Ke&&(Ve=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,ow(ql,function(){return ui(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Wt.transition,Wt.transition=null;var o=he;he=1;var l=le;le|=4,Bf.current=null,sA(t,n),J0(n,t),PS(nd),Hl=!!td,nd=td=null,t.current=n,iA(n),O1(),le=l,he=o,Wt.transition=i}else t.current=n;if(ul&&(ul=!1,vr=t,lu=s),i=t.pendingLanes,i===0&&(xr=null),F1(n.stateNode),St(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(au)throw au=!1,t=Td,Td=null,t;return lu&1&&t.tag!==0&&ui(),i=t.pendingLanes,i&1?t===Id?Lo++:(Lo=0,Id=t):Lo=0,Wr(),null}function ui(){if(vr!==null){var t=Mv(lu),e=Wt.transition,n=he;try{if(Wt.transition=null,he=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,lu=0,le&6)throw Error(j(331));var s=le;for(le|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Vo(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var p=f.sibling,I=f.return;if(K0(f),f===c){W=null;break}if(p!==null){p.return=I,W=p;break}W=I}}}var k=i.alternate;if(k!==null){var R=k.child;if(R!==null){k.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,W=w;break e}W=i.return}}var v=t.current;for(W=v;W!==null;){o=W;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,W=A;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$u(9,l)}}catch(O){Re(l,l.return,O)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(le=s,Wr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Ou,t)}catch{}r=!0}return r}finally{he=n,Wt.transition=e}}return!1}function Zg(t,e,n){e=Ti(n,e),e=M0(t,e,1),t=Ar(t,e,1),e=ft(),t!==null&&(va(t,1,e),St(t,e))}function Re(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=Ti(n,t),t=F0(e,t,1),e=Ar(e,t,1),t=ft(),e!==null&&(va(e,1,t),St(e,t));break}}e=e.return}}function hA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(et&n)===n&&(ze===4||ze===3&&(et&130023424)===et&&500>Ne()-qf?cs(t,0):$f|=n),St(t,e)}function sw(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=ft();t=$n(t,e),t!==null&&(va(t,e,n),St(t,n))}function dA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sw(t,n)}function fA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),sw(t,n)}var iw;iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,eA(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ee&&e.flags&1048576&&u0(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var s=_i(e,ut.current);li(e,n),s=Mf(null,e,r,t,s,n);var i=Ff();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(i=!0,Jl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Nf(e),s.updater=Bu,e.stateNode=s,s._reactInternals=e,hd(e,r,t,n),e=pd(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&Af(e),dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=mA(r),t=Xt(r,t),s){case 0:e=fd(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=zg(null,e,r,t,n);break e;case 14:e=Bg(null,e,r,Xt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),fd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),$g(t,e,r,s,n);case 3:e:{if(B0(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,m0(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ti(Error(j(423)),e),e=qg(t,e,r,n,s);break e}else if(r!==s){s=Ti(Error(j(424)),e),e=qg(t,e,r,n,s);break e}else for(Pt=Sr(e.stateNode.containerInfo.firstChild),Nt=e,Ee=!0,en=null,n=f0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===s){e=qn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return g0(e),t===null&&ld(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,rd(r,s)?o=null:i!==null&&rd(r,i)&&(e.flags|=32),z0(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return $0(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),zg(t,e,r,s,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(eu,r._currentValue),r._currentValue=o,i!==null)if(ln(i.value,o)){if(i.children===s.children&&!Tt.current){e=qn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ud(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ud(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,li(e,n),s=Ht(s),r=r(s),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,s=Xt(r,e.pendingProps),s=Xt(r.type,s),Bg(t,e,r,s,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Cl(t,e),e.tag=1,It(r)?(t=!0,Jl(e)):t=!1,li(e,n),L0(e,r,s),hd(e,r,s,n),pd(null,e,r,!0,t,n);case 19:return q0(t,e,n);case 22:return U0(t,e,n)}throw Error(j(156,e.tag))};function ow(t,e){return Dv(t,e)}function pA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new pA(t,e,n,r)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mA(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return hs(n.children,s,i,e);case df:o=8,s|=8;break;case Oh:return t=qt(12,n,e,s|2),t.elementType=Oh,t.lanes=i,t;case Lh:return t=qt(13,n,e,s),t.elementType=Lh,t.lanes=i,t;case Mh:return t=qt(19,n,e,s),t.elementType=Mh,t.lanes=i,t;case gv:return Wu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pv:o=10;break e;case mv:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case cr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=qt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function hs(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Wu(t,e,n,r){return t=qt(22,t,r,e),t.elementType=gv,t.lanes=n,t.stateNode={isHidden:!1},t}function fh(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,s,i,o,l,u){return t=new gA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=qt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(i),t}function yA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aw(t){if(!t)return Vr;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(It(n))return a0(t,n,e)}return e}function lw(t,e,n,r,s,i,o,l,u){return t=Qf(n,r,!0,t,s,i,o,l,u),t.context=aw(null),n=t.current,r=ft(),s=Cr(n),i=Fn(r,s),i.callback=e??null,Ar(n,i,s),t.current.lanes=s,va(t,s,r),St(t,r),t}function Hu(t,e,n,r){var s=e.current,i=ft(),o=Cr(s);return n=aw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(s,e,o),t!==null&&(sn(t,s,o,i),Sl(t,s,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){ey(t,e),(t=t.alternate)&&ey(t,e)}function _A(){return null}var uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Gu.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Hu(t,e,null,null)};Gu.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Hu(null,t,null,null)}),e[Bn]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&Bv(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ty(){}function vA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=cu(o);i.call(c)}}var o=lw(e,r,t,0,null,!1,!1,"",ty);return t._reactRootContainer=o,t[Bn]=o.current,Xo(t.nodeType===8?t.parentNode:t),_s(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=cu(u);l.call(c)}}var u=Qf(t,0,!1,null,null,!1,!1,"",ty);return t._reactRootContainer=u,t[Bn]=u.current,Xo(t.nodeType===8?t.parentNode:t),_s(function(){Hu(e,u,n,r)}),u}function Qu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=cu(o);l.call(u)}}Hu(e,o,t,s)}else o=vA(n,e,t,s,r);return cu(o)}Fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(yf(e,n|1),St(e,Ne()),!(le&6)&&(Ii=Ne()+500,Wr()))}break;case 13:_s(function(){var r=$n(t,1);if(r!==null){var s=ft();sn(r,t,1,s)}}),Yf(t,1)}};_f=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=ft();sn(e,t,134217728,n)}Yf(t,134217728)}};jv=function(t){if(t.tag===13){var e=Cr(t),n=$n(t,e);if(n!==null){var r=ft();sn(n,t,e,r)}Yf(t,e)}};Uv=function(){return he};zv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Gh=function(t,e,n){switch(e){case"input":if(Uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ju(r);if(!s)throw Error(j(90));_v(r),Uh(r,s)}}}break;case"textarea":wv(t,n);break;case"select":e=n.value,e!=null&&si(t,!!n.multiple,e,!1)}};Cv=Wf;kv=_s;var wA={usingClientEntryPoint:!1,Events:[Ea,Ys,ju,Av,xv,Wf]},ho={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Ou=cl.inject(EA),vn=cl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(j(200));return yA(t,e,null,n)};Lt.createRoot=function(t,e){if(!Xf(t))throw Error(j(299));var n=!1,r="",s=uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,s),t[Bn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Jf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=bv(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return _s(t)};Lt.hydrate=function(t,e,n){if(!Ku(e))throw Error(j(200));return Qu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=uw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lw(e,null,t,1,n??null,s,!1,i,o),t[Bn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Gu(e)};Lt.render=function(t,e,n){if(!Ku(e))throw Error(j(200));return Qu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Ku(t))throw Error(j(40));return t._reactRootContainer?(_s(function(){Qu(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Wf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ku(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Qu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function cw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cw)}catch(t){console.error(t)}}cw(),cv.exports=Lt;var hw=cv.exports,ny=hw;Dh.createRoot=ny.createRoot,Dh.hydrateRoot=ny.hydrateRoot;const TA=()=>{};var ry={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},IA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(p=64)),r.push(n[f],n[m],n[p],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new SA;const p=i<<2|l>>4;if(r.push(p),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AA=function(t){const e=dw(t);return fw.encodeByteArray(e,!0)},hu=function(t){return AA(t).replace(/\./g,"")},pw=function(t){try{return fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CA=()=>xA().__FIREBASE_DEFAULTS__,kA=()=>{if(typeof process>"u"||typeof ry>"u")return;const t=ry.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pw(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return TA()||CA()||kA()||RA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mw=t=>{var e,n;return(n=(e=Yu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},gw=t=>{const e=mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yw=()=>{var t;return(t=Yu())==null?void 0:t.config},_w=t=>{var e;return(e=Yu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[hu(JSON.stringify(n)),hu(JSON.stringify(o)),""].join(".")}const Mo={};function bA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mo))Mo[e]?t.emulator.push(e):t.prod.push(e);return t}function NA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let sy=!1;function ep(t,e){if(typeof window>"u"||typeof document>"u"||!Rs(window.location.host)||Mo[t]===e||Mo[t]||sy)return;Mo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=bA().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,I){p.setAttribute("width","24"),p.setAttribute("id",I),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{sy=!0,o()},p}function f(p,I){p.setAttribute("id",I),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=NA(r),I=n("text"),k=document.getElementById(I)||document.createElement("span"),R=n("learnmore"),b=document.getElementById(R)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const A=p.element;l(A),f(b,R);const D=c();u(v,w),A.append(v,k,b,D),document.body.appendChild(A)}i?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function VA(){var e;const t=(e=Yu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MA(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FA(){return!VA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ew(){try{return typeof indexedDB=="object"}catch{return!1}}function Tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function jA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UA,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,l,r)}}function zA(t,e){return t.replace(BA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BA=/\{\$([^}]+)}/g;function $A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(iy(i)&&iy(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qA(t,e){const n=new WA(t,e);return n.subscribe.bind(n)}class WA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mh),s.error===void 0&&(s.error=mh),s.complete===void 0&&(s.complete=mh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
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
 */const GA=1e3,KA=2,QA=4*60*60*1e3,YA=.5;function oy(t,e=GA,n=KA){const r=e*Math.pow(n,t),s=Math.round(YA*r*(Math.random()-.5)*2);return Math.min(QA,r+s)}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rs="[DEFAULT]";/**
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
 */class JA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZA(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XA(t){return t===rs?void 0:t}function ZA(t){return t.instantiationMode==="EAGER"}/**
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
 */class ex{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const tx={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},nx=se.INFO,rx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ju{constructor(e){this.name=e,this._logLevel=nx,this._logHandler=sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const ix=(t,e)=>e.some(n=>t instanceof n);let ay,ly;function ox(){return ay||(ay=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ax(){return ly||(ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iw=new WeakMap,xd=new WeakMap,Sw=new WeakMap,gh=new WeakMap,tp=new WeakMap;function lx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iw.set(n,t)}).catch(()=>{}),tp.set(e,t),e}function ux(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let Cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cx(t){Cd=t(Cd)}function hx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yh(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),Rr(r)}:ax().includes(t)?function(...e){return t.apply(yh(this),e),Rr(Iw.get(this))}:function(...e){return Rr(t.apply(yh(this),e))}}function dx(t){return typeof t=="function"?hx(t):(t instanceof IDBTransaction&&ux(t),ix(t,ox())?new Proxy(t,Cd):t)}function Rr(t){if(t instanceof IDBRequest)return lx(t);if(gh.has(t))return gh.get(t);const e=dx(t);return e!==t&&(gh.set(t,e),tp.set(e,t)),e}const yh=t=>tp.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const fx=["get","getKey","getAll","getAllKeys","count"],px=["put","add","delete","clear"],_h=new Map;function uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=px.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return _h.set(e,i),i}cx(t=>({...t,get:(e,n,r)=>uy(e,n)||t.get(e,n,r),has:(e,n)=>!!uy(e,n)||t.has(e,n)}));/**
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
 */class mx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",cy="0.14.9";/**
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
 */const Wn=new Ju("@firebase/app"),yx="@firebase/app-compat",_x="@firebase/analytics-compat",vx="@firebase/analytics",wx="@firebase/app-check-compat",Ex="@firebase/app-check",Tx="@firebase/auth",Ix="@firebase/auth-compat",Sx="@firebase/database",Ax="@firebase/data-connect",xx="@firebase/database-compat",Cx="@firebase/functions",kx="@firebase/functions-compat",Rx="@firebase/installations",Px="@firebase/installations-compat",bx="@firebase/messaging",Nx="@firebase/messaging-compat",Dx="@firebase/performance",Vx="@firebase/performance-compat",Ox="@firebase/remote-config",Lx="@firebase/remote-config-compat",Mx="@firebase/storage",Fx="@firebase/storage-compat",jx="@firebase/firestore",Ux="@firebase/ai",zx="@firebase/firestore-compat",Bx="firebase",$x="12.10.0";/**
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
 */const Rd="[DEFAULT]",qx={[kd]:"fire-core",[yx]:"fire-core-compat",[vx]:"fire-analytics",[_x]:"fire-analytics-compat",[Ex]:"fire-app-check",[wx]:"fire-app-check-compat",[Tx]:"fire-auth",[Ix]:"fire-auth-compat",[Sx]:"fire-rtdb",[Ax]:"fire-data-connect",[xx]:"fire-rtdb-compat",[Cx]:"fire-fn",[kx]:"fire-fn-compat",[Rx]:"fire-iid",[Px]:"fire-iid-compat",[bx]:"fire-fcm",[Nx]:"fire-fcm-compat",[Dx]:"fire-perf",[Vx]:"fire-perf-compat",[Ox]:"fire-rc",[Lx]:"fire-rc-compat",[Mx]:"fire-gcs",[Fx]:"fire-gcs-compat",[jx]:"fire-fst",[zx]:"fire-fst-compat",[Ux]:"fire-vertex","fire-js":"fire-js",[Bx]:"fire-js-all"};/**
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
 */const du=new Map,Wx=new Map,Pd=new Map;function hy(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(Pd.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of du.values())hy(n,t);for(const n of Wx.values())hy(n,t);return!0}function Hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ps("app","Firebase",Hx);/**
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
 */class Gx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=$x;function xw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pr.create("bad-app-name",{appName:String(s)});if(n||(n=yw()),!n)throw Pr.create("no-options");const i=du.get(s);if(i){if(Or(n,i.options)&&Or(r,i.config))return i;throw Pr.create("duplicate-app",{appName:s})}const o=new ex(s);for(const u of Pd.values())o.addComponent(u);const l=new Gx(n,r,o);return du.set(s,l),l}function Xu(t=Rd){const e=du.get(t);if(!e&&t===Rd&&yw())return xw();if(!e)throw Pr.create("no-app",{appName:t});return e}function At(t,e,n){let r=qx[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(o.join(" "));return}un(new Kt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kx="firebase-heartbeat-database",Qx=1,aa="firebase-heartbeat-store";let vh=null;function Cw(){return vh||(vh=Aw(Kx,Qx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),vh}async function Yx(t){try{const n=(await Cw()).transaction(aa),r=await n.objectStore(aa).get(kw(t));return await n.done,r}catch(e){if(e instanceof Qt)Wn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function dy(t,e){try{const r=(await Cw()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,kw(t)),await r.done}catch(n){if(n instanceof Qt)Wn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function kw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jx=1024,Xx=30;class Zx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Xx){const o=nC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fy(),{heartbeatsToSend:r,unsentEntries:s}=eC(this._heartbeatsCache.heartbeats),i=hu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function fy(){return new Date().toISOString().substring(0,10)}function eC(t,e=Jx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),py(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),py(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ew()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function py(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}function nC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function rC(t){un(new Kt("platform-logger",e=>new mx(e),"PRIVATE")),un(new Kt("heartbeat",e=>new Zx(e),"PRIVATE")),At(kd,cy,t),At(kd,cy,"esm2020"),At("fire-js","")}rC("");function Rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sC=Rw,Pw=new Ps("auth","Firebase",Rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Ju("@firebase/auth");function iC(t,...e){fu.logLevel<=se.WARN&&fu.warn(`Auth (${bs}): ${t}`,...e)}function bl(t,...e){fu.logLevel<=se.ERROR&&fu.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw np(t,...e)}function En(t,...e){return np(t,...e)}function bw(t,e,n){const r={...sC(),[e]:n};return new Ps("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return bw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function np(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pw.create(t,...e)}function Q(t,e,...n){if(!t)throw np(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function Hn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oC(){return my()==="http:"||my()==="https:"}function my(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||ww()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=DA()||LA()}get(){return aC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hC=new Sa(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Jn(t,e,n,r,s={}){return Dw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ia({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return OA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(c.credentials="include"),Nw.fetch()(await Vw(t,t.config.apiHost,n,l),c)})}async function Dw(t,e,n){t._canInitEmulator=!1;const r={...uC,...e};try{const s=new fC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bw(t,f,c);cn(t,f)}}catch(s){if(s instanceof Qt)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Aa(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?rp(t.config,s):`${t.config.apiScheme}://${s}`;return cC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function dC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),hC.get())})}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}function gy(t){return t!==void 0&&t.enterprise!==void 0}class pC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mC(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function pu(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=sp(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fo(wh(s.auth_time)),issuedAtTime:Fo(wh(s.iat)),expirationTime:Fo(wh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wh(t){return Number(t)*1e3}function sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=pw(n);return s?JSON.parse(s):(bl("Failed to decode base64 JWT payload"),null)}catch(s){return bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yy(t){const e=sp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&_C(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _C({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await la(t,pu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Ow(s.providerUserInfo):[],o=EC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Nd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function wC(t){const e=Te(t);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ow(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){const n=await Dw(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Vw(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(u.credentials="include"),Nw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IC(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=yy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ci;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new vC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yC(this,e)}reload(){return wC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await la(this,gC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:I,providerData:k,stsTokenManager:R}=n;Q(m&&R,e,"internal-error");const b=ci.fromJSON(this.name,R);Q(typeof m=="string",e,"internal-error"),ar(r,e.name),ar(s,e.name),Q(typeof p=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),ar(i,e.name),ar(o,e.name),ar(l,e.name),ar(u,e.name),ar(c,e.name),ar(f,e.name);const w=new tn({uid:m,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return k&&Array.isArray(k)&&(w.providerData=k.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new ci;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ow(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ci;l.updateFromIdToken(r);const u=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new Map;function Mn(t){Hn(t instanceof Function,"Expected a class definition");let e=_y.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_y.set(t,e),e)}/**
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
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lw.type="NONE";const vy=Lw;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pu(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hi(Mn(vy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Mn(vy);const o=Nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const p=await pu(e,{idToken:f}).catch(()=>{});if(!p)break;m=await tn._fromGetAccountInfoResponse(e,p,f)}else m=tn._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new hi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new hi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if($w(e))return"Webos";if(Fw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=ct()){return/firefox\//i.test(t)}function Fw(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=ct()){return/crios\//i.test(t)}function Uw(t=ct()){return/iemobile/i.test(t)}function zw(t=ct()){return/android/i.test(t)}function Bw(t=ct()){return/blackberry/i.test(t)}function $w(t=ct()){return/webos/i.test(t)}function ip(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SC(t=ct()){var e;return ip(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AC(){return MA()&&document.documentMode===10}function qw(t=ct()){return ip(t)||zw(t)||$w(t)||Bw(t)||/windows phone/i.test(t)||Uw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=wy(ct());break;case"Worker":n=`${wy(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CC(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
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
 */const kC=6;class RC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ey(this),this.idTokenSubscription=new Ey(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pu(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(jn(this));const n=e?Te(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CC(this),n=new RC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&iC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ns(t){return Te(t)}class Ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=qA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){Zu=t}function Hw(t){return Zu.loadJS(t)}function NC(){return Zu.recaptchaEnterpriseScript}function DC(){return Zu.gapiScript}function VC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class OC{constructor(){this.enterprise=new LC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class LC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const MC="recaptcha-enterprise",Gw="NO_RECAPTCHA";class FC{constructor(e){this.type=MC,this.auth=Ns(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{mC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new pC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;gy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Gw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&gy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NC();u.length!==0&&(u+=l),Hw(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ty(t,e,n,r=!1,s=!1){const i=new FC(t);let o;if(s)o=Gw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ty(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ty(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e){const n=Hr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Or(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function UC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zC(t,e,n){const r=Ns(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kw(e),{host:o,port:l}=BC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Or(c,r.config.emulator)&&Or(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Rs(o)?(Zf(`${i}//${o}${u}`),ep("Auth",!0)):$C()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Iy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Iy(o)}}}function Iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $C(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function qC(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return Aa(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}async function HC(t,e){return Jn(t,"POST","/v1/accounts:sendOobCode",Yn(t,e))}async function GC(t,e){return HC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function QC(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends op{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,n,"signInWithPassword",WC);case"emailLink":return KC(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,r,"signUpPassword",qC);case"emailLink":return QC(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return Aa(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="http://localhost";class vs extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XC(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class ap{constructor(e){const n=To(Io(e)),r=n.apiKey??null,s=n.oobCode??null,i=JC(n.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=XC(e);try{return new ap(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ap.parseLink(n);return Q(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends Qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends xa{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends xa{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends xa{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return Aa(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=Sy(r);return new ws({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Sy(r);return new ws({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends Qt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gu(e,n,r,s)}}function Yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(t,i,e,r):i})}async function ek(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function tk(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await la(t,Yw(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=sp(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ws._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){if(Rt(t.app))return Promise.reject(jn(t));const r="signIn",s=await Yw(t,r,e),i=await ws._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nk(t,e){return Jw(Ns(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t){const e=Ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rk(t,e,n){if(Rt(t.app))return Promise.reject(jn(t));const r=Ns(t),o=await Dd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Xw(t),u}),l=await ws._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function sk(t,e,n){return Rt(t.app)?Promise.reject(jn(t)):nk(Te(t),Ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xw(t),r})}async function ik(t,e){const n=Te(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await GC(n.auth,s);i!==t.email&&await t.reload()}function ok(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function ak(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function lk(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function uk(t){return Te(t).signOut()}const yu="__sak";/**
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
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=1e3,hk=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const dk=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
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
 */function fk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await fk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=lp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function mk(t){Tn().location.href=t}/**
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
 */function rE(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function gk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _k(){return rE()?self:null}/**
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
 */const sE="firebaseLocalStorageDb",vk=1,_u="firebaseLocalStorage",iE="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([_u],e?"readwrite":"readonly").objectStore(_u)}function wk(){const t=indexedDB.deleteDatabase(sE);return new Ca(t).toPromise()}function Vd(){const t=indexedDB.open(sE,vk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_u,{keyPath:iE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_u)?e(r):(r.close(),await wk(),e(await Vd()))})})}async function Ay(t,e,n){const r=tc(t,!0).put({[iE]:e,value:n});return new Ca(r).toPromise()}async function Ek(t,e){const n=tc(t,!1).get(e),r=await new Ca(n).toPromise();return r===void 0?null:r.value}function xy(t,e){const n=tc(t,!0).delete(e);return new Ca(n).toPromise()}const Tk=800,Ik=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(_k()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await gk(),!this.activeServiceWorker)return;this.sender=new pk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await Ay(e,yu,"1"),await xy(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ek(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new Ca(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const Sk=oE;new Sa(3e4,6e4);/**
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
 */function Ak(t,e){return e?Mn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class up extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return Jw(t.auth,new up(t),t.bypassAuthState)}function Ck(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tk(n,new up(t),t.bypassAuthState)}async function kk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),ek(n,new up(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return kk;case"reauthViaPopup":case"reauthViaRedirect":return Ck;default:cn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Sa(2e3,1e4);class ri extends aE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rk.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="pendingRedirect",Dl=new Map;class bk extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const r=await Nk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nk(t,e){const n=Ok(e),r=Vk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Dk(t,e){Dl.set(t._key(),e)}function Vk(t){return Mn(t._redirectPersistence)}function Ok(t){return Nl(Pk,t.config.apiKey,t.name)}async function Lk(t,e,n=!1){if(Rt(t.app))return Promise.reject(jn(t));const r=Ns(t),s=Ak(r,e),o=await new bk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=10*60*1e3;class Fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cy(e))}saveEventToCache(e){this.cachedEventUids.add(Cy(e)),this.lastProcessedEventTime=Date.now()}}function Cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bk=/^https?/;async function $k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Uk(t);for(const n of e)try{if(qk(n))return}catch{}cn(t,"unauthorized-domain")}function qk(t){const e=bd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Bk.test(n))return!1;if(zk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Wk=new Sa(3e4,6e4);function ky(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hk(t){return new Promise((e,n)=>{var s,i,o;function r(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(En(t,"network-request-failed"))},timeout:Wk.get()})}if((i=(s=Tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Tn().gapi)!=null&&o.load)r();else{const l=VC("iframefcb");return Tn()[l]=()=>{gapi.load?r():n(En(t,"network-request-failed"))},Hw(`${DC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function Gk(t){return Vl=Vl||Hk(t),Vl}/**
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
 */const Kk=new Sa(5e3,15e3),Qk="__/auth/iframe",Yk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rp(e,Yk):`https://${t.config.authDomain}/${Qk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=Xk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ia(r).slice(1)}`}async function eR(t){const e=await Gk(t),n=Tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Zk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},Kk.get());function u(){Tn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const tR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nR=500,rR=600,sR="_blank",iR="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oR(t,e,n,r=nR,s=rR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...tR,width:r.toString(),height:s.toString(),top:i,left:o},c=ct().toLowerCase();n&&(l=jw(c)?sR:n),Mw(c)&&(e=e||iR,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[I,k])=>`${p}${I}=${k},`,"");if(SC(c)&&l!=="_self")return aR(e||"",l),new Ry(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Ry(m)}function aR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lR="__/auth/handler",uR="emulator/auth/handler",cR=encodeURIComponent("fac");async function Py(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof Qw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$A(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof xa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${cR}=${encodeURIComponent(u)}`:"";return`${hR(t)}?${Ia(l).slice(1)}${c}`}function hR({config:t}){return t.emulator?rp(t,uR):`https://${t.authDomain}/${lR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="webStorageSupport";class dR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=Lk,this._overrideRedirectResult=Dk}async _openPopup(e,n,r,s){var o;Hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Py(e,n,r,bd(),s);return oR(e,i,lp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Py(e,n,r,bd(),s);return mk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eR(e),r=new Fk(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eh,{type:Eh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Eh];i!==void 0&&n(!!i),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qw()||Fw()||ip()}}const fR=dR;var by="@firebase/auth",Ny="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gR(t){un(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},c=new PC(r,s,i,u);return UC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Kt("auth-internal",e=>{const n=Ns(e.getProvider("auth").getImmediate());return(r=>new pR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(by,Ny,mR(t)),At(by,Ny,"esm2020")}/**
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
 */const yR=5*60,_R=_w("authIdTokenMaxAge")||yR;let Dy=null;const vR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_R)return;const s=n==null?void 0:n.token;Dy!==s&&(Dy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wR(t=Xu()){const e=Hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jC(t,{popupRedirectResolver:fR,persistence:[Sk,dk,nE]}),r=_w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vR(i.toString());ak(n,o,()=>o(n.currentUser)),ok(n,l=>o(l))}}const s=mw("auth");return s&&zC(n,`http://${s}`),n}function ER(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ER().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gR("Browser");var Vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,uE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function S(){}S.prototype=g.prototype,T.F=g.prototype,T.prototype=new S,T.prototype.constructor=T,T.D=function(E,C,P){for(var x=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)x[ue-2]=arguments[ue];return g.prototype[C].apply(E,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,S){S||(S=0);const E=Array(16);if(typeof g=="string")for(var C=0;C<16;++C)E[C]=g.charCodeAt(S++)|g.charCodeAt(S++)<<8|g.charCodeAt(S++)<<16|g.charCodeAt(S++)<<24;else for(C=0;C<16;++C)E[C]=g[S++]|g[S++]<<8|g[S++]<<16|g[S++]<<24;g=T.g[0],S=T.g[1],C=T.g[2];let P=T.g[3],x;x=g+(P^S&(C^P))+E[0]+3614090360&4294967295,g=S+(x<<7&4294967295|x>>>25),x=P+(C^g&(S^C))+E[1]+3905402710&4294967295,P=g+(x<<12&4294967295|x>>>20),x=C+(S^P&(g^S))+E[2]+606105819&4294967295,C=P+(x<<17&4294967295|x>>>15),x=S+(g^C&(P^g))+E[3]+3250441966&4294967295,S=C+(x<<22&4294967295|x>>>10),x=g+(P^S&(C^P))+E[4]+4118548399&4294967295,g=S+(x<<7&4294967295|x>>>25),x=P+(C^g&(S^C))+E[5]+1200080426&4294967295,P=g+(x<<12&4294967295|x>>>20),x=C+(S^P&(g^S))+E[6]+2821735955&4294967295,C=P+(x<<17&4294967295|x>>>15),x=S+(g^C&(P^g))+E[7]+4249261313&4294967295,S=C+(x<<22&4294967295|x>>>10),x=g+(P^S&(C^P))+E[8]+1770035416&4294967295,g=S+(x<<7&4294967295|x>>>25),x=P+(C^g&(S^C))+E[9]+2336552879&4294967295,P=g+(x<<12&4294967295|x>>>20),x=C+(S^P&(g^S))+E[10]+4294925233&4294967295,C=P+(x<<17&4294967295|x>>>15),x=S+(g^C&(P^g))+E[11]+2304563134&4294967295,S=C+(x<<22&4294967295|x>>>10),x=g+(P^S&(C^P))+E[12]+1804603682&4294967295,g=S+(x<<7&4294967295|x>>>25),x=P+(C^g&(S^C))+E[13]+4254626195&4294967295,P=g+(x<<12&4294967295|x>>>20),x=C+(S^P&(g^S))+E[14]+2792965006&4294967295,C=P+(x<<17&4294967295|x>>>15),x=S+(g^C&(P^g))+E[15]+1236535329&4294967295,S=C+(x<<22&4294967295|x>>>10),x=g+(C^P&(S^C))+E[1]+4129170786&4294967295,g=S+(x<<5&4294967295|x>>>27),x=P+(S^C&(g^S))+E[6]+3225465664&4294967295,P=g+(x<<9&4294967295|x>>>23),x=C+(g^S&(P^g))+E[11]+643717713&4294967295,C=P+(x<<14&4294967295|x>>>18),x=S+(P^g&(C^P))+E[0]+3921069994&4294967295,S=C+(x<<20&4294967295|x>>>12),x=g+(C^P&(S^C))+E[5]+3593408605&4294967295,g=S+(x<<5&4294967295|x>>>27),x=P+(S^C&(g^S))+E[10]+38016083&4294967295,P=g+(x<<9&4294967295|x>>>23),x=C+(g^S&(P^g))+E[15]+3634488961&4294967295,C=P+(x<<14&4294967295|x>>>18),x=S+(P^g&(C^P))+E[4]+3889429448&4294967295,S=C+(x<<20&4294967295|x>>>12),x=g+(C^P&(S^C))+E[9]+568446438&4294967295,g=S+(x<<5&4294967295|x>>>27),x=P+(S^C&(g^S))+E[14]+3275163606&4294967295,P=g+(x<<9&4294967295|x>>>23),x=C+(g^S&(P^g))+E[3]+4107603335&4294967295,C=P+(x<<14&4294967295|x>>>18),x=S+(P^g&(C^P))+E[8]+1163531501&4294967295,S=C+(x<<20&4294967295|x>>>12),x=g+(C^P&(S^C))+E[13]+2850285829&4294967295,g=S+(x<<5&4294967295|x>>>27),x=P+(S^C&(g^S))+E[2]+4243563512&4294967295,P=g+(x<<9&4294967295|x>>>23),x=C+(g^S&(P^g))+E[7]+1735328473&4294967295,C=P+(x<<14&4294967295|x>>>18),x=S+(P^g&(C^P))+E[12]+2368359562&4294967295,S=C+(x<<20&4294967295|x>>>12),x=g+(S^C^P)+E[5]+4294588738&4294967295,g=S+(x<<4&4294967295|x>>>28),x=P+(g^S^C)+E[8]+2272392833&4294967295,P=g+(x<<11&4294967295|x>>>21),x=C+(P^g^S)+E[11]+1839030562&4294967295,C=P+(x<<16&4294967295|x>>>16),x=S+(C^P^g)+E[14]+4259657740&4294967295,S=C+(x<<23&4294967295|x>>>9),x=g+(S^C^P)+E[1]+2763975236&4294967295,g=S+(x<<4&4294967295|x>>>28),x=P+(g^S^C)+E[4]+1272893353&4294967295,P=g+(x<<11&4294967295|x>>>21),x=C+(P^g^S)+E[7]+4139469664&4294967295,C=P+(x<<16&4294967295|x>>>16),x=S+(C^P^g)+E[10]+3200236656&4294967295,S=C+(x<<23&4294967295|x>>>9),x=g+(S^C^P)+E[13]+681279174&4294967295,g=S+(x<<4&4294967295|x>>>28),x=P+(g^S^C)+E[0]+3936430074&4294967295,P=g+(x<<11&4294967295|x>>>21),x=C+(P^g^S)+E[3]+3572445317&4294967295,C=P+(x<<16&4294967295|x>>>16),x=S+(C^P^g)+E[6]+76029189&4294967295,S=C+(x<<23&4294967295|x>>>9),x=g+(S^C^P)+E[9]+3654602809&4294967295,g=S+(x<<4&4294967295|x>>>28),x=P+(g^S^C)+E[12]+3873151461&4294967295,P=g+(x<<11&4294967295|x>>>21),x=C+(P^g^S)+E[15]+530742520&4294967295,C=P+(x<<16&4294967295|x>>>16),x=S+(C^P^g)+E[2]+3299628645&4294967295,S=C+(x<<23&4294967295|x>>>9),x=g+(C^(S|~P))+E[0]+4096336452&4294967295,g=S+(x<<6&4294967295|x>>>26),x=P+(S^(g|~C))+E[7]+1126891415&4294967295,P=g+(x<<10&4294967295|x>>>22),x=C+(g^(P|~S))+E[14]+2878612391&4294967295,C=P+(x<<15&4294967295|x>>>17),x=S+(P^(C|~g))+E[5]+4237533241&4294967295,S=C+(x<<21&4294967295|x>>>11),x=g+(C^(S|~P))+E[12]+1700485571&4294967295,g=S+(x<<6&4294967295|x>>>26),x=P+(S^(g|~C))+E[3]+2399980690&4294967295,P=g+(x<<10&4294967295|x>>>22),x=C+(g^(P|~S))+E[10]+4293915773&4294967295,C=P+(x<<15&4294967295|x>>>17),x=S+(P^(C|~g))+E[1]+2240044497&4294967295,S=C+(x<<21&4294967295|x>>>11),x=g+(C^(S|~P))+E[8]+1873313359&4294967295,g=S+(x<<6&4294967295|x>>>26),x=P+(S^(g|~C))+E[15]+4264355552&4294967295,P=g+(x<<10&4294967295|x>>>22),x=C+(g^(P|~S))+E[6]+2734768916&4294967295,C=P+(x<<15&4294967295|x>>>17),x=S+(P^(C|~g))+E[13]+1309151649&4294967295,S=C+(x<<21&4294967295|x>>>11),x=g+(C^(S|~P))+E[4]+4149444226&4294967295,g=S+(x<<6&4294967295|x>>>26),x=P+(S^(g|~C))+E[11]+3174756917&4294967295,P=g+(x<<10&4294967295|x>>>22),x=C+(g^(P|~S))+E[2]+718787259&4294967295,C=P+(x<<15&4294967295|x>>>17),x=S+(P^(C|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const S=g-this.blockSize,E=this.C;let C=this.h,P=0;for(;P<g;){if(C==0)for(;P<=S;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<g;)if(E[C++]=T.charCodeAt(P++),C==this.blockSize){s(this,E),C=0;break}}else for(;P<g;)if(E[C++]=T[P++],C==this.blockSize){s(this,E),C=0;break}}this.h=C,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var S=T.length-8;S<T.length;++S)T[S]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,S=0;S<4;++S)for(let E=0;E<32;E+=8)T[g++]=this.g[S]>>>E&255;return T};function i(T,g){var S=l;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=g(T)}function o(T,g){this.h=g;const S=[];let E=!0;for(let C=T.length-1;C>=0;C--){const P=T[C]|0;E&&P==g||(S[C]=P,E=!1)}this.g=S}var l={};function u(T){return-128<=T&&T<128?i(T,function(g){return new o([g|0],g<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return b(c(-T));const g=[];let S=1;for(let E=0;T>=S;E++)g[E]=T/S|0,S*=4294967296;return new o(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return b(f(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(g,8));let E=m;for(let P=0;P<T.length;P+=8){var C=Math.min(8,T.length-P);const x=parseInt(T.substring(P,P+C),g);C<8?(C=c(Math.pow(g,C)),E=E.j(C).add(c(x))):(E=E.j(S),E=E.add(c(x)))}return E}var m=u(0),p=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();let T=0,g=1;for(let S=0;S<this.g.length;S++){const E=this.i(S);T+=(E>=0?E:4294967296+E)*g,g*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(R(this))return"-"+b(this).toString(T);const g=c(Math.pow(T,6));var S=this;let E="";for(;;){const C=D(S,g).g;S=w(S,C.j(g));let P=((S.g.length>0?S.g[0]:S.h)>>>0).toString(T);if(S=C,k(S))return P+E;for(;P.length<6;)P="0"+P;E=P+E}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=w(this,T),R(T)?-1:k(T)?0:1};function b(T){const g=T.g.length,S=[];for(let E=0;E<g;E++)S[E]=~T.g[E];return new o(S,~T.h).add(p)}t.abs=function(){return R(this)?b(this):this},t.add=function(T){const g=Math.max(this.g.length,T.g.length),S=[];let E=0;for(let C=0;C<=g;C++){let P=E+(this.i(C)&65535)+(T.i(C)&65535),x=(P>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);E=x>>>16,P&=65535,x&=65535,S[C]=x<<16|P}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(T,g){return T.add(b(g))}t.j=function(T){if(k(this)||k(T))return m;if(R(this))return R(T)?b(this).j(b(T)):b(b(this).j(T));if(R(T))return b(this.j(b(T)));if(this.l(I)<0&&T.l(I)<0)return c(this.m()*T.m());const g=this.g.length+T.g.length,S=[];for(var E=0;E<2*g;E++)S[E]=0;for(E=0;E<this.g.length;E++)for(let C=0;C<T.g.length;C++){const P=this.i(E)>>>16,x=this.i(E)&65535,ue=T.i(C)>>>16,Me=T.i(C)&65535;S[2*E+2*C]+=x*Me,v(S,2*E+2*C),S[2*E+2*C+1]+=P*Me,v(S,2*E+2*C+1),S[2*E+2*C+1]+=x*ue,v(S,2*E+2*C+1),S[2*E+2*C+2]+=P*ue,v(S,2*E+2*C+2)}for(T=0;T<g;T++)S[T]=S[2*T+1]<<16|S[2*T];for(T=g;T<2*g;T++)S[T]=0;return new o(S,0)};function v(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function A(T,g){this.g=T,this.h=g}function D(T,g){if(k(g))throw Error("division by zero");if(k(T))return new A(m,m);if(R(T))return g=D(b(T),g),new A(b(g.g),b(g.h));if(R(g))return g=D(T,b(g)),new A(b(g.g),g.h);if(T.g.length>30){if(R(T)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var S=p,E=g;E.l(T)<=0;)S=O(S),E=O(E);var C=M(S,1),P=M(E,1);for(E=M(E,2),S=M(S,2);!k(E);){var x=P.add(E);x.l(T)<=0&&(C=C.add(S),P=x),E=M(E,1),S=M(S,1)}return g=w(T,C.j(g)),new A(C,g)}for(C=m;T.l(g)>=0;){for(S=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(S)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),P=c(S),x=P.j(g);R(x)||x.l(T)>0;)S-=E,P=c(S),x=P.j(g);k(P)&&(P=p),C=C.add(P),T=w(T,x)}return new A(C,T)}t.B=function(T){return D(this,T).h},t.and=function(T){const g=Math.max(this.g.length,T.g.length),S=[];for(let E=0;E<g;E++)S[E]=this.i(E)&T.i(E);return new o(S,this.h&T.h)},t.or=function(T){const g=Math.max(this.g.length,T.g.length),S=[];for(let E=0;E<g;E++)S[E]=this.i(E)|T.i(E);return new o(S,this.h|T.h)},t.xor=function(T){const g=Math.max(this.g.length,T.g.length),S=[];for(let E=0;E<g;E++)S[E]=this.i(E)^T.i(E);return new o(S,this.h^T.h)};function O(T){const g=T.g.length+1,S=[];for(let E=0;E<g;E++)S[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(S,T.h)}function M(T,g){const S=g>>5;g%=32;const E=T.g.length-S,C=[];for(let P=0;P<E;P++)C[P]=g>0?T.i(P+S)>>>g|T.i(P+S+1)<<32-g:T.i(P+S);return new o(C,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,uE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,br=o}).apply(typeof Vy<"u"?Vy:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cE,So,hE,Ol,Od,dE,fE,pE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,N,V){for(var U=Array(arguments.length-2),te=2;te<arguments.length;te++)U[te-2]=arguments[te];return h.prototype[N].apply(y,U)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function k(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let U=0;U<V;U++)a[d+U]=N[U]}else a.push(N)}}class R{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,d){const y=A.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var A=new R(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,T=new v,g=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(S)}};function S(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){b(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function x(a){return/^[\s\xa0]*$/.test(a)}function ue(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ue,C),ue.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Me="closure_listenable_"+(Math.random()*1e6|0),Fe=0;function Yt(a,h,d,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=N,this.key=++Fe,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function J(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ne(a){const h={};for(const d in a)h[d]=a[d];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xn(a,h){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let V=0;V<Ie.length;V++)d=Ie[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function xt(a){this.src=a,this.g={},this.h=0}xt.prototype.add=function(a,h,d,y,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=yt(a,h,y,N);return U>-1?(h=a[U],d||(h.fa=!1)):(h=new Yt(h,this.src,V,!!y,N),h.fa=d,a.push(h)),h};function Ft(a,h){const d=h.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,h,void 0),V;(V=N>=0)&&Array.prototype.splice.call(y,N,1),V&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function yt(a,h,d,y){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==y)return N}return-1}var jt="closure_lm_"+(Math.random()*1e6|0),Os={};function Oa(a,h,d,y,N){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Oa(a,h[V],d,y,N);return null}return d=zi(d),a&&a[Me]?a.J(h,d,l(y)?!!y.capture:!1,N):Sc(a,h,d,!1,y,N)}function Sc(a,h,d,y,N,V){if(!h)throw Error("Invalid event type");const U=l(N)?!!N.capture:!!N;let te=Qe(a);if(te||(a[jt]=te=new xt(a)),d=te.add(h,d,y,U,V),d.proxy)return d;if(y=Ac(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)P||(N=U),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent($(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ac(){function a(d){return h.call(a.src,a.listener,d)}const h=Ut;return a}function La(a,h,d,y,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)La(a,h[V],d,y,N);else y=l(y)?!!y.capture:!!y,d=zi(d),a&&a[Me]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=yt(h,d,y,N),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Qe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=yt(h,d,y,N)),(d=a>-1?h[a]:null)&&Ui(d))}function Ui(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Me])Ft(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent($(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Qe(h))?(Ft(d,a),d.h==0&&(d.src=null,h[jt]=null)):z(a)}}}function $(a){return a in Os?Os[a]:Os[a]="on"+a}function Ut(a,h){if(a.da)a=!0;else{h=new ue(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&Ui(a),a=d.call(y,h)}return a}function Qe(a){return a=a[jt],a instanceof xt?a:null}var Ls="__closure_events_fn_"+(Math.random()*1e9>>>0);function zi(a){return typeof a=="function"?a:(a[Ls]||(a[Ls]=function(h){return a.handleEvent(h)}),a[Ls])}function $e(){E.call(this),this.i=new xt(this),this.M=this,this.G=null}m($e,E),$e.prototype[Me]=!0,$e.prototype.removeEventListener=function(a,h,d,y){La(this,a,h,d,y)};function qe(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(y,a),Xn(h,N)}N=!0;let V,U;if(d)for(U=d.length-1;U>=0;U--)V=h.g=d[U],N=Zn(V,y,!0,h)&&N;if(V=h.g=a,N=Zn(V,y,!0,h)&&N,N=Zn(V,y,!1,h)&&N,d)for(U=0;U<d.length;U++)V=h.g=d[U],N=Zn(V,y,!1,h)&&N}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)z(d[y]);delete a.g[h],a.h--}}this.G=null},$e.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},$e.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function Zn(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let V=0;V<h.length;++V){const U=h[V];if(U&&!U.da&&U.capture==d){const te=U.listener,je=U.ha||U.src;U.fa&&Ft(a.i,U),N=te.call(je,y)!==!1&&N}}return N&&!y.defaultPrevented}function SI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function em(a){a.g=SI(()=>{a.g=null,a.i&&(a.i=!1,em(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class AI extends E{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:em(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(a){E.call(this),this.h=a,this.g={}}m(Bi,E);var tm=[];function nm(a){G(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ui(h)},a),a.g={}}Bi.prototype.N=function(){Bi.Z.N.call(this),nm(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xc=o.JSON.stringify,xI=o.JSON.parse,CI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function rm(){}function sm(){}var $i={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cc(){C.call(this,"d")}m(Cc,C);function kc(){C.call(this,"c")}m(kc,C);var Yr={},im=null;function Ma(){return im=im||new $e}Yr.Ia="serverreachability";function om(a){C.call(this,Yr.Ia,a)}m(om,C);function qi(a){const h=Ma();qe(h,new om(h))}Yr.STAT_EVENT="statevent";function am(a,h){C.call(this,Yr.STAT_EVENT,a),this.stat=h}m(am,C);function ht(a){const h=Ma();qe(h,new am(h,a))}Yr.Ja="timingevent";function lm(a,h){C.call(this,Yr.Ja,a),this.size=h}m(lm,C);function Wi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Hi(){this.g=!0}Hi.prototype.ua=function(){this.g=!1};function kI(a,h,d,y,N,V){a.info(function(){if(a.g)if(V){var U="",te=V.split("&");for(let de=0;de<te.length;de++){var je=te[de].split("=");if(je.length>1){const We=je[0];je=je[1];const fn=We.split("_");U=fn.length>=2&&fn[1]=="type"?U+(We+"="+je+"&"):U+(We+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+d+`
`+U})}function RI(a,h,d,y,N,V,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+d+`
`+V+" "+U})}function Ms(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+bI(a,d)+(y?" "+y:"")})}function PI(a,h){a.info(function(){return"TIMEOUT: "+h})}Hi.prototype.info=function(){};function bI(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return xc(V)}catch{return h}}var Fa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},um={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cm;function Rc(){}m(Rc,rm),Rc.prototype.g=function(){return new XMLHttpRequest},cm=new Rc;function Gi(a){return encodeURIComponent(String(a))}function NI(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function er(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new Bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hm}function hm(){this.i=null,this.g="",this.h=!1}var dm={},Pc={};function bc(a,h,d){a.M=1,a.A=Ua(dn(h)),a.u=d,a.R=!0,fm(a,null)}function fm(a,h){a.F=Date.now(),ja(a),a.B=dn(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),xm(d.i,"t",y),a.C=0,d=a.j.L,a.h=new hm,a.g=qm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new AI(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(tm[0]=N.toString()),N=tm);for(let V=0;V<N.length;V++){const U=Oa(d,N[V],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?ne(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),qi(),kI(a.i,a.v,a.B,a.l,a.S,a.u)}er.prototype.ba=function(a){a=a.target;const h=this.O;h&&rr(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const te=rr(this.g),je=this.g.ya(),de=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Dm(this.g)))){this.K||te!=4||je==7||(je==8||de<=0?qi(3):qi(2)),Nc(this);var h=this.g.ca();this.X=h;var d=DI(this);if(this.o=h==200,RI(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(y)){var V=y;break t}}V=null}if(a=V)Ms(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Dc(this,a);else{this.o=!1,this.m=3,ht(12),Jr(this),Ki(this);break e}}if(this.R){a=!0;let We;for(;!this.K&&this.C<d.length;)if(We=VI(this,d),We==Pc){te==4&&(this.m=4,ht(14),a=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(We==dm){this.m=4,ht(15),Ms(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ms(this.i,this.l,We,null),Dc(this,We);if(pm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||d.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Ms(this.i,this.l,d,"[Invalid Chunked Response]"),Jr(this),Ki(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),zc(U),U.P=!0,ht(11))}}else Ms(this.i,this.l,d,null),Dc(this,d);te==4&&Jr(this),this.o&&!this.K&&(te==4?Um(this.j,this):(this.o=!1,ja(this)))}else KI(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Jr(this),Ki(this)}}}catch{}finally{}};function DI(a){if(!pm(a))return a.g.la();const h=Dm(a.g);if(h==="")return"";let d="";const y=h.length,N=rr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Jr(a),Ki(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(N&&V==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function pm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function VI(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Pc:(d=Number(h.substring(d,y)),isNaN(d)?dm:(y+=1,y+d>h.length?Pc:(h=h.slice(y,y+d),a.C=y+d,h)))}er.prototype.cancel=function(){this.K=!0,Jr(this)};function ja(a){a.T=Date.now()+a.H,mm(a,a.H)}function mm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Wi(c(a.aa,a),h)}function Nc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}er.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(PI(this.i,this.B),this.M!=2&&(qi(),ht(17)),Jr(this),this.m=2,Ki(this)):mm(this,this.T-a)};function Ki(a){a.j.I==0||a.K||Um(a.j,a)}function Jr(a){Nc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,nm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Dc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Vc(d.h,a))){if(!a.L&&Vc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Wa(d),$a(d);else break e;Uc(d),ht(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Wi(c(d.Va,d),6e3));_m(d.h)<=1&&d.ta&&(d.ta=void 0)}else Zr(d,11)}else if((a.L||d.g==a)&&Wa(d),!x(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let de=N[h];const We=de[0];if(!(We<=d.K))if(d.K=We,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const fn=de[3];fn!=null&&(d.ka=fn,d.j.info("VER="+d.ka));const es=de[4];es!=null&&(d.za=es,d.j.info("SVER="+d.za));const sr=de[5];sr!=null&&typeof sr=="number"&&sr>0&&(y=1.5*sr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const ir=a.g;if(ir){const Ga=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var V=y.h;V.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Oc(V,V.h),V.h=null))}if(y.G){const Bc=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(y.wa=Bc,ge(y.J,y.G,Bc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var U=a;if(y.na=$m(y,y.L?y.ba:null,y.W),U.L){vm(y.h,U);var te=U,je=y.O;je&&(te.H=je),te.D&&(Nc(te),ja(te)),y.g=U}else Fm(y);d.i.length>0&&qa(d)}else de[0]!="stop"&&de[0]!="close"||Zr(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Zr(d,7):jc(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}qi(4)}catch{}}var OI=class{constructor(a,h){this.g=a,this.map=h}};function gm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _m(a){return a.h?1:a.g?a.g.size:0}function Vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function vm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return I(a.i)}var Em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LI(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let N,V=null;y>=0?(N=a[d].substring(0,y),V=a[d].substring(y+1)):N=a[d],h(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function tr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof tr?(this.l=a.l,Qi(this,a.j),this.o=a.o,this.g=a.g,Yi(this,a.u),this.h=a.h,Lc(this,Cm(a.i)),this.m=a.m):a&&(h=String(a).match(Em))?(this.l=!1,Qi(this,h[1]||"",!0),this.o=Ji(h[2]||""),this.g=Ji(h[3]||"",!0),Yi(this,h[4]),this.h=Ji(h[5]||"",!0),Lc(this,h[6]||"",!0),this.m=Ji(h[7]||"")):(this.l=!1,this.i=new Zi(null,this.l))}tr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Xi(h,Tm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xi(h,Tm,!0),"@"),a.push(Gi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Xi(d,d.charAt(0)=="/"?jI:FI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Xi(d,zI)),a.join("")},tr.prototype.resolve=function(a){const h=dn(this);let d=!!a.j;d?Qi(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)Yi(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let U=0;U<N.length;){const te=N[U++];te=="."?y&&U==N.length&&V.push(""):te==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&U==N.length&&V.push("")):(V.push(te),y=!0)}y=V.join("/")}else y=N}return d?h.h=y:d=a.i.toString()!=="",d?Lc(h,Cm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function dn(a){return new tr(a)}function Qi(a,h,d){a.j=d?Ji(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Yi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Lc(a,h,d){h instanceof Zi?(a.i=h,BI(a.i,a.l)):(d||(h=Xi(h,UI)),a.i=new Zi(h,a.l))}function ge(a,h,d){a.i.set(h,d)}function Ua(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ji(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,MI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function MI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tm=/[#\/\?@]/g,FI=/[#\?:]/g,jI=/[#\?]/g,UI=/[#\?@]/g,zI=/#/g;function Zi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xr(a){a.g||(a.g=new Map,a.h=0,a.i&&LI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Zi.prototype,t.add=function(a,h){Xr(this),this.i=null,a=Fs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Im(a,h){Xr(a),h=Fs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Sm(a,h){return Xr(a),h=Fs(a,h),a.g.has(h)}t.forEach=function(a,h){Xr(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Am(a,h){Xr(a);let d=[];if(typeof h=="string")Sm(a,h)&&(d=d.concat(a.g.get(Fs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Xr(this),this.i=null,a=Fs(this,a),Sm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Am(this,a),a.length>0?String(a[0]):h):h};function xm(a,h,d){Im(a,h),d.length>0&&(a.i=null,a.g.set(Fs(a,h),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const N=Gi(d);d=Am(this,d);for(let V=0;V<d.length;V++){let U=N;d[V]!==""&&(U+="="+Gi(d[V])),a.push(U)}}return this.i=a.join("&")};function Cm(a){const h=new Zi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Fs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function BI(a,h){h&&!a.j&&(Xr(a),a.i=null,a.g.forEach(function(d,y){const N=y.toLowerCase();y!=N&&(Im(this,y),xm(this,N,d))},a)),a.j=h}function $I(a,h){const d=new Hi;if(o.Image){const y=new Image;y.onload=f(nr,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(nr,d,"TestLoadImage: error",!1,h,y),y.onabort=f(nr,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(nr,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function qI(a,h){const d=new Hi,y=new AbortController,N=setTimeout(()=>{y.abort(),nr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(N),V.ok?nr(d,"TestPingServer: ok",!0,h):nr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),nr(d,"TestPingServer: error",!1,h)})}function nr(a,h,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function WI(){this.g=new CI}function Mc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Mc,rm),Mc.prototype.g=function(){return new za(this.i,this.h)};function za(a,h){$e.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(za,$e),t=za.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,to(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;km(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function km(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?eo(this):to(this),this.readyState==3&&km(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,eo(this))},t.Na=function(a){this.g&&(this.response=a,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,to(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function to(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rm(a){let h="";return G(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function Fc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Rm(d),typeof a=="string"?d!=null&&Gi(d):ge(a,h,d))}function ke(a){$e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ke,$e);var HI=/^https?$/i,GI=["POST","PUT"];t=ke.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cm.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Pm(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(GI,h,void 0)>=0)||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Pm(this,V)}};function Pm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,bm(a),Ba(a)}function bm(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Nm(this):this.Xa())},t.Xa=function(){Nm(this)};function Nm(a){if(a.h&&typeof i<"u"){if(a.v&&rr(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),rr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=V===0){let U=String(a.D).match(Em)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!HI.test(U?U.toLowerCase():"")}d=y}if(d)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var N=rr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",bm(a)}}finally{Ba(a)}}}}function Ba(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||qe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function rr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return rr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xI(h)}};function Dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KI(a){const h={};a=(a.g&&rr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(x(a[y]))continue;var d=NI(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[N]||[];h[N]=V,V.push(d)}J(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Vm(a){this.za=0,this.i=[],this.j=new Hi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=no("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=no("baseRetryDelayMs",5e3,a),this.Za=no("retryDelaySeedMs",1e4,a),this.Ta=no("forwardChannelMaxRetries",2,a),this.va=no("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gm(a&&a.concurrentRequestLimit),this.Ba=new WI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){ht(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=$m(this,null,this.W),qa(this)};function jc(a){if(Om(a),a.I==3){var h=a.V++,d=dn(a.J);if(ge(d,"SID",a.M),ge(d,"RID",h),ge(d,"TYPE","terminate"),ro(a,d),h=new er(a,a.j,h),h.M=2,h.A=Ua(dn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=qm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ja(h)}Bm(a)}function $a(a){a.g&&(zc(a),a.g.cancel(),a.g=null)}function Om(a){$a(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function qa(a){if(!ym(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||g(),M||(O(),M=!0),T.add(h,a),a.D=0}}function QI(a,h){return _m(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Wi(c(a.Ea,a,h),zm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new er(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ne(V),Xn(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mm(this,N,h),d=dn(this.J),ge(d,"RID",a),ge(d,"CVER",22),this.G&&ge(d,"X-HTTP-Session-Id",this.G),ro(this,d),V&&(this.R?h="headers="+Gi(Rm(V))+"&"+h:this.u&&Fc(d,this.u,V)),Oc(this.h,N),this.Ra&&ge(d,"TYPE","init"),this.S?(ge(d,"$req",h),ge(d,"SID","null"),N.U=!0,bc(N,d,null)):bc(N,d,h),this.I=2}}else this.I==3&&(a?Lm(this,a):this.i.length==0||ym(this.h)||Lm(this))};function Lm(a,h){var d;h?d=h.l:d=a.V++;const y=dn(a.J);ge(y,"SID",a.M),ge(y,"RID",d),ge(y,"AID",a.K),ro(a,y),a.u&&a.o&&Fc(y,a.u,a.o),d=new er(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Mm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oc(a.h,d),bc(d,y,h)}function ro(a,h){a.H&&G(a.H,function(d,y){ge(h,y,d)}),a.l&&G({},function(d,y){ge(h,y,d)})}function Mm(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let te=-1;for(;;){const je=["count="+d];te==-1?d>0?(te=N[0].g,je.push("ofs="+te)):te=0:je.push("ofs="+te);let de=!0;for(let We=0;We<d;We++){var V=N[We].g;const fn=N[We].map;if(V-=te,V<0)te=Math.max(0,N[We].g-100),de=!1;else try{V="req"+V+"_"||"";try{var U=fn instanceof Map?fn:Object.entries(fn);for(const[es,sr]of U){let ir=sr;l(sr)&&(ir=xc(sr)),je.push(V+es+"="+encodeURIComponent(ir))}}catch(es){throw je.push(V+"type="+encodeURIComponent("_badmap")),es}}catch{y&&y(fn)}}if(de){U=je.join("&");break e}}U=void 0}return a=a.i.splice(0,d),h.G=a,U}function Fm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||g(),M||(O(),M=!0),T.add(h,a),a.A=0}}function Uc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Wi(c(a.Da,a),zm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Wi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),$a(this),jm(this))};function zc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jm(a){a.g=new er(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=dn(a.na);ge(h,"RID","rpc"),ge(h,"SID",a.M),ge(h,"AID",a.K),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(h,"TO",a.ia),ge(h,"TYPE","xmlhttp"),ro(a,h),a.u&&a.o&&Fc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ua(dn(h)),d.u=null,d.R=!0,fm(d,a)}t.Va=function(){this.C!=null&&(this.C=null,$a(this),Uc(this),ht(19))};function Wa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Um(a,h){var d=null;if(a.g==h){Wa(a),zc(a),a.g=null;var y=2}else if(Vc(a.h,h))d=h.G,vm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=Ma(),qe(y,new lm(y,d)),qa(a)}else Fm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&QI(a,h)||y==2&&Uc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Zr(a,5);break;case 4:Zr(a,10);break;case 3:Zr(a,6);break;default:Zr(a,2)}}}function zm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Zr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const N=!y;y=new tr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Qi(y,"https"),Ua(y),N?$I(y.toString(),d):qI(y.toString(),d)}else ht(2);a.I=0,a.l&&a.l.pa(h),Bm(a),Om(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Bm(a){if(a.I=0,a.ja=[],a.l){const h=wm(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function $m(a,h,d){var y=d instanceof tr?dn(d):new tr(d);if(y.g!="")h&&(y.g=h+"."+y.g),Yi(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const V=new tr(null);y&&Qi(V,y),h&&(V.g=h),N&&Yi(V,N),d&&(V.h=d),y=V}return d=a.G,h=a.wa,d&&h&&ge(y,d,h),ge(y,"VER",a.ka),ro(a,y),y}function qm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ke(new Mc({ab:d})):new ke(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wm(){}t=Wm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){$e.call(this),this.g=new Vm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!x(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new js(this)}m(Ct,$e),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){jc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=xc(a),a=d);h.i.push(new OI(h.Ya++,a)),h.I==3&&qa(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,Ct.Z.N.call(this)};function Hm(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Hm,Cc);function Gm(){kc.call(this),this.status=1}m(Gm,kc);function js(a){this.g=a}m(js,Wm),js.prototype.ra=function(){qe(this.g,"a")},js.prototype.qa=function(a){qe(this.g,new Hm(a))},js.prototype.pa=function(a){qe(this.g,new Gm)},js.prototype.oa=function(){qe(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,pE=function(){return new Ha},fE=function(){return Ma()},dE=Yr,Od={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Ol=Fa,um.COMPLETE="complete",hE=um,sm.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",$e.prototype.listen=$e.prototype.J,So=sm,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,cE=ke}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="12.10.0";function TR(t){Di=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Es=new Ju("@firebase/firestore");function zs(){return Es.logLevel}function q(t,...e){if(Es.logLevel<=se.DEBUG){const n=e.map(cp);Es.debug(`Firestore (${Di}): ${t}`,...n)}}function Gn(t,...e){if(Es.logLevel<=se.ERROR){const n=e.map(cp);Es.error(`Firestore (${Di}): ${t}`,...n)}}function Ts(t,...e){if(Es.logLevel<=se.WARN){const n=e.map(cp);Es.warn(`Firestore (${Di}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,mE(t,r,n)}function mE(t,e,n){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||mE(e,s,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class SR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AR{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new gE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class xR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class CR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Oy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=RR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Ld(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Th(s)===Th(i)?ie(s,i):Th(s)?1:-1}return ie(t.length,e.length)}const PR=55296,bR=57343;function Th(t){const e=t.charCodeAt(0);return e>=PR&&e<=bR}function Si(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ie(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):Ld(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return br.fromString(e.substring(4,e.length-2))}}class pe extends yn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const NR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends yn{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return NR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ly}static keyField(){return new Ze([Ly])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(pe.fromString(e))}static fromName(e){return new K(pe.fromString(e).popFirst(5))}static empty(){return new K(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DR(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!K.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fy(t){if(K.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _E(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function ka(t,e){if(!_E(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=-62135596800,Uy=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uy);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jy)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uy}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ka(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Le("string",ve._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ve(0,0))}static max(){return new X(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ca=-1;function VR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Lr(s,K.empty(),e)}function OR(t){return new Lr(t.readTime,t.key,ca)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(X.min(),K.empty(),ca)}static max(){return new Lr(X.max(),K.empty(),ca)}}function LR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==MR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function jR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=-1;function sc(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function UR(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="";function zR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zy(e)),e=BR(t.get(n),e);return zy(e)}function BR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vE:n+="";break;default:n+=i}}return n}function zy(t){return t+vE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $y(this.data.getIterator())}getIteratorFrom(e){return new $y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class $y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Be(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class EE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new EE("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const $R=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=$R.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="server_timestamp",IE="__type__",SE="__previous_value__",AE="__local_write_time__";function fp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[IE])==null?void 0:r.stringValue)===TE}function ic(t){const e=t.mapValue.fields[SE];return fp(e)?ic(e):e}function ha(t){const e=Mr(t.mapValue.fields[AE].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const wu="(default)";class da{constructor(e,n){this.projectId=e,this.database=n||wu}static empty(){return new da("","")}get isDefaultDatabase(){return this.database===wu}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}function WR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="__type__",HR="__max__",pl={mapValue:{}},CE="__vector__",Eu="value";function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fp(t)?4:KR(t)?9007199254740991:GR(t)?10:11:Y(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Mr(s.timestampValue),l=Mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),l=be(i.doubleValue);return o===l?vu(o)===vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(By(o)!==By(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function fa(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ai(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qy(t.timestampValue,e.timestampValue);case 4:return qy(ha(t),ha(e));case 5:return Ld(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Fr(i),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ie(l[c],u[c]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(be(i.latitude),be(o.latitude));return l!==0?l:ie(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,I,k,R;const l=i.fields||{},u=o.fields||{},c=(p=l[Eu])==null?void 0:p.arrayValue,f=(I=u[Eu])==null?void 0:I.arrayValue,m=ie(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return m!==0?m:Wy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===pl.mapValue&&o===pl.mapValue)return 0;if(i===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=Ld(u[m],f[m]);if(p!==0)return p;const I=Ai(l[u[m]],c[f[m]]);if(I!==0)return I}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Mr(t),r=Mr(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function Wy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ai(n[s],r[s]);if(i)return i}return ie(n.length,r.length)}function xi(t){return Md(t)}function Md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Md(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Md(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function Ll(t){switch(jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+Ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ll(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Gr(r.fields,(i,o)=>{s+=i.length+Ll(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function Hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fd(t){return!!t&&"integerValue"in t}function pp(t){return!!t&&"arrayValue"in t}function Gy(t){return!!t&&"nullValue"in t}function Ky(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function GR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xE])==null?void 0:r.stringValue)===CE}function jo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jo(t.arrayValue.values[n]);return e}return{...t}}function KR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jo(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=jo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ml(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(jo(this.value))}}function kE(t){const e=[];return Gr(t.fields,(n,r)=>{const s=new Ze([n]);if(Ml(r)){const i=kE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,X.min(),X.min(),X.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,X.min(),X.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,X.min(),X.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tu{constructor(e,n){this.position=e,this.inclusive=n}}function Qy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ai(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function QR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class RE{}class Oe extends RE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JR(e,n,r):n==="array-contains"?new eP(e,r):n==="in"?new tP(e,r):n==="not-in"?new nP(e,r):n==="array-contains-any"?new rP(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XR(e,r):new ZR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ai(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends RE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return PE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function PE(t){return t.op==="and"}function bE(t){return YR(t)&&PE(t)}function YR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function jd(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+xi(t.value);if(bE(t))return t.filters.map(e=>jd(e)).join(",");{const e=t.filters.map(n=>jd(n)).join(",");return`${t.op}(${e})`}}function NE(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&NE(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function DE(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${xi(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(DE).join(" ,")+"}"}(t):"Filter"}class JR extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class XR extends Oe{constructor(e,n){super(e,"in",n),this.keys=VE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZR extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=VE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class eP extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pp(n)&&fa(n.arrayValue,this.value)}}class tP extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class nP extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fa(this.value.arrayValue,n)}}class rP extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class sP{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Jy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sP(t,e,n,r,s,i,o)}function mp(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xi(r)).join(",")),e.Te=n}return e.Te}function gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yy(t.startAt,e.startAt)&&Yy(t.endAt,e.endAt)}function Ud(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function iP(t,e,n,r,s,i,o,l){return new Li(t,e,n,r,s,i,o,l)}function oc(t){return new Li(t)}function Xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oP(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function OE(t){return t.collectionGroup!==null}function Uo(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new pa(i,r))}),n.has(Ze.keyField().canonicalString())||e.Ie.push(new pa(Ze.keyField(),r))}return e.Ie}function In(t){const e=Z(t);return e.Ee||(e.Ee=aP(e,Uo(t))),e.Ee}function aP(t,e){if(t.limitType==="F")return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)});const n=t.endAt?new Tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tu(t.startAt.position,t.startAt.inclusive):null;return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zd(t,e){const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function lP(t,e){const n=t.explicitOrderBy.concat([e]);return new Li(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Bd(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return gp(In(t),In(e))&&t.limitType===e.limitType}function LE(t){return`${mp(In(t))}|lt:${t.limitType}`}function Bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>DE(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xi(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Qy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Uo(r),s)||r.endAt&&!function(o,l,u){const c=Qy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Uo(r),s))}(t,e)}function uP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ME(t){return(e,n)=>{let r=!1;for(const s of Uo(t)){const i=cP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Ai(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new Ce(K.comparator);function Kn(){return hP}const FE=new Ce(K.comparator);function Ao(...t){let e=FE;for(const n of t)e=e.insert(n.key,n);return e}function jE(t){let e=FE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ls(){return zo()}function UE(){return zo()}function zo(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const dP=new Ce(K.comparator),fP=new Be(K.comparator);function oe(...t){let e=fP;for(const n of t)e=e.add(n);return e}const pP=new Be(ie);function mP(){return pP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function zE(t){return{integerValue:""+t}}function gP(t,e){return UR(e)?zE(e):yp(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function yP(t,e,n){return t instanceof ma?function(s,i){const o={fields:{[IE]:{stringValue:TE},[AE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fp(i)&&(i=ic(i)),i&&(o.fields[SE]=i),{mapValue:o}}(n,e):t instanceof ga?$E(t,e):t instanceof ya?qE(t,e):function(s,i){const o=BE(s,i),l=Zy(o)+Zy(s.Ae);return Fd(o)&&Fd(s.Ae)?zE(l):yp(s.serializer,l)}(t,e)}function _P(t,e,n){return t instanceof ga?$E(t,e):t instanceof ya?qE(t,e):n}function BE(t,e){return t instanceof Iu?function(r){return Fd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends uc{}class ga extends uc{constructor(e){super(),this.elements=e}}function $E(t,e){const n=WE(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends uc{constructor(e){super(),this.elements=e}}function qE(t,e){let n=WE(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class Iu extends uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Zy(t){return be(t.integerValue||t.doubleValue)}function WE(t){return pp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.field=e,this.transform=n}}function wP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ga&&s instanceof ga||r instanceof ya&&s instanceof ya?Si(r.elements,s.elements,xn):r instanceof Iu&&s instanceof Iu?xn(r.Ae,s.Ae):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class EP{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function HE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KE(t.key,on.none()):new Ra(t.key,t.data,on.none());{const n=t.data,r=wt.empty();let s=new Be(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kr(t.key,r,new bt(s.toArray()),on.none())}}function TP(t,e,n){t instanceof Ra?function(s,i,o){const l=s.value.clone(),u=t_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=t_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(GE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof Ra?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=i.value.clone(),f=n_(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=n_(i.fieldTransforms,u,o),f=o.data;return f.setAll(GE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=BE(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function e_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Si(r,s,(i,o)=>wP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends cc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kr extends cc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function GE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function t_(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_P(o,l,n[s]))}return r}function n_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yP(i,o,e))}return r}class KE extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SP extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=HE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,r)=>e_(n,r))&&Si(this.baseMutations,e.baseMutations,(n,r)=>e_(n,r))}}class _p{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return dP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _p(e,n,r,s)}}/**
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
 */class xP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ae;function kP(t){switch(t){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function QE(t){if(t===void 0)return Gn("GRPC error has no .code"),L.UNKNOWN;switch(t){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:t})}}(ae=De||(De={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RP(){return new TextEncoder}/**
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
 */const PP=new br([4294967295,4294967295],0);function r_(t){const e=RP().encode(t),n=new uE;return n.update(e),new Uint8Array(n.digest())}function s_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new br([n,r],0),new br([s,i],0)]}class vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=br.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(br.fromNumber(r)));return s.compare(PP)===1&&(s=new br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=r_(e),[r,s]=s_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=r_(e),[r,s]=s_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(X.min(),s,new Ce(ie),Kn(),oe())}}class Pa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pa(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class YE{constructor(e,n){this.targetId=e,this.Ce=n}}class JE{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class i_{constructor(){this.ve=0,this.Fe=o_(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new Pa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=o_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.He=ml(),this.Je=ml(),this.Ze=new Ce(ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ud(i))if(r===0){const o=new K(i.path);this.et(n,o,lt.newNoDocument(o,X.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof EE)return Ts("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vp(o,s,i)}catch(u){return Ts(u instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ud(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,lt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=oe();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new hc(e,n,this.Ze,this.je,r);return this.je=Kn(),this.He=ml(),this.Je=ml(),this.Ze=new Ce(ie),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new i_,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Be(ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Be(ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new i_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ml(){return new Ce(K.comparator)}function o_(){return new Ce(K.comparator)}const NP={asc:"ASCENDING",desc:"DESCENDING"},DP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VP={and:"AND",or:"OR"};class OP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $d(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LP(t,e){return Su(t,e.toTimestamp())}function Sn(t){return ce(!!t,49232),X.fromTimestamp(function(n){const r=Mr(n);return new ve(r.seconds,r.nanos)}(t))}function wp(t,e){return qd(t,e).canonicalString()}function qd(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ZE(t){const e=pe.fromString(t);return ce(sT(e),10190,{key:e.toString()}),e}function Wd(t,e){return wp(t.databaseId,e.path)}function Ih(t,e){const n=ZE(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(tT(n))}function eT(t,e){return wp(t.databaseId,e)}function MP(t){const e=ZE(t);return e.length===4?pe.emptyPath():tT(e)}function Hd(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tT(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function a_(t,e,n){return{name:Wd(t,e),fields:n.value.mapValue.fields}}function FP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:QE(c.code);return new B(f,c.message||"")}(o);n=new JE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ih(t,r.document.name),i=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):X.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new jl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ih(t,r.document),i=r.readTime?Sn(r.readTime):X.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ih(t,r.document),i=r.removedTargetIds||[];n=new jl([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CP(s,i),l=r.targetId;n=new YE(l,o)}}return n}function jP(t,e){let n;if(e instanceof Ra)n={update:a_(t,e.key,e.value)};else if(e instanceof KE)n={delete:Wd(t,e.key)};else if(e instanceof Kr)n={update:a_(t,e.key,e.data),updateMask:KP(e.fieldMask)};else{if(!(e instanceof SP))return Y(16599,{dt:e.type});n={verify:Wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Iu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function UP(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Sn(s.updateTime):Sn(i);return o.isEqual(X.min())&&(o=Sn(i)),new EP(o,s.transformResults||[])}(n,e))):[]}function zP(t,e){return{documents:[eT(t,e.path)]}}function BP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eT(t,s);const i=function(c){if(c.length!==0)return rT(hn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(p){return{field:$s(p.field),direction:WP(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$d(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function $P(t){let e=MP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const p=nT(m);return p instanceof hn&&bE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(k){return new pa(qs(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,sc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,I=m.values||[];return new Tu(I,p)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const p=!m.before,I=m.values||[];return new Tu(I,p)}(n.endAt)),iP(e,s,o,i,l,"F",u,c)}function qP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qs(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qs(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>nT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function WP(t){return NP[t]}function HP(t){return DP[t]}function GP(t){return VP[t]}function $s(t){return{fieldPath:t.canonicalString()}}function qs(t){return Ze.fromServerFormat(t.fieldPath)}function rT(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Ky(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NAN"}};if(Gy(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ky(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NAN"}};if(Gy(n.value))return{unaryFilter:{field:$s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(n.field),op:HP(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>rT(s));return r.length===1?r[0]:{compositeFilter:{op:GP(n.op),filters:r}}}(t):Y(54877,{filter:t})}function KP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function iT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,s,i=X.min(),o=X.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.yt=e}}function YP(t){const e=$P({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bd(e,e.limit,"L"):e}/**
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
 */class JP{constructor(){this.Sn=new XP}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Lr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class XP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(pe.comparator)).toArray()}}/**
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
 */const l_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oT=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(oT,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ci(0)}static ar(){return new Ci(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="LruGarbageCollector",ZP=1048576;function c_([t,e],[n,r]){const s=ie(t,n);return s===0?ie(e,r):s}class eb{constructor(e){this.Pr=e,this.buffer=new Be(c_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();c_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(u_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Oi(n)?q(u_,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Ar(3e5)})}}class nb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(rc.ce);const r=new eb(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(l_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),l_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),zs()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function rb(t,e){return new nb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bo(r.mutation,s,bt.empty(),ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ao();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=zo(),l=function(){return zo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Kr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Bo(f.mutation,c,f.mutation.getFieldMask(),ve.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new ib(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=zo();let s=new Ce((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||oe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=UE();f.forEach(p=>{if(!i.has(p)){const I=HE(n.get(p),r.get(p));I!==null&&m.set(p,I),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return oP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(ls());let l=ca,u=i;return o.next(c=>F.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,oe())).next(f=>({batchId:l,changes:jE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(m,p){return new Li(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=Ao();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Bo(f.mutation,c,bt.empty(),ve.now()),lc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Sn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:YP(s.bundledQuery),readTime:Sn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class lb{constructor(){this.overlays=new Ce(K.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ls();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=ls(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=ls(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ls(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return F.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xP(n,r));let i=this.Lr.get(n);i===void 0&&(i=oe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class ub{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.kr=new Be(He.Kr),this.qr=new Be(He.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new He(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new He(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new pe([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new pe([])),r=new He(n,e),s=new He(n,e+1);let i=oe();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Be(He.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?dp:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ie);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new He(new K(i),0);let l=new Be(ie);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new He(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.ti=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||LR(OR(f),r)<=0||(s.has(f.key)||lc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new db(this)}getSize(e){return F.resolve(this.size)}}class db extends sb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.persistence=e,this.ri=new Ds(n=>mp(n),gp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new Ep,this.targetCount=0,this.oi=Ci._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this._i={},this.overlays={},this.ai=new rc(0),this.ui=!1,this.ui=!0,this.ci=new ub,this.referenceDelegate=e(this),this.li=new fb(this),this.indexManager=new JP,this.remoteDocumentCache=function(s){return new hb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new QP(n),this.Pi=new ab(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new cb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new pb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class pb extends FR{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.Ri=new Ep,this.Ai=null}static Vi(e){return new Tp(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Au{constructor(e,n){this.persistence=e,this.fi=new Ds(r=>zR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=rb(this,n)}static Vi(e,n){return new Au(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,X.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ll(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ip(e,n.fromCache,r,s)}}/**
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
 */class mb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return FA()?8:jR(ct())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new mb;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(zs()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(zs()<=se.DEBUG&&q("QueryEngine","Query:",Bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(zs()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):F.resolve())}gs(e,n){if(Xy(n))return F.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bd(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Bd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Xy(n)||s.isEqual(X.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(zs()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bs(n)),this.Ds(e,o,n,VR(s,ca)).next(l=>l))})}bs(e,n){let r=new Be(ME(e));return n.forEach((s,i)=>{lc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return zs()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Bs(n)),this.fs.getDocumentsMatchingQuery(e,n,Lr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LocalStore",yb=3e8;class _b{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ce(ie),this.Fs=new Ds(i=>mp(i),gp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ob(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function vb(t,e,n,r){return new _b(t,e,n,r)}async function lT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=oe();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function wb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,p=m.keys();let I=F.resolve();return p.forEach(k=>{I=I.next(()=>f.getEntry(u,k)).next(R=>{const b=c.docVersions.get(k);ce(b!==null,48541),R.version.compareTo(b)<0&&(m.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),f.addEntry(R)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function uT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function Eb(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const p=s.get(m);if(!p)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let I=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(nt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(R,b,w){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=yb?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(p,I,f)&&l.push(n.li.updateTargetData(i,I))});let u=Kn(),c=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Tb(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(X.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function Tb(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(Sp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function Ib(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Sb(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Gd(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Oi(o))throw o;q(Sp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function h_(t,e,n){const r=Z(t);let s=X.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=Z(u),p=m.Fs.get(f);return p!==void 0?F.resolve(m.vs.get(p)):m.li.getTargetData(c,f)}(r,o,In(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:oe())).next(l=>(Ab(r,uP(e),l),{documents:l,ks:i})))}function Ab(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class d_{constructor(){this.activeTargetIds=mP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xb{constructor(){this.vo=new d_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new d_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cb{Mo(e){}shutdown(){}}/**
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
 */const f_="ConnectivityMonitor";class p_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(f_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(f_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Kd(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="RestConnection",kb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Rb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===wu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Kd(),l=this.Qo(e,n.toUriEncodedString());q(Sh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Rs(c);return this.zo(e,l,u,r,f).then(m=>(q(Sh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ts(Sh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=kb[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection",fo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class fi extends Rb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fi.c_){const e=fE();fo(e,dE.STAT_EVENT,n=>{n.stat===Od.PROXY?q(it,"STAT_EVENT: detected buffering proxy"):n.stat===Od.NOPROXY&&q(it,"STAT_EVENT: detected no buffering proxy")}),fi.c_=!0}}zo(e,n,r,s,i){const o=Kd();return new Promise((l,u)=>{const c=new cE;c.setWithCredentials(!0),c.listenOnce(hE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ol.NO_ERROR:const m=c.getResponseJson();q(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Ol.TIMEOUT:q(it,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const p=c.getStatus();if(q(it,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const k=I==null?void 0:I.error;if(k&&k.status&&k.message){const R=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(k.status);u(new B(R,k.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(it,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Kd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");q(it,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,p=!1;const I=new Pb({Ho:k=>{p?q(it,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(q(it,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),q(it,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return fo(f,So.EventType.OPEN,()=>{p||(q(it,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),fo(f,So.EventType.CLOSE,()=>{p||(p=!0,q(it,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(f))}),fo(f,So.EventType.ERROR,k=>{p||(p=!0,Ts(it,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),I.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),fo(f,So.EventType.MESSAGE,k=>{var R;if(!p){const b=k.data[0];ce(!!b,16349);const w=b,v=(w==null?void 0:w.error)||((R=w[0])==null?void 0:R.error);if(v){q(it,`RPC '${e}' stream ${s} received error:`,v);const A=v.status;let D=function(T){const g=De[T];if(g!==void 0)return QE(g)}(A),O=v.message;A==="NOT_FOUND"&&O.includes("database")&&O.includes("does not exist")&&O.includes(this.databaseId.database)&&Ts(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=L.INTERNAL,O="Unknown error status: "+A+" with message "+v.message),p=!0,I.o_(new B(D,O)),f.close()}else q(it,`RPC '${e}' stream ${s} received:`,b),I.__(b)}}),fi.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){return new fi(t)}function Ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new OP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fi.c_=!1;class cT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="PersistentStream";class hT{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(m_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(m_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nb extends hT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=FP(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Sn(o.readTime):X.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Hd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ud(u)?{documents:zP(i,u)}:{query:BP(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=XE(i,o.resumeToken);const c=$d(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Su(i,o.snapshotVersion.toTimestamp());const c=$d(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=qP(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Hd(this.serializer),n.removeTarget=e,this.K_(n)}}class Db extends hT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=UP(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jP(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{}class Ob extends Vb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,qd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,qd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Lb(t,e,n,r){return new Ob(t,e,n,r)}class Mb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="RemoteStore";class Fb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(q(Is,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ea.add(4),await ba(c),c.Va.set("Unknown"),c.Ea.delete(4),await fc(c)}(this))})}),this.Va=new Mb(r,s)}}async function fc(t){if(Vs(t))for(const e of t.Ra)await e(!0)}async function ba(t){for(const e of t.Ra)await e(!1)}function dT(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),kp(n)?Cp(n):Mi(n).O_()&&xp(n,e))}function Ap(t,e){const n=Z(t),r=Mi(n);n.Ia.delete(e),r.O_()&&fT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Vs(n)&&n.Va.set("Unknown"))}function xp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).Z_(e)}function fT(t,e){t.da.$e(e),Mi(t).X_(e)}function Cp(t){t.da=new bP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.Va.ua()}function kp(t){return Vs(t)&&!Mi(t).x_()&&t.Ia.size>0}function Vs(t){return Z(t).Ea.size===0}function pT(t){t.da=void 0}async function jb(t){t.Va.set("Online")}async function Ub(t){t.Ia.forEach((e,n)=>{xp(t,e)})}async function zb(t,e){pT(t),kp(t)?(t.Va.ha(e),Cp(t)):t.Va.set("Unknown")}async function Bb(t,e,n){if(t.Va.set("Online"),e instanceof JE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){q(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xu(t,r)}else if(e instanceof jl?t.da.Xe(e):e instanceof YE?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await uT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),fT(i,u);const m=new wr(f.target,u,c,f.sequenceNumber);xp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Is,"Failed to raise snapshot:",r),await xu(t,r)}}async function xu(t,e,n){if(!Oi(e))throw e;t.Ea.add(1),await ba(t),t.Va.set("Offline"),n||(n=()=>uT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Is,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await fc(t)})}function mT(t,e){return e().catch(n=>xu(t,n,e))}async function pc(t){const e=Z(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:dp;for(;$b(e);)try{const s=await Ib(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,qb(e,s)}catch(s){await xu(e,s)}gT(e)&&yT(e)}function $b(t){return Vs(t)&&t.Ta.length<10}function qb(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function gT(t){return Vs(t)&&!Ur(t).x_()&&t.Ta.length>0}function yT(t){Ur(t).start()}async function Wb(t){Ur(t).ra()}async function Hb(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function Gb(t,e,n){const r=t.Ta.shift(),s=_p.from(r,e,n);await mT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pc(t)}async function Kb(t,e){e&&Ur(t).Y_&&await async function(r,s){if(function(o){return kP(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Ur(r).B_(),await mT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pc(r)}}(t,e),gT(t)&&yT(t)}async function g_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(Is,"RemoteStore received new credentials");const r=Vs(n);n.Ea.add(3),await ba(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await fc(n)}async function Qb(t,e){const n=Z(t);e?(n.Ea.delete(2),await fc(n)):e||(n.Ea.add(2),await ba(n),n.Va.set("Unknown"))}function Mi(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new Nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:jb.bind(null,t),Yo:Ub.bind(null,t),t_:zb.bind(null,t),J_:Bb.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),kp(t)?Cp(t):t.Va.set("Unknown")):(await t.ma.stop(),pT(t))})),t.ma}function Ur(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new Db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Wb.bind(null,t),t_:Kb.bind(null,t),ta:Hb.bind(null,t),na:Gb.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await pc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Is,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Rp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pp(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Oi(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{static emptySet(e){return new pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.ga=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ki{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ki(e,n,pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Jb{constructor(){this.queries=__(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=__(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function __(){return new Ds(t=>LE(t),ac)}async function bp(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Yb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Pp(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Dp(n)}async function Np(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Xb(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Dp(n)}function Zb(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Dp(t){t.Ca.forEach(e=>{e.next()})}var Qd,v_;(v_=Qd||(Qd={})).Ma="default",v_.Cache="cache";class Vp{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.key=e}}class vT{constructor(e){this.key=e}}class e2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=oe(),this.mutatedKeys=oe(),this.eu=ME(e),this.tu=new pi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new y_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const p=s.get(f),I=lc(this.query,m)?m:null,k=!!p&&this.mutatedKeys.has(p.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;p&&I?p.data.isEqual(I.data)?k!==R&&(r.track({type:3,doc:I}),b=!0):this.su(p,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!p&&I?(r.track({type:0,doc:I}),b=!0):p&&!I&&(r.track({type:1,doc:p}),b=!0,(u||c)&&(l=!0)),b&&(I?(o=o.add(I),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(I,k){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:b})}};return R(I)-R(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ki(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new y_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new vT(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new _T(r))}),n}cu(e){this.Za=e.ks,this.Ya=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ki.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Op="SyncEngine";class t2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class n2{constructor(e){this.key=e,this.hu=!1}}class r2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ds(l=>LE(l),ac),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ce(K.comparator),this.Au=new Map,this.Vu=new Ep,this.du={},this.mu=new Map,this.fu=Ci.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function s2(t,e,n=!0){const r=AT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await wT(r,e,n,!0),s}async function i2(t,e){const n=AT(t);await wT(n,e,!0,!1)}async function wT(t,e,n,r){const s=await Sb(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await o2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&dT(t.remoteStore,s),l}async function o2(t,e,n,r,s){t.pu=(m,p,I)=>async function(R,b,w,v){let A=b.view.ru(w);A.Ss&&(A=await h_(R.localStore,b.query,!1).then(({documents:T})=>b.view.ru(T,A)));const D=v&&v.targetChanges.get(b.targetId),O=v&&v.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(A,R.isPrimaryClient,D,O);return E_(R,b.targetId,M.au),M.snapshot}(t,m,p,I);const i=await h_(t.localStore,e,!0),o=new e2(e,i.ks),l=o.ru(i.documents),u=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);E_(t,n,c.au);const f=new t2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function a2(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ac(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ap(r.remoteStore,s.targetId),Yd(r,s.targetId)}).catch(Vi)):(Yd(r,s.targetId),await Gd(r.localStore,s.targetId,!0))}async function l2(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ap(n.remoteStore,r.targetId))}async function u2(t,e,n){const r=g2(t);try{const s=await function(o,l){const u=Z(o),c=ve.now(),f=l.reduce((I,k)=>I.add(k.key),oe());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=Kn(),R=oe();return u.xs.getEntries(I,f).next(b=>{k=b,k.forEach((w,v)=>{v.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,k)).next(b=>{m=b;const w=[];for(const v of l){const A=IP(v,m.get(v.key).overlayedDocument);A!=null&&w.push(new Kr(v.key,A,kE(A.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(b=>{p=b;const w=b.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(I,b.batchId,w)})}).then(()=>({batchId:p.batchId,changes:jE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ce(ie)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await Na(r,s.changes),await pc(r.remoteStore)}catch(s){const i=Pp(s,"Failed to persist write");n.reject(i)}}async function ET(t,e){const n=Z(t);try{const r=await Eb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ce(o.hu,14607):s.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await Na(n,r,e)}catch(r){await Vi(r)}}function w_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const p of m.ba)p.va(l)&&(c=!0)}),c&&Dp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ce(K.comparator);o=o.insert(i,lt.newNoDocument(i,X.min()));const l=oe().add(i),u=new hc(X.min(),new Map,new Ce(ie),o,l);await ET(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Lp(r)}else await Gd(r.localStore,e,!1).then(()=>Yd(r,e,n)).catch(Vi)}async function h2(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await wb(n.localStore,e);IT(n,r,null),TT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Na(n,s)}catch(s){await Vi(s)}}async function d2(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ce(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);IT(r,e,n),TT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Na(r,s)}catch(s){await Vi(s)}}function TT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function IT(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ST(t,r)})}function ST(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Ap(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Lp(t))}function E_(t,e,n){for(const r of n)r instanceof _T?(t.Vu.addReference(r.key,e),f2(t,r)):r instanceof vT?(q(Op,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ST(t,r.key)):Y(19791,{wu:r})}function f2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(Op,"New document in limbo: "+n),t.Eu.add(r),Lp(t))}function Lp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new n2(n)),t.Ru=t.Ru.insert(n,r),dT(t.remoteStore,new wr(In(oc(n.path)),r,"TargetPurposeLimboResolution",rc.ce))}}async function Na(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Ip.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,p=>F.forEach(p.Ts,I=>f.persistence.referenceDelegate.addReference(m,p.targetId,I)).next(()=>F.forEach(p.Is,I=>f.persistence.referenceDelegate.removeReference(m,p.targetId,I)))))}catch(m){if(!Oi(m))throw m;q(Sp,"Failed to update sequence numbers: "+m)}for(const m of c){const p=m.targetId;if(!m.fromCache){const I=f.vs.get(p),k=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(p,R)}}}(r.localStore,i))}async function p2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(Op,"User change. New user:",e.toKey());const r=await lT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Na(n,r.Ns)}}function m2(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let s=oe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function AT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ET.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c2.bind(null,e),e.Pu.J_=Xb.bind(null,e.eventManager),e.Pu.yu=Zb.bind(null,e.eventManager),e}function g2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d2.bind(null,e),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return vb(this.persistence,new gb,e.initialUser,this.serializer)}Cu(e){return new aT(Tp.Vi,this.serializer)}Du(e){return new xb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class y2 extends Cu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof Au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new aT(r=>Au.Vi(r,n),this.serializer)}}class Jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p2.bind(null,this.syncEngine),await Qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jb}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=bb(e.databaseInfo);return Lb(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Fb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>w_(this.syncEngine,n,0),function(){return p_.v()?new p_:new Cb}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new r2(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(Is,"RemoteStore shutting down."),i.Ea.add(5),await ba(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jd.provider={build:()=>new Jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirestoreClient";class _2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=hp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xh(t,e){t.asyncQueue.verifyOperationInProgress(),q(zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function T_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v2(t);q(zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>g_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>g_(e.remoteStore,s)),t._onlineComponents=e}async function v2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(zr,"Using user provided OfflineComponentProvider");try{await xh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await xh(t,new Cu)}}else q(zr,"Using default OfflineComponentProvider"),await xh(t,new y2(void 0));return t._offlineComponents}async function xT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(zr,"Using user provided OnlineComponentProvider"),await T_(t,t._uninitializedComponentsProvider._online)):(q(zr,"Using default OnlineComponentProvider"),await T_(t,new Jd))),t._onlineComponents}function w2(t){return xT(t).then(e=>e.syncEngine)}async function ku(t){const e=await xT(t),n=e.eventManager;return n.onListen=s2.bind(null,e.syncEngine),n.onUnlisten=a2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=i2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=l2.bind(null,e.syncEngine),n}function E2(t,e,n,r){const s=new Mp(r),i=new Vp(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>bp(await ku(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Np(await ku(t),i))}}function T2(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Mp({next:p=>{f.Nu(),o.enqueueAndForget(()=>Np(i,m));const I=p.docs.has(l);!I&&p.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&p.fromCache&&u&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new Vp(oc(l.path),f,{includeMetadataChanges:!0,Ka:!0});return bp(i,m)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}function I2(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Mp({next:p=>{f.Nu(),o.enqueueAndForget(()=>Np(i,m)),p.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new Vp(l,f,{includeMetadataChanges:!0,Ka:!0});return bp(i,m)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}function S2(t,e){const n=new Un;return t.asyncQueue.enqueueAndForget(async()=>u2(await w2(t),e,n)),n.promise}/**
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
 */function CT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="ComponentProvider",I_=new Map;function x2(t,e,n,r,s){return new qR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,CT(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firestore.googleapis.com",S_=!0;class A_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kT,this.ssl=S_}else this.host=e.host,this.ssl=e.ssl??S_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZP)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IR;switch(r.type){case"firstParty":return new CR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=I_.get(n);r&&(q(A2,"Removing Datastore"),I_.delete(n),r.terminate())}(this),Promise.resolve()}}function C2(t,e,n,r={}){var c;t=Dt(t,mc);const s=Rs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Zf(`https://${l}`),ep("Firestore",!0)),i.host!==kT&&i.host!==l&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Or(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=ot.MOCK_USER;else{f=vw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ot(p)}t._authCredentials=new SR(new gE(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class Pe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ka(n,Pe._jsonSchema))return new Pe(e,r||null,new K(pe.fromString(n.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Le("string",Pe._jsonSchemaVersion),referencePath:Le("string")};class Nr extends Qr{constructor(e,n,r){super(e,n,oc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new K(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function Dn(t,e,...n){if(t=Te(t),yE("collection","path",e),t instanceof mc){const r=pe.fromString(e,...n);return Fy(r),new Nr(t,null,r)}{if(!(t instanceof Pe||t instanceof Nr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Fy(r),new Nr(t.firestore,null,r)}}function bn(t,e,...n){if(t=Te(t),arguments.length===1&&(e=hp.newId()),yE("doc","path",e),t instanceof mc){const r=pe.fromString(e,...n);return My(r),new Pe(t,null,new K(r))}{if(!(t instanceof Pe||t instanceof Nr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return My(r),new Pe(t.firestore,t instanceof Nr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="AsyncQueue";class C_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new cT(this,"async_queue_retry"),this._c=()=>{const r=Ah();r&&q(x_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ah();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Un;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Oi(e))throw e;q(x_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",k_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Rp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:k_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function k_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Br extends mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new C_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C_(e),this._firestoreClient=void 0,await e}}}function k2(t,e){const n=typeof t=="object"?t:Xu(),r=typeof t=="string"?t:wu,s=Hr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gw("firestore");i&&C2(s,...i)}return s}function gc(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||R2(t),t._firestoreClient}function R2(t){var r,s,i,o;const e=t._freezeSettings(),n=x2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new _2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(nt.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ka(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Le("string",$t._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(ka(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:Le("string",An._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
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
 */class an{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ka(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new an(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:Le("string",an._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=/^__.*__$/;class b2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class RT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class jp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new jp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ru(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(PT(this.dataSource)&&P2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class N2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}createContext(e,n,r,s=!1){return new jp({dataSource:e,methodName:n,targetDoc:r,path:Ze.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new N2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bT(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);zp("Data must be an object, but it was:",o,r);const l=NT(r,o);let u,c;if(i.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=Ss(e,m,n);if(!o.contains(p))throw new B(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);OT(f,p)||f.push(p)}u=new bt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new b2(new wt(l),u,c)}class vc extends yc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}class Up extends yc{_toFieldTransform(e){return new vP(e.path,new ma)}isEqual(e){return e instanceof Up}}function D2(t,e,n,r){const s=t.createContext(1,e,n);zp("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();Gr(r,(u,c)=>{const f=VT(e,u,n);c=Te(c);const m=s.childContextForFieldPath(f);if(c instanceof vc)i.push(f);else{const p=Da(c,m);p!=null&&(i.push(f),o.set(f,p))}});const l=new bt(i);return new RT(o,l,s.fieldTransforms)}function V2(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Ss(e,r,n)],u=[s];if(i.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(Ss(e,i[p])),u.push(i[p+1]);const c=[],f=wt.empty();for(let p=l.length-1;p>=0;--p)if(!OT(c,l[p])){const I=l[p];let k=u[p];k=Te(k);const R=o.childContextForFieldPath(I);if(k instanceof vc)c.push(I);else{const b=Da(k,R);b!=null&&(c.push(I),f.set(I,b))}}const m=new bt(c);return new RT(f,m,o.fieldTransforms)}function O2(t,e,n,r=!1){return Da(n,t.createContext(r?4:3,e))}function Da(t,e){if(DT(t=Te(t)))return zp("Unsupported field value:",e,t),NT(t,e);if(t instanceof yc)return function(r,s){if(!PT(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Da(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:Su(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Su(s.serializer,i)}}if(r instanceof An)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:XE(s.serializer,r._byteString)};if(r instanceof Pe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof an)return function(o,l){const u=o instanceof an?o.toArray():o;return{mapValue:{fields:{[xE]:{stringValue:CE},[Eu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return yp(l.serializer,f)})}}}}}}(r,s);if(iT(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${nc(r)}`)}(t,e)}function NT(t,e){const n={};return wE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,s)=>{const i=Da(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function DT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof An||t instanceof $t||t instanceof Pe||t instanceof yc||t instanceof an||iT(t))}function zp(t,e,n){if(!DT(n)||!_E(n)){const r=nc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ss(t,e,n){if((e=Te(e))instanceof Fp)return e._internalPath;if(typeof e=="string")return VT(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const L2=new RegExp("[~\\*/\\[\\]]");function VT(t,e,n){if(e.search(L2)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fp(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function OT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Eu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>be(o.doubleValue));return new an(n)}convertGeoPoint(e){return new An(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ce(sT(r),9688,{name:e});const s=new da(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Bp extends M2{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function po(){return new Up("serverTimestamp")}const R_="@firebase/firestore",P_="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ss("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class F2 extends LT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $p{}class FT extends $p{}function $o(t,e,...n){let r=[];e instanceof $p&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof qp).length,l=i.filter(u=>u instanceof wc).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends FT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return jT(e._query,n),new Qr(e.firestore,e.converter,zd(e._query,n))}_parse(e){const n=_c(e.firestore);return function(i,o,l,u,c,f,m){let p;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){D_(m,f);const k=[];for(const R of m)k.push(N_(u,i,R));p={arrayValue:{values:k}}}else p=N_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||D_(m,f),p=O2(l,o,m,f==="in"||f==="not-in");return Oe.create(c,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Xd(t,e,n){const r=e,s=Ss("where",t);return wc._create(s,r,n)}class qp extends $p{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)jT(o,u),o=zd(o,u)}(e._query,n),new Qr(e.firestore,e.converter,zd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wp extends FT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(i,o)}(e._query,this._field,this._direction);return new Qr(e.firestore,e.converter,lP(e._query,n))}}function j2(t,e="asc"){const n=e,r=Ss("orderBy",t);return Wp._create(r,n)}function N_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OE(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!K.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hy(t,new K(r))}if(n instanceof Pe)return Hy(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function D_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function UT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends LT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ss("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:Le("string",ds._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Ul extends ds{data(e={}){return super.data(e)}}class fs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new Co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ul(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ul(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:U2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function U2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:Le("string",fs._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){t=Dt(t,Pe);const e=Dt(t.firestore,Br),n=gc(e);return T2(n,t._key).then(r=>zT(e,t,r))}function V_(t){t=Dt(t,Qr);const e=Dt(t.firestore,Br),n=gc(e),r=new Bp(e);return MT(t._query),I2(n,t._query).then(s=>new fs(e,r,t,s))}function B2(t,e,n){t=Dt(t,Pe);const r=Dt(t.firestore,Br),s=UT(t.converter,e),i=_c(r);return Hp(r,[bT(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function ss(t,e,n,...r){t=Dt(t,Pe);const s=Dt(t.firestore,Br),i=_c(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Fp?V2(i,"updateDoc",t._key,e,n,r):D2(i,"updateDoc",t._key,e),Hp(s,[o.toMutation(t._key,on.exists(!0))])}function yl(t,e){const n=Dt(t.firestore,Br),r=bn(t),s=UT(t.converter,e),i=_c(t.firestore);return Hp(n,[bT(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function Zd(t,...e){var c,f,m;t=Te(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||b_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(b_(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(f=p.error)==null?void 0:f.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,l;if(t instanceof Pe)o=Dt(t.firestore,Br),l=oc(t._key.path),i={next:p=>{e[r]&&e[r](zT(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Dt(t,Qr);o=Dt(p.firestore,Br),l=p._query;const I=new Bp(o);i={next:k=>{e[r]&&e[r](new fs(o,I,p,k))},error:e[r+1],complete:e[r+2]},MT(t._query)}const u=gc(o);return E2(u,l,s,i)}function Hp(t,e){const n=gc(t);return S2(n,e)}function zT(t,e,n){const r=n.docs.get(e._key),s=new Bp(t);return new ds(t,s,e._key,r,new Co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){TR(bs),un(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Br(new AR(r.getProvider("auth-internal")),new kR(o,r.getProvider("app-check-internal")),WR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),At(R_,P_,e),At(R_,P_,"esm2020")})();var $2="firebase",q2="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At($2,q2,"app");const BT="@firebase/installations",Gp="0.6.20";/**
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
 */const $T=1e4,qT=`w:${Gp}`,WT="FIS_v2",W2="https://firebaseinstallations.googleapis.com/v1",H2=60*60*1e3,G2="installations",K2="Installations";/**
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
 */const Q2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Ps(G2,K2,Q2);function HT(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
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
 */function GT({projectId:t}){return`${W2}/projects/${t}/installations`}function KT(t){return{token:t.token,requestStatus:2,expiresIn:J2(t.expiresIn),creationTime:Date.now()}}async function QT(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Y2(t,{refreshToken:e}){const n=YT(t);return n.append("Authorization",X2(e)),n}async function JT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function J2(t){return Number(t.replace("s","000"))}function X2(t){return`${WT} ${t}`}/**
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
 */async function Z2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GT(t),s=YT(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:WT,appId:t.appId,sdkVersion:qT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await JT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:KT(c.authToken)}}else throw await QT("Create Installation",u)}/**
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
 */function XT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function eN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tN=/^[cdef][\w-]{21}$/,ef="";function nN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rN(t);return tN.test(n)?n:ef}catch{return ef}}function rN(t){return eN(t).substr(0,22)}/**
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
 */function Ec(t){return`${t.appName}!${t.appId}`}/**
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
 */const ZT=new Map;function eI(t,e){const n=Ec(t);tI(n,e),sN(n,e)}function tI(t,e){const n=ZT.get(t);if(n)for(const r of n)r(e)}function sN(t,e){const n=iN();n&&n.postMessage({key:t,fid:e}),oN()}let us=null;function iN(){return!us&&"BroadcastChannel"in self&&(us=new BroadcastChannel("[Firebase] FID Change"),us.onmessage=t=>{tI(t.data.key,t.data.fid)}),us}function oN(){ZT.size===0&&us&&(us.close(),us=null)}/**
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
 */const aN="firebase-installations-database",lN=1,xs="firebase-installations-store";let Ch=null;function Kp(){return Ch||(Ch=Aw(aN,lN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}})),Ch}async function Pu(t,e){const n=Ec(t),s=(await Kp()).transaction(xs,"readwrite"),i=s.objectStore(xs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&eI(t,e.fid),e}async function nI(t){const e=Ec(t),r=(await Kp()).transaction(xs,"readwrite");await r.objectStore(xs).delete(e),await r.done}async function Tc(t,e){const n=Ec(t),s=(await Kp()).transaction(xs,"readwrite"),i=s.objectStore(xs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&eI(t,l.fid),l}/**
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
 */async function Qp(t){let e;const n=await Tc(t.appConfig,r=>{const s=uN(r),i=cN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ef?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uN(t){const e=t||{fid:nN(),registrationStatus:0};return rI(e)}function cN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dN(t)}:{installationEntry:e}}async function hN(t,e){try{const n=await Z2(t,e);return Pu(t.appConfig,n)}catch(n){throw HT(n)&&n.customData.serverCode===409?await nI(t.appConfig):await Pu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dN(t){let e=await O_(t.appConfig);for(;e.registrationStatus===1;)await XT(100),e=await O_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Qp(t);return r||n}return e}function O_(t){return Tc(t,e=>{if(!e)throw As.create("installation-not-found");return rI(e)})}function rI(t){return fN(t)?{fid:t.fid,registrationStatus:0}:t}function fN(t){return t.registrationStatus===1&&t.registrationTime+$T<Date.now()}/**
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
 */async function pN({appConfig:t,heartbeatServiceProvider:e},n){const r=mN(t,n),s=Y2(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:qT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await JT(()=>fetch(r,l));if(u.ok){const c=await u.json();return KT(c)}else throw await QT("Generate Auth Token",u)}function mN(t,{fid:e}){return`${GT(t)}/${e}/authTokens:generate`}/**
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
 */async function Yp(t,e=!1){let n;const r=await Tc(t.appConfig,i=>{if(!sI(i))throw As.create("not-registered");const o=i.authToken;if(!e&&_N(o))return i;if(o.requestStatus===1)return n=gN(t,e),i;{if(!navigator.onLine)throw As.create("app-offline");const l=wN(i);return n=yN(t,l),l}});return n?await n:r.authToken}async function gN(t,e){let n=await L_(t.appConfig);for(;n.authToken.requestStatus===1;)await XT(100),n=await L_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Yp(t,e):r}function L_(t){return Tc(t,e=>{if(!sI(e))throw As.create("not-registered");const n=e.authToken;return EN(n)?{...e,authToken:{requestStatus:0}}:e})}async function yN(t,e){try{const n=await pN(t,e),r={...e,authToken:n};return await Pu(t.appConfig,r),n}catch(n){if(HT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Pu(t.appConfig,r)}throw n}}function sI(t){return t!==void 0&&t.registrationStatus===2}function _N(t){return t.requestStatus===2&&!vN(t)}function vN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+H2}function wN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function EN(t){return t.requestStatus===1&&t.requestTime+$T<Date.now()}/**
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
 */async function TN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Qp(e);return r?r.catch(console.error):Yp(e).catch(console.error),n.fid}/**
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
 */async function IN(t,e=!1){const n=t;return await SN(n),(await Yp(n,e)).token}async function SN(t){const{registrationPromise:e}=await Qp(t);e&&await e}/**
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
 */function AN(t){if(!t||!t.options)throw kh("App Configuration");if(!t.name)throw kh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kh(t){return As.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="installations",xN="installations-internal",CN=t=>{const e=t.getProvider("app").getImmediate(),n=AN(e),r=Hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kN=t=>{const e=t.getProvider("app").getImmediate(),n=Hr(e,iI).getImmediate();return{getId:()=>TN(n),getToken:s=>IN(n,s)}};function RN(){un(new Kt(iI,CN,"PUBLIC")),un(new Kt(xN,kN,"PRIVATE"))}RN();At(BT,Gp);At(BT,Gp,"esm2020");/**
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
 */const bu="analytics",PN="firebase_id",bN="origin",NN=60*1e3,DN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jp="https://www.googletagmanager.com/gtag/js";/**
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
 */const pt=new Ju("@firebase/analytics");/**
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
 */const VN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new Ps("analytics","Analytics",VN);/**
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
 */function ON(t){if(!t.startsWith(Jp)){const e=Vt.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function oI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function LN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MN(t,e){const n=LN("firebase-js-sdk-policy",{createScriptURL:ON}),r=document.createElement("script"),s=`${Jp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function FN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await oI(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){pt.error(l)}t("config",s,i)}async function UN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await oI(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){pt.error(i)}}function zN(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await UN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await jN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){pt.error(l)}}return s}function BN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function $N(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Jp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=30,WN=1e3;class HN{constructor(e={},n=WN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const aI=new HN;function GN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function KN(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:GN(n)},s=DN.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function QN(t,e=aI,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Vt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new XN;return setTimeout(async()=>{l.abort()},NN),lI({appId:r,apiKey:s,measurementId:i},o,l,e)}async function lI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=aI){var l;const{appId:i,measurementId:o}=t;try{await YN(r,e)}catch(u){if(o)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await KN(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!JN(c)){if(s.deleteThrottleMetadata(i),o)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?oy(n,s.intervalMillis,qN):oy(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),pt.debug(`Calling attemptFetch again in ${f} millis`),lI(t,m,r,s)}}function YN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JN(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class XN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ZN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function eD(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(){if(Ew())try{await Tw()}catch(t){return pt.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nD(t,e,n,r,s,i,o){const l=QN(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>pt.error(p)),e.push(l);const u=tD().then(p=>{if(p)return r.getId()}),[c,f]=await Promise.all([l,u]);$N(i)||MN(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[bN]="firebase",m.update=!0,f!=null&&(m[PN]=f),s("config",c.measurementId,m),c.measurementId}/**
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
 */class rD{constructor(e){this.app=e}_delete(){return delete mi[this.app.options.appId],Promise.resolve()}}let mi={},M_=[];const F_={};let Rh="dataLayer",sD="gtag",j_,Xp,U_=!1;function iD(){const t=[];if(ww()&&t.push("This is a browser extension environment."),jA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function oD(t,e,n){iD();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(mi[r]!=null)throw Vt.create("already-exists",{id:r});if(!U_){FN(Rh);const{wrappedGtag:i,gtagCore:o}=BN(mi,M_,F_,Rh,sD);Xp=i,j_=o,U_=!0}return mi[r]=nD(t,M_,F_,e,j_,Rh,n),new rD(t)}function aD(t=Xu()){t=Te(t);const e=Hr(t,bu);return e.isInitialized()?e.getImmediate():lD(t)}function lD(t,e={}){const n=Hr(t,bu);if(n.isInitialized()){const s=n.getImmediate();if(Or(e,n.getOptions()))return s;throw Vt.create("already-initialized")}return n.initialize({options:e})}function uD(t,e,n){t=Te(t),eD(Xp,mi[t.app.options.appId],e,n).catch(r=>pt.error(r))}function cD(t,e,n,r){t=Te(t),ZN(Xp,mi[t.app.options.appId],e,n,r).catch(s=>pt.error(s))}const z_="@firebase/analytics",B_="0.10.20";function hD(){un(new Kt(bu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oD(r,s,n)},"PUBLIC")),un(new Kt("analytics-internal",t,"PRIVATE")),At(z_,B_),At(z_,B_,"esm2020");function t(e){try{const n=e.getProvider(bu).getImmediate();return{logEvent:(r,s,i)=>cD(n,r,s,i),setUserProperties:(r,s)=>uD(n,r,s)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}hD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebasestorage.googleapis.com",dD="storageBucket",fD=2*60*1e3,pD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Qt{constructor(e,n,r=0){super(Ph(e),`Firebase Storage: ${n} (${Ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Cn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Cn||(Cn={}));function Ph(t){return"storage/"+t}function mD(){const t="An unknown error occurred, please check the error payload for server response.";return new kn(Cn.UNKNOWN,t)}function gD(){return new kn(Cn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yD(){return new kn(Cn.CANCELED,"User canceled the upload/download.")}function _D(t){return new kn(Cn.INVALID_URL,"Invalid URL '"+t+"'.")}function vD(t){return new kn(Cn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $_(t){return new kn(Cn.INVALID_ARGUMENT,t)}function cI(){return new kn(Cn.APP_DELETED,"The Firebase app was deleted.")}function wD(t){return new kn(Cn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw vD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${s}/o${p}`,"i"),k={bucket:1,path:3},R=n===uI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",w=new RegExp(`^https?://${R}/${s}/${b}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:I,indices:k,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<A.length;D++){const O=A[D],M=O.regex.exec(e);if(M){const T=M[O.indices.bucket];let g=M[O.indices.path];g||(g=""),r=new nn(T,g),O.postModify(r);break}}if(r==null)throw _D(e);return r}}class ED{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...b){c||(c=!0,e.apply(null,b))}function m(b){s=setTimeout(()=>{s=null,t(I,u())},b)}function p(){i&&clearTimeout(i)}function I(b,...w){if(c){p();return}if(b){p(),f.call(null,b,...w);return}if(u()||o){p(),f.call(null,b,...w);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let k=!1;function R(b){k||(k=!0,p(),!c&&(s!==null?(b||(l=2),clearTimeout(s),m(0)):b||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function ID(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){return t!==void 0}function q_(t,e,n,r){if(r<e)throw $_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $_(`Invalid value for '${t}'. Expected ${n} or less.`)}function AD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Nu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nu||(Nu={}));/**
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
 */function xD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n,r,s,i,o,l,u,c,f,m,p=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=p,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,R)=>{this.resolve_=k,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _l(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Nu.NO_ERROR,u=i.getStatus();if(!l||xD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Nu.ABORT;r(!1,new _l(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new _l(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());SD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=mD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?cI():yD();o(u)}else{const u=gD();o(u)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=TD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ID(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ND(t,e,n,r,s,i,o=!0,l=!1){const u=AD(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return PD(f,e),kD(f,n),RD(f,i),bD(f,r),new CD(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Du{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Du(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VD(this._location.path)}get storage(){return this._service}get parent(){const e=DD(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new Du(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wD(e)}}function W_(t,e){const n=e==null?void 0:e[dD];return n==null?null:nn.makeFromBucketSpec(n,t)}function OD(t,e,n,r={}){t.host=`${e}:${n}`;const s=Rs(e);s&&(Zf(`https://${t.host}/b`),ep("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:vw(i,t.app.options.projectId))}class LD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=uI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fD,this._maxUploadRetryTime=pD,this._requests=new Set,s!=null?this._bucket=nn.makeFromBucketSpec(s,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Du(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ED(cI());{const o=ND(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H_="@firebase/storage",G_="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="storage";function MD(t=Xu(),e){t=Te(t);const r=Hr(t,hI).getImmediate({identifier:e}),s=gw("storage");return s&&FD(r,...s),r}function FD(t,e,n,r={}){OD(t,e,n,r)}function jD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new LD(n,r,s,e,bs)}function UD(){un(new Kt(hI,jD,"PUBLIC").setMultipleInstances(!0)),At(H_,G_,""),At(H_,G_,"esm2020")}UD();const zD={apiKey:"AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ",authDomain:"giftwave-pro.firebaseapp.com",projectId:"giftwave-pro",storageBucket:"giftwave-pro.firebasestorage.app",messagingSenderId:"964612051931",appId:"1:964612051931:web:c318a4f6ba21c51d3a8dfe",measurementId:"G-Z8YJ83DXW2"},Ic=xw(zD),mn=wR(Ic),Je=k2(Ic);MD(Ic);typeof window<"u"&&aD(Ic);const dI=H.createContext();function BD({children:t}){const[e,n]=H.useState(null),[r,s]=H.useState([]),[i,o]=H.useState(!0);H.useEffect(()=>{const I=setTimeout(()=>{o(!1)},3e3),k=lk(mn,async b=>{try{if(b){const w=bn(Je,"users",b.uid),v=await z2(w);if(v.exists()){const A=b.emailVerified,D={id:b.uid,...v.data(),isVerified:A};n(D),await ss(w,{lastSeen:"online"})}}else e&&await ss(bn(Je,"users",e.id),{lastSeen:new Date().toISOString()}),n(null)}catch(w){console.error("Auth error:",w)}finally{clearTimeout(I),o(!1)}},b=>{console.error("Auth state error:",b),clearTimeout(I),o(!1)}),R=()=>{mn.currentUser&&ss(bn(Je,"users",mn.currentUser.uid),{lastSeen:new Date().toISOString()})};return window.addEventListener("beforeunload",R),()=>{k(),clearTimeout(I),window.removeEventListener("beforeunload",R)}},[]),H.useEffect(()=>{if(e&&e.isVerified){const I=$o(Dn(Je,"users"));return Zd(I,R=>{const b=R.docs.map(w=>({id:w.id,...w.data()}));s(b)})}},[e]);const l=async(I,k,R,b,w)=>{try{const v=Dn(Je,"users"),A=$o(v,Xd("username","==",I));if(!(await V_(A)).empty)return{error:"Этот юзернейм уже занят. Выберите другой."};const M=(await rk(mn,b,k)).user;await ik(M);const T={username:I.toLowerCase(),displayName:w||I,bio:R,email:b,phone:"",isVerified:!1,role:I.toLowerCase()==="admin"?"admin":"user",avatar:`https://api.dicebear.com/7.x/shapes/svg?seed=${I}`,coins:500,createdAt:new Date().toISOString()};return await B2(bn(Je,"users",M.uid),T),n({id:M.uid,...T}),{success:!0}}catch(v){let A=v.message;return v.code==="auth/email-already-in-use"&&(A="Пользователь с такой почтой уже зарегистрирован."),{error:A}}},u=async(I,k)=>{try{return await sk(mn,I,k),{success:!0}}catch{return{error:"Неверный логин или пароль"}}},c=async()=>{if(!mn.currentUser)return;await mn.currentUser.reload();const I=mn.currentUser.emailVerified;return I&&(await ss(bn(Je,"users",mn.currentUser.uid),{isVerified:!0}),n(k=>({...k,isVerified:!0}))),I},f=async(I,k)=>{if((e==null?void 0:e.role)!=="admin")return{error:"Access denied"};try{const b=(r.find(w=>w.id===I).coins||0)+parseInt(k);return await ss(bn(Je,"users",I),{coins:b}),s(w=>w.map(v=>v.id===I?{...v,coins:b}:v)),{success:!0}}catch(R){return{error:R.message}}},m=()=>uk(mn),p=async I=>{if(e)try{if(I.username&&I.username!==e.username){const R=Dn(Je,"users"),b=$o(R,Xd("username","==",I.username));if(!(await V_(b)).empty)return{error:"Этот юзернейм уже занят."}}const k=bn(Je,"users",e.id);return await ss(k,I),n(R=>({...R,...I})),{success:!0}}catch(k){return console.error("Error updating user:",k),{error:k.message}}};return _.jsx(dI.Provider,{value:{user:e,allUsers:r,register:l,login:u,logout:m,checkVerification:c,giveCoins:f,updateUser:p,loading:i},children:!i&&t})}const Fi=()=>H.useContext(dI),fI=H.createContext();function $D({children:t}){const{user:e}=Fi(),[n,r]=H.useState([]),[s,i]=H.useState(null),[o,l]=H.useState([]),[u,c]=H.useState([]);H.useEffect(()=>{if(!e){r([]);return}const R=$o(Dn(Je,"chats"),Xd("participants","array-contains",e.id));return Zd(R,w=>{const v=w.docs.map(A=>({id:A.id,...A.data()}));r(v)})},[e]),H.useEffect(()=>{if(!s){l([]);return}const R=$o(Dn(Je,`chats/${s}/messages`),j2("timestamp","asc"));return Zd(R,w=>{const v=w.docs.map(A=>({id:A.id,...A.data()}));l(v)})},[s]);const f=async R=>{if(!e)return;const b=n.find(A=>A.type==="dm"&&A.participants.includes(R.id));if(b){i(b.id);return}const w={type:"dm",name:R.username,participants:[e.id,R.id],lastMessage:null,createdAt:po()},v=await yl(Dn(Je,"chats"),w);i(v.id)},m=async(R,b)=>{const w={type:"group",name:R,participants:[...b,e.id],lastMessage:"Группа создана",createdAt:po()},v=await yl(Dn(Je,"chats"),w);i(v.id)},p=async(R,b)=>{const w={type:"channel",name:R,participants:[...b,e.id],lastMessage:"Канал создан",createdAt:po()},v=await yl(Dn(Je,"chats"),w);i(v.id)},I=async(R,b="text",w={})=>{if(!e||!s)return;const v={chatId:s,text:R,senderId:e.id,senderName:e.username,type:b,metadata:w,timestamp:po()};await yl(Dn(Je,`chats/${s}/messages`),v),await ss(bn(Je,"chats",s),{lastMessage:R,lastUpdated:po()})},k=(R,b=8e3)=>{const w=Date.now();c(v=>[...v,{id:w,type:R}]),setTimeout(()=>c(v=>v.filter(A=>A.id!==w)),b)};return _.jsx(fI.Provider,{value:{chats:n,activeChatId:s,setActiveChatId:i,messages:o,sendMessage:I,startPrivateChat:f,createGroup:m,createChannel:p,activeEffects:u,applyEffect:k},children:t})}const Va=()=>H.useContext(fI);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(t,e)=>{const n=H.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>H.createElement("svg",{ref:f,...qD,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${WD(t)}`,l].join(" "),...c},[...e.map(([m,p])=>H.createElement(m,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=fe("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=fe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=fe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=fe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=fe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=fe("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=fe("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=fe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=fe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=fe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=fe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=fe("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=fe("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function hV(){const[t,e]=H.useState(!1),[n,r]=H.useState(!1),[s,i]=H.useState(""),[o,l]=H.useState(""),[u,c]=H.useState(""),[f,m]=H.useState(""),[p,I]=H.useState(""),[k,R]=H.useState(""),{login:b,register:w,checkVerification:v,logout:A,user:D}=Fi();H.useEffect(()=>{D&&!D.isVerified?r(!0):r(!1)},[D]);const O=async g=>{if(g.preventDefault(),R(""),t){if(!/^[a-zA-Z0-9_]+$/.test(s)){R("Юзернейм может содержать только латинские буквы, цифры и подчеркивание.");return}const S=await w(s,f,p,u,o);S.error&&R(S.error)}else{const S=await b(u,f);S.error&&R(S.error)}},M=async()=>{await v()||R("Письмо еще не подтверждено. Проверьте почту и папку Спам!")},T=async()=>{await A(),r(!1),e(!1)};return n?_.jsx("div",{className:"flex min-h-screen bg-[#09090b] text-zinc-100 font-sans",children:_.jsx("div",{className:"flex flex-col justify-center w-full max-w-md px-8 py-12 mx-auto text-center",children:_.jsxs("div",{className:"p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-xl shadow-2xl space-y-6",children:[_.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse",children:_.jsx(XD,{className:"w-10 h-10 text-emerald-500"})}),_.jsx("h2",{className:"text-2xl font-bold",children:"Подтвердите почту"}),_.jsxs("p",{className:"text-sm text-zinc-500",children:["Мы отправили ссылку на ",_.jsx("b",{children:D==null?void 0:D.email}),". Пожалуйста, перейдите по ней, чтобы активировать аккаунт."]}),_.jsxs("div",{className:"space-y-3 pt-4",children:[_.jsxs("button",{onClick:M,className:"w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all",children:[_.jsx(gI,{className:"w-4 h-4"}),"Я подтвердил! Войти"]}),_.jsx("button",{onClick:T,className:"w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all",children:"Отмена / Выйти"}),_.jsx("p",{className:"text-[10px] text-zinc-600 uppercase tracking-widest pt-2",children:"Не забудьте проверить папку Спам"})]})]})})}):_.jsxs("div",{className:"min-h-screen bg-[#09090b] flex items-center justify-center p-4 relative overflow-hidden",children:[_.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:[_.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"}),_.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse",style:{animationDelay:"1s"}})]}),_.jsx("div",{className:"w-full max-w-md animate-slide-in-up",children:_.jsxs("div",{className:"bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10",children:[_.jsxs("div",{className:"flex flex-col items-center mb-8",children:[_.jsx("div",{className:"w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-110 transition-transform duration-500",children:_.jsx(cV,{className:"w-10 h-10 text-emerald-500 fill-emerald-500/20"})}),_.jsx("h1",{className:"text-3xl font-black text-white tracking-tight mb-1",children:"GiftWave"}),_.jsx("p",{className:"text-zinc-500 text-sm font-medium",children:"Новое поколение мессенджеров"})]}),_.jsxs("div",{className:"mb-6 text-center",children:[_.jsx("h2",{className:"text-xl font-semibold",children:t?"Создать аккаунт":"С возвращением"}),_.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:t?"Используйте реальную почту для активации":"Введите данные для входа"})]}),_.jsxs("form",{onSubmit:O,className:"space-y-4",children:[t&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Имя (Отображаемое)"}),_.jsx("input",{type:"text",value:o,onChange:g=>l(g.target.value),placeholder:"Иван Иванов",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Юзернейм (@username)"}),_.jsx("input",{type:"text",value:s,onChange:g=>i(g.target.value),placeholder:"ivan_dev",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0}),_.jsx("p",{className:"text-[10px] text-zinc-500 mt-1 ml-1",children:"Только латиница, цифры и _"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Email"}),_.jsx("input",{type:"email",value:u,onChange:g=>c(g.target.value),placeholder:"alex@example.com",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Пароль"}),_.jsxs("div",{className:"relative",children:[_.jsx(YD,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600"}),_.jsx("input",{type:"password",value:f,onChange:g=>m(g.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl outline-none",required:!0,minLength:6})]})]}),k&&_.jsx("p",{className:"text-xs text-red-400 bg-red-400/10 p-2 rounded-lg text-center",children:k}),_.jsx("button",{type:"submit",className:"w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20",children:t?"Отправить ссылку активации":"Войти в систему"})]}),_.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800 text-center",children:_.jsx("button",{onClick:()=>e(!t),className:"text-sm text-zinc-400 hover:text-emerald-500 transition-colors",children:t?"Уже есть аккаунт? Войти":"Нет аккаунта? Создать сейчас"})})]})})]})}function mo({isOpen:t,onClose:e,title:n,children:r}){return H.useEffect(()=>{const s=i=>{i.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[t,e]),t?hw.createPortal(_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:_.jsxs("div",{className:"relative w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",children:[_.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-zinc-800",children:[_.jsx("h3",{className:"text-lg font-semibold text-zinc-100",children:n}),_.jsx("button",{onClick:e,className:"p-1 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors",children:_.jsx(_I,{className:"w-5 h-5"})})]}),_.jsx("div",{className:"p-4",children:r})]})}),document.body):null}const tf=async(t,e="auto")=>{var r;const n=new FormData;n.append("file",t),n.append("upload_preset","ryestqxz"),n.append("cloud_name","dnrrmyqf5"),console.log(`[Cloudinary] Starting upload... Type: ${e}, File: ${t.name}`);try{const i=await fetch(`https://api.cloudinary.com/v1_1/dnrrmyqf5/${e==="voice"?"video":e}/upload`,{method:"POST",body:n});if(!i.ok){const l=await i.json();throw console.error("[Cloudinary] Error response:",l),new Error(((r=l.error)==null?void 0:r.message)||`Upload failed: ${i.statusText}`)}const o=await i.json();return console.log("[Cloudinary] Upload success:",o.secure_url),o.secure_url}catch(s){throw console.error("[Cloudinary] Network error:",s),alert(`Ошибка загрузки файла: ${s.message}. Проверьте интернет или размер файла.`),s}};function dV(){const{user:t,allUsers:e,logout:n,updateUser:r,giveCoins:s}=Fi(),{chats:i,activeChatId:o,setActiveChatId:l,startPrivateChat:u,createGroup:c,createChannel:f}=Va(),[m,p]=H.useState(""),[I,k]=H.useState("messages"),[R,b]=H.useState(!1),[w,v]=H.useState(!1),[A,D]=H.useState(!1),[O,M]=H.useState(!1),[T,g]=H.useState(!1),[S,E]=H.useState(""),[C,P]=H.useState(100),[x,ue]=H.useState(""),[Me,Fe]=H.useState(""),[Yt,z]=H.useState(t.displayName||""),[G,J]=H.useState(t.username||""),[ne,Ie]=H.useState(t.email||""),[Xn,xt]=H.useState(t.phone||""),[Ft,yt]=H.useState(null),[jt,Os]=H.useState(!1),Oa=async $=>{if($.preventDefault(),!jt){Os(!0);try{let Ut=t.avatar;Ft&&(Ut=await tf(Ft,"image"));const Qe=await r({displayName:Yt,username:G.toLowerCase().trim(),email:ne,avatar:Ut});Qe!=null&&Qe.error?alert(Qe.error):(M(!1),yt(null))}catch(Ut){console.error("Profile update error:",Ut),alert("Ошибка при обновлении профиля: "+Ut.message)}finally{Os(!1)}}},Sc=e.filter($=>{var Ut;return $.id!==t.id&&($.username.toLowerCase().includes(m.toLowerCase())||((Ut=$.displayName)==null?void 0:Ut.toLowerCase().includes(m.toLowerCase())))}),Ac=$=>{$.preventDefault(),S&&C&&(s(S,C),alert("Монеты успешно выданы!"))},La=$=>{$.preventDefault(),x.trim()&&(c(x,[t.id]),ue(""),v(!1))},Ui=$=>{$.preventDefault(),Me.trim()&&(f(Me,[t.id]),Fe(""),D(!1))};return _.jsxs("div",{className:"w-full h-screen flex flex-col bg-[#18181b] border-r border-zinc-800/50",children:[_.jsxs("div",{className:"p-4 flex items-center justify-between border-b border-zinc-800/50 bg-[#18181b]/50 backdrop-blur-md",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsxs("div",{className:"relative",children:[_.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-xl bg-zinc-800 object-cover",alt:"me"}),_.jsx("div",{className:"absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"font-semibold text-sm truncate w-24 flex items-center gap-1",children:[t.displayName||t.username,t.role==="admin"&&_.jsx(sV,{className:"w-3 h-3 text-red-500",title:"Admin"})]}),_.jsxs("div",{className:"text-[10px] text-zinc-500 truncate w-24",children:["@",t.username]}),_.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-amber-500 font-bold uppercase tracking-tighter",children:[_.jsx(GD,{className:"w-2.5 h-2.5"}),t.coins," credits"]})]})]}),_.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors",children:_.jsx(JD,{className:"w-4 h-4"})})]}),_.jsx("div",{className:"p-4",children:_.jsxs("div",{className:"relative group",children:[_.jsx(yI,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors"}),_.jsx("input",{type:"text",value:m,onChange:$=>p($.target.value),placeholder:"Поиск людей...",className:"w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:border-emerald-500/50 outline-none transition-all"})]})}),_.jsx("div",{className:"flex px-4 mb-2 gap-1",children:[{id:"messages",icon:ZD,label:"Чаты"},{id:"groups",icon:lV,label:"Группы"},{id:"channels",icon:QD,label:"Каналы"}].map($=>_.jsxs("button",{onClick:()=>k($.id),className:`flex-1 flex flex-col items-center py-2 rounded-lg transition-all ${I===$.id?"bg-emerald-500/10 text-emerald-500":"text-zinc-500 hover:bg-zinc-800/50"}`,children:[_.jsx($.icon,{className:"w-4 h-4 mb-1"}),_.jsx("span",{className:"text-[10px] font-medium",children:$.label})]},$.id))}),_.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:m?_.jsxs("div",{className:"p-2 space-y-1",children:[_.jsx("div",{className:"px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",children:"Результаты поиска"}),Sc.map($=>_.jsxs("button",{onClick:()=>{u($),p("")},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 rounded-xl transition-all group",children:[_.jsx("img",{src:$.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:$.username}),_.jsxs("div",{className:"text-left",children:[_.jsx("div",{className:"text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors",children:$.username}),_.jsx("div",{className:"text-xs text-zinc-500 truncate w-32",children:$.bio||"Нет описания"})]})]},$.id))]}):_.jsxs("div",{className:"p-2 space-y-1",children:[i.filter($=>I==="messages"&&$.type==="dm"||I==="groups"&&$.type==="group"||I==="channels"&&$.type==="channel").map($=>{var qe;const Ut=(qe=$.participants)==null?void 0:qe.find(Zn=>Zn!==t.id),Qe=$.type==="dm"?e.find(Zn=>Zn.id===Ut):null,Ls=Qe?Qe.displayName||Qe.username:$.name,zi=Qe?Qe.avatar:null,$e=(Qe==null?void 0:Qe.lastSeen)==="online";return _.jsxs("button",{onClick:()=>l($.id),className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover-lift ${o===$.id?"bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]":"hover:bg-zinc-800/50 border border-transparent"}`,children:[_.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-500 overflow-hidden",children:[zi?_.jsx("img",{src:zi,className:"w-full h-full object-cover",alt:"avatar"}):Ls[0].toUpperCase(),$e&&_.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#18181b] rounded-full"})]}),_.jsxs("div",{className:"text-left flex-1 min-w-0",children:[_.jsx("div",{className:"text-sm font-medium text-zinc-200 truncate",children:Ls}),_.jsx("div",{className:"text-xs text-zinc-500 truncate",children:$.lastMessage||"Нет сообщений"})]})]},$.id)}),I!=="messages"&&_.jsxs("button",{onClick:()=>{I==="groups"&&v(!0),I==="channels"&&D(!0)},className:"w-full flex items-center gap-3 p-3 text-emerald-500 hover:bg-emerald-500/5 rounded-xl transition-all border border-dashed border-emerald-500/20 mt-4",children:[_.jsx(Y_,{className:"w-5 h-5"}),_.jsx("span",{className:"text-sm font-semibold",children:I==="groups"?"Создать группу":"Создать канал"})]})]})}),_.jsxs("div",{className:"p-4 border-t border-zinc-800/50 space-y-1",children:[t.role==="admin"&&_.jsxs("button",{onClick:()=>g(!0),className:"w-full flex items-center gap-3 p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm font-medium",children:[_.jsx(aV,{className:"w-4 h-4"}),"Панель разработчика"]}),_.jsxs("button",{onClick:()=>M(!0),className:"w-full flex items-center gap-3 p-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm font-medium",children:[_.jsx(rV,{className:"w-4 h-4"}),"Настройки профиля"]})]}),_.jsx(mo,{isOpen:T,onClose:()=>g(!1),title:"Console: Developer Panel",children:_.jsxs("form",{onSubmit:Ac,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Выбрать пользователя"}),_.jsxs("select",{value:S,onChange:$=>E($.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0,children:[_.jsx("option",{value:"",children:"Выберите аккаунт"}),e.map($=>_.jsxs("option",{value:$.id,children:[$.username," (ID: ",$.id,")"]},$.id))]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5 block",children:"Количество монет"}),_.jsx("input",{type:"number",value:C,onChange:$=>P($.target.value),className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:border-red-500/50 outline-none transition-all",required:!0})]}),_.jsx("button",{type:"submit",className:"w-full py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-all font-bold uppercase tracking-widest text-xs",children:"Выдать валюту"})]})}),_.jsx(mo,{isOpen:R,onClose:()=>b(!1),title:"Найти собеседника",children:_.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:e.filter($=>$.id!==t.id).map($=>_.jsxs("button",{onClick:()=>{u($),b(!1)},className:"w-full flex items-center gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-all",children:[_.jsx("img",{src:$.avatar,className:"w-10 h-10 rounded-xl bg-zinc-900",alt:$.username}),_.jsxs("div",{className:"text-left",children:[_.jsx("div",{className:"text-sm font-medium text-zinc-200",children:$.username}),_.jsx("div",{className:"text-xs text-zinc-500",children:$.bio||"Нет описания"})]})]},$.id))})}),_.jsx(mo,{isOpen:w,onClose:()=>v(!1),title:"Создать группу",children:_.jsxs("form",{onSubmit:La,className:"space-y-4",children:[_.jsx("input",{type:"text",value:x,onChange:$=>ue($.target.value),placeholder:"Название группы",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),_.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),_.jsx(mo,{isOpen:A,onClose:()=>D(!1),title:"Создать канал",children:_.jsxs("form",{onSubmit:Ui,className:"space-y-4",children:[_.jsx("input",{type:"text",value:Me,onChange:$=>Fe($.target.value),placeholder:"Название канала",className:"w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:border-emerald-500/50 outline-none",required:!0}),_.jsx("button",{type:"submit",className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all",children:"Создать"})]})}),_.jsx(mo,{isOpen:O,onClose:()=>M(!1),title:"Настройки профиля",children:_.jsxs("form",{onSubmit:Oa,className:"space-y-4",children:[_.jsxs("div",{className:"flex flex-col items-center gap-3 mb-4",children:[_.jsxs("div",{className:"relative group",children:[_.jsx("img",{src:Ft?URL.createObjectURL(Ft):t.avatar,className:"w-24 h-24 rounded-2xl bg-zinc-900 object-cover border-2 border-zinc-800",alt:"Avatar"}),_.jsxs("label",{className:"absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer transition-opacity",children:[_.jsx(Y_,{className:"w-8 h-8 text-white"}),_.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:$=>yt($.target.files[0])})]})]}),_.jsx("p",{className:"text-[10px] text-zinc-500 uppercase font-bold tracking-widest",children:"Нажмите, чтобы изменить фото"})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsx("label",{className:"text-xs text-zinc-500",children:"Отображаемое имя (русский доступен)"}),_.jsx("input",{type:"text",value:Yt,onChange:$=>z($.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsx("label",{className:"text-xs text-zinc-500",children:"Юзернейм (@username)"}),_.jsx("input",{type:"text",value:G,onChange:$=>J($.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none focus:border-emerald-500/50"})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsx("label",{className:"text-xs text-zinc-500",children:"Email"}),_.jsx("input",{type:"email",value:ne,onChange:$=>Ie($.target.value),className:"w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl outline-none"})]}),_.jsx("button",{type:"submit",disabled:jt,className:"w-full py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all font-medium flex items-center justify-center gap-2",children:jt?_.jsxs(_.Fragment,{children:[_.jsx(gI,{className:"w-4 h-4 animate-spin"}),"Загрузка..."]}):_.jsxs(_.Fragment,{children:[_.jsx(HD,{className:"w-4 h-4"}),"Сохранить изменения"]})})]})})]})}const fV=[{id:"hearts",name:"Дождь из сердец",description:"Наполните чат любовью и нежностью",price:150,effect:"hearts",icon:_.jsx(mI,{className:"w-5 h-5 text-rose-500 fill-rose-500"})},{id:"fire",name:"Пламя страсти",description:"Горячий эффект для ярких эмоций",price:300,effect:"fire",icon:_.jsx(KD,{className:"w-5 h-5 text-orange-500 fill-orange-500"})},{id:"stars",name:"Звездная пыль",description:"Волшебное сияние ночного неба",price:500,effect:"stars",icon:_.jsx(iV,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"})}];function pV({onSelect:t,onClose:e}){return _.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 w-full max-w-sm ml-auto",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[_.jsx("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest",children:"Premium Store"}),_.jsx("button",{onClick:e,className:"p-1 hover:bg-zinc-800 rounded-lg transition-colors",children:_.jsx(_I,{className:"w-4 h-4 text-zinc-600"})})]}),_.jsx("div",{className:"space-y-2",children:fV.map(n=>_.jsxs("button",{onClick:()=>t(n),className:"w-full flex items-center gap-4 p-3 bg-zinc-950/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all text-left group",children:[_.jsx("div",{className:"p-2.5 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform",children:n.icon}),_.jsxs("div",{className:"flex-1",children:[_.jsx("div",{className:"text-sm font-semibold text-zinc-100",children:n.name}),_.jsx("div",{className:"text-[10px] text-zinc-500 leading-tight",children:n.description})]}),_.jsxs("div",{className:"flex flex-col items-end",children:[_.jsx("div",{className:"text-amber-500 font-bold text-sm",children:n.price}),_.jsx("div",{className:"text-[8px] text-zinc-600 uppercase font-black",children:"Credits"})]})]},n.id))})]})}function mV(){const[t,e]=H.useState(""),[n,r]=H.useState(!1),[s,i]=H.useState(!1),[o,l]=H.useState(!1),{user:u,updateUser:c}=Fi(),{sendMessage:f,applyEffect:m,activeChatId:p}=Va(),I=H.useRef(),k=H.useRef(null),R=H.useRef([]),b=O=>{O.preventDefault(),t.trim()&&!o&&(f(t),e(""))},w=async O=>{const M=O.target.files[0];if(!(!M||!p)){l(!0);try{const T=M.type.startsWith("image/")?"image":M.type.startsWith("video/")?"video":"file",g=await tf(M,T==="video"?"video":"image");await f(M.name,T,{url:g,fileName:M.name,fileSize:M.size})}catch(T){alert("Ошибка загрузки: "+T.message)}finally{l(!1),I.current.value=""}}},v=async()=>{try{const O=await navigator.mediaDevices.getUserMedia({audio:!0});k.current=new MediaRecorder(O),R.current=[],k.current.ondataavailable=M=>{R.current.push(M.data)},k.current.onstop=async()=>{const M=new Blob(R.current,{type:"audio/webm"}),T=new File([M],`voice_${Date.now()}.webm`,{type:"audio/webm"});l(!0);try{const g=await tf(T,"video");await f("Голосовое сообщение","voice",{url:g,duration:0})}catch(g){alert("Ошибка отправки голосового: "+g.message)}finally{l(!1)}},k.current.start(),i(!0)}catch(O){alert("Доступ к микрофону отклонен: "+O.message)}},A=()=>{k.current&&s&&(k.current.stop(),i(!1),k.current.stream.getTracks().forEach(O=>O.stop()))},D=async O=>{if(u.coins>=O.price)try{const M=u.coins-O.price,T=await c({coins:M});if(T!=null&&T.error){alert(T.error);return}await f(`🎁 Отправил подарок: ${O.name}! ✨`,"gift",{giftId:O.id,giftName:O.name,effect:O.effect}),m(O.effect),r(!1)}catch(M){console.error("Gift error:",M),alert("Ошибка при покупке подарка: "+M.message)}else alert(`Недостаточно монет! Стоимость подарка: ${O.price}, у вас: ${u.coins}`)};return _.jsxs("div",{className:"relative",children:[n&&_.jsx("div",{className:"absolute bottom-full left-0 right-0 mb-4 z-20 animate-in fade-in zoom-in-95 duration-200",children:_.jsx(pV,{onSelect:D,onClose:()=>r(!1)})}),_.jsxs("div",{className:"flex flex-col gap-2",children:[o&&_.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse",children:[_.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-bounce"}),_.jsx("span",{className:"text-xs text-zinc-400",children:"Отправка файла..."})]}),_.jsxs("form",{onSubmit:b,className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 pl-4 rounded-2xl shadow-xl focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all",children:[_.jsx("input",{type:"file",ref:I,onChange:w,className:"hidden",accept:"image/*,video/*"}),_.jsx("button",{type:"button",onClick:()=>I.current.click(),className:"p-2 text-zinc-500 hover:text-zinc-200 transition-colors",children:_.jsx(tV,{className:"w-5 h-5"})}),_.jsx("input",{type:"text",value:t,onChange:O=>e(O.target.value),placeholder:s?"Идет запись голоса...":"Напишите сообщение...",disabled:s,className:"flex-1 bg-transparent border-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 py-2"}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("button",{type:"button",onClick:s?A:v,className:`p-2 rounded-xl transition-all ${s?"bg-red-500 text-white animate-pulse":"text-zinc-500 hover:text-zinc-200"}`,children:s?_.jsx(oV,{className:"w-5 h-5"}):_.jsx(eV,{className:"w-5 h-5"})}),_.jsx("button",{type:"button",onClick:()=>r(!n),className:`p-2 rounded-xl transition-all ${n?"bg-amber-500 text-black shadow-lg shadow-amber-500/20":"text-amber-500 hover:bg-amber-500/10"}`,children:_.jsx(pI,{className:"w-5 h-5"})}),_.jsx("button",{type:"submit",disabled:!t.trim()||o,className:"p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-20 disabled:grayscale transition-all shadow-lg shadow-emerald-600/20",children:_.jsx(nV,{className:"w-5 h-5"})})]})]})]})]})}function gV(){var S;const{user:t,allUsers:e}=Fi(),{messages:n,chats:r,activeChatId:s,setActiveChatId:i,applyEffect:o,activeEffects:l,sendMessage:u}=Va(),c=H.useRef(),f=H.useRef(new Set),[m,p]=H.useState(!1),[I,k]=H.useState(""),[R,b]=H.useState(!1),w=r.find(E=>E.id===s),v=(S=w==null?void 0:w.participants)==null?void 0:S.find(E=>E!==t.id),A=e.find(E=>E.id===v),D=A?A.displayName||A.username:(w==null?void 0:w.name)||"Чат",O=A?A.avatar:null,M=(A==null?void 0:A.lastSeen)==="online",T=H.useMemo(()=>I?n.filter(E=>{var C;return(C=E.text)==null?void 0:C.toLowerCase().includes(I.toLowerCase())}):n,[n,I]),g=async E=>{const C=E==="video"?"📹":"📞",P=E==="video"?"видеозвонок":"голосовой звонок",x=r.find(Fe=>Fe.id===s);if(!x)return;const ue=x.participants.find(Fe=>Fe!==t.id),Me=e.find(Fe=>Fe.id===ue);if(!Me){alert("Собеседник не найден");return}await u(`${C} ${t.displayName} пытается начать ${P}...`,"call",{callType:E,callerId:t.id,callerName:t.displayName,targetId:ue,timestamp:Date.now()}),alert(`Звонок отправлен для ${Me.displayName}!`)};return H.useEffect(()=>{if(!(!n||n.length===0))try{const E=Date.now();n.forEach(C=>{var ue;if(C.type!=="gift"||!C.timestamp||f.current.has(C.id))return;const P=C.timestamp&&typeof C.timestamp.toMillis=="function"?C.timestamp.toMillis():C.timestamp?new Date(C.timestamp).getTime():Date.now();E-P<6e4&&((ue=C.metadata)!=null&&ue.effect)&&(f.current.add(C.id),o(C.metadata.effect))})}catch(E){console.error("Gift sync error:",E)}},[n,o]),H.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[n]),s?_.jsxs("div",{className:"h-full flex flex-col bg-[#09090b] relative",children:[_.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-zinc-800/50 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40",children:[_.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[_.jsx("button",{onClick:()=>i(null),className:"p-2 -ml-2 hover:bg-zinc-800 rounded-lg text-zinc-500 md:hidden",children:_.jsx(K_,{className:"w-5 h-5"})}),_.jsx("div",{onClick:()=>b(!0),className:"w-9 h-9 rounded-xl bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500 font-bold overflow-hidden border border-emerald-500/20 shadow-sm cursor-pointer hover:scale-105 transition-transform",children:O?_.jsx("img",{src:O,className:"w-full h-full object-cover",alt:"avatar"}):D?D[0].toUpperCase():"?"}),_.jsxs("div",{onClick:()=>b(!0),className:"min-w-0 cursor-pointer",children:[_.jsx("div",{className:"text-sm font-semibold text-zinc-100 truncate hover:text-emerald-500 transition-colors",children:D}),_.jsx("div",{className:`text-[10px] flex items-center gap-1 ${M?"text-emerald-500":"text-zinc-500"}`,children:M?_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"}),"В сети"]}):_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"w-1.5 h-1.5 bg-zinc-500 rounded-full"}),A!=null&&A.lastSeen?`Был(а) ${new Date(A.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Не в сети"]})})]})]}),_.jsxs("div",{className:"flex items-center gap-1",children:[m?_.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-2 py-1 animate-in slide-in-from-right-2",children:[_.jsx("input",{autoFocus:!0,type:"text",placeholder:"Поиск...",value:I,onChange:E=>k(E.target.value),className:"bg-transparent border-none outline-none text-xs text-zinc-100 w-24 md:w-40"}),_.jsx("button",{onClick:()=>{p(!1),k("")},className:"text-zinc-500 hover:text-zinc-100 text-[10px]",children:"✕"})]}):_.jsx("button",{onClick:()=>p(!0),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:_.jsx(yI,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>g("audio"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:_.jsx(Q_,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>g("video"),className:"p-2 hover:bg-zinc-800 rounded-lg text-zinc-500",children:_.jsx(uV,{className:"w-4 h-4"})})]})]}),R&&A&&_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",children:_.jsxs("div",{className:"w-full max-w-xs bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in",children:[_.jsx("div",{className:"h-24 bg-gradient-to-br from-emerald-600/20 to-zinc-900"}),_.jsxs("div",{className:"px-6 pb-6 -mt-12 flex flex-col items-center",children:[_.jsx("div",{className:"w-24 h-24 rounded-3xl bg-zinc-800 border-4 border-zinc-900 overflow-hidden shadow-xl mb-3",children:A.avatar?_.jsx("img",{src:A.avatar,className:"w-full h-full object-cover"}):_.jsx("div",{className:"w-full h-full flex items-center justify-center text-2xl font-bold text-emerald-500",children:A.username[0].toUpperCase()})}),_.jsx("h3",{className:"text-lg font-bold text-zinc-100",children:A.displayName||A.username}),_.jsxs("p",{className:"text-xs text-zinc-500 mb-4",children:["@",A.username]}),_.jsxs("div",{className:"w-full space-y-3",children:[_.jsxs("div",{className:"p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30",children:[_.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"О себе"}),_.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed",children:A.bio||'Этот пользователь не заполнил раздел "О себе"'})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[_.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"Монеты"}),_.jsxs("div",{className:"text-sm font-bold text-emerald-500",children:["🪙 ",A.coins||0]})]}),_.jsxs("div",{className:"flex-1 p-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/30 text-center",children:[_.jsx("div",{className:"text-[10px] text-zinc-500 uppercase tracking-widest mb-1",children:"Ранг"}),_.jsx("div",{className:"text-sm font-bold text-amber-500 uppercase",children:A.role||"user"})]})]})]}),_.jsx("button",{onClick:()=>b(!1),className:"w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-bold transition-colors",children:"Закрыть"})]})]})}),_.jsx("div",{ref:c,className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-900/10",children:T.map(E=>{const C=E.senderId===t.id;return E.type==="system"?_.jsx("div",{className:"flex justify-center my-2",children:_.jsx("div",{className:"px-3 py-1 bg-zinc-800/50 text-zinc-500 text-[10px] uppercase tracking-widest rounded-full border border-zinc-700/30",children:E.text})},E.id):_.jsx("div",{className:`flex ${C?"justify-end":"justify-start"} animate-message-pop`,children:_.jsxs("div",{className:`flex flex-col max-w-[85%] ${C?"items-end":"items-start"} group mb-1`,children:[_.jsxs("div",{className:`px-4 py-2.5 rounded-2xl text-[14.5px] leading-relaxed shadow-sm relative transition-all duration-300 ${E.type==="gift"?"gift-bubble border border-zinc-800/50 py-3":E.type==="call"?"bg-blue-600/20 border border-blue-500/30 text-blue-300":E.type==="image"||E.type==="video"?"p-1.5 bg-zinc-800/80 border border-zinc-700/30":C?"bg-emerald-600 text-white rounded-tr-none shadow-emerald-900/10":"bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/30"}`,children:[E.type==="gift"&&_.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[_.jsx("div",{className:"w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30",children:_.jsx(pI,{className:"w-6 h-6 text-emerald-500/80",strokeWidth:1.5})}),_.jsx("div",{className:"text-zinc-400 text-[11px] uppercase tracking-widest font-bold opacity-60",children:"Особое внимание"}),_.jsx("div",{className:"text-zinc-100 font-light tracking-wide",children:E.text})]}),E.type==="call"&&_.jsxs("div",{className:"flex flex-col items-center text-center gap-2",children:[_.jsx("div",{className:"text-2xl mb-1",children:E.text.split(" ")[0]}),_.jsx("div",{className:"text-sm font-medium",children:E.text.replace(/^[📹📞]\s*/,"")}),_.jsx("div",{className:"text-xs opacity-70",children:"Входящий звонок"})]}),E.type==="image"&&_.jsx("img",{src:E.metadata.url,alt:"attachment",className:"max-w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(E.metadata.url,"_blank")}),E.type==="video"&&_.jsx("video",{src:E.metadata.url,controls:!0,className:"max-w-full rounded-xl overflow-hidden"}),E.type==="voice"&&_.jsxs("div",{className:"flex items-center gap-3 py-1 min-w-[200px]",children:[_.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",children:_.jsx(Q_,{className:"w-4 h-4 text-emerald-500"})}),_.jsx("audio",{src:E.metadata.url,controls:!0,className:"h-8 w-full custom-audio-player"})]}),(E.type==="text"||E.type==="gift"||E.type==="call")&&E.text]}),_.jsx("div",{className:"flex items-center gap-2 mt-1.5 px-1",children:_.jsx("span",{className:"text-[10px] text-zinc-600 font-medium",children:E.timestamp?E.timestamp.toDate?E.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date(E.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})})]})},E.id)})}),_.jsxs("div",{className:"p-6 bg-gradient-to-t from-[#09090b] to-transparent",children:[_.jsx(mV,{}),_.jsx("p",{className:"text-[10px] text-center text-zinc-600 mt-3 uppercase tracking-widest",children:"End-to-end encryption active"})]})]}):_.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-[#09090b] text-zinc-500 animate-in fade-in duration-500",children:[_.jsx("div",{className:"w-16 h-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center mb-4 border border-emerald-500/10 shadow-inner",children:_.jsx(K_,{className:"w-8 h-8 opacity-20 rotate-180"})}),_.jsx("p",{className:"text-sm font-medium tracking-wide uppercase opacity-40",children:"Выберите чат для общения"})]})}function yV(){const{activeEffects:t}=Va();return _.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:t.map(e=>_.jsxs(lf.Fragment,{children:[e.type==="hearts"&&_.jsx("div",{className:"absolute inset-0",children:[...Array(15)].map((n,r)=>_.jsx("div",{className:"absolute animate-float-up text-rose-500/40",style:{left:`${Math.random()*100}%`,top:"110%",animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`},children:_.jsx(mI,{size:20+Math.random()*30,fill:"currentColor"})},r))}),e.type==="fire"&&_.jsx("div",{className:"absolute inset-0 animate-pulse-fast bg-gradient-to-t from-orange-600/20 via-transparent to-transparent shadow-[inset_0_-50px_100px_rgba(249,115,22,0.2)]"}),e.type==="stars"&&_.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((n,r)=>_.jsx("div",{className:"absolute animate-twinkle bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${2+Math.random()*3}px`,height:`${2+Math.random()*3}px`,animationDelay:`${Math.random()*3}s`}},r))})]},e.id))})}const Zp="-",_V=t=>{const e=wV(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Zp);return l[0]===""&&l.length!==1&&l.shift(),vI(l,e)||vV(o)},getConflictingClassGroupIds:(o,l)=>{const u=n[o]||[];return l&&r[o]?[...u,...r[o]]:u}}},vI=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?vI(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Zp);return(o=e.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},J_=/^\[(.+)\]$/,vV=t=>{if(J_.test(t)){const e=J_.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},wV=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return TV(Object.entries(t.classGroups),n).forEach(([i,o])=>{nf(o,r,i,e)}),r},nf=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:X_(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(EV(s)){nf(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{nf(o,X_(e,i),n,r)})})},X_=(t,e)=>{let n=t;return e.split(Zp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},EV=t=>t.isThemeGetter,TV=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[n,s]}):t,IV=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},wI="!",SV=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=l=>{const u=[];let c=0,f=0,m;for(let b=0;b<l.length;b++){let w=l[b];if(c===0){if(w===s&&(r||l.slice(b,b+i)===e)){u.push(l.slice(f,b)),f=b+i;continue}if(w==="/"){m=b;continue}}w==="["?c++:w==="]"&&c--}const p=u.length===0?l:l.substring(f),I=p.startsWith(wI),k=I?p.substring(1):p,R=m&&m>f?m-f:void 0;return{modifiers:u,hasImportantModifier:I,baseClassName:k,maybePostfixModifierPosition:R}};return n?l=>n({className:l,parseClassName:o}):o},AV=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},xV=t=>({cache:IV(t.cacheSize),parseClassName:SV(t),..._V(t)}),CV=/\s+/,kV=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(CV);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:f,hasImportantModifier:m,baseClassName:p,maybePostfixModifierPosition:I}=n(c);let k=!!I,R=r(k?p.substring(0,I):p);if(!R){if(!k){l=c+(l.length>0?" "+l:l);continue}if(R=r(p),!R){l=c+(l.length>0?" "+l:l);continue}k=!1}const b=AV(f).join(":"),w=m?b+wI:b,v=w+R;if(i.includes(v))continue;i.push(v);const A=s(R,k);for(let D=0;D<A.length;++D){const O=A[D];i.push(w+O)}l=c+(l.length>0?" "+l:l)}return l};function RV(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=EI(e))&&(r&&(r+=" "),r+=n);return r}const EI=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=EI(t[r]))&&(n&&(n+=" "),n+=e);return n};function PV(t,...e){let n,r,s,i=o;function o(u){const c=e.reduce((f,m)=>m(f),t());return n=xV(c),r=n.cache.get,s=n.cache.set,i=l,l(u)}function l(u){const c=r(u);if(c)return c;const f=kV(u,n);return s(u,f),f}return function(){return i(RV.apply(null,arguments))}}const ye=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},TI=/^\[(?:([a-z-]+):)?(.+)\]$/i,bV=/^\d+\/\d+$/,NV=new Set(["px","full","screen"]),DV=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VV=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OV=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,LV=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,MV=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Rn=t=>gi(t)||NV.has(t)||bV.test(t),lr=t=>ji(t,"length",WV),gi=t=>!!t&&!Number.isNaN(Number(t)),bh=t=>ji(t,"number",gi),go=t=>!!t&&Number.isInteger(Number(t)),FV=t=>t.endsWith("%")&&gi(t.slice(0,-1)),ee=t=>TI.test(t),ur=t=>DV.test(t),jV=new Set(["length","size","percentage"]),UV=t=>ji(t,jV,II),zV=t=>ji(t,"position",II),BV=new Set(["image","url"]),$V=t=>ji(t,BV,GV),qV=t=>ji(t,"",HV),yo=()=>!0,ji=(t,e,n)=>{const r=TI.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},WV=t=>VV.test(t)&&!OV.test(t),II=()=>!1,HV=t=>LV.test(t),GV=t=>MV.test(t),KV=()=>{const t=ye("colors"),e=ye("spacing"),n=ye("blur"),r=ye("brightness"),s=ye("borderColor"),i=ye("borderRadius"),o=ye("borderSpacing"),l=ye("borderWidth"),u=ye("contrast"),c=ye("grayscale"),f=ye("hueRotate"),m=ye("invert"),p=ye("gap"),I=ye("gradientColorStops"),k=ye("gradientColorStopPositions"),R=ye("inset"),b=ye("margin"),w=ye("opacity"),v=ye("padding"),A=ye("saturate"),D=ye("scale"),O=ye("sepia"),M=ye("skew"),T=ye("space"),g=ye("translate"),S=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",ee,e],P=()=>[ee,e],x=()=>["",Rn,lr],ue=()=>["auto",gi,ee],Me=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Fe=()=>["solid","dashed","dotted","double","none"],Yt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",ee],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>[gi,ee];return{cacheSize:500,separator:":",theme:{colors:[yo],spacing:[Rn,lr],blur:["none","",ur,ee],brightness:ne(),borderColor:[t],borderRadius:["none","","full",ur,ee],borderSpacing:P(),borderWidth:x(),contrast:ne(),grayscale:G(),hueRotate:ne(),invert:G(),gap:P(),gradientColorStops:[t],gradientColorStopPositions:[FV,lr],inset:C(),margin:C(),opacity:ne(),padding:P(),saturate:ne(),scale:ne(),sepia:G(),skew:ne(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",ee]}],container:["container"],columns:[{columns:[ur]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Me(),ee]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:S()}],"overscroll-x":[{"overscroll-x":S()}],"overscroll-y":[{"overscroll-y":S()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[R]}],"inset-x":[{"inset-x":[R]}],"inset-y":[{"inset-y":[R]}],start:[{start:[R]}],end:[{end:[R]}],top:[{top:[R]}],right:[{right:[R]}],bottom:[{bottom:[R]}],left:[{left:[R]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",go,ee]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ee]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",go,ee]}],"grid-cols":[{"grid-cols":[yo]}],"col-start-end":[{col:["auto",{span:["full",go,ee]},ee]}],"col-start":[{"col-start":ue()}],"col-end":[{"col-end":ue()}],"grid-rows":[{"grid-rows":[yo]}],"row-start-end":[{row:["auto",{span:[go,ee]},ee]}],"row-start":[{"row-start":ue()}],"row-end":[{"row-end":ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ee]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ee,e]}],"min-w":[{"min-w":[ee,e,"min","max","fit"]}],"max-w":[{"max-w":[ee,e,"none","full","min","max","fit","prose",{screen:[ur]},ur]}],h:[{h:[ee,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ee,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ee,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ur,lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",bh]}],"font-family":[{font:[yo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ee]}],"line-clamp":[{"line-clamp":["none",gi,bh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Rn,ee]}],"list-image":[{"list-image":["none",ee]}],"list-style-type":[{list:["none","disc","decimal",ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Fe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Rn,lr]}],"underline-offset":[{"underline-offset":["auto",Rn,ee]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Me(),zV]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",UV]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$V]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[I]}],"gradient-via":[{via:[I]}],"gradient-to":[{to:[I]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...Fe(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:Fe()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Fe()]}],"outline-offset":[{"outline-offset":[Rn,ee]}],"outline-w":[{outline:[Rn,lr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:x()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[Rn,lr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ur,qV]}],"shadow-color":[{shadow:[yo]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...Yt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Yt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",ur,ee]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[A]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ee]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",ee]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[go,ee]}],"translate-x":[{"translate-x":[g]}],"translate-y":[{"translate-y":[g]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ee]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Rn,lr,bh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Nh=PV(KV);class QV extends lf.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("App Crash:",e,n)}render(){return this.state.hasError?_.jsxs("div",{className:"h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center",children:[_.jsx("h1",{className:"text-xl font-bold text-white mb-4",children:"Ой! Что-то пошло не так"}),_.jsx("p",{className:"text-zinc-400 text-sm mb-6",children:"Возможно, это из-за старого кэша приложения."}),_.jsx("button",{onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.pathname+"?clear=true"},className:"px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-all",children:"Очистить кэш и исправить"})]}):this.props.children}}function YV(){const{user:t,loading:e}=Fi(),{activeChatId:n}=Va();return e?_.jsx("div",{className:"h-screen bg-[#09090b] flex items-center justify-center",children:_.jsx("div",{className:"w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):!t||!t.isVerified?_.jsx(hV,{}):_.jsx("div",{className:"flex h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden",children:_.jsxs("div",{className:Nh("flex-1 flex",n?"mobile-chat-active":"mobile-sidebar-active"),children:[_.jsx("div",{className:Nh("w-80 md:w-80 border-r border-zinc-800/50 flex-shrink-0 transition-all duration-300",n?"hidden md:flex":"w-full md:w-80 flex"),children:_.jsx(dV,{})}),_.jsxs("main",{className:Nh("flex-1 flex flex-col relative transition-all duration-300",n?"flex":"hidden md:flex"),children:[n?_.jsx(gV,{}):_.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-zinc-600 bg-[#0c0c0e]",children:[_.jsx("div",{className:"p-6 bg-zinc-900/30 rounded-full mb-4",children:_.jsx("img",{src:t.avatar,className:"w-24 h-24 opacity-20 grayscale rounded-2xl object-cover",alt:"logo"})}),_.jsx("h3",{className:"text-xl font-medium text-zinc-400 text-center px-4",children:"Выберите чат, чтобы начать общение"})]}),_.jsx(yV,{})]})]})})}function JV(){return _.jsx(QV,{children:_.jsx(YV,{})})}console.log("--- APP VERSION 3.0.0 LOADED ---");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>console.log("SW registered v1.2.1-ULTRA-FORCE")).catch(t=>console.log("SW reg error",t))});Dh.createRoot(document.getElementById("root")).render(_.jsx(lf.StrictMode,{children:_.jsx(BD,{children:_.jsx($D,{children:_.jsx(JV,{})})})}));
