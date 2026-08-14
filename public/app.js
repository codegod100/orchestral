var Z0,L,k0,Q1,S,C0,I0,y0,N0,e,i,A0,V0,z0,H0,W1,n={},O0=[],X1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G0=Array.isArray;function A(Y,O){for(var Z in O)Y[Z]=O[Z];return Y}function $0(Y){Y&&Y.parentNode&&Y.parentNode.removeChild(Y)}function Q0(Y,O,Z){var W,K,G,X={};for(G in O)G=="key"?W=O[G]:G=="ref"?K=O[G]:X[G]=O[G];if(arguments.length>2&&(X.children=arguments.length>3?Z0.call(arguments,2):Z),typeof Y=="function"&&Y.defaultProps!=null)for(G in Y.defaultProps)X[G]===void 0&&(X[G]=Y.defaultProps[G]);return t(Y,X,W,K,null)}function t(Y,O,Z,W,K){var G={type:Y,props:O,key:Z,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:K==null?++k0:K,__i:-1,__u:0};return K==null&&L.vnode!=null&&L.vnode(G),G}function W0(Y){return Y.children}function g(Y,O){this.props=Y,this.context=O}function f(Y,O){if(O==null)return Y.__?f(Y.__,Y.__i+1):null;for(var Z;O<Y.__k.length;O++)if((Z=Y.__k[O])!=null&&Z.__e!=null)return Z.__e;return typeof Y.type=="function"?f(Y):null}function K1(Y){if(Y.__P&&Y.__d){var O=Y.__v,Z=O.__e,W=[],K=[],G=A({},O);G.__v=O.__v+1,L.vnode&&L.vnode(G),j0(Y.__P,G,O,Y.__n,Y.__P.namespaceURI,32&O.__u?[Z]:null,W,Z==null?f(O):Z,!!(32&O.__u),K),G.__v=O.__v,G.__.__k[G.__i]=G,f0(W,G,K),O.__e=O.__=null,G.__e!=Z&&v0(G)}}function v0(Y){if((Y=Y.__)!=null&&Y.__c!=null)return Y.__e=Y.__c.base=null,Y.__k.some(function(O){if(O!=null&&O.__e!=null)return Y.__e=Y.__c.base=O.__e}),v0(Y)}function E0(Y){(!Y.__d&&(Y.__d=!0)&&S.push(Y)&&!Y0.__r++||C0!=L.debounceRendering)&&((C0=L.debounceRendering)||I0)(Y0)}function Y0(){try{for(var Y,O=1;S.length;)S.length>O&&S.sort(y0),Y=S.shift(),O=S.length,K1(Y)}finally{S.length=Y0.__r=0}}function x0(Y,O,Z,W,K,G,X,q,B,J,N){var H,Q,z,V,F,P,R=W&&W.__k||O0,$=O.length;for(B=J1(Z,O,R,B,$),H=0;H<$;H++)(z=Z.__k[H])!=null&&(Q=z.__i!=-1&&R[z.__i]||n,z.__i=H,P=j0(Y,z,Q,K,G,X,q,B,J,N),V=z.__e,z.ref&&Q.ref!=z.ref&&(Q.ref&&L0(Q.ref,null,z),N.push(z.ref,z.__c||V,z)),F==null&&V!=null&&(F=V),4&z.__u?(B=S0(z,B,Y),Q.__e&&(Q.__e=null)):typeof z.type=="function"&&P!==void 0?B=P:V&&(B=V.nextSibling),z.__u&=-7);return Z.__e=F,B}function J1(Y,O,Z,W,K){var G,X,q,B,J,N=Z.length,H=N,Q=0;for(Y.__k=Array(K),G=0;G<K;G++)(X=O[G])!=null&&typeof X!="boolean"&&typeof X!="function"?(typeof X=="string"||typeof X=="number"||typeof X=="bigint"||X.constructor==String?X=Y.__k[G]=t(null,X,null,null,null):G0(X)?X=Y.__k[G]=t(W0,{children:X},null,null,null):X.constructor===void 0&&X.__b>0?X=Y.__k[G]=t(X.type,X.props,X.key,X.ref?X.ref:null,X.__v):Y.__k[G]=X,B=G+Q,X.__=Y,X.__b=Y.__b+1,q=null,(J=X.__i=q1(X,Z,B,H))!=-1&&(H--,(q=Z[J])&&(q.__u|=2)),q==null||q.__v==null?(J==-1&&(K>N?Q--:K<N&&Q++),typeof X.type!="function"&&(X.__u|=4)):J!=B&&(J==B-1?Q--:J==B+1?Q++:(J>B?Q--:Q++,X.__u|=4))):Y.__k[G]=null;if(H)for(G=0;G<N;G++)(q=Z[G])!=null&&(2&q.__u)==0&&(q.__e==W&&(W=f(q)),d0(q,q));return W}function S0(Y,O,Z){var W,K;if(typeof Y.type=="function"){for(W=Y.__k,K=0;W&&K<W.length;K++)W[K]&&(W[K].__=Y,O=S0(W[K],O,Z));return O}Y.__e!=O&&(O&&Y.type&&!O.parentNode&&(O=f(Y)),O=Z.insertBefore(Y.__e,O||null));do O=O&&O.nextSibling;while(O!=null&&O.nodeType==8);return O}function q1(Y,O,Z,W){var K,G,X,q=Y.key,B=Y.type,J=O[Z],N=J!=null&&(2&J.__u)==0;if(J===null&&q==null||N&&q==J.key&&B==J.type)return Z;if(W>(N?1:0)){for(K=Z-1,G=Z+1;K>=0||G<O.length;)if((J=O[X=K>=0?K--:G++])!=null&&(2&J.__u)==0&&q==J.key&&B==J.type)return X}return-1}function w0(Y,O,Z){O[0]=="-"?Y.setProperty(O,Z==null?"":Z):Y[O]=Z==null?"":typeof Z!="number"||X1.test(O)?Z:Z+"px"}function u(Y,O,Z,W,K){var G,X;O:if(O=="style")if(typeof Z=="string")Y.style.cssText=Z;else{if(typeof W=="string"&&(Y.style.cssText=W=""),W)for(O in W)Z&&O in Z||w0(Y.style,O,"");if(Z)for(O in Z)W&&Z[O]==W[O]||w0(Y.style,O,Z[O])}else if(O[0]=="o"&&O[1]=="n")G=O!=(O=O.replace(A0,"$1")),X=O.toLowerCase(),O=X in Y||O=="onFocusOut"||O=="onFocusIn"?X.slice(2):O.slice(2),Y.l||(Y.l={}),Y.l[O+G]=Z,Z?W?Z[i]=W[i]:(Z[i]=V0,Y.addEventListener(O,G?H0:z0,G)):Y.removeEventListener(O,G?H0:z0,G);else{if(K=="http://www.w3.org/2000/svg")O=O.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(O!="width"&&O!="height"&&O!="href"&&O!="list"&&O!="form"&&O!="tabIndex"&&O!="download"&&O!="rowSpan"&&O!="colSpan"&&O!="role"&&O!="popover"&&O in Y)try{Y[O]=Z==null?"":Z;break O}catch(q){}typeof Z=="function"||(Z==null||Z===!1&&O[4]!="-"?Y.removeAttribute(O):Y.setAttribute(O,O=="popover"&&Z==1?"":Z))}}function M0(Y){return function(O){if(this.l){var Z=this.l[O.type+Y];if(O[e]==null)O[e]=V0++;else if(O[e]<Z[i])return;return Z(L.event?L.event(O):O)}}}function j0(Y,O,Z,W,K,G,X,q,B,J){var N,H,Q,z,V,F,P,R,$,E,v,k,m,c,h,p,T=O.type;if(O.constructor!==void 0)return null;128&Z.__u&&(B=!!(32&Z.__u),G=[q=O.__e=Z.__e]),(N=L.__b)&&N(O);O:if(typeof T=="function"){H=X.length;try{if($=O.props,E=T.prototype&&T.prototype.render,v=(N=T.contextType)&&W[N.__c],k=N?v?v.props.value:N.__:W,Z.__c?R=(Q=O.__c=Z.__c).__=Q.__E:(E?O.__c=Q=new T($,k):(O.__c=Q=new g($,k),Q.constructor=T,Q.render=N1),v&&v.sub(Q),Q.state||(Q.state={}),Q.__n=W,z=Q.__d=!0,Q.__h=[],Q._sb=[]),E&&Q.__s==null&&(Q.__s=Q.state),E&&T.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=A({},Q.__s)),A(Q.__s,T.getDerivedStateFromProps($,Q.__s))),V=Q.props,F=Q.state,Q.__v=O,z)E&&T.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),E&&Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(E&&T.getDerivedStateFromProps==null&&$!==V&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps($,k),O.__v==Z.__v||!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate($,Q.__s,k)===!1){O.__v!=Z.__v&&(Q.props=$,Q.state=Q.__s,Q.__d=!1),O.__e=Z.__e,O.__k=Z.__k,O.__k.some(function(x){x&&(x.__=O)}),O0.push.apply(Q.__h,Q._sb),Q._sb=[],Q.__h.length&&X.push(Q),q=f(Z);break O}Q.componentWillUpdate!=null&&Q.componentWillUpdate($,Q.__s,k),E&&Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(V,F,P)})}if(Q.context=k,Q.props=$,Q.__P=Y,Q.__e=!1,m=L.__r,c=0,E)Q.state=Q.__s,Q.__d=!1,m&&m(O),N=Q.render(Q.props,Q.state,Q.context),O0.push.apply(Q.__h,Q._sb),Q._sb=[];else do Q.__d=!1,m&&m(O),N=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s;while(Q.__d&&++c<25);Q.state=Q.__s,Q.getChildContext!=null&&(W=A(A({},W),Q.getChildContext())),E&&!z&&Q.getSnapshotBeforeUpdate!=null&&(P=Q.getSnapshotBeforeUpdate(V,F)),h=N!=null&&N.type===W0&&N.key==null?h0(N.props.children):N,q=x0(Y,G0(h)?h:[h],O,Z,W,K,G,X,q,B,J),Q.base=O.__e,O.__u&=-161,Q.__h.length&&X.push(Q),R&&(Q.__E=Q.__=null)}catch(x){if(X.length=H,O.__v=null,B||G!=null){if(x.then){for(O.__u|=B?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;G!=null&&(G[G.indexOf(q)]=null),O.__e=q}else if(G!=null)for(p=G.length;p--;)$0(G[p])}else O.__e=Z.__e;O.__k==null&&(O.__k=Z.__k||[]),x.then||m0(O),L.__e(x,O,Z)}}else G==null&&O.__v==Z.__v?(O.__k=Z.__k,O.__e=Z.__e):q=O.__e=B1(Z.__e,O,Z,W,K,G,X,B,J);return(N=L.diffed)&&N(O),128&O.__u?void 0:q}function m0(Y){Y&&(Y.__c&&(Y.__c.__e=!0),Y.__k&&Y.__k.some(m0))}function f0(Y,O,Z){for(var W=0;W<Z.length;W++)L0(Z[W],Z[++W],Z[++W]);L.__c&&L.__c(O,Y),Y.some(function(K){try{Y=K.__h,K.__h=[],Y.some(function(G){G.call(K)})}catch(G){L.__e(G,K.__v)}})}function h0(Y){return typeof Y!="object"||Y==null||Y.__b>0?Y:G0(Y)?Y.map(h0):Y.constructor!==void 0?null:A({},Y)}function B1(Y,O,Z,W,K,G,X,q,B){var J,N,H,Q,z,V,F,P=Z.props||n,R=O.props,$=O.type;if($=="svg"?K="http://www.w3.org/2000/svg":$=="math"?K="http://www.w3.org/1998/Math/MathML":K||(K="http://www.w3.org/1999/xhtml"),G!=null){for(J=0;J<G.length;J++)if((z=G[J])&&"setAttribute"in z==!!$&&($?z.localName==$:z.nodeType==3)){Y=z,G[J]=null;break}}if(Y==null){if($==null)return document.createTextNode(R);Y=document.createElementNS(K,$,R.is&&R),q&&(L.__m&&L.__m(O,G),q=!1),G=null}if($==null)P===R||q&&Y.data==R||(Y.data=R);else{if(G=$=="textarea"&&R.defaultValue!=null?null:G&&Z0.call(Y.childNodes),!q&&G!=null)for(P={},J=0;J<Y.attributes.length;J++)P[(z=Y.attributes[J]).name]=z.value;for(J in P)z=P[J],J=="dangerouslySetInnerHTML"?H=z:J=="children"||(J in R)||J=="value"&&("defaultValue"in R)||J=="checked"&&("defaultChecked"in R)||u(Y,J,null,z,K);for(J in R)z=R[J],J=="children"?Q=z:J=="dangerouslySetInnerHTML"?N=z:J=="value"?V=z:J=="checked"?F=z:q&&typeof z!="function"||P[J]===z||u(Y,J,z,P[J],K);if(N)q||H&&(N.__html==H.__html||N.__html==Y.innerHTML)||(Y.innerHTML=N.__html),O.__k=[];else if(H&&(Y.innerHTML=""),x0(O.type=="template"?Y.content:Y,G0(Q)?Q:[Q],O,Z,W,$=="foreignObject"?"http://www.w3.org/1999/xhtml":K,G,X,G?G[0]:Z.__k&&f(Z,0),q,B),G!=null)for(J=G.length;J--;)$0(G[J]);q&&$!="textarea"||(J="value",$=="progress"&&V==null?Y.removeAttribute("value"):V!=null&&(V!==Y[J]||$=="progress"&&!V||$=="option"&&V!=P[J])&&u(Y,J,V,P[J],K),J="checked",F!=null&&F!=Y[J]&&u(Y,J,F,P[J],K))}return Y}function L0(Y,O,Z){try{if(typeof Y=="function"){var W=typeof Y.__u=="function";W&&Y.__u(),W&&O==null||(Y.__u=Y(O))}else Y.current=O}catch(K){L.__e(K,Z)}}function d0(Y,O,Z){var W,K;if(L.unmount&&L.unmount(Y),(W=Y.ref)&&(W.current&&W.current!=Y.__e||L0(W,null,O)),(W=Y.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(G){L.__e(G,O)}W.base=W.__P=W.__n=null}if(W=Y.__k)for(K=0;K<W.length;K++)W[K]&&d0(W[K],O,Z||typeof Y.type!="function");Z||$0(Y.__e),Y.__c=Y.__=Y.__e=void 0}function N1(Y,O,Z){return this.constructor(Y,Z)}function X0(Y,O,Z){var W,K,G,X;O==document&&(O=document.documentElement),L.__&&L.__(Y,O),K=(W=typeof Z=="function")?null:Z&&Z.__k||O.__k,G=[],X=[],j0(O,Y=(!W&&Z||O).__k=Q0(W0,null,[Y]),K||n,n,O.namespaceURI,!W&&Z?[Z]:K?null:O.firstChild?Z0.call(O.childNodes):null,G,!W&&Z?Z:K?K.__e:O.firstChild,W,X),f0(G,Y,X),Y.props.children=null}Z0=O0.slice,L={__e:function(Y,O,Z,W){for(var K,G,X;O=O.__;)if((K=O.__c)&&!K.__)try{if((G=K.constructor)&&G.getDerivedStateFromError!=null&&(K.setState(G.getDerivedStateFromError(Y)),X=K.__d),K.componentDidCatch!=null&&(K.componentDidCatch(Y,W||{}),X=K.__d),X)return K.__E=K}catch(q){Y=q}throw Y}},k0=0,Q1=function(Y){return Y!=null&&Y.constructor===void 0},g.prototype.setState=function(Y,O){var Z;Z=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=A({},this.state),typeof Y=="function"&&(Y=Y(A({},Z),this.props)),Y&&A(Z,Y),Y!=null&&this.__v&&(O&&this._sb.push(O),E0(this))},g.prototype.forceUpdate=function(Y){this.__v&&(this.__e=!0,Y&&this.__h.push(Y),E0(this))},g.prototype.render=W0,S=[],I0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y0=function(Y,O){return Y.__v.__b-O.__v.__b},Y0.__r=0,N0=Math.random().toString(8),e="__d"+N0,i="__a"+N0,A0=/(PointerCapture)$|Capture$/i,V0=0,z0=M0(!1),H0=M0(!0),W1=0;var r,U,b0,g0,s=0,l0=[],_=L,c0=_.__b,p0=_.__r,a0=_.diffed,o0=_.__c,i0=_.unmount,r0=_.__;function T0(Y,O){_.__h&&_.__h(U,Y,s||O),s=0;var Z=U.__H||(U.__H={__:[],__h:[]});return Y>=Z.__.length&&Z.__.push({}),Z.__[Y]}function D(Y){return s=1,z1(n0,Y)}function z1(Y,O,Z){var W=T0(r++,2);if(W.t=Y,!W.__c&&(W.__=[Z?Z(O):n0(void 0,O),function(q){var B=W.__N?W.__N[0]:W.__[0],J=W.t(B,q);B!==J&&(W.__N=[J,W.__[1]],W.__c.setState({}))}],W.__c=U,!U.__f)){var K=function(q,B,J){if(!W.__c.__H)return!0;var N=!1,H=W.__c.props!==q;if(W.__c.__H.__.some(function(z){if(z.__N){N=!0;var V=z.__[0];z.__=z.__N,z.__N=void 0,V!==z.__[0]&&(H=!0)}}),G){var Q=G.call(this,q,B,J);return N?Q||H:Q}return!N||H};U.__f=!0;var{shouldComponentUpdate:G,componentWillUpdate:X}=U;U.componentWillUpdate=function(q,B,J){if(this.__e){var N=G;G=void 0,K(q,B,J),G=N}X&&X.call(this,q,B,J)},U.shouldComponentUpdate=K}return W.__N||W.__}function l(Y,O){var Z=T0(r++,3);!_.__s&&t0(Z.__H,O)&&(Z.__=Y,Z.u=O,U.__H.__h.push(Z))}function U0(Y){return s=5,u0(function(){return{current:Y}},[])}function u0(Y,O){var Z=T0(r++,7);return t0(Z.__H,O)&&(Z.__=Y(),Z.__H=O,Z.__h=Y),Z.__}function e0(Y,O){return s=8,u0(function(){return Y},O)}function H1(){for(var Y;Y=l0.shift();){var O=Y.__H;if(Y.__P&&O)try{O.__h.some(K0),O.__h.some(R0),O.__h=[]}catch(Z){O.__h=[],_.__e(Z,Y.__v)}}}_.__b=function(Y){U=null,c0&&c0(Y)},_.__=function(Y,O){Y&&O.__k&&O.__k.__m&&(Y.__m=O.__k.__m),r0&&r0(Y,O)},_.__r=function(Y){p0&&p0(Y),r=0;var O=(U=Y.__c).__H;O&&(b0===U?(O.__h=[],U.__h=[],O.__.some(function(Z){Z.__N&&(Z.__=Z.__N),Z.u=Z.__N=void 0})):(O.__h.some(K0),O.__h.some(R0),O.__h=[],r=0)),b0=U},_.diffed=function(Y){a0&&a0(Y);var O=Y.__c;O&&O.__H&&(O.__H.__h.length&&(l0.push(O)!==1&&g0===_.requestAnimationFrame||((g0=_.requestAnimationFrame)||V1)(H1)),O.__H.__.some(function(Z){Z.u&&(Z.__H=Z.u,Z.u=void 0)})),b0=U=null},_.__c=function(Y,O){O.some(function(Z){try{Z.__h.some(K0),Z.__h=Z.__h.filter(function(W){return!W.__||R0(W)})}catch(W){O.some(function(K){K.__h&&(K.__h=[])}),O=[],_.__e(W,Z.__v)}}),o0&&o0(Y,O)},_.unmount=function(Y){i0&&i0(Y);var O,Z=Y.__c;Z&&Z.__H&&(Z.__H.__.some(function(W){try{K0(W)}catch(K){O=K}}),Z.__H=void 0,O&&_.__e(O,Z.__v))};var s0=typeof requestAnimationFrame=="function";function V1(Y){var O,Z=function(){clearTimeout(W),s0&&cancelAnimationFrame(O),setTimeout(Y)},W=setTimeout(Z,35);s0&&(O=requestAnimationFrame(Z))}function K0(Y){var O=U,Z=Y.__c;typeof Z=="function"&&(Y.__c=void 0,Z()),U=O}function R0(Y){var O=U;Y.__c=Y.__(),U=O}function t0(Y,O){return!Y||Y.length!==O.length||O.some(function(Z,W){return Z!==Y[W]})}function n0(Y,O){return typeof O=="function"?O(Y):O}var Y1=function(Y,O,Z,W){var K;O[0]=0;for(var G=1;G<O.length;G++){var X=O[G++],q=O[G]?(O[0]|=X?1:2,Z[O[G++]]):O[++G];X===3?W[0]=q:X===4?W[1]=Object.assign(W[1]||{},q):X===5?(W[1]=W[1]||{})[O[++G]]=q:X===6?W[1][O[++G]]+=q+"":X?(K=Y.apply(q,Y1(Y,q,Z,["",null])),W.push(K),q[0]?O[0]|=2:(O[G-2]=0,O[G]=K)):W.push(q)}return W},O1=new Map;function D0(Y){var O=O1.get(this);return O||(O=new Map,O1.set(this,O)),(O=Y1(this,O.get(Y)||(O.set(Y,O=function(Z){for(var W,K,G=1,X="",q="",B=[0],J=function(Q){G===1&&(Q||(X=X.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?B.push(0,Q,X):G===3&&(Q||X)?(B.push(3,Q,X),G=2):G===2&&X==="..."&&Q?B.push(4,Q,0):G===2&&X&&!Q?B.push(5,0,!0,X):G>=5&&((X||!Q&&G===5)&&(B.push(G,0,X,K),G=6),Q&&(B.push(G,Q,0,K),G=6)),X=""},N=0;N<Z.length;N++){N&&(G===1&&J(),J(N));for(var H=0;H<Z[N].length;H++)W=Z[N][H],G===1?W==="<"?(J(),B=[B],G=3):X+=W:G===4?X==="--"&&W===">"?(G=1,X=""):X=W+X[0]:q?W===q?q="":X+=W:W==='"'||W==="'"?q=W:W===">"?(J(),G=1):G&&(W==="="?(G=5,K=X,X=""):W==="/"&&(G<5||Z[N][H+1]===">")?(J(),G===3&&(B=B[0]),G=B,(B=B[0]).push(2,0,G),G=0):W===" "||W==="\t"||W===`
`||W==="\r"?(J(),G=2):X+=W),G===3&&X==="!--"&&(G=4,B=B[0])}return J(),B}(Y)),O),arguments,[])).length>1?O:O[0]}var b=D0.bind(Q0);async function I(Y,O){let Z=await fetch(`/api${Y}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...O?.headers??{}},...O});if(!Z.ok){let W=await Z.json().catch(()=>({error:Z.statusText}));throw Error(W.error||`HTTP ${Z.status}`)}return Z.json()}function $1(){let[Y,O]=D([]),[Z,W]=D(null),[K,G]=D("list"),[X,q]=D(null),[B,J]=D(!0),N=e0(async()=>{try{let Q=await I("/agents");O(Q.agents||[])}catch(Q){console.error("Failed to load agents:",Q)}},[]);l(()=>{(async()=>{try{let Q=await I("/auth/me");q(Q.user)}catch{}await N(),J(!1)})()},[]);let H=(Q)=>({style:{...Q?Object.fromEntries(Q.split(";").filter(Boolean).map((z)=>{let[V,F]=z.trim().split(":");return[V.replace(/-([a-z])/g,(P,R)=>R.toUpperCase()),F.trim()]})):{}}});if(B)return b`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return b`
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
            onClick=${()=>{G("add"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            + Add Agent
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Y.map((Q)=>b`
            <button
              key=${Q.id}
              onClick=${()=>{W(Q),G("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:Z?.id===Q.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${Q.icon_url?b`<img src=${Q.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:b`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${Q.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:Q.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${Q.auth_state==="connected"?"● Connected":"○ Needs auth"}
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
              Dev mode — no auth required
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${K==="add"&&b`<${L1} onAdded=${(Q)=>{N(),W(Q),G("chat")}} />`}
        ${K==="chat"&&Z&&b`<${b1} agent=${Z} onRefresh=${N} />`}
        ${K==="list"&&b`<${j1} />`}
      </main>
    </div>
  `}function j1(){return b`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}function L1({onAdded:Y}){let[O,Z]=D(""),[W,K]=D(""),[G,X]=D(""),[q,B]=D(""),[J,N]=D(!1),[H,Q]=D(null);async function z(){B(""),Q(null),N(!0);try{let V=await I("/agents",{method:"POST",body:JSON.stringify({card_url:O,oidc_client_id:W,oidc_client_secret:G})});Y(V.agent)}catch(V){B(V.message)}finally{N(!1)}}return b`
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
          style=${J0}
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
          <input type="text" value=${W} onInput=${(V)=>K(V.target.value)} style=${J0} />
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
  `}function b1({agent:Y,onRefresh:O}){let[Z,W]=D([]),[K,G]=D(""),[X,q]=D(!1),[B,J]=D(null),[N,H]=D(""),[Q,z]=D(Y),V=U0(null),F=U0(null);l(()=>{I(`/agents/${Y.id}`).then((j)=>z(j)).catch(()=>{})},[Y.id]),l(()=>{I(`/agents/${Y.id}/conversations`).then(async(j)=>{if(j.conversations&&j.conversations.length>0){let C=j.conversations[0];J(C.id);let w=await I(`/conversations/${C.id}/messages`);W(w.messages||[])}else{let C=await I(`/agents/${Y.id}/conversations`,{method:"POST"});J(C.conversation.id)}}).catch((j)=>H(j.message))},[Y.id]),l(()=>{V.current?.scrollIntoView({behavior:"smooth"})},[Z]);async function P(j){if(j?.preventDefault(),!K.trim()||!B||X)return;let C=K.trim();G(""),q(!0),H(""),W((w)=>[...w,{role:"user",text:C,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),W((w)=>[...w,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(Q?.agent_card?.capabilities?.streaming??!0)await R(C);else await $(C)}catch(w){if(H(w.message),w.message.includes("Authentication"))O();W((q0)=>q0.filter((a)=>!a.streaming))}finally{q(!1)}}async function R(j){let C=await fetch(`/api/conversations/${B}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:j}),credentials:"same-origin"});if(!C.ok){let o=await C.json().catch(()=>({error:C.statusText}));throw Error(o.error||`HTTP ${C.status}`)}let w=C.body.getReader(),q0=new TextDecoder,a="",P0="";while(!0){let{done:o,value:Z1}=await w.read();if(o)break;a+=q0.decode(Z1,{stream:!0});let _0=a.split(`

`);a=_0.pop()||"";for(let G1 of _0)for(let F0 of G1.split(`
`))if(F0.startsWith("data: "))try{let M=JSON.parse(F0.slice(6));if(M.error)throw Error(M.error);let d="";if(M.task?.status?.message?.parts)d=M.task.status.message.parts.map((y)=>y.text||"").join("");else if(M.message?.parts)d=M.message.parts.map((y)=>y.text||"").join("");else if(M.artifactUpdate?.artifact?.parts)d=M.artifactUpdate.artifact.parts.map((y)=>y.text||"").join("");else if(M.statusUpdate?.status?.message?.parts)d=M.statusUpdate.status.message.parts.map((y)=>y.text||"").join("");if(d)P0+=d,W((y)=>y.map((B0)=>B0.streaming?{...B0,text:P0}:B0))}catch(M){if(M.message)throw M}}if(B){let o=await I(`/conversations/${B}/messages`);W(o.messages||[])}}async function $(j){let C=await I(`/conversations/${B}/send`,{method:"POST",body:JSON.stringify({text:j})}),w=await I(`/conversations/${B}/messages`);W(w.messages||[])}let[E,v]=D(!1),[k,m]=D(""),[c,h]=D("");async function p(){v(!0),H("");try{await I(`/agents/${Y.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:k,client_secret:c})}),window.location.href=`/api/agents/${Y.id}/connect`}catch(j){H(j.message)}finally{v(!1)}}let T=Q?.auth_state!=="connected",x=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return b`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${Q?.icon_url?b`<img src=${Q.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:b`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${Q?.name||Y.name}</h2>
          ${Q?.description&&b`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${Q.description}</p>`}
        </div>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:T?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:T?"var(--warning)":"var(--success)",border:`1px solid ${T?"var(--warning)":"var(--success)"}`}}>
          ${T?"Needs Auth":"Connected"}
        </div>
      </header>

      ${T&&b`
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
              value=${k}
              onInput=${(j)=>m(j.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...J0,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${c}
              onInput=${(j)=>h(j.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...J0,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${x}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${p} disabled=${!k||E} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!k||E?0.5:1}}>
            ${E?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${Z.length===0&&!T&&b`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${Z.map((j)=>b`
            <div key=${j.id} style=${{maxWidth:"85%",alignSelf:j.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:j.role==="user"?"var(--accent)":"var(--bg-card)",color:j.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${j.text||(j.streaming?"…":"")}
            </div>
          `)}
          <div ref=${V} />
        </div>
      </div>

      ${N&&b`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${N}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${P} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            type="text"
            value=${K}
            onInput=${(j)=>G(j.target.value)}
            placeholder=${T?"Connect to start messaging…":"Send a message…"}
            disabled=${T||X}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:T||X?0.5:1}}
          />
          <button type="submit" disabled=${T||X||!K.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:T||X||!K.trim()?0.5:1}}>
            ${X?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var J0={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};X0(b`<${$1} />`,document.getElementById("root"));
