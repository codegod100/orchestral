var H0,w,g0,P1,p,m0,c0,p0,T0,X0,n,a0,M0,_0,U0,F1,K0={},q0=[],T1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N0=Array.isArray;function g(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function w0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function $0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?H0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return G0(Z,K,W,G,null)}function G0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++g0:G,__i:-1,__u:0};return G==null&&w.vnode!=null&&w.vnode(Q),Q}function B0(Z){return Z.children}function l(Z,Y){this.props=Z,this.context=Y}function i(Z,Y){if(Y==null)return Z.__?i(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?i(Z):null}function _1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=g({},Y);Q.__v=Y.__v+1,w.vnode&&w.vnode(Q),R0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?i(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,l0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&r0(Q)}}function r0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),r0(Z)}function f0(Z){(!Z.__d&&(Z.__d=!0)&&p.push(Z)&&!z0.__r++||m0!=w.debounceRendering)&&((m0=w.debounceRendering)||c0)(z0)}function z0(){try{for(var Z,Y=1;p.length;)p.length>Y&&p.sort(p0),Z=p.shift(),Y=p.length,_1(Z)}finally{p.length=z0.__r=0}}function i0(Z,Y,O,W,G,Q,K,z,H,q,L){var F,X,$,N,J,R,U=W&&W.__k||q0,T=Y.length;for(H=U1(O,Y,U,H,T),F=0;F<T;F++)($=O.__k[F])!=null&&(X=$.__i!=-1&&U[$.__i]||K0,$.__i=F,R=R0(Z,$,X,G,Q,K,z,H,q,L),N=$.__e,$.ref&&X.ref!=$.ref&&(X.ref&&D0(X.ref,null,$),L.push($.ref,$.__c||N,$)),J==null&&N!=null&&(J=N),4&$.__u?(H=o0($,H,Z),X.__e&&(X.__e=null)):typeof $.type=="function"&&R!==void 0?H=R:N&&(H=N.nextSibling),$.__u&=-7);return O.__e=J,H}function U1(Z,Y,O,W,G){var Q,K,z,H,q,L=O.length,F=L,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=G0(null,K,null,null,null):N0(K)?K=Z.__k[Q]=G0(B0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=G0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,H=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=M1(K,O,H,F))!=-1&&(F--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>L?X--:G<L&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=H&&(q==H-1?X--:q==H+1?X++:(q>H?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(F)for(Q=0;Q<L;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=i(z)),t0(z,z));return W}function o0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=o0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=i(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function M1(Z,Y,O,W){var G,Q,K,z=Z.key,H=Z.type,q=Y[O],L=q!=null&&(2&q.__u)==0;if(q===null&&z==null||L&&z==q.key&&H==q.type)return O;if(W>(L?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&H==q.type)return K}return-1}function d0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||T1.test(Y)?O:O+"px"}function W0(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||d0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||d0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(a0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[n]=W[n]:(O[n]=M0,Z.addEventListener(Y,Q?U0:_0,Q)):Z.removeEventListener(Y,Q?U0:_0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function h0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[X0]==null)Y[X0]=M0++;else if(Y[X0]<O[n])return;return O(w.event?w.event(Y):Y)}}}function R0(Z,Y,O,W,G,Q,K,z,H,q){var L,F,X,$,N,J,R,U,T,C,m,v,D,f,c,B,E=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&(H=!!(32&O.__u),Q=[z=Y.__e=O.__e]),(L=w.__b)&&L(Y);Y:if(typeof E=="function"){F=K.length;try{if(T=Y.props,C=E.prototype&&E.prototype.render,m=(L=E.contextType)&&W[L.__c],v=L?m?m.props.value:L.__:W,O.__c?U=(X=Y.__c=O.__c).__=X.__E:(C?Y.__c=X=new E(T,v):(Y.__c=X=new l(T,v),X.constructor=E,X.render=R1),m&&m.sub(X),X.state||(X.state={}),X.__n=W,$=X.__d=!0,X.__h=[],X._sb=[]),C&&X.__s==null&&(X.__s=X.state),C&&E.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=g({},X.__s)),g(X.__s,E.getDerivedStateFromProps(T,X.__s))),N=X.props,J=X.state,X.__v=Y,$)C&&E.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),C&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(C&&E.getDerivedStateFromProps==null&&T!==N&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(T,v),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(T,X.__s,v)===!1){Y.__v!=O.__v&&(X.props=T,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(S){S&&(S.__=Y)}),q0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=i(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(T,X.__s,v),C&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(N,J,R)})}if(X.context=v,X.props=T,X.__P=Z,X.__e=!1,D=w.__r,f=0,C)X.state=X.__s,X.__d=!1,D&&D(Y),L=X.render(X.props,X.state,X.context),q0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,D&&D(Y),L=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++f<25);X.state=X.__s,X.getChildContext!=null&&(W=g(g({},W),X.getChildContext())),C&&!$&&X.getSnapshotBeforeUpdate!=null&&(R=X.getSnapshotBeforeUpdate(N,J)),c=L!=null&&L.type===B0&&L.key==null?u0(L.props.children):L,z=i0(Z,N0(c)?c:[c],Y,O,W,G,Q,K,z,H,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),U&&(X.__E=X.__=null)}catch(S){if(K.length=F,Y.__v=null,H||Q!=null){if(S.then){for(Y.__u|=H?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(B=Q.length;B--;)w0(Q[B])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),S.then||s0(Y),w.__e(S,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=w1(O.__e,Y,O,W,G,Q,K,H,q);return(L=w.diffed)&&L(Y),128&Y.__u?void 0:z}function s0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(s0))}function l0(Z,Y,O){for(var W=0;W<O.length;W++)D0(O[W],O[++W],O[++W]);w.__c&&w.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){w.__e(Q,G.__v)}})}function u0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:N0(Z)?Z.map(u0):Z.constructor!==void 0?null:g({},Z)}function w1(Z,Y,O,W,G,Q,K,z,H){var q,L,F,X,$,N,J,R=O.props||K0,U=Y.props,T=Y.type;if(T=="svg"?G="http://www.w3.org/2000/svg":T=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if(($=Q[q])&&"setAttribute"in $==!!T&&(T?$.localName==T:$.nodeType==3)){Z=$,Q[q]=null;break}}if(Z==null){if(T==null)return document.createTextNode(U);Z=document.createElementNS(G,T,U.is&&U),z&&(w.__m&&w.__m(Y,Q),z=!1),Q=null}if(T==null)R===U||z&&Z.data==U||(Z.data=U);else{if(Q=T=="textarea"&&U.defaultValue!=null?null:Q&&H0.call(Z.childNodes),!z&&Q!=null)for(R={},q=0;q<Z.attributes.length;q++)R[($=Z.attributes[q]).name]=$.value;for(q in R)$=R[q],q=="dangerouslySetInnerHTML"?F=$:q=="children"||(q in U)||q=="value"&&("defaultValue"in U)||q=="checked"&&("defaultChecked"in U)||W0(Z,q,null,$,G);for(q in U)$=U[q],q=="children"?X=$:q=="dangerouslySetInnerHTML"?L=$:q=="value"?N=$:q=="checked"?J=$:z&&typeof $!="function"||R[q]===$||W0(Z,q,$,R[q],G);if(L)z||F&&(L.__html==F.__html||L.__html==Z.innerHTML)||(Z.innerHTML=L.__html),Y.__k=[];else if(F&&(Z.innerHTML=""),i0(Y.type=="template"?Z.content:Z,N0(X)?X:[X],Y,O,W,T=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&i(O,0),z,H),Q!=null)for(q=Q.length;q--;)w0(Q[q]);z&&T!="textarea"||(q="value",T=="progress"&&N==null?Z.removeAttribute("value"):N!=null&&(N!==Z[q]||T=="progress"&&!N||T=="option"&&N!=R[q])&&W0(Z,q,N,R[q],G),q="checked",J!=null&&J!=Z[q]&&W0(Z,q,J,R[q],G))}return Z}function D0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){w.__e(G,O)}}function t0(Z,Y,O){var W,G;if(w.unmount&&w.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||D0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){w.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&t0(W[G],Y,O||typeof Z.type!="function");O||w0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function R1(Z,Y,O){return this.constructor(Z,O)}function L0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),w.__&&w.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],R0(Y,Z=(!W&&O||Y).__k=$0(B0,null,[Z]),G||K0,K0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?H0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),l0(Q,Z,K),Z.props.children=null}H0=q0.slice,w={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},g0=0,P1=function(Z){return Z!=null&&Z.constructor===void 0},l.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=g({},this.state),typeof Z=="function"&&(Z=Z(g({},O),this.props)),Z&&g(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),f0(this))},l.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),f0(this))},l.prototype.render=B0,p=[],c0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p0=function(Z,Y){return Z.__v.__b-Y.__v.__b},z0.__r=0,T0=Math.random().toString(8),X0="__d"+T0,n="__a"+T0,a0=/(PointerCapture)$|Capture$/i,M0=0,_0=h0(!1),U0=h0(!0),F1=0;var Y0,k,E0,e0,Z0=0,G1=[],y=w,n0=y.__b,Y1=y.__r,Z1=y.diffed,O1=y.__c,Q1=y.unmount,W1=y.__;function y0(Z,Y){y.__h&&y.__h(k,Z,Z0||Y),Z0=0;var O=k.__H||(k.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function _(Z){return Z0=1,D1(z1,Z)}function D1(Z,Y,O){var W=y0(Y0++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):z1(void 0,Y),function(z){var H=W.__N?W.__N[0]:W.__[0],q=W.t(H,z);H!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=k,!k.__f)){var G=function(z,H,q){if(!W.__c.__H)return!0;var L=!1,F=W.__c.props!==z;if(W.__c.__H.__.some(function($){if($.__N){L=!0;var N=$.__[0];$.__=$.__N,$.__N=void 0,N!==$.__[0]&&(F=!0)}}),Q){var X=Q.call(this,z,H,q);return L?X||F:X}return!L||F};k.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=k;k.componentWillUpdate=function(z,H,q){if(this.__e){var L=Q;Q=void 0,G(z,H,q),Q=L}K&&K.call(this,z,H,q)},k.shouldComponentUpdate=G}return W.__N||W.__}function a(Z,Y){var O=y0(Y0++,3);!y.__s&&q1(O.__H,Y)&&(O.__=Z,O.u=Y,k.__H.__h.push(O))}function O0(Z){return Z0=5,K1(function(){return{current:Z}},[])}function K1(Z,Y){var O=y0(Y0++,7);return q1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function Q0(Z,Y){return Z0=8,K1(function(){return Z},Y)}function E1(){for(var Z;Z=G1.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(V0),Y.__h.some(k0),Y.__h=[]}catch(O){Y.__h=[],y.__e(O,Z.__v)}}}y.__b=function(Z){k=null,n0&&n0(Z)},y.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),W1&&W1(Z,Y)},y.__r=function(Z){Y1&&Y1(Z),Y0=0;var Y=(k=Z.__c).__H;Y&&(E0===k?(Y.__h=[],k.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(V0),Y.__h.some(k0),Y.__h=[],Y0=0)),E0=k},y.diffed=function(Z){Z1&&Z1(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(G1.push(Y)!==1&&e0===y.requestAnimationFrame||((e0=y.requestAnimationFrame)||k1)(E1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),E0=k=null},y.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(V0),O.__h=O.__h.filter(function(W){return!W.__||k0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],y.__e(W,O.__v)}}),O1&&O1(Z,Y)},y.unmount=function(Z){Q1&&Q1(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{V0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&y.__e(Y,O.__v))};var X1=typeof requestAnimationFrame=="function";function k1(Z){var Y,O=function(){clearTimeout(W),X1&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);X1&&(Y=requestAnimationFrame(O))}function V0(Z){var Y=k,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),k=Y}function k0(Z){var Y=k;Z.__c=Z.__(),k=Y}function q1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function z1(Z,Y){return typeof Y=="function"?Y(Z):Y}var N1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,N1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},H1=new Map;function C0(Z){var Y=H1.get(this);return Y||(Y=new Map,H1.set(this,Y)),(Y=N1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",H=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?H.push(0,X,K):Q===3&&(X||K)?(H.push(3,X,K),Q=2):Q===2&&K==="..."&&X?H.push(4,X,0):Q===2&&K&&!X?H.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&(H.push(Q,0,K,G),Q=6),X&&(H.push(Q,X,0,G),Q=6)),K=""},L=0;L<O.length;L++){L&&(Q===1&&q(),q(L));for(var F=0;F<O[L].length;F++)W=O[L][F],Q===1?W==="<"?(q(),H=[H],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[L][F+1]===">")?(q(),Q===3&&(H=H[0]),Q=H,(H=H[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,H=H[0])}return q(),H}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var P=C0.bind($0);async function x(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function y1(){let Z=globalThis.__ORCHESTRAL_INITIAL__??null,[Y,O]=_(Z?.agents??[]),[W,G]=_(null),[Q,K]=_("list"),[z,H]=_(Z?.user??null),[q,L]=_(!Z),F=Q0(async()=>{try{let N=await x("/agents");O(N.agents||[])}catch(N){console.error("Failed to load agents:",N)}},[]),X=Q0(async(N)=>{if(!confirm(`Remove "${N.name}"? This deletes its conversation history too.`))return;try{await x(`/agents/${N.id}`,{method:"DELETE"}),G((J)=>{if(J?.id===N.id)return K("list"),null;return J}),await F()}catch(J){alert(`Failed to remove agent: ${J.message}`)}},[F]);a(()=>{if(Z)return;(async()=>{try{let N=await x("/auth/me");H(N.user)}catch{}await F(),L(!1)})()},[]);let $=(N)=>({style:{...N?Object.fromEntries(N.split(";").filter(Boolean).map((J)=>{let[R,U]=J.trim().split(":");return[R.replace(/-([a-z])/g,(T,C)=>C.toUpperCase()),U.trim()]})):{}}});if(q)return P`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return P`
    <div style=${{display:"flex",height:"100vh",overflow:"hidden"}}>
      ${""}
      <aside style=${{width:"280px",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",background:"var(--bg-card)",flexShrink:0}}>
        <div style=${{padding:"1.25rem",borderBottom:"1px solid var(--border)"}}>
          <h1 style=${{fontSize:"1.1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.5rem"}}>
            🎵 Orchestral
          </h1>
          <p style=${{fontSize:"0.75rem",color:"var(--text-dim)",marginTop:"0.25rem"}}>
            A2A Agent Console
          </p>
        </div>

        <div style=${{padding:"0.75rem",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
          <button
            onClick=${()=>{K("add"),G(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            + Add Agent
          </button>
          <button
            onClick=${()=>{K("jobs"),G(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:Q==="jobs"?"var(--bg-hover)":"transparent",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            🚀 Jobs
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Y.map((N)=>P`
            <div
              key=${N.id}
              onClick=${()=>{G(N),K("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:W?.id===N.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${N.icon_url?P`<img src=${N.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:P`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${N.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:N.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${N.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
              <button
                onClick=${(J)=>{J.stopPropagation(),X(N)}}
                title="Remove agent"
                style=${{background:"transparent",border:"none",color:"var(--text-dim)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",lineHeight:1,flexShrink:0,borderRadius:"var(--radius)"}}
              >
                🗑
              </button>
            </div>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${z?P`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${z.name||z.email||z.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:P`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${Q==="add"&&P`<${I1} onAdded=${(N)=>{F(),G(N),K("chat")}} />`}
        ${Q==="chat"&&W&&P`<${A1} agent=${W} onRefresh=${F} onDelete=${()=>X(W)} />`}
        ${Q==="jobs"&&P`<${j1} agents=${Y} />`}
        ${Q==="list"&&P`<${C1} />`}
      </main>
    </div>
  `}function C1(){return P`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var x1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Agent is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function j1({agents:Z}){let[Y,O]=_(null),[W,G]=_([]),[Q,K]=_([]),[z,H]=_(""),[q,L]=_(""),[F,X]=_(""),[$,N]=_(""),[J,R]=_(!1),[U,T]=_(""),[C,m]=_(null),v=(Z||[]).filter((B)=>B.auth_state==="connected"),D=W.filter((B)=>B.full_name.toLowerCase().includes(F.trim().toLowerCase())),f=Q0(async()=>{try{let B=await x("/jobs");K(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);a(()=>{(async()=>{try{let B=await x("/github/status");if(O(B),B.connected){let E=await x("/github/repos");G(E.repos||[])}}catch(B){T(B.message)}await f()})()},[]),a(()=>{if(!Q.some((S)=>!["done","failed"].includes(S.status)))return;let E=setInterval(f,3000);return()=>clearInterval(E)},[Q,f]);async function c(B){if(B?.preventDefault(),!z||!q||!$.trim()||J)return;R(!0),T("");try{let E=await x("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:$.trim()})});K((S)=>[E.job,...S]),N("")}catch(E){T(E.message)}finally{R(!1)}}return P`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and an agent, describe what to do, and orchestral spins up a fresh container,
        asks the agent for a patch, and opens a pull request.
      </p>

      ${!Y?.configured&&P`
        <div style=${{padding:"0.9rem",background:"rgba(245,158,11,0.1)",border:"1px solid var(--warning)",borderRadius:"var(--radius)",fontSize:"0.85rem",marginBottom:"1.5rem"}}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${Y?.configured&&!Y?.connected&&P`
        <div style=${{padding:"0.9rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)",marginBottom:"1.5rem"}}>
          <p style=${{fontSize:"0.85rem",marginBottom:"0.75rem"}}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",textDecoration:"none",fontWeight:600,fontSize:"0.85rem"}}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${Y?.connected&&P`
        <div style=${{fontSize:"0.8rem",color:"var(--success)",marginBottom:"1rem"}}>
          ● Connected to GitHub as ${Y.login}
        </div>

        <form onSubmit=${c} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <input
              type="search"
              value=${F}
              onInput=${(B)=>X(B.target.value)}
              placeholder="Search repositories…"
              aria-label="Search repositories"
              style=${{...o,marginBottom:"0.5rem"}}
            />
            <select value=${q} onChange=${(B)=>L(B.target.value)} style=${{...o}}>
              <option value="">${D.length?"Select a repo…":"No matching repos"}</option>
              ${D.map((B)=>P`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Agent</label>
            <select value=${z} onChange=${(B)=>H(B.target.value)} style=${{...o}}>
              <option value="">Select an agent…</option>
              ${v.map((B)=>P`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${v.length===0&&P`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected agents yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${$}
              onInput=${(B)=>N(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...o,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${U&&P`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${U}</div>`}

          <button type="submit" disabled=${!z||!q||!$.trim()||J} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!$.trim()||J?0.5:1}}>
            ${J?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&P`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>P`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>m(C===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${x1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&P`
                <a href=${B.pr_url} target="_blank" onClick=${(E)=>E.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${C===B.id&&P`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function I1({onAdded:Z}){let[Y,O]=_(""),[W,G]=_(""),[Q,K]=_(!1),z=/^(did:(plc|web):[a-zA-Z0-9._:%-]+|@?[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)+)$/.test(Y.trim())&&!Y.trim().startsWith("http");async function H(){G(""),K(!0);try{let q=await x("/agents",{method:"POST",body:JSON.stringify({card_url:Y})});Z(q.agent)}catch(q){G(q.message)}finally{K(!1)}}return P`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL, ATProto DID, or handle
        </label>
        <input
          type="text"
          value=${Y}
          onInput=${(q)=>O(q.target.value)}
          onKeyDown=${(q)=>{if(q.key==="Enter"&&Y&&!Q)H()}}
          placeholder="https://agent.example.com  or  @agent.bsky.social  or  did:plc:…"
          style=${o}
        />
        ${z?P`<p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
              ATProto identity detected — orchestral will resolve the DID document and PDS record to discover the A2A URL.
            </p>`:P`<p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
              URL to the agent's A2A card (orchestral appends /.well-known/agent-card.json if needed).
              You can also enter an ATProto handle (e.g. <code>@agent.bsky.social</code>) or DID
              (e.g. <code>did:plc:…</code>) to discover the agent via the ATProto network.
            </p>`}
      </div>

      ${W&&P`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${W}
      </div>`}

      <button
        onClick=${H}
        disabled=${!Y||Q}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!Y||Q?0.5:1}}
      >
        ${Q?z?"Resolving ATProto identity…":"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function A1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=_([]),[Q,K]=_(""),[z,H]=_(!1),[q,L]=_(null),[F,X]=_([]),[$,N]=_(""),[J,R]=_(Z),[U,T]=_(!1),C=O0(null),m=O0(null),v=O0(null),D=O0(0);a(()=>{x(`/agents/${Z.id}`).then((V)=>R(V)).catch(()=>{})},[Z.id]);let f=Q0(async(V)=>{let M=++D.current;L(V);let j=await x(`/conversations/${V}/messages`);if(M!==D.current)return;G(j.messages||[])},[]);a(()=>{(async()=>{try{let M=(await x(`/agents/${Z.id}/conversations`)).conversations||[];if(X(M),M.length>0)await f(M[0].id);else{let j=++D.current,I=await x(`/agents/${Z.id}/conversations`,{method:"POST"});if(j!==D.current)return;X([I.conversation]),L(I.conversation.id),G([])}}catch(V){N(V.message)}})()},[Z.id]);async function c(){N("");let V=++D.current;try{let M=await x(`/agents/${Z.id}/conversations`,{method:"POST"});if(V!==D.current)return;X((j)=>[M.conversation,...j]),L(M.conversation.id),G([]),K("")}catch(M){if(V===D.current)N(M.message)}}async function B(V){if(V===q)return;N("");try{await f(V)}catch(M){N(M.message)}}a(()=>{C.current?.scrollIntoView({behavior:"smooth"})},[W]),a(()=>{if(!z&&!b)m.current?.focus()},[z]);async function E(V){if(V?.preventDefault(),!Q.trim()||!q||z)return;let M=Q.trim(),j=q;K(""),H(!0),N("");let I=++D.current;G((d)=>[...d,{role:"user",text:M,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((d)=>[...d,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(J?.agent_card?.capabilities?.streaming??!0)await S(M,j,I);else await $1(M,j,I)}catch(d){if(I===D.current){if(N(d.message),d.message.includes("Authentication"))Y();G((J0)=>J0.filter((t)=>!t.streaming))}}finally{H(!1)}}async function S(V,M,j){let I=await fetch(`/api/conversations/${M}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:V}),credentials:"same-origin"});if(!I.ok){let e=await I.json().catch(()=>({error:I.statusText}));throw Error(e.error||`HTTP ${I.status}`)}let d=I.body.getReader(),J0=new TextDecoder,t="",P0="";while(!0){let{done:e,value:V1}=await d.read();if(e)break;t+=J0.decode(V1,{stream:!0});let S0=t.split(`

`);t=S0.pop()||"";for(let J1 of S0)for(let b0 of J1.split(`
`))if(b0.startsWith("data: "))try{let A=JSON.parse(b0.slice(6));if(A.error)throw Error(A.error);let r="",v0=!1;if(A.task?.status?.message?.parts)r=A.task.status.message.parts.map((h)=>h.text||"").join("");else if(A.message?.parts)r=A.message.parts.map((h)=>h.text||"").join("");else if(A.artifactUpdate?.artifact?.parts)r=A.artifactUpdate.artifact.parts.map((h)=>h.text||"").join(""),v0=!!A.artifactUpdate.append;else if(A.statusUpdate?.status?.message?.parts)r=A.statusUpdate.status.message.parts.map((h)=>h.text||"").join("");if(r){if(P0=v0?P0+r:r,j===D.current)G((h)=>h.map((F0)=>F0.streaming?{...F0,text:P0}:F0))}}catch(A){if(A.message)throw A}}if(j===D.current){let e=await x(`/conversations/${M}/messages`);if(j===D.current)G(e.messages||[])}}async function $1(V,M,j){if(await x(`/conversations/${M}/send`,{method:"POST",body:JSON.stringify({text:V})}),j!==D.current)return;let I=await x(`/conversations/${M}/messages`);if(j===D.current)G(I.messages||[])}let[s,x0]=_(!1),[u,B1]=_(""),[j0,L1]=_("");async function I0(){x0(!0),N("");try{if(!J?.has_oidc_credentials&&u)await x(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:u,client_secret:j0})});window.location.href=`/api/agents/${Z.id}/connect`}catch(V){N(V.message)}finally{x0(!1)}}let b=J?.auth_state!=="connected",A0=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return P`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${J?.icon_url?P`<img src=${J.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:P`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${J?.name||Z.name}</h2>
          ${J?.description&&P`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${J.description}</p>`}
        </div>
        ${F.length>1&&P`
          <select
            value=${q}
            onChange=${(V)=>B(V.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${F.map((V,M)=>P`
              <option key=${V.id} value=${V.id}>
                ${new Date(V.created_at*1000).toLocaleString()} ${M===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${c}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:b?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:b?"var(--warning)":"var(--success)",border:`1px solid ${b?"var(--warning)":"var(--success)"}`}}>
          ${b?"Needs Auth":"Connected"}
        </div>
        <button
          onClick=${()=>T((V)=>!V)}
          title="Agent info"
          style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:U?"var(--bg-hover)":"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          ℹ️
        </button>
        <button
          onClick=${O}
          title="Remove this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          🗑 Remove
        </button>
      </header>

      ${U&&P`
        <div style=${{padding:"0.9rem 1.5rem",borderBottom:"1px solid var(--border)",fontSize:"0.78rem",color:"var(--text-dim)",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          ${[J?.atproto_handle?["ATProto handle",`@${J.atproto_handle}`]:null,J?.atproto_did?["ATProto DID",J.atproto_did]:null,["Card URL",J?.card_url],["Endpoint URL",J?.agent_card?.url],["Protocol version",J?.agent_card?.protocolVersion],["Transport",J?.agent_card?.preferredTransport],["Agent version",J?.agent_card?.version],["Security",J?.security_type],["Streaming",J?.agent_card?.capabilities?.streaming?"yes":"no"],["Skills",(J?.agent_card?.skills||[]).map((V)=>V.name||V.id).filter(Boolean).join(", ")||"—"],["Added",J?.created_at?new Date(J.created_at*1000).toLocaleString():void 0]].filter(Boolean).filter(([,V])=>V!==void 0&&V!==null&&V!=="").map(([V,M])=>P`
            <div key=${V} style=${{display:"flex",gap:"0.6rem"}}>
              <span style=${{minWidth:"120px",flexShrink:0,color:"var(--text-dimmer)"}}>${V}</span>
              <span style=${{color:"var(--text)",wordBreak:"break-all"}}>${M}</span>
            </div>
          `)}
        </div>
      `}

      ${b&&P`
        <div style=${{padding:"1.5rem",borderBottom:"1px solid var(--border)",maxWidth:"600px"}}>
          ${J?.has_oidc_credentials?P`
            <p style=${{color:"var(--text)",marginBottom:"0.5rem",fontSize:"0.9rem"}}>
              This agent requires OIDC. Credentials are configured automatically.
            </p>
            <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Ensure this redirect URI is registered in your identity provider:
              <br/>
              <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${A0}</code>
            </div>
            <button onClick=${I0} disabled=${s} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:s?0.5:1}}>
              ${s?"Redirecting…":"\uD83D\uDD11 Connect"}
            </button>
          `:P`
            <p style=${{color:"var(--text)",marginBottom:"0.5rem",fontSize:"0.9rem"}}>
              This agent requires OIDC authentication.
            </p>
            <p style=${{color:"var(--text-dim)",marginBottom:"1rem",fontSize:"0.8rem"}}>
              Enter the Pocket ID client ID for this agent. If the client is set to <strong>public</strong> in
              <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)"}}>Pocket ID admin</a>,
              no secret is needed — PKCE handles it. Otherwise include the secret too.
            </p>
            <div style=${{marginBottom:"0.75rem"}}>
              <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
                Client ID
              </label>
              <input
                type="text"
                value=${u}
                onInput=${(V)=>B1(V.target.value)}
                placeholder="Pocket ID client ID"
                style=${{...o,width:"100%"}}
              />
            </div>
            <div style=${{marginBottom:"0.75rem"}}>
              <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
                Client Secret
              </label>
              <input
                type="password"
                value=${j0}
                onInput=${(V)=>L1(V.target.value)}
                placeholder="Pocket ID client secret (leave blank for public clients)"
                style=${{...o,width:"100%"}}
              />
            </div>
            <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
              <br/>
              <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${A0}</code>
              <br/>
              <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
                → Pocket ID admin
              </a>
            </div>
            <button onClick=${I0} disabled=${!u||s} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!u||s?0.5:1}}>
              ${s?"Redirecting…":"\uD83D\uDD11 Connect"}
            </button>
          `}
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${W.length===0&&!b&&P`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${W.map((V)=>P`
            <div key=${V.id} style=${{maxWidth:"85%",alignSelf:V.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:V.role==="user"?"var(--accent)":"var(--bg-card)",color:V.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${V.text||(V.streaming?"…":"")}
            </div>
          `)}
          <div ref=${C} />
        </div>
      </div>

      ${$&&P`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${$}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${E} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            ref=${m}
            type="text"
            value=${Q}
            onInput=${(V)=>K(V.target.value)}
            placeholder=${b?"Connect to start messaging…":"Send a message…"}
            disabled=${b||z}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:b||z?0.5:1}}
          />
          <button type="submit" disabled=${b||z||!Q.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:b||z||!Q.trim()?0.5:1}}>
            ${z?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var o={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};L0(P`<${y1} />`,document.getElementById("root"));
