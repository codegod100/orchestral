var q0,M,f0,V1,c,S0,d0,h0,T0,Q0,t,g0,_0,U0,F0,J1,X0={},G0=[],P1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z0=Array.isArray;function h(Z,Y){for(var O in Y)Z[O]=Y[O];return Z}function M0(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function H0(Z,Y,O){var W,G,Q,K={};for(Q in Y)Q=="key"?W=Y[Q]:Q=="ref"?G=Y[Q]:K[Q]=Y[Q];if(arguments.length>2&&(K.children=arguments.length>3?q0.call(arguments,2):O),typeof Z=="function"&&Z.defaultProps!=null)for(Q in Z.defaultProps)K[Q]===void 0&&(K[Q]=Z.defaultProps[Q]);return W0(Z,K,W,G,null)}function W0(Z,Y,O,W,G){var Q={type:Z,props:Y,key:O,ref:W,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:G==null?++f0:G,__i:-1,__u:0};return G==null&&M.vnode!=null&&M.vnode(Q),Q}function N0(Z){return Z.children}function o(Z,Y){this.props=Z,this.context=Y}function p(Z,Y){if(Y==null)return Z.__?p(Z.__,Z.__i+1):null;for(var O;Y<Z.__k.length;Y++)if((O=Z.__k[Y])!=null&&O.__e!=null)return O.__e;return typeof Z.type=="function"?p(Z):null}function T1(Z){if(Z.__P&&Z.__d){var Y=Z.__v,O=Y.__e,W=[],G=[],Q=h({},Y);Q.__v=Y.__v+1,M.vnode&&M.vnode(Q),D0(Z.__P,Q,Y,Z.__n,Z.__P.namespaceURI,32&Y.__u?[O]:null,W,O==null?p(Y):O,!!(32&Y.__u),G),Q.__v=Y.__v,Q.__.__k[Q.__i]=Q,i0(W,Q,G),Y.__e=Y.__=null,Q.__e!=O&&c0(Q)}}function c0(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(Y){if(Y!=null&&Y.__e!=null)return Z.__e=Z.__c.base=Y.__e}),c0(Z)}function b0(Z){(!Z.__d&&(Z.__d=!0)&&c.push(Z)&&!K0.__r++||S0!=M.debounceRendering)&&((S0=M.debounceRendering)||d0)(K0)}function K0(){try{for(var Z,Y=1;c.length;)c.length>Y&&c.sort(h0),Z=c.shift(),Y=c.length,T1(Z)}finally{c.length=K0.__r=0}}function p0(Z,Y,O,W,G,Q,K,z,N,q,$){var P,X,H,V,T,D,R=W&&W.__k||G0,U=Y.length;for(N=U1(O,Y,R,N,U),P=0;P<U;P++)(H=O.__k[P])!=null&&(X=H.__i!=-1&&R[H.__i]||X0,H.__i=P,D=D0(Z,H,X,G,Q,K,z,N,q,$),V=H.__e,H.ref&&X.ref!=H.ref&&(X.ref&&R0(X.ref,null,H),$.push(H.ref,H.__c||V,H)),T==null&&V!=null&&(T=V),4&H.__u?(N=a0(H,N,Z),X.__e&&(X.__e=null)):typeof H.type=="function"&&D!==void 0?N=D:V&&(N=V.nextSibling),H.__u&=-7);return O.__e=T,N}function U1(Z,Y,O,W,G){var Q,K,z,N,q,$=O.length,P=$,X=0;for(Z.__k=Array(G),Q=0;Q<G;Q++)(K=Y[Q])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=Z.__k[Q]=W0(null,K,null,null,null):z0(K)?K=Z.__k[Q]=W0(N0,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=Z.__k[Q]=W0(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):Z.__k[Q]=K,N=Q+X,K.__=Z,K.__b=Z.__b+1,z=null,(q=K.__i=F1(K,O,N,P))!=-1&&(P--,(z=O[q])&&(z.__u|=2)),z==null||z.__v==null?(q==-1&&(G>$?X--:G<$&&X++),typeof K.type!="function"&&(K.__u|=4)):q!=N&&(q==N-1?X--:q==N+1?X++:(q>N?X--:X++,K.__u|=4))):Z.__k[Q]=null;if(P)for(Q=0;Q<$;Q++)(z=O[Q])!=null&&(2&z.__u)==0&&(z.__e==W&&(W=p(z)),s0(z,z));return W}function a0(Z,Y,O){var W,G;if(typeof Z.type=="function"){for(W=Z.__k,G=0;W&&G<W.length;G++)W[G]&&(W[G].__=Z,Y=a0(W[G],Y,O));return Y}Z.__e!=Y&&(Y&&Z.type&&!Y.parentNode&&(Y=p(Z)),Y=O.insertBefore(Z.__e,Y||null));do Y=Y&&Y.nextSibling;while(Y!=null&&Y.nodeType==8);return Y}function F1(Z,Y,O,W){var G,Q,K,z=Z.key,N=Z.type,q=Y[O],$=q!=null&&(2&q.__u)==0;if(q===null&&z==null||$&&z==q.key&&N==q.type)return O;if(W>($?1:0)){for(G=O-1,Q=O+1;G>=0||Q<Y.length;)if((q=Y[K=G>=0?G--:Q++])!=null&&(2&q.__u)==0&&z==q.key&&N==q.type)return K}return-1}function v0(Z,Y,O){Y[0]=="-"?Z.setProperty(Y,O==null?"":O):Z[Y]=O==null?"":typeof O!="number"||P1.test(Y)?O:O+"px"}function O0(Z,Y,O,W,G){var Q,K;Y:if(Y=="style")if(typeof O=="string")Z.style.cssText=O;else{if(typeof W=="string"&&(Z.style.cssText=W=""),W)for(Y in W)O&&Y in O||v0(Z.style,Y,"");if(O)for(Y in O)W&&O[Y]==W[Y]||v0(Z.style,Y,O[Y])}else if(Y[0]=="o"&&Y[1]=="n")Q=Y!=(Y=Y.replace(g0,"$1")),K=Y.toLowerCase(),Y=K in Z||Y=="onFocusOut"||Y=="onFocusIn"?K.slice(2):Y.slice(2),Z.l||(Z.l={}),Z.l[Y+Q]=O,O?W?O[t]=W[t]:(O[t]=_0,Z.addEventListener(Y,Q?F0:U0,Q)):Z.removeEventListener(Y,Q?F0:U0,Q);else{if(G=="http://www.w3.org/2000/svg")Y=Y.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(Y!="width"&&Y!="height"&&Y!="href"&&Y!="list"&&Y!="form"&&Y!="tabIndex"&&Y!="download"&&Y!="rowSpan"&&Y!="colSpan"&&Y!="role"&&Y!="popover"&&Y in Z)try{Z[Y]=O==null?"":O;break Y}catch(z){}typeof O=="function"||(O==null||O===!1&&Y[4]!="-"?Z.removeAttribute(Y):Z.setAttribute(Y,Y=="popover"&&O==1?"":O))}}function m0(Z){return function(Y){if(this.l){var O=this.l[Y.type+Z];if(Y[Q0]==null)Y[Q0]=_0++;else if(Y[Q0]<O[t])return;return O(M.event?M.event(Y):Y)}}}function D0(Z,Y,O,W,G,Q,K,z,N,q){var $,P,X,H,V,T,D,R,U,C,v,w,B,j,m,s,S=Y.type;if(Y.constructor!==void 0)return null;128&O.__u&&(N=!!(32&O.__u),Q=[z=Y.__e=O.__e]),($=M.__b)&&$(Y);Y:if(typeof S=="function"){P=K.length;try{if(U=Y.props,C=S.prototype&&S.prototype.render,v=($=S.contextType)&&W[$.__c],w=$?v?v.props.value:$.__:W,O.__c?R=(X=Y.__c=O.__c).__=X.__E:(C?Y.__c=X=new S(U,w):(Y.__c=X=new o(U,w),X.constructor=S,X.render=M1),v&&v.sub(X),X.state||(X.state={}),X.__n=W,H=X.__d=!0,X.__h=[],X._sb=[]),C&&X.__s==null&&(X.__s=X.state),C&&S.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=h({},X.__s)),h(X.__s,S.getDerivedStateFromProps(U,X.__s))),V=X.props,T=X.state,X.__v=Y,H)C&&S.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),C&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(C&&S.getDerivedStateFromProps==null&&U!==V&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(U,w),Y.__v==O.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(U,X.__s,w)===!1){Y.__v!=O.__v&&(X.props=U,X.state=X.__s,X.__d=!1),Y.__e=O.__e,Y.__k=O.__k,Y.__k.some(function(g){g&&(g.__=Y)}),G0.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&K.push(X),z=p(O);break Y}X.componentWillUpdate!=null&&X.componentWillUpdate(U,X.__s,w),C&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(V,T,D)})}if(X.context=w,X.props=U,X.__P=Z,X.__e=!1,B=M.__r,j=0,C)X.state=X.__s,X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),G0.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,B&&B(Y),$=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++j<25);X.state=X.__s,X.getChildContext!=null&&(W=h(h({},W),X.getChildContext())),C&&!H&&X.getSnapshotBeforeUpdate!=null&&(D=X.getSnapshotBeforeUpdate(V,T)),m=$!=null&&$.type===N0&&$.key==null?o0($.props.children):$,z=p0(Z,z0(m)?m:[m],Y,O,W,G,Q,K,z,N,q),X.base=Y.__e,Y.__u&=-161,X.__h.length&&K.push(X),R&&(X.__E=X.__=null)}catch(g){if(K.length=P,Y.__v=null,N||Q!=null){if(g.then){for(Y.__u|=N?160:128;z&&z.nodeType==8&&z.nextSibling;)z=z.nextSibling;Q!=null&&(Q[Q.indexOf(z)]=null),Y.__e=z}else if(Q!=null)for(s=Q.length;s--;)M0(Q[s])}else Y.__e=O.__e;Y.__k==null&&(Y.__k=O.__k||[]),g.then||r0(Y),M.__e(g,Y,O)}}else Q==null&&Y.__v==O.__v?(Y.__k=O.__k,Y.__e=O.__e):z=Y.__e=_1(O.__e,Y,O,W,G,Q,K,N,q);return($=M.diffed)&&$(Y),128&Y.__u?void 0:z}function r0(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(r0))}function i0(Z,Y,O){for(var W=0;W<O.length;W++)R0(O[W],O[++W],O[++W]);M.__c&&M.__c(Y,Z),Z.some(function(G){try{Z=G.__h,G.__h=[],Z.some(function(Q){Q.call(G)})}catch(Q){M.__e(Q,G.__v)}})}function o0(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:z0(Z)?Z.map(o0):Z.constructor!==void 0?null:h({},Z)}function _1(Z,Y,O,W,G,Q,K,z,N){var q,$,P,X,H,V,T,D=O.props||X0,R=Y.props,U=Y.type;if(U=="svg"?G="http://www.w3.org/2000/svg":U=="math"?G="http://www.w3.org/1998/Math/MathML":G||(G="http://www.w3.org/1999/xhtml"),Q!=null){for(q=0;q<Q.length;q++)if((H=Q[q])&&"setAttribute"in H==!!U&&(U?H.localName==U:H.nodeType==3)){Z=H,Q[q]=null;break}}if(Z==null){if(U==null)return document.createTextNode(R);Z=document.createElementNS(G,U,R.is&&R),z&&(M.__m&&M.__m(Y,Q),z=!1),Q=null}if(U==null)D===R||z&&Z.data==R||(Z.data=R);else{if(Q=U=="textarea"&&R.defaultValue!=null?null:Q&&q0.call(Z.childNodes),!z&&Q!=null)for(D={},q=0;q<Z.attributes.length;q++)D[(H=Z.attributes[q]).name]=H.value;for(q in D)H=D[q],q=="dangerouslySetInnerHTML"?P=H:q=="children"||(q in R)||q=="value"&&("defaultValue"in R)||q=="checked"&&("defaultChecked"in R)||O0(Z,q,null,H,G);for(q in R)H=R[q],q=="children"?X=H:q=="dangerouslySetInnerHTML"?$=H:q=="value"?V=H:q=="checked"?T=H:z&&typeof H!="function"||D[q]===H||O0(Z,q,H,D[q],G);if($)z||P&&($.__html==P.__html||$.__html==Z.innerHTML)||(Z.innerHTML=$.__html),Y.__k=[];else if(P&&(Z.innerHTML=""),p0(Y.type=="template"?Z.content:Z,z0(X)?X:[X],Y,O,W,U=="foreignObject"?"http://www.w3.org/1999/xhtml":G,Q,K,Q?Q[0]:O.__k&&p(O,0),z,N),Q!=null)for(q=Q.length;q--;)M0(Q[q]);z&&U!="textarea"||(q="value",U=="progress"&&V==null?Z.removeAttribute("value"):V!=null&&(V!==Z[q]||U=="progress"&&!V||U=="option"&&V!=D[q])&&O0(Z,q,V,D[q],G),q="checked",T!=null&&T!=Z[q]&&O0(Z,q,T,D[q],G))}return Z}function R0(Z,Y,O){try{if(typeof Z=="function"){var W=typeof Z.__u=="function";W&&Z.__u(),W&&Y==null||(Z.__u=Z(Y))}else Z.current=Y}catch(G){M.__e(G,O)}}function s0(Z,Y,O){var W,G;if(M.unmount&&M.unmount(Z),(W=Z.ref)&&(W.current&&W.current!=Z.__e||R0(W,null,Y)),(W=Z.__c)!=null){if(W.componentWillUnmount)try{W.componentWillUnmount()}catch(Q){M.__e(Q,Y)}W.base=W.__P=W.__n=null}if(W=Z.__k)for(G=0;G<W.length;G++)W[G]&&s0(W[G],Y,O||typeof Z.type!="function");O||M0(Z.__e),Z.__c=Z.__=Z.__e=void 0}function M1(Z,Y,O){return this.constructor(Z,O)}function $0(Z,Y,O){var W,G,Q,K;Y==document&&(Y=document.documentElement),M.__&&M.__(Z,Y),G=(W=typeof O=="function")?null:O&&O.__k||Y.__k,Q=[],K=[],D0(Y,Z=(!W&&O||Y).__k=H0(N0,null,[Z]),G||X0,X0,Y.namespaceURI,!W&&O?[O]:G?null:Y.firstChild?q0.call(Y.childNodes):null,Q,!W&&O?O:G?G.__e:Y.firstChild,W,K),i0(Q,Z,K),Z.props.children=null}q0=G0.slice,M={__e:function(Z,Y,O,W){for(var G,Q,K;Y=Y.__;)if((G=Y.__c)&&!G.__)try{if((Q=G.constructor)&&Q.getDerivedStateFromError!=null&&(G.setState(Q.getDerivedStateFromError(Z)),K=G.__d),G.componentDidCatch!=null&&(G.componentDidCatch(Z,W||{}),K=G.__d),K)return G.__E=G}catch(z){Z=z}throw Z}},f0=0,V1=function(Z){return Z!=null&&Z.constructor===void 0},o.prototype.setState=function(Z,Y){var O;O=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=h({},this.state),typeof Z=="function"&&(Z=Z(h({},O),this.props)),Z&&h(O,Z),Z!=null&&this.__v&&(Y&&this._sb.push(Y),b0(this))},o.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),b0(this))},o.prototype.render=N0,c=[],d0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,h0=function(Z,Y){return Z.__v.__b-Y.__v.__b},K0.__r=0,T0=Math.random().toString(8),Q0="__d"+T0,t="__a"+T0,g0=/(PointerCapture)$|Capture$/i,_0=0,U0=m0(!1),F0=m0(!0),J1=0;var e,E,w0,l0,n=0,Q1=[],k=M,u0=k.__b,t0=k.__r,e0=k.diffed,n0=k.__c,Y1=k.unmount,Z1=k.__;function k0(Z,Y){k.__h&&k.__h(E,Z,n||Y),n=0;var O=E.__H||(E.__H={__:[],__h:[]});return Z>=O.__.length&&O.__.push({}),O.__[Z]}function F(Z){return n=1,D1(G1,Z)}function D1(Z,Y,O){var W=k0(e++,2);if(W.t=Z,!W.__c&&(W.__=[O?O(Y):G1(void 0,Y),function(z){var N=W.__N?W.__N[0]:W.__[0],q=W.t(N,z);N!==q&&(W.__N=[q,W.__[1]],W.__c.setState({}))}],W.__c=E,!E.__f)){var G=function(z,N,q){if(!W.__c.__H)return!0;var $=!1,P=W.__c.props!==z;if(W.__c.__H.__.some(function(H){if(H.__N){$=!0;var V=H.__[0];H.__=H.__N,H.__N=void 0,V!==H.__[0]&&(P=!0)}}),Q){var X=Q.call(this,z,N,q);return $?X||P:X}return!$||P};E.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:K}=E;E.componentWillUpdate=function(z,N,q){if(this.__e){var $=Q;Q=void 0,G(z,N,q),Q=$}K&&K.call(this,z,N,q)},E.shouldComponentUpdate=G}return W.__N||W.__}function a(Z,Y){var O=k0(e++,3);!k.__s&&X1(O.__H,Y)&&(O.__=Z,O.u=Y,E.__H.__h.push(O))}function L0(Z){return n=5,W1(function(){return{current:Z}},[])}function W1(Z,Y){var O=k0(e++,7);return X1(O.__H,Y)&&(O.__=Z(),O.__H=Y,O.__h=Z),O.__}function Y0(Z,Y){return n=8,W1(function(){return Z},Y)}function R1(){for(var Z;Z=Q1.shift();){var Y=Z.__H;if(Z.__P&&Y)try{Y.__h.some(B0),Y.__h.some(E0),Y.__h=[]}catch(O){Y.__h=[],k.__e(O,Z.__v)}}}k.__b=function(Z){E=null,u0&&u0(Z)},k.__=function(Z,Y){Z&&Y.__k&&Y.__k.__m&&(Z.__m=Y.__k.__m),Z1&&Z1(Z,Y)},k.__r=function(Z){t0&&t0(Z),e=0;var Y=(E=Z.__c).__H;Y&&(w0===E?(Y.__h=[],E.__h=[],Y.__.some(function(O){O.__N&&(O.__=O.__N),O.u=O.__N=void 0})):(Y.__h.some(B0),Y.__h.some(E0),Y.__h=[],e=0)),w0=E},k.diffed=function(Z){e0&&e0(Z);var Y=Z.__c;Y&&Y.__H&&(Y.__H.__h.length&&(Q1.push(Y)!==1&&l0===k.requestAnimationFrame||((l0=k.requestAnimationFrame)||w1)(R1)),Y.__H.__.some(function(O){O.u&&(O.__H=O.u,O.u=void 0)})),w0=E=null},k.__c=function(Z,Y){Y.some(function(O){try{O.__h.some(B0),O.__h=O.__h.filter(function(W){return!W.__||E0(W)})}catch(W){Y.some(function(G){G.__h&&(G.__h=[])}),Y=[],k.__e(W,O.__v)}}),n0&&n0(Z,Y)},k.unmount=function(Z){Y1&&Y1(Z);var Y,O=Z.__c;O&&O.__H&&(O.__H.__.some(function(W){try{B0(W)}catch(G){Y=G}}),O.__H=void 0,Y&&k.__e(Y,O.__v))};var O1=typeof requestAnimationFrame=="function";function w1(Z){var Y,O=function(){clearTimeout(W),O1&&cancelAnimationFrame(Y),setTimeout(Z)},W=setTimeout(O,35);O1&&(Y=requestAnimationFrame(O))}function B0(Z){var Y=E,O=Z.__c;typeof O=="function"&&(Z.__c=void 0,O()),E=Y}function E0(Z){var Y=E;Z.__c=Z.__(),E=Y}function X1(Z,Y){return!Z||Z.length!==Y.length||Y.some(function(O,W){return O!==Z[W]})}function G1(Z,Y){return typeof Y=="function"?Y(Z):Y}var q1=function(Z,Y,O,W){var G;Y[0]=0;for(var Q=1;Q<Y.length;Q++){var K=Y[Q++],z=Y[Q]?(Y[0]|=K?1:2,O[Y[Q++]]):Y[++Q];K===3?W[0]=z:K===4?W[1]=Object.assign(W[1]||{},z):K===5?(W[1]=W[1]||{})[Y[++Q]]=z:K===6?W[1][Y[++Q]]+=z+"":K?(G=Z.apply(z,q1(Z,z,O,["",null])),W.push(G),z[0]?Y[0]|=2:(Y[Q-2]=0,Y[Q]=G)):W.push(z)}return W},K1=new Map;function y0(Z){var Y=K1.get(this);return Y||(Y=new Map,K1.set(this,Y)),(Y=q1(this,Y.get(Z)||(Y.set(Z,Y=function(O){for(var W,G,Q=1,K="",z="",N=[0],q=function(X){Q===1&&(X||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,X,K):Q===3&&(X||K)?(N.push(3,X,K),Q=2):Q===2&&K==="..."&&X?N.push(4,X,0):Q===2&&K&&!X?N.push(5,0,!0,K):Q>=5&&((K||!X&&Q===5)&&(N.push(Q,0,K,G),Q=6),X&&(N.push(Q,X,0,G),Q=6)),K=""},$=0;$<O.length;$++){$&&(Q===1&&q(),q($));for(var P=0;P<O[$].length;P++)W=O[$][P],Q===1?W==="<"?(q(),N=[N],Q=3):K+=W:Q===4?K==="--"&&W===">"?(Q=1,K=""):K=W+K[0]:z?W===z?z="":K+=W:W==='"'||W==="'"?z=W:W===">"?(q(),Q=1):Q&&(W==="="?(Q=5,G=K,K=""):W==="/"&&(Q<5||O[$][P+1]===">")?(q(),Q===3&&(N=N[0]),Q=N,(N=N[0]).push(2,0,Q),Q=0):W===" "||W==="\t"||W===`
`||W==="\r"?(q(),Q=2):K+=W),Q===3&&K==="!--"&&(Q=4,N=N[0])}return q(),N}(Z)),Y),arguments,[])).length>1?Y:Y[0]}var J=y0.bind(H0);async function y(Z,Y){let O=await fetch(`/api${Z}`,{credentials:"same-origin",headers:{"Content-Type":"application/json",...Y?.headers??{}},...Y});if(!O.ok){let W=await O.json().catch(()=>({error:O.statusText}));throw Error(W.error||`HTTP ${O.status}`)}return O.json()}function E1(){let[Z,Y]=F([]),[O,W]=F(null),[G,Q]=F("list"),[K,z]=F(null),[N,q]=F(!0),$=Y0(async()=>{try{let H=await y("/agents");Y(H.agents||[])}catch(H){console.error("Failed to load agents:",H)}},[]),P=Y0(async(H)=>{if(!confirm(`Remove "${H.name}"? This deletes its conversation history too.`))return;try{await y(`/agents/${H.id}`,{method:"DELETE"}),W((V)=>{if(V?.id===H.id)return Q("list"),null;return V}),await $()}catch(V){alert(`Failed to remove agent: ${V.message}`)}},[$]);a(()=>{(async()=>{try{let H=await y("/auth/me");z(H.user)}catch{}await $(),q(!1)})()},[]);let X=(H)=>({style:{...H?Object.fromEntries(H.split(";").filter(Boolean).map((V)=>{let[T,D]=V.trim().split(":");return[T.replace(/-([a-z])/g,(R,U)=>U.toUpperCase()),D.trim()]})):{}}});if(N)return J`<div style=${{padding:"2rem",color:"var(--text-dim)"}}>Loading…</div>`;return J`
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
                onClick=${(V)=>{V.stopPropagation(),P(H)}}
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
        ${G==="add"&&J`<${x1} onAdded=${(H)=>{$(),W(H),Q("chat")}} />`}
        ${G==="chat"&&O&&J`<${j1} agent=${O} onRefresh=${$} onDelete=${()=>P(O)} />`}
        ${G==="jobs"&&J`<${C1} agents=${Z} />`}
        ${G==="list"&&J`<${k1} />`}
      </main>
    </div>
  `}function k1(){return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-dim)"}}>
      <div style=${{fontSize:"3rem",marginBottom:"1rem"}}>🎵</div>
      <p style=${{fontSize:"1rem"}}>Select an agent or add a new one to get started</p>
      <p style=${{fontSize:"0.8rem",marginTop:"0.5rem",color:"var(--text-dimmer)"}}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `}var y1={queued:"Queued",provisioning:"Provisioning container…",cloning:"Cloning repo…",running:"Bot is working…",patching:"Applying patch…",opening_pr:"Opening PR…",done:"Done",failed:"Failed"};function C1({agents:Z}){let[Y,O]=F(null),[W,G]=F([]),[Q,K]=F([]),[z,N]=F(""),[q,$]=F(""),[P,X]=F(""),[H,V]=F(!1),[T,D]=F(""),[R,U]=F(null),C=(Z||[]).filter((B)=>B.auth_state==="connected"),v=Y0(async()=>{try{let B=await y("/jobs");K(B.jobs||[])}catch(B){console.error("Failed to load jobs:",B)}},[]);a(()=>{(async()=>{try{let B=await y("/github/status");if(O(B),B.connected){let j=await y("/github/repos");G(j.repos||[])}}catch(B){D(B.message)}await v()})()},[]),a(()=>{if(!Q.some((m)=>!["done","failed"].includes(m.status)))return;let j=setInterval(v,3000);return()=>clearInterval(j)},[Q,v]);async function w(B){if(B?.preventDefault(),!z||!q||!P.trim()||H)return;V(!0),D("");try{let j=await y("/jobs",{method:"POST",body:JSON.stringify({agent_id:z,repo:q,instruction:P.trim()})});K((m)=>[j.job,...m]),X("")}catch(j){D(j.message)}finally{V(!1)}}return J`
    <div style=${{maxWidth:"760px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"0.25rem"}}>🚀 Jobs</h2>
      <p style=${{fontSize:"0.8rem",color:"var(--text-dim)",marginBottom:"1.5rem"}}>
        Pick a repo and a bot, describe what to do, and orchestral spins up a fresh container,
        asks the bot for a patch, and opens a pull request.
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

        <form onSubmit=${w} style=${{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"}}>
          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Repository</label>
            <select value=${q} onChange=${(B)=>$(B.target.value)} style=${{...r}}>
              <option value="">Select a repo…</option>
              ${W.map((B)=>J`<option key=${B.full_name} value=${B.full_name}>${B.full_name}${B.private?" \uD83D\uDD12":""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Bot</label>
            <select value=${z} onChange=${(B)=>N(B.target.value)} style=${{...r}}>
              <option value="">Select a bot…</option>
              ${C.map((B)=>J`<option key=${B.id} value=${B.id}>${B.name}</option>`)}
            </select>
            ${C.length===0&&J`<p style=${{fontSize:"0.7rem",color:"var(--text-dimmer)",marginTop:"0.3rem"}}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>Command</label>
            <textarea
              value=${P}
              onInput=${(B)=>X(B.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{...r,resize:"vertical",fontFamily:"inherit"}}
            />
          </div>

          ${T&&J`<div style=${{color:"var(--danger)",fontSize:"0.8rem"}}>${T}</div>`}

          <button type="submit" disabled=${!z||!q||!P.trim()||H} style=${{alignSelf:"flex-start",padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!z||!q||!P.trim()||H?0.5:1}}>
            ${H?"Starting…":"▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{fontSize:"0.95rem",fontWeight:700,marginBottom:"0.75rem"}}>Recent jobs</h3>
      ${Q.length===0&&J`<p style=${{fontSize:"0.8rem",color:"var(--text-dimmer)"}}>No jobs yet.</p>`}
      <div style=${{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        ${Q.map((B)=>J`
          <div key=${B.id} style=${{border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.75rem 1rem",background:"var(--bg-card)"}}>
            <div style=${{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer"}}
                 onClick=${()=>U(R===B.id?null:B.id)}>
              <span style=${{fontSize:"0.7rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"999px",background:B.status==="done"?"rgba(34,197,94,0.15)":B.status==="failed"?"rgba(239,68,68,0.15)":"rgba(99,102,241,0.15)",color:B.status==="done"?"var(--success)":B.status==="failed"?"var(--danger)":"var(--accent)"}}>
                ${y1[B.status]||B.status}
              </span>
              <span style=${{fontSize:"0.85rem",fontWeight:600,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                ${B.repo}: ${B.instruction}
              </span>
              ${B.pr_url&&J`
                <a href=${B.pr_url} target="_blank" onClick=${(j)=>j.stopPropagation()} style=${{fontSize:"0.75rem",color:"var(--accent)"}}>
                  View PR →
                </a>
              `}
            </div>
            ${R===B.id&&J`
              <pre style=${{marginTop:"0.75rem",padding:"0.75rem",background:"var(--bg)",borderRadius:"8px",fontSize:"0.7rem",color:"var(--text-dim)",whiteSpace:"pre-wrap",maxHeight:"300px",overflowY:"auto"}}>${B.log||"(no log yet)"}${B.error?`

Error: ${B.error}`:""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `}function x1({onAdded:Z}){let[Y,O]=F(""),[W,G]=F(""),[Q,K]=F(""),[z,N]=F(""),[q,$]=F(!1),[P,X]=F(null);async function H(){N(""),X(null),$(!0);try{let V=await y("/agents",{method:"POST",body:JSON.stringify({card_url:Y,oidc_client_id:W,oidc_client_secret:Q})});Z(V.agent)}catch(V){N(V.message)}finally{$(!1)}}return J`
    <div style=${{maxWidth:"640px",margin:"0 auto",padding:"2rem",overflowY:"auto",flex:1}}>
      <h2 style=${{fontSize:"1.25rem",fontWeight:700,marginBottom:"1.5rem"}}>Add A2A Agent</h2>

      <div style=${{marginBottom:"1.5rem"}}>
        <label style=${{display:"block",fontSize:"0.85rem",color:"var(--text-dim)",marginBottom:"0.4rem"}}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${Y}
          onInput=${(V)=>O(V.target.value)}
          placeholder="https://agent.example.com"
          style=${r}
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
          <input type="text" value=${W} onInput=${(V)=>G(V.target.value)} style=${r} />
        </div>
      </details>

      ${z&&J`<div style=${{padding:"0.75rem",background:"rgba(239,68,68,0.1)",border:"1px solid var(--danger)",borderRadius:"var(--radius)",color:"var(--danger)",fontSize:"0.85rem",marginBottom:"1rem"}}>
        ${z}
      </div>`}

      <button
        onClick=${H}
        disabled=${!Y||q}
        style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!Y||q?0.5:1}}
      >
        ${q?"Connecting…":"Add Agent"}
      </button>
    </div>
  `}function j1({agent:Z,onRefresh:Y,onDelete:O}){let[W,G]=F([]),[Q,K]=F(""),[z,N]=F(!1),[q,$]=F(null),[P,X]=F([]),[H,V]=F(""),[T,D]=F(Z),[R,U]=F(!1),C=L0(null),v=L0(null),w=L0(0);a(()=>{y(`/agents/${Z.id}`).then((L)=>D(L)).catch(()=>{})},[Z.id]);let B=Y0(async(L)=>{let _=++w.current;$(L);let x=await y(`/conversations/${L}/messages`);if(_!==w.current)return;G(x.messages||[])},[]);a(()=>{(async()=>{try{let _=(await y(`/agents/${Z.id}/conversations`)).conversations||[];if(X(_),_.length>0)await B(_[0].id);else{let x=++w.current,A=await y(`/agents/${Z.id}/conversations`,{method:"POST"});if(x!==w.current)return;X([A.conversation]),$(A.conversation.id),G([])}}catch(L){V(L.message)}})()},[Z.id]);async function j(){V("");let L=++w.current;try{let _=await y(`/agents/${Z.id}/conversations`,{method:"POST"});if(L!==w.current)return;X((x)=>[_.conversation,...x]),$(_.conversation.id),G([]),K("")}catch(_){if(L===w.current)V(_.message)}}async function m(L){if(L===q)return;V("");try{await B(L)}catch(_){V(_.message)}}a(()=>{C.current?.scrollIntoView({behavior:"smooth"})},[W]);async function s(L){if(L?.preventDefault(),!Q.trim()||!q||z)return;let _=Q.trim(),x=q;K(""),N(!0),V("");let A=++w.current;G((f)=>[...f,{role:"user",text:_,created_at:Date.now()/1000,id:"temp-"+Date.now()}]),G((f)=>[...f,{role:"agent",text:"",created_at:Date.now()/1000,id:"temp-agent-"+Date.now(),streaming:!0}]);try{if(T?.agent_card?.capabilities?.streaming??!0)await S(_,x,A);else await g(_,x,A)}catch(f){if(A===w.current){if(V(f.message),f.message.includes("Authentication"))Y();G((J0)=>J0.filter((l)=>!l.streaming))}}finally{N(!1)}}async function S(L,_,x){let A=await fetch(`/api/conversations/${_}/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:L}),credentials:"same-origin"});if(!A.ok){let u=await A.json().catch(()=>({error:A.statusText}));throw Error(u.error||`HTTP ${A.status}`)}let f=A.body.getReader(),J0=new TextDecoder,l="",j0="";while(!0){let{done:u,value:B1}=await f.read();if(u)break;l+=J0.decode(B1,{stream:!0});let A0=l.split(`

`);l=A0.pop()||"";for(let L1 of A0)for(let I0 of L1.split(`
`))if(I0.startsWith("data: "))try{let I=JSON.parse(I0.slice(6));if(I.error)throw Error(I.error);let i="";if(I.task?.status?.message?.parts)i=I.task.status.message.parts.map((d)=>d.text||"").join("");else if(I.message?.parts)i=I.message.parts.map((d)=>d.text||"").join("");else if(I.artifactUpdate?.artifact?.parts)i=I.artifactUpdate.artifact.parts.map((d)=>d.text||"").join("");else if(I.statusUpdate?.status?.message?.parts)i=I.statusUpdate.status.message.parts.map((d)=>d.text||"").join("");if(i){if(j0+=i,x===w.current)G((d)=>d.map((P0)=>P0.streaming?{...P0,text:j0}:P0))}}catch(I){if(I.message)throw I}}if(x===w.current){let u=await y(`/conversations/${_}/messages`);if(x===w.current)G(u.messages||[])}}async function g(L,_,x){if(await y(`/conversations/${_}/send`,{method:"POST",body:JSON.stringify({text:L})}),x!==w.current)return;let A=await y(`/conversations/${_}/messages`);if(x===w.current)G(A.messages||[])}let[V0,C0]=F(!1),[Z0,z1]=F(""),[x0,H1]=F("");async function N1(){C0(!0),V("");try{await y(`/agents/${Z.id}/credentials`,{method:"POST",body:JSON.stringify({client_id:Z0,client_secret:x0})}),window.location.href=`/api/agents/${Z.id}/connect`}catch(L){V(L.message)}finally{C0(!1)}}let b=T?.auth_state!=="connected",$1=typeof window<"u"?`${window.location.origin}/api/agent/oidc/callback`:"";return J`
    <div style=${{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      ${""}
      <header style=${{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
        ${T?.icon_url?J`<img src=${T.icon_url} style=${{width:"2rem",height:"2rem",borderRadius:"50%"}} />`:J`<span style=${{fontSize:"1.5rem"}}>🤖</span>`}
        <div style=${{flex:1}}>
          <h2 style=${{fontSize:"1rem",fontWeight:600}}>${T?.name||Z.name}</h2>
          ${T?.description&&J`<p style=${{fontSize:"0.75rem",color:"var(--text-dim)"}}>${T.description}</p>`}
        </div>
        ${P.length>1&&J`
          <select
            value=${q}
            onChange=${(L)=>m(L.target.value)}
            style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.75rem",outline:"none"}}
          >
            ${P.map((L,_)=>J`
              <option key=${L.id} value=${L.id}>
                ${new Date(L.created_at*1000).toLocaleString()} ${_===0?"(latest)":""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${j}
          title="Start a new conversation with this agent"
          style=${{padding:"0.4rem 0.75rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
        >
          + New Conversation
        </button>
        <div style=${{padding:"0.25rem 0.6rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:600,background:b?"rgba(245,158,11,0.1)":"rgba(34,197,94,0.1)",color:b?"var(--warning)":"var(--success)",border:`1px solid ${b?"var(--warning)":"var(--success)"}`}}>
          ${b?"Needs Auth":"Connected"}
        </div>
        <button
          onClick=${()=>U((L)=>!L)}
          title="Agent info"
          style=${{padding:"0.4rem 0.6rem",borderRadius:"var(--radius)",background:R?"var(--bg-hover)":"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text-dim)",cursor:"pointer",fontWeight:600,fontSize:"0.75rem"}}
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

      ${R&&J`
        <div style=${{padding:"0.9rem 1.5rem",borderBottom:"1px solid var(--border)",fontSize:"0.78rem",color:"var(--text-dim)",display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          ${[["Card URL",T?.card_url],["Endpoint URL",T?.agent_card?.url],["Protocol version",T?.agent_card?.protocolVersion],["Transport",T?.agent_card?.preferredTransport],["Agent version",T?.agent_card?.version],["Security",T?.security_type],["Streaming",T?.agent_card?.capabilities?.streaming?"yes":"no"],["Skills",(T?.agent_card?.skills||[]).map((L)=>L.name||L.id).filter(Boolean).join(", ")||"—"],["Added",T?.created_at?new Date(T.created_at*1000).toLocaleString():void 0]].filter(([,L])=>L!==void 0&&L!==null&&L!=="").map(([L,_])=>J`
            <div key=${L} style=${{display:"flex",gap:"0.6rem"}}>
              <span style=${{minWidth:"110px",flexShrink:0,color:"var(--text-dimmer)"}}>${L}</span>
              <span style=${{color:"var(--text)",wordBreak:"break-all"}}>${_}</span>
            </div>
          `)}
        </div>
      `}

      ${b&&J`
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
              value=${Z0}
              onInput=${(L)=>z1(L.target.value)}
              placeholder="Pocket ID client ID"
              style=${{...r,width:"100%"}}
            />
          </div>
          <div style=${{marginBottom:"0.75rem"}}>
            <label style=${{display:"block",fontSize:"0.75rem",color:"var(--text-dim)",marginBottom:"0.3rem"}}>
              Client Secret
            </label>
            <input
              type="password"
              value=${x0}
              onInput=${(L)=>H1(L.target.value)}
              placeholder="Pocket ID client secret"
              style=${{...r,width:"100%"}}
            />
          </div>
          <div style=${{padding:"0.6rem",background:"var(--bg)",borderRadius:"8px",marginBottom:"1rem",fontSize:"0.75rem",color:"var(--text-dim)"}}>
            <strong style=${{color:"var(--warning)"}}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
            <br/>
            <code style=${{color:"var(--accent)",fontSize:"0.7rem",wordBreak:"break-all"}}>${$1}</code>
            <br/>
            <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{color:"var(--accent)",fontSize:"0.7rem"}}>
              → Pocket ID admin
            </a>
          </div>
          <button onClick=${N1} disabled=${!Z0||V0} style=${{padding:"0.6rem 1.5rem",borderRadius:"var(--radius)",background:"var(--accent)",color:"white",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.9rem",opacity:!Z0||V0?0.5:1}}>
            ${V0?"Redirecting…":"\uD83D\uDD11 Connect"}
          </button>
        </div>
      `}

      ${""}
      <div style=${{flex:1,overflowY:"auto",padding:"1.5rem"}}>
        <div style=${{maxWidth:"720px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          ${W.length===0&&!b&&J`
            <div style=${{textAlign:"center",padding:"3rem",color:"var(--text-dimmer)"}}>
              <p style=${{fontSize:"0.9rem"}}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${W.map((L)=>J`
            <div key=${L.id} style=${{maxWidth:"85%",alignSelf:L.role==="user"?"flex-end":"flex-start",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",fontSize:"0.875rem",lineHeight:1.5,background:L.role==="user"?"var(--accent)":"var(--bg-card)",color:L.role==="user"?"white":"var(--text)",whiteSpace:"pre-wrap"}}>
              ${L.text||(L.streaming?"…":"")}
            </div>
          `)}
          <div ref=${C} />
        </div>
      </div>

      ${H&&J`
        <div style=${{padding:"0.5rem 1.5rem",color:"var(--danger)",fontSize:"0.8rem"}}>
          ${H}
        </div>
      `}

      ${""}
      <footer style=${{borderTop:"1px solid var(--border)",padding:"1rem 1.5rem"}}>
        <form onSubmit=${s} style=${{maxWidth:"720px",margin:"0 auto",display:"flex",gap:"0.5rem"}}>
          <input
            type="text"
            value=${Q}
            onInput=${(L)=>K(L.target.value)}
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
  `}var r={width:"100%",padding:"0.6rem 0.9rem",borderRadius:"var(--radius)",background:"var(--bg-card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:"0.875rem",outline:"none"};$0(J`<${E1} />`,document.getElementById("root"));
