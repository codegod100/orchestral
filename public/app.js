var H0,k,d0,P1,p,v0,c0,p0,F0,X0,e,a0,M0,T0,_0,U1,K0={},q0=[],F1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N0=Array.isArray;function d(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function w0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function $0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?H0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return G0(Z,K,W,G,null)}function G0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++d0:G,__i:-1,__u:0};return G==null&&k.vnode!=null&&k.vnode(Q),Q}function B0(Z){return Z.children}function l(Z,Y){this.props=Z,this.context=Y}function o(Z,Y){if(Y==null)return Z.__?o(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?o(Z):null}function T1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=d({},Y);Q.__v=Y.__v+1,k.vnode&&k.vnode(Q),D0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?o(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,l0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&i0(Q)}}function i0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),i0(Z)}function f0(Z){(!Z.__d&&(Z.__d=!0)&&p.push(Z)&&!z0.__r++||v0!=k.debounceRendering)&&((v0=k.debounceRendering)||c0)(z0)}function z0(){try{for(var Z,Y=1;p.length;)p.length>Y&&p.sort(p0),Z=p.shift(),Y=p.length,T1(Z)}finally{p.length=z0.__r=0}}function r0(Z,Y,O,W,G,Q,K,z,$,q,N){var F,X,H,V,P,w,M=W&&W.__k||q0,U=Y.length;for($=_1(O,Y,M,$,U),F=0;F<U;F++)(H=O.__k[F])!=null&&(X=H.__i!=-1&&M[H.__i]||K0,H.__i=F,w=D0(Z,H,X,G,Q,K,z,$,q,N),V=H.__e,H.ref&&X.ref!=H.ref&&(X.ref&&k0(X.ref,null,H),N.push(H.ref,H.__c||V,H)),P==null&&V!=null&&(P=V),4&H.__u?($=o0(H,$,Z),X.__e&&(X.__e=null)):typeof H.type=="function"&&w!==void 0?$=w:V&&($=V.nextSibling),H.__u&=-7);return O.__e=P,$}function _1(Z,Y,O,W,G){var Q,K,z,$,q,N=O.length,F=N,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=G0(null,K,null,null,null):N0(K)?K=Z.__k[Q]=G0(B0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=G0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,$=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=M1(K,O,$,F))!=-1&&(F--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>N?X--:G<N&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=$&&(q==$-1?X--:q==$+1?X++:(q>$?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(F)for(Q=0;Q<N;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=o(z)),t0(z,z));return W}function o0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=o0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=o(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function M1(Z,Y,O,W){var G,Q,K,z=Z.key,$=Z.type,q=Y[O],N=q!=null&&(2&q.__u)==0;if(q===null&&z==null||N&&z==q.key&&$==q.type)return O;if(W>(N?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&$==q.type)return K}return-1}function h0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||F1.test(Y)?O:O+"px"}function W0(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||h0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||h0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(a0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[e]=W[e]:(O[e]=M0,Z.addEventListener(Y,Q?_0:T0,Q)):Z.removeEventListener(Y,Q?_0:T0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function g0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[X0]==null)Y[X0]=M0++;else if(Y[X0]<O[e])return;return O(k.event?k.event(Y):Y)}}}function D0(Z,Y,O,W,G,Q,K,z,$,q){var N,F,X,H,V,P,w,M,U,T,A,v,E,f,c,B,C=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&($=!!(32&O.__u),Q=[z=Y.__e=O.__e]),(N=k.__b)&&N(Y);Y:if(typeof C=="function"){F=K.length;try{if(U=Y.props,T=C.prototype&&C.prototype.render,A=(N=C.contextType)&&W[N.__c],v=N?A?A.props.value:N.__:W,O.__c?M=(X=Y.__c=O.__c).__=X.__E:(T?Y.__c=X=new C(U,v):(Y.__c=X=new l(U,v),X.constructor=C,X.render=D1),A&&A.sub(X),X.state||(X.state={}),X.__n=W,H=X.__d=!0,X.__h=[],X._sb=[]),T&&X.__s==null&&(X.__s=X.state),T&&C.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=d({},X.__s)),d(X.__s,C.getDerivedStateFromProps(U,X.__s))),V=X.props,P=X.state,X.__v=Y,H)T&&C.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),T&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(T&&C.getDerivedStateFromProps==null&&U!==V&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(U,v),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(U,X.__s,v)===!1){Y.__v!=O.__v&&(X.props=U,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(b){b&&(b.__=Y)}),q0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=o(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(U,X.__s,v),T&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(V,P,w)})}if(X.context=v,X.props=U,X.__P=Z,X.__e=!1,E=k.__r,f=0,T)X.state=X.__s,X.__d=!1,E&&E(Y),N=X.render(X.props,X.state,X.context),q0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,E&&E(Y),N=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++f<25);X.state=X.__s,X.getChildContext!=null&&(W=d(d({},W),X.getChildContext())),T&&!H&&X.getSnapshotBeforeUpdate!=null&&(w=X.getSnapshotBeforeUpdate(V,P)),c=N!=null&&N.type===B0&&N.key==null?u0(N.props.children):N,z=r0(Z,N0(c)?c:[c],Y,O,W,G,Q,K,z,$,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),M&&(X.__E=X.__=null)}catch(b){if(K.length=F,Y.__v=null,$||Q!=null){if(b.then){for(Y.__u|=$?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(B=Q.length;B--;)w0(Q[B])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),b.then||s0(Y),k.__e(b,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=w1(O.__e,Y,O,W,G,Q,K,$,q);return(N=k.diffed)&&N(Y),128&Y.__u?void 0:z}function s0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(s0))}function l0(Z,Y,O){for(var W=0;W<O.length;W++)k0(O[W],O[++W],O[++W]);k.__c&&k.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){k.__e(Q,G.__v)}})}function u0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:N0(Z)?Z.map(u0):Z.constructor!==void 0?null:d({},Z)}function w1(Z,Y,O,W,G,Q,K,z,$){var q,N,F,X,H,V,P,w=O.props||K0,M=Y.props,U=Y.type;if(U=="svg"?G="http://www.w3.org/2000/svg":U=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((H=Q[q])&&"setAttribute"in H==!!U&&(U?H.localName==U:H.nodeType==3)){Z=H,Q[q]=null;break}}if(Z==null){if(U==null)return document.createTextNode(M);Z=document.createElementNS(G,U,M.is&&M),z&&(k.__m&&k.__m(Y,Q),z=!1),Q=null}if(U==null)w===M||z&&Z.data==M||(Z.data=M);else{if(Q=U=="textarea"&&M.defaultValue!=null?null:Q&&H0.call(Z.childNodes),!z&&Q!=null)for(w={},q=0;q<Z.attributes.length;q++)w[(H=Z.attributes[q]).name]=H.value;for(q in w)H=w[q],q=="dangerouslySetInnerHTML"?F=H:q=="children"||(q in M)||q=="value"&&("defaultValue"in M)||q=="checked"&&("defaultChecked"in M)||W0(Z,q,null,H,G);for(q in M)H=M[q],q=="children"?X=H:q=="dangerouslySetInnerHTML"?N=H:q=="value"?V=H:q=="checked"?P=H:z&&typeof H!="function"||w[q]===H||W0(Z,q,H,w[q],G);if(N)z||F&&(N.__html==F.__html||N.__html==Z.innerHTML)||(Z.innerHTML=N.__html),Y.__k=[];else if(F&&(Z.innerHTML=""),r0(Y.type=="template"?Z.content:Z,N0(X)?X:[X],Y,O,W,U=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&o(O,0),z,$),Q!=null)for(q=Q.length;q--;)w0(Q[q]);z&&U!="textarea"||(q="value",U=="progress"&&V==null?Z.removeAttribute("value"):V!=null&&(V!==Z[q]||U=="progress"&&!V||U=="option"&&V!=w[q])&&W0(Z,q,V,w[q],G),q="checked",P!=null&&P!=Z[q]&&W0(Z,q,P,w[q],G))}return Z}function k0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){k.__e(G,O)}}function t0(Z,Y,O){var W,G;if(k.unmount&&k.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||k0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){k.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&t0(W[G],Y,O||typeof Z.type!="function");O||w0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function D1(Z,Y,O){return this.constructor(Z,O)}function L0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),k.__&&k.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],D0(Y,Z=(!W&&O||Y).__k=$0(B0,null,[Z]),G||K0,K0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?H0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),l0(Q,Z,K),Z.props.children=null}H0=q0.slice,k={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},d0=0,P1=function(Z){return Z!=null&&Z.constructor===void 0},l.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=d({},this.state),typeof Z=="function"&&(Z=Z(d({},O),this.props)),Z&&d(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),f0(this))},l.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),f0(this))},l.prototype.render=B0,p=[],c0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p0=function(Z,Y){return Z.__v.__b-Y.__v.__b},z0.__r=0,F0=Math.random().toString(8),X0="__d"+F0,e="__a"+F0,a0=/(PointerCapture)$|Capture$/i,M0=0,T0=g0(!1),_0=g0(!0),U1=0;var Y0,R,E0,n0,Z0=0,G1=[],y=k,e0=y.__b,Y1=y.__r,Z1=y.diffed,O1=y.__c,Q1=y.unmount,W1=y.__;function R0(Z,Y){y.__h&&y.__h(R,Z,Z0||Y),Z0=0;var O=R.__H||(R.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function _(Z){return Z0=1,k1(z1,Z)}function k1(Z,Y,O){var W=R0(Y0++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):z1(void 0,Y),function(z){var $=W.__N?W.__N[0]:W.__[0],q=W.t($,z);$!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=R,!R.__f)){var G=function(z,$,q){if(!W.__c.__H)return!0;var N=!1,F=W.__c.props!==z;if(W.__c.__H.__.some(function(H){if(H.__N){N=!0;var V=H.__[0];H.__=H.__N,H.__N=void 0,V!==H.__[0]&&(F=!0)}}),Q){var X=Q.call(this,z,$,q);return N?X||F:X}return!N||F};R.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=R;R.componentWillUpdate=function(z,$,q){if(this.__e){var N=Q;Q=void 0,G(z,$,q),Q=N}K&&K.call(this,z,$,q)},R.shouldComponentUpdate=G}return W.__N||W.__}function a(Z,Y){var O=R0(Y0++,3);!y.__s&&q1(O.__H,Y)&&(O.__=Z,O.u=Y,R.__H.__h.push(O))}function O0(Z){return Z0=5,K1(function(){return{current:Z}},[])}function K1(Z,Y){var O=R0(Y0++,7);return q1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function Q0(Z,Y){return Z0=8,K1(function(){return Z},Y)}function E1(){for(var Z;Z=G1.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(V0),Y.__h.some(C0),Y.__h=[]}catch(O){Y.__h=[],y.__e(O,Z.__v)}}}y.__b=function(Z){R=null,e0&&e0(Z)},y.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),W1&&W1(Z,Y)},y.__r=function(Z){Y1&&Y1(Z),Y0=0;var Y=(R=Z.__c).__H;Y&&(E0===R?(Y.__h=[],R.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(V0),Y.__h.some(C0),Y.__h=[],Y0=0)),E0=R},y.diffed=function(Z){Z1&&Z1(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(G1.push(Y)!==1&&n0===y.requestAnimationFrame||((n0=y.requestAnimationFrame)||C1)(E1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),E0=R=null},y.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(V0),O.__h=O.__h.filter(function(W){return!W.__||C0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],y.__e(W,O.__v)}}),O1&&O1(Z,Y)},y.unmount=function(Z){Q1&&Q1(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{V0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&y.__e(Y,O.__v))};var X1=typeof requestAnimationFrame=="function";function C1(Z){var Y,O=function(){clearTimeout(W),X1&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);X1&&(Y=requestAnimationFrame(O))}function V0(Z){var Y=R,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),R=Y}function C0(Z){var Y=R;Z.__c=Z.__(),R=Y}function q1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function z1(Z,Y){return typeof Y=="function"?Y(Z):Y}var N1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,N1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},H1=new Map;function y0(Z){var Y=H1.get(this);return Y||(Y=new Map,H1.set(this,Y)),(Y=N1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",$=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?$.push(0,X,K):Q===3&&(X||K)?($.push(3,X,K),Q=2):Q===2&&K==="..."&&X?$.push(4,X,0):Q===2&&K&&!X?$.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&($.push(Q,0,K,G),Q=6),X&&($.push(Q,X,0,G),Q=6)),K=""},N=0;N<O.length;N++){N&&(Q===1&&q(),q(N));for(var F=0;F<O[N].length;F++)W=O[N][F],Q===1?W==="<"?(q(),$=[$],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[N][F+1]===">")?(q(),Q===3&&($=$[0]),Q=$,($=$[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,$=$[0])}return q(),$}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var J=y0.bind($0);async function x(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function R1(){let[Z,Y]=_([]),[O,W]=_(null),[G,Q]=_("list"),[K,z]=_(null),[$,q]=_(!0),N=Q0(async()=>{try{let H=await x("/agents");Y(H.agents||[])}catch(H){console.error("Failed to load agents:",H)}},[]),F=Q0(async(H)=>{if(!confirm(`Remove "${H.name}"? This deletes its conversation history too.`))return;try{await x(`/agents/${H.id}`,{method:"DELETE"}),W((V)=>{if(V?.id===H.id)return Q("list"),null;return V}),await N()}catch(V){alert(`Failed to remove agent: ${V.message}`)}},[N]);a(()=>{(async()=>{try{let H=await x("/auth/me");z(H.user)}catch{}await N(),q(!1)})()},[]);let X=(H)=>({style:{...H?Object.fromEntries(H.split(";").filter(Boolean).map((V)=>{let[P,w]=V.trim().split(":");return[P.replace(/-([a-z])/g,(M,U)=>U.toUpperCase()),w.trim()]})):{}}});if($)return J`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return J`
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
            onClick=${()=>{Q("add"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            + Add Agent
          </button>
          <button
            onClick=${()=>{Q("jobs"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:G==="jobs"?"var(--bg-hover)":"transparent",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            🚀 Jobs
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Z.map((H)=>J`
            <div
              key=${H.id}
              onClick=${()=>{W(H),Q("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:O?.id===H.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${H.icon_url?J`<img src=${H.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${H.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:H.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${H.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
              <button
                onClick=${(V)=>{V.stopPropagation(),F(H)}}
                title="Remove agent"
                style=${{background:"transparent",border:"none",color:"var(--text-dim)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",lineHeight:1,flexShrink:0,borderRadius:"var(--radius)"}}
              >
                🗑
              </button>
            </div>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${K?J`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${K.name||K.email||K.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:J`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${G==="add"&&J`<${A1} onAdded=${(H)=>{N(),W(H),Q("chat")}} />`}
        ${G==="chat"&&O&&J`<${I1} agent=${O} onRefresh=${N} onDelete=${()=>F(O)} />`}
        ${G==="jobs"&&J`<${j1} agents=${Z} />`}
        ${G==="list"&&J`<${y1} />`}
      </main>
    </div>
  `}function y1(){return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var x1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Agent is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function j1({agents:Z}){let[Y,O]=_(null),[W,G]=_([]),[Q,K]=_([]),[z,$]=_(""),[q,N]=_(""),[F,X]=_(""),[H,V]=_(""),[P,w]=_(!1),[M,U]=_(""),[T,A]=_(null),v=(Z||[]).filter((B)=>B.auth_state==="connected"),E=W.filter((B)=>B.full_name.toLowerCase().includes(F.trim().toLowerCase())),f=Q0(async()=>{try{let B=await x("/jobs");K(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);a(()=>{(async()=>{try{let B=await x("/github/status");if(O(B),B.connected){let C=await x("/github/repos");G(C.repos||[])}}catch(B){U(B.message)}await f()})()},[]),a(()=>{if(!Q.some((b)=>!["done","failed"].includes(b.status)))return;let C=setInterval(f,3000);return()=>clearInterval(C)},[Q,f]);async function c(B){if(B?.preventDefault(),!z||!q||!H.trim()||P)return;w(!0),U("");try{let C=await x("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:H.trim()})});K((b)=>[C.job,...b]),V("")}catch(C){U(C.message)}finally{w(!1)}}return J`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and an agent, describe what to do, and orchestral spins up a fresh container,
        asks the agent for a patch, and opens a pull request.
      </p>

      ${!Y?.configured&&J`
        <div style=${{padding:"0.9rem",background:"rgba(245,158,11,0.1)",border:"1px solid var(--warning)",borderRadius:"var(--radius)",fontSize:"0.85rem",marginBottom:"1.5rem"}}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${Y?.configured&&!Y?.connected&&J`
        <div style=${{padding:"0.9rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)",marginBottom:"1.5rem"}}>
          <p style=${{fontSize:"0.85rem",marginBottom:"0.75rem"}}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",textDecoration:"none",fontWeight:600,fontSize:"0.85rem"}}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${Y?.connected&&J`
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
              style=${{...i,marginBottom:"0.5rem"}}
            />
            <select value=${q} onChange=${(B)=>N(B.target.value)} style=${{...i}}>
              <option value="">${E.length?"Select a repo…":"No matching repos"}</option>
              ${E.map((B)=>J`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Agent</label>
            <select value=${z} onChange=${(B)=>$(B.target.value)} style=${{...i}}>
              <option value="">Select an agent…</option>
              ${v.map((B)=>J`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${v.length===0&&J`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected agents yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${H}
              onInput=${(B)=>V(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...i,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${M&&J`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${M}</div>`}

          <button type="submit" disabled=${!z||!q||!H.trim()||P} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!H.trim()||P?0.5:1}}>
            ${P?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&J`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>J`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>A(T===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${x1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&J`
                <a href=${B.pr_url} target="_blank" onClick=${(C)=>C.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${T===B.id&&J`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function A1({onAdded:Z}){let[Y,O]=_("url"),[W,G]=_(""),[Q,K]=_(""),[z,$]=_(!1),[q,N]=_(null),[F,X]=_(""),[H,V]=_(!1);async function P(){if(!Q.trim())return;$(!0),N(null),X("");try{let T=await x("/atproto/resolve",{method:"POST",body:JSON.stringify({identifier:Q.trim()})});N(T.resolution)}catch(T){X(T.message)}finally{$(!1)}}async function w(){X(""),V(!0);try{let T=Y==="atproto"?{atproto_id:Q.trim()}:{card_url:W.trim()},A=await x("/agents",{method:"POST",body:JSON.stringify(T)});Z(A.agent)}catch(T){X(T.message)}finally{V(!1)}}let M=(T)=>({flex:1,padding:"0.5rem",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",border:"1px solid var(--border)",background:T?"var(--accent)":"var(--bg-card)",color:T?"white":"var(--text)",borderRadius:"var(--radius)"}),U=Y==="url"?!!W.trim():!!Q.trim();return J`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{display:"flex",gap:"0.5rem",marginBottom:"1.5rem"}}>
        <button style=${M(Y==="url")} onClick=${()=>{O("url"),X(""),N(null)}}>
          🌐 By URL
        </button>
        <button style=${M(Y==="atproto")} onClick=${()=>{O("atproto"),X(""),N(null)}}>
          🦋 By ATProto DID / Handle
        </button>
      </div>

      ${Y==="url"&&J`
        <div style=${{marginBottom:"1.5rem"}}>
          <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
            Agent Card URL
          </label>
          <input
            type="text"
            value=${W}
            onInput=${(T)=>G(T.target.value)}
            placeholder="https://agent.example.com"
            style=${i}
          />
          <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
            The URL where the agent publishes its Agent Card. Orchestral will fetch /.well-known/agent-card.json.
            OIDC credentials are automatically configured for agents on the same identity provider.
          </p>
        </div>
      `}

      ${Y==="atproto"&&J`
        <div style=${{marginBottom:"1.5rem"}}>
          <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
            ATProto DID or Handle
          </label>
          <div style=${{display:"flex",gap:"0.5rem"}}>
            <input
              type="text"
              value=${Q}
              onInput=${(T)=>{K(T.target.value),N(null)}}
              placeholder="@agent.bsky.social or did:plc:…"
              style=${{...i,flex:1}}
            />
            <button
              onClick=${P}
              disabled=${!Q.trim()||z}
              style=${{padding:"0.6rem 1rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",whiteSpace:"nowrap",opacity:!Q.trim()||z?0.5:1}}
            >
              ${z?"Resolving…":"Preview"}
            </button>
          </div>
          <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
            Enter an ATProto handle (e.g. <code>agent.bsky.social</code>) or DID (e.g. <code>did:plc:…</code>).
            Orchestral resolves it to a PDS, looks up the <code>app.orchestral.agentCard</code> record,
            and falls back to <code>/.well-known/agent-card.json</code> on the PDS.
          </p>

          ${q&&J`
            <div style=${{marginTop:"1rem",padding:"0.9rem",background:"rgba(34,197,94,0.06)",border:"1px solid var(--success)",borderRadius:"var(--radius)",fontSize:"0.8rem"}}>
              <div style=${{fontWeight:700,color:"var(--success)",marginBottom:"0.4rem"}}>✓ Resolved</div>
              ${[["DID",q.did],["PDS",q.pdsEndpoint],["Card URL",q.cardUrl],["Source",q.fromRecord?"app.orchestral.agentCard record":"/.well-known/agent-card.json (fallback)"]].map(([T,A])=>J`
                <div key=${T} style=${{display:"flex",gap:"0.5rem",marginTop:"0.2rem"}}>
                  <span style=${{minWidth:"70px",color:"var(--text-dim)"}}>${T}</span>
                  <span style=${{color:"var(--text)",wordBreak:"break-all"}}>${A}</span>
                </div>
              `)}
            </div>
          `}
        </div>
      `}

      ${F&&J`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${F}
      </div>`}

      <button
        onClick=${w}
        disabled=${!U||H}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!U||H?0.5:1}}
      >
        ${H?"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function I1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=_([]),[Q,K]=_(""),[z,$]=_(!1),[q,N]=_(null),[F,X]=_([]),[H,V]=_(""),[P,w]=_(Z),[M,U]=_(!1),T=O0(null),A=O0(null),v=O0(null),E=O0(0);a(()=>{x(`/agents/${Z.id}`).then((L)=>w(L)).catch(()=>{})},[Z.id]);let f=Q0(async(L)=>{let D=++E.current;N(L);let j=await x(`/conversations/${L}/messages`);if(D!==E.current)return;G(j.messages||[])},[]);a(()=>{(async()=>{try{let D=(await x(`/agents/${Z.id}/conversations`)).conversations||[];if(X(D),D.length>0)await f(D[0].id);else{let j=++E.current,I=await x(`/agents/${Z.id}/conversations`,{method:"POST"});if(j!==E.current)return;X([I.conversation]),N(I.conversation.id),G([])}}catch(L){V(L.message)}})()},[Z.id]);async function c(){V("");let L=++E.current;try{let D=await x(`/agents/${Z.id}/conversations`,{method:"POST"});if(L!==E.current)return;X((j)=>[D.conversation,...j]),N(D.conversation.id),G([]),K("")}catch(D){if(L===E.current)V(D.message)}}async function B(L){if(L===q)return;V("");try{await f(L)}catch(D){V(D.message)}}a(()=>{T.current?.scrollIntoView({behavior:"smooth"})},[W]),a(()=>{if(!z&&!m)A.current?.focus()},[z]);async function C(L){if(L?.preventDefault(),!Q.trim()||!q||z)return;let D=Q.trim(),j=q;K(""),$(!0),V("");let I=++E.current;G((h)=>[...h,{role:"user",text:D,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((h)=>[...h,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(P?.agent_card?.capabilities?.streaming??!0)await b(D,j,I);else await $1(D,j,I)}catch(h){if(I===E.current){if(V(h.message),h.message.includes("Authentication"))Y();G((J0)=>J0.filter((t)=>!t.streaming))}}finally{$(!1)}}async function b(L,D,j){let I=await fetch(`/api/conversations/${D}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:L}),credentials:"same-origin"});if(!I.ok){let n=await I.json().catch(()=>({error:I.statusText}));throw Error(n.error||`HTTP ${I.status}`)}let h=I.body.getReader(),J0=new TextDecoder,t="",P0="";while(!0){let{done:n,value:V1}=await h.read();if(n)break;t+=J0.decode(V1,{stream:!0});let S0=t.split(`

`);t=S0.pop()||"";for(let J1 of S0)for(let b0 of J1.split(`
`))if(b0.startsWith("data: "))try{let S=JSON.parse(b0.slice(6));if(S.error)throw Error(S.error);let r="",m0=!1;if(S.task?.status?.message?.parts)r=S.task.status.message.parts.map((g)=>g.text||"").join("");else if(S.message?.parts)r=S.message.parts.map((g)=>g.text||"").join("");else if(S.artifactUpdate?.artifact?.parts)r=S.artifactUpdate.artifact.parts.map((g)=>g.text||"").join(""),m0=!!S.artifactUpdate.append;else if(S.statusUpdate?.status?.message?.parts)r=S.statusUpdate.status.message.parts.map((g)=>g.text||"").join("");if(r){if(P0=m0?P0+r:r,j===E.current)G((g)=>g.map((U0)=>U0.streaming?{...U0,text:P0}:U0))}}catch(S){if(S.message)throw S}}if(j===E.current){let n=await x(`/conversations/${D}/messages`);if(j===E.current)G(n.messages||[])}}async function $1(L,D,j){if(await x(`/conversations/${D}/send`,{method:"POST",body:JSON.stringify({text:L})}),j!==E.current)return;let I=await x(`/conversations/${D}/messages`);if(j===E.current)G(I.messages||[])}let[s,x0]=_(!1),[u,B1]=_(""),[j0,L1]=_("");async function A0(){x0(!0),V("");try{if(!P?.has_oidc_credentials&&u)await x(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:u,client_secret:j0})});window.location.href=`/api/agents/${Z.id}/connect`}catch(L){V(L.message)}finally{x0(!1)}}let m=P?.auth_state!=="connected",I0=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${P?.icon_url?J`<img src=${P.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${P?.name||Z.name}</h2>
          ${P?.description&&J`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${P.description}</p>`}
        </div>
        ${F.length>1&&J`
          <select
            value=${q}
            onChange=${(L)=>B(L.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${F.map((L,D)=>J`
              <option key=${L.id} value=${L.id}>
                ${new Date(L.created_at*1000).toLocaleString()} ${D===0?"(latest)":""}
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
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:m?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:m?"var(--warning)":"var(--success)",border:`1px solid ${m?"var(--warning)":"var(--success)"}`}}>
          ${m?"Needs Auth":"Connected"}
        </div>
        <button
          onClick=${()=>U((L)=>!L)}
          title="Agent info"
          style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:M?"var(--bg-hover)":"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
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

      ${M&&J`
        <div style=${{padding:"0.9rem 1.5rem",borderBottom:"1px solid var(--border)",fontSize:"0.78rem",color:"var(--text-dim)",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          ${[["ATProto DID",P?.atproto_did],["Card URL",P?.card_url],["Endpoint URL",P?.agent_card?.url],["Protocol version",P?.agent_card?.protocolVersion],["Transport",P?.agent_card?.preferredTransport],["Agent version",P?.agent_card?.version],["Security",P?.security_type],["Streaming",P?.agent_card?.capabilities?.streaming?"yes":"no"],["Skills",(P?.agent_card?.skills||[]).map((L)=>L.name||L.id).filter(Boolean).join(", ")||"—"],["Added",P?.created_at?new Date(P.created_at*1000).toLocaleString():void 0]].filter(([,L])=>L!==void 0&&L!==null&&L!=="").map(([L,D])=>J`
            <div key=${L} style=${{display:"flex",gap:"0.6rem"}}>
              <span style=${{minWidth:"110px",flexShrink:0,color:"var(--text-dimmer)"}}>${L}</span>
              <span style=${{color:"var(--text)",wordBreak:"break-all"}}>${D}</span>
            </div>
          `)}
        </div>
      `}

      ${m&&J`
        <div style=${{padding:"1.5rem",borderBottom:"1px solid var(--border)",maxWidth:"600px"}}>
          ${P?.has_oidc_credentials?J`
            <p style=${{color:"var(--text)",marginBottom:"0.5rem",fontSize:"0.9rem"}}>
              This agent requires OIDC. Credentials are configured automatically.
            </p>
            <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Ensure this redirect URI is registered in your identity provider:
              <br/>
              <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${I0}</code>
            </div>
            <button onClick=${A0} disabled=${s} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:s?0.5:1}}>
              ${s?"Redirecting…":"\uD83D\uDD11 Connect"}
            </button>
          `:J`
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
                onInput=${(L)=>B1(L.target.value)}
                placeholder="Pocket ID client ID"
                style=${{...i,width:"100%"}}
              />
            </div>
            <div style=${{marginBottom:"0.75rem"}}>
              <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
                Client Secret
              </label>
              <input
                type="password"
                value=${j0}
                onInput=${(L)=>L1(L.target.value)}
                placeholder="Pocket ID client secret (leave blank for public clients)"
                style=${{...i,width:"100%"}}
              />
            </div>
            <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
              <br/>
              <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${I0}</code>
              <br/>
              <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
                → Pocket ID admin
              </a>
            </div>
            <button onClick=${A0} disabled=${!u||s} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!u||s?0.5:1}}>
              ${s?"Redirecting…":"\uD83D\uDD11 Connect"}
            </button>
          `}
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${W.length===0&&!m&&J`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${W.map((L)=>J`
            <div key=${L.id} style=${{maxWidth:"85%",alignSelf:L.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:L.role==="user"?"var(--accent)":"var(--bg-card)",color:L.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${L.text||(L.streaming?"…":"")}
            </div>
          `)}
          <div ref=${T} />
        </div>
      </div>

      ${H&&J`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${H}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${C} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            ref=${A}
            type="text"
            value=${Q}
            onInput=${(L)=>K(L.target.value)}
            placeholder=${m?"Connect to start messaging…":"Send a message…"}
            disabled=${m||z}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:m||z?0.5:1}}
          />
          <button type="submit" disabled=${m||z||!Q.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:m||z||!Q.trim()?0.5:1}}>
            ${z?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var i={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};L0(J`<${R1} />`,document.getElementById("root"));
