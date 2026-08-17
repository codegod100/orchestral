var W0,T,j0,z1,g,y0,S0,v0,B0,n,s,b0,V0,L0,J0,H1,Z0={},O0=[],N1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,X0=Array.isArray;function m(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function R0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function G0(Z,Y,O){var W,K,Q,G={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?K=Y[Q]:G[Q]=Y[Q];if(arguments.length>2&&(G.children=arguments.length>3?W0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)G[Q]===void 0&&(G[Q]=Z.defaultProps[Q]);return Y0(Z,G,W,K,null)}function Y0(Z,Y,O,W,K){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:K==null?++j0:K,__i:-1,__u:0};return K==null&&T.vnode!=null&&T.vnode(Q),Q}function K0(Z){return Z.children}function r(Z,Y){this.props=Z,this.context=Y}function d(Z,Y){if(Y==null)return Z.__?d(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?d(Z):null}function $1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],K=[],Q=m({},Y);Q.__v=Y.__v+1,T.vnode&&T.vnode(Q),D0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?d(Y):O,!!(32&Y.__u),K),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,d0(W,Q,K),Y.__e=Y.__=null,Q.__e!=O&&f0(Q)}}function f0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),f0(Z)}function x0(Z){(!Z.__d&&(Z.__d=!0)&&g.push(Z)&&!Q0.__r++||y0!=T.debounceRendering)&&((y0=T.debounceRendering)||S0)(Q0)}function Q0(){try{for(var Z,Y=1;g.length;)g.length>Y&&g.sort(v0),Z=g.shift(),Y=g.length,$1(Z)}finally{g.length=Q0.__r=0}}function m0(Z,Y,O,W,K,Q,G,z,H,q,$){var R,X,N,L,w,U,F=W&&W.__k||O0,D=Y.length;for(H=B1(O,Y,F,H,D),R=0;R<D;R++)(N=O.__k[R])!=null&&(X=N.__i!=-1&&F[N.__i]||Z0,N.__i=R,U=D0(Z,N,X,K,Q,G,z,H,q,$),L=N.__e,N.ref&&X.ref!=N.ref&&(X.ref&&P0(X.ref,null,N),$.push(N.ref,N.__c||L,N)),w==null&&L!=null&&(w=L),4&N.__u?(H=h0(N,H,Z),X.__e&&(X.__e=null)):typeof N.type=="function"&&U!==void 0?H=U:L&&(H=L.nextSibling),N.__u&=-7);return O.__e=w,H}function B1(Z,Y,O,W,K){var Q,G,z,H,q,$=O.length,R=$,X=0;for(Z.__k=Array(K),Q=0;Q<K;Q++)(G=Y[Q])!=null&&typeof G!="boolean"&&typeof G!="function"?(typeof G=="string"||typeof G=="number"||typeof G=="bigint"||G.constructor==String?G=Z.__k[Q]=Y0(null,G,null,null,null):X0(G)?G=Z.__k[Q]=Y0(K0,{children:G},null,null,null):G.constructor===void 0&&G.__b>0?G=Z.__k[Q]=Y0(G.type,G.props,G.key,G.ref?G.ref:null,G.__v):Z.__k[Q]=G,H=Q+X,G.__=Z,G.__b=Z.__b+1,z=null,(q=G.__i=L1(G,O,H,R))!=-1&&(R--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(K>$?X--:K<$&&X++),typeof G.type!="function"&&(G.__u|=4)):q!=H&&(q==H-1?X--:q==H+1?X++:(q>H?X--:X++,G.__u|=4))):Z.__k[Q]=null;if(R)for(Q=0;Q<$;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=d(z)),p0(z,z));return W}function h0(Z,Y,O){var W,K;if(typeof Z.type=="function"){for(W=Z.__k,K=0;W&&K<W.length;K++)W[K]&&(W[K].__=Z,Y=h0(W[K],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=d(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function L1(Z,Y,O,W){var K,Q,G,z=Z.key,H=Z.type,q=Y[O],$=q!=null&&(2&q.__u)==0;if(q===null&&z==null||$&&z==q.key&&H==q.type)return O;if(W>($?1:0)){for(K=O-1,Q=O+1;K>=0||Q<Y.length;)if((q=Y[G=K>=0?K--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&H==q.type)return G}return-1}function A0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||N1.test(Y)?O:O+"px"}function t(Z,Y,O,W,K){var Q,G;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||A0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||A0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(b0,"$1")),G=Y.toLowerCase(),Y=G in Z||Y=="onFocusOut"||Y=="onFocusIn"?G.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[s]=W[s]:(O[s]=V0,Z.addEventListener(Y,Q?J0:L0,Q)):Z.removeEventListener(Y,Q?J0:L0,Q);else{if(K=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function I0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[n]==null)Y[n]=V0++;else if(Y[n]<O[s])return;return O(T.event?T.event(Y):Y)}}}function D0(Z,Y,O,W,K,Q,G,z,H,q){var $,R,X,N,L,w,U,F,D,k,S,v,B,x,j,a,y=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&(H=!!(32&O.__u),Q=[z=Y.__e=O.__e]),($=T.__b)&&$(Y);Y:if(typeof y=="function"){R=G.length;try{if(D=Y.props,k=y.prototype&&y.prototype.render,S=($=y.contextType)&&W[$.__c],v=$?S?S.props.value:$.__:W,O.__c?F=(X=Y.__c=O.__c).__=X.__E:(k?Y.__c=X=new y(D,v):(Y.__c=X=new r(D,v),X.constructor=y,X.render=V1),S&&S.sub(X),X.state||(X.state={}),X.__n=W,N=X.__d=!0,X.__h=[],X._sb=[]),k&&X.__s==null&&(X.__s=X.state),k&&y.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=m({},X.__s)),m(X.__s,y.getDerivedStateFromProps(D,X.__s))),L=X.props,w=X.state,X.__v=Y,N)k&&y.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),k&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(k&&y.getDerivedStateFromProps==null&&D!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(D,v),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(D,X.__s,v)===!1){Y.__v!=O.__v&&(X.props=D,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(h){h&&(h.__=Y)}),O0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&G.push(X),z=d(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(D,X.__s,v),k&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,w,U)})}if(X.context=v,X.props=D,X.__P=Z,X.__e=!1,B=T.__r,x=0,k)X.state=X.__s,X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),O0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++x<25);X.state=X.__s,X.getChildContext!=null&&(W=m(m({},W),X.getChildContext())),k&&!N&&X.getSnapshotBeforeUpdate!=null&&(U=X.getSnapshotBeforeUpdate(L,w)),j=$!=null&&$.type===K0&&$.key==null?c0($.props.children):$,z=m0(Z,X0(j)?j:[j],Y,O,W,K,Q,G,z,H,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&G.push(X),F&&(X.__E=X.__=null)}catch(h){if(G.length=R,Y.__v=null,H||Q!=null){if(h.then){for(Y.__u|=H?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(a=Q.length;a--;)R0(Q[a])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),h.then||g0(Y),T.__e(h,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=J1(O.__e,Y,O,W,K,Q,G,H,q);return($=T.diffed)&&$(Y),128&Y.__u?void 0:z}function g0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(g0))}function d0(Z,Y,O){for(var W=0;W<O.length;W++)P0(O[W],O[++W],O[++W]);T.__c&&T.__c(Y,Z),Z.some(function(K){try{Z=K.__h,K.__h=[],Z.some(function(Q){Q.call(K)})}catch(Q){T.__e(Q,K.__v)}})}function c0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:X0(Z)?Z.map(c0):Z.constructor!==void 0?null:m({},Z)}function J1(Z,Y,O,W,K,Q,G,z,H){var q,$,R,X,N,L,w,U=O.props||Z0,F=Y.props,D=Y.type;if(D=="svg"?K="http://www.w3.org/2000/svg":D=="math"?K="http://www.w3.org/1998/Math/MathML":K||(K="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((N=Q[q])&&"setAttribute"in N==!!D&&(D?N.localName==D:N.nodeType==3)){Z=N,Q[q]=null;break}}if(Z==null){if(D==null)return document.createTextNode(F);Z=document.createElementNS(K,D,F.is&&F),z&&(T.__m&&T.__m(Y,Q),z=!1),Q=null}if(D==null)U===F||z&&Z.data==F||(Z.data=F);else{if(Q=D=="textarea"&&F.defaultValue!=null?null:Q&&W0.call(Z.childNodes),!z&&Q!=null)for(U={},q=0;q<Z.attributes.length;q++)U[(N=Z.attributes[q]).name]=N.value;for(q in U)N=U[q],q=="dangerouslySetInnerHTML"?R=N:q=="children"||(q in F)||q=="value"&&("defaultValue"in F)||q=="checked"&&("defaultChecked"in F)||t(Z,q,null,N,K);for(q in F)N=F[q],q=="children"?X=N:q=="dangerouslySetInnerHTML"?$=N:q=="value"?L=N:q=="checked"?w=N:z&&typeof N!="function"||U[q]===N||t(Z,q,N,U[q],K);if($)z||R&&($.__html==R.__html||$.__html==Z.innerHTML)||(Z.innerHTML=$.__html),Y.__k=[];else if(R&&(Z.innerHTML=""),m0(Y.type=="template"?Z.content:Z,X0(X)?X:[X],Y,O,W,D=="foreignObject"?"http://www.w3.org/1999/xhtml":K,Q,G,Q?Q[0]:O.__k&&d(O,0),z,H),Q!=null)for(q=Q.length;q--;)R0(Q[q]);z&&D!="textarea"||(q="value",D=="progress"&&L==null?Z.removeAttribute("value"):L!=null&&(L!==Z[q]||D=="progress"&&!L||D=="option"&&L!=U[q])&&t(Z,q,L,U[q],K),q="checked",w!=null&&w!=Z[q]&&t(Z,q,w,U[q],K))}return Z}function P0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(K){T.__e(K,O)}}function p0(Z,Y,O){var W,K;if(T.unmount&&T.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||P0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){T.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(K=0;K<W.length;K++)W[K]&&p0(W[K],Y,O||typeof Z.type!="function");O||R0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function V1(Z,Y,O){return this.constructor(Z,O)}function q0(Z,Y,O){var W,K,Q,G;Y==document&&(Y=document.documentElement),T.__&&T.__(Z,Y),K=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],G=[],D0(Y,Z=(!W&&O||Y).__k=G0(K0,null,[Z]),K||Z0,Z0,Y.namespaceURI,!W&&O?[O]:K?null:Y.firstChild?W0.call(Y.childNodes):null,Q,!W&&O?O:K?K.__e:Y.firstChild,W,G),d0(Q,Z,G),Z.props.children=null}W0=O0.slice,T={__e:function(Z,Y,O,W){for(var K,Q,G;Y=Y.__;)if((K=Y.__c)&&!K.__)try{if((Q=K.constructor)&&Q.getDerivedStateFromError!=null&&(K.setState(Q.getDerivedStateFromError(Z)),G=K.__d),K.componentDidCatch!=null&&(K.componentDidCatch(Z,W||{}),G=K.__d),G)return K.__E=K}catch(z){Z=z}throw Z}},j0=0,z1=function(Z){return Z!=null&&Z.constructor===void 0},r.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=m({},this.state),typeof Z=="function"&&(Z=Z(m({},O),this.props)),Z&&m(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),x0(this))},r.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),x0(this))},r.prototype.render=K0,g=[],S0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v0=function(Z,Y){return Z.__v.__b-Y.__v.__b},Q0.__r=0,B0=Math.random().toString(8),n="__d"+B0,s="__a"+B0,b0=/(PointerCapture)$|Capture$/i,V0=0,L0=I0(!1),J0=I0(!0),H1=0;var u,M,T0,a0,e=0,t0=[],C=T,i0=C.__b,r0=C.__r,o0=C.diffed,l0=C.__c,s0=C.unmount,u0=C.__;function F0(Z,Y){C.__h&&C.__h(M,Z,e||Y),e=0;var O=M.__H||(M.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function P(Z){return e=1,R1(Z1,Z)}function R1(Z,Y,O){var W=F0(u++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):Z1(void 0,Y),function(z){var H=W.__N?W.__N[0]:W.__[0],q=W.t(H,z);H!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=M,!M.__f)){var K=function(z,H,q){if(!W.__c.__H)return!0;var $=!1,R=W.__c.props!==z;if(W.__c.__H.__.some(function(N){if(N.__N){$=!0;var L=N.__[0];N.__=N.__N,N.__N=void 0,L!==N.__[0]&&(R=!0)}}),Q){var X=Q.call(this,z,H,q);return $?X||R:X}return!$||R};M.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:G}=M;M.componentWillUpdate=function(z,H,q){if(this.__e){var $=Q;Q=void 0,K(z,H,q),Q=$}G&&G.call(this,z,H,q)},M.shouldComponentUpdate=K}return W.__N||W.__}function c(Z,Y){var O=F0(u++,3);!C.__s&&Y1(O.__H,Y)&&(O.__=Z,O.u=Y,M.__H.__h.push(O))}function _0(Z){return e=5,n0(function(){return{current:Z}},[])}function n0(Z,Y){var O=F0(u++,7);return Y1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function H0(Z,Y){return e=8,n0(function(){return Z},Y)}function D1(){for(var Z;Z=t0.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(z0),Y.__h.some(U0),Y.__h=[]}catch(O){Y.__h=[],C.__e(O,Z.__v)}}}C.__b=function(Z){M=null,i0&&i0(Z)},C.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),u0&&u0(Z,Y)},C.__r=function(Z){r0&&r0(Z),u=0;var Y=(M=Z.__c).__H;Y&&(T0===M?(Y.__h=[],M.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(z0),Y.__h.some(U0),Y.__h=[],u=0)),T0=M},C.diffed=function(Z){o0&&o0(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(t0.push(Y)!==1&&a0===C.requestAnimationFrame||((a0=C.requestAnimationFrame)||P1)(D1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),T0=M=null},C.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(z0),O.__h=O.__h.filter(function(W){return!W.__||U0(W)})}catch(W){Y.some(function(K){K.__h&&(K.__h=[])}),Y=[],C.__e(W,O.__v)}}),l0&&l0(Z,Y)},C.unmount=function(Z){s0&&s0(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{z0(W)}catch(K){Y=K}}),O.__H=void 0,Y&&C.__e(Y,O.__v))};var e0=typeof requestAnimationFrame=="function";function P1(Z){var Y,O=function(){clearTimeout(W),e0&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);e0&&(Y=requestAnimationFrame(O))}function z0(Z){var Y=M,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),M=Y}function U0(Z){var Y=M;Z.__c=Z.__(),M=Y}function Y1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function Z1(Z,Y){return typeof Y=="function"?Y(Z):Y}var Q1=function(Z,Y,O,W){var K;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var G=Y[Q++],z=Y[Q]?(Y[0]|=G?1:2,O[Y[Q++]]):Y[++Q];G===3?W[0]=z:G===4?W[1]=Object.assign(W[1]||{},z):G===5?(W[1]=W[1]||{})[Y[++Q]]=z:G===6?W[1][Y[++Q]]+=z+"":G?(K=Z.apply(z,Q1(Z,z,O,["",null])),W.push(K),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=K)):W.push(z)}return W},O1=new Map;function M0(Z){var Y=O1.get(this);return Y||(Y=new Map,O1.set(this,Y)),(Y=Q1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,K,Q=1,G="",z="",H=[0],q=function(X){Q===1&&(X||(G=G.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?H.push(0,X,G):Q===3&&(X||G)?(H.push(3,X,G),Q=2):Q===2&&G==="..."&&X?H.push(4,X,0):Q===2&&G&&!X?H.push(5,0,!0,G):Q>=5&&((G||!X&&Q===5)&&(H.push(Q,0,G,K),Q=6),X&&(H.push(Q,X,0,K),Q=6)),G=""},$=0;$<O.length;$++){$&&(Q===1&&q(),q($));for(var R=0;R<O[$].length;R++)W=O[$][R],Q===1?W==="<"?(q(),H=[H],Q=3):G+=W:Q===4?G==="--"&&W===">"?(Q=1,G=""):G=W+G[0]:z?W===z?z="":G+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,K=G,G=""):W==="/"&&(Q<5||O[$][R+1]===">")?(q(),Q===3&&(H=H[0]),Q=H,(H=H[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):G+=W),Q===3&&G==="!--"&&(Q=4,H=H[0])}return q(),H}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var V=M0.bind(G0);async function E(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function T1(){let[Z,Y]=P([]),[O,W]=P(null),[K,Q]=P("list"),[G,z]=P(null),[H,q]=P(!0),$=H0(async()=>{try{let X=await E("/agents");Y(X.agents||[])}catch(X){console.error("Failed to load agents:",X)}},[]);c(()=>{(async()=>{try{let X=await E("/auth/me");z(X.user)}catch{}await $(),q(!1)})()},[]);let R=(X)=>({style:{...X?Object.fromEntries(X.split(";").filter(Boolean).map((N)=>{let[L,w]=N.trim().split(":");return[L.replace(/-([a-z])/g,(U,F)=>F.toUpperCase()),w.trim()]})):{}}});if(H)return V`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return V`
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
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:K==="jobs"?"var(--bg-hover)":"transparent",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            🚀 Jobs
          </button>
          <button
            onClick=${()=>{Q("about"),W(null)}}
            style=${{width:"100%",padding:"0.6rem 0.75rem",borderRadius:"var(--radius)",background:K==="about"?"var(--bg-hover)":"transparent",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.85rem"}}
          >
            ℹ️ About
          </button>
        </div>

        <div style=${{flex:1,overflowY:"auto",padding:"0 0.75rem"}}>
          ${Z.map((X)=>V`
            <button
              key=${X.id}
              onClick=${()=>{W(X),Q("chat")}}
              style=${{width:"100%",textAlign:"left",padding:"0.75rem",marginBottom:"0.25rem",borderRadius:"var(--radius)",border:"1px solid transparent",background:O?.id===X.id?"var(--bg-hover)":"transparent",color:"var(--text)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"}}
            >
              ${X.icon_url?V`<img src=${X.icon_url} style=${{width:"1.5rem",height:"1.5rem",borderRadius:"50%"}} />`:V`<span style=${{fontSize:"1.25rem"}}>🤖</span>`}
              <div style=${{flex:1,minWidth:0}}>
                <div style=${{fontSize:"0.85rem",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  ${X.name}
                </div>
                <div style=${{fontSize:"0.7rem",marginTop:"0.15rem",color:X.auth_state==="connected"?"var(--success)":"var(--warning)"}}>
                  ${X.auth_state==="connected"?"● Connected":"○ Needs auth"}
                </div>
              </div>
            </button>
          `)}
        </div>

        <div style=${{padding:"0.75rem",borderTop:"1px solid var(--border)"}}>
          ${G?V`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              Signed in as ${G.name||G.email||G.sub}
              <br/><a href="/api/auth/logout" style=${{color:"var(--accent)"}}>Log out</a>
            </div>`:V`<div style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>
              <a href="/api/auth/login" style=${{color:"var(--accent)"}}>Sign in with Pocket ID</a>
            </div>`}
        </div>
      </aside>

      ${""}
      <main style=${{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        ${K==="add"&&V`<${C1} onAdded=${(X)=>{$(),W(X),Q("chat")}} />`}
        ${K==="chat"&&O&&V`<${w1} agent=${O} onRefresh=${$} />`}
        ${K==="jobs"&&V`<${M1} agents=${Z} />`}
        ${K==="about"&&V`<${U1} />`}
        ${K==="list"&&V`<${F1} />`}
      </main>
    </div>
  `}function U1(){return V`
    <div style=${{maxWidth:"680px",margin:"0 auto",padding:"2.5rem 2rem",overflowY:"auto",flex:1}}>
      <div style=${{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.5rem"}}>
        <span style=${{fontSize:"2.25rem"}}>🎵</span>
        <div>
          <h2 style=${{fontSize:"1.35rem",fontWeight:700}}>About Orchestral</h2>
          <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginTop:"0.2rem"}}>A2A Agent Console</p>
        </div>
      </div>
      <div style=${{display:"flex",flexDirection:"column",gap:"1rem",color:"var(--text-dim)",fontSize:"0.9rem",lineHeight:1.6}}>
        <p>Orchestral is a console for discovering, authenticating, and messaging agents that support the Agent2Agent (A2A) protocol.</p>
        <div style=${{padding:"1rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)"}}>
          <h3 style=${{color:"var(--text)",fontSize:"0.95rem",marginBottom:"0.5rem"}}>What you can do</h3>
          <ul style=${{paddingLeft:"1.2rem"}}>
            <li>Discover agents from their Agent Card</li>
            <li>Connect securely with OIDC</li>
            <li>Chat with agents over A2A, including streaming responses</li>
            <li>Run coding jobs and open pull requests from GitHub</li>
          </ul>
        </div>
        <p style=${{fontSize:"0.8rem"}}>Built for interoperable, conversational AI workflows.</p>
      </div>
    </div>
  `}function F1(){return V`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var _1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Bot is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function M1({agents:Z}){let[Y,O]=P(null),[W,K]=P([]),[Q,G]=P([]),[z,H]=P(""),[q,$]=P(""),[R,X]=P(""),[N,L]=P(!1),[w,U]=P(""),[F,D]=P(null),k=(Z||[]).filter((B)=>B.auth_state==="connected"),S=H0(async()=>{try{let B=await E("/jobs");G(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);c(()=>{(async()=>{try{let B=await E("/github/status");if(O(B),B.connected){let x=await E("/github/repos");K(x.repos||[])}}catch(B){U(B.message)}await S()})()},[]),c(()=>{if(!Q.some((j)=>!["done","failed"].includes(j.status)))return;let x=setInterval(S,3000);return()=>clearInterval(x)},[Q,S]);async function v(B){if(B?.preventDefault(),!z||!q||!R.trim()||N)return;L(!0),U("");try{let x=await E("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:R.trim()})});G((j)=>[x.job,...j]),X("")}catch(x){U(x.message)}finally{L(!1)}}return V`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and a bot, describe what to do, and orchestral spins up a fresh container,
        asks the bot for a patch, and opens a pull request.
      </p>

      ${!Y?.configured&&V`
        <div style=${{padding:"0.9rem",background:"rgba(245,158,11,0.1)",border:"1px solid var(--warning)",borderRadius:"var(--radius)",fontSize:"0.85rem",marginBottom:"1.5rem"}}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${Y?.configured&&!Y?.connected&&V`
        <div style=${{padding:"0.9rem",background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--radius)",marginBottom:"1.5rem"}}>
          <p style=${{fontSize:"0.85rem",marginBottom:"0.75rem"}}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",textDecoration:"none",fontWeight:600,fontSize:"0.85rem"}}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${Y?.connected&&V`
        <div style=${{fontSize:"0.8rem",color:"var(--success)",marginBottom:"1rem"}}>
          ● Connected to GitHub as ${Y.login}
        </div>

        <form onSubmit=${v} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <select value=${q} onChange=${(B)=>$(B.target.value)} style=${{...p}}>
              <option value="">Select a repo…</option>
              ${W.map((B)=>V`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Bot</label>
            <select value=${z} onChange=${(B)=>H(B.target.value)} style=${{...p}}>
              <option value="">Select a bot…</option>
              ${k.map((B)=>V`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${k.length===0&&V`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${R}
              onInput=${(B)=>X(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...p,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${w&&V`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${w}</div>`}

          <button type="submit" disabled=${!z||!q||!R.trim()||N} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!R.trim()||N?0.5:1}}>
            ${N?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&V`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>V`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>D(F===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${_1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&V`
                <a href=${B.pr_url} target="_blank" onClick=${(x)=>x.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${F===B.id&&V`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function C1({onAdded:Z}){let[Y,O]=P(""),[W,K]=P(""),[Q,G]=P(""),[z,H]=P(""),[q,$]=P(!1),[R,X]=P(null);async function N(){H(""),X(null),$(!0);try{let L=await E("/agents",{method:"POST",body:JSON.stringify({card_url:Y,oidc_client_id:W,oidc_client_secret:Q})});Z(L.agent)}catch(L){H(L.message)}finally{$(!1)}}return V`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${Y}
          onInput=${(L)=>O(L.target.value)}
          placeholder="https://agent.example.com"
          style=${p}
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
          <input type="text" value=${W} onInput=${(L)=>K(L.target.value)} style=${p} />
        </div>
      </details>

      ${z&&V`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${z}
      </div>`}

      <button
        onClick=${N}
        disabled=${!Y||q}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!Y||q?0.5:1}}
      >
        ${q?"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function w1({agent:Z,onRefresh:Y}){let[O,W]=P([]),[K,Q]=P(""),[G,z]=P(!1),[H,q]=P(null),[$,R]=P([]),[X,N]=P(""),[L,w]=P(Z),U=_0(null),F=_0(null);c(()=>{E(`/agents/${Z.id}`).then((J)=>w(J)).catch(()=>{})},[Z.id]);let D=H0(async(J)=>{q(J);let _=await E(`/conversations/${J}/messages`);W(_.messages||[])},[]);c(()=>{(async()=>{try{let _=(await E(`/agents/${Z.id}/conversations`)).conversations||[];if(R(_),_.length>0)await D(_[0].id);else{let A=await E(`/agents/${Z.id}/conversations`,{method:"POST"});R([A.conversation]),q(A.conversation.id),W([])}}catch(J){N(J.message)}})()},[Z.id]);async function k(){N("");try{let J=await E(`/agents/${Z.id}/conversations`,{method:"POST"});R((_)=>[J.conversation,..._]),q(J.conversation.id),W([]),Q("")}catch(J){N(J.message)}}async function S(J){if(J===H)return;N("");try{await D(J)}catch(_){N(_.message)}}c(()=>{U.current?.scrollIntoView({behavior:"smooth"})},[O]);async function v(J){if(J?.preventDefault(),!K.trim()||!H||G)return;let _=K.trim();Q(""),z(!0),N(""),W((A)=>[...A,{role:"user",text:_,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),W((A)=>[...A,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(L?.agent_card?.capabilities?.streaming??!0)await B(_);else await x(_)}catch(A){if(N(A.message),A.message.includes("Authentication"))Y();W((N0)=>N0.filter((o)=>!o.streaming))}finally{z(!1)}}async function B(J){let _=await fetch(`/api/conversations/${H}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:J}),credentials:"same-origin"});if(!_.ok){let l=await _.json().catch(()=>({error:_.statusText}));throw Error(l.error||`HTTP ${_.status}`)}let A=_.body.getReader(),N0=new TextDecoder,o="",w0="";while(!0){let{done:l,value:K1}=await A.read();if(l)break;o+=N0.decode(K1,{stream:!0});let E0=o.split(`

`);o=E0.pop()||"";for(let q1 of E0)for(let k0 of q1.split(`
`))if(k0.startsWith("data: "))try{let I=JSON.parse(k0.slice(6));if(I.error)throw Error(I.error);let i="";if(I.task?.status?.message?.parts)i=I.task.status.message.parts.map((f)=>f.text||"").join("");else if(I.message?.parts)i=I.message.parts.map((f)=>f.text||"").join("");else if(I.artifactUpdate?.artifact?.parts)i=I.artifactUpdate.artifact.parts.map((f)=>f.text||"").join("");else if(I.statusUpdate?.status?.message?.parts)i=I.statusUpdate.status.message.parts.map((f)=>f.text||"").join("");if(i)w0+=i,W((f)=>f.map(($0)=>$0.streaming?{...$0,text:w0}:$0))}catch(I){if(I.message)throw I}}if(H){let l=await E(`/conversations/${H}/messages`);W(l.messages||[])}}async function x(J){let _=await E(`/conversations/${H}/send`,{method:"POST",body:JSON.stringify({text:J})}),A=await E(`/conversations/${H}/messages`);W(A.messages||[])}let[j,a]=P(!1),[y,h]=P(""),[C0,W1]=P("");async function X1(){a(!0),N("");try{await E(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:y,client_secret:C0})}),window.location.href=`/api/agents/${Z.id}/connect`}catch(J){N(J.message)}finally{a(!1)}}let b=L?.auth_state!=="connected",G1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return V`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${L?.icon_url?V`<img src=${L.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:V`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${L?.name||Z.name}</h2>
          ${L?.description&&V`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${L.description}</p>`}
        </div>
        ${$.length>1&&V`
          <select
            value=${H}
            onChange=${(J)=>S(J.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${$.map((J,_)=>V`
              <option key=${J.id} value=${J.id}>
                ${new Date(J.created_at*1000).toLocaleString()} ${_===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${k}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:b?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:b?"var(--warning)":"var(--success)",border:`1px solid ${b?"var(--warning)":"var(--success)"}`}}>
          ${b?"Needs Auth":"Connected"}
        </div>
      </header>

      ${b&&V`
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
              value=${y}
              onInput=${(J)=>h(J.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...p,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${C0}
              onInput=${(J)=>W1(J.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...p,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${G1}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${X1} disabled=${!y||j} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!y||j?0.5:1}}>
            ${j?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${O.length===0&&!b&&V`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${O.map((J)=>V`
            <div key=${J.id} style=${{maxWidth:"85%",alignSelf:J.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:J.role==="user"?"var(--accent)":"var(--bg-card)",color:J.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${J.text||(J.streaming?"…":"")}
            </div>
          `)}
          <div ref=${U} />
        </div>
      </div>

      ${X&&V`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${X}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${v} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            type="text"
            value=${K}
            onInput=${(J)=>Q(J.target.value)}
            placeholder=${b?"Connect to start messaging…":"Send a message…"}
            disabled=${b||G}
            style=${{flex:1,padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none",opacity:b||G?0.5:1}}
          />
          <button type="submit" disabled=${b||G||!K.trim()} style=${{padding:"0.6rem 1.2rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",opacity:b||G||!K.trim()?0.5:1}}>
            ${G?"…":"Send"}
          </button>
        </form>
      </footer>
    </div>
  `}var p={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};q0(V`<${T1} />`,document.getElementById("root"));
