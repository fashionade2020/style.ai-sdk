//# sourceMappingURL=axios.min.map
// !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";var r,o=n(4),i=Object.prototype.toString,s=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var f=a("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=a("Date"),h=a("File"),m=a("Blob"),v=a("FileList");function y(e){return"[object Function]"===i.call(e)}var g=a("URLSearchParams");function E(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var b,O=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return e&&("function"==typeof FormData&&e instanceof FormData||"[object FormData]"===i.call(e)||y(e.toString)&&"[object FormData]"===e.toString())},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:p,isUndefined:c,isDate:d,isFile:h,isBlob:m,isFunction:y,isStream:function(e){return l(e)&&y(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:E,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)E(arguments[r],n);return t},extend:function(e,t,n){return E(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:O,isFileList:v}},function(e,t,n){"use strict";var r=n(0);function o(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(e,t,n,s,a,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),o.call(c,e.message,t,n,s,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=o},function(e,t,n){"use strict";var r=n(1);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(0).inherits(o,r,{__CANCEL__:!0}),e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(19),i=n(1),s=n(6),a=n(7),u={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(f=n(8)),f),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,i=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||i&&"multipart/form-data"===s){var u=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,u&&new u)}return i||"application/json"===s?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i.from(e,i.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(27)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(u)})),e.exports=l},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||new FormData;var n=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(i,s){if(r.isPlainObject(i)||r.isArray(i)){if(-1!==n.indexOf(i))throw Error("Circular reference detected in "+s);n.push(i),r.forEach(i,(function(n,i){if(!r.isUndefined(n)){var a,u=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),n.pop()}else t.append(s,o(i))}(e),t}},function(e,t,n){"use strict";var r=n(0),o=n(20),i=n(21),s=n(5),a=n(9),u=n(24),c=n(25),f=n(6),l=n(1),p=n(2),d=n(26);e.exports=function(e){return new Promise((function(t,n){var h,m=e.data,v=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete v["Content-Type"];var E=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",O=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+O)}var x=a(e.baseURL,e.url);function w(){if(E){var r="getAllResponseHeaders"in E?u(E.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:r,config:e,request:E};o((function(e){t(e),g()}),(function(e){n(e),g()}),i),E=null}}if(E.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=w:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(w)},E.onabort=function(){E&&(n(new l("Request aborted",l.ECONNABORTED,e,E)),E=null)},E.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,E,E)),E=null},E.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l(t,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,E)),E=null},r.isStandardBrowserEnv()){var R=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;R&&(v[e.xsrfHeaderName]=R)}"setRequestHeader"in E&&r.forEach(v,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete v[t]:E.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),y&&"json"!==y&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){E&&(n(!e||e&&e.type?new p:e),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),m||(m=null);var S=d(x);S&&-1===["http","https","file"].indexOf(S)?n(new l("Unsupported protocol "+S+":",l.ERR_BAD_REQUEST,e)):E.send(m)}))}},function(e,t,n){"use strict";var r=n(22),o=n(23);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},function(e,t){e.exports={version:"0.27.2"}},function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";var r=n(0),o=n(4),i=n(15),s=n(11);var a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(3));a.Axios=i,a.CanceledError=n(2),a.CancelToken=n(29),a.isCancel=n(10),a.VERSION=n(12).version,a.toFormData=n(7),a.AxiosError=n(1),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=n(30),a.isAxiosError=n(31),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";var r=n(0),o=n(5),i=n(16),s=n(17),a=n(11),u=n(9),c=n(28),f=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(u),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;r.length;){var d=r.shift(),h=r.shift();try{p=d(p)}catch(e){h(e);break}}try{i=s(p)}catch(e){return Promise.reject(e)}for(;u.length;)i=i.then(u.shift(),u.shift());return i},l.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(a(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(10),s=n(3),a=n(2);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0),o=n(3);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},function(e,t){e.exports=null},function(e,t,n){"use strict";var r=n(12).version,o=n(1),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new o(i(r," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var s=r[i],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new o("option "+s+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}},validators:i}},function(e,t,n){"use strict";var r=n(2);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}}])}));
//load KAKAO minified SDK.
document.write('<scr'+'ipt type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js" ></scr'+'ipt>');
//notification
class Notification{constructor(e={}){this.autoclose="number"==typeof e.autoclose?e.autoclose:7e3,this.load()}load(){if(!document.querySelector(".notification")){let e=document.createElement("div");e.className="notification",document.body.appendChild(e)}document.querySelector(".notification").addEventListener("mouseenter",e=>{e.target.classList.add("userint")}),document.querySelector(".notification").addEventListener("mouseleave",e=>{e.target.classList.remove("userint"),document.querySelectorAll(".notification .toast").forEach(e=>{this.autoClose(e,e.dataset.autoclose||this.autoclose)})})}toast(e={}){let t=e.type||"success",o=e.content||"",a=e.delay||11,s="number"==typeof e.autoclose?e.autoclose:this.autoclose;document.querySelector(".notification").offsetHeight>window.innerHeight&&document.querySelector(".notification .toast:last-child").remove(),setTimeout(()=>{let e=document.createElement("div");if(e.className="toast show toast-"+t,s!=this.autoClose&&(e.dataset.autoclose=s),o){let t=document.createElement("div");t.className="content",t.innerHTML=o,e.appendChild(t)}let a=document.createElement("button");a.className="close",a.innerHTML="닫기",a.addEventListener("click",e=>{e.target.parentElement.classList.add("fadeOut"),setTimeout(()=>{e.target.parentElement.remove()},333)}),e.appendChild(a),document.querySelector(".notification").prepend(e),setTimeout(()=>{e.classList.add("fadeIn")},1),this.autoClose(e,s)},a)}autoClose(e,t){t>=1&&setTimeout(()=>{e.parentElement&&!e.parentElement.classList.contains("userint")&&(e.classList.add("fadeOut"),setTimeout(()=>{e.remove()},333))},t)}}

var FASHIONADE_FITTING_ROOM = FASHIONADE_FITTING_ROOM || (function() {
    var $ = function (query) {
        return document.querySelector(query)
    }
    var $$ = function (query) {
        return document.querySelectorAll(query)
    }
    var $$Style = function(selector, property, value) {
        var els = $$(selector);
        for (var i = 0; i < els.length; i++) {
            els[i].style[property] = value;
        }
    };
    var config = {
        api : {
            key : null,
            url : {
                recommendList : 'https://corsanywhere.herokuapp.com/http://dev-styleapi.fashionade.ai:8080/api/vton/items?modelId=7&category=TOP&gender=MALE',
                login : 'https://corsanywhere.herokuapp.com/http://dev-styleapi.fashionade.ai:8080/api/vton/users/login',
                membership : 'https://corsanywhere.herokuapp.com/http://dev-styleapi.fashionade.ai:8080/api/vton/users/join',
                passwordReset : 'https://corsanywhere.herokuapp.com/http://dev-styleapi.fashionade.ai:8080/api/vton/users/find-password',
                defaultModel : 'https://corsanywhere.herokuapp.com/http://dev-styleapi.fashionade.ai:8080/api/vton/models/default?height=175&gender=male&weight=70',
            }
        }
    };
    // var common = {
    //     access_token : "",
    //     refresh_token : ""
    // };
    var hideAllPages = function() {
        var els = $$(".page");
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replaceAll(/\s*on/g, '');
        }
    };


    var login = {
        on: function(from) {
            this.render(from);
        },
        off : function() {
            $("#FFR-loginEmail").className = "";
            $("#FFR-loginPassword").className = "";
            $$Style("#FFR-wrongLoginEmail, #FFR-wrongLoginPassword", "display", "none");
            $("#FFR-form-login").reset();
            $("#FFR-btnLogin").disabled = true;
            $("#FFR-btnLogin").onclick = function() {};
        },
      render : function(from) {
          hideAllPages();
          if(!$("#FFR-login")) {
              var page = document.createElement("div");
              page.id = "FFR-login";
              page.className = "page on";
              page.innerHTML = '<div class="header">\n' +
                  '                  <button class="btn back" id="FFR-login-back">뒤로가기</button>\n' +
                  '              </div>\n' +
                  '              <div class="content">\n' +
                  '                  <h4>로그인</h4>\n' +
                  '                  <form id="FFR-form-login"><fieldset>\n' +
                  '                      <input type="email" placeholder="Email 주소" id="FFR-loginEmail" onblur="FASHIONADE_FITTING_ROOM.login.handler.checkEmail()" oninput="FASHIONADE_FITTING_ROOM.login.handler.validate(\'' + from + '\')"/>\n' +
                  '                      <p class="invalidMessage" id="FFR-wrongLoginEmail">이메일 주소를 확인해주세요.</p></n>\n' +
                  '                      <input type="password" placeholder="비밀번호" id="FFR-loginPassword" oninput="FASHIONADE_FITTING_ROOM.login.handler.validate(\'' + from + '\')"/>\n' +
                  '                      <p class="invalidMessage" id="FFR-wrongLoginPassword">비밀번호를 확인해주세요.</p>\n' +
                  '                      <button type="button" id="FFR-btnLogin" disabled="true">로그인</button>\n' +
                  '                      <div class="txtWrap">\n' +
                  '                          <a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.login.off();FASHIONADE_FITTING_ROOM.membership.on();">회원가입</a><span class="bar">|</span><a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.login.off();FASHIONADE_FITTING_ROOM.passwordReset.on();">비밀번호 찾기</a>\n' +
                  '                      </div>\n' +
                  '                  </fieldset></form>\n' +
                  '              </div>'
              $("#FFR").appendChild(page);
          } else {
              var page = $("#FFR-login");
              var className = page.className;
              page.className = className + " on";
          }

          $("#FFR-login-back").onclick = function() {
              login.off();
              if(from === 'styleFit') {
                  FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
              } else {
                  //TODO 회원가입 및 비번 재설정 이후
                  FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
              }
          };
      }, handler: {
            checkEmail : function() {
                var ret = true;
                if(!$("#FFR-loginEmail").checkValidity()) {
                    $("#FFR-loginEmail").className = "invalid";
                    $("#FFR-wrongLoginEmail").style.display = "block";
                    ret = false;
                }
                return ret;
            },
        validate : function(from) {
            $("#FFR-loginEmail").className = "";
            $("#FFR-loginPassword").className = "";
            $$Style("#FFR-wrongLoginEmail, #FFR-wrongLoginPassword", "display", "none");

            var els = $$("#FFR-loginEmail, #FFR-loginPassword");
            var validCount = els.length;
            for (var i = 0; i < els.length; i++) {
                if (els[i].value.replaceAll(/\s/gm, '') !== '') {
                    validCount--;
                }
            }
            if(validCount === 0) {
                if(!FASHIONADE_FITTING_ROOM.login.handler.checkEmail()) {
                    $("#FFR-loginEmail").className = "invalid";
                    $("#FFR-wrongLoginEmail").style.display = "block";
                    $("#FFR-btnLogin").disabled = true;
                    $("#FFR-btnLogin").onclick = function() {};
                } else {
                    $("#FFR-btnLogin").disabled = false;
                    $("#FFR-btnLogin").onclick = function() {
                        axios.put(config.api.url.login, {
                                id: $("#FFR-loginEmail").value,
                                password: $("#FFR-loginPassword").value,
                                loginType: 'EMAIL'
                            }
                        ).then(function (r) {
                            sessionStorage.setItem("FASHIONADE_FITTING_ROOM", JSON.stringify(r.data));
                            login.off();
                            if (from === 'styleFit') {
                                FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
                            }
                        }).catch(function (err) {
                            if (err?.response?.status === 401) {
                                $("#FFR-loginEmail").className = "invalid";
                                $("#FFR-loginPassword").className = "invalid";
                                $$Style("#FFR-wrongLoginEmail, #FFR-wrongLoginPassword", "display", "block");
                                FFRNOTIFICATION.toast({
                                    type: "error",
                                    content: "이메일주소와 비밀번호를 확인해 주시기 바랍니다."
                                });
                            } else {
                                console.log(err);
                            }
                        });
                    };
                }
            } else {
                $("#FFR-btnLogin").disabled = true;
                $("#FFR-btnLogin").onclick = function() {};
            }
        },
        }
    };

    var membership = {
        on: function(from) {
            this.render(from);
        },
        off : function() {
            $("#FFR-membershipEmail").className = "";
            $("#FFR-membershipPassword").className = "";
            $("#FFR-membershipPasswordRepeat").className = "";
            $$Style("#FFR-wrongMembershipEmail, #FFR-wrongMembershipPassword, #FFR-wrongMembershipPasswordRepeat, #duplacateEmail", "display", "none");
            $("#FFR-form-membership").reset();
            $("#FFR-btnMembership").disabled = true;
            $("#FFR-btnMembership").onclick = function() {};
        },
        render : function(from) {
            hideAllPages();
            if(!$("#FFR-membership")) {
                var page = document.createElement("div");
                page.id = "FFR-membership";
                page.className = "page on";
                page.innerHTML = '<div class="header">\n' +
                    '                <button class="btn close" onclick="FASHIONADE_FITTING_ROOM.membership.off();FASHIONADE_FITTING_ROOM.login.on();">닫기</button>\n' +
                    '            </div>\n' +
                    '            <div class="content">\n' +
                    '                <h4>이메일 회원가입</h4>\n' +
                    '                <form id="FFR-form-membership"><fieldset>\n' +
                    '                    <input type="email" placeholder="Email 주소" id="FFR-membershipEmail" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkEmail()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>\n' +
                    '                    <p class="invalidMessage" id="FFR-wrongMembershipEmail">이메일 주소를 확인해주세요.</p>\n' +
                    '                    <input type="password" placeholder="비밀번호" id="FFR-membershipPassword" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkPassword()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>\n' +
                    '                    <p class="invalidMessage" id="FFR-wrongMembershipPassword">8자 이상의 영문 대/소문자, 숫자, 특수문자 조합으로 입력해주세요.</p>\n' +
                    '                    <input type="password" placeholder="비밀번호 재확인" id="FFR-membershipPasswordRepeat" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkRepeatPassword()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>\n' +
                    '                    <p class="invalidMessage" id="FFR-wrongMembershipPasswordRepeat">비밀번호가 일치하지 않습니다.</p>\n' +
                    '                    <button type="button" id="FFR-btnMembership" disabled="true">회원가입</button>\n' +
                    '                    <div class="txtWrap" id="duplacateEmail">\n' +
                    '                        이미 계정이 있습니다.<a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.membership.off();FASHIONADE_FITTING_ROOM.login.on();">로그인</a>\n' +
                    '                    </div>\n' +
                    '                </fieldset></form>\n' +
                    '            </div>'
                $("#FFR").appendChild(page);
            } else {
                var page = $("#FFR-membership");
                var className = page.className;
                page.className = className + " on";
            }
        }, handler: {
            checkEmail : function() {
                var ret = true;
                if(!$("#FFR-membershipEmail").checkValidity()) {
                    $("#FFR-membershipEmail").className = "invalid";
                    $("#FFR-wrongMembershipEmail").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            checkPassword : function() {
                var ret = true;
                if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test($("#FFR-membershipPassword").value)) {
                    $("#FFR-membershipPassword").className = "invalid";
                    $("#FFR-wrongMembershipPassword").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            checkRepeatPassword : function() {
                var ret = true;
                if($("#FFR-membershipPassword").value !== $("#FFR-membershipPasswordRepeat").value) {
                    $("#FFR-membershipPasswordRepeat").className = "invalid";
                    $("#FFR-wrongMembershipPasswordRepeat").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            validate : function() {
                $("#FFR-membershipEmail").className = "";
                $("#FFR-membershipPassword").className = "";
                $("#FFR-membershipPasswordRepeat").className = "";
                $$Style("#FFR-wrongMembershipEmail, #FFR-wrongMembershipPassword, #FFR-wrongMembershipPasswordRepeat, #duplacateEmail", "display", "none");

                var els = $$("#FFR-membershipEmail, #FFR-membershipPassword, #FFR-membershipPasswordRepeat");
                var validCount = els.length;
                for (var i = 0; i < els.length; i++) {
                    if (els[i].value.replaceAll(/\s/gm, '') !== '') {
                        validCount--;
                    }
                }

                if(validCount === 0) {
                    if(!FASHIONADE_FITTING_ROOM.membership.handler.checkEmail()) {
                        $("#FFR-membershipEmail").className = "invalid";
                        $("#FFR-wrongMembershipEmail").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                        $("#FFR-btnMembership").onclick = function() {};
                    }
                    if(!FASHIONADE_FITTING_ROOM.membership.handler.checkPassword()) {
                        $("#FFR-membershipPassword").className = "invalid";
                        $("#FFR-wrongMembershipPassword").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                        $("#FFR-btnMembership").onclick = function() {};
                    }
                    if($("#FFR-membershipPassword").value !== $("#FFR-membershipPasswordRepeat").value) {
                        $("#FFR-membershipPasswordRepeat").className = "invalid";
                        $("#FFR-wrongMembershipPasswordRepeat").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                        $("#FFR-btnMembership").onclick = function() {};
                    }
                    if(
                        FASHIONADE_FITTING_ROOM.membership.handler.checkEmail() &&
                        FASHIONADE_FITTING_ROOM.membership.handler.checkPassword() &&
                        FASHIONADE_FITTING_ROOM.membership.handler.checkRepeatPassword()
                    ) {
                        $("#FFR-btnMembership").disabled = false;
                        $("#FFR-btnMembership").onclick = function() {
                            axios.post(config.api.url.membership, {
                                    email: $("#FFR-membershipEmail").value,
                                    password: $("#FFR-membershipPassword").value,
                                    joinType: 'EMAIL',
                                    apiKey: config.api.key
                                }
                            ).then(function (r) {
                                if(r.data.result) {
                                    FASHIONADE_FITTING_ROOM.membership.off();
                                    FASHIONADE_FITTING_ROOM.login.on();
                                    FFRNOTIFICATION.toast({
                                        type: "success",
                                        content: "회원가입이 정상적으로 처리되었습니다."
                                    });
                                }
                            }).catch(function (err) {
                                if (err?.response?.status === 500) {
                                    $("#duplacateEmail").style.display = "block";
                                    FFRNOTIFICATION.toast({
                                        type: "error",
                                        content: "입력하신 이메일주소와 연결된 계정이 이미 존재합니다. 입력하신 이메일주소로 로그인하거나 다른 계정을 만들어보세요."
                                    });
                                } else {
                                    console.log(err);
                                }
                            });
                        };
                    }
                } else {
                    $("#FFR-btnMembership").disabled = true;
                    $("#FFR-btnMembership").onclick = function() {};
                }
            },
        }
    };

    var passwordReset = {
        on: function(from) {
            this.render(from);
        },
        off : function() {
            $("#FFR-passwordResetEmail").className = "";
            $$Style("#FFR-wrongPasswordResetEmail", "display", "none");
            $("#FFR-form-passwordReset").reset();
            $("#FFR-btnPasswordReset").disabled = true;
            $("#FFR-btnPasswordReset").onclick = function() {};
        },
        render : function(from) {
            hideAllPages();
            if(!$("#FFR-passwordReset")) {
                var page = document.createElement("div");
                page.id = "FFR-passwordReset";
                page.className = "page on";
                page.innerHTML = '<div class="header">\n' +
                    '                <h3 class="title">비밀번호 재설정</h3>\n' +
                    '                <button class="btn close" onclick="FASHIONADE_FITTING_ROOM.passwordReset.off();FASHIONADE_FITTING_ROOM.login.on();">닫기</button>\n' +
                    '            </div>\n' +
                    '            <div class="content">\n' +
                    '                <h4>비밀번호 재설정</h4>\n' +
                    '                <p class="txt">\n' +
                    '                    이메일 주소를 입력하면 비밀번호를 재설정 할 수 있는<br/>\n' +
                    '                    링크를 이메일 주소로 보내드립니다.\n' +
                    '                </p>\n' +
                    '                <form id="FFR-form-passwordReset"><fieldset>\n' +
                    '                    <input type="email" placeholder="가입한 이메일 입력" id="FFR-passwordResetEmail" oninput="FASHIONADE_FITTING_ROOM.passwordReset.handler.validate()"/>\n' +
                    '                    <p class="invalidMessage" id="FFR-wrongPasswordResetEmail">이메일 주소를 확인해주세요.</p>\n' +
                    '                    <button type="button" id="FFR-btnPasswordReset" disabled="true">비밀번호 재설정 링크 보내기</button>\n' +
                    '                </fieldset></form>\n' +
                    '            </div>';
                $("#FFR").appendChild(page);
            } else {
                var page = $("#FFR-passwordReset");
                var className = page.className;
                page.className = className + " on";
            }
        }, handler: {
            validate : function() {
                $("#FFR-passwordResetEmail").className = "";
                $$Style("#FFR-wrongPasswordResetEmail", "display", "none");

                if (!$("#FFR-passwordResetEmail").checkValidity()) {
                    $("#FFR-passwordResetEmail").className = "invalid";
                    $("#FFR-wrongPasswordResetEmail").style.display = "block";
                    $("#FFR-btnPasswordReset").disabled = true;
                    $("#FFR-btnPasswordReset").onclick = function() {};
                } else {
                    $("#FFR-btnPasswordReset").disabled = false;
                    $("#FFR-btnPasswordReset").onclick = function () {
                        axios.post(config.api.url.passwordReset, {
                                email: $("#FFR-passwordResetEmail").value
                            }
                        ).then(function (r) {
                            if(r.data.result) {
                                FASHIONADE_FITTING_ROOM.passwordReset.off();
                                FASHIONADE_FITTING_ROOM.login.on();
                                FFRNOTIFICATION.toast({
                                    type: "success",
                                    content: "가입한 이메일주소로 비밀번호 재설정 링크가 발송되었습니다."
                                });
                            }
                        }).catch(function (err) {
                            console.log(err);
                        });
                    };
                }
            }
        }
    }

    var myCloset = {
        render : function(from) {
            hideAllPages();
            if(!$("#FFR-myCloset")) {
                var page = document.createElement("div");
                page.id = "FFR-myCloset";
                page.className = "page on";
                page.innerHTML = '<div class="header">\n' +
                    '                <h3 class="title">마이페이지</h3>\n' +
                    '                <button class="btn close" id="FFR-myCloset-close">닫기</button>\n' +
                    '            </div>\n' +
                    '            <div class="content">\n' +
                    '                <div class="tab">\n' +
                    '                    <button class="closet">나의 옷장</button>\n' +
                    '                    <button class="form">나의 체형</button>\n' +
                    '                </div>\n' +
                    '                <div class="scroll">\n' +
                    '                    <div class="empty"></div>\n' +
                    '                    <button class="btnAutoAdd">인기 상품 자동 추가하기</button>\n' +
                    '                </div>\n' +
                    '            </div>';
                $("#FFR").appendChild(page);
            } else {
                var page = $("#FFR-myCloset");
                var className = page.className;
                page.className = className + " on";
            }

            $("#FFR-myCloset-close").onclick = function() {
                if(from === 'styleFit') {
                    FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
                }
            };
        }
    };

    var setFit = {
        on : function() {
            this.render();
        },
        off : function() {

        },
        render : function() {
            hideAllPages();
            if(!$("#FFR-setFit")) {
                var page = document.createElement("div");
                page.id = "FFR-setFit";
                page.className = "page on";
                page.innerHTML = '<div class="header">\n' +
                  '                <button class="btn exit" onclick="FASHIONADE_FITTING_ROOM.close()">스토어로 돌아가기</button>\n' +
                  '            </div>\n' +
                  '            <div class="content">\n' +
                  '                <h4>나의 체형 설정하기</h4>\n' +
                  '                <div class="gender">\n' +
                  '                    <input type="radio" name="FASHIONADE_FITTING_ROOM-gender" id="FASHIONADE_FITTING_ROOM-genderFemale" checked="true" onchange="FASHIONADE_FITTING_ROOM.setFit.handler.changeGender(\'female\')" value="FEMALE" /><label for="FASHIONADE_FITTING_ROOM-genderFemale" class="female btn">여성</label>\n' +
                  '                    <input type="radio" name="FASHIONADE_FITTING_ROOM-gender" id="FASHIONADE_FITTING_ROOM-genderMale" onchange="FASHIONADE_FITTING_ROOM.setFit.handler.changeGender(\'male\')" value="MALE"/><label for="FASHIONADE_FITTING_ROOM-genderMale" class="male btn">남성</label>\n' +
                  '                </div>\n' +
                  '                <div class="measurement">\n' +
                  '                    <dl>\n' +
                  '                        <dt>키</dt>\n' +
                  '                        <dd><input type="number" placeholder="160" min="0" max="999" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate()" id="FASHIONADE_FITTING_ROOM-setFitTall"/></dd>\n' +
                  '                        <dd class="unit">cm</dd>\n' +
                  '                        <dt>몸무게</dt>\n' +
                  '                        <dd><input type="number" placeholder="50" min="0" max="999" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate()" id="FASHIONADE_FITTING_ROOM-setFitWeight"/></dd>\n' +
                  '                        <dd class="unit">kg</dd>\n' +
                  '                        <dt>만나이</dt>\n' +
                  '                        <dd><input type="number" placeholder="25" min="0" max="99" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate()" id="FASHIONADE_FITTING_ROOM-setFitAge"/></dd>\n' +
                  '                        <dd class="unit">세</dd>\n' +
                  '                    </dl>\n' +
                  '                </div>\n' +
                  '            </div>\n' +
                  '            <div class="footer">\n' +
                  '                <button class="btn" disabled="true" id="btnSetFitSave">체형 저장하기</button>\n' +
                  '            </div>';
                $("#FFR").appendChild(page);
            } else {
                var page = $("#FFR-setFit");
                var className = page.className;
                page.className = className + " on";
            }
        },
        handler : {
            validate : function() {
                var els = $$("#FASHIONADE_FITTING_ROOM-setFitTall, #FASHIONADE_FITTING_ROOM-setFitWeight, #FASHIONADE_FITTING_ROOM-setFitAge");
                var validCount = els.length;
                for (var i = 0; i < els.length; i++) {
                    if (els[i].value.replaceAll(/\s/gm, '') !== '') {
                        validCount--;
                    }
                }
                if(validCount === 0) {
                    $("#btnSetFitSave").disabled = false;
                    $("#btnSetFitSave").onclick = function() {
                        localStorage.setItem("FASHIONADE_FITTING_ROOM", JSON.stringify({
                            myForm : {
                                gender : $$("[name=FASHIONADE_FITTING_ROOM-gender]:checked")[0].value,
                                tall : $("#FASHIONADE_FITTING_ROOM-setFitTall").value,
                                weight : $("#FASHIONADE_FITTING_ROOM-setFitWeight").value,
                                age : $("#FASHIONADE_FITTING_ROOM-setFitAge").value
                            }
                        }));
                        FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
                    };
                } else {
                    $("#btnSetFitSave").disabled = true;
                    $("#btnSetFitSave").onclick = function() {};
                }
            },
            changeGender : function(gender) {
                if(gender === 'female') {
                    $("#FASHIONADE_FITTING_ROOM-setFitTall").placeholder = "160";
                    $("#FASHIONADE_FITTING_ROOM-setFitWeight").placeholder = "50";
                } else {
                    $("#FASHIONADE_FITTING_ROOM-setFitTall").placeholder = "180";
                    $("#FASHIONADE_FITTING_ROOM-setFitWeight").placeholder = "70";
                }
            }
        }
    };

    var styleFit = {
        on : function(tab) {
            //추천상품
            if(tab === 'recommend') {
                axios.get(config.api.url.recommendList).then(function(r) {
                    for(var html = '', i = 0, items = r.data.content, l = items.length; i < l; i++) {
                        html += '<div class="item">\n' +
                            '<div class="thumb" style="background-image:url(' + items[i].imageUrl + ')"></div>\n' +
                            '<strong class="brand">' + items[i].siteName + '</strong>\n' +
                            '<p class="name">' + items[i].name + '</p>\n' +
                            '<button class="btn scrap" onclick="alert(\'' + items[i].productId + '\')">스크랩</button>\n' +
                            '</div>';
                    }
                    styleFit.render(html);
                }).catch(function(err) {
                    console.log(err);
                });
            }
        },
        off : function() {
            FASHIONADE_FITTING_ROOM.close();
        },
        render : function(addHtml) {
            hideAllPages();
            if(!$("#FFR-styleFit")) {
                var page = document.createElement("div");
                page.id = "FFR-styleFit";
                page.className = "page noscroll on";
                page.innerHTML = '<div class="header">\n' +
                    '                <button class="btn exit" onclick="FASHIONADE_FITTING_ROOM.styleFit.off()">스토어로 돌아가기</button>\n' +
                    '                <span id="loginStatsWrap"></span>\n' +
                    '                <button class="btn menu" onclick="FASHIONADE_FITTING_ROOM.myCloset.render(\'styleFit\')">메뉴</button>\n' +
                    '            </div>\n' +
                    '            <div class="content">\n' +
                    '                <div class="tab">\n' +
                    '                    <button class="styleFit on">스타일핏</button>\n' +
                    '                    <button class="sizeFit">사이즈핏</button>\n' +
                    '                    <button class="changeModel">모델변경</button>\n' +
                    '                </div>\n' +
                    '                <div class="modelWrap">\n' +
                    '                    <div class="model" style="background-image: url(\'https://viton-demo.s3.ap-northeast-2.amazonaws.com/models/165527923231338944.jpg\')"></div>\n' +
                    '                    <div class="btnUndress">\n' +
                    '                        <button class="btn top">상의</button>\n' +
                    '                        <button class="btn bottom">하의</button>\n' +
                    '                        <button class="btn default">기본</button>\n' +
                    '                    </div>\n' +
                    '                    <input type="checkbox" id="chkTuckInOut" checked="true" /><label for="chkTuckInOut" class="btn">빼 입기/넣어입기</label>\n' +
                    '                </div>\n' +
                    '                <div class="tab2">\n' +
                    '                    <div class="menu">\n' +
                    '                        <button class="btn recommend on">추천 상품</button>\n' +
                    '                        <button class="btn mycloset">나의 옷장</button>\n' +
                    '                        <button class="btn fitted">피팅 상품</button>\n' +
                    '                    </div>\n' +
                    '                    <div class="sort">\n' +
                    '                        <select>\n' +
                    '                            <option>전체</option>\n' +
                    '                            <option>상의</option>\n' +
                    '                            <option>하의</option>\n' +
                    '                            <option>원피스</option>\n' +
                    '                        </select>\n' +
                    '                        <select>\n' +
                    '                            <option>최신순</option>\n' +
                    '                            <option>낮은 가격순</option>\n' +
                    '                            <option>높은 가격순</option>\n' +
                    '                        </select>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '                <div class="scroll">\n' +
                    '                    <div class="list">' + addHtml + '</div>\n' +
                    '                    <div class="scrollDummy"></div>\n' +
                    '                </div>\n' +
                    '            </div>';
                $("#FFR").appendChild(page);
            } else {
                var page = $("#FFR-styleFit");
                var className = page.className;
                page.className = className + " on";
            }

            $("#loginStatsWrap").innerHTML = (function() {
                if(JSON.parse(sessionStorage.getItem("FASHIONADE_FITTING_ROOM"))?.access_token) {
                    return '<button class="btn logout" onclick="sessionStorage.removeItem(\'FASHIONADE_FITTING_ROOM\');FASHIONADE_FITTING_ROOM.login.on(\'styleFit\')">로그아웃</button>';
                } else {
                    return '<button class="btn login" onclick="FASHIONADE_FITTING_ROOM.login.on(\'styleFit\')">로그인</button>';
                }
            })();
        }
    };

    var renderSkeleton = function() {
        var wrap = document.createElement("div");
        wrap.id = "FFR";
        wrap.innerHTML = '<div class="notification"></div>';
        document.body.appendChild(wrap);
        var dimmed = document.createElement("div");
        dimmed.id = "FFR-dimmed";
        document.body.appendChild(dimmed);

        FFRNOTIFICATION = new Notification();
    };
    var init = function(extConfig) {
        // api키 저장하고 없으면 break
        config.api.key = extConfig?.apiKey;
        for(var key in config.api.url) {
            config.api.url[key] += (config.api.url[key].indexOf("?") > 0) ? "&apiKey=" + config.api.key : "?apiKey=" + config.api.key;
        }
        renderSkeleton();
    };
    var open = function(opt) {
        if(opt.productId) {
            var localFASHIONADE_FITTING_ROOM = localStorage.FASHIONADE_FITTING_ROOM && JSON.parse(localStorage?.FASHIONADE_FITTING_ROOM);
            if(localFASHIONADE_FITTING_ROOM?.myForm) {
                styleFit.on('recommend');
            } else {
                setFit.on();
            }
            $$Style("#FFR, #FFR-dimmed", "display", "block");
        } else {
            alert("productId value is null.");
        }
    };
    var close = function() {
        $$Style("#FFR, #FFR-dimmed", "display", "none");
    };

    return {
        init : init,
        open : open,
        close : close,
        login : login,
        membership : membership,
        passwordReset : passwordReset,
        setFit : setFit,
        myCloset : myCloset,
        styleFit : styleFit


    }
})();
