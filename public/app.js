var G0,L,I0,q1,m,C0,x0,S0,H0,t,i,v0,$0,N0,V0,B1,O0={},Y0=[],z1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q0=Array.isArray;function x(Y,O){for(var Z in O)Y[Z]=O[Z];return Y}function j0(Y){Y&&Y.parentNode&&Y.parentNode.removeChild(Y)}function W0(Y,O,Z){var G,K,Q,X={};for(Q in O)Q=="key"?G=O[Q]:Q=="ref"?K=O[Q]:X[Q]=O[Q];if(arguments.length>2&&(X.children=arguments.length>3?G0.call(arguments,2):Z),typeof Y=="function"&&Y.defaultProps!=null)for(Q in Y.defaultProps)X[Q]===void 0&&(X[Q]=Y.defaultProps[Q]);return n(Y,X,G,K,null)}function n(Y,O,Z,G,K){var Q={type:Y,props:O,key:Z,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:K==null?++I0:K,__i:-1,__u:0};return K==null&&L.vnode!=null&&L.vnode(Q),Q}function X0(Y){return Y.children}function p(Y,O){this.props=Y,this.context=O}function g(Y,O){if(O==null)return Y.__?g(Y.__,Y.__i+1):null;for(var Z;O<Y.__k.length;O++)if((Z=Y.__k[O])!=null&&Z.__e!=null)return Z.__e;return typeof Y.type=="function"?g(Y):null}function H1(Y){if(Y.__P&&Y.__d){var O=Y.__v,Z=O.__e,G=[],K=[],Q=x({},O);Q.__v=O.__v+1,L.vnode&&L.vnode(Q),L0(Y.__P,Q,O,Y.__n,Y.__P.namespaceURI,32&O.__u?[Z]:null,G,Z==null?g(O):Z,!!(32&O.__u),K),Q.__v=O.__v,Q.__.__k[Q.__i]=Q,d0(G,Q,K),O.__e=O.__=null,Q.__e!=Z&&m0(Q)}}function m0(Y){if((Y=Y.__)!=null&&Y.__c!=null)return Y.__e=Y.__c.base=null,Y.__k.some(function(O){if(O!=null&&O.__e!=null)return Y.__e=Y.__c.base=O.__e}),m0(Y)}function k0(Y){(!Y.__d&&(Y.__d=!0)&&m.push(Y)&&!Z0.__r++||C0!=L.debounceRendering)&&((C0=L.debounceRendering)||x0)(Z0)}function Z0(){try{for(var Y,O=1;m.length;)m.length>O&&m.sort(S0),Y=m.shift(),O=m.length,H1(Y)}finally{m.length=Z0.__r=0}}function f0(Y,O,Z,G,K,Q,X,q,B,J,H){var $,W,z,V,F,U,D=G&&G.__k||Y0,j=O.length;for(B=N1(Z,O,D,B,j),$=0;$<j;$++)(z=Z.__k[$])!=null&&(W=z.__i!=-1&&D[z.__i]||O0,z.__i=$,U=L0(Y,z,W,K,Q,X,q,B,J,H),V=z.__e,z.ref&&W.ref!=z.ref&&(W.ref&&b0(W.ref,null,z),H.push(z.ref,z.__c||V,z)),F==null&&V!=null&&(F=V),4&z.__u?(B=h0(z,B,Y),W.__e&&(W.__e=null)):typeof z.type=="function"&&U!==void 0?B=U:V&&(B=V.nextSibling),z.__u&=-7);return Z.__e=F,B}function N1(Y,O,Z,G,K){var Q,X,q,B,J,H=Z.length,$=H,W=0;for(Y.__k=Array(K),Q=0;Q<K;Q++)(X=O[Q])!=null&&typeof X!="boolean"&&typeof X!="function"?(typeof X=="string"||typeof X=="number"||typeof X=="bigint"||X.constructor==String?X=Y.__k[Q]=n(null,X,null,null,null):Q0(X)?X=Y.__k[Q]=n(X0,{children:X},null,null,null):X.constructor===void 0&&X.__b>0?X=Y.__k[Q]=n(X.type,X.props,X.key,X.ref?X.ref:null,X.__v):Y.__k[Q]=X,B=Q+W,X.__=Y,X.__b=Y.__b+1,q=null,(J=X.__i=V1(X,Z,B,$))!=-1&&($--,(q=Z[J])&&(q.__u|=2)),q==null||q.__v==null?(J==-1&&(K>H?W--:K<H&&W++),typeof X.type!="function"&&(X.__u|=4)):J!=B&&(J==B-1?W--:J==B+1?W++:(J>B?W--:W++,X.__u|=4))):Y.__k[Q]=null;if($)for(Q=0;Q<H;Q++)(q=Z[Q])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=g(q)),p0(q,q));return G}function h0(Y,O,Z){var G,K;if(typeof Y.type=="function"){for(G=Y.__k,K=0;G&&K<G.length;K++)G[K]&&(G[K].__=Y,O=h0(G[K],O,Z));return O}Y.__e!=O&&(O&&Y.type&&!O.parentNode&&(O=g(Y)),O=Z.insertBefore(Y.__e,O||null));do O=O&&O.nextSibling;while(O!=null&&O.nodeType==8);return O}function V1(Y,O,Z,G){var K,Q,X,q=Y.key,B=Y.type,J=O[Z],H=J!=null&&(2&J.__u)==0;if(J===null&&q==null||H&&q==J.key&&B==J.type)return Z;if(G>(H?1:0)){for(K=Z-1,Q=Z+1;K>=0||Q<O.length;)if((J=O[X=K>=0?K--:Q++])!=null&&(2&J.__u)==0&&q==J.key&&B==J.type)return X}return-1}function y0(Y,O,Z){O[0]=="-"?Y.setProperty(O,Z==null?"":Z):Y[O]=Z==null?"":typeof Z!="number"||z1.test(O)?Z:Z+"px"}function e(Y,O,Z,G,K){var Q,X;O:if(O=="style")if(typeof Z=="string")Y.style.cssText=Z;else{if(typeof G=="string"&&(Y.style.cssText=G=""),G)for(O in G)Z&&O in Z||y0(Y.style,O,"");if(Z)for(O in Z)G&&Z[O]==G[O]||y0(Y.style,O,Z[O])}else if(O[0]=="o"&&O[1]=="n")Q=O!=(O=O.replace(v0,"$1")),X=O.toLowerCase(),O=X in Y||O=="onFocusOut"||O=="onFocusIn"?X.slice(2):O.slice(2),Y.l||(Y.l={}),Y.l[O+Q]=Z,Z?G?Z[i]=G[i]:(Z[i]=$0,Y.addEventListener(O,Q?V0:N0,Q)):Y.removeEventListener(O,Q?V0:N0,Q);else{if(K=="http://www.w3.org/2000/svg")O=O.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(O!="width"&&O!="height"&&O!="href"&&O!="list"&&O!="form"&&O!="tabIndex"&&O!="download"&&O!="rowSpan"&&O!="colSpan"&&O!="role"&&O!="popover"&&O in Y)try{Y[O]=Z==null?"":Z;break O}catch(q){}typeof Z=="function"||(Z==null||Z===!1&&O[4]!="-"?Y.removeAttribute(O):Y.setAttribute(O,O=="popover"&&Z==1?"":Z))}}function A0(Y){return function(O){if(this.l){var Z=this.l[O.type+Y];if(O[t]==null)O[t]=$0++;else if(O[t]<Z[i])return;return Z(L.event?L.event(O):O)}}}function L0(Y,O,Z,G,K,Q,X,q,B,J){var H,$,W,z,V,F,U,D,j,C,f,A,h,u,S,d,w=O.type;if(O.constructor!==void 0)return null;128&Z.__u&&(B=!!(32&Z.__u),Q=[q=O.__e=Z.__e]),(H=L.__b)&&H(O);O:if(typeof w=="function"){$=X.length;try{if(j=O.props,C=w.prototype&&w.prototype.render,f=(H=w.contextType)&&G[H.__c],A=H?f?f.props.value:H.__:G,Z.__c?D=(W=O.__c=Z.__c).__=W.__E:(C?O.__c=W=new w(j,A):(O.__c=W=new p(j,A),W.constructor=w,W.render=j1),f&&f.sub(W),W.state||(W.state={}),W.__n=G,z=W.__d=!0,W.__h=[],W._sb=[]),C&&W.__s==null&&(W.__s=W.state),C&&w.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=x({},W.__s)),x(W.__s,w.getDerivedStateFromProps(j,W.__s))),V=W.props,F=W.state,W.__v=O,z)C&&w.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),C&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(C&&w.getDerivedStateFromProps==null&&j!==V&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(j,A),O.__v==Z.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(j,W.__s,A)===!1){O.__v!=Z.__v&&(W.props=j,W.state=W.__s,W.__d=!1),O.__e=Z.__e,O.__k=Z.__k,O.__k.some(function(v){v&&(v.__=O)}),Y0.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&X.push(W),q=g(Z);break O}W.componentWillUpdate!=null&&W.componentWillUpdate(j,W.__s,A),C&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(V,F,U)})}if(W.context=A,W.props=j,W.__P=Y,W.__e=!1,h=L.__r,u=0,C)W.state=W.__s,W.__d=!1,h&&h(O),H=W.render(W.props,W.state,W.context),Y0.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,h&&h(O),H=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++u<25);W.state=W.__s,W.getChildContext!=null&&(G=x(x({},G),W.getChildContext())),C&&!z&&W.getSnapshotBeforeUpdate!=null&&(U=W.getSnapshotBeforeUpdate(V,F)),S=H!=null&&H.type===X0&&H.key==null?c0(H.props.children):H,q=f0(Y,Q0(S)?S:[S],O,Z,G,K,Q,X,q,B,J),W.base=O.__e,O.__u&=-161,W.__h.length&&X.push(W),D&&(W.__E=W.__=null)}catch(v){if(X.length=$,O.__v=null,B||Q!=null){if(v.then){for(O.__u|=B?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;Q!=null&&(Q[Q.indexOf(q)]=null),O.__e=q}else if(Q!=null)for(d=Q.length;d--;)j0(Q[d])}else O.__e=Z.__e;O.__k==null&&(O.__k=Z.__k||[]),v.then||g0(O),L.__e(v,O,Z)}}else Q==null&&O.__v==Z.__v?(O.__k=Z.__k,O.__e=Z.__e):q=O.__e=$1(Z.__e,O,Z,G,K,Q,X,B,J);return(H=L.diffed)&&H(O),128&O.__u?void 0:q}function g0(Y){Y&&(Y.__c&&(Y.__c.__e=!0),Y.__k&&Y.__k.some(g0))}function d0(Y,O,Z){for(var G=0;G<Z.length;G++)b0(Z[G],Z[++G],Z[++G]);L.__c&&L.__c(O,Y),Y.some(function(K){try{Y=K.__h,K.__h=[],Y.some(function(Q){Q.call(K)})}catch(Q){L.__e(Q,K.__v)}})}function c0(Y){return typeof Y!="object"||Y==null||Y.__b>0?Y:Q0(Y)?Y.map(c0):Y.constructor!==void 0?null:x({},Y)}function $1(Y,O,Z,G,K,Q,X,q,B){var J,H,$,W,z,V,F,U=Z.props||O0,D=O.props,j=O.type;if(j=="svg"?K="http://www.w3.org/2000/svg":j=="math"?K="http://www.w3.org/1998/Math/MathML":K||(K="http://www.w3.org/1999/xhtml"),Q!=null){for(J=0;J<Q.length;J++)if((z=Q[J])&&"setAttribute"in z==!!j&&(j?z.localName==j:z.nodeType==3)){Y=z,Q[J]=null;break}}if(Y==null){if(j==null)return document.createTextNode(D);Y=document.createElementNS(K,j,D.is&&D),q&&(L.__m&&L.__m(O,Q),q=!1),Q=null}if(j==null)U===D||q&&Y.data==D||(Y.data=D);else{if(Q=j=="textarea"&&D.defaultValue!=null?null:Q&&G0.call(Y.childNodes),!q&&Q!=null)for(U={},J=0;J<Y.attributes.length;J++)U[(z=Y.attributes[J]).name]=z.value;for(J in U)z=U[J],J=="dangerouslySetInnerHTML"?$=z:J=="children"||(J in D)||J=="value"&&("defaultValue"in D)||J=="checked"&&("defaultChecked"in D)||e(Y,J,null,z,K);for(J in D)z=D[J],J=="children"?W=z:J=="dangerouslySetInnerHTML"?H=z:J=="value"?V=z:J=="checked"?F=z:q&&typeof z!="function"||U[J]===z||e(Y,J,z,U[J],K);if(H)q||$&&(H.__html==$.__html||H.__html==Y.innerHTML)||(Y.innerHTML=H.__html),O.__k=[];else if($&&(Y.innerHTML=""),f0(O.type=="template"?Y.content:Y,Q0(W)?W:[W],O,Z,G,j=="foreignObject"?"http://www.w3.org/1999/xhtml":K,Q,X,Q?Q[0]:Z.__k&&g(Z,0),q,B),Q!=null)for(J=Q.length;J--;)j0(Q[J]);q&&j!="textarea"||(J="value",j=="progress"&&V==null?Y.removeAttribute("value"):V!=null&&(V!==Y[J]||j=="progress"&&!V||j=="option"&&V!=U[J])&&e(Y,J,V,U[J],K),J="checked",F!=null&&F!=Y[J]&&e(Y,J,F,U[J],K))}return Y}function b0(Y,O,Z){try{if(typeof Y=="function"){var G=typeof Y.__u=="function";G&&Y.__u(),G&&O==null||(Y.__u=Y(O))}else Y.current=O}catch(K){L.__e(K,Z)}}function p0(Y,O,Z){var G,K;if(L.unmount&&L.unmount(Y),(G=Y.ref)&&(G.current&&G.current!=Y.__e||b0(G,null,O)),(G=Y.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(Q){L.__e(Q,O)}G.base=G.__P=G.__n=null}if(G=Y.__k)for(K=0;K<G.length;K++)G[K]&&p0(G[K],O,Z||typeof Y.type!="function");Z||j0(Y.__e),Y.__c=Y.__=Y.__e=void 0}function j1(Y,O,Z){return this.constructor(Y,Z)}function K0(Y,O,Z){var G,K,Q,X;O==document&&(O=document.documentElement),L.__&&L.__(Y,O),K=(G=typeof Z=="function")?null:Z&&Z.__k||O.__k,Q=[],X=[],L0(O,Y=(!G&&Z||O).__k=W0(X0,null,[Y]),K||O0,O0,O.namespaceURI,!G&&Z?[Z]:K?null:O.firstChild?G0.call(O.childNodes):null,Q,!G&&Z?Z:K?K.__e:O.firstChild,G,X),d0(Q,Y,X),Y.props.children=null}G0=Y0.slice,L={__e:function(Y,O,Z,G){for(var K,Q,X;O=O.__;)if((K=O.__c)&&!K.__)try{if((Q=K.constructor)&&Q.getDerivedStateFromError!=null&&(K.setState(Q.getDerivedStateFromError(Y)),X=K.__d),K.componentDidCatch!=null&&(K.componentDidCatch(Y,G||{}),X=K.__d),X)return K.__E=K}catch(q){Y=q}throw Y}},I0=0,q1=function(Y){return Y!=null&&Y.constructor===void 0},p.prototype.setState=function(Y,O){var Z;Z=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=x({},this.state),typeof Y=="function"&&(Y=Y(x({},Z),this.props)),Y&&x(Z,Y),Y!=null&&this.__v&&(O&&this._sb.push(O),k0(this))},p.prototype.forceUpdate=function(Y){this.__v&&(this.__e=!0,Y&&this.__h.push(Y),k0(this))},p.prototype.render=X0,m=[],x0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,S0=function(Y,O){return Y.__v.__b-O.__v.__b},Z0.__r=0,H0=Math.random().toString(8),t="__d"+H0,i="__a"+H0,v0=/(PointerCapture)$|Capture$/i,$0=0,N0=A0(!1),V0=A0(!0),B1=0;var r,P,R0,a0,s=0,t0=[],_=L,o0=_.__b,i0=_.__r,r0=_.diffed,s0=_.__c,l0=_.unmount,u0=_.__;function U0(Y,O){_.__h&&_.__h(P,Y,s||O),s=0;var Z=P.__H||(P.__H={__:[],__h:[]});return Y>=Z.__.length&&Z.__.push({}),Z.__[Y]}function T(Y){return s=1,L1(Y1,Y)}function L1(Y,O,Z){var G=U0(r++,2);if(G.t=Y,!G.__c&&(G.__=[Z?Z(O):Y1(void 0,O),function(q){var B=G.__N?G.__N[0]:G.__[0],J=G.t(B,q);B!==J&&(G.__N=[J,G.__[1]],G.__c.setState({}))}],G.__c=P,!P.__f)){var K=function(q,B,J){if(!G.__c.__H)return!0;var H=!1,$=G.__c.props!==q;if(G.__c.__H.__.some(function(z){if(z.__N){H=!0;var V=z.__[0];z.__=z.__N,z.__N=void 0,V!==z.__[0]&&($=!0)}}),Q){var W=Q.call(this,q,B,J);return H?W||$:W}return!H||$};P.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:X}=P;P.componentWillUpdate=function(q,B,J){if(this.__e){var H=Q;Q=void 0,K(q,B,J),Q=H}X&&X.call(this,q,B,J)},P.shouldComponentUpdate=K}return G.__N||G.__}function l(Y,O){var Z=U0(r++,3);!_.__s&&O1(Z.__H,O)&&(Z.__=Y,Z.u=O,P.__H.__h.push(Z))}function D0(Y){return s=5,n0(function(){return{current:Y}},[])}function n0(Y,O){var Z=U0(r++,7);return O1(Z.__H,O)&&(Z.__=Y(),Z.__H=O,Z.__h=Y),Z.__}function P0(Y,O){return s=8,n0(function(){return Y},O)}function b1(){for(var Y;Y=t0.shift();){var O=Y.__H;if(Y.__P&&O)try{O.__h.some(J0),O.__h.some(T0),O.__h=[]}catch(Z){O.__h=[],_.__e(Z,Y.__v)}}}_.__b=function(Y){P=null,o0&&o0(Y)},_.__=function(Y,O){Y&&O.__k&&O.__k.__m&&(Y.__m=O.__k.__m),u0&&u0(Y,O)},_.__r=function(Y){i0&&i0(Y),r=0;var O=(P=Y.__c).__H;O&&(R0===P?(O.__h=[],P.__h=[],O.__.some(function(Z){Z.__N&&(Z.__=Z.__N),Z.u=Z.__N=void 0})):(O.__h.some(J0),O.__h.some(T0),O.__h=[],r=0)),R0=P},_.diffed=function(Y){r0&&r0(Y);var O=Y.__c;O&&O.__H&&(O.__H.__h.length&&(t0.push(O)!==1&&a0===_.requestAnimationFrame||((a0=_.requestAnimationFrame)||R1)(b1)),O.__H.__.some(function(Z){Z.u&&(Z.__H=Z.u,Z.u=void 0)})),R0=P=null},_.__c=function(Y,O){O.some(function(Z){try{Z.__h.some(J0),Z.__h=Z.__h.filter(function(G){return!G.__||T0(G)})}catch(G){O.some(function(K){K.__h&&(K.__h=[])}),O=[],_.__e(G,Z.__v)}}),s0&&s0(Y,O)},_.unmount=function(Y){l0&&l0(Y);var O,Z=Y.__c;Z&&Z.__H&&(Z.__H.__.some(function(G){try{J0(G)}catch(K){O=K}}),Z.__H=void 0,O&&_.__e(O,Z.__v))};var e0=typeof requestAnimationFrame=="function";function R1(Y){var O,Z=function(){clearTimeout(G),e0&&cancelAnimationFrame(O),setTimeout(Y)},G=setTimeout(Z,35);e0&&(O=requestAnimationFrame(Z))}function J0(Y){var O=P,Z=Y.__c;typeof Z=="function"&&(Y.__c=void 0,Z()),P=O}function T0(Y){var O=P;Y.__c=Y.__(),P=O}function O1(Y,O){return!Y||Y.length!==O.length||O.some(function(Z,G){return Z!==Y[G]})}function Y1(Y,O){return typeof O=="function"?O(Y):O}var G1=function(Y,O,Z,G){var K;O[0]=0;for(var Q=1;Q<O.length;Q++){var X=O[Q++],q=O[Q]?(O[0]|=X?1:2,Z[O[Q++]]):O[++Q];X===3?G[0]=q:X===4?G[1]=Object.assign(G[1]||{},q):X===5?(G[1]=G[1]||{})[O[++Q]]=q:X===6?G[1][O[++Q]]+=q+"":X?(K=Y.apply(q,G1(Y,q,Z,["",null])),G.push(K),q[0]?O[0]|=2:(O[Q-2]=0,O[Q]=K)):G.push(q)}return G},Z1=new Map;function _0(Y){var O=Z1.get(this);return O||(O=new Map,Z1.set(this,O)),(O=G1(this,O.get(Y)||(O.set(Y,O=function(Z){for(var G,K,Q=1,X="",q="",B=[0],J=function(W){Q===1&&(W||(X=X.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?B.push(0,W,X):Q===3&&(W||X)?(B.push(3,W,X),Q=2):Q===2&&X==="..."&&W?B.push(4,W,0):Q===2&&X&&!W?B.push(5,0,!0,X):Q>=5&&((X||!W&&Q===5)&&(B.push(Q,0,X,K),Q=6),W&&(B.push(Q,W,0,K),Q=6)),X=""},H=0;H<Z.length;H++){H&&(Q===1&&J(),J(H));for(var $=0;$<Z[H].length;$++)G=Z[H][$],Q===1?G==="<"?(J(),B=[B],Q=3):X+=G:Q===4?X==="--"&&G===">"?(Q=1,X=""):X=G+X[0]:q?G===q?q="":X+=G:G==='"'||G==="'"?q=G:G===">"?(J(),Q=1):Q&&(G==="="?(Q=5,K=X,X=""):G==="/"&&(Q<5||Z[H][$+1]===">")?(J(),Q===3&&(B=B[0]),Q=B,(B=B[0]).push(2,0,Q),Q=0):G===" "||G==="\t"||G===`
`||G==="\r"?(J(),Q=2):X+=G),Q===3&&X==="!--"&&(Q=4,B=B[0])}return J(),B}(Y)),O),arguments,[])).length>1?O:O[0]}var b=_0.bind(W0);async function k(Y,O){let Z=await fetch(`/api${Y}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...O?.headers??{}},...O});if(!Z.ok){let G=await Z.json().catch(()=>({error:Z.statusText}));throw Error(G.error||`HTTP ${Z.status}`)}return Z.json()}function T1(){let[Y,O]=T([]),[Z,G]=T(null),[K,Q]=T("list"),[X,q]=T(null),[B,J]=T(!0),H=P0(async()=>{try{let W=await k("/agents");O(W.agents||[])}catch(W){console.error("Failed to load agents:",W)}},[]);l(()=>{(async()=>{try{let W=await k("/auth/me");q(W.user)}catch{}await H(),J(!1)})()},[]);let $=(W)=>({style:{...W?Object.fromEntries(W.split(";").filter(Boolean).map((z)=>{let[V,F]=z.trim().split(":");return[V.replace(/-([a-z])/g,(U,D)=>D.toUpperCase()),F.trim()]})):{}}});if(B)return b`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return b`
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

        <div style=${{padding:"0.75rem"}}>
          <button
            onClick=${()=>{Q("add"),G(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            + Add Agent
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Y.map((W)=>b`
            <button
              key=${W.id}
              onClick=${()=>{G(W),Q("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:Z?.id===W.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${W.icon_url?b`<img src=${W.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:b`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${W.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:W.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${W.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
            </button>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${X?b`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${X.name||X.email||X.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:b`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${K==="add"&&b`<${D1} onAdded=${(W)=>{H(),G(W),Q("chat")}} />`}
        ${K==="chat"&&Z&&b`<${P1} agent=${Z} onRefresh=${H} />`}
        ${K==="list"&&b`<${U1} />`}
      </main>
    </div>
  `}function U1(){return b`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}function D1({onAdded:Y}){let[O,Z]=T(""),[G,K]=T(""),[Q,X]=T(""),[q,B]=T(""),[J,H]=T(!1),[$,W]=T(null);async function z(){B(""),W(null),H(!0);try{let V=await k("/agents",{method:"POST",body:JSON.stringify({card_url:O,oidc_client_id:G,oidc_client_secret:Q})});Y(V.agent)}catch(V){B(V.message)}finally{H(!1)}}return b`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${O}
          onInput=${(V)=>Z(V.target.value)}
          placeholder="https://agent.example.com"
          style=${q0}
        />
        <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginTop:"0.4rem"}}>
          The URL where the agent publishes its Agent Card. Orchestral will fetch /.well-known/agent-card.json
        </p>
      </div>

      <details style=${{marginBottom:"1.5rem"}}>
        <summary style=${{cursor:"pointer",fontSize:"0.85rem",color:"var(--text-dim)"}}>
          OIDC client ID (optional — only needed for authorization code flow)
        </summary>
        <div style=${{marginTop:"0.75rem"}}>
          <p style=${{fontSize:"0.75rem",color:"var(--text-dimmer)",marginBottom:"0.5rem"}}>
            If the agent requires OIDC, you can connect via device code flow (no configuration needed),
            or provide a client ID for the authorization code flow (requires a registered redirect URI).
          </p>
          <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
            Client ID (optional)
          </label>
          <input type="text" value=${G} onInput=${(V)=>K(V.target.value)} style=${q0} />
        </div>
      </details>

      ${q&&b`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${q}
      </div>`}

      <button
        onClick=${z}
        disabled=${!O||J}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!O||J?0.5:1}}
      >
        ${J?"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function P1({agent:Y,onRefresh:O}){let[Z,G]=T([]),[K,Q]=T(""),[X,q]=T(!1),[B,J]=T(null),[H,$]=T([]),[W,z]=T(""),[V,F]=T(Y),U=D0(null),D=D0(null);l(()=>{k(`/agents/${Y.id}`).then((N)=>F(N)).catch(()=>{})},[Y.id]);let j=P0(async(N)=>{J(N);let R=await k(`/conversations/${N}/messages`);G(R.messages||[])},[]);l(()=>{(async()=>{try{let R=(await k(`/agents/${Y.id}/conversations`)).conversations||[];if($(R),R.length>0)await j(R[0].id);else{let M=await k(`/agents/${Y.id}/conversations`,{method:"POST"});$([M.conversation]),J(M.conversation.id),G([])}}catch(N){z(N.message)}})()},[Y.id]);async function C(){z("");try{let N=await k(`/agents/${Y.id}/conversations`,{method:"POST"});$((R)=>[N.conversation,...R]),J(N.conversation.id),G([]),Q("")}catch(N){z(N.message)}}async function f(N){if(N===B)return;z("");try{await j(N)}catch(R){z(R.message)}}l(()=>{U.current?.scrollIntoView({behavior:"smooth"})},[Z]);async function A(N){if(N?.preventDefault(),!K.trim()||!B||X)return;let R=K.trim();Q(""),q(!0),z(""),G((M)=>[...M,{role:"user",text:R,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((M)=>[...M,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(V?.agent_card?.capabilities?.streaming??!0)await h(R);else await u(R)}catch(M){if(z(M.message),M.message.includes("Authentication"))O();G((B0)=>B0.filter((a)=>!a.streaming))}finally{q(!1)}}async function h(N){let R=await fetch(`/api/conversations/${B}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:N}),credentials:"same-origin"});if(!R.ok){let o=await R.json().catch(()=>({error:R.statusText}));throw Error(o.error||`HTTP ${R.status}`)}let M=R.body.getReader(),B0=new TextDecoder,a="",w0="";while(!0){let{done:o,value:K1}=await M.read();if(o)break;a+=B0.decode(K1,{stream:!0});let M0=a.split(`

`);a=M0.pop()||"";for(let J1 of M0)for(let E0 of J1.split(`
`))if(E0.startsWith("data: "))try{let E=JSON.parse(E0.slice(6));if(E.error)throw Error(E.error);let c="";if(E.task?.status?.message?.parts)c=E.task.status.message.parts.map((I)=>I.text||"").join("");else if(E.message?.parts)c=E.message.parts.map((I)=>I.text||"").join("");else if(E.artifactUpdate?.artifact?.parts)c=E.artifactUpdate.artifact.parts.map((I)=>I.text||"").join("");else if(E.statusUpdate?.status?.message?.parts)c=E.statusUpdate.status.message.parts.map((I)=>I.text||"").join("");if(c)w0+=c,G((I)=>I.map((z0)=>z0.streaming?{...z0,text:w0}:z0))}catch(E){if(E.message)throw E}}if(B){let o=await k(`/conversations/${B}/messages`);G(o.messages||[])}}async function u(N){let R=await k(`/conversations/${B}/send`,{method:"POST",body:JSON.stringify({text:N})}),M=await k(`/conversations/${B}/messages`);G(M.messages||[])}let[S,d]=T(!1),[w,v]=T(""),[F0,Q1]=T("");async function W1(){d(!0),z("");try{await k(`/agents/${Y.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:w,client_secret:F0})}),window.location.href=`/api/agents/${Y.id}/connect`}catch(N){z(N.message)}finally{d(!1)}}let y=V?.auth_state!=="connected",X1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return b`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${V?.icon_url?b`<img src=${V.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:b`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${V?.name||Y.name}</h2>
          ${V?.description&&b`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${V.description}</p>`}
        </div>
        ${H.length>1&&b`
          <select
            value=${B}
            onChange=${(N)=>f(N.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${H.map((N,R)=>b`
              <option key=${N.id} value=${N.id}>
                ${new Date(N.created_at*1000).toLocaleString()} ${R===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${C}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:y?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:y?"var(--warning)":"var(--success)",border:`1px solid ${y?"var(--warning)":"var(--success)"}`}}>
          ${y?"Needs Auth":"Connected"}
        </div>
      </header>

      ${y&&b`
        <div style=${{padding:"1.5rem",borderBottom:"1px solid var(--border)",maxWidth:"600px"}}>
          <p style=${{color:"var(--text)",marginBottom:"0.5rem",fontSize:"0.9rem"}}>
            This agent requires OIDC via Pocket ID.
          </p>
          <p style=${{color:"var(--text-dim)",marginBottom:"1rem",fontSize:"0.8rem"}}>
            Enter think's Pocket ID client ID. If the client is set to <strong>public</strong> in
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)"}}>Pocket ID admin</a>,
            no secret is needed — PKCE handles it. Otherwise include the secret too.
          </p>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client ID
            </label>
            <input
              type="text"
              value=${w}
              onInput=${(N)=>v(N.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...q0,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${F0}
              onInput=${(N)=>Q1(N.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...q0,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${X1}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${W1} disabled=${!w||S} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!w||S?0.5:1}}>
            ${S?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${Z.length===0&&!y&&b`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${Z.map((N)=>b`
            <div key=${N.id} style=${{maxWidth:"85%",alignSelf:N.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:N.role==="user"?"var(--accent)":"var(--bg-card)",color:N.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${N.text||(N.streaming?"…":"")}
            </div>
          `)}
          <div ref=${U} />
        </div>
      </div>

      ${W&&b`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${W}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${A} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            type="text"
            value=${K}
            onInput=${(N)=>Q(N.target.value)}
            placeholder=${y?"Connect to start messaging…":"Send a message…"}
            disabled=${y||X}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:y||X?0.5:1}}
          />
          <button type="submit" disabled=${y||X||!K.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:y||X||!K.trim()?0.5:1}}>
            ${X?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var q0={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};K0(b`<${T1} />`,document.getElementById("root"));
