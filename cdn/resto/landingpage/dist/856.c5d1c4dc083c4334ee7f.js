/*! For license information please see 856.c5d1c4dc083c4334ee7f.js.LICENSE.txt */
(self.webpackChunklandingpage=self.webpackChunklandingpage||[]).push([[856],{5826:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},4779:(t,e,n)=>{var r=n(5826);t.exports=function t(e,n,o){return r(n)||(o=n||o,n=[]),o=o||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(e,n):r(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return l(new RegExp("(?:"+o.join("|")+")",p(r)),n)}(e,n,o):function(t,e,n){return f(i(t,n),e,n)}(e,n,o)},t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var p=n[0],f=n[1],h=n.index;if(c+=t.slice(a,h),a=h+p.length,f)c+=f[1];else{var m=t[a],v=n[2],d=n[3],y=n[4],g=n[5],x=n[6],b=n[7];c&&(r.push(c),c="");var C=null!=v&&null!=m&&m!==v,E="+"===x||"*"===x,R="?"===x||"*"===x,w=n[2]||l,Z=y||g;r.push({name:d||i++,prefix:v||"",delimiter:w,optional:R,repeat:E,partial:C,asterisk:!!b,pattern:Z?s(Z):b?".*":"[^"+u(w)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",p(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var p,f=c[l.name];if(null==f){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!n[s].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(p)+"`");i+=(0===h?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[s].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');i+=l.prefix+p}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function p(t){return t&&t.sensitive?"":"i"}function f(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var f=u(s.prefix),h="(?:"+s.pattern+")";e.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(n.delimiter||"/"),v=a.slice(-m.length)===m;return o||(a=(v?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+m+"|$)",l(new RegExp("^"+a,p(n)),e)}},7856:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BrowserRouter:()=>F,HashRouter:()=>J,Link:()=>tt,MemoryRouter:()=>R,NavLink:()=>rt,Prompt:()=>Z,Redirect:()=>A,Route:()=>T,Router:()=>E,StaticRouter:()=>H,Switch:()=>D,generatePath:()=>_,matchPath:()=>M,useHistory:()=>K,useLocation:()=>V,useParams:()=>q,useRouteMatch:()=>I,withRouter:()=>W});var r=n(1788),o=n(7271),i=n.n(o),a=n(5697),c=n.n(a),u=n(71),s=1073741823,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function p(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}const f=i().createContext||function(t,e){var n,i,a,u="__create-react-context-"+((l[a="__global_unique_id__"]=(l[a]||0)+1)+"__"),f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=p(e.props.value),e}(0,r.Z)(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[u]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):s,0!=(n|=0)&&this.emitter.set(t.value,n))}var i,a},o.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((n={})[u]=c().object.isRequired,n);var h=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}(0,r.Z)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?s:e},o.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?s:t},o.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},o.getValue=function(){return this.context[u]?this.context[u].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return h.contextTypes=((i={})[u]=c().object,i),{Provider:f,Consumer:h}};var h=n(2177),m=n(2122),v=n(4779),d=n.n(v),y=(n(663),n(9756)),g=n(8679),x=n.n(g),b=function(t){var e=f();return e.displayName="Router-History",e}(),C=function(t){var e=f();return e.displayName="Router",e}(),E=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i().createElement(C.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i().Component),R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,u.PP)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(E,{history:this.history,children:this.props.children})},e}(i().Component),w=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i().Component);function Z(t){var e=t.message,n=t.when,r=void 0===n||n;return i().createElement(C.Consumer,null,(function(t){if(t||(0,h.Z)(!1),!r||t.staticContext)return null;var n=t.history.block;return i().createElement(w,{onMount:function(t){t.release=n(e)},onUpdate:function(t,r){r.message!==e&&(t.release(),t.release=n(e))},onUnmount:function(t){t.release()},message:e})}))}var S={},k=0;function _(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(S[t])return S[t];var e=d().compile(t);return k<1e4&&(S[t]=e,k++),e}(t)(e,{pretty:!0})}function A(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(C.Consumer,null,(function(t){t||(0,h.Z)(!1);var r=t.history,a=t.staticContext,c=o?r.push:r.replace,s=(0,u.ob)(e?"string"==typeof n?_(n,e.params):(0,m.Z)({},n,{pathname:_(n.pathname,e.params)}):n);return a?(c(s),null):i().createElement(w,{onMount:function(){c(s)},onUpdate:function(t,e){var n=(0,u.ob)(e.to);(0,u.Hp)(n,(0,m.Z)({},s,{key:n.key}))||c(s)},to:n})}))}var U={},P=0;function M(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=U[n]||(U[n]={});if(r[t])return r[t];var o=[],i={regexp:d()(t,o,e),keys:o};return P<1e4&&(r[t]=i,P++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],p=u.slice(1),f=t===l;return i&&!f?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:f,params:a.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var T=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(C.Consumer,null,(function(e){e||(0,h.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?M(n.pathname,t.props):e.match,o=(0,m.Z)({},e,{location:n,match:r}),a=t.props,c=a.children,u=a.component,s=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i().createElement(C.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?i().createElement(u,o):s?s(o):null:"function"==typeof c?c(o):null)}))},e}(i().Component);function N(t){return"/"===t.charAt(0)?t:"/"+t}function L(t,e){if(!t)return e;var n=N(t);return 0!==e.pathname.indexOf(n)?e:(0,m.Z)({},e,{pathname:e.pathname.substr(n.length)})}function $(t){return"string"==typeof t?t:(0,u.Ep)(t)}function B(t){return function(){(0,h.Z)(!1)}}function j(){}var H=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return j},e.handleBlock=function(){return j},e}(0,r.Z)(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,a=void 0===i?{}:i;a.action=e,a.location=function(t,e){return t?(0,m.Z)({},e,{pathname:N(t)+e.pathname}):e}(o,(0,u.ob)(t)),a.url=$(a.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,a=t.location,c=void 0===a?"/":a,s=(0,y.Z)(t,["basename","context","location"]),l={createHref:function(t){return N(n+$(t))},action:"POP",location:L(n,(0,u.ob)(c)),push:this.handlePush,replace:this.handleReplace,go:B(),goBack:B(),goForward:B(),listen:this.handleListen,block:this.handleBlock};return i().createElement(E,(0,m.Z)({},s,{history:l,staticContext:o}))},e}(i().Component),D=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(C.Consumer,null,(function(e){e||(0,h.Z)(!1);var n,r,o=t.props.location||e.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?M(o.pathname,(0,m.Z)({},t.props,{path:a})):e.match}})),r?i().cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i().Component);function W(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=(0,y.Z)(e,["wrappedComponentRef"]);return i().createElement(C.Consumer,null,(function(e){return e||(0,h.Z)(!1),i().createElement(t,(0,m.Z)({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,x()(n,t)}var O=i().useContext;function K(){return O(b)}function V(){return O(C).location}function q(){var t=O(C).match;return t?t.params:{}}function I(t){var e=V(),n=O(C).match;return t?M(e.pathname,t):n}var F=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,u.lX)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(E,{history:this.history,children:this.props.children})},e}(i().Component),J=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,u.q_)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(E,{history:this.history,children:this.props.children})},e}(i().Component),z=function(t,e){return"function"==typeof t?t(e):t},X=function(t,e){return"string"==typeof t?(0,u.ob)(t,null,null,e):t},G=function(t){return t},Q=i().forwardRef;void 0===Q&&(Q=G);var Y=Q((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=(0,y.Z)(t,["innerRef","navigate","onClick"]),c=a.target,u=(0,m.Z)({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return u.ref=G!==Q&&e||n,i().createElement("a",u)})),tt=Q((function(t,e){var n=t.component,r=void 0===n?Y:n,o=t.replace,a=t.to,c=t.innerRef,u=(0,y.Z)(t,["component","replace","to","innerRef"]);return i().createElement(C.Consumer,null,(function(t){t||(0,h.Z)(!1);var n=t.history,s=X(z(a,t.location),t.location),l=s?n.createHref(s):"",p=(0,m.Z)({},u,{href:l,navigate:function(){var e=z(a,t.location);(o?n.replace:n.push)(e)}});return G!==Q?p.ref=e||c:p.innerRef=c,i().createElement(r,p)}))})),et=function(t){return t},nt=i().forwardRef;void 0===nt&&(nt=et);var rt=nt((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,o=t.activeClassName,a=void 0===o?"active":o,c=t.activeStyle,u=t.className,s=t.exact,l=t.isActive,p=t.location,f=t.sensitive,v=t.strict,d=t.style,g=t.to,x=t.innerRef,b=(0,y.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(C.Consumer,null,(function(t){t||(0,h.Z)(!1);var n=p||t.location,o=X(z(g,n),n),y=o.pathname,C=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=C?M(n.pathname,{path:C,exact:s,sensitive:f,strict:v}):null,R=!!(l?l(E,n):E),w=R?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(u,a):u,Z=R?(0,m.Z)({},d,{},c):d,S=(0,m.Z)({"aria-current":R&&r||null,className:w,style:Z,to:o},b);return et!==nt?S.ref=e||x:S.innerRef=x,i().createElement(tt,S)}))}))},86:(t,e)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for;n&&Symbol.for("react.element"),n&&Symbol.for("react.portal"),n&&Symbol.for("react.fragment"),n&&Symbol.for("react.strict_mode"),n&&Symbol.for("react.profiler"),n&&Symbol.for("react.provider"),n&&Symbol.for("react.context"),n&&Symbol.for("react.async_mode"),n&&Symbol.for("react.concurrent_mode"),n&&Symbol.for("react.forward_ref"),n&&Symbol.for("react.suspense"),n&&Symbol.for("react.suspense_list"),n&&Symbol.for("react.memo"),n&&Symbol.for("react.lazy"),n&&Symbol.for("react.block"),n&&Symbol.for("react.fundamental"),n&&Symbol.for("react.responder"),n&&Symbol.for("react.scope")},663:(t,e,n)=>{"use strict";n(86)}}]);